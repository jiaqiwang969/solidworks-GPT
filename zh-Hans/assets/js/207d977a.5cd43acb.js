"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[74944],{3905:(n,t,e)=>{e.d(t,{Zo:()=>c,kt:()=>m});var o=e(67294);function s(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){s(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function a(n,t){if(null==n)return{};var e,o,s=function(n,t){if(null==n)return{};var e,o,s={},r=Object.keys(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(s[e]=n[e]);return s}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(s[e]=n[e])}return s}var l=o.createContext({}),A=function(n){var t=o.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},c=function(n){var t=A(n.components);return o.createElement(l.Provider,{value:t},n.children)},w="mdxType",d={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(n,t){var e=n.components,s=n.mdxType,r=n.originalType,l=n.parentName,c=a(n,["components","mdxType","originalType","parentName"]),w=A(e),g=s,m=w["".concat(l,".").concat(g)]||w[g]||d[g]||r;return e?o.createElement(m,i(i({ref:t},c),{},{components:e})):o.createElement(m,i({ref:t},c))}));function m(n,t){var e=arguments,s=t&&t.mdxType;if("string"==typeof n||s){var r=e.length,i=new Array(r);i[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=n,a[w]="string"==typeof n?n:s,i[1]=a;for(var A=2;A<r;A++)i[A]=e[A];return o.createElement.apply(null,i)}return o.createElement.apply(null,e)}g.displayName="MDXCreateElement"},88241:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>A});var o=e(87462),s=(e(67294),e(3905));const r={title:"Insert BOM balloons into drawing view using SOLIDWORKS API",caption:"Insert BOM Balloons",description:"VBA macro to automatically insert BOM balloons into an existing drawing view of the current sheet using SOLIDWORKS API",image:"bom-balloons.png",labels:["BOM","balloon"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/insert-bom-balloons/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/insert-bom-balloons/index",title:"Insert BOM balloons into drawing view using SOLIDWORKS API",description:"VBA macro to automatically insert BOM balloons into an existing drawing view of the current sheet using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/insert-bom-balloons/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/insert-bom-balloons",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/insert-bom-balloons/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/insert-bom-balloons/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/insert-bom-balloons/index.md",tags:[],version:"current",frontMatter:{title:"Insert BOM balloons into drawing view using SOLIDWORKS API",caption:"Insert BOM Balloons",description:"VBA macro to automatically insert BOM balloons into an existing drawing view of the current sheet using SOLIDWORKS API",image:"bom-balloons.png",labels:["BOM","balloon"]},sidebar:"tutorialSidebar",previous:{title:"Macro to import and export all layers from SOLIDWORKS drawings into a text file",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/import-export-layers/"},next:{title:"Add location label to a drawing view",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/insert-location-label/"}},l={},A=[],c={toc:A},w="wrapper";function d(n){let{components:t,...r}=n;return(0,s.kt)(w,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"BOM Balloons in the component",src:e(51881).Z,width:"380",height:"367"})),(0,s.kt)("p",null,"This VBA macro demonstrates how to insert balloons for all visible components of the first drawing view in the active drawing sheet using SOLIDWORKS API."),(0,s.kt)("p",null,"Macro will traverse all visible components and all visible entities of the view and will attach balloon linked to Item Number to the first visible entity."),(0,s.kt)("p",null,"Balloon leader will be attached to the middle of the corresponding edge. While balloon itself will be offset by 10 mm in X and Y directions from the middle of the edge."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Dim swDraw As SldWorks.DrawingDoc\n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swModel = swApp.ActiveDoc\n        \n    Set swDraw = swModel\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swSheet As SldWorks.Sheet\n    \n    Dim swView As SldWorks.view\n    \n    Set swSheet = swDraw.GetCurrentSheet()\n    \n    Set swView = swSheet.GetViews()(0)\n        \n    Dim vComps As Variant\n    vComps = swView.GetVisibleComponents()\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        Dim vEdges As Variant\n        vEdges = swView.GetVisibleEntities2(swComp, swViewEntityType_e.swViewEntityType_Edge)\n        \n        Dim swEdge As SldWorks.edge\n        Set swEdge = vEdges(0)\n                \n        Dim swEnt As SldWorks.Entity\n        Set swEnt = swEdge\n        \n        Dim swSelData As SldWorks.SelectData\n        Set swSelData = swSelMgr.CreateSelectData\n        swSelData.view = swView\n        \n        swEnt.Select4 False, swSelData\n        \n        Dim swBomBalloonParams As SldWorks.BalloonOptions\n\n        Set swBomBalloonParams = swModel.Extension.CreateBalloonOptions()\n            \n        Dim swBalloonNote As SldWorks.Note\n        \n        Set swBalloonNote = swModel.Extension.InsertBOMBalloon2(swBomBalloonParams)\n        \n        Dim swAnn As SldWorks.Annotation\n        Set swAnn = swBalloonNote.GetAnnotation\n        \n        Dim vPos As Variant\n        vPos = CalculateBaloonPosition(swEdge, swView)\n        \n        swAnn.SetLeaderAttachmentPointAtIndex 0, vPos(0), vPos(1), 0\n        \n        swAnn.SetPosition2 vPos(0) + 0.01, vPos(1) + 0.01, 0\n        \n    Next\n    \nEnd Sub\n\nFunction CalculateBaloonPosition(edge As SldWorks.edge, view As SldWorks.view) As Variant\n    \n    Dim swCurve As SldWorks.Curve\n    Set swCurve = edge.GetCurve\n        \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swVertex As SldWorks.Vertex\n        \n    Dim vStartPt As Variant\n    Dim vEndPt As Variant\n    \n    Set swVertex = edge.GetStartVertex()\n        \n    vStartPt = swVertex.GetPoint\n    \n    Set swVertex = edge.GetEndVertex()\n    \n    vEndPt = swVertex.GetPoint\n    \n    Dim dPt(2) As Double\n    \n    dPt(0) = (vEndPt(0) + vStartPt(0)) / 2\n    dPt(1) = (vEndPt(1) + vStartPt(1)) / 2\n    dPt(2) = (vEndPt(2) + vStartPt(2)) / 2\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dPt)\n\n    Dim swTransform As SldWorks.MathTransform\n    Set swTransform = view.ModelToViewTransform\n\n    Set swMathPt = swMathPt.MultiplyTransform(swTransform)\n    \n    Dim vPt As Variant\n    vPt = swMathPt.ArrayData\n    \n    vPt(0) = CDbl(vPt(0))\n    vPt(1) = CDbl(vPt(1))\n    vPt(2) = CDbl(vPt(2))\n    \n    CalculateBaloonPosition = vPt\n    \nEnd Function\n")))}d.isMDXComponent=!0},51881:(n,t,e)=>{e.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);