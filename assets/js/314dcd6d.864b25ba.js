"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[45868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(r),g=i,u=d["".concat(c,".").concat(g)]||d[g]||m[g]||n;return r?o.createElement(u,s(s({ref:t},p),{},{components:r})):o.createElement(u,s({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=g;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<n;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},43335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=r(87462),i=(r(67294),r(3905));const n={title:"Code examples of creating geometrical primitives using SOLIDWORKS modeler API",caption:"Primitives",description:"Collection of code examples for creating geometric primitives (e.g. box, cylinder, plane, tor, etc.)",sidebar_position:1,labels:["geometric","topology","primitive"]},s=void 0,a={unversionedId:"codestack/solidworks-api/geometry/primitives/index",id:"codestack/solidworks-api/geometry/primitives/index",title:"Code examples of creating geometrical primitives using SOLIDWORKS modeler API",description:"Collection of code examples for creating geometric primitives (e.g. box, cylinder, plane, tor, etc.)",source:"@site/docs/codestack/solidworks-api/geometry/primitives/index.md",sourceDirName:"codestack/solidworks-api/geometry/primitives",slug:"/codestack/solidworks-api/geometry/primitives/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/geometry/primitives/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/primitives/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Code examples of creating geometrical primitives using SOLIDWORKS modeler API",caption:"Primitives",description:"Collection of code examples for creating geometric primitives (e.g. box, cylinder, plane, tor, etc.)",sidebar_position:1,labels:["geometric","topology","primitive"]},sidebar:"tutorialSidebar",previous:{title:"Working with geometry (IModeler) using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/geometry/"},next:{title:"Create temp solid body box using SOLIDWORKS API and IModeler interface",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/geometry/primitives/create-box-body/"}},c={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Collection of code examples for creating geometric primitives (e.g. box, cylinder, plane, tor, etc.) using SOLIDWORKS API. "),(0,i.kt)("p",null,"Explore the methods of ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModeler.html"},"IModeler")," SOLIDWORKS API interface for methods of creating the geometrical objects."),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IPartDoc~CreateFeatureFromBody3.html"},"IPartDoc::CreateFeatureFromBody3")," SOLIDWORKS API method to create a permanent body from the temporary body."))}m.isMDXComponent=!0}}]);