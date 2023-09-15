"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[5893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},w="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),w=d(n),u=i,k=w["".concat(c,".").concat(u)]||w[u]||p[u]||o;return n?r.createElement(k,s(s({ref:t},l),{},{components:n})):r.createElement(k,s({ref:t},l))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[w]="string"==typeof e?e:i,s[1]=a;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={title:"\u5728\u7ed8\u56fe\u89c6\u56fe\u8349\u56fe\u4e2d\u521b\u5efa\u8349\u56fe\u6bb5\u7684SOLIDWORKS API",image:"point-in-drawing-view-sketch.png",labels:["\u7ed8\u56fe","\u8f6c\u6362","\u8349\u56fe"]},s=void 0,a={unversionedId:"codestack/solidworks-api/document/drawing/drawing-view-sketch/index",id:"codestack/solidworks-api/document/drawing/drawing-view-sketch/index",title:"\u5728\u7ed8\u56fe\u89c6\u56fe\u8349\u56fe\u4e2d\u521b\u5efa\u8349\u56fe\u6bb5\u7684SOLIDWORKS API",description:"\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u5fc3\u521b\u5efa\u7684\u70b9{ width=350 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/drawing/drawing-view-sketch/index.md",sourceDirName:"codestack/solidworks-api/document/drawing/drawing-view-sketch",slug:"/codestack/solidworks-api/document/drawing/drawing-view-sketch/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/drawing-view-sketch/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/drawing/drawing-view-sketch/index.md",tags:[],version:"current",frontMatter:{title:"\u5728\u7ed8\u56fe\u89c6\u56fe\u8349\u56fe\u4e2d\u521b\u5efa\u8349\u56fe\u6bb5\u7684SOLIDWORKS API",image:"point-in-drawing-view-sketch.png",labels:["\u7ed8\u56fe","\u8f6c\u6362","\u8349\u56fe"]},sidebar:"tutorialSidebar",previous:{title:"\u5728\u6307\u5b9a\u56fe\u5c42\u4e0a\u7ed8\u5236\u6d3b\u52a8\u5de5\u4f5c\u8868\u7684\u8fb9\u6846",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/draw-border-on-layer/"},next:{title:"\u4eceSOLIDWORKS\u56fe\u7eb8\u5bfc\u51fa\u5c3a\u5bf8\u4fe1\u606f\u5230CSV\u6587\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/export-dimensions/"}},c={},d=[],l={toc:d},w="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(w,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u5fc3\u521b\u5efa\u7684\u70b9",src:n(13944).Z,width:"320",height:"215"}),"{ width=350 }"),(0,i.kt)("p",null,"\u7ed8\u56fe\u6587\u6863\u4e2d\u7684\u6240\u6709\u7ed8\u56fe\u89c6\u56fe\u90fd\u6709\u81ea\u5df1\u7684\u8349\u56fe\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iview~getsketch.html"},"SOLIDWORKS API\u65b9\u6cd5IView::GetSketch"),"\u68c0\u7d22\u3002"),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u8349\u56fe\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/draftsightapi/Interop.dsAutomation~Interop.dsAutomation.ISketchManager.html"},"ISketchManager"),"\u63a5\u53e3\u7ed8\u5236\u8349\u56fe\u5b9e\u4f53\u548c\u70b9\u3002"),(0,i.kt)("p",null,"\u4e0e",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/drawing/sheet-context-sketch/"},"\u5728\u56fe\u7eb8\u7a7a\u95f4\u4e2d\u521b\u5efa\u8349\u56fe\u6bb5"),"\u4e0d\u540c\uff0c\u6dfb\u52a0\u5230\u89c6\u56fe\u8349\u56fe\u7684\u6bb5\u5c06\u968f\u89c6\u56fe\u4e00\u8d77\u79fb\u52a8\uff0c\u5e76\u4e14\u5728\u89c6\u56fe\u76843D\u65cb\u8f6c\u65f6\u5c06\u88ab\u7f29\u653e\u548c\u65cb\u8f6c\u3002"),(0,i.kt)("p",null,"\u4e0e\u88c5\u914d\u6216\u96f6\u4ef6\u4e2d\u7684\u8349\u56fe\u7c7b\u4f3c\uff0c\u9700\u8981\u5c06\u5750\u6807\u4ece\u6a21\u578b\u7a7a\u95f4\u8f6c\u6362\u4e3a\u56fe\u7eb8\u7a7a\u95f4\uff0c\u4ee5\u6b63\u786e\u5b9a\u4f4d\u6bb5\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u627e\u5230\u7ed8\u56fe\u89c6\u56fe\u7684\u4e2d\u5fc3\u70b9\uff08\u5728\u56fe\u7eb8\u5750\u6807\u7cfb\u4e2d\uff09\uff0c\u5e76\u4f7f\u7528SOLIDWORKS API\u4f7f\u7528\u53d8\u6362\u76f4\u63a5\u5728\u89c6\u56fe\u4e2d\u7ed8\u5236\u6b64\u70b9\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim swView As SldWorks.view\n        Set swView = swDraw.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swView Is Nothing Then\n            DrawPoint swDraw, swView\n        Else\n            MsgBox "\u8bf7\u9009\u62e9\u7ed8\u56fe\u89c6\u56fe"\n        End If\n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u7ed8\u56fe\u6587\u6863"\n    End If\n    \nEnd Sub\n\nSub DrawPoint(draw As SldWorks.DrawingDoc, view As SldWorks.view)\n    \n    Dim vBoundings As Variant\n    vBoundings = view.GetOutline()\n    \n    Dim dCenterPt(2) As Double\n    dCenterPt(0) = (vBoundings(0) + vBoundings(2)) / 2\n    dCenterPt(1) = (vBoundings(1) + vBoundings(3)) / 2\n    dCenterPt(2) = 0\n    \n    Dim swViewSketch As SldWorks.Sketch\n    Set swViewSketch = view.GetSketch\n    \n    Dim swViewSketchXForm As SldWorks.MathTransform\n    Set swViewSketchXForm = swViewSketch.ModelToSketchTransform\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dCenterPt)\n    \n    Set swMathPt = swMathPt.MultiplyTransform(swViewSketchXForm)\n    \n    draw.ActivateView view.Name\n    \n    Dim vPt As Variant\n    vPt = swMathPt.ArrayData\n    \n    draw.SketchManager.CreatePoint vPt(0), vPt(1), vPt(2)\n    \nEnd Sub\n')))}p.isMDXComponent=!0},13944:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/point-in-drawing-view-sketch-59bc3d7d2d216b3b1c2f69223126dfe5.png"}}]);