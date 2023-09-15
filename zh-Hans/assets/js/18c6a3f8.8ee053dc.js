"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[8975],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>Z});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),A=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=A(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},M=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=A(r),M=o,Z=c["".concat(m,".").concat(M)]||c[M]||d[M]||s;return r?n.createElement(Z,a(a({ref:t},l),{},{components:r})):n.createElement(Z,a({ref:t},l))}));function Z(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=M;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var A=2;A<s;A++)a[A]=r[A];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}M.displayName="MDXCreateElement"},70290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>A});var n=r(87462),o=(r(67294),r(3905));const s={title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u5750\u6807\u7cfb\u7684\u53d8\u6362\u77e9\u9635",image:"coordinate-system.png",labels:["\u53d8\u6362","\u5750\u6807\u7cfb"]},a=void 0,i={unversionedId:"codestack/solidworks-api/geometry/transformation/get-coordinate-system-transform/index",id:"codestack/solidworks-api/geometry/transformation/get-coordinate-system-transform/index",title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u5750\u6807\u7cfb\u7684\u53d8\u6362\u77e9\u9635",description:"\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u7684\u5750\u6807\u7cfb{ width=450 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/geometry/transformation/get-coordinate-system-transform/index.md",sourceDirName:"codestack/solidworks-api/geometry/transformation/get-coordinate-system-transform",slug:"/codestack/solidworks-api/geometry/transformation/get-coordinate-system-transform/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/transformation/get-coordinate-system-transform/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/transformation/get-coordinate-system-transform/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u5750\u6807\u7cfb\u7684\u53d8\u6362\u77e9\u9635",image:"coordinate-system.png",labels:["\u53d8\u6362","\u5750\u6807\u7cfb"]},sidebar:"tutorialSidebar",previous:{title:"\u901a\u8fc7SOLIDWORKS API\u521b\u5efa\u5706\u5f62\u6a21\u5f0f\u7684\u65cb\u8f6c\u53d8\u6362",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/transformation/circular-pattern-data-rotational-transformation/"},next:{title:"\u521b\u5efa\u5782\u76f4\u4e8e\u5c4f\u5e55\u89c6\u56fe\u7684\u77e2\u91cf",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/transformation/vector-normal-to-screen-view/"}},m={},A=[],l={toc:A},c="wrapper";function d(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u7684\u5750\u6807\u7cfb",src:r(16900).Z,width:"641",height:"399"}),"{ width=450 }"),(0,o.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u4ece\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u9009\u62e9\u7684\u5750\u6807\u7cfb\u4e2d\u63d0\u53d64x4\u7684",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/geometry/transformation/"},"\u53d8\u6362\u77e9\u9635"),"\u3002"),(0,o.kt)("p",null,"\u9017\u53f7\u5206\u9694\u7684\u7ed3\u679c\u5c06\u8f93\u51fa\u5230VBA\u7f16\u8f91\u5668\u7684\u5373\u65f6\u7a97\u53e3\uff08Ctrl+G\uff09\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u77e9\u9635\u8f93\u51fa\u5230VBA\u7f16\u8f91\u5668\u7684\u5373\u65f6\u7a97\u53e3",src:r(2369).Z,width:"484",height:"174"}),"{ width=350 }"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swFeat Is Nothing Then\n            \n            If swFeat.GetTypeName2() = "CoordSys" Then\n                \n                Dim swCoordSys As SldWorks.CoordinateSystemFeatureData\n                \n                Set swCoordSys = swFeat.GetDefinition\n                Dim swMathTransform As SldWorks.MathTransform\n                Set swMathTransform = swCoordSys.Transform\n                \n                Dim vMatrix As Variant\n                vMatrix = swMathTransform.ArrayData\n                \n                Debug.Print vMatrix(0) & "," & vMatrix(1) & "," & vMatrix(2) & "," & vMatrix(3) & ","\n                Debug.Print vMatrix(4) & "," & vMatrix(5) & "," & vMatrix(6) & "," & vMatrix(7) & ","\n                Debug.Print vMatrix(8) & "," & vMatrix(9) & "," & vMatrix(10) & "," & vMatrix(11) & ","\n                Debug.Print vMatrix(12) & "," & vMatrix(13) & "," & vMatrix(14) & "," & vMatrix(15)\n                \n            Else\n                MsgBox "\u9009\u62e9\u7684\u7279\u5f81\u4e0d\u662f\u5750\u6807\u7cfb"\n            End If\n        Else\n            MsgBox "\u8bf7\u9009\u62e9\u5750\u6807\u7cfb\u7279\u5f81"\n        End If\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n')))}d.isMDXComponent=!0},16900:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/coordinate-system-0714ec348230995b8623c711dd5d8538.png"},2369:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);