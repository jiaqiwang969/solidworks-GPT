"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[87250],{3905:(e,n,t)=>{t.d(n,{Zo:()=>w,kt:()=>p});var s=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=s.createContext({}),l=function(e){var n=s.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},w=function(e){var n=l(e.components);return s.createElement(d.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,w=a(e,["components","mdxType","originalType","parentName"]),c=l(t),u=i,p=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return t?s.createElement(p,o(o({ref:n},w),{},{components:t})):s.createElement(p,o({ref:n},w))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a[c]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<r;l++)o[l]=t[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},25001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(87462),i=(t(67294),t(3905));const r={title:"\u4ece\u89c6\u56fe\u4e2d\u4f7f\u7528SOLIDWORKS API\u7ef4\u5ea6\u53ef\u89c1\u7ed8\u56fe\u5b9e\u4f53",caption:"\u7ef4\u5ea6\u53ef\u89c1\u5b9e\u4f53"},o=void 0,a={unversionedId:"codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/index",id:"codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/index",title:"\u4ece\u89c6\u56fe\u4e2d\u4f7f\u7528SOLIDWORKS API\u7ef4\u5ea6\u53ef\u89c1\u7ed8\u56fe\u5b9e\u4f53",description:"\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u627e\u5230\u5e76\u7ef4\u5ea6\u6700\u957f\u7684\u53ef\u89c1\u5b9e\u4f53",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/index.md",sourceDirName:"codestack/solidworks-api/document/drawing/view-dimension-drawing-entities",slug:"/codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/drawing/view-dimension-drawing-entities/index.md",tags:[],version:"current",frontMatter:{title:"\u4ece\u89c6\u56fe\u4e2d\u4f7f\u7528SOLIDWORKS API\u7ef4\u5ea6\u53ef\u89c1\u7ed8\u56fe\u5b9e\u4f53",caption:"\u7ef4\u5ea6\u53ef\u89c1\u5b9e\u4f53"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u5de5\u4f5c\u8868\u4e0a\u7ed8\u5236\u8349\u56fe\u6bb5",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/sheet-context-sketch/"},next:{title:"\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u4f7f\u7528SOLIDWORKS API\u5bf9\u547d\u540d\u6a21\u578b\u5b9e\u4f53\u8fdb\u884c\u6807\u6ce8",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/view-dimension-model-entities/"}},d={},l=[{value:"labels: \u7ed8\u56fe,\u7ef4\u5ea6,\u53ef\u89c1\u5b9e\u4f53",id:"labels-\u7ed8\u56fe\u7ef4\u5ea6\u53ef\u89c1\u5b9e\u4f53",level:2}],w={toc:l},c="wrapper";function m(e){let{components:n,...r}=e;return(0,i.kt)(c,(0,s.Z)({},w,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u627e\u5230\u5e76\u7ef4\u5ea6\u6700\u957f\u7684\u53ef\u89c1\u5b9e\u4f53\nimage: longest-edge-dimension.png"),(0,i.kt)("h2",{id:"labels-\u7ed8\u56fe\u7ef4\u5ea6\u53ef\u89c1\u5b9e\u4f53"},"labels: ","[\u7ed8\u56fe,\u7ef4\u5ea6,\u53ef\u89c1\u5b9e\u4f53]"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7ef4\u5ea6\u6700\u957f\u7684\u8fb9",src:t(92841).Z,width:"554",height:"514"}),"{ width=250 }"),(0,i.kt)("p",null,"\u672c\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u5728\u6240\u9009\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u6700\u957f\u8fb9\u4e0a\u6dfb\u52a0\u7ebf\u6027\u5c3a\u5bf8\u3002"),(0,i.kt)("p",null,"\u6b64\u5b8f\u904d\u5386\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u6240\u6709\u53ef\u89c1\u5b9e\u4f53\uff0c\u8ba1\u7b97\u8fb9\u7684\u957f\u5ea6\u5e76\u627e\u5230\u6700\u957f\u7684\u8fb9\u3002\u53ea\u6709\u6700\u957f\u7684\u8fb9\u53ef\u4ee5\u7ef4\u5ea6\u5316\uff08\u5373\u5b83\u662f\u7ebf\u6027\u8fb9\u6216\u5706\u5f62\u8fb9\uff09\uff0c\u5b8f\u624d\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,i.kt)("p",null,"\u4ece",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iview~getvisibleentities.html"},"IView::GetVisibleEntities"),"\u8fd4\u56de\u7684\u5b9e\u4f53\u5df2\u7ecf\u5904\u4e8e\u7ed8\u56fe\u89c6\u56fe\u4e0a\u4e0b\u6587\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ientity~select4.html"},"IEntity::Select4")," SOLIDWORKS API\u65b9\u6cd5\u9009\u62e9\uff0c\u65e0\u9700\u8c03\u7528",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iview~selectentity.html"},"IView::SelectEntity"),"\u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u5c3a\u5bf8\u7684\u4f4d\u7f6e\u662f\u901a\u8fc7\u5c06\u7ef4\u5ea6\u8fb9\u7684\u4e2d\u70b9\u5728\u6cd5\u7ebf\u66f2\u7ebf\u65b9\u5411\uff08\u5207\u7ebf\u65b9\u5411\u548c\u5de5\u4f5c\u8868Z\u8f74\u7684\u53c9\u4e58\uff09\u4e0a\u504f\u79fb\u8fb9\u957f\u768420%\u6765\u8ba1\u7b97\u7684\u3002\u4e0e",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/drawing/sheet-context-sketch/"},"\u5de5\u4f5c\u8868\u4e0a\u4e0b\u6587\u4e2d\u7684\u7ed8\u56fe"),"\u4e0d\u540c\uff0c\u7ed8\u56fe\u5de5\u4f5c\u8868\u6bd4\u4f8b\u5728\u5b9a\u4f4d\u5c3a\u5bf8\u65f6\u4e0d\u9700\u8981\u4e58\u4ee5\u89c6\u56fe\u53d8\u6362\u77e9\u9635\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim swView As SldWorks.view\n        Set swView = swDraw.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swView Is Nothing Then\n            DimensionLongestEdge swDraw, swView\n        Else\n            MsgBox "\u8bf7\u5148\u9009\u62e9\u7ed8\u56fe\u89c6\u56fe"\n        End If\n    Else\n        MsgBox "\u8bf7\u5148\u6253\u5f00\u7ed8\u56fe\u6587\u6863"\n    End If\n    \nEnd Sub\n\nSub DimensionLongestEdge(draw As SldWorks.DrawingDoc, view As SldWorks.view)\n    \n    Dim vVisComps As Variant\n    vVisComps = view.GetVisibleComponents\n    \n    Dim i As Integer\n    \n    Dim swLongestEdge As SldWorks.edge\n    Dim curMaxLength As Double\n    \n    curMaxLength = 0\n    \n    For i = 0 To UBound(vVisComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vVisComps(i)\n        Dim vVisEnts As Variant\n        \n        vVisEnts = view.GetVisibleEntities2(swComp, swViewEntityType_e.swViewEntityType_Edge)\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(vVisEnts)\n            \n            Dim swEdge As SldWorks.edge\n            Set swEdge = vVisEnts(j)\n            \n            Dim curLength As Double\n            curLength = GetEdgeLength(swEdge)\n            \n            If curLength > curMaxLength Then\n                Set swLongestEdge = swEdge\n                curMaxLength = curLength\n            End If\n            \n        Next\n        \n    Next\n    \n    If swLongestEdge Is Nothing Then\n        Err.Raise vbError, "", "\u672a\u627e\u5230\u6700\u957f\u7684\u8fb9"\n    End If\n    \n    Dim swEnt As SldWorks.Entity\n    Set swEnt = swLongestEdge\n    \n    swEnt.Select4 False, Nothing\n    \n    Dim vDimLoc As Variant\n    vDimLoc = GetDimensionLocation(swLongestEdge, view)\n    \n    draw.AddDimension2 vDimLoc(0), vDimLoc(1), vDimLoc(2)\n    \nEnd Sub\n\nFunction GetEdgeLength(edge As SldWorks.edge) As Double\n    \n    Dim swCurve As SldWorks.Curve\n    \n    Set swCurve = edge.GetCurve()\n    \n    Dim swCurveParams As SldWorks.CurveParamData\n    Set swCurveParams = edge.GetCurveParams3\n    \n    GetEdgeLength = swCurve.GetLength3(swCurveParams.UMinValue, swCurveParams.UMaxValue)\n    \nEnd Function\n\nFunction GetDimensionLocation(edge As SldWorks.edge, view As SldWorks.view) As Variant\n    \n    Dim swCurveParams As SldWorks.CurveParamData\n    Set swCurveParams = edge.GetCurveParams3\n    \n    Dim vCurveData As Variant\n    vCurveData = edge.Evaluate2((swCurveParams.UMinValue + swCurveParams.UMaxValue) / 2, 2)\n    \n    Dim dMidPt(2) As Double\n    dMidPt(0) = vCurveData(0): dMidPt(1) = vCurveData(1): dMidPt(2) = vCurveData(2)\n    \n    Dim dDir(2) As Double\n    dDir(0) = vCurveData(3): dDir(1) = vCurveData(4): dDir(2) = vCurveData(5)\n    \n    Dim dimOffset As Double\n    Dim swCurve As SldWorks.Curve\n    Set swCurve = edge.GetCurve\n    dimOffset = swCurve.GetLength3(swCurveParams.UMinValue, swCurveParams.UMaxValue) * 0.2\n        \n    Dim swViewXForm As SldWorks.MathTransform\n    Set swViewXForm = view.ModelToViewTransform\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dMidPt)\n    Set swMathPt = swMathPt.MultiplyTransform(swViewXForm)\n    \n    Dim swMathTangentVec As SldWorks.MathVector\n    Set swMathTangentVec = swMathUtils.CreateVector(dDir)\n    Set swMathTangentVec = swMathTangentVec.MultiplyTransform(swViewXForm)\n    \n    Dim swMathPerpVec As SldWorks.MathVector\n    Dim dPerpVec(2) As Double\n    dPerpVec(0) = 0: dPerpVec(1) = 0: dPerpVec(2) = 1\n    Set swMathPerpVec = swMathUtils.CreateVector(dPerpVec)\n    \n    Dim swDimExtDir As SldWorks.MathVector\n    Set swDimExtDir = swMathTangentVec.Cross(swMathPerpVec)\n    \n    GetDimensionLocation = MovePoint(swMathPt, swDimExtDir, dimOffset)\n    \nEnd Function\n\nFunction MovePoint(pt As SldWorks.MathPoint, dir As SldWorks.MathVector, dist As Double) As Variant\n       \n    Set dir = dir.Normalise()\n    Set dir = dir.Scale(dist)\n    \n    Set pt = pt.AddVector(dir)\n    \n    MovePoint = pt.ArrayData\n    \nEnd Function\n')))}m.isMDXComponent=!0},92841:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/longest-edge-dimension-7004bedde3759ca825035a9b8def8264.png"}}]);