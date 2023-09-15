"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[74113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),d=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(a.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},w=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),w=r,m=p["".concat(a,".").concat(w)]||p[w]||u[w]||s;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=w;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<s;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}w.displayName="MDXCreateElement"},73555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const s={title:"Create elliptical swept temp body using SOLIDWORKS modeler API",image:"elliptical-sweep.png",labels:["topology","geometry","sheet","modeler","sphere"]},i=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-elliptical-sweep/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-elliptical-sweep/index",title:"Create elliptical swept temp body using SOLIDWORKS modeler API",description:"Circular profile swept along elliptical path{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-elliptical-sweep/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-elliptical-sweep",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-elliptical-sweep/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-elliptical-sweep/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-elliptical-sweep/index.md",tags:[],version:"current",frontMatter:{title:"Create elliptical swept temp body using SOLIDWORKS modeler API",image:"elliptical-sweep.png",labels:["topology","geometry","sheet","modeler","sphere"]},sidebar:"tutorialSidebar",previous:{title:"Create temp cylindrical sheet body using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-cylindrical-surface/"},next:{title:"Create extruded slot temp body using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/primitives/create-extruded-slot/"}},a={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Circular profile swept along elliptical path",src:n(80036).Z,width:"564",height:"457"}),"{ width=250 }"),(0,r.kt)("p",null,"This example demonstrates how to sweep the circular profile along elliptical path to create a temp body using SOLIDWORKS API."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModeler~CreateSweptBody.html"},"IModeler::CreateSweptBody")," SOLIDWORKS API method requires profile and path to be preselected which means curves cannot be used for sweep operation."),(0,r.kt)("p",null,"However macro demonstrates how to create edges from the curves in the temp wire bodies."),(0,r.kt)("p",null,"Using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/selection/api-only-selection/"},"Selecting Objects For API Only")," technique allows to create sweep body without displaying any wire bodies and without any visible selection in the graphics area. All the user selections will be also preserved."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open part document"),(0,r.kt)("li",{parentName:"ul"},"Optionally select any object (this will not affect the sweep operation)."),(0,r.kt)("li",{parentName:"ul"},"Run the macro. Macro displays the temp body and all the user selected objects are preserved."),(0,r.kt)("li",{parentName:"ul"},"Macro stops the execution"),(0,r.kt)("li",{parentName:"ul"},"Continue the macro to hide the preview")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n                \n        Dim swSweptBody As SldWorks.Body2\n                \n        Dim swPath As SldWorks.Curve\n        \n        Set swPath = GetPath()\n        \n        Dim vPtOnPath As Variant\n        \n        vPtOnPath = swPath.GetClosestPointOn(0, 0, 0)\n        \n        Dim dCenter(2) As Double\n        dCenter(0) = vPtOnPath(0): dCenter(1) = vPtOnPath(1): dCenter(2) = vPtOnPath(2)\n        \n        Dim swProfile As SldWorks.Curve\n        Set swProfile = GetProfile(dCenter)\n        \n        Set swSweptBody = CreateSweptBody(swModel, swProfile, swPath)\n\n        swSweptBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n        \n        Stop\n        Set swSweptBody = Nothing\n        \n    Else\n        MsgBox "Please open model"\n    End If\n\nEnd Sub\n\nFunction CreateSweptBody(model As SldWorks.ModelDoc2, profile As SldWorks.Curve, path As SldWorks.Curve) As SldWorks.Body2\n    \n    Dim swModeler As SldWorks.modeler\n    Set swModeler = swApp.GetModeler\n    \n    Dim swProfileBody As SldWorks.Body2\n    Set swProfileBody = profile.CreateWireBody\n        \n    Dim swPathBody As SldWorks.Body2\n    Set swPathBody = path.CreateWireBody()\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    swSelMgr.SuspendSelectionList\n\n    AddToCurrentSelectionSet swSelMgr, swProfileBody.GetEdges(), 1\n    AddToCurrentSelectionSet swSelMgr, swPathBody.GetEdges(), 4\n    \n    Dim swSweptBody As SldWorks.Body2\n    Set swSweptBody = swModeler.CreateSweptBody(model, True, False, swTwistControlType_e.swTwistControlFollowPath, True, False, swTangencyType_e.swTangencyNone, swTangencyType_e.swTangencyNone, False, 0, 0, swThinWallType_e.swThinWallMidPlane, 0, 0, False)\n        \n    Set CreateSweptBody = swSweptBody\n    \n    Set swProfileBody = Nothing\n    Set swPathBody = Nothing\n    \n    swSelMgr.ResumeSelectionList\n    \nEnd Function\n\nSub AddToCurrentSelectionSet(selMgr As SldWorks.SelectionMgr, vObjects As Variant, selMark As Integer)\n    \n    Dim swSelData As SldWorks.SelectData\n    \n    Set swSelData = selMgr.CreateSelectData\n    \n    swSelData.Mark = selMark\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vObjects)\n        Dim obj As Object\n        Set obj = vObjects(i)\n        selMgr.AddSelectionListObject obj, swSelData\n    Next\n    \nEnd Sub\n\nFunction GetProfile(center As Variant) As SldWorks.Curve\n\n    Dim swModeler As SldWorks.modeler\n    Set swModeler = swApp.GetModeler\n    \n    Dim dAxis(2) As Double\n    dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n    \n    Const radius As Double = 0.01\n    Dim dStartPt(2) As Double\n    dStartPt(0) = radius + center(0): dStartPt(1) = center(1): dStartPt(2) = center(2)\n    \n    Dim swProfileCurve As SldWorks.Curve\n    Set swProfileCurve = swModeler.CreateArc(center, dAxis, radius, dStartPt, dStartPt)\n    \n    Set GetProfile = swProfileCurve\n    \nEnd Function\n\nFunction GetPath() As SldWorks.Curve\n\n    Dim swModeler As SldWorks.modeler\n    Set swModeler = swApp.GetModeler\n\n    Const majorRadius As Double = 0.2\n    Const minorRadius As Double = 0.1\n    \n    Dim dCenter(2) As Double\n    dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0\n    \n    Dim dMajorAxis(2) As Double\n    dMajorAxis(0) = 0.5: dMajorAxis(1) = 0: dMajorAxis(2) = 1\n    \n    Dim dMinorAxis(2) As Double\n    dMinorAxis(0) = 0.25: dMinorAxis(1) = 1: dMinorAxis(2) = 0\n    \n    Dim swPath As SldWorks.Curve\n    \n    Set swPath = swModeler.CreateEllipse(dCenter, majorRadius, minorRadius, dMajorAxis, dMinorAxis)\n\n    Set GetPath = swPath\n\nEnd Function\n')))}u.isMDXComponent=!0},80036:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/elliptical-sweep-f2cdc15e3633149047938f4698e37c90.png"}}]);