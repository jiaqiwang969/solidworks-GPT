"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[56111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=s,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||a;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,r[1]=i;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},47154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),s=(n(67294),n(3905));const a={layout:"sw-tool",title:"Export flat patterns from SOLIDWORKS part or assembly components",caption:"Export Flat Patterns From Part Or Assembly Components",description:"VBA macro to export flat patterns from all components of the active assembly or active part",image:"assembly-flat-pattern.svg",labels:["where used","parent","component"],group:"Import/Export","redirect-from":["/solidworks-api/document/sheet-metal/export-assembly-components/"]},r=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/export-all-flat-patterns/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/export-all-flat-patterns/index",title:"Export flat patterns from SOLIDWORKS part or assembly components",description:"VBA macro to export flat patterns from all components of the active assembly or active part",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/export-all-flat-patterns/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/export-all-flat-patterns",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/export-all-flat-patterns/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/export-all-flat-patterns/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/export-all-flat-patterns/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Export flat patterns from SOLIDWORKS part or assembly components",caption:"Export Flat Patterns From Part Or Assembly Components",description:"VBA macro to export flat patterns from all components of the active assembly or active part",image:"assembly-flat-pattern.svg",labels:["where used","parent","component"],group:"Import/Export","redirect-from":["/solidworks-api/document/sheet-metal/export-assembly-components/"]},sidebar:"tutorialSidebar",previous:{title:"Automation Sheet Metal parts using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/"},next:{title:"Export flat pattern to DXF/DWG from part SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sheet-metal/export-dxf-dwg/"}},l={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Output name template",id:"output-name-template",level:3},{value:"Include quantity into file name",id:"include-quantity-into-file-name",level:3},{value:"Flat pattern options",id:"flat-pattern-options",level:3},{value:"Skip created files",id:"skip-created-files",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Notes",id:"notes",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This VBA macro allows to export all flat patterns to DXF/DWG from all sheet metal components in the active SOLIDWORKS assembly or an active part document."),(0,s.kt)("p",null,"Macro enables flexibility in specifying the name of the output file allowing to use placeholders (original file name, feature name, custom property, cut-list custom property, etc.) combined with the free text and supports specifying sub-folders."),(0,s.kt)("p",null,"The following message box will be displayed once the exporting is completed."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Message box displayed when exporting is completed",src:n(82407).Z,width:"354",height:"128"})),(0,s.kt)("p",null,"{%youtube id: FtXkdSlekG8 %}"),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Macro can be configured by modifying the ",(0,s.kt)("strong",{parentName:"p"},"OUT_NAME_TEMPLATE")," and ",(0,s.kt)("strong",{parentName:"p"},"FLAT_PATTERN_OPTIONS")," constants"),(0,s.kt)("h3",{id:"output-name-template"},"Output name template"),(0,s.kt)("p",null,"This constant allows to specify template for the output path of the flat pattern."),(0,s.kt)("p",null,"This can be either absolute or relative path. If later, result will be saved relative to the assembly directory."),(0,s.kt)("p",null,"Extension (either .dxf or .dwg) must be specified as the part of naming template"),(0,s.kt)("p",null,"The following placeholders are supported"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"<","_","FileName","_","> - name of the part file (without extension) where the flat pattern resides in"),(0,s.kt)("li",{parentName:"ul"},"<","_","FeatureName","_","> - name of the flat pattern feature"),(0,s.kt)("li",{parentName:"ul"},"<","_","ConfName","_","> - name of the configuration of this flat pattern (i.e. referenced configuration of the component)"),(0,s.kt)("li",{parentName:"ul"},"<","_","AssmFileName","_","> - name of the main assembly"),(0,s.kt)("li",{parentName:"ul"},"<$CLPRP:","[PropertyName]","> - any name of the cut-list property to read value from, e.g. \\<Thickness",">"," is replaced with the value of cut-list custom property ",(0,s.kt)("em",{parentName:"li"},"Thickness")),(0,s.kt)("li",{parentName:"ul"},"<$PRP:","[PropertyName]","> - any name of the custom property of sheet metal part to read value from, e.g. \\<PartNo",">"," is replaced with the value of cut-list custom property ",(0,s.kt)("em",{parentName:"li"},"PartNo")),(0,s.kt)("li",{parentName:"ul"},"<$ASSMPRP:","[PropertyName]","> - any name of the custom property of main assembly to read value from, e.g. \\<ProductId",">"," is replaced with the value of cut-list custom property ",(0,s.kt)("em",{parentName:"li"},"ProductId"))),(0,s.kt)("p",null,"Placeholders will be resolved for each flat pattern at runtime."),(0,s.kt)("p",null,"For example the following value will save flat patterns with the name of the part document in the ",(0,s.kt)("em",{parentName:"p"},"DXFs")," sub-folder in the same folder as main assembly"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const OUT_NAME_TEMPLATE As String = "DXFs\\<_FileName_>.dxf"\n')),(0,s.kt)("p",null,"While the following name will save all of the flat patterns as DWG file into the ",(0,s.kt)("em",{parentName:"p"},"Output")," folder in ",(0,s.kt)("em",{parentName:"p"},"D")," drive, where the file name will be extracted from the ",(0,s.kt)("em",{parentName:"p"},"PartNo")," property for each corresponding flat pattern."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const OUT_NAME_TEMPLATE As String = "D:\\Output\\<$CLPRP:PartNo>.dwg"\n')),(0,s.kt)("p",null,"The following setup will create sub-folder corresponding to value of the ",(0,s.kt)("strong",{parentName:"p"},"Thickness")," custom property in cut-lists and name files using the ",(0,s.kt)("strong",{parentName:"p"},"ProductName")," custom property extracted from the main assembly followed by underscore symbol and value of ",(0,s.kt)("strong",{parentName:"p"},"PartNo")," property from sheet metal part document."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const OUT_NAME_TEMPLATE As String = "D:\\Output\\<$CLPRP:Thickness>\\<$ASSMPRP:ProductName>_<$PRP:PartNo>.dwg"\n')),(0,s.kt)("h3",{id:"include-quantity-into-file-name"},"Include quantity into file name"),(0,s.kt)("p",null,"This macro does not have an explicit variable to include quantity of flat patterns into the file name. It is however possible to extract the quantity of the multi body sheet metal part by including the value of automatic ",(0,s.kt)("strong",{parentName:"p"},"QUANTITY")," custom property with ",(0,s.kt)("strong",{parentName:"p"},"<$CLPRP:QUANTITY>")," placeholder."),(0,s.kt)("p",null,"In order to include the component quantity in the assembly, use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/assembly/components/write-quantities/"},"Write component quantity in the SOLIDWORKS assembly to custom property\n")," macro. Run this macro before exporting to create custom property with the quantity value and then use ",(0,s.kt)("strong",{parentName:"p"},"<$CLPRP:Qty>")," placeholder in order to include this into the output file name."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note, this macro will not multiple the quantity of multi-body sheet metal part and the component quantity")),(0,s.kt)("h3",{id:"flat-pattern-options"},"Flat pattern options"),(0,s.kt)("p",null,"Options can be configured by specifying the values of ",(0,s.kt)("strong",{parentName:"p"},"FLAT_PATTERN_OPTIONS"),". Use ",(0,s.kt)("strong",{parentName:"p"},"+")," to combine options"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Flat pattern export options",src:n(64520).Z,width:"247",height:"455"})),(0,s.kt)("p",null,"For example to export hidden edges, library features and forming tools, use the setting below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const FLAT_PATTERN_OPTIONS As Integer = SheetMetalOptions_e.IncludeHiddenEdges + SheetMetalOptions_e.ExportLibraryFeatures + SheetMetalOptions_e.ExportFormingTools\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Note, geometry option must always be specified as it is required for the flat pattern export")),(0,s.kt)("h2",{id:"skip-created-files"},"Skip created files"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SKIP_EXISTING_FILES")," options allows to specify if macro should regenerate output file if it already exists."),(0,s.kt)("p",null,"Set this option to true to skip exporting the file if the output file (.dxf or .dwg) exists on the target location."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const SKIP_EXISTING_FILES As Boolean = True\n")),(0,s.kt)("p",null,"This option can be useful when processing large assemblies and it is required to continue the execution after SOLIDWORKS restart. Exporting flat patterns is a heavy performance operation so SOLIDWORKS may crash or hang when large job is processed. This option can help to continue the exporting after the restart."),(0,s.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.kt)("p",null,"If macro reports an error, in some cases it might not be immediately evident what is causing an error as the error details are 'swallowed' by exception handler. In order to disable errors handling and reveal the exact line causing the error comment all ",(0,s.kt)("em",{parentName:"p"},"On Error GoTo catch_")," lines in the code by placing the apostrophe ' symbol at the beginning of the line as shown below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},"Sub main()\n        \n    Set swApp = Application.SldWorks\n    \ntry_:\n    'On Error GoTo catch_\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb",metastring:"jagged",jagged:!0},"Sub ExportFlatPattern(part As SldWorks.PartDoc, flatPattern As SldWorks.Feature, outFilePath As String, opts As SheetMetalOptions_e, conf As String)\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = part\n    \n    Dim error As ErrObject\n    Dim hide As Boolean\n\ntry_:\n    \n    'On Error GoTo catch_\n")),(0,s.kt)("p",null,"Please submit the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/xarial/codestack/issues/new?labels=bug"},"bug report")," and attach snapshot of this error and model used to reproduce (if possible)"),(0,s.kt)("h2",{id:"notes"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Macro will ask to resolve lightweight components if any. Macro can generate error if components are not resolved"),(0,s.kt)("li",{parentName:"ul"},"Each flat pattern from the multi-body sheet metal part will be exported. Make sure to use either <","_","FeatureName","_","> or <$CLPRP:","[PropertyName]","> to differentiate between result files"),(0,s.kt)("li",{parentName:"ul"},"$PRP and $ASSMPRP values will be firstly extracted from the configuration specific properties and if empty from the general file properties"),(0,s.kt)("li",{parentName:"ul"},"If specified property does not exist (for $CLPRP, $PRP and $ASSMPRP) - empty string is used as the placeholder value"),(0,s.kt)("li",{parentName:"ul"},"Macro will process all distinct components (file path + configuration)"),(0,s.kt)("li",{parentName:"ul"},"Macro will automatically create folders if required"),(0,s.kt)("li",{parentName:"ul"},"Macro will replace all path invalid symbols with ","_"),(0,s.kt)("li",{parentName:"ul"},"Macro will only export unique bodies grouped under cut-list and skip flat patterns which belong to already exported cut-list")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Enum SheetMetalOptions_e\n    ExportFlatPatternGeometry = 1\n    IncludeHiddenEdges = 2\n    ExportBendLines = 4\n    IncludeSketches = 8\n    MergeCoplanarFaces = 16\n    ExportLibraryFeatures = 32\n    ExportFormingTools = 64\n    ExportBoundingBox = 2048\nEnd Enum\n\nConst SKIP_EXISTING_FILES As Boolean = False\n\nConst OUT_NAME_TEMPLATE As String = "DXFs\\<_FileName_>_<_FeatureName_>_<_ConfName_>_<$CLPRP:Description>.dxf"\n\nConst FLAT_PATTERN_OPTIONS As Integer = SheetMetalOptions_e.ExportBendLines + SheetMetalOptions_e.ExportFlatPatternGeometry\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n        \n    Set swApp = Application.SldWorks\n    \ntry_:\n    On Error GoTo catch_\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    If swModel Is Nothing Then\n        Err.Raise vbError, "", "Please open assembly or part document"\n    End If\n    \n    If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Then\n    \n        Dim swAssy As SldWorks.AssemblyDoc\n        \n        Set swAssy = swModel\n            \n        swAssy.ResolveAllLightWeightComponents True\n            \n        Dim vComps As Variant\n        vComps = GetDistinctSheetMetalComponents(swAssy)\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vComps)\n        \n            Dim swComp As SldWorks.Component2\n            Set swComp = vComps(i)\n            \n            ProcessSheetMetalModel swAssy, swComp.GetModelDoc2(), swComp.ReferencedConfiguration\n        \n        Next\n        \n    ElseIf swModel.GetType() = swDocumentTypes_e.swDocPART Then\n        \n        Dim swPart As SldWorks.PartDoc\n        Set swPart = swApp.ActiveDoc\n        \n        ProcessSheetMetalModel swPart, swPart, swPart.ConfigurationManager.ActiveConfiguration.Name\n        \n    Else\n        Err.Raise vbError, "", "Only assembly and part documents are supported"\n    End If\n    \n    swApp.SendMsgToUser2 "Operation completed", swMessageBoxIcon_e.swMbInformation, swMessageBoxBtn_e.swMbOk\n    \n    GoTo finally_\n    \ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n\nEnd Sub\n\nFunction GetDistinctSheetMetalComponents(assy As SldWorks.AssemblyDoc) As Variant\n    \n    Dim vComps As Variant\n    vComps = assy.GetComponents(False)\n        \n    Dim i As Integer\n    \n    Dim swSheetMetalComps() As SldWorks.Component2\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n                \n        If False = swComp.IsSuppressed() Then\n            \n            If Not ContainsComponent(swSheetMetalComps, swComp) Then\n                \n                If IsSheetMetalComponent(swComp) Then\n                    If (Not swSheetMetalComps) = -1 Then\n                        ReDim swSheetMetalComps(0)\n                    Else\n                        ReDim Preserve swSheetMetalComps(UBound(swSheetMetalComps) + 1)\n                    End If\n                    \n                    Set swSheetMetalComps(UBound(swSheetMetalComps)) = swComp\n                End If\n            \n            End If\n            \n        End If\n        \n    Next\n    \n    If (Not swSheetMetalComps) = -1 Then\n        GetDistinctSheetMetalComponents = Empty\n    Else\n        GetDistinctSheetMetalComponents = swSheetMetalComps\n    End If\n    \nEnd Function\n\nFunction IsSheetMetalComponent(comp As SldWorks.Component2) As Boolean\n    \n    Dim vBodies As Variant\n    vBodies = comp.GetBodies3(swBodyType_e.swSolidBody, Empty)\n    \n    If Not IsEmpty(vBodies) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vBodies)\n            Dim swBody As SldWorks.Body2\n            Set swBody = vBodies(i)\n            \n            If False <> swBody.IsSheetMetal() Then\n                IsSheetMetalComponent = True\n                Exit Function\n            End If\n            \n        Next\n    End If\n    \n    IsSheetMetalComponent = False\n    \nEnd Function\n\nFunction ContainsComponent(comps As Variant, swComp As SldWorks.Component2) As Boolean\n\n    Dim i As Integer\n    \n    For i = 0 To UBound(comps)\n        Dim swThisComp As SldWorks.Component2\n        Set swThisComp = comps(i)\n        \n        If swThisComp.GetPathName() = swComp.GetPathName() And swThisComp.ReferencedConfiguration = swComp.ReferencedConfiguration Then\n            ContainsComponent = True\n            Exit Function\n        End If\n    Next\n    \n    ContainsComponent = False\n\nEnd Function\n\nFunction ComposeOutFileName(template As String, rootModel As SldWorks.ModelDoc2, sheetMetalModel As SldWorks.ModelDoc2, conf As String, flatPatternFeat As SldWorks.Feature, cutListFeat As SldWorks.Feature) As String\n\n    Dim regEx As Object\n    Set regEx = CreateObject("VBScript.RegExp")\n    \n    regEx.Global = True\n    regEx.IgnoreCase = True\n    regEx.Pattern = "<[^>]*>"\n    \n    Dim regExMatches As Object\n    Set regExMatches = regEx.Execute(template)\n    \n    Dim i As Integer\n    \n    Dim outFileName As String\n    outFileName = template\n    \n    For i = regExMatches.Count - 1 To 0 Step -1\n        \n        Dim regExMatch As Object\n        Set regExMatch = regExMatches.Item(i)\n                    \n        Dim tokenName As String\n        tokenName = Mid(regExMatch.Value, 2, Len(regExMatch.Value) - 2)\n        \n        outFileName = Left(outFileName, regExMatch.FirstIndex) & ResolveToken(tokenName, rootModel, sheetMetalModel, conf, flatPatternFeat, cutListFeat) & Right(outFileName, Len(outFileName) - (regExMatch.FirstIndex + regExMatch.Length))\n    Next\n    \n    ComposeOutFileName = ReplaceInvalidPathSymbols(GetFullPath(rootModel, outFileName))\n    \nEnd Function\n\nFunction ReplaceInvalidPathSymbols(path As String) As String\n    \n    Const REPLACE_SYMB As String = "_"\n    \n    Dim res As String\n    res = Right(path, Len(path) - Len("X:\\"))\n    \n    Dim drive As String\n    drive = Left(path, Len("X:\\"))\n    \n    Dim invalidSymbols As Variant\n    invalidSymbols = Array("/", ":", "*", "?", """", "<", ">", "|")\n    \n    Dim i As Integer\n    For i = 0 To UBound(invalidSymbols)\n        Dim invalidSymb As String\n        invalidSymb = CStr(invalidSymbols(i))\n        res = Replace(res, invalidSymb, REPLACE_SYMB)\n    Next\n    \n    ReplaceInvalidPathSymbols = drive + res\n    \nEnd Function\n\nFunction ResolveToken(token As String, rootModel As SldWorks.ModelDoc2, sheetMetalModel As SldWorks.ModelDoc2, conf As String, flatPatternFeat As SldWorks.Feature, cutListFeat As SldWorks.Feature) As String\n    \n    Const FILE_NAME_TOKEN As String = "_FileName_"\n    Const ASSM_FILE_NAME_TOKEN As String = "_AssmFileName_"\n    Const FEAT_NAME_TOKEN As String = "_FeatureName_"\n    Const CONF_NAME_TOKEN As String = "_ConfName_"\n    \n    Const PRP_TOKEN As String = "$PRP:"\n    Const CUT_LIST_PRP_TOKEN As String = "$CLPRP:"\n    Const ASM_PRP_TOKEN As String = "$ASSMPRP:"\n    \n    Select Case LCase(token)\n        Case LCase(FILE_NAME_TOKEN)\n            ResolveToken = GetFileNameWithoutExtension(sheetMetalModel.GetPathName)\n        Case LCase(FEAT_NAME_TOKEN)\n            ResolveToken = flatPatternFeat.Name\n        Case LCase(CONF_NAME_TOKEN)\n            ResolveToken = conf\n        Case LCase(ASSM_FILE_NAME_TOKEN)\n            If rootModel.GetPathName() = "" Then\n                Err.Raise vbError, "", "Assembly must be saved to use " & ASSM_FILE_NAME_TOKEN\n            End If\n            ResolveToken = GetFileNameWithoutExtension(rootModel.GetPathName())\n        Case Else\n            \n            Dim prpName As String\n                        \n            If Left(token, Len(PRP_TOKEN)) = PRP_TOKEN Then\n                prpName = Right(token, Len(token) - Len(PRP_TOKEN))\n                ResolveToken = GetModelPropertyValue(sheetMetalModel, conf, prpName)\n            ElseIf Left(token, Len(ASM_PRP_TOKEN)) = ASM_PRP_TOKEN Then\n                prpName = Right(token, Len(token) - Len(ASM_PRP_TOKEN))\n                ResolveToken = GetModelPropertyValue(rootModel, rootModel.ConfigurationManager.ActiveConfiguration.Name, prpName)\n            ElseIf Left(token, Len(CUT_LIST_PRP_TOKEN)) = CUT_LIST_PRP_TOKEN Then\n                prpName = Right(token, Len(token) - Len(CUT_LIST_PRP_TOKEN))\n                ResolveToken = GetPropertyValue(cutListFeat.CustomPropertyManager, prpName)\n            Else\n                Err.Raise vbError, "", "Unrecognized token: " & token\n            End If\n            \n    End Select\n    \nEnd Function\n\nFunction GetModelPropertyValue(model As SldWorks.ModelDoc2, confName As String, prpName As String) As String\n    \n    Dim prpVal As String\n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    \n    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)\n    prpVal = GetPropertyValue(swCustPrpMgr, prpName)\n    \n    If prpVal = "" Then\n        Set swCustPrpMgr = model.Extension.CustomPropertyManager("")\n        prpVal = GetPropertyValue(swCustPrpMgr, prpName)\n    End If\n    \n    GetModelPropertyValue = prpVal\n    \nEnd Function\n\nFunction GetPropertyValue(custPrpMgr As SldWorks.CustomPropertyManager, prpName As String) As String\n    Dim resVal As String\n    custPrpMgr.Get2 prpName, "", resVal\n    GetPropertyValue = resVal\nEnd Function\n\nFunction GetFileNameWithoutExtension(path As String) As String\n    GetFileNameWithoutExtension = Mid(path, InStrRev(path, "\\") + 1, InStrRev(path, ".") - InStrRev(path, "\\") - 1)\nEnd Function\n\nFunction GetCutListFeatures(model As SldWorks.ModelDoc2) As Variant\n    GetCutListFeatures = GetFeaturesByType(model, "CutListFolder")\nEnd Function\n\nFunction GetFlatPatternFeatures(model As SldWorks.ModelDoc2) As Variant\n    GetFlatPatternFeatures = GetFeaturesByType(model, "FlatPattern")\nEnd Function\n\nSub ProcessSheetMetalModel(rootModel As SldWorks.ModelDoc2, sheetMetalModel As SldWorks.ModelDoc2, conf As String)\n        \n    Dim vCutListFeats As Variant\n    vCutListFeats = GetCutListFeatures(sheetMetalModel)\n    \n    If Not IsEmpty(vCutListFeats) Then\n        \n        Dim vFlatPatternFeats As Variant\n        vFlatPatternFeats = GetFlatPatternFeatures(sheetMetalModel)\n        \n        If Not IsEmpty(vFlatPatternFeats) Then\n            \n            Dim swProcessedCutListsFeats() As SldWorks.Feature\n            \n            Dim i As Integer\n    \n            For i = 0 To UBound(vFlatPatternFeats)\n                \n                Dim swFlatPatternFeat As SldWorks.Feature\n                Dim swFlatPattern As SldWorks.FlatPatternFeatureData\n                \n                Set swFlatPatternFeat = vFlatPatternFeats(i)\n                \n                Set swFlatPattern = swFlatPatternFeat.GetDefinition\n                \n                Dim swFixedEnt As SldWorks.Entity\n                \n                Set swFixedEnt = swFlatPattern.FixedFace2\n                \n                Dim swBody As SldWorks.Body2\n                \n                If TypeOf swFixedEnt Is SldWorks.Face2 Then\n                    Dim swFixedFace As SldWorks.Face2\n                    Set swFixedFace = swFixedEnt\n                    Set swBody = swFixedFace.GetBody\n                ElseIf TypeOf swFixedEnt Is SldWorks.Edge Then\n                    Dim swFixedEdge As SldWorks.Edge\n                    Set swFixedEdge = swFixedEnt\n                    Set swBody = swFixedEdge.GetBody\n                ElseIf TypeOf swFixedEnt Is SldWorks.Vertex Then\n                    Dim swFixedVert As SldWorks.Vertex\n                    Set swFixedVert = swFixedEnt\n                    Set swBody = swFixedVert.GetBody\n                End If\n                \n                Dim swCutListFeat As SldWorks.Feature\n                Set swCutListFeat = FindCutListFeature(vCutListFeats, swBody)\n                \n                If Not swCutListFeat Is Nothing Then\n                    \n                    Dim isUnique As Boolean\n                                        \n                    If (Not swProcessedCutListsFeats) = -1 Then\n                        isUnique = True\n                    ElseIf Not ContainsSwObject(swProcessedCutListsFeats, swCutListFeat) Then\n                        isUnique = True\n                    Else\n                        isUnique = False\n                    End If\n                    \n                    If isUnique Then\n                        \n                        If (Not swProcessedCutListsFeats) = -1 Then\n                            ReDim swProcessedCutListsFeats(0)\n                        Else\n                            ReDim Preserve swProcessedCutListsFeats(UBound(swProcessedCutListsFeats) + 1)\n                        End If\n                        \n                        Set swProcessedCutListsFeats(UBound(swProcessedCutListsFeats)) = swCutListFeat\n                        \n                        Dim outFileName As String\n                        outFileName = ComposeOutFileName(OUT_NAME_TEMPLATE, rootModel, sheetMetalModel, conf, swFlatPatternFeat, swCutListFeat)\n                        \n                        If Not SKIP_EXISTING_FILES Or Not FileExists(outFileName) Then\n                            ExportFlatPattern sheetMetalModel, swFlatPatternFeat, outFileName, FLAT_PATTERN_OPTIONS, conf\n                        End If\n                    End If\n                    \n                Else\n                    Err.Raise vbError, "", "Failed to find cut-list for flat pattern " & swFlatPatternFeat.Name\n                End If\n                \n            Next\n            \n        Else\n            Err.Raise vbError, "", "No flat pattern features found"\n        End If\n        \n    Else\n        Err.Raise vbError, "", "No cut-list items found"\n    End If\n    \nEnd Sub\n\nFunction FileExists(filePath As String) As Boolean\n    FileExists = Dir(filePath) <> ""\nEnd Function\n\nFunction FindCutListFeature(vCutListFeats As Variant, body As SldWorks.Body2) As SldWorks.Feature\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vCutListFeats)\n        \n        Dim swCutListFeat As SldWorks.Feature\n        Set swCutListFeat = vCutListFeats(i)\n        \n        Dim swBodyFolder As SldWorks.BodyFolder\n        Set swBodyFolder = swCutListFeat.GetSpecificFeature2\n        \n        Dim vBodies As Variant\n        \n        vBodies = swBodyFolder.GetBodies\n        \n        If ContainsSwObject(vBodies, body) Then\n            Set FindCutListFeature = swCutListFeat\n        End If\n            \n    Next\n    \nEnd Function\n\nFunction ContainsSwObject(vArr As Variant, obj As Object) As Boolean\n    \n    If Not IsEmpty(vArr) Then\n    \n        Dim i As Integer\n        \n        For i = 0 To UBound(vArr)\n            \n            Dim swObj As Object\n            Set swObj = vArr(i)\n            \n            If swApp.IsSame(swObj, obj) = swObjectEquality.swObjectSame Then\n                ContainsSwObject = True\n                Exit Function\n            End If\n        Next\n        \n    End If\n    \n    ContainsSwObject = False\n    \nEnd Function\n\nFunction GetFeaturesByType(model As SldWorks.ModelDoc2, typeName As String) As Variant\n    \n    Dim swFeats() As SldWorks.Feature\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = model.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        If typeName = "CutListFolder" And swFeat.GetTypeName2() = "SolidBodyFolder" Then\n            Dim swBodyFolder As SldWorks.BodyFolder\n            Set swBodyFolder = swFeat.GetSpecificFeature2\n            swBodyFolder.UpdateCutList\n        End If\n        \n        ProcessFeature swFeat, swFeats, typeName\n\n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n    \n    If (Not swFeats) = -1 Then\n        GetFeaturesByType = Empty\n    Else\n        GetFeaturesByType = swFeats\n    End If\n    \nEnd Function\n\nSub ProcessFeature(thisFeat As SldWorks.Feature, featsArr() As SldWorks.Feature, typeName As String)\n    \n    If thisFeat.GetTypeName2() = typeName Then\n    \n        If (Not featsArr) = -1 Then\n            ReDim featsArr(0)\n            Set featsArr(0) = thisFeat\n        Else\n            Dim i As Integer\n            \n            For i = 0 To UBound(featsArr)\n                If swApp.IsSame(featsArr(i), thisFeat) = swObjectEquality.swObjectSame Then\n                    Exit Sub\n                End If\n            Next\n            \n            ReDim Preserve featsArr(UBound(featsArr) + 1)\n            Set featsArr(UBound(featsArr)) = thisFeat\n        End If\n    \n    End If\n    \n    Dim swSubFeat As SldWorks.Feature\n    Set swSubFeat = thisFeat.GetFirstSubFeature\n        \n    While Not swSubFeat Is Nothing\n        ProcessFeature swSubFeat, featsArr, typeName\n        Set swSubFeat = swSubFeat.GetNextSubFeature\n    Wend\n        \nEnd Sub\n\nSub ExportFlatPattern(part As SldWorks.PartDoc, flatPattern As SldWorks.Feature, outFilePath As String, opts As SheetMetalOptions_e, conf As String)\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = part\n    \n    Dim error As ErrObject\n    Dim hide As Boolean\n\ntry_:\n    \n    On Error GoTo catch_\n\n    If False = swModel.Visible Then\n        hide = True\n        swModel.Visible = True\n    End If\n    \n    swApp.ActivateDoc3 swModel.GetPathName(), False, swRebuildOnActivation_e.swDontRebuildActiveDoc, 0\n    \n    swModel.FeatureManager.EnableFeatureTree = False\n    swModel.FeatureManager.EnableFeatureTreeWindow = False\n    swModel.ActiveView.EnableGraphicsUpdate = False\n    \n    Dim curConf As String\n    \n    curConf = swModel.ConfigurationManager.ActiveConfiguration.Name\n    \n    If curConf <> conf Then\n        If False = swModel.ShowConfiguration2(conf) Then\n            Err.Raise vbError, "", "Failed to activate configuration"\n        End If\n    End If\n    \n    Dim outDir As String\n    outDir = Left(outFilePath, InStrRev(outFilePath, "\\"))\n    \n    CreateDirectories outDir\n    \n    Dim modelPath As String\n    \n    modelPath = part.GetPathName\n    \n    If modelPath = "" Then\n        Err.Raise vbError, "", "Part document must be saved"\n    End If\n    \n    If False <> flatPattern.Select2(False, -1) Then\n        If False = part.ExportToDWG2(outFilePath, modelPath, swExportToDWG_e.swExportToDWG_ExportSheetMetal, True, Empty, False, False, opts, Empty) Then\n            Err.Raise vbError, "", "Failed to export flat pattern"\n        End If\n    Else\n        Err.Raise vbError, "", "Failed to select flat-pattern"\n    End If\n    \n    swModel.ShowConfiguration2 curConf\n    \n    GoTo finally_\n    \ncatch_:\n    Set error = Err\nfinally_:\n\n    swModel.FeatureManager.EnableFeatureTree = True\n    swModel.FeatureManager.EnableFeatureTreeWindow = True\n    swModel.ActiveView.EnableGraphicsUpdate = True\n    \n    If hide Then\n        swApp.CloseDoc swModel.GetTitle\n    End If\n    \n    If Not error Is Nothing Then\n        Err.Raise error.Number, error.Source, error.Description, error.HelpFile, error.HelpContext\n    End If\n    \nEnd Sub\n\nSub CreateDirectories(path As String)\n\n    Dim fso As Object\n    Set fso = CreateObject("Scripting.FileSystemObject")\n\n    If fso.FolderExists(path) Then\n        Exit Sub\n    End If\n\n    CreateDirectories fso.GetParentFolderName(path)\n    \n    fso.CreateFolder path\n    \nEnd Sub\n\nFunction GetFullPath(model As SldWorks.ModelDoc2, path As String)\n    \n    GetFullPath = path\n        \n    If IsPathRelative(path) Then\n        \n        If Left(path, 1) <> "\\" Then\n            path = "\\" & path\n        End If\n        \n        Dim modelPath As String\n        Dim modelDir As String\n        \n        modelPath = model.GetPathName\n        \n        modelDir = Left(modelPath, InStrRev(modelPath, "\\") - 1)\n        \n        GetFullPath = modelDir & path\n        \n    End If\n    \nEnd Function\n\nFunction IsPathRelative(path As String)\n    IsPathRelative = Mid(path, 2, 1) <> ":" And Not IsPathUnc(path)\nEnd Function\n\nFunction IsPathUnc(path As String)\n    IsPathUnc = Left(path, 2) = "\\\\"\nEnd Function\n')))}m.isMDXComponent=!0},64520:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/flat-pattern-export-options-caf08a97bd79cd321c2e6fd5d64b6850.png"},82407:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);