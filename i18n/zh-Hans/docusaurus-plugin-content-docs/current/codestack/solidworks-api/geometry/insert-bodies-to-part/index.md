---
layout: sw-tool
caption: 将实体保存为零件
title: 将实体保存为单独的SOLIDWORKS零件文档的宏
description: VBA宏，将SOLIDWORKS零件文档中的所有实体（或选定的实体）保存为单独的文件
image: insert-into-new-part-pmpage.png
group: 导入/导出
---
![插入到新零件属性管理器页面](insert-into-new-part-pmpage.png){ width=250 }

此宏将活动零件文档中的所有选定实体（如果没有选定实体，则为所有实体）保存到单独的零件文档中。

## 配置

通过修改**CUT_LIST_PRPS_TRANSFER**常量来指定处理自定义属性传输的选项

在**OUT_DIR**中指定输出目录。如果此变量为空，则实体将保存在与源零件文档相同的目录中。

~~~ vb
Const CUT_LIST_PRPS_TRANSFER As Long = swCutListTransferOptions_e.swCutListTransferOptions_CutListProperties '将属性移动到切割列表
Const OUT_DIR As String = "D:\Parts" '将实体导出到Parts目录
~~~

## 注意事项

* 实体仍与原始零件保持链接
* 输出文件将以实体的名称命名
* 文件名中不能使用的特殊符号（例如？，*，：等）将被替换为_
* 如果输出文件夹不存在，宏将不会创建输出文件夹并且会失败

~~~ vb
Const CUT_LIST_PRPS_TRANSFER As Long = swCutListTransferOptions_e.swCutListTransferOptions_FileProperties
Const OUT_DIR As String = ""

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swPart As SldWorks.PartDoc
    
    Set swPart = swApp.ActiveDoc
    
    Dim vBodies As Variant
    vBodies = GetSelectedBodies(swPart.SelectionManager)
    
    If IsEmpty(vBodies) Then
        vBodies = swPart.GetBodies2(swBodyType_e.swSolidBody, True)
    End If
    
    Dim i As Integer
    
    For i = 0 To UBound(vBodies)
        
        Dim swBody As SldWorks.Body2
        Set swBody = vBodies(i)
        
        If False <> swBody.Select2(False, Nothing) Then
            
            Dim outFilePath As String
            outFilePath = GetOutFilePath(swPart, swBody, OUT_DIR)
            
            Dim errs As Long
            Dim warns As Long
            
            If False <> swPart.SaveToFile3(outFilePath, swSaveAsOptions_e.swSaveAsOptions_Silent, CUT_LIST_PRPS_TRANSFER, False, "", errs, warns) Then
                swApp.CloseDoc outFilePath
            Else
                Err.Raise vbError, "", "无法将实体 " & swBody.Name & " 保存到文件 " & outFilePath & "。错误代码: " & errs
            End If
            
        Else
            Err.Raise vbError, "", "无法选择实体 " & swBody.Name
        End If
    Next
    
End Sub

Function GetSelectedBodies(selMgr As SldWorks.SelectionMgr) As Variant

    Dim isInit As Boolean
    isInit = False
    
    Dim swBodies() As SldWorks.Body2

    Dim i As Integer
    
    For i = 1 To selMgr.GetSelectedObjectCount2(-1)
                
        Dim swBody As SldWorks.Body2
    
        Set swBody = GetSelectedObjectBody(selMgr, i)
        
        If Not swBody Is Nothing Then
            
            If Not isInit Then
                ReDim swBodies(0)
                Set swBodies(0) = swBody
                isInit = True
            Else
                If Not Contains(swBodies, swBody) Then
                    ReDim Preserve swBodies(UBound(swBodies) + 1)
                    Set swBodies(UBound(swBodies)) = swBody
                End If
            End If
                        
        End If
    
    Next

    If isInit Then
        GetSelectedBodies = swBodies
    Else
        GetSelectedBodies = Empty
    End If

End Function

Function GetSelectedObjectBody(selMgr As SldWorks.SelectionMgr, index As Integer) As SldWorks.Body2
    
    Dim swBody As SldWorks.Body2
    
    Dim selObj As Object
    Set selObj = selMgr.GetSelectedObject6(index, -1)
    
    If Not selObj Is Nothing Then
        If TypeOf selObj Is SldWorks.Body2 Then
            Set swBody = selObj
        ElseIf TypeOf selObj Is SldWorks.Face2 Then
            Dim swFace As SldWorks.Face2
            Set swFace = selObj
            Set swBody = swFace.GetBody
        ElseIf TypeOf selObj Is SldWorks.Edge Then
            Dim swEdge As SldWorks.Edge
            Set swEdge = selObj
            Set swBody = swEdge.GetBody
        ElseIf TypeOf selObj Is SldWorks.Vertex Then
            Dim swVertex As SldWorks.Vertex
            Set swVertex = selObj
            Set swBody = swVertex.GetBody
        End If
    End If

    Set GetSelectedObjectBody = swBody
    
End Function

Function Contains(vArr As Variant, item As Object) As Boolean
    
    Dim i As Integer
    
    For i = 0 To UBound(vArr)
        If vArr(i) Is item Then
            Contains = True
            Exit Function
        End If
    Next
    
    Contains = False
    
End Function

Function GetOutFilePath(model As SldWorks.ModelDoc2, body As SldWorks.Body2, outDir As String) As String
    
    If outDir = "" Then
        outDir = model.GetPathName()
        If outDir = "" Then
            Err.Raise vbError, "", "由于文件从未保存，无法组成输出目录"
        End If
        
        outDir = Left(outDir, InStrRev(outDir, "\") - 1)
    End If
    
    If Right(outDir, 1) = "\" Then
        outDir = Left(outDir, Len(outDir) - 1)
    End If
    
    GetOutFilePath = ReplaceInvalidPathSymbols(outDir & "\" & body.Name & ".sldprt")
    
End Function

Function ReplaceInvalidPathSymbols(path As String) As String
    
    Const REPLACE_SYMB As String = "_"
    
    Dim res As String
    res = Right(path, Len(path) - Len("X:\"))
    
    Dim drive As String
    drive = Left(path, Len("X:\"))
    
    Dim invalidSymbols As Variant
    invalidSymbols = Array("/", ":", "*", "?", """", "<", ">", "|")
    
    Dim i As Integer
    For i = 0 To UBound(invalidSymbols)
        Dim invalidSymb As String
        invalidSymb = CStr(invalidSymbols(i))
        res = Replace(res, invalidSymb, REPLACE_SYMB)
    Next
    
    ReplaceInvalidPathSymbols = drive + res
    
End Function
~~~