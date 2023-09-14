"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[36695],{3905:(e,t,r)=>{r.d(t,{Zo:()=>A,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),a=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},A=function(e){var t=a(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,A=d(e,["components","mdxType","originalType","parentName"]),p=a(r),c=o,v=p["".concat(l,".").concat(c)]||p[c]||u[c]||s;return r?n.createElement(v,i(i({ref:t},A),{},{components:r})):n.createElement(v,i({ref:t},A))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:o,i[1]=d;for(var a=2;a<s;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},64555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var n=r(87462),o=(r(67294),r(3905));const s={title:"Create extruded slot temp body using SOLIDWORKS modeler API",caption:"Create Extruded Slot Temp Body",description:"Example demonstrates how to extrude the slot profile to create a temp body using SOLIDWORKS API and IModeler interface",image:"extruded-slot.png",labels:["topology","geometry","extrude","slot"]},i=void 0,d={unversionedId:"codestack-clone/solidworks-api/geometry/primitives/create-extruded-slot/index",id:"codestack-clone/solidworks-api/geometry/primitives/create-extruded-slot/index",title:"Create extruded slot temp body using SOLIDWORKS modeler API",description:"Example demonstrates how to extrude the slot profile to create a temp body using SOLIDWORKS API and IModeler interface",source:"@site/docs/codestack-clone/solidworks-api/geometry/primitives/create-extruded-slot/index.md",sourceDirName:"codestack-clone/solidworks-api/geometry/primitives/create-extruded-slot",slug:"/codestack-clone/solidworks-api/geometry/primitives/create-extruded-slot/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/geometry/primitives/create-extruded-slot/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/geometry/primitives/create-extruded-slot/index.md",tags:[],version:"current",frontMatter:{title:"Create extruded slot temp body using SOLIDWORKS modeler API",caption:"Create Extruded Slot Temp Body",description:"Example demonstrates how to extrude the slot profile to create a temp body using SOLIDWORKS API and IModeler interface",image:"extruded-slot.png",labels:["topology","geometry","extrude","slot"]},sidebar:"tutorialSidebar",previous:{title:"Create elliptical swept temp body using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/geometry/primitives/create-elliptical-sweep/"},next:{title:"Create temp spherical sheet body using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/geometry/primitives/create-spherical-surface/"}},l={},a=[],A={toc:a},p="wrapper";function u(e){let{components:t,...s}=e;return(0,o.kt)(p,(0,n.Z)({},A,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Extruded slot profile",src:r(64922).Z,width:"334",height:"311"}),"{ width=250 }"),(0,o.kt)("p",null,"This VBA example demonstrates how to create a temp body by extruding the slot profile."),(0,o.kt)("p",null,"Macro will stop the execution and display the preview of the slot in the graphics area. Continue the macro to hide the preview and dispose temp body."),(0,o.kt)("p",null,"Slot profile is built in the ",(0,o.kt)("em",{parentName:"p"},"GetSlotProfileBody")," function as per the parameters below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Parameters of the slot",src:r(50524).Z,width:"541",height:"289"}),"{ width=250 }"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModeler As SldWorks.Modeler\n    \nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModeler = swApp.GetModeler\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n                \n        Dim swSlotBody As SldWorks.Body2\n        \n        Dim swProfileBody As SldWorks.Body2\n        Set swProfileBody = GetSlotProfileBody(0.02, 0.01)\n                \n        Dim dVec(2) As Double\n        dVec(0) = 0: dVec(1) = 0: dVec(2) = 1\n        Dim swDirVec As SldWorks.MathVector\n        Set swDirVec = swApp.GetMathUtility().CreateVector((dVec))\n        \n        Set swSlotBody = swModeler.CreateExtrudedBody(swProfileBody, swDirVec, 0.1)\n    \n        swSlotBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n        \n        Stop\n        Set swSweptBody = Nothing\n        \n    Else\n        MsgBox "Please open model"\n    End If\n\nEnd Sub\n\nFunction GetSlotProfileBody(width As Double, radius As Double) As SldWorks.Body2\n    \n    Dim dAxis(2) As Double\n    dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n    \n    Dim a(2) As Double\n    a(0) = -width / 2: a(1) = radius: a(2) = 0\n    \n    Dim b(2) As Double\n    b(0) = width / 2: b(1) = radius: b(2) = 0\n    \n    Dim c(2) As Double\n    c(0) = width / 2: c(1) = -radius: c(2) = 0\n    \n    Dim d(2) As Double\n    d(0) = -width / 2: d(1) = -radius: d(2) = 0\n    \n    Dim e(2) As Double\n    e(0) = -width / 2: e(1) = 0: e(2) = 0\n    \n    Dim f(2) As Double\n    f(0) = width / 2: f(1) = 0: f(2) = 0\n    \n    Dim swCurves(3) As SldWorks.Curve\n\n    Set swCurves(0) = CreateTrimmedArc(e, a, d, dAxis, radius)\n    Set swCurves(1) = CreateTrimmedLine(a, b)\n    Set swCurves(2) = CreateTrimmedArc(f, c, b, dAxis, radius)\n    Set swCurves(3) = CreateTrimmedLine(c, d)\n    \n    Dim swSurf As SldWorks.Surface\n    Dim swBody As SldWorks.Body2\n    Dim dRefAxis(2) As Double\n    dRefAxis(0) = 1: dAxis(1) = 0: dRefAxis(2) = 0\n    \n    Set swSurf = swModeler.CreatePlanarSurface2(a, dAxis, dRefAxis)\n    Set swBody = swSurf.CreateTrimmedSheet4(swCurves, False)\n        \n    Set GetSlotProfileBody = swBody\n    \nEnd Function\n\nFunction CreateTrimmedLine(vStartPt As Variant, vEndPt As Variant) As SldWorks.Curve\n    \n    Dim startX As Double, startY As Double, startZ As Double, endX As Double, endY As Double, endZ As Double\n    \n    startX = vStartPt(0): startY = vStartPt(1): startZ = vStartPt(2)\n    endX = vEndPt(0): endY = vEndPt(1): endZ = vEndPt(2)\n    \n    Dim swModeler As SldWorks.Modeler\n    Set swModeler = swApp.GetModeler\n\n    Dim dCenter(2) As Double\n    dCenter(0) = startX: dCenter(1) = startY: dCenter(2) = startZ\n    \n    Dim dDir(2) As Double\n    dDir(0) = endX - startX: dDir(1) = endY - startY: dDir(2) = endZ - startZ\n    \n    Dim swCurve As SldWorks.Curve\n    Set swCurve = swModeler.CreateLine(dCenter, dDir)\n    \n    Set swCurve = swCurve.CreateTrimmedCurve2(startX, startY, startZ, endX, endY, endZ)\n    \n    Set CreateTrimmedLine = swCurve\n    \nEnd Function\n\nFunction CreateTrimmedArc(vCenterPt As Variant, vStartPt As Variant, vEndPt As Variant, vAxis As Variant, radius As Double)\n    \n    Dim swCurve As SldWorks.Curve\n    \n    Set swCurve = swModeler.CreateArc(vCenterPt, vAxis, radius, vStartPt, vEndPt)\n    Set swCurve = swCurve.CreateTrimmedCurve2(vStartPt(0), vStartPt(1), vStartPt(2), vEndPt(0), vEndPt(1), vEndPt(2))\n    \n    Set CreateTrimmedArc = swCurve\n    \nEnd Function\n')))}u.isMDXComponent=!0},64922:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/extruded-slot-93f5c6fd5e1a3b14b7878411eafc2cf8.png"},50524:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);