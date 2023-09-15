"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[61485],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),m=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=m(r),u=n,g=l["".concat(s,".").concat(u)]||l[u]||p[u]||i;return r?o.createElement(g,a(a({ref:t},d),{},{components:r})):o.createElement(g,a({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:n,a[1]=c;for(var m=2;m<i;m++)a[m]=r[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},21803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var o=r(87462),n=(r(67294),r(3905));const i={title:"Recording and editing macros in SOLIDWORKS",caption:"Recording Macros",description:"This article explains how to record the macro commands",image:"macros-save-filter.png",labels:["macro","recording"],sidebar_position:2},a=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/macros/recording/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/macros/recording/index",title:"Recording and editing macros in SOLIDWORKS",description:"This article explains how to record the macro commands",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/macros/recording/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/macros/recording",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/macros/recording/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/macros/recording/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/macros/recording/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Recording and editing macros in SOLIDWORKS",caption:"Recording Macros",description:"This article explains how to record the macro commands",image:"macros-save-filter.png",labels:["macro","recording"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS Macro types - VBA (swp), SWBasic (swb), VSTA (dll)",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/macros/types/"},next:{title:"Create And Run VSTA Macro (C# and VB.NET) in SOLIDWORKS",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/macros/create-vsta/"}},s={},m=[],d={toc:m},l="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(l,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"SOLIDWORKS provides the great functionality to record the user actions and transform this into macro code."),(0,n.kt)("p",null,"This is a very handy feature for learning the SOLIDWORKS API and finding required method."),(0,n.kt)("p",null,"Recording can be started by clicking the ",(0,n.kt)("strong",{parentName:"p"},"Record")," button on the macro toolbar:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Macro recording commands in toolbar",src:r(63400).Z,width:"162",height:"40"})),(0,n.kt)("p",null,"In the recording mode majority of user actions will be recorded"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note. Not all commands can be recorded via macro recorded. If the command is not captured by the recorded it doesn't mean that API for this particular command is not available")),(0,n.kt)("p",null,"In order to enhance macro recording experience try to minimize the number of model view orientations changes and selections as those commands will be recorded and will make the macro hardly readable due to a large number of lines."),(0,n.kt)("p",null,"Use ",(0,n.kt)("strong",{parentName:"p"},"Pause")," button to skip recording of unnecessarily manipulations."),(0,n.kt)("p",null,"Once recording is finished click ",(0,n.kt)("strong",{parentName:"p"},"Stop")," button and select the file to save the recorded macro."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Saving recorded macro",src:r(70708).Z,width:"969",height:"248"}),"{ width=400 }"),(0,n.kt)("p",null,"Note that it is possible to save the macro as VBA and VSTA. Refer the ",(0,n.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/types"},"Macros Types")," article for the explanation of differences between these macro types."),(0,n.kt)("p",null,"If you record the macros often it is suggested to enable the ",(0,n.kt)("em",{parentName:"p"},"Automatically edit macro after recording")," option."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Option to automatically edit macro after recording",src:r(25923).Z,width:"960",height:"816"}),"{ width=350 }"),(0,n.kt)("p",null,"This would open the editor automatically after macro is finished recording so it is not necessarily to call the ",(0,n.kt)("em",{parentName:"p"},"Tools->Macro->Edit")," menu command explicitly to edit the source code."),(0,n.kt)("p",null,"Below are example macros recorded in VBA, C# and VB.NET languages"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example of macro recorded in VBA",src:r(84272).Z,width:"1167",height:"807"}),"{ width=350 }"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example of macro recorded in C# VSTA",src:r(18159).Z,width:"1193",height:"883"}),"{ width=350 }"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example of macro recorded in VB.NET VSTA",src:r(92645).Z,width:"1193",height:"883"}),"{ width=350 }"))}p.isMDXComponent=!0},63400:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,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"},70708:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/macros-save-filter-c0bd1394d7b2063526487f1a9322aacc.png"},25923:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/option-edit-macro-after-recording-1cfdd55a7c49f5d2266838a191d7948e.png"},84272:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/sample-vba-recorded-macro-131625f99eef7a6b74bc563a071a6eaa.png"},18159:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/sample-vsta-csharp-recorded-macro-90101cf7059ada7773864a5bcca45d58.png"},92645:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/sample-vsta-vb.net-recorded-macro-0881e9c67ef7ccf0a8aa5e0456e24026.png"}}]);