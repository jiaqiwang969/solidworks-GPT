"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[86226],{3905:(n,e,i)=>{i.d(e,{Zo:()=>m,kt:()=>c});var s=i(67294);function t(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function o(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,s)}return i}function r(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){t(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function a(n,e){if(null==n)return{};var i,s,t=function(n,e){if(null==n)return{};var i,s,t={},o=Object.keys(n);for(s=0;s<o.length;s++)i=o[s],e.indexOf(i)>=0||(t[i]=n[i]);return t}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(s=0;s<o.length;s++)i=o[s],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}var l=s.createContext({}),p=function(n){var e=s.useContext(l),i=e;return n&&(i="function"==typeof n?n(e):r(r({},e),n)),i},m=function(n){var e=p(n.components);return s.createElement(l.Provider,{value:e},n.children)},w="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return s.createElement(s.Fragment,{},e)}},D=s.forwardRef((function(n,e){var i=n.components,t=n.mdxType,o=n.originalType,l=n.parentName,m=a(n,["components","mdxType","originalType","parentName"]),w=p(i),D=t,c=w["".concat(l,".").concat(D)]||w[D]||d[D]||o;return i?s.createElement(c,r(r({ref:e},m),{},{components:i})):s.createElement(c,r({ref:e},m))}));function c(n,e){var i=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var o=i.length,r=new Array(o);r[0]=D;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a[w]="string"==typeof n?n:t,r[1]=a;for(var p=2;p<o;p++)r[p]=i[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,i)}D.displayName="MDXCreateElement"},13624:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var s=i(87462),t=(i(67294),i(3905));const o={layout:"sw-tool",title:"\u4eceSOLIDWORKS\u56fe\u7eb8\u5bfc\u51fa\u5c3a\u5bf8\u4fe1\u606f\u5230CSV\u6587\u4ef6",caption:"\u5bfc\u51fa\u5c3a\u5bf8\u4fe1\u606f"},r=void 0,a={unversionedId:"codestack/solidworks-api/document/drawing/export-dimensions/index",id:"codestack/solidworks-api/document/drawing/export-dimensions/index",title:"\u4eceSOLIDWORKS\u56fe\u7eb8\u5bfc\u51fa\u5c3a\u5bf8\u4fe1\u606f\u5230CSV\u6587\u4ef6",description:"VBA\u5b8f\u5c06SOLIDWORKS\u56fe\u7eb8\u4e2d\u7684\u5c3a\u5bf8\u4fe1\u606f\uff08\u540d\u79f0\u3001\u4f4d\u7f6e\u3001\u4f4d\u7f6e\u3001\u533a\u57df\u3001\u503c\u3001\u516c\u5dee\uff09\u5bfc\u51fa\u5230CSV\u6587\u4ef6\u4e2d",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/drawing/export-dimensions/index.md",sourceDirName:"codestack/solidworks-api/document/drawing/export-dimensions",slug:"/codestack/solidworks-api/document/drawing/export-dimensions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/export-dimensions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/drawing/export-dimensions/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4eceSOLIDWORKS\u56fe\u7eb8\u5bfc\u51fa\u5c3a\u5bf8\u4fe1\u606f\u5230CSV\u6587\u4ef6",caption:"\u5bfc\u51fa\u5c3a\u5bf8\u4fe1\u606f"},sidebar:"tutorialSidebar",previous:{title:"\u5728\u7ed8\u56fe\u89c6\u56fe\u8349\u56fe\u4e2d\u521b\u5efa\u8349\u56fe\u6bb5\u7684SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/drawing-view-sketch/"},next:{title:"\u4f7f\u7528VBA\u5b8f\u5728\u7ed8\u56fe\u4e2d\u5bfc\u51fa\u5c55\u5f00\u56fe\u89c6\u56fe",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/export-sheet-metal-views/"}},l={},p=[{value:"group: \u56fe\u7eb8",id:"group-\u56fe\u7eb8",level:2}],m={toc:p},w="wrapper";function d(n){let{components:e,...o}=n;return(0,t.kt)(w,(0,s.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"VBA\u5b8f\u5c06SOLIDWORKS\u56fe\u7eb8\u4e2d\u7684\u5c3a\u5bf8\u4fe1\u606f\uff08\u540d\u79f0\u3001\u4f4d\u7f6e\u3001\u4f4d\u7f6e\u3001\u533a\u57df\u3001\u503c\u3001\u516c\u5dee\uff09\u5bfc\u51fa\u5230CSV\u6587\u4ef6\u4e2d\nimage: export-dimensions.svg\nlabels: ","[\u5c3a\u5bf8,\u516c\u5dee,\u5bfc\u51fa,CSV]"),(0,t.kt)("h2",{id:"group-\u56fe\u7eb8"},"group: \u56fe\u7eb8"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"\u56fe\u7eb8\u89c6\u56fe\u4e2d\u7684\u5c3a\u5bf8",src:i(31456).Z,width:"538",height:"413"})),(0,t.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u5141\u8bb8\u5c06\u6d3b\u52a8\u56fe\u7eb8\u4e2d\u7684\u6240\u6709\u5c3a\u5bf8\u4fe1\u606f\u5bfc\u51fa\u5230\u53ef\u4ee5\u7528Excel\u6253\u5f00\u7684CSV\u6587\u4ef6\u4e2d\u3002"),(0,t.kt)("p",null,"\u5b8f\u5c06\u4ee5\u4e0b\u4fe1\u606f\u5305\u542b\u5728\u62a5\u544a\u4e2d\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u540d\u79f0 - \u5c3a\u5bf8\u7684\u5b8c\u6574\u540d\u79f0"),(0,t.kt)("li",{parentName:"ul"},"\u6240\u6709\u8005 - \u5c3a\u5bf8\u6240\u5c5e\u7684\u56fe\u7eb8\u89c6\u56fe\u6216\u56fe\u7eb8\u9875\u7684\u540d\u79f0"),(0,t.kt)("li",{parentName:"ul"},"\u7c7b\u578b - \u5c3a\u5bf8\u7684\u7c7b\u578b\uff08\u4f8b\u5982\u7ebf\u6027\u3001\u89d2\u5ea6\u3001\u5750\u6807\u7b49\uff09"),(0,t.kt)("li",{parentName:"ul"},"X - \u5c3a\u5bf8\u5728\u5f53\u524d\u56fe\u7eb8\u5355\u4f4d\u4e2d\u7684X\u4f4d\u7f6e"),(0,t.kt)("li",{parentName:"ul"},"Y - \u5c3a\u5bf8\u5728\u5f53\u524d\u56fe\u7eb8\u5355\u4f4d\u4e2d\u7684Y\u4f4d\u7f6e"),(0,t.kt)("li",{parentName:"ul"},"\u503c - \u5c3a\u5bf8\u5728\u5f53\u524d\u5355\u4f4d\u4e2d\u7684\u503c"),(0,t.kt)("li",{parentName:"ul"},"\u7f51\u683c\u53c2\u8003 - \u5c3a\u5bf8\u5728\u56fe\u7eb8\u7f51\u683c\u4e2d\u7684\u53c2\u8003\uff08\u4f8b\u5982A5\uff09"),(0,t.kt)("li",{parentName:"ul"},"\u516c\u5dee - \u5206\u914d\u7ed9\u8be5\u5c3a\u5bf8\u7684\u516c\u5dee\u7c7b\u578b\uff08\u4f8b\u5982\u57fa\u672c\u3001\u5bf9\u79f0\u7b49\uff09"),(0,t.kt)("li",{parentName:"ul"},"\u6700\u5c0f\u503c - \u516c\u5dee\u7684\u6700\u5c0f\u503c\uff08\u5f53\u524d\u5355\u4f4d\uff09"),(0,t.kt)("li",{parentName:"ul"},"\u6700\u5927\u503c - \u516c\u5dee\u7684\u6700\u5927\u503c\uff08\u5f53\u524d\u5355\u4f4d\uff09")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"\u5728Excel\u4e2d\u6253\u5f00\u7684\u5c3a\u5bf8\u4fe1\u606f",src:i(82447).Z,width:"713",height:"210"}),"{ width=600 }"),(0,t.kt)("p",null,"\u8f93\u51fa\u6587\u4ef6\u4fdd\u5b58\u5728\u4e0e\u539f\u59cb\u56fe\u7eb8\u76f8\u540c\u7684\u6587\u4ef6\u5939\u4e2d\uff0c\u547d\u540d\u4e3a",(0,t.kt)("em",{parentName:"p"},"[\u56fe\u7eb8\u540d\u79f0]","-dimensions.csv")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry_:\n    On Error GoTo catch_:\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If swDraw Is Nothing Then\n        Err.Raise vbError, "", "\u8bf7\u6253\u5f00\u56fe\u7eb8"\n    End If\n    \n    ExportDrawingDimensions swDraw\n    \n    GoTo finally_\n\ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n\nEnd Sub\n\nSub ExportDrawingDimensions(draw As SldWorks.DrawingDoc)\n    \n    Dim vSheets As Variant\n    vSheets = draw.GetViews\n\n    Dim fileNmb As Integer\n    fileNmb = FreeFile\n    \n    Dim filePath As String\n    filePath = draw.GetPathName\n    \n    If filePath = "" Then\n        Err.Raise vbError, "", "\u8bf7\u4fdd\u5b58\u56fe\u7eb8\u6587\u6863"\n    End If\n    \n    filePath = Left(filePath, InStrRev(filePath, ".") - 1) & "-dimensions.csv"\n    \n    Open filePath For Output As #fileNmb\n    \n    Dim header As String\n    header = Join("\u540d\u79f0", "\u6240\u6709\u8005", "\u7c7b\u578b", "X", "Y", "\u503c", "\u7f51\u683c\u53c2\u8003", "\u516c\u5dee", "\u6700\u5c0f\u503c", "\u6700\u5927\u503c")\n\n    Print #fileNmb, header\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vSheets)\n        \n        Dim vViews As Variant\n        vViews = vSheets(i)\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(vViews)\n            \n            Dim swView As SldWorks.view\n            Set swView = vViews(j)\n            \n            ExportViewDimensions swView, draw, fileNmb\n            \n        Next\n        \n    Next\n\n    Close #fileNmb\n    \nEnd Sub\n\nSub ExportViewDimensions(view As SldWorks.view, draw As SldWorks.DrawingDoc, fileNmb As Integer)\n    \n    Dim swDispDim As SldWorks.DisplayDimension\n    Set swDispDim = view.GetFirstDisplayDimension5\n    \n    Dim swSheet As SldWorks.Sheet\n    \n    Set swSheet = view.Sheet\n    \n    If swSheet Is Nothing Then\n        Set swSheet = draw.Sheet(view.name)\n    End If\n    \n    While Not swDispDim Is Nothing\n        \n        Dim swAnn As SldWorks.Annotation\n        Set swAnn = swDispDim.GetAnnotation\n        \n        Dim vPos As Variant\n        vPos = swAnn.GetPosition()\n        \n        Dim swDim As SldWorks.dimension\n        Set swDim = swDispDim.GetDimension2(0)\n                \n        Dim drwZone As String\n        drwZone = swSheet.GetDrawingZone(vPos(0), vPos(1))\n        vPos = GetPositionInDrawingUnits(vPos, draw)\n        \n        Dim tolType As String\n        Dim minVal As Double\n        Dim maxVal As Double\n        \n        GetDimensionTolerance draw, swDim, tolType, minVal, maxVal\n        \n        OutputDimensionData fileNmb, swDim.FullName, view.name, GetDimensionType(swDispDim), CDbl(vPos(0)), CDbl(vPos(1)), _\n                CDbl(swDim.GetValue3(swInConfigurationOpts_e.swThisConfiguration, Empty)(0)), _\n                drwZone, tolType, minVal, maxVal\n        \n        Set swDispDim = swDispDim.GetNext5\n        \n    Wend\n    \nEnd Sub\n\nFunction GetPositionInDrawingUnits(pos As Variant, draw As SldWorks.DrawingDoc) As Variant\n    \n    Dim dPt(1) As Double\n    dPt(0) = ConvertToUserUnits(draw, CDbl(pos(0)), swLengthUnit)\n    dPt(1) = ConvertToUserUnits(draw, CDbl(pos(1)), swLengthUnit)\n    \n    GetPositionInDrawingUnits = dPt\n    \nEnd Function\n\nFunction ConvertToUserUnits(model As SldWorks.ModelDoc2, val As Double, unitType As swUserUnitsType_e) As Double\n    \n    Dim swUserUnit As SldWorks.UserUnit\n    Set swUserUnit = model.GetUserUnit(unitType)\n    \n    Dim convFactor As Double\n    convFactor = swUserUnit.GetConversionFactor()\n    \n    ConvertToUserUnits = val * convFactor\n    \nEnd Function\n\n\nFunction GetDimensionType(dispDim As SldWorks.DisplayDimension) As String\n\n    Select Case dispDim.Type2\n        Case swDimensionType_e.swAngularDimension\n            GetDimensionType = "\u89d2\u5ea6"\n        Case swDimensionType_e.swArcLengthDimension\n            GetDimensionType = "\u5f27\u957f"\n        Case swDimensionType_e.swChamferDimension\n            GetDimensionType = "\u5012\u89d2"\n        Case swDimensionType_e.swDiameterDimension\n            GetDimensionType = "\u76f4\u5f84"\n        Case swDimensionType_e.swDimensionTypeUnknown\n            GetDimensionType = "\u672a\u77e5"\n        Case swDimensionType_e.swHorLinearDimension\n            GetDimensionType = "\u6c34\u5e73\u7ebf\u6027"\n        Case swDimensionType_e.swHorOrdinateDimension\n            GetDimensionType = "\u6c34\u5e73\u5750\u6807"\n        Case swDimensionType_e.swLinearDimension\n            GetDimensionType = "\u7ebf\u6027"\n        Case swDimensionType_e.swOrdinateDimension\n            GetDimensionType = "\u5750\u6807"\n        Case swDimensionType_e.swRadialDimension\n            GetDimensionType = "\u534a\u5f84"\n        Case swDimensionType_e.swScalarDimension\n            GetDimensionType = "\u6807\u91cf"\n        Case swDimensionType_e.swVertLinearDimension\n            GetDimensionType = "\u5782\u76f4\u7ebf\u6027"\n        Case swDimensionType_e.swVertOrdinateDimension\n            GetDimensionType = "\u5782\u76f4\u5750\u6807"\n        Case swDimensionType_e.swZAxisDimension\n            GetDimensionType = "Z\u8f74"\n    End Select\n    \nEnd Function\n\nSub GetDimensionTolerance(draw As SldWorks.DrawingDoc, swDim As SldWorks.dimension, ByRef tolType As String, ByRef minVal As Double, ByRef maxVal As Double)\n\n    Dim swTol As SldWorks.DimensionTolerance\n    Set swTol = swDim.Tolerance\n    \n    Select Case swTol.Type\n        Case swTolType_e.swTolBASIC\n            tolType = "\u57fa\u672c"\n        Case swTolType_e.swTolBILAT\n            tolType = "\u53cc\u5411"\n        Case swTolType_e.swTolBLOCK\n            tolType = "\u5757"\n        Case swTolType_e.swTolFIT\n            tolType = "\u914d\u5408"\n        Case swTolType_e.swTolFITTOLONLY\n            tolType = "\u4ec5\u914d\u5408\u516c\u5dee"\n        Case swTolType_e.swTolFITWITHTOL\n            tolType = "\u914d\u5408\u516c\u5dee"\n        Case swTolType_e.swTolGeneral\n            tolType = "\u5e38\u89c4"\n        Case swTolType_e.swTolLIMIT\n            tolType = "\u6781\u9650"\n        Case swTolType_e.swTolMAX\n            tolType = "\u6700\u5927"\n        Case swTolType_e.swTolMETRIC\n            tolType = "\u516c\u5236"\n        Case swTolType_e.swTolMIN\n            tolType = "\u6700\u5c0f"\n        Case swTolType_e.swTolNONE\n            tolType = "\u65e0"\n        Case swTolType_e.swTolSYMMETRIC\n            tolType = "\u5bf9\u79f0"\n    End Select\n\n    swTol.GetMinValue2 minVal\n    swTol.GetMaxValue2 maxVal\n    \n    Dim unitType As swUserUnitsType_e\n    \n    If swDim.GetType() = swDimensionParamType_e.swDimensionParamTypeDoubleAngular Then\n        unitType = swUserUnitsType_e.swAngleUnit\n    Else\n        unitType = swUserUnitsType_e.swLengthUnit\n    End If\n    \n    minVal = ConvertToUserUnits(draw, minVal, unitType)\n    maxVal = ConvertToUserUnits(draw, maxVal, unitType)\n    \nEnd Sub\n\nSub OutputDimensionData(fileNmb As Integer, dimName As String, owner As String, dimType As String, x As Double, y As Double, value As Double, gridRef As String, tol As String, min As Double, max As Double)\n    \n    Dim line As String\n    line = Join(dimName, owner, dimType, x, y, value, gridRef, tol, min, max)\n\n    Print #fileNmb, line\n    \nEnd Sub\n\nFunction Join(ParamArray parts() As Variant) As String\n    \n    Dim res As String\n    \n    If Not IsEmpty(parts) Then\n        Dim i As Integer\n        For i = 0 To UBound(parts)\n            res = res & IIf(i = 0, "", ", ") & parts(i)\n        Next\n    End If\n    \n    Join = res\n    \nEnd Function\n')))}d.isMDXComponent=!0},82447:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/dimensions-report-e768555e4ee27e90c5d8d2bb62d63053.png"},31456:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/drawing-view-536a370a0a31d333a69b13b6665eedc6.png"}}]);