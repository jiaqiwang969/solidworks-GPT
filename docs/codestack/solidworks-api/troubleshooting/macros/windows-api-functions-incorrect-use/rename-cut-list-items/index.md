---
layout: sw-tool
title: Rename cut list features based on custom properties using SOLIDWORKS API
caption: Rename Cut List Features
description: VBA macro to rename cut list features (sheet metal and weldment) based on custom properties using SOLIDWORKS API
image: cut-list-table.svg
labels: [cut-list,sheet metal,weldment,rename]
group: Cut-List
---
![Sheet metal cut list features](sheet-metal-cut-list.png){ width=250 }

This VBA macro allows to rename all cut list features for weldment and sheet metal part based on the name template which can include values of file and cut-list custom properties, file name, configuration name and free text.

![Cut list properties](cut-list-properties.png){ width=550 }

To configure the macro modify the values of *NAME_TEMPLATE*, *INDEX_FORMAT* and *ALWAYS_ADD_INDEX* constants

*NAME_TEMPLATE* can contain free text and placeholders which will be dynamically replaced by corresponding custom properties values

The following placeholders are supported

* <\_FileName\_> - name of the part file (without extension) where the cut-list resides in
* <\_ConfName\_> - name of the active configuration of the part file
* <$CLPRP:[PropertyName]> - any name of the cut-list property to read value from, e.g.  is replaced with the value of cut-list custom property Thickness
* <$PRP:[PropertyName]> - any name of the custom property of part to read value from, e.g.  is replaced with the value of cut-list custom property PartNo

Placeholders will be resolved for each cut-list at runtime.

*INDEX_FORMAT* constant allows to specify the padding of the index for feature name if name is used. By default feature names resolved to the same value will have an index for second feature and so on, unless *ALWAYS_ADD_INDEX* constant is set to true. In this case first feature will have index as well.

For example the following setup (in case part PartNo equals to ABC) will resolve cut-list feature to *ABC_001*, *ABC_002*, *ABC_003* etc.

~~~ vb
Const NAME_TEMPLATE = "<$PRP:PartNo>_"
Const INDEX_FORMAT As String = "000"
Const ALWAYS_ADD_INDEX As Boolean = True
~~~

Watch [video demonstration](https://youtu.be/jsjN8zNRTuc?t=200)

~~~ vb
Const NAME_TEMPLATE = "<_FileName_>_<$CLPRP:Description>_<$PRP:PartNo>"
Const INDEX_FORMAT As String = "0"
Const ALWAYS_ADD_INDEX As Boolean = False

Dim swApp As SldWorks.SldWorks

Sub main()

try_:
    On Error GoTo catch_
        
    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim vCutLists As Variant
        vCutLists = GetCutLists(swModel)
        
        Dim i As Integer
        
        For i = 0 To UBound(vCutLists)
            
            Dim swCutListFeat As SldWorks.Feature
            Set swCutListFeat = vCutLists(i)
            
            Dim featBaseName As String
            
            featBaseName = ComposeFeatureName(NAME_TEMPLATE, swModel, swCutListFeat)
            
            Dim featName As String
            featName = ResolveFeatureName(swModel, featBaseName)
            
            If featName <> "" Then
                If swCutListFeat.Name <> featName Then
                    swCutListFeat.Name = featName
                End If
            Else
                Debug.Print "Empty name for " & swCutListFeat.Name
            End If
        Next
        
    Else
        MsgBox "Please open the document"
    End If
    
    GoTo finally_

catch_:
    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk
finally_:

End Sub

Function ResolveFeatureName(model As ModelDoc2, baseName As String) As String
    
    Dim featName As String
    
    If baseName <> "" Then
                
        Dim index As Integer
        
        If ALWAYS_ADD_INDEX Then
            index = 1
            featName = baseName + Format$(index, INDEX_FORMAT)
        Else
            index = 0
            featName = baseName
        End If
        
        While model.FeatureManager.IsNameUsed(swNameType_e.swFeatureName, featName)
            index = index + 1
            featName = baseName + Format$(index, INDEX_FORMAT)
        Wend
        
    Else
        featName = ""
    End If
    
    ResolveFeatureName = featName
    
End Function

Function GetCutLists(model As SldWorks.ModelDoc2) As Variant
    
    GetCutLists = GetFeaturesByType(model, "CutListFolder")

End Function

Function GetFeaturesByType(model As SldWorks.ModelDoc2, typeName As String) As Variant
    
    Dim swFeats() As SldWorks.Feature
    
    Dim swFeat As SldWorks.Feature
    
    Set swFeat = model.FirstFeature
    
    Do While Not swFeat Is Nothing
        
        ProcessFeature swFeat, swFeats, typeName

        Set swFeat = swFeat.GetNextFeature
        
    Loop
    
    If (Not swFeats) = -1 Then
        GetFeaturesByType = Empty
    Else
        GetFeaturesByType = swFeats
    End If
    
End Function

Sub ProcessFeature(thisFeat As SldWorks.Feature, featsArr() As SldWorks.Feature, typeName As String)
    
    If thisFeat.GetTypeName2() = typeName Then
    
        If (Not featsArr) = -1 Then
            ReDim featsArr(0)
            Set featsArr(0) = thisFeat
        Else
            Dim i As Integer
            
            For i = 0 To UBound(featsArr)
                If swApp.IsSame(featsArr(i), thisFeat) = swObjectEquality.swObjectSame Then
                    Exit Sub
                End If
            Next
            
            ReDim Preserve featsArr(UBound(featsArr) + 1)
            Set featsArr(UBound(featsArr)) = thisFeat
        End If
    
    End If
    
    Dim swSubFeat As SldWorks.Feature
    Set swSubFeat = thisFeat.GetFirstSubFeature
        
    While Not swSubFeat Is Nothing
        ProcessFeature swSubFeat, featsArr, typeName
        Set swSubFeat = swSubFeat.GetNextSubFeature
    Wend
        
End Sub

Function ComposeFeatureName(template As String, model As SldWorks.ModelDoc2, cutListFeat As SldWorks.Feature) As String

    Dim regEx As Object
    Set regEx = CreateObject("VBScript.RegExp")
    
    regEx.Global = True
    regEx.IgnoreCase = True
    regEx.Pattern = "<[^>]*>"
    
    Dim regExMatches As Object
    Set regExMatches = regEx.Execute(template)
    
    Dim i As Integer
    
    Dim outFeatName As String
    outFeatName = template
    
    For i = regExMatches.Count - 1 To 0 Step -1
        
        Dim regExMatch As Object
        Set regExMatch = regExMatches.Item(i)
                    
        Dim tokenName As String
        tokenName = Mid(regExMatch.Value, 2, Len(regExMatch.Value) - 2)
        
        outFeatName = Left(outFeatName, regExMatch.FirstIndex) & ResolveToken(tokenName, model, cutListFeat) & Right(outFeatName, Len(outFeatName) - (regExMatch.FirstIndex + regExMatch.Length))
    Next
    
    ComposeFeatureName = outFeatName
    
End Function

Function ResolveToken(token As String, model As SldWorks.ModelDoc2, cutListFeat As SldWorks.Feature) As String
    
    Const FILE_NAME_TOKEN As String = "_FileName_"
    Const CONF_NAME_TOKEN As String = "_ConfName_"
    
    Const PRP_TOKEN As String = "$PRP:"
    Const CUT_LIST_PRP_TOKEN As String = "$CLPRP:"
    
    Select Case LCase(token)
        Case LCase(FILE_NAME_TOKEN)
            ResolveToken = GetFileNameWithoutExtension(model.GetPathName)
        Case LCase(CONF_NAME_TOKEN)
            ResolveToken = model.ConfigurationManager.ActiveConfiguration.Name
        Case Else
            
            Dim prpName As String
                        
            If Left(token, Len(PRP_TOKEN)) = PRP_TOKEN Then
                prpName = Right(token, Len(token) - Len(PRP_TOKEN))
                ResolveToken = GetModelPropertyValue(model, model.ConfigurationManager.ActiveConfiguration.Name, prpName)
            ElseIf Left(token, Len(CUT_LIST_PRP_TOKEN)) = CUT_LIST_PRP_TOKEN Then
                prpName = Right(token, Len(token) - Len(CUT_LIST_PRP_TOKEN))
                ResolveToken = GetPropertyValue(cutListFeat.CustomPropertyManager, prpName)
            Else
                Err.Raise vbError, "", "Unrecognized token: " & token
            End If
            
    End Select
    
End Function

Function GetModelPropertyValue(model As SldWorks.ModelDoc2, confName As String, prpName As String) As String
    
    Dim prpVal As String
    Dim swCustPrpMgr As SldWorks.CustomPropertyManager
    
    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)
    prpVal = GetPropertyValue(swCustPrpMgr, prpName)
    
    If prpVal = "" Then
        Set swCustPrpMgr = model.Extension.CustomPropertyManager("")
        prpVal = GetPropertyValue(swCustPrpMgr, prpName)
    End If
    
    GetModelPropertyValue = prpVal
    
End Function

Function GetPropertyValue(custPrpMgr As SldWorks.CustomPropertyManager, prpName As String) As String
    Dim resVal As String
    custPrpMgr.Get2 prpName, "", resVal
    GetPropertyValue = resVal
End Function

Function GetFileNameWithoutExtension(path As String) As String
    GetFileNameWithoutExtension = Mid(path, InStrRev(path, "\") + 1, InStrRev(path, ".") - InStrRev(path, "\") - 1)
End Function
~~~


