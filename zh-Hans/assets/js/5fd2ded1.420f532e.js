"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[85114],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u4f7f\u7528 SOLIDWORKS PDM API \u5f00\u53d1\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f",caption:"\u5f00\u53d1\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f"},i=void 0,s={unversionedId:"codestack/solidworks-pdm-api/getting-started/stand-alone/index",id:"codestack/solidworks-pdm-api/getting-started/stand-alone/index",title:"\u4f7f\u7528 SOLIDWORKS PDM API \u5f00\u53d1\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f",description:"\u4f7f\u7528 SOLIDWORKS PDM API \u521b\u5efa\u72ec\u7acb\uff08exe\uff09\u5e94\u7528\u7a0b\u5e8f\u7684\u793a\u4f8b\u548c\u6307\u5357",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-pdm-api/getting-started/stand-alone/index.md",sourceDirName:"codestack/solidworks-pdm-api/getting-started/stand-alone",slug:"/codestack/solidworks-pdm-api/getting-started/stand-alone/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/getting-started/stand-alone/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-pdm-api/getting-started/stand-alone/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 SOLIDWORKS PDM API \u5f00\u53d1\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f",caption:"\u5f00\u53d1\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f"},sidebar:"tutorialSidebar",previous:{title:"\u5728 VBA \u548c VSTA \u5b8f\u4e2d\u4f7f\u7528 SOLIDWORKS PDM API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/getting-started/macros/"},next:{title:"vault",permalink:"/solidworks-GPT/zh-Hans/docs/category/vault"}},l={},c=[{value:"labels: \u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f, pdm",id:"labels-\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f-pdm",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528 SOLIDWORKS PDM API \u521b\u5efa\u72ec\u7acb\uff08exe\uff09\u5e94\u7528\u7a0b\u5e8f\u7684\u793a\u4f8b\u548c\u6307\u5357"),(0,o.kt)("h2",{id:"labels-\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f-pdm"},"labels: ","[\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f, pdm]"),(0,o.kt)("p",null,"\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u662f\u5728 SOLIDWORKS PDM \u6d4f\u89c8\u5668\u7684\u5916\u90e8\u8fdb\u7a0b\u4e2d\u8fd0\u884c\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u66f4\u5bb9\u6613\u90e8\u7f72\uff0c\u56e0\u4e3a\u4e0d\u9700\u8981\u5728 SOLIDWORKS PDM \u7ba1\u7406\u63a7\u5236\u53f0\u4e0a\u8fdb\u884c\u5b89\u88c5\u3002\u8fd9\u79cd\u7c7b\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\u901a\u5e38\u88ab\u8ba4\u4e3a\u662f\u66f4\u5b89\u5168\u7684\u9009\u62e9\uff0c\u56e0\u4e3a\u5b83\u53ea\u4f1a\u5728\u5ba2\u6237\u673a\u4e0a\u8fd0\u884c\uff0c\u800c\u4e0d\u50cf PDM \u63d2\u4ef6\u90a3\u6837\u9700\u8981\u4ece\u96c6\u4e2d\u5b58\u50a8\u91cd\u65b0\u5206\u53d1\u5230\u6bcf\u4e2a\u5ba2\u6237\u7aef\u3002"),(0,o.kt)("p",null,"SOLIDWORKS PDM API \u7684\u4f7f\u7528\u65b9\u5f0f\u4e0e\u63d2\u4ef6\u5f00\u53d1\u4e2d\u7684\u4f7f\u7528\u65b9\u5f0f\u5b8c\u5168\u76f8\u540c\u3002"),(0,o.kt)("p",null,"\u6d4f\u89c8\u672c\u8282\u4ee5\u67e5\u627e\u4f7f\u7528 SOLIDWORKS PDM API \u65b9\u6cd5\u521b\u5efa\u548c\u6392\u9664\u6545\u969c\u7684\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u7684\u793a\u4f8b\u548c\u8be6\u7ec6\u6307\u5357\u3002"))}u.isMDXComponent=!0}}]);