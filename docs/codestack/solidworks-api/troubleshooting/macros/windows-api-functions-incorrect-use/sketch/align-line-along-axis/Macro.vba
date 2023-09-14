Enum AlignmentDir_e
    AlongX = 1
    AlongY = 2
    AlongZ = 3
End Enum

Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swSketch As SldWorks.Sketch
Dim swSketchRelMgr As SldWorks.SketchRelationManager

Sub main()

    On Error Resume Next
    
    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Set swSketch = swModel.SketchManager.ActiveSketch
        
        If Not swSketch Is Nothing Then
            
            Dim dir As AlignmentDir_e
            dir = InputBox("Specify the type of alignment for sketch lines: 1 - Along X, 2 - Along Y, 3 - Along Z")
            
            Set swSketchRelMgr = swSketch.RelationManager
            
            Dim vSegs As Variant
                        
            vSegs = swSketch.GetSketchSegments
         
            Dim swSkLines() As SldWorks.SketchSegment
            Dim isSkLinesArrInit As Boolean
            isSkLinesArrInit = False
            
            For i = 0 To UBound(vSegs)
                
                Dim swSkSeg As SldWorks.SketchSegment
                Set swSkSeg = vSegs(i)
                
                If swSkSeg.GetType() = swSketchSegments_e.swSketchLINE Then
                    
                    If Not isSkLinesArrInit Then
                        isSkLinesArrInit = True
                        ReDim swSkLines(0)
                    Else
                        ReDim Preserve swSkLines(UBound(swSkLines) + 1)
                    End If
                    
                    Set swSkLines(UBound(swSkLines)) = swSkSeg
                    
                End If
                
            Next
            
            Dim constType As swConstraintType_e
                
            Select Case dir
                Case AlignmentDir_e.AlongX
                    If swSketch.Is3D() Then
                        constType = swConstraintType_e.swConstraintType_ALONGX3D
                    Else
                        constType = swConstraintType_e.swConstraintType_HORIZONTAL
                    End If
                Case AlignmentDir_e.AlongY
                    If swSketch.Is3D Then
                        constType = swConstraintType_e.swConstraintType_ALONGY3D
                    Else
                        constType = swConstraintType_e.swConstraintType_VERTICAL
                    End If
                Case AlignmentDir_e.AlongZ
                    If swSketch.Is3D Then
                        constType = swConstraintType_e.swConstraintType_ALONGZ
                    Else
                        MsgBox "Invalid. Z is not a valid orientation for 2D Sketch"
                        End
                    End If
            End Select
            
            swSketchRelMgr.AddRelation swSkLines, constType
        
        Else
            MsgBox "Please open the sketch"
        End If
    
    Else
        MsgBox "Please open document"
    End If
    
End Sub
