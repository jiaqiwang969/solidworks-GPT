"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[13352],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),p=a,m=u["".concat(s,".").concat(p)]||u[p]||b[p]||l;return t?o.createElement(m,r(r({ref:n},d),{},{components:t})):o.createElement(m,r({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},95498:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const l={layout:"sw-tool",title:"SOLIDWORKS macro copies data from Excel table into general table",caption:"Write Data From Excel Table Into General Table",description:"Macro will read all the data from the Excel table and import it into the new general table of the active document or update existing table using SOLIDWORKS API",image:"excel-to-table.svg",labels:["table annotation","excel","general table","2 dimensional array"],group:"Model"},r=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/write-excel-table-into-general-table/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/write-excel-table-into-general-table/index",title:"SOLIDWORKS macro copies data from Excel table into general table",description:"Macro will read all the data from the Excel table and import it into the new general table of the active document or update existing table using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/write-excel-table-into-general-table/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/write-excel-table-into-general-table",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/write-excel-table-into-general-table/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/write-excel-table-into-general-table/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/write-excel-table-into-general-table/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"SOLIDWORKS macro copies data from Excel table into general table",caption:"Write Data From Excel Table Into General Table",description:"Macro will read all the data from the Excel table and import it into the new general table of the active document or update existing table using SOLIDWORKS API",image:"excel-to-table.svg",labels:["table annotation","excel","general table","2 dimensional array"],group:"Model"},sidebar:"tutorialSidebar",previous:{title:"Write custom property to file, configuration and cut-list using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/write-all-properties/"},next:{title:"Write component quantity in the SOLIDWORKS assembly to custom property",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/write-quantities/"}},s={},c=[],d={toc:c},u="wrapper";function b(e){let{components:n,...l}=e;return(0,a.kt)(u,(0,o.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This macro will write the data into the newly created general table of the active document from the specified Excel spreadsheet using SOLIDWORKS API."),(0,a.kt)("p",null,"Specify the full path to excel file and the name of the spreadsheet in the constants defined in the header of the macro."),(0,a.kt)("p",null,"In order order to update existing general table instead of creating new one, select the general table in the graphics view or from the feature manager tree and run the macro."),(0,a.kt)("p",null,"This macro can be embedded into the ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/macro-feature"},"Macro Feature")," which will allow automatic update of the table. Follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/macro-feature/general-table-link-excel/"},"Link And Auto Update General Table To Excel")," for more information about this option."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Excel table with purchase order data imported into SOLIDWORKS General Table",src:t(1675).Z,width:"873",height:"488"}),"{ width=500 }"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILE_PATH As String = "C:\\Orders\\PurchaseOrder_5281.xlsx"\nConst WORKSHEET_NAME As String = "Sheet1"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim vTableData As Variant\n        vTableData = GetArrayFromExcel(FILE_PATH, WORKSHEET_NAME)\n        \n        Dim swTable As SldWorks.TableAnnotation\n        Set swTable = TryGetSelectedTable(swModel)\n        \n        If Not swTable Is Nothing Then\n            FillTable swTable, vTableData\n        Else\n            CreateTableFromArray swModel, vTableData\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nFunction GetArrayFromExcel(filePath As String, sheetName As String) As Variant\n    \n    Dim xlApp As Object\n    \n    Dim tableData() As String\n    \n    Set xlApp = GetObject("", "Excel.Application")\n        \n    Dim xlWorkbook As Object\n    Dim xlWorksheet As Object\n\n    Dim closeWorkbook As Boolean\n    closeWorkbook = Not IsWorkbookOpen(xlApp, filePath)\n    \n    Set xlWorkbook = xlApp.Workbooks.Open(filePath)\n    Set xlWorksheet = xlWorkbook.Sheets(sheetName)\n    \n    Dim rowIndex As Integer\n    Dim columnIndex As Integer\n    \n    ReDim tableData(xlWorksheet.UsedRange.Rows.Count, xlWorksheet.UsedRange.Columns.Count)\n    \n    For rowIndex = 1 To xlWorksheet.UsedRange.Rows.Count\n        For columnIndex = 1 To xlWorksheet.UsedRange.Columns.Count\n            Dim cellVal As String\n            cellVal = xlWorksheet.Cells(rowIndex, columnIndex).Value\n            tableData(rowIndex - 1, columnIndex - 1) = cellVal\n        Next\n    Next\n    \n    GetArrayFromExcel = tableData\n    \n    If closeWorkbook Then\n        xlWorkbook.Close SaveChanges:=False\n    End If\n    \nEnd Function\n\nFunction IsWorkbookOpen(xlApp As Object, filePath As String) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To xlApp.Workbooks.Count\n        If LCase(xlApp.Workbooks(i).FullName) = LCase(filePath) Then\n            IsWorkbookOpen = True\n            Exit Function\n        End If\n    Next\n    \n    IsWorkbookOpen = False\n    \nEnd Function\n\nFunction TryGetSelectedTable(model As SldWorks.ModelDoc2) As SldWorks.TableAnnotation\n    \n    On Error Resume Next\n    \n    Dim swTable As SldWorks.TableAnnotation\n    Set swTable = model.SelectionManager.GetSelectedObject6(1, -1)\n    \n    If swTable Is Nothing Then\n        \n        Dim swTableFeat As SldWorks.GeneralTableFeature\n        Set swTableFeat = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swTableFeat Is Nothing Then\n            Set swTable = swTableFeat.GetTableAnnotations()(0)\n        End If\n        \n    End If\n    \n    Set TryGetSelectedTable = swTable\n    \nEnd Function\n\nFunction CreateTableFromArray(model As SldWorks.ModelDoc2, vTableData As Variant) As SldWorks.TableAnnotation\n    \n    Dim swTable As SldWorks.TableAnnotation\n    Set swTable = model.Extension.InsertGeneralTableAnnotation(True, 0, 0, swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_BottomLeft, "", UBound(vTableData, 1), UBound(vTableData, 2))\n    \n    FillTable swTable, vTableData\n    \n    Set CreateTableFromArray = swTable\n    \nEnd Function\n\nSub FillTable(table As SldWorks.TableAnnotation, vTableData As Variant)\n    \n    Dim rowIndex As Integer\n    Dim columnIndex As Integer\n    \n    Dim rowsCount As Integer\n    Dim colsCount As Integer\n    Dim i As Integer\n    \n    rowsCount = UBound(vTableData, 1)\n    colsCount = UBound(vTableData, 2)\n    \n    If table.ColumnCount > colsCount Then\n        For i = colsCount To table.ColumnCount - 1\n            table.DeleteColumn2 table.ColumnCount - 1, True\n        Next\n    ElseIf table.ColumnCount < colsCount Then\n        For i = table.ColumnCount To colsCount - 1\n            table.InsertColumn2 swTableItemInsertPosition_e.swTableItemInsertPosition_Last, -1, "", swInsertTableColumnWidthStyle_e.swInsertColumn_DefaultWidth\n        Next\n    End If\n    \n    If table.RowCount > rowsCount Then\n        For i = rowsCount To table.RowCount - 1\n            table.DeleteRow2 table.RowCount - 1, True\n        Next\n    ElseIf table.RowCount < rowsCount Then\n        For i = table.RowCount To rowsCount - 1\n            table.InsertRow swTableItemInsertPosition_e.swTableItemInsertPosition_Last, -1\n        Next\n    End If\n    \n    For rowIndex = 0 To UBound(vTableData, 1)\n        For columnIndex = 0 To UBound(vTableData, 2)\n            table.Text(rowIndex, columnIndex) = vTableData(rowIndex, columnIndex)\n        Next\n    Next\n    \nEnd Sub\n')))}b.isMDXComponent=!0},1675:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/excel-table-to-sw-general-table-61e73d9a99c31396f2a343f76ec2583d.png"}}]);