"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[12513],{3905:(t,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>g});var o=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,o,a=function(t,n){if(null==t)return{};var e,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)e=r[o],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)e=r[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var c=o.createContext({}),l=function(t){var n=o.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=l(t.components);return o.createElement(c.Provider,{value:n},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},w=o.forwardRef((function(t,n){var e=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=l(e),w=a,g=p["".concat(c,".").concat(w)]||p[w]||u[w]||r;return e?o.createElement(g,i(i({ref:n},d),{},{components:e})):o.createElement(g,i({ref:n},d))}));function g(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=e.length,i=new Array(r);i[0]=w;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=t,s[p]="string"==typeof t?t:a,i[1]=s;for(var l=2;l<r;l++)i[l]=e[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,e)}w.displayName="MDXCreateElement"},80107:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=e(87462),a=(e(67294),e(3905));const r={title:"Starting SOLIDWORKS application in background (hidden)",caption:"Start In Background",description:"Instructions of how to start SOLIDWORKS application to be used by stand-alone automation tool in background (hidden)",image:"invisible-app.png",labels:["background","invisible"]},i=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/index",title:"Starting SOLIDWORKS application in background (hidden)",description:"Instructions of how to start SOLIDWORKS application to be used by stand-alone automation tool in background (hidden)",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/index.md",tags:[],version:"current",frontMatter:{title:"Starting SOLIDWORKS application in background (hidden)",caption:"Start In Background",description:"Instructions of how to start SOLIDWORKS application to be used by stand-alone automation tool in background (hidden)",image:"invisible-app.png",labels:["background","invisible"]},sidebar:"tutorialSidebar",previous:{title:"Create C++ Stand-Alone (exe) application for SOLIDWORKS",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-cpp/"},next:{title:"How to utilize SOLIDWORKS API methods within the scripts",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/"}},c={},l=[],d={toc:l},p="wrapper";function u(t){let{components:n,...r}=t;return(0,a.kt)(p,(0,o.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hidden SOLIDWORKS application",src:e(4198).Z,width:"1010",height:"741"}),"{ width=350 }"),(0,a.kt)("p",null,"In some cases when using the stand-alone application it might be beneficial to start application in background (invisible). This approach provides better user experience and better performance."),(0,a.kt)("p",null,"Any windows process can be started with its main Window to be hidden by using the following ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.processstartinfo"},"ProcessStartInfo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var prcInfo = new ProcessStartInfo()\n{\n    FileName = appPath,\n    CreateNoWindow = true,\n    WindowStyle = ProcessWindowStyle.Hidden\n};\n")),(0,a.kt)("p",null,"However for SOLIDWORKS application this code might not always work. Alternative way to hide the window would be using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/winuser/nf-winuser-showwindow"},"ShowWindow")," Windows32 API. It is required to wait until the handle is created and SOLIDWORKS fully loaded before applying this method."),(0,a.kt)("p",null,"In addition to above, it is beneficial to use the ",(0,a.kt)("em",{parentName:"p"},"/r")," argument when starting SOLIDWORKS instance. This argument would allow to hide the splash screen and speed-up the startup. For SOLIDWORKS Professional and Premium it is also possible to use the ",(0,a.kt)("em",{parentName:"p"},"/b")," argument to start SOLIDWORKS in background (still visible)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"/b")," flag is handled by SOLIDWORKS Task Scheduler and won't work for SOLIDWORKS Standard as Task Scheduler is not included into this package.")),(0,a.kt)("p",null,"Function below considers all points above and starts new session of SOLIDWORKS hidden. Use this function in conjunction with the code from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/connect-csharp/"},"Create C# Stand-Alone Application"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Some of the API method might not execute or behave incorrectly with SOLIDWORKS application being invisible.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'private static ISldWorks StartSwAppBackground(string appPath, int timeoutSec = 20)\n{\n    var timeout = TimeSpan.FromSeconds(timeoutSec);\n\n    var startTime = DateTime.Now;\n\n    var prcInfo = new ProcessStartInfo()\n    {\n        FileName = appPath,\n        Arguments = "/r", //no splash screen\n        CreateNoWindow = true,\n        WindowStyle = ProcessWindowStyle.Hidden\n    };\n\n    var prc = Process.Start(prcInfo);\n    \n    ISldWorks app = null;\n\n    var isLoaded = false;\n\n    var onIdleFunc = new DSldWorksEvents_OnIdleNotifyEventHandler(() =>\n    {\n        isLoaded = true;\n        return 0;\n    });\n\n    try\n    {\n\n        while (!isLoaded)\n        {\n            if (DateTime.Now - startTime > timeout)\n            {\n                throw new TimeoutException();\n            }\n\n            if (app == null)\n            {\n                app = GetSwAppFromProcess(prc.Id);\n\n                if (app != null)\n                {\n                    (app as SldWorks).OnIdleNotify += onIdleFunc;\n                }\n            }\n\n            System.Threading.Thread.Sleep(100);\n        }\n\n        if (app != null)\n        {\n            const int HIDE = 0;\n            ShowWindow(new IntPtr(app.IFrameObject().GetHWnd()), HIDE);\n        }\n    }\n    catch\n    {\n        throw;\n    }\n    finally\n    {\n        if (app != null)\n        {\n            (app as SldWorks).OnIdleNotify -= onIdleFunc;\n        }\n    }\n\n    return app;\n}\n')))}u.isMDXComponent=!0},4198:(t,n,e)=>{e.d(n,{Z:()=>o});const o=e.p+"assets/images/invisible-app-ab9a244203f5ddb137b96c090ffbeff8.png"}}]);