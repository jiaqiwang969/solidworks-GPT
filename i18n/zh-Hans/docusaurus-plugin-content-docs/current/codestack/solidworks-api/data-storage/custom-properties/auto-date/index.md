---
layout: sw-tool
caption: 自动日期自定义属性
title: 在SOLIDWORKS文件中创建一个动态自动更新的日期自定义属性
description: 这个VBA宏允许将自定义属性**日期**插入到文件特定的自定义属性中。用户可以选择日期的格式。请参考[日期和时间格式字符串](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)以获取更多关于支持的格式的信息。

## CAD+

这个宏与[Toolbar+](https://cadplus.xarial.com/toolbar/)和[Batch+](https://cadplus.xarial.com/batch/)工具兼容，因此可以将按钮添加到工具栏并分配快捷键以便更方便地访问或批量运行。

要启用[宏参数](https://cadplus.xarial.com/toolbar/configuration/arguments/)，将**ARGS**常量设置为true，并将格式作为参数传递

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
        Err.Raise vbError, "", "Please open model"
    End If
    
    GoTo finally_
catch_:
    MsgBox Err.Description, vbCritical
finally_:

End Sub

Function GetDateFormat(Optional defaultDateFormat As String = "dd/mm/yyyy") As String
    GetDateFormat = InputBox("Specify the format for the Date custom property", "Date Custom Property", defaultDateFormat)
End Function

Sub SetDateCustomProperty(model As SldWorks.ModelDoc2, dateFormat As String)
    
    Dim dateVal As String
    dateVal = Format(Now, dateFormat)
    
    Dim swCustPrpMgr As SldWorks.CustomPropertyManager
    
    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)
    
    If swCustPrpMgr.Add3(DATE_PRP_NAME, swCustomInfoType_e.swCustomInfoText, dateVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue) <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then
        Err.Raise vbError, "", "Failed to add date property"
    End If
    
End Sub
~~~



这个宏也可以嵌入到模型中，以便在每次重建时自动更新日期。

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
                MsgBox "Failed to create auto date feature"
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

Function GetDateFormat(Optional defaultDateFormat As String = "dd/mm/yyyy") As String
    GetDateFormat = InputBox("Specify the format for the Date custom property", "Date Custom Property", defaultDateFormat)
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
        Err.Raise vbError, "", "Failed to add date property"
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