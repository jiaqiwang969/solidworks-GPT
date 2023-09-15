"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[21307],{3905:(n,e,i)=>{i.d(e,{Zo:()=>p,kt:()=>u});var s=i(67294);function o(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function t(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,s)}return i}function r(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?t(Object(i),!0).forEach((function(e){o(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function a(n,e){if(null==n)return{};var i,s,o=function(n,e){if(null==n)return{};var i,s,o={},t=Object.keys(n);for(s=0;s<t.length;s++)i=t[s],e.indexOf(i)>=0||(o[i]=n[i]);return o}(n,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);for(s=0;s<t.length;s++)i=t[s],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(o[i]=n[i])}return o}var l=s.createContext({}),m=function(n){var e=s.useContext(l),i=e;return n&&(i="function"==typeof n?n(e):r(r({},e),n)),i},p=function(n){var e=m(n.components);return s.createElement(l.Provider,{value:e},n.children)},w="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return s.createElement(s.Fragment,{},e)}},c=s.forwardRef((function(n,e){var i=n.components,o=n.mdxType,t=n.originalType,l=n.parentName,p=a(n,["components","mdxType","originalType","parentName"]),w=m(i),c=o,u=w["".concat(l,".").concat(c)]||w[c]||d[c]||t;return i?s.createElement(u,r(r({ref:e},p),{},{components:i})):s.createElement(u,r({ref:e},p))}));function u(n,e){var i=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var t=i.length,r=new Array(t);r[0]=c;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a[w]="string"==typeof n?n:o,r[1]=a;for(var m=2;m<t;m++)r[m]=i[m];return s.createElement.apply(null,r)}return s.createElement.apply(null,i)}c.displayName="MDXCreateElement"},5388:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>m});var s=i(87462),o=(i(67294),i(3905));const t={layout:"sw-tool",title:"Export dimensions information from SOLIDWORKS drawing to CSV file",caption:"Export Dimensions Information"},r=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-dimensions/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-dimensions/index",title:"Export dimensions information from SOLIDWORKS drawing to CSV file",description:"VBA macro to export dimensions information (name, position, location, zone, value, tolerance) from SOLIDWORKS drawing to the CSV file",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-dimensions/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-dimensions",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-dimensions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-dimensions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-dimensions/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Export dimensions information from SOLIDWORKS drawing to CSV file",caption:"Export Dimensions Information"},sidebar:"tutorialSidebar",previous:{title:"Create sketch segments in drawing view sketch using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/drawing-view-sketch/"},next:{title:"Export flat pattern view in the drawing using VBA macro",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-sheet-metal-views/"}},l={},m=[{value:"group: Drawing",id:"group-drawing",level:2}],p={toc:m},w="wrapper";function d(n){let{components:e,...t}=n;return(0,o.kt)(w,(0,s.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"VBA macro to export dimensions information (name, position, location, zone, value, tolerance) from SOLIDWORKS drawing to the CSV file\nimage: export-dimensions.svg\nlabels: ","[dimensions,tolerance,export,csv]"),(0,o.kt)("h2",{id:"group-drawing"},"group: Drawing"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dimensions in the drawing view",src:i(51033).Z,width:"538",height:"413"})),(0,o.kt)("p",null,"This VBA macro allows to export information of all dimensions in the active drawing to the CSV file which can be opened by Excel."),(0,o.kt)("p",null,"Macro includes the following information into the report:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name - full name of the dimension"),(0,o.kt)("li",{parentName:"ul"},"Owner - name of the drawing view or sheet this dimension belongs to"),(0,o.kt)("li",{parentName:"ul"},"Type - type of the dimension (e.g. linear, angular, ordinate, etc.)"),(0,o.kt)("li",{parentName:"ul"},"X - X position of the dimension in the current drawing units"),(0,o.kt)("li",{parentName:"ul"},"Y - Y position of the dimension in the current drawing units"),(0,o.kt)("li",{parentName:"ul"},"Value - value of the dimension in the current units"),(0,o.kt)("li",{parentName:"ul"},"Grid Ref - reference of this dimension in the drawing grid (e.g. A5)"),(0,o.kt)("li",{parentName:"ul"},"Tolerance - type of the tolerance assigned to this dimension (e.g. basic, symmetric, etc.)"),(0,o.kt)("li",{parentName:"ul"},"Min - Minimum value of the tolerance in the current units"),(0,o.kt)("li",{parentName:"ul"},"Max - Maximum value of the tolerance in the current units")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dimensions information opened in Excel",src:i(71134).Z,width:"713",height:"210"}),"{ width=600 }"),(0,o.kt)("p",null,"Output file is saved into the same folder as original drawing and named ",(0,o.kt)("em",{parentName:"p"},"[drawing name]","-dimensions.csv")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry_:\n    On Error GoTo catch_:\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If swDraw Is Nothing Then\n        Err.Raise vbError, "", "Please open drawing"\n    End If\n    \n    ExportDrawingDimensions swDraw\n    \n    GoTo finally_\n\ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n\nEnd Sub\n\nSub ExportDrawingDimensions(draw As SldWorks.DrawingDoc)\n    \n    Dim vSheets As Variant\n    vSheets = draw.GetViews\n\n    Dim fileNmb As Integer\n    fileNmb = FreeFile\n    \n    Dim filePath As String\n    filePath = draw.GetPathName\n    \n    If filePath = "" Then\n        Err.Raise vbError, "", "Please save drawing document"\n    End If\n    \n    filePath = Left(filePath, InStrRev(filePath, ".") - 1) & "-dimensions.csv"\n    \n    Open filePath For Output As #fileNmb\n    \n    Dim header As String\n    header = Join("Name", "Owner", "Type", "X", "Y", "Value", "Grid Ref", "Tolerance", "Min", "Max")\n\n    Print #fileNmb, header\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vSheets)\n        \n        Dim vViews As Variant\n        vViews = vSheets(i)\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(vViews)\n            \n            Dim swView As SldWorks.view\n            Set swView = vViews(j)\n            \n            ExportViewDimensions swView, draw, fileNmb\n            \n        Next\n        \n    Next\n\n    Close #fileNmb\n    \nEnd Sub\n\nSub ExportViewDimensions(view As SldWorks.view, draw As SldWorks.DrawingDoc, fileNmb As Integer)\n    \n    Dim swDispDim As SldWorks.DisplayDimension\n    Set swDispDim = view.GetFirstDisplayDimension5\n    \n    Dim swSheet As SldWorks.Sheet\n    \n    Set swSheet = view.Sheet\n    \n    If swSheet Is Nothing Then\n        Set swSheet = draw.Sheet(view.name)\n    End If\n    \n    While Not swDispDim Is Nothing\n        \n        Dim swAnn As SldWorks.Annotation\n        Set swAnn = swDispDim.GetAnnotation\n        \n        Dim vPos As Variant\n        vPos = swAnn.GetPosition()\n        \n        Dim swDim As SldWorks.dimension\n        Set swDim = swDispDim.GetDimension2(0)\n                \n        Dim drwZone As String\n        drwZone = swSheet.GetDrawingZone(vPos(0), vPos(1))\n        vPos = GetPositionInDrawingUnits(vPos, draw)\n        \n        Dim tolType As String\n        Dim minVal As Double\n        Dim maxVal As Double\n        \n        GetDimensionTolerance draw, swDim, tolType, minVal, maxVal\n        \n        OutputDimensionData fileNmb, swDim.FullName, view.name, GetDimensionType(swDispDim), CDbl(vPos(0)), CDbl(vPos(1)), _\n                CDbl(swDim.GetValue3(swInConfigurationOpts_e.swThisConfiguration, Empty)(0)), _\n                drwZone, tolType, minVal, maxVal\n        \n        Set swDispDim = swDispDim.GetNext5\n        \n    Wend\n    \nEnd Sub\n\nFunction GetPositionInDrawingUnits(pos As Variant, draw As SldWorks.DrawingDoc) As Variant\n    \n    Dim dPt(1) As Double\n    dPt(0) = ConvertToUserUnits(draw, CDbl(pos(0)), swLengthUnit)\n    dPt(1) = ConvertToUserUnits(draw, CDbl(pos(1)), swLengthUnit)\n    \n    GetPositionInDrawingUnits = dPt\n    \nEnd Function\n\nFunction ConvertToUserUnits(model As SldWorks.ModelDoc2, val As Double, unitType As swUserUnitsType_e) As Double\n    \n    Dim swUserUnit As SldWorks.UserUnit\n    Set swUserUnit = model.GetUserUnit(unitType)\n    \n    Dim convFactor As Double\n    convFactor = swUserUnit.GetConversionFactor()\n    \n    ConvertToUserUnits = val * convFactor\n    \nEnd Function\n\n\nFunction GetDimensionType(dispDim As SldWorks.DisplayDimension) As String\n\n    Select Case dispDim.Type2\n        Case swDimensionType_e.swAngularDimension\n            GetDimensionType = "Angular"\n        Case swDimensionType_e.swArcLengthDimension\n            GetDimensionType = "ArcLength"\n        Case swDimensionType_e.swChamferDimension\n            GetDimensionType = "Chamfer"\n        Case swDimensionType_e.swDiameterDimension\n            GetDimensionType = "Diameter"\n        Case swDimensionType_e.swDimensionTypeUnknown\n            GetDimensionType = "Unknown"\n        Case swDimensionType_e.swHorLinearDimension\n            GetDimensionType = "HorLinear"\n        Case swDimensionType_e.swHorOrdinateDimension\n            GetDimensionType = "HorOrdinate"\n        Case swDimensionType_e.swLinearDimension\n            GetDimensionType = "Linear"\n        Case swDimensionType_e.swOrdinateDimension\n            GetDimensionType = "Ordinate"\n        Case swDimensionType_e.swRadialDimension\n            GetDimensionType = "Radial"\n        Case swDimensionType_e.swScalarDimension\n            GetDimensionType = "Scalar"\n        Case swDimensionType_e.swVertLinearDimension\n            GetDimensionType = "VertLinear"\n        Case swDimensionType_e.swVertOrdinateDimension\n            GetDimensionType = "VertOrdinate"\n        Case swDimensionType_e.swZAxisDimension\n            GetDimensionType = "ZAxis"\n    End Select\n    \nEnd Function\n\nSub GetDimensionTolerance(draw As SldWorks.DrawingDoc, swDim As SldWorks.dimension, ByRef tolType As String, ByRef minVal As Double, ByRef maxVal As Double)\n\n    Dim swTol As SldWorks.DimensionTolerance\n    Set swTol = swDim.Tolerance\n    \n    Select Case swTol.Type\n        Case swTolType_e.swTolBASIC\n            tolType = "Basic"\n        Case swTolType_e.swTolBILAT\n            tolType = "Bilat"\n        Case swTolType_e.swTolBLOCK\n            tolType = "Block"\n        Case swTolType_e.swTolFIT\n            tolType = "Fit"\n        Case swTolType_e.swTolFITTOLONLY\n            tolType = "FitTolOnly"\n        Case swTolType_e.swTolFITWITHTOL\n            tolType = "FitWithTol"\n        Case swTolType_e.swTolGeneral\n            tolType = "General"\n        Case swTolType_e.swTolLIMIT\n            tolType = "Limit"\n        Case swTolType_e.swTolMAX\n            tolType = "Max"\n        Case swTolType_e.swTolMETRIC\n            tolType = "Metric"\n        Case swTolType_e.swTolMIN\n            tolType = "Min"\n        Case swTolType_e.swTolNONE\n            tolType = "None"\n        Case swTolType_e.swTolSYMMETRIC\n            tolType = "Symmetric"\n    End Select\n\n    swTol.GetMinValue2 minVal\n    swTol.GetMaxValue2 maxVal\n    \n    Dim unitType As swUserUnitsType_e\n    \n    If swDim.GetType() = swDimensionParamType_e.swDimensionParamTypeDoubleAngular Then\n        unitType = swUserUnitsType_e.swAngleUnit\n    Else\n        unitType = swUserUnitsType_e.swLengthUnit\n    End If\n    \n    minVal = ConvertToUserUnits(draw, minVal, unitType)\n    maxVal = ConvertToUserUnits(draw, maxVal, unitType)\n    \nEnd Sub\n\nSub OutputDimensionData(fileNmb As Integer, dimName As String, owner As String, dimType As String, x As Double, y As Double, value As Double, gridRef As String, tol As String, min As Double, max As Double)\n    \n    Dim line As String\n    line = Join(dimName, owner, dimType, x, y, value, gridRef, tol, min, max)\n\n    Print #fileNmb, line\n    \nEnd Sub\n\nFunction Join(ParamArray parts() As Variant) As String\n    \n    Dim res As String\n    \n    If Not IsEmpty(parts) Then\n        Dim i As Integer\n        For i = 0 To UBound(parts)\n            res = res & IIf(i = 0, "", ", ") & parts(i)\n        Next\n    End If\n    \n    Join = res\n    \nEnd Function\n')))}d.isMDXComponent=!0},71134:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/dimensions-report-e768555e4ee27e90c5d8d2bb62d63053.png"},51033:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/drawing-view-536a370a0a31d333a69b13b6665eedc6.png"}}]);