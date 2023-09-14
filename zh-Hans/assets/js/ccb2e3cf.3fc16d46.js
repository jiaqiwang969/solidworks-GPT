"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[83586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={title:"Creating C# add-in for SOLIDWORKS automation using API",caption:"Creating C# Add-In For SOLIDWORKS",description:"Detailed guide of creating SOLIDWORKS add-in from scratch using C#",image:"new-project-class-library.png",labels:["add-in","c#"]},o=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/add-ins/csharp/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/add-ins/csharp/index",title:"Creating C# add-in for SOLIDWORKS automation using API",description:"Detailed guide of creating SOLIDWORKS add-in from scratch using C#",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/add-ins/csharp/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/add-ins/csharp",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/add-ins/csharp/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/add-ins/csharp/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/add-ins/csharp/index.md",tags:[],version:"current",frontMatter:{title:"Creating C# add-in for SOLIDWORKS automation using API",caption:"Creating C# Add-In For SOLIDWORKS",description:"Detailed guide of creating SOLIDWORKS add-in from scratch using C#",image:"new-project-class-library.png",labels:["add-in","c#"]},sidebar:"tutorialSidebar",previous:{title:"How to develop add-ins for SOLIDWORKS automation via API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/add-ins/"},next:{title:"Creating VB.NET add-in for SOLIDWORKS using API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/add-ins/vbnet/"}},l={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create new project in Microsoft Visual Studio"),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("em",{parentName:"li"},"Class Library")," template under the ",(0,r.kt)("em",{parentName:"li"},"Visual C#")," templates. Specify the location and the name of the project")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creating new type library project in Visual Studio",src:n(32102).Z,width:"1199",height:"831"}),"{ width=450 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add reference to SolidWorks Interop libraries: SolidWorks.Interop.sldworks.dll, SolidWorks.Interop.swconst.dll, SolidWorks.Interop.swpublished.dll. Interop libraries are located at ",(0,r.kt)("strong",{parentName:"li"},"SOLIDWORKS Installation Folder"),"\\api\\redist for projects targeting Framework 4.0 onwards and ",(0,r.kt)("strong",{parentName:"li"},"SOLIDWORKS Installation Folder"),"\\api\\redist\\CLR2 for projects targeting Framework 2.0 and 3.5.")),(0,r.kt)("p",null,"For projects targeting Framework 4.0 I recommend to set the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/dotnet/framework/interop/type-equivalence-and-embedded-interop-types"},"Embed Interop Types"))," option to false.\nOtherwise it is possible to have unpredictable behaviour of the application when calling the SOLIDWORKS API due to a type cast issue.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Embedding SOLIDWORKS interops",src:n(48134).Z,width:"557",height:"779"}),"{ width=350 }"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In some tutorials reference to solidworkstools.dll library is added. This library is optional and it won't be used in this tutorial")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a public class with a user friendly name. This will be a main class of the add-in. This class must be public and COM-visible. I would recommend to use ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.comvisibleattribute?view=netframework-4.7.2"},"ComVisibleAttribute")," to mark the class as COM visible object and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-gb/dotnet/api/system.runtime.interopservices.guidattribute?view=netframework-4.7.2"},"GuidAttribute")," to explicitly assign COM GUID for the add-in class:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[ComVisible(true)]\n[Guid("31B803E0-7A01-4841-A0DE-895B726625C9")]\npublic class MySampleAddin : ISwAddin\n{\n    ...\n}\n')),(0,r.kt)("p",null,"I would recommend to not select ",(0,r.kt)("em",{parentName:"p"},"Make assembly COM-Visible")," option in the project settings but only mark required classes as COM visible as described above."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Make assembly com visible flag",src:n(66842).Z,width:"679",height:"573"}),"{ width=400 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add-in dll must be registered with /codebase flag. ",(0,r.kt)("em",{parentName:"li"},"Register for COM interop")," options available in the project setting doesn't use this option while registering and not suitable in this case. Instead add the post build action as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},'"%windir%\\Microsoft.NET\\Framework64\\v4.0.30319\\regasm" /codebase "$(TargetPath)"\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Post build event to register dll as a COM object",src:n(40348).Z,width:"733",height:"535"}),"{ width=400 }"),(0,r.kt)("p",null,"This would ensure the proper registration on each build of the add-in project."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the enhanced debugging experience I would recommend to setup the full path to SOLIDWORKS as an external application in project settings.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Starting SOLIDWORKS as an external program while debugging the add-in",src:n(92126).Z,width:"896",height:"550"}),"{ width=400 }"),(0,r.kt)("p",null,"This would allow to start SOLIDWORKS and automatically attach the debugger from the Visual Studio by pressing green run button or F5 key."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Registry information needs to be added to SOLIDWORKS registry branch to make it visible for the application. To simplify the process this information can be automatically added and removed when dll is registered and unregistered as COM object by defining the functions and decorating them with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.comregisterfunctionattribute?view=netframework-4.7.2"},"ComRegisterFunctionAttribute")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.comunregisterfunctionattribute?view=netframework-4.7.2"},"ComUnregisterFunctionAttribute")," attributes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy paste the code for the add-in as shown below and compile the project"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swpublished;\nusing System;\nusing System.ComponentModel;\nusing System.Diagnostics;\nusing System.Linq;\nusing System.Runtime.InteropServices;\n\nnamespace SampleAddIn\n{\n    [ComVisible(true)]\n    [Guid("31B803E0-7A01-4841-A0DE-895B726625C9")]\n    [DisplayName("Sample Add-In")]\n    [Description("Sample \'Hello World\' SOLIDWORKS add-in")]\n    public class MySampleAddin : ISwAddin\n    {\n        #region Registration\n\n        private const string ADDIN_KEY_TEMPLATE = @"SOFTWARE\\SolidWorks\\Addins\\{{{0}}}";\n        private const string ADDIN_STARTUP_KEY_TEMPLATE = @"Software\\SolidWorks\\AddInsStartup\\{{{0}}}";\n        private const string ADD_IN_TITLE_REG_KEY_NAME = "Title";\n        private const string ADD_IN_DESCRIPTION_REG_KEY_NAME = "Description";\n\n        [ComRegisterFunction]\n        public static void RegisterFunction(Type t)\n        {\n            try\n            {\n                var addInTitle = "";\n                var loadAtStartup = true;\n                var addInDesc = "";\n\n                var dispNameAtt = t.GetCustomAttributes(false).OfType<DisplayNameAttribute>().FirstOrDefault();\n\n                if (dispNameAtt != null)\n                {\n                    addInTitle = dispNameAtt.DisplayName;\n                }\n                else\n                {\n                    addInTitle = t.ToString();\n                }\n\n                var descAtt = t.GetCustomAttributes(false).OfType<DescriptionAttribute>().FirstOrDefault();\n\n                if (descAtt != null)\n                {\n                    addInDesc = descAtt.Description;\n                }\n                else\n                {\n                    addInDesc = t.ToString();\n                }\n\n                var addInkey = Microsoft.Win32.Registry.LocalMachine.CreateSubKey(\n                    string.Format(ADDIN_KEY_TEMPLATE, t.GUID));\n\n                addInkey.SetValue(null, 0);\n\n                addInkey.SetValue(ADD_IN_TITLE_REG_KEY_NAME, addInTitle);\n                addInkey.SetValue(ADD_IN_DESCRIPTION_REG_KEY_NAME, addInDesc);\n\n                var addInStartupkey = Microsoft.Win32.Registry.CurrentUser.CreateSubKey(\n                    string.Format(ADDIN_STARTUP_KEY_TEMPLATE, t.GUID));\n                \n                addInStartupkey.SetValue(null, Convert.ToInt32(loadAtStartup), Microsoft.Win32.RegistryValueKind.DWord);\n            }\n            catch (Exception ex)\n            {\n\n                Console.WriteLine("Error while registering the addin: " + ex.Message);\n            }\n        }\n\n        [ComUnregisterFunction]\n        public static void UnregisterFunction(Type t)\n        {\n            try\n            {\n                Microsoft.Win32.Registry.LocalMachine.DeleteSubKey(\n                    string.Format(ADDIN_KEY_TEMPLATE, t.GUID));\n\n                Microsoft.Win32.Registry.CurrentUser.DeleteSubKey(\n                    string.Format(ADDIN_STARTUP_KEY_TEMPLATE, t.GUID));\n            }\n            catch (Exception e)\n            {\n                Console.WriteLine("Error while unregistering the addin: " + e.Message);\n            }\n        }\n        \n        #endregion\n\n        private ISldWorks m_App;\n\n        public bool ConnectToSW(object ThisSW, int Cookie)\n        {\n            m_App = ThisSW as ISldWorks;\n\n            m_App.SendMsgToUser("Hello World!");\n\n            return true;\n        }\n\n        public bool DisconnectFromSW()\n        {\n            return true;\n        }\n    }\n}\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When compiled the following warning can be displayed.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unsigned assembly compile warning",src:n(45534).Z,width:"1331",height:"343"}),"{ width=450 }"),(0,r.kt)("p",null,"This warning can be ignored."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run SOLIDWORKS and the ",(0,r.kt)("em",{parentName:"li"},"Hello World")," message box is displayed on start.")),(0,r.kt)("p",null,"The above code can be simplified as shown below with a help of ",(0,r.kt)("a",{parentName:"p",href:"https://xcad.net/"},"xCAD.NET Framework")," framework:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[Title("Sample Add-In")]\n[Description("Sample \'Hello World\' SOLIDWORKS add-in")]\n[ComVisible(true), Guid("31B803E0-7A01-4841-A0DE-895B726625C9")]\npublic class MySampleAddIn : SwAddInEx\n{\n    public override void OnConnect()\n    {\n        Application.ShowMessageBox("Hello World!");\n    }\n}\n')))}u.isMDXComponent=!0},45534:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/compile-warning-unsigned-9636b217b0552e6518ec4e41c9845fda.png"},48134:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/embed-interops-false-61bb9d2ec67aafe9abe933c2a5d44bb3.png"},66842:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/make-assembly-com-visible-f21e5ddd81b1a8b2c52edd723eeacfd6.png"},32102:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new-project-class-library-ab355ccd710b8fc368de4e9185bf8be6.png"},40348:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/post-build-event-24a12a66da4f4705e518b41ae325bdbf.png"},92126:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/start-external-program-59a23ce9588ed45c2a10813d93b6ec96.png"}}]);