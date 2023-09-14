"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[54483],{3905:(t,e,o)=>{o.d(e,{Zo:()=>d,kt:()=>u});var n=o(67294);function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){s(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function c(t,e){if(null==t)return{};var o,n,s=function(t,e){if(null==t)return{};var o,n,s={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(s[o]=t[o]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(s[o]=t[o])}return s}var a=n.createContext({}),l=function(t){var e=n.useContext(a),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},d=function(t){var e=l(t.components);return n.createElement(a.Provider,{value:e},t.children)},p="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,s=t.mdxType,r=t.originalType,a=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),p=l(o),m=s,u=p["".concat(a,".").concat(m)]||p[m]||h[m]||r;return o?n.createElement(u,i(i({ref:e},d),{},{components:o})):n.createElement(u,i({ref:e},d))}));function u(t,e){var o=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var r=o.length,i=new Array(r);i[0]=m;var c={};for(var a in e)hasOwnProperty.call(e,a)&&(c[a]=e[a]);c.originalType=t,c[p]="string"==typeof t?t:s,i[1]=c;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},19240:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=o(87462),s=(o(67294),o(3905));const r={layout:"sw-tool",title:"VBA macro to export sketch point coordinates to CSV file",caption:"Export Sketch Coordinates",description:"VBA macro to export coordinates of sketch points from the selected sketch with an ability to convert coordinate to user units and into the model space",image:"export-coordinates.svg",labels:["sketch","export","points","coordinates","csv"],group:"Sketch"},i=void 0,c={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-point-coordinates/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-point-coordinates/index",title:"VBA macro to export sketch point coordinates to CSV file",description:"VBA macro to export coordinates of sketch points from the selected sketch with an ability to convert coordinate to user units and into the model space",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-point-coordinates/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-point-coordinates",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-point-coordinates/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-point-coordinates/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-point-coordinates/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"VBA macro to export sketch point coordinates to CSV file",caption:"Export Sketch Coordinates",description:"VBA macro to export coordinates of sketch points from the selected sketch with an ability to convert coordinate to user units and into the model space",image:"export-coordinates.svg",labels:["sketch","export","points","coordinates","csv"],group:"Sketch"},sidebar:"tutorialSidebar",previous:{title:"Macro to export selected sketch in SOLIDWORKS file to DXF/DWG file",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-dxf-dwg/"},next:{title:"Get selected sketch segments info using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/get-selected-sketch-segments-info/"}},a={},l=[],d={toc:l},p="wrapper";function h(t){let{components:e,...r}=t;return(0,s.kt)(p,(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Sketch points in the selected sketch",src:o(6573).Z,width:"990",height:"537"}),"{ width=500 }"),(0,s.kt)("p",null,"This VBA macro allows to export the coordinates of all sketch points from the selected sketch into the CSV file."),(0,s.kt)("p",null,"CSV file can be opened in Excel"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Sketch points coordinates opened in Excel",src:o(32474).Z,width:"215",height:"188"})),(0,s.kt)("p",null,"Macro has an option to export coordinates in the sketch space (XY for 2D sketch) or in the model space (XYZ). Macro has an option to convert the points coordinates to system units (meters) or user units, currently assigned to the model."),(0,s.kt)("p",null,"Configure the macro by changing the constants below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged-bottom","jagged-bottom":!0},"Const CONVERT_TO_USER_UNIT As Boolean = True 'True to use the current model units, False to use system units (meters)\nConst CONVERT_TO_MODEL_SPACE As Boolean = True 'For 2D Sketches, True to export coordinates in the sketch space, False to convert coordinates to the model space\nConst OUT_PATH As String = \"D:\\points.csv\" 'Full path to the output file\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const CONVERT_TO_USER_UNIT As Boolean = True\nConst CONVERT_TO_MODEL_SPACE As Boolean = True\nConst OUT_PATH As String = "D:\\points.csv"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \ntry_:\n    On Error GoTo catch_\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If swModel Is Nothing Then\n        Err.Raise vbError, "", "Please open model"\n    End If\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swSketchFeat As SldWorks.Feature\n    \n    Set swSketchFeat = swSelMgr.GetSelectedObject6(1, -1)\n    \n    Dim swSketch As SldWorks.sketch\n    \n    If Not swSketchFeat Is Nothing Then\n        Set swSketch = swSketchFeat.GetSpecificFeature2\n    End If\n    \n    If swSketch Is Nothing Then\n        Err.Raise vbError, "", "Please select sketch"\n    End If\n    \n    Dim vPts As Variant\n    vPts = ExtractPoints(swModel, swSketch, CONVERT_TO_MODEL_SPACE, CONVERT_TO_USER_UNIT)\n    \n    WritePointsToCsvFile OUT_PATH, vPts\n    \n    GoTo finally_\n        \ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n\nEnd Sub\n\nFunction ExtractPoints(model As SldWorks.ModelDoc2, sketch As SldWorks.sketch, convertCoordsToModelSpace As Boolean, convertCoordsToUserUnits As Boolean) As Variant\n    \n    Dim vSkPts As Variant\n    vSkPts = sketch.GetSketchPoints2()\n    \n    Dim i As Integer\n    \n    If IsEmpty(vSkPts) Then\n        Err.Raise vbError, "", "Sketch contains no points"\n    End If\n    \n    Dim vPts() As Variant\n    ReDim vPts(UBound(vSkPts))\n    \n    For i = 0 To UBound(vSkPts)\n        \n        Dim swSkPt As SldWorks.SketchPoint\n        Set swSkPt = vSkPts(i)\n        \n        Dim dPt(2) As Double\n        dPt(0) = swSkPt.X: dPt(1) = swSkPt.Y: dPt(2) = swSkPt.Z\n        \n        Dim vPt As Variant\n        vPt = dPt\n        \n        If convertCoordsToModelSpace Then\n            vPt = ConvertPointLocation(vPt, sketch.ModelToSketchTransform.Inverse())\n        End If\n        \n        If convertCoordsToUserUnits Then\n            vPt = ConvertToUserUnits(vPt, model)\n        End If\n        \n        vPts(i) = vPt\n        \n    Next\n    \n    ExtractPoints = vPts\n    \nEnd Function\n\nFunction ConvertPointLocation(pt As Variant, transform As SldWorks.MathTransform) As Variant\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(pt)\n    \n    Set swMathPt = swMathPt.MultiplyTransform(transform)\n    \n    ConvertPointLocation = swMathPt.ArrayData\n    \nEnd Function\n\nFunction ConvertToUserUnits(pt As Variant, model As SldWorks.ModelDoc2) As Variant\n    \n    Dim swUserUnits As SldWorks.UserUnit\n    Set swUserUnits = model.GetUserUnit(swUserUnitsType_e.swLengthUnit)\n    \n    Dim convFactor As Double\n    convFactor = swUserUnits.GetConversionFactor\n     \n    Dim dPt(2) As Double\n    \n    dPt(0) = pt(0) * convFactor\n    dPt(1) = pt(1) * convFactor\n    dPt(2) = pt(2) * convFactor\n    \n    ConvertToUserUnits = dPt\n    \nEnd Function\n\nSub WritePointsToCsvFile(filePath As String, vPts As Variant)\n    \n    Dim fileNmb As Integer\n    fileNmb = FreeFile\n    \n    Open filePath For Output As #fileNmb\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vPts)\n        \n        Print #fileNmb, vPts(i)(0) & "," & vPts(i)(1) & "," & vPts(i)(2)\n        \n    Next\n    \n    Close #fileNmb\n    \nEnd Sub\n')))}h.isMDXComponent=!0},32474:(t,e,o)=>{o.d(e,{Z:()=>n});const n="data:image/png;base64,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"},6573:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/sketch-points-0a9ef17b6d53ef0ad1e98927928f9390.png"}}]);