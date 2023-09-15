"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[73932],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),p=l,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||a;return t?o.createElement(m,r(r({ref:n},d),{},{components:t})):o.createElement(m,r({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,r=new Array(a);r[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:l,r[1]=s;for(var c=2;c<a;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},48001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(87462),l=(t(67294),t(3905));const a={layout:"sw-tool",title:"SOLIDWORKS\u5b8f\u5c06\u6570\u636e\u4eceExcel\u8868\u590d\u5236\u5230\u5e38\u89c4\u8868\u4e2d",caption:"\u5c06Excel\u8868\u4e2d\u7684\u6570\u636e\u5199\u5165\u5e38\u89c4\u8868"},r=void 0,s={unversionedId:"codestack/solidworks-api/document/tables/write-excel-table-into-general-table/index",id:"codestack/solidworks-api/document/tables/write-excel-table-into-general-table/index",title:"SOLIDWORKS\u5b8f\u5c06\u6570\u636e\u4eceExcel\u8868\u590d\u5236\u5230\u5e38\u89c4\u8868\u4e2d",description:"\u8be5\u5b8f\u5c06\u4f7f\u7528SOLIDWORKS API\u4ece\u6307\u5b9a\u7684Excel\u7535\u5b50\u8868\u683c\u4e2d\u8bfb\u53d6\u6240\u6709\u6570\u636e\uff0c\u5e76\u5c06\u5176\u5bfc\u5165\u5230\u6d3b\u52a8\u6587\u6863\u7684\u65b0\u5e38\u89c4\u8868\u4e2d\uff0c\u6216\u8005\u4f7f\u7528SOLIDWORKS API\u66f4\u65b0\u73b0\u6709\u8868\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/tables/write-excel-table-into-general-table/index.md",sourceDirName:"codestack/solidworks-api/document/tables/write-excel-table-into-general-table",slug:"/codestack/solidworks-api/document/tables/write-excel-table-into-general-table/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/tables/write-excel-table-into-general-table/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/tables/write-excel-table-into-general-table/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"SOLIDWORKS\u5b8f\u5c06\u6570\u636e\u4eceExcel\u8868\u590d\u5236\u5230\u5e38\u89c4\u8868\u4e2d",caption:"\u5c06Excel\u8868\u4e2d\u7684\u6570\u636e\u5199\u5165\u5e38\u89c4\u8868"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5b8f\u91cd\u547d\u540d\u8868\u683c\u6ce8\u91ca",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/tables/rename-table-annotation/"},next:{title:"\u5728SOLIDWORKS API\u4e2d\u4f7f\u7528\u4e34\u65f6\u548c\u6301\u4e45ID\u8ddf\u8e2a\u5bf9\u8c61",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/tracking-objects/"}},i={},c=[{value:"group: Model",id:"group-model",level:2}],d={toc:c},u="wrapper";function b(e){let{components:n,...a}=e;return(0,l.kt)(u,(0,o.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8be5\u5b8f\u5c06\u4f7f\u7528SOLIDWORKS API\u4ece\u6307\u5b9a\u7684Excel\u7535\u5b50\u8868\u683c\u4e2d\u8bfb\u53d6\u6240\u6709\u6570\u636e\uff0c\u5e76\u5c06\u5176\u5bfc\u5165\u5230\u6d3b\u52a8\u6587\u6863\u7684\u65b0\u5e38\u89c4\u8868\u4e2d\uff0c\u6216\u8005\u4f7f\u7528SOLIDWORKS API\u66f4\u65b0\u73b0\u6709\u8868\u3002\nimage: excel-to-table.svg\nlabels: ","[\u8868\u6ce8\u91ca, Excel, \u5e38\u89c4\u8868, \u4e8c\u7ef4\u6570\u7ec4]"),(0,l.kt)("h2",{id:"group-model"},"group: Model"),(0,l.kt)("p",null,"\u6b64\u5b8f\u5c06\u4f7f\u7528SOLIDWORKS API\u4ece\u6307\u5b9a\u7684Excel\u7535\u5b50\u8868\u683c\u4e2d\u5c06\u6570\u636e\u5199\u5165\u6d3b\u52a8\u6587\u6863\u7684\u65b0\u5e38\u89c4\u8868\u4e2d\u3002"),(0,l.kt)("p",null,"\u5728\u5b8f\u7684\u5934\u90e8\u5b9a\u4e49\u7684\u5e38\u91cf\u4e2d\u6307\u5b9aExcel\u6587\u4ef6\u7684\u5b8c\u6574\u8def\u5f84\u548c\u7535\u5b50\u8868\u683c\u7684\u540d\u79f0\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u66f4\u65b0\u73b0\u6709\u7684\u5e38\u89c4\u8868\u800c\u4e0d\u662f\u521b\u5efa\u65b0\u7684\u5e38\u89c4\u8868\uff0c\u8bf7\u5728\u56fe\u5f62\u89c6\u56fe\u4e2d\u9009\u62e9\u5e38\u89c4\u8868\u6216\u4ece\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u9009\u62e9\u5e38\u89c4\u8868\uff0c\u7136\u540e\u8fd0\u884c\u5b8f\u3002"),(0,l.kt)("p",null,"\u6b64\u5b8f\u53ef\u4ee5\u5d4c\u5165\u5230",(0,l.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/macro-feature"},"\u5b8f\u7279\u5f81"),"\u4e2d\uff0c\u4ece\u800c\u5b9e\u73b0\u8868\u7684\u81ea\u52a8\u66f4\u65b0\u3002\u6709\u5173\u6b64\u9009\u9879\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/macro-feature/general-table-link-excel/"},"\u5c06\u5e38\u89c4\u8868\u94fe\u63a5\u5230Excel\u5e76\u81ea\u52a8\u66f4\u65b0"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u5c06\u91c7\u8d2d\u8ba2\u5355\u6570\u636e\u5bfc\u5165\u5230SOLIDWORKS\u5e38\u89c4\u8868\u4e2d\u7684Excel\u8868",src:t(46837).Z,width:"873",height:"488"}),"{ width=500 }"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILE_PATH As String = "C:\\Orders\\PurchaseOrder_5281.xlsx"\nConst WORKSHEET_NAME As String = "Sheet1"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim vTableData As Variant\n        vTableData = GetArrayFromExcel(FILE_PATH, WORKSHEET_NAME)\n        \n        Dim swTable As SldWorks.TableAnnotation\n        Set swTable = TryGetSelectedTable(swModel)\n        \n        If Not swTable Is Nothing Then\n            FillTable swTable, vTableData\n        Else\n            CreateTableFromArray swModel, vTableData\n        End If\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n\nFunction GetArrayFromExcel(filePath As String, sheetName As String) As Variant\n    \n    Dim xlApp As Object\n    \n    Dim tableData() As String\n    \n    Set xlApp = GetObject("", "Excel.Application")\n        \n    Dim xlWorkbook As Object\n    Dim xlWorksheet As Object\n\n    Dim closeWorkbook As Boolean\n    closeWorkbook = Not IsWorkbookOpen(xlApp, filePath)\n    \n    Set xlWorkbook = xlApp.Workbooks.Open(filePath)\n    Set xlWorksheet = xlWorkbook.Sheets(sheetName)\n    \n    Dim rowIndex As Integer\n    Dim columnIndex As Integer\n    \n    ReDim tableData(xlWorksheet.UsedRange.Rows.Count, xlWorksheet.UsedRange.Columns.Count)\n    \n    For rowIndex = 1 To xlWorksheet.UsedRange.Rows.Count\n        For columnIndex = 1 To xlWorksheet.UsedRange.Columns.Count\n            Dim cellVal As String\n            cellVal = xlWorksheet.Cells(rowIndex, columnIndex).Value\n            tableData(rowIndex - 1, columnIndex - 1) = cellVal\n        Next\n    Next\n    \n    GetArrayFromExcel = tableData\n    \n    If closeWorkbook Then\n        xlWorkbook.Close SaveChanges:=False\n    End If\n    \nEnd Function\n\nFunction IsWorkbookOpen(xlApp As Object, filePath As String) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To xlApp.Workbooks.Count\n        If LCase(xlApp.Workbooks(i).FullName) = LCase(filePath) Then\n            IsWorkbookOpen = True\n            Exit Function\n        End If\n    Next\n    \n    IsWorkbookOpen = False\n    \nEnd Function\n\nFunction TryGetSelectedTable(model As SldWorks.ModelDoc2) As SldWorks.TableAnnotation\n    \n    On Error Resume Next\n    \n    Dim swTable As SldWorks.TableAnnotation\n    Set swTable = model.SelectionManager.GetSelectedObject6(1, -1)\n    \n    If swTable Is Nothing Then\n        \n        Dim swTableFeat As SldWorks.GeneralTableFeature\n        Set swTableFeat = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swTableFeat Is Nothing Then\n            Set swTable = swTableFeat.GetTableAnnotations()(0)\n        End If\n        \n    End If\n    \n    Set TryGetSelectedTable = swTable\n    \nEnd Function\n\nFunction CreateTableFromArray(model As SldWorks.ModelDoc2, vTableData As Variant) As SldWorks.TableAnnotation\n    \n    Dim swTable As SldWorks.TableAnnotation\n    Set swTable = model.Extension.InsertGeneralTableAnnotation(True, 0, 0, swBOMConfigurationAnchorType_e.swBOMConfigurationAnchor_BottomLeft, "", UBound(vTableData, 1), UBound(vTableData, 2))\n    \n    FillTable swTable, vTableData\n    \n    Set CreateTableFromArray = swTable\n    \nEnd Function\n\nSub FillTable(table As SldWorks.TableAnnotation, vTableData As Variant)\n    \n    Dim rowIndex As Integer\n    Dim columnIndex As Integer\n    \n    Dim rowsCount As Integer\n    Dim colsCount As Integer\n    Dim i As Integer\n    \n    rowsCount = UBound(vTableData, 1)\n    colsCount = UBound(vTableData, 2)\n    \n    If table.ColumnCount > colsCount Then\n        For i = colsCount To table.ColumnCount - 1\n            table.DeleteColumn2 table.ColumnCount - 1, True\n        Next\n    ElseIf table.ColumnCount < colsCount Then\n        For i = table.ColumnCount To colsCount - 1\n            table.InsertColumn2 swTableItemInsertPosition_e.swTableItemInsertPosition_Last, -1, "", swInsertTableColumnWidthStyle_e.swInsertColumn_DefaultWidth\n        Next\n    End If\n    \n    If table.RowCount > rowsCount Then\n        For i = rowsCount To table.RowCount - 1\n            table.DeleteRow2 table.RowCount - 1, True\n        Next\n    ElseIf table.RowCount < rowsCount Then\n        For i = table.RowCount To rowsCount - 1\n            table.InsertRow swTableItemInsertPosition_e.swTableItemInsertPosition_Last, -1\n        Next\n    End If\n    \n    For rowIndex = 0 To UBound(vTableData, 1)\n        For columnIndex = 0 To UBound(vTableData, 2)\n            table.Text(rowIndex, columnIndex) = vTableData(rowIndex, columnIndex)\n        Next\n    Next\n    \nEnd Sub\n')))}b.isMDXComponent=!0},46837:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/excel-table-to-sw-general-table-61e73d9a99c31396f2a343f76ec2583d.png"}}]);