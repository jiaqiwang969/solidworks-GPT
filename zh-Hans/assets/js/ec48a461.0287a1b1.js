"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[48778],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,k=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(k,s(s({ref:t},l),{},{components:r})):n.createElement(k,s({ref:t},l))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,i={unversionedId:"codestack/solidworks-api/getting-started/macros/run/index",id:"codestack/solidworks-api/getting-started/macros/run/index",title:"index",description:"\u5728SOLIDWORKS\u4e2d\u8fd0\u884c\u5b8f\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u4ece\u5de5\u5177->\u5b8f->\u8fd0\u884c\u83dc\u5355\u547d\u4ee4\u6216\u5de5\u5177\u680f\u8c03\u7528\u5b83\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/getting-started/macros/run/index.md",sourceDirName:"codestack/solidworks-api/getting-started/macros/run",slug:"/codestack/solidworks-api/getting-started/macros/run/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/macros/run/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/macros/run/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5728SOLIDWORKS\u5de5\u5177\u680f\u4e2d\u521b\u5efa\u5b8f\u6309\u94ae",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/macros/macro-buttons/"},next:{title:"Automatically Running Macros on SOLIDWORKS Application Startup",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/"}},p={},c=[],l={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728SOLIDWORKS\u4e2d\u8fd0\u884c\u5b8f\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u4ece",(0,o.kt)("em",{parentName:"p"},"\u5de5\u5177->\u5b8f->\u8fd0\u884c"),"\u83dc\u5355\u547d\u4ee4\u6216\u5de5\u5177\u680f\u8c03\u7528\u5b83\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u4ece\u83dc\u5355\u4e2d\u8fd0\u884c\u5b8f",src:r(93056).Z,width:"790",height:"317"})),(0,o.kt)("p",null,"\u9009\u62e9\u8981\u8fd0\u884c\u7684\u5b8f\uff08\u5bf9\u4e8eVBA\u5b8f\uff0c\u9009\u62e9.swb\u6216.swp\u6587\u4ef6\uff1b\u5bf9\u4e8eVSTA\u5b8f\uff0c\u9009\u62e9.dll\u6587\u4ef6\uff09\u3002\u9664\u975e\u5b8f\u660e\u786e\u7f16\u7801\u4e3a\u4fdd\u6301\u6d3b\u52a8\u72b6\u6001\uff0c\u6216\u8005\u5728VSTA\u5b8f\u7684",(0,o.kt)("em",{parentName:"p"},"\u8bbe\u7f6e"),"\u4e2d\u9009\u4e2d\u4e86",(0,o.kt)("em",{parentName:"p"},"\u5728\u5b8f\u9000\u51fa\u65f6\u505c\u6b62VSTA\u8c03\u8bd5\u5668"),"\u9009\u9879\uff0c\u5426\u5219\u5b8f\u5728\u6267\u884c\u5b8c\u6210\u540e\u4f1a\u4ece\u5185\u5b58\u4e2d\u5378\u8f7d\u3002"),(0,o.kt)("p",null,"\u5b8f\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4eceVBA\u7f16\u8f91\u5668\u4e2d\u8fd0\u884c\uff0c\u5f53",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/edit/"},"\u6253\u5f00\u8fdb\u884c\u7f16\u8f91"),"\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u83dc\u5355/\u5de5\u5177\u680f\u6216\u4f7f\u7528",(0,o.kt)("em",{parentName:"p"},"F10"),"\u5feb\u6377\u952e\u6765\u8fd0\u884c\u5b8f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u4eceVBA\u7f16\u8f91\u5668\u4e2d\u8fd0\u884c\u5b8f",src:r(65215).Z,width:"252",height:"150"})),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u5b8f\u8fd8\u53ef\u4ee5\u4ece",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/macro-buttons/"},"\u5b8f\u6309\u94ae"),"\u6216",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/"},"\u5728SOLIDWORKS\u4f1a\u8bdd\u542f\u52a8\u65f6"),"\u7684\u547d\u4ee4\u884c\u4e2d\u8fd0\u884c\u3002"))}u.isMDXComponent=!0},93056:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/running-macro-menu-ee0e89308c708a149fc601bb4ec29009.png"},65215:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);