"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[5991],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,k=u["".concat(c,".").concat(p)]||u[p]||h[p]||o;return n?s.createElement(k,i(i({ref:t},d),{},{components:n})):s.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(87462),r=(n(67294),n(3905));const o={title:"Get sketch lines of sheet metal sketched bend using SOLIDWORKS API",caption:"Get Sketch Lines For Sheet Metal Sketched Bend Feature"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/sketched-bend-feature-sketch-lines/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/sketched-bend-feature-sketch-lines/index",title:"Get sketch lines of sheet metal sketched bend using SOLIDWORKS API",description:"Finds all straight lines (bends) of the sheet metal Sketched Bend feature and selects all segments",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/sketched-bend-feature-sketch-lines/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/sketched-bend-feature-sketch-lines",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/sketched-bend-feature-sketch-lines/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/sketched-bend-feature-sketch-lines/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/sketched-bend-feature-sketch-lines/index.md",tags:[],version:"current",frontMatter:{title:"Get sketch lines of sheet metal sketched bend using SOLIDWORKS API",caption:"Get Sketch Lines For Sheet Metal Sketched Bend Feature"},sidebar:"tutorialSidebar",previous:{title:"Rename sheet metal flat patterns features after the cut-list features",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/rename-flat-patterns/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5904\u7406\u8349\u56fe",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/"}},c={},l=[],d={toc:l},u="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,s.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Finds all straight lines (bends) of the sheet metal Sketched Bend feature and selects all segments\nimage: sheet-metal-sketched-bend.png\nlabels: ","[example, sheet metal, sketched bend, solidworks api]","\nredirect-from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/2018/03/solidworks-api-sheet-metal-get-sketched-bends.html")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Macro finds all straight lines (bends) of the sheet metal ",(0,r.kt)("em",{parentName:"p"},"Sketched Bend")," feature and selects all segments using SOLIDWORKS API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sketch of the sheet metal sketched bend feature",src:n(6802).Z,width:"400",height:"296"}),"{ width=400 }"),(0,r.kt)("p",null,"There is no direct SOLIDWORKS API method of getting the bends, however bends are represented as sketch segments in the sketch owned by sheet metal feature. So in order to find bends it is required to find this sketch and parse its content."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n        \n    If Not swModel Is Nothing Then\n    \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swFeat As SldWorks.Feature\n        \n        Set swFeat = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If swFeat.GetTypeName2 = "SM3dBend" Then\n        \n            Dim swBendSketch As SldWorks.Sketch\n            \n            Set swBendSketch = FindBendSketch(swFeat)\n            \n            Dim vSegs As Variant\n            vSegs = swBendSketch.GetSketchSegments()\n            \n            swModel.ClearSelection2 True\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vSegs)\n                \n                Dim swSkSeg As SldWorks.SketchSegment\n                Set swSkSeg = vSegs(i)\n                \n                If swSkSeg.GetType() = swSketchSegments_e.swSketchLINE Then\n                    swSkSeg.Select4 True, Nothing\n                End If\n                \n            Next\n            \n        Else\n            MsgBox "Please select sketched bend feature"\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nFunction FindBendSketch(swFeat As SldWorks.Feature) As SldWorks.Sketch\n    \n    Dim swSubFeat As SldWorks.Feature\n    \n    Set swSubFeat = swFeat.GetFirstSubFeature\n    \n    Do While Not swSubFeat Is Nothing And swSubFeat.GetTypeName2() <> "ProfileFeature"\n        \n        Set swSubFeat = swSubFeat.GetNextSubFeature\n        \n    Loop\n    \n    If Not swSubFeat Is Nothing Then\n    \n        Set FindBendSketch = swSubFeat.GetSpecificFeature2\n        \n    Else\n        MsgBox "Failed to find the skecth with bends"\n        End\n    End If\n    \nEnd Function\n\n\n')))}h.isMDXComponent=!0},6802:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/sheet-metal-sketched-bend-d7186ec11edaf706df83e9abc89a51e5.png"}}]);