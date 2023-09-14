"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[4559],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>w});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},d=function(e){var o=c(e.components);return n.createElement(l.Provider,{value:o},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,w=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return t?n.createElement(w,s(s({ref:o},d),{},{components:t})):n.createElement(w,s({ref:o},d))}));function w(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var l in o)hasOwnProperty.call(o,l)&&(a[l]=o[l]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97551:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const i={title:"Manipulating model views using SOLIDWORKS API",caption:"Model Views",description:"Collection of articles and code examples for working with 3D model views using SOLIDWORKS API",sidebar_position:3},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/document/model-view/index",id:"codestack-clone/solidworks-api/document/model-view/index",title:"Manipulating model views using SOLIDWORKS API",description:"Collection of articles and code examples for working with 3D model views using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/document/model-view/index.md",sourceDirName:"codestack-clone/solidworks-api/document/model-view",slug:"/codestack-clone/solidworks-api/document/model-view/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/model-view/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/model-view/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Manipulating model views using SOLIDWORKS API",caption:"Model Views",description:"Collection of articles and code examples for working with 3D model views using SOLIDWORKS API",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Macro to scale drawing views based on the geometry size using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/drawing/views-size-based-scale/"},next:{title:"Compare model views transformations using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/model-view/compare-model-views/"}},l={},c=[],d={toc:c},p="wrapper";function m(e){let{components:o,...t}=e;return(0,r.kt)(p,(0,n.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Model view is a 3D snapshot of SOLIDWORKS model visible to the user. SOLIDWORKS API provides the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelView.html"},"IModelView")," interface to perform manipulation and data extraction from views."),(0,r.kt)("p",null,"Model views can be transformed (scaled, rotated, moved) to change the orientation of the model."),(0,r.kt)("p",null,"Multiple view can be presented in the document to represent various states of the model. For example the motion study tab create new views to render the motion specific user interface elements."),(0,r.kt)("p",null,"This section contains examples and macros for manipulating the model views using SOLIDWORKS API."))}m.isMDXComponent=!0}}]);