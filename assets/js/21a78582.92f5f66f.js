"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[17499],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(t),f=r,h=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return t?i.createElement(h,s(s({ref:n},c),{},{components:t})):i.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var d=2;d<o;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},16482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(87462),r=(t(67294),t(3905));const o={layout:"sw-tool",title:"Macro to make independent copy of the SOLIDWORKS component and copy drawing",caption:"Make Independent With Drawing",description:"VBA macro allows to make an independent copy of the selected component, update reference in assembly and copy associated drawing",image:"make-independent-drawing.svg",labels:["make independent","drawing","component"],group:"Assembly"},s=void 0,a={unversionedId:"codestack/solidworks-api/document/assembly/components/make-independent-drawing/index",id:"codestack/solidworks-api/document/assembly/components/make-independent-drawing/index",title:"Macro to make independent copy of the SOLIDWORKS component and copy drawing",description:"VBA macro allows to make an independent copy of the selected component, update reference in assembly and copy associated drawing",source:"@site/docs/codestack/solidworks-api/document/assembly/components/make-independent-drawing/index.md",sourceDirName:"codestack/solidworks-api/document/assembly/components/make-independent-drawing",slug:"/codestack/solidworks-api/document/assembly/components/make-independent-drawing/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/assembly/components/make-independent-drawing/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/assembly/components/make-independent-drawing/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to make independent copy of the SOLIDWORKS component and copy drawing",caption:"Make Independent With Drawing",description:"VBA macro allows to make an independent copy of the selected component, update reference in assembly and copy associated drawing",image:"make-independent-drawing.svg",labels:["make independent","drawing","component"],group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"Get Model Doc from lightweight component using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/assembly/components/lightweight-get-model-doc/"},next:{title:"Move selected components to feature folder using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/assembly/components/move-to-folder/"}},l={},d=[{value:"Notes",id:"notes",level:2}],c={toc:d},p="wrapper";function m(e){let{components:n,...o}=e;return(0,r.kt)(p,(0,i.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA macro mimics the functionality of ",(0,r.kt)("strong",{parentName:"p"},"Make Independent")," feature of SOLIDWORKS, but will also additionally copy and rename the file associated with the copied part or assembly component."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Make Independent menu command",src:t(69432).Z,width:"452",height:"148"})),(0,r.kt)("p",null,"This macro can work with a single component or multiple selected components, but all of the components must correspond to the same file."),(0,r.kt)("p",null,"Macro will copy the associated drawing and place it next to the target file with the same name."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Macro will only copy drawing which matches the name of the source file and placed in the same folder"),(0,r.kt)("li",{parentName:"ul"},"Macro will not overwrite the destination drawing file if already exists")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Private Declare PtrSafe Function GetSaveFileName Lib "comdlg32.dll" Alias "GetSaveFileNameA" (pOpenfilename As OPENFILENAME) As Boolean\n\nPrivate Type OPENFILENAME\n  lStructSize As Long\n  hwndOwner As LongPtr\n  hInstance As LongPtr\n  lpstrFilter As String\n  lpstrCustomFilter As String\n  nMaxCustFilter As Long\n  nFilterIndex As Long\n  lpstrFile As String\n  nMaxFile As Long\n  lpstrFileTitle As String\n  nMaxFileTitle As Long\n  lpstrInitialDir As String\n  lpstrTitle As String\n  Flags As LongPtr\n  nFileOffset As Integer\n  nFileExtension As Integer\n  lpstrDefExt As String\n  lCustData As Long\n  lpfnHook As Long\n  lpTemplateName As String\nEnd Type\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry_:\n    On Error GoTo catch_\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Then\n            Dim swAssy As SldWorks.AssemblyDoc\n            \n            Set swAssy = swModel\n            \n            Dim vComps As Variant\n            vComps = GetSelectedComponents(swModel.SelectionManager)\n            \n            If Not IsEmpty(vComps) Then\n            \n                Dim i As Integer\n                Dim path As String\n                path = vComps(0).GetPathName()\n                \n                For i = 1 To UBound(vComps)\n                    If LCase(vComps(i).GetPathName()) <> LCase(path) Then\n                        Err.Raise vbError, "", "Only identical components are supported"\n                    End If\n                Next\n                \n                Dim ext As String\n                ext = Right(path, Len(path) - InStrRev(path, ".") + 1)\n                \n                Dim filter As String\n                Dim fileType As String\n                \n                If LCase(ext) = ".sldprt" Then\n                    fileType = "SOLIDWORKS Parts"\n                ElseIf LCase(ext) = ".sldasm" Then\n                    fileType = "SOLIDWORKS Assemblies"\n                Else\n                    Err.Raise vbError, "", "Unknown error"\n                End If\n                \n                filter = fileType & " (*" & ext & ")|*" & ext & "|All Files (*.*)|*.*"\n                \n                Dim replaceFilePath As String\n                replaceFilePath = BrowseForFileSave("Select replacement file path", filter, path)\n                \n                If replaceFilePath <> "" Then\n                    If False = swAssy.MakeIndependent(replaceFilePath) Then\n                        Err.Raise vbError, "", "Failed to make components independent"\n                    End If\n                    \n                    MakeDrawingIndependent path, replaceFilePath\n                    \n                End If\n            Else\n                Err.Raise vbError, "", "Select components"\n            End If\n            \n        Else\n            Err.Raise vbError, "", "Only assembly documents are supported"\n        End If\n        \n    Else\n        Err.Raise vbError, "", "No model found"\n    End If\n    \n    GoTo finally_\n    \ncatch_:\n    MsgBox Err.Description, vbCritical\nfinally_:\n    \nEnd Sub\n\nSub MakeDrawingIndependent(srcFilePath As String, destFilePath As String)\n        \n    Dim srcDrwFilePath As String\n    srcDrwFilePath = Left(srcFilePath, InStrRev(srcFilePath, ".") - 1) & ".slddrw"\n    \n    Dim destDrwFilePath As String\n    destDrwFilePath = Left(destFilePath, InStrRev(destFilePath, ".") - 1) & ".slddrw"\n\n    Dim fso As Object\n    Set fso = CreateObject("Scripting.FileSystemObject")\n\n    If fso.FileExists(srcDrwFilePath) Then\n        \n        If fso.FileExists(destDrwFilePath) Then\n            Err.Raise vbError, "", "Destination drawing already exists"\n        End If\n        \n        fso.CopyFile srcDrwFilePath, destDrwFilePath, False\n        \n        Dim destDrwFilePathAttr As VbFileAttribute\n        destDrwFilePathAttr = GetAttr(destDrwFilePath)\n        \n        If destDrwFilePathAttr And vbReadOnly Then\n            Debug.Print "Removing the read-only flag from the destination drawing: " & destDrwFilePath\n            SetAttr destDrwFilePath, destDrwFilePathAttr Xor vbReadOnly\n        End If\n        \n        If False = swApp.ReplaceReferencedDocument(destDrwFilePath, srcFilePath, destFilePath) Then\n            Err.Raise vbError, "", "Failed to replace referenced drawing document"\n        End If\n                \n    End If\n    \nEnd Sub\n\nFunction GetSelectedComponents(selMgr As SldWorks.SelectionMgr) As Variant\n\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swComps() As SldWorks.Component2\n\n    Dim i As Integer\n    \n    For i = 1 To selMgr.GetSelectedObjectCount2(-1)\n                \n        Dim swComp As SldWorks.Component2\n    \n        Set swComp = selMgr.GetSelectedObjectsComponent4(i, -1)\n        \n        If Not swComp Is Nothing Then\n            \n            If Not isInit Then\n                ReDim swComps(0)\n                Set swComps(0) = swComp\n                isInit = True\n            Else\n                If Not Contains(swComps, swComp) Then\n                    ReDim Preserve swComps(UBound(swComps) + 1)\n                    Set swComps(UBound(swComps)) = swComp\n                End If\n            End If\n                        \n        End If\n    \n    Next\n\n    If isInit Then\n        GetSelectedComponents = swComps\n    Else\n        GetSelectedComponents = Empty\n    End If\n\nEnd Function\n\nFunction BrowseForFileSave(title As String, filters As String, initFilePath As String) As String\n    \n    Dim ofn As OPENFILENAME\n    Const FILE_PATH_BUFFER_SIZE As Integer = 260\n    \n    Dim initFileName As String\n    initFileName = Right(initFilePath, Len(initFilePath) - InStrRev(initFilePath, "\\"))\n    \n    ofn.lpstrFilter = Replace(filters, "|", Chr(0)) & Chr(0)\n    ofn.lpstrTitle = title\n    ofn.nMaxFile = FILE_PATH_BUFFER_SIZE\n    ofn.nMaxFileTitle = FILE_PATH_BUFFER_SIZE\n    ofn.lpstrInitialDir = Left(initFilePath, InStrRev(initFilePath, "\\") - 1)\n    ofn.lpstrFile = initFileName & String(FILE_PATH_BUFFER_SIZE - Len(initFileName), Chr(0))\n    ofn.lStructSize = LenB(ofn)\n    \n    Dim res As Boolean\n    \n    res = GetSaveFileName(ofn)\n\n    If res Then\n        \n        Dim filePath As String\n        filePath = Left(ofn.lpstrFile, InStr(ofn.lpstrFile, vbNullChar) - 1)\n        \n        Dim vFilters As Variant\n        vFilters = Split(filters, "|")\n        Dim ext As String\n        ext = vFilters((ofn.nFilterIndex - 1) * 2 + 1)\n        ext = Right(ext, Len(ext) - InStrRev(ext, ".") + 1)\n        \n        If LCase(Right(filePath, Len(ext))) <> LCase(ext) Then\n            filePath = filePath & ext\n        End If\n        \n        BrowseForFileSave = filePath\n        \n    Else\n        BrowseForFileSave = ""\n    End If\n    \nEnd Function\n\nFunction Contains(vArr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vArr)\n        If vArr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}m.isMDXComponent=!0},69432:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/make-independent-menu-bc77441dfeca8cc127b1d2c76332a649.png"}}]);