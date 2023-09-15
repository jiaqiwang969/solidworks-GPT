"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[95275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||p;return r?n.createElement(k,a(a({ref:t},s),{},{components:r})):n.createElement(k,a({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const p={title:"\u5165\u95e8\uff1aSOLIDWORKS PDM API \u5f00\u53d1",caption:"\u5165\u95e8"},a=void 0,i={unversionedId:"codestack/solidworks-pdm-api/getting-started/index",id:"codestack/solidworks-pdm-api/getting-started/index",title:"\u5165\u95e8\uff1aSOLIDWORKS PDM API \u5f00\u53d1",description:"SOLIDWORKS PDM API \u7684\u4ecb\u7ecd\uff0c\u89e3\u91ca\u4e86\u901a\u8fc7\u63d2\u4ef6\u548c\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u8bbf\u95ee API \u7684\u4e0d\u540c\u65b9\u5f0f\uff0c\u5e76\u63d0\u4f9b\u4e86\u521b\u5efa\u5b83\u4eec\u7684\u8be6\u7ec6\u6307\u5357\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-pdm-api/getting-started/index.md",sourceDirName:"codestack/solidworks-pdm-api/getting-started",slug:"/codestack/solidworks-pdm-api/getting-started/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/getting-started/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-pdm-api/getting-started/index.md",tags:[],version:"current",frontMatter:{title:"\u5165\u95e8\uff1aSOLIDWORKS PDM API \u5f00\u53d1",caption:"\u5165\u95e8"},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS PDM Add-In \u8c03\u8bd5 - \u6700\u4f73\u5b9e\u8df5",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/getting-started/add-ins/debugging-best-practices/"},next:{title:"\u5728 VBA \u548c VSTA \u5b8f\u4e2d\u4f7f\u7528 SOLIDWORKS PDM API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/getting-started/macros/"}},d={},l=[{value:"sidebar_position: 0",id:"sidebar_position-0",level:2},{value:".NET \u4e2d\u7684 Interop",id:"net-\u4e2d\u7684-interop",level:2},{value:"Framework 4.0 \u6216\u66f4\u9ad8\u7248\u672c",id:"framework-40-\u6216\u66f4\u9ad8\u7248\u672c",level:3},{value:"Framework 2.0 \u6216\u66f4\u65e9\u7248\u672c",id:"framework-20-\u6216\u66f4\u65e9\u7248\u672c",level:3}],s={toc:l},m="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SOLIDWORKS PDM API \u7684\u4ecb\u7ecd\uff0c\u89e3\u91ca\u4e86\u901a\u8fc7\u63d2\u4ef6\u548c\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u8bbf\u95ee API \u7684\u4e0d\u540c\u65b9\u5f0f\uff0c\u5e76\u63d0\u4f9b\u4e86\u521b\u5efa\u5b83\u4eec\u7684\u8be6\u7ec6\u6307\u5357\u3002\nlabels: ","[pdm api, \u5165\u95e8]"),(0,o.kt)("h2",{id:"sidebar_position-0"},"sidebar_position: 0"),(0,o.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86 SOLIDWORKS PDM API\u3002\u5b83\u89e3\u91ca\u4e86 PDM \u63d2\u4ef6\u548c\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u7684\u533a\u522b\uff0c\u5e76\u63d0\u4f9b\u4e86\u521b\u5efa\u5b83\u4eec\u7684\u8be6\u7ec6\u6307\u5357\u3002"),(0,o.kt)("p",null,"SOLIDWORKS PDM API \u4e2d\u7684\u6839\u5bf9\u8c61\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmvault5.html"},"IEdmVault5"),"\uff0c\u5b83\u63d0\u4f9b\u4e86\u5bf9\u5404\u79cd\u529f\u80fd\u90e8\u5206\u7684\u8bbf\u95ee\u3002"),(0,o.kt)("p",null,"\u6b64\u63a5\u53e3\u53ef\u4ee5\u663e\u5f0f\u8f6c\u6362\u4e3a\u5176\u4ed6\u7ba1\u7406\u5668\u63a5\u53e3\uff0c\u4f8b\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmAddInMgr9.html?id=96f8b929514a423d8cb220fbe54bb940#Pg0"},"IEdmAddInMgr9"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmRevisionMgr3.html?id=755088fcb7fc40a99dfb42fb5e5b237e#Pg0"},"IEdmRevisionMgr3")," \u7b49\u3002"),(0,o.kt)("p",null,"\u6269\u5c55\u7cfb\u7edf\u7684\u6700\u6d41\u884c\u65b9\u5f0f\u662f\u901a\u8fc7\u5b9e\u73b0 ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmaddin5.html"},"IEdmAddIn5")," SOLIDWORKS PDM API \u63a5\u53e3\u6765\u5b9e\u73b0\u63d2\u4ef6\u3002"),(0,o.kt)("h2",{id:"net-\u4e2d\u7684-interop"},".NET \u4e2d\u7684 Interop"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528 .NET\uff08C# \u6216 VB.NET\uff09\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\uff0c\u5219\u9700\u8981\u4f7f\u7528 SOLIDWORKS PDM API interop \u6765\u8bbf\u95ee API \u65b9\u6cd5\u7684\u7b7e\u540d\u3002"),(0,o.kt)("h3",{id:"framework-40-\u6216\u66f4\u9ad8\u7248\u672c"},"Framework 4.0 \u6216\u66f4\u9ad8\u7248\u672c"),(0,o.kt)("p",null,"\u60a8\u9700\u8981\u6dfb\u52a0\u5bf9 ",(0,o.kt)("em",{parentName:"p"},"EPDM.Interop.epdm.dll")," \u7684\u5f15\u7528\uff0c\u8be5\u6587\u4ef6\u4f4d\u4e8e PDM \u7684\u5b89\u88c5\u6587\u4ef6\u5939\u4e2d\uff08\u901a\u5e38\u4e3a ",(0,o.kt)("em",{parentName:"p"},"C:\\Program Files\\SOLIDWORKS PDM\\EPDM.Interop.epdm.dll"),"\uff09\u3002"),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u867d\u7136\u60a8\u53ef\u4ee5\u6dfb\u52a0\u5bf9 ",(0,o.kt)("em",{parentName:"p"},"EdmInterface.dll"),"\uff08\u7c7b\u578b\u5e93\uff09\u7684\u5f15\u7528\uff0c\u8fd9\u5c06\u751f\u6210 ",(0,o.kt)("em",{parentName:"p"},"Interop.EdmLib.dll"),"\uff0c\u4f9b .NET \u4f7f\u7528\uff0c\u4f46\u6b64 interop \u5c06\u6ca1\u6709\u5f3a\u540d\u79f0\uff0c\u53ef\u80fd\u4f1a\u4e0e\u5176\u4ed6\u63d2\u4ef6\u4ea7\u751f\u51b2\u7a81\u3002"),(0,o.kt)("p",null,"\u5efa\u8bae\u5c06 ",(0,o.kt)("em",{parentName:"p"},"Embed Interop Types")," \u9009\u9879\u8bbe\u7f6e\u4e3a ",(0,o.kt)("em",{parentName:"p"},"False"),"\uff0c\u5426\u5219\u63d2\u4ef6\u53ef\u80fd\u4f1a\u51fa\u73b0\u95ee\u9898\u3002"),(0,o.kt)("h3",{id:"framework-20-\u6216\u66f4\u65e9\u7248\u672c"},"Framework 2.0 \u6216\u66f4\u65e9\u7248\u672c"),(0,o.kt)("p",null,"\u8f83\u65b0\u7248\u672c\u7684 SOLIDWORKS PDM \u4e0d\u63d0\u4f9b\u4e0e .NET Framework 2.0 \u6216\u66f4\u65e9\u7248\u672c\u517c\u5bb9\u7684 interop\u3002\u56e0\u6b64\uff0c\u9700\u8981\u4ece\u7c7b\u578b\u5e93\uff08",(0,o.kt)("em",{parentName:"p"},"EdmInterface.dll"),"\uff09\u751f\u6210\u6b64 interop\u3002"),(0,o.kt)("p",null,"\u8981\u4e48\u76f4\u63a5\u5c06\u6b64\u5f15\u7528\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\u4e2d\uff08\u901a\u5e38\u4e3a ",(0,o.kt)("em",{parentName:"p"},"C:\\Program Files\\SOLIDWORKS PDM\\EdmInterface.dll"),"\uff09\uff0c\u5728\u91cd\u65b0\u6784\u5efa\u540e\uff0c\u6b64\u64cd\u4f5c\u5c06\u5728 bin \u6587\u4ef6\u5939\u4e2d\u751f\u6210 ",(0,o.kt)("em",{parentName:"p"},"Interop.EdmLib.dll"),"\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5176\u4ed6\u9879\u76ee\u5f15\u7528\u5b83\u3002"),(0,o.kt)("p",null,"\u8981\u4e48\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/tools/tlbimp-exe-type-library-importer"},"tlbim.exe")," \u5b9e\u7528\u7a0b\u5e8f\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210 interop\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> TlbImp.exe "EdmInterface.dll" "/out:Interop.EdmLib.dll" /namespace:EdmLib\n')))}c.isMDXComponent=!0}}]);