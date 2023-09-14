"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[18491],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=s,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||n;return r?o.createElement(h,i(i({ref:t},p),{},{components:r})):o.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,i=new Array(n);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=r(87462),s=(r(67294),r(3905));const n={title:"Create temp spherical sheet body using SOLIDWORKS modeler API",caption:"Create Temp Spherical Sheet Body",description:"Example demonstrates how to create temp body of a spherical sheet",image:"spherical-surface.png",labels:["topology","geometry","sheet","modeler","sphere"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-spherical-surface/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-spherical-surface/index",title:"Create temp spherical sheet body using SOLIDWORKS modeler API",description:"Example demonstrates how to create temp body of a spherical sheet",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-spherical-surface/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-spherical-surface",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-spherical-surface/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-spherical-surface/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-spherical-surface/index.md",tags:[],version:"current",frontMatter:{title:"Create temp spherical sheet body using SOLIDWORKS modeler API",caption:"Create Temp Spherical Sheet Body",description:"Example demonstrates how to create temp body of a spherical sheet",image:"spherical-surface.png",labels:["topology","geometry","sheet","modeler","sphere"]},sidebar:"tutorialSidebar",previous:{title:"Create extruded slot temp body using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-extruded-slot/"},next:{title:"Create temp toroidal sheet body using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-toroidal-surface/"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Spherical sheet body",src:r(51391).Z,width:"291",height:"282"})),(0,s.kt)("p",null,"This example demonstrates how to create a sheet body from the spherical surface using SOLIDWORKS API."),(0,s.kt)("p",null,"Geometry is created using the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler~createsphericalsurface2.html"},"IModeler::CreateSphericalSurface2")," SOLIDWORKS API method."),(0,s.kt)("p",null,"Run the macro and temp body is displayed. Body can be rotated and selected but it is not presented in the feature tree. Continue the macro execution to destroy the body."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const RADIUS As Double = 0.01\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    If Not swPart Is Nothing Then\n    \n        Dim swModeler As SldWorks.Modeler\n        Set swModeler = swApp.GetModeler\n        \n        Dim dCenter(2) As Double\n        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0\n        \n        Dim dAxis(2) As Double\n        dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n        \n        Dim dRef(2) As Double\n        dRef(0) = 1: dRef(1) = 0: dRef(2) = 0\n        \n        Dim swSurf As SldWorks.Surface\n        \n        Set swSurf = swModeler.CreateSphericalSurface2(dCenter, dAxis, dRef, RADIUS)\n                \n        Dim swBody As SldWorks.Body2\n        \n        'Full sphere\n        Set swBody = swSurf.CreateTrimmedSheet4(Empty, True)\n        \n        swBody.Display3 swPart, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectable\n        \n        Stop 'continue to hide the body\n        \n        Set swBody = Nothing\n    Else\n        MsgBox \"Please open part document\"\n    End If\n    \nEnd Sub\n")))}u.isMDXComponent=!0},51391:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/spherical-surface-578f724b06683874fbb6ddbd20c8a2d6.png"}}]);