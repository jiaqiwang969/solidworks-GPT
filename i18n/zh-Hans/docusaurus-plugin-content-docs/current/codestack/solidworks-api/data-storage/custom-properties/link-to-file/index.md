---
layout: sw-tool
caption: 链接自定义属性到文件
title:  从文本文件链接SOLIDWORKS自定义属性
---
 VBA宏将外部CSV/文本文件中的多个SOLIDWORKS自定义属性链接和自动更新到配置或文件中
image: link-custom-property-file.svg
group: Custom Properties
---

这个VBA宏允许将外部逗号分隔的文件链接到SOLIDWORKS文件的特定配置或文件特定的自定义属性中。

CSV文件由两列组成（属性名称和属性值），没有标题。

如果单元格的值包含特殊符号**"**，则单元格的值必须在单元格值的开头和结尾处有**""**。

~~~
Company,Xarial Pty Limited
Material,"""SW-Material"""
Mass,"""SW-Mass"""
~~~

> 您可以使用Excel修改这些值并导出为逗号分隔的CSV文件，特殊符号将自动正确格式化。

> 属性名称或值中的逗号和换行符不受支持。

将**CLEAR_PROPERTIES**常量的值设置为**True**或**False**以配置在更新之前是否需要删除现有属性。

将**ALL_COMPONENTS**设置为**True**以处理装配体的所有组件。

``` vb
Const CLEAR_PROPERTIES As Boolean = False
Const ALL_COMPONENTS As Boolean = True
```

``` vb
Type RefCompModel
    RefModel As SldWorks.ModelDoc2
    RefConf As String
End Type

#Const ARGS = True 'True to use arguments from Toolbar+ or Batch+ instead of the constant

Const CLEAR_PROPERTIES As Boolean = False
Const ALL_COMPONENTS As Boolean = False

Sub main()
    
    Dim swApp As SldWorks.SldWorks
    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
                
    Dim csvFilePath As String
    Dim confSpecific As Boolean
    
    If GetParameters(swApp, swModel, csvFilePath, confSpecific) Then
    
        If Not swModel Is Nothing Then
            
            Dim vTable As Variant
            vTable = GetArrayFromCsv(csvFilePath)
            
            Dim swRefConf As SldWorks.Configuration
            Set swRefConf = swModel.ConfigurationManager.ActiveConfiguration
            
            WritePropertiesFromTable swModel, vTable, IIf(CBool(confSpecific), swRefConf.Name, ""), CLEAR_PROPERTIES
        
            If ALL_COMPONENTS Then
            
                Dim refCompModels() As RefCompModel
                refCompModels = CollectUniqueComponents(swRefConf, confSpecific)
                
                If (Not refCompModels) <> -1 Then
                    
                    Dim i As Integer
                    
                    For i = 0 To UBound(refCompModels)
                        WritePropertiesFromTable refCompModels(i).RefModel, vTable, refCompModels(i).RefConf, CBool(clearPrps)
                    Next
                    
                End If
            
            End If
        
            'WritePropertiesFromFile swModel, csvFilePath, IIf(CBool(confSpecific), swModel.ConfigurationManager.ActiveConfiguration, Nothing)
        Else
            Err.Raise vbError, "", "请打开模型"
        End If
        
    End If
            
End Sub

Function GetParameters(app As SldWorks.SldWorks, ByRef model As SldWorks.ModelDoc2, ByRef csvFilePath As String, ByRef confSpecific As Boolean) As Boolean
    
Dim confSpecArgsParsed As Boolean

#If ARGS Then

try_:
    On Error GoTo catch_
    
    Dim macroRunner As Object
    Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")
    
    Dim param As Object
    Set param = macroRunner.PopParameter(app)
        
    Dim vArgs As Variant
    vArgs = param.Get("Args")
        
    Set model = param.Get("Model")
    
    If Not IsEmpty(vArgs) Then
        csvFilePath = CStr(vArgs(0))
    End If
    
    If UBound(vArgs) > 0 Then
        confSpecific = CBool(vArgs(1))
        confSpecArgsParsed = True
    End If
    
    GoTo finally_
    
catch_:
finally_:

#End If

    If Trim(csvFilePath) = "" Then
        csvFilePath = app.GetOpenFileName("Custom Properties Template File", "", "CSV Files (*.csv)|*.csv|Text Files (*.txt)|*.txt|All Files (*.*)|*.*|", 0, "", "")
    End If
    
    If model Is Nothing Then
        Set model = app.ActiveDoc
    End If
    
    If csvFilePath <> "" Then
        If Not confSpecArgsParsed Then
            confSpecific = app.SendMsgToUser2("链接到配置特定属性（是）还是文件特定属性（否）？", swMessageBoxIcon_e.swMbQuestion, swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitYes
        End If
        GetParameters = True
    Else
        GetParameters = False
    End If
    
End Function

Function GetArrayFromCsv(filePath As String) As Variant
    
    Dim fileNo As Integer

    fileNo = FreeFile
    
    Dim rows As Collection
    Set rows = New Collection
    
    Open filePath For Input As #fileNo
    
    Do While Not EOF(fileNo)
        
        Dim tableRow As String
        
        Line Input #fileNo, tableRow
            
        Dim vCells As Variant
        vCells = Split(tableRow, ",")
        rows.Add vCells
    
    Loop
    
    Close #fileNo
    
    Dim tableData() As String

    Dim rowCount As Integer
    Dim columnCount As Integer
    rowCount = rows.Count
    columnCount = UBound(rows(1)) + 1
    
    Dim rowIndex As Integer
    Dim columnIndex As Integer
    
    ReDim tableData(rowCount - 1, columnCount - 1)
    
    For rowIndex = 1 To rowCount
        Dim vRow As Variant
        vRow = rows.Item(rowIndex)
        
        For columnIndex = 1 To columnCount
            Dim cellVal As String
            cellVal = vRow(columnIndex - 1)
            
            If Left(cellVal, 2) = """""" And Right(cellVal, 2) = """""" Then
                cellVal = Mid(cellVal, 3, Len(cellVal) - 4)
            End If
            
            tableData(rowIndex - 1, columnIndex - 1) = cellVal
        Next
    Next
    
    GetArrayFromCsv = tableData
    
End Function

Sub WritePropertiesFromTable(model As SldWorks.ModelDoc2, table As Variant, confName As String, clearPrps As Boolean)
    
    Dim i As Integer
    
    Dim swCustPrpMgr As SldWorks.CustomPropertyManager
    
    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)
    
    If clearPrps Then
        ClearProperties swCustPrpMgr
    End If
    
    For i = 0 To UBound(table, 1)
                
        Dim prpName As String
        prpName = CStr(table(i, 0))
        
        Dim prpVal As String
        prpVal = CStr(table(i, 1))
        
        If swCustPrpMgr.Add3(prpName, swCustomInfoType_e.swCustomInfoText, prpVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue) <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then
            Err.Raise vbError, "", "无法添加属性'" & prpName & "'"
        End If
        
    Next
    
End Sub

Sub ClearProperties(custPrpMgr As SldWorks.CustomPropertyManager)
    
    Dim vPrpNames As Variant
    vPrpNames = custPrpMgr.GetNames
        
    If Not IsEmpty(vPrpNames) Then
        
        Dim i As Integer
        
        For i = 0 To UBound(vPrpNames)
            custPrpMgr.Delete2 CStr(vPrpNames(i))
        Next
    
    End If
    
End Sub

Function CollectUniqueComponents(assmConf As SldWorks.Configuration, confSpecific As Boolean) As RefCompModel()
    
    Dim swRootComp As SldWorks.Component2
    Set swRootComp = assmConf.GetRootComponent3(False)
    
    Dim refCompModels() As RefCompModel
    
    ProcessComponents swRootComp.GetChildren(), confSpecific, refCompModels
    
    CollectUniqueComponents = refCompModels
    
End Function

Sub ProcessComponents(vComps As Variant, confSpecific As Boolean, refCompModels() As RefCompModel)
    
    If Not IsEmpty(vComps) Then
    
        Dim i As Integer
        
        For i = 0 To UBound(vComps)
            
            Dim swComp As SldWorks.Component2
            Set swComp = vComps(i)
            
            Dim swRefModel As SldWorks.ModelDoc2
            Set swRefModel = swComp.GetModelDoc2
            
            If Not swRefModel Is Nothing Then
            
                Dim refConfName As String
                
                refConfName = IIf(confSpecific, swComp.ReferencedConfiguration, "")
                
                If Not Contains(refCompModels, swRefModel, refConfName) Then
                
                    If (Not refCompModels) = -1 Then
                        ReDim refCompModels(0)
                    Else
                        ReDim Preserve refCompModels(UBound(refCompModels) + 1)
                    End If
                    
                    Set refCompModels(UBound(refCompModels)).RefModel = swRefModel
                    refCompModels(UBound(refCompModels)).RefConf = refConfName
                    
                End If
                
                ProcessComponents swComp.GetChildren(), confSpecific, refCompModels
                
            End If
            
        Next
    
    End If
    
End Sub

Function Contains(refCompModels() As RefCompModel, model As SldWorks.ModelDoc2, conf As String) As Boolean
    
    Contains = False
    
    If (Not refCompModels) <> -1 Then
        
        Dim i As Integer
        
        For i = 0 To UBound(refCompModels)
                
            If refCompModels(i).RefModel Is model And LCase(refCompModels(i).RefConf) = LCase(conf) Then
                Contains = True
                Exit Function
            End If
                
        Next
        
    End If
    
End Function
```

为了在每次重建时动态链接外部文本文件并更新属性，请使用以下宏。

将**UPDATE_ON_CSV_FILE_CHANGE_ONLY**常量的值设置为**True**或**False**以配置是否仅在属性文本文件更改时重新加载属性或始终重新加载属性。

``` vb
Const UPDATE_ON_CSV_FILE_CHANGE_ONLY As Boolean = False
```

插入宏特征时，宏将要求输入以下参数：

* 属性是否为配置特定或文件特定
* 更新时是否清除属性
* 是否将装配体的参考组件包括在属性范围内

属性将在宏特征重建时自动更新。

``` vb
Type RefCompModel
    RefModel As SldWorks.ModelDoc2
    RefConf As String
End Type

Const BASE_NAME As String = "LinkedCustomProperties"
Const EMBED As Boolean = False

Const UPDATE_ON_CSV_FILE_CHANGE_ONLY As Boolean = True

Const PARAM_CLEAR_PROPERTIES As String = "ClearProperties"
Const PARAM_PROCESS_COMPONENTS As String = "ProcessComponents"
Const PARAM_CSV_PATH As String = "CsvPath"
Const PARAM_CONF_SPEC_NAME As String = "ConfigurationSpecific"
Const PARAM_CSV_TIME_STAMP As String = "CsvFileTimeStamp"

Function GetParameters(app As SldWorks.SldWorks, model As SldWorks.ModelDoc2, ByRef csvFilePath As String, ByRef confSpecific As Boolean, ByRef clearPrps As Boolean, ByRef processComps As Boolean) As Boolean
    
    csvFilePath = app.GetOpenFileName("Custom Properties Template File", "", "CSV Files (*.csv)|*.csv|Text Files (*.txt)|*.txt|All Files (*.*)|*.*|", 0, "", "")
    
    If csvFilePath <> "" Then
        
        csvFilePath = GetRelativeFilePath(model, csvFilePath)
        
        confSpecific = app.SendMsgToUser2("Link to configuration specific properties (Yes) or File Specific (No)?", swMessageBoxIcon_e.swMbQuestion, swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitYes
        
        clearPrps = app.SendMsgToUser2("Clear existing properties?", swMessageBoxIcon_e.swMbQuestion, swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitYes
        
        If TypeOf model Is SldWorks.AssemblyDoc Then
            processComps = app.SendMsgToUser2("Process children components of the assembly?", swMessageBoxIcon_e.swMbQuestion, swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitYes
        Else
            processComps = False
        End If
        
        GetParameters = True
    Else
        GetParameters = False
    End If
    
End Function

Sub main()

    Dim swApp As SldWorks.SldWorks
    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
                
        Dim csvFilePath As String
        Dim confSpecific As Boolean
        Dim clearPrps As Boolean
        Dim processComps As Boolean
        
        If GetParameters(swApp, swModel, csvFilePath, confSpecific, clearPrps, processComps) Then
                
            Dim curMacroPath As String
            curMacroPath = swApp.GetCurrentMacroPathName
            Dim vMethods(8) As String
            Dim moduleName As String
            
            GetMacroEntryPoint swApp, curMacroPath, moduleName, ""
            
            vMethods(0) = curMacroPath: vMethods(1) = moduleName: vMethods(2) = "swmRebuild"
            vMethods(3) = curMacroPath: vMethods(4) = moduleName: vMethods(5) = "swmEditDefinition"
            vMethods(6) = curMacroPath: vMethods(7) = moduleName: vMethods(8) = "swmSecurity"
            
            Dim vParamNames(4) As String
            vParamNames(0) = PARAM_CSV_PATH
            vParamNames(1) = PARAM_CONF_SPEC_NAME
            vParamNames(2) = PARAM_CLEAR_PROPERTIES
            vParamNames(3) = PARAM_PROCESS_COMPONENTS
            vParamNames(4) = PARAM_CSV_TIME_STAMP
    
            Dim vParamTypes(4) As Long
            vParamTypes(0) = swMacroFeatureParamType_e.swMacroFeatureParamTypeString
            vParamTypes(1) = swMacroFeatureParamType_e.swMacroFeatureParamTypeInteger
            vParamTypes(2) = swMacroFeatureParamType_e.swMacroFeatureParamTypeInteger
            vParamTypes(3) = swMacroFeatureParamType_e.swMacroFeatureParamTypeInteger
            vParamTypes(4) = swMacroFeatureParamType_e.swMacroFeatureParamTypeString
            
            Dim vParamValues(4) As String
    
            vParamValues(0) = csvFilePath
            vParamValues(1) = CLng(confSpecific)
            vParamValues(2) = CLng(clearPrps)
            vParamValues(3) = CLng(processComps)
            vParamValues(4) = ""
            
            Dim opts As swMacroFeatureOptions_e
            opts = swMacroFeatureOptions_e.swMacroFeatureAlwaysAtEnd
            
            If EMBED Then
                opts = opts + swMacroFeatureOptions_e.swMacroFeatureEmbedMacroFile
            End If
            
            Dim swFeat As SldWorks.Feature
            Set swFeat = swModel.FeatureManager.InsertMacroFeature3(BASE_NAME, "", vMethods, _
                vParamNames, vParamTypes, vParamValues, Empty, Empty, Empty, _
                Empty, opts)
            
            If swFeat Is Nothing Then
                MsgBox "Failed to create linked properties feature"
            End If
            
        End If
        
    Else
        MsgBox "Please open model"
    End If
    
End Sub

Sub GetMacroEntryPoint(app As SldWorks.SldWorks, macroPath As String, ByRef moduleName As String, ByRef procName As String)
        
    Dim vMethods As Variant
    vMethods = app.GetMacroMethods(macroPath, swMacroMethods_e.swMethodsWithoutArguments)
    
    Dim i As Integer
    
    If Not IsEmpty(vMethods) Then
    
        For i = 0 To UBound(vMethods)
            Dim vData As Variant
            vData = Split(vMethods(i), ".")
            
            If i = 0 Or LCase(vData(1)) = "main" Then
                moduleName = vData(0)
                procName = vData(1)
            End If
        Next
        
    End If
    
End Sub

Function GetArrayFromCsv(filePath As String) As Variant
    
    Dim fileNo As Integer

    fileNo = FreeFile
    
    Dim rows As Collection
    Set rows = New Collection
    
    Open filePath For Input As #fileNo
    
    Do While Not EOF(fileNo)
        
        Dim tableRow As String
        
        Line Input #fileNo, tableRow
            
        Dim vCells As Variant
        vCells = Split(tableRow, ",")
        rows.Add vCells
    
    Loop
    
    Close #fileNo
    
    Dim tableData() As String

    Dim rowCount As Integer
    Dim columnCount As Integer
    rowCount = rows.Count
    columnCount = UBound(rows(1)) + 1
    
    Dim rowIndex As Integer
    Dim columnIndex As Integer
    
    ReDim tableData(rowCount - 1, columnCount - 1)
    
    For rowIndex = 1 To rowCount
        Dim vRow As Variant
        vRow = rows.Item(rowIndex)
        
        For columnIndex = 1 To columnCount
            Dim cellVal As String
            cellVal = vRow(columnIndex - 1)
            
            If Left(cellVal, 2) = """""" And Right(cellVal, 2) = """""" Then
                cellVal = Mid(cellVal, 3, Len(cellVal) - 4)
            End If
            
            tableData(rowIndex - 1, columnIndex - 1) = cellVal
        Next
    Next
    
    GetArrayFromCsv = tableData
    
End Function

Function GetRelativeFilePath(model As SldWorks.ModelDoc2, filePath As String) As String

    GetRelativeFilePath = filePath

    Dim modelDir As String
    modelDir = model.GetPathName
    
    If modelDir <> "" Then
        
        modelDir = Left(modelDir, InStrRev(modelDir, "\"))
        
        If Len(filePath) > Len(modelDir) Then
            If LCase(modelDir) = LCase(Left(filePath, Len(modelDir))) Then
                GetRelativeFilePath = Right(filePath, Len(filePath) - Len(modelDir) + 1)
            End If
        End If
        
    End If

End Function

Function swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant

try_:
    Dim swModel As SldWorks.ModelDoc2
    Dim swFeat As SldWorks.Feature
    
    Set swModel = varDoc
    Set swFeat = varFeat
    
    UpdateProperties swModel, swFeat
    
catch_:
    swmRebuild = Err.Description
finally_:
        
End Function

```

Sub UpdateProperties(model As SldWorks.ModelDoc2, feat As SldWorks.Feature)
        
    Dim swMacroFeat As SldWorks.MacroFeatureData
    Set swMacroFeat = feat.GetDefinition()
    
    Dim csvFilePath As String
    Dim confSpecific As Long
    Dim clearPrps As Long
    Dim processComps As Long
    Dim csvFileTimeStamp As String
    Dim curCsvFileTimeStamp As String
    
    swMacroFeat.GetIntegerByName PARAM_CONF_SPEC_NAME, confSpecific
    
    swMacroFeat.GetIntegerByName PARAM_CLEAR_PROPERTIES, clearPrps
    
    swMacroFeat.GetIntegerByName PARAM_PROCESS_COMPONENTS, processComps
    
    swMacroFeat.GetStringByName PARAM_CSV_TIME_STAMP, csvFileTimeStamp
    
    csvFilePath = GetCsvFileFullPath(swMacroFeat, model)
    
    curCsvFileTimeStamp = FileDateTime(csvFilePath)
    
    If Not UPDATE_ON_CSV_FILE_CHANGE_ONLY Or curCsvFileTimeStamp <> csvFileTimeStamp Then
        
        If Dir(csvFilePath) = "" Then
            Err.Raise "Linked CSV file is missing: " & csvFilePath
        End If
        
        Dim vTable As Variant
        vTable = GetArrayFromCsv(csvFilePath)
        
        If UBound(vTable, 2) <> 1 Then
            Err.Raise vbError, "", "CSV文件中必须只有2列"
        End If
        
        Dim swRefConf As SldWorks.Configuration
        Set swRefConf = swMacroFeat.CurrentConfiguration
        
        WritePropertiesFromTable model, vTable, IIf(CBool(confSpecific), swRefConf.Name, ""), CBool(clearPrps)
        
        If CBool(processComps) Then
        
            Dim refCompModels() As RefCompModel
            refCompModels = CollectUniqueComponents(swRefConf, CBool(confSpecific))
            
            If (Not refCompModels) <> -1 Then
                
                Dim i As Integer
                
                For i = 0 To UBound(refCompModels)
                    WritePropertiesFromTable refCompModels(i).RefModel, vTable, refCompModels(i).RefConf, CBool(clearPrps)
                Next
                
            End If
        
        End If
        
        swMacroFeat.SetStringByName PARAM_CSV_TIME_STAMP, curCsvFileTimeStamp
    
    End If
    
End Sub

Function CollectUniqueComponents(assmConf As SldWorks.Configuration, confSpecific As Boolean) As RefCompModel()
    
    Dim swRootComp As SldWorks.Component2
    Set swRootComp = assmConf.GetRootComponent3(False)
    
    Dim refCompModels() As RefCompModel
    
    ProcessComponents swRootComp.GetChildren(), confSpecific, refCompModels
    
    CollectUniqueComponents = refCompModels
    
End Function

Sub ProcessComponents(vComps As Variant, confSpecific As Boolean, refCompModels() As RefCompModel)
    
    If Not IsEmpty(vComps) Then
    
        Dim i As Integer
        
        For i = 0 To UBound(vComps)
            
            Dim swComp As SldWorks.Component2
            Set swComp = vComps(i)
            
            Dim swRefModel As SldWorks.ModelDoc2
            Set swRefModel = swComp.GetModelDoc2
            
            If Not swRefModel Is Nothing Then
            
                Dim refConfName As String
                
                refConfName = IIf(confSpecific, swComp.ReferencedConfiguration, "")
                
                If Not Contains(refCompModels, swRefModel, refConfName) Then
                
                    If (Not refCompModels) = -1 Then
                        ReDim refCompModels(0)
                    Else
                        ReDim Preserve refCompModels(UBound(refCompModels) + 1)
                    End If
                    
                    Set refCompModels(UBound(refCompModels)).RefModel = swRefModel
                    refCompModels(UBound(refCompModels)).RefConf = refConfName
                    
                End If
                
                ProcessComponents swComp.GetChildren(), confSpecific, refCompModels
                
            End If
            
        Next
    
    End If
    
End Sub

Function Contains(refCompModels() As RefCompModel, model As SldWorks.ModelDoc2, conf As String) As Boolean
    
    Contains = False
    
    If (Not refCompModels) <> -1 Then
        
        Dim i As Integer
        
        For i = 0 To UBound(refCompModels)
                
            If refCompModels(i).RefModel Is model And LCase(refCompModels(i).RefConf) = LCase(conf) Then
                Contains = True
                Exit Function
            End If
                
        Next
        
    End If
    
End Function

Function GetCsvFileFullPath(macroFeatDef As SldWorks.MacroFeatureData, model As SldWorks.ModelDoc2) As String
    
    Dim csvFilePath As String
    
    macroFeatDef.GetStringByName PARAM_CSV_PATH, csvFilePath
    
    If Left(csvFilePath, 1) = "\" And Mid(csvFilePath, 2, 1) <> "\" Then '如果是相对路径但不是UNC路径
        
        modelDir = model.GetPathName
    
        If modelDir <> "" Then
            modelDir = Left(modelDir, InStrRev(modelDir, "\") - 1)
            csvFilePath = modelDir & csvFilePath
        End If
        
    End If
    
    GetCsvFileFullPath = csvFilePath
    
End Function

Sub WritePropertiesFromTable(model As SldWorks.ModelDoc2, table As Variant, confName As String, clearPrps As Boolean)
    
    Dim i As Integer
    
    Dim swCustPrpMgr As SldWorks.CustomPropertyManager
    
    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)
    
    If clearPrps Then
        ClearProperties swCustPrpMgr
    End If
    
    For i = 0 To UBound(table, 1)
                
        Dim prpName As String
        prpName = CStr(table(i, 0))
        
        Dim prpVal As String
        prpVal = CStr(table(i, 1))
        
        If swCustPrpMgr.Add3(prpName, swCustomInfoType_e.swCustomInfoText, prpVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue) <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then
            Err.Raise vbError, "", "添加属性'" & prpName & "'失败"
        End If
        
    Next
    
End Sub

Sub ClearProperties(custPrpMgr As SldWorks.CustomPropertyManager)
    
    Dim vPrpNames As Variant
    vPrpNames = custPrpMgr.GetNames
        
    If Not IsEmpty(vPrpNames) Then
        
        Dim i As Integer
        
        For i = 0 To UBound(vPrpNames)
            custPrpMgr.Delete2 CStr(vPrpNames(i))
        Next
    
    End If
    
End Sub

Function swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant

    Dim swApp As SldWorks.SldWorks
    Set swApp = varApp

    Dim swModel As SldWorks.ModelDoc2
    Set swModel = varDoc

    Dim csvFilePath As String
    Dim confSpecific As Boolean
    Dim clearPrps As Boolean
    Dim processComps As Boolean
        
    If GetParameters(swApp, swModel, csvFilePath, confSpecific, clearPrps, processComps) Then
        
        Dim swFeat As SldWorks.Feature
        
        Set swFeat = varFeat
        
        Dim swMacroFeat As SldWorks.MacroFeatureData
        Set swMacroFeat = swFeat.GetDefinition()
        
        swMacroFeat.AccessSelections swModel, Nothing
        
        swMacroFeat.SetStringByName PARAM_CSV_PATH, csvFilePath
        swMacroFeat.SetIntegerByName PARAM_CONF_SPEC_NAME, CLng(confSpecific)
        swMacroFeat.SetIntegerByName PARAM_CLEAR_PROPERTIES, CLng(clearPrps)
        swMacroFeat.SetIntegerByName PARAM_PROCESS_COMPONENTS, CLng(processComps)

        swFeat.ModifyDefinition swMacroFeat, swModel, Nothing
        
    End If
    
    swmEditDefinition = True
    
End Function

Function swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant
    swmSecurity = SwConst.swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityByDefault
End Function
~~~