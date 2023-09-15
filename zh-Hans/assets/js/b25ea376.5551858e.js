"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[54518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79918:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"\u4f7f\u7528SOLIDWORKS API\u914d\u7f6e\u6587\u6863\u5916\u89c2",caption:"\u5916\u89c2"},a=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/index",title:"\u4f7f\u7528SOLIDWORKS API\u914d\u7f6e\u6587\u6863\u5916\u89c2",description:"\u5305\u542b\u4f7f\u7528SOLIDWORKS API\u7ba1\u7406\u6587\u6863\u5916\u89c2\uff08\u4f8b\u5982\u989c\u8272\uff09\u7684\u793a\u4f8b\u548c\u6587\u7ae0\u7684\u96c6\u5408",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u914d\u7f6e\u6587\u6863\u5916\u89c2",caption:"\u5916\u89c2"},sidebar:"tutorialSidebar",previous:{title:"Selecting SOLIDWORKS Objects for API only",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-only-selection/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u751f\u6210\u6750\u6599\u53d8\u4f53\u914d\u7f6e",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/apply-render-material/"}},c={},l=[{value:"labels: \u989c\u8272, \u5916\u89c2, \u6750\u6599\u5c5e\u6027",id:"labels-\u989c\u8272-\u5916\u89c2-\u6750\u6599\u5c5e\u6027",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5305\u542b\u4f7f\u7528SOLIDWORKS API\u7ba1\u7406\u6587\u6863\u5916\u89c2\uff08\u4f8b\u5982\u989c\u8272\uff09\u7684\u793a\u4f8b\u548c\u6587\u7ae0\u7684\u96c6\u5408\nsidebar_position: 12"),(0,o.kt)("h2",{id:"labels-\u989c\u8272-\u5916\u89c2-\u6750\u6599\u5c5e\u6027"},"labels: ","[\u989c\u8272, \u5916\u89c2, \u6750\u6599\u5c5e\u6027]"),(0,o.kt)("p",null,"\u672c\u8282\u5305\u542b\u4f7f\u7528SOLIDWORKS API\u5728\u6587\u6863\u4e2d\u914d\u7f6e\u5404\u79cd\u5916\u89c2\u5c42\uff08\u989c\u8272\u3001\u8d34\u82b1\u3001\u6e32\u67d3\uff09\u7684\u4ee3\u7801\u793a\u4f8b\u548c\u5b8f\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u5728SOLIDWORKS\u5b9e\u4f53\u7684\u5c42\u6b21\u7ed3\u6784\u4e2d\u5e94\u7528\u5916\u89c2\uff0c\u4ece\u800c\u8986\u76d6\u524d\u4e00\u5c42\u7684\u5c5e\u6027\u3002\u4ee5\u4e0b\u662f\u5c42\u6b21\u7ed3\u6784\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6587\u6863"),(0,o.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5728\u88c5\u914d\u4f53\u4e2d"),(0,o.kt)("li",{parentName:"ul"},"\u5b9e\u4f53"),(0,o.kt)("li",{parentName:"ul"},"\u7279\u5f81"),(0,o.kt)("li",{parentName:"ul"},"\u9762")))}d.isMDXComponent=!0}}]);