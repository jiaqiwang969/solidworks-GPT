"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[93489],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>b});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=o,b=u["".concat(i,".").concat(p)]||u[p]||d[p]||l;return t?a.createElement(b,r(r({ref:n},m),{},{components:t})):a.createElement(b,r({ref:n},m))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},53651:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const l={title:"SOLIDWORKS\u5b8f\u529f\u80fd\u4ee5\u5c06\u901a\u7528\u8868\u683c\u94fe\u63a5\u5e76\u81ea\u52a8\u66f4\u65b0\u5230Excel",caption:"\u94fe\u63a5\u5e76\u81ea\u52a8\u66f4\u65b0\u901a\u7528\u8868\u683c\u5230Excel"},r=void 0,s={unversionedId:"codestack/solidworks-api/document/macro-feature/general-table-link-excel/index",id:"codestack/solidworks-api/document/macro-feature/general-table-link-excel/index",title:"SOLIDWORKS\u5b8f\u529f\u80fd\u4ee5\u5c06\u901a\u7528\u8868\u683c\u94fe\u63a5\u5e76\u81ea\u52a8\u66f4\u65b0\u5230Excel",description:"\u4f7f\u7528SOLIDWORKS API\uff0c\u5b8f\u5141\u8bb8\u5c06\u901a\u7528\u8868\u683c\u94fe\u63a5\u5230\u5916\u90e8Excel\u6216\u6587\u672c/CSV\u6587\u4ef6\uff0c\u5e76\u81ea\u52a8\u66f4\u65b0\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/macro-feature/general-table-link-excel/index.md",sourceDirName:"codestack/solidworks-api/document/macro-feature/general-table-link-excel",slug:"/codestack/solidworks-api/document/macro-feature/general-table-link-excel/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/macro-feature/general-table-link-excel/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/macro-feature/general-table-link-excel/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS\u5b8f\u529f\u80fd\u4ee5\u5c06\u901a\u7528\u8868\u683c\u94fe\u63a5\u5e76\u81ea\u52a8\u66f4\u65b0\u5230Excel",caption:"\u94fe\u63a5\u5e76\u81ea\u52a8\u66f4\u65b0\u901a\u7528\u8868\u683c\u5230Excel"},sidebar:"tutorialSidebar",previous:{title:"\u7528\u4e8e\u914d\u7f6e\u6a21\u578b\u5c3a\u5bf8\u7684\u5b8f\u7279\u5f81",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/macro-feature/configurator/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u751f\u6210\u76d2\u5b50\u51e0\u4f55\u4f53\uff08\u5b9e\u4f53\u3001\u9762\u3001\u7ebf\uff09\u5b8f\u7279\u5f81",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/macro-feature/geometry/"}},i={},c=[{value:"labels: general table, excel, link, macro feature",id:"labels-general-table-excel-link-macro-feature",level:2},{value:"\u6ce8\u610f\u4e8b\u9879\u548c\u9650\u5236",id:"\u6ce8\u610f\u4e8b\u9879\u548c\u9650\u5236",level:2}],m={toc:c},u="wrapper";function d(e){let{components:n,...l}=e;return(0,o.kt)(u,(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\uff0c\u5b8f\u5141\u8bb8\u5c06\u901a\u7528\u8868\u683c\u94fe\u63a5\u5230\u5916\u90e8Excel\u6216\u6587\u672c/CSV\u6587\u4ef6\uff0c\u5e76\u81ea\u52a8\u66f4\u65b0\u3002\nimage: linked-excel-table.png"),(0,o.kt)("h2",{id:"labels-general-table-excel-link-macro-feature"},"labels: ","[general table, excel, link, macro feature]"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5728\u7279\u5f81\u6811\u4e2d\u7684\u94fe\u63a5\u8868\u683c\u5b8f\u529f\u80fd",src:t(64622).Z,width:"925",height:"251"}),"{ width=350 }"),(0,o.kt)("p",null,"\u6b64\u5b8f\u5141\u8bb8\u5728\u96f6\u4ef6\u3001\u88c5\u914d\u548c\u7ed8\u56fe\u4e2d\u521b\u5efa\u901a\u7528\u8868\u683c\uff0c\u5e76\u4f7f\u7528SOLIDWORKS API\u5c06\u5176\u94fe\u63a5\u5230\u5916\u90e8Excel\u6216\u6587\u672c/CSV\u6587\u4ef6\u3002\u6b64\u5b8f\u5b9e\u73b0\u4e3a\u5d4c\u5165\u5f0f\u5b8f\u529f\u80fd\uff0c\u8fd9\u610f\u5473\u7740\u4e00\u65e6\u6a21\u578b\u91cd\u5efa\uff0c\u8868\u683c\u5c06\u81ea\u52a8\u66f4\u65b0\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5b8f"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e00\u4e2a\u63d0\u793a\u5bf9\u8bdd\u6846\u4e2d\u6307\u5b9aExcel\uff08",(0,o.kt)("em",{parentName:"li"},".xls\u6216"),".xlsx\uff09\u6216\u9017\u53f7\u5206\u9694\u7684\u6587\u672c\u6587\u4ef6\uff08",(0,o.kt)("em",{parentName:"li"},".csv\u6216"),".txt\uff09\u7684\u5b8c\u6574\u8def\u5f84"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u9009\u62e9\u6307\u5b9a\u8981\u4ece\u4e2d\u8bfb\u53d6\u6570\u636e\u7684\u7535\u5b50\u8868\u683c\u7684\u540d\u79f0\u3002\u5982\u679c\u6307\u5b9a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u4f7f\u7528\u7b2c\u4e00\u4e2a\u7535\u5b50\u8868\u683c")),(0,o.kt)("p",null,"\u5b8f\u5c06\u63d2\u5165\u8868\u683c\u548c\u5b8f\u529f\u80fd\u5230\u7279\u5f81\u6811\u4e2d\uff0c\u5e76\u4f7f\u7528\u6765\u81ea\u5916\u90e8\u6587\u4ef6\u7684\u6570\u636e\u3002\u4fee\u6539\u6587\u4ef6\u6216\u901a\u7528\u8868\u683c\u5e76\u91cd\u65b0\u6784\u5efa\u6a21\u578b-\u8868\u683c\u5c06\u88ab\u66f4\u65b0\u3002"),(0,o.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879\u548c\u9650\u5236"},"\u6ce8\u610f\u4e8b\u9879\u548c\u9650\u5236"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4ec5\u652f\u6301\u7b80\u5355\u7684CSV\u6587\u4ef6\uff08\u5373\u7b80\u5355\u7684\u9017\u53f7\u5206\u9694\u503c\uff0c\u4e0d\u652f\u6301\u6362\u884c\u7b26\u6216\u503c\u4e2d\u7684\u9017\u53f7\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528CSV\u6587\u4ef6\u65f6\u4e0d\u9700\u8981Excel"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528CSV\u6587\u4ef6\u5177\u6709\u663e\u7740\u7684\u6027\u80fd\u4f18\u52bf\uff0c\u56e0\u4e3a\u65e0\u9700\u542f\u52a8Excel\u548c\u52a0\u8f7d\u6587\u6863\u5373\u53ef\u83b7\u53d6\u6570\u636e\u3002\u5728\u9002\u7528\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u6b64\u9009\u9879"),(0,o.kt)("li",{parentName:"ul"},"Excel\u4ee5\u4e0d\u53ef\u89c1\u65b9\u5f0f\u663e\u793a\uff0c\u5e76\u4e14\u4f1a\u7f13\u5b58\u4f1a\u8bdd\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\u4f18\u52bf"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u5c06CSV\u6216Excel\u6587\u4ef6\u4fdd\u5b58\u76f8\u5bf9\u4e8e\u6a21\u578b-\u5c06\u7ef4\u62a4\u76f8\u5bf9\u8def\u5f84\u3002\u8fd9\u610f\u5473\u7740SOLIDWORKS\u6587\u4ef6\u53ef\u4ee5\u4e0eExcel/CSV\u4e00\u8d77\u79fb\u52a8\uff0c\u94fe\u63a5\u4e0d\u4f1a\u4e2d\u65ad"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u5728\u63d2\u5165\u65b0\u7279\u5f81\u65f6\u9009\u62e9\u4e86\u901a\u7528\u8868\u683c-\u5c06\u4f7f\u7528\u6b64\u8868\u683c\u800c\u4e0d\u662f\u521b\u5efa\u65b0\u8868\u683c"),(0,o.kt)("li",{parentName:"ul"},"\u76ee\u524d\u65e0\u6cd5\u66f4\u6539\u5916\u90e8Excel\u6587\u4ef6\u7684\u8def\u5f84\u3002\u8bf7\u5220\u9664\u5b8f\u529f\u80fd\uff0c\u7136\u540e\u901a\u8fc7\u9009\u62e9\u901a\u7528\u8868\u683c\u91cd\u65b0\u63d2\u5165\u5b83\uff08\u53c2\u89c1\u4e0a\u4e00\u70b9\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u5b8f\u529f\u80fd\u5d4c\u5165\u5230\u6a21\u578b\u4e2d\uff0c\u8fd9\u610f\u5473\u7740\u5373\u4f7f\u6b64\u5b8f\u4e0d\u53ef\u7528\uff0c\u8868\u683c\u4e5f\u5c06\u5728\u4efb\u4f55\u5176\u4ed6\u5de5\u4f5c\u7ad9\u4e0a\u66f4\u65b0\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const BASE_NAME As String = "LinkedTable"\n\nConst PARAM_EXCEL_PATH As String = "ExcelPath"\nConst PARAM_SHEET_NAME As String = "SheetName"\n\nSub main()\n\n    Dim swApp As SldWorks.SldWorks\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim excelFilePath As String\n        Dim excelSheetName As String\n\n        excelFilePath = InputBox("\u5728\u7b2c\u4e00\u4e2a\u63d0\u793a\u5bf9\u8bdd\u6846\u4e2d\u6307\u5b9aExcel\u6216\u6587\u672c/CSV\u6587\u4ef6\u7684\u5b8c\u6574\u8def\u5f84")\n        excelSheetName = InputBox("\u4e3aExcel\u6587\u4ef6\u6307\u5b9a\u5de5\u4f5c\u8868\u540d\u79f0\uff08\u5bf9\u4e8e\u7b2c\u4e00\u4e2a\u5de5\u4f5c\u8868\u6307\u5b9a\u7a7a\u5b57\u7b26\u4e32\uff09")\n        \n        If excelFilePath = "" Then\n            Exit Sub\n        End If\n        \n        excelFilePath = UpdateRelativePath(swModel, excelFilePath)\n        \n        Dim curMacroPath As String\n        curMacroPath = swApp.GetCurrentMacroPathName\n        Dim vMethods(8) As String\n        Dim moduleName As String\n        \n        GetMacroEntryPoint swApp, curMacroPath, moduleName, ""\n        \n        vMethods(0) = curMacroPath: vMethods(1) = moduleName: vMethods(2) = "swmRebuild"\n        vMethods(3) = curMacroPath: vMethods(4) = moduleName: vMethods(5) = "swmEditDefinition"\n        vMethods(6) = curMacroPath: vMethods(7) = moduleName: vMethods(8) = "swmSecurity"\n        \n        Dim vParamNames(1) As String\n        vParamNames(0) = PARAM_EXCEL_PATH\n        vParamNames(1) = PARAM_SHEET_NAME\n\n        Dim vParamTypes(1) As Long\n        vParamTypes(0) = swMacroFeatureParamType_e.swMacroFeatureParamTypeString\n        vParamTypes(1) = swMacroFeatureParamType_e.swMacroFeatureParamTypeString\n\n        Dim vParamValues(1) As String\n\n        vParamValues(0) = excelFilePath\n        vParamValues(1) = excelSheetName\n\n        Dim swTable As SldWorks.TableAnnotation\n        Set swTable = TryGetSelectedTable(swModel)\n        If swTable Is Nothing Then\n            Dim emptyTable(2, 2) As String\n            Set swTable = CreateTableFromArray(swModel, emptyTable)\n        End If\n        \n        swTable.GetAnnotation().Select3 False, Nothing\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swModel.FeatureManager.InsertMacroFeature3(BASE_NAME, "", vMethods, _\n            vParamNames, vParamTypes, vParamValues, Empty, Empty, Empty, _\n            Empty, swMacroFeatureOptions_e.swMacroFeatureEmbedMacroFile + swMacroFeatureOptions_e.swMacroFeatureAlwaysAtEnd)\n        \n        If swFeat Is Nothing Then\n            MsgBox "\u65e0\u6cd5\u521b\u5efa\u5b8f\u8fd0\u884c\u7a0b\u5e8f"\n        End If\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n\nFunction UpdateRelativePath(model As SldWorks.ModelDoc2, path As String) As String\n    \n    Dim modelPath As String\n    modelPath = model.GetPathName\n    \n    UpdateRelativePath = path\n    \n    If modelPath <> "" Then\n        Dim modelDir As String\n        modelDir = Left(modelPath, InStrRev(modelPath, "\\"))\n        \n        If LCase(path) Like LCase(modelDir) & "*" Then\n            UpdateRelativePath = Right(path, Len(path) - Len(modelDir) + 1)\n        End If\n        \n    End If\n    \nEnd Function\n\nFunction GetFullPath(model As SldWorks.ModelDoc2, path As String)\n    \n    GetFullPath = path\n    \n    Dim isRelative As Boolean\n    isRelative = Left(path, 1) = "\\"\n    \n    If isRelative Then\n        \n        Dim modelPath As String\n        Dim modelDir As String\n        \n        modelPath = model.GetPathName\n        \n        modelDir = Left(modelPath, InStrRev(modelPath, "\\") - 1)\n        \n        GetFullPath = modelDir & path\n        \n    End If\n    \nEnd Function\n\nFunction TryGetSelectedTable(model As SldWorks.ModelDoc2) As SldWorks.TableAnnotation\n    \n    On Error Resume Next\n    \n    Dim swTable As SldWorks.TableAnnotation\n    Set swTable = model.SelectionManager.GetSelectedObject6(1, -1)\n    \n    If swTable Is Nothing Then\n        \n        Dim swTableFeat As SldWorks.GeneralTableFeature\n        Set swTableFeat = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swTableFeat Is Nothing Then\n            Set swTable = swTableFeat.GetTableAnnotations()(0)\n        End If\n        \n    End If\n    \n    Set TryGetSelectedTable = swTable\n    \nEnd Function\n\nFunction CreateTableFromArray(model As SldWorks.ModelDoc2, vTableData As Variant) As SldWorks.TableAnnotation\n    \n    Dim swTable As SldWorks.TableAnnotation\n    Set swTable = model.Extension.InsertGeneralTableAnnotation(True, 0, 0, swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_BottomLeft, "", UBound(vTableData, 1), UBound(vTableData, 2))\n    \n    FillTable swTable, vTableData\n    \n    Set CreateTableFromArray = swTable\n    \nEnd Function\n\nSub FillTable(table As SldWorks.TableAnnotation, vTableData As Variant)\n    \n    Dim rowIndex As Integer\n    Dim columnIndex As Integer\n    \n    Dim rowsCount As Integer\n    Dim colsCount As Integer\n    Dim i As Integer\n    \n    rowsCount = UBound(vTableData, 1)\n    colsCount = UBound(vTableData, 2)\n    \n    If table.columnCount > colsCount Then\n        For i = colsCount To table.columnCount - 1\n            table.DeleteColumn2 table.columnCount - 1, True\n        Next\n    ElseIf table.columnCount < colsCount Then\n        For i = table.columnCount To colsCount - 1\n            table.InsertColumn2 swTableItemInsertPosition_e.swTableItemInsertPosition_Last, -1, "", swInsertTableColumnWidthStyle_e.swInsertColumn_DefaultWidth\n        Next\n    End If\n    \n    If table.rowCount > rowsCount Then\n        For i = rowsCount To table.rowCount - 1\n            table.DeleteRow2 table.rowCount - 1, True\n        Next\n    ElseIf table.rowCount < rowsCount Then\n        For i = table.rowCount To rowsCount - 1\n            table.InsertRow swTableItemInsertPosition_e.swTableItemInsertPosition_Last, -1\n        Next\n    End If\n    \n    For rowIndex = 0 To UBound(vTableData, 1)\n        For columnIndex = 0 To UBound(vTableData, 2)\n            table.Text(rowIndex, columnIndex) = vTableData(rowIndex, columnIndex)\n        Next\n    Next\n    \nEnd Sub\n\nSub GetMacroEntryPoint(app As SldWorks.SldWorks, macroPath As String, ByRef moduleName As String, ByRef procName As String)\n        \n    Dim vMethods As Variant\n    vMethods = app.GetMacroMethods(macroPath, swMacroMethods_e.swMethodsWithoutArguments)\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(vMethods) Then\n    \n        For i = 0 To UBound(vMethods)\n            Dim vData As Variant\n            vData = Split(vMethods(i), ".")\n            \n            If i = 0 Or LCase(vData(1)) = "main" Then\n                moduleName = vData(0)\n                procName = vData(1)\n            End If\n        Next\n        \n    End If\n    \nEnd Sub\n\nFunction GetArrayFromExcel(filePath As String, sheetName As String) As Variant\n    \n    Dim xlApp As Object\n    \n    Dim tableData() As String\n    \n    Set xlApp = GetObject("", "Excel.Application")\n        \n    Dim xlWorkbook As Object\n    Dim xlWorksheet As Object\n\n    Dim closeWorkbook As Boolean\n    closeWorkbook = Not IsWorkbookOpen(xlApp, filePath)\n    \n    Set xlWorkbook = xlApp.Workbooks.Open(filePath)\n    \n    If sheetName <> "" Then\n        Set xlWorksheet = xlWorkbook.Sheets(sheetName)\n    Else\n        Set xlWorksheet = xlWorkbook.Sheets(1)\n    End If\n    \n    Dim rowIndex As Integer\n    Dim columnIndex As Integer\n    \n    ReDim tableData(xlWorksheet.UsedRange.rows.Count, xlWorksheet.UsedRange.Columns.Count)\n    \n    For rowIndex = 1 To xlWorksheet.UsedRange.rows.Count\n        For columnIndex = 1 To xlWorksheet.UsedRange.Columns.Count\n            Dim cellVal As String\n            cellVal = xlWorksheet.Cells(rowIndex, columnIndex).Value\n            tableData(rowIndex - 1, columnIndex - 1) = cellVal\n        Next\n    Next\n    \n    GetArrayFromExcel = tableData\n    \n    If closeWorkbook Then\n        xlWorkbook.Close SaveChanges:=False\n    End If\n    \nEnd Function\n\nFunction GetArrayFromCsv(filePath As String) As Variant\n    \n    Dim fileNo As Integer\n\n    fileNo = FreeFile\n    \n    Dim rows As Collection\n    Set rows = New Collection\n    \n    Open filePath For Input As #fileNo\n    \n    Do While Not EOF(fileNo)\n        \n        Dim tableRow As String\n        \n        Line Input #fileNo, tableRow\n            \n        Dim vCells As Variant\n        vCells = Split(tableRow, ",")\n        rows.Add vCells\n    \n    Loop\n    \n    Close #fileNo\n    \n    Dim tableData() As String\n\n    Dim rowCount As Integer\n    Dim columnCount As Integer\n    rowCount = rows.Count\n    columnCount = UBound(rows(1)) + 1\n    \n    Dim rowIndex As Integer\n    Dim columnIndex As Integer\n    \n    ReDim tableData(rowCount, columnCount)\n    \n    For rowIndex = 1 To rowCount\n        Dim vRow As Variant\n        vRow = rows.Item(rowIndex)\n        \n        For columnIndex = 1 To columnCount\n            Dim cellVal As String\n            cellVal = vRow(columnIndex - 1)\n            tableData(rowIndex - 1, columnIndex - 1) = cellVal\n        Next\n    Next\n    \n    GetArrayFromCsv = tableData\n    \nEnd Function\n\nFunction IsWorkbookOpen(xlApp As Object, filePath As String) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To xlApp.Workbooks.Count\n        If LCase(xlApp.Workbooks(i).FullName) = LCase(filePath) Then\n            IsWorkbookOpen = True\n            Exit Function\n        End If\n    Next\n    \n    IsWorkbookOpen = False\n    \nEnd Function\n\nFunction swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n\n    Dim swApp As SldWorks.SldWorks\n    Dim swModel As SldWorks.ModelDoc2\n    Dim swFeat As SldWorks.Feature\n    \n    Set swApp = varApp\n    Set swModel = varDoc\n    Set swFeat = varFeat\n    \n    Dim swMacroFeat As SldWorks.MacroFeatureData\n    Set swMacroFeat = swFeat.GetDefinition()\n    \n    Dim excelFileName As String\n    Dim excelSheetName As String\n    \n    swMacroFeat.GetStringByName PARAM_EXCEL_PATH, excelFileName\n    swMacroFeat.GetStringByName PARAM_SHEET_NAME, excelSheetName\n    \n    Dim vObjects As Variant\n    swMacroFeat.GetSelections3 vObjects, Empty, Empty, Empty, Empty\n    \n    Dim swTable As SldWorks.TableAnnotation\n    Set swTable = vObjects(0)\n    \n    If swTable Is Nothing Then\n        swmRebuild = "\u94fe\u63a5\u7684\u901a\u7528\u8868\u683c\u4e22\u5931"\n        Exit Function\n    End If\n    \n    excelFileName = GetFullPath(swModel, excelFileName)\n    \n    If Dir(excelFileName) = "" Then\n        swmRebuild = "\u94fe\u63a5\u7684Excel\u6587\u4ef6\u4e22\u5931\uff1a" & excelFileName\n        Exit Function\n    End If\n    \n    Dim vTable As Variant\n    \n    Dim fileExt As String\n    fileExt = Right(excelFileName, Len(excelFileName) - InStrRev(excelFileName, "."))\n    \n    Dim isExcel As Boolean\n    isExcel = LCase(fileExt) = "xls" Or LCase(fileExt) = "xlsx"\n    \n    If isExcel Then\n        vTable = GetArrayFromExcel(excelFileName, excelSheetName)\n    Else\n        vTable = GetArrayFromCsv(excelFileName)\n    End If\n    \n    FillTable swTable, vTable\n    \nEnd Function\n\nFunction swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmEditDefinition = True\nEnd Function\n\nFunction swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmSecurity = SwConst.swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityByDefault\nEnd Function\n')))}d.isMDXComponent=!0},64622:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/linked-excel-table-4469e27b40844776cefd501b75f31d0e.png"}}]);