---
layout: sw-tool
caption: Automatic Date Custom Property
title: Creating a Dynamic Automatically Updating Date Custom Property in a SOLIDWORKS File
description: This VBA macro allows you to insert a custom property **Date** into a specific custom property in the file. Users can choose the format of the date. Refer to the [Date and Time Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings) for more information on the supported formats.

## CAD+

This macro is compatible with [Toolbar+](https://cadplus.xarial.com/toolbar/) and [Batch+](https://cadplus.xarial.com/batch/) tools, so you can add buttons to the toolbar and assign shortcuts for easier access or batch running.

To enable [macro parameters](https://cadplus.xarial.com/toolbar/configuration/arguments/), set the **ARGS** constant to true and pass the format as a parameter.

~~~ vb
#Const ARGS = True
~~~

~~~ vb
#Const ARGS = False 'True to use arguments from Toolbar+ or Batch+ instead of the constant

Const DATE_PRP_NAME As String = "Date"

Sub main()

    Dim swApp As SldWorks.SldWorks
    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = swApp.ActiveDoc
        
try_:
    On Error GoTo catch_
    
    If Not swModel Is Nothing Then
        
        Dim dateFormat As String
        
        #If ARGS Then
                
            Dim macroRunner As Object
            Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")
            
            Dim param As Object
            Set param = macroRunner.PopParameter(swApp)
            
            Dim vArgs As Variant
            vArgs = param.Get("Args")
            
            dateFormat = CStr(vArgs(0))
        
        #Else
            dateFormat = GetDateFormat()
        #End If
    
        If dateFormat <> "" Then
            SetDateCustomProperty swModel, dateFormat
        End If
    Else
        Err.Raise vbError, "", "Please open a model"
    End If
    
    GoTo finally_
catch_:
    MsgBox Err.Description, vbCritical
finally_:

End Sub

Function GetDateFormat(Optional defaultDateFormat As String = "dd/mm/yyyy") As String
    GetDateFormat = InputBox("Specify the format for the date custom property", "Date Custom Property", defaultDateFormat)
End Function

Sub SetDateCustomProperty(model As SldWorks.ModelDoc2, dateFormat As String)
    
    Dim dateVal As String
    dateVal = Format(Now, dateFormat)
    
    Dim swCustPrpMgr As SldWorks.CustomPropertyManager
    
    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)
    
    If swCustPrpMgr.Add3(DATE_PRP_NAME, swCustomInfoType_e.swCustomInfoText, dateVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue) <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then
        Err.Raise vbError, "", "Failed to add the date property"
    End If
    
End Sub
~~~

This macro can also be embedded in a model to automatically update the date every time it is rebuilt.

~~~ vb
Const BASE_NAME As String = "AutoDateCustomProperty"
Const EMBED As Boolean = False

Const DATE_PRP_NAME As String = "Date"

Const PARAM_DATE_FORMAT As String = "DateFormat"

Sub main()

    Dim swApp As SldWorks.SldWorks
    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
                
        Dim dateFormat As String
        dateFormat = GetDateFormat()
        
        If dateFormat <> "" Then
                
            Dim curMacroPath As String
            curMacroPath = swApp.GetCurrentMacroPathName
            Dim vMethods(8) As String
            Dim moduleName As String
            
            GetMacroEntryPoint swApp, curMacroPath, moduleName, ""
            
            vMethods(0) = curMacroPath: vMethods(1) = moduleName: vMethods(2) = "swmRebuild"
            vMethods(3) = curMacroPath: vMethods(4) = moduleName: vMethods(5) = "swmEditDefinition"
            vMethods(6) = curMacroPath: vMethods(7) = moduleName: vMethods(8) = "swmSecurity"
            
            Dim vParamNames(0) As String
            vParamNames(0) = PARAM_DATE_FORMAT
    
            Dim vParamTypes(0) As Long
            vParamTypes(0) = swMacroFeatureParamType_e.swMacroFeatureParamTypeString
    
            Dim vParamValues(0) As String
    
            vParamValues(0) = dateFormat
            
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
                MsgBox "Failed to create the auto date feature"
            End If
            
        End If
        
    Else
        MsgBox "Please open a model"
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

Function GetDateFormat(Optional defaultDateFormat As String = "dd/mm/yyyy") As String
    GetDateFormat = InputBox("Specify the format for the date custom property", "Date Custom Property", defaultDateFormat)
End Function

Function swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant

    Dim swApp As SldWorks.SldWorks
    Dim swModel As SldWorks.ModelDoc2
    Dim swFeat As SldWorks.Feature
    
    Set swApp = varApp
    Set swModel = varDoc
    Set swFeat = varFeat
    
    Dim swMacroFeat As SldWorks.MacroFeatureData
    Set swMacroFeat = swFeat.GetDefinition()
    
    Dim dateFormat As String
    
    swMacroFeat.GetStringByName PARAM_DATE_FORMAT, dateFormat
        
try_:
    On Error GoTo catch_
    
    SetDateCustomProperty swModel, dateFormat
    
    GoTo finally_
catch_:
    swmRebuild = Err.Description
finally_:
        
End Function

Sub SetDateCustomProperty(model As SldWorks.ModelDoc2, dateFormat As String)
    
    Dim dateVal As String
    dateVal = Format(Now, dateFormat)
    
    Dim swCustPrpMgr As SldWorks.CustomPropertyManager
    
    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)
    
    If swCustPrpMgr.Add3(DATE_PRP_NAME, swCustomInfoType_e.swCustomInfoText, dateVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue) <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then
        Err.Raise vbError, "", "Failed to add the date property"
    End If
    
End Sub

Function swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant

    Dim swApp As SldWorks.SldWorks
    Set swApp = varApp

    Dim swModel As SldWorks.ModelDoc2
    Dim swFeat As SldWorks.Feature
    
    Set swModel = varDoc
    Set swFeat = varFeat
    
    Dim swMacroFeat As SldWorks.MacroFeatureData
    Set swMacroFeat = swFeat.GetDefinition()
        
    Dim dateFormat As String
    swMacroFeat.GetStringByName PARAM_DATE_FORMAT, dateFormat

    dateFormat = GetDateFormat(dateFormat)
        
    If dateFormat <> "" Then
        
        swMacroFeat.AccessSelections swModel, Nothing
        swMacroFeat.SetStringByName PARAM_DATE_FORMAT, dateFormat
        
        swFeat.ModifyDefinition swMacroFeat, swModel, Nothing
        
    End If
    
    swmEditDefinition = True
    
End Function

Function swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant
    swmSecurity = SwConst.swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityByDefault
End Function
~~~