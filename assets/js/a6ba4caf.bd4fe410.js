"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[71861],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(o),m=s,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function f(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=o.length,i=new Array(r);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},69510:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=o(87462),s=(o(67294),o(3905));const r={title:"Managing cut-list bodies using SOLIDWORKS API",caption:"Cut-Lists",description:"Automating cut-list bodies (weldment and sheet metal) using SOLIDWORKS API",sidebar_position:11,labels:["cut-list","weldment","sheet metal"]},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/cut-lists/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/cut-lists/index",title:"Managing cut-list bodies using SOLIDWORKS API",description:"Automating cut-list bodies (weldment and sheet metal) using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/cut-lists/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/cut-lists",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/cut-lists/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/cut-lists/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/cut-lists/index.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Managing cut-list bodies using SOLIDWORKS API",caption:"Cut-Lists",description:"Automating cut-list bodies (weldment and sheet metal) using SOLIDWORKS API",sidebar_position:11,labels:["cut-list","weldment","sheet metal"]},sidebar:"tutorialSidebar",previous:{title:"Get sketch lines of sheet metal sketched bend using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/sketched-bend-feature-sketch-lines/"},next:{title:"Macro to colorize SOLIDWORKS sheet metal and weldment cut-list items",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/cut-lists/colorize-cut-lists/"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,s.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Cut-list bodies got generated from the sheet metal and weldment bodies in SOLIDWORKS. Although those bodies are still managed via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibody2.html"},"IBody2")," SOLIDWORKS API interface they enable additional functionality compared to regular bodies:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Cut-list bodies are grouped in the cut-list folders by geometry"),(0,s.kt)("li",{parentName:"ul"},"Cut-list folders (group of bodies) can have custom properties and auto generated properties (such as length, thickness etc.)")),(0,s.kt)("p",null,"Custom properties could be automated by calling the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeature~CustomPropertyManager.html"},"IFeature::CustomPropertyManager")," property for the cut-list folder item."),(0,s.kt)("p",null,"Cut-lists are one of the most common elements of SOLIDWORKS API automation. Explore the examples of this section for macros and code snippets for accessing cut-lists data programmatically."))}p.isMDXComponent=!0}}]);