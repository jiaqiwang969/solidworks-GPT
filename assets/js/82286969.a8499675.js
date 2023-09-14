"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[26150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return n?o.createElement(m,r(r({ref:t},l),{},{components:n})):o.createElement(m,r({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,r[1]=c;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const a={title:"Invoke function of SOLIDWORKS add-in from stand-alone application or macro",caption:"Invoke Function Of Add-in",description:"Calling function of SOLIDWORKS add-in from stand-alone application or macro (enabling add-in custom API)",labels:["add-in api","invoke"]},r=void 0,c={unversionedId:"codestack/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/index",id:"codestack/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/index",title:"Invoke function of SOLIDWORKS add-in from stand-alone application or macro",description:"Calling function of SOLIDWORKS add-in from stand-alone application or macro (enabling add-in custom API)",source:"@site/docs/codestack/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/index.md",sourceDirName:"codestack/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions",slug:"/codestack/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/index.md",tags:[],version:"current",frontMatter:{title:"Invoke function of SOLIDWORKS add-in from stand-alone application or macro",caption:"Invoke Function Of Add-in",description:"Calling function of SOLIDWORKS add-in from stand-alone application or macro (enabling add-in custom API)",labels:["add-in api","invoke"]},sidebar:"tutorialSidebar",previous:{title:"Inter-Process communication between SOLIDWORKS applications",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/inter-process-communication/"},next:{title:"Call function of SOLIDWORKS add-in object from stand-alone application or macro",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/via-add-in-object/"}},s={},d=[],l={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section contains examples and explains how to create an API for SOLIDWORKS add-in so its functions can be called from ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/"},"Macros"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/"},"Stand-Alone Applications"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/scripts/"},"Scripts")," or other ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/add-ins/"},"Add-Ins")),(0,i.kt)("p",null,"Enabling API functions in your add-in might be required when add-in itself needs to be automated. This approach can also help to improve performance. As add-ins are in-process applications, they provide the best performance. In this case add-in can act as an engine for the functionality which gets triggered from the macro or another add-in so the performance is optimal."),(0,i.kt)("p",null,"There are several approaches could be used to achieve this functionality. Explore the following options for more information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"via-add-in-object"},"Via Add-In Object")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"via-rot"},"Via Running Objects Table (ROT)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"in-process-invoking"},"Via In-Process Invoking From Out-Of-Process Applications"))))}u.isMDXComponent=!0}}]);