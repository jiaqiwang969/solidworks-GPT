"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[26402],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>w});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},s=Object.keys(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var a=o.createContext({}),p=function(n){var e=o.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=p(n.components);return o.createElement(a.Provider,{value:e},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,s=n.originalType,a=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),d=p(t),m=r,w=d["".concat(a,".").concat(m)]||d[m]||u[m]||s;return t?o.createElement(w,i(i({ref:e},c),{},{components:t})):o.createElement(w,i({ref:e},c))}));function w(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=t.length,i=new Array(s);i[0]=m;var l={};for(var a in e)hasOwnProperty.call(e,a)&&(l[a]=e[a]);l.originalType=n,l[d]="string"==typeof n?n:r,i[1]=l;for(var p=2;p<s;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64551:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const s={layout:"sw-tool",title:"\u4f7f\u7528\u76f8\u540c\u540d\u79f0\u7684\u5b50\u6587\u4ef6\u5939\u5bfc\u5165STEP\u6587\u4ef6\u5e76\u4fdd\u5b58\u4e3aSOLIDWORKS\u6587\u4ef6\u7684\u5b8f",caption:"\u5bfc\u5165STEP\u6587\u4ef6"},i=void 0,l={unversionedId:"codestack/solidworks-api/import-export/import-step/index",id:"codestack/solidworks-api/import-export/import-step/index",title:"\u4f7f\u7528\u76f8\u540c\u540d\u79f0\u7684\u5b50\u6587\u4ef6\u5939\u5bfc\u5165STEP\u6587\u4ef6\u5e76\u4fdd\u5b58\u4e3aSOLIDWORKS\u6587\u4ef6\u7684\u5b8f",description:"\u4f7f\u7528VBA\u5b8f\u5c06STEP\u6587\u4ef6\u5bfc\u5165\u5e76\u4fdd\u5b58\u4e3a\u5177\u6709\u76f8\u540c\u540d\u79f0\u7684\u5b50\u6587\u4ef6\u5939\u7684SOLIDWORKS\u6587\u4ef6\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/import-export/import-step/index.md",sourceDirName:"codestack/solidworks-api/import-export/import-step",slug:"/codestack/solidworks-api/import-export/import-step/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/import-step/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/import-export/import-step/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528\u76f8\u540c\u540d\u79f0\u7684\u5b50\u6587\u4ef6\u5939\u5bfc\u5165STEP\u6587\u4ef6\u5e76\u4fdd\u5b58\u4e3aSOLIDWORKS\u6587\u4ef6\u7684\u5b8f",caption:"\u5bfc\u5165STEP\u6587\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u96f6\u4ef6\u6216\u9009\u5b9a\u7684\u7ec4\u4ef6\u5bfc\u51fa\u4e3aSTL",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/export-stl/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u5916\u90e8\u6587\u4ef6\u5bfc\u5165\u5230\u6d3b\u52a8\u96f6\u4ef6\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/import-to-active-part/"}},a={},p=[{value:"group: \u5bfc\u5165/\u5bfc\u51fa",id:"group-\u5bfc\u5165\u5bfc\u51fa",level:2},{value:"\u4e0a\u4e0b\u6587\u60c5\u51b5\uff1a",id:"\u4e0a\u4e0b\u6587\u60c5\u51b5",level:2},{value:"SOLIDWORKS\u6709\u4e00\u4e2a\u5de5\u5177\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff1a\u4efb\u52a1\u8ba1\u5212\u7a0b\u5e8f",id:"solidworks\u6709\u4e00\u4e2a\u5de5\u5177\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u4e00\u70b9\u4efb\u52a1\u8ba1\u5212\u7a0b\u5e8f",level:2},{value:"\u4f7f\u7528\u7b80\u5355\u5b8f\u7684\u6279\u5904\u7406+",id:"\u4f7f\u7528\u7b80\u5355\u5b8f\u7684\u6279\u5904\u7406",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2}],c={toc:p},d="wrapper";function u(n){let{components:e,...s}=n;return(0,r.kt)(d,(0,o.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f7f\u7528VBA\u5b8f\u5c06STEP\u6587\u4ef6\u5bfc\u5165\u5e76\u4fdd\u5b58\u4e3a\u5177\u6709\u76f8\u540c\u540d\u79f0\u7684\u5b50\u6587\u4ef6\u5939\u7684SOLIDWORKS\u6587\u4ef6\u3002\nimage: import-step-icon.svg\nlabels: ","[STEP, \u5bfc\u5165, \u6279\u5904\u7406+]"),(0,r.kt)("h2",{id:"group-\u5bfc\u5165\u5bfc\u51fa"},"group: \u5bfc\u5165/\u5bfc\u51fa"),(0,r.kt)("p",null,"\u4f5c\u8005\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/eddyalleman/"},"Eddy Alleman")," (",(0,r.kt)("a",{parentName:"p",href:"https://www.edalsolutions.be/index.php/en/"},"EDAL Solutions"),")"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u7528\u4e8e\u5bfc\u5165STEP\u6587\u4ef6\u7684\u9009\u9879",src:t(15275).Z,width:"298",height:"594"}),"{ width=400 }"),(0,r.kt)("h2",{id:"\u4e0a\u4e0b\u6587\u60c5\u51b5"},"\u4e0a\u4e0b\u6587\u60c5\u51b5\uff1a"),(0,r.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709\u6570\u767e\u4e2aSTEP\u6587\u4ef6\uff0c\u90fd\u5728\u4f9b\u5e94\u5546\u7684\u540c\u4e00\u4e2a\u6587\u4ef6\u5939\u4e2d\u3002\n\u6211\u4eec\u60f3\u8981\u5c06\u5b83\u4eec\u6784\u5efa\u6210\u4e00\u4e2a\u5e93\uff0c\u4ee5\u4fbf\u5728\u8bbe\u8ba1\u4e2d\u53cd\u590d\u91cd\u7528\u3002\n\u4e3a\u4e86\u5c06\u6587\u4ef6\u5f7c\u6b64\u5206\u5f00\uff0c\u6211\u4eec\u5e0c\u671b\u6bcf\u4e2aSTEP\u6587\u4ef6\u90fd\u5728\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u5939\u4e2d\u5bfc\u51fa\u3002"),(0,r.kt)("h2",{id:"solidworks\u6709\u4e00\u4e2a\u5de5\u5177\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u4e00\u70b9\u4efb\u52a1\u8ba1\u5212\u7a0b\u5e8f"},"SOLIDWORKS\u6709\u4e00\u4e2a\u5de5\u5177\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff1a\u4efb\u52a1\u8ba1\u5212\u7a0b\u5e8f"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4efb\u52a1\u8ba1\u5212\u7a0b\u5e8f\u5bfc\u5165",src:t(32809).Z,width:"196",height:"236"}),"{ width=350 }"),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u9664\u975e\u6211\u4eec\u9996\u5148\u5c06STEP\u6587\u4ef6\u653e\u5165\u5355\u72ec\u7684\u6587\u4ef6\u5939\u4e2d\uff0c\u7136\u540e\u5c06\u5bfc\u51fa\u7684SOLIDWORKS\u6587\u4ef6\u4fdd\u5b58\u5230\u8fd9\u4e9b\u5b50\u6587\u4ef6\u5939\u4e2d\uff0c\u5426\u5219\u6240\u6709\u7684STEP\u6587\u4ef6\u90fd\u5c06\u6700\u7ec8\u4fdd\u5b58\u5728\u540c\u4e00\u4e2a\u6587\u4ef6\u5939\u4e2d\u3002\n\u8fd9\u662f\u5f88\u591a\u624b\u52a8\u5de5\u4f5c\u3002"),(0,r.kt)("p",null,"\u800c\u4e14\uff0c\u6211\u4eec\u4e0d\u786e\u5b9a\u662f\u5426\u5b58\u5728\u91cd\u590d\u6587\u4ef6\u4ee5\u53ca\u8fd9\u4e9b\u6587\u4ef6\u662f\u5426\u5177\u6709\u4e0d\u540c\u7684\u8be6\u7ec6\u7ea7\u522b\u3002\n\u6211\u4eec\u5e0c\u671b\u5728\u5bfc\u5165\u540e\u80fd\u591f\u9009\u62e9\u6700\u597d\u7684\u6587\u4ef6\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u8986\u76d6\u5df2\u5904\u7406\u7684\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u90a3\u4e48\uff0c\u6211\u4eec\u5982\u4f55\u81ea\u52a8\u5316\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u907f\u514d\u624b\u52a8\u521b\u5efa\u6240\u6709\u8fd9\u4e9b\u5b50\u6587\u4ef6\u5939\u5462\uff1f"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u7b80\u5355\u5b8f\u7684\u6279\u5904\u7406"},"\u4f7f\u7528\u7b80\u5355\u5b8f\u7684\u6279\u5904\u7406+"),(0,r.kt)("p",null,"\u6279\u5904\u7406+\u662f\u4e00\u4e2a\u514d\u8d39\u5de5\u5177\uff0c\u662fCAD+\u7684\u4e00\u90e8\u5206\uff0c\u5b83\u5904\u7406\u6279\u5904\u7406\u6587\u4ef6\u65f6\u5904\u7406\u4e86\u5f88\u591a\u7279\u6b8a\u60c5\u51b5\u3002\n\u6211\u4eec\u9009\u62e9\u8fd9\u4e2a\u9009\u9879\u662f\u56e0\u4e3a\u5b83\u6613\u4e8e\u8bbe\u7f6e\uff0c\u5e76\u4e14\u53ef\u4ee5\u5b8c\u5168\u63a7\u5236\u6574\u4e2a\u8fc7\u7a0b\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5b8f\u786e\u5b9aSTEP\u6587\u4ef6\u662f\u88c5\u914d\u4f53\u8fd8\u662f\u96f6\u4ef6\u6587\u4ef6\u3002\n\u5982\u679c\u662f\u88c5\u914d\u4f53\uff0c\u5219\u7ec4\u4ef6\u5c06\u4fdd\u5b58\u4e3a\u5355\u72ec\u7684\u96f6\u4ef6\u6587\u4ef6\uff08\u53d6\u51b3\u4e8e\u7cfb\u7edf\u9009\u9879\uff0c\u8bf7\u53c2\u89c1\u4e0a\u9762\u7684\u56fe\u50cf\uff09\u3002"),(0,r.kt)("p",null,"\u8be5\u5b8f\u5728\u4e0eSTEP\u6587\u4ef6\u76f8\u540c\u4f4d\u7f6e\u4e14\u5177\u6709\u76f8\u540c\u540d\u79f0\u7684\u5b50\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u6587\u4ef6\u3002\n\u8fd9\u6709\u52a9\u4e8e\u5c06\u5c5e\u4e8e\u4e00\u8d77\u7684\u6587\u4ef6\u4e0e\u5176\u4ed6\u5bfc\u5165\u6587\u4ef6\u5206\u5f00\u3002\n\u5982\u679c\u60a8\u4e0d\u5728\u6bcf\u6b21\u90fd\u653e\u5165\u65b0\u6587\u4ef6\u5939\u4e2d\uff0c\u53ef\u80fd\u4f1a\u5f97\u5230\u76f8\u540c\u7684\u6587\u4ef6\u4e24\u6b21\uff0c\u5e76\u4e14\u6700\u540e\u4e00\u6b21\u4fdd\u5b58\u5c06\u8986\u76d6\u4e4b\u524d\u7684\u6587\u4ef6\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u786e\u4fdd\u5b83\u4eec\u662f\u76f8\u540c\u7684\u3002"),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("p",null,"\uff081\uff09\u786e\u4fdd\u60a8\u6ca1\u6709\u8bbe\u7f6e\u7cfb\u7edf\u9009\u9879\u4e3a\uff1a\n\u63d0\u793a\u7528\u6237\u9009\u62e9\u6587\u6863\u6a21\u677f\n\u4f7f\u7528\u201c\u59cb\u7ec8\u4f7f\u7528\u8fd9\u4e9b\u9ed8\u8ba4\u6587\u6863\u6a21\u677f\u201d\u4ee3\u66ff\n\u5426\u5219\uff0cSolidWorks\u4f1a\u4e00\u76f4\u8981\u6c42\u9009\u62e9\u6587\u6863\u6a21\u677f\u3002"),(0,r.kt)("p",null,"\uff082\uff09\u8bbe\u7f6e\u7cfb\u7edf\u9009\u9879 > \u5bfc\u5165 > \u542f\u75283D\u4e92\u8fde \u5173\u95ed\n\u5173\u4e8e3D\u4e92\u8fde\u7684\u6587\u6863\uff1a\n\u76f4\u63a5\u5c06\u4e13\u6709CAD\u6570\u636e\u63d2\u5165SOLIDWORKS\u88c5\u914d\uff0c\u800c\u65e0\u9700\u5c06\u5176\u8f6c\u6362\u4e3aSOLIDWORKS\u6587\u4ef6\u3002\n\u800c\u6211\u4eec\u6b63\u662f\u8981\u8fdb\u884c\u8f6c\u6362\u30023D\u4e92\u8fde\u53ea\u662f\u521b\u5efa\u4e86\u4e00\u4e2a\u6307\u5411STEP\u6587\u4ef6\u7684\u94fe\u63a5\uff0c\u5e76\u5728\u9700\u8981\u65f6\u8fdb\u884c\u66f4\u65b0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5728\u6279\u5904\u7406+\u4e2d\u4f7f\u7528\u7684\u8bbe\u7f6e",src:t(95606).Z,width:"1109",height:"95"}),"{ width=800 }"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Option Explicit\n\n\'\u5982\u679c\u5df2\u7ecf\u5b58\u5728Solidworks\u6587\u4ef6\uff0c\u5219\u8986\u76d6\u3002\nConst OVERWRITE As Boolean = False\n\n\'\u8bbe\u7f6e\u8981\u4fdd\u5b58\u5230\u7684\u8def\u5f84\nConst DESTINATION_PATH As String = "C:\\temp"\n\n\nSub main()\n\ntry_:\n\n    \'\u5982\u679c\u8981\u5728\u8fd0\u884cBatch+\u65f6\u8c03\u8bd5\u6b64\u4ee3\u7801\uff0c\u8bf7\u53d6\u6d88\u4e0b\u9762\u4e00\u884c\u7684\u6ce8\u91ca\n    \'Debug.Assert False\n    \n    On Error GoTo catch_\n    \n    \'\u6d4b\u8bd5DESTINATION PATH\u662f\u5426\u5b58\u5728\n    If FolderExists(DESTINATION_PATH) Then\n\n        Dim swApp As SldWorks.SldWorks\n        Set swApp = Application.SldWorks\n        \n        \'\u5982\u679c\u8981\u5728\u6ca1\u6709\u4fdd\u5b58\u7684\u60c5\u51b5\u4e0b\u6d4b\u8bd5\uff0c\u8bf7\u5148\u6253\u5f00\u4e00\u4e2astep\u6587\u4ef6\n        Dim swModel As SldWorks.ModelDoc2\n        Set swModel = swApp.ActiveDoc\n        \n        If Not swModel Is Nothing Then\n                    \n             \'--- \u83b7\u53d6\u6ca1\u6709\u6269\u5c55\u540d\u548c\u8def\u5f84\u7684\u6587\u4ef6\u540d\n             \'\u53ea\u83b7\u53d6\u6587\u6863\u540d\u79f0\uff08\u5728SolidWorks\u7684\u6807\u9898\u680f\u4e2d\u663e\u793a\uff09\n             Dim swxFilenaam As String\n             swxFilenaam = swModel.GetTitle\n             \n             \'--- \u83b7\u53d6\u6587\u4ef6\u6269\u5c55\u540d\n             \'\u786e\u5b9astep\u6587\u4ef6\u662f\u88c5\u914d\u4f53\u8fd8\u662f\u96f6\u4ef6\u6587\u4ef6\uff0c\u4ee5\u6b63\u786e\u8bbe\u7f6e\u6587\u4ef6\u6269\u5c55\u540d\n             Dim Extension As String\n             Select Case swModel.GetType\n                \n                Case swDocPART:\n                    Extension = ".SLDPRT"\n                \n                Case swDocASSEMBLY:\n                    Extension = ".SLDASM"\n                    \n             End Select\n            \n            \'--- \u83b7\u53d6\u8def\u5f84\n             Dim newPath As String\n             newPath = DESTINATION_PATH\n          \n             \n            \'\u6dfb\u52a0\u5b50\u6587\u4ef6\u5939\u7684\u540d\u79f0\n             Dim subfoldername As String            \n             subfoldername = "\\" + swxFilenaam + "\\"\n             newPath = DESTINATION_PATH + subfoldername    \n            \n            \'--- \u5982\u679c\u6587\u4ef6\u5939\u4e0d\u5b58\u5728\uff0c\u5219\u521b\u5efa\u5b83\n             CreateFolderIfNotExisting (newPath)\n            \n            \'--- \u521b\u5efa\u8981\u4fdd\u5b58\u5230\u7684\u6587\u4ef6\u540d\n            swxFilenaam = newPath + swxFilenaam + Extension\n            \n            \'--- \u5982\u679cswxFilenaam\u5df2\u7ecf\u5b58\u5728\u4e14OVERWRITE = False\n            If FileExists(swxFilenaam) And OVERWRITE = False Then\n                \'\u4ec0\u4e48\u90fd\u4e0d\u505a\n            Else\n        \n                \'\u786e\u4fdd\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u5185\u5bb9\uff0c\u5426\u5219\u53ea\u4fdd\u5b58\u6240\u9009\u5b9e\u4f53\n                swModel.ClearSelection2 False\n        \n        \'--- \u4fdd\u5b58step\u6587\u4ef6\n                Dim lErrors As Long\n                Dim lWarnings As Long\n                Dim boolstatus As Boolean\n                boolstatus = swModel.Extension.SaveAs(swxFilenaam, 0, swSaveAsOptions_e.swSaveAsOptions_Silent, Nothing, lErrors, lWarnings)\n                Debug.Assert boolstatus\n                                      \n                \'swApp.CloseDoc (swxFilenaam)\'\u4e0d\u8981\u4f7f\u7528\u5b83\uff0c\u8ba9Batch+\u5904\u7406\u5b83\n             \n             End If \'\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728\n             \n        Else\n            \n            MsgBox "\u6ca1\u6709\u6253\u5f00\u7684\u6587\u6863"\n            \n        End If \'swModel\u4e3aNothing\n    \n    Else\n    \n        MsgBox DESTINATION_PATH + "\u4e0d\u5b58\u5728"\n        \n    End If \'DESTINATION_PATH\u5b58\u5728\n    \ncatch_:\n\n    Debug.Print "\u9519\u8bef\uff1a" & Err.Number & "\uff1a" & Err.source & "\uff1a" & Err.Description\n    GoTo finally_\n    \nfinally_:\n    Debug.Print "\u5b8c\u6210\u5b8fImportStep"\n    \nEnd Sub\n\nFunction CreateFolderIfNotExisting(newPath As String)\n\n    If FolderExists(newPath) Then\n         \'\u4ec0\u4e48\u90fd\u4e0d\u505a\n    Else\n        MkDir (newPath)\n        Debug.Print "\u5df2\u521b\u5efa\u8def\u5f84\uff1a" + newPath\n    End If\n\nEnd Function\n\nFunction FolderExists(newPath As String) As Boolean\n\n    If Dir(newPath, vbDirectory) = "" Then\n        Debug.Print "\u8def\u5f84\u4e0d\u5b58\u5728\uff1a" + newPath\n        FolderExists = False\n    Else\n        Debug.Print "\u8def\u5f84\u5b58\u5728\uff1a" + newPath\n        FolderExists = True\n    End If\n\nEnd Function\n\nFunction FileExists(newPath As String) As Boolean\n\n    If Dir(newPath) = "" Then\n        Debug.Print "\u6587\u4ef6\u4e0d\u5b58\u5728\uff1a" + newPath\n        FileExists = False\n    Else\n        Debug.Print "\u6587\u4ef6\u5b58\u5728\uff1a" + newPath\n        FileExists = True\n    End If\n\nEnd Function\n\n')))}u.isMDXComponent=!0},95606:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/batch-plus-settings-2cdda1b06cc4571175aa64732d369cb0.png"},15275:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/import-step-options-cde265d03bd00300426c79e6d450ddea.png"},32809:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/task-scheduler-import-96026560b6c470585dbe006cfd72c75c.png"}}]);