---
title:  In-process Calling of SOLIDWORKS Add-in API from External Process Application
caption: In-process Calling from External Process Application
---
 Framework for calling Add-in API in-process for maximum performance from standalone applications or macros
image: macro-solution-tree.png
labels: [Add-in API, Asynchronous, Performance, In-process]
sidebar_position: 4
---
One of the main limitations of standalone automation COM-based applications (including SOLIDWORKS) is performance.

When calling hundreds of API calls from an external process application, the performance can be hundreds or even thousands of times slower compared to in-process calling.

The exact same limitations apply when calling the Add-in API in any of the following ways: [via Add-in object](/docs/codestack/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/via-add-in-object/), [via Running Object Table](/docs/codestack/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/via-rot/), etc.

It can be mistakenly assumed that all SOLIDWORKS API calls within the add-in are in-process calls since there is only one API function called from the standalone application. However, in reality, all SOLIDWORKS API calls within the SOLIDWORKS add-in are called as external process calls. This means that calling the add-in API will result in the same performance loss as calling the standalone application.

However, there is a way to maximize performance and achieve the same results as in-process calling by calling this method from an external process application.

The following add-in example implements a function to index all faces of the active assembly document.

The add-in is developed using the [SwEx.AddIn Framework](/docs/codestack/labs/solidworks/swex/add-in/), but the same technique applies to add-ins built using different approaches.

It traverses all components, all bodies, and all faces and outputs some information about the faces in the trace window.

The add-in has a menu command that allows calling its function in-process.

![Add-in menu to call the add-in function](face-indexer-menu.png){ width=350 }

A message box with the results will be displayed when finished.

![Result of calling the add-in command](add-in-result.png){ width=300 }

## FaceIndexer Add-in
This is the main project implementing the SOLIDWORKS add-in and API object interfaces.

### FaceIndexerAddIn.cs

The add-in class

~~~ cs
using CodeStack.SwEx.AddIn;
using CodeStack.SwEx.AddIn.Attributes;
using SolidWorks.Interop.sldworks;
using SolidWorks.Interop.swconst;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.InteropServices;

namespace CodeStack.FaceIndexer
{
    [AutoRegister("FaceIndexer")]
    [ComVisible(true)]
    [Guid("D85E0EEB-87AA-48BE-8C8A-DFD71CF12525")]
    [ProgId("CodeStack.FaceIndexer")]
    public class FaceIndexerAddIn : SwAddInEx, IFaceIndexerAddIn
    {
        private readonly List<KeyValuePair<IAssemblyDoc, IFaceIndexerCallback>> m_ProcessingQueue
            = new List<KeyValuePair<IAssemblyDoc, IFaceIndexerCallback>>();

        [SwEx.Common.Attributes.Title("Face Indexer")]
        public enum Commands_e
        {
            [CommandItemInfo(SwEx.AddIn.Enums.swWorkspaceTypes_e.Assembly)]
            IndexFaces
        }
        
        public override bool OnConnect()
        {
            AddCommandGroup<Commands_e>(OnButtonClick);
            (App as SldWorks).OnIdleNotify += OnIdleNotify;
            return true;
        }

        public void BeginIndexFaces(IAssemblyDoc assm, IFaceIndexerCallback callback)
        {
            m_ProcessingQueue.Add(new KeyValuePair<IAssemblyDoc, IFaceIndexerCallback>(assm, callback));
        }

        private void OnButtonClick(Commands_e cmd)
        {
            switch (cmd)
            {
                case Commands_e.IndexFaces:        
                    IndexFaces(App.IActiveDoc2 as IAssemblyDoc);
                    break;
            }
        }

        public int IndexFaces(IAssemblyDoc assm)
        {
            var count = 0;

            var start = DateTime.Now;
            {
                var comps = assm.GetComponents(false) as object[];

                if (comps != null)
                {
                    foreach (IComponent2 comp in comps)
                    {
                        object bodyInfo;
                        var bodies = comp.GetBodies3((int)swBodyType_e.swAllBodies, out bodyInfo) as object[];

                        if (bodies != null)
                        {
                            foreach (IBody2 body in bodies)
                            {
                                var faces = body.GetFaces() as object[];

                                if (faces != null)
                                {
                                    foreach (IFace2 face in faces)
                                    {
                                        var surf = face.IGetSurface();
                                        var type = (swSurfaceTypes_e)surf.Identity();
                                        count++;

                                        Trace.WriteLine($"Area: {face.GetArea()}. Type: {type}");
                                    }
                                }
                            }
                        }
                    }
                }
            }
            App.SendMsgToUser($"{count} face(s) of {(assm as IModelDoc2).GetTitle()} indexed in {DateTime.Now.Subtract(start).TotalSeconds} seconds");

            return count;
        }

        private int OnIdleNotify()
        {
            const int S_OK = 0;

            foreach (var assmInQueue in m_ProcessingQueue)
            {
                var count = IndexFaces(assmInQueue.Key);

                assmInQueue.Value?.IndexFacesCompleted(assmInQueue.Key, count);
            }

            m_ProcessingQueue.Clear();

            return S_OK;
        }
    }
}

~~~



### FaceIndexerAddInApi.cs

API object definitions.

~~~ cs
using SolidWorks.Interop.sldworks;
using System.Runtime.InteropServices;

namespace CodeStack.FaceIndexer
{
    [ComVisible(true)]
    public interface IFaceIndexerCallback
    {
        void IndexFacesCompleted(IAssemblyDoc assm, int count);
    }

    [ComVisible(true)]
    public interface IFaceIndexerAddIn
    {
        void BeginIndexFaces(IAssemblyDoc assm, IFaceIndexerCallback callback);
        int IndexFaces(IAssemblyDoc assm);
    }
}

~~~



This add-in exposes an API to third-party. The *IndexFaces* method is an external process API call and can be used with the following code snippet:

~~~ cs
var count = addIn.IndexFaces(assm);
Console.WriteLine($"Indexed {count} faces");
~~~

The performance results in almost a hundred times slower:

![Result of calling the add-in API from a standalone application](stand-alone-result.png){ width=300 }

Using the [ISldWorks::CommandInProgress](https://help.solidworks.com/2016/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISldWorks~CommandInProgress.html) SOLIDWORKS API property can slightly improve performance, but the performance is still over 10 times slower compared to the baseline result.

~~~ cs
app.CommandInProgress = true;
var count = addIn.IndexFaces(assm);
app.CommandInProgress = false;
Console.WriteLine($"Indexed {count} faces");
~~~

The following table is a comparison of the results. The results may vary depending on the size of the assembly and the API calls used.

| Environment                     | Result (seconds) | Ratio (%) |
|---------------------------------|-----------------|----------|
| Add-in in-process calling       | 2.63            | 1        |
| Standalone application          | 241.95          | 92       |
| Standalone application in-command | 36.14           | 13.74    |
| VBA macro                       | 2.57            | 0.98     |
| VBA macro in-process calling    | 2.20            | 0.84     |
| Standalone application in-process calling | 1.77            | 0.67     |

The best performance can be achieved when calling the add-in API from a standalone application in-process. This can be achieved by providing a deferred call to index the faces. This call puts the request into a queue and immediately returns control. The request is then processed in the add-in. The queue can be processed using the [OnIdle](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dsldworksevents_onidlenotifyeventhandler.html) SOLIDWORKS API notification. Since this event is processed in-process, the actual API calls will also be processed in-process.

It is also important to register a callback function that the add-in can call to notify the standalone application that the operation has been completed.

Here is an example that demonstrates how a standalone application can call the add-in API in-process.

## Standalone Application

A C# application that calls the add-in function.

### FaceIndexerCallback.cs

Implementation of the callback class that notifies the standalone application when the in-process call is completed. This must be registered as a COM object.

~~~ cs
using CodeStack.FaceIndexer;
using SolidWorks.Interop.sldworks;
using System;
using System.Runtime.InteropServices;

namespace StandAlone
{
    [ComVisible(true)]
    public class FaceIndexerCallback : IFaceIndexerCallback
    {
        public void IndexFacesCompleted(IAssemblyDoc assm, int count)
        {
            Console.WriteLine($"Indexed {count} faces for '{(assm as IModelDoc2).GetTitle()}' in the standalone application");
        }
    }
}

~~~



### Program.cs

A console application that calls the add-in API in-process and waits for the result in the callback function.

~~~ cs
using CodeStack.FaceIndexer;
using SolidWorks.Interop.sldworks;
using System;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.Runtime.InteropServices.ComTypes;

namespace StandAlone
{
    class Program
    {
        [DllImport("ole32.dll")]
        private static extern int CreateBindCtx(uint reserved, out IBindCtx ppbc);
        
        static void Main(string[] args)
        {
            var app = GetSwAppFromProcess(Process.GetProcessesByName("SLDWORKS").First().Id);

            var addIn = app.GetAddInObject("CodeStack.FaceIndexer") as IFaceIndexerAddIn;

            var assm = app.IActiveDoc2 as IAssemblyDoc;
            
            addIn.BeginIndexFaces(app.IActiveDoc2 as IAssemblyDoc, new FaceIndexerCallback());
            
            Console.ReadLine();
        }

        private static ISldWorks GetSwAppFromProcess(int processId)
        {
            var monikerName = "SolidWorks_PID_" + processId.ToString();

            IBindCtx context = null;
            IRunningObjectTable rot = null;
            IEnumMoniker monikers = null;

            try
            {
                CreateBindCtx(0, out context);

                context.GetRunningObjectTable(out rot);
                rot.EnumRunning(out monikers);

                var moniker = new IMoniker[1];

                while (monikers.Next(1, moniker, IntPtr.Zero) == 0)
                {
                    var curMoniker = moniker.First();

                    string name = null;

                    if (curMoniker != null)
                    {
                        try
                        {
                            curMoniker.GetDisplayName(context, null, out name);
                        }
                        catch (UnauthorizedAccessException)
                        {
                        }
                    }

                    if (string.Equals(monikerName,
                        name, StringComparison.CurrentCultureIgnoreCase))
                    {
                        object app;
                        rot.GetObject(curMoniker, out app);
                        return app as ISldWorks;
                    }
                }
            }
            finally
            {
                if (monikers != null)
                {
                    Marshal.ReleaseComObject(monikers);
                }

                if (rot != null)
                {
                    Marshal.ReleaseComObject(rot);
                }

                if (context != null)
                {
                    Marshal.ReleaseComObject(context);
                }
            }

            return null;
        }
    }
}

~~~



It can also be called from a macro or any other type of application.

## VBA Macro

A VBA macro that calls the add-in API. In this example, a user form is used to keep the macro running until the callback function is called.

![Project tree in the VBA macro](macro-solution-tree.png){ width=250 }

### Macro Module

The main module that launches the user form

~~~ vb
Sub main()

    UserForm1.Show vbModeless
    
End Sub

~~~



### FaceIndexerCallback Class Module

Implementation of the callback class that receives the completion notification

~~~ vb
Implements IFaceIndexerCallback

Private Sub IFaceIndexerCallback_IndexFacesCompleted(ByVal assm As SldWorks.IAssemblyDoc, ByVal count As Long)
    Debug.Print "Indexed " & count & " faces"
End Sub
~~~



### Form1 User Form

The user form that connects to the add-in and calls its API

~~~ vb
Dim swFaceIndexer As IFaceIndexerAddIn

Private Sub UserForm_Initialize()
    
    Dim swApp As SldWorks.SldWorks
    
    Set swApp = Application.SldWorks
    Set swFaceIndexer = swApp.GetAddInObject("CodeStack.FaceIndexer")
    
    Dim swAssy As SldWorks.AssemblyDoc
    Set swAssy = swApp.ActiveDoc
    
    swFaceIndexer.BeginIndexFaces swAssy, New FaceIndexerCallback
    
End Sub
~~~



The source code can be downloaded from [GitHub](https://github.com/codestackdev/solidworks-api-examples/tree/master/swex/add-in/face-indexer)