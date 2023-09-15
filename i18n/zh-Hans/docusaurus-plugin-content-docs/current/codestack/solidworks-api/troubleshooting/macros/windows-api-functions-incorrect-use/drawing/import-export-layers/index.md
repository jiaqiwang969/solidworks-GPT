---
layout: sw-tool
caption: 导入/导出图层
title: 将SOLIDWORKS图纸中的所有图层导入和导出到文本文件的宏
description: VBA宏将SOLIDWORKS图纸中的图层信息（描述、颜色、样式、厚度、可见性和打印设置）导入和导出到文本文件中
image: import-export-drawing-layers.svg
group: 绘图
---
![SOLIDWORKS图纸中的图层](sw-layers.png){ width=600 }

这些宏允许将SOLIDWORKS图纸中的图层信息导入和导出到文本文件中。

导入和导出的信息包括：

* 名称
* 描述
* 可见性
* 是否打印
* 颜色
* 样式
* 厚度

## 格式

此宏将所有信息导出到输出文本文件中，格式如下：

~~~
图层: 实体
    描述: 包含实体的图层
    颜色: 0 128 255
    可打印: True
    样式: 0
    可见: True
    厚度: 5

图层: 品牌
    描述: 用于品牌图像的图层
    颜色: 0 128 128
    可打印: True
    样式: 0
    可见: True
    厚度: 0
~~~

默认情况下，文件将保存或加载到与原始文件相同的文件夹中，并带有前缀**_Layers.txt**

## CAD+

此宏与[Toolbar+](https://cadplus.xarial.com/toolbar/)和[Batch+](https://cadplus.xarial.com/batch/)工具兼容，因此可以将按钮添加到工具栏并分配快捷键以便更轻松地访问或批量运行。

要启用[宏参数](https://cadplus.xarial.com/toolbar/configuration/arguments/)，请将**ARGS**常量设置为true

~~~ vb
#Const ARGS = True
~~~

将文本文件的路径作为宏参数导入或导出。

## 导出

~~~ vb
#Const ARGS = False 'True to use arguments from Toolbar+ or Batch+ instead of the constant

Const TOKEN_LAYER = "图层: "
Const TOKEN_DESCRIPTION = "描述: "
Const TOKEN_COLOR = "颜色: "
Const TOKEN_PRINTABLE = "可打印: "
Const TOKEN_STYLE = "样式: "
Const TOKEN_VISIBLE = "可见: "
Const TOKEN_THICKNESS = "厚度: "

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swDraw As SldWorks.DrawingDoc
    
    Set swDraw = swApp.ActiveDoc
    
    Dim filePath As String
    
    #If ARGS Then
                
        Dim macroRunner As Object
        Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")
        
        Dim param As Object
        Set param = macroRunner.PopParameter(swApp)
        
        Dim vArgs As Variant
        vArgs = param.Get("Args")
        
        filePath = CStr(vArgs(0))
        
    #Else
        filePath = swDraw.GetPathName
        If filePath <> "" Then
            filePath = Left(filePath, InStrRev(filePath, ".") - 1) & "_Layers.txt"
        Else
            Err.Raise vbError, "", "如果未指定输出文件路径，则必须保存文件"
        End If
    #End If
    
    If Not swDraw Is Nothing Then
        ExportLayers swDraw, filePath
    Else
        Err.Raise vbError, "", "打开图纸"
    End If
    
End Sub

Sub ExportLayers(draw As SldWorks.DrawingDoc, filePath As String)
    
    Dim swLayerMgr As SldWorks.LayerMgr
    
    Set swLayerMgr = draw.GetLayerManager
    
    Dim vLayers As Variant
    vLayers = swLayerMgr.GetLayerList

    Dim fileNmb As Integer
    fileNmb = FreeFile
    
    Open filePath For Output As #fileNmb
        
    Dim i As Integer
    
    For i = 0 To UBound(vLayers)
        
        Dim layerName As String
        layerName = CStr(vLayers(i))
        
        Dim swLayer As SldWorks.Layer
        Set swLayer = swLayerMgr.GetLayer(layerName)
        
        Dim RGBHex As String
        RGBHex = Right("000000" & Hex(swLayer.Color), 6)
        
        Print #fileNmb, TOKEN_LAYER & swLayer.Name
        Print #fileNmb, "    " & TOKEN_DESCRIPTION & swLayer.Description
        Print #fileNmb, "    " & TOKEN_COLOR & CInt("&H" & Mid(RGBHex, 5, 2)) & " " & CInt("&H" & Mid(RGBHex, 3, 2)) & " " & CInt("&H" & Mid(RGBHex, 1, 2))
        Print #fileNmb, "    " & TOKEN_PRINTABLE & swLayer.Printable
        Print #fileNmb, "    " & TOKEN_STYLE & swLayer.Style
        Print #fileNmb, "    " & TOKEN_VISIBLE & swLayer.Visible
        Print #fileNmb, "    " & TOKEN_THICKNESS & swLayer.Width
        Print #fileNmb, ""
        
    Next
        
    Close #fileNmb
    
End Sub
~~~



## 导入

~~~ vb
#Const ARGS = False 'True to use arguments from Toolbar+ or Batch+ instead of the constant

Const TOKEN_LAYER = "图层: "
Const TOKEN_DESCRIPTION = "描述: "
Const TOKEN_COLOR = "颜色: "
Const TOKEN_PRINTABLE = "可打印: "
Const TOKEN_STYLE = "样式: "
Const TOKEN_VISIBLE = "可见: "
Const TOKEN_THICKNESS = "厚度: "

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swDraw As SldWorks.DrawingDoc
    
    Set swDraw = swApp.ActiveDoc
    
    Dim filePath As String
    
    #If ARGS Then
                
        Dim macroRunner As Object
        Set macroRunner = CreateObject("CadPlus.MacroRunner.Sw")
        
        Dim param As Object
        Set param = macroRunner.PopParameter(swApp)
        
        Dim vArgs As Variant
        vArgs = param.Get("Args")
        
        filePath = CStr(vArgs(0))
        
    #Else
        filePath = swDraw.GetPathName
        If filePath <> "" Then
            filePath = Left(filePath, InStrRev(filePath, ".") - 1) & "_Layers.txt"
        Else
            Err.Raise vbError, "", "如果未指定输出文件路径，则必须保存文件"
        End If
    #End If
    
    If Not swDraw Is Nothing Then
        ImportLayers swDraw, filePath
    Else
        Err.Raise vbError, "", "打开图纸"
    End If
    
End Sub

Sub ImportLayers(draw As SldWorks.DrawingDoc, filePath As String)
    
    Dim swLayerMgr As SldWorks.LayerMgr
    
    Set swLayerMgr = draw.GetLayerManager
    
    Set fso = CreateObject("Scripting.FileSystemObject")
    
    If fso.FileExists(filePath) Then
        
        Dim swCurrentLayer As SldWorks.Layer
        
        Set file = fso.OpenTextFile(filePath)
                
        Do Until file.AtEndOfStream
                
            Dim line As String
                
            line = file.ReadLine
            
            Dim value As String
            
            If IsToken(line, TOKEN_LAYER, value) Then
                
                Set swCurrentLayer = swLayerMgr.GetLayer(value)
                
                If swCurrentLayer Is Nothing Then
                    swLayerMgr.AddLayer value, "", RGB(255, 255, 255), swLineStyles_e.swLineCENTER, swLineWeights_e.swLW_CUSTOM
                    Set swCurrentLayer = swLayerMgr.GetLayer(value)
                End If
                
                If swCurrentLayer Is Nothing Then
                    Err.Raise vbError, "", "无法访问图层 " & value
                End If
                
            Else
                
                If swCurrentLayer Is Nothing Then
                    Err.Raise vbError, "", "未设置当前图层"
                End If
                
                If IsToken(line, TOKEN_DESCRIPTION, value) Then
                    swCurrentLayer.Description = value
                ElseIf IsToken(line, TOKEN_COLOR, value) Then
                    Dim vRgb As Variant
                    vRgb = Split(value, " ")
                    swCurrentLayer.Color = RGB(CInt(Trim(CStr(vRgb(0)))), CInt(Trim(CStr(vRgb(1)))), CInt(Trim(CStr(vRgb(2)))))
                ElseIf IsToken(line, TOKEN_PRINTABLE, value) Then
                    swCurrentLayer.Printable = CBool(value)
                ElseIf IsToken(line, TOKEN_STYLE, value) Then
                    swCurrentLayer.Style = CInt(value)
                ElseIf IsToken(line, TOKEN_VISIBLE, value) Then
                    swCurrentLayer.Visible = CBool(value)
                ElseIf IsToken(line, TOKEN_THICKNESS, value) Then
                    swCurrentLayer.Width = CInt(value)
                End If
                
            End If
            
        Loop
        
        file.Close
        
    Else
        Err.Raise vbError, "", "文件不存在"
    End If
    
End Sub

Function IsToken(txt As String, token As String, ByRef value As String) As Boolean
    
    txt = Trim(txt)
    
    If LCase(Left(txt, Len(token))) = LCase(token) Then
        value = Trim(Right(txt, Len(txt) - Len(token)))
        IsToken = True
    Else
        value = ""
        IsToken = False
    End If
    
End Function
~~~