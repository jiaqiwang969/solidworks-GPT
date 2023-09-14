Dim swApp As SldWorks.SldWorks
Dim swDraw As SldWorks.DrawingDoc
Dim swSheet As SldWorks.Sheet

Sub main()

    Set swApp = Application.SldWorks

    Set swDraw = swApp.ActiveDoc
    
    If Not swDraw Is Nothing Then
    
        Set swSheet = swDraw.GetCurrentSheet
        
        Dim swRevTable As SldWorks.RevisionTableAnnotation

        Set swRevTable = swSheet.RevisionTable
        
        If Not swRevTable Is Nothing Then
            
            ClearRevisionTable swRevTable
            
            AddRevision swRevTable, "001", Array("Sample Zone", "", "Description", "", "Admin")
            
        Else
            MsgBox "There is no revision table in the drawing"
        End If
    
    Else
        MsgBox "Plase open the drawing"
    End If
    
End Sub

Sub ClearRevisionTable(swRevTable As SldWorks.RevisionTableAnnotation)
    
    Dim swTableAnn As SldWorks.TableAnnotation
    
    Set swTableAnn = swRevTable
            
    Dim i As Integer
    
    For i = swTableAnn.RowCount - 1 To 0 Step -1
        
        Dim revId As Long
        revId = swRevTable.GetIdForRowNumber(i)
        
        If revId <> 0 Then
            swRevTable.DeleteRevision revId, True
        End If
        
    Next
    
End Sub

Sub AddRevision(swRevTable As SldWorks.RevisionTableAnnotation, revName As String, rowData As Variant)
    
    Dim i As Integer
    Dim swTableAnn As SldWorks.TableAnnotation
    
    Set swTableAnn = swRevTable
    
    swRevTable.AddRevision revName
            
    For i = 0 To UBound(rowData)
                
        If rowData(i) <> "" Then
            
            swTableAnn.Text(swTableAnn.RowCount - 1, i) = rowData(i)
        
        End If
                
    Next
    
End Sub
