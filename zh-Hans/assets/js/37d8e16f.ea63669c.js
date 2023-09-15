"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[97414],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||c;return r?o.createElement(f,a(a({ref:t},d),{},{components:r})):o.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const c={layout:"sw-macro-fix",title:"\u4fee\u590dSOLIDWORKS\u5b8f\u4e2d\u8fde\u63a5\u6570\u636e\u5e93\u6216Excel\u5931\u8d25\u7684\u95ee\u9898",image:"odbc-drivers.png",labels:["\u5b8f","\u6545\u969c\u6392\u9664"],"redirect-from":["/2018/04/macro-troubleshooting-failed-to-connect-to-database-or-excel.html"]},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-database-excel-error/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-database-excel-error/index",title:"\u4fee\u590dSOLIDWORKS\u5b8f\u4e2d\u8fde\u63a5\u6570\u636e\u5e93\u6216Excel\u5931\u8d25\u7684\u95ee\u9898",description:"\u75c7\u72b6",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-database-excel-error/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-database-excel-error",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-database-excel-error/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-database-excel-error/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-database-excel-error/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"\u4fee\u590dSOLIDWORKS\u5b8f\u4e2d\u8fde\u63a5\u6570\u636e\u5e93\u6216Excel\u5931\u8d25\u7684\u95ee\u9898",image:"odbc-drivers.png",labels:["\u5b8f","\u6545\u969c\u6392\u9664"],"redirect-from":["/2018/04/macro-troubleshooting-failed-to-connect-to-database-or-excel.html"]},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u7528\u4e8e SOLIDWORKS API \u81ea\u52a8\u5316\u7684 C# \u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-csharp/"},next:{title:"Create VB.NET Stand-Alone (exe) application for SOLIDWORKS",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-vbnet/"}},s={},l=[{value:"\u75c7\u72b6",id:"\u75c7\u72b6",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...c}=e;return(0,n.kt)(u,(0,o.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u75c7\u72b6"},"\u75c7\u72b6"),(0,n.kt)("p",null,"SOLIDWORKS\u5b8f\u5e94\u8be5\u8fde\u63a5\u5230\u6570\u636e\u5e93\uff08\u5982SQL\u3001MySql\u3001Oracle\u3001MS Access\u7b49\uff09\u6216\u4efb\u4f55\u5176\u4ed6\u6570\u636e\u6e90\uff08\u5982MS Excel\uff09\u3002\n\u5b8f\u65e0\u6cd5\u8bfb\u53d6/\u5199\u5165\u503c\u6216\u663e\u793a\u9519\u8bef\u3002"),(0,n.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,n.kt)("p",null,"\u5728VBA\u5b8f\u4e2d\uff0c\u8fde\u63a5\u5230\u6570\u636e\u5e93\u6216Excel\u7684\u6700\u5e38\u89c1\u65b9\u6cd5\u662f\u901a\u8fc7\u62bd\u8c61\u5c42\uff0c\u5982ADODB\u3001ODBC\u3001OLEDB\u3002\n\u4e3a\u4e86\u8fde\u63a5\u5230\u6570\u636e\u5e93\uff0c\u5fc5\u987b\u5b89\u88c5\u76f8\u5e94\u7684\u9a71\u52a8\u7a0b\u5e8f\u5e76\u63d0\u4f9b\u6709\u6548\u7684\u8fde\u63a5\u5b57\u7b26\u4e32\u3002\n\u9a71\u52a8\u7a0b\u5e8f\u4e5f\u662f\u64cd\u4f5c\u7cfb\u7edf\u67b6\u6784\u7279\u5b9a\u7684\uff08x32/x64\uff09\u3002"),(0,n.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5"},"\u89e3\u51b3\u65b9\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u67e5\u627e\u4f7f\u7528\u7684\u62bd\u8c61\u5c42\u3002\u901a\u5e38\u4f1a\u6709\u7c7b\u4f3c\u4ee5\u4e0b\u4ee3\u7801\u7684\u884c\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Set conn = CreateObject("ADODB.Connection")\nSet records = CreateObject("ADODB.Recordset")\n    \nDim xlsFilePath As String\nxlsFilePath = swApp.GetCurrentMacroPathFolder() & "\\" & EXCEL_FILE_NAME\n    \nconn.Open "Provider=Microsoft.ACE.OLEDB.12.0;" & _\n        "Data Source=" & xlsFilePath & _\n            ";Extended Properties=""Excel 8.0;HDR=Yes;"";"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u5b89\u88c5\u4e86\u9002\u5f53\u7684\u9a71\u52a8\u7a0b\u5e8f\u3002\u5bf9\u4e8eSOLIDWORKS 2013\u53ca\u66f4\u9ad8\u7248\u672c\uff08\u68c0\u67e5x64\u7cfb\u7edf\u7684\u9a71\u52a8\u7a0b\u5e8f\uff09\u3002\n\u5bf9\u4e8e\u8f83\u65e7\u7684SOLIDWORKS\u7248\u672c\uff0c\u8bf7\u68c0\u67e5x32\u7248\u672c\uff09\u3002\u901a\u5e38\u53ef\u4ee5\u4ece\u6570\u636e\u5e93\u4f9b\u5e94\u5546\u7684\u7f51\u7ad9\u6216\u6570\u636e\u5e93\u5b89\u88c5\u5305\u514d\u8d39\u4e0b\u8f7d\u9a71\u52a8\u7a0b\u5e8f\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ODBC\u9a71\u52a8\u7a0b\u5e8f\u5217\u8868",src:r(8780).Z,width:"320",height:"246"}),"{ width=320 height=245 }"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6839\u636e\u9700\u8981\u4fee\u6539\u8fde\u63a5\u5b57\u7b26\u4e32")))}p.isMDXComponent=!0},8780:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/odbc-drivers-48c839df6180c961d13908e009866e03.png"}}]);