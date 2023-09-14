"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[64405],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>g});var r=t(67294);function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){i(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,r,i=function(e,o){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||(i[t]=e[t]);return i}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),l=function(e){var o=r.useContext(a),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},p=function(e){var o=l(e.components);return r.createElement(a.Provider,{value:o},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},u=r.forwardRef((function(e,o){var t=e.components,i=e.mdxType,n=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),u=i,g=d["".concat(a,".").concat(u)]||d[u]||m[u]||n;return t?r.createElement(g,s(s({ref:o},p),{},{components:t})):r.createElement(g,s({ref:o},p))}));function g(e,o){var t=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var n=t.length,s=new Array(n);s[0]=u;var c={};for(var a in o)hasOwnProperty.call(o,a)&&(c[a]=o[a]);c.originalType=e,c[d]="string"==typeof e?e:i,s[1]=c;for(var l=2;l<n;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97918:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const n={title:"Code examples of creating geometrical primitives using SOLIDWORKS modeler API",caption:"Primitives",description:"Collection of code examples for creating geometric primitives (e.g. box, cylinder, plane, tor, etc.)",sidebar_position:1,labels:["geometric","topology","primitive"]},s=void 0,c={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/index",title:"Code examples of creating geometrical primitives using SOLIDWORKS modeler API",description:"Collection of code examples for creating geometric primitives (e.g. box, cylinder, plane, tor, etc.)",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Code examples of creating geometrical primitives using SOLIDWORKS modeler API",caption:"Primitives",description:"Collection of code examples for creating geometric primitives (e.g. box, cylinder, plane, tor, etc.)",sidebar_position:1,labels:["geometric","topology","primitive"]},sidebar:"tutorialSidebar",previous:{title:"Working with geometry (IModeler) using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/"},next:{title:"Create temp solid body box using SOLIDWORKS API and IModeler interface",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-box-body/"}},a={},l=[],p={toc:l},d="wrapper";function m(e){let{components:o,...t}=e;return(0,i.kt)(d,(0,r.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Collection of code examples for creating geometric primitives (e.g. box, cylinder, plane, tor, etc.) using SOLIDWORKS API. "),(0,i.kt)("p",null,"Explore the methods of ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModeler.html"},"IModeler")," SOLIDWORKS API interface for methods of creating the geometrical objects."),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IPartDoc~CreateFeatureFromBody3.html"},"IPartDoc::CreateFeatureFromBody3")," SOLIDWORKS API method to create a permanent body from the temporary body."))}m.isMDXComponent=!0}}]);