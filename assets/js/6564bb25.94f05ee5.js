"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[62815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=i,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const r={title:"Adding graphical elements to model graphics view using SOLIDWORKS API",caption:"Adornment",description:"Collection of articles and code examples which explain the different ways of customizing the view of the model and application (callouts, open GL graphics, etc.)",image:"adornment-api.png",sidebar_position:0},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/adornment/index",id:"codestack-clone/solidworks-api/adornment/index",title:"Adding graphical elements to model graphics view using SOLIDWORKS API",description:"Collection of articles and code examples which explain the different ways of customizing the view of the model and application (callouts, open GL graphics, etc.)",source:"@site/docs/codestack-clone/solidworks-api/adornment/index.md",sourceDirName:"codestack-clone/solidworks-api/adornment",slug:"/codestack-clone/solidworks-api/adornment/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/adornment/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/adornment/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Adding graphical elements to model graphics view using SOLIDWORKS API",caption:"Adornment",description:"Collection of articles and code examples which explain the different ways of customizing the view of the model and application (callouts, open GL graphics, etc.)",image:"adornment-api.png",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"adornment",permalink:"/solidworks-GPT/docs/category/adornment"},next:{title:"Using Callouts object for model annotation in SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/adornment/callouts/"}},c={},l=[],d={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SOLIDWORKS API for adornment of models and application",src:n(18465).Z,width:"471",height:"356"})),(0,i.kt)("p",null,"This section contains the articles and code examples which explain the different ways of customizing the view of the SOLIDWORKS model and application frame using API."),(0,i.kt)("p",null,"This includes, but not limited to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding ",(0,i.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/adornment/callouts/"},"callout")," objects. Those objects can be useful to display additional information, such as tags or properties for the specific entities. Callouts also supports data value entry."),(0,i.kt)("li",{parentName:"ul"},"Injecting custom 3D graphics to the model view via Open GL. This can be useful when it is required to render complex graphics directly in the SOLIDWORKS model without modifying its geometry. The most common usage scenario is preview or Finite Elements Analysis (FEA) rendering."),(0,i.kt)("li",{parentName:"ul"},"Adding 2D images on the graphics view"),(0,i.kt)("li",{parentName:"ul"},"Embedding ",(0,i.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/adornment/ole-objects/"},"OLE objects")," into the model")))}m.isMDXComponent=!0},18465:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/adornment-api-1969229d0a597f3ee18256f56e7f5024.png"}}]);