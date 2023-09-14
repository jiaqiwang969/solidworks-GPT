Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swPart As SldWorks.PartDoc
    
    Set swPart = swApp.ActiveDoc
    
    If Not swPart Is Nothing Then
                
        Dim vBBox As Variant
        
        vBBox = swPart.GetPartBox(True)
         
        DrawBox swPart, CDbl(vBBox(0)), CDbl(vBBox(1)), CDbl(vBBox(2)), CDbl(vBBox(3)), CDbl(vBBox(4)), CDbl(vBBox(5))
        
        Debug.Print "Width: " & vBBox(3) - vBBox(0)
        Debug.Print "Length: " & vBBox(5) - vBBox(2)
        Debug.Print "Height: " & vBBox(4) - vBBox(1)
        
    Else
        
        MsgBox "Please open part"
        
    End If
    
End Sub

Sub DrawBox(model As SldWorks.ModelDoc2, minX As Double, minY As Double, minZ As Double, maxX As Double, maxY As Double, maxZ As Double)

    model.ClearSelection2 True
            
    model.SketchManager.Insert3DSketch True
    model.SketchManager.AddToDB = True
    
    model.SketchManager.CreateLine maxX, minY, minZ, maxX, minY, maxZ
    model.SketchManager.CreateLine maxX, minY, maxZ, minX, minY, maxZ
    model.SketchManager.CreateLine minX, minY, maxZ, minX, minY, minZ
    model.SketchManager.CreateLine minX, minY, minZ, maxX, minY, minZ

    model.SketchManager.CreateLine maxX, maxY, minZ, maxX, maxY, maxZ
    model.SketchManager.CreateLine maxX, maxY, maxZ, minX, maxY, maxZ
    model.SketchManager.CreateLine minX, maxY, maxZ, minX, maxY, minZ
    model.SketchManager.CreateLine minX, maxY, minZ, maxX, maxY, minZ
    
    model.SketchManager.CreateLine minX, minY, minZ, minX, maxY, minZ
    model.SketchManager.CreateLine minX, minY, maxZ, minX, maxY, maxZ
    
    model.SketchManager.CreateLine maxX, minY, minZ, maxX, maxY, minZ
    model.SketchManager.CreateLine maxX, minY, maxZ, maxX, maxY, maxZ
    
    model.SketchManager.AddToDB = False
    model.SketchManager.Insert3DSketch True
    
End Sub

