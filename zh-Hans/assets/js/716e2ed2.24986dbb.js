"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[386],{3905:(e,n,s)=>{s.d(n,{Zo:()=>d,kt:()=>w});var t=s(67294);function i(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function o(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function r(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?o(Object(s),!0).forEach((function(n){i(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function c(e,n){if(null==e)return{};var s,t,i=function(e,n){if(null==e)return{};var s,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)s=o[t],n.indexOf(s)>=0||(i[s]=e[s]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)s=o[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var l=t.createContext({}),a=function(e){var n=t.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):r(r({},n),e)),s},d=function(e){var n=a(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var s=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=a(s),m=i,w=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return s?t.createElement(w,r(r({ref:n},d),{},{components:s})):t.createElement(w,r({ref:n},d))}));function w(e,n){var s=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=s.length,r=new Array(o);r[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:i,r[1]=c;for(var a=2;a<o;a++)r[a]=s[a];return t.createElement.apply(null,r)}return t.createElement.apply(null,s)}m.displayName="MDXCreateElement"},91872:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=s(87462),i=(s(67294),s(3905));const o={image:"select-all-dimensions.png"},r=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/select-all-drawing-dimensions/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/select-all-drawing-dimensions/index",title:"index",description:"\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u6240\u6709\u5c3a\u5bf8{ width=400 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/select-all-drawing-dimensions/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/select-all-drawing-dimensions",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/select-all-drawing-dimensions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/select-all-drawing-dimensions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/select-all-drawing-dimensions/index.md",tags:[],version:"current",frontMatter:{image:"select-all-dimensions.png"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u5b9e\u4f53",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/drawing-view-entities/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u9009\u62e9\u6240\u6709\u8349\u56fe\u5143\u7d20",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/select-all-sketch-elements/"}},l={},a=[],d={toc:a},p="wrapper";function u(e){let{components:n,...o}=e;return(0,i.kt)(p,(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u6240\u6709\u5c3a\u5bf8",src:s(39699).Z,width:"603",height:"686"}),"{ width=400 }"),(0,i.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u6f14\u793a\u4e86\u5982\u4f55\u5728SOLIDWORKS\u7ed8\u56fe\u7684\u6d3b\u52a8\u5de5\u4f5c\u8868\u4e2d\u627e\u5230\u6240\u6709\u7ed8\u56fe\u89c6\u56fe\u7684\u5c3a\u5bf8\u3002"),(0,i.kt)("p",null,"\u6240\u6709\u5c3a\u5bf8\u90fd\u4ee5\u6279\u5904\u7406\u6a21\u5f0f\u8fdb\u884c\u9009\u62e9\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Set swDraw = swModel\n    \n    Dim swSheet As SldWorks.Sheet\n    \n    Set swSheet = swDraw.GetCurrentSheet\n    \n    Dim vViews As Variant\n    \n    vViews = swSheet.GetViews\n    \n    Dim swDispDims() As SldWorks.DisplayDimension\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vViews)\n        \n        Dim swView As SldWorks.View\n        Set swView = vViews(i)\n        \n        Dim swDispDim As SldWorks.DisplayDimension\n        Set swDispDim = swView.GetFirstDisplayDimension5()\n        \n        While Not swDispDim Is Nothing\n        \n            If (Not swDispDims) = -1 Then\n                ReDim swDispDims(0)\n            Else\n                ReDim Preserve swDispDims(UBound(swDispDims) + 1)\n            End If\n            \n            Debug.Print swDispDim.GetDimension2(0).FullName\n            \n            Set swDispDims(UBound(swDispDims)) = swDispDim\n            \n            Set swDispDim = swDispDim.GetNext5\n        \n        Wend\n        \n    Next\n    \n    Dim selCount As Long\n    selCount = swModel.Extension.MultiSelect2(swDispDims, False, Nothing)\n    \n    If selCount <> UBound(swDispDims) + 1 Then\n        Err.Raise vbError, "", "\u65e0\u6cd5\u9009\u62e9\u5c3a\u5bf8"\n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0},39699:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/select-all-dimensions-2b7711e0bf1bc6391735a0e81d56ccb5.png"}}]);