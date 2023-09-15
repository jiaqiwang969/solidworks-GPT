"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[88137],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>g});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?t.createElement(g,i(i({ref:r},c),{},{components:n})):t.createElement(g,i({ref:r},c))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74970:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const o={title:"Utilizing markup functionality using SOLIDWORKS eDrawings API",caption:"Markup",description:"Guide on using the markup functionality (measurements, stamps, comments) using eDrawings API",labels:["edrawings","markup","getting started"]},i=void 0,s={unversionedId:"codestack/edrawings-api/markup/index",id:"codestack/edrawings-api/markup/index",title:"Utilizing markup functionality using SOLIDWORKS eDrawings API",description:"Guide on using the markup functionality (measurements, stamps, comments) using eDrawings API",source:"@site/docs/codestack/edrawings-api/markup/index.md",sourceDirName:"codestack/edrawings-api/markup",slug:"/codestack/edrawings-api/markup/",permalink:"/solidworks-GPT/docs/codestack/edrawings-api/markup/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/edrawings-api/markup/index.md",tags:[],version:"current",frontMatter:{title:"Utilizing markup functionality using SOLIDWORKS eDrawings API",caption:"Markup",description:"Guide on using the markup functionality (measurements, stamps, comments) using eDrawings API",labels:["edrawings","markup","getting started"]},sidebar:"tutorialSidebar",previous:{title:"markup",permalink:"/solidworks-GPT/docs/category/markup"},next:{title:"Capture measurement of SOLIDWORKS entities using eDrawings markup API",permalink:"/solidworks-GPT/docs/codestack/edrawings-api/markup/measurement/"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:r,...o}=e;return(0,a.kt)(u,(0,t.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"eDrawings markup API (such as comments, stamps, measurements) can be accessed via ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/emodelapi/eDrawings.Interop.EModelMarkupControl~eDrawings.Interop.EModelMarkupControl.IEModelMarkupControl.html"},"IEModelMarkupControl")," interface."),(0,a.kt)("p",null,"Interop can be found in the eDrawings installation folder: ",(0,a.kt)("em",{parentName:"p"},"%commonprogramfiles%\\eDrawings","[Version]","\\eDrawings.Interop.EModelMarkupControl.dll")),(0,a.kt)("p",null,"Markup interface can be accessed by calling the ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/emodelapi/eDrawings.Interop.EModelViewControl~eDrawings.Interop.EModelViewControl.IEModelViewControl~CoCreateInstance.html"},"IEModelViewControl::CoCreateInstance")," eDrawings API method."),(0,a.kt)("p",null,"It is possible to pass both version specific and version independent GUID or ProgId of the markup control."),(0,a.kt)("p",null,"Version independent guid can be located in the registry ",(0,a.kt)("em",{parentName:"p"},"HKEY_CLASSES_ROOT\\EModelViewMarkup.EModelNonVersionSpecificMarkupControl\\CLSID")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Version independent eDrawings Markup control GUID",src:n(57623).Z,width:"1087",height:"274"})),(0,a.kt)("p",null,"Version specific guids can be located under the corresponding version of the markup control (e.g. ",(0,a.kt)("em",{parentName:"p"},"EModelViewMarkup.EModelViewMarkupControl.18")," for ",(0,a.kt)("em",{parentName:"p"},"eDrawings 2018")," or ",(0,a.kt)("em",{parentName:"p"},"EModelViewMarkup.EModelViewMarkupControl.19")," for ",(0,a.kt)("em",{parentName:"p"},"eDrawings 2019"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'//creating version independent instance of markup using prog id\nvar eDrawingsMarkupCtrl = eDrawingsCtrl.CoCreateInstance("EModelViewMarkup.EModelMarkupControl") as EModelMarkupControl;\n...\n//creating version independent instance of markup using guid\nvar eDrawingsMarkupCtrl = eDrawingsCtrl.CoCreateInstance("{5BBBC05A-BD4D-4e3b-AD5B-51A79DFC522F}") as EModelMarkupControl;\n...\n//creating version specific instance of markup (eDrawings 2018) using prog id\nvar eDrawingsMarkupCtrl = eDrawingsCtrl.CoCreateInstance("EModelViewMarkup.EModelMarkupControl.18") as EModelMarkupControl;\n')))}d.isMDXComponent=!0},57623:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/non-version-specific-markup-guid-edda4968ff167a795114fe811def69f8.png"}}]);