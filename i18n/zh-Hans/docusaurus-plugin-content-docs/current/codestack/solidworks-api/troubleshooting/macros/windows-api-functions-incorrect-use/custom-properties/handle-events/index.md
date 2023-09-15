---
title:  Handling Custom Property Modification Events with SOLIDWORKS API (Add, Delete, Change)
caption: Handling Modification Events
---
 Use the SOLIDWORKS API to handle all events related to modifying common or configuration-specific custom properties. Solution to the problem where AddCustomPropertyNotify, DeleteCustomPropertyNotify, and ChangeCustomPropertyNotify events are not triggered when modifying custom properties in the user interface.
image: custom-properties-events-console.png
labels: [Custom Properties, Notifications]
---

The SOLIDWORKS API provides notifications to handle modifications to custom properties such as adding, deleting, or changing. These events (AddCustomPropertyNotify, DeleteCustomPropertyNotify, ChangeCustomPropertyNotify) are applicable to parts, assemblies, and drawings, and support both common and configuration-specific custom properties. However, since SOLIDWORKS 2018, these events are no longer triggered for custom properties modified by the user in the user interface, but only support custom properties modified from the SOLIDWORKS API.

The following code example provides a solution to this problem and can handle modifications to custom properties regardless of how they are modified.

* Create a console application and add the code below.
* Run the console.
* Modify the custom properties. The modified results will be output to the console window:

![Output property modification information to the console](custom-properties-events-console.png)

## Program.cs

The entry point of the program.

```cs
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
                    Console.WriteLine("Open a model and press any key to continue");
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
            Console.WriteLine($"Property {name}; Action: {type}; Configuration: {conf}; Value: {value}");
        }
    }
}
```

## CustomPropertiesEventsHandler.cs

```cs
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
        Add,
        Delete,
        Modify
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
                    PropertyChanged?.Invoke(PropertyChangeAction_e.Add, newPrpName, conf, newPrsList[newPrpName]);
                }

                var removedPrpNames = oldPrsList.Keys.Except(newPrsList.Keys);

                foreach (var deletedPrpName in removedPrpNames)
                {
                    PropertyChanged?.Invoke(PropertyChangeAction_e.Delete, deletedPrpName, conf, oldPrsList[deletedPrpName]);
                }

                var commonPrpNames = oldPrsList.Keys.Intersect(newPrsList.Keys);

                foreach (var prpName in commonPrpNames)
                {
                    if (newPrsList[prpName] != oldPrsList[prpName])
                    {
                        PropertyChanged?.Invoke(PropertyChangeAction_e.Modify, prpName, conf, newPrsList[prpName]);
                    }
                }
            }
        }

        private int OnAddCustomPropertyNotify(string propName, string Configuration, string Value, int valueType)
        {
            PropertyChanged?.Invoke(PropertyChangeAction_e.Add, propName, Configuration, Value);
            return 0;
        }

        private int OnDeleteCustomPropertyNotify(string propName, string Configuration, string Value, int valueType)
        {
            PropertyChanged?.Invoke(PropertyChangeAction_e.Delete, propName, Configuration, Value);
            return 0;
        }

        private int OnChangeCustomPropertyNotify(string propName, string Configuration, string oldValue, string NewValue, int valueType)
        {
            PropertyChanged?.Invoke(PropertyChangeAction_e.Modify, propName, Configuration, NewValue);
            return 0;
        }

        private int OnCommandCloseNotify(int Command, int reason)
        {
            const int swCommands_File_Summaryinfo = 963;

            if (Command == swCommands_File_Summaryinfo)
            {
                if (!CaptureCurrentProperties())
                {
                    throw new Exception("Unable to find the Summary Information dialog");
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
```