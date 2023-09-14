---
layout: sw-tool
title: 将SOLIDWORKS文件中的选定草图导出为DXF/DWG文件的宏
caption: 导出草图为DXF/DWG
description: VBA宏，将SOLIDWORKS零件或装配文件中的选定2D草图导出为DXF或DWG文件
image: dxf-sketch.svg
labels: [草图,导出,DXF,DWG]
group: 导入/导出
---
![从草图创建的DXF/DWG文件](sketch-dwf-dwg.png){ width=350 }

这个VBA宏将SOLIDWORKS零件或装配中的选定2D草图导出为DXF或DWG文件。

## 选项

通过修改*EXPORT_NAME_TEMPLATE*常量来配置输出文件的名称，如下所示，使用自由文本和占位符。

* \[title\]占位符将被替换为原始零件或装配文件的标题（不包括扩展名）
* \[sketch\]占位符将被替换为从中创建的草图DXF\DWG文件的名称

在文件模板中指定扩展名（.dxf或.dwg）

文件将保存在与原始零件或装配文档相同的目录中。

~~~ vb
Const EXPORT_NAME_TEMPLATE As String = "ExportFile_[title]_[sketch].dxf"
~~~

~~~ vb
Dim swApp As SldWorks.SldWorks

Const EXPORT_NAME_TEMPLATE As String = "[title]_[sketch].dxf"

Sub main()

    Set swApp = Application.SldWorks
    
try:
    On Error GoTo catch
    
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = swApp.ActiveDoc
    
    Dim swSelMgr As SldWorks.SelectionMgr
    Set swSelMgr = swModel.SelectionManager
    
    Dim swSketchFeat As SldWorks.Feature
    Set swSketchFeat = swSelMgr.GetSelectedObject6(1, -1)
    
    If swSketchFeat.GetTypeName2() = "ProfileFeature" Then
        
        swSketchFeat.Select2 False, -1
        swModel.EditCopy
        
        Dim drawTemplate As String
        drawTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplateDrawing)
        
        If drawTemplate = "" Then
            Err.Raise vbError, "", "无法找到默认模板"
        End If
        
        Dim swDraw As SldWorks.ModelDoc2
        Set swDraw = swApp.NewDocument(drawTemplate, swDwgPaperSizes_e.swDwgPapersUserDefined, 0.1, 0.1)
        swDraw.Paste
        
        Dim errs As Long
        Dim warns As Long
        Dim exportFilePath As String
        exportFilePath = GetExportFilePath(swModel, swSketchFeat)
        
        If False = swDraw.Extension.SaveAs(exportFilePath, swSaveAsVersion_e.swSaveAsCurrentVersion, swSaveAsOptions_e.swSaveAsOptions_Silent, Nothing, errs, warns) Then
            Err.Raise vbError, "", "导出DXF、DWG失败"
        End If
        
        swApp.CloseDoc swDraw.GetTitle
        
    Else
        Err.Raise vbError, "", "请选择要导出的2D草图"
    End If
    
    GoTo finally
catch:
    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk
finally:
    
End Sub

Function GetExportFilePath(model As SldWorks.ModelDoc2, sketch As SldWorks.Feature) As String

    Const PLACEHOLDER_TITLE As String = "[title]"
    Const PLACEHOLDER_SKETCH As String = "[sketch]"
    
    Dim path As String
    Dim dir As String
    Dim title As String
    
    path = model.GetPathName
    
    If path = "" Then
        Err.Raise vbError, "", "原始模型从未保存"
    End If
    
    title = Mid(path, InStrRev(path, "\") + 1, InStrRev(path, ".") - InStrRev(path, "\") - 1)
    dir = Left(path, InStrRev(path, "\"))
    
    Dim newTitle As String
    Dim newPath As String
    
    newTitle = Replace(EXPORT_NAME_TEMPLATE, PLACEHOLDER_TITLE, title)
    newTitle = Replace(newTitle, PLACEHOLDER_SKETCH, sketch.Name)
    newPath = dir & newTitle
            
    GetExportFilePath = newPath
    
End Function
~~~