"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[94866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var s=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,s,o=function(e,t){if(null==e)return{};var r,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=s.createContext({}),c=function(e){var t=s.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return s.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},y=s.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,b=u["".concat(a,".").concat(y)]||u[y]||d[y]||n;return r?s.createElement(b,i(i({ref:t},p),{},{components:r})):s.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=y;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}y.displayName="MDXCreateElement"},28674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var s=r(87462),o=(r(67294),r(3905));const n={title:"\u4f7f\u7528Geometry++\u6309\u9762\u5206\u5272SOLIDWORKS\u5b9e\u4f53",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus"},i=void 0,l={unversionedId:"codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/index",id:"codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/index",title:"\u4f7f\u7528Geometry++\u6309\u9762\u5206\u5272SOLIDWORKS\u5b9e\u4f53",description:"\u6b64\u529f\u80fd\u5141\u8bb8\u4ece\u6240\u9009\u5b9e\u4f53\u4e2d\u7684\u6240\u6709\u9762\u521b\u5efa\u8868\u9762\uff08\u7247\uff09\u5b9e\u4f53\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/index.md",sourceDirName:"codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces",slug:"/codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528Geometry++\u6309\u9762\u5206\u5272SOLIDWORKS\u5b9e\u4f53",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u51e0\u4f55++\u4e2d\u7684\u5e26\u76d6\u5b50\u7684\u66f2\u9762\u6324\u538b\u529f\u80fd",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/extrude-surface-cap/"},next:{title:"\u4f7f\u7528Geometry++\u6682\u505cSOLIDWORKS\u91cd\u5efa\u64cd\u4f5c",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/suspend-rebuild/"}},a={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6b64\u529f\u80fd\u5141\u8bb8\u4ece\u6240\u9009\u5b9e\u4f53\u4e2d\u7684\u6240\u6709\u9762\u521b\u5efa\u8868\u9762\uff08\u7247\uff09\u5b9e\u4f53\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Caption",src:r(96319).Z,width:"989",height:"534"}),"{ width=450 }"),(0,o.kt)("p",null,"\u6240\u6709\u751f\u6210\u7684\u5b9e\u4f53\u90fd\u88ab\u5206\u7ec4\u5728\u5355\u4e2a\u529f\u80fd\u4e0b\uff0c\u5e76\u4fdd\u6301\u53c2\u6570\u5316\u65b9\u6cd5\u3002\u5982\u679c\u539f\u59cb\u51e0\u4f55\u56fe\u5f62\u53d1\u751f\u66f4\u6539\uff08\u5305\u62ec\u6dfb\u52a0\u6216\u5220\u9664\u9762\uff09\uff0c\u5219\u529f\u80fd\u4f1a\u81ea\u52a8\u91cd\u65b0\u751f\u6210\uff0c\u5e76\u66f4\u65b0\u65b0\u7684\u5b9e\u4f53\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Caption",src:r(40398).Z,width:"951",height:"666"}),"{ width=450 }"))}d.isMDXComponent=!0},96319:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/split-body-by-faces-property-page-258d913f3373602d30d783e1f1b5a877.png"},40398:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/split-surface-by-faces-result-5e3bdbf42044e660ec8d6268c8692cde.png"}}]);