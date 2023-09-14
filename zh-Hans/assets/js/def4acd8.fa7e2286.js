"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[54886],{3905:(t,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>h});var n=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function c(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var d=n.createContext({}),s=function(t){var e=n.useContext(d),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},l=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),p=s(o),m=a,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||r;return o?n.createElement(h,i(i({ref:e},l),{},{components:o})):n.createElement(h,i({ref:e},l))}));function h(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=o.length,i=new Array(r);i[0]=m;var c={};for(var d in e)hasOwnProperty.call(e,d)&&(c[d]=e[d]);c.originalType=t,c[p]="string"==typeof t?t:a,i[1]=c;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},67808:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var n=o(87462),a=(o(67294),o(3905));const r={title:"SOLIDWORKS PDM API example for handling the data card button click",caption:"DataCard Button Click",description:"Collection of examples and articles explaining how to handle the button click on data card using SOLIDWORKS PDM Professional API",labels:["hooks","button click","datacard"]},i=void 0,c={unversionedId:"codestack/solidworks-pdm-api/hooks/datacard-button/index",id:"codestack/solidworks-pdm-api/hooks/datacard-button/index",title:"SOLIDWORKS PDM API example for handling the data card button click",description:"Collection of examples and articles explaining how to handle the button click on data card using SOLIDWORKS PDM Professional API",source:"@site/docs/codestack/solidworks-pdm-api/hooks/datacard-button/index.md",sourceDirName:"codestack/solidworks-pdm-api/hooks/datacard-button",slug:"/codestack/solidworks-pdm-api/hooks/datacard-button/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/hooks/datacard-button/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-pdm-api/hooks/datacard-button/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS PDM API example for handling the data card button click",caption:"DataCard Button Click",description:"Collection of examples and articles explaining how to handle the button click on data card using SOLIDWORKS PDM Professional API",labels:["hooks","button click","datacard"]},sidebar:"tutorialSidebar",previous:{title:"Hooking the notifications in SOLIDWORKS PDM API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/hooks/"},next:{title:"Concatenate description variable on a data card button click using SOLIDWORKS PDM API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/hooks/datacard-button/update-description-addin/"}},d={},s=[],l={toc:s},p="wrapper";function u(t){let{components:e,...o}=t;return(0,a.kt)(p,(0,n.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Data cards functionality can be extended using SOLIDWORKS PDM API by providing the custom logic in the button click handler. Similar to other events button click can be handled within the ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmaddin5~oncmd.html"},"IEdmAddIn5::OnCmd")," overload."),(0,a.kt)("p",null,"When setting up data card user required to assign the special tag in the options which can be then read from the add-in as a comment which allows to identify the specific button."),(0,a.kt)("p",null,"This section contains code examples for using SOLIDWORKS PDM API and implementing custom behavior on the data card button click."))}u.isMDXComponent=!0}}]);