"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[34960],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||s;return o?r.createElement(f,i(i({ref:t},l),{},{components:o})):r.createElement(f,i({ref:t},l))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[p]="string"==typeof e?e:n,i[1]=a;for(var c=2;c<s;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},81005:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const s={title:"Create temp toroidal sheet body using SOLIDWORKS modeler API",caption:"Create Temp Toroidal Sheet Body",description:"Example demonstrates how to create temp body of a toroidal sheet",image:"toroidal-surface.png",labels:["topology","geometry","sheet","modeler","cylinder"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-toroidal-surface/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-toroidal-surface/index",title:"Create temp toroidal sheet body using SOLIDWORKS modeler API",description:"Example demonstrates how to create temp body of a toroidal sheet",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-toroidal-surface/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-toroidal-surface",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-toroidal-surface/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-toroidal-surface/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-toroidal-surface/index.md",tags:[],version:"current",frontMatter:{title:"Create temp toroidal sheet body using SOLIDWORKS modeler API",caption:"Create Temp Toroidal Sheet Body",description:"Example demonstrates how to create temp body of a toroidal sheet",image:"toroidal-surface.png",labels:["topology","geometry","sheet","modeler","cylinder"]},sidebar:"tutorialSidebar",previous:{title:"Create temp spherical sheet body using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-spherical-surface/"},next:{title:"SOLIDWORKS Macro types - VBA (swp), SWBasic (swb), VSTA (dll)",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/types/"}},d={},c=[],l={toc:c},p="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Toroidal sheet body",src:o(27642).Z,width:"260",height:"282"})),(0,n.kt)("p",null,"This example demonstrates how to create a sheet body from the toroidal surface using SOLIDWORKS API."),(0,n.kt)("p",null,"Geometry is created using the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler~createtoroidalsurface.html"},"IModeler::CreateToroidalSurface")," SOLIDWORKS API method."),(0,n.kt)("p",null,"Run the macro and temp body is displayed. Body can be rotated and selected but it is not presented in the feature tree. Continue the macro execution to destroy the body."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swModeler As SldWorks.Modeler\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swModeler = swApp.GetModeler\n    \n        Dim dCenter(2) As Double\n        Dim dAxis(2) As Double\n        Dim dRef(2) As Double\n        \n        Const MAJOR_RADIUS As Double = 0.1\n        Const MINOR_RADIUS As Double = 0.05\n        \n        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0\n        dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n        dRef(0) = 1: dRef(1) = 0: dRef(2) = 0\n        \n        Dim swSurf As SldWorks.Surface\n        Set swSurf = swModeler.CreateToroidalSurface(dCenter, dAxis, dRef, MAJOR_RADIUS, MINOR_RADIUS)\n        \n        Dim swBody As SldWorks.Body2\n        Dim swCurve(0) As SldWorks.Curve\n        Set swBody = swSurf.CreateTrimmedSheet(swCurve)\n        \n        swBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectable\n    \n        Stop \'continue to hide the body\n        \n        Set swBody = Nothing\n        \n    Else\n        MsgBox "Please open part document"\n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0},27642:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/toroidal-surface-c6a88ca5af61da126e6605690970e978.png"}}]);