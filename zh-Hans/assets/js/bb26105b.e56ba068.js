"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[37464],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>l});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var A=r.createContext({}),c=function(e){var n=r.useContext(A),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(A.Provider,{value:n},e.children)},d="mdxType",w={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,A=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,l=d["".concat(A,".").concat(u)]||d[u]||w[u]||i;return t?r.createElement(l,s(s({ref:n},p),{},{components:t})):r.createElement(l,s({ref:n},p))}));function l(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var A in n)hasOwnProperty.call(n,A)&&(a[A]=n[A]);a.originalType=e,a[d]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},12350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>A,contentTitle:()=>s,default:()=>w,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={title:"\u8bbe\u7f6e\u89c6\u56fe\u5c3a\u5bf8\u7c7b\u578b"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type/index",title:"\u8bbe\u7f6e\u89c6\u56fe\u5c3a\u5bf8\u7c7b\u578b",description:"\u7528\u4e8e\u5728\u6d3b\u52a8SOLIDWORKS\u7ed8\u56fe\u4e2d\u8bbe\u7f6e\u6240\u6709\u89c6\u56fe\u7684\u5c3a\u5bf8\u7c7b\u578b\uff08\u6295\u5f71\u6216\u771f\u5b9e\uff09\u7684VBA\u5b8f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/set-view-dimension-type/index.md",tags:[],version:"current",frontMatter:{title:"\u8bbe\u7f6e\u89c6\u56fe\u5c3a\u5bf8\u7c7b\u578b"},sidebar:"tutorialSidebar",previous:{title:"\u5728SOLIDWORKS\u56fe\u7eb8\u4e2d\u66ff\u6362\u56fe\u7eb8\u683c\u5f0f\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/replace-sheet-format/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u5de5\u4f5c\u8868\u4e0a\u7ed8\u5236\u8349\u56fe\u7ebf\u6bb5",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/sheet-context-sketch/"}},A={},c=[{value:"image: view-dimension-type.png",id:"image-view-dimension-typepng",level:2}],p={toc:c},d="wrapper";function w(e){let{components:n,...i}=e;return(0,o.kt)(d,(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u7528\u4e8e\u5728\u6d3b\u52a8SOLIDWORKS\u7ed8\u56fe\u4e2d\u8bbe\u7f6e\u6240\u6709\u89c6\u56fe\u7684\u5c3a\u5bf8\u7c7b\u578b\uff08\u6295\u5f71\u6216\u771f\u5b9e\uff09\u7684VBA\u5b8f"),(0,o.kt)("h2",{id:"image-view-dimension-typepng"},"image: view-dimension-type.png"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u89c6\u56fe\u5c3a\u5bf8\u7c7b\u578b",src:t(15604).Z,width:"320",height:"124"})),(0,o.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u53ef\u4ee5\u5728\u6d3b\u52a8SOLIDWORKS\u7ed8\u56fe\u7684\u6240\u6709\u56fe\u7eb8\u4e2d\u8bbe\u7f6e\u6240\u6709\u89c6\u56fe\u7684\u5c3a\u5bf8\u7c7b\u578b\uff08\u6295\u5f71\u6216\u771f\u5b9e\uff09\u3002"),(0,o.kt)("p",null,"\u5c06",(0,o.kt)("strong",{parentName:"p"},"DIMS_TRUE"),"\u5e38\u91cf\u8bbe\u7f6e\u4e3a",(0,o.kt)("strong",{parentName:"p"},"True"),"\uff0c\u4ee5\u5c06\u6240\u6709\u5c3a\u5bf8\u7c7b\u578b\u8bbe\u7f6e\u4e3a",(0,o.kt)("strong",{parentName:"p"},"\u771f\u5b9e"),"\u3002\u5c06",(0,o.kt)("strong",{parentName:"p"},"DIMS_TRUE"),"\u5e38\u91cf\u8bbe\u7f6e\u4e3a",(0,o.kt)("strong",{parentName:"p"},"False"),"\uff0c\u4ee5\u5c06\u6240\u6709\u5c3a\u5bf8\u7c7b\u578b\u8bbe\u7f6e\u4e3a",(0,o.kt)("strong",{parentName:"p"},"\u6295\u5f71"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const DIMS_TRUE As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim vSheets As Variant\n        vSheets = swDraw.GetViews\n        \n        If Not IsEmpty(vSheets) Then\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vSheets)\n            \n                Dim vViews As Variant\n                vViews = vSheets(i)\n                \n                Dim j As Integer\n                \n                For j = 1 To UBound(vViews)\n                    Dim swView As SldWorks.View\n                    Set swView = vViews(j)\n                    \n                    swView.ProjectedDimensions = Not DIMS_TRUE\n                Next\n            \n            Next\n            \n        End If\n        \n    Else\n        Err.Raise vbError, "", "\u6253\u5f00\u7ed8\u56fe"\n    End If\n    \nEnd Sub\n')))}w.isMDXComponent=!0},15604:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"}}]);