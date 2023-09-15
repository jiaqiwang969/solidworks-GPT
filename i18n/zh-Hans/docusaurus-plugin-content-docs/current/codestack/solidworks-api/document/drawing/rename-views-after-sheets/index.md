---
caption: 重命名图纸视图
title: 宏以图纸名称重命名所有图纸视图
description: VBA宏可将活动SOLIDWORKS图纸文档中的所有图纸视图重命名为所在图纸的名称后跟索引。
---

此VBA宏允许将活动SOLIDWORKS图纸文档中所有图纸视图重命名为图纸名称后跟索引。

详细和剖视图将被排除在重命名过程之外。

``` vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        If swModel.GetType() = swDocumentTypes_e.swDocDRAWING Then
            
            Dim swDraw As SldWorks.DrawingDoc
            
            Set swDraw = swModel
            
            Dim vSheets As Variant
            vSheets = swDraw.GetViews
            
            Dim i As Integer
            
            For i = 0 To UBound(vSheets)
                
                Dim vViews As Variant
                vViews = vSheets(i)
                
                Dim swSheetView As SldWorks.View
                
                Set swSheetView = vViews(0)
                
                Dim j As Integer
                
                Dim nextViewIndex As Integer
                nextViewIndex = 0
                
                For j = 1 To UBound(vViews)
                    
                    Dim swView As SldWorks.View
                    Set swView = vViews(j)
                    
                    Dim viewType As Integer
                    viewType = swView.Type
                    
                    If viewType <> swDrawingViewTypes_e.swDrawingDetailView And viewType <> swDrawingViewTypes_e.swDrawingSectionView Then
                        
                        nextViewIndex = nextViewIndex + 1
                        
                        Dim newViewName As String
                        newViewName = swSheetView.Name & "(" & nextViewIndex & ")"
                        
                        If False = swView.SetName2(newViewName) Then
                            Err.Raise vbError, "", "Failed to rename " & swView.Name & " to " & ""
                        End If
                    End If
                    
                Next
                
            Next
            
        Else
            Err.Raise vbError, "", "Active document is not a drawing"
        End If
    Else
        Err.Raise vbError, "", "Please open the drawing"
    End If
    
End Sub
```

