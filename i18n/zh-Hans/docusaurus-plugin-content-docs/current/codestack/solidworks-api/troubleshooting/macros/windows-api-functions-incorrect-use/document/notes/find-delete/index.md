---
layout: sw-tool
title:  用于在SOLIDWORKS绘图中查找和删除特定注释的宏
caption: 查找和删除注释
---
 VBA宏，根据文本、正则表达式或空值，在所有SOLIDWORKS绘图工作表中查找和删除注释
image: delete-note.svg
labels: [note, delete, regular expression, regex]
group: Drawing
---
此VBA宏允许根据各种条件（如文本、表达式（属性链接文本）、正则表达式或空值）查找和删除SOLIDWORKS绘图中的所有注释。

## 配置

可以通过修改常量来配置宏

~~~ vb
Const FILTER As String = "" '当SEARCH_TYPE设置为ByText或ByExpression时使用的过滤器
Const SEARCH_TYPE As Integer = SearchType_e.EmptyText '搜索类型（ByText、ByExpression、EmptyText、EmptyExpression、All）
Const USE_REGULAR_EXPRESSION As Boolean = False '将FILTER常量中的值视为正则表达式时设置为True
~~~

### 查找所有注释

将**SEARCH_TYPE**常量的值设置为**All**，将找到并删除所有注释。

### 按文本查找

将注释的显示文本的值设置为**FILTER**常量，并将**SEARCH_TYPE**设置为**ByText**，将找到并删除与此值匹配的所有注释。

### 按表达式查找

将注释的表达式（属性链接文本）的值设置为**FILTER**常量，并将**SEARCH_TYPE**设置为**ByExpression**，将找到并删除与此值匹配的所有注释。

这可用于查找链接到自定义属性的注释，例如下面的示例将查找链接到绘图的**零件编号**自定义属性的所有注释。

~~~ vb
Const FILTER As String = "$PRPSHEET:""Part Number"""
Const SEARCH_TYPE As Integer = SearchType_e.ByExpression
Const USE_REGULAR_EXPRESSION As Boolean = False
~~~

### 按空文本或表达式查找

将**SEARCH_TYPE**常量的值设置为**EmptyText**或**EmptyExpression**，将找到并删除所有空注释。

### 正则表达式

为了进行更高级的搜索选项，可以使用正则表达式。要启用此选项，请将**USE_REGULAR_EXPRESSION**设置为**True**。有关更多信息，请参见[正则表达式](https://docs.microsoft.com/zh-cn/dotnet/standard/base-types/the-regular-expression-object-model)。

下面的示例将查找并删除所有包含数字值的注释。

~~~ vb
Const FILTER As String = "\d+"
Const SEARCH_TYPE As Integer = SearchType_e.ByText
Const USE_REGULAR_EXPRESSION As Boolean = True
~~~

~~~ vb
Enum SearchType_e
    ByText
    ByExpression
    EmptyText
    EmptyExpression
    All
End Enum

Const FILTER As String = ""
Const SEARCH_TYPE As Integer = SearchType_e.EmptyText
Const USE_REGULAR_EXPRESSION As Boolean = False

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swDraw As SldWorks.DrawingDoc
    Set swDraw = swApp.ActiveDoc
    
    If Not swDraw Is Nothing Then
           
        DeleteNotes swDraw
        
    Else
        Err.Raise vbError, "", "仅支持绘图"
    End If
    
End Sub

Sub DeleteNotes(draw As SldWorks.DrawingDoc)
    
    Dim currentSheetName As String
    currentSheetName = draw.GetCurrentSheet().GetName
    
    Dim vSheets As Variant
    vSheets = draw.GetViews
    
    Dim i As Integer
        
    For i = 0 To UBound(vSheets)
        
        Dim vViews As Variant
        vViews = vSheets(i)
        
        draw.ActivateSheet vViews(0).Name
        draw.ClearSelection2 False
        
        Dim j As Integer
        
        For j = 0 To UBound(vViews)
                
            Dim swView As SldWorks.View
            Set swView = vViews(j)
            
            Dim vNotes As Variant
            vNotes = swView.GetNotes
            
            Dim k As Integer
            
            For k = 0 To UBound(vNotes)
                
                Dim swNote As SldWorks.note
                Set swNote = vNotes(k)
                
                If ShouldDeleteNote(swNote) Then

                    Dim swAnn  As SldWorks.Annotation
                    Set swAnn = swNote.GetAnnotation
                    
                    Debug.Print "删除 " & swNote.GetText & " (" & swNote.PropertyLinkedText & ")"

                    swAnn.Select3 True, Nothing
                    
                End If
                
            Next
            
        Next
        
        If draw.SelectionManager.GetSelectedObjectCount2(-1) > 0 Then
            If False <> draw.Extension.DeleteSelection2(swDeleteSelectionOptions_e.swDelete_Absorbed) Then
                draw.SetSaveFlag
            Else
                Err.Raise vbError, "", "删除注释失败"
            End If
        End If
        
    Next
    
    draw.ActivateSheet currentSheetName
    
End Sub

Function ShouldDeleteNote(note As SldWorks.note) As Boolean

    Dim value As String
    
    Select Case SEARCH_TYPE
        Case SearchType_e.All
            ShouldDeleteNote = True
            Exit Function
        Case SearchType_e.EmptyText
            ShouldDeleteNote = note.GetText() = ""
            Exit Function
        Case SearchType_e.EmptyExpression
            ShouldDeleteNote = note.PropertyLinkedText = ""
            Exit Function
        Case SearchType_e.ByText
            value = note.GetText()
        Case SearchType_e.ByExpression
            value = note.PropertyLinkedText
    End Select
        
    If USE_REGULAR_EXPRESSION Then
        Dim regEx As Object
        Set regEx = CreateObject("VBScript.RegExp")
        
        regEx.Global = True
        regEx.IgnoreCase = True
        regEx.Pattern = FILTER
        
        ShouldDeleteNote = regEx.Test(value)
    Else
        ShouldDeleteNote = (value = FILTER)
    End If
    
End Function
~~~