---
title: 使用SOLIDWORKS API处理自定义属性修改事件（添加、删除、更改）
caption: 处理修改事件
description: 使用SOLIDWORKS API处理与修改通用或配置特定自定义属性相关的所有事件。解决了在用户界面中修改自定义属性时未触发AddCustomPropertyNotify、DeleteCustomPropertyNotify、ChangeCustomPropertyNotify事件的问题。
image: custom-properties-events-console.png
labels: [自定义属性, 通知]
---

SOLIDWORKS API提供了通知来处理自定义属性的修改（如添加、删除或更改）。这些事件（AddCustomPropertyNotify、DeleteCustomPropertyNotify、ChangeCustomPropertyNotify）适用于零件、装配体和图纸，并支持通用和配置特定的自定义属性。然而，自从SOLIDWORKS 2018以来，这些事件不再适用于用户在用户界面中修改的自定义属性，只支持通过SOLIDWORKS API修改的自定义属性。

下面的代码示例提供了解决此问题的方法，并且可以处理无论以何种方式修改自定义属性。

* 创建控制台应用程序并添加下面的代码
* 运行控制台
* 修改自定义属性。修改结果将输出到控制台窗口：

![将属性修改信息输出到控制台](custom-properties-events-console.png)

## Program.cs

程序的入口点

~~~ cs
using SolidWorks.Interop.sldworks;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;

namespace HandlePrpsEvents
{
    class Program
    {
        static void Main(string[] args)
        {
            var app = Activator.CreateInstance(Type.GetTypeFromProgID("SldWorks.Application")) as ISldWorks;
            app.Visible = true;

            IModelDoc2 model = null;

            do
            {
                model = app.IActiveDoc2;
                if (model == null)
                {
                    Console.WriteLine("打开模型并按任意键继续");
                    Console.ReadLine();
                }
            } while (model == null);


            var handler = new CustomPropertiesEventsHandler(app, model);
            handler.PropertyChanged += OnPropertyChanged;


            Console.ReadLine();

            handler.Dispose();
        }

        private static void OnPropertyChanged(PropertyChangeAction_e type, string name, string conf, string value)
        {
            Console.WriteLine($"属性 {name}；操作：{type}；配置：{conf}；值：{value}");
        }
    }
}

~~~



## CustomPropertiesEventsHandler.cs

~~~ cs
using SolidWorks.Interop.sldworks;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;

namespace HandlePrpsEvents
{
    public enum PropertyChangeAction_e
    {
        添加,
        删除,
        修改
    }

    public class CustomPropertiesEventsHandler : IDisposable
    {
        private class PropertiesList : Dictionary<string, string>
        {
            internal PropertiesList(ICustomPropertyManager prpsMgr) : base(StringComparer.CurrentCultureIgnoreCase)
            {
                var prpNames = prpsMgr.GetNames() as string[];

                if (prpNames != null)
                {
                    foreach (var prpName in prpNames)
                    {
                        string val;
                        string resVal;
                        bool wasRes;
                        prpsMgr.Get5(prpName, true, out val, out resVal, out wasRes);
                        Add(prpName, val);
                    }
                }
            }
        }

        private class PropertiesSet : Dictionary<string, PropertiesList>
        {
            internal PropertiesSet(IModelDoc2 model) : base(StringComparer.CurrentCultureIgnoreCase)
            {
                Add("", new PropertiesList(model.Extension.CustomPropertyManager[""]));

                var confNames = model.GetConfigurationNames() as string[];

                if (confNames != null)
                {
                    foreach (var confName in confNames)
                    {
                        Add(confName, new PropertiesList(model.Extension.CustomPropertyManager[confName]));
                    }
                }
            }
        }

        public delegate void PropertyChangedDelegate(PropertyChangeAction_e type, string name, string conf, string value);

        public event PropertyChangedDelegate PropertyChanged;

        #region WinAPI

        private delegate bool EnumWindowProc(IntPtr handle, IntPtr lParam);

        [DllImport("user32.dll", CharSet = CharSet.Auto, SetLastError = true)]
        private static extern int GetWindowText(IntPtr hWnd, StringBuilder text, int count);

        [DllImport("user32.dll", CharSet = CharSet.Auto, SetLastError = true)]
        private static extern int GetWindowTextLength(IntPtr hWnd);

        [DllImport("user32.dll", SetLastError = true)]
        private static extern bool EnumThreadWindows(uint threadId, EnumWindowProc enumProc, IntPtr lParam);

        [DllImport("user32.dll")]
        private static extern int GetClassName(IntPtr hWnd, StringBuilder lpClassName, int nMaxCount);

        [DllImport("user32.dll")]
        [return: MarshalAs(UnmanagedType.Bool)]
        private static extern bool IsWindow(IntPtr hWnd);

        #endregion

        private readonly ISldWorks m_App;
        private readonly IModelDoc2 m_Model;

        private IntPtr m_CurrentSummaryHandle;

        private PropertiesSet m_CurPrpsSet;

        public CustomPropertiesEventsHandler(ISldWorks app, IModelDoc2 model)
        {
            m_App = app;
            m_Model = model;

            (m_App as SldWorks).CommandCloseNotify += OnCommandCloseNotify;
            (m_App as SldWorks).OnIdleNotify += OnIdleNotify;

            if (model is PartDoc)
            {
                (model as PartDoc).AddCustomPropertyNotify += OnAddCustomPropertyNotify;
                (model as PartDoc).DeleteCustomPropertyNotify += OnDeleteCustomPropertyNotify;
                (model as PartDoc).ChangeCustomPropertyNotify += OnChangeCustomPropertyNotify;
            }
            else if (model is AssemblyDoc)
            {
                (model as AssemblyDoc).AddCustomPropertyNotify += OnAddCustomPropertyNotify;
                (model as AssemblyDoc).DeleteCustomPropertyNotify += OnDeleteCustomPropertyNotify;
                (model as AssemblyDoc).ChangeCustomPropertyNotify += OnChangeCustomPropertyNotify;
            }
            else if (model is DrawingDoc)
            {
                (model as DrawingDoc).AddCustomPropertyNotify += OnAddCustomPropertyNotify;
                (model as DrawingDoc).DeleteCustomPropertyNotify += OnDeleteCustomPropertyNotify;
                (model as DrawingDoc).ChangeCustomPropertyNotify += OnChangeCustomPropertyNotify;
            }
            else
            {
                throw new NotSupportedException();
            }

            CaptureCurrentProperties();
        }

        private int OnIdleNotify()
        {
            if (m_CurrentSummaryHandle != IntPtr.Zero)
            {
                if (!IsWindow(m_CurrentSummaryHandle))
                {
                    FindDifferences(m_CurPrpsSet, new PropertiesSet(m_Model));
                    m_CurrentSummaryHandle = IntPtr.Zero;
                    m_CurPrpsSet = null;
                }
            }

            return 0;
        }

        private void FindDifferences(PropertiesSet oldSet, PropertiesSet newSet)
        {
            foreach (var conf in oldSet.Keys)
            {
                var oldPrsList = oldSet[conf];
                var newPrsList = newSet[conf];

                var addedPrpNames = newPrsList.Keys.Except(oldPrsList.Keys);

                foreach (var newPrpName in addedPrpNames)
                {
                    PropertyChanged?.Invoke(PropertyChangeAction_e.添加, newPrpName, conf, newPrsList[newPrpName]);
                }

                var removedPrpNames = oldPrsList.Keys.Except(newPrsList.Keys);

                foreach (var deletedPrpName in removedPrpNames)
                {
                    PropertyChanged?.Invoke(PropertyChangeAction_e.删除, deletedPrpName, conf, oldPrsList[deletedPrpName]);
                }

                var commonPrpNames = oldPrsList.Keys.Intersect(newPrsList.Keys);

                foreach (var prpName in commonPrpNames)
                {
                    if (newPrsList[prpName] != oldPrsList[prpName])
                    {
                        PropertyChanged?.Invoke(PropertyChangeAction_e.修改, prpName, conf, newPrsList[prpName]);
                    }
                }
            }
        }

        private int OnAddCustomPropertyNotify(string propName, string Configuration, string Value, int valueType)
        {
            PropertyChanged?.Invoke(PropertyChangeAction_e.添加, propName, Configuration, Value);
            return 0;
        }

        private int OnDeleteCustomPropertyNotify(string propName, string Configuration, string Value, int valueType)
        {
            PropertyChanged?.Invoke(PropertyChangeAction_e.删除, propName, Configuration, Value);
            return 0;
        }

        private int OnChangeCustomPropertyNotify(string propName, string Configuration, string oldValue, string NewValue, int valueType)
        {
            PropertyChanged?.Invoke(PropertyChangeAction_e.修改, propName, Configuration, NewValue);
            return 0;
        }

        private int OnCommandCloseNotify(int Command, int reason)
        {
            const int swCommands_File_Summaryinfo = 963;

            if (Command == swCommands_File_Summaryinfo)
            {
                if (!CaptureCurrentProperties())
                {
                    throw new Exception("无法找到摘要信息对话框");
                }
            }

            return 0;
        }

        private bool CaptureCurrentProperties()
        {
            var handle = GetSummaryInfoDialogHandle();

            if (handle != IntPtr.Zero)
            {
                m_CurPrpsSet = new PropertiesSet(m_Model);
                return true;
            }
            else
            {
                return false;
            }
        }

        private bool FindSymmaryInfoDialog(IntPtr handle, IntPtr lParam)
        {
            var captionLength = GetWindowTextLength(handle) + 1;
            var caption = new StringBuilder(captionLength);

            if (GetWindowText(handle, caption, captionLength) > 0)
            {
                if (caption.ToString() == "Summary Information")
                {
                    var clsName = new StringBuilder(260);

                    GetClassName(handle, clsName, clsName.Capacity);

                    if (clsName.ToString() == "#32770")
                    {
                        m_CurrentSummaryHandle = handle;
                    }
                }
            }

            return true;
        }

        private IntPtr GetSummaryInfoDialogHandle()
        {
            m_CurrentSummaryHandle = IntPtr.Zero;

            var prc = Process.GetProcessById(m_App.GetProcessID());

            for (int i = 0; i < prc.Threads.Count; i++)
            {
                var threadId = (uint)prc.Threads[i].Id;
                EnumThreadWindows(threadId, FindSymmaryInfoDialog, IntPtr.Zero);
            }

            return m_CurrentSummaryHandle;
        }

        public void Dispose()
        {
        }
    }
}

~~~