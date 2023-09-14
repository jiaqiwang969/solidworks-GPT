"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[4722],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(o),u=n,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return o?r.createElement(f,s(s({ref:t},p),{},{components:o})):r.createElement(f,s({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:n,s[1]=a;for(var l=2;l<i;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},44016:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const i={caption:"Scale Imported Geometry",title:"VBA macro to scale the geometry of the imported features using SOLIDWORKS API",description:"VBA macro scales the bodies from the imported features of the foreign formats (e.g. STEP, IGES) with the specified scale factor",image:"imported-feature.png"},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part/index",title:"VBA macro to scale the geometry of the imported features using SOLIDWORKS API",description:"VBA macro scales the bodies from the imported features of the foreign formats (e.g. STEP, IGES) with the specified scale factor",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part/index.md",tags:[],version:"current",frontMatter:{caption:"Scale Imported Geometry",title:"VBA macro to scale the geometry of the imported features using SOLIDWORKS API",description:"VBA macro scales the bodies from the imported features of the foreign formats (e.g. STEP, IGES) with the specified scale factor",image:"imported-feature.png"},sidebar:"tutorialSidebar",previous:{title:"Macro to import foreign file into active part using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/import-to-active-part/"},next:{title:"Managing System Options And User Preferences using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/"}},c={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Imported geometry feature",src:o(68903).Z,width:"322",height:"536"}),"{ width=250 }"),(0,n.kt)("p",null,"This VBA macro scales all bodies form the imported features in active SOLIDWORKS part file. THe imported features will be generated if file is loaded from neutral formats like STEP, IGES, Parasolid unless 3D Interconnect option is used."),(0,n.kt)("p",null,"Set the scale factor in the ",(0,n.kt)("strong",{parentName:"p"},"SCALE_FACTOR")," constant."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Const SCALE_FACTOR As Double = 2.5\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Dim errs As Long\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swFeat As SldWorks.Feature\n        \n        Dim i As Integer\n        i = -1\n        \n        Do\n            i = i + 1\n            Set swFeat = swModel.FeatureByPositionReverse(i)\n            \n            If swFeat.GetTypeName2() = "BaseBody" Then\n                \n                Dim swBody As SldWorks.Body2\n                \n                Set swBody = swFeat.GetFaces()(0).GetBody\n                Set swBody = swBody.Copy\n                \n                ApplyScale swBody, SCALE_FACTOR\n                \n                swFeat.SetBody swBody\n                \n            End If\n            \n            If swFeat.GetTypeName2() = "OriginProfileFeature" Then\n                Exit Do\n            End If\n            \n        Loop While Not swFeat Is Nothing\n        \n    Else\n        Err.Raise vbError, "", "Failed to load model: " & errs\n    End If\n    \nEnd Sub\n\nSub ApplyScale(body As SldWorks.Body2, scaleFactor As Double)\n\n    Dim dMatrix(15) As Double\n    dMatrix(0) = 1: dMatrix(1) = 0: dMatrix(2) = 0: dMatrix(3) = 0\n    dMatrix(4) = 1: dMatrix(5) = 0: dMatrix(6) = 0: dMatrix(7) = 0\n    dMatrix(8) = 1: dMatrix(9) = 0: dMatrix(10) = 0: dMatrix(11) = 0\n    dMatrix(12) = scaleFactor: dMatrix(13) = 0: dMatrix(14) = 0: dMatrix(15) = 0\n\n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swMathTransform As SldWorks.MathTransform\n    Set swMathTransform = swMathUtils.CreateTransform(dMatrix)\n\n    body.ApplyTransform swMathTransform\n    \nEnd Sub\n')))}m.isMDXComponent=!0},68903:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/imported-feature-2c7085812b40eb12d19aee5242307b6e.png"}}]);