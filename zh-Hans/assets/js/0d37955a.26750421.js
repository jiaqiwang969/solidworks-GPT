"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[98114],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=o.createContext({}),d=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(a.Provider,{value:n},e.children)},p="mdxType",A={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),f=s,u=p["".concat(a,".").concat(f)]||p[f]||A[f]||r;return t?o.createElement(u,i(i({ref:n},c),{},{components:t})):o.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[p]="string"==typeof e?e:s,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},68054:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>A,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(87462),s=(t(67294),t(3905));const r={layout:"sw-tool",title:"Macro to export selected bodies to foreign format",image:"export-bodies.svg",labels:["export","bodies"],group:"Import/Export"},i=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-bodies/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-bodies/index",title:"Macro to export selected bodies to foreign format",description:"When exporting part file to most of the foreign format supported by SOLIDWORKS it is possible to select the scope bodies of export, allowing to only process selected bodies.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-bodies/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-bodies",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-bodies/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-bodies/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-bodies/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to export selected bodies to foreign format",image:"export-bodies.svg",labels:["export","bodies"],group:"Import/Export"},sidebar:"tutorialSidebar",previous:{title:"\u4eceSOLIDWORKS\u96f6\u4ef6\u6216\u88c5\u914d\u4ef6\u7ec4\u4ef6\u5bfc\u51fa\u5c55\u5f00\u56fe\u6848",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-all-flat-patterns/"},next:{title:"\u4eceSOLIDWORKS\u56fe\u7eb8\u5bfc\u51fa\u5c3a\u5bf8\u4fe1\u606f\u5230CSV\u6587\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/export-dimensions/"}},a={},d=[],c={toc:d},p="wrapper";function A(e){let{components:n,...r}=e;return(0,s.kt)(p,(0,o.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When exporting part file to most of the foreign format supported by SOLIDWORKS it is possible to select the scope bodies of export, allowing to only process selected bodies."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Export bodies dialog",src:t(49648).Z,width:"265",height:"133"})),(0,s.kt)("p",null,"However this feature is not supported by all formats. For example the formats such as 3D xml, xaml, amf, 3mf will always export all bodies, regardless of the selection."),(0,s.kt)("p",null,"This VBA macro allows to export only selected bodies to any format supported by SOLIDWORKS."),(0,s.kt)("p",null,"Select the bodies, faces, edges or vertices and run the macro and specify the name of export to produce a result."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Private Declare PtrSafe Function GetSaveFileName Lib "comdlg32.dll" Alias "GetSaveFileNameA" (pOpenfilename As OPENFILENAME) As LongPtr\n\nPrivate Type OPENFILENAME\n  lStructSize As Long\n  hwndOwner As LongPtr\n  hInstance As LongPtr\n  lpstrFilter As String\n  lpstrCustomFilter As String\n  nMaxCustFilter As Long\n  nFilterIndex As Long\n  lpstrFile As String\n  nMaxFile As Long\n  lpstrFileTitle As String\n  nMaxFileTitle As Long\n  lpstrInitialDir As String\n  lpstrTitle As String\n  Flags As LongPtr\n  nFileOffset As Integer\n  nFileExtension As Integer\n  lpstrDefExt As String\n  lCustData As Long\n  lpfnHook As Long\n  lpTemplateName As String\nEnd Type\n\nConst FILTER As String = "3D Manufacturing Format (*.3mf)|*.3mf|3D XML (*.3dxml)|*.3dxml|Additive Manufacturing File (*.amf)|*.amf|Microsoft XAML (*.xaml)|*.xaml|All Files (*.*)|*.*"\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry_:\n    \n    On Error GoTo catch_\n\n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    If swModel Is Nothing Then\n        Err.Raise vbError, "", "Please open model"\n    End If\n    \n    Dim vBodies As Variant\n    vBodies = CollectSelectedBodies(swModel)\n    \n    If Not IsEmpty(vBodies) Then\n        Dim filePath As String\n        filePath = BrowseForFileSave("Select file path to save", FILTER)\n        \n        If filePath <> "" Then\n            ExportBodies filePath, vBodies\n        End If\n    Else\n        Err.Raise vbError, "", "Select bodies to export"\n    End If\n    \n    GoTo finally_\n    \ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n\nEnd Sub\n\nFunction BrowseForFileSave(title As String, filters As String) As String\n    \n    Dim of As OPENFILENAME\n    Const FILE_PATH_BUFFER_SIZE As Integer = 260\n    \n    of.lpstrFilter = Replace(filters, "|", Chr(0)) & Chr(0)\n    of.lpstrTitle = title\n    of.nMaxFile = FILE_PATH_BUFFER_SIZE\n    of.nMaxFileTitle = FILE_PATH_BUFFER_SIZE\n    of.lpstrFile = String(FILE_PATH_BUFFER_SIZE, Chr(0))\n    of.Flags = &H200000\n    of.lStructSize = LenB(of)\n    \n    If GetSaveFileName(of) Then\n        \n        Dim filePath As String\n        filePath = Left(of.lpstrFile, InStr(of.lpstrFile, vbNullChar) - 1)\n        \n        Dim vFilters As Variant\n        vFilters = Split(FILTER, "|")\n        Dim ext As String\n        ext = vFilters((of.nFilterIndex - 1) * 2 + 1)\n        ext = Right(ext, Len(ext) - InStrRev(ext, ".") + 1)\n        \n        If LCase(Right(filePath, Len(ext))) <> LCase(ext) Then\n            filePath = filePath & ext\n        End If\n        \n        BrowseForFileSave = filePath\n        \n    Else\n        BrowseForFileSave = ""\n    End If\n    \nEnd Function\n\nFunction CollectSelectedBodies(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Dim swBodies() As SldWorks.Body2\n    \n    Set swSelMgr = model.SelectionManager\n    \n    Dim i As Integer\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        Dim swSelObj As Object\n        Set swSelObj = swSelMgr.GetSelectedObject6(i, -1)\n        \n        Dim swBody As SldWorks.Body2\n        \n        If TypeOf swSelObj Is SldWorks.Body2 Then\n            Set swBody = swSelObj\n        ElseIf TypeOf swSelObj Is SldWorks.Feature Then\n            Dim swFeat As SldWorks.Feature\n            Set swFeat = swSelObj\n            Dim swFeatFace As SldWorks.Face2\n            Set swFeatFace = swFeat.GetFaces()(0)\n            Set swBody = swFeatFace.GetBody\n        ElseIf TypeOf swSelObj Is SldWorks.Face2 Then\n            Dim swFace As SldWorks.Face2\n            Set swFace = swSelObj\n            Set swBody = swFace.GetBody\n        ElseIf TypeOf swSelObj Is SldWorks.Edge Then\n            Dim swEdge As SldWorks.Edge\n            Set swEdge = swSelObj\n            Set swBody = swEdge.GetBody\n        ElseIf TypeOf swSelObj Is SldWorks.Vertex Then\n            Dim swVertex As SldWorks.Vertex\n            Set swVertex = swSelObj\n            Dim swVertEdge As SldWorks.Edge\n            Set swVertEdge = swVertex.GetEdges()(0)\n            Set swBody = swVertEdge.GetBody\n        Else\n            Err.Raise vbError, "", "Cannot find body of the selected object " & i\n        End If\n        \n        If Not Contains(swBodies, swBody) Then\n            If (Not swBodies) = -1 Then\n                ReDim swBodies(0)\n            Else\n                ReDim Preserve swBodies(UBound(swBodies) + 1)\n            End If\n            Set swBodies(UBound(swBodies)) = swBody\n        End If\n        \n    Next\n    \n    CollectSelectedBodies = swBodies\n    \nEnd Function\n\nSub ExportBodies(filePath As String, vBodies As Variant)\n\n    Dim swTempPart As SldWorks.ModelDoc2\n    \n    Dim swPartTemplate As String\n    swPartTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplatePart)\n    \n    If swPartTemplate = "" Then\n        Err.Raise vbError, "", "No default part template found"\n    End If\n    \n    Dim curErr As ErrObject\n    \ntry_:\n    \n    On Error GoTo catch_\n    \n    Set swTempPart = swApp.NewDocument(swPartTemplate, swDwgPaperSizes_e.swDwgPapersUserDefined, 0, 0)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vBodies)\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = vBodies(i)\n        Set swBody = swBody.Copy\n        \n        Dim swBodyFeat As SldWorks.Feature\n        Set swFeat = swTempPart.CreateFeatureFromBody3(swBody, False, swCreateFeatureBodyOpts_e.swCreateFeatureBodySimplify)\n        \n        If swFeat Is Nothing Then\n            Err.Raise vbError, "", "Failed to create feature from body"\n        End If\n        \n    Next\n    \n    Dim errs As Long\n    Dim warns As Long\n    \n    If False = swTempPart.Extension.SaveAs(filePath, swSaveAsVersion_e.swSaveAsCurrentVersion, swSaveAsOptions_e.swSaveAsOptions_Silent, Nothing, errs, warns) Then\n        Err.Raise vbError, "", "Failed to export file. Error code:" & errs\n    End If\n    \n    GoTo finally_\n    \ncatch_:\n    Set curErr = Err\nfinally_:\n    \n    If Not swTempPart Is Nothing Then\n        swApp.CloseDoc swTempPart.GetTitle\n    End If\n    \n    If Not curErr Is Nothing Then\n        Err.Raise curErr.Number, curErr.Source, curErr.Description\n    End If\n\nEnd Sub\n\nFunction Contains(vArr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n        \n    If Not IsEmpty(vArr) Then\n        \n        For i = 0 To UBound(vArr)\n            If vArr(i) Is item Then\n                Contains = True\n                Exit Function\n            End If\n        Next\n    \n    End If\n    \n    Contains = False\n    \nEnd Function\n')))}A.isMDXComponent=!0},49648:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,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"}}]);