"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[17313],{3905:(t,n,e)=>{e.d(n,{Zo:()=>m,kt:()=>u});var o=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var l=o.createContext({}),c=function(t){var n=o.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},m=function(t){var n=c(t.components);return o.createElement(l.Provider,{value:n},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(t,n){var e=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),d=c(e),f=r,u=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return e?o.createElement(u,a(a({ref:n},m),{},{components:e})):o.createElement(u,a({ref:n},m))}));function u(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=e.length,a=new Array(i);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=t,s[d]="string"==typeof t?t:r,a[1]=s;for(var c=2;c<i;c++)a[c]=e[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,e)}f.displayName="MDXCreateElement"},70147:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=e(87462),r=(e(67294),e(3905));const i={title:"Calculating rotation transformation to align component with direction",caption:"Aligning Component With Rotation Transformation",description:"VBA example demonstrates hwo to calculate the rotation transformation to align the normal of the component's face with edge direction around the component's origin",image:"rotation-transform.png",labels:["transform","rotation","align"]},a=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rotation-transform-align/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rotation-transform-align/index",title:"Calculating rotation transformation to align component with direction",description:"VBA example demonstrates hwo to calculate the rotation transformation to align the normal of the component's face with edge direction around the component's origin",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rotation-transform-align/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rotation-transform-align",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rotation-transform-align/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rotation-transform-align/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/rotation-transform-align/index.md",tags:[],version:"current",frontMatter:{title:"Calculating rotation transformation to align component with direction",caption:"Aligning Component With Rotation Transformation",description:"VBA example demonstrates hwo to calculate the rotation transformation to align the normal of the component's face with edge direction around the component's origin",image:"rotation-transform.png",labels:["transform","rotation","align"]},sidebar:"tutorialSidebar",previous:{title:"Reveal (display or delete) all feature hidden in the SOLIDWORKS Feature Manager tree",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/reveal-hidden-features/"},next:{title:"Run VBA and VSTA macros in SOLIDWORKS",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run/"}},l={},c=[{value:"Explanation",id:"explanation",level:2}],m={toc:c},d="wrapper";function p(t){let{components:n,...i}=t;return(0,r.kt)(d,(0,o.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA example demonstrates how to use the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/English/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IMathUtility~CreateTransformRotateAxis.html"},"IMathUtility::CreateTransformRotateAxis")," SOLIDWORKS API to rotate the component and align the normal of its face with the direction from the linear edge."),(0,r.kt)("p",null,"As a precondition select the planar face on the first component in the assembly and linear edge on the second component in the assembly. First component must not be fixed and do not have any mates. As the result first component rotated in a way that its normal is collinear with the direction of the edge. Component is rotated around the origin."),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("p",null,"In order to transform the component in the expected way it is required to calculate its transform. For that it is required to find the origin of rotation, rotation vector and an angle."),(0,r.kt)("p",null,"At first we create vectors of the face normal and edge direction. It is required to apply the transformation of the components to represent vectors in the same coordinate system. The angle between those vectors is a required angle of transformation."),(0,r.kt)("p",null,"In order to find the vector of rotation it is required to find the vector perpendicular to both normal and direction. This can be achieved by finding the cross product."),(0,r.kt)("p",null,"Finally point of rotation is an origin of the component transformed to the assembly coordinate system."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rotation transformation parameters",src:e(95022).Z,width:"600",height:"462"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swFace As SldWorks.Face2\n    Dim swEdge As SldWorks.Edge\n    \n    Set swFace = swSelMgr.GetSelectedObject6(1, -1)\n    \n    Dim swComp As SldWorks.Component2\n    Set swComp = swFace.GetComponent()\n    Dim swCompTransform As SldWorks.MathTransform\n    Set swCompTransform = swComp.Transform2\n    \n    Set swEdge = swSelMgr.GetSelectedObject6(2, -1)\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swNormalDir As SldWorks.MathVector\n    Set swNormalDir = swMathUtils.CreateVector(swFace.Normal)\n    Set swNormalDir = swNormalDir.MultiplyTransform(swCompTransform)\n    \n    Dim swAlignDir As SldWorks.MathVector\n    Dim vLineParams As Variant\n    vLineParams = swEdge.GetCurve().lineParams\n    Dim dVec(2) As Double\n    dVec(0) = vLineParams(3): dVec(1) = vLineParams(4): dVec(2) = vLineParams(5)\n    Set swAlignDir = swMathUtils.CreateVector(dVec)\n    Set swAlignDir = swAlignDir.MultiplyTransform(swEdge.GetComponent().Transform2)\n    \n    Dim swOrigin As SldWorks.MathPoint\n    Dim dOrigin(2) As Double\n    dOrigin(0) = 0: dOrigin(1) = 0: dOrigin(2) = 0\n    Set swOrigin = swMathUtils.CreatePoint(dOrigin)\n    \n    Set swOrigin = swOrigin.MultiplyTransform(swCompTransform)\n    \n    Dim swRotVect As SldWorks.MathVector\n    Set swRotVect = swNormalDir.Cross(swAlignDir)\n        \n    Dim angle As Double\n    angle = GetAngle(swNormalDir, swAlignDir)\n    \n    Dim swTransform As SldWorks.MathTransform\n    Set swTransform = swMathUtils.CreateTransformRotateAxis(swOrigin, swRotVect, angle)\n    \n    Set swTransform = swCompTransform.Multiply(swTransform)\n    \n    swComp.Transform2 = swTransform\n    \n    swModel.GraphicsRedraw2\n    \nEnd Sub\n\nFunction GetAngle(vec1 As MathVector, vec2 As MathVector) As Double\n    \n    'cos a= a*b/(|a|*|b|)\n    GetAngle = ACos(vec1.Dot(vec2) / (vec1.GetLength() * vec2.GetLength()))\n    \nEnd Function\n\nFunction ACos(val As Double) As Double\n    \n    If val = 1 Then\n        ACos = 0\n    ElseIf val = -1 Then\n        ACos = 4 * Atn(1)\n    Else\n        ACos = Atn(-val / Sqr(-val * val + 1)) + 2 * Atn(1)\n    End If\n    \nEnd Function\n")))}p.isMDXComponent=!0},95022:(t,n,e)=>{e.d(n,{Z:()=>o});const o=e.p+"assets/images/rotation-transform-472959aa610e718aa9a89faa18751d6a.png"}}]);