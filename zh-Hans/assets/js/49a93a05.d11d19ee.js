"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[77855],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),f=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=f(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",w={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=f(t),u=i,m=d["".concat(c,".").concat(u)]||d[u]||w[u]||r;return t?o.createElement(m,s(s({ref:n},l),{},{components:t})):o.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var f=2;f<r;f++)s[f]=t[f];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},66795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>w,frontMatter:()=>r,metadata:()=>a,toc:()=>f});var o=t(87462),i=(t(67294),t(3905));const r={caption:"Propagate Configurations To Sheets",title:"Macro propagates configurations of the referenced document to sheets in the SOLIDWORKS drawings",description:"VBA macro copies the input sheet and sets the referenced configuration sof the referenced document",image:"sheets.png"},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/propagate-configurations-sheets/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/propagate-configurations-sheets/index",title:"Macro propagates configurations of the referenced document to sheets in the SOLIDWORKS drawings",description:"VBA macro copies the input sheet and sets the referenced configuration sof the referenced document",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/propagate-configurations-sheets/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/propagate-configurations-sheets",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/propagate-configurations-sheets/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/propagate-configurations-sheets/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/propagate-configurations-sheets/index.md",tags:[],version:"current",frontMatter:{caption:"Propagate Configurations To Sheets",title:"Macro propagates configurations of the referenced document to sheets in the SOLIDWORKS drawings",description:"VBA macro copies the input sheet and sets the referenced configuration sof the referenced document",image:"sheets.png"},sidebar:"tutorialSidebar",previous:{title:"VBA macro to open referenced document of the drawing view",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/open-referenced-model/"},next:{title:"Rename flat pattern views with cut-list names VBA macro",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/rename-sheet-metal-views/"}},c={},f=[{value:"Configuration",id:"configuration",level:2},{value:"Notes",id:"notes",level:2},{value:"Sheet Metal Flat Patterns",id:"sheet-metal-flat-patterns",level:3}],l={toc:f},d="wrapper";function w(e){let{components:n,...r}=e;return(0,i.kt)(d,(0,o.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Drawings with multiple sheets",src:t(48473).Z,width:"1610",height:"906"}),"{ width=800 }"),(0,i.kt)("p",null,"This VBA macro will copy the active sheet and propagate referenced configurations to each copy."),(0,i.kt)("p",null,"Macro will automatically set the referenced configuration on each new sheet and rename the sheet based on the configuration name."),(0,i.kt)("p",null,"As the result drawing will contain sheets for all the configurations of the multi-body part or assembly."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Macro can be configured by changing the constant values of the macro"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Const TOP_LEVEL_CONFIGS_ONLY As Boolean = False 'True to only process top level configurations, False to process children configurations\nConst USE_CORRESPONDING_FLAT_PATTERN_CONF As Boolean = True 'True to find the corresponding SM-FLAT-PATTERN configuration for the flat pattern view, False to use configuration As Is\nConst GENERATE_MISSING_FLAT_PATTERN_CONF As Boolean = True 'True to automatically create new SM-FLAT-PATTERN configuration if not exist, False to use configuration As Is\n")),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Macro will skip processing system configurations (e.g. weldment As Welded and As Machined, Sheet Metal flat pattern configurations and speedpak configurations)"),(0,i.kt)("li",{parentName:"ul"},"Macro will not create another sheet for the same configuration which is used in the default (first) view of the sheet (template sheet)")),(0,i.kt)("h3",{id:"sheet-metal-flat-patterns"},"Sheet Metal Flat Patterns"),(0,i.kt)("p",null,"When drawing view of the flat pattern is created from the user interface new special configuration is automatically added (SM-FLAT-PATTERN). This configuration will be set as the referenced configuration. When assigning the referenced view via SOLIDWORKS API it is possible to force assign the standard configuration to a flat pattern view and this will result in incorrect display. User will need to manually recheck the ",(0,i.kt)("strong",{parentName:"p"},"Flat Pattern")," toggle or reset the referenced configuration. ",(0,i.kt)("strong",{parentName:"p"},"USE_CORRESPONDING_FLAT_PATTERN_CONF")," option of the macro allows to find the flat pattern configuration (if exist) and use it for the flat pattern view. If not found, flat pattern view can be automatically created by setting the ",(0,i.kt)("strong",{parentName:"p"},"GENERATE_MISSING_FLAT_PATTERN_CONF")," option of the macro."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Const TOP_LEVEL_CONFIGS_ONLY As Boolean = False\nConst USE_CORRESPONDING_FLAT_PATTERN_CONF As Boolean = True\nConst GENERATE_MISSING_FLAT_PATTERN_CONF As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim swSheet As SldWorks.sheet\n        Set swSheet = swDraw.GetCurrentSheet\n        \n        Dim swDefView As SldWorks.view\n        Set swDefView = GetDefaultView(swDraw, swSheet)\n        \n        If Not swDefView Is Nothing Then\n            \n            Dim swRefDoc As SldWorks.ModelDoc2\n            Set swRefDoc = swDefView.ReferencedDocument\n            \n            If Not swRefDoc Is Nothing Then\n            \n                ValidateSheet swSheet, swRefDoc\n                \n                Dim vConfNames As Variant\n                vConfNames = GetConfigurations(swRefDoc)\n                \n                Dim i As Integer\n                \n                For i = 0 To UBound(vConfNames)\n                    \n                    Dim confName As String\n                    confName = CStr(vConfNames(i))\n                    \n                    If LCase(GetActualReferencedConfiguration(swDefView)) <> LCase(confName) Then\n                        CopySheetWithConfiguration swDraw, swSheet, confName\n                    End If\n                    \n                Next\n                \n            Else\n                Err.Raise vbError, "", "Default view does not have referenced document"\n            End If\n            \n        Else\n            Err.Raise vbError, "", "Default view is not found"\n        End If\n        \n    Else\n        Err.Raise vbError, "", "Open drawing"\n    End If\n    \nEnd Sub\n\nFunction GetConfigurations(refDoc As SldWorks.ModelDoc2) As Variant\n    \n    Dim confNames() As String\n    \n    Dim vConfNames As Variant\n    vConfNames = refDoc.GetConfigurationNames\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vConfNames)\n        \n        Dim confName As String\n        confName = CStr(vConfNames(i))\n        \n        Dim swConf As SldWorks.Configuration\n        Set swConf = refDoc.GetConfigurationByName(confName)\n        \n        If (Not TOP_LEVEL_CONFIGS_ONLY Or swConf.GetParent() Is Nothing) And swConf.Type = swConfigurationType_e.swConfiguration_Standard Then\n                \n            If (Not confNames) = -1 Then\n                ReDim confNames(0)\n            Else\n                ReDim Preserve confNames(UBound(confNames) + 1)\n            End If\n            \n            confNames(UBound(confNames)) = confName\n            \n        End If\n        \n    Next\n    \n    GetConfigurations = confNames\n    \nEnd Function\n\nFunction GetActualReferencedConfiguration(view As SldWorks.view) As String\n    \n    Dim refConfName As String\n    refConfName = view.ReferencedConfiguration\n    \n    Dim swConf As SldWorks.Configuration\n    \n    Set swConf = view.ReferencedDocument.GetConfigurationByName(refConfName)\n    \n    If swConf.Type <> swConfigurationType_e.swConfiguration_Standard Then\n        Set swConf = swConf.GetParent\n    End If\n    \n    GetActualReferencedConfiguration = swConf.Name\n    \nEnd Function\n\nFunction GetDefaultView(draw As SldWorks.DrawingDoc, sheet As SldWorks.sheet) As SldWorks.view\n    \n    Dim vViews As Variant\n    \n    vViews = GetSheetViews(draw, sheet)\n    \n    If Not IsEmpty(vViews) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vViews)\n            \n            Dim swView As SldWorks.view\n            Set swView = vViews(i)\n            \n            If UCase(swView.Name) = UCase(sheet.CustomPropertyView) Then\n                Set GetDefaultView = swView\n                Exit Function\n            End If\n            \n        Next\n        \n        Set GetDefaultView = vViews(0) \'use first one\n    Else\n        Set GetDefaultView = Nothing\n    End If\n    \nEnd Function\n\nSub ValidateSheet(sheet As SldWorks.sheet, refDoc As SldWorks.ModelDoc2)\n    \n    Dim vViews As Variant\n    vViews = sheet.GetViews\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vViews)\n        \n        Dim swView As SldWorks.view\n        Set swView = vViews(i)\n        \n        If Not swView.ReferencedDocument Is refDoc Then\n            Err.Raise vbError, "", "Different models are referenced in " & sheet.GetName\n        End If\n        \n    Next\n    \nEnd Sub\n\nSub CopySheetWithConfiguration(draw As SldWorks.DrawingDoc, sheet As SldWorks.sheet, baseConfName As String)\n    \n    Const MAX_PASTE_ATEMPTS As Integer = 3\n    \n    If False <> draw.Extension.SelectByID2(sheet.GetName(), "SHEET", 0, 0, 0, False, 0, Nothing, 0) Then\n        \n        draw.EditCopy\n        \n        If TryPasteSheet(draw, MAX_PASTE_ATEMPTS) Then\n            \n            Dim swNewSheet As SldWorks.sheet\n            Set swNewSheet = draw.sheet(draw.GetSheetNames()(draw.GetSheetCount() - 1))\n            \n            Dim vViews As Variant\n            vViews = GetSheetViews(draw, swNewSheet)\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vViews)\n                \n                Dim swView As SldWorks.view\n                Set swView = vViews(i)\n                \n                Dim confName As String\n                \n                If False <> swView.IsFlatPatternView() And USE_CORRESPONDING_FLAT_PATTERN_CONF Then\n                    confName = GetFlatPatternConfiguration(draw, swView.ReferencedDocument, baseConfName, GENERATE_MISSING_FLAT_PATTERN_CONF)\n                Else\n                    confName = baseConfName\n                End If\n                \n                swView.ReferencedConfiguration = confName\n                \n                RefreshView draw, swView\n                \n            Next\n            \n            swNewSheet.SetName baseConfName\n                        \n        Else\n            Err.Raise vbError, "", "Failed to paste sheet"\n        End If\n    Else\n        Err.Raise vbError, "", "Failed to select sheet"\n    End If\n\nEnd Sub\n\nFunction TryPasteSheet(draw As SldWorks.DrawingDoc, attempts As Integer) As Boolean\n\n    Dim curAttemp As Integer\n    curAttemp = 1\n\n    \'It was observed than in some cases first atempt to paste sheet fails\n    While False = draw.PasteSheet(swInsertOptions_e.swInsertOption_MoveToEnd, swRenameOptions_e.swRenameOption_Yes)\n        \n        Debug.Print "Failed to paste a sheet on atttempt: " & curAttemp\n        \n        If curAttemp >= attempts Then\n            TryPasteSheet = False\n            Exit Function\n        End If\n        \n        curAttemp = curAttemp + 1\n \n    Wend\n    \n    TryPasteSheet = True\n\nEnd Function\n\n\'In some cases new configuration of view is not updated until refreshed\nSub RefreshView(draw As SldWorks.DrawingDoc, swView As SldWorks.view)\n    \n    If SelectDrawingView(draw, swView) Then\n        \n        draw.SuppressView\n        \n        If SelectDrawingView(draw, swView) Then\n            draw.UnsuppressView\n        End If\n        \n    End If\n    \nEnd Sub\n\nFunction GetFlatPatternConfiguration(draw As SldWorks.DrawingDoc, refDoc As SldWorks.ModelDoc2, baseConfName As String, allowCreateIfNotExist As Boolean) As String\n    \n    Dim swConf As SldWorks.Configuration\n    Set swConf = refDoc.GetConfigurationByName(baseConfName)\n    \n    If swConf.Type <> swConfigurationType_e.swConfiguration_SheetMetal Then\n        \n        Dim vChildrenConfs As Variant\n        \n        vChildrenConfs = swConf.GetChildren()\n        \n        Dim i As Integer\n        \n        If Not IsEmpty(vChildrenConfs) Then\n        \n            For i = 0 To UBound(vChildrenConfs)\n                \n                Dim swChildConf As SldWorks.Configuration\n                Set swChildConf = vChildrenConfs(i)\n                \n                If swChildConf.Type = swConfigurationType_e.swConfiguration_SheetMetal Then\n                    Debug.Print "Using flat pattern configuration " & swChildConf.Name & " for the " & baseConfName\n                    GetFlatPatternConfiguration = swChildConf.Name\n                    Exit Function\n                End If\n                \n            Next\n        \n        End If\n        \n        If allowCreateIfNotExist Then\n            Debug.Print "Creating flat pattern configuration for " & baseConfName\n            GetFlatPatternConfiguration = CreateFlatPatternConfiguration(draw, refDoc, baseConfName)\n        Else\n            Debug.Print "Flat pattern configuration is not found for " & baseConfName\n            GetFlatPatternConfiguration = baseConfName\n        End If\n    Else\n        GetFlatPatternConfiguration = baseConfName\n    End If\n    \nEnd Function\n\nFunction CreateFlatPatternConfiguration(draw As SldWorks.DrawingDoc, refDoc As SldWorks.ModelDoc2, baseConfName As String) As String\n    \n    Dim swFlatPatternView As SldWorks.view\n    Set swFlatPatternView = draw.CreateFlatPatternViewFromModelView3(refDoc.GetPathName(), baseConfName, 0, 0, 0, True, False)\n    \n    If Not swFlatPatternView Is Nothing Then\n        CreateFlatPatternConfiguration = swFlatPatternView.ReferencedConfiguration\n        \n        If SelectDrawingView(draw, swFlatPatternView) Then\n            If False = draw.Extension.DeleteSelection2(swDeleteSelectionOptions_e.swDelete_Absorbed) Then\n                Err.Raise vbError, "", "Failed to delete temp view"\n            End If\n        Else\n            Err.Raise vbError, "", "Failed to select temp view for deletion"\n        End If\n        \n    Else\n        Err.Raise vbError, "", "Failed to create temp flat pattern view for " & refDoc.GetPathName() & " (" & baseConfName & ")"\n    End If\n    \nEnd Function\n\nFunction SelectDrawingView(draw As SldWorks.ModelDoc2, view As SldWorks.view) As Boolean\n    SelectDrawingView = False <> draw.Extension.SelectByID2(view.Name, "DRAWINGVIEW", 0, 0, 0, False, -1, Nothing, swSelectOption_e.swSelectOptionDefault)\nEnd Function\n\nFunction GetSheetViews(draw As SldWorks.DrawingDoc, sheet As SldWorks.sheet) As Variant\n    \n    \'ISheet::GetViews also returns views from the view palette\n    \n    Dim vSheets As Variant\n    \n    vSheets = draw.GetViews\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vSheets)\n        \n        Dim vViews As Variant\n        vViews = vSheets(i)\n        \n        Dim swSheetView As SldWorks.view\n        Set swSheetView = vViews(0)\n        \n        If swSheetView.GetName2() = sheet.GetName() Then\n            \n            If UBound(vViews) > 0 Then\n                \n                Dim swViews() As SldWorks.view\n                ReDim swViews(UBound(vViews) - 1)\n                \n                Dim j As Integer\n                \n                For j = 0 To UBound(swViews)\n                    Set swViews(j) = vViews(j + 1)\n                Next\n                \n                GetSheetViews = swViews\n                Exit Function\n                \n            Else\n                Err.Raise vbError, "", "No drawing view found in " & sheet.GetName\n            End If\n            \n        End If\n            \n    Next\n    \n    Err.Raise vbError, "", "Failed to get drawing views from " & sheet.GetName\n    \nEnd Function\n')))}w.isMDXComponent=!0},48473:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/sheets-6f5f030fd6293af8e1b9bacc22d68ea0.png"}}]);