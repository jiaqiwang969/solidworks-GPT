"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[63468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(n),k=r,m=p["".concat(c,".").concat(k)]||p[k]||u[k]||s;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=k;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},64487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const s={title:"Working with sketch using SOLIDWORKS API",caption:"Sketch",description:"Working with 2D and 3D sketches (adding and reading segments, transformations, feature creation) using SOLIDWORKS API",sidebar_position:6,labels:["sketch","draw"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/index",title:"Working with sketch using SOLIDWORKS API",description:"Working with 2D and 3D sketches (adding and reading segments, transformations, feature creation) using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Working with sketch using SOLIDWORKS API",caption:"Sketch",description:"Working with 2D and 3D sketches (adding and reading segments, transformations, feature creation) using SOLIDWORKS API",sidebar_position:6,labels:["sketch","draw"]},sidebar:"tutorialSidebar",previous:{title:"Import and render XAML file using VBO in OpenGL and SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/vbo-xaml-importer/"},next:{title:"Align line along axis using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/align-line-along-axis/"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sketch is a 3D or 3D layout in SOLIDWORKS parts, assemblies and drawing. In most cases sketch is used as a profile for generating 3D elements (extrudes, cuts, lofts etc.)."),(0,r.kt)("p",null,"Sketch is a feature and it is managed via ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketch.html"},"ISketch")," interface in SOLIDWORKS API."),(0,r.kt)("p",null,"Sketch can contain sketch segments and sketch points as well as annotations (dimensions, notes, etc.)."),(0,r.kt)("p",null,"2D sketch uses 2D coordinate system (X, Y) to position its elements. This coordinate system not always matches the global coordinate system. Which means that the coordinates of elements found in the sketch are relative to 2D coordinate system and need to be transformed to model space if required."),(0,r.kt)("p",null,"This section contains various macros and code examples of working with sketches, adding and removing segments and points, creating new sketches, calculating transformation using SOLIDWORKS API."))}u.isMDXComponent=!0}}]);