"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[77748],{3905:(e,n,t)=>{t.d(n,{Zo:()=>w,kt:()=>u});var i=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=i.createContext({}),l=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},w=function(e){var n=l(e.components);return i.createElement(d.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,d=e.parentName,w=a(e,["components","mdxType","originalType","parentName"]),c=l(t),g=s,u=c["".concat(d,".").concat(g)]||c[g]||m[g]||r;return t?i.createElement(u,o(o({ref:n},w),{},{components:t})):i.createElement(u,o({ref:n},w))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=g;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a[c]="string"==typeof e?e:s,o[1]=a;for(var l=2;l<r;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},75873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(87462),s=(t(67294),t(3905));const r={title:"Dimension visible drawing entities from view using SOLIDWORKS API",caption:"Dimension Visible Entities",description:"Find and dimension the longest visible entity in the drawing view using SOLIDWORKS API",image:"longest-edge-dimension.png",labels:["drawing","dimension","visible entities"]},o=void 0,a={unversionedId:"codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/index",id:"codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/index",title:"Dimension visible drawing entities from view using SOLIDWORKS API",description:"Find and dimension the longest visible entity in the drawing view using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/index.md",sourceDirName:"codestack/solidworks-api/document/drawing/view-dimension-drawing-entities",slug:"/codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/index.md",tags:[],version:"current",frontMatter:{title:"Dimension visible drawing entities from view using SOLIDWORKS API",caption:"Dimension Visible Entities",description:"Find and dimension the longest visible entity in the drawing view using SOLIDWORKS API",image:"longest-edge-dimension.png",labels:["drawing","dimension","visible entities"]},sidebar:"tutorialSidebar",previous:{title:"Draw sketch segments in context of the drawing sheet using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/drawing/sheet-context-sketch/"},next:{title:"Dimension named model entities in drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/drawing/view-dimension-model-entities/"}},d={},l=[],w={toc:l},c="wrapper";function m(e){let{components:n,...r}=e;return(0,s.kt)(c,(0,i.Z)({},w,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Longest edge dimensioned in the drawing view",src:t(1920).Z,width:"554",height:"514"}),"{ width=250 }"),(0,s.kt)("p",null,"This example demonstrates how to add a linear dimension to the longest edge in the selected drawing view using SOLIDWORKS API."),(0,s.kt)("p",null,"This macro is traversing all visible entities in the drawing view, calculates the length of the edge and finds the longest one. Macro will only work if the longest edge can be dimensioned (i.e. it is either linear or circular edge)."),(0,s.kt)("p",null,"The entities returned from ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iview~getvisibleentities.html"},"IView::GetVisibleEntities")," are already in the drawing view context and they could be selected directly via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ientity~select4.html"},"IEntity::Select4")," SOLIDWORKS API method and it is not required to call the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iview~selectentity.html"},"IView::SelectEntity")," function."),(0,s.kt)("p",null,"Location of the dimension is calculated by offsetting the middle point of the dimensioned edge in the normal curve direction (cross product of the tangent direction and the sheet Z axis) by 20% of the edge length. Unlike ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/drawing/sheet-context-sketch/"},"drawing in sheet context"),", drawing sheet scale is not required to be multiplied to the view transformation matrix when positioning the dimensions."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim swView As SldWorks.view\n        Set swView = swDraw.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swView Is Nothing Then\n            DimensionLongestEdge swDraw, swView\n        Else\n            MsgBox "Please select drawing view"\n        End If\n    Else\n        MsgBox "Please open the drawing document"\n    End If\n    \nEnd Sub\n\nSub DimensionLongestEdge(draw As SldWorks.DrawingDoc, view As SldWorks.view)\n    \n    Dim vVisComps As Variant\n    vVisComps = view.GetVisibleComponents\n    \n    Dim i As Integer\n    \n    Dim swLongestEdge As SldWorks.edge\n    Dim curMaxLength As Double\n    \n    curMaxLength = 0\n    \n    For i = 0 To UBound(vVisComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vVisComps(i)\n        Dim vVisEnts As Variant\n        \n        vVisEnts = view.GetVisibleEntities2(swComp, swViewEntityType_e.swViewEntityType_Edge)\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(vVisEnts)\n            \n            Dim swEdge As SldWorks.edge\n            Set swEdge = vVisEnts(j)\n            \n            Dim curLength As Double\n            curLength = GetEdgeLength(swEdge)\n            \n            If curLength > curMaxLength Then\n                Set swLongestEdge = swEdge\n                curMaxLength = curLength\n            End If\n            \n        Next\n        \n    Next\n    \n    If swLongestEdge Is Nothing Then\n        Err.Raise vbError, "", "Failed to find the longest edge"\n    End If\n    \n    Dim swEnt As SldWorks.Entity\n    Set swEnt = swLongestEdge\n    \n    swEnt.Select4 False, Nothing\n    \n    Dim vDimLoc As Variant\n    vDimLoc = GetDimensionLocation(swLongestEdge, view)\n    \n    draw.AddDimension2 vDimLoc(0), vDimLoc(1), vDimLoc(2)\n    \nEnd Sub\n\nFunction GetEdgeLength(edge As SldWorks.edge) As Double\n    \n    Dim swCurve As SldWorks.Curve\n    \n    Set swCurve = edge.GetCurve()\n    \n    Dim swCurveParams As SldWorks.CurveParamData\n    Set swCurveParams = edge.GetCurveParams3\n    \n    GetEdgeLength = swCurve.GetLength3(swCurveParams.UMinValue, swCurveParams.UMaxValue)\n    \nEnd Function\n\nFunction GetDimensionLocation(edge As SldWorks.edge, view As SldWorks.view) As Variant\n    \n    Dim swCurveParams As SldWorks.CurveParamData\n    Set swCurveParams = edge.GetCurveParams3\n    \n    Dim vCurveData As Variant\n    vCurveData = edge.Evaluate2((swCurveParams.UMinValue + swCurveParams.UMaxValue) / 2, 2)\n    \n    Dim dMidPt(2) As Double\n    dMidPt(0) = vCurveData(0): dMidPt(1) = vCurveData(1): dMidPt(2) = vCurveData(2)\n    \n    Dim dDir(2) As Double\n    dDir(0) = vCurveData(3): dDir(1) = vCurveData(4): dDir(2) = vCurveData(5)\n    \n    Dim dimOffset As Double\n    Dim swCurve As SldWorks.Curve\n    Set swCurve = edge.GetCurve\n    dimOffset = swCurve.GetLength3(swCurveParams.UMinValue, swCurveParams.UMaxValue) * 0.2\n        \n    Dim swViewXForm As SldWorks.MathTransform\n    Set swViewXForm = view.ModelToViewTransform\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dMidPt)\n    Set swMathPt = swMathPt.MultiplyTransform(swViewXForm)\n    \n    Dim swMathTangentVec As SldWorks.MathVector\n    Set swMathTangentVec = swMathUtils.CreateVector(dDir)\n    Set swMathTangentVec = swMathTangentVec.MultiplyTransform(swViewXForm)\n    \n    Dim swMathPerpVec As SldWorks.MathVector\n    Dim dPerpVec(2) As Double\n    dPerpVec(0) = 0: dPerpVec(1) = 0: dPerpVec(2) = 1\n    Set swMathPerpVec = swMathUtils.CreateVector(dPerpVec)\n    \n    Dim swDimExtDir As SldWorks.MathVector\n    Set swDimExtDir = swMathTangentVec.Cross(swMathPerpVec)\n    \n    GetDimensionLocation = MovePoint(swMathPt, swDimExtDir, dimOffset)\n    \nEnd Function\n\nFunction MovePoint(pt As SldWorks.MathPoint, dir As SldWorks.MathVector, dist As Double) As Variant\n       \n    Set dir = dir.Normalise()\n    Set dir = dir.Scale(dist)\n    \n    Set pt = pt.AddVector(dir)\n    \n    MovePoint = pt.ArrayData\n    \nEnd Function\n')))}m.isMDXComponent=!0},1920:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/longest-edge-dimension-7004bedde3759ca825035a9b8def8264.png"}}]);