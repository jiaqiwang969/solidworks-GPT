"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[44924],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>p});var s=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,s,t=function(e,n){if(null==e)return{};var r,s,t={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=s.createContext({}),c=function(e){var n=s.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=c(e.components);return s.createElement(u.Provider,{value:n},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=t,p=d["".concat(u,".").concat(m)]||d[m]||v[m]||o;return r?s.createElement(p,a(a({ref:n},l),{},{components:r})):s.createElement(p,a({ref:n},l))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[d]="string"==typeof e?e:t,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36072:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=r(87462),t=(r(67294),r(3905));const o={title:"Macro to create ISO curves for face using SOLIDWORKS API",caption:"Create ISO Curves For Face",description:"Example demonstrates how to find specified number of iso-curves in the u and v bounds of the selected face using SOLIDWORKS API",image:"iso-curves-wire-body.png",labels:["curve","evaluate","geometry","macro","iso","uv","trimmed curve","vba"]},a=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/face-iso-curves/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/face-iso-curves/index",title:"Macro to create ISO curves for face using SOLIDWORKS API",description:"Example demonstrates how to find specified number of iso-curves in the u and v bounds of the selected face using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/face-iso-curves/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/face-iso-curves",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/face-iso-curves/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/face-iso-curves/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/face-iso-curves/index.md",tags:[],version:"current",frontMatter:{title:"Macro to create ISO curves for face using SOLIDWORKS API",caption:"Create ISO Curves For Face",description:"Example demonstrates how to find specified number of iso-curves in the u and v bounds of the selected face using SOLIDWORKS API",image:"iso-curves-wire-body.png",labels:["curve","evaluate","geometry","macro","iso","uv","trimmed curve","vba"]},sidebar:"tutorialSidebar",previous:{title:"Export all SOLIDWORKS document level options to Excel",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/extract-all-options/"},next:{title:"Handling pre and post close notifications using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/file-close-event/"}},u={},c=[],l={toc:c},d="wrapper";function v(e){let{components:n,...o}=e;return(0,t.kt)(d,(0,s.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Preview of iso curves of the face",src:r(98487).Z,width:"482",height:"461"}),"{ width=300 }"),(0,t.kt)("p",null,"This example demonstrates how to find specified number of iso-curves in the u and v bounds of the selected face using SOLIDWORKS API."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Select the face and run the macro"),(0,t.kt)("li",{parentName:"ul"},"Iso curves are previewed and macro execution stops"),(0,t.kt)("li",{parentName:"ul"},"Continue the macro to clear the preview")),(0,t.kt)("p",null,"Number of iso curves in u and v direction can be changed in the following snippet"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},"Dim vCurves As Variant\nvCurves = GetIsoCurves(swFace, <Number of curves in u direction>, <Number of curves in v direction>)\n")),(0,t.kt)("p",null,"Optionally macro allows to create curves in the 3D Sketch."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Sketch created for iso curves of the face",src:r(29175).Z,width:"469",height:"429"}),"{ width=300 }"),(0,t.kt)("p",null,"This option can be enabled by setting ",(0,t.kt)("em",{parentName:"p"},"CREATE_SKETCH")," constant to ",(0,t.kt)("em",{parentName:"p"},"True")," at the beginning of the macro:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},"Const CREATE_SKETCH As Boolean = True\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Macro:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Const CREATE_SKETCH As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swSelMgr As SldWorks.SelectionMgr\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swFace As SldWorks.Face2\n        Set swFace = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swFace Is Nothing Then\n            \n            Dim vCurves As Variant\n            vCurves = GetIsoCurves(swFace, 10, 10)\n            \n            If True = CREATE_SKETCH Then\n                DrawCurves swModel, vCurves, 0.001, 0.001\n            Else\n                PreviewCurves swModel, vCurves\n            End If\n            \n        Else\n            MsgBox "Please select face"\n        End If\n    \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nFunction GetIsoCurves(face As SldWorks.Face2, uCount As Integer, vCount As Integer) As Variant\n    \n    Dim swCurves() As SldWorks.curve\n    ReDim swCurves(uCount + vCount - 1)\n    \n    Dim uCurves As Variant\n    Dim vCurves As Variant\n    \n    uCurves = SplitFaceOnIsoCurves(face, True, uCount)\n    vCurves = SplitFaceOnIsoCurves(face, False, vCount)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(uCurves)\n        Set swCurves(i) = uCurves(i)\n    Next\n    \n    For i = 0 To UBound(vCurves)\n        Set swCurves(UBound(uCurves) + 1 + i) = vCurves(i)\n    Next\n    \n    GetIsoCurves = swCurves\n    \nEnd Function\n\nFunction SplitFaceOnIsoCurves(face As SldWorks.Face2, UorV As Boolean, count As Integer) As Variant\n\n    Dim swCurves() As SldWorks.curve\n    ReDim swCurves(count - 1)\n    \n    Dim swSurf As SldWorks.Surface\n    Set swSurf = face.GetSurface\n    \n    Dim thisParamMin As Double\n    Dim thisParamMax As Double\n    Dim otherParamMin As Double\n    Dim otherParamMax As Double\n    \n    Dim vUvBounds As Variant\n    vUvBounds = face.GetUVBounds\n    \n    If True = UorV Then\n        thisParamMin = vUvBounds(0)\n        thisParamMax = vUvBounds(1)\n        otherParamMin = vUvBounds(2)\n        otherParamMax = vUvBounds(3)\n    Else\n        thisParamMin = vUvBounds(2)\n        thisParamMax = vUvBounds(3)\n        otherParamMin = vUvBounds(0)\n        otherParamMax = vUvBounds(1)\n    End If\n    \n    Dim i As Integer\n    \n    Dim paramStep As Double\n    paramStep = (thisParamMax - thisParamMin) / (count - 1)\n    \n    For i = 0 To count - 1\n        \n        Dim param As Double\n        param = thisParamMin + i * paramStep\n        \n        Dim swCurve As SldWorks.curve\n        Set swCurve = swSurf.MakeIsoCurve2(Not UorV, param)\n        \n        Dim u As Double\n        Dim v As Double\n        \n        Dim vStartPt As Variant\n        Dim vEndPt As Variant\n        \n        If True = UorV Then\n            u = param\n            v = otherParamMin\n        Else\n            v = param\n            u = otherParamMin\n        End If\n        \n        vStartPt = swSurf.Evaluate(u, v, 0, 0)\n        \n        If True = UorV Then\n            u = param\n            v = otherParamMax\n        Else\n            v = param\n            u = otherParamMax\n        End If\n        \n        vEndPt = swSurf.Evaluate(u, v, 0, 0)\n        \n        Set swCurve = swCurve.CreateTrimmedCurve2(vStartPt(0), vStartPt(1), vStartPt(2), vEndPt(0), vEndPt(1), vEndPt(2))\n        Set swCurves(i) = swCurve\n    Next\n    \n    SplitFaceOnIsoCurves = swCurves\n    \nEnd Function\n\nSub PreviewCurves(model As SldWorks.ModelDoc2, curves As Variant)\n    \n    Dim swModeler As SldWorks.Modeler\n    Set swModeler = swApp.GetModeler\n    \n    Dim swCurvesBody() As SldWorks.Body2\n    \n    ReDim swCurvesBody(UBound(curves))\n    \n    Dim i As Integer\n        \n    For i = 0 To UBound(curves)\n        Dim swCurve As SldWorks.curve\n        Set swCurve = curves(i).MakeBsplineCurve2()\n        Set swCurvesBody(i) = swCurve.CreateWireBody\n        swCurvesBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n    Next\n    \n    Stop\n    \n    \'clear preview\n    For i = 0 To UBound(swCurvesBody)\n        Set swCurvesBody(i) = Nothing\n    Next\n        \n    model.GraphicsRedraw2\n    \nEnd Sub\n\nSub DrawCurves(model As SldWorks.ModelDoc2, curves As Variant, chordTol As Double, lengthTol As Double)\n    \n    Dim swSketchMgr As SldWorks.SketchManager\n    Set swSketchMgr = model.SketchManager\n    \n    model.ClearSelection2 True\n    swSketchMgr.Insert3DSketch False\n    model.SetAddToDB True\n        \n    For i = 0 To UBound(curves)\n        Dim swCurve As SldWorks.curve\n        Set swCurve = curves(i)\n        DrawCurve swCurve, model, chordTol, lengthTol\n    Next\n    \n    model.SetAddToDB False\n    swSketchMgr.Insert3DSketch True\n        \nEnd Sub\n\nSub DrawCurve(curve As SldWorks.curve, model As SldWorks.ModelDoc2, chordTol As Double, lengthTol As Double)\n\n    Dim vStartPt As Variant\n    Dim vEndPt As Variant\n    Dim vTessPts As Variant\n    \n    Dim startParam As Double\n    Dim endParam As Double\n    \n    curve.GetEndParams startParam, endParam, False, False\n    \n    vStartPt = curve.Evaluate2(startParam, 0)\n    vEndPt = curve.Evaluate2(endParam, 0)\n\n    vTessPts = curve.GetTessPts(chordTol, lengthTol, (vStartPt), (vEndPt))\n\n    For i = 0 To UBound(vTessPts) - 3 Step 3\n        model.CreateLine2 vTessPts(i + 0), vTessPts(i + 1), vTessPts(i + 2), vTessPts(i + 3), vTessPts(i + 4), vTessPts(i + 5)\n    Next i\n\nEnd Sub\n')))}v.isMDXComponent=!0},29175:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/iso-curves-sketch-b7e079ea9f47a9e950b8abaf0e88b522.png"},98487:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/iso-curves-wire-body-e38c652a5f2f858c95a5ca3f2a8a2d63.png"}}]);