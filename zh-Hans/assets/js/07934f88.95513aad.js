"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[81924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>S});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=s.createContext({}),d=function(e){var t=s.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return s.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},k=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,S=u["".concat(a,".").concat(k)]||u[k]||p[k]||o;return n?s.createElement(S,i(i({ref:t},l),{},{components:n})):s.createElement(S,i({ref:t},l))}));function S(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}k.displayName="MDXCreateElement"},66016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(87462),r=(n(67294),n(3905));const o={title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u94a3\u91d1\u5f2f\u66f2\u7684\u8349\u56fe\u7ebf",image:"sheet-metal-sketched-bend.png",labels:["\u793a\u4f8b","\u94a3\u91d1","\u5f2f\u66f2","solidworks api"],"redirect-from":["/2018/03/solidworks-api-sheet-metal-get-sketched-bends.html"]},i=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketched-bend-feature-sketch-lines/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketched-bend-feature-sketch-lines/index",title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u94a3\u91d1\u5f2f\u66f2\u7684\u8349\u56fe\u7ebf",description:"\u4f7f\u7528SOLIDWORKS API\uff0c\u8be5\u5b8f\u5c06\u67e5\u627e\u94a3\u91d1Sketched Bend\u7279\u5f81\u7684\u6240\u6709\u76f4\u7ebf\uff08\u5f2f\u66f2\uff09\u5e76\u9009\u62e9\u6240\u6709\u7ebf\u6bb5\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketched-bend-feature-sketch-lines/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketched-bend-feature-sketch-lines",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketched-bend-feature-sketch-lines/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketched-bend-feature-sketch-lines/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketched-bend-feature-sketch-lines/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u94a3\u91d1\u5f2f\u66f2\u7684\u8349\u56fe\u7ebf",image:"sheet-metal-sketched-bend.png",labels:["\u793a\u4f8b","\u94a3\u91d1","\u5f2f\u66f2","solidworks api"],"redirect-from":["/2018/03/solidworks-api-sheet-metal-get-sketched-bends.html"]},sidebar:"tutorialSidebar",previous:{title:"Understanding Sketch Transformations in SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sketch/transform/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u5b9e\u4f53\u5207\u7247\u6210\u591a\u4e2a\u622a\u9762",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/slice-body/"}},a={},d=[],l={toc:d},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,s.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\uff0c\u8be5\u5b8f\u5c06\u67e5\u627e\u94a3\u91d1",(0,r.kt)("em",{parentName:"p"},"Sketched Bend"),"\u7279\u5f81\u7684\u6240\u6709\u76f4\u7ebf\uff08\u5f2f\u66f2\uff09\u5e76\u9009\u62e9\u6240\u6709\u7ebf\u6bb5\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u94a3\u91d1\u5f2f\u66f2\u7279\u5f81\u7684\u8349\u56fe",src:n(96356).Z,width:"400",height:"296"}),"{ width=400 }"),(0,r.kt)("p",null,"\u6ca1\u6709\u76f4\u63a5\u7684SOLIDWORKS API\u65b9\u6cd5\u53ef\u4ee5\u83b7\u53d6\u5f2f\u66f2\uff0c\u4f46\u662f\u5f2f\u66f2\u5728\u7531\u94a3\u91d1\u7279\u5f81\u62e5\u6709\u7684\u8349\u56fe\u4e2d\u8868\u793a\u4e3a\u8349\u56fe\u7ebf\u6bb5\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u627e\u5230\u5f2f\u66f2\uff0c\u9700\u8981\u627e\u5230\u8be5\u8349\u56fe\u5e76\u89e3\u6790\u5176\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n        \n    If Not swModel Is Nothing Then\n    \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swFeat As SldWorks.Feature\n        \n        Set swFeat = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If swFeat.GetTypeName2 = "SM3dBend" Then\n        \n            Dim swBendSketch As SldWorks.Sketch\n            \n            Set swBendSketch = FindBendSketch(swFeat)\n            \n            Dim vSegs As Variant\n            vSegs = swBendSketch.GetSketchSegments()\n            \n            swModel.ClearSelection2 True\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vSegs)\n                \n                Dim swSkSeg As SldWorks.SketchSegment\n                Set swSkSeg = vSegs(i)\n                \n                If swSkSeg.GetType() = swSketchSegments_e.swSketchLINE Then\n                    swSkSeg.Select4 True, Nothing\n                End If\n                \n            Next\n            \n        Else\n            MsgBox "\u8bf7\u9009\u62e9\u5f2f\u66f2\u7279\u5f81"\n        End If\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n\nFunction FindBendSketch(swFeat As SldWorks.Feature) As SldWorks.Sketch\n    \n    Dim swSubFeat As SldWorks.Feature\n    \n    Set swSubFeat = swFeat.GetFirstSubFeature\n    \n    Do While Not swSubFeat Is Nothing And swSubFeat.GetTypeName2() <> "ProfileFeature"\n        \n        Set swSubFeat = swSubFeat.GetNextSubFeature\n        \n    Loop\n    \n    If Not swSubFeat Is Nothing Then\n    \n        Set FindBendSketch = swSubFeat.GetSpecificFeature2\n        \n    Else\n        MsgBox "\u672a\u627e\u5230\u5e26\u6709\u5f2f\u66f2\u7684\u8349\u56fe"\n        End\n    End If\n    \nEnd Function\n\n\n')))}p.isMDXComponent=!0},96356:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/sheet-metal-sketched-bend-d7186ec11edaf706df83e9abc89a51e5.png"}}]);