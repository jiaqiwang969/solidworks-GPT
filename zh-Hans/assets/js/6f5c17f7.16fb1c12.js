"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[11474],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>f});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function s(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?s(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},d=function(e){var o=c(e.components);return r.createElement(l.Provider,{value:o},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return t?r.createElement(f,a(a({ref:o},d),{},{components:t})):r.createElement(f,a({ref:o},d))}));function f(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},749:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(87462),n=(t(67294),t(3905));const s={title:"Creating a Temporary Sheet Body from a Toroidal Surface Using the SOLIDWORKS API",caption:"Creating a Temporary Sheet Body"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-toroidal-surface/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-toroidal-surface/index",title:"Creating a Temporary Sheet Body from a Toroidal Surface Using the SOLIDWORKS API",description:"This example demonstrates how to create a sheet body from a toroidal surface using the SOLIDWORKS API.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-toroidal-surface/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-toroidal-surface",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-toroidal-surface/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-toroidal-surface/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-toroidal-surface/index.md",tags:[],version:"current",frontMatter:{title:"Creating a Temporary Sheet Body from a Toroidal Surface Using the SOLIDWORKS API",caption:"Creating a Temporary Sheet Body"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS\u6a21\u578bAPI\u521b\u5efa\u4e34\u65f6\u7403\u9762\u7247\u4f53",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-spherical-surface/"},next:{title:"Create And Run VSTA Macro (C# and VB.NET) in SOLIDWORKS",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-vsta/"}},l={},c=[{value:"labels: Topology, Geometry, Body, Model, Cylinder",id:"labels-topology-geometry-body-model-cylinder",level:2}],d={toc:c},u="wrapper";function p(e){let{components:o,...s}=e;return(0,n.kt)(u,(0,r.Z)({},d,s,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This example demonstrates how to create a sheet body from a toroidal surface using the SOLIDWORKS API.\nimage: toroidal-surface.png"),(0,n.kt)("h2",{id:"labels-topology-geometry-body-model-cylinder"},"labels: ","[Topology, Geometry, Body, Model, Cylinder]"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Toroidal Surface",src:t(79056).Z,width:"260",height:"282"})),(0,n.kt)("p",null,"This example demonstrates how to create a sheet body from a toroidal surface using the SOLIDWORKS API."),(0,n.kt)("p",null,"The geometry is created using the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler~createtoroidalsurface.html"},"IModeler::CreateToroidalSurface")," method of the SOLIDWORKS API."),(0,n.kt)("p",null,"After running the macro, a temporary sheet body will be displayed. You can rotate and select the body, but it will not appear in the FeatureManager design tree. Continue running the macro to destroy the body."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swModeler As SldWorks.Modeler\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swModeler = swApp.GetModeler\n    \n        Dim dCenter(2) As Double\n        Dim dAxis(2) As Double\n        Dim dRef(2) As Double\n        \n        Const MAJOR_RADIUS As Double = 0.1\n        Const MINOR_RADIUS As Double = 0.05\n        \n        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0\n        dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n        dRef(0) = 1: dRef(1) = 0: dRef(2) = 0\n        \n        Dim swSurf As SldWorks.Surface\n        Set swSurf = swModeler.CreateToroidalSurface(dCenter, dAxis, dRef, MAJOR_RADIUS, MINOR_RADIUS)\n        \n        Dim swBody As SldWorks.Body2\n        Dim swCurve(0) As SldWorks.Curve\n        Set swBody = swSurf.CreateTrimmedSheet(swCurve)\n        \n        swBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectable\n    \n        Stop \'Continue to hide the body\n        \n        Set swBody = Nothing\n        \n    Else\n        MsgBox "Please open a part document"\n    End If\n    \nEnd Sub\n')))}p.isMDXComponent=!0},79056:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/toroidal-surface-c6a88ca5af61da126e6605690970e978.png"}}]);