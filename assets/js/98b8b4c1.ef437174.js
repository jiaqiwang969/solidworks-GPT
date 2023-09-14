"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[57510],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=i,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return o?n.createElement(f,a(a({ref:t},d),{},{components:o})):n.createElement(f,a({ref:t},d))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},99752:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=o(87462),i=(o(67294),o(3905));const r={title:"Adding graphical elements to model graphics view using SOLIDWORKS API",caption:"Adornment",description:"Collection of articles and code examples which explain the different ways of customizing the view of the model and application (callouts, open GL graphics, etc.)",image:"adornment-api.png",sidebar_position:6},a=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/index",title:"Adding graphical elements to model graphics view using SOLIDWORKS API",description:"Collection of articles and code examples which explain the different ways of customizing the view of the model and application (callouts, open GL graphics, etc.)",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Adding graphical elements to model graphics view using SOLIDWORKS API",caption:"Adornment",description:"Collection of articles and code examples which explain the different ways of customizing the view of the model and application (callouts, open GL graphics, etc.)",image:"adornment-api.png",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Wait for user selection in document using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/wait-for-selection/"},next:{title:"Using Callouts object for model annotation in SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/callouts/"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SOLIDWORKS API for adornment of models and application",src:o(42707).Z,width:"471",height:"356"})),(0,i.kt)("p",null,"This section contains the articles and code examples which explain the different ways of customizing the view of the SOLIDWORKS model and application frame using API."),(0,i.kt)("p",null,"This includes, but not limited to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding ",(0,i.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/adornment/callouts/"},"callout")," objects. Those objects can be useful to display additional information, such as tags or properties for the specific entities. Callouts also supports data value entry."),(0,i.kt)("li",{parentName:"ul"},"Injecting custom 3D graphics to the model view via Open GL. This can be useful when it is required to render complex graphics directly in the SOLIDWORKS model without modifying its geometry. The most common usage scenario is preview or Finite Elements Analysis (FEA) rendering."),(0,i.kt)("li",{parentName:"ul"},"Adding 2D images on the graphics view"),(0,i.kt)("li",{parentName:"ul"},"Embedding ",(0,i.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/adornment/ole-objects/"},"OLE objects")," into the model")))}u.isMDXComponent=!0},42707:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/adornment-api-1969229d0a597f3ee18256f56e7f5024.png"}}]);