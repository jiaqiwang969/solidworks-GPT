"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[41853],{3905:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>w});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},s=Object.keys(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=o.createContext({}),c=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},m=function(n){var e=c(n.components);return o.createElement(l.Provider,{value:e},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,s=n.originalType,l=n.parentName,m=a(n,["components","mdxType","originalType","parentName"]),p=c(t),u=r,w=p["".concat(l,".").concat(u)]||p[u]||d[u]||s;return t?o.createElement(w,i(i({ref:e},m),{},{components:t})):o.createElement(w,i({ref:e},m))}));function w(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=t.length,i=new Array(s);i[0]=u;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a[p]="string"==typeof n?n:r,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3597:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const s={title:"Run rotation animation for the component using SOLIDWORKS API",caption:"Run Rotation Animation For The Component",description:"Example demonstrates how to run a smooth animation of components rotation around axis using the presentation transforms in SOLIDWORKS API",image:"component-rotation.gif",labels:["assembly","transform","rotation","animation"]},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-rotation-animation/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-rotation-animation/index",title:"Run rotation animation for the component using SOLIDWORKS API",description:"Example demonstrates how to run a smooth animation of components rotation around axis using the presentation transforms in SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-rotation-animation/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-rotation-animation",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-rotation-animation/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-rotation-animation/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-rotation-animation/index.md",tags:[],version:"current",frontMatter:{title:"Run rotation animation for the component using SOLIDWORKS API",caption:"Run Rotation Animation For The Component",description:"Example demonstrates how to run a smooth animation of components rotation around axis using the presentation transforms in SOLIDWORKS API",image:"component-rotation.gif",labels:["assembly","transform","rotation","animation"]},sidebar:"tutorialSidebar",previous:{title:"Macro to run group of macros using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-macros-group/"},next:{title:"Fix failed SOLIDWORKS VSTA (C# or VB.NET) macro",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-vsta-macro-error/"}},l={},c=[{value:"Note",id:"note",level:3}],m={toc:c},p="wrapper";function d(n){let{components:e,...s}=n;return(0,r.kt)(p,(0,o.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Component rotation animation around Y axis",src:t(8933).Z,width:"300",height:"163"})),(0,r.kt)("p",null,"This macro demonstrates how to run a smooth animation of components rotation around Y axis of the component using the presentation transforms via ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2~presentationtransform.html"},"IComponent2::PresentationTransform")," SOLIDWORKS API method."),(0,r.kt)("p",null,"This allows to only move the components for visual purposes without changing the geometry. Component will be moved regardless if it is fully defined in space (by mates or fix constraint). And the mates are still preserved."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select any component in the assembly and run the macro"),(0,r.kt)("li",{parentName:"ul"},"Component is rotated around its Y axis"),(0,r.kt)("li",{parentName:"ul"},"To stop the animation clear the selection (deselect all objects)"),(0,r.kt)("li",{parentName:"ul"},"To modify the speed of the rotation change the optional ",(0,r.kt)("em",{parentName:"li"},"speed")," parameter of ",(0,r.kt)("em",{parentName:"li"},"RunRotationAnimation")," method")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'If Not swComp Is Nothing Then\n    RunRotationAnimation swModel, swComp, 2 \'speed x2\nElse\n    MsgBox "Please select component"\nEnd If\n')),(0,r.kt)("h3",{id:"note"},"Note"),(0,r.kt)("p",null,"In order to enable presentation mode it is required to set the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IAssemblyDoc~EnablePresentation.html"},"IAssemblyDoc::EnablePresentation")," proeprty to True."),(0,r.kt)("p",null,"It is required to set this property to False after the animation is finished otherwise all SOLIDWORKS menues will be locked:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locked menu in the assembly presentation mode",src:t(68431).Z,width:"649",height:"345"}),"{ width=300 }"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const PI As Double = 3.14159265359\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swSelMgr As SldWorks.SelectionMgr\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = swSelMgr.GetSelectedObjectsComponent4(1, -1)\n        \n        If Not swComp Is Nothing Then\n            RunRotationAnimation swModel, swComp\n        Else\n            MsgBox "Please select component"\n        End If\n        \n    Else\n        MsgBox "Please open assembly"\n    End If\n    \nEnd Sub\n\nSub RunRotationAnimation(assy As SldWorks.AssemblyDoc, comp As SldWorks.Component2, Optional speed As Double = 1)\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n        \n    Set swSelMgr = assy.SelectionManager\n        \n    Dim rotStep As Double\n    rotStep = PI * 2 / 360 * speed\n    \n    Dim curAng As Double\n    \n    Dim swModelView As SldWorks.ModelView\n    Set swModelView = assy.ActiveView\n            \n    assy.EnablePresentation = True\n    \n    While swSelMgr.GetSelectedObjectCount2(-1) <> 0\n        For curAng = 0 To PI * 2 Step rotStep\n            Dim animStep As MathTransform\n            Set animStep = GetTransform(comp, curAng)\n            comp.PresentationTransform = animStep\n            swModelView.GraphicsRedraw Nothing\n            DoEvents\n        Next\n    Wend\n    \n    assy.EnablePresentation = False\n    \nEnd Sub\n\nFunction GetTransform(comp As SldWorks.Component2, angle As Double) As MathTransform\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swOrigPt As SldWorks.MathPoint\n    Dim dPt(2) As Double\n    dPt(0) = 0: dPt(1) = 0: dPt(2) = 0\n    \n    Set swOrigPt = swMathUtils.CreatePoint(dPt)\n    \n    Set swOrigPt = swOrigPt.MultiplyTransform(comp.Transform2)\n    \n    Dim swAxisVec As SldWorks.MathVector\n    Dim dVec(2) As Double\n    dVec(0) = 0: dVec(1) = 1: dVec(2) = 0\n    \n    Set swAxisVec = swMathUtils.CreateVector(dVec)\n    \n    Set swAxisVec = swAxisVec.MultiplyTransform(comp.Transform2)\n    \n    Set GetTransform = swMathUtils.CreateTransformRotateAxis(swOrigPt, swAxisVec, angle)\n    \nEnd Function\n')))}d.isMDXComponent=!0},8933:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/component-rotation-c8727c839c0eb8cea4a686070b435d10.gif"},68431:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/locked-menu-74799bb44295d667f3ce4f8289b726d1.png"}}]);