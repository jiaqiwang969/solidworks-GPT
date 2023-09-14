"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[95586],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>w});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(o),u=n,w=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return o?r.createElement(w,s(s({ref:t},d),{},{components:o})):r.createElement(w,s({ref:t},d))}));function w(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:n,s[1]=a;for(var c=2;c<i;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},23544:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={title:"Manipulating model views using SOLIDWORKS API",caption:"Model Views",description:"Collection of articles and code examples for working with 3D model views using SOLIDWORKS API",sidebar_position:3},s=void 0,a={unversionedId:"codestack/solidworks-api/document/model-view/index",id:"codestack/solidworks-api/document/model-view/index",title:"Manipulating model views using SOLIDWORKS API",description:"Collection of articles and code examples for working with 3D model views using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/model-view/index.md",sourceDirName:"codestack/solidworks-api/document/model-view",slug:"/codestack/solidworks-api/document/model-view/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/model-view/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/model-view/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Manipulating model views using SOLIDWORKS API",caption:"Model Views",description:"Collection of articles and code examples for working with 3D model views using SOLIDWORKS API",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Macro to scale drawing views based on the geometry size using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/drawing/views-size-based-scale/"},next:{title:"Compare model views transformations using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/model-view/compare-model-views/"}},l={},c=[],d={toc:c},p="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Model view is a 3D snapshot of SOLIDWORKS model visible to the user. SOLIDWORKS API provides the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelView.html"},"IModelView")," interface to perform manipulation and data extraction from views."),(0,n.kt)("p",null,"Model views can be transformed (scaled, rotated, moved) to change the orientation of the model."),(0,n.kt)("p",null,"Multiple view can be presented in the document to represent various states of the model. For example the motion study tab create new views to render the motion specific user interface elements."),(0,n.kt)("p",null,"This section contains examples and macros for manipulating the model views using SOLIDWORKS API."))}m.isMDXComponent=!0}}]);