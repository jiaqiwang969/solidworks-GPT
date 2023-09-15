"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[83756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u521b\u5efa\u7528\u4e8e SOLIDWORKS API \u81ea\u52a8\u5316\u7684 C# \u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f",image:"proj-template.png",labels:["activator","c#","create instance","example","getobject","rot","sdk","solidworks api"],"redirect-from":["/2018/03/create-c-stand-alone-application-for.html"]},s=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-csharp/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-csharp/index",title:"\u521b\u5efa\u7528\u4e8e SOLIDWORKS API \u81ea\u52a8\u5316\u7684 C# \u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f",description:"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u5c06\u6f14\u793a\u5982\u4f55\u4f7f\u7528 C# \u548c Microsoft Visual Studio \u4ece\u5916\u90e8\u8fdb\u7a0b\uff08\u5373\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\uff0c\u5982 Windows Forms\u3001Windows Console\uff09\u8fde\u63a5\u5230 SOLIDWORKS \u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-csharp/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-csharp",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-csharp/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-csharp/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-csharp/index.md",tags:[],version:"current",frontMatter:{title:"\u521b\u5efa\u7528\u4e8e SOLIDWORKS API \u81ea\u52a8\u5316\u7684 C# \u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f",image:"proj-template.png",labels:["activator","c#","create instance","example","getobject","rot","sdk","solidworks api"],"redirect-from":["/2018/03/create-c-stand-alone-application-for.html"]},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u7528\u4e8e SOLIDWORKS \u7684 C++ \u72ec\u7acb (exe) \u5e94\u7528\u7a0b\u5e8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-cpp/"},next:{title:"\u521b\u5efaVB.NET\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\uff08exe\uff09\u8fde\u63a5\u5230SOLIDWORKS",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-vbnet/"}},c={},l=[{value:"\u521b\u5efa\u65b0\u9879\u76ee",id:"\u521b\u5efa\u65b0\u9879\u76ee",level:2},{value:"\u521b\u5efa\u6216\u8fde\u63a5\u5b9e\u4f8b",id:"\u521b\u5efa\u6216\u8fde\u63a5\u5b9e\u4f8b",level:2},{value:"\u901a\u8fc7 ROT \u83b7\u53d6\u6b63\u5728\u8fd0\u884c\u7684\u5b9e\u4f8b",id:"\u901a\u8fc7-rot-\u83b7\u53d6\u6b63\u5728\u8fd0\u884c\u7684\u5b9e\u4f8b",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u5c06\u6f14\u793a\u5982\u4f55\u4f7f\u7528 C# \u548c Microsoft Visual Studio \u4ece\u5916\u90e8\u8fdb\u7a0b\uff08\u5373\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\uff0c\u5982 Windows Forms\u3001Windows Console\uff09\u8fde\u63a5\u5230 SOLIDWORKS \u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u672c\u6587\u8ba8\u8bba\u7684\u65b9\u6cd5\u7684\u66f4\u8be6\u7ec6\u89e3\u91ca\uff0c\u8bf7\u9605\u8bfb",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/"},"\u4ece\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u8fde\u63a5\u5230 SOLIDWORKS"),"\u6587\u7ae0\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa\u65b0\u9879\u76ee"},"\u521b\u5efa\u65b0\u9879\u76ee"),(0,o.kt)("p",null,"\u6211\u5c06\u4f7f\u7528 Microsoft Visual Studio \u5f00\u53d1\u73af\u5883\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u7248\u672c\u7684 Visual Studio\u3002\u76f8\u540c\u7684\u4ee3\u7801\u5c06\u9002\u7528\u4e8e\u4e13\u4e1a\u7248\u3001Express \u7248\u6216\u793e\u533a\u7248\u3002\u8bf7\u70b9\u51fb\u6b64\u94fe\u63a5\u4e0b\u8f7d",(0,o.kt)("a",{parentName:"p",href:"https://www.visualstudio.com/vs/community/"},"Visual Studio"),"\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00 Visual Studio\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8\u65b0\u9879\u76ee\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5728 Visual Studio \u4e2d\u521b\u5efa\u65b0\u9879\u76ee",src:n(64590).Z,width:"400",height:"202"}),"{ width=400 }"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u9879\u76ee\u6a21\u677f\u3002\u6211\u5efa\u8bae\u4ece\u63a7\u5236\u53f0\u5e94\u7528\u7a0b\u5e8f\u9879\u76ee\u6a21\u677f\u5f00\u59cb\uff0c\u56e0\u4e3a\u5b83\u5305\u542b\u6700\u5c11\u7684\u9884\u751f\u6210\u4ee3\u7801\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u9009\u62e9 C# \u63a7\u5236\u53f0\u5e94\u7528\u7a0b\u5e8f\u9879\u76ee\u6a21\u677f",src:n(97665).Z,width:"640",height:"143"}),"{ width=640 }"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5bf9 SolidWorks \u4e92\u64cd\u4f5c\u5e93\u7684\u5f15\u7528\u3002\u4e92\u64cd\u4f5c\u5e93\u4f4d\u4e8e ",(0,o.kt)("strong",{parentName:"li"},"SOLIDWORKS \u5b89\u88c5\u6587\u4ef6\u5939"),"\\api\\redist\\SolidWorks.Interop.sldworks.dll\uff08\u7528\u4e8e\u9488\u5bf9 Framework 4.0 \u53ca\u66f4\u9ad8\u7248\u672c\u7684\u9879\u76ee\uff09\u548c ",(0,o.kt)("strong",{parentName:"li"},"SOLIDWORKS \u5b89\u88c5\u6587\u4ef6\u5939"),"\\api\\redist\\CLR2\\SolidWorks.Interop.sldworks.dll\uff08\u7528\u4e8e\u9488\u5bf9 Framework 2.0 \u548c 3.5 \u7684\u9879\u76ee\uff09\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5411\u9879\u76ee\u6dfb\u52a0\u7a0b\u5e8f\u96c6\u5f15\u7528",src:n(92645).Z,width:"320",height:"231"}),"{ width=320 }"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u9488\u5bf9 Framework 4.0 \u7684\u9879\u76ee\uff0c\u6211\u5efa\u8bae\u5c06 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/zh-cn/dotnet/framework/interop/type-equivalence-and-embedded-interop-types"},"\u5d4c\u5165\u4e92\u64cd\u4f5c\u7c7b\u578b")),"\u9009\u9879\u8bbe\u7f6e\u4e3a false\u3002\n\u5426\u5219\uff0c\u5728\u8c03\u7528 SOLIDWORKS API \u65f6\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u51fa\u73b0\u7c7b\u578b\u8f6c\u6362\u95ee\u9898\uff0c\u5bfc\u81f4\u884c\u4e3a\u4e0d\u53ef\u9884\u6d4b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5d4c\u5165\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u96c6\u7684\u9009\u9879",src:n(75986).Z,width:"319",height:"320"}),"{ width=320 }"),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u8fde\u63a5\u5230 SOLIDWORKS \u5b9e\u4f8b\u7684\u4ee3\u7801\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa\u6216\u8fde\u63a5\u5b9e\u4f8b"},"\u521b\u5efa\u6216\u8fde\u63a5\u5b9e\u4f8b"),(0,o.kt)("p",null,"\u8fde\u63a5\u5230 COM \u670d\u52a1\u5668\u6700\u5e38\u89c1\u4e14\u6700\u5feb\u901f\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/zh-cn/library/system.activator.createinstance(v=vs.110).aspx"},"Activator::CreateInstance")," \u65b9\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'var progId = "SldWorks.Application";\n\nvar progType = System.Type.GetTypeFromProgID(progId);\n\nvar app = System.Activator.CreateInstance(progType) as SolidWorks.Interop.sldworks.ISldWorks;\napp.Visible = true;\n')),(0,o.kt)("p",null,"\u6b64\u65b9\u6cd5\u5c06\u6839\u636e\u7c7b\u578b\u5b9a\u4e49\u6784\u9020\u7c7b\u578b\u7684\u5b9e\u4f8b\u3002\u7531\u4e8e SOLIDWORKS \u5e94\u7528\u7a0b\u5e8f\u5df2\u6ce8\u518c\u4e3a COM \u670d\u52a1\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/zh-cn/library/system.type.gettypefromprogid(v=vs.110).aspx"},"Type::GetTypeFromProgID")," \u65b9\u6cd5\u6839\u636e\u5176\u7a0b\u5e8f\u6807\u8bc6\u7b26\u521b\u5efa\u7c7b\u578b\u3002\n\u8bf7\u9605\u8bfb",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone#method-a---activator-and-progid"},"\u4ece\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u8fde\u63a5\u5230 SOLIDWORKS"),"\u6587\u7ae0\uff0c\u4e86\u89e3\u6b64\u65b9\u6cd5\u7684\u9650\u5236\u8bf4\u660e\u3002"),(0,o.kt)("p",null,"\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/zh-cn/library/system.runtime.interopservices.marshal.getactiveobject(v=vs.110).aspx"},"Marshal::GetActiveObject")," \u65b9\u6cd5\u8fde\u63a5\u5230\u6d3b\u52a8\uff08\u5df2\u542f\u52a8\uff09\u7684 SOLIDWORKS \u4f1a\u8bdd\u3002\n\u6b64\u65b9\u6cd5\u5c06\u786e\u4fdd\u4e0d\u4f1a\u521b\u5efa\u65b0\u7684 SOLIDWORKS \u5b9e\u4f8b\uff0c\u5e76\u4e14\u5982\u679c\u6ca1\u6709\u6b63\u5728\u8fd0\u884c\u7684 SOLIDWORKS \u4f1a\u8bdd\u53ef\u8fde\u63a5\uff0c\u5219\u4f1a\u5f15\u53d1\u5f02\u5e38\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'var progId = "SldWorks.Application";\n\nvar app = System.Runtime.InteropServices.Marshal.GetActiveObject(progId) as SolidWorks.Interop.sldworks.ISldWorks;\n')),(0,o.kt)("h2",{id:"\u901a\u8fc7-rot-\u83b7\u53d6\u6b63\u5728\u8fd0\u884c\u7684\u5b9e\u4f8b"},"\u901a\u8fc7 ROT \u83b7\u53d6\u6b63\u5728\u8fd0\u884c\u7684\u5b9e\u4f8b"),(0,o.kt)("p",null,"\u4e3a\u4e86\u8fde\u63a5\u5230\u5df2\u7ecf\u8fd0\u884c\u7684\u7279\u5b9a SOLIDWORKS \u4f1a\u8bdd\u6216\u80fd\u591f\u521b\u5efa\u591a\u4e2a\u4f1a\u8bdd\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Running Object Table (ROT) API\u3002\n\u6709\u5173\u6b64\u65b9\u6cd5\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone#method-b---running-object-table-rot"},"\u4ece\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u8fde\u63a5\u5230 SOLIDWORKS"),"\u6587\u7ae0\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Diagnostics;\nusing System.Linq;\nusing System.Runtime.InteropServices;\nusing System.Runtime.InteropServices.ComTypes;\nusing SolidWorks.Interop.sldworks;\n\nnamespace CodeStack.Sample\n{\n    class Program\n    {\n        [DllImport("ole32.dll")]\n        private static extern int CreateBindCtx(uint reserved, out IBindCtx ppbc);\n        \n        static void Main(string[] args)\n        {\n            const string SW_PATH = @"C:\\Program Files\\SOLIDWORKS Corp\\SOLIDWORKS\\SLDWORKS.exe";\n\n            try\n            {\n                var app = StartSwApp(SW_PATH);\n                Console.WriteLine(app.RevisionNumber());\n            }\n            catch(Exception ex)\n            {\n                Console.WriteLine("Failed to connect to SOLIDWORKS instance: " + ex.Message);\n            }\n\n            Console.ReadLine();\n        }\n\n        private static ISldWorks StartSwApp(string appPath, int timeoutSec = 10)\n        {\n            var timeout = TimeSpan.FromSeconds(timeoutSec);\n\n            var startTime = DateTime.Now;\n\n            var prc = Process.Start(appPath);\n            ISldWorks app = null;\n\n            while (app == null)\n            {\n                if (DateTime.Now - startTime > timeout)\n                {\n                    throw new TimeoutException();\n                }\n\n                app = GetSwAppFromProcess(prc.Id);\n            }\n\n            return app;\n        }\n\n        private static ISldWorks GetSwAppFromProcess(int processId)\n        {\n            var monikerName = "SolidWorks_PID_" + processId.ToString();\n\n            IBindCtx context = null;\n            IRunningObjectTable rot = null;\n            IEnumMoniker monikers = null;\n\n            try\n            {\n                CreateBindCtx(0, out context);\n\n                context.GetRunningObjectTable(out rot);\n                rot.EnumRunning(out monikers);\n\n                var moniker = new IMoniker[1];\n\n                while (monikers.Next(1, moniker, IntPtr.Zero) == 0)\n                {\n                    var curMoniker = moniker.First();\n\n                    string name = null;\n\n                    if (curMoniker != null)\n                    {\n                        try\n                        {\n                            curMoniker.GetDisplayName(context, null, out name);\n                        }\n                        catch (UnauthorizedAccessException)\n                        {\n                        }\n                    }\n\n                    if (string.Equals(monikerName,\n                        name, StringComparison.CurrentCultureIgnoreCase))\n                    {\n                        object app;\n                        rot.GetObject(curMoniker, out app);\n                        return app as ISldWorks;\n                    }\n                }\n            }\n            finally\n            {\n                if (monikers != null)\n                {\n                    Marshal.ReleaseComObject(monikers);\n                }\n\n                if (rot != null)\n                {\n                    Marshal.ReleaseComObject(rot);\n                }\n\n                if (context != null)\n                {\n                    Marshal.ReleaseComObject(context);\n                }\n            }\n\n            return null;\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u901a\u8fc7\u4ece SOLIDWORKS \u5e94\u7528\u7a0b\u5e8f\u5b89\u88c5\u8def\u5f84\u542f\u52a8\u65b0\u8fdb\u7a0b\u6765\u542f\u52a8 SOLIDWORKS \u7684\u65b0\u4f1a\u8bdd\u3002\n",(0,o.kt)("em",{parentName:"p"},"StartSwApp")," \u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,o.kt)("strong",{parentName:"p"},"sldworks.exe")," \u7684\u5b8c\u6574\u8def\u5f84\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u53ef\u9009\u7684\u8d85\u65f6\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002\n\u8d85\u65f6\u65f6\u95f4\u5c06\u786e\u4fdd\u5728\u8fdb\u7a0b\u542f\u52a8\u5931\u8d25\u65f6\uff0c\u5e94\u7528\u7a0b\u5e8f\u4e0d\u4f1a\u88ab\u9501\u5b9a\u3002"),(0,o.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u5c06\u6b64\u8c03\u7528\u8bbe\u7f6e\u4e3a\u5f02\u6b65\uff0c\u5e76\u5728 SOLIDWORKS \u8fdb\u7a0b\u542f\u52a8\u65f6\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u663e\u793a\u4e00\u4e9b\u8fdb\u5ea6\u6307\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"static async System.Threading.Tasks.Task<SolidWorks.Interop.sldworks.ISldWorks> StartSwAppAsync(\n    string appPath, int timeoutSec = 10)\n{\n    return await System.Threading.Tasks.Task.Run(() =>\n    {\n        return StartSwApp(appPath, timeoutSec);\n    });\n}\n")))}u.isMDXComponent=!0},92645:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/add-ref-c2cc0b319bc14365451c4b7cb7152b06.png"},75986:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/embed-interop-types-a542250abb925bb34447ee9faca7771c.png"},64590:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/new-project-8c3c8b93d341720c31dcd2d84cf8afdf.png"},97665:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/proj-template-4c2e64a2de803d4311857327bde326b7.png"}}]);