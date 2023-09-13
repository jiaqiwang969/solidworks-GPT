"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[51643],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>D});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=l(t),u=o,D=p["".concat(c,".").concat(u)]||p[u]||d[u]||s;return t?r.createElement(D,i(i({ref:n},m),{},{components:t})):r.createElement(D,i({ref:n},m))}));function D(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const s={title:"Copy documents tree using SOLIDWORKS Document Manager API",caption:"Copy Documents Tree",description:"Example demonstrates how to copy documents (assembly or drawing) tree to a new location by adding the suffix to each file preserving the references using SOLIDWORKS Document Manager API",image:"copy-tree.png",labels:["copy tree","copy documents"]},i=void 0,a={unversionedId:"codestack/solidworks-document-manager-api/application/copy-tree/index",id:"codestack/solidworks-document-manager-api/application/copy-tree/index",title:"Copy documents tree using SOLIDWORKS Document Manager API",description:"Example demonstrates how to copy documents (assembly or drawing) tree to a new location by adding the suffix to each file preserving the references using SOLIDWORKS Document Manager API",source:"@site/docs/codestack/solidworks-document-manager-api/application/copy-tree/index.md",sourceDirName:"codestack/solidworks-document-manager-api/application/copy-tree",slug:"/codestack/solidworks-document-manager-api/application/copy-tree/",permalink:"/solidworks-GPT/docs/codestack/solidworks-document-manager-api/application/copy-tree/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-document-manager-api/application/copy-tree/index.md",tags:[],version:"current",frontMatter:{title:"Copy documents tree using SOLIDWORKS Document Manager API",caption:"Copy Documents Tree",description:"Example demonstrates how to copy documents (assembly or drawing) tree to a new location by adding the suffix to each file preserving the references using SOLIDWORKS Document Manager API",image:"copy-tree.png",labels:["copy tree","copy documents"]},sidebar:"tutorialSidebar",previous:{title:"Utilizing main ISwDMApplication application object in SOLIDWORKS Document Manager API",permalink:"/solidworks-GPT/docs/codestack/solidworks-document-manager-api/application/"},next:{title:"Examples of using ISwDMDocument object for document in Document Manager API",permalink:"/solidworks-GPT/docs/codestack/solidworks-document-manager-api/document/"}},c={},l=[],m={toc:l},p="wrapper";function d(e){let{components:n,...s}=e;return(0,o.kt)(p,(0,r.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SOLIDWORKS Assembly tree copied and suffix is added for each file",src:t(6937).Z,width:"874",height:"744"}),"{ width=350 }"),(0,o.kt)("p",null,"This example demonstrates how to copy the assembly or drawing tree to a new location using SOLIDWORKS Document Manager API. Macro allows to add suffix to each file in the tree. Macro will preserve and replace all the required references on all levels of the assembly."),(0,o.kt)("p",null,"Specify the input file to move, destination folder and suffix in the constants at the beginning of the macro"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILE_PATH As String = "D:\\Input\\Assm1.SLDASM" \'full path to an input assembly or drawing\nConst DEST_FOLDER As String = "D:\\Output" \'Destination location. Do not add the backslash \'\\\' at the end of the folder path\nConst SUFFIX As String = "_CodeStack" \'Suffix to add to each file in the tree\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmapplication~copydocument.html"},"ISwDMApplication::CopyDocument")," Document Manager API is used to perform copying of files and all references."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILE_PATH As String = "D:\\Input\\Assm1.SLDASM"\nConst DEST_FOLDER As String = "D:\\Output"\nConst SUFFIX As String = "_CodeStack"\n\nConst LIC_KEY As String = "YOUR LICENSE KEY"\n\nDim swDmApp As SwDocumentMgr.SwDMApplication4\n\nSub main()\n\n    Dim swClassFact As SwDocumentMgr.swDmClassFactory\n    \n    Set swClassFact = New SwDocumentMgr.swDmClassFactory\n    \n    Set swDmApp = swClassFact.GetApplication(LIC_KEY)\n    \n    If Not swDmApp Is Nothing Then\n                \n        Dim i As Integer\n        \n        Dim srcChildren As Variant\n        Dim destChildren() As String\n        Dim destFilePath As String\n        \n        destFilePath = CreateDestinationPath(FILE_PATH, DEST_FOLDER, SUFFIX)\n        \n        srcChildren = GetReferencedDocuments(FILE_PATH)\n        ReDim destChildren(UBound(srcChildren))\n        \n        For i = 0 To UBound(srcChildren)\n            destChildren(i) = CreateDestinationPath(CStr(srcChildren(i)), DEST_FOLDER, SUFFIX)\n        Next\n        \n        Debug.Print swDmApp.CopyDocument(FILE_PATH, destFilePath, srcChildren, destChildren, swMoveCopyOptions_e.swMoveCopyOptionsOverwriteExistingDocs, CreateSearchData())\n        \n    End If\n    \nEnd Sub\n\nFunction CreateDestinationPath(srcPath As String, destFolder As String, suff As String)\n    \n    Dim fileName As String\n    Dim ext As String\n    \n    fileName = Mid(srcPath, InStrRev(srcPath, "\\"), InStrRev(srcPath, ".") - InStrRev(srcPath, "\\"))\n    ext = Right(srcPath, Len(srcPath) - InStrRev(srcPath, ".") + 1)\n    \n    CreateDestinationPath = destFolder & fileName & suff & ext\n    \nEnd Function\n\nFunction GetReferencedDocuments(filePath As String) As Variant\n    \n    Dim refDocs() As String\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swDmDoc As SwDocumentMgr.SwDMDocument19\n    \n    Dim searchOpts As SwDocumentMgr.SwDMSearchOption\n    Set searchOpts = CreateSearchData\n    \n    Set swDmDoc = OpenDocument(filePath)\n    \n    If Not swDmDoc Is Nothing Then\n        \n        Dim vBrokenRefs As Variant\n        Dim vVirtComps As Variant\n        Dim vTimeStamps As Variant\n        Dim vFilePaths As Variant\n        \n        vFilePaths = swDmDoc.GetAllExternalReferences4(searchOpts, vBrokenRefs, vVirtComps, vTimeStamps)\n        \n        If Not IsEmpty(vFilePaths) Then\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vFilePaths)\n                Dim childFilePath As String\n                childFilePath = vFilePaths(i)\n                \n                If Not isInit Then\n                    ReDim refDocs(0)\n                    refDocs(0) = childFilePath\n                    isInit = True\n                ElseIf Not Contains(refDocs, childFilePath) Then\n                    ReDim Preserve refDocs(UBound(refDocs) + 1)\n                    refDocs(UBound(refDocs)) = childFilePath\n                End If\n                \n                Dim vChildRefs As Variant\n                vChildRefs = GetReferencedDocuments(childFilePath)\n                \n                If Not IsEmpty(vChildRefs) Then\n                    Dim j As Integer\n                    For j = 0 To UBound(vChildRefs)\n                        If Not Contains(refDocs, CStr(vChildRefs(j))) Then\n                            ReDim Preserve refDocs(UBound(refDocs) + 1)\n                            refDocs(UBound(refDocs)) = vChildRefs(j)\n                        End If\n                    Next\n                End If\n                \n            Next\n        Else\n            GetReferencedDocuments = Empty\n            Exit Function\n        End If\n        \n    Else\n        err.Raise vbObjectError, "", "Failed to open document: " & filePath\n    End If\n    \n    GetReferencedDocuments = refDocs\n    \nEnd Function\n\nFunction OpenDocument(filePath As String) As SwDocumentMgr.SwDMDocument19\n    \n    Dim err As SwDmDocumentOpenError\n    \n    Dim docType As SwDocumentMgr.SwDmDocumentType\n    \n    Dim ext As String\n    ext = LCase(Right(filePath, 6))\n    \n    Select Case ext\n        Case "sldprt"\n            docType = swDmDocumentPart\n        Case "sldasm"\n            docType = swDmDocumentAssembly\n        Case "slddrw"\n            docType = swDmDocumentDrawing\n    End Select\n    \n    Dim swDmDoc As SwDocumentMgr.SwDMDocument19\n    \n    Set swDmDoc = swDmApp.GetDocument(filePath, docType, True, err)\n    \n    Set OpenDocument = swDmDoc\n    \nEnd Function\n\nFunction CreateSearchData() As SwDocumentMgr.SwDMSearchOption\n    \n    Dim searchOpts As SwDocumentMgr.SwDMSearchOption\n    \n    Set searchOpts = swDmApp.GetSearchOptionObject\n    searchOpts.SearchFilters = SwDmSearchFilters.SwDmSearchExternalReference + SwDmSearchFilters.SwDmSearchRootAssemblyFolder + SwDmSearchFilters.SwDmSearchSubfolders + SwDmSearchFilters.SwDmSearchInContextReference\n    \n    Set CreateSearchData = searchOpts\n    \nEnd Function\n\nFunction Contains(arr As Variant, item As String) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(arr)\n        If LCase(arr(i)) = LCase(item) Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}d.isMDXComponent=!0},6937:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/copy-tree-6cf728f58fa2275c14dbe407df702d8e.png"}}]);