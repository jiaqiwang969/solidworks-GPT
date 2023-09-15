"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[12672],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=r.createContext({}),c=function(e){var t=r.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},A="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},M=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,m=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),A=c(o),M=n,u=A["".concat(m,".").concat(M)]||A[M]||l[M]||s;return o?r.createElement(u,i(i({ref:t},d),{},{components:o})):r.createElement(u,i({ref:t},d))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=M;var a={};for(var m in t)hasOwnProperty.call(t,m)&&(a[m]=t[m]);a.originalType=e,a[A]="string"==typeof e?e:n,i[1]=a;for(var c=2;c<s;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}M.displayName="MDXCreateElement"},17276:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const s={title:"Get the transformation matrix of coordinate system using SOLIDWORKS API",caption:"Get Coordinate System Transformation",description:"VBA macro to get the 4x4 transformation matrix from the selected coordinate systems and output the result in the immediate window",image:"coordinate-system.png",labels:["transform","coordinate system"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-coordinate-system-transform/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-coordinate-system-transform/index",title:"Get the transformation matrix of coordinate system using SOLIDWORKS API",description:"VBA macro to get the 4x4 transformation matrix from the selected coordinate systems and output the result in the immediate window",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-coordinate-system-transform/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-coordinate-system-transform",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-coordinate-system-transform/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-coordinate-system-transform/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-coordinate-system-transform/index.md",tags:[],version:"current",frontMatter:{title:"Get the transformation matrix of coordinate system using SOLIDWORKS API",caption:"Get Coordinate System Transformation",description:"VBA macro to get the 4x4 transformation matrix from the selected coordinate systems and output the result in the immediate window",image:"coordinate-system.png",labels:["transform","coordinate system"]},sidebar:"tutorialSidebar",previous:{title:"Get center of gravity for the SOLIDWORKS component in assembly",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-cog/"},next:{title:"Get parameters of face at centroid using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-face-center-parameters/"}},m={},c=[],d={toc:c},A="wrapper";function l(e){let{components:t,...s}=e;return(0,n.kt)(A,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Coordinate system in the feature manager tree",src:o(87734).Z,width:"641",height:"399"}),"{ width=450 }"),(0,n.kt)("p",null,"This VBA macro extract the 4x4 ",(0,n.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/geometry/transformation/"},"transformation matrix")," from the selected coordinate system in the feature manager tree."),(0,n.kt)("p",null,"The comma separated results are output to the immediate (ctrl+G) window of VBA editor."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Matrix output to the immediate window of VBA editor",src:o(47273).Z,width:"484",height:"174"}),"{ width=350 }"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swFeat Is Nothing Then\n            \n            If swFeat.GetTypeName2() = "CoordSys" Then\n                \n                Dim swCoordSys As SldWorks.CoordinateSystemFeatureData\n                \n                Set swCoordSys = swFeat.GetDefinition\n                Dim swMathTransform As SldWorks.MathTransform\n                Set swMathTransform = swCoordSys.Transform\n                \n                Dim vMatrix As Variant\n                vMatrix = swMathTransform.ArrayData\n                \n                Debug.Print vMatrix(0) & "," & vMatrix(1) & "," & vMatrix(2) & "," & vMatrix(3) & ","\n                Debug.Print vMatrix(4) & "," & vMatrix(5) & "," & vMatrix(6) & "," & vMatrix(7) & ","\n                Debug.Print vMatrix(8) & "," & vMatrix(9) & "," & vMatrix(10) & "," & vMatrix(11) & ","\n                Debug.Print vMatrix(12) & "," & vMatrix(13) & "," & vMatrix(14) & "," & vMatrix(15)\n                \n            Else\n                MsgBox "Selected feature is not a coordinate system"\n            End If\n        Else\n            MsgBox "Please select coordinate system feature"\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n')))}l.isMDXComponent=!0},87734:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/coordinate-system-0714ec348230995b8623c711dd5d8538.png"},47273:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);