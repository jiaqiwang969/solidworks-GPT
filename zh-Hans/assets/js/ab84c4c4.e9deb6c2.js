"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[29824],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},A=Object.keys(e);for(o=0;o<A.length;o++)t=A[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(o=0;o<A.length;o++)t=A[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},g="mdxType",w={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},l=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,A=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),g=c(t),l=r,f=g["".concat(i,".").concat(l)]||g[l]||w[l]||A;return t?o.createElement(f,s(s({ref:n},m),{},{components:t})):o.createElement(f,s({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var A=t.length,s=new Array(A);s[0]=l;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[g]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<A;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},49258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>w,frontMatter:()=>A,metadata:()=>a,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const A={title:"Get parameters of face at centroid using SOLIDWORKS API",caption:"Get Face Center Parameters"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/get-face-center-parameters/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/get-face-center-parameters/index",title:"Get parameters of face at centroid using SOLIDWORKS API",description:"Example demonstrates how to find the face parameters (coordinate and normal) at the center of the face using SOLIDWORKS API",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/get-face-center-parameters/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/get-face-center-parameters",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/get-face-center-parameters/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/get-face-center-parameters/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/get-face-center-parameters/index.md",tags:[],version:"current",frontMatter:{title:"Get parameters of face at centroid using SOLIDWORKS API",caption:"Get Face Center Parameters"},sidebar:"tutorialSidebar",previous:{title:"Get b-spline parameters from the selected edge using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/get-bspline-parameters/"},next:{title:"Macro to save bodies into individual SOLIDWORKS part documents",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/insert-bodies-to-part/"}},i={},c=[{value:"labels: center, uv, normal",id:"labels-center-uv-normal",level:2}],m={toc:c},g="wrapper";function w(e){let{components:n,...A}=e;return(0,r.kt)(g,(0,o.Z)({},m,A,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Example demonstrates how to find the face parameters (coordinate and normal) at the center of the face using SOLIDWORKS API\nimage: face-center.png"),(0,r.kt)("h2",{id:"labels-center-uv-normal"},"labels: ","[center, uv, normal]"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Point created at the center of the face",src:t(46383).Z,width:"383",height:"229"}),"{ width=250 }"),(0,r.kt)("p",null,"This example demonstrate how to find the parameters (point coordinate and normal) at the center of the face using SOLIDWORKS API. This macro will work with any type of face (planar, cylindrical, toroidal, b-surface etc.)"),(0,r.kt)("p",null,"Center is found as the average of minimum and maximum values of U and V parameters using the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isurface~evaluate.html"},"ISurface::Evaluate")," SOLIDWORKS API method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swFace As SldWorks.Face2\n        Set swFace = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swFace Is Nothing Then\n            \n            Dim vPt As Variant\n            Dim vNorm As Variant\n            \n            GetFaceCenterParameters swFace, vPt, vNorm\n            \n            Debug.Print "Coordinate at face center is: " & vPt(0) * 1000 & ", " & vPt(1) * 1000 & ", " & vPt(2) * 1000\n            Debug.Print "Normal at face center is: " & vNorm(0) & ", " & vNorm(1) & ", " & vNorm(2)\n        \n        Else\n            MsgBox "Please select face"\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nSub GetFaceCenterParameters(face As SldWorks.Face2, ByRef point As Variant, ByRef normal As Variant)\n    \n    Dim vUvBounds As Variant\n    vUvBounds = face.GetUVBounds\n    \n    Dim centerU As Double\n    Dim centerV As Double\n        \n    centerU = (vUvBounds(0) + vUvBounds(1)) / 2\n    centerV = (vUvBounds(2) + vUvBounds(3)) / 2\n    \n    Dim swSurf As SldWorks.Surface\n    Set swSurf = face.GetSurface\n    \n    Dim vEvalRes As Variant\n    vEvalRes = swSurf.Evaluate(centerU, centerV, 0, 0)\n    \n    Dim dPoint(2) As Double\n    Dim dNormal(2) As Double\n    \n    dPoint(0) = vEvalRes(0)\n    dPoint(1) = vEvalRes(1)\n    dPoint(2) = vEvalRes(2)\n    \n    dNormal(0) = vEvalRes(3)\n    dNormal(1) = vEvalRes(4)\n    dNormal(2) = vEvalRes(5)\n    \n    point = dPoint\n    normal = dNormal\n    \nEnd Sub\n')))}w.isMDXComponent=!0},46383:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,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"}}]);