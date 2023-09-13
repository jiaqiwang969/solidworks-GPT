"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[95694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,m=p["".concat(d,".").concat(g)]||p[g]||u[g]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},98666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"Starting SOLIDWORKS application in background (hidden)",caption:"Start In Background",description:"Instructions of how to start SOLIDWORKS application to be used by stand-alone automation tool in background (hidden)",image:"invisible-app.png",labels:["background","invisible"]},i=void 0,s={unversionedId:"codestack/solidworks-api/getting-started/stand-alone/start-background/index",id:"codestack/solidworks-api/getting-started/stand-alone/start-background/index",title:"Starting SOLIDWORKS application in background (hidden)",description:"Instructions of how to start SOLIDWORKS application to be used by stand-alone automation tool in background (hidden)",source:"@site/docs/codestack/solidworks-api/getting-started/stand-alone/start-background/index.md",sourceDirName:"codestack/solidworks-api/getting-started/stand-alone/start-background",slug:"/codestack/solidworks-api/getting-started/stand-alone/start-background/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/stand-alone/start-background/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/stand-alone/start-background/index.md",tags:[],version:"current",frontMatter:{title:"Starting SOLIDWORKS application in background (hidden)",caption:"Start In Background",description:"Instructions of how to start SOLIDWORKS application to be used by stand-alone automation tool in background (hidden)",image:"invisible-app.png",labels:["background","invisible"]},sidebar:"tutorialSidebar",previous:{title:"Create VB.NET Stand-Alone (exe) application for SOLIDWORKS",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/stand-alone/connect-vbnet/"},next:{title:"Importing and exporting files using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/import-export/"}},d={},l=[],c={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hidden SOLIDWORKS application",src:n(43089).Z,width:"1010",height:"741"}),"{ width=350 }"),(0,a.kt)("p",null,"In some cases when using the stand-alone application it might be beneficial to start application in background (invisible). This approach provides better user experience and better performance."),(0,a.kt)("p",null,"Any windows process can be started with its main Window to be hidden by using the following ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.processstartinfo"},"ProcessStartInfo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var prcInfo = new ProcessStartInfo()\n{\n    FileName = appPath,\n    CreateNoWindow = true,\n    WindowStyle = ProcessWindowStyle.Hidden\n};\n")),(0,a.kt)("p",null,"However for SOLIDWORKS application this code might not always work. Alternative way to hide the window would be using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/winuser/nf-winuser-showwindow"},"ShowWindow")," Windows32 API. It is required to wait until the handle is created and SOLIDWORKS fully loaded before applying this method."),(0,a.kt)("p",null,"In addition to above, it is beneficial to use the ",(0,a.kt)("em",{parentName:"p"},"/r")," argument when starting SOLIDWORKS instance. This argument would allow to hide the splash screen and speed-up the startup. For SOLIDWORKS Professional and Premium it is also possible to use the ",(0,a.kt)("em",{parentName:"p"},"/b")," argument to start SOLIDWORKS in background (still visible)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"/b")," flag is handled by SOLIDWORKS Task Scheduler and won't work for SOLIDWORKS Standard as Task Scheduler is not included into this package.")),(0,a.kt)("p",null,"Function below considers all points above and starts new session of SOLIDWORKS hidden. Use this function in conjunction with the code from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/connect-csharp/"},"Create C# Stand-Alone Application"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Some of the API method might not execute or behave incorrectly with SOLIDWORKS application being invisible.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'private static ISldWorks StartSwAppBackground(string appPath, int timeoutSec = 20)\n{\n    var timeout = TimeSpan.FromSeconds(timeoutSec);\n\n    var startTime = DateTime.Now;\n\n    var prcInfo = new ProcessStartInfo()\n    {\n        FileName = appPath,\n        Arguments = "/r", //no splash screen\n        CreateNoWindow = true,\n        WindowStyle = ProcessWindowStyle.Hidden\n    };\n\n    var prc = Process.Start(prcInfo);\n    \n    ISldWorks app = null;\n\n    var isLoaded = false;\n\n    var onIdleFunc = new DSldWorksEvents_OnIdleNotifyEventHandler(() =>\n    {\n        isLoaded = true;\n        return 0;\n    });\n\n    try\n    {\n\n        while (!isLoaded)\n        {\n            if (DateTime.Now - startTime > timeout)\n            {\n                throw new TimeoutException();\n            }\n\n            if (app == null)\n            {\n                app = GetSwAppFromProcess(prc.Id);\n\n                if (app != null)\n                {\n                    (app as SldWorks).OnIdleNotify += onIdleFunc;\n                }\n            }\n\n            System.Threading.Thread.Sleep(100);\n        }\n\n        if (app != null)\n        {\n            const int HIDE = 0;\n            ShowWindow(new IntPtr(app.IFrameObject().GetHWnd()), HIDE);\n        }\n    }\n    catch\n    {\n        throw;\n    }\n    finally\n    {\n        if (app != null)\n        {\n            (app as SldWorks).OnIdleNotify -= onIdleFunc;\n        }\n    }\n\n    return app;\n}\n')))}u.isMDXComponent=!0},43089:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/invisible-app-ab9a244203f5ddb137b96c090ffbeff8.png"}}]);