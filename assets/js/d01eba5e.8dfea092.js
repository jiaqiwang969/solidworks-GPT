"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[31354],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>b});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return o?r.createElement(b,a(a({ref:t},d),{},{components:o})):r.createElement(b,a({ref:t},d))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<s;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},72041:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const s={title:"Create and display b-spline curve using SOLIDWORKS API",caption:"Create B-Spline Curve",description:"VBA example demonstrates how to create and preview b-spline curve from the sample data using SOLIDWORKS API",image:"bspline-curve-preview.png",labels:["curve","bspline","modeler"]},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-bspline-curve/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-bspline-curve/index",title:"Create and display b-spline curve using SOLIDWORKS API",description:"VBA example demonstrates how to create and preview b-spline curve from the sample data using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-bspline-curve/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-bspline-curve",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-bspline-curve/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-bspline-curve/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-bspline-curve/index.md",tags:[],version:"current",frontMatter:{title:"Create and display b-spline curve using SOLIDWORKS API",caption:"Create B-Spline Curve",description:"VBA example demonstrates how to create and preview b-spline curve from the sample data using SOLIDWORKS API",image:"bspline-curve-preview.png",labels:["curve","bspline","modeler"]},sidebar:"tutorialSidebar",previous:{title:"Create body rotation animation using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/body-rotate-animation/"},next:{title:"Create selectable 3D bounding box sketch using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-selectable-bounding-box/"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Preview of b-spline curve",src:o(57383).Z,width:"289",height:"431"}),"{ width=250 }"),(0,n.kt)("p",null,"This VBA example demonstrates the use of ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModeler~CreateBsplineCurve.html"},"IModeler::CreateBsplineCurve")," method to create and preview b-spline curve using sample data."),(0,n.kt)("p",null,"Open part document and run the macro. Curve will be previewed and macro stops. Continue the macro to dispose the curve."),(0,n.kt)("p",null,"Follow the ",(0,n.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/geometry/get-bspline-parameters/"},"Get B-Spline Curve Parameters")," example for a guide of extracting the required data from the selected edge."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"Type DoubleRec\n    dValue As Double\nEnd Type\nType Int2Rec\n    iLower As Long\n    iUpper As Long\nEnd Type\n\n\nDim swApp As SldWorks.SldWorks\nDim swModeler As SldWorks.Modeler\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Set swModeler = swApp.GetModeler\n    \n    Dim dProps(1) As Double\n    dProps(0) = PackToDouble(3, 4)\n    dProps(1) = PackToDouble(4, 0)\n    \n    Dim dKnots(7) As Double\n    dKnots(0) = 0: dKnots(1) = 0: dKnots(2) = 0: dKnots(3) = 0\n    dKnots(4) = 1: dKnots(5) = 1: dKnots(6) = 1: dKnots(7) = 1\n    \n    Dim dCtrlPts(11) As Double\n    dCtrlPts(0) = 0: dCtrlPts(1) = 0: dCtrlPts(2) = 0\n    dCtrlPts(3) = -0.15: dCtrlPts(4) = 0: dCtrlPts(5) = 0.05\n    dCtrlPts(6) = 0.25: dCtrlPts(7) = 0: dCtrlPts(8) = 0.2\n    dCtrlPts(9) = -0.05: dCtrlPts(10) = 0: dCtrlPts(11) = 0.25\n    \n    Dim swCurve As SldWorks.Curve\n    Set swCurve = swModeler.CreateBsplineCurve(dProps, dKnots, dCtrlPts)\n    \n    Dim swCurveBody As SldWorks.Body2\n    Set swCurveBody = swCurve.CreateWireBody\n    \n    swCurveBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n    \n    Stop\n    \nEnd Sub\n\nFunction PackToDouble(val1 As Long, val2 As Long) As Double\n    \n    Dim dr As DoubleRec\n    Dim i2r As Int2Rec\n    \n    i2r.iLower = val1\n    i2r.iUpper = val2\n    LSet dr = i2r\n    \n    PackToDouble = dr.dValue\n    \nEnd Function\n")))}u.isMDXComponent=!0},57383:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);