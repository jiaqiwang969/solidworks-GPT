"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[47171],{3905:(e,n,o)=>{o.d(n,{Zo:()=>m,kt:()=>u});var t=o(67294);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,s=function(e,n){if(null==e)return{};var o,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=t.createContext({}),p=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},m=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var o=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(o),f=s,u=c["".concat(l,".").concat(f)]||c[f]||d[f]||r;return o?t.createElement(u,a(a({ref:n},m),{},{components:o})):t.createElement(u,a({ref:n},m))}));function u(e,n){var o=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=o.length,a=new Array(r);a[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<r;p++)a[p]=o[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},11932:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=o(87462),s=(o(67294),o(3905));const r={layout:"sw-tool",caption:"Link Custom Properties To File",title:"Link SOLIDWORKS custom properties from text file",description:"VBA macro to link and auto-update multiple SOLIDWORKS custom properties from the external CSV/Text file into configuration or file",image:"link-custom-property-file.svg",group:"Custom Properties"},a=void 0,i={unversionedId:"codestack/solidworks-api/data-storage/custom-properties/link-to-file/index",id:"codestack/solidworks-api/data-storage/custom-properties/link-to-file/index",title:"Link SOLIDWORKS custom properties from text file",description:"VBA macro to link and auto-update multiple SOLIDWORKS custom properties from the external CSV/Text file into configuration or file",source:"@site/docs/codestack/solidworks-api/data-storage/custom-properties/link-to-file/index.md",sourceDirName:"codestack/solidworks-api/data-storage/custom-properties/link-to-file",slug:"/codestack/solidworks-api/data-storage/custom-properties/link-to-file/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/data-storage/custom-properties/link-to-file/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/data-storage/custom-properties/link-to-file/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",caption:"Link Custom Properties To File",title:"Link SOLIDWORKS custom properties from text file",description:"VBA macro to link and auto-update multiple SOLIDWORKS custom properties from the external CSV/Text file into configuration or file",image:"link-custom-property-file.svg",group:"Custom Properties"},sidebar:"tutorialSidebar",previous:{title:"Macro to link sheet metal cut-list properties to SOLIDWORKS part custom properties",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/data-storage/custom-properties/link-sheet-metal/"},next:{title:"Read custom properties from file, configuration and cut-list elements using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/data-storage/custom-properties/read-all-properties/"}},l={},p=[],m={toc:p},c="wrapper";function d(e){let{components:n,...o}=e;return(0,s.kt)(c,(0,t.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This VBA macro allows to link external comma separated file into the configuration specific or file specific custom properties of SOLIDWORKS file."),(0,s.kt)("p",null,"CSV file consists of 2 columns (property name and property value) without a header."),(0,s.kt)("p",null,"If value of the cell contains special symbol ",(0,s.kt)("strong",{parentName:"p"},'"')," then the cell must have ",(0,s.kt)("strong",{parentName:"p"},'""')," at the start and ant the end of the cell value."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'Company,Xarial Pty Limited\nMaterial,"""SW-Material"""\nMass,"""SW-Mass"""\n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"You can use Excel to modify these values and export to CSV file with comma delimiter, special symbol will be formatted correctly automatically.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Commas and new line symbols in the property names or values are not supported")),(0,s.kt)("p",null,"Set the value of the ",(0,s.kt)("strong",{parentName:"p"},"CLEAR_PROPERTIES")," constant to ",(0,s.kt)("strong",{parentName:"p"},"True")," or ",(0,s.kt)("strong",{parentName:"p"},"False")," to configure if existing properties need to be deleted before updating."),(0,s.kt)("p",null,"Set ",(0,s.kt)("strong",{parentName:"p"},"ALL_COMPONENTS")," to ",(0,s.kt)("strong",{parentName:"p"},"True")," to process all components of the assembly"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const CLEAR_PROPERTIES As Boolean = False\nConst ALL_COMPONENTS As Boolean = True\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Type RefCompModel\n    RefModel As SldWorks.ModelDoc2\n    RefConf As String\nEnd Type\n\n#Const ARGS = True \'True to use arguments from Toolbar+ or Batch+ instead of the constant\n\nConst CLEAR_PROPERTIES As Boolean = False\nConst ALL_COMPONENTS As Boolean = False\n\nSub main()\n    \n    Dim swApp As SldWorks.SldWorks\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n                \n    Dim csvFilePath As String\n    Dim confSpecific As Boolean\n    \n    If GetParameters(swApp, swModel, csvFilePath, confSpecific) Then\n    \n        If Not swModel Is Nothing Then\n            \n            Dim vTable As Variant\n            vTable = GetArrayFromCsv(csvFilePath)\n            \n            Dim swRefConf As SldWorks.Configuration\n            Set swRefConf = swModel.ConfigurationManager.ActiveConfiguration\n            \n            WritePropertiesFromTable swModel, vTable, IIf(CBool(confSpecific), swRefConf.Name, ""), CLEAR_PROPERTIES\n        \n            If ALL_COMPONENTS Then\n            \n                Dim refCompModels() As RefCompModel\n                refCompModels = CollectUniqueComponents(swRefConf, confSpecific)\n                \n                If (Not refCompModels) <> -1 Then\n                    \n                    Dim i As Integer\n                    \n                    For i = 0 To UBound(refCompModels)\n                        WritePropertiesFromTable refCompModels(i).RefModel, vTable, refCompModels(i).RefConf, CBool(clearPrps)\n                    Next\n                    \n                End If\n            \n            End If\n        \n            \'WritePropertiesFromFile swModel, csvFilePath, IIf(CBool(confSpecific), swModel.ConfigurationManager.ActiveConfiguration, Nothing)\n        Else\n            Err.Raise vbError, "", "Please open model"\n        End If\n        \n    End If\n            \nEnd Sub\n\nFunction GetParameters(app As SldWorks.SldWorks, ByRef model As SldWorks.ModelDoc2, ByRef csvFilePath As String, ByRef confSpecific As Boolean) As Boolean\n    \nDim confSpecArgsParsed As Boolean\n\n#If ARGS Then\n\ntry_:\n    On Error GoTo catch_\n    \n    Dim macroRunner As Object\n    Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")\n    \n    Dim param As Object\n    Set param = macroRunner.PopParameter(app)\n        \n    Dim vArgs As Variant\n    vArgs = param.Get("Args")\n        \n    Set model = param.Get("Model")\n    \n    If Not IsEmpty(vArgs) Then\n        csvFilePath = CStr(vArgs(0))\n    End If\n    \n    If UBound(vArgs) > 0 Then\n        confSpecific = CBool(vArgs(1))\n        confSpecArgsParsed = True\n    End If\n    \n    GoTo finally_\n    \ncatch_:\nfinally_:\n\n#End If\n\n    If Trim(csvFilePath) = "" Then\n        csvFilePath = app.GetOpenFileName("Custom Properties Template File", "", "CSV Files (*.csv)|*.csv|Text Files (*.txt)|*.txt|All Files (*.*)|*.*|", 0, "", "")\n    End If\n    \n    If model Is Nothing Then\n        Set model = app.ActiveDoc\n    End If\n    \n    If csvFilePath <> "" Then\n        If Not confSpecArgsParsed Then\n            confSpecific = app.SendMsgToUser2("Link to configuration specific properties (Yes) or File Specific (No)?", swMessageBoxIcon_e.swMbQuestion, swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitYes\n        End If\n        GetParameters = True\n    Else\n        GetParameters = False\n    End If\n    \nEnd Function\n\nFunction GetArrayFromCsv(filePath As String) As Variant\n    \n    Dim fileNo As Integer\n\n    fileNo = FreeFile\n    \n    Dim rows As Collection\n    Set rows = New Collection\n    \n    Open filePath For Input As #fileNo\n    \n    Do While Not EOF(fileNo)\n        \n        Dim tableRow As String\n        \n        Line Input #fileNo, tableRow\n            \n        Dim vCells As Variant\n        vCells = Split(tableRow, ",")\n        rows.Add vCells\n    \n    Loop\n    \n    Close #fileNo\n    \n    Dim tableData() As String\n\n    Dim rowCount As Integer\n    Dim columnCount As Integer\n    rowCount = rows.Count\n    columnCount = UBound(rows(1)) + 1\n    \n    Dim rowIndex As Integer\n    Dim columnIndex As Integer\n    \n    ReDim tableData(rowCount - 1, columnCount - 1)\n    \n    For rowIndex = 1 To rowCount\n        Dim vRow As Variant\n        vRow = rows.Item(rowIndex)\n        \n        For columnIndex = 1 To columnCount\n            Dim cellVal As String\n            cellVal = vRow(columnIndex - 1)\n            \n            If Left(cellVal, 2) = """""" And Right(cellVal, 2) = """""" Then\n                cellVal = Mid(cellVal, 3, Len(cellVal) - 4)\n            End If\n            \n            tableData(rowIndex - 1, columnIndex - 1) = cellVal\n        Next\n    Next\n    \n    GetArrayFromCsv = tableData\n    \nEnd Function\n\nSub WritePropertiesFromTable(model As SldWorks.ModelDoc2, table As Variant, confName As String, clearPrps As Boolean)\n    \n    Dim i As Integer\n    \n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    \n    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)\n    \n    If clearPrps Then\n        ClearProperties swCustPrpMgr\n    End If\n    \n    For i = 0 To UBound(table, 1)\n                \n        Dim prpName As String\n        prpName = CStr(table(i, 0))\n        \n        Dim prpVal As String\n        prpVal = CStr(table(i, 1))\n        \n        If swCustPrpMgr.Add3(prpName, swCustomInfoType_e.swCustomInfoText, prpVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue) <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then\n            Err.Raise vbError, "", "Failed to add property \'" & prpName & "\'"\n        End If\n        \n    Next\n    \nEnd Sub\n\nSub ClearProperties(custPrpMgr As SldWorks.CustomPropertyManager)\n    \n    Dim vPrpNames As Variant\n    vPrpNames = custPrpMgr.GetNames\n        \n    If Not IsEmpty(vPrpNames) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vPrpNames)\n            custPrpMgr.Delete2 CStr(vPrpNames(i))\n        Next\n    \n    End If\n    \nEnd Sub\n\nFunction CollectUniqueComponents(assmConf As SldWorks.Configuration, confSpecific As Boolean) As RefCompModel()\n    \n    Dim swRootComp As SldWorks.Component2\n    Set swRootComp = assmConf.GetRootComponent3(False)\n    \n    Dim refCompModels() As RefCompModel\n    \n    ProcessComponents swRootComp.GetChildren(), confSpecific, refCompModels\n    \n    CollectUniqueComponents = refCompModels\n    \nEnd Function\n\nSub ProcessComponents(vComps As Variant, confSpecific As Boolean, refCompModels() As RefCompModel)\n    \n    If Not IsEmpty(vComps) Then\n    \n        Dim i As Integer\n        \n        For i = 0 To UBound(vComps)\n            \n            Dim swComp As SldWorks.Component2\n            Set swComp = vComps(i)\n            \n            Dim swRefModel As SldWorks.ModelDoc2\n            Set swRefModel = swComp.GetModelDoc2\n            \n            If Not swRefModel Is Nothing Then\n            \n                Dim refConfName As String\n                \n                refConfName = IIf(confSpecific, swComp.ReferencedConfiguration, "")\n                \n                If Not Contains(refCompModels, swRefModel, refConfName) Then\n                \n                    If (Not refCompModels) = -1 Then\n                        ReDim refCompModels(0)\n                    Else\n                        ReDim Preserve refCompModels(UBound(refCompModels) + 1)\n                    End If\n                    \n                    Set refCompModels(UBound(refCompModels)).RefModel = swRefModel\n                    refCompModels(UBound(refCompModels)).RefConf = refConfName\n                    \n                End If\n                \n                ProcessComponents swComp.GetChildren(), confSpecific, refCompModels\n                \n            End If\n            \n        Next\n    \n    End If\n    \nEnd Sub\n\nFunction Contains(refCompModels() As RefCompModel, model As SldWorks.ModelDoc2, conf As String) As Boolean\n    \n    Contains = False\n    \n    If (Not refCompModels) <> -1 Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(refCompModels)\n                \n            If refCompModels(i).RefModel Is model And LCase(refCompModels(i).RefConf) = LCase(conf) Then\n                Contains = True\n                Exit Function\n            End If\n                \n        Next\n        \n    End If\n    \nEnd Function\n')),(0,s.kt)("p",null,"In order to dynamically link external text file and update properties on every rebuild, use the following macro."),(0,s.kt)("p",null,"Set the value of the ",(0,s.kt)("strong",{parentName:"p"},"UPDATE_ON_CSV_FILE_CHANGE_ONLY")," constant to ",(0,s.kt)("strong",{parentName:"p"},"True")," or ",(0,s.kt)("strong",{parentName:"p"},"False")," to configure if properties need to reload only if properties text file is changed or always when macro."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const UPDATE_ON_CSV_FILE_CHANGE_ONLY As Boolean = False\n")),(0,s.kt)("p",null,"Macro will ask for the following input parameters upon insertion of the macro feature:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Should the properties be configuration specific or file specific"),(0,s.kt)("li",{parentName:"ul"},"Should the properties be cleared upon update"),(0,s.kt)("li",{parentName:"ul"},"Should the reference components of the assembly be included into the scope of the properties")),(0,s.kt)("p",null,"Properties will be automatically updated upon rebuild of the macro feature."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Type RefCompModel\n    RefModel As SldWorks.ModelDoc2\n    RefConf As String\nEnd Type\n\nConst BASE_NAME As String = "LinkedCustomProperties"\nConst EMBED As Boolean = False\n\nConst UPDATE_ON_CSV_FILE_CHANGE_ONLY As Boolean = True\n\nConst PARAM_CLEAR_PROPERTIES As String = "ClearProperties"\nConst PARAM_PROCESS_COMPONENTS As String = "ProcessComponents"\nConst PARAM_CSV_PATH As String = "CsvPath"\nConst PARAM_CONF_SPEC_NAME As String = "ConfigurationSpecific"\nConst PARAM_CSV_TIME_STAMP As String = "CsvFileTimeStamp"\n\nFunction GetParameters(app As SldWorks.SldWorks, model As SldWorks.ModelDoc2, ByRef csvFilePath As String, ByRef confSpecific As Boolean, ByRef clearPrps As Boolean, ByRef processComps As Boolean) As Boolean\n    \n    csvFilePath = app.GetOpenFileName("Custom Properties Template File", "", "CSV Files (*.csv)|*.csv|Text Files (*.txt)|*.txt|All Files (*.*)|*.*|", 0, "", "")\n    \n    If csvFilePath <> "" Then\n        \n        csvFilePath = GetRelativeFilePath(model, csvFilePath)\n        \n        confSpecific = app.SendMsgToUser2("Link to configuration specific properties (Yes) or File Specific (No)?", swMessageBoxIcon_e.swMbQuestion, swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitYes\n        \n        clearPrps = app.SendMsgToUser2("Clear existing properties?", swMessageBoxIcon_e.swMbQuestion, swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitYes\n        \n        If TypeOf model Is SldWorks.AssemblyDoc Then\n            processComps = app.SendMsgToUser2("Process children components of the assembly?", swMessageBoxIcon_e.swMbQuestion, swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitYes\n        Else\n            processComps = False\n        End If\n        \n        GetParameters = True\n    Else\n        GetParameters = False\n    End If\n    \nEnd Function\n\nSub main()\n\n    Dim swApp As SldWorks.SldWorks\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n                \n        Dim csvFilePath As String\n        Dim confSpecific As Boolean\n        Dim clearPrps As Boolean\n        Dim processComps As Boolean\n        \n        If GetParameters(swApp, swModel, csvFilePath, confSpecific, clearPrps, processComps) Then\n                \n            Dim curMacroPath As String\n            curMacroPath = swApp.GetCurrentMacroPathName\n            Dim vMethods(8) As String\n            Dim moduleName As String\n            \n            GetMacroEntryPoint swApp, curMacroPath, moduleName, ""\n            \n            vMethods(0) = curMacroPath: vMethods(1) = moduleName: vMethods(2) = "swmRebuild"\n            vMethods(3) = curMacroPath: vMethods(4) = moduleName: vMethods(5) = "swmEditDefinition"\n            vMethods(6) = curMacroPath: vMethods(7) = moduleName: vMethods(8) = "swmSecurity"\n            \n            Dim vParamNames(4) As String\n            vParamNames(0) = PARAM_CSV_PATH\n            vParamNames(1) = PARAM_CONF_SPEC_NAME\n            vParamNames(2) = PARAM_CLEAR_PROPERTIES\n            vParamNames(3) = PARAM_PROCESS_COMPONENTS\n            vParamNames(4) = PARAM_CSV_TIME_STAMP\n    \n            Dim vParamTypes(4) As Long\n            vParamTypes(0) = swMacroFeatureParamType_e.swMacroFeatureParamTypeString\n            vParamTypes(1) = swMacroFeatureParamType_e.swMacroFeatureParamTypeInteger\n            vParamTypes(2) = swMacroFeatureParamType_e.swMacroFeatureParamTypeInteger\n            vParamTypes(3) = swMacroFeatureParamType_e.swMacroFeatureParamTypeInteger\n            vParamTypes(4) = swMacroFeatureParamType_e.swMacroFeatureParamTypeString\n            \n            Dim vParamValues(4) As String\n    \n            vParamValues(0) = csvFilePath\n            vParamValues(1) = CLng(confSpecific)\n            vParamValues(2) = CLng(clearPrps)\n            vParamValues(3) = CLng(processComps)\n            vParamValues(4) = ""\n            \n            Dim opts As swMacroFeatureOptions_e\n            opts = swMacroFeatureOptions_e.swMacroFeatureAlwaysAtEnd\n            \n            If EMBED Then\n                opts = opts + swMacroFeatureOptions_e.swMacroFeatureEmbedMacroFile\n            End If\n            \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = swModel.FeatureManager.InsertMacroFeature3(BASE_NAME, "", vMethods, _\n                vParamNames, vParamTypes, vParamValues, Empty, Empty, Empty, _\n                Empty, opts)\n            \n            If swFeat Is Nothing Then\n                MsgBox "Failed to create linked properties feature"\n            End If\n            \n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nSub GetMacroEntryPoint(app As SldWorks.SldWorks, macroPath As String, ByRef moduleName As String, ByRef procName As String)\n        \n    Dim vMethods As Variant\n    vMethods = app.GetMacroMethods(macroPath, swMacroMethods_e.swMethodsWithoutArguments)\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(vMethods) Then\n    \n        For i = 0 To UBound(vMethods)\n            Dim vData As Variant\n            vData = Split(vMethods(i), ".")\n            \n            If i = 0 Or LCase(vData(1)) = "main" Then\n                moduleName = vData(0)\n                procName = vData(1)\n            End If\n        Next\n        \n    End If\n    \nEnd Sub\n\nFunction GetArrayFromCsv(filePath As String) As Variant\n    \n    Dim fileNo As Integer\n\n    fileNo = FreeFile\n    \n    Dim rows As Collection\n    Set rows = New Collection\n    \n    Open filePath For Input As #fileNo\n    \n    Do While Not EOF(fileNo)\n        \n        Dim tableRow As String\n        \n        Line Input #fileNo, tableRow\n            \n        Dim vCells As Variant\n        vCells = Split(tableRow, ",")\n        rows.Add vCells\n    \n    Loop\n    \n    Close #fileNo\n    \n    Dim tableData() As String\n\n    Dim rowCount As Integer\n    Dim columnCount As Integer\n    rowCount = rows.Count\n    columnCount = UBound(rows(1)) + 1\n    \n    Dim rowIndex As Integer\n    Dim columnIndex As Integer\n    \n    ReDim tableData(rowCount - 1, columnCount - 1)\n    \n    For rowIndex = 1 To rowCount\n        Dim vRow As Variant\n        vRow = rows.Item(rowIndex)\n        \n        For columnIndex = 1 To columnCount\n            Dim cellVal As String\n            cellVal = vRow(columnIndex - 1)\n            \n            If Left(cellVal, 2) = """""" And Right(cellVal, 2) = """""" Then\n                cellVal = Mid(cellVal, 3, Len(cellVal) - 4)\n            End If\n            \n            tableData(rowIndex - 1, columnIndex - 1) = cellVal\n        Next\n    Next\n    \n    GetArrayFromCsv = tableData\n    \nEnd Function\n\nFunction GetRelativeFilePath(model As SldWorks.ModelDoc2, filePath As String) As String\n\n    GetRelativeFilePath = filePath\n\n    Dim modelDir As String\n    modelDir = model.GetPathName\n    \n    If modelDir <> "" Then\n        \n        modelDir = Left(modelDir, InStrRev(modelDir, "\\"))\n        \n        If Len(filePath) > Len(modelDir) Then\n            If LCase(modelDir) = LCase(Left(filePath, Len(modelDir))) Then\n                GetRelativeFilePath = Right(filePath, Len(filePath) - Len(modelDir) + 1)\n            End If\n        End If\n        \n    End If\n\nEnd Function\n\nFunction swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n\ntry_:\n    Dim swModel As SldWorks.ModelDoc2\n    Dim swFeat As SldWorks.Feature\n    \n    Set swModel = varDoc\n    Set swFeat = varFeat\n    \n    UpdateProperties swModel, swFeat\n    \ncatch_:\n    swmRebuild = Err.Description\nfinally_:\n        \nEnd Function\n\nSub UpdateProperties(model As SldWorks.ModelDoc2, feat As SldWorks.Feature)\n        \n    Dim swMacroFeat As SldWorks.MacroFeatureData\n    Set swMacroFeat = feat.GetDefinition()\n    \n    Dim csvFilePath As String\n    Dim confSpecific As Long\n    Dim clearPrps As Long\n    Dim processComps As Long\n    Dim csvFileTimeStamp As String\n    Dim curCsvFileTimeStamp As String\n    \n    swMacroFeat.GetIntegerByName PARAM_CONF_SPEC_NAME, confSpecific\n    \n    swMacroFeat.GetIntegerByName PARAM_CLEAR_PROPERTIES, clearPrps\n    \n    swMacroFeat.GetIntegerByName PARAM_PROCESS_COMPONENTS, processComps\n    \n    swMacroFeat.GetStringByName PARAM_CSV_TIME_STAMP, csvFileTimeStamp\n    \n    csvFilePath = GetCsvFileFullPath(swMacroFeat, model)\n    \n    curCsvFileTimeStamp = FileDateTime(csvFilePath)\n    \n    If Not UPDATE_ON_CSV_FILE_CHANGE_ONLY Or curCsvFileTimeStamp <> csvFileTimeStamp Then\n        \n        If Dir(csvFilePath) = "" Then\n            Err.Raise "Linked CSV file is missing: " & csvFilePath\n        End If\n        \n        Dim vTable As Variant\n        vTable = GetArrayFromCsv(csvFilePath)\n        \n        If UBound(vTable, 2) <> 1 Then\n            Err.Raise vbError, "", "There must be only 2 columns in the CSV file"\n        End If\n        \n        Dim swRefConf As SldWorks.Configuration\n        Set swRefConf = swMacroFeat.CurrentConfiguration\n        \n        WritePropertiesFromTable model, vTable, IIf(CBool(confSpecific), swRefConf.Name, ""), CBool(clearPrps)\n        \n        If CBool(processComps) Then\n        \n            Dim refCompModels() As RefCompModel\n            refCompModels = CollectUniqueComponents(swRefConf, CBool(confSpecific))\n            \n            If (Not refCompModels) <> -1 Then\n                \n                Dim i As Integer\n                \n                For i = 0 To UBound(refCompModels)\n                    WritePropertiesFromTable refCompModels(i).RefModel, vTable, refCompModels(i).RefConf, CBool(clearPrps)\n                Next\n                \n            End If\n        \n        End If\n        \n        swMacroFeat.SetStringByName PARAM_CSV_TIME_STAMP, curCsvFileTimeStamp\n    \n    End If\n    \nEnd Sub\n\nFunction CollectUniqueComponents(assmConf As SldWorks.Configuration, confSpecific As Boolean) As RefCompModel()\n    \n    Dim swRootComp As SldWorks.Component2\n    Set swRootComp = assmConf.GetRootComponent3(False)\n    \n    Dim refCompModels() As RefCompModel\n    \n    ProcessComponents swRootComp.GetChildren(), confSpecific, refCompModels\n    \n    CollectUniqueComponents = refCompModels\n    \nEnd Function\n\nSub ProcessComponents(vComps As Variant, confSpecific As Boolean, refCompModels() As RefCompModel)\n    \n    If Not IsEmpty(vComps) Then\n    \n        Dim i As Integer\n        \n        For i = 0 To UBound(vComps)\n            \n            Dim swComp As SldWorks.Component2\n            Set swComp = vComps(i)\n            \n            Dim swRefModel As SldWorks.ModelDoc2\n            Set swRefModel = swComp.GetModelDoc2\n            \n            If Not swRefModel Is Nothing Then\n            \n                Dim refConfName As String\n                \n                refConfName = IIf(confSpecific, swComp.ReferencedConfiguration, "")\n                \n                If Not Contains(refCompModels, swRefModel, refConfName) Then\n                \n                    If (Not refCompModels) = -1 Then\n                        ReDim refCompModels(0)\n                    Else\n                        ReDim Preserve refCompModels(UBound(refCompModels) + 1)\n                    End If\n                    \n                    Set refCompModels(UBound(refCompModels)).RefModel = swRefModel\n                    refCompModels(UBound(refCompModels)).RefConf = refConfName\n                    \n                End If\n                \n                ProcessComponents swComp.GetChildren(), confSpecific, refCompModels\n                \n            End If\n            \n        Next\n    \n    End If\n    \nEnd Sub\n\nFunction Contains(refCompModels() As RefCompModel, model As SldWorks.ModelDoc2, conf As String) As Boolean\n    \n    Contains = False\n    \n    If (Not refCompModels) <> -1 Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(refCompModels)\n                \n            If refCompModels(i).RefModel Is model And LCase(refCompModels(i).RefConf) = LCase(conf) Then\n                Contains = True\n                Exit Function\n            End If\n                \n        Next\n        \n    End If\n    \nEnd Function\n\nFunction GetCsvFileFullPath(macroFeatDef As SldWorks.MacroFeatureData, model As SldWorks.ModelDoc2) As String\n    \n    Dim csvFilePath As String\n    \n    macroFeatDef.GetStringByName PARAM_CSV_PATH, csvFilePath\n    \n    If Left(csvFilePath, 1) = "\\" And Mid(csvFilePath, 2, 1) <> "\\" Then \'if relative but not UNC\n        \n        modelDir = model.GetPathName\n    \n        If modelDir <> "" Then\n            modelDir = Left(modelDir, InStrRev(modelDir, "\\") - 1)\n            csvFilePath = modelDir & csvFilePath\n        End If\n        \n    End If\n    \n    GetCsvFileFullPath = csvFilePath\n    \nEnd Function\n\nSub WritePropertiesFromTable(model As SldWorks.ModelDoc2, table As Variant, confName As String, clearPrps As Boolean)\n    \n    Dim i As Integer\n    \n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    \n    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)\n    \n    If clearPrps Then\n        ClearProperties swCustPrpMgr\n    End If\n    \n    For i = 0 To UBound(table, 1)\n                \n        Dim prpName As String\n        prpName = CStr(table(i, 0))\n        \n        Dim prpVal As String\n        prpVal = CStr(table(i, 1))\n        \n        If swCustPrpMgr.Add3(prpName, swCustomInfoType_e.swCustomInfoText, prpVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue) <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then\n            Err.Raise vbError, "", "Failed to add property \'" & prpName & "\'"\n        End If\n        \n    Next\n    \nEnd Sub\n\nSub ClearProperties(custPrpMgr As SldWorks.CustomPropertyManager)\n    \n    Dim vPrpNames As Variant\n    vPrpNames = custPrpMgr.GetNames\n        \n    If Not IsEmpty(vPrpNames) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vPrpNames)\n            custPrpMgr.Delete2 CStr(vPrpNames(i))\n        Next\n    \n    End If\n    \nEnd Sub\n\nFunction swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n\n    Dim swApp As SldWorks.SldWorks\n    Set swApp = varApp\n\n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = varDoc\n\n    Dim csvFilePath As String\n    Dim confSpecific As Boolean\n    Dim clearPrps As Boolean\n    Dim processComps As Boolean\n        \n    If GetParameters(swApp, swModel, csvFilePath, confSpecific, clearPrps, processComps) Then\n        \n        Dim swFeat As SldWorks.Feature\n        \n        Set swFeat = varFeat\n        \n        Dim swMacroFeat As SldWorks.MacroFeatureData\n        Set swMacroFeat = swFeat.GetDefinition()\n        \n        swMacroFeat.AccessSelections swModel, Nothing\n        \n        swMacroFeat.SetStringByName PARAM_CSV_PATH, csvFilePath\n        swMacroFeat.SetIntegerByName PARAM_CONF_SPEC_NAME, CLng(confSpecific)\n        swMacroFeat.SetIntegerByName PARAM_CLEAR_PROPERTIES, CLng(clearPrps)\n        swMacroFeat.SetIntegerByName PARAM_PROCESS_COMPONENTS, CLng(processComps)\n\n        swFeat.ModifyDefinition swMacroFeat, swModel, Nothing\n        \n    End If\n    \n    swmEditDefinition = True\n    \nEnd Function\n\nFunction swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmSecurity = SwConst.swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityByDefault\nEnd Function\n')))}d.isMDXComponent=!0}}]);