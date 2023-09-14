"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[94543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>d});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var w=o.createContext({}),h=function(e){var t=o.useContext(w),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},A=function(e){var t=h(e.components);return o.createElement(w.Provider,{value:t},e.children)},c="mdxType",M={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,w=e.parentName,A=a(e,["components","mdxType","originalType","parentName"]),c=h(n),l=s,d=c["".concat(w,".").concat(l)]||c[l]||M[l]||i;return n?o.createElement(d,r(r({ref:t},A),{},{components:n})):o.createElement(d,r({ref:t},A))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=l;var a={};for(var w in t)hasOwnProperty.call(t,w)&&(a[w]=t[w]);a.originalType=e,a[c]="string"==typeof e?e:s,r[1]=a;for(var h=2;h<i;h++)r[h]=n[h];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},28271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>r,default:()=>M,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var o=n(87462),s=(n(67294),n(3905));const i={title:"Draw sketch segments in context of the drawing sheet using SOLIDWORKS API",caption:"Draw Sketch Segments In Sheet",description:"Draw underlying model bounding box sketch segment in the context of the drawing sheet using SOLIDWORKS API",image:"drawing-view-line.png",labels:["sketch","dimension","edge","bounding box"]},r=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-context-sketch/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-context-sketch/index",title:"Draw sketch segments in context of the drawing sheet using SOLIDWORKS API",description:"Draw underlying model bounding box sketch segment in the context of the drawing sheet using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-context-sketch/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-context-sketch",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-context-sketch/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-context-sketch/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-context-sketch/index.md",tags:[],version:"current",frontMatter:{title:"Draw sketch segments in context of the drawing sheet using SOLIDWORKS API",caption:"Draw Sketch Segments In Sheet",description:"Draw underlying model bounding box sketch segment in the context of the drawing sheet using SOLIDWORKS API",image:"drawing-view-line.png",labels:["sketch","dimension","edge","bounding box"]},sidebar:"tutorialSidebar",previous:{title:"Get the sheet body geometry type using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-body-geometry-type/"},next:{title:"Show the text of all comments in the active model using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-all-comments/"}},w={},h=[{value:"Running macro",id:"running-macro",level:2}],A={toc:h},c="wrapper";function M(e){let{components:t,...i}=e;return(0,s.kt)(c,(0,o.Z)({},A,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This code example demonstrates how to draw the model bounding box diagonal in the drawing view using SOLIDWORKS API."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Bounding box of the assembly",src:n(28743).Z,width:"536",height:"449"}),"{ width=250 }"),(0,s.kt)("p",null,"The bounding box coordinate system is extracted from the underlying model of the drawing view. The coordinates are relative to the global coordinate system of the part or the assembly drawing view created from."),(0,s.kt)("p",null,"In order to properly transform the coordinate into the drawing sheet space it is required to consider the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Drawing view transformation. This can be extracted using the ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iview~modeltoviewtransform.html"},"IView::ModelToViewTransform")," SOLIDWORKS API method."),(0,s.kt)("li",{parentName:"ul"},"Drawing sheet transformation."),(0,s.kt)("li",{parentName:"ul"},"Drawing sheet scale")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Drawing sheet scale property",src:n(6857).Z,width:"733",height:"374"}),"{ width=350 }"),(0,s.kt)("p",null,"The combination of the above transformation will return the full transformation of the coordinate from the model space into the current sheet space."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"When inserting the sketch segments into the drawing sheet it is imported to activate the sheet space by calling the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.idrawingdoc~activateview.html"},"IDrawingDoc::ActivateView")," SOLIDWORKS API method and passing an empty string as the parameter. Otherwise the entity will be inserted directly into the model space of the view document.")),(0,s.kt)("h2",{id:"running-macro"},"Running macro"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Open drawing"),(0,s.kt)("li",{parentName:"ul"},"Insert view of part or assembly"),(0,s.kt)("li",{parentName:"ul"},"Modify view and drawing sheet scale. You can also rotate the view"),(0,s.kt)("li",{parentName:"ul"},"Run the macro. As the result the diagonal is drawn in the sheet space representing the bounding box of the underlying model"),(0,s.kt)("li",{parentName:"ul"},"Move the view. Note that the created line segment doesn't move with the view which means it was created in the drawing sheet space")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Bounding box diagonal in the drawing",src:n(70126).Z,width:"726",height:"484"}),"{ width=300 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim swView As SldWorks.view\n        Set swView = swDraw.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swView Is Nothing Then\n            DrawBBoxDiagonal swDraw, swView\n        Else\n            MsgBox "Please select drawing view"\n        End If\n    Else\n        MsgBox "Please open the drawing document"\n    End If\n    \nEnd Sub\n\nSub DrawBBoxDiagonal(draw As SldWorks.DrawingDoc, view As SldWorks.view)\n    \n    Dim vBox As Variant\n    Dim swViewTransform As SldWorks.MathTransform\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Dim vStartPt As Variant\n    Dim vEndPt As Variant\n    \n    vBox = GetViewRefModelBBox(view)\n    Set swViewTransform = GetViewToSheetTransform(draw, view)\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim dPt(2) As Double\n    dPt(0) = vBox(0): dPt(1) = vBox(1): dPt(2) = vBox(2)\n    \n    Set swMathPt = swMathUtils.CreatePoint(dPt)\n    Set swMathPt = swMathPt.MultiplyTransform(swViewTransform)\n    vStartPt = swMathPt.ArrayData\n    \n    dPt(0) = vBox(3): dPt(1) = vBox(4): dPt(2) = vBox(5)\n    \n    Set swMathPt = swMathUtils.CreatePoint(dPt)\n    Set swMathPt = swMathPt.MultiplyTransform(swViewTransform)\n    vEndPt = swMathPt.ArrayData\n    \n    draw.ActivateView ""\n        \n    draw.ClearSelection2 True\n        \n    draw.SketchManager.CreateLine vStartPt(0), vStartPt(1), vStartPt(2), vEndPt(0), vEndPt(1), vEndPt(2)\n    \nEnd Sub\n\nFunction GetViewRefModelBBox(view As SldWorks.view) As Variant\n    \n    Dim swRefDoc As SldWorks.ModelDoc2\n    Set swRefDoc = view.ReferencedDocument\n    \n    If Not swRefDoc Is Nothing Then\n        If swRefDoc.GetType() = swDocumentTypes_e.swDocPART Then\n            Dim swPart As SldWorks.PartDoc\n            Set swPart = swRefDoc\n            GetViewRefModelBBox = swPart.GetPartBox(True)\n        ElseIf swRefDoc.GetType() = swDocumentTypes_e.swDocASSEMBLY Then\n            Dim swAssy As SldWorks.AssemblyDoc\n            Set swAssy = swRefDoc\n            Const BOX_OPTS_DEFAULT As Integer = 0\n            GetViewRefModelBBox = swAssy.GetBox(BOX_OPTS_DEFAULT)\n        Else\n            Err.Raise vbError, "", "Unsupported view document"\n        End If\n    Else\n        Err.Raise vbError, "", "No document attached to view"\n    End If\n    \nEnd Function\n\nFunction GetViewToSheetTransform(draw As SldWorks.DrawingDoc, view As SldWorks.view) As SldWorks.MathTransform\n\n    Dim swMathUtils As SldWorks.MathUtility\n    Dim swSheet As SldWorks.sheet\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Set swSheet = view.sheet\n    \n    Dim vSheetPrps As Variant\n    vSheetPrps = swSheet.GetProperties\n    \n    Dim sheetScaleNom As Double\n    Dim sheetScaleDenom As Double\n    \n    sheetScaleNom = vSheetPrps(2)\n    sheetScaleDenom = vSheetPrps(3)\n\n    Dim dSheetData(15) As Double\n    dSheetData(0) = 1: dSheetData(1) = 0: dSheetData(2) = 0: dSheetData(3) = 0\n    dSheetData(4) = 1: dSheetData(5) = 0: dSheetData(6) = 0: dSheetData(7) = 0\n    dSheetData(8) = 1: dSheetData(9) = 0: dSheetData(10) = 0: dSheetData(11) = 0\n    dSheetData(12) = sheetScaleNom / sheetScaleDenom: dSheetData(13) = 0: dSheetData(14) = 0: dSheetData(15) = 0\n    \n    Dim swSheetTransform As SldWorks.MathTransform\n    Set swSheetTransform = swMathUtils.CreateTransform(dSheetData)\n            \n    Set GetViewToSheetTransform = view.ModelToViewTransform.Multiply(swSheetTransform.Inverse())\n\nEnd Function\n')))}M.isMDXComponent=!0},28743:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},70126:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/drawing-view-line-b449ea3d40c40db0bf74a1e15c86b98e.png"},6857:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sheet-scale-property-5c41131cc1aad57e395b57eba038047b.png"}}]);