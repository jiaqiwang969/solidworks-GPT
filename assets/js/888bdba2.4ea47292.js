"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[73260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||w[u]||s;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>w,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const s={layout:"sw-tool",title:"Macro to export selected sketch in SOLIDWORKS file to DXF/DWG file",caption:"Export Sketch To DXF/DWG",description:"VBA macro to export the selected 2D sketch in SOLIDWORKS part or assembly file to the DXF or DWG file",image:"dxf-sketch.svg",labels:["sketch","export","dxf","dwg"],group:"Import/Export"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-dxf-dwg/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-dxf-dwg/index",title:"Macro to export selected sketch in SOLIDWORKS file to DXF/DWG file",description:"VBA macro to export the selected 2D sketch in SOLIDWORKS part or assembly file to the DXF or DWG file",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-dxf-dwg/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-dxf-dwg",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-dxf-dwg/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-dxf-dwg/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-dxf-dwg/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to export selected sketch in SOLIDWORKS file to DXF/DWG file",caption:"Export Sketch To DXF/DWG",description:"VBA macro to export the selected 2D sketch in SOLIDWORKS part or assembly file to the DXF or DWG file",image:"dxf-sketch.svg",labels:["sketch","export","dxf","dwg"],group:"Import/Export"},sidebar:"tutorialSidebar",previous:{title:"Import points cloud from CSV file into sketch via SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/csv-import-points/"},next:{title:"VBA macro to export sketch point coordinates to CSV file",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/export-point-coordinates/"}},l={},c=[{value:"Options",id:"options",level:2}],p={toc:c},d="wrapper";function w(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DXF/DWG file created from the sketch",src:n(35501).Z,width:"614",height:"525"}),"{ width=350 }"),(0,r.kt)("p",null,"This VBA macro exports the selected 2D sketch in part or assembly to DXF or DWG file."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"Configure the name of the output file by modifying the ",(0,r.kt)("em",{parentName:"p"},"EXPORT_NAME_TEMPLATE")," constant as shown below using free text and placeholders."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","title","]"," placeholder will be replaced with the title of the original part or assembly file (without extension)"),(0,r.kt)("li",{parentName:"ul"},"[","sketch","]"," placeholder will be replaced with the name of the sketch DXF\\DWG file created from")),(0,r.kt)("p",null,"Specify the extension (.dxf or .dwg) in the file template"),(0,r.kt)("p",null,"File wil be saved in the same directory as original part or assembly document."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const EXPORT_NAME_TEMPLATE As String = "ExportFile_[title]_[sketch].dxf"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nConst EXPORT_NAME_TEMPLATE As String = "[title]_[sketch].dxf"\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry:\n    On Error GoTo catch\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swSketchFeat As SldWorks.Feature\n    Set swSketchFeat = swSelMgr.GetSelectedObject6(1, -1)\n    \n    If swSketchFeat.GetTypeName2() = "ProfileFeature" Then\n        \n        swSketchFeat.Select2 False, -1\n        swModel.EditCopy\n        \n        Dim drawTemplate As String\n        drawTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplateDrawing)\n        \n        If drawTemplate = "" Then\n            Err.Raise vbError, "", "Failed to find the default template"\n        End If\n        \n        Dim swDraw As SldWorks.ModelDoc2\n        Set swDraw = swApp.NewDocument(drawTemplate, swDwgPaperSizes_e.swDwgPapersUserDefined, 0.1, 0.1)\n        swDraw.Paste\n        \n        Dim errs As Long\n        Dim warns As Long\n        Dim exportFilePath As String\n        exportFilePath = GetExportFilePath(swModel, swSketchFeat)\n        \n        If False = swDraw.Extension.SaveAs(exportFilePath, swSaveAsVersion_e.swSaveAsCurrentVersion, swSaveAsOptions_e.swSaveAsOptions_Silent, Nothing, errs, warns) Then\n            Err.Raise vbError, "", "Failed to export to DXF, DWG"\n        End If\n        \n        swApp.CloseDoc swDraw.GetTitle\n        \n    Else\n        Err.Raise vbError, "", "Please select 2D sketch to export"\n    End If\n    \n    GoTo finally\ncatch:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally:\n    \nEnd Sub\n\nFunction GetExportFilePath(model As SldWorks.ModelDoc2, sketch As SldWorks.Feature) As String\n\n    Const PLACEHOLDER_TITLE As String = "[title]"\n    Const PLACEHOLDER_SKETCH As String = "[sketch]"\n    \n    Dim path As String\n    Dim dir As String\n    Dim title As String\n    \n    path = model.GetPathName\n    \n    If path = "" Then\n        Err.Raise vbError, "", "Original model is never saved"\n    End If\n    \n    title = Mid(path, InStrRev(path, "\\") + 1, InStrRev(path, ".") - InStrRev(path, "\\") - 1)\n    dir = Left(path, InStrRev(path, "\\"))\n    \n    Dim newTitle As String\n    Dim newPath As String\n    \n    newTitle = Replace(EXPORT_NAME_TEMPLATE, PLACEHOLDER_TITLE, title)\n    newTitle = Replace(newTitle, PLACEHOLDER_SKETCH, sketch.Name)\n    newPath = dir & newTitle\n            \n    GetExportFilePath = newPath\n    \nEnd Function\n')))}w.isMDXComponent=!0},35501:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sketch-dwf-dwg-4c4d06f3e27e88d0a8cfd69fe582f297.png"}}]);