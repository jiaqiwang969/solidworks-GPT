Const ENT_NAME As String = "Hole"

Dim swApp As SldWorks.SldWorks
Dim swDraw As SldWorks.DrawingDoc

Sub main()

    Set swApp = Application.SldWorks
    
    Set swDraw = swApp.ActiveDoc
    
    Dim swView1 As SldWorks.view
    Dim swView2 As SldWorks.view
    Dim swView3 As SldWorks.view
    
    Set swView1 = swDraw.FeatureByName("Drawing View1").GetSpecificFeature()
    Set swView2 = swDraw.FeatureByName("Drawing View2").GetSpecificFeature()
    Set swView3 = swDraw.FeatureByName("Drawing View3").GetSpecificFeature()
    
    Dim swRefDoc As SldWorks.PartDoc
    Set swRefDoc = swView1.ReferencedDocument
    
    Dim swEdge As SldWorks.Edge
    Set swEdge = swRefDoc.GetEntityByName(ENT_NAME, swSelectType_e.swSelEDGES)
    
    swDraw.ClearSelection2 True
    
    SelectInView swView1, swEdge
    SelectInViewBySelData swView2, swEdge
    SelectFromVisibleEntities swView3
    
End Sub

Sub SelectInView(view As SldWorks.view, ent As SldWorks.Entity)
    view.SelectEntity ent, True
End Sub

Sub SelectInViewBySelData(view As SldWorks.view, ent As SldWorks.Entity)
    
    Dim swSelMgr As SldWorks.SelectionMgr
    Dim swSelData As SldWorks.SelectData
    
    Set swSelMgr = swDraw.SelectionManager
    
    Set swSelData = swSelMgr.CreateSelectData
    swSelData.view = view 'specify the view to select entity in
    
    ent.Select4 True, swSelData
    
End Sub

Sub SelectFromVisibleEntities(view As SldWorks.view)
    
    Dim vVisComps As Variant
    vVisComps = view.GetVisibleComponents()
    
    Dim vVisEnts As Variant
    vVisEnts = view.GetVisibleEntities2(vVisComps(0), swViewEntityType_e.swViewEntityType_Edge)
    
    Dim i As Integer
    
    For i = 0 To UBound(vVisEnts)
        Dim swEdge As SldWorks.Entity
        Set swEdge = vVisEnts(i)
        If swEdge.ModelName = ENT_NAME Then
            swEdge.Select4 True, Nothing 'no need to explicitly specify the view to select in as pointer to the entity already belongs to the view
            Exit Sub
        End If
    Next
    
End Sub