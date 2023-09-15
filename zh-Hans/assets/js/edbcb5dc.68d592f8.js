"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[92601],{3905:(n,t,e)=>{e.d(t,{Zo:()=>m,kt:()=>w});var r=e(67294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function a(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},s=Object.keys(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var l=r.createContext({}),c=function(n){var t=r.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},m=function(n){var t=c(n.components);return r.createElement(l.Provider,{value:t},n.children)},p="mdxType",d={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(n,t){var e=n.components,o=n.mdxType,s=n.originalType,l=n.parentName,m=a(n,["components","mdxType","originalType","parentName"]),p=c(e),u=o,w=p["".concat(l,".").concat(u)]||p[u]||d[u]||s;return e?r.createElement(w,i(i({ref:t},m),{},{components:e})):r.createElement(w,i({ref:t},m))}));function w(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var s=e.length,i=new Array(s);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=n,a[p]="string"==typeof n?n:o,i[1]=a;for(var c=2;c<s;c++)i[c]=e[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},9525:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=e(87462),o=(e(67294),e(3905));const s={title:"\u8ba1\u7b97\u65cb\u8f6c\u53d8\u6362\u4ee5\u4f7f\u7ec4\u4ef6\u4e0e\u65b9\u5411\u5bf9\u9f50",image:"rotation-transform.png",labels:["transform","rotation","align"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/rotation-transform-align/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/rotation-transform-align/index",title:"\u8ba1\u7b97\u65cb\u8f6c\u53d8\u6362\u4ee5\u4f7f\u7ec4\u4ef6\u4e0e\u65b9\u5411\u5bf9\u9f50",description:"\u8fd9\u4e2a VBA \u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528 IMathUtility::CreateTransformRotateAxis SOLIDWORKS API \u6765\u65cb\u8f6c\u7ec4\u4ef6\u5e76\u5c06\u5176\u9762\u7684\u6cd5\u7ebf\u4e0e\u7ebf\u6027\u8fb9\u7684\u65b9\u5411\u5bf9\u9f50\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/rotation-transform-align/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/rotation-transform-align",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/rotation-transform-align/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/rotation-transform-align/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/rotation-transform-align/index.md",tags:[],version:"current",frontMatter:{title:"\u8ba1\u7b97\u65cb\u8f6c\u53d8\u6362\u4ee5\u4f7f\u7ec4\u4ef6\u4e0e\u65b9\u5411\u5bf9\u9f50",image:"rotation-transform.png",labels:["transform","rotation","align"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u66ff\u6362\u7ec4\u4ef6\u5e76\u4fdd\u7559\u9009\u62e9",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/replace/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u8fd0\u884c\u7ec4\u4ef6\u7684\u65cb\u8f6c\u52a8\u753b",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/run-rotation-animation/"}},l={},c=[{value:"\u89e3\u91ca",id:"\u89e3\u91ca",level:2}],m={toc:c},p="wrapper";function d(n){let{components:t,...s}=n;return(0,o.kt)(p,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fd9\u4e2a VBA \u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/English/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IMathUtility~CreateTransformRotateAxis.html"},"IMathUtility::CreateTransformRotateAxis")," SOLIDWORKS API \u6765\u65cb\u8f6c\u7ec4\u4ef6\u5e76\u5c06\u5176\u9762\u7684\u6cd5\u7ebf\u4e0e\u7ebf\u6027\u8fb9\u7684\u65b9\u5411\u5bf9\u9f50\u3002"),(0,o.kt)("p",null,"\u4f5c\u4e3a\u524d\u63d0\u6761\u4ef6\uff0c\u9700\u8981\u5728\u88c5\u914d\u4f53\u4e2d\u9009\u62e9\u7b2c\u4e00\u4e2a\u7ec4\u4ef6\u4e0a\u7684\u5e73\u9762\u9762\u548c\u7b2c\u4e8c\u4e2a\u7ec4\u4ef6\u4e0a\u7684\u7ebf\u6027\u8fb9\u3002\u7b2c\u4e00\u4e2a\u7ec4\u4ef6\u4e0d\u80fd\u88ab\u56fa\u5b9a\uff0c\u5e76\u4e14\u4e0d\u80fd\u6709\u4efb\u4f55\u7ea6\u675f\u3002\u7ed3\u679c\u662f\u7b2c\u4e00\u4e2a\u7ec4\u4ef6\u88ab\u65cb\u8f6c\uff0c\u4f7f\u5176\u6cd5\u7ebf\u4e0e\u8fb9\u7684\u65b9\u5411\u5171\u7ebf\u3002\u7ec4\u4ef6\u56f4\u7ed5\u539f\u70b9\u65cb\u8f6c\u3002"),(0,o.kt)("h2",{id:"\u89e3\u91ca"},"\u89e3\u91ca"),(0,o.kt)("p",null,"\u4e3a\u4e86\u4ee5\u9884\u671f\u7684\u65b9\u5f0f\u5bf9\u7ec4\u4ef6\u8fdb\u884c\u53d8\u6362\uff0c\u9700\u8981\u8ba1\u7b97\u5176\u53d8\u6362\u3002\u4e3a\u6b64\uff0c\u9700\u8981\u627e\u5230\u65cb\u8f6c\u7684\u539f\u70b9\u3001\u65cb\u8f6c\u5411\u91cf\u548c\u89d2\u5ea6\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u521b\u5efa\u9762\u6cd5\u7ebf\u548c\u8fb9\u65b9\u5411\u7684\u5411\u91cf\u3002\u9700\u8981\u5c06\u7ec4\u4ef6\u7684\u53d8\u6362\u5e94\u7528\u4e8e\u8868\u793a\u5728\u76f8\u540c\u5750\u6807\u7cfb\u4e2d\u7684\u5411\u91cf\u3002\u8fd9\u4e24\u4e2a\u5411\u91cf\u4e4b\u95f4\u7684\u89d2\u5ea6\u662f\u53d8\u6362\u7684\u6240\u9700\u89d2\u5ea6\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u627e\u5230\u65cb\u8f6c\u5411\u91cf\uff0c\u9700\u8981\u627e\u5230\u6cd5\u7ebf\u548c\u65b9\u5411\u7684\u5782\u76f4\u5411\u91cf\u3002\u53ef\u4ee5\u901a\u8fc7\u6c42\u53c9\u79ef\u6765\u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u65cb\u8f6c\u70b9\u662f\u7ec4\u4ef6\u7684\u539f\u70b9\u53d8\u6362\u5230\u88c5\u914d\u4f53\u5750\u6807\u7cfb\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u65cb\u8f6c\u53d8\u6362\u53c2\u6570",src:e(65245).Z,width:"600",height:"462"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swFace As SldWorks.Face2\n    Dim swEdge As SldWorks.Edge\n    \n    Set swFace = swSelMgr.GetSelectedObject6(1, -1)\n    \n    Dim swComp As SldWorks.Component2\n    Set swComp = swFace.GetComponent()\n    Dim swCompTransform As SldWorks.MathTransform\n    Set swCompTransform = swComp.Transform2\n    \n    Set swEdge = swSelMgr.GetSelectedObject6(2, -1)\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swNormalDir As SldWorks.MathVector\n    Set swNormalDir = swMathUtils.CreateVector(swFace.Normal)\n    Set swNormalDir = swNormalDir.MultiplyTransform(swCompTransform)\n    \n    Dim swAlignDir As SldWorks.MathVector\n    Dim vLineParams As Variant\n    vLineParams = swEdge.GetCurve().lineParams\n    Dim dVec(2) As Double\n    dVec(0) = vLineParams(3): dVec(1) = vLineParams(4): dVec(2) = vLineParams(5)\n    Set swAlignDir = swMathUtils.CreateVector(dVec)\n    Set swAlignDir = swAlignDir.MultiplyTransform(swEdge.GetComponent().Transform2)\n    \n    Dim swOrigin As SldWorks.MathPoint\n    Dim dOrigin(2) As Double\n    dOrigin(0) = 0: dOrigin(1) = 0: dOrigin(2) = 0\n    Set swOrigin = swMathUtils.CreatePoint(dOrigin)\n    \n    Set swOrigin = swOrigin.MultiplyTransform(swCompTransform)\n    \n    Dim swRotVect As SldWorks.MathVector\n    Set swRotVect = swNormalDir.Cross(swAlignDir)\n        \n    Dim angle As Double\n    angle = GetAngle(swNormalDir, swAlignDir)\n    \n    Dim swTransform As SldWorks.MathTransform\n    Set swTransform = swMathUtils.CreateTransformRotateAxis(swOrigin, swRotVect, angle)\n    \n    Set swTransform = swCompTransform.Multiply(swTransform)\n    \n    swComp.Transform2 = swTransform\n    \n    swModel.GraphicsRedraw2\n    \nEnd Sub\n\nFunction GetAngle(vec1 As MathVector, vec2 As MathVector) As Double\n    \n    'cos a= a*b/(|a|*|b|)\n    GetAngle = ACos(vec1.Dot(vec2) / (vec1.GetLength() * vec2.GetLength()))\n    \nEnd Function\n\nFunction ACos(val As Double) As Double\n    \n    If val = 1 Then\n        ACos = 0\n    ElseIf val = -1 Then\n        ACos = 4 * Atn(1)\n    Else\n        ACos = Atn(-val / Sqr(-val * val + 1)) + 2 * Atn(1)\n    End If\n    \nEnd Function\n")))}d.isMDXComponent=!0},65245:(n,t,e)=>{e.d(t,{Z:()=>r});const r=e.p+"assets/images/rotation-transform-472959aa610e718aa9a89faa18751d6a.png"}}]);