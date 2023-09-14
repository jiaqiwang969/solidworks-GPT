"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[35350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),d=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,u=c["".concat(l,".").concat(m)]||c[m]||w[m]||r;return n?s.createElement(u,a(a({ref:t},p),{},{components:n})):s.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<r;d++)a[d]=n[d];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>w,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(87462),o=(n(67294),n(3905));const r={layout:"sw-tool",title:"Export individual sheets from SOLIDWORKS drawing to PDF",caption:"Export Sheets To PDF",description:"VBA macro to export all sheets (or selected sheets) from multi-sheets drawing to individual PDF files",image:"exports-sheets-pdf.svg",labels:["sheet","pdf","drawing","export"],group:"Import/Export"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-sheets-pdf/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-sheets-pdf/index",title:"Export individual sheets from SOLIDWORKS drawing to PDF",description:"VBA macro to export all sheets (or selected sheets) from multi-sheets drawing to individual PDF files",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-sheets-pdf/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-sheets-pdf",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-sheets-pdf/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-sheets-pdf/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-sheets-pdf/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Export individual sheets from SOLIDWORKS drawing to PDF",caption:"Export Sheets To PDF",description:"VBA macro to export all sheets (or selected sheets) from multi-sheets drawing to individual PDF files",image:"exports-sheets-pdf.svg",labels:["sheet","pdf","drawing","export"],group:"Import/Export"},sidebar:"tutorialSidebar",previous:{title:"Export flat pattern view in the drawing using VBA macro",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-sheet-metal-views/"},next:{title:"Export part or selected component to STL using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-stl/"}},l={},d=[],p={toc:d},c="wrapper";function w(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Multi sheet drawing",src:n(89395).Z,width:"837",height:"669"}),"{ width=500 }"),(0,o.kt)("p",null,"This VBA macro allows to export all sheets (or selected sheets) from the active SOLIDWORKS drawing into the separate PDF files. If no sheets selected - all sheets will be exported."),(0,o.kt)("p",null,"PDF files are saved to the same folder as original drawing and named after the sheet. "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"INCLUDE_DRAWING_NAME")," option allows to also include the name of the drawing to the output PDF if set to ",(0,o.kt)("em",{parentName:"p"},"True"),", otherwise only sheet name is used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged-bottom","jagged-bottom":!0},"Const INCLUDE_DRAWING_NAME As Boolean = True 'include the name of the drawing\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const INCLUDE_DRAWING_NAME As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry_:\n    \n    On Error GoTo catch_\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swDraw\n        \n    If swModel.GetPathName() = "" Then\n        Err.Raise vbError, "", "Please save drawing"\n    End If\n        \n    Dim vSheetNames As Variant\n    \n    Dim i As Integer\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim selSheetNames() As String\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelSHEETS Then\n            \n            If (Not selSheetNames) = -1 Then\n                ReDim selSheetNames(0)\n            Else\n                ReDim Preserve selSheetNames(UBound(selSheetNames) + 1)\n            End If\n            Dim swSheet As SldWorks.Sheet\n            Set swSheet = swSelMgr.GetSelectedObject6(i, -1)\n            \n            selSheetNames(UBound(selSheetNames)) = swSheet.GetName()\n            \n        End If\n    Next\n    \n    If (Not selSheetNames) = -1 Then\n        vSheetNames = swDraw.GetSheetNames\n    Else\n        vSheetNames = selSheetNames\n    End If\n    \n    For i = 0 To UBound(vSheetNames)\n        \n        Dim sheetName As String\n        sheetName = vSheetNames(i)\n        \n        Dim swExpPdfData As SldWorks.ExportPdfData\n        Set swExpPdfData = swApp.GetExportFileData(swExportDataFileType_e.swExportPdfData)\n        \n        Dim errs As Long\n        Dim warns As Long\n        \n        Dim expSheets(0) As String\n        expSheets(0) = sheetName\n        \n        swExpPdfData.ExportAs3D = False\n        swExpPdfData.ViewPdfAfterSaving = False\n        swExpPdfData.SetSheets swExportDataSheetsToExport_e.swExportData_ExportSpecifiedSheets, expSheets\n        \n        Dim drawName As String\n        drawName = swModel.GetPathName()\n        drawName = Mid(drawName, InStrRev(drawName, "\\") + 1, Len(drawName) - InStrRev(drawName, "\\") - Len(".slddrw"))\n        \n        Dim outFile As String\n        outFile = swModel.GetPathName()\n        outFile = Left(outFile, InStrRev(outFile, "\\"))\n        outFile = outFile & IIf(INCLUDE_DRAWING_NAME, drawName & "_", "") & sheetName & ".pdf"\n        \n        If False = swModel.Extension.SaveAs(outFile, swSaveAsVersion_e.swSaveAsCurrentVersion, swSaveAsOptions_e.swSaveAsOptions_Silent, swExpPdfData, errs, warns) Then\n            Err.Raise vbError, "", "Failed to export PDF to " & outFile\n        End If\n        \n    Next\n    \n    \n    GoTo finally_\n    \ncatch_:\n    \n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\n    \nfinally_:\n    \nEnd Sub\n')))}w.isMDXComponent=!0},89395:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/drawing-multi-sheets-20a9e35a2d25816297b46cdc661b17cb.png"}}]);