"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[54157],{3905:(n,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>m});var t=o(67294);function i(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function r(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function a(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){i(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function c(n,e){if(null==n)return{};var o,t,i=function(n,e){if(null==n)return{};var o,t,i={},r=Object.keys(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||(i[o]=n[o]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var s=t.createContext({}),d=function(n){var e=t.useContext(s),o=e;return n&&(o="function"==typeof n?n(e):a(a({},e),n)),o},l=function(n){var e=d(n.components);return t.createElement(s.Provider,{value:e},n.children)},p="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var o=n.components,i=n.mdxType,r=n.originalType,s=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),p=d(o),f=i,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||r;return o?t.createElement(m,a(a({ref:e},l),{},{components:o})):t.createElement(m,a({ref:e},l))}));function m(n,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=o.length,a=new Array(r);a[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c[p]="string"==typeof n?n:i,a[1]=c;for(var d=2;d<r;d++)a[d]=o[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},742:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=o(87462),i=(o(67294),o(3905));const r={title:"Invoke function of SOLIDWORKS add-in from stand-alone application or macro",caption:"Invoke Function Of Add-in",description:"Calling function of SOLIDWORKS add-in from stand-alone application or macro (enabling add-in custom API)",labels:["add-in api","invoke"]},a=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/invoke-add-in-functions/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/invoke-add-in-functions/index",title:"Invoke function of SOLIDWORKS add-in from stand-alone application or macro",description:"Calling function of SOLIDWORKS add-in from stand-alone application or macro (enabling add-in custom API)",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/invoke-add-in-functions/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/invoke-add-in-functions",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/invoke-add-in-functions/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/invoke-add-in-functions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/invoke-add-in-functions/index.md",tags:[],version:"current",frontMatter:{title:"Invoke function of SOLIDWORKS add-in from stand-alone application or macro",caption:"Invoke Function Of Add-in",description:"Calling function of SOLIDWORKS add-in from stand-alone application or macro (enabling add-in custom API)",labels:["add-in api","invoke"]},sidebar:"tutorialSidebar",previous:{title:"Inter-Process communication between SOLIDWORKS applications",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/"},next:{title:"Call function of SOLIDWORKS add-in object from stand-alone application or macro",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/inter-process-communication/invoke-add-in-functions/via-add-in-object/"}},s={},d=[],l={toc:d},p="wrapper";function u(n){let{components:e,...o}=n;return(0,i.kt)(p,(0,t.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section contains examples and explains how to create an API for SOLIDWORKS add-in so its functions can be called from ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/"},"Macros"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/"},"Stand-Alone Applications"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/scripts/"},"Scripts")," or other ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/add-ins/"},"Add-Ins")),(0,i.kt)("p",null,"Enabling API functions in your add-in might be required when add-in itself needs to be automated. This approach can also help to improve performance. As add-ins are in-process applications, they provide the best performance. In this case add-in can act as an engine for the functionality which gets triggered from the macro or another add-in so the performance is optimal."),(0,i.kt)("p",null,"There are several approaches could be used to achieve this functionality. Explore the following options for more information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"via-add-in-object"},"Via Add-In Object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"via-rot"},"Via Running Objects Table (ROT)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"in-process-invoking"},"Via In-Process Invoking From Out-Of-Process Applications"))))}u.isMDXComponent=!0}}]);