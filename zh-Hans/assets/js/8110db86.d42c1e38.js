"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[44112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=o.createContext({}),A=function(e){var t=o.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=A(e.components);return o.createElement(m.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},M=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=A(r),M=n,f=d["".concat(m,".").concat(M)]||d[M]||l[M]||a;return r?o.createElement(f,s(s({ref:t},c),{},{components:r})):o.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=M;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var A=2;A<a;A++)s[A]=r[A];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}M.displayName="MDXCreateElement"},44999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>A});var o=r(87462),n=(r(67294),r(3905));const a={title:"Get the transformation matrix of coordinate system using SOLIDWORKS API",caption:"Get Coordinate System Transformation",description:"VBA macro to get the 4x4 transformation matrix from the selected coordinate systems and output the result in the immediate window",image:"coordinate-system.png",labels:["transform","coordinate system"]},s=void 0,i={unversionedId:"codestack-clone/solidworks-api/geometry/transformation/get-coordinate-system-transform/index",id:"codestack-clone/solidworks-api/geometry/transformation/get-coordinate-system-transform/index",title:"Get the transformation matrix of coordinate system using SOLIDWORKS API",description:"VBA macro to get the 4x4 transformation matrix from the selected coordinate systems and output the result in the immediate window",source:"@site/docs/codestack-clone/solidworks-api/geometry/transformation/get-coordinate-system-transform/index.md",sourceDirName:"codestack-clone/solidworks-api/geometry/transformation/get-coordinate-system-transform",slug:"/codestack-clone/solidworks-api/geometry/transformation/get-coordinate-system-transform/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/geometry/transformation/get-coordinate-system-transform/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/geometry/transformation/get-coordinate-system-transform/index.md",tags:[],version:"current",frontMatter:{title:"Get the transformation matrix of coordinate system using SOLIDWORKS API",caption:"Get Coordinate System Transformation",description:"VBA macro to get the 4x4 transformation matrix from the selected coordinate systems and output the result in the immediate window",image:"coordinate-system.png",labels:["transform","coordinate system"]},sidebar:"tutorialSidebar",previous:{title:"Create rotational transformation of circular pattern via SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/geometry/transformation/circular-pattern-data-rotational-transformation/"},next:{title:"Create vector normal to screen view using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/geometry/transformation/vector-normal-to-screen-view/"}},m={},A=[],c={toc:A},d="wrapper";function l(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Coordinate system in the feature manager tree",src:r(88100).Z,width:"641",height:"399"}),"{ width=450 }"),(0,n.kt)("p",null,"This VBA macro extract the 4x4 ",(0,n.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/geometry/transformation/"},"transformation matrix")," from the selected coordinate system in the feature manager tree."),(0,n.kt)("p",null,"The comma separated results are output to the immediate (ctrl+G) window of VBA editor."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Matrix output to the immediate window of VBA editor",src:r(62811).Z,width:"484",height:"174"}),"{ width=350 }"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swFeat Is Nothing Then\n            \n            If swFeat.GetTypeName2() = "CoordSys" Then\n                \n                Dim swCoordSys As SldWorks.CoordinateSystemFeatureData\n                \n                Set swCoordSys = swFeat.GetDefinition\n                Dim swMathTransform As SldWorks.MathTransform\n                Set swMathTransform = swCoordSys.Transform\n                \n                Dim vMatrix As Variant\n                vMatrix = swMathTransform.ArrayData\n                \n                Debug.Print vMatrix(0) & "," & vMatrix(1) & "," & vMatrix(2) & "," & vMatrix(3) & ","\n                Debug.Print vMatrix(4) & "," & vMatrix(5) & "," & vMatrix(6) & "," & vMatrix(7) & ","\n                Debug.Print vMatrix(8) & "," & vMatrix(9) & "," & vMatrix(10) & "," & vMatrix(11) & ","\n                Debug.Print vMatrix(12) & "," & vMatrix(13) & "," & vMatrix(14) & "," & vMatrix(15)\n                \n            Else\n                MsgBox "Selected feature is not a coordinate system"\n            End If\n        Else\n            MsgBox "Please select coordinate system feature"\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n')))}l.isMDXComponent=!0},88100:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/coordinate-system-0714ec348230995b8623c711dd5d8538.png"},62811:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);