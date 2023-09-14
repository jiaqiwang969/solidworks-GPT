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