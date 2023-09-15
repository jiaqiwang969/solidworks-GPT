"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[25927],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>g});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=o.createContext({}),d=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=d(n.components);return o.createElement(l.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),p=d(t),u=r,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return t?o.createElement(g,a(a({ref:e},c),{},{components:t})):o.createElement(g,a({ref:e},c))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[p]="string"==typeof n?n:r,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74268:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(87462),r=(t(67294),t(3905));const i={caption:"Configure Property Manager Page Using Windows API",title:"Run and configure SOLIDWORKS command using Windows API",description:"Example demonstrating how to call and configure the Insert Model Items command in SOLIDWORKS drawing using Windows API",image:"insert-model-items-property-manager-page.png"},a=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/property-manager-page-windows-api/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/property-manager-page-windows-api/index",title:"Run and configure SOLIDWORKS command using Windows API",description:"Example demonstrating how to call and configure the Insert Model Items command in SOLIDWORKS drawing using Windows API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/property-manager-page-windows-api/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/property-manager-page-windows-api",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/property-manager-page-windows-api/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/property-manager-page-windows-api/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/property-manager-page-windows-api/index.md",tags:[],version:"current",frontMatter:{caption:"Configure Property Manager Page Using Windows API",title:"Run and configure SOLIDWORKS command using Windows API",description:"Example demonstrating how to call and configure the Insert Model Items command in SOLIDWORKS drawing using Windows API",image:"insert-model-items-property-manager-page.png"},sidebar:"tutorialSidebar",previous:{title:"Notify the completion of long running SOLIDWORKS command using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/long-command-completion-notifier/"},next:{title:"Macro to run group of macros using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/frame/run-macros-group/"}},l={},d=[{value:"Limitations",id:"limitations",level:2}],c={toc:d},p="wrapper";function m(n){let{components:e,...i}=n;return(0,r.kt)(p,(0,o.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In some cases certain SOLIDWORKS functions or options may not be available within SOLIDWORKS API commands or may work incorrectly."),(0,r.kt)("p",null,"In this case one of the possible workarounds (if other workarounds are not available) is to use Windows API to invoke and configure the commands."),(0,r.kt)("p",null,"This example demonstrate how to insert model dimensions into the SOLIDWORKS drawing view using Windows API. This example emulates the functionality of ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.idrawingdoc~insertmodelannotations3.html"},"IDrawingDoc::InsertModelAnnotations3")," API methods."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Model Items Property Manager page",src:t(28864).Z,width:"373",height:"764"}),"{ width=400 }"),(0,r.kt)("p",null,"This is a C# Console Application which accepts the path to a drawing as an input parameter. The following steps will be performed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect or create new instance of SOLIDWORKS"),(0,r.kt)("li",{parentName:"ul"},"Open the specified drawing file"),(0,r.kt)("li",{parentName:"ul"},"Open the ",(0,r.kt)("strong",{parentName:"li"},"Insert Model Items")," property manager page by running the command using SOLIDWORKS API"),(0,r.kt)("li",{parentName:"ul"},"Iterate all controls and set the source to ",(0,r.kt)("strong",{parentName:"li"},"Entire Model")," and ",(0,r.kt)("strong",{parentName:"li"},"Include items from hidden features")," option"),(0,r.kt)("li",{parentName:"ul"},"Close Property Manager Page by clicking OK button"),(0,r.kt)("li",{parentName:"ul"},"Save and close the document")),(0,r.kt)("p",null,"While invoking Windows API it is required to develop a strategy of finding the specific controls and command ids."),(0,r.kt)("p",null,"Spy++ utility by Microsoft which is built-in into Visual Studio can be a useful tool to analyze Windows controls:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Spy++ interface with the list of the Win32 controls of the Property Manager page",src:t(28730).Z,width:"712",height:"680"}),"{ width=400 }"),(0,r.kt)("p",null,"Refer ",(0,r.kt)("a",{parentName:"p",href:"https://blog.codestack.net/missing-solidworks-api-command#calling-windows-command"},"Calling Windows API commands")," blog article for more information about this method."),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Low-level code which is less readable and more complex"),(0,r.kt)("li",{parentName:"ul"},"In some cases there is no permanent ids of controls, so it is required to use additional logic such as control title or order which may differ from session to session, release to release or be locale dependent"),(0,r.kt)("li",{parentName:"ul"},"Windows API performs a low level calls so it is required to be careful working with memory, releasing pointers, etc. as it may cause an unexpected behavior. Read Windows API documentation for more information about the specific API calls"),(0,r.kt)("li",{parentName:"ul"},"There is no feedback about the result of the operation (only low level API results) which means that it may be hard to identify if operation performed successfully. The operation may also produce model popup windows which needs to be handled separately.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Runtime.InteropServices;\nusing System.Text;\n\nnamespace InsertModelItemsWinAPI\n{\n    class Program\n    {\n        public class SearchData\n        {\n            public string ClassName;\n            public string Title;\n            public List<IntPtr> Results;\n\n            public SearchData()\n            {\n                Results = new List<IntPtr>();\n            }\n        }\n\n        #region Windows API\n\n        [DllImport("user32.dll", CharSet = CharSet.Auto)]\n        private static extern int SendMessage(IntPtr hWnd, int msg, int wParam, int lParam);\n        \n        [DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]\n        public static extern int GetWindowTextLength(IntPtr hWnd);\n\n        [DllImport("user32.dll", CharSet = CharSet.Auto, SetLastError = true)]\n        public static extern int GetWindowText(IntPtr hWnd, StringBuilder lpString, int nMaxCount);\n\n        [DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]\n        public static extern int GetClassName(IntPtr hWnd, StringBuilder lpClassName, int nMaxCount);\n\n        public delegate bool WindowEnumProc(IntPtr hWnd, ref SearchData lParam);\n\n        [DllImport("user32.dll")]\n        public static extern bool EnumChildWindows(IntPtr hWnd, WindowEnumProc func, ref SearchData lParam);\n\n        #endregion\n\n        static void Main(string[] args)\n        {\n            var app = (ISldWorks)Activator.CreateInstance(Type.GetTypeFromProgID("SldWorks.Application"));\n\n            int errs = -1;\n            int warns = -1;\n\n            var filePath = args.First();\n\n            var doc = app.OpenDoc6(filePath, (int)swDocumentTypes_e.swDocDRAWING, (int)swOpenDocOptions_e.swOpenDocOptions_Silent, "", ref errs, ref warns);\n            \n            const int WM_COMMAND = 0x0111;\n            const int MODEL_ITEMS_CMD = 38374;\n\n            //get the handle to SOLIDWORKS window\n            var hWnd = new IntPtr(app.IFrameObject().GetHWnd());\n\n            //open \'Model Items\' property manager page\n            SendMessage(hWnd, WM_COMMAND, MODEL_ITEMS_CMD, 0);\n\n            var modelItemPageWnd = FindPropertyPageByName(hWnd, "Model Items");\n\n            //Find the check box \'Include items from hidden features\'\n            var includeHiddenItemsWnd = FindWindows(modelItemPageWnd, "Include items from &hidden features", "Button").First();\n\n            //check the found checkbox\n            SetCheckBox(includeHiddenItemsWnd, true);\n\n            //Find the source ComboBox (this is a first ComboBox in the page)\n            var srcComboBox = FindWindows(modelItemPageWnd, "", "ComboBox").First();\n\n            //Set the ComboBox selection to the first item (Entire Model)\n            SetComboBox(srcComboBox, 0);\n\n            const int swCommands_PmOK = -2;\n\n            //Click OK on the PMPage to complete the operation\n            app.RunCommand(swCommands_PmOK, "");\n\n            doc.Save3((int)swSaveAsOptions_e.swSaveAsOptions_Silent, ref errs, ref warns);\n            app.CloseDoc(doc.GetTitle());\n        }\n\n        private static void SetCheckBox(IntPtr checkBoxWnd, bool value)\n        {\n            const int BST_UNCHECKED = 0x0000;\n            const int BST_CHECKED = 0x0001;\n            const int BM_SETCHECK = 0x00F1;\n\n            SendMessage(checkBoxWnd, BM_SETCHECK, value ? BST_CHECKED : BST_UNCHECKED, 0);\n        }\n\n        private static void SetComboBox(IntPtr comboBoxWnd, int index) \n        {\n            const int CB_SETCURSEL = 0x014E;\n            SendMessage(comboBoxWnd, CB_SETCURSEL, index, 0);\n        }\n\n        private static IntPtr FindPropertyPageByName(IntPtr swHwnd, string name)\n        {\n            var pagesWnd = FindWindows(swHwnd, "Dve sheet", "AfxWnd140u");\n\n            foreach (var pageWnd in pagesWnd) \n            {\n                if (FindWindows(pageWnd, name, "Button").Any()) \n                {\n                    return pageWnd;\n                }\n            }\n\n            throw new Exception($"Failed to find the property page \'{name}\'");\n        }\n\n        private static IntPtr[] FindWindows(IntPtr parentWnd, string title, string className)\n        {\n            var data = new SearchData()\n            {\n                ClassName = className,\n                Title = title\n            };\n\n            var callbackProc = new WindowEnumProc(EnumChildWindowsCallback);\n            EnumChildWindows(parentWnd, callbackProc, ref data);\n\n            return data.Results.ToArray();\n        }\n\n        private static bool EnumChildWindowsCallback(IntPtr hWnd, ref SearchData data)\n        {\n            GetWindowInfo(hWnd, out string title, out string className);\n\n            if ((string.IsNullOrEmpty(data.ClassName) || className == data.ClassName) && (string.IsNullOrEmpty(data.Title) || title == data.Title))\n            {\n                data.Results.Add(hWnd);\n            }\n\n            return true;\n        }\n\n        private static void GetWindowInfo(IntPtr hWnd, out string title, out string className)\n        {\n            var length = GetWindowTextLength(hWnd);\n            var sb = new StringBuilder(length + 1);\n            \n            GetWindowText(hWnd, sb, sb.Capacity);\n\n            title = sb.ToString();\n\n            sb = new StringBuilder(256);\n            \n            GetClassName(hWnd, sb, sb.Capacity);\n\n            className = sb.ToString().Trim();\n        }\n    }\n}\n')))}m.isMDXComponent=!0},28864:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/insert-model-items-property-manager-page-95b172b551a2f502b07d63c573e4d6c1.png"},28730:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/spy-plus-plus-solidworks-window-26101691c08a71818a460a7d4f8e1e10.png"}}]);