"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[54059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=o,f=c["".concat(p,".").concat(u)]||c[u]||g[u]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"Outputting SOLIDWORKS files to different formats using SOLIDWORKS eDrawings API",caption:"Output",description:"Explanation of options of exporting and printing of SOLIDWORKS file via eDrawings API",image:"edrawings-export-types.png",labels:["print","export","edrawings"]},a=void 0,s={unversionedId:"codestack/edrawings-api/output/index",id:"codestack/edrawings-api/output/index",title:"Outputting SOLIDWORKS files to different formats using SOLIDWORKS eDrawings API",description:"Explanation of options of exporting and printing of SOLIDWORKS file via eDrawings API",source:"@site/docs/codestack/edrawings-api/output/index.md",sourceDirName:"codestack/edrawings-api/output",slug:"/codestack/edrawings-api/output/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/edrawings-api/output/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/edrawings-api/output/index.md",tags:[],version:"current",frontMatter:{title:"Outputting SOLIDWORKS files to different formats using SOLIDWORKS eDrawings API",caption:"Output",description:"Explanation of options of exporting and printing of SOLIDWORKS file via eDrawings API",image:"edrawings-export-types.png",labels:["print","export","edrawings"]},sidebar:"tutorialSidebar",previous:{title:"Batch export files to foreign format via eDrawings API (without SOLIDWORKS)",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/edrawings-api/output/export/"},next:{title:"Batch export SOLIDWORKS files to PDF via eDrawings API (without SOLIDWORKS)",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/edrawings-api/output/print-to-pdf/"}},p={},l=[],d={toc:l},c="wrapper";function g(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"eDrawings enables exporting of the SOLIDWORKS files to the foreign format listed below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Export types in eDrawings",src:n(53374).Z,width:"886",height:"282"}),"{ width=450 }"),(0,o.kt)("p",null,"Export can be performed via ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/English/api/emodelapi/eDrawings.Interop.EModelViewControl~eDrawings.Interop.EModelViewControl.IEModelViewControl~Save.html"},"IEModelViewControl::Save")," eDrawings API method."),(0,o.kt)("p",null,"In addition to the above opened file can be printed via ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/English/api/emodelapi/eDrawings.Interop.EModelViewControl~eDrawings.Interop.EModelViewControl.IEModelViewControl~Print5.html"},"IEModelViewControl::Print5")," eDrawings API method."),(0,o.kt)("p",null,"Both the exporting and printing APIs are asynchronous. It is required to track the corresponding finish events to find when the process is completed. Use the ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/emodelapi/eDrawings.Interop.EModelViewControl~eDrawings.Interop.EModelViewControl._IEModelViewControlEvents_OnFinishedPrintingDocumentEventHandler.html"},"OnFinishedPrintingDocument")," and ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/emodelapi/eDrawings.Interop.EModelViewControl~eDrawings.Interop.EModelViewControl._IEModelViewControlEvents_OnFinishedSavingDocumentEventHandler.html"},"OnFinishedSavingDocument")," for tracking the finishing of printing and saving respectively."),(0,o.kt)("p",null,"The finish events will not be sent in case of an error. In this scenario it is required to handle the ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/emodelapi/eDrawings.Interop.EModelViewControl~eDrawings.Interop.EModelViewControl._IEModelViewControlEvents_OnFailedSavingDocumentEventHandler.html"},"OnFailedSavingDocument")," and ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/emodelapi/eDrawings.Interop.EModelViewControl~eDrawings.Interop.EModelViewControl._IEModelViewControlEvents_OnFailedPrintingDocumentEventHandler.html"},"OnFailedPrintingDocument")," events."))}g.isMDXComponent=!0},53374:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/edrawings-export-types-c5bdc00c022be9454fc38dc766264621.png"}}]);