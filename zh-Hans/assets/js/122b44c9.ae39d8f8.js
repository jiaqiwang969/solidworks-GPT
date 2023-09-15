"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[63524],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>f});var t=o(67294);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,s=function(e,n){if(null==e)return{};var o,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(o),u=s,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return o?t.createElement(f,a(a({ref:n},d),{},{components:o})):t.createElement(f,a({ref:n},d))}));function f(e,n){var o=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=o.length,a=new Array(r);a[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[m]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<r;c++)a[c]=o[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},13739:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=o(87462),s=(o(67294),o(3905));const r={layout:"sw-tool",image:"display-data-mark.svg",group:"Assembly"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/add-display-data-marks/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/add-display-data-marks/index",title:"index",description:"This VBA macro is useful for the users working with assemblies in the Large Design Review mode or when it is required to support configurations in eDrawings.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/add-display-data-marks/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/add-display-data-marks",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/add-display-data-marks/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/add-display-data-marks/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/add-display-data-marks/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",image:"display-data-mark.svg",group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"Macro to move suppressed mates into feature folder using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/move-suppressed-to-folder/"},next:{title:"Assembly components automation using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/"}},l={},c=[],d={toc:c},m="wrapper";function p(e){let{components:n,...r}=e;return(0,s.kt)(m,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This VBA macro is useful for the users working with assemblies in the Large Design Review mode or when it is required to support configurations in eDrawings."),(0,s.kt)("p",null,"By default only active configuration is preserved for using the the Large Design Review mode and other configurations of the assembly cannot be activated:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"No display marks in the assembly configurations",src:o(42797).Z,width:"249",height:"249"})),(0,s.kt)("p",null,"This macro will traverse all components of the root assembly and find all the used configurations and add the display mark data to all of them."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Add display data mark command",src:o(79414).Z,width:"405",height:"427"})),(0,s.kt)("p",null,"This will allow to open all sub components in the Large Design Review mode and activate used configurations."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n            \n    Dim swAssy As SldWorks.AssemblyDoc\n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n    \n        Dim vComps As Variant\n        vComps = CollectSelectedComponents(swAssy)\n        \n        If IsEmpty(vComps) Then\n            vComps = swAssy.GetComponents(False)\n        End If\n        \n        Dim files As Object\n        Set files = CollectFilesNeedDisplayMarks(vComps, swAssy.GetPathName)\n        \n        For Each filePath In files.Keys\n            Dim vConfNames As Variant\n            vConfNames = files.item(filePath)\n            AddDisplayMarks CStr(filePath), vConfNames\n        Next\n    \n    Else\n        Err.Raise vbError, "", "Open assembly"\n    End If\n    \nEnd Sub\n\nFunction CollectSelectedComponents(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim i As Integer\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    Dim swComps() As SldWorks.Component2\n    Dim isInit As Boolean\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelCOMPONENTS Then\n            \n            Dim swComp As SldWorks.Component2\n            Set swComp = swSelMgr.GetSelectedObject6(i, -1)\n            \n            If Not isInit Then\n                isInit = True\n                ReDim swComps(0)\n            Else\n                ReDim Preserve swComps(UBound(swComps) + 1)\n            End If\n            \n            Set swComps(UBound(swComps)) = swComp\n            \n        End If\n    Next\n    \n    If isInit Then\n        CollectSelectedComponents = swComps\n    Else\n        CollectSelectedComponents = Empty\n    End If\n    \nEnd Function\n\nFunction CollectFilesNeedDisplayMarks(comps As Variant, rootDocPath As String) As Object\n    \n    Dim files As Object\n    Set files = CreateObject("Scripting.Dictionary")\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(comps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = comps(i)\n        \n        Dim filePath As String\n        filePath = ResolveReferencePath(rootDocPath, swComp.GetPathName())\n        \n        If Dir(filePath) <> "" Then\n        \n            Dim refConfName As String\n            refConfName = swComp.ReferencedConfiguration\n            \n            Dim activeConfName As String\n            activeConfName = swApp.GetActiveConfigurationName(swComp.GetPathName())\n            \n            Dim confNames() As String\n            \n            If LCase(refConfName) <> LCase(activeConfName) Then\n                If files.Exists(LCase(filePath)) Then\n                    confNames = files(LCase(filePath))\n                    If Not Contains(confNames, refConfName) Then\n                        ReDim Preserve confNames(UBound(confNames) + 1)\n                        confNames(UBound(confNames)) = refConfName\n                        files(LCase(filePath)) = confNames\n                    End If\n                Else\n                    ReDim confNames(0)\n                    confNames(0) = refConfName\n                    files.Add LCase(filePath), confNames\n                End If\n            End If\n        Else\n            Debug.Print "Failed to resolve component " & swComp.Name2 & " path: " & filePath\n        End If\n        \n    Next\n    \n    Set CollectFilesNeedDisplayMarks = files\n    \nEnd Function\n\nFunction Contains(arr() As String, item As String) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(arr)\n        If LCase(arr(i)) = LCase(item) Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\nSub AddDisplayMarks(filePath As String, confNames As Variant)\n    \n    Debug.Print "Adding display mark for " & filePath\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Dim swDocSpec As SldWorks.DocumentSpecification\n    \n    Set swDocSpec = swApp.GetOpenDocSpec(filePath)\n    \n    swDocSpec.LightWeight = False\n    swDocSpec.ViewOnly = False\n    swDocSpec.Silent = True\n    \n    Set swModel = swApp.OpenDoc7(swDocSpec)\n    \n    If Not swModel Is Nothing Then\n    \n        Set swModel = swApp.ActivateDoc3(swModel.GetTitle(), False, swRebuildOnActivation_e.swDontRebuildActiveDoc, -1)\n        \n        If Not swModel Is Nothing Then\n        \n            Dim i As Integer\n            \n            For i = 0 To UBound(confNames)\n                Dim swConf As SldWorks.Configuration\n                Set swConf = swModel.GetConfigurationByName(CStr(confNames(i)))\n                swConf.LargeDesignReviewMark = True\n            Next\n            \n            swModel.ForceRebuild3 False\n            \n            swModel.Save3 swSaveAsOptions_e.swSaveAsOptions_Silent, 0, 0\n            \n            swApp.CloseDoc swModel.GetTitle\n        \n        Else\n            Debug.Print "Failed to activate document: " & filePath\n        End If\n        \n    Else\n        Debug.Print "Failed to open document: " & filePath\n    End If\n\nEnd Sub\n\nFunction ResolveReferencePath(rootDocPath As String, refPath As String) As String\n    \n    Dim pathParts As Variant\n    pathParts = Split(refPath, "\\")\n    \n    Dim rootFolder As String\n    rootFolder = rootDocPath\n    rootFolder = Left(rootFolder, InStrRev(rootFolder, "\\") - 1)\n\n    Dim i As Integer\n    \n    Dim curRelPath As String\n    \n    For i = UBound(pathParts) To 1 Step -1\n        \n        curRelPath = pathParts(i) & IIf(curRelPath <> "", "\\", "") & curRelPath\n        Dim path As String\n        path = rootFolder & "\\" & curRelPath\n        \n        If Dir(path) <> "" Then\n            ResolveReferencePath = path\n            Exit Function\n        End If\n        \n    Next\n    \n    ResolveReferencePath = refPath\n    \nEnd Function\n')),(0,s.kt)("p",null,"Alternative version of the macro will only process configurations of the active part or assembly and add the Display Data marks"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n            \n        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Or swModel.GetType() = swDocumentTypes_e.swDocPART Then\n            \n            Dim vConfNames As Variant\n            vConfNames = swModel.GetConfigurationNames\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vConfNames)\n                Dim swConf As SldWorks.Configuration\n                Set swConf = swModel.GetConfigurationByName(CStr(vConfNames(i)))\n                swConf.LargeDesignReviewMark = True\n            Next\n            \n            swModel.ForceRebuild3 False\n            \n        Else\n            Err.Raise vbError, "", "Only assemblies and parts are supported"\n        End If\n        \n    Else\n        Err.Raise vbError, "", "No files opened"\n    End If\n    \nEnd Sub\n')))}p.isMDXComponent=!0},79414:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/add-display-data-mark-b00ca737343ebc9afec76e5f5a1d506b.png"},42797:(e,n,o)=>{o.d(n,{Z:()=>t});const t="data:image/png;base64,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"}}]);