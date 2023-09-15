---
layout: sw-tool
title: 使用SOLIDWORKS API显示活动模型中所有注释的文本
caption: 显示所有注释文本
description: 使用SOLIDWORKS API显示活动文档中注释的VBA宏
image: comments.png
labels: [comment]
group: Model
---
![特征管理器树中的注释](comments-features.png)

这个VBA宏从活动文档的所有注释中提取文本，并在一个单独的消息框中显示。

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()
    
    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Dim swFeat As SldWorks.Feature
        
        Set swFeat = swModel.FirstFeature
        
        Dim msg As String
        
        While Not swFeat Is Nothing
        
            If swFeat.GetTypeName() = "CommentsFolder" Then
                
                Dim swCommentsFolder As SldWorks.CommentFolder
                
                Set swCommentFolder = swFeat.GetSpecificFeature2
                
                Dim vComments As Variant
                vComments = swCommentFolder.GetComments
 
                Dim i As Integer
                
                If Not IsEmpty(vComments) Then
                    For i = 0 To UBound(vComments)
                        Dim swComment As SldWorks.Comment
                        Set swComment = vComments(i)
                        msg = IIf(msg = "", "", msg & vbLf) & swComment.Text
                    Next i
                End If
            End If
           
           Set swFeat = swFeat.GetNextFeature
           
        Wend
        
        If msg <> "" Then
            swApp.SendMsgToUser2 msg, swMessageBoxIcon_e.swMbInformation, swMessageBoxBtn_e.swMbOk
        End If
        
    Else
        MsgBox "请打开模型"
    End If
    
End Sub

~~~