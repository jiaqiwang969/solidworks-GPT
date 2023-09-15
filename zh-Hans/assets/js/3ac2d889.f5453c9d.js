"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[32279],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(r),k=a,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||i;return r?n.createElement(u,l(l({ref:e},d),{},{components:r})):n.createElement(u,l({ref:e},d))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},49821:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"\u5165\u95e8\uff1a\u4f7f\u7528SOLIDWORKS API\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f",caption:"\u5165\u95e8"},l=void 0,o={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/index",title:"\u5165\u95e8\uff1a\u4f7f\u7528SOLIDWORKS API\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f",description:"\u901a\u8fc7API\u8be6\u7ec6\u6307\u5357\u5f00\u59cb\u5f00\u53d1\u9002\u7528\u4e8eSOLIDWORKS\u7684\u5e94\u7528\u7a0b\u5e8f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/index.md",tags:[],version:"current",frontMatter:{title:"\u5165\u95e8\uff1a\u4f7f\u7528SOLIDWORKS API\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f",caption:"\u5165\u95e8"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u5e76\u9009\u62e9\u88c5\u914d\u4e2d\u7684\u6240\u6709\u53ef\u89c1\u90e8\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-visible/"},next:{title:"\u5982\u4f55\u901a\u8fc7API\u5f00\u53d1SOLIDWORKS\u81ea\u52a8\u5316\u7684\u63d2\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/add-ins/"}},p={},s=[{value:"sidebar_position: 1",id:"sidebar_position-1",level:2},{value:".NET\u9879\u76ee\u7684\u53c2\u8003\u8d44\u6599",id:"net\u9879\u76ee\u7684\u53c2\u8003\u8d44\u6599",level:2},{value:"COM\u7c7b\u578b\u5e93",id:"com\u7c7b\u578b\u5e93",level:3},{value:"\u4e3b\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u96c6\uff08PIA\uff09",id:"\u4e3b\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u96c6pia",level:3},{value:"\u5dee\u5f02",id:"\u5dee\u5f02",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:3}],d={toc:s},c="wrapper";function m(t){let{components:e,...i}=t;return(0,a.kt)(c,(0,n.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u901a\u8fc7API\u8be6\u7ec6\u6307\u5357\u5f00\u59cb\u5f00\u53d1\u9002\u7528\u4e8eSOLIDWORKS\u7684\u5e94\u7528\u7a0b\u5e8f\nimage: solidworks-api-getting-started.png"),(0,a.kt)("h2",{id:"sidebar_position-1"},"sidebar_position: 1"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4f7f\u7528SOLIDWORKS API\u5165\u95e8",src:r(41684).Z,width:"796",height:"472"}),"{ width=400 }"),(0,a.kt)("p",null,"SOLIDWORKS API\u53ef\u4ee5\u5728\u4efb\u4f55\u517c\u5bb9COM\u7684\u8bed\u8a00\u4e2d\u4f7f\u7528\uff08\u4f8b\u5982C++\u3001C#\u3001VB.NET\u548cVisual Basic\uff09\u3002\u53ef\u4ee5\u4f7f\u7528SOLIDWORKS API\u5f00\u53d1\u4e0d\u540c\u7c7b\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u8bf7\u53c2\u8003\u4e0b\u9762\u7684\u6bd4\u8f83\u8868\uff0c\u9009\u62e9\u9002\u5408\u8981\u6c42\u7684\u5e94\u7528\u7a0b\u5e8f\u7c7b\u578b\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"VBA\u5b8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u63d2\u4ef6"),(0,a.kt)("th",{parentName:"tr",align:"center"},"VSTA\u5b8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u72ec\u7acb\u5e94\u7528"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u811a\u672c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6613\u4e8e\u5165\u95e8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5bf9\u4e8e\u7ecf\u9a8c\u4e0d\u4e30\u5bcc\u7684\u7528\u6237\u542f\u52a8\u89e3\u51b3\u65b9\u6848\u6240\u9700\u7684\u5e73\u5747\u65f6\u95f4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6613\u4e8e\u90e8\u7f72"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426\uff08\u7406\u8bba\u4e0a\u5e94\u8be5\u5bb9\u6613\uff0c\u4f46\u5b9e\u9645\u4e0a\u901a\u5e38\u4f1a\u9047\u5230\u5f88\u591a\u95ee\u9898\uff09"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u8f6f\u4ef6\u5728\u5176\u4ed6\u8ba1\u7b97\u673a\u4e0a\u6b63\u5e38\u5de5\u4f5c\u6240\u9700\u7684\u65f6\u95f4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7801\u4fdd\u62a4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426\uff08\u4ec5\u5bc6\u7801\u4fdd\u62a4\uff09"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f\uff08\u4e8c\u8fdb\u5236\u6587\u4ef6\uff09"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f\uff08\u4e8c\u8fdb\u5236\u6587\u4ef6\uff09"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f\uff08\u4e8c\u8fdb\u5236\u6587\u4ef6\uff09"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4fdd\u62a4\u4ee3\u7801\u7684\u65b9\u6cd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u7684\u5b9e\u7528\u7a0b\u5e8f\u5e93\u8303\u56f4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426\uff08\u4ec5\u8fc7\u65f6\u7684VB6\u5e93\uff09"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5904\u7406\u6570\u636e\u5e93\u3001\u6587\u4ef6\u3001XML\u7b49\u7684\u5b9e\u7528\u51fd\u6570\u7684\u53ef\u7528\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u7684SolidWorks\u51fd\u6570\u8303\u56f4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6709\u9650"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5b8c\u6574"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6709\u9650"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6709\u9650"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6709\u9650"),(0,a.kt)("td",{parentName:"tr",align:null},"\u67d0\u4e9b\u63a5\u53e3\u4ec5\u5728\u63d2\u4ef6\u5185\u90e8\u64cd\u4f5c\uff0c\u4f8b\u5982SWPublished\u5e93\u4e2d\u7684\u63a5\u53e3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9760\u6027"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426\uff08\u901a\u5e38\u5b58\u5728\u7f3a\u5931\u5e93\u7b49\u95ee\u9898\uff09"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u89e3\u51b3\u65b9\u6848\u5728\u4e0d\u540c\u7684SolidWorks\u7248\u672c\u548cPC\u5de5\u4f5c\u7ad9\u4e0a\u7684\u53ef\u9760\u6027\u7a0b\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u8bd5"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u7b80\u5355\uff08\u8fdb\u7a0b\u5916\uff09"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u590d\u6742\uff08\u8fdb\u7a0b\u5185\uff09\u3002\u7531\u4e8e\u9700\u8981\u91cd\u65b0\u542f\u52a8\u63d2\u4ef6/SolidWorks\uff0c\u56e0\u6b64\u91cd\u65b0\u542f\u52a8\u901f\u5ea6\u8f83\u6162"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u590d\u6742\uff08\u8fdb\u7a0b\u5185\uff09"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u7b80\u5355\uff08\u8fdb\u7a0b\u5916\uff09"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5bf9\u4e8e\u8fdb\u7a0b\u5185\u5e94\u7528\u7a0b\u5e8f\uff0c\u65e0\u6cd5\u4eceUI\u4e2d\u67e5\u770b\u548c\u66f4\u6539SolidWorks\u7684\u8fd0\u884c\u65f6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u989d\u5916\u8f6f\u4ef6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u9700\u8981\u5f00\u53d1IDE"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426\uff08SW 2018\u9700\u8981\uff09"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u9700\u8981\u5f00\u53d1IDE"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1IDE\u901a\u5e38\u5305\u62ec\u4ee3\u7801\u6587\u672c\u7f16\u8f91\u5668\u548c\u7f16\u8bd1\u5668\uff08\u4f8b\u5982Visual Studio\u3001Eclipse\u3001CBuilder\u7b49\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5bf9\u521d\u5b66\u8005\u53cb\u597d"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6027\u80fd"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6b63\u5e38"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u826f\u597d"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u826f\u597d"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6b63\u5e38"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6b63\u5e38"),(0,a.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u6027\u80fd")))),(0,a.kt)("h2",{id:"net\u9879\u76ee\u7684\u53c2\u8003\u8d44\u6599"},".NET\u9879\u76ee\u7684\u53c2\u8003\u8d44\u6599"),(0,a.kt)("p",null,"SOLIDWORKS\u662f\u57fa\u4e8eCOM\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u56e0\u6b64\u5728\u4ece.NET\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528SOLIDWORKS API\u65f6\uff0c\u9700\u8981\u6dfb\u52a0\u7ec4\u4ef6\u4e92\u64cd\u4f5c\u4ee5\u542f\u7528\u4e0eCOM\u7684\u901a\u4fe1\u3002"),(0,a.kt)("p",null,"\u6709\u4e24\u79cd\u5e38\u89c1\u7684\u751f\u6210\u6240\u9700\u7c7b\u578b\u5e93\u7684\u65b9\u6cd5"),(0,a.kt)("h3",{id:"com\u7c7b\u578b\u5e93"},"COM\u7c7b\u578b\u5e93"),(0,a.kt)("p",null,"\u901a\u8fc7\u76f4\u63a5\u5c06\u7c7b\u578b\u5e93\uff08*.tlb\uff09\u6587\u4ef6\u7684\u5f15\u7528\u6dfb\u52a0\u5230.NET\u9879\u76ee\u4e2d\uff08sldworks.tlb\u3001swconst.tlb\u3001swpublished.tlb\uff09\u3002\u53ef\u4ee5\u901a\u8fc7\u6d4f\u89c8\u76f8\u5e94\u7684\u7c7b\u578b\u5e93\u6587\u4ef6\u6216\u5728COM\u9009\u9879\u5361\u4e2d\u627e\u5230\u5df2\u6ce8\u518c\u7684\u5f15\u7528\u6765\u5b8c\u6210\u6b64\u64cd\u4f5c\u3002\u8fd9\u4e9b\u6b65\u9aa4\u76f8\u5f53\u4e8e\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/tools/tlbimp-exe-type-library-importer"},"tlbimp"),"\u5b9e\u7528\u7a0b\u5e8f\uff0c\u56e0\u4e3aVisual Studio\u4f1a\u5728\u540e\u53f0\u5c06\u7c7b\u578b\u5e93\u8f6c\u6362\u4e3a\u4e92\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4eceCOM\u9009\u9879\u5361\u6dfb\u52a0\u5f15\u7528",src:r(41091).Z,width:"875",height:"313"})),(0,a.kt)("p",null,"\u7ed3\u679c\u662f\u5728\u9879\u76ee\u4e2d\u4f7f\u7528\u8f6c\u6362\u540e\u7684.NET\u4e92\u64cd\u4f5c\u7b49\u6548\u9879"),(0,a.kt)("h3",{id:"\u4e3b\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u96c6pia"},"\u4e3b\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u96c6\uff08PIA\uff09"),(0,a.kt)("p",null,"\u901a\u8fc7\u6dfb\u52a0\u968fSOLIDWORKS\u5b89\u88c5\u63d0\u4f9b\u7684\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u96c6\uff08SolidWorks.Interop.sldworks.dll\u3001SolidWorks.Interop.swconst.dll\u3001SolidWorks.Interop.swpublished.dll\uff09\u3002\u8fd9\u4e9b\u7c7b\u578b\u7684\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u96c6\u79f0\u4e3a\u4e3b\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u96c6\uff08PIA\uff09\u3002\u4e92\u64cd\u4f5c\u5e93\u4f4d\u4e8e",(0,a.kt)("strong",{parentName:"p"},"SOLIDWORKS\u5b89\u88c5\u6587\u4ef6\u5939"),"\\api\\redist\uff0c\u7528\u4e8e\u9488\u5bf9Framework 4.0\u53ca\u66f4\u9ad8\u7248\u672c\u7684\u9879\u76ee\uff0c\u4ee5\u53ca",(0,a.kt)("strong",{parentName:"p"},"SOLIDWORKS\u5b89\u88c5\u6587\u4ef6\u5939"),"\\api\\redist\\CLR2\uff0c\u7528\u4e8e\u9488\u5bf9Framework 2.0\u548c3.5\u7684\u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u9488\u5bf9Framework 4.0\u7684\u9879\u76ee\uff0c\u5efa\u8bae\u5c06",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/dotnet/framework/interop/type-equivalence-and-embedded-interop-types"},"\u5d4c\u5165\u4e92\u64cd\u4f5c\u7c7b\u578b")),"\u9009\u9879\u8bbe\u7f6e\u4e3a",(0,a.kt)("em",{parentName:"p"},"False"),"\u3002\n\u5426\u5219\uff0c\u5728\u8c03\u7528SOLIDWORKS API\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0\u7c7b\u578b\u8f6c\u6362\u95ee\u9898\uff0c\u5bfc\u81f4\u5e94\u7528\u7a0b\u5e8f\u7684\u884c\u4e3a\u4e0d\u53ef\u9884\u6d4b\uff0c\u5c3d\u7ba1\u8fd9\u79cd\u60c5\u51b5\u5f88\u5c11\u53d1\u751f\u3002"),(0,a.kt)("h3",{id:"\u5dee\u5f02"},"\u5dee\u5f02"),(0,a.kt)("p",null,"\u5176\u4e2d\u4e00\u4e2a\u5dee\u5f02\u662f\u4e0d\u540c\u7684\u540d\u79f0\u548c\u547d\u540d\u7a7a\u95f4\u3002\u4ece\u7c7b\u578b\u5e93\u751f\u6210\u7684\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u7684\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4\u662f",(0,a.kt)("em",{parentName:"p"},"SldWorks"),"\u3001",(0,a.kt)("em",{parentName:"p"},"SWPublished"),"\u7b49\uff08\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/tools/tlbimp-exe-type-library-importer"},"tlbimp"),"\u5b9e\u7528\u7a0b\u5e8f\u66f4\u6539\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4\uff09\uff0c\u800c\u5176\u4ed6\u60c5\u51b5\u4e0b\u4f7f\u7528\u7684\u547d\u540d\u7a7a\u95f4\u540d\u79f0\u4e2d\u4f7f\u7528",(0,a.kt)("em",{parentName:"p"},"SldWorks.Interop"),"\u524d\u7f00\u3002"),(0,a.kt)("p",null,"\u4f46\u8fd8\u6709\u53e6\u4e00\u4e2a\u4e3b\u8981\u533a\u522b\u3002"),(0,a.kt)("p",null,"\u4eceCOM\u7c7b\u578b\u5e93\u751f\u6210\u7684\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u4e0d\u662f",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/assembly/create-use-strong-named"},"\u5f3a\u547d\u540d"),"\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4ece\u7c7b\u578b\u5e93\u751f\u6210\u7684\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u6ca1\u6709\u5f3a\u540d\u79f0",src:r(68547).Z,width:"428",height:"504"})),(0,a.kt)("p",null,"\u800c\u968fSOLIDWORKS\u5b89\u88c5\u63d0\u4f9b\u7684\u4e92\u64cd\u4f5c\u7a0b\u5e8f\uff08PIA\uff09\u662f",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/assembly/create-use-strong-named"},"\u5f3a\u547d\u540d"),"\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u7a0b\u5e8f\u96c6\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u7684\u5f3a\u540d\u79f0",src:r(18424).Z,width:"436",height:"538"})),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u6784\u5efa",(0,a.kt)("a",{parentName:"p",href:"stand-alone"},"\u72ec\u7acb\u7684\u8fdb\u7a0b\u5916"),"\u5e94\u7528\u7a0b\u5e8f\uff08\u9664\u975e\u60a8\u7684*.exe\u652f\u6301\u63d2\u4ef6\u673a\u5236\u5e76\u4e14\u53ef\u4ee5\u52a0\u8f7d\u5f15\u7528SOLIDWORKS\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u7684\u5e93\uff09\uff0c\u5219\u51e0\u4e4e\u6ca1\u6709\u533a\u522b\uff0c\u4f46\u662f\u5bf9\u4e8e",(0,a.kt)("a",{parentName:"p",href:"add-ins"},"\u8fdb\u7a0b\u5185\u63d2\u4ef6"),"\u5e94\u7528\u7a0b\u5e8f\uff0c\u5982\u679c\u591a\u4e2a\u63d2\u4ef6\u5f15\u7528\u4e0d\u540c\u7248\u672c\u7684\u672a\u7b7e\u540d\uff08\u975e\u5f3a\u547d\u540d\uff09\u4e92\u64cd\u4f5c\u7a0b\u5e8f\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e25\u91cd\u95ee\u9898\u3002\u7c7b\u4f3c\u7684\u95ee\u9898\u5728",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ZeWDoJ5TC7o"},"\u6b64YouTube\u89c6\u9891"),"\u4e2d\u6709\u6240\u5c55\u793a\u3002"),(0,a.kt)("h3",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u968f\u5b89\u88c5\u63d0\u4f9b\u7684\u4e3b\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u96c6\uff08PIA\uff09\uff0c\u907f\u514d\u4f7f\u7528COM\u7c7b\u578b\u5e93"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u76f4\u63a5\u4ece\u5b89\u88c5\u6587\u4ef6\u5939\u5f15\u7528\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u3002\u8fd9\u5c06\u963b\u6b62\u5728\u5176\u4ed6\u8ba1\u7b97\u673a\u4e0a\u7f16\u8bd1\u9879\u76ee\uff0c\u56e0\u4e3a\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u672a\u653e\u7f6e\u5728\u76f8\u540c\u7684\u76ee\u5f55\u4e2d\uff0c\u4e5f\u672a\u6dfb\u52a0\u5230GAC\u4e2d\u3002\u7279\u522b\u662f\u8fd9\u5c06\u963b\u6b62\u5b9e\u65bd",(0,a.kt)("a",{parentName:"li",href:"https://blog.xarial.com/ci-cd/"},"\u6301\u7eed\u96c6\u6210/\u6301\u7eed\u4ea4\u4ed8\uff08CI/CD\uff09"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76f8\u53cd\uff0c\u5c06\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u653e\u7f6e\u5728",(0,a.kt)("a",{parentName:"li",href:"https://www.nuget.org/"},"NuGet\u670d\u52a1\u5668"),"\u4e0a\uff0c\u5e76\u5c06\u5176\u6dfb\u52a0\u4e3a\u5305\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u5185\u90e8\u6258\u7ba1\u670d\u52a1\u5668\u6216\u4f7f\u7528\u516c\u5171\u670d\u52a1\u5668\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0a\u8ff0\u9009\u9879\u4e0d\u53ef\u884c\uff0c\u5219\u5c06\u5e93\u6dfb\u52a0\u5230\u4e0e\u9879\u76ee\u76f8\u540c\u7684\u6587\u4ef6\u5939\u4e2d\uff08\u4f8b\u5982\uff0c\u5728\u89e3\u51b3\u65b9\u6848",(0,a.kt)("em",{parentName:"li"},".sln\u6587\u4ef6\u65c1\u8fb9\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a"),"thirdpty*\u7684\u6587\u4ef6\u5939\uff0c\u5e76\u5c06\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u590d\u5236\u5230\u5176\u4e2d\uff09\uff0c\u7136\u540e\u4ece\u8be5\u6587\u4ef6\u5939\u6d4f\u89c8\u4e92\u64cd\u4f5c\u7a0b\u5e8f\u4ee5\u6dfb\u52a0\u76f8\u5bf9\u8def\u5f84\u5f15\u7528\u3002")))))}m.isMDXComponent=!0},68547:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/com-strong-name-false-cb4fece82c9daea82dc4ee74bcbdb082.png"},41091:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/com-tab-references-534b4ff5b4c36eb7874a12ac71e841c2.png"},18424:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/net-strong-name-true-43f4f0ec1b9353c53c2a5a5fcfba4f19.png"},41684:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/solidworks-api-getting-started-92bdf6c9855d7b5b3a26aee73c216b58.png"}}]);