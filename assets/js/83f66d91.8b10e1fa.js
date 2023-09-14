"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[38915],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>w});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),l=function(e){var o=r.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},d=function(e){var o=l(e.components);return r.createElement(c.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=n,w=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(w,s(s({ref:o},d),{},{components:t})):r.createElement(w,s({ref:o},d))}));function w(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=e,a[p]="string"==typeof e?e:n,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59922:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(87462),n=(t(67294),t(3905));const i={title:"Manipulating model views using SOLIDWORKS API",caption:"Model Views",description:"Collection of articles and code examples for working with 3D model views using SOLIDWORKS API",sidebar_position:3},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/model-view/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/model-view/index",title:"Manipulating model views using SOLIDWORKS API",description:"Collection of articles and code examples for working with 3D model views using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/model-view/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/model-view",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/model-view/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/model-view/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/model-view/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Manipulating model views using SOLIDWORKS API",caption:"Model Views",description:"Collection of articles and code examples for working with 3D model views using SOLIDWORKS API",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create C++ Stand-Alone (exe) application for SOLIDWORKS",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/connect-cpp/"},next:{title:"Compare model views transformations using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/model-view/compare-model-views/"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:o,...t}=e;return(0,n.kt)(p,(0,r.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Model view is a 3D snapshot of SOLIDWORKS model visible to the user. SOLIDWORKS API provides the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelView.html"},"IModelView")," interface to perform manipulation and data extraction from views."),(0,n.kt)("p",null,"Model views can be transformed (scaled, rotated, moved) to change the orientation of the model."),(0,n.kt)("p",null,"Multiple view can be presented in the document to represent various states of the model. For example the motion study tab create new views to render the motion specific user interface elements."),(0,n.kt)("p",null,"This section contains examples and macros for manipulating the model views using SOLIDWORKS API."))}u.isMDXComponent=!0}}]);