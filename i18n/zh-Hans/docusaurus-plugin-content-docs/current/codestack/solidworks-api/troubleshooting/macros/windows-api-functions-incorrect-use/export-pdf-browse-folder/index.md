---
caption: 将绘图导出为PDF文件并保存到选定的文件夹中
title:  宏，将活动绘图保存为PDF文件并关闭绘图
---
 这个VBA宏对活动的SOLIDWORKS绘图执行以下步骤：

* 显示“浏览文件夹”对话框以选择PDF文件的输出文件夹
* 将活动绘图保存为PDF文件并保存到前一步选择的文件夹中。PDF文件的文件名与绘图的文件名相同
* 如果原始绘图已被修改，宏将保存更改
* 关闭活动的SOLIDWORKS绘图文档

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swDraw As SldWorks.ModelDoc2
    
    Set swDraw = swApp.ActiveDoc
    
    If swDraw Is Nothing Then
        Err.Raise vbError, "", "打开绘图"
    End If
    
    If swDraw.GetType() = swDocumentTypes_e.swDocDRAWING Then
    
        Dim outFolder As String
        outFolder = BrowseForFolder()
        
        If Right(outFolder, 1) = "\" Then
            outFolder = Left(outFolder, Len(outFolder) - 1)
        End If
        
        If outFolder <> "" Then
        
            Dim outFileName As String
            outFileName = GetFileNameWithoutExtension(swDraw.GetPathName()) & ".pdf"
            
            Dim outFilePath As String
            outFilePath = outFolder & "\" & outFileName
            
            Dim errs As Long
            Dim warns As Long
            
            If False = swDraw.Extension.SaveAs(outFilePath, swSaveAsVersion_e.swSaveAsCurrentVersion, swSaveAsOptions_e.swSaveAsOptions_Silent, Nothing, errs, warns) Then
                Err.Raise vbError, "", "导出PDF到" & outFile & "失败"
            End If
            
            If False <> swDraw.GetSaveFlag() Then
                If False = swDraw.Save3(swSaveAsOptions_e.swSaveAsOptions_Silent, errs, warns) Then
                    Err.Raise vbError, "", "保存绘图失败"
                End If
            End If
        
            swApp.CloseDoc swDraw.GetTitle
            
        End If
    Else
        Err.Raise vbError, "", "活动文档不是绘图"
    End If
    
End Sub

Function GetFileNameWithoutExtension(filePath As String) As String
    GetFileNameWithoutExtension = Mid(filePath, InStrRev(filePath, "\") + 1, InStrRev(filePath, ".") - InStrRev(filePath, "\") - 1)
End Function

Function BrowseForFolder(Optional title As String = "选择文件夹") As String
    
    Dim shellApp As Object
    
    Set shellApp = CreateObject("Shell.Application")
    
    Dim folder As Object
    Set folder = shellApp.BrowseForFolder(0, title, 0)
    
    If Not folder Is Nothing Then
        BrowseForFolder = folder.Self.Path
    End If
    
End Function
~~~