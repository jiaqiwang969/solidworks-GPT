    Dim modelPath As String
    modelPath = model.GetPathName()
    
    If modelPath <> "" Then
        Dim modelFolder As String
        modelFolder = Left(modelPath, InStrRev(modelPath, "\"))
        
        If Left(filePath, Len(modelFolder)) = modelFolder Then
            GetRelativeFilePath = Right(filePath, Len(filePath) - Len(modelFolder))
        End If
    End If
    
End Function

Sub swmRebuild(swApp As SldWorks.SldWorks, swModel As SldWorks.ModelDoc2, swFeat As SldWorks.Feature)
    
    Dim csvFilePath As String
    csvFilePath = swFeat.GetParameter(PARAM_CSV_PATH)
    
    Dim confSpecific As Boolean
    confSpecific = CBool(swFeat.GetParameter(PARAM_CONF_SPEC_NAME))
    
    Dim clearPrps As Boolean
    clearPrps = CBool(swFeat.GetParameter(PARAM_CLEAR_PROPERTIES))
    
    Dim processComps As Boolean
    processComps = CBool(swFeat.GetParameter(PARAM_PROCESS_COMPONENTS))
    
    Dim csvTimeStamp As String
    csvTimeStamp = swFeat.GetParameter(PARAM_CSV_TIME_STAMP)
    
    Dim csvFileTimeStamp As String
    csvFileTimeStamp = GetFileTimeStamp(csvFilePath)
    
    If csvTimeStamp <> csvFileTimeStamp Or Not UPDATE_ON_CSV_FILE_CHANGE_ONLY Then
        
        Dim vTable As Variant
        vTable = GetArrayFromCsv(csvFilePath)
        
        Dim swRefConf As SldWorks.Configuration
        Set swRefConf = swModel.ConfigurationManager.ActiveConfiguration
        
        WritePropertiesFromTable swModel, vTable, IIf(CBool(confSpecific), swRefConf.Name, ""), clearPrps
    
        If processComps Then
        
            Dim refCompModels() As RefCompModel
            refCompModels = CollectUniqueComponents(swRefConf, confSpecific)
            
            If (Not refCompModels) <> -1 Then
                
                Dim i As Integer
                
                For i = 0 To UBound(refCompModels)
                    WritePropertiesFromTable refCompModels(i).RefModel, vTable, refCompModels(i).RefConf, CBool(clearPrps)
                Next
                
            End If
        
        End If
        
        swFeat.SetParameter PARAM_CSV_TIME_STAMP, csvFileTimeStamp
        
    End If
    
End Sub

Sub swmEditDefinition(swApp As SldWorks.SldWorks, swModel As SldWorks.ModelDoc2, swFeat As SldWorks.Feature)
    
    Dim csvFilePath As String
    csvFilePath = swFeat.GetParameter(PARAM_CSV_PATH)
    
    Dim confSpecific As Boolean
    confSpecific = CBool(swFeat.GetParameter(PARAM_CONF_SPEC_NAME))
    
    Dim clearPrps As Boolean
    clearPrps = CBool(swFeat.GetParameter(PARAM_CLEAR_PROPERTIES))
    
    Dim processComps As Boolean
    processComps = CBool(swFeat.GetParameter(PARAM_PROCESS_COMPONENTS))
    
    Dim csvTimeStamp As String
    csvTimeStamp = swFeat.GetParameter(PARAM_CSV_TIME_STAMP)
    
    Dim csvFileTimeStamp As String
    csvFileTimeStamp = GetFileTimeStamp(csvFilePath)
    
    If csvTimeStamp <> csvFileTimeStamp Or Not UPDATE_ON_CSV_FILE_CHANGE_ONLY Then
        
        Dim vTable As Variant
        vTable = GetArrayFromCsv(csvFilePath)
        
        Dim swRefConf As SldWorks.Configuration
        Set swRefConf = swModel.ConfigurationManager.ActiveConfiguration
        
        WritePropertiesFromTable swModel, vTable, IIf(CBool(confSpecific), swRefConf.Name, ""), clearPrps
    
        If processComps Then
        
            Dim refCompModels() As RefCompModel
            refCompModels = CollectUniqueComponents(swRefConf, confSpecific)
            
            If (Not refCompModels) <> -1 Then
                
                Dim i As Integer
                
                For i = 0 To UBound(refCompModels)
                    WritePropertiesFromTable refCompModels(i).RefModel, vTable, refCompModels(i).RefConf, CBool(clearPrps)
                Next
                
            End If
        
        End If
        
        swFeat.SetParameter PARAM_CSV_TIME_STAMP, csvFileTimeStamp
        
    End If
    
End Sub

Sub swmSecurity(swApp As SldWorks.SldWorks, swModel As SldWorks.ModelDoc2, swFeat As SldWorks.Feature)
    
    Dim csvFilePath As String
    csvFilePath = swFeat.GetParameter(PARAM_CSV_PATH)
    
    Dim confSpecific As Boolean
    confSpecific = CBool(swFeat.GetParameter(PARAM_CONF_SPEC_NAME))
    
    Dim clearPrps As Boolean
    clearPrps = CBool(swFeat.GetParameter(PARAM_CLEAR_PROPERTIES))
    
    Dim processComps As Boolean
    processComps = CBool(swFeat.GetParameter(PARAM_PROCESS_COMPONENTS))
    
    Dim csvTimeStamp As String
    csvTimeStamp = swFeat.GetParameter(PARAM_CSV_TIME_STAMP)
    
    Dim csvFileTimeStamp As String
    csvFileTimeStamp = GetFileTimeStamp(csvFilePath)
    
    If csvTimeStamp <> csvFileTimeStamp Or Not UPDATE_ON_CSV_FILE_CHANGE_ONLY Then
        
        Dim vTable As Variant
        vTable = GetArrayFromCsv(csvFilePath)
        
        Dim swRefConf As SldWorks.Configuration
        Set swRefConf = swModel.ConfigurationManager.ActiveConfiguration
        
        WritePropertiesFromTable swModel, vTable, IIf(CBool(confSpecific), swRefConf.Name, ""), clearPrps
    
        If processComps Then
        
            Dim refCompModels() As RefCompModel
            refCompModels = CollectUniqueComponents(swRefConf, confSpecific)
            
            If (Not refCompModels) <> -1 Then
                
                Dim i As Integer
                
                For i = 0 To UBound(refCompModels)
                    WritePropertiesFromTable refCompModels(i).RefModel, vTable, refCompModels(i).RefConf, CBool(clearPrps)
                Next
                
            End If
        
        End If
        
        swFeat.SetParameter PARAM_CSV_TIME_STAMP, csvFileTimeStamp
        
    End If
    
End Sub

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
            Err.Raise vbError, "", "Failed to add property '" & prpName & "'"
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

Function GetFileTimeStamp(filePath As String) As String
    
    Dim fso As Object
    Set fso = CreateObject("Scripting.FileSystemObject")
    
    Dim file As Object
    Set file = fso.GetFile(filePath)
    
    GetFileTimeStamp = CStr(file.DateLastModified)
    
End Function

```vba
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



```vba
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
            Err.Raise vbError, "", "There must be only 2 columns in the CSV file"
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
    
    If Left(csvFilePath, 1) = "\" And Mid(csvFilePath, 2, 1) <> "\" Then 'if relative but not UNC
        
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
            Err.Raise vbError, "", "Failed to add property '" & prpName & "'"
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
```