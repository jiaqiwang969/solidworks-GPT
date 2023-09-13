"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[22356],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),l=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(d,".").concat(m)]||p[m]||y[m]||i;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30053:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={title:"Read and display body from the file using SOLIDWORKS API",caption:"Read Body From File",description:"VBA example to deserialize body geometry from external binary file into temp body and display using SOLIDWORKS API",labels:["deserialize","com stream","temp body"]},a=void 0,s={unversionedId:"codestack/solidworks-api/geometry/read-body-from-file/index",id:"codestack/solidworks-api/geometry/read-body-from-file/index",title:"Read and display body from the file using SOLIDWORKS API",description:"VBA example to deserialize body geometry from external binary file into temp body and display using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/geometry/read-body-from-file/index.md",sourceDirName:"codestack/solidworks-api/geometry/read-body-from-file",slug:"/codestack/solidworks-api/geometry/read-body-from-file/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/read-body-from-file/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/read-body-from-file/index.md",tags:[],version:"current",frontMatter:{title:"Read and display body from the file using SOLIDWORKS API",caption:"Read Body From File",description:"VBA example to deserialize body geometry from external binary file into temp body and display using SOLIDWORKS API",labels:["deserialize","com stream","temp body"]},sidebar:"tutorialSidebar",previous:{title:"Find intersection points and topology entities by ray intersection SOLIDWORKS model",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/ray-intersection/"},next:{title:"Macro to reconstruct spherical surface using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/reconstruct-spherical-surface/"}},d={},l=[],c={toc:l},p="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This VBA example demonstrates how to read the body geometry data from the external binary file. Load this data into the COM Stream and restore into the temp solid body using SOLIDWORKS API."),(0,n.kt)("p",null,"Body is displayed to the user and macro execution stops. Body is not present in the Feature Manager Tree and only visible in the graphics area."),(0,n.kt)("p",null,"Continue the macro execution to destroy the body."),(0,n.kt)("p",null,"{% code-snippet { file-name: Macro.* } %}"))}y.isMDXComponent=!0}}]);