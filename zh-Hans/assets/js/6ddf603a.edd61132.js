"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[3487],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>b});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(t),p=o,b=d["".concat(s,".").concat(p)]||d[p]||u[p]||l;return t?a.createElement(b,r(r({ref:n},m),{},{components:t})):a.createElement(b,r({ref:n},m))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const l={title:"SOLIDWORKS macro feature to link and auto update general table to Excel",caption:"Link And Auto Update General Table To Excel",description:"Macro allows to link and automatically update the general table to external Excel or text/CSV file using SOLIDWORKS API",image:"linked-excel-table.png",labels:["general table","excel","link","macro feature"]},r=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/general-table-link-excel/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/general-table-link-excel/index",title:"SOLIDWORKS macro feature to link and auto update general table to Excel",description:"Macro allows to link and automatically update the general table to external Excel or text/CSV file using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/general-table-link-excel/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/general-table-link-excel",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/general-table-link-excel/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/general-table-link-excel/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/general-table-link-excel/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS macro feature to link and auto update general table to Excel",caption:"Link And Auto Update General Table To Excel",description:"Macro allows to link and automatically update the general table to external Excel or text/CSV file using SOLIDWORKS API",image:"linked-excel-table.png",labels:["general table","excel","link","macro feature"]},sidebar:"tutorialSidebar",previous:{title:"Macro feature to configure model dimensions",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/configurator/"},next:{title:"Generate box geometry (solid, sheet, wire) Macro Feature using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/macro-feature/geometry/"}},s={},c=[{value:"Notes and limitations",id:"notes-and-limitations",level:2}],m={toc:c},d="wrapper";function u(e){let{components:n,...l}=e;return(0,o.kt)(d,(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Linked table macro feature in the feature tree",src:t(14213).Z,width:"925",height:"251"}),"{ width=350 }"),(0,o.kt)("p",null,"This macro allows to create General Table in part, assembly and drawing and link it to external Excel or text/csv file using SOLIDWORKS API. This macro implemented as embedded macro feature which means that table will be automatically updated once the model is rebuilt."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run the macro"),(0,o.kt)("li",{parentName:"ul"},"Specify the full path to excel (",(0,o.kt)("em",{parentName:"li"},".xls or "),".xlsx) or comma separated text file (",(0,o.kt)("em",{parentName:"li"},".csv or "),".txt) in the first prompt dialog"),(0,o.kt)("li",{parentName:"ul"},"Optionally specify the name of the spreadsheet to read data from. If empty string is specified first spreadsheet will be used")),(0,o.kt)("p",null,"Macro inserts the table and macro feature in the feature tree with the data from external file. Modify the file or general table and rebuild the model - table is updated."),(0,o.kt)("h2",{id:"notes-and-limitations"},"Notes and limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Only simple CSV files are supported (i.e. simple comma separated values, new line symbols or commas in the values are not supported)"),(0,o.kt)("li",{parentName:"ul"},"Excel is not required when CSV file is used"),(0,o.kt)("li",{parentName:"ul"},"Using CSV files has significant performance benefits as it is not required to start Excel and load document to get the data. Use this option where applicable"),(0,o.kt)("li",{parentName:"ul"},"Excel is displayed invisible and session may be cached for better performance benefits"),(0,o.kt)("li",{parentName:"ul"},"If CSV or Excel files are saved relative to the model - relative path will be maintained. It means that the SOLIDWORKS file can be moved together with Excel/CSV and link won't be broken"),(0,o.kt)("li",{parentName:"ul"},"If General Table is selected when inserting new feature - this table will be used instead of creating new one"),(0,o.kt)("li",{parentName:"ul"},"Currently it is not possible to change the path to external Excel file. Delete the macro feature instead and reinsert it by selecting the general table (see previous point)"),(0,o.kt)("li",{parentName:"ul"},"Macro feature is embedded into the model which means that the table will be updated on any other workstations even if this macro is not available.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const BASE_NAME As String = "LinkedTable"\n\nConst PARAM_EXCEL_PATH As String = "ExcelPath"\nConst PARAM_SHEET_NAME As String = "SheetName"\n\nSub main()\n\n    Dim swApp As SldWorks.SldWorks\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim excelFilePath As String\n        Dim excelSheetName As String\n\n        excelFilePath = InputBox("Specify the full path to the excel or text/csv file")\n        excelSheetName = InputBox("Specify the sheet name for excel file (specify empty string for first sheet)")\n        \n        If excelFilePath = "" Then\n            Exit Sub\n        End If\n        \n        excelFilePath = UpdateRelativePath(swModel, excelFilePath)\n        \n        Dim curMacroPath As String\n        curMacroPath = swApp.GetCurrentMacroPathName\n        Dim vMethods(8) As String\n        Dim moduleName As String\n        \n        GetMacroEntryPoint swApp, curMacroPath, moduleName, ""\n        \n        vMethods(0) = curMacroPath: vMethods(1) = moduleName: vMethods(2) = "swmRebuild"\n        vMethods(3) = curMacroPath: vMethods(4) = moduleName: vMethods(5) = "swmEditDefinition"\n        vMethods(6) = curMacroPath: vMethods(7) = moduleName: vMethods(8) = "swmSecurity"\n        \n        Dim vParamNames(1) As String\n        vParamNames(0) = PARAM_EXCEL_PATH\n        vParamNames(1) = PARAM_SHEET_NAME\n\n        Dim vParamTypes(1) As Long\n        vParamTypes(0) = swMacroFeatureParamType_e.swMacroFeatureParamTypeString\n        vParamTypes(1) = swMacroFeatureParamType_e.swMacroFeatureParamTypeString\n\n        Dim vParamValues(1) As String\n\n        vParamValues(0) = excelFilePath\n        vParamValues(1) = excelSheetName\n\n        Dim swTable As SldWorks.TableAnnotation\n        Set swTable = TryGetSelectedTable(swModel)\n        If swTable Is Nothing Then\n            Dim emptyTable(2, 2) As String\n            Set swTable = CreateTableFromArray(swModel, emptyTable)\n        End If\n        \n        swTable.GetAnnotation().Select3 False, Nothing\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swModel.FeatureManager.InsertMacroFeature3(BASE_NAME, "", vMethods, _\n            vParamNames, vParamTypes, vParamValues, Empty, Empty, Empty, _\n            Empty, swMacroFeatureOptions_e.swMacroFeatureEmbedMacroFile + swMacroFeatureOptions_e.swMacroFeatureAlwaysAtEnd)\n        \n        If swFeat Is Nothing Then\n            MsgBox "Failed to create macro runner"\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nFunction UpdateRelativePath(model As SldWorks.ModelDoc2, path As String) As String\n    \n    Dim modelPath As String\n    modelPath = model.GetPathName\n    \n    UpdateRelativePath = path\n    \n    If modelPath <> "" Then\n        Dim modelDir As String\n        modelDir = Left(modelPath, InStrRev(modelPath, "\\"))\n        \n        If LCase(path) Like LCase(modelDir) & "*" Then\n            UpdateRelativePath = Right(path, Len(path) - Len(modelDir) + 1)\n        End If\n        \n    End If\n    \nEnd Function\n\nFunction GetFullPath(model As SldWorks.ModelDoc2, path As String)\n    \n    GetFullPath = path\n    \n    Dim isRelative As Boolean\n    isRelative = Left(path, 1) = "\\"\n    \n    If isRelative Then\n        \n        Dim modelPath As String\n        Dim modelDir As String\n        \n        modelPath = model.GetPathName\n        \n        modelDir = Left(modelPath, InStrRev(modelPath, "\\") - 1)\n        \n        GetFullPath = modelDir & path\n        \n    End If\n    \nEnd Function\n\nFunction TryGetSelectedTable(model As SldWorks.ModelDoc2) As SldWorks.TableAnnotation\n    \n    On Error Resume Next\n    \n    Dim swTable As SldWorks.TableAnnotation\n    Set swTable = model.SelectionManager.GetSelectedObject6(1, -1)\n    \n    If swTable Is Nothing Then\n        \n        Dim swTableFeat As SldWorks.GeneralTableFeature\n        Set swTableFeat = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swTableFeat Is Nothing Then\n            Set swTable = swTableFeat.GetTableAnnotations()(0)\n        End If\n        \n    End If\n    \n    Set TryGetSelectedTable = swTable\n    \nEnd Function\n\nFunction CreateTableFromArray(model As SldWorks.ModelDoc2, vTableData As Variant) As SldWorks.TableAnnotation\n    \n    Dim swTable As SldWorks.TableAnnotation\n    Set swTable = model.Extension.InsertGeneralTableAnnotation(True, 0, 0, swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_BottomLeft, "", UBound(vTableData, 1), UBound(vTableData, 2))\n    \n    FillTable swTable, vTableData\n    \n    Set CreateTableFromArray = swTable\n    \nEnd Function\n\nSub FillTable(table As SldWorks.TableAnnotation, vTableData As Variant)\n    \n    Dim rowIndex As Integer\n    Dim columnIndex As Integer\n    \n    Dim rowsCount As Integer\n    Dim colsCount As Integer\n    Dim i As Integer\n    \n    rowsCount = UBound(vTableData, 1)\n    colsCount = UBound(vTableData, 2)\n    \n    If table.columnCount > colsCount Then\n        For i = colsCount To table.columnCount - 1\n            table.DeleteColumn2 table.columnCount - 1, True\n        Next\n    ElseIf table.columnCount < colsCount Then\n        For i = table.columnCount To colsCount - 1\n            table.InsertColumn2 swTableItemInsertPosition_e.swTableItemInsertPosition_Last, -1, "", swInsertTableColumnWidthStyle_e.swInsertColumn_DefaultWidth\n        Next\n    End If\n    \n    If table.rowCount > rowsCount Then\n        For i = rowsCount To table.rowCount - 1\n            table.DeleteRow2 table.rowCount - 1, True\n        Next\n    ElseIf table.rowCount < rowsCount Then\n        For i = table.rowCount To rowsCount - 1\n            table.InsertRow swTableItemInsertPosition_e.swTableItemInsertPosition_Last, -1\n        Next\n    End If\n    \n    For rowIndex = 0 To UBound(vTableData, 1)\n        For columnIndex = 0 To UBound(vTableData, 2)\n            table.Text(rowIndex, columnIndex) = vTableData(rowIndex, columnIndex)\n        Next\n    Next\n    \nEnd Sub\n\nSub GetMacroEntryPoint(app As SldWorks.SldWorks, macroPath As String, ByRef moduleName As String, ByRef procName As String)\n        \n    Dim vMethods As Variant\n    vMethods = app.GetMacroMethods(macroPath, swMacroMethods_e.swMethodsWithoutArguments)\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(vMethods) Then\n    \n        For i = 0 To UBound(vMethods)\n            Dim vData As Variant\n            vData = Split(vMethods(i), ".")\n            \n            If i = 0 Or LCase(vData(1)) = "main" Then\n                moduleName = vData(0)\n                procName = vData(1)\n            End If\n        Next\n        \n    End If\n    \nEnd Sub\n\nFunction GetArrayFromExcel(filePath As String, sheetName As String) As Variant\n    \n    Dim xlApp As Object\n    \n    Dim tableData() As String\n    \n    Set xlApp = GetObject("", "Excel.Application")\n        \n    Dim xlWorkbook As Object\n    Dim xlWorksheet As Object\n\n    Dim closeWorkbook As Boolean\n    closeWorkbook = Not IsWorkbookOpen(xlApp, filePath)\n    \n    Set xlWorkbook = xlApp.Workbooks.Open(filePath)\n    \n    If sheetName <> "" Then\n        Set xlWorksheet = xlWorkbook.Sheets(sheetName)\n    Else\n        Set xlWorksheet = xlWorkbook.Sheets(1)\n    End If\n    \n    Dim rowIndex As Integer\n    Dim columnIndex As Integer\n    \n    ReDim tableData(xlWorksheet.UsedRange.rows.Count, xlWorksheet.UsedRange.Columns.Count)\n    \n    For rowIndex = 1 To xlWorksheet.UsedRange.rows.Count\n        For columnIndex = 1 To xlWorksheet.UsedRange.Columns.Count\n            Dim cellVal As String\n            cellVal = xlWorksheet.Cells(rowIndex, columnIndex).Value\n            tableData(rowIndex - 1, columnIndex - 1) = cellVal\n        Next\n    Next\n    \n    GetArrayFromExcel = tableData\n    \n    If closeWorkbook Then\n        xlWorkbook.Close SaveChanges:=False\n    End If\n    \nEnd Function\n\nFunction GetArrayFromCsv(filePath As String) As Variant\n    \n    Dim fileNo As Integer\n\n    fileNo = FreeFile\n    \n    Dim rows As Collection\n    Set rows = New Collection\n    \n    Open filePath For Input As #fileNo\n    \n    Do While Not EOF(fileNo)\n        \n        Dim tableRow As String\n        \n        Line Input #fileNo, tableRow\n            \n        Dim vCells As Variant\n        vCells = Split(tableRow, ",")\n        rows.Add vCells\n    \n    Loop\n    \n    Close #fileNo\n    \n    Dim tableData() As String\n\n    Dim rowCount As Integer\n    Dim columnCount As Integer\n    rowCount = rows.Count\n    columnCount = UBound(rows(1)) + 1\n    \n    Dim rowIndex As Integer\n    Dim columnIndex As Integer\n    \n    ReDim tableData(rowCount, columnCount)\n    \n    For rowIndex = 1 To rowCount\n        Dim vRow As Variant\n        vRow = rows.Item(rowIndex)\n        \n        For columnIndex = 1 To columnCount\n            Dim cellVal As String\n            cellVal = vRow(columnIndex - 1)\n            tableData(rowIndex - 1, columnIndex - 1) = cellVal\n        Next\n    Next\n    \n    GetArrayFromCsv = tableData\n    \nEnd Function\n\nFunction IsWorkbookOpen(xlApp As Object, filePath As String) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To xlApp.Workbooks.Count\n        If LCase(xlApp.Workbooks(i).FullName) = LCase(filePath) Then\n            IsWorkbookOpen = True\n            Exit Function\n        End If\n    Next\n    \n    IsWorkbookOpen = False\n    \nEnd Function\n\nFunction swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n\n    Dim swApp As SldWorks.SldWorks\n    Dim swModel As SldWorks.ModelDoc2\n    Dim swFeat As SldWorks.Feature\n    \n    Set swApp = varApp\n    Set swModel = varDoc\n    Set swFeat = varFeat\n    \n    Dim swMacroFeat As SldWorks.MacroFeatureData\n    Set swMacroFeat = swFeat.GetDefinition()\n    \n    Dim excelFileName As String\n    Dim excelSheetName As String\n    \n    swMacroFeat.GetStringByName PARAM_EXCEL_PATH, excelFileName\n    swMacroFeat.GetStringByName PARAM_SHEET_NAME, excelSheetName\n    \n    Dim vObjects As Variant\n    swMacroFeat.GetSelections3 vObjects, Empty, Empty, Empty, Empty\n    \n    Dim swTable As SldWorks.TableAnnotation\n    Set swTable = vObjects(0)\n    \n    If swTable Is Nothing Then\n        swmRebuild = "Linked general table is missing"\n        Exit Function\n    End If\n    \n    excelFileName = GetFullPath(swModel, excelFileName)\n    \n    If Dir(excelFileName) = "" Then\n        swmRebuild = "Linked Excel file is missing: " & excelFileName\n        Exit Function\n    End If\n    \n    Dim vTable As Variant\n    \n    Dim fileExt As String\n    fileExt = Right(excelFileName, Len(excelFileName) - InStrRev(excelFileName, "."))\n    \n    Dim isExcel As Boolean\n    isExcel = LCase(fileExt) = "xls" Or LCase(fileExt) = "xlsx"\n    \n    If isExcel Then\n        vTable = GetArrayFromExcel(excelFileName, excelSheetName)\n    Else\n        vTable = GetArrayFromCsv(excelFileName)\n    End If\n    \n    FillTable swTable, vTable\n    \nEnd Function\n\nFunction swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmEditDefinition = True\nEnd Function\n\nFunction swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmSecurity = SwConst.swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityByDefault\nEnd Function\n')))}u.isMDXComponent=!0},14213:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/linked-excel-table-4469e27b40844776cefd501b75f31d0e.png"}}]);