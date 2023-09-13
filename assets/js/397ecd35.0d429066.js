"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[18811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(n),k=o,m=p["".concat(c,".").concat(k)]||p[k]||u[k]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=k;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var d=2;d<s;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},74991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const s={title:"Working with sketch using SOLIDWORKS API",caption:"Sketch",description:"Working with 2D and 3D sketches (adding and reading segments, transformations, feature creation) using SOLIDWORKS API",order:6,labels:["sketch","draw"]},i=void 0,a={unversionedId:"codestack/solidworks-api/document/sketch/index",id:"codestack/solidworks-api/document/sketch/index",title:"Working with sketch using SOLIDWORKS API",description:"Working with 2D and 3D sketches (adding and reading segments, transformations, feature creation) using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/sketch/index.md",sourceDirName:"codestack/solidworks-api/document/sketch",slug:"/codestack/solidworks-api/document/sketch/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/sketch/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/sketch/index.md",tags:[],version:"current",frontMatter:{title:"Working with sketch using SOLIDWORKS API",caption:"Sketch",description:"Working with 2D and 3D sketches (adding and reading segments, transformations, feature creation) using SOLIDWORKS API",order:6,labels:["sketch","draw"]},sidebar:"tutorialSidebar",previous:{title:"Get sketch lines of sheet metal sketched bend using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/sheet-metal/sketched-bend-feature-sketch-lines/"},next:{title:"Align line along axis using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/sketch/align-line-along-axis/"}},c={},d=[],l={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sketch is a 3D or 3D layout in SOLIDWORKS parts, assemblies and drawing. In most cases sketch is used as a profile for generating 3D elements (extrudes, cuts, lofts etc.)."),(0,o.kt)("p",null,"Sketch is a feature and it is managed via ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketch.html"},"ISketch")," interface in SOLIDWORKS API."),(0,o.kt)("p",null,"Sketch can contain sketch segments and sketch points as well as annotations (dimensions, notes, etc.)."),(0,o.kt)("p",null,"2D sketch uses 2D coordinate system (X, Y) to position its elements. This coordinate system not always matches the global coordinate system. Which means that the coordinates of elements found in the sketch are relative to 2D coordinate system and need to be transformed to model space if required."),(0,o.kt)("p",null,"This section contains various macros and code examples of working with sketches, adding and removing segments and points, creating new sketches, calculating transformation using SOLIDWORKS API."))}u.isMDXComponent=!0}}]);