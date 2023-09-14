"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[27285],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>w});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var d=r.createContext({}),a=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=a(e.components);return r.createElement(d.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=a(t),f=s,w=l["".concat(d,".").concat(f)]||l[f]||m[f]||o;return t?r.createElement(w,i(i({ref:n},u),{},{components:t})):r.createElement(w,i({ref:n},u))}));function w(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[l]="string"==typeof e?e:s,i[1]=c;for(var a=2;a<o;a++)i[a]=t[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=t(87462),s=(t(67294),t(3905));const o={title:"SOLIDWORKS macro finds intersection points between surface and curve",caption:"Find Intersection Points Between Surface And Curve",description:"Example demonstrates how to find the intersection points between selected plane or face with edge or sketch segment",image:"surface-curve-intersection.png",labels:["curve","evaluate","geometry","macro","points","solidworks api","spline","intersection","trimmed curve","vba"]},i=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/surface-curve-intersection/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/surface-curve-intersection/index",title:"SOLIDWORKS macro finds intersection points between surface and curve",description:"Example demonstrates how to find the intersection points between selected plane or face with edge or sketch segment",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/surface-curve-intersection/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/surface-curve-intersection",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/surface-curve-intersection/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/surface-curve-intersection/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/surface-curve-intersection/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS macro finds intersection points between surface and curve",caption:"Find Intersection Points Between Surface And Curve",description:"Example demonstrates how to find the intersection points between selected plane or face with edge or sketch segment",image:"surface-curve-intersection.png",labels:["curve","evaluate","geometry","macro","points","solidworks api","spline","intersection","trimmed curve","vba"]},sidebar:"tutorialSidebar",previous:{title:"Storing and restoring temp body in 3rd party storage using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/store-restore-body/"},next:{title:"SOLIDWORKS VBA macro to copy preselected faces",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/surface-offset-equal/"}},d={},a=[],u={toc:a},l="wrapper";function m(e){let{components:n,...o}=e;return(0,s.kt)(l,(0,r.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Intersection point between plane and sketch spline",src:t(99531).Z,width:"375",height:"547"}),"{ width=300 }"),(0,s.kt)("p",null,"This example demonstrates how to find the intersection points between selected surface (plane or face) with curve (edge or sketch segment) using SOLIDWORKS API."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Open Part document"),(0,s.kt)("li",{parentName:"ul"},"Select plane or any face as first selection object"),(0,s.kt)("li",{parentName:"ul"},"Select sketch segment (line, spline or arc) as second selection object"),(0,s.kt)("li",{parentName:"ul"},"Run the macro. As the result the 3D Sketch is created with points of intersection between selected objects")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isurface~intersectcurve2.html"},"ISurface::IntersectCurve2")," SOLIDWORKS API method is used to find the intersection points within the specified boundaries of curve and surface."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swSurf As SldWorks.Surface\n        Dim swCurve As SldWorks.curve\n        \n        Set swSurf = GetSurface(swSelMgr.GetSelectedObject6(1, -1))\n        Set swCurve = GetCurve(swSelMgr.GetSelectedObject6(2, -1))\n        \n        If Not swSurf Is Nothing And Not swCurve Is Nothing Then\n            \n            Dim vStartPt As Variant\n            Dim vEndPt As Variant\n            \n            GetCurveEndPoints swCurve, vStartPt, vEndPt\n            \n            Dim dBounds(5) As Double\n            dBounds(0) = vStartPt(0): dBounds(1) = vStartPt(1): dBounds(2) = vStartPt(2)\n            dBounds(3) = vEndPt(0): dBounds(4) = vEndPt(1): dBounds(5) = vEndPt(2)\n            \n            Dim vPoints As Variant\n            Dim curveParams As Variant\n            Dim uvParams As Variant\n            swSurf.IntersectCurve2 swCurve, dBounds, vPoints, curveParams, uvParams\n            \n            DrawPoints swModel, vPoints\n            \n        Else\n            MsgBox "Please select surface (plane or face) and curve (edge or sketch segment) to find intersection"\n        End If\n        \n    Else\n        MsgBox "Please opent the model"\n    End If\n    \nEnd Sub\n\nFunction GetSurface(swObj As Object) As SldWorks.Surface\n        \n    Dim swSurf As SldWorks.Surface\n    \n    If TypeOf swObj Is SldWorks.Face2 Then\n        \n        Dim swFace As SldWorks.Face2\n        Set swFace = swObj\n        Set swSurf = swFace.GetSurface\n        \n    ElseIf TypeOf swObj Is SldWorks.Feature Then\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swObj\n        \n        If swFeat.GetTypeName2() = "RefPlane" Then\n            Dim swRefPlane As SldWorks.refPlane\n            Set swRefPlane = swFeat.GetSpecificFeature2()\n            Set swSurf = CreateSurfaceFromRefPlane(swRefPlane)\n        End If\n    \n    End If\n    \n    Set GetSurface = swSurf\n    \nEnd Function\n\nFunction CreateSurfaceFromRefPlane(refPlane As SldWorks.refPlane) As SldWorks.Surface\n    \n    Dim swModeler As SldWorks.Modeler\n    Dim swMathUtils As SldWorks.MathUtility\n    \n    Set swModeler = swApp.GetModeler()\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim dRoot(2) As Double\n    dRoot(0) = 0: dRoot(1) = 0: dRoot(2) = 0\n    \n    Dim dNorm(2) As Double\n    dNorm(0) = 0: dNorm(1) = 0: dNorm(2) = 1\n    \n    Dim dRef(2) As Double\n    dRef(0) = 1: dRef(1) = 0: dRef(2) = 0\n    \n    Dim swRootPt As SldWorks.MathPoint\n    Dim swNormVec As SldWorks.MathVector\n    Dim swRefVec As SldWorks.MathVector\n    \n    Set swRootPt = swMathUtils.CreatePoint(dRoot)\n    Set swNormVec = swMathUtils.CreateVector(dNorm)\n    Set swRefVec = swMathUtils.CreateVector(dRef)\n    \n    Dim swXForm As SldWorks.MathTransform\n    Set swXForm = refPlane.Transform\n    \n    Set swRootPt = swRootPt.MultiplyTransform(swXForm)\n    Set swNormVec = swNormVec.MultiplyTransform(swXForm)\n    Set swRefVec = swRefVec.MultiplyTransform(swXForm)\n    \n    Set CreateSurfaceFromRefPlane = swModeler.CreatePlanarSurface2(swRootPt.ArrayData, swNormVec.ArrayData, swRefVec.ArrayData)\n    \nEnd Function\n\nFunction GetCurve(swObj As Object) As SldWorks.curve\n    \n    Dim swCurve As SldWorks.curve\n    \n    If TypeOf swObj Is SldWorks.Edge Then\n    \n        Dim swEdge As SldWorks.Edge\n        Set swEdge = swObj\n        Set swCurve = swEdge.GetCurve\n        \n    ElseIf TypeOf swObj Is SldWorks.SketchSegment Then\n        \n        Dim swSkSeg As SldWorks.SketchSegment\n        Set swSkSeg = swObj\n        \n        Set swCurve = GetTrimmedCurveFromSketchSegment(swSkSeg)\n        \n    End If\n    \n    Set GetCurve = swCurve\n    \nEnd Function\n\nFunction GetTrimmedCurveFromSketchSegment(skSeg As SldWorks.SketchSegment) As SldWorks.curve\n    \n    Dim swCurve As SldWorks.curve\n    Set swCurve = skSeg.GetCurve\n    \n    Dim swStartPt As SldWorks.SketchPoint\n    Dim swEndPt As SldWorks.SketchPoint\n    \n    If TypeOf skSeg Is SldWorks.SketchLine Then\n        \n        Dim swSkLine As SldWorks.SketchLine\n        Set swSkLine = skSeg\n        Set swStartPt = swSkLine.GetStartPoint2()\n        Set swEndPt = swSkLine.GetEndPoint2()\n        \n    ElseIf TypeOf skSeg Is SldWorks.SketchSpline Then\n        \n        Dim swSkSpline As SldWorks.SketchSpline\n        Set swSkSpline = skSeg\n        Dim vSplinePts As Variant\n        vSplinePts = swSkSpline.GetPoints2()\n        Set swStartPt = vSplinePts(0)\n        Set swEndPt = vSplinePts(UBound(vSplinePts))\n        \n    ElseIf TypeOf skSeg Is SldWorks.SketchArc Then\n        \n        Dim swSkArc As SldWorks.SketchArc\n        Set swSkArc = skSeg\n        Set swStartPt = swSkArc.GetStartPoint2()\n        Set swEndPt = swSkArc.GetStartPoint2()\n        \n    End If\n    \n    Set swCurve = swCurve.CreateTrimmedCurve2(swStartPt.X, swStartPt.Y, swStartPt.Z, swEndPt.X, swEndPt.Y, swEndPt.Z)\n    \n    Dim swXForm As SldWorks.MathTransform\n    Set swXForm = skSeg.GetSketch().ModelToSketchTransform.Inverse\n    \n    swCurve.ApplyTransform swXForm\n    \n    Set GetTrimmedCurveFromSketchSegment = swCurve\n    \nEnd Function\n\nFunction GetCurveEndPoints(curve As SldWorks.curve, ByRef startPt As Variant, ByRef endPt As Variant)\n    \n    Dim startParam As Double\n    Dim endParam As Double\n    \n    curve.GetEndParams startParam, endParam, False, False\n    \n    Dim dStartPt(2) As Double\n    Dim dEndPt(2) As Double\n     \n    Dim evalRes As Variant\n    evalRes = curve.Evaluate2(startParam, 1)\n    \n    dStartPt(0) = evalRes(0): dStartPt(1) = evalRes(1): dStartPt(2) = evalRes(2)\n    \n    evalRes = curve.Evaluate2(endParam, 1)\n    \n    dEndPt(0) = evalRes(0): dEndPt(1) = evalRes(1): dEndPt(2) = evalRes(2)\n    \n    startPt = dStartPt\n    endPt = dEndPt\n    \nEnd Function\n\nFunction DrawPoints(model As SldWorks.ModelDoc2, points As Variant)\n    \n    model.ClearSelection2 True\n    \n    model.SketchManager.Insert3DSketch True\n    model.SketchManager.AddToDB = True\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(points) Step 3\n        model.SketchManager.CreatePoint points(i), points(i + 1), points(i + 2)\n    Next\n    \n    model.SketchManager.AddToDB = False\n    model.SketchManager.Insert3DSketch True\n    \nEnd Function\n')))}m.isMDXComponent=!0},99531:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"}}]);