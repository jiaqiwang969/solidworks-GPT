"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[5780],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),l=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,f=p["".concat(d,".").concat(u)]||p[u]||m[u]||s;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=u;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[p]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},99016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const s={title:"Create temp toroidal sheet body using SOLIDWORKS modeler API",caption:"Create Temp Toroidal Sheet Body",description:"Example demonstrates how to create temp body of a toroidal sheet",image:"toroidal-surface.png",labels:["topology","geometry","sheet","modeler","cylinder"]},i=void 0,a={unversionedId:"codestack/solidworks-api/geometry/primitives/create-toroidal-surface/index",id:"codestack/solidworks-api/geometry/primitives/create-toroidal-surface/index",title:"Create temp toroidal sheet body using SOLIDWORKS modeler API",description:"Example demonstrates how to create temp body of a toroidal sheet",source:"@site/docs/codestack/solidworks-api/geometry/primitives/create-toroidal-surface/index.md",sourceDirName:"codestack/solidworks-api/geometry/primitives/create-toroidal-surface",slug:"/codestack/solidworks-api/geometry/primitives/create-toroidal-surface/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/primitives/create-toroidal-surface/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/primitives/create-toroidal-surface/index.md",tags:[],version:"current",frontMatter:{title:"Create temp toroidal sheet body using SOLIDWORKS modeler API",caption:"Create Temp Toroidal Sheet Body",description:"Example demonstrates how to create temp body of a toroidal sheet",image:"toroidal-surface.png",labels:["topology","geometry","sheet","modeler","cylinder"]},sidebar:"tutorialSidebar",previous:{title:"Create temp spherical sheet body using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/primitives/create-spherical-surface/"},next:{title:"Using transformations in SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/transformation/"}},d={},l=[],c={toc:l},p="wrapper";function m(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Toroidal sheet body",src:r(38485).Z,width:"260",height:"282"})),(0,n.kt)("p",null,"This example demonstrates how to create a sheet body from the toroidal surface using SOLIDWORKS API."),(0,n.kt)("p",null,"Geometry is created using the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler~createtoroidalsurface.html"},"IModeler::CreateToroidalSurface")," SOLIDWORKS API method."),(0,n.kt)("p",null,"Run the macro and temp body is displayed. Body can be rotated and selected but it is not presented in the feature tree. Continue the macro execution to destroy the body."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swModeler As SldWorks.Modeler\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swModeler = swApp.GetModeler\n    \n        Dim dCenter(2) As Double\n        Dim dAxis(2) As Double\n        Dim dRef(2) As Double\n        \n        Const MAJOR_RADIUS As Double = 0.1\n        Const MINOR_RADIUS As Double = 0.05\n        \n        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0\n        dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n        dRef(0) = 1: dRef(1) = 0: dRef(2) = 0\n        \n        Dim swSurf As SldWorks.Surface\n        Set swSurf = swModeler.CreateToroidalSurface(dCenter, dAxis, dRef, MAJOR_RADIUS, MINOR_RADIUS)\n        \n        Dim swBody As SldWorks.Body2\n        Dim swCurve(0) As SldWorks.Curve\n        Set swBody = swSurf.CreateTrimmedSheet(swCurve)\n        \n        swBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectable\n    \n        Stop \'continue to hide the body\n        \n        Set swBody = Nothing\n        \n    Else\n        MsgBox "Please open part document"\n    End If\n    \nEnd Sub\n')))}m.isMDXComponent=!0},38485:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/toroidal-surface-c6a88ca5af61da126e6605690970e978.png"}}]);