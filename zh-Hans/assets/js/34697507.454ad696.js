"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[67490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(r),u=o,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19955:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={image:"imported-feature.png"},i=void 0,s={unversionedId:"codestack/solidworks-api/import-export/scale-imported-part/index",id:"codestack/solidworks-api/import-export/scale-imported-part/index",title:"index",description:"\u5bfc\u5165\u7684\u51e0\u4f55\u7279\u5f81{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/import-export/scale-imported-part/index.md",sourceDirName:"codestack/solidworks-api/import-export/scale-imported-part",slug:"/codestack/solidworks-api/import-export/scale-imported-part/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/scale-imported-part/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/import-export/scale-imported-part/index.md",tags:[],version:"current",frontMatter:{image:"imported-feature.png"},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/import-to-active-part/"},next:{title:"options",permalink:"/solidworks-GPT/zh-Hans/docs/category/options"}},p={},d=[],l={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5bfc\u5165\u7684\u51e0\u4f55\u7279\u5f81",src:r(31652).Z,width:"322",height:"536"}),"{ width=250 }"),(0,o.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u4f1a\u7f29\u653e\u6d3b\u52a8SOLIDWORKS\u96f6\u4ef6\u6587\u4ef6\u4e2d\u5bfc\u5165\u7279\u5f81\u7684\u6240\u6709\u5b9e\u4f53\u3002\u5982\u679c\u4eceSTEP\u3001IGES\u3001Parasolid\u7b49\u4e2d\u6027\u683c\u5f0f\u52a0\u8f7d\u6587\u4ef6\uff0c\u5c06\u4f1a\u751f\u6210\u5bfc\u5165\u7279\u5f81\uff0c\u9664\u975e\u4f7f\u7528\u4e863D\u4e92\u8fde\u9009\u9879\u3002"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("strong",{parentName:"p"},"SCALE_FACTOR"),"\u5e38\u91cf\u4e2d\u8bbe\u7f6e\u7f29\u653e\u56e0\u5b50\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const SCALE_FACTOR As Double = 2.5\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Dim errs As Long\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swFeat As SldWorks.Feature\n        \n        Dim i As Integer\n        i = -1\n        \n        Do\n            i = i + 1\n            Set swFeat = swModel.FeatureByPositionReverse(i)\n            \n            If swFeat.GetTypeName2() = "BaseBody" Then\n                \n                Dim swBody As SldWorks.Body2\n                \n                Set swBody = swFeat.GetFaces()(0).GetBody\n                Set swBody = swBody.Copy\n                \n                ApplyScale swBody, SCALE_FACTOR\n                \n                swFeat.SetBody swBody\n                \n            End If\n            \n            If swFeat.GetTypeName2() = "OriginProfileFeature" Then\n                Exit Do\n            End If\n            \n        Loop While Not swFeat Is Nothing\n        \n    Else\n        Err.Raise vbError, "", "\u52a0\u8f7d\u6a21\u578b\u5931\u8d25: " & errs\n    End If\n    \nEnd Sub\n\nSub ApplyScale(body As SldWorks.Body2, scaleFactor As Double)\n\n    Dim dMatrix(15) As Double\n    dMatrix(0) = 1: dMatrix(1) = 0: dMatrix(2) = 0: dMatrix(3) = 0\n    dMatrix(4) = 1: dMatrix(5) = 0: dMatrix(6) = 0: dMatrix(7) = 0\n    dMatrix(8) = 1: dMatrix(9) = 0: dMatrix(10) = 0: dMatrix(11) = 0\n    dMatrix(12) = scaleFactor: dMatrix(13) = 0: dMatrix(14) = 0: dMatrix(15) = 0\n\n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swMathTransform As SldWorks.MathTransform\n    Set swMathTransform = swMathUtils.CreateTransform(dMatrix)\n\n    body.ApplyTransform swMathTransform\n    \nEnd Sub\n')))}m.isMDXComponent=!0},31652:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/imported-feature-2c7085812b40eb12d19aee5242307b6e.png"}}]);