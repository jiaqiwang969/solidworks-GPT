"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[89338],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return r?o.createElement(h,i(i({ref:t},d),{},{components:r})):o.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const s={title:"Create temp spherical sheet body using SOLIDWORKS modeler API",caption:"Create Temp Spherical Sheet Body",description:"Example demonstrates how to create temp body of a spherical sheet",image:"spherical-surface.png",labels:["topology","geometry","sheet","modeler","sphere"]},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-spherical-surface/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-spherical-surface/index",title:"Create temp spherical sheet body using SOLIDWORKS modeler API",description:"Example demonstrates how to create temp body of a spherical sheet",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-spherical-surface/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-spherical-surface",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-spherical-surface/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-spherical-surface/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-spherical-surface/index.md",tags:[],version:"current",frontMatter:{title:"Create temp spherical sheet body using SOLIDWORKS modeler API",caption:"Create Temp Spherical Sheet Body",description:"Example demonstrates how to create temp body of a spherical sheet",image:"spherical-surface.png",labels:["topology","geometry","sheet","modeler","sphere"]},sidebar:"tutorialSidebar",previous:{title:"Fix errors when creating sketch segments using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-sketch-segments-error/"},next:{title:"Create temp toroidal sheet body using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-toroidal-surface/"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Spherical sheet body",src:r(88248).Z,width:"291",height:"282"})),(0,n.kt)("p",null,"This example demonstrates how to create a sheet body from the spherical surface using SOLIDWORKS API."),(0,n.kt)("p",null,"Geometry is created using the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler~createsphericalsurface2.html"},"IModeler::CreateSphericalSurface2")," SOLIDWORKS API method."),(0,n.kt)("p",null,"Run the macro and temp body is displayed. Body can be rotated and selected but it is not presented in the feature tree. Continue the macro execution to destroy the body."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"Const RADIUS As Double = 0.01\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    If Not swPart Is Nothing Then\n    \n        Dim swModeler As SldWorks.Modeler\n        Set swModeler = swApp.GetModeler\n        \n        Dim dCenter(2) As Double\n        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0\n        \n        Dim dAxis(2) As Double\n        dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n        \n        Dim dRef(2) As Double\n        dRef(0) = 1: dRef(1) = 0: dRef(2) = 0\n        \n        Dim swSurf As SldWorks.Surface\n        \n        Set swSurf = swModeler.CreateSphericalSurface2(dCenter, dAxis, dRef, RADIUS)\n                \n        Dim swBody As SldWorks.Body2\n        \n        'Full sphere\n        Set swBody = swSurf.CreateTrimmedSheet4(Empty, True)\n        \n        swBody.Display3 swPart, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectable\n        \n        Stop 'continue to hide the body\n        \n        Set swBody = Nothing\n    Else\n        MsgBox \"Please open part document\"\n    End If\n    \nEnd Sub\n")))}u.isMDXComponent=!0},88248:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/spherical-surface-578f724b06683874fbb6ddbd20c8a2d6.png"}}]);