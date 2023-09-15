"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[5541],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>C});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function s(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?s(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),m=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},p=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=m(o),d=r,C=c["".concat(l,".").concat(d)]||c[d]||f[d]||s;return o?t.createElement(C,i(i({ref:n},p),{},{components:o})):t.createElement(C,i({ref:n},p))}));function C(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[c]="string"==typeof e?e:r,i[1]=a;for(var m=2;m<s;m++)i[m]=o[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},84962:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>m});var t=o(87462),r=(o(67294),o(3905));const s={},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-to-file/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-to-file/index",title:"index",description:"Dim modelPath As String",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-to-file/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-to-file",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-to-file/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-to-file/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-to-file/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/link-sheet-metal/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u6587\u4ef6\u3001\u914d\u7f6e\u548c\u5207\u5272\u5217\u8868\u5143\u7d20\u4e2d\u8bfb\u53d6\u81ea\u5b9a\u4e49\u5c5e\u6027",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/read-all-properties/"}},l={},m=[],p={toc:m},c="wrapper";function f(e){let{components:n,...o}=e;return(0,r.kt)(c,(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dim modelPath As String\nmodelPath = model.GetPathName()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'If modelPath <> "" Then\n    Dim modelFolder As String\n    modelFolder = Left(modelPath, InStrRev(modelPath, "\\"))\n    \n    If Left(filePath, Len(modelFolder)) = modelFolder Then\n        GetRelativeFilePath = Right(filePath, Len(filePath) - Len(modelFolder))\n    End If\nEnd If\n')),(0,r.kt)("p",null,"End Function"),(0,r.kt)("p",null,"Sub swmRebuild(swApp As SldWorks.SldWorks, swModel As SldWorks.ModelDoc2, swFeat As SldWorks.Feature)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Dim csvFilePath As String\ncsvFilePath = swFeat.GetParameter(PARAM_CSV_PATH)\n\nDim confSpecific As Boolean\nconfSpecific = CBool(swFeat.GetParameter(PARAM_CONF_SPEC_NAME))\n\nDim clearPrps As Boolean\nclearPrps = CBool(swFeat.GetParameter(PARAM_CLEAR_PROPERTIES))\n\nDim processComps As Boolean\nprocessComps = CBool(swFeat.GetParameter(PARAM_PROCESS_COMPONENTS))\n\nDim csvTimeStamp As String\ncsvTimeStamp = swFeat.GetParameter(PARAM_CSV_TIME_STAMP)\n\nDim csvFileTimeStamp As String\ncsvFileTimeStamp = GetFileTimeStamp(csvFilePath)\n\nIf csvTimeStamp <> csvFileTimeStamp Or Not UPDATE_ON_CSV_FILE_CHANGE_ONLY Then\n    \n    Dim vTable As Variant\n    vTable = GetArrayFromCsv(csvFilePath)\n    \n    Dim swRefConf As SldWorks.Configuration\n    Set swRefConf = swModel.ConfigurationManager.ActiveConfiguration\n    \n    WritePropertiesFromTable swModel, vTable, IIf(CBool(confSpecific), swRefConf.Name, ""), clearPrps\n\n    If processComps Then\n    \n        Dim refCompModels() As RefCompModel\n        refCompModels = CollectUniqueComponents(swRefConf, confSpecific)\n        \n        If (Not refCompModels) <> -1 Then\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(refCompModels)\n                WritePropertiesFromTable refCompModels(i).RefModel, vTable, refCompModels(i).RefConf, CBool(clearPrps)\n            Next\n            \n        End If\n    \n    End If\n    \n    swFeat.SetParameter PARAM_CSV_TIME_STAMP, csvFileTimeStamp\n    \nEnd If\n')),(0,r.kt)("p",null,"End Sub"),(0,r.kt)("p",null,"Sub swmEditDefinition(swApp As SldWorks.SldWorks, swModel As SldWorks.ModelDoc2, swFeat As SldWorks.Feature)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Dim csvFilePath As String\ncsvFilePath = swFeat.GetParameter(PARAM_CSV_PATH)\n\nDim confSpecific As Boolean\nconfSpecific = CBool(swFeat.GetParameter(PARAM_CONF_SPEC_NAME))\n\nDim clearPrps As Boolean\nclearPrps = CBool(swFeat.GetParameter(PARAM_CLEAR_PROPERTIES))\n\nDim processComps As Boolean\nprocessComps = CBool(swFeat.GetParameter(PARAM_PROCESS_COMPONENTS))\n\nDim csvTimeStamp As String\ncsvTimeStamp = swFeat.GetParameter(PARAM_CSV_TIME_STAMP)\n\nDim csvFileTimeStamp As String\ncsvFileTimeStamp = GetFileTimeStamp(csvFilePath)\n\nIf csvTimeStamp <> csvFileTimeStamp Or Not UPDATE_ON_CSV_FILE_CHANGE_ONLY Then\n    \n    Dim vTable As Variant\n    vTable = GetArrayFromCsv(csvFilePath)\n    \n    Dim swRefConf As SldWorks.Configuration\n    Set swRefConf = swModel.ConfigurationManager.ActiveConfiguration\n    \n    WritePropertiesFromTable swModel, vTable, IIf(CBool(confSpecific), swRefConf.Name, ""), clearPrps\n\n    If processComps Then\n    \n        Dim refCompModels() As RefCompModel\n        refCompModels = CollectUniqueComponents(swRefConf, confSpecific)\n        \n        If (Not refCompModels) <> -1 Then\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(refCompModels)\n                WritePropertiesFromTable refCompModels(i).RefModel, vTable, refCompModels(i).RefConf, CBool(clearPrps)\n            Next\n            \n        End If\n    \n    End If\n    \n    swFeat.SetParameter PARAM_CSV_TIME_STAMP, csvFileTimeStamp\n    \nEnd If\n')),(0,r.kt)("p",null,"End Sub"),(0,r.kt)("p",null,"Sub swmSecurity(swApp As SldWorks.SldWorks, swModel As SldWorks.ModelDoc2, swFeat As SldWorks.Feature)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Dim csvFilePath As String\ncsvFilePath = swFeat.GetParameter(PARAM_CSV_PATH)\n\nDim confSpecific As Boolean\nconfSpecific = CBool(swFeat.GetParameter(PARAM_CONF_SPEC_NAME))\n\nDim clearPrps As Boolean\nclearPrps = CBool(swFeat.GetParameter(PARAM_CLEAR_PROPERTIES))\n\nDim processComps As Boolean\nprocessComps = CBool(swFeat.GetParameter(PARAM_PROCESS_COMPONENTS))\n\nDim csvTimeStamp As String\ncsvTimeStamp = swFeat.GetParameter(PARAM_CSV_TIME_STAMP)\n\nDim csvFileTimeStamp As String\ncsvFileTimeStamp = GetFileTimeStamp(csvFilePath)\n\nIf csvTimeStamp <> csvFileTimeStamp Or Not UPDATE_ON_CSV_FILE_CHANGE_ONLY Then\n    \n    Dim vTable As Variant\n    vTable = GetArrayFromCsv(csvFilePath)\n    \n    Dim swRefConf As SldWorks.Configuration\n    Set swRefConf = swModel.ConfigurationManager.ActiveConfiguration\n    \n    WritePropertiesFromTable swModel, vTable, IIf(CBool(confSpecific), swRefConf.Name, ""), clearPrps\n\n    If processComps Then\n    \n        Dim refCompModels() As RefCompModel\n        refCompModels = CollectUniqueComponents(swRefConf, confSpecific)\n        \n        If (Not refCompModels) <> -1 Then\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(refCompModels)\n                WritePropertiesFromTable refCompModels(i).RefModel, vTable, refCompModels(i).RefConf, CBool(clearPrps)\n            Next\n            \n        End If\n    \n    End If\n    \n    swFeat.SetParameter PARAM_CSV_TIME_STAMP, csvFileTimeStamp\n    \nEnd If\n')),(0,r.kt)("p",null,"End Sub"),(0,r.kt)("p",null,"Sub WritePropertiesFromTable(model As SldWorks.ModelDoc2, table As Variant, confName As String, clearPrps As Boolean)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Dim i As Integer\n\nDim swCustPrpMgr As SldWorks.CustomPropertyManager\n\nSet swCustPrpMgr = model.Extension.CustomPropertyManager(confName)\n\nIf clearPrps Then\n    ClearProperties swCustPrpMgr\nEnd If\n\nFor i = 0 To UBound(table, 1)\n            \n    Dim prpName As String\n    prpName = CStr(table(i, 0))\n    \n    Dim prpVal As String\n    prpVal = CStr(table(i, 1))\n    \n    If swCustPrpMgr.Add3(prpName, swCustomInfoType_e.swCustomInfoText, prpVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue) <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then\n        Err.Raise vbError, "", "Failed to add property \'" & prpName & "\'"\n    End If\n    \nNext\n')),(0,r.kt)("p",null,"End Sub"),(0,r.kt)("p",null,"Sub ClearProperties(custPrpMgr As SldWorks.CustomPropertyManager)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Dim vPrpNames As Variant\nvPrpNames = custPrpMgr.GetNames\n    \nIf Not IsEmpty(vPrpNames) Then\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vPrpNames)\n        custPrpMgr.Delete2 CStr(vPrpNames(i))\n    Next\n\nEnd If\n")),(0,r.kt)("p",null,"End Sub"),(0,r.kt)("p",null,"Function CollectUniqueComponents(assmConf As SldWorks.Configuration, confSpecific As Boolean) As RefCompModel()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Dim swRootComp As SldWorks.Component2\nSet swRootComp = assmConf.GetRootComponent3(False)\n\nDim refCompModels() As RefCompModel\n\nProcessComponents swRootComp.GetChildren(), confSpecific, refCompModels\n\nCollectUniqueComponents = refCompModels\n")),(0,r.kt)("p",null,"End Function"),(0,r.kt)("p",null,"Sub ProcessComponents(vComps As Variant, confSpecific As Boolean, refCompModels() As RefCompModel)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'If Not IsEmpty(vComps) Then\n\n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        \n        Dim swRefModel As SldWorks.ModelDoc2\n        Set swRefModel = swComp.GetModelDoc2\n        \n        If Not swRefModel Is Nothing Then\n        \n            Dim refConfName As String\n            \n            refConfName = IIf(confSpecific, swComp.ReferencedConfiguration, "")\n            \n            If Not Contains(refCompModels, swRefModel, refConfName) Then\n            \n                If (Not refCompModels) = -1 Then\n                    ReDim refCompModels(0)\n                Else\n                    ReDim Preserve refCompModels(UBound(refCompModels) + 1)\n                End If\n                \n                Set refCompModels(UBound(refCompModels)).RefModel = swRefModel\n                refCompModels(UBound(refCompModels)).RefConf = refConfName\n                \n            End If\n            \n            ProcessComponents swComp.GetChildren(), confSpecific, refCompModels\n            \n        End If\n        \n    Next\n\nEnd If\n')),(0,r.kt)("p",null,"End Sub"),(0,r.kt)("p",null,"Function Contains(refCompModels() As RefCompModel, model As SldWorks.ModelDoc2, conf As String) As Boolean"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Contains = False\n\nIf (Not refCompModels) <> -1 Then\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(refCompModels)\n            \n        If refCompModels(i).RefModel Is model And LCase(refCompModels(i).RefConf) = LCase(conf) Then\n            Contains = True\n            Exit Function\n        End If\n            \n    Next\n    \nEnd If\n")),(0,r.kt)("p",null,"End Function"),(0,r.kt)("p",null,"Function GetFileTimeStamp(filePath As String) As String"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Dim fso As Object\nSet fso = CreateObject("Scripting.FileSystemObject")\n\nDim file As Object\nSet file = fso.GetFile(filePath)\n\nGetFileTimeStamp = CStr(file.DateLastModified)\n')),(0,r.kt)("p",null,"End Function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vba"},'Dim modelDir As String\nmodelDir = model.GetPathName\n\nIf modelDir <> "" Then\n    \n    modelDir = Left(modelDir, InStrRev(modelDir, "\\"))\n\n    If Len(filePath) > Len(modelDir) Then\n        If LCase(modelDir) = LCase(Left(filePath, Len(modelDir))) Then\n            GetRelativeFilePath = Right(filePath, Len(filePath) - Len(modelDir) + 1)\n        End If\n    End If\n    \nEnd If\n\nEnd Function\n\nFunction swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n\ntry_:\nDim swModel As SldWorks.ModelDoc2\nDim swFeat As SldWorks.Feature\n\nSet swModel = varDoc\nSet swFeat = varFeat\n\nUpdateProperties swModel, swFeat\n\ncatch_:\nswmRebuild = Err.Description\nfinally_:\n\nEnd Function\n\n\n\n```vba\nSub UpdateProperties(model As SldWorks.ModelDoc2, feat As SldWorks.Feature)\n    \n    Dim swMacroFeat As SldWorks.MacroFeatureData\n    Set swMacroFeat = feat.GetDefinition()\n    \n    Dim csvFilePath As String\n    Dim confSpecific As Long\n    Dim clearPrps As Long\n    Dim processComps As Long\n    Dim csvFileTimeStamp As String\n    Dim curCsvFileTimeStamp As String\n    \n    swMacroFeat.GetIntegerByName PARAM_CONF_SPEC_NAME, confSpecific\n    \n    swMacroFeat.GetIntegerByName PARAM_CLEAR_PROPERTIES, clearPrps\n    \n    swMacroFeat.GetIntegerByName PARAM_PROCESS_COMPONENTS, processComps\n    \n    swMacroFeat.GetStringByName PARAM_CSV_TIME_STAMP, csvFileTimeStamp\n    \n    csvFilePath = GetCsvFileFullPath(swMacroFeat, model)\n    \n    curCsvFileTimeStamp = FileDateTime(csvFilePath)\n    \n    If Not UPDATE_ON_CSV_FILE_CHANGE_ONLY Or curCsvFileTimeStamp <> csvFileTimeStamp Then\n        \n        If Dir(csvFilePath) = "" Then\n            Err.Raise "Linked CSV file is missing: " & csvFilePath\n        End If\n        \n        Dim vTable As Variant\n        vTable = GetArrayFromCsv(csvFilePath)\n        \n        If UBound(vTable, 2) <> 1 Then\n            Err.Raise vbError, "", "There must be only 2 columns in the CSV file"\n        End If\n        \n        Dim swRefConf As SldWorks.Configuration\n        Set swRefConf = swMacroFeat.CurrentConfiguration\n        \n        WritePropertiesFromTable model, vTable, IIf(CBool(confSpecific), swRefConf.Name, ""), CBool(clearPrps)\n        \n        If CBool(processComps) Then\n        \n            Dim refCompModels() As RefCompModel\n            refCompModels = CollectUniqueComponents(swRefConf, CBool(confSpecific))\n            \n            If (Not refCompModels) <> -1 Then\n                \n                Dim i As Integer\n                \n                For i = 0 To UBound(refCompModels)\n                    WritePropertiesFromTable refCompModels(i).RefModel, vTable, refCompModels(i).RefConf, CBool(clearPrps)\n                Next\n                \n            End If\n        \n        End If\n        \n        swMacroFeat.SetStringByName PARAM_CSV_TIME_STAMP, curCsvFileTimeStamp\n    \n    End If\n    \nEnd Sub\n\nFunction CollectUniqueComponents(assmConf As SldWorks.Configuration, confSpecific As Boolean) As RefCompModel()\n    \n    Dim swRootComp As SldWorks.Component2\n    Set swRootComp = assmConf.GetRootComponent3(False)\n    \n    Dim refCompModels() As RefCompModel\n    \n    ProcessComponents swRootComp.GetChildren(), confSpecific, refCompModels\n    \n    CollectUniqueComponents = refCompModels\n    \nEnd Function\n\nSub ProcessComponents(vComps As Variant, confSpecific As Boolean, refCompModels() As RefCompModel)\n    \n    If Not IsEmpty(vComps) Then\n    \n        Dim i As Integer\n        \n        For i = 0 To UBound(vComps)\n            \n            Dim swComp As SldWorks.Component2\n            Set swComp = vComps(i)\n            \n            Dim swRefModel As SldWorks.ModelDoc2\n            Set swRefModel = swComp.GetModelDoc2\n            \n            If Not swRefModel Is Nothing Then\n            \n                Dim refConfName As String\n                \n                refConfName = IIf(confSpecific, swComp.ReferencedConfiguration, "")\n                \n                If Not Contains(refCompModels, swRefModel, refConfName) Then\n                \n                    If (Not refCompModels) = -1 Then\n                        ReDim refCompModels(0)\n                    Else\n                        ReDim Preserve refCompModels(UBound(refCompModels) + 1)\n                    End If\n                    \n                    Set refCompModels(UBound(refCompModels)).RefModel = swRefModel\n                    refCompModels(UBound(refCompModels)).RefConf = refConfName\n                    \n                End If\n                \n                ProcessComponents swComp.GetChildren(), confSpecific, refCompModels\n                \n            End If\n            \n        Next\n    \n    End If\n    \nEnd Sub\n\nFunction Contains(refCompModels() As RefCompModel, model As SldWorks.ModelDoc2, conf As String) As Boolean\n    \n    Contains = False\n    \n    If (Not refCompModels) <> -1 Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(refCompModels)\n            \n            If refCompModels(i).RefModel Is model And LCase(refCompModels(i).RefConf) = LCase(conf) Then\n                Contains = True\n                Exit Function\n            End If\n            \n        Next\n        \n    End If\n    \nEnd Function\n\nFunction GetCsvFileFullPath(macroFeatDef As SldWorks.MacroFeatureData, model As SldWorks.ModelDoc2) As String\n    \n    Dim csvFilePath As String\n    \n    macroFeatDef.GetStringByName PARAM_CSV_PATH, csvFilePath\n    \n    If Left(csvFilePath, 1) = "\\" And Mid(csvFilePath, 2, 1) <> "\\" Then \'if relative but not UNC\n        \n        modelDir = model.GetPathName\n    \n        If modelDir <> "" Then\n            modelDir = Left(modelDir, InStrRev(modelDir, "\\") - 1)\n            csvFilePath = modelDir & csvFilePath\n        End If\n        \n    End If\n    \n    GetCsvFileFullPath = csvFilePath\n    \nEnd Function\n\nSub WritePropertiesFromTable(model As SldWorks.ModelDoc2, table As Variant, confName As String, clearPrps As Boolean)\n    \n    Dim i As Integer\n    \n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    \n    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)\n    \n    If clearPrps Then\n        ClearProperties swCustPrpMgr\n    End If\n    \n    For i = 0 To UBound(table, 1)\n        \n        Dim prpName As String\n        prpName = CStr(table(i, 0))\n        \n        Dim prpVal As String\n        prpVal = CStr(table(i, 1))\n        \n        If swCustPrpMgr.Add3(prpName, swCustomInfoType_e.swCustomInfoText, prpVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue) <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then\n            Err.Raise vbError, "", "Failed to add property \'" & prpName & "\'"\n        End If\n        \n    Next\n    \nEnd Sub\n\nSub ClearProperties(custPrpMgr As SldWorks.CustomPropertyManager)\n    \n    Dim vPrpNames As Variant\n    vPrpNames = custPrpMgr.GetNames\n    \n    If Not IsEmpty(vPrpNames) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vPrpNames)\n            custPrpMgr.Delete2 CStr(vPrpNames(i))\n        Next\n    \n    End If\n    \nEnd Sub\n\nFunction swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n\nDim swApp As SldWorks.SldWorks\nSet swApp = varApp\n\nDim swModel As SldWorks.ModelDoc2\nSet swModel = varDoc\n\nDim csvFilePath As String\nDim confSpecific As Boolean\nDim clearPrps As Boolean\nDim processComps As Boolean\n    \nIf GetParameters(swApp, swModel, csvFilePath, confSpecific, clearPrps, processComps) Then\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = varFeat\n    \n    Dim swMacroFeat As SldWorks.MacroFeatureData\n    Set swMacroFeat = swFeat.GetDefinition()\n    \n    swMacroFeat.AccessSelections swModel, Nothing\n    \n    swMacroFeat.SetStringByName PARAM_CSV_PATH, csvFilePath\n    swMacroFeat.SetIntegerByName PARAM_CONF_SPEC_NAME, CLng(confSpecific)\n    swMacroFeat.SetIntegerByName PARAM_CLEAR_PROPERTIES, CLng(clearPrps)\n    swMacroFeat.SetIntegerByName PARAM_PROCESS_COMPONENTS, CLng(processComps)\n\n    swFeat.ModifyDefinition swMacroFeat, swModel, Nothing\n    \nEnd If\n\nswmEditDefinition = True\n\nEnd Function\n\nFunction swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\nswmSecurity = SwConst.swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityByDefault\nEnd Function\n')))}f.isMDXComponent=!0}}]);