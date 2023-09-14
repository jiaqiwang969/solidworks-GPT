"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[5766],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(o),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return o?r.createElement(k,s(s({ref:t},p),{},{components:o})):r.createElement(k,s({ref:t},p))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8949:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=o(87462),a=(o(67294),o(3905));const n={title:"SOLIDWORKS Macros Troubleshooting: Issues And Resolutions",caption:"Macros Troubleshooting: Issues And Resolutions",description:"Overview and solutions for the most common errors of running the macros in SOLIDWORKS",labels:["macro","not working","problem","solidworks api","troubleshooting","vba"],styles:["/_assets/styles/catalogue.css"],"redirect-from":["/2018/04/macros-troubleshooting-issues-and-resolutions.html"]},s=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/index",id:"codestack/solidworks-api/troubleshooting/macros/index",title:"SOLIDWORKS Macros Troubleshooting: Issues And Resolutions",description:"Overview and solutions for the most common errors of running the macros in SOLIDWORKS",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros",slug:"/codestack/solidworks-api/troubleshooting/macros/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS Macros Troubleshooting: Issues And Resolutions",caption:"Macros Troubleshooting: Issues And Resolutions",description:"Overview and solutions for the most common errors of running the macros in SOLIDWORKS",labels:["macro","not working","problem","solidworks api","troubleshooting","vba"],styles:["/_assets/styles/catalogue.css"],"redirect-from":["/2018/04/macros-troubleshooting-issues-and-resolutions.html"]},sidebar:"tutorialSidebar",previous:{title:"How to fix the error of SOLIDWORKS add-ins sharing common libraries",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/addins/shared-library-conflict/"},next:{title:"solidworks-api",permalink:"/solidworks-GPT/zh-Hans/docs/category/solidworks-api-1"}},l={},c=[{value:"Errors List",id:"errors-list",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SOLIDWORKS macro is the most common way to automate and extended the functionality of SOLIDWORKS via its API.\nMacros can be developed in-house or downloaded from the different web-sites including SOLIDWORKS forum, 3D Content Central, ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-tools"},"CodeStack")," etc. or even recorded from SOLIDWORKS."),(0,a.kt)("p",null,"But in some cases the macro doesn't work as expected. This is usually one of the following scenarios:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Macro which used to work correctly before stopped working."),(0,a.kt)("li",{parentName:"ul"},"Macro works on some of the workstations but not on the others."),(0,a.kt)("li",{parentName:"ul"},"Macro works correctly for some models but not the others.")),(0,a.kt)("p",null,"In this article I will go through the most common symptoms of the errors in the macros."),(0,a.kt)("p",null,"Browse the errors list to find the most common solutions."),(0,a.kt)("p",null,"Click link to get the detailed description of the issues, its cause and the steps to resolve the problem."),(0,a.kt)("h2",{id:"errors-list"},"Errors List"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run-time Error '91': Object variable or With block variable not set"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/assembly-drawing-lightweight-components/"},"Solution 1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/macro-multiple-entry-points/"},"Solution 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/create-sketch-segments-error/"},"Solution 3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/preconditions-not-met/"},"Solution 4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/selection-inconsistency/"},"Solution 5")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compile Error: Can't find project or library"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/missing-solidworks-type-library-references/"},"Solution 1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run-time error '424': Object required"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/merged-macro-error/"},"Solution 1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run-time error '13': Type mismatch"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/preconditions-not-met/"},"Solution 1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compile Error: User-defined type not defined"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/swb-macro-error/"},"Solution 1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run-time error '438': object doesn't support this property or method"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/future-version-apis/"},"Solution 1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run-time error '429': ActiveX component can't create object"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/missing-com-component/"},"Solution 1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run-time Error '5': Invalid procedure call or argument"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/model-title-inconsistency-displaying-extension/"},"Solution 1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compile error: The code in this project must be updated for use on 64-bit systems is displayed. Please review and update Declare statements and then mark item with the PtrSafe attribute"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/"},"Solution 1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cannot Open (for VBA macros)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/too-long-macro-path/"},"Solution 1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compile error: Invalid outside procedure error"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/too-long-vba-macro-line/"},"Solution 1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SolidWorksMacro doesn't contain a definition for 'swApp' (VSTA)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/"},"Solution 1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cannot open (for VSTA macros)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/troubleshooting/macros/run-vsta-macro-error/"},"Solution 1"))))),(0,a.kt)("p",null,"{% catalogue { type: sw-macro-fix } %}"))}u.isMDXComponent=!0}}]);