Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim swView As SldWorks.view
        Set swView = swModel.SelectionManager.GetSelectedObjectsDrawingView2(1, -1)
        
        If Not swView Is Nothing Then
            
            Dim vComps As Variant
            vComps = GetAllVisibleComponents(swView)
            
            If Not IsEmpty(vComps) Then
                
                Dim i As Integer
                Dim swComp As SldWorks.Component2
                
                For i = 0 To UBound(vComps)
                    Set swComp = vComps(i)
                    Debug.Print swComp.Name2
                Next
            End If
            
        Else
            MsgBox "Please select drawing view"
        End If
    Else
        MsgBox "Please open model"
    End If
    
End Sub

Function GetAllVisibleComponents(view As SldWorks.view) As Variant
        
    Dim swRootModel As SldWorks.ModelDoc2
    Set swRootModel = view.RootDrawingComponent.Component.GetModelDoc2
    
    Dim vComps As Variant
    vComps = view.GetVisibleComponents()
            
    Dim swAllComps() As SldWorks.Component2
    Dim isInit As Boolean
    
    Dim i As Integer
    
    For i = 0 To UBound(vComps)
        
        Dim swComp As SldWorks.Component2
        Set swComp = vComps(i)
        
        Dim swCorrComp As SldWorks.Component2
        Set swCorrComp = GetCorrespondingComponent(swRootModel, swComp)
            
        While Not swCorrComp Is Nothing
                                    
            Dim add As Boolean
            add = False

            If Not isInit Then
                ReDim swAllComps(0)
                isInit = True
                add = True
            Else
                If Not Contains(swAllComps, swCorrComp) Then
                    ReDim Preserve swAllComps(UBound(swAllComps) + 1)
                    add = True
                End If
            End If

            If add Then
                Set swAllComps(UBound(swAllComps)) = swCorrComp
            End If
            
            Set swCorrComp = swCorrComp.GetParent

        Wend
        
    Next
    
    GetAllVisibleComponents = swAllComps
    
End Function

Function GetCorrespondingComponent(assy As SldWorks.AssemblyDoc, swDrawComp As SldWorks.Component2) As SldWorks.Component2
        
    Dim name As String
    name = swDrawComp.Name2
    
    Dim vNameParts As Variant
    vNameParts = Split(name, "/")
    
    Dim swComp As SldWorks.Component2
    
    Dim swCompFeat As SldWorks.Feature
    
    Dim i As Integer
    i = 0
    
    While swCompFeat Is Nothing
        Set swCompFeat = assy.FeatureByName(vNameParts(i))
        i = i + 1
    Wend
    
    Set swComp = swCompFeat.GetSpecificFeature2
    
    For i = i To UBound(vNameParts)
                
        Set swCompFeat = swComp.FeatureByName(vNameParts(i))
        
        If swCompFeat Is Nothing Then
            Set GetComponentByName = Nothing
            Exit Function
        End If
        
        Set swComp = swCompFeat.GetSpecificFeature2
        
    Next
    
    Set GetCorrespondingComponent = swComp
    
End Function

Function Contains(vArr As Variant, item As Object) As Boolean
    
    Dim i As Integer
    
    For i = 0 To UBound(vArr)
        If vArr(i) Is item Then
            Contains = True
            Exit Function
        End If
    Next
    
    Contains = False
    
End Function