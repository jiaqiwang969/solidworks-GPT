"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[64333],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>g});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),d=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=d(t.components);return o.createElement(c.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},w=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=d(n),w=r,g=p["".concat(c,".").concat(w)]||p[w]||u[w]||a;return n?o.createElement(g,i(i({ref:e},l),{},{components:n})):o.createElement(g,i({ref:e},l))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=w;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}w.displayName="MDXCreateElement"},56427:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={title:"Starting SOLIDWORKS application in background (hidden)",caption:"Start In Background",description:"Instructions of how to start SOLIDWORKS application to be used by stand-alone automation tool in background (hidden)",image:"invisible-app.png",labels:["background","invisible"]},i=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/index",title:"Starting SOLIDWORKS application in background (hidden)",description:"Instructions of how to start SOLIDWORKS application to be used by stand-alone automation tool in background (hidden)",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/index.md",tags:[],version:"current",frontMatter:{title:"Starting SOLIDWORKS application in background (hidden)",caption:"Start In Background",description:"Instructions of how to start SOLIDWORKS application to be used by stand-alone automation tool in background (hidden)",image:"invisible-app.png",labels:["background","invisible"]},sidebar:"tutorialSidebar",previous:{title:"Create C++ Stand-Alone (exe) application for SOLIDWORKS",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-cpp/"},next:{title:"How to utilize SOLIDWORKS API methods within the scripts",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/"}},c={},d=[],l={toc:d},p="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(p,(0,o.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hidden SOLIDWORKS application",src:n(90815).Z,width:"1010",height:"741"}),"{ width=350 }"),(0,r.kt)("p",null,"In some cases when using the stand-alone application it might be beneficial to start application in background (invisible). This approach provides better user experience and better performance."),(0,r.kt)("p",null,"Any windows process can be started with its main Window to be hidden by using the following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.processstartinfo"},"ProcessStartInfo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"var prcInfo = new ProcessStartInfo()\n{\n    FileName = appPath,\n    CreateNoWindow = true,\n    WindowStyle = ProcessWindowStyle.Hidden\n};\n")),(0,r.kt)("p",null,"However for SOLIDWORKS application this code might not always work. Alternative way to hide the window would be using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/winuser/nf-winuser-showwindow"},"ShowWindow")," Windows32 API. It is required to wait until the handle is created and SOLIDWORKS fully loaded before applying this method."),(0,r.kt)("p",null,"In addition to above, it is beneficial to use the ",(0,r.kt)("em",{parentName:"p"},"/r")," argument when starting SOLIDWORKS instance. This argument would allow to hide the splash screen and speed-up the startup. For SOLIDWORKS Professional and Premium it is also possible to use the ",(0,r.kt)("em",{parentName:"p"},"/b")," argument to start SOLIDWORKS in background (still visible)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"/b")," flag is handled by SOLIDWORKS Task Scheduler and won't work for SOLIDWORKS Standard as Task Scheduler is not included into this package.")),(0,r.kt)("p",null,"Function below considers all points above and starts new session of SOLIDWORKS hidden. Use this function in conjunction with the code from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/connect-csharp/"},"Create C# Stand-Alone Application"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Some of the API method might not execute or behave incorrectly with SOLIDWORKS application being invisible.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'private static ISldWorks StartSwAppBackground(string appPath, int timeoutSec = 20)\n{\n    var timeout = TimeSpan.FromSeconds(timeoutSec);\n\n    var startTime = DateTime.Now;\n\n    var prcInfo = new ProcessStartInfo()\n    {\n        FileName = appPath,\n        Arguments = "/r", //no splash screen\n        CreateNoWindow = true,\n        WindowStyle = ProcessWindowStyle.Hidden\n    };\n\n    var prc = Process.Start(prcInfo);\n    \n    ISldWorks app = null;\n\n    var isLoaded = false;\n\n    var onIdleFunc = new DSldWorksEvents_OnIdleNotifyEventHandler(() =>\n    {\n        isLoaded = true;\n        return 0;\n    });\n\n    try\n    {\n\n        while (!isLoaded)\n        {\n            if (DateTime.Now - startTime > timeout)\n            {\n                throw new TimeoutException();\n            }\n\n            if (app == null)\n            {\n                app = GetSwAppFromProcess(prc.Id);\n\n                if (app != null)\n                {\n                    (app as SldWorks).OnIdleNotify += onIdleFunc;\n                }\n            }\n\n            System.Threading.Thread.Sleep(100);\n        }\n\n        if (app != null)\n        {\n            const int HIDE = 0;\n            ShowWindow(new IntPtr(app.IFrameObject().GetHWnd()), HIDE);\n        }\n    }\n    catch\n    {\n        throw;\n    }\n    finally\n    {\n        if (app != null)\n        {\n            (app as SldWorks).OnIdleNotify -= onIdleFunc;\n        }\n    }\n\n    return app;\n}\n')))}u.isMDXComponent=!0},90815:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/invisible-app-ab9a244203f5ddb137b96c090ffbeff8.png"}}]);