"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[15633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={title:"Create C# stand-alone application for SOLIDWORKS API automation",caption:"Create C# Stand-Alone Application for SOLIDWORKS",description:"Guide of how to connect to SOLIDWORKS application from out-of-process (a.k.a Stand-Alone) application (e.g. Windows Forms, Windows Console) using C# and Microsoft Visual Studio",sidebar_position:1,image:"proj-template.png",labels:["activator","c#","create instance","example","getobject","rot","sdk","solidworks api"],"redirect-from":["/2018/03/create-c-stand-alone-application-for.html"]},i=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-csharp/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-csharp/index",title:"Create C# stand-alone application for SOLIDWORKS API automation",description:"Guide of how to connect to SOLIDWORKS application from out-of-process (a.k.a Stand-Alone) application (e.g. Windows Forms, Windows Console) using C# and Microsoft Visual Studio",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-csharp/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-csharp",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-csharp/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-csharp/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-csharp/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Create C# stand-alone application for SOLIDWORKS API automation",caption:"Create C# Stand-Alone Application for SOLIDWORKS",description:"Guide of how to connect to SOLIDWORKS application from out-of-process (a.k.a Stand-Alone) application (e.g. Windows Forms, Windows Console) using C# and Microsoft Visual Studio",sidebar_position:1,image:"proj-template.png",labels:["activator","c#","create instance","example","getobject","rot","sdk","solidworks api"],"redirect-from":["/2018/03/create-c-stand-alone-application-for.html"]},sidebar:"tutorialSidebar",previous:{title:"Write component quantity in the SOLIDWORKS assembly to custom property",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/write-quantities/"},next:{title:"Getting started: Developing applications with SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/"}},c={},l=[{value:"Creating new project",id:"creating-new-project",level:2},{value:"Creating or connecting to instance",id:"creating-or-connecting-to-instance",level:2},{value:"Getting the running instance via ROT",id:"getting-the-running-instance-via-rot",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial I will demonstrate how to connect to SOLIDWORKS application from out-of-process (a.k.a Stand-Alone) application (e.g. Windows Forms, Windows Console) using C# and Microsoft Visual Studio.  "),(0,r.kt)("p",null,"For more detailed explanation of the approaches discussed in this article please read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/"},"Connect To SOLIDWORKS From Stand-Alone Application")," article."),(0,r.kt)("h2",{id:"creating-new-project"},"Creating new project"),(0,r.kt)("p",null,"I will be using Microsoft Visual Studio development environment. You can use any edition of Visual Studio. The same code will work in Professional, Express or Community editions. Follow this link to download ",(0,r.kt)("a",{parentName:"p",href:"https://www.visualstudio.com/vs/community/"},"Visual Studio"),"  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Visual Studio. "),(0,r.kt)("li",{parentName:"ol"},"Start new project:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creating new project in Visual Studio",src:n(98852).Z,width:"400",height:"202"}),"{ width=400 }"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the project template. I would recommend to start with Console Application project template as it contains the minimum pregenerated code:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Selecting C# Console Application project template",src:n(29790).Z,width:"640",height:"143"}),"{ width=640 }"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add reference to SolidWorks Interop library. Interop libraries are located at ",(0,r.kt)("strong",{parentName:"li"},"SOLIDWORKS Installation Folder"),"\\api\\redist\\SolidWorks.Interop.sldworks.dll for projects targeting Framework 4.0 onwards and ",(0,r.kt)("strong",{parentName:"li"},"SOLIDWORKS Installation Folder"),"\\api\\redist\\CLR2\\SolidWorks.Interop.sldworks.dll for projects targeting Framework 2.0 and 3.5.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding assembly references to the project",src:n(90043).Z,width:"320",height:"231"}),"{ width=320 }"),(0,r.kt)("p",null,"For projects targeting Framework 4.0 I recommend to set the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/dotnet/framework/interop/type-equivalence-and-embedded-interop-types"},"Embed Interop Types"))," option to false.\nOtherwise it is possible to have unpredictable behaviour of the application when calling the SOLIDWORKS API due to a type cast issue.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Option to embed interop assemblies",src:n(2046).Z,width:"319",height:"320"}),"{ width=320 }"),(0,r.kt)("p",null,"Now we can add the code to connect to SOLIDWORKS instance.  "),(0,r.kt)("h2",{id:"creating-or-connecting-to-instance"},"Creating or connecting to instance"),(0,r.kt)("p",null,"Probably the most common and quick way to connect to COM server is using the ",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/system.activator.createinstance(v=vs.110).aspx"},"Activator::CreateInstance")," method.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'var progId = "SldWorks.Application";\n\nvar progType = System.Type.GetTypeFromProgID(progId);\n\nvar app = System.Activator.CreateInstance(progType) as SolidWorks.Interop.sldworks.ISldWorks;\napp.Visible = true;\n')),(0,r.kt)("p",null,"This method will construct the instance of the type from the type definition. As SOLIDWORKS application is registered as COM server we can create the type from its program identifier via ",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/system.type.gettypefromprogid(v=vs.110).aspx"},"Type::GetTypeFromProgID")," method.\nPlease read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone#method-a---activator-and-progid"},"Connect To SOLIDWORKS From Stand-Alone Application")," article for explanations of limitation of this approach.  "),(0,r.kt)("p",null,"Alternatively you can connect to active (already started) session of SOLIDWORKS using the ",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/system.runtime.interopservices.marshal.getactiveobject(v=vs.110).aspx"},"Marshal::GetActiveObject")," method.\nThis approach will ensure that  there will be no new instances of SOLIDWORKS created and will throw an exception if there is no running SOLIDWORKS session to connect to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'var progId = "SldWorks.Application";\n\nvar app = System.Runtime.InteropServices.Marshal.GetActiveObject(progId) as SolidWorks.Interop.sldworks.ISldWorks;\n')),(0,r.kt)("h2",{id:"getting-the-running-instance-via-rot"},"Getting the running instance via ROT"),(0,r.kt)("p",null,"In order to connect to already running specific session of SOLIDWORKS or to be able to create multiple sessions you can use Running Object Table APIs.\nPlease read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone#method-b---running-object-table-rot"},"Connect To SOLIDWORKS From Stand-Alone Application")," article for more details about this approach."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Diagnostics;\nusing System.Linq;\nusing System.Runtime.InteropServices;\nusing System.Runtime.InteropServices.ComTypes;\nusing SolidWorks.Interop.sldworks;\n\nnamespace CodeStack.Sample\n{\n    class Program\n    {\n        [DllImport("ole32.dll")]\n        private static extern int CreateBindCtx(uint reserved, out IBindCtx ppbc);\n        \n        static void Main(string[] args)\n        {\n            const string SW_PATH = @"C:\\Program Files\\SOLIDWORKS Corp\\SOLIDWORKS\\SLDWORKS.exe";\n\n            try\n            {\n                var app = StartSwApp(SW_PATH);\n                Console.WriteLine(app.RevisionNumber());\n            }\n            catch(Exception ex)\n            {\n                Console.WriteLine("Failed to connect to SOLIDWORKS instance: " + ex.Message);\n            }\n\n            Console.ReadLine();\n        }\n\n        private static ISldWorks StartSwApp(string appPath, int timeoutSec = 10)\n        {\n            var timeout = TimeSpan.FromSeconds(timeoutSec);\n\n            var startTime = DateTime.Now;\n\n            var prc = Process.Start(appPath);\n            ISldWorks app = null;\n\n            while (app == null)\n            {\n                if (DateTime.Now - startTime > timeout)\n                {\n                    throw new TimeoutException();\n                }\n\n                app = GetSwAppFromProcess(prc.Id);\n            }\n\n            return app;\n        }\n\n        private static ISldWorks GetSwAppFromProcess(int processId)\n        {\n            var monikerName = "SolidWorks_PID_" + processId.ToString();\n\n            IBindCtx context = null;\n            IRunningObjectTable rot = null;\n            IEnumMoniker monikers = null;\n\n            try\n            {\n                CreateBindCtx(0, out context);\n\n                context.GetRunningObjectTable(out rot);\n                rot.EnumRunning(out monikers);\n\n                var moniker = new IMoniker[1];\n\n                while (monikers.Next(1, moniker, IntPtr.Zero) == 0)\n                {\n                    var curMoniker = moniker.First();\n\n                    string name = null;\n\n                    if (curMoniker != null)\n                    {\n                        try\n                        {\n                            curMoniker.GetDisplayName(context, null, out name);\n                        }\n                        catch (UnauthorizedAccessException)\n                        {\n                        }\n                    }\n\n                    if (string.Equals(monikerName,\n                        name, StringComparison.CurrentCultureIgnoreCase))\n                    {\n                        object app;\n                        rot.GetObject(curMoniker, out app);\n                        return app as ISldWorks;\n                    }\n                }\n            }\n            finally\n            {\n                if (monikers != null)\n                {\n                    Marshal.ReleaseComObject(monikers);\n                }\n\n                if (rot != null)\n                {\n                    Marshal.ReleaseComObject(rot);\n                }\n\n                if (context != null)\n                {\n                    Marshal.ReleaseComObject(context);\n                }\n            }\n\n            return null;\n        }\n    }\n}\n\n')),(0,r.kt)("p",null,"In the above example new session of SOLIDWORKS is launched by starting new process from SOLIDWORKS application installation path.\n",(0,r.kt)("em",{parentName:"p"},"StartSwApp")," function requires the full path to ",(0,r.kt)("strong",{parentName:"p"},"sldworks.exe")," as first parameter and optional timeout in seconds as second parameter.\nTimeout will ensure that the application won't be locked in case process failed to start.  "),(0,r.kt)("p",null,"You can also make this call asynchronous and display some progress indication in your application while SOLIDWORKS process is starting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"static async System.Threading.Tasks.Task<SolidWorks.Interop.sldworks.ISldWorks> StartSwAppAsync(\n    string appPath, int timeoutSec = 10)\n{\n    return await System.Threading.Tasks.Task.Run(() =>\n    {\n        return StartSwApp(appPath, timeoutSec);\n    });\n}\n")))}u.isMDXComponent=!0},90043:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-ref-c2cc0b319bc14365451c4b7cb7152b06.png"},2046:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/embed-interop-types-a542250abb925bb34447ee9faca7771c.png"},98852:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/new-project-8c3c8b93d341720c31dcd2d84cf8afdf.png"},29790:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/proj-template-4c2e64a2de803d4311857327bde326b7.png"}}]);