"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[77701],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>w});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(o),f=r,w=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return o?n.createElement(w,s(s({ref:t},d),{},{components:o})):n.createElement(w,s({ref:t},d))}));function w(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},34997:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const i={caption:"Export Drawing As PDF Into Selected Folder",title:"Macro to save active drawing as PDF file into selected output folder and close drawing",description:"VBA macro which saves active SOLIDWORKS drawing as PDF file to a selected output folder and saves and closes the original drawing"},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-pdf-browse-folder/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-pdf-browse-folder/index",title:"Macro to save active drawing as PDF file into selected output folder and close drawing",description:"VBA macro which saves active SOLIDWORKS drawing as PDF file to a selected output folder and saves and closes the original drawing",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-pdf-browse-folder/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-pdf-browse-folder",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-pdf-browse-folder/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-pdf-browse-folder/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-pdf-browse-folder/index.md",tags:[],version:"current",frontMatter:{caption:"Export Drawing As PDF Into Selected Folder",title:"Macro to save active drawing as PDF file into selected output folder and close drawing",description:"VBA macro which saves active SOLIDWORKS drawing as PDF file to a selected output folder and saves and closes the original drawing"},sidebar:"tutorialSidebar",previous:{title:"Macro to export SOLIDWORKS file to multiple formats",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-multi-formats/"},next:{title:"VBA macro to export sketch point coordinates to CSV file",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-point-coordinates/"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA macro performs the following steps with the active SOLIDWORKS drawing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shows ",(0,r.kt)("em",{parentName:"li"},"Browse For Folder")," dialog to select the output folder for the PDF file"),(0,r.kt)("li",{parentName:"ul"},"Saves the active drawing as PDF file into the folder selected in the previous step. File name of the PDF will be the same as file name of the drawing"),(0,r.kt)("li",{parentName:"ul"},"If the original drawing was modified, macro saves the changes"),(0,r.kt)("li",{parentName:"ul"},"Closes the active SOLIDWORKS drawing document")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.ModelDoc2\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If swDraw Is Nothing Then\n        Err.Raise vbError, "", "Open drawing"\n    End If\n    \n    If swDraw.GetType() = swDocumentTypes_e.swDocDRAWING Then\n    \n        Dim outFolder As String\n        outFolder = BrowseForFolder()\n        \n        If Right(outFolder, 1) = "\\" Then\n            outFolder = Left(outFolder, Len(outFolder) - 1)\n        End If\n        \n        If outFolder <> "" Then\n        \n            Dim outFileName As String\n            outFileName = GetFileNameWithoutExtension(swDraw.GetPathName()) & ".pdf"\n            \n            Dim outFilePath As String\n            outFilePath = outFolder & "\\" & outFileName\n            \n            Dim errs As Long\n            Dim warns As Long\n            \n            If False = swDraw.Extension.SaveAs(outFilePath, swSaveAsVersion_e.swSaveAsCurrentVersion, swSaveAsOptions_e.swSaveAsOptions_Silent, Nothing, errs, warns) Then\n                Err.Raise vbError, "", "Failed to export PDF to " & outFile\n            End If\n            \n            If False <> swDraw.GetSaveFlag() Then\n                If False = swDraw.Save3(swSaveAsOptions_e.swSaveAsOptions_Silent, errs, warns) Then\n                    Err.Raise vbError, "", "Failed to save drawing"\n                End If\n            End If\n        \n            swApp.CloseDoc swDraw.GetTitle\n            \n        End If\n    Else\n        Err.Raise vbError, "", "Active document is not a drawing"\n    End If\n    \nEnd Sub\n\nFunction GetFileNameWithoutExtension(filePath As String) As String\n    GetFileNameWithoutExtension = Mid(filePath, InStrRev(filePath, "\\") + 1, InStrRev(filePath, ".") - InStrRev(filePath, "\\") - 1)\nEnd Function\n\nFunction BrowseForFolder(Optional title As String = "Select Folder") As String\n    \n    Dim shellApp As Object\n    \n    Set shellApp = CreateObject("Shell.Application")\n    \n    Dim folder As Object\n    Set folder = shellApp.BrowseForFolder(0, title, 0)\n    \n    If Not folder Is Nothing Then\n        BrowseForFolder = folder.Self.Path\n    End If\n    \nEnd Function\n')))}u.isMDXComponent=!0}}]);