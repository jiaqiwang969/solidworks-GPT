"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[16495],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(o),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return o?r.createElement(f,s(s({ref:t},c),{},{components:o})):r.createElement(f,s({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<a;d++)s[d]=o[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},57960:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const a={title:"Examples and source code for SwEx.Addin framework for SOLIDWORKS API",caption:"Examples",description:"Collection of examples using the SwEx.Addin framework for SOLIDWORKS","toc-group-name":"labs-solidworks-swex",order:6},s=void 0,i={unversionedId:"codestack-clone/labs/solidworks/swex/add-in/examples",id:"codestack-clone/labs/solidworks/swex/add-in/examples",title:"Examples and source code for SwEx.Addin framework for SOLIDWORKS API",description:"Collection of examples using the SwEx.Addin framework for SOLIDWORKS",source:"@site/docs/codestack-clone/labs/solidworks/swex/add-in/examples.md",sourceDirName:"codestack-clone/labs/solidworks/swex/add-in",slug:"/codestack-clone/labs/solidworks/swex/add-in/examples",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/labs/solidworks/swex/add-in/examples",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/labs/solidworks/swex/add-in/examples.md",tags:[],version:"current",frontMatter:{title:"Examples and source code for SwEx.Addin framework for SOLIDWORKS API",caption:"Examples",description:"Collection of examples using the SwEx.Addin framework for SOLIDWORKS","toc-group-name":"labs-solidworks-swex",order:6},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/labs/solidworks/swex/add-in/api-reference"},next:{title:"Installation and updates of SwEx.AddIn Framework for SOLIDWORKS add-ins",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/labs/solidworks/swex/installation/"}},l={},d=[{value:"Dummy add-in used to debug main framework functionality (C#)",id:"dummy-add-in-used-to-debug-main-framework-functionality-c",level:2},{value:"Collection of Examples in C# and VB.NET",id:"collection-of-examples-in-c-and-vbnet",level:2},{value:"Stock Master",id:"stock-master",level:2},{value:"Geometry++",id:"geometry",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section contains code examples and projects utilizing SwEx.Addin framework for developing modern add-in applications for SOLIDWORKS."),(0,n.kt)("h2",{id:"dummy-add-in-used-to-debug-main-framework-functionality-c"},"Dummy add-in used to debug main framework functionality (C#)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/swex-addin/tree/master/AddInExample"},"Source Code")),(0,n.kt)("p",null,"Draft add-in which uses all functions of SwEx.Framework for demonstration purposes"),(0,n.kt)("h2",{id:"collection-of-examples-in-c-and-vbnet"},"Collection of Examples in C# and VB.NET"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/swex-examples/tree/master/add-in"},"Source Code")),(0,n.kt)("p",null,"Various C# and VB.NET examples which utilizing SwEx.AddIn framework"),(0,n.kt)("h2",{id:"stock-master"},"Stock Master"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/stock-fit-geometry"},"Source Code")),(0,n.kt)("p",null,"Add-in to create round stock feature of solid bodies"),(0,n.kt)("h2",{id:"geometry"},"Geometry++"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/geometry-plus-plus"},"Source Code")),(0,n.kt)("p",null,"Add-in which extends geometrical commands in SOLIDWORKS"))}u.isMDXComponent=!0}}]);