"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[57683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),l=p(r),u=n,f=l["".concat(c,".").concat(u)]||l[u]||m[u]||i;return r?o.createElement(f,s(s({ref:t},d),{},{components:r})):o.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:n,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},76709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={caption:"Scale Imported Geometry",title:"VBA macro to scale the geometry of the imported features using SOLIDWORKS API",description:"VBA macro scales the bodies from the imported features of the foreign formats (e.g. STEP, IGES) with the specified scale factor",image:"imported-feature.png"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part/index",title:"VBA macro to scale the geometry of the imported features using SOLIDWORKS API",description:"VBA macro scales the bodies from the imported features of the foreign formats (e.g. STEP, IGES) with the specified scale factor",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/scale-imported-part/index.md",tags:[],version:"current",frontMatter:{caption:"Scale Imported Geometry",title:"VBA macro to scale the geometry of the imported features using SOLIDWORKS API",description:"VBA macro scales the bodies from the imported features of the foreign formats (e.g. STEP, IGES) with the specified scale factor",image:"imported-feature.png"},sidebar:"tutorialSidebar",previous:{title:"Macro to import foreign file into active part using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/import-to-active-part/"},next:{title:"Managing System Options And User Preferences using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/"}},c={},p=[],d={toc:p},l="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(l,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Imported geometry feature",src:r(59975).Z,width:"322",height:"536"}),"{ width=250 }"),(0,n.kt)("p",null,"This VBA macro scales all bodies form the imported features in active SOLIDWORKS part file. THe imported features will be generated if file is loaded from neutral formats like STEP, IGES, Parasolid unless 3D Interconnect option is used."),(0,n.kt)("p",null,"Set the scale factor in the ",(0,n.kt)("strong",{parentName:"p"},"SCALE_FACTOR")," constant."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Const SCALE_FACTOR As Double = 2.5\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Dim errs As Long\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swFeat As SldWorks.Feature\n        \n        Dim i As Integer\n        i = -1\n        \n        Do\n            i = i + 1\n            Set swFeat = swModel.FeatureByPositionReverse(i)\n            \n            If swFeat.GetTypeName2() = "BaseBody" Then\n                \n                Dim swBody As SldWorks.Body2\n                \n                Set swBody = swFeat.GetFaces()(0).GetBody\n                Set swBody = swBody.Copy\n                \n                ApplyScale swBody, SCALE_FACTOR\n                \n                swFeat.SetBody swBody\n                \n            End If\n            \n            If swFeat.GetTypeName2() = "OriginProfileFeature" Then\n                Exit Do\n            End If\n            \n        Loop While Not swFeat Is Nothing\n        \n    Else\n        Err.Raise vbError, "", "Failed to load model: " & errs\n    End If\n    \nEnd Sub\n\nSub ApplyScale(body As SldWorks.Body2, scaleFactor As Double)\n\n    Dim dMatrix(15) As Double\n    dMatrix(0) = 1: dMatrix(1) = 0: dMatrix(2) = 0: dMatrix(3) = 0\n    dMatrix(4) = 1: dMatrix(5) = 0: dMatrix(6) = 0: dMatrix(7) = 0\n    dMatrix(8) = 1: dMatrix(9) = 0: dMatrix(10) = 0: dMatrix(11) = 0\n    dMatrix(12) = scaleFactor: dMatrix(13) = 0: dMatrix(14) = 0: dMatrix(15) = 0\n\n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swMathTransform As SldWorks.MathTransform\n    Set swMathTransform = swMathUtils.CreateTransform(dMatrix)\n\n    body.ApplyTransform swMathTransform\n    \nEnd Sub\n')))}m.isMDXComponent=!0},59975:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/imported-feature-2c7085812b40eb12d19aee5242307b6e.png"}}]);