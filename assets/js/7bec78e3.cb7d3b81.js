"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[91060],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},w="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),w=d(t),h=o,u=w["".concat(c,".").concat(h)]||w[h]||p[h]||i;return t?n.createElement(u,s(s({ref:r},l),{},{components:t})):n.createElement(u,s({ref:r},l))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=h;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[w]="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},36509:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const i={title:"Draw border of the active sheet on the specified layer",caption:"Draw Border On Layer",description:"VBA macro example demonstrates how to draw a border on the active drawing sheet on the specified layer considering the sheet scale",image:"sheet-border.png",labels:["border","layer","scale"]},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/draw-border-on-layer/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/draw-border-on-layer/index",title:"Draw border of the active sheet on the specified layer",description:"VBA macro example demonstrates how to draw a border on the active drawing sheet on the specified layer considering the sheet scale",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/draw-border-on-layer/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/draw-border-on-layer",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/draw-border-on-layer/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/draw-border-on-layer/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/draw-border-on-layer/index.md",tags:[],version:"current",frontMatter:{title:"Draw border of the active sheet on the specified layer",caption:"Draw Border On Layer",description:"VBA macro example demonstrates how to draw a border on the active drawing sheet on the specified layer considering the sheet scale",image:"sheet-border.png",labels:["border","layer","scale"]},sidebar:"tutorialSidebar",previous:{title:"Copy custom properties from the drawing view to SOLIDWORKS drawing file",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/copy-view-properties/"},next:{title:"Create sketch segments in drawing view sketch using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/drawing-view-sketch/"}},c={},d=[],l={toc:d},w="wrapper";function p(e){let{components:r,...i}=e;return(0,o.kt)(w,(0,n.Z)({},l,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sheet border drawn on the layer",src:t(16291).Z,width:"657",height:"514"}),"{ width=350 }"),(0,o.kt)("p",null,"This VBA macro draws a border around the active sheet on the specified layer."),(0,o.kt)("p",null,"Macro considers sheet scale to calculate the correct coordinates of the border."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const LAYER_NAME As String = "Border"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    Dim swSheet As SldWorks.Sheet\n    Set swSheet = swDraw.GetCurrentSheet\n    \n    Dim vSheetProps As Variant\n    vSheetProps = swSheet.GetProperties2()\n    \n    Dim sheetScale As Double\n    sheetScale = CDbl(vSheetProps(2)) / CDbl(vSheetProps(3))\n    \n    Dim width As Double\n    Dim height As Double\n    swSheet.GetSize width, height\n    \n    width = width / sheetScale\n    height = height / sheetScale\n    \n    Dim swSkMgr As SldWorks.SketchManager\n    \n    Set swSkMgr = swDraw.SketchManager\n    \n    swSkMgr.AddToDB = True\n    CreateLineOnLayer swSkMgr, 0, 0, width, 0, LAYER_NAME\n    CreateLineOnLayer swSkMgr, width, 0, width, height, LAYER_NAME\n    CreateLineOnLayer swSkMgr, width, height, 0, height, LAYER_NAME\n    CreateLineOnLayer swSkMgr, 0, height, 0, 0, LAYER_NAME\n    swSkMgr.AddToDB = False\n    \nEnd Sub\n\nSub CreateLineOnLayer(skMgr As SldWorks.SketchManager, x1 As Double, y1 As Double, x2 As Double, y2 As Double, layerName As String)\n    \n    Dim swSkSeg As SldWorks.SketchSegment\n    Set swSkSeg = skMgr.CreateLine(x1, y1, 0, x2, y2, 0)\n    swSkSeg.Layer = layerName\n    \nEnd Sub\n')))}p.isMDXComponent=!0},16291:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/sheet-border-7ff53a37390e77d3ab873e5c88a6c27f.png"}}]);