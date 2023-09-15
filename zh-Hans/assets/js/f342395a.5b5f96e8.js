"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[30765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={title:"Adding Graphic Elements to Model Views with SOLIDWORKS API",image:"adornment-api.png",sidebar_position:0},a=void 0,s={unversionedId:"codestack/solidworks-api/adornment/index",id:"codestack/solidworks-api/adornment/index",title:"Adding Graphic Elements to Model Views with SOLIDWORKS API",description:"SOLIDWORKS API for adorning models and applications",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/adornment/index.md",sourceDirName:"codestack/solidworks-api/adornment",slug:"/codestack/solidworks-api/adornment/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/adornment/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/adornment/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Adding Graphic Elements to Model Views with SOLIDWORKS API",image:"adornment-api.png",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"adornment",permalink:"/solidworks-GPT/zh-Hans/docs/category/adornment"},next:{title:"Using the Callouts Object in SOLIDWORKS API for Model Annotations",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/adornment/callouts/"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SOLIDWORKS API for adorning models and applications",src:n(7420).Z,width:"471",height:"356"})),(0,r.kt)("p",null,"This section contains a series of articles and code examples explaining different methods to customize SOLIDWORKS model and application framework views using the API."),(0,r.kt)("p",null,"This includes, but is not limited to, the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adding ",(0,r.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/adornment/callouts/"},"callout")," objects. These objects can be used to display additional information, such as labels or properties for specific entities. Callouts also support data value input."),(0,r.kt)("li",{parentName:"ul"},"Injecting custom 3D graphics into model views using OpenGL. This is useful when you need to render complex graphics directly within a SOLIDWORKS model without modifying its geometry. The most common use cases are for preview or finite element analysis (FEA) rendering."),(0,r.kt)("li",{parentName:"ul"},"Adding 2D images to graphic views."),(0,r.kt)("li",{parentName:"ul"},"Embedding ",(0,r.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/adornment/ole-objects/"},"OLE objects")," within models.")))}u.isMDXComponent=!0},7420:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/adornment-api-1969229d0a597f3ee18256f56e7f5024.png"}}]);