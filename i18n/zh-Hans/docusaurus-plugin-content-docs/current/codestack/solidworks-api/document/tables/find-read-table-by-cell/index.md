---
caption: Find And Read Table By Cell
title: Find and read the table in the SOLIDWORKS drawing by the value of the cell
description: VBA macro to find the table in the SOLIDWORKS drawing by the value in the specified cell and reading its data into the variable
image: general-table.png
---
This VBA macro finds the table by the specified value pattern in the specified cell.

![General table in the drawing](general-table.png){ width=500 }

The data of the table is read into the string variable **tableData** and output into the [VBA Immediate Window](/docs/codestack/visual-basic/vba/vba-editor/windows#immediate-window)

Cells are separated by the value of the **DELIMETER** constant.

It is possible to use the matching pattern to match the value of the cell (e.g. **\*ABC\*** will match text containing **ABC**)

Text comparison is case insensitive

Indices of the row and column to search are 0-based (e.g. first cell in the first column will have an index **0, 0**)

Provide the value of the search pattern and the target cell position in the call to **FindTableByContent** function

~~~ vb jagged
Set swTableAnnotation = FindTableByContent(swDraw, "*ABC*", 0, 0)
~~~

![Table data output in the Immediate Window](immediate-window-output.png)

~~~ vb
Option Compare Text

Const DELIMETER As String = ","

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swDraw As SldWorks.DrawingDoc
    
    Set swDraw = swApp.ActiveDoc
    
    If Not swDraw Is Nothing Then
        
        Dim tableData As String
        
        Dim swTableAnnotation As SldWorks.TableAnnotation
        Set swTableAnnotation = FindTableByContent(swDraw, "a", 0, 0)
                
        Dim i As Integer
        Dim j As Integer
        
        For i = 0 To swTableAnnotation.RowCount - 1
            
            If i > 0 Then
                tableData = tableData & vbLf
            End If
            
            For j = 0 To swTableAnnotation.ColumnCount - 1
                If j > 0 Then
                    tableData = tableData & DELIMETER
                End If
                tableData = tableData & swTableAnnotation.Text(i, j)
            Next
            
        Next
        
        Debug.Print tableData
        
    Else
        Err.Raise "Open drawing"
    End If
    
End Sub

Function FindTableByContent(draw As SldWorks.DrawingDoc, searchCellVal As String, cellRow As Integer, cellColumn As Integer) As SldWorks.TableAnnotation
    
    Dim vSheets As Variant
    
    vSheets = draw.GetViews()
    
    Dim i As Integer
    
    For i = 0 To UBound(vSheets)
        
        Dim vViews As Variant
        vViews = vSheets(i)
        
        Dim swSheetView As SldWorks.View
        Set swSheetView = vViews(0)
        
        Dim vTableAnns As Variant
        vTableAnns = swSheetView.GetTableAnnotations
        
        If Not IsEmpty(vTableAnns) Then
            
            Dim j As Integer
            
            For j = 0 To UBound(vTableAnns)
                
                Dim swTableAnn As SldWorks.TableAnnotation
                Set swTableAnn = vTableAnns(j)
                
                Dim cellVal As String
                cellVal = swTableAnn.Text(cellRow, cellColumn)
                
                If cellVal Like searchCellVal Then
                    Set FindTableByContent = swTableAnn
                    Exit Function
                End If
                
            Next
            
        End If
        
    Next
    
    Err.Raise vbError, "", "Failed to find the table annotation"
    
End Function
~~~

