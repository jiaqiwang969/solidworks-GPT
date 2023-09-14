"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[21065],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>w});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(t),u=s,w=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return t?o.createElement(w,a(a({ref:n},c),{},{components:t})):o.createElement(w,a({ref:n},c))}));function w(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,a=new Array(r);a[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var m=2;m<r;m++)a[m]=t[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=t(87462),s=(t(67294),t(3905));const r={title:"Run rotation animation for the component using SOLIDWORKS API",caption:"Run Rotation Animation For The Component",description:"Example demonstrates how to run a smooth animation of components rotation around axis using the presentation transforms in SOLIDWORKS API",image:"component-rotation.gif",labels:["assembly","transform","rotation","animation"]},a=void 0,i={unversionedId:"codestack-clone/solidworks-api/document/assembly/components/run-rotation-animation/index",id:"codestack-clone/solidworks-api/document/assembly/components/run-rotation-animation/index",title:"Run rotation animation for the component using SOLIDWORKS API",description:"Example demonstrates how to run a smooth animation of components rotation around axis using the presentation transforms in SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/document/assembly/components/run-rotation-animation/index.md",sourceDirName:"codestack-clone/solidworks-api/document/assembly/components/run-rotation-animation",slug:"/codestack-clone/solidworks-api/document/assembly/components/run-rotation-animation/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/assembly/components/run-rotation-animation/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/assembly/components/run-rotation-animation/index.md",tags:[],version:"current",frontMatter:{title:"Run rotation animation for the component using SOLIDWORKS API",caption:"Run Rotation Animation For The Component",description:"Example demonstrates how to run a smooth animation of components rotation around axis using the presentation transforms in SOLIDWORKS API",image:"component-rotation.gif",labels:["assembly","transform","rotation","animation"]},sidebar:"tutorialSidebar",previous:{title:"Calculating rotation transformation to align component with direction",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/assembly/components/rotation-transform-align/"},next:{title:"Select all suppressed components in the assembly using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/assembly/components/select-suppressed/"}},l={},m=[{value:"Note",id:"note",level:3}],c={toc:m},p="wrapper";function d(e){let{components:n,...r}=e;return(0,s.kt)(p,(0,o.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Component rotation animation around Y axis",src:t(45907).Z,width:"300",height:"163"})),(0,s.kt)("p",null,"This macro demonstrates how to run a smooth animation of components rotation around Y axis of the component using the presentation transforms via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2~presentationtransform.html"},"IComponent2::PresentationTransform")," SOLIDWORKS API method."),(0,s.kt)("p",null,"This allows to only move the components for visual purposes without changing the geometry. Component will be moved regardless if it is fully defined in space (by mates or fix constraint). And the mates are still preserved."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Select any component in the assembly and run the macro"),(0,s.kt)("li",{parentName:"ul"},"Component is rotated around its Y axis"),(0,s.kt)("li",{parentName:"ul"},"To stop the animation clear the selection (deselect all objects)"),(0,s.kt)("li",{parentName:"ul"},"To modify the speed of the rotation change the optional ",(0,s.kt)("em",{parentName:"li"},"speed")," parameter of ",(0,s.kt)("em",{parentName:"li"},"RunRotationAnimation")," method")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'If Not swComp Is Nothing Then\n    RunRotationAnimation swModel, swComp, 2 \'speed x2\nElse\n    MsgBox "Please select component"\nEnd If\n')),(0,s.kt)("h3",{id:"note"},"Note"),(0,s.kt)("p",null,"In order to enable presentation mode it is required to set the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IAssemblyDoc~EnablePresentation.html"},"IAssemblyDoc::EnablePresentation")," proeprty to True."),(0,s.kt)("p",null,"It is required to set this property to False after the animation is finished otherwise all SOLIDWORKS menues will be locked:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Locked menu in the assembly presentation mode",src:t(85162).Z,width:"649",height:"345"}),"{ width=300 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const PI As Double = 3.14159265359\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swSelMgr As SldWorks.SelectionMgr\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = swSelMgr.GetSelectedObjectsComponent4(1, -1)\n        \n        If Not swComp Is Nothing Then\n            RunRotationAnimation swModel, swComp\n        Else\n            MsgBox "Please select component"\n        End If\n        \n    Else\n        MsgBox "Please open assembly"\n    End If\n    \nEnd Sub\n\nSub RunRotationAnimation(assy As SldWorks.AssemblyDoc, comp As SldWorks.Component2, Optional speed As Double = 1)\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n        \n    Set swSelMgr = assy.SelectionManager\n        \n    Dim rotStep As Double\n    rotStep = PI * 2 / 360 * speed\n    \n    Dim curAng As Double\n    \n    Dim swModelView As SldWorks.ModelView\n    Set swModelView = assy.ActiveView\n            \n    assy.EnablePresentation = True\n    \n    While swSelMgr.GetSelectedObjectCount2(-1) <> 0\n        For curAng = 0 To PI * 2 Step rotStep\n            Dim animStep As MathTransform\n            Set animStep = GetTransform(comp, curAng)\n            comp.PresentationTransform = animStep\n            swModelView.GraphicsRedraw Nothing\n            DoEvents\n        Next\n    Wend\n    \n    assy.EnablePresentation = False\n    \nEnd Sub\n\nFunction GetTransform(comp As SldWorks.Component2, angle As Double) As MathTransform\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swOrigPt As SldWorks.MathPoint\n    Dim dPt(2) As Double\n    dPt(0) = 0: dPt(1) = 0: dPt(2) = 0\n    \n    Set swOrigPt = swMathUtils.CreatePoint(dPt)\n    \n    Set swOrigPt = swOrigPt.MultiplyTransform(comp.Transform2)\n    \n    Dim swAxisVec As SldWorks.MathVector\n    Dim dVec(2) As Double\n    dVec(0) = 0: dVec(1) = 1: dVec(2) = 0\n    \n    Set swAxisVec = swMathUtils.CreateVector(dVec)\n    \n    Set swAxisVec = swAxisVec.MultiplyTransform(comp.Transform2)\n    \n    Set GetTransform = swMathUtils.CreateTransformRotateAxis(swOrigPt, swAxisVec, angle)\n    \nEnd Function\n')))}d.isMDXComponent=!0},45907:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/component-rotation-c8727c839c0eb8cea4a686070b435d10.gif"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/locked-menu-74799bb44295d667f3ce4f8289b726d1.png"}}]);