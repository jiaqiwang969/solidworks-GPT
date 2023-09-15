---
title:  使用SOLIDWORKS API将表格内容读入数组
caption: 将表格内容读入数组
---
 该示例演示了如何使用SOLIDWORKS API将所选表格（物料清单、常规表格、切割清单表格等）的内容读入二维数组中。
labels: [数组, 物料清单, 读取, solidworks api, 表格]
redirect-from:
  - /2018/03/solidworks-api-model-read-table-content-into-array.html
---

该示例演示了如何使用SOLIDWORKS API将所选表格（物料清单、常规表格、切割清单表格等）的内容读入二维数组中。

[SOLIDWORKS API接口ITableAnnotation](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITableAnnotation.html)提供了对所有表格类型的数据访问。

```vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swSelMgr As SldWorks.SelectionMgr
Dim swTableAnnotation As SldWorks.TableAnnotation

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then

        Set swSelMgr = swModel.SelectionManager
        
        Dim tableData() As String
        
        Set swTableAnnotation = swSelMgr.GetSelectedObject6(1, -1)
        
        If Not swTableAnnotation Is Nothing Then
            
            ReDim tableData(swTableAnnotation.RowCount - 1, swTableAnnotation.ColumnCount - 1)
            
            Dim i As Integer
            Dim j As Integer
            
            For i = 0 To swTableAnnotation.RowCount - 1
                
                For j = 0 To swTableAnnotation.ColumnCount - 1
                    tableData(i, j) = swTableAnnotation.Text(i, j)
                Next
                
            Next
        Else
            MsgBox "请选中表格"
        End If
    Else
        MsgBox "请打开模型"
    End If
End Sub
```
