"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[55836],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>w});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},d=function(e){var o=l(e.components);return n.createElement(c.Provider,{value:o},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,w=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return t?n.createElement(w,s(s({ref:o},d),{},{components:t})):n.createElement(w,s({ref:o},d))}));function w(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},44085:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const i={title:"Manipulating model views using SOLIDWORKS API",caption:"Model Views"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/index",title:"Manipulating model views using SOLIDWORKS API",description:"Collection of articles and code examples for working with 3D model views using SOLIDWORKS API",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/index.md",tags:[],version:"current",frontMatter:{title:"Manipulating model views using SOLIDWORKS API",caption:"Model Views"},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/materials/show-edit-material-dialog/"},next:{title:"Compare model views transformations using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/model-view/compare-model-views/"}},c={},l=[{value:"sidebar_position: 3",id:"sidebar_position-3",level:2}],d={toc:l},u="wrapper";function p(e){let{components:o,...t}=e;return(0,r.kt)(u,(0,n.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Collection of articles and code examples for working with 3D model views using SOLIDWORKS API"),(0,r.kt)("h2",{id:"sidebar_position-3"},"sidebar_position: 3"),(0,r.kt)("p",null,"Model view is a 3D snapshot of SOLIDWORKS model visible to the user. SOLIDWORKS API provides the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelView.html"},"IModelView")," interface to perform manipulation and data extraction from views."),(0,r.kt)("p",null,"Model views can be transformed (scaled, rotated, moved) to change the orientation of the model."),(0,r.kt)("p",null,"Multiple view can be presented in the document to represent various states of the model. For example the motion study tab create new views to render the motion specific user interface elements."),(0,r.kt)("p",null,"This section contains examples and macros for manipulating the model views using SOLIDWORKS API."))}p.isMDXComponent=!0}}]);