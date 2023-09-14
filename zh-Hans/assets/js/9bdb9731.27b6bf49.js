"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[61636],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(o),w=r,u=c["".concat(l,".").concat(w)]||c[w]||m[w]||s;return o?n.createElement(u,a(a({ref:t},d),{},{components:o})):n.createElement(u,a({ref:t},d))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=w;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}w.displayName="MDXCreateElement"},1052:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const s={layout:"sw-tool",title:"Export individual sheets from SOLIDWORKS drawing to PDF",caption:"Export Sheets To PDF",description:"VBA macro to export all sheets (or selected sheets) from multi-sheets drawing to individual PDF files",image:"exports-sheets-pdf.svg",labels:["sheet","pdf","drawing","export"],group:"Import/Export"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/export-sheets-pdf/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/export-sheets-pdf/index",title:"Export individual sheets from SOLIDWORKS drawing to PDF",description:"VBA macro to export all sheets (or selected sheets) from multi-sheets drawing to individual PDF files",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/export-sheets-pdf/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/export-sheets-pdf",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/export-sheets-pdf/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/export-sheets-pdf/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/export-sheets-pdf/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Export individual sheets from SOLIDWORKS drawing to PDF",caption:"Export Sheets To PDF",description:"VBA macro to export all sheets (or selected sheets) from multi-sheets drawing to individual PDF files",image:"exports-sheets-pdf.svg",labels:["sheet","pdf","drawing","export"],group:"Import/Export"},sidebar:"tutorialSidebar",previous:{title:"Macro to save active drawing as PDF file into selected output folder and close drawing",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/export-pdf-browse-folder/"},next:{title:"Export part or selected component to STL using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-export/export-stl/"}},l={},p=[],d={toc:p},c="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(c,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Multi sheet drawing",src:o(54046).Z,width:"837",height:"669"}),"{ width=500 }"),(0,r.kt)("p",null,"This VBA macro allows to export all sheets (or selected sheets) from the active SOLIDWORKS drawing into the separate PDF files. If no sheets selected - all sheets will be exported."),(0,r.kt)("p",null,"PDF files are saved to the same folder as original drawing and named after the sheet. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"INCLUDE_DRAWING_NAME")," option allows to also include the name of the drawing to the output PDF if set to ",(0,r.kt)("em",{parentName:"p"},"True"),", otherwise only sheet name is used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged-bottom","jagged-bottom":!0},"Const INCLUDE_DRAWING_NAME As Boolean = True 'include the name of the drawing\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const INCLUDE_DRAWING_NAME As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry_:\n    \n    On Error GoTo catch_\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swDraw\n        \n    If swModel.GetPathName() = "" Then\n        Err.Raise vbError, "", "Please save drawing"\n    End If\n        \n    Dim vSheetNames As Variant\n    \n    Dim i As Integer\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim selSheetNames() As String\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelSHEETS Then\n            \n            If (Not selSheetNames) = -1 Then\n                ReDim selSheetNames(0)\n            Else\n                ReDim Preserve selSheetNames(UBound(selSheetNames) + 1)\n            End If\n            Dim swSheet As SldWorks.Sheet\n            Set swSheet = swSelMgr.GetSelectedObject6(i, -1)\n            \n            selSheetNames(UBound(selSheetNames)) = swSheet.GetName()\n            \n        End If\n    Next\n    \n    If (Not selSheetNames) = -1 Then\n        vSheetNames = swDraw.GetSheetNames\n    Else\n        vSheetNames = selSheetNames\n    End If\n    \n    For i = 0 To UBound(vSheetNames)\n        \n        Dim sheetName As String\n        sheetName = vSheetNames(i)\n        \n        Dim swExpPdfData As SldWorks.ExportPdfData\n        Set swExpPdfData = swApp.GetExportFileData(swExportDataFileType_e.swExportPdfData)\n        \n        Dim errs As Long\n        Dim warns As Long\n        \n        Dim expSheets(0) As String\n        expSheets(0) = sheetName\n        \n        swExpPdfData.ExportAs3D = False\n        swExpPdfData.ViewPdfAfterSaving = False\n        swExpPdfData.SetSheets swExportDataSheetsToExport_e.swExportData_ExportSpecifiedSheets, expSheets\n        \n        Dim drawName As String\n        drawName = swModel.GetPathName()\n        drawName = Mid(drawName, InStrRev(drawName, "\\") + 1, Len(drawName) - InStrRev(drawName, "\\") - Len(".slddrw"))\n        \n        Dim outFile As String\n        outFile = swModel.GetPathName()\n        outFile = Left(outFile, InStrRev(outFile, "\\"))\n        outFile = outFile & IIf(INCLUDE_DRAWING_NAME, drawName & "_", "") & sheetName & ".pdf"\n        \n        If False = swModel.Extension.SaveAs(outFile, swSaveAsVersion_e.swSaveAsCurrentVersion, swSaveAsOptions_e.swSaveAsOptions_Silent, swExpPdfData, errs, warns) Then\n            Err.Raise vbError, "", "Failed to export PDF to " & outFile\n        End If\n        \n    Next\n    \n    \n    GoTo finally_\n    \ncatch_:\n    \n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\n    \nfinally_:\n    \nEnd Sub\n')))}m.isMDXComponent=!0},54046:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/drawing-multi-sheets-20a9e35a2d25816297b46cdc661b17cb.png"}}]);