Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks

    Dim swAssy As SldWorks.AssemblyDoc
    
    Set swAssy = swApp.ActiveDoc
    
    If Not swAssy Is Nothing Then
        
        Dim swComp As SldWorks.Component2
        
        swAssy.InsertNewVirtualPart Nothing, swComp
        
        swComp.Select4 False, Nothing, False
        
        swAssy.EditPart
        
        Debug.Assert swComp.GetModelDoc2() Is swAssy.GetEditTarget() 'current editing model equals to the component's model
        Debug.Assert Not swComp.GetModelDoc2() Is swAssy 'component's model doesn't equal to the assembly model
        
        Dim swRefPlaneFeat As SldWorks.Feature
        Set swRefPlaneFeat = FindStandardPlane(swComp)
        
        Dim swSketchFeat As SldWorks.Feature
        
        'Creating circle in the context of the current editing model via the main assembly model
        Set swSketchFeat = CreateCircle(swRefPlaneFeat, swAssy)
        
        'Creating extrude in the context of the current editing model via the main assembly model
        CreateExtrude swSketchFeat, swAssy
        
        swAssy.EditAssembly
        swAssy.EditRebuild
        
    Else
        MsgBox "Please open assembly"
    End If

End Sub

Function FindStandardPlane(comp As SldWorks.Component2) As SldWorks.Feature
    
    Dim swCompModel As SldWorks.ModelDoc2
    Set swCompModel = comp.GetModelDoc2
    
    Dim i As Integer
    i = 1
    Dim swRefPlaneFeat As SldWorks.Feature
    
    Do
        Set swRefPlaneFeat = swCompModel.FeatureByPositionReverse(i)
        i = i + 1
    Loop While swRefPlaneFeat.GetTypeName2() <> "RefPlane"
    
    'converting the pointer of the feature into the assembly context so it can be selected in the assembly
    Set FindStandardPlane = comp.GetCorresponding(swRefPlaneFeat)
    
End Function

Function CreateCircle(plane As SldWorks.Feature, model As SldWorks.ModelDoc2) As SldWorks.Feature
    
    plane.Select2 False, -1
    
    model.SketchManager.InsertSketch True
    model.SketchManager.AddToDB = True
    
    Set CreateCircle = model.SketchManager.ActiveSketch
    
    model.ClearSelection2 True
    model.SketchManager.CreateCircleByRadius 0, 0, 0, 0.01
    model.SketchManager.AddToDB = False
    
    model.ClearSelection2 True
    model.SketchManager.InsertSketch True
    
End Function

Sub CreateExtrude(sketch As SldWorks.Feature, model As SldWorks.ModelDoc2)
    
    sketch.Select2 False, 0
    
    model.FeatureManager.FeatureExtrusion2 True, False, False, 0, 0, 0.01, 0.01, False, False, False, False, 0, 0, False, False, False, False, True, True, True, 0, 0, False
    model.ClearSelection2 True
    
End Sub