"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[66050],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>f});var t=o(67294);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function s(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?s(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,i=function(e,n){if(null==e)return{};var o,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=t.createContext({}),l=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},d=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},w=t.forwardRef((function(e,n){var o=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=l(o),w=i,f=m["".concat(c,".").concat(w)]||m[w]||p[w]||s;return o?t.createElement(f,r(r({ref:n},d),{},{components:o})):t.createElement(f,r({ref:n},d))}));function f(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=o.length,r=new Array(s);r[0]=w;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[m]="string"==typeof e?e:i,r[1]=a;for(var l=2;l<s;l++)r[l]=o[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}w.displayName="MDXCreateElement"},428:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=o(87462),i=(o(67294),o(3905));const s={layout:"sw-tool",title:"Open selected components in the Large Design Review (LDR) mode",caption:"Open components in LDR mode",description:"VBA macro to open all selected sub-assemblies and part components in the Large Design Review (LDR) mode and view only mode correspondingly",image:"ldr-sub-assembly.svg",labels:["performance","ldr","view only","large design review","open"],group:"Assembly"},r=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/open-component-ldr/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/open-component-ldr/index",title:"Open selected components in the Large Design Review (LDR) mode",description:"VBA macro to open all selected sub-assemblies and part components in the Large Design Review (LDR) mode and view only mode correspondingly",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/open-component-ldr/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/open-component-ldr",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/open-component-ldr/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/open-component-ldr/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/open-component-ldr/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Open selected components in the Large Design Review (LDR) mode",caption:"Open components in LDR mode",description:"VBA macro to open all selected sub-assemblies and part components in the Large Design Review (LDR) mode and view only mode correspondingly",image:"ldr-sub-assembly.svg",labels:["performance","ldr","view only","large design review","open"],group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"Insert pipe component between fittings using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/insert-pipe/"},next:{title:"Automating drawings using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/"}},c={},l=[{value:"Drawings",id:"drawings",level:2},{value:"Notes and limitations",id:"notes-and-limitations",level:2},{value:"Referenced Configurations",id:"referenced-configurations",level:3}],d={toc:l},m="wrapper";function p(e){let{components:n,...s}=e;return(0,i.kt)(m,(0,t.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This VBA macro can be run from the assembly opened in the Large Design Review (LDR) mode or drawing opened in the Detailing mode. Macro will open all selected components in their own windows, but unlike out-of-the-box functionality assemblies will not be resolved and will preserve the LDR mode."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selected sub-assembly components",src:o(77441).Z,width:"235",height:"286"})),(0,i.kt)("p",null,"It is then possible to enable the editing in the LDR mode, modify the assembly and update the graphics in the top level assembly."),(0,i.kt)("p",null,"Preserving the LDR mode on all the steps will significantly improve the performance."),(0,i.kt)("h2",{id:"drawings"},"Drawings"),(0,i.kt)("p",null,"This macro can also work from the drawing opened in the Detailing mode. It is required to select drawing view(s) before running the macro."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selected drawing view",src:o(817).Z,width:"237",height:"243"})),(0,i.kt)("p",null,"To enable drawing support it is required to enable Document Manager API in the macro. Follow ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-document-manager-api/getting-started/create-connection#activating-document-manager"},"Activating Document Manager")," section for the detailed steps to request Document Manager license key."),(0,i.kt)("p",null,"Add the reference to ",(0,i.kt)("strong",{parentName:"p"},"SwDocumentMgr ","[Year]"," Type Library")," under the ",(0,i.kt)("strong",{parentName:"p"},"Tools->References")," menu in VBA editor. Follow ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-document-manager-api/getting-started/create-connection#vba"},"Document Manager in VBA")," for more information."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Document Manager reference",src:o(16319).Z,width:"449",height:"371"})),(0,i.kt)("p",null,"Set the license key in the ",(0,i.kt)("strong",{parentName:"p"},"DM_LIC_KEY")," variable. Note that this macro only requires ",(0,i.kt)("strong",{parentName:"p"},"swdocmgr_general")," portion of the key. The following format would be sufficient."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Const DM_LIC_KEY As String = "[CompanyName]:swdocmgr_general-00000-{31 times}"\n')),(0,i.kt)("p",null,"This routine is not required if macro will only be used from assemblies."),(0,i.kt)("h2",{id:"notes-and-limitations"},"Notes and limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sub-assembly components will be opened in Large Design Review mode while part components will be opened in the View Only mode"),(0,i.kt)("li",{parentName:"ul"},"If target parts or assemblies do not have display data stored - error will be thrown"),(0,i.kt)("li",{parentName:"ul"},"Components must be selected from the Feature Manager Tree. Entities selected in the graphics area will be ignored"),(0,i.kt)("li",{parentName:"ul"},"This VBA macro is using the simplified version of the ",(0,i.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2016/english/SolidWorks/sldworks/c_Search_Routine_for_Referenced_Documents.htm"},"Search Routine for Referenced Documents")," and only checks active assembly's folder and sub folders before falling back on the cached path of the component. In some cases this may result in incorrect reference loaded (e.g if search folders are used). But this will only apply to the assembly which was copied and cached file paths were never updated.")),(0,i.kt)("h3",{id:"referenced-configurations"},"Referenced Configurations"),(0,i.kt)("p",null,"This macro will attempt to open the assembly in the referenced configuration of the component, however by default SOLIDWORKS only stores the display data in the active configuration, unless configurations are marked with 'Display Data Mark' flag"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add display data mark flag to configuration",src:o(93857).Z,width:"391",height:"500"}),"{ width=250 }"),(0,i.kt)("p",null,"If the referenced configuration of the component is not marked with the above flag and it is not an active configuration, then it cannot be loaded in Large Design Review. In this case macro will load the default configuration and display the below warning indicating that the graphics of different configuration is loaded."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Error with invalid configuration",src:o(75330).Z,width:"315",height:"79"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Type DocumentInfo\n    filePath As String\n    Configuration As String\nEnd Type\n\nType DmDrawingViewInfo\n    viewName As String\n    RefDocPath As String\n    RefConfigName As String\nEnd Type\n\nConst DM_LIC_KEY As String = "YOUR LICENSE KEY"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \ntry_:\n    On Error GoTo catch_\n    \n    If Not swModel Is Nothing Then\n    \n        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Then\n            If False = swModel.IsOpenedViewOnly Then\n                Err.Raise vbError, "", "Active assembly is not opened in Large Design Review mode"\n            End If\n        ElseIf swModel.GetType() = swDocumentTypes_e.swDocDRAWING Then\n            Dim swDraw As SldWorks.DrawingDoc\n            Set swDraw = swModel\n            If False = swDraw.IsDetailingMode Then\n                Err.Raise vbError, "", "Active drawing is not opened in Detailing mode"\n            End If\n        Else\n            Err.Raise vbError, "", "Active document is not an assembly or drawing"\n        End If\n                \n        Dim swDocsInfo() As DocumentInfo\n        \n        swDocsInfo = GetReferenceDocuments(swModel)\n                \n        OpenDocuments swModel, swDocsInfo\n        \n        GoTo finally_\n        \n    Else\n        Err.Raise vbError, "", "Please open assembly or drawing document"\n    End If\n\ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n \nEnd Sub\n\nSub OpenDocuments(model As SldWorks.ModelDoc2, docsInfo() As DocumentInfo)\n    \n    If Not IsDocsInfoEmpty(docsInfo) Then\n            \n        Dim i As Integer\n        \n        For i = 0 To UBound(docsInfo)\n            \n            Dim swDocInfo As DocumentInfo\n            swDocInfo = docsInfo(i)\n        \n            Dim compPath As String\n            compPath = ResolveReferencePath(model.GetPathName(), swDocInfo.filePath)\n            \n            Dim swDocSpec As SldWorks.DocumentSpecification\n            Set swDocSpec = swApp.GetOpenDocSpec(compPath)\n            \n            swDocSpec.ConfigurationName = swDocInfo.Configuration\n            swDocSpec.ViewOnly = True\n            \n            Dim swRefModel As SldWorks.ModelDoc2\n            Set swRefModel = swApp.OpenDoc7(swDocSpec)\n            \n            If swRefModel Is Nothing And swDocSpec.Error = swFileLoadError_e.swFileRequiresRepairError Then\n                \n                swDocSpec.ConfigurationName = ""\n                Set swRefModel = swApp.OpenDoc7(swDocSpec)\n                \n                If Not swRefModel Is Nothing Then\n                \n                    Dim swModelView As SldWorks.ModelView\n                    Set swModelView = swRefModel.ActiveView\n                    \n                    Dim vViewBox As Variant\n                    \n                    vViewBox = swModelView.GetVisibleBox\n                    \n                    Dim activeConfName As String\n                    activeConfName = swApp.GetActiveConfigurationName(compPath)\n                    \n                    If LCase(activeConfName) <> LCase(swDocInfo.Configuration) Then\n                        swApp.ShowBubbleTooltipAt2 vViewBox(0), vViewBox(1), swArrowPosition.swArrowLeftTop, _\n                            "CodeStack", _\n                            "Referenced configuration \'" & swDocInfo.Configuration & "\' of the assembly does not have a \'Display Data Mark\' and was opened in the active configuration \'" & activeConfName & "\'", _\n                            swBitMaps.swBitMapTreeError, "", "", 0, swLinkString.swLinkStringNone, "", ""\n                    End If\n                    \n                End If\n                \n            End If\n            \n            If swRefModel Is Nothing Then\n                Err.Raise vbError, "", "Failed to open component. Error code: " & swDocSpec.Error\n            End If\n            \n        Next\n        \n    Else\n        Err.Raise vbError, "", "No component selected"\n    End If\n    \nEnd Sub\n\nFunction GetReferenceDocuments(model As SldWorks.ModelDoc2) As DocumentInfo()\n    \n    Dim swDocsInfo() As DocumentInfo\n        \n    Dim i As Integer\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    Dim viewInfo() As DmDrawingViewInfo\n    \n    If model.GetType() = swDocumentTypes_e.swDocDRAWING Then\n        viewInfo = GetDmDrawingViews(model.GetPathName())\n    End If\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        Dim path As String\n        Dim confName As String\n        \n        If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelCOMPONENTS Then\n            \n            Dim swComp As SldWorks.Component2\n            Set swComp = swSelMgr.GetSelectedObject6(i, -1)\n            \n            path = swComp.GetPathName()\n            confName = swComp.ReferencedConfiguration\n        \n        ElseIf swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelDRAWINGVIEWS Then\n            \n            Dim swView As SldWorks.View\n            Set swView = swSelMgr.GetSelectedObject6(i, -1)\n            \n            GetViewReferencedDocumentInfo viewInfo, swView.Name, path, confName\n            \n        End If\n        \n        If path <> "" Then\n            \n            Dim unique As Boolean\n            unique = False\n            \n            If IsDocsInfoEmpty(swDocsInfo) Then\n                ReDim swDocsInfo(0)\n                unique = True\n            Else\n                unique = Not ContainsDocumentInfo(swDocsInfo, path)\n                If True = unique Then\n                    ReDim Preserve swDocsInfo(UBound(swDocsInfo) + 1)\n                End If\n            End If\n                \n            If True = unique Then\n                swDocsInfo(UBound(swDocsInfo)).filePath = path\n                swDocsInfo(UBound(swDocsInfo)).Configuration = confName\n            End If\n            \n        End If\n        \n    Next\n    \n    GetReferenceDocuments = swDocsInfo\n    \nEnd Function\n\nFunction GetDmDrawingViews(drwFilePath As String) As DmDrawingViewInfo()\n    \n    Dim viewInfos() As DmDrawingViewInfo\n    \n    Dim swDmApp As SwDocumentMgr.SwDMApplication4\n\n    Dim swClassFact As SwDocumentMgr.SwDMClassFactory\n    \n    Set swClassFact = New SwDocumentMgr.SwDMClassFactory\n    \n    Set swDmApp = swClassFact.GetApplication(DM_LIC_KEY)\n    \n    If Not swDmApp Is Nothing Then\n\n        Dim swDmDoc As SwDocumentMgr.SwDMDocument10\n\n        Dim res As SwDmDocumentOpenError\n        \n        Set swDmDoc = swDmApp.GetDocument(drwFilePath, swDmDocumentDrawing, True, res)\n        \n        If Not swDmDoc Is Nothing Then\n            \n            Dim searchOpts As SwDocumentMgr.SwDMSearchOption\n            Set searchOpts = swDmApp.GetSearchOptionObject\n            searchOpts.SearchFilters = SwDmSearchFilters.SwDmSearchExternalReference + SwDmSearchFilters.SwDmSearchRootAssemblyFolder + SwDmSearchFilters.SwDmSearchSubfolders + SwDmSearchFilters.SwDmSearchInContextReference\n                \n            Dim vFilePaths As Variant\n            \n            vFilePaths = swDmDoc.GetAllExternalReferences2(searchOpts, Empty)\n        \n            Dim vViews As Variant\n            vViews = swDmDoc.GetViews\n            \n            ReDim viewInfos(UBound(vViews))\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vViews)\n                Dim swDmView As SwDocumentMgr.SwDMView2\n                Set swDmView = vViews(i)\n                viewInfos(i).viewName = swDmView.Name\n                viewInfos(i).RefConfigName = swDmView.ReferencedConfiguration\n                viewInfos(i).RefDocPath = FindPathByFileName(vFilePaths, swDmView.ReferencedDocument)\n            Next\n            \n            swDmDoc.CloseDoc\n            \n            GetDmDrawingViews = viewInfos\n            \n        Else\n            Err.Raise vbError, "", "Failed to open the drawing document in Document Manager. Error code: " & res\n        End If\n        \n    Else\n        Err.Raise vbError, "", "Failed to connect to Document Manager application"\n    End If\n    \nEnd Function\n\nFunction GetViewReferencedDocumentInfo(viewInfo() As DmDrawingViewInfo, viewName As String, ByRef path As String, ByRef confName As String)\n\n    Dim i As Integer\n    \n    For i = 0 To UBound(viewInfo)\n        If LCase(viewInfo(i).viewName) = LCase(viewName) Then\n            path = viewInfo(i).RefDocPath\n            confName = viewInfo(i).RefConfigName\n            Exit Function\n        End If\n        \n    Next\n\n    Err.Raise vbError, "", "Failed to find drawing view information"\n    \nEnd Function\n\nFunction IsDocsInfoEmpty(docsInfo() As DocumentInfo)\n    IsDocsInfoEmpty = ((Not docsInfo) = -1)\nEnd Function\n\nFunction FindPathByFileName(vFilePaths As Variant, fileName As String) As String\n\n    Dim i As Integer\n    \n    For i = 0 To UBound(vFilePaths)\n        Dim filePath As String\n        filePath = vFilePaths(i)\n        \n        Dim thisFileName As String\n        thisFileName = Right(filePath, InStrRev(filePath, "\\") + 1)\n        \n        If LCase(thisFileName) = LCase(fileName) Then\n            FindPathByFileName = filePath\n            Exit Function\n        End If\n        \n    Next\n\n    Err.Raise vbError, "", "Failed to find the path by file name"\n    \nEnd Function\n\nFunction ContainsDocumentInfo(docsInfo() As DocumentInfo, path As String) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(docsInfo)\n        If LCase(path) = LCase(docsInfo(i).filePath) Then\n            ContainsDocumentInfo = True\n            Exit Function\n        End If\n    Next\n    \n    ContainsDocumentInfo = False\n    \nEnd Function\n\nFunction ResolveReferencePath(rootDocPath As String, refPath As String) As String\n    \n    Dim pathParts As Variant\n    pathParts = Split(refPath, "\\")\n    \n    Dim rootFolder As String\n    rootFolder = rootDocPath\n    rootFolder = Left(rootFolder, InStrRev(rootFolder, "\\") - 1)\n\n    Dim i As Integer\n    \n    Dim curRelPath As String\n    \n    For i = UBound(pathParts) To 1 Step -1\n        \n        curRelPath = pathParts(i) & IIf(curRelPath <> "", "\\", "") & curRelPath\n        Dim path As String\n        path = rootFolder & "\\" & curRelPath\n        \n        If Dir(path) <> "" Then\n            ResolveReferencePath = path\n            Exit Function\n        End If\n        \n    Next\n    \n    ResolveReferencePath = refPath\n    \nEnd Function\n')))}p.isMDXComponent=!0},93857:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/add-display-data-mark-276b664cc86a1e39f80cf925a2578a54.png"},75330:(e,n,o)=>{o.d(n,{Z:()=>t});const t="data:image/png;base64,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"},817:(e,n,o)=>{o.d(n,{Z:()=>t});const t="data:image/png;base64,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"},77441:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/selected-sub-assemblies-3120c9dd126594cd3744fc990d9ea5c9.png"},16319:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/swdm-reference-164558dd1fffe71b3c5493685fe193bf.png"}}]);