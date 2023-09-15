---
layout: sw-tool
title:  Run VBA macro on model load using macro feature and SOLIDWORKS API
caption: Automatically Run Macro On Model Load
---
 Macro feature to run VBA code on model loading using SOLIDWORKS API
image: load-watcher-macro-feature.png
labels: [macro feature,load event,auto run]
group: Model
---
{% youtube { id: BTM5NZNdON8 } %}

This VBA macro inserts the macro feature into the model using SOLIDWORKS API and allows to run custom code every time the model with this feature is loaded.

This can be useful when certain code needs to be run on every model load (e.g. update custom properties, log information, etc.)

Feature is visible in the tree and can be embedded into the document template if required.

![Macro feature inserted into the feature manager tree](load-watcher-macro-feature.png){ width=250 }

## Configuration

* Create new macro
* Copy the code into corresponding modules of the macro
* To configure the macro modify the options defined in the constants:

    * EMBED_MACRO_FEATURE - true to embed this macro directly into the document. With this option model can be shared and will work on each computer (macro doesn't meed to be shared). Refer the [Macro Based Macro Feature](/docs/codestack/solidworks-api/document/macro-feature/#macro-based-macro-feature) section for benefits and limitation of this approach.
    * BASE_NAME - default naming convention for the feature

~~~ vb
Const EMBED_MACRO_FEATURE As Boolean = True
Const BASE_NAME As String = "MyFeatureName"
~~~

* Place your code into the *main* sub of the *HandlerModule* module. The pointer to [IModelDoc2](https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html) document is passed as the parameter. Use this pointer instead of [ISldWorks::ActiveDoc](https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~activedoc.html) SOLIDWORKS API property as this method is called for invisible documents (i.e. loaded as assembly or drawing components).

~~~ vb
Sub main(model As SldWorks.ModelDoc2)
    'TODO: add your routine here
End Sub
~~~

## Macro Module

Main macro routine to insert feature and define event handles

~~~ vb
Const EMBED_MACRO_FEATURE As Boolean = False
Const BASE_NAME As String = "ModelLoadWatcher"

Dim HandledModels As Collection

Sub main()

    Dim swApp As SldWorks.SldWorks
    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim curMacroPath As String
        curMacroPath = swApp.GetCurrentMacroPathName
        
        Dim vMethods(8) As String
        Dim moduleName As String
        
        GetMacroEntryPoint swApp, curMacroPath, moduleName, ""
        
        vMethods(0) = curMacroPath: vMethods(1) = moduleName: vMethods(2) = "swmRebuild"
        vMethods(3) = curMacroPath: vMethods(4) = moduleName: vMethods(5) = "swmEditDefinition"
        vMethods(6) = curMacroPath: vMethods(7) = moduleName: vMethods(8) = "swmSecurity"
        
        Dim opts As swMacroFeatureOptions_e
        
        If EMBED_MACRO_FEATURE Then
            opts = swMacroFeatureOptions_e.swMacroFeatureEmbedMacroFile
        Else
            opts = swMacroFeatureOptions_e.swMacroFeatureByDefault
        End If
        
        Dim swFeat As SldWorks.Feature
        Set swFeat = swModel.FeatureManager.InsertMacroFeature3(BASE_NAME, "", vMethods, _
            Empty, Empty, Empty, Empty, Empty, Empty, _
            Empty, opts)
        
        If swFeat Is Nothing Then
            MsgBox "Failed to create model load watcher"
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

Function swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant
    swmRebuild = True
End Function

Function swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant
    swmEditDefinition = True
End Function

Function swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant

    Dim swFeat As SldWorks.Feature
    Set swFeat = varFeat
    
    If HandledModels Is Nothing Then
        Set HandledModels = New Collection
    End If

    Dim swModel As SldWorks.ModelDoc2
    Set swModel = varDoc
        
    If Not CollectionContains(HandledModels, swModel) Then
        
        HandledModels.Add swModel
        Dim swApp As SldWorks.SldWorks
        Set swApp = varApp
        ClearCache swApp
        
        OnModelLoad swModel
        
    End If

    swmSecurity = SwConst.swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityByDefault

End Function

Sub ClearCache(app As SldWorks.SldWorks)
    
    If Not HandledModels Is Nothing Then
    
        Dim vDocs As Variant
        vDocs = app.GetDocuments
        
        If Not IsEmpty(vDocs) Then
            
            Dim i As Integer
            
            For i = HandledModels.Count To 1 Step -1
            
                Dim swModel As SldWorks.ModelDoc2
                Set swModel = HandledModels(i)
                
                If Not ArrayContains(vDocs, swModel) Then
                    HandledModels.Remove i
                End If
                
            Next
            
        End If
        
    End If
    
End Sub

Function CollectionContains(coll As Collection, model As SldWorks.ModelDoc2) As Boolean

    Dim i As Integer

    For i = 1 To coll.Count()
        If coll(i) Is model Then
            CollectionContains = True
            Exit Function
        End If
    Next

    CollectionContains = False

End Function

Function ArrayContains(arr As Variant, model As SldWorks.ModelDoc2) As Boolean

    Dim i As Integer

    If Not IsEmpty(arr) Then
        For i = 0 To UBound(arr)
            Dim thisModel As SldWorks.ModelDoc2
            Set thisModel = arr(i)
            If thisModel Is model Then
                ArrayContains = True
                Exit Function
            End If
        Next
    End If
    
    ArrayContains = False

End Function

Sub OnModelLoad(model As SldWorks.ModelDoc2)
    HandlerModule.main model
End Sub
~~~



## HandlerModule Module

Module to insert required code to be run every time model loads. Must be named *HandlerModule*

~~~ vb
Sub main(model As SldWorks.ModelDoc2)
    'TODO: add your routine here
    MsgBox model.GetTitle()
End Sub
~~~


