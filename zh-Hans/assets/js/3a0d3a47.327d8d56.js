"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[60694],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},p="mdxType",w={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,g=p["".concat(d,".").concat(u)]||p[u]||w[u]||a;return t?n.createElement(g,s(s({ref:r},l),{},{components:t})):n.createElement(g,s({ref:r},l))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5623:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>w,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={title:"\u5728\u6307\u5b9a\u56fe\u5c42\u4e0a\u7ed8\u5236\u6d3b\u52a8\u5de5\u4f5c\u8868\u7684\u8fb9\u6846",image:"sheet-border.png",labels:["\u8fb9\u6846","\u56fe\u5c42","\u6bd4\u4f8b"]},s=void 0,i={unversionedId:"codestack/solidworks-api/document/drawing/draw-border-on-layer/index",id:"codestack/solidworks-api/document/drawing/draw-border-on-layer/index",title:"\u5728\u6307\u5b9a\u56fe\u5c42\u4e0a\u7ed8\u5236\u6d3b\u52a8\u5de5\u4f5c\u8868\u7684\u8fb9\u6846",description:"\u5728\u56fe\u5c42\u4e0a\u7ed8\u5236\u7684\u5de5\u4f5c\u8868\u8fb9\u6846{ width=350 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/drawing/draw-border-on-layer/index.md",sourceDirName:"codestack/solidworks-api/document/drawing/draw-border-on-layer",slug:"/codestack/solidworks-api/document/drawing/draw-border-on-layer/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/draw-border-on-layer/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/drawing/draw-border-on-layer/index.md",tags:[],version:"current",frontMatter:{title:"\u5728\u6307\u5b9a\u56fe\u5c42\u4e0a\u7ed8\u5236\u6d3b\u52a8\u5de5\u4f5c\u8868\u7684\u8fb9\u6846",image:"sheet-border.png",labels:["\u8fb9\u6846","\u56fe\u5c42","\u6bd4\u4f8b"]},sidebar:"tutorialSidebar",previous:{title:"\u5c06\u7ed8\u56fe\u89c6\u56fe\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u590d\u5236\u5230SOLIDWORKS\u7ed8\u56fe\u6587\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/copy-view-properties/"},next:{title:"\u5728\u7ed8\u56fe\u89c6\u56fe\u8349\u56fe\u4e2d\u521b\u5efa\u8349\u56fe\u6bb5\u7684SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/drawing-view-sketch/"}},d={},c=[],l={toc:c},p="wrapper";function w(e){let{components:r,...a}=e;return(0,o.kt)(p,(0,n.Z)({},l,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5728\u56fe\u5c42\u4e0a\u7ed8\u5236\u7684\u5de5\u4f5c\u8868\u8fb9\u6846",src:t(83707).Z,width:"657",height:"514"}),"{ width=350 }"),(0,o.kt)("p",null,"\u6b64VBA\u5b8f\u5728\u6307\u5b9a\u56fe\u5c42\u4e0a\u7ed8\u5236\u6d3b\u52a8\u5de5\u4f5c\u8868\u7684\u8fb9\u6846\u3002"),(0,o.kt)("p",null,"\u5b8f\u4f1a\u8003\u8651\u5de5\u4f5c\u8868\u6bd4\u4f8b\u6765\u8ba1\u7b97\u8fb9\u6846\u7684\u6b63\u786e\u5750\u6807\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const LAYER_NAME As String = "\u8fb9\u6846"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    Dim swSheet As SldWorks.Sheet\n    Set swSheet = swDraw.GetCurrentSheet\n    \n    Dim vSheetProps As Variant\n    vSheetProps = swSheet.GetProperties2()\n    \n    Dim sheetScale As Double\n    sheetScale = CDbl(vSheetProps(2)) / CDbl(vSheetProps(3))\n    \n    Dim width As Double\n    Dim height As Double\n    swSheet.GetSize width, height\n    \n    width = width / sheetScale\n    height = height / sheetScale\n    \n    Dim swSkMgr As SldWorks.SketchManager\n    \n    Set swSkMgr = swDraw.SketchManager\n    \n    swSkMgr.AddToDB = True\n    CreateLineOnLayer swSkMgr, 0, 0, width, 0, LAYER_NAME\n    CreateLineOnLayer swSkMgr, width, 0, width, height, LAYER_NAME\n    CreateLineOnLayer swSkMgr, width, height, 0, height, LAYER_NAME\n    CreateLineOnLayer swSkMgr, 0, height, 0, 0, LAYER_NAME\n    swSkMgr.AddToDB = False\n    \nEnd Sub\n\nSub CreateLineOnLayer(skMgr As SldWorks.SketchManager, x1 As Double, y1 As Double, x2 As Double, y2 As Double, layerName As String)\n    \n    Dim swSkSeg As SldWorks.SketchSegment\n    Set swSkSeg = skMgr.CreateLine(x1, y1, 0, x2, y2, 0)\n    swSkSeg.Layer = layerName\n    \nEnd Sub\n')))}w.isMDXComponent=!0},83707:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/sheet-border-7ff53a37390e77d3ab873e5c88a6c27f.png"}}]);