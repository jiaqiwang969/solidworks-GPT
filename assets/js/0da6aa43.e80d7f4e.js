"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[46050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),m=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},A=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=m(r),A=a,g=l["".concat(s,".").concat(A)]||l[A]||p[A]||n;return r?o.createElement(g,i(i({ref:t},d),{},{components:r})):o.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=A;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var m=2;m<n;m++)i[m]=r[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}A.displayName="MDXCreateElement"},91230:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>m});var o=r(87462),a=(r(67294),r(3905));const n={title:"Recording and editing macros in SOLIDWORKS",caption:"Recording Macros",description:"This article explains how to record the macro commands",image:"macros-save-filter.png",labels:["macro","recording"],sidebar_position:2},i=void 0,c={unversionedId:"codestack/solidworks-api/getting-started/macros/recording/index",id:"codestack/solidworks-api/getting-started/macros/recording/index",title:"Recording and editing macros in SOLIDWORKS",description:"This article explains how to record the macro commands",source:"@site/docs/codestack/solidworks-api/getting-started/macros/recording/index.md",sourceDirName:"codestack/solidworks-api/getting-started/macros/recording",slug:"/codestack/solidworks-api/getting-started/macros/recording/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/macros/recording/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/macros/recording/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Recording and editing macros in SOLIDWORKS",caption:"Recording Macros",description:"This article explains how to record the macro commands",image:"macros-save-filter.png",labels:["macro","recording"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS Macro types - VBA (swp), SWBasic (swb), VSTA (dll)",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/macros/types/"},next:{title:"Create And Run VSTA Macro (C# and VB.NET) in SOLIDWORKS",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/macros/create-vsta/"}},s={},m=[],d={toc:m},l="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SOLIDWORKS provides the great functionality to record the user actions and transform this into macro code."),(0,a.kt)("p",null,"This is a very handy feature for learning the SOLIDWORKS API and finding required method."),(0,a.kt)("p",null,"Recording can be started by clicking the ",(0,a.kt)("strong",{parentName:"p"},"Record")," button on the macro toolbar:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Macro recording commands in toolbar",src:r(97022).Z,width:"162",height:"40"})),(0,a.kt)("p",null,"In the recording mode majority of user actions will be recorded"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note. Not all commands can be recorded via macro recorded. If the command is not captured by the recorded it doesn't mean that API for this particular command is not available")),(0,a.kt)("p",null,"In order to enhance macro recording experience try to minimize the number of model view orientations changes and selections as those commands will be recorded and will make the macro hardly readable due to a large number of lines."),(0,a.kt)("p",null,"Use ",(0,a.kt)("strong",{parentName:"p"},"Pause")," button to skip recording of unnecessarily manipulations."),(0,a.kt)("p",null,"Once recording is finished click ",(0,a.kt)("strong",{parentName:"p"},"Stop")," button and select the file to save the recorded macro."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Saving recorded macro",src:r(67090).Z,width:"969",height:"248"}),"{ width=400 }"),(0,a.kt)("p",null,"Note that it is possible to save the macro as VBA and VSTA. Refer the ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/types"},"Macros Types")," article for the explanation of differences between these macro types."),(0,a.kt)("p",null,"If you record the macros often it is suggested to enable the ",(0,a.kt)("em",{parentName:"p"},"Automatically edit macro after recording")," option."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Option to automatically edit macro after recording",src:r(66995).Z,width:"960",height:"816"}),"{ width=350 }"),(0,a.kt)("p",null,"This would open the editor automatically after macro is finished recording so it is not necessarily to call the ",(0,a.kt)("em",{parentName:"p"},"Tools->Macro->Edit")," menu command explicitly to edit the source code."),(0,a.kt)("p",null,"Below are example macros recorded in VBA, C# and VB.NET languages"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example of macro recorded in VBA",src:r(23824).Z,width:"1167",height:"807"}),"{ width=350 }"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example of macro recorded in C# VSTA",src:r(57244).Z,width:"1193",height:"883"}),"{ width=350 }"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example of macro recorded in VB.NET VSTA",src:r(13416).Z,width:"1193",height:"883"}),"{ width=350 }"))}p.isMDXComponent=!0},97022:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAAoCAMAAABKB9GXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQA3VeG5Q9koAVdXV+vr686SInvC4HV1dRYWFtTU1JYyAGKjwP39/cwzMzs7Or+/v69dD/T09ORuVPf3997f3ZCntCwsLI2Oje6jk0tLS/XPx/jneu0cJIKCgmRkZDIyMsjIyPDk3tw1EdilL9vc2/feSJubmyQkJKSkpEJCQsPDw2pqau7v7ubn5vTs6Xl5efniUVVVVbGysOPj4t+yMx0dHfXw1vjrgtbX1pSUk6qemM6UKvzqYFpaWm9vb9moNuC1Pa9eE/vvis+ZMvrkWa9fF6ioqNmrPfnfQPHm4Pnoc9w4FODg3/Xx2djZ2PHx8Ojp5wAAADMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNmZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///42RPm4AAABSdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////wCtLQxxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADW0lEQVRYR+3WcVfSUBgGcIKVjq6jMRxKjRdtCYytSVcMMjAqK5O4+/6fpvduV9idYweXcfAcn3/kvJ2d+/O9D8uCsfV5Ij5ECtbWh2/RirTbGSu86Cfiv2VJVNVwsH2JE9fc5Zt7RzyYM7GLttYlip9r5+GI6yY3kRAiPt0rObqYk0iIV3Y6PoBpmuFgmf2CnH0xj5Kni+Ln2hHE8qer6zIhbDaxEsbCCzmctMzGukjI+6ufV9eEuPYOSRgLL+WsJN5NenWyiFi328YtPghieXp5ejkt4xZ9w5WN4n6XEfMoWV0klp2GDE9sLRLOREi3S4im4VOkUT0+rjbC52+3OH07PSIGo76hBL24EcJfDGMYuq4zBmIeJauLeKCfglyHSA6KYQ7449HasYuvjspEZ57v+5M0ogDqel06NKuLeGBX25knkTLRCWcipKsRAnhiIxIWiw2cCiJx8MtiMKZQW1VbSaJV4sKShUQAaY1ZXcQDMdAbysg40XFkIm6QgElIVQiLVXw2IhqGTwyrxFxF6fs1O0E0+tEK+yjc29uLGzO7yIH8Pda0xSRMjIjCBBFPM5F4I4TFmxgRUOCiUAn6lMpEw9D0SQv5PR24cRXxzkVzIb5o2825mIRZEDkwQeSX3G7HiMcS0dWUiRMEnkZpHAG4wTHras0K68BXYLCCmNLFcIXtppp+0ZFQJvINcmLqRYOrjBUOoSU6k4i6DiNXA3PM4OOfz0D5WhfJ7CJfYRK4IAphJZyJEBN5g0Hq1wUlCowChJi0btYkImPuoQKmNUTh92ffJGGMmNLFNKA48RZYkYl8g4Pd1JcOJwaHHpj9D7PDmi0TXWWglFoMXp+ffrmAuphHyexiLwUoEVGYIOIGd5F499WNgcAbUATWagNbJuJXyPQUBr/P351dgNIU8yhZXXzQ/wAx4FGTzmY12zbtuUwMvJHpahP4dfYcFKmnEnHdZBFTsyBSOjJrXFifDyWi51FK3eaJD1wo/Vuc+L//XkRJC+/YxsznQ0ciInAW/NAqJxMIZqq6mrjmLnMTVXyJLRJfSIcPLBho4369iR87Yh4ls4vpyU3MDtm1HDet/ZvsYs7k6eK9Ix7MmRxd3HRydHHTydHFTefxELc6IXHL8xiI4R8nWxxC/gIKeRIaCnFALwAAAABJRU5ErkJggg=="},67090:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/macros-save-filter-c0bd1394d7b2063526487f1a9322aacc.png"},66995:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/option-edit-macro-after-recording-1cfdd55a7c49f5d2266838a191d7948e.png"},23824:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/sample-vba-recorded-macro-131625f99eef7a6b74bc563a071a6eaa.png"},57244:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/sample-vsta-csharp-recorded-macro-90101cf7059ada7773864a5bcca45d58.png"},13416:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/sample-vsta-vb.net-recorded-macro-0881e9c67ef7ccf0a8aa5e0456e24026.png"}}]);