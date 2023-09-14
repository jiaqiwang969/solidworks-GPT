"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[73390],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return t?r.createElement(f,a(a({ref:n},m),{},{components:t})):r.createElement(f,a({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={title:"Handle custom properties modification events (add, delete, change) using SOLIDWORKS API",caption:"Handle Modification Events",description:"Handling all events related to the modification of general or configuration specific custom properties from the SOLIDWORKS API. Workaround for the issue when AddCustomPropertyNotify, DeleteCustomPropertyNotify, ChangeCustomPropertyNotify events are not raised",image:"custom-properties-events-console.png",labels:["custom property","notification"]},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/handle-events/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/handle-events/index",title:"Handle custom properties modification events (add, delete, change) using SOLIDWORKS API",description:"Handling all events related to the modification of general or configuration specific custom properties from the SOLIDWORKS API. Workaround for the issue when AddCustomPropertyNotify, DeleteCustomPropertyNotify, ChangeCustomPropertyNotify events are not raised",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/handle-events/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/handle-events",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/handle-events/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/handle-events/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/handle-events/index.md",tags:[],version:"current",frontMatter:{title:"Handle custom properties modification events (add, delete, change) using SOLIDWORKS API",caption:"Handle Modification Events",description:"Handling all events related to the modification of general or configuration specific custom properties from the SOLIDWORKS API. Workaround for the issue when AddCustomPropertyNotify, DeleteCustomPropertyNotify, ChangeCustomPropertyNotify events are not raised",image:"custom-properties-events-console.png",labels:["custom property","notification"]},sidebar:"tutorialSidebar",previous:{title:"Copy SOLIDWORKS file specific custom properties to configuration",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/copy-file-specific-to-configuration/"},next:{title:"Macro to link sheet metal cut-list properties to SOLIDWORKS part custom properties",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/link-sheet-metal/"}},p={},l=[{value:"Program.cs",id:"programcs",level:2},{value:"CustomPropertiesEventsHandler.cs",id:"custompropertieseventshandlercs",level:2}],m={toc:l},d="wrapper";function c(e){let{components:n,...i}=e;return(0,o.kt)(d,(0,r.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SOLIDWORKS API provides notifications to handle the custom properties modifications (such as add, delete or change). These events (AddCustomPropertyNotify, DeleteCustomPropertyNotify, ChangeCustomPropertyNotify) are raised for parts, assemblies and drawings and support general and configuration specific custom properties. However since SOLIDWORKS 2018 these events are no longer raised for the custom properties modified by the user in the user interface and only support custom properties modified from SOLIDWORKS API."),(0,o.kt)("p",null,"The code example below provides a workaround for this issue and enables handling of the notifications regardless of the way custom properties were modified."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create console application and add the code below"),(0,o.kt)("li",{parentName:"ul"},"Run the console"),(0,o.kt)("li",{parentName:"ul"},"Modify custom properties. The modification results are output to the console window:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Properties modification information output to the console",src:t(88518).Z,width:"847",height:"213"})),(0,o.kt)("h2",{id:"programcs"},"Program.cs"),(0,o.kt)("p",null,"Entry point of the program"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing System;\nusing System.Collections.Generic;\nusing System.Diagnostics;\nusing System.Linq;\nusing System.Runtime.InteropServices;\nusing System.Text;\n\nnamespace HandlePrpsEvents\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            var app = Activator.CreateInstance(Type.GetTypeFromProgID("SldWorks.Application")) as ISldWorks;\n            app.Visible = true;\n\n            IModelDoc2 model = null;\n\n            do\n            {\n                model = app.IActiveDoc2;\n                if (model == null)\n                {\n                    Console.WriteLine("Open the model and press any key to continue");\n                    Console.ReadLine();\n                }\n            } while (model == null);\n\n\n            var handler = new CustomPropertiesEventsHandler(app, model);\n            handler.PropertyChanged += OnPropertyChanged;\n\n\n            Console.ReadLine();\n\n            handler.Dispose();\n        }\n\n        private static void OnPropertyChanged(PropertyChangeAction_e type, string name, string conf, string value)\n        {\n            Console.WriteLine($"Property {name}; Action: {type}; Configuration: {conf}; Value: {value}");\n        }\n    }\n}\n\n')),(0,o.kt)("h2",{id:"custompropertieseventshandlercs"},"CustomPropertiesEventsHandler.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing System;\nusing System.Collections.Generic;\nusing System.Diagnostics;\nusing System.Linq;\nusing System.Runtime.InteropServices;\nusing System.Text;\n\nnamespace HandlePrpsEvents\n{\n    public enum PropertyChangeAction_e\n    {\n        Added,\n        Deleted,\n        Modified\n    }\n\n    public class CustomPropertiesEventsHandler : IDisposable\n    {\n        private class PropertiesList : Dictionary<string, string>\n        {\n            internal PropertiesList(ICustomPropertyManager prpsMgr) : base(StringComparer.CurrentCultureIgnoreCase)\n            {\n                var prpNames = prpsMgr.GetNames() as string[];\n\n                if (prpNames != null)\n                {\n                    foreach (var prpName in prpNames)\n                    {\n                        string val;\n                        string resVal;\n                        bool wasRes;\n                        prpsMgr.Get5(prpName, true, out val, out resVal, out wasRes);\n                        Add(prpName, val);\n                    }\n                }\n            }\n        }\n\n        private class PropertiesSet : Dictionary<string, PropertiesList>\n        {\n            internal PropertiesSet(IModelDoc2 model) : base(StringComparer.CurrentCultureIgnoreCase)\n            {\n                Add("", new PropertiesList(model.Extension.CustomPropertyManager[""]));\n\n                var confNames = model.GetConfigurationNames() as string[];\n\n                if (confNames != null)\n                {\n                    foreach (var confName in confNames)\n                    {\n                        Add(confName, new PropertiesList(model.Extension.CustomPropertyManager[confName]));\n                    }\n                }\n            }\n        }\n\n        public delegate void PropertyChangedDelegate(PropertyChangeAction_e type, string name, string conf, string value);\n\n        public event PropertyChangedDelegate PropertyChanged;\n\n        #region WinAPI\n\n        private delegate bool EnumWindowProc(IntPtr handle, IntPtr lParam);\n\n        [DllImport("user32.dll", CharSet = CharSet.Auto, SetLastError = true)]\n        private static extern int GetWindowText(IntPtr hWnd, StringBuilder text, int count);\n\n        [DllImport("user32.dll", CharSet = CharSet.Auto, SetLastError = true)]\n        private static extern int GetWindowTextLength(IntPtr hWnd);\n\n        [DllImport("user32.dll", SetLastError = true)]\n        private static extern bool EnumThreadWindows(uint threadId, EnumWindowProc enumProc, IntPtr lParam);\n\n        [DllImport("user32.dll")]\n        private static extern int GetClassName(IntPtr hWnd, StringBuilder lpClassName, int nMaxCount);\n\n        [DllImport("user32.dll")]\n        [return: MarshalAs(UnmanagedType.Bool)]\n        private static extern bool IsWindow(IntPtr hWnd);\n\n        #endregion\n\n        private readonly ISldWorks m_App;\n        private readonly IModelDoc2 m_Model;\n\n        private IntPtr m_CurrentSummaryHandle;\n\n        private PropertiesSet m_CurPrpsSet;\n\n        public CustomPropertiesEventsHandler(ISldWorks app, IModelDoc2 model)\n        {\n            m_App = app;\n            m_Model = model;\n\n            (m_App as SldWorks).CommandCloseNotify += OnCommandCloseNotify;\n            (m_App as SldWorks).OnIdleNotify += OnIdleNotify;\n\n            if (model is PartDoc)\n            {\n                (model as PartDoc).AddCustomPropertyNotify += OnAddCustomPropertyNotify;\n                (model as PartDoc).DeleteCustomPropertyNotify += OnDeleteCustomPropertyNotify;\n                (model as PartDoc).ChangeCustomPropertyNotify += OnChangeCustomPropertyNotify;\n            }\n            else if (model is AssemblyDoc)\n            {\n                (model as AssemblyDoc).AddCustomPropertyNotify += OnAddCustomPropertyNotify;\n                (model as AssemblyDoc).DeleteCustomPropertyNotify += OnDeleteCustomPropertyNotify;\n                (model as AssemblyDoc).ChangeCustomPropertyNotify += OnChangeCustomPropertyNotify;\n            }\n            else if (model is DrawingDoc)\n            {\n                (model as DrawingDoc).AddCustomPropertyNotify += OnAddCustomPropertyNotify;\n                (model as DrawingDoc).DeleteCustomPropertyNotify += OnDeleteCustomPropertyNotify;\n                (model as DrawingDoc).ChangeCustomPropertyNotify += OnChangeCustomPropertyNotify;\n            }\n            else\n            {\n                throw new NotSupportedException();\n            }\n\n            CaptureCurrentProperties();\n        }\n\n        private int OnIdleNotify()\n        {\n            if (m_CurrentSummaryHandle != IntPtr.Zero)\n            {\n                if (!IsWindow(m_CurrentSummaryHandle))\n                {\n                    FindDifferences(m_CurPrpsSet, new PropertiesSet(m_Model));\n                    m_CurrentSummaryHandle = IntPtr.Zero;\n                    m_CurPrpsSet = null;\n                }\n            }\n\n            return 0;\n        }\n\n        private void FindDifferences(PropertiesSet oldSet, PropertiesSet newSet)\n        {\n            foreach (var conf in oldSet.Keys)\n            {\n                var oldPrsList = oldSet[conf];\n                var newPrsList = newSet[conf];\n\n                var addedPrpNames = newPrsList.Keys.Except(oldPrsList.Keys);\n\n                foreach (var newPrpName in addedPrpNames)\n                {\n                    PropertyChanged?.Invoke(PropertyChangeAction_e.Added, newPrpName, conf, newPrsList[newPrpName]);\n                }\n\n                var removedPrpNames = oldPrsList.Keys.Except(newPrsList.Keys);\n\n                foreach (var deletedPrpName in removedPrpNames)\n                {\n                    PropertyChanged?.Invoke(PropertyChangeAction_e.Deleted, deletedPrpName, conf, oldPrsList[deletedPrpName]);\n                }\n\n                var commonPrpNames = oldPrsList.Keys.Intersect(newPrsList.Keys);\n\n                foreach (var prpName in commonPrpNames)\n                {\n                    if (newPrsList[prpName] != oldPrsList[prpName])\n                    {\n                        PropertyChanged?.Invoke(PropertyChangeAction_e.Modified, prpName, conf, newPrsList[prpName]);\n                    }\n                }\n            }\n        }\n\n        private int OnAddCustomPropertyNotify(string propName, string Configuration, string Value, int valueType)\n        {\n            PropertyChanged?.Invoke(PropertyChangeAction_e.Added, propName, Configuration, Value);\n            return 0;\n        }\n\n        private int OnDeleteCustomPropertyNotify(string propName, string Configuration, string Value, int valueType)\n        {\n            PropertyChanged?.Invoke(PropertyChangeAction_e.Deleted, propName, Configuration, Value);\n            return 0;\n        }\n\n        private int OnChangeCustomPropertyNotify(string propName, string Configuration, string oldValue, string NewValue, int valueType)\n        {\n            PropertyChanged?.Invoke(PropertyChangeAction_e.Modified, propName, Configuration, NewValue);\n            return 0;\n        }\n\n        private int OnCommandCloseNotify(int Command, int reason)\n        {\n            const int swCommands_File_Summaryinfo = 963;\n\n            if (Command == swCommands_File_Summaryinfo)\n            {\n                if (!CaptureCurrentProperties())\n                {\n                    throw new Exception("Failed to find the summary information dialog");\n                }\n            }\n\n            return 0;\n        }\n\n        private bool CaptureCurrentProperties()\n        {\n            var handle = GetSummaryInfoDialogHandle();\n\n            if (handle != IntPtr.Zero)\n            {\n                m_CurPrpsSet = new PropertiesSet(m_Model);\n                return true;\n            }\n            else\n            {\n                return false;\n            }\n        }\n\n        private bool FindSymmaryInfoDialog(IntPtr handle, IntPtr lParam)\n        {\n            var captionLength = GetWindowTextLength(handle) + 1;\n            var caption = new StringBuilder(captionLength);\n\n            if (GetWindowText(handle, caption, captionLength) > 0)\n            {\n                if (caption.ToString() == "Summary Information")\n                {\n                    var clsName = new StringBuilder(260);\n\n                    GetClassName(handle, clsName, clsName.Capacity);\n\n                    if (clsName.ToString() == "#32770")\n                    {\n                        m_CurrentSummaryHandle = handle;\n                    }\n                }\n            }\n\n            return true;\n        }\n\n        private IntPtr GetSummaryInfoDialogHandle()\n        {\n            m_CurrentSummaryHandle = IntPtr.Zero;\n\n            var prc = Process.GetProcessById(m_App.GetProcessID());\n\n            for (int i = 0; i < prc.Threads.Count; i++)\n            {\n                var threadId = (uint)prc.Threads[i].Id;\n                EnumThreadWindows(threadId, FindSymmaryInfoDialog, IntPtr.Zero);\n            }\n\n            return m_CurrentSummaryHandle;\n        }\n\n        public void Dispose()\n        {\n        }\n    }\n}\n\n')))}c.isMDXComponent=!0},88518:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA08AAADVCAMAAAC49TuQAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAHZrMWvZ8yjP5Gm2bhsICHrF35FuMq+rf10rAPLy8idxoY+LhwArfJ241M2LfgAAMV09TSxgfxxUW/b5++Li43jBnbnR6eipnEKIu2Gtd5VrZ5m00Ha+2pmZmbLK5F9fX8PW6iUlJezs7Ly90YF+eSYAMrxaSGKKr5g3JKK8mqa/2z/O8k2Qjtra27+/v/X19QBMnHVLAOzFv1+m3bbO56zF3yYAWaG61qeJfF1viM10Y1yj2tDg8JHCvrBjAKqqqmJQfwA3VUeClkMRHrCwsdLS1Nqdkah4cwAAWZhGOUMAMaK82P7+/nNzc6qofdjm808mNXmeuJWWlajC3MbHyejo6O/v746/2xtQbkOK3PHMxqa+16SjemV2j13V81KZibuam1NWZovg9LdIMzQzMyVqun48MpTF4KS9u71+c75SPY6KhbhgUJePW5uftWOenMja7tvp7OWhlKZYSU5NTGyAmVymfrdCKyUretmajs/P0UFBQWJzjKnCnY9sWKfAvYJGPYygtRtDSn1QAK7HoCZtvtLW3ICKm67GwbTH26qLWT14lfPSy9Lw99Pi8Y1rMaCgoGlpaN2jmNJ+bmGNfhsbG6ro9Pf393yqf2ydqXlNAN3n8t2Tht7e3gBPoFafhIDd9EWN4IaIinh3dyYrWMrLy5GNiFDS8mTX82Gp4JVwM45BN4KCgpOqwaJEMuGYi76Jg37I4pdUS7BdTGh5kUKInMJmVaelfMzd71mjgSctM6CmvFOQrXyktmCo377K2MZoV55XTmIsAE+Im8hqWJTi9K6OWnjB3Y9GO6Y8KLpJM6FNP626wslpV3bb81NTUywsLGaTqzxqoHWBlXB8kDJri8Hu9aOGV6eJWKWIV7ZgT9eQgoyMjEiHk5lyM+emmYKmvHGCmp7l9H9ANoA9NIGEiEaP4oDL5atSQrKRXFApOH+lubnD0IZMRRpTcCpjg+Odj2d4kAU8WmhyhI1KQd+Uh8NeSpKPirKAfCdwwShxxGBwiajBvqhZSQAAABBJ5jwAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAbnUlEQVR4Xu2dDbyeZV3HT9mUnTZT25IMZYNCc7pzAB1UaMsO08W7bAdSIFmNpCztRSnetEKRyGSz8MjLMDEoaTMtCktTI8JKbVpWWrOiWi9mmRUhaZ+u/9v1/1/32/Ny7rHzbL+vZ9f1u/5v932e3b8955koUwt19s5sfft5Hzl10671W3fs3btDoweTvbdvnXne+973M/85/+/f+YTnrV+/b6cmlhRbdQcDOLgv1NaFNad2M3PHpkv/7HOf+9wTPnLFjIYaWKPzCsRP2wEA43Pjjewj8dP2K2dWnwEAGJsf/qll5qft+1YfBQBYDD97NBsq+elK2AmAxfLnXy1+2j6jAQDA+LyZPkMlP+HtCYDFY35aeCwAYLG8ebv46Qw9AwDG5+/gJwB6Q/z0rfATAD3w+/ATAL0BP4FDhz2v+ubBvGrPCIXvffzcYB7/Xr1+8NPJAEw6F332lsF89qIRCs+5+A2Dufgcvf7JJ8NP4NDhi7esHcwtXxyhcO4NRw7mDXN6/SY/3X5t5O70a/9jNQXAkuaLtzxxMOInPXTBfnrx3wzmxV1+2rc1c0cibfuP0hQAS5oD4acfGUyTn043bl9VZf9RmgJgSXPVUDa5qlL4+m3O6zVGUOHcif/hvCsVfCHsxolzev3TT//uBj99vbCwkN6eFhb+xPx0wxRxCeunn3YK78wNx6swLHuCFCex+cmqLBWHKbm6Qm6Ry7SVcT4mT0gXeFy4zQhfvi0JJpXx/LRN/+dLxDaNEeKnX3WocNsLbn0X71+lwcQAPz3taU/7+Mdvuml+tuInep6fPifWiA9uzU+WbXr0NVYME5qqmdjSUVbzU9I3tHimfssFf7HyfFVgkjgQfnowcysXbnuBbN93q4YffLDm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"}}]);