"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[51255],{3905:(e,n,t)=>{t.d(n,{Zo:()=>A,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),c=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},A=function(e){var n=c(e.components);return o.createElement(a.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,m=d["".concat(a,".").concat(u)]||d[u]||f[u]||i;return t?o.createElement(m,s(s({ref:n},A),{},{components:t})):o.createElement(m,s({ref:n},A))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67099:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const i={layout:"sw-tool",caption:"Collect Reference Documents",title:"Macro to collect all reference documents of assembly into a folder",description:"VBA macro to collect all reference output files (e.g. DXF, PDF) from all folders into a single folder",image:"collect-reference-documents.svg",group:"Assembly"},s=void 0,l={unversionedId:"codestack-clone/solidworks-api/application/documents/collect-reference-documents/index",id:"codestack-clone/solidworks-api/application/documents/collect-reference-documents/index",title:"Macro to collect all reference documents of assembly into a folder",description:"VBA macro to collect all reference output files (e.g. DXF, PDF) from all folders into a single folder",source:"@site/docs/codestack-clone/solidworks-api/application/documents/collect-reference-documents/index.md",sourceDirName:"codestack-clone/solidworks-api/application/documents/collect-reference-documents",slug:"/codestack-clone/solidworks-api/application/documents/collect-reference-documents/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/application/documents/collect-reference-documents/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/application/documents/collect-reference-documents/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",caption:"Collect Reference Documents",title:"Macro to collect all reference documents of assembly into a folder",description:"VBA macro to collect all reference output files (e.g. DXF, PDF) from all folders into a single folder",image:"collect-reference-documents.svg",group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"Bring document foreground (activate document) using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/application/documents/bring-document-foreground/"},next:{title:"Run VBA macro automatically on document load using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/application/documents/handle-document-load/"}},a={},c=[{value:"Notes",id:"notes",level:2},{value:"Configuration",id:"configuration",level:2}],A={toc:c},d="wrapper";function f(e){let{components:n,...i}=e;return(0,r.kt)(d,(0,o.Z)({},A,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA macro allows to collect all output files such as DXF, DWG, PDF etc. from all referenced parts and sub-assembly documents on all levels and copy to a specified folder."),(0,r.kt)("p",null,"Referenced parts and sub-assemblies can be located in any directory. It is not required those to be in the same folder or drive of a main assembly."),(0,r.kt)("p",null,"For example the main assembly ",(0,r.kt)("strong",{parentName:"p"},"TopAssm1.sldasm")," is saved in ",(0,r.kt)("strong",{parentName:"p"},"C:\\Assms")," folder and it refers 2 part files located in ",(0,r.kt)("strong",{parentName:"p"},"D:\\Parts\\A\\Part1.sldprt")," and ",(0,r.kt)("strong",{parentName:"p"},"D:\\Parts\\B\\Part2.sldprt"),". DXF and PDF files were created for Part1 and Part2 and saved in the same folder, i.e. ",(0,r.kt)("strong",{parentName:"p"},"D:\\Parts\\A\\Part1.dxf"),", ",(0,r.kt)("strong",{parentName:"p"},"D:\\Parts\\A\\Part1.pdf"),", ",(0,r.kt)("strong",{parentName:"p"},"D:\\Parts\\B\\Part2.dxf"),", ",(0,r.kt)("strong",{parentName:"p"},"D:\\Parts\\B\\Part2.pdf"),". As the result of running this macro all those 4 files will be copied to the specified output folder."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reference documents must have the same name as the file they derived from, i.e. ",(0,r.kt)("strong",{parentName:"li"},"Part1.pdf")," is derived from ",(0,r.kt)("strong",{parentName:"li"},"Part1.sldprt")),(0,r.kt)("li",{parentName:"ul"},"Reference documents of the main assembly will also be included"),(0,r.kt)("li",{parentName:"ul"},"Macro will open the folder browse dialog to select the output folder"),(0,r.kt)("li",{parentName:"ul"},"All file paths which are copied are output to the ",(0,r.kt)("em",{parentName:"li"},"Immediate")," window of VBA editor"),(0,r.kt)("li",{parentName:"ul"},"Suppressed components will not be included into the collection"),(0,r.kt)("li",{parentName:"ul"},"Assembly opened in Large Design Review mode is not supported")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Output log",src:t(31712).Z,width:"550",height:"193"})),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Macro can be configured by changing the constants at the beginning of the macro"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const SEARCH_SUB_FOLDERS As Boolean = False\nConst EXTENSIONS As String = "dxf,pdf"\nConst ALLOW_OVERWRITE As Boolean = False\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SEARCH_SUB_FOLDERS")," indicates if macro should recursively search referenced documents. If this option is set to ",(0,r.kt)("strong",{parentName:"p"},"False")," only files next to the source files will be collected (e.g. Part1.dxf must be in the same folder as Part1.sldprt). In some cases output files can be placed into sub-folders (e.g. DXFs\\Part1.dxf of Part1.sldprt) to collect such files set the ",(0,r.kt)("strong",{parentName:"p"},"SEARCH_SUB_FOLDERS")," to ",(0,r.kt)("strong",{parentName:"p"},"True"),". Note, if any child folder contains another file with the same name it will also be collected (e.g. A\\B\\C\\Part1.pdf)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"EXTENSIONS")," is a comma-separated list of file extension to collect."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ALLOW_OVERWRITE")," option indicates if the files in the destination directory need to be overwritten if exist. It is recommended to set this option to ",(0,r.kt)("strong",{parentName:"p"},"False")," and manually clean the target directory. This would reduce the risk of overwriting the files and catching the potential errors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const SEARCH_SUB_FOLDERS As Boolean = False\nConst EXTENSIONS As String = "dxf,pdf"\nConst ALLOW_OVERWRITE As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry_:\n    On Error GoTo catch_\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    Set swAssy = swApp.ActiveDoc\n    \n    If False <> swAssy.IsOpenedViewOnly() Then\n        Err.Raise vbError, "", "Assembly opened in Large Design Review mode is not supported"\n    End If\n    \n    Dim exts As Variant\n    exts = Split(EXTENSIONS, ",")\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(exts)\n        exts(i) = Trim(CStr(exts(i)))\n    Next\n    \n    Dim destDir As String\n    destDir = BrowseForFolder("Select folder to copy documents to")\n    \n    If destDir = "" Then\n        Exit Sub\n    End If\n        \n    Dim vRefDocs As Variant\n    vRefDocs = CollectRefDocuments(swAssy, exts, SEARCH_SUB_FOLDERS)\n    \n    If Not IsEmpty(vRefDocs) Then\n        CopyRefDocs vRefDocs, destDir\n    Else\n        Err.Raise vbError, "", "There are no referenced documents"\n    End If\n    \n    GoTo finally_\ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n    \nEnd Sub\n\nSub CopyRefDocs(refDocs As Variant, destFolder As String)\n    \n    Dim fso As Object\n    Set fso = CreateObject("Scripting.FileSystemObject")\n\n    Dim i As Integer\n    \n    If Right(destFolder, 1) <> "\\" Then\n        destFolder = destFolder & "\\"\n    End If\n    \n    For i = 0 To UBound(refDocs)\n        \n        Dim srcFilePath As String\n        srcFilePath = CStr(refDocs(i))\n        \n        Debug.Print "Copying " & srcFilePath & " to " & destFolder\n        \n        fso.CopyFile srcFilePath, destFolder, ALLOW_OVERWRITE\n    Next\n    \nEnd Sub\n\nFunction CollectRefDocuments(assy As SldWorks.AssemblyDoc, exts As Variant, includeSubFolder As Boolean) As Variant\n    \n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim vComps As Variant\n    vComps = assy.GetComponents(False)\n    \n    Dim refDocsPath() As String\n    \n    Dim i As Integer\n    \n    For i = -1 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        \n        If i = -1 Then\n            Set swComp = assy.ConfigurationManager.ActiveConfiguration.GetRootComponent()\n        Else\n            Set swComp = vComps(i)\n        End If\n        \n        If False = swComp.IsSuppressed() Then\n        \n            Dim path As String\n            path = swComp.GetPathName()\n            \n            Dim dir As String\n            dir = Left(path, InStrRev(path, "\\"))\n            \n            Dim vRefFiles As Variant\n            vRefFiles = GetFiles(dir, includeSubFolder, exts)\n            \n            Dim j As Integer\n            \n            Dim srcFileName As String\n            srcFileName = GetFileNameWithoutExtension(path)\n            \n            For j = 0 To UBound(vRefFiles)\n            \n                Dim refFilePath As String\n                refFilePath = CStr(vRefFiles(j))\n                \n                Dim refFileName As String\n                refFileName = GetFileNameWithoutExtension(refFilePath)\n                \n                If LCase(srcFileName) = LCase(refFileName) Then\n                \n                    Dim add As Boolean\n                    add = False\n                    \n                    If Not isInit Then\n                        isInit = True\n                        ReDim refDocsPath(0)\n                        add = True\n                    Else\n                        If Not Contains(refDocsPath, refFilePath) Then\n                            ReDim Preserve refDocsPath(UBound(refDocsPath) + 1)\n                            add = True\n                        End If\n                    End If\n                    \n                    If add Then\n                        refDocsPath(UBound(refDocsPath)) = refFilePath\n                    End If\n                \n                End If\n                \n            Next\n            \n        End If\n        \n    Next\n    \n    If isInit Then\n        CollectRefDocuments = refDocsPath\n    Else\n        CollectRefDocuments = Empty\n    End If\n    \nEnd Function\n\nFunction GetFileNameWithoutExtension(filePath As String) As String\n    GetFileNameWithoutExtension = Mid(filePath, InStrRev(filePath, "\\") + 1, InStrRev(filePath, ".") - InStrRev(filePath, "\\") - 1)\nEnd Function\n\nFunction GetFiles(path As String, includeSubFolders As Boolean, exts As Variant) As Variant\n\n    Dim paths() As String\n    Dim isInit As Boolean\n    \n    isInit = False\n    \n    Dim fso As Object\n    Set fso = CreateObject("Scripting.FileSystemObject")\n    \n    Dim folder As Object\n    Set folder = fso.GetFolder(path)\n    \n    CollectFilesFromFolder folder, includeSubFolders, exts, paths, isInit\n    \n    If isInit Then\n        GetFiles = paths\n    Else\n        GetFiles = Empty\n    End If\n    \nEnd Function\n\nSub CollectFilesFromFolder(folder As Object, includeSubFolders As Boolean, exts As Variant, ByRef paths() As String, ByRef isInit As Boolean)\n    \n    For Each file In folder.files\n        \n        Dim fileExt As String\n        fileExt = Right(file.path, Len(file.path) - InStrRev(file.path, "."))\n        \n        If Contains(exts, fileExt) Then\n            If Not isInit Then\n                ReDim paths(0)\n                isInit = True\n            Else\n                ReDim Preserve paths(UBound(paths) + 1)\n            End If\n            paths(UBound(paths)) = file.path\n        End If\n    Next\n    \n    If includeSubFolders Then\n        Dim subFolder As Object\n        For Each subFolder In folder.SubFolders\n            CollectFilesFromFolder subFolder, includeSubFolders, exts, paths, isInit\n        Next\n    End If\n    \nEnd Sub\n\nFunction BrowseForFolder(Optional title As String = "Select Folder") As String\n    \n    Dim shellApp As Object\n    \n    Set shellApp = CreateObject("Shell.Application")\n    \n    Dim folder As Object\n    Set folder = shellApp.BrowseForFolder(0, title, 0)\n    \n    If Not folder Is Nothing Then\n        BrowseForFolder = folder.Self.path\n    End If\n    \nEnd Function\n\nFunction Contains(arr As Variant, item As String) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(arr)\n        If LCase(arr(i)) = LCase(item) Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}f.isMDXComponent=!0},31712:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,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"}}]);