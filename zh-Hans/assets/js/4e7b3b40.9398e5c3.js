"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[1881],{3905:(n,t,e)=>{e.d(t,{Zo:()=>m,kt:()=>f});var o=e(67294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function s(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var l=o.createContext({}),c=function(n){var t=o.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):a(a({},t),n)),e},m=function(n){var t=c(n.components);return o.createElement(l.Provider,{value:t},n.children)},d="mdxType",p={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(n,t){var e=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,m=s(n,["components","mdxType","originalType","parentName"]),d=c(e),u=r,f=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return e?o.createElement(f,a(a({ref:t},m),{},{components:e})):o.createElement(f,a({ref:t},m))}));function f(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var i=e.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=n,s[d]="string"==typeof n?n:r,a[1]=s;for(var c=2;c<i;c++)a[c]=e[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,e)}u.displayName="MDXCreateElement"},91478:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=e(87462),r=(e(67294),e(3905));const i={title:"Calculating rotation transformation to align component with direction",caption:"Aligning Component With Rotation Transformation",description:"VBA example demonstrates hwo to calculate the rotation transformation to align the normal of the component's face with edge direction around the component's origin",image:"rotation-transform.png",labels:["transform","rotation","align"]},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/rotation-transform-align/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/rotation-transform-align/index",title:"Calculating rotation transformation to align component with direction",description:"VBA example demonstrates hwo to calculate the rotation transformation to align the normal of the component's face with edge direction around the component's origin",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/rotation-transform-align/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/rotation-transform-align",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/rotation-transform-align/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/rotation-transform-align/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/rotation-transform-align/index.md",tags:[],version:"current",frontMatter:{title:"Calculating rotation transformation to align component with direction",caption:"Aligning Component With Rotation Transformation",description:"VBA example demonstrates hwo to calculate the rotation transformation to align the normal of the component's face with edge direction around the component's origin",image:"rotation-transform.png",labels:["transform","rotation","align"]},sidebar:"tutorialSidebar",previous:{title:"Replace components preserving selection using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/replace/"},next:{title:"Run rotation animation for the component using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/run-rotation-animation/"}},l={},c=[{value:"Explanation",id:"explanation",level:2}],m={toc:c},d="wrapper";function p(n){let{components:t,...i}=n;return(0,r.kt)(d,(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA example demonstrates how to use the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/English/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IMathUtility~CreateTransformRotateAxis.html"},"IMathUtility::CreateTransformRotateAxis")," SOLIDWORKS API to rotate the component and align the normal of its face with the direction from the linear edge."),(0,r.kt)("p",null,"As a precondition select the planar face on the first component in the assembly and linear edge on the second component in the assembly. First component must not be fixed and do not have any mates. As the result first component rotated in a way that its normal is collinear with the direction of the edge. Component is rotated around the origin."),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("p",null,"In order to transform the component in the expected way it is required to calculate its transform. For that it is required to find the origin of rotation, rotation vector and an angle."),(0,r.kt)("p",null,"At first we create vectors of the face normal and edge direction. It is required to apply the transformation of the components to represent vectors in the same coordinate system. The angle between those vectors is a required angle of transformation."),(0,r.kt)("p",null,"In order to find the vector of rotation it is required to find the vector perpendicular to both normal and direction. This can be achieved by finding the cross product."),(0,r.kt)("p",null,"Finally point of rotation is an origin of the component transformed to the assembly coordinate system."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rotation transformation parameters",src:e(92086).Z,width:"600",height:"462"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swFace As SldWorks.Face2\n    Dim swEdge As SldWorks.Edge\n    \n    Set swFace = swSelMgr.GetSelectedObject6(1, -1)\n    \n    Dim swComp As SldWorks.Component2\n    Set swComp = swFace.GetComponent()\n    Dim swCompTransform As SldWorks.MathTransform\n    Set swCompTransform = swComp.Transform2\n    \n    Set swEdge = swSelMgr.GetSelectedObject6(2, -1)\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swNormalDir As SldWorks.MathVector\n    Set swNormalDir = swMathUtils.CreateVector(swFace.Normal)\n    Set swNormalDir = swNormalDir.MultiplyTransform(swCompTransform)\n    \n    Dim swAlignDir As SldWorks.MathVector\n    Dim vLineParams As Variant\n    vLineParams = swEdge.GetCurve().lineParams\n    Dim dVec(2) As Double\n    dVec(0) = vLineParams(3): dVec(1) = vLineParams(4): dVec(2) = vLineParams(5)\n    Set swAlignDir = swMathUtils.CreateVector(dVec)\n    Set swAlignDir = swAlignDir.MultiplyTransform(swEdge.GetComponent().Transform2)\n    \n    Dim swOrigin As SldWorks.MathPoint\n    Dim dOrigin(2) As Double\n    dOrigin(0) = 0: dOrigin(1) = 0: dOrigin(2) = 0\n    Set swOrigin = swMathUtils.CreatePoint(dOrigin)\n    \n    Set swOrigin = swOrigin.MultiplyTransform(swCompTransform)\n    \n    Dim swRotVect As SldWorks.MathVector\n    Set swRotVect = swNormalDir.Cross(swAlignDir)\n        \n    Dim angle As Double\n    angle = GetAngle(swNormalDir, swAlignDir)\n    \n    Dim swTransform As SldWorks.MathTransform\n    Set swTransform = swMathUtils.CreateTransformRotateAxis(swOrigin, swRotVect, angle)\n    \n    Set swTransform = swCompTransform.Multiply(swTransform)\n    \n    swComp.Transform2 = swTransform\n    \n    swModel.GraphicsRedraw2\n    \nEnd Sub\n\nFunction GetAngle(vec1 As MathVector, vec2 As MathVector) As Double\n    \n    'cos a= a*b/(|a|*|b|)\n    GetAngle = ACos(vec1.Dot(vec2) / (vec1.GetLength() * vec2.GetLength()))\n    \nEnd Function\n\nFunction ACos(val As Double) As Double\n    \n    If val = 1 Then\n        ACos = 0\n    ElseIf val = -1 Then\n        ACos = 4 * Atn(1)\n    Else\n        ACos = Atn(-val / Sqr(-val * val + 1)) + 2 * Atn(1)\n    End If\n    \nEnd Function\n")))}p.isMDXComponent=!0},92086:(n,t,e)=>{e.d(t,{Z:()=>o});const o=e.p+"assets/images/rotation-transform-472959aa610e718aa9a89faa18751d6a.png"}}]);