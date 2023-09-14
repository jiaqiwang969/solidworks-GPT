"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[35911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>w,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},w=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,w=a(e,["components","mdxType","originalType","parentName"]),l=d(n),p=r,u=l["".concat(c,".").concat(p)]||l[p]||h[p]||o;return n?i.createElement(u,s(s({ref:t},w),{},{components:n})):i.createElement(u,s({ref:t},w))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:r,s[1]=a;for(var d=2;d<o;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},30823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const o={title:"Create sketch segments in drawing view sketch using SOLIDWORKS API",caption:"Create Sketch Segments In Drawing View",description:"Creating sketch points and sketch segments directly in the drawing view sketch area using SOLIDWORKS API",image:"point-in-drawing-view-sketch.png",labels:["drawing","transform","sketch"]},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/drawing-view-sketch/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/drawing-view-sketch/index",title:"Create sketch segments in drawing view sketch using SOLIDWORKS API",description:"Creating sketch points and sketch segments directly in the drawing view sketch area using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/drawing-view-sketch/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/drawing-view-sketch",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/drawing-view-sketch/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/drawing-view-sketch/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/drawing-view-sketch/index.md",tags:[],version:"current",frontMatter:{title:"Create sketch segments in drawing view sketch using SOLIDWORKS API",caption:"Create Sketch Segments In Drawing View",description:"Creating sketch points and sketch segments directly in the drawing view sketch area using SOLIDWORKS API",image:"point-in-drawing-view-sketch.png",labels:["drawing","transform","sketch"]},sidebar:"tutorialSidebar",previous:{title:"Draw border of the active sheet on the specified layer",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/draw-border-on-layer/"},next:{title:"Export dimensions information from SOLIDWORKS drawing to CSV file",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-dimensions/"}},c={},d=[],w={toc:d},l="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(l,(0,i.Z)({},w,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Point created in the center of the drawing view",src:n(83780).Z,width:"320",height:"215"}),"{ width=350 }"),(0,r.kt)("p",null,"All drawing views in the drawing document have their own sketches which can be retrieved via ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iview~getsketch.html"},"IView::GetSketch")," SOLIDWORKS API method."),(0,r.kt)("p",null,"This is a sketch where sketch entities and points can be drawn using the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/draftsightapi/Interop.dsAutomation~Interop.dsAutomation.ISketchManager.html"},"ISketchManager")," interface."),(0,r.kt)("p",null,"Unlike ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/drawing/sheet-context-sketch/"},"creating sketch segment in the sheet space"),", segments added to a view sketch will move together with the view and will be scaled and rotated in case of 3D rotation of the view."),(0,r.kt)("p",null,"Similar to the sketches in the assembly or part it is required to transform the coordinates from the model space into the sheet space in order to properly position the segments."),(0,r.kt)("p",null,"The following example demonstrates how to find the middle point of the drawing view (in sheet coordinate system) and draw this point directly in the view using SOLIDWORKS API using the transformation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim swView As SldWorks.view\n        Set swView = swDraw.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swView Is Nothing Then\n            DrawPoint swDraw, swView\n        Else\n            MsgBox "Please select drawing view"\n        End If\n    Else\n        MsgBox "Please open the drawing document"\n    End If\n    \nEnd Sub\n\nSub DrawPoint(draw As SldWorks.DrawingDoc, view As SldWorks.view)\n    \n    Dim vBoundings As Variant\n    vBoundings = view.GetOutline()\n    \n    Dim dCenterPt(2) As Double\n    dCenterPt(0) = (vBoundings(0) + vBoundings(2)) / 2\n    dCenterPt(1) = (vBoundings(1) + vBoundings(3)) / 2\n    dCenterPt(2) = 0\n    \n    Dim swViewSketch As SldWorks.Sketch\n    Set swViewSketch = view.GetSketch\n    \n    Dim swViewSketchXForm As SldWorks.MathTransform\n    Set swViewSketchXForm = swViewSketch.ModelToSketchTransform\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dCenterPt)\n    \n    Set swMathPt = swMathPt.MultiplyTransform(swViewSketchXForm)\n    \n    draw.ActivateView view.Name\n    \n    Dim vPt As Variant\n    vPt = swMathPt.ArrayData\n    \n    draw.SketchManager.CreatePoint vPt(0), vPt(1), vPt(2)\n    \nEnd Sub\n')))}h.isMDXComponent=!0},83780:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/point-in-drawing-view-sketch-59bc3d7d2d216b3b1c2f69223126dfe5.png"}}]);