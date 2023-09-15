"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[24721],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>d});var a=t(67294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,a,l=function(n,e){if(null==n)return{};var t,a,l={},s=Object.keys(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var i=a.createContext({}),A=function(n){var e=a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=A(n.components);return a.createElement(i.Provider,{value:e},n.children)},b="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},T=a.forwardRef((function(n,e){var t=n.components,l=n.mdxType,s=n.originalType,i=n.parentName,c=r(n,["components","mdxType","originalType","parentName"]),b=A(t),T=l,d=b["".concat(i,".").concat(T)]||b[T]||u[T]||s;return t?a.createElement(d,o(o({ref:e},c),{},{components:t})):a.createElement(d,o({ref:e},c))}));function d(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var s=t.length,o=new Array(s);o[0]=T;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=n,r[b]="string"==typeof n?n:l,o[1]=r;for(var A=2;A<s;A++)o[A]=t[A];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}T.displayName="MDXCreateElement"},7705:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>A});var a=t(87462),l=(t(67294),t(3905));const s={layout:"sw-tool",title:"\u4f7f\u7528VBA\u5b8f\u5c06SOLIDWORKS\u8868\u683c\u5bfc\u51fa\u4e3aCSV",caption:"\u5bfc\u51fa\u8868\u683c\u4e3aCSV"},o=void 0,r={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/export-table-csv/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/export-table-csv/index",title:"\u4f7f\u7528VBA\u5b8f\u5c06SOLIDWORKS\u8868\u683c\u5bfc\u51fa\u4e3aCSV",description:"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u5c06\u9009\u5b9a\u7684\u8868\u683c\uff08\u6216\u6307\u5b9a\u7c7b\u578b\u7684\u8868\u683c\uff09\u5bfc\u51fa\u4e3aCSV\uff08\u9017\u53f7\u5206\u9694\u503c\uff09\u6587\u4ef6\u3002\u6b64\u529f\u80fd\u7c7b\u4f3c\u4e8e\u5185\u7f6e\u7684\u201c\u53e6\u5b58\u4e3a\u201d\u9009\u9879\uff0c\u7528\u4e8e\u8868\u683c\uff1a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/export-table-csv/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/export-table-csv",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/export-table-csv/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/export-table-csv/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/export-table-csv/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528VBA\u5b8f\u5c06SOLIDWORKS\u8868\u683c\u5bfc\u51fa\u4e3aCSV",caption:"\u5bfc\u51fa\u8868\u683c\u4e3aCSV"},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/combine-identical-components/"},next:{title:"\u901a\u8fc7\u5355\u5143\u683c\u7684\u503c\u5728SOLIDWORKS\u56fe\u7eb8\u4e2d\u67e5\u627e\u548c\u8bfb\u53d6\u8868\u683c",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/find-read-table-by-cell/"}},i={},A=[{value:"group: Model",id:"group-model",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"CAD+",id:"cad",level:2}],c={toc:A},b="wrapper";function u(n){let{components:e,...s}=n;return(0,l.kt)(b,(0,a.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u5c06\u9009\u5b9a\u7684\u8868\u683c\uff08\u6216\u6307\u5b9a\u7c7b\u578b\u7684\u8868\u683c\uff09\u5bfc\u51fa\u4e3aCSV\uff08\u9017\u53f7\u5206\u9694\u503c\uff09\u6587\u4ef6\u3002\u6b64\u529f\u80fd\u7c7b\u4f3c\u4e8e\u5185\u7f6e\u7684\u201c\u53e6\u5b58\u4e3a\u201d\u9009\u9879\uff0c\u7528\u4e8e\u8868\u683c\uff1a\nimage: export-table-csv.svg\nlabels: ","[table,csv,export]"),(0,l.kt)("h2",{id:"group-model"},"group: Model"),(0,l.kt)("p",null,"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u5c06\u9009\u5b9a\u7684\u8868\u683c\uff08\u6216\u6307\u5b9a\u7c7b\u578b\u7684\u8868\u683c\uff09\u5bfc\u51fa\u4e3aCSV\uff08\u9017\u53f7\u5206\u9694\u503c\uff09\u6587\u4ef6\u3002\u6b64\u529f\u80fd\u7c7b\u4f3c\u4e8e\u5185\u7f6e\u7684\u201c\u53e6\u5b58\u4e3a\u201d\u9009\u9879\uff0c\u7528\u4e8e\u8868\u683c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8868\u683c\u7684\u53e6\u5b58\u4e3a\u9009\u9879",src:t(39986).Z,width:"806",height:"465"}),"{ width=350 }"),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u8be5\u5b8f\u4fdd\u7559\u4e86\u9017\u53f7\u3001\u5f15\u53f7\u6216\u6362\u884c\u7b26\u7b49\u7279\u6b8a\u7b26\u53f7\uff0c\u5e76\u6839\u636eCSV\u89c4\u8303\u8fdb\u884c\u9002\u5f53\u7684\u8f6c\u4e49\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u5e26\u6709\u7279\u6b8a\u7b26\u53f7\uff08\u9017\u53f7\u548c\u6362\u884c\u7b26\uff09\u7684BOM\u8868",src:t(56660).Z,width:"748",height:"382"}),"{ width=350 }"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u53ef\u4ee5\u4f7f\u7528CSV\u8bfb\u53d6\u5668\uff08\u5982MS Excel\uff09\u6b63\u786e\u8bfb\u53d6\u8be5\u6587\u4ef6\uff1b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u5bfc\u5165\u5230Excel\u7684CSV\u6587\u4ef6",src:t(35549).Z,width:"503",height:"201"}),"{ width=350 }"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4e0a\u8ff0BOM\u8868\u7684\u793a\u4f8b\uff0c\u8be5\u5b8f\u5c06\u751f\u6210\u4ee5\u4e0b\u8f93\u51fa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},'ITEM NO.,PART NUMBER,Description,QTY.\n1,B01-A57,Blade shaft,1\n2,B01-A12,Top blade,1\n3,B02,"Bottom blade\nFixed",1\n4,R1284,Blade rivets,4\n5,E25-E16,"Blade extension, Plastic",1\n')),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u5e38\u91cf\u7684\u503c\u6765\u914d\u7f6e\u5b8f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vb"},"Const OUT_FILE_PATH_TEMPLATE As String = \"<_FileName_>-<_TableName_>.csv\" '\u4fdd\u5b58\u5728\u6a21\u578b\u6587\u4ef6\u5939\u4e2d\u7684\u7a7a\u5b57\u7b26\u4e32\nConst INCLUDE_HEADER As Boolean = True 'True\u5305\u542b\u8868\u5934\uff0cFalse\u4ec5\u5305\u542b\u6570\u636e\nConst TABLE_TYPE As Integer = swTableAnnotationType_e.swTableAnnotation_BillOfMaterials  '-1\u4f7f\u7528\u6240\u9009\u8868\u683c\u6216\u5728swTableAnnotationType_e\u4e2d\u5b9a\u4e49\u7684\u8868\u683c\u7c7b\u578b\uff08\u4f8b\u5982\uff0cswTableAnnotationType_e.swTableAnnotation_BillOfMaterials\u5bfc\u51fa\u6240\u6709BOM\u8868\uff09\nConst ALL_SHEETS As Boolean = False 'False\u4ec5\u4ece\u6d3b\u52a8\u5de5\u4f5c\u8868\u5bfc\u51fa\n\nConst MERGE As Boolean = False 'True\u5c06\u6240\u6709\u8868\u683c\u5408\u5e76\u5230\u5355\u4e2a\u6587\u4ef6\u4e2d\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"OUT_FILE_PATH_TEMPLATE"),"\u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84\u6216\u7edd\u5bf9\u8def\u5f84\u3002\u5982\u679c\u6307\u5b9a\u4e86\u76f8\u5bf9\u8def\u5f84\uff0c\u5219\u6587\u4ef6\u5c06\u4fdd\u5b58\u5728\u4e0e\u6e90\u6587\u4ef6\u76f8\u540c\u7684\u76ee\u5f55\u4e2d"),(0,l.kt)("p",null,"\u652f\u6301\u4ee5\u4e0b\u5360\u4f4d\u7b26\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"<","_","FileName","_","> - \u6e90\u6587\u4ef6\u7684\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},"<","_","TableName","_","> - \u8868\u683c\u7684\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},"<","_","SheetName","_","> - \u8868\u683c\u6240\u5728\u7684\u5de5\u4f5c\u8868\u7684\u540d\u79f0\uff08\u4ec5\u9002\u7528\u4e8e\u7ed8\u56fe\uff09")),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e86",(0,l.kt)("strong",{parentName:"p"},"MERGE"),"\u9009\u9879\uff0c\u5219\u6240\u6709\u8868\u683c\u6570\u636e\u5c06\u8f93\u51fa\u5230\u5355\u4e2aCSV\u6587\u4ef6\u4e2d\uff0c\u5e76\u4e14\u6bcf\u4e2a\u8868\u683c\u4e4b\u95f4\u5c06\u7528\u7a7a\u884c\u5206\u9694\u3002\u5982\u679c\u6587\u4ef6\u540d\u6a21\u677f\u4f7f\u7528\u4e86\u8868\u683c\u7279\u5b9a\u7684\u5360\u4f4d\u7b26\uff0c\u5219\u5c06\u4f7f\u7528\u7b2c\u4e00\u4e2a\u8868\u683c\u4f5c\u4e3a\u6a21\u677f\u3002"),(0,l.kt)("h2",{id:"cad"},"CAD+"),(0,l.kt)("p",null,"\u8be5\u5b8f\u4e0e",(0,l.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/"},"Toolbar+"),"\u548c",(0,l.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/batch/"},"Batch+"),"\u5de5\u5177\u517c\u5bb9\uff0c\u56e0\u6b64\u53ef\u4ee5\u5c06\u6309\u94ae\u6dfb\u52a0\u5230\u5de5\u5177\u680f\u5e76\u5206\u914d\u5feb\u6377\u952e\u4ee5\u4fbf\u66f4\u8f7b\u677e\u5730\u8bbf\u95ee\u6216\u6279\u5904\u7406\u8fd0\u884c\u3002"),(0,l.kt)("p",null,"\u8981\u542f\u7528",(0,l.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/toolbar/configuration/arguments/"},"\u5b8f\u53c2\u6570"),"\uff0c\u8bf7\u5c06",(0,l.kt)("strong",{parentName:"p"},"ARGS"),"\u5e38\u91cf\u8bbe\u7f6e\u4e3atrue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vb"},"#Const ARGS = True\n")),(0,l.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4e0d\u9700\u8981\u590d\u5236\u5b8f\u4ee5\u8bbe\u7f6e\u5355\u72ec\u7684",(0,l.kt)("a",{parentName:"p",href:"#configuration"},"\u9690\u85cf\u548c\u663e\u793a\u9009\u9879"),"\u3002"),(0,l.kt)("p",null,"\u800c\u662f\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"-bom"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"-general"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"-revision"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"-cutlist"),"\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u6765\u6307\u5b9a\u8981\u5bfc\u51fa\u7684\u8868\u683c\u7c7b\u578b\uff0c\u5e76\u4f7f\u7528\u53ef\u9009\u7684\u8f93\u51fa\u6587\u4ef6\u6a21\u677f\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u4ee5\u4e0b\u53c2\u6570\u5c06\u5c06BOM\u8868\u5bfc\u51fa\u4e3aCSV\u683c\u5f0f\uff0c\u4fdd\u5b58\u5728D\u9a71\u52a8\u5668\u7684",(0,l.kt)("strong",{parentName:"p"},"Tables"),"\u6587\u4ef6\u5939\u4e2d\uff0c\u6587\u4ef6\u540d\u4e3a\u6e90\u8868\u683c\u7684\u540d\u79f0\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'> -bom "D:\\Tables\\<_TableName_>.csv"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vb"},'#Const ARGS = False \'True\u4f7f\u7528Toolbar+\u6216Batch+\u4e2d\u7684\u53c2\u6570\uff0c\u800c\u4e0d\u662f\u5e38\u91cf\n\nConst OUT_FILE_PATH_TEMPLATE As String = "<_FileName_>-<_TableName_>.csv" \'\u8f93\u51fa\u6587\u4ef6\u8def\u5f84\u6a21\u677f\nConst INCLUDE_HEADER As Boolean = True\nConst TABLE_TYPE As Integer = -1  \'-1\u4f7f\u7528\u6240\u9009\u8868\u683c\u6216\u5728swTableAnnotationType_e\u4e2d\u5b9a\u4e49\u7684\u8868\u683c\u7c7b\u578b\nConst ALL_SHEETS As Boolean = True \'True\u4ece\u6240\u6709\u5de5\u4f5c\u8868\u5bfc\u51fa\uff08\u5982\u679cTABLE_TYPE\u4e0d\u662f-1\uff09\uff0cFalse\u4ec5\u4ece\u6d3b\u52a8\u5de5\u4f5c\u8868\u5bfc\u51fa\n\nConst MERGE As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\ntry_:\n    On Error GoTo catch_\n    \n    Dim tableType As swTableAnnotationType_e\n    Dim outFilePathTemplate As String\n    \n    #If ARGS Then\n                \n        Dim macroRunner As Object\n        Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")\n        \n        Dim param As Object\n        Set param = macroRunner.PopParameter(swApp)\n        \n        Dim vArgs As Variant\n        vArgs = param.Get("Args")\n        \n        Dim operation As String\n        operation = CStr(vArgs(0))\n        \n        Select Case LCase(operation)\n            Case "-bom"\n                tableType = swTableAnnotation_BillOfMaterials\n            Case "-general"\n                tableType = swTableAnnotation_General\n            Case "-revision"\n                tableType = swTableAnnotation_RevisionBlock\n            Case "-cutlist"\n                tableType = swTableAnnotation_WeldmentCutList\n            Case Else\n                Err.Raise vbError, "", "Invalid argument. Valid arguments -bom -general -revision -cutlist"\n        End Select\n        \n        If UBound(vArgs) = 1 Then\n            outFilePathTemplate = CStr(vArgs(1))\n        Else\n            outFilePathTemplate = OUT_FILE_PATH_TEMPLATE\n        End If\n    #Else\n        tableType = TABLE_TYPE\n        outFilePathTemplate = OUT_FILE_PATH_TEMPLATE\n    #End If\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim vTables As Variant\n        \n        If tableType = -1 Then\n            vTables = GetSelectedTables(swModel)\n        Else\n            \n            If swModel.GetType() <> swDocumentTypes_e.swDocDRAWING Then\n                Err.Raise vbError, "", "Only drawing document is supported"\n            End If\n            \n            Dim swDraw As SldWorks.DrawingDoc\n            Set swDraw = swModel\n            \n            Dim sheetName As String\n            \n            If ALL_SHEETS Then\n                sheetName = ""\n            Else\n                sheetName = swDraw.GetCurrentSheet().GetName\n            End If\n            \n            vTables = FindTables(swDraw, tableType, sheetName)\n            \n        End If\n        \n        If Not IsEmpty(vTables) Then\n            \n            Dim i As Integer\n            \n            Dim outFilePath As String\n            \n            For i = 0 To UBound(vTables)\n                    \n                Dim swTableAnn As SldWorks.TableAnnotation\n                Set swTableAnn = vTables(i)\n                \n                If i = 0 Or Not MERGE Then\n                    outFilePath = GetExportFilePath(outFilePathTemplate, swModel, swTableAnn)\n                End If\n                \n                Dim vTableData As Variant\n                \n                Dim includeHeader As Boolean\n                includeHeader = INCLUDE_HEADER And (Not MERGE Or i = 0)\n                \n                vTableData = GetTableData(swTableAnn, includeHeader)\n                \n                Dim append As Boolean\n                append = IIf(MERGE, i > 0, False)\n                \n                If MERGE And i > 0 Then\n                    Dim separatorRow() As String\n                    ReDim separatorRow(0, UBound(vTableData, 2))\n                    WriteCsvFile outFilePath, separatorRow, True\n                End If\n                \n                WriteCsvFile outFilePath, vTableData, append\n            \n            Next\n            \n            GoTo finally_\n            \n        Else\n            Err.Raise vbError, "", "Tables are not found"\n        End If\n        \n    Else\n        Err.Raise vbError, "", "Document is not open"\n    End If\n\ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n\nEnd Sub\n\nFunction GetExportFilePath(pathTemplate As String, model As SldWorks.ModelDoc2, tableAnn As SldWorks.TableAnnotation) As String\n    \n    Const FILE_NAME_TOKEN As String = "<_FileName_>"\n    Const TABLE_NAME_TOKEN As String = "<_TableName_>"\n    Const SHEET_NAME_TOKEN As String = "<_SheetName_>"\n        \n    Dim path As String\n    \n    path = pathTemplate\n    \n    If InStr(path, FILE_NAME_TOKEN) > 0 Then\n        path = Replace(pathTemplate, FILE_NAME_TOKEN, GetFileNameWithoutExtension(model.GetPathName()))\n    End If\n    \n    If InStr(path, SHEET_NAME_TOKEN) > 0 Then\n        Dim swSheet As SldWorks.Sheet\n        Set swSheet = GetSheetFromTableAnnotation(model, tableAnn)\n        path = Replace(path, SHEET_NAME_TOKEN, swSheet.GetName())\n    End If\n    \n    If InStr(path, TABLE_NAME_TOKEN) > 0 Then\n        Dim swTableFeat As SldWorks.Feature\n        Set swTableFeat = GetFeatureFromTableAnnotation(tableAnn)\n        path = Replace(path, TABLE_NAME_TOKEN, swTableFeat.Name)\n    End If\n    \n    GetExportFilePath = GetFullPath(model, path)\n    \nEnd Function\n\nFunction GetTableData(tableAnn As SldWorks.TableAnnotation, includeHeader As Boolean) As Variant\n    \n    Dim tableData() As String\n        \n    Dim i As Integer\n    Dim j As Integer\n    \n    Dim offset As Integer\n    offset = IIf(includeHeader, 0, 1)\n    \n    For i = 0 + offset To tableAnn.RowCount - 1\n        \n        ReDim Preserve tableData(tableAnn.RowCount - 1 - offset, tableAnn.ColumnCount - 1)\n        \n        For j = 0 To tableAnn.ColumnCount - 1\n            tableData(i - offset, j) = tableAnn.Text(i, j)\n        Next\n            \n    Next\n        \n    GetTableData = tableData\n    \nEnd Function\n\nFunction FindTables(draw As SldWorks.DrawingDoc, filter As swTableAnnotationType_e, sheetName As String) As Variant\n    \n    Dim swTables() As SldWorks.TableAnnotation\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim vSheets As Variant\n    \n    vSheets = draw.GetViews()\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vSheets)\n        \n        Dim vViews As Variant\n        vViews = vSheets(i)\n        \n        Dim swSheetView As SldWorks.View\n        Set swSheetView = vViews(0)\n        \n        If sheetName = "" Or LCase(sheetName) = LCase(swSheetView.Name) Then\n        \n            Dim vTableAnns As Variant\n            vTableAnns = swSheetView.GetTableAnnotations\n            \n            If Not IsEmpty(vTableAnns) Then\n                \n                Dim j As Integer\n                \n                For j = 0 To UBound(vTableAnns)\n                    \n                    Dim swTableAnn As SldWorks.TableAnnotation\n                    Set swTableAnn = vTableAnns(j)\n                    \n                    If swTableAnn.Type = filter Then\n                        \n                        If isInit Then\n                            ReDim Preserve swTables(UBound(swTables) + 1)\n                        Else\n                            ReDim swTables(0)\n                            isInit = True\n                        End If\n                        \n                        Set swTables(UBound(swTables)) = swTableAnn\n                        \n                    End If\n                    \n                Next\n                \n            End If\n        \n        End If\n        \n    Next\n    \n    If isInit Then\n        FindTables = swTables\n    Else\n        FindTables = Empty\n    End If\n    \nEnd Function\n\nFunction GetSelectedTables(model As SldWorks.ModelDoc2) As Variant\n\n    Dim swTables() As SldWorks.TableAnnotation\n    Dim isInit As Boolean\n    isInit = False\n\n    Dim i As Integer\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        Dim swSelType As Long\n        swSelType = swSelMgr.GetSelectedObjectType3(i, -1)\n        \n        If swSelType = swSelectType_e.swSelANNOTATIONTABLES Or swSelType = swSelectType_e.swSelREVISIONTABLE Then\n        \n            If isInit Then\n                ReDim Preserve swTables(UBound(swTables) + 1)\n            Else\n                ReDim swTables(0)\n                isInit = True\n            End If\n                    \n            Set swTables(UBound(swTables)) = swSelMgr.GetSelectedObject6(i, -1)\n        End If\n    \n    Next\n    \n    If isInit Then\n        GetSelectedTables = swTables\n    Else\n        GetSelectedTables = Empty\n    End If\n    \nEnd Function\n\nSub WriteCsvFile(filePath As String, table As Variant, append As Boolean)\n    \n    Dim fileNmb As Integer\n    fileNmb = FreeFile\n    \n    If append Then\n        Open filePath For Append As #fileNmb\n    Else\n        Open filePath For Output As #fileNmb\n    End If\n    \n    Dim i As Integer\n    Dim j As Integer\n    \n    For i = 0 To UBound(table, 1)\n        \n        Dim rowContent As String\n        rowContent = ""\n        \n        For j = 0 To UBound(table, 2)\n            Dim cell As String\n            cell = table(i, j)\n            If HasSpecialSymbols(cell) Then\n                cell = """" & ReplaceSpecialSymbols(cell) & """"\n            End If\n            rowContent = rowContent & IIf(j = 0, "", ",") & cell\n        Next\n        \n        Print #fileNmb, rowContent\n        \n    Next\n    \n    Close #fileNmb\n    \nEnd Sub\n\nFunction GetFullPath(model As SldWorks.ModelDoc2, path As String)\n    \n    GetFullPath = path\n        \n    If IsPathRelative(path) Then\n        \n        If Left(path, 1) <> "\\" Then\n            path = "\\" & path\n        End If\n        \n        Dim modelPath As String\n        Dim modelDir As String\n        \n        modelPath = model.GetPathName\n        \n        modelDir = Left(modelPath, InStrRev(modelPath, "\\") - 1)\n                \n        GetFullPath = modelDir & path\n    Else\n        GetFullPath = path\n    End If\n    \nEnd Function\n\nFunction GetFileNameWithoutExtension(path As String) As String\n    GetFileNameWithoutExtension = Mid(path, InStrRev(path, "\\") + 1, InStrRev(path, ".") - InStrRev(path, "\\") - 1)\nEnd Function\n\nFunction IsPathRelative(path As String)\n    IsPathRelative = Mid(path, 2, 1) <> ":" And Not IsPathUnc(path)\nEnd Function\n\nFunction IsPathUnc(path As String)\n    IsPathUnc = Left(path, 2) = "\\\\"\nEnd Function\n\nFunction GetFeatureFromTableAnnotation(tableAnn As SldWorks.TableAnnotation) As SldWorks.Feature\n    \n    Dim swTableFeat As SldWorks.Feature\n    \n    Select Case tableAnn.Type\n                \n        Case swTableAnnotationType_e.swTableAnnotation_BillOfMaterials\n            \n            Dim swBomTableAnn As SldWorks.BomTableAnnotation\n            Set swBomTableAnn = tableAnn\n            Set swTableFeat = swBomTableAnn.BomFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_General\n            \n            Dim swGenTableAnn As SldWorks.GeneralTableAnnotation\n            Set swGenTableAnn = tableAnn\n            Set swTableFeat = swGenTableAnn.GeneralTable.GetFeature()\n        \n        Case swTableAnnotationType_e.swTableAnnotation_WeldmentCutList\n            \n            Dim swWeldCutListTableAnn As SldWorks.WeldmentCutListAnnotation\n            Set swWeldCutListTableAnn = tableAnn\n            Set swTableFeat = swWeldCutListTableAnn.WeldmentCutListFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_BendTable\n            \n            Dim swBendTableAnn As SldWorks.BendTableAnnotation\n            Set swBendTableAnn = tableAnn\n            Set swTableFeat = swBendTableAnn.BendTable.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_GeneralTolerance\n            \n            Dim swGeneralToleranceTableAnn As SldWorks.GeneralToleranceTableAnnotation\n            Set swGeneralToleranceTableAnn = tableAnn\n            Set swTableFeat = swGeneralToleranceTableAnn.GeneralToleranceTableFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_HoleChart\n            \n            Dim swHoleTableAnn As SldWorks.HoleTableAnnotation\n            Set swHoleTableAnn = tableAnn\n            Set swTableFeat = swHoleTableAnn.HoleTable.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_PunchTable\n        \n            Dim swPunchTableAnn As SldWorks.PunchTableAnnotation\n            Set swPunchTableAnn = tableAnn\n            Set swTableFeat = swPunchTableAnn.PunchTable.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_RevisionBlock\n            \n            Dim swRevisionTableAnn As SldWorks.RevisionTableAnnotation\n            Set swRevisionTableAnn = tableAnn\n            Set swTableFeat = swRevisionTableAnn.RevisionTableFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_TitleBlock\n        \n            Dim swTitleBlockTableAnn As SldWorks.TitleBlockTableAnnotation\n            Set swTitleBlockTableAnn = tableAnn\n            Set swTableFeat = swTitleBlockTableAnn.TitleBlockTableFeature.GetFeature()\n            \n        Case swTableAnnotationType_e.swTableAnnotation_WeldTable\n        \n            Dim swWeldTableAnn As SldWorks.WeldmentCutListAnnotation\n            Set swWeldTableAnn = tableAnn\n            Set swTableFeat = swWeldTableAnn.WeldmentCutListFeature.GetFeature()\n        \n    End Select\n    \n    Set GetFeatureFromTableAnnotation = swTableFeat\n    \nEnd Function\n\nFunction GetSheetFromTableAnnotation(draw As SldWorks.DrawingDoc, tableAnn As SldWorks.TableAnnotation) As SldWorks.Sheet\n\n\n\n```vba\nDim vSheets As Variant\n\nvSheets = draw.GetViews()\n\nDim i As Integer\n\nFor i = 0 To UBound(vSheets)\n    \n    Dim vViews As Variant\n    vViews = vSheets(i)\n    \n    Dim swSheetView As SldWorks.View\n    Set swSheetView = vViews(0)\n    \n    Dim vTableAnns As Variant\n    vTableAnns = swSheetView.GetTableAnnotations\n    \n    If Not IsEmpty(vTableAnns) Then\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(vTableAnns)\n            \n            Dim swTableAnn As SldWorks.TableAnnotation\n            Set swTableAnn = vTableAnns(j)\n            \n            If swTableAnn Is tableAnn Then\n                \n                Dim swSheet As SldWorks.Sheet\n                Set swSheet = draw.Sheet(swSheetView.GetName2())\n                Set GetSheetFromTableAnnotation = swSheet\n                Exit Function\n                \n            End If\n            \n        Next\n        \n    End If\n    \nNext\n\nErr.Raise vbError, "", "Table does not belong to sheet"\n```\n\n```vba\nFunction HasSpecialSymbols(cell As String) As Boolean\n    HasSpecialSymbols = InStr(cell, ",") > 0 Or InStr(cell, vbLf) > 0 Or InStr(cell, vbNewLine) > 0 Or InStr(cell, """") > 0\nEnd Function\n```\n\n```vba\nFunction ReplaceSpecialSymbols(cell As String) As String\n    cell = Replace(cell, """", """""")\n    ReplaceSpecialSymbols = cell\nEnd Function\n```\n')))}u.isMDXComponent=!0},39986:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/bom-save-as-f0ccdd3484e5fe81cffbb0f45e396c5c.png"},35549:(n,e,t)=>{t.d(e,{Z:()=>a});const a="data:image/png;base64,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"},56660:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/bom-table-e262ae2d0f9541b8f94ab1fcb9f45109.png"}}]);