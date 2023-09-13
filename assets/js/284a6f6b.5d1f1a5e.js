"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[41533],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||n;return r?o.createElement(f,s(s({ref:t},u),{},{components:r})):o.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={title:"Examples with source code built using SwEx.MacroFeature framework for SOLIDWORKS API",caption:"Examples",description:"Collection of examples using the SwEx.MacroFeature framework for SOLIDWORKS API","toc-group-name":"labs-solidworks-swex",order:4},s=void 0,i={unversionedId:"codestack/labs/solidworks/swex/macro-feature/examples",id:"codestack/labs/solidworks/swex/macro-feature/examples",title:"Examples with source code built using SwEx.MacroFeature framework for SOLIDWORKS API",description:"Collection of examples using the SwEx.MacroFeature framework for SOLIDWORKS API",source:"@site/docs/codestack/labs/solidworks/swex/macro-feature/examples.md",sourceDirName:"codestack/labs/solidworks/swex/macro-feature",slug:"/codestack/labs/solidworks/swex/macro-feature/examples",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/macro-feature/examples",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/macro-feature/examples.md",tags:[],version:"current",frontMatter:{title:"Examples with source code built using SwEx.MacroFeature framework for SOLIDWORKS API",caption:"Examples",description:"Collection of examples using the SwEx.MacroFeature framework for SOLIDWORKS API","toc-group-name":"labs-solidworks-swex",order:4},sidebar:"tutorialSidebar",previous:{title:"Managing selection of SOLIDWORKS macro feature",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/macro-feature/data/selections/"},next:{title:"Getting Started with SwEx.MacroFeature framework for SOLIDWORKS macro features",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/macro-feature/getting-started/"}},l={},c=[{value:"Test Macro Feature Project",id:"test-macro-feature-project",level:2},{value:"Stock Master",id:"stock-master",level:2},{value:"Convert Solid To Surface",id:"convert-solid-to-surface",level:2},{value:"Geometry++",id:"geometry",level:2},{value:"Link Geometry To External File",id:"link-geometry-to-external-file",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SwEx.MacroFeature is a framework for SOLIDWORKS API enabling the simplified development and data binding of macro features."),(0,a.kt)("p",null,"This section lists examples and applications based on SwEx.MacroFeature framework."),(0,a.kt)("h2",{id:"test-macro-feature-project"},"Test Macro Feature Project"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/swex-macrofeature/tree/dev/AddInExample"},"Source Code"),"\nBasic example of all features in the SwEx.Framework. This example doesn't perform any useful function. Use it to explore the code for snippets of the framework usage."),(0,a.kt)("h2",{id:"stock-master"},"Stock Master"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/stock-fit-geometry"},"Source Code")),(0,a.kt)("p",null,"Utility to automate to generate stocking fit (boundary element) for the 3D geometry Documentation. Macro feature is used to generate custom stock feature which generates the cylindrical geometry around input body based on the input parameters."),(0,a.kt)("h2",{id:"convert-solid-to-surface"},"Convert Solid To Surface"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/solidworks-api-examples/tree/master/swex/macro-feature/convert-solid-to-surface"},"Source Code")),(0,a.kt)("p",null,"Example macro feature which allows to convert solid body to the surface body preserving the associativity."),(0,a.kt)("h2",{id:"geometry"},"Geometry++"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/geometry-plus-plus"},"Source Code")),(0,a.kt)("p",null,"Advanced commands for managing the geometry in SOLIDWORKS. All commands implemented as a dynamic macro feature which modifying the existing or adding new geometry."),(0,a.kt)("h2",{id:"link-geometry-to-external-file"},"Link Geometry To External File"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/solidworks-api-examples/tree/master/swex/macro-feature/link-external-file"},"Source Code")),(0,a.kt)("p",null,"Example of loading body geometry from external file (similar to Insert Part functionality)"))}d.isMDXComponent=!0}}]);