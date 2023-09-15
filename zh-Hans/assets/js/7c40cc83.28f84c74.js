"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[77243],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1124:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={title:"SOLIDWORKS API\u5bf9\u8c61\u6a21\u578b\u548c\u5bf9\u8c61\u5173\u7cfb\u7684\u89e3\u91ca",caption:"API\u5bf9\u8c61\u6a21\u578b"},a=void 0,s={unversionedId:"codestack/solidworks-api/getting-started/api-object-model/index",id:"codestack/solidworks-api/getting-started/api-object-model/index",title:"SOLIDWORKS API\u5bf9\u8c61\u6a21\u578b\u548c\u5bf9\u8c61\u5173\u7cfb\u7684\u89e3\u91ca",description:"\u8be6\u7ec6\u89e3\u91caSOLIDWORKS API\u5bf9\u8c61\u6a21\u578b\u3001\u7c7b\u5c42\u6b21\u7ed3\u6784\u3001\u547d\u540d\u7ea6\u5b9a\u548c\u5bf9\u8c61\u5173\u7cfb\u7684\u6587\u7ae0\u96c6\u5408",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/getting-started/api-object-model/index.md",sourceDirName:"codestack/solidworks-api/getting-started/api-object-model",slug:"/codestack/solidworks-api/getting-started/api-object-model/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/api-object-model/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/api-object-model/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS API\u5bf9\u8c61\u6a21\u578b\u548c\u5bf9\u8c61\u5173\u7cfb\u7684\u89e3\u91ca",caption:"API\u5bf9\u8c61\u6a21\u578b"},sidebar:"tutorialSidebar",previous:{title:"\u5728\u540e\u53f0\u542f\u52a8SOLIDWORKS\u5e94\u7528\u7a0b\u5e8f\uff08\u9690\u85cf\uff09",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/stand-alone/start-background/"},next:{title:"SOLIDWORKS API\u5bf9\u8c61\u6a21\u578b\u7c7b\u5c42\u6b21\u7ed3\u6784\u56fe",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/api-object-model/class-diagram/"}},c={},l=[{value:"sidebar_position: 1",id:"sidebar_position-1",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8be6\u7ec6\u89e3\u91caSOLIDWORKS API\u5bf9\u8c61\u6a21\u578b\u3001\u7c7b\u5c42\u6b21\u7ed3\u6784\u3001\u547d\u540d\u7ea6\u5b9a\u548c\u5bf9\u8c61\u5173\u7cfb\u7684\u6587\u7ae0\u96c6\u5408\nlabels: ","[\u5bf9\u8c61\u6a21\u578b, API]"),(0,o.kt)("h2",{id:"sidebar_position-1"},"sidebar_position: 1"),(0,o.kt)("p",null,"SOLIDWORKS API\u5bf9\u8c61\u6a21\u578b\u5305\u542b\u6570\u767e\u4e2a\u63a5\u53e3\u548c\u6570\u5343\u4e2a\u65b9\u6cd5\u548c\u5c5e\u6027\u3002\u6240\u6709\u63a5\u53e3\u90fd\u6709\u5173\u7cfb\uff0c\u53ef\u4ee5\u901a\u8fc7\u5176\u4ed6\u5bf9\u8c61\u7684\u65b9\u6cd5\u6216\u5c5e\u6027\u8bbf\u95ee\u7279\u5b9a\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u672c\u8282\u5305\u542b\u89e3\u91caSOLIDWORKS API\u4e2d\u7c7b\u548c\u63a5\u53e3\u4e4b\u95f4\u5173\u7cfb\u3001\u547d\u540d\u7ea6\u5b9a\u548c\u53ef\u8bbf\u95ee\u6027\u7684\u6587\u7ae0\u3002\u8bf7\u6309\u7167\u672c\u8282\u4e2d\u7684\u6587\u7ae0\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"))}u.isMDXComponent=!0}}]);