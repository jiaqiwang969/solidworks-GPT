"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[74642],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>h});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var d=o.createContext({}),l=function(n){var e=o.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},c=function(n){var e=l(n.components);return o.createElement(d.Provider,{value:e},n.children)},p="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},w=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,d=n.parentName,c=a(n,["components","mdxType","originalType","parentName"]),p=l(t),w=r,h=p["".concat(d,".").concat(w)]||p[w]||u[w]||i;return t?o.createElement(h,s(s({ref:e},c),{},{components:t})):o.createElement(h,s({ref:e},c))}));function h(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,s=new Array(i);s[0]=w;var a={};for(var d in e)hasOwnProperty.call(e,d)&&(a[d]=e[d]);a.originalType=n,a[p]="string"==typeof n?n:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}w.displayName="MDXCreateElement"},42158:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const i={layout:"sw-tool",title:"Open associated drawings of active document or selected components",image:"open-associated-drawing.svg",labels:["drawing","open","detailing"],group:"Drawing"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/open-associated-drawing/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/open-associated-drawing/index",title:"Open associated drawings of active document or selected components",description:"This VBA macro allows to open the associated drawings of the selected components in the assembly or active document if nothing is selected.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/open-associated-drawing/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/open-associated-drawing",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/open-associated-drawing/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/open-associated-drawing/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/open-associated-drawing/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Open associated drawings of active document or selected components",image:"open-associated-drawing.svg",labels:["drawing","open","detailing"],group:"Drawing"},sidebar:"tutorialSidebar",previous:{title:"Macro to lock sheet format for editing using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/lock-sheet-format/"},next:{title:"VBA macro to open referenced document of the drawing view",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/open-referenced-model/"}},d={},l=[],c={toc:l},p="wrapper";function u(n){let{components:e,...t}=n;return(0,r.kt)(p,(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA macro allows to open the associated drawings of the selected components in the assembly or active document if nothing is selected."),(0,r.kt)("p",null,"Unlike out-of-the-box functionality this macro does not have a limitation related to the drawing to be named after the component and located in the same folder. This macro will find all drawings in all sub-folders of the current folder (folder of the active document) regardless if those are named after the component or not."),(0,r.kt)("p",null,"This macro has an option to open the drawing resolved or in the detailing mode. Modify the value oif ",(0,r.kt)("strong",{parentName:"p"},"OPEN_DRAWING_DETAILING")," to change the behavior."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const OPEN_DRAWING_DETAILING As Boolean = True 'opens drawings in detailing mode\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const OPEN_DRAWING_DETAILING As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \ntry_:\n    On Error GoTo catch_\n    \n    If Not swModel Is Nothing Then\n    \n        If swModel.GetType() <> swDocumentTypes_e.swDocASSEMBLY And _\n            swModel.GetType() <> swDocumentTypes_e.swDocPART Then\n            Err.Raise vbError, "", "Active document is not a part or assembly"\n        End If\n                \n        Dim vDrawings As Variant\n        \n        vDrawings = FindDrawings(swModel)\n                \n        OpenDrawings vDrawings\n        \n        GoTo finally_\n        \n    Else\n        Err.Raise vbError, "", "Please open assembly or drawing document"\n    End If\n\ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n \nEnd Sub\n\nSub OpenDrawings(vPaths As Variant)\n    \n    If Not IsEmpty(vPaths) Then\n            \n        Dim i As Integer\n        \n        For i = 0 To UBound(vPaths)\n            \n            Dim drwFilePath As String\n            drwFilePath = vPaths(i)\n        \n            Dim swDocSpec As SldWorks.DocumentSpecification\n            Set swDocSpec = swApp.GetOpenDocSpec(drwFilePath)\n            \n            If OPEN_DRAWING_DETAILING Then\n                swDocSpec.DetailingMode = True\n            End If\n            \n            Dim swDraw As SldWorks.ModelDoc2\n            Set swDraw = swApp.OpenDoc7(swDocSpec)\n            \n            If swDraw Is Nothing Then\n                Err.Raise vbError, "", "Failed to open drawing. Error code: " & swDocSpec.Error\n            End If\n            \n        Next\n        \n    Else\n        Err.Raise vbError, "", "No component selected"\n    End If\n    \nEnd Sub\n\nFunction FindDrawings(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim drwFilePaths() As String\n        \n    Dim vDrws As Variant\n    Dim i As Integer\n    Dim j As Integer\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    Dim rootDir As String\n    rootDir = Left(model.GetPathName(), InStrRev(model.GetPathName(), "\\"))\n    \n    If swSelMgr.GetSelectedObjectCount2(-1) = 0 Then\n        \n        vDrws = FindAssociatedDrawings(rootDir, model.GetPathName())\n        ReDim drwFilePaths(UBound(vDrws))\n        \n        For j = 0 To UBound(vDrws)\n            drwFilePaths(j) = vDrws(j)\n        Next\n        \n    Else\n        \n        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n            Dim path As String\n            Dim confName As String\n            \n            Dim swComp As SldWorks.Component2\n            Set swComp = swSelMgr.GetSelectedObjectsComponent4(i, -1)\n            \n            If Not swComp Is Nothing Then\n                \n                path = swComp.GetPathName()\n                \n                If model.IsOpenedViewOnly() Then\n                    path = ResolveReferencePath(model.GetPathName(), path)\n                End If\n                \n                vDrws = FindAssociatedDrawings(rootDir, path)\n                        \n                For j = 0 To UBound(vDrws)\n                           \n                    Dim drwFilePath As String\n                    drwFilePath = vDrws(j)\n                    \n                    Dim unique As Boolean\n                    unique = False\n                                    \n                    If (Not drwFilePaths) = -1 Then\n                        ReDim drwFilePaths(0)\n                        unique = True\n                    Else\n                        unique = Not ContainsFilePath(drwFilePaths, drwFilePath)\n                        If True = unique Then\n                            ReDim Preserve drwFilePaths(UBound(drwFilePaths) + 1)\n                        End If\n                    End If\n                        \n                    If True = unique Then\n                        drwFilePaths(UBound(drwFilePaths)) = drwFilePath\n                    End If\n                \n                Next\n                \n            End If\n            \n        Next\n    \n    End If\n    \n    If (Not drwFilePaths) <> -1 Then\n        FindDrawings = drwFilePaths\n    Else\n        FindDrawings = Empty\n    End If\n    \nEnd Function\n\nFunction FindAssociatedDrawings(rootDir As String, filePath As String) As Variant\n    \n    Dim paths() As String\n    \n    Dim fso As Object\n    Set fso = CreateObject("Scripting.FileSystemObject")\n    \n    Dim folder As Object\n    Set folder = fso.GetFolder(rootDir)\n    \n    CollectDrawingFilesFromFolder folder, filePath, paths\n    \n    If (Not paths) <> -1 Then\n        FindAssociatedDrawings = paths\n    Else\n        Err.Raise vbError, "", "Failed to find the associated drawings for " & filePath\n    End If\n    \nEnd Function\n\nSub CollectDrawingFilesFromFolder(folder As Object, targetFilePath As String, ByRef paths() As String)\n    \n    For Each file In folder.files\n        \n        Dim fileExt As String\n        fileExt = Right(file.path, Len(file.path) - InStrRev(file.path, "."))\n        \n        If LCase(fileExt) = LCase("slddrw") Then\n            \n            If IsReferencingDrawing(file.path, targetFilePath) Then\n                If (Not paths) = -1 Then\n                    ReDim paths(0)\n                Else\n                    ReDim Preserve paths(UBound(paths) + 1)\n                End If\n                paths(UBound(paths)) = file.path\n            End If\n        End If\n    Next\n    \n    Dim subFolder As Object\n    For Each subFolder In folder.SubFolders\n        CollectDrawingFilesFromFolder subFolder, targetFilePath, paths\n    Next\n    \nEnd Sub\n\nFunction IsReferencingDrawing(drwFilePath As String, destFilePath As String) As Boolean\n\n    Dim vDepends As Variant\n    vDepends = swApp.GetDocumentDependencies2(drwFilePath, False, True, False)\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(vDepends) Then\n        \n        For i = 1 To UBound(vDepends) Step 2\n            \n            If LCase(CStr(vDepends(i))) = LCase(destFilePath) Then\n                IsReferencingDrawing = True\n                Exit Function\n            End If\n        Next\n    End If\n\n    IsReferencingDrawing = False\n    \nEnd Function\n\nFunction ContainsFilePath(vPaths As Variant, path As String) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vPaths)\n        If LCase(path) = LCase(vPaths(i)) Then\n            ContainsFilePath = True\n            Exit Function\n        End If\n    Next\n    \n    ContainsFilePath = False\n    \nEnd Function\n\nFunction ResolveReferencePath(rootDocPath As String, refPath As String) As String\n    \n    Dim pathParts As Variant\n    pathParts = Split(refPath, "\\")\n    \n    Dim rootFolder As String\n    rootFolder = rootDocPath\n    rootFolder = Left(rootFolder, InStrRev(rootFolder, "\\") - 1)\n\n    Dim i As Integer\n    \n    Dim curRelPath As String\n    \n    For i = UBound(pathParts) To 1 Step -1\n        \n        curRelPath = pathParts(i) & IIf(curRelPath <> "", "\\", "") & curRelPath\n        Dim path As String\n        path = rootFolder & "\\" & curRelPath\n        \n        If Dir(path) <> "" Then\n            ResolveReferencePath = path\n            Exit Function\n        End If\n        \n    Next\n    \n    ResolveReferencePath = refPath\n    \nEnd Function\n')))}u.isMDXComponent=!0}}]);