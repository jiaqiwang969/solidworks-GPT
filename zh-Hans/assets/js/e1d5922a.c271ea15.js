"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[78683],{3905:(t,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>m});var o=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)e=s[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)e=s[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var c=o.createContext({}),l=function(t){var n=o.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=l(t.components);return o.createElement(c.Provider,{value:n},t.children)},p="mdxType",h={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(t,n){var e=t.components,r=t.mdxType,s=t.originalType,c=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),p=l(e),k=r,m=p["".concat(c,".").concat(k)]||p[k]||h[k]||s;return e?o.createElement(m,i(i({ref:n},d),{},{components:e})):o.createElement(m,i({ref:n},d))}));function m(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var s=e.length,i=new Array(s);i[0]=k;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=t,a[p]="string"==typeof t?t:r,i[1]=a;for(var l=2;l<s;l++)i[l]=e[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,e)}k.displayName="MDXCreateElement"},33548:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=e(87462),r=(e(67294),e(3905));const s={layout:"sw-tool",title:"\u5c06\u8349\u56fe\u70b9\u5750\u6807\u5bfc\u51fa\u4e3aCSV\u6587\u4ef6\u7684VBA\u5b8f",caption:"\u5bfc\u51fa\u8349\u56fe\u5750\u6807"},i=void 0,a={unversionedId:"codestack/solidworks-api/document/sketch/export-point-coordinates/index",id:"codestack/solidworks-api/document/sketch/export-point-coordinates/index",title:"\u5c06\u8349\u56fe\u70b9\u5750\u6807\u5bfc\u51fa\u4e3aCSV\u6587\u4ef6\u7684VBA\u5b8f",description:"\u8be5VBA\u5b8f\u53ef\u5c06\u6240\u9009\u8349\u56fe\u4e2d\u7684\u6240\u6709\u70b9\u7684\u5750\u6807\u5bfc\u51fa\u5230CSV\u6587\u4ef6\u4e2d\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/sketch/export-point-coordinates/index.md",sourceDirName:"codestack/solidworks-api/document/sketch/export-point-coordinates",slug:"/codestack/solidworks-api/document/sketch/export-point-coordinates/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/sketch/export-point-coordinates/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/sketch/export-point-coordinates/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u5c06\u8349\u56fe\u70b9\u5750\u6807\u5bfc\u51fa\u4e3aCSV\u6587\u4ef6\u7684VBA\u5b8f",caption:"\u5bfc\u51fa\u8349\u56fe\u5750\u6807"},sidebar:"tutorialSidebar",previous:{title:"\u5c06SOLIDWORKS\u6587\u4ef6\u4e2d\u9009\u5b9a\u7684\u8349\u56fe\u5bfc\u51fa\u4e3aDXF/DWG\u6587\u4ef6\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/sketch/export-dxf-dwg/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u9009\u5b9a\u7684\u8349\u56fe\u6bb5\u4fe1\u606f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/sketch/get-selected-sketch-segments-info/"}},c={},l=[{value:"group: Sketch",id:"group-sketch",level:2}],d={toc:l},p="wrapper";function h(t){let{components:n,...s}=t;return(0,r.kt)(p,(0,o.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8be5VBA\u5b8f\u53ef\u5c06\u6240\u9009\u8349\u56fe\u4e2d\u7684\u6240\u6709\u70b9\u7684\u5750\u6807\u5bfc\u51fa\u5230CSV\u6587\u4ef6\u4e2d\u3002\nimage: export-coordinates.svg\nlabels: ","[sketch,export,points,coordinates,csv]"),(0,r.kt)("h2",{id:"group-sketch"},"group: Sketch"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u6240\u9009\u8349\u56fe\u4e2d\u7684\u8349\u56fe\u70b9",src:e(8406).Z,width:"990",height:"537"}),"{ width=500 }"),(0,r.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u5141\u8bb8\u5c06\u6240\u9009\u8349\u56fe\u4e2d\u7684\u6240\u6709\u70b9\u7684\u5750\u6807\u5bfc\u51fa\u5230CSV\u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("p",null,"CSV\u6587\u4ef6\u53ef\u4ee5\u5728Excel\u4e2d\u6253\u5f00\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5728Excel\u4e2d\u6253\u5f00\u7684\u8349\u56fe\u70b9\u5750\u6807",src:e(49757).Z,width:"215",height:"188"})),(0,r.kt)("p",null,"\u8be5\u5b8f\u6709\u4e00\u4e2a\u9009\u9879\uff0c\u53ef\u4ee5\u5c06\u5750\u6807\u5bfc\u51fa\u5230\u8349\u56fe\u7a7a\u95f4\uff082D\u8349\u56fe\u7684XY\u5750\u6807\uff09\u6216\u6a21\u578b\u7a7a\u95f4\uff08XYZ\u5750\u6807\uff09\u3002\u8be5\u5b8f\u8fd8\u6709\u4e00\u4e2a\u9009\u9879\uff0c\u53ef\u4ee5\u5c06\u70b9\u7684\u5750\u6807\u8f6c\u6362\u4e3a\u7cfb\u7edf\u5355\u4f4d\uff08\u7c73\uff09\u6216\u5f53\u524d\u5206\u914d\u7ed9\u6a21\u578b\u7684\u7528\u6237\u5355\u4f4d\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7\u66f4\u6539\u4e0b\u9762\u7684\u5e38\u91cf\u6765\u914d\u7f6e\u5b8f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged-bottom","jagged-bottom":!0},"Const CONVERT_TO_USER_UNIT As Boolean = True 'True\u8868\u793a\u4f7f\u7528\u5f53\u524d\u6a21\u578b\u5355\u4f4d\uff0cFalse\u8868\u793a\u4f7f\u7528\u7cfb\u7edf\u5355\u4f4d\uff08\u7c73\uff09\nConst CONVERT_TO_MODEL_SPACE As Boolean = True '\u5bf9\u4e8e2D\u8349\u56fe\uff0cTrue\u8868\u793a\u5c06\u5750\u6807\u5bfc\u51fa\u5230\u8349\u56fe\u7a7a\u95f4\uff0cFalse\u8868\u793a\u5c06\u5750\u6807\u8f6c\u6362\u5230\u6a21\u578b\u7a7a\u95f4\nConst OUT_PATH As String = \"D:\\points.csv\" '\u8f93\u51fa\u6587\u4ef6\u7684\u5b8c\u6574\u8def\u5f84\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const CONVERT_TO_USER_UNIT As Boolean = True\nConst CONVERT_TO_MODEL_SPACE As Boolean = True\nConst OUT_PATH As String = "D:\\points.csv"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \ntry_:\n    On Error GoTo catch_\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If swModel Is Nothing Then\n        Err.Raise vbError, "", "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swSketchFeat As SldWorks.Feature\n    \n    Set swSketchFeat = swSelMgr.GetSelectedObject6(1, -1)\n    \n    Dim swSketch As SldWorks.sketch\n    \n    If Not swSketchFeat Is Nothing Then\n        Set swSketch = swSketchFeat.GetSpecificFeature2\n    End If\n    \n    If swSketch Is Nothing Then\n        Err.Raise vbError, "", "\u8bf7\u9009\u62e9\u8349\u56fe"\n    End If\n    \n    Dim vPts As Variant\n    vPts = ExtractPoints(swModel, swSketch, CONVERT_TO_MODEL_SPACE, CONVERT_TO_USER_UNIT)\n    \n    WritePointsToCsvFile OUT_PATH, vPts\n    \n    GoTo finally_\n        \ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n\nEnd Sub\n\nFunction ExtractPoints(model As SldWorks.ModelDoc2, sketch As SldWorks.sketch, convertCoordsToModelSpace As Boolean, convertCoordsToUserUnits As Boolean) As Variant\n    \n    Dim vSkPts As Variant\n    vSkPts = sketch.GetSketchPoints2()\n    \n    Dim i As Integer\n    \n    If IsEmpty(vSkPts) Then\n        Err.Raise vbError, "", "\u8349\u56fe\u4e2d\u6ca1\u6709\u70b9"\n    End If\n    \n    Dim vPts() As Variant\n    ReDim vPts(UBound(vSkPts))\n    \n    For i = 0 To UBound(vSkPts)\n        \n        Dim swSkPt As SldWorks.SketchPoint\n        Set swSkPt = vSkPts(i)\n        \n        Dim dPt(2) As Double\n        dPt(0) = swSkPt.X: dPt(1) = swSkPt.Y: dPt(2) = swSkPt.Z\n        \n        Dim vPt As Variant\n        vPt = dPt\n        \n        If convertCoordsToModelSpace Then\n            vPt = ConvertPointLocation(vPt, sketch.ModelToSketchTransform.Inverse())\n        End If\n        \n        If convertCoordsToUserUnits Then\n            vPt = ConvertToUserUnits(vPt, model)\n        End If\n        \n        vPts(i) = vPt\n        \n    Next\n    \n    ExtractPoints = vPts\n    \nEnd Function\n\nFunction ConvertPointLocation(pt As Variant, transform As SldWorks.MathTransform) As Variant\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(pt)\n    \n    Set swMathPt = swMathPt.MultiplyTransform(transform)\n    \n    ConvertPointLocation = swMathPt.ArrayData\n    \nEnd Function\n\nFunction ConvertToUserUnits(pt As Variant, model As SldWorks.ModelDoc2) As Variant\n    \n    Dim swUserUnits As SldWorks.UserUnit\n    Set swUserUnits = model.GetUserUnit(swUserUnitsType_e.swLengthUnit)\n    \n    Dim convFactor As Double\n    convFactor = swUserUnits.GetConversionFactor\n     \n    Dim dPt(2) As Double\n    \n    dPt(0) = pt(0) * convFactor\n    dPt(1) = pt(1) * convFactor\n    dPt(2) = pt(2) * convFactor\n    \n    ConvertToUserUnits = dPt\n    \nEnd Function\n\nSub WritePointsToCsvFile(filePath As String, vPts As Variant)\n    \n    Dim fileNmb As Integer\n    fileNmb = FreeFile\n    \n    Open filePath For Output As #fileNmb\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vPts)\n        \n        Print #fileNmb, vPts(i)(0) & "," & vPts(i)(1) & "," & vPts(i)(2)\n        \n    Next\n    \n    Close #fileNmb\n    \nEnd Sub\n')))}h.isMDXComponent=!0},49757:(t,n,e)=>{e.d(n,{Z:()=>o});const o="data:image/png;base64,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"},8406:(t,n,e)=>{e.d(n,{Z:()=>o});const o=e.p+"assets/images/sketch-points-0a9ef17b6d53ef0ad1e98927928f9390.png"}}]);