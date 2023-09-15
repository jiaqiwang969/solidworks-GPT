"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[84365],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>w});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),l=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,w=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return r?o.createElement(w,s(s({ref:t},p),{},{components:r})):o.createElement(w,s({ref:t},p))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={title:"\u5982\u4f55\u5728\u811a\u672c\u4e2d\u4f7f\u7528SOLIDWORKS API\u65b9\u6cd5",caption:"\u811a\u672c"},s=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/index",title:"\u5982\u4f55\u5728\u811a\u672c\u4e2d\u4f7f\u7528SOLIDWORKS API\u65b9\u6cd5",description:"\u672c\u6587\u63d0\u4f9b\u4e86\u4ece\u4e0d\u540c\u811a\u672c\uff08\u5305\u62ecvbScript\u3001PowerShell\u3001JavaScript\uff09\u8c03\u7528SOLIDWORKS API\u7684\u793a\u4f8b\u548c\u8bf4\u660e\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/index.md",tags:[],version:"current",frontMatter:{title:"\u5982\u4f55\u5728\u811a\u672c\u4e2d\u4f7f\u7528SOLIDWORKS API\u65b9\u6cd5",caption:"\u811a\u672c"},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scale-imported-part/"},next:{title:"\u5728 JavaScript \u4e2d\u4f7f\u7528 SOLIDWORKS API \u65b9\u6cd5",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/java-script/"}},a={},l=[{value:"sidebar_position: 5",id:"sidebar_position-5",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u63d0\u4f9b\u4e86\u4ece\u4e0d\u540c\u811a\u672c\uff08\u5305\u62ecvbScript\u3001PowerShell\u3001JavaScript\uff09\u8c03\u7528SOLIDWORKS API\u7684\u793a\u4f8b\u548c\u8bf4\u660e\u3002\nlabels: ","[\u811a\u672c, html, JavaScript, PowerShell, cmd]"),(0,n.kt)("h2",{id:"sidebar_position-5"},"sidebar_position: 5"),(0,n.kt)("p",null,"\u672c\u8282\u63d0\u4f9b\u4e86\u4ece\u4e0d\u540c\u811a\u672c\uff08\u5305\u62ecvbScript\u3001PowerShell\u3001JavaScript\uff09\u8c03\u7528SOLIDWORKS API\u7684\u793a\u4f8b\u548c\u8bf4\u660e\u3002"),(0,n.kt)("p",null,"{% youtube { id: 9akSYcyjQQc } %}"),(0,n.kt)("p",null,"\u5728SOLIDWORKS\u81ea\u52a8\u5316\u4e2d\u4f7f\u7528\u811a\u672c\u7684\u4e3b\u8981\u4f18\u70b9\u662f\u7b80\u5316\u7684\u90e8\u7f72\u548c\u7ef4\u62a4\u8fc7\u7a0b\u3002\u811a\u672c\u662f\u5f00\u6e90\u7684\uff0c\u4e0d\u9700\u8981\u7279\u6b8a\u7684IDE\uff0c\u5e76\u4e14\u53ef\u4ee5\u8f7b\u677e\u96c6\u6210\u5230\u81ea\u52a8\u5316\u5de5\u4f5c\u6d41\u7a0b\u4e2d\u3002"),(0,n.kt)("p",null,"\u811a\u672c\u901a\u5e38\u63a5\u53d7\u53c2\u6570\uff0c\u8fd9\u4f7f\u5f97\u81ea\u52a8\u5316\u8fc7\u7a0b\u53ef\u4ee5\u4ee5\u4ea4\u4e92\u7684\u65b9\u5f0f\u8fdb\u884c\u3002"),(0,n.kt)("p",null,"\u811a\u672c\u53ef\u4ee5\u5229\u7528\u4e13\u95e8\u4e3aOLE\u81ea\u52a8\u5316\u800c\u8bbe\u8ba1\u7684SOLIDWORKS\u7684\u201cautomation\u201d\u7248\u672c\u3002\u8fd9\u610f\u5473\u7740SOLIDWORKS\u53ef\u4ee5\u5728\u540e\u53f0\u4ee5\u8f7b\u91cf\u7ea7\u65b9\u5f0f\u542f\u52a8\uff0c\u4ece\u800c\u5927\u5927\u63d0\u9ad8\u4e86\u8fdb\u7a0b\u7684\u6027\u80fd\u3002"))}d.isMDXComponent=!0}}]);