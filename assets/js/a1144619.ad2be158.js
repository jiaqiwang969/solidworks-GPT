"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[45777],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,s=function(e,t){if(null==e)return{};var o,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(o),m=s,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return o?r.createElement(f,i(i({ref:t},d),{},{components:o})):r.createElement(f,i({ref:t},d))}));function f(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=o.length,i=new Array(n);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},22998:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var r=o(87462),s=(o(67294),o(3905));const n={title:"Managing cut-list bodies using SOLIDWORKS API",caption:"Cut-Lists",description:"Automating cut-list bodies (weldment and sheet metal) using SOLIDWORKS API",sidebar_position:11,labels:["cut-list","weldment","sheet metal"]},i=void 0,a={unversionedId:"codestack/solidworks-api/document/cut-lists/index",id:"codestack/solidworks-api/document/cut-lists/index",title:"Managing cut-list bodies using SOLIDWORKS API",description:"Automating cut-list bodies (weldment and sheet metal) using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/cut-lists/index.md",sourceDirName:"codestack/solidworks-api/document/cut-lists",slug:"/codestack/solidworks-api/document/cut-lists/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/cut-lists/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/cut-lists/index.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Managing cut-list bodies using SOLIDWORKS API",caption:"Cut-Lists",description:"Automating cut-list bodies (weldment and sheet metal) using SOLIDWORKS API",sidebar_position:11,labels:["cut-list","weldment","sheet metal"]},sidebar:"tutorialSidebar",previous:{title:"Get sketch lines of sheet metal sketched bend using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/sheet-metal/sketched-bend-feature-sketch-lines/"},next:{title:"Macro to colorize SOLIDWORKS sheet metal and weldment cut-list items",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/cut-lists/colorize-cut-lists/"}},l={},c=[],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,s.kt)(u,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Cut-list bodies got generated from the sheet metal and weldment bodies in SOLIDWORKS. Although those bodies are still managed via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibody2.html"},"IBody2")," SOLIDWORKS API interface they enable additional functionality compared to regular bodies:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Cut-list bodies are grouped in the cut-list folders by geometry"),(0,s.kt)("li",{parentName:"ul"},"Cut-list folders (group of bodies) can have custom properties and auto generated properties (such as length, thickness etc.)")),(0,s.kt)("p",null,"Custom properties could be automated by calling the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeature~CustomPropertyManager.html"},"IFeature::CustomPropertyManager")," property for the cut-list folder item."),(0,s.kt)("p",null,"Cut-lists are one of the most common elements of SOLIDWORKS API automation. Explore the examples of this section for macros and code snippets for accessing cut-lists data programmatically."))}p.isMDXComponent=!0}}]);