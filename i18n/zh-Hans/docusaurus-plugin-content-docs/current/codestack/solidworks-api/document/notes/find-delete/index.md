---
layout: sw-tool
title:  Macro to find and delete specific notes in the SOLIDWORKS drawing
caption: Find And Delete Notes
---
 VBA macro to find and delete notes in all SOLIDWORKS drawing sheets based on the text, regular expressions or empty values
image: delete-note.svg
labels: [note, delete, regular expression, regex]
group: Drawing
---
This VBA macro allows to find and delete all notes in the SOLIDWORKS drawing based on the various criteria, such as by text, expression (property linked text), regular expression or empty values.

## Configuration

Macro can be configured by modifying the constants

~~~ vb
Const FILTER As String = "" 'filter to use whe SEARCH_TYPE is set to ByText or ByExpression
Const SEARCH_TYPE As Integer = SearchType_e.EmptyText 'Type of Search (ByText, ByExpression, EmptyText, EmptyExpression, All)
Const USE_REGULAR_EXPRESSION As Boolean = False 'True to treat value in the FILTER constant as regular expressions
~~~

### Finding All Notes

Set the value of **SEARCH_TYPE** constant to **All** and all notes will be found and deleted

### Searching By Text

Set the value of the display text of the note to the **FILTER** constant and **SEARCH_TYPE** to **ByText** and all notes which match this value will be found and deleted.

### Searching By Expression

Set the value of the expression (property linked text) of the note to the **FILTER** constant and **SEARCH_TYPE** to **ByExpression** and all notes which match this value will be found and deleted.

This can be used to find the notes linked to custom properties, for example the below example will find all notes which are linked to the **Part Number** custom property of the drawing.

~~~ vb
Const FILTER As String = "$PRPSHEET:""Part Number"""
Const SEARCH_TYPE As Integer = SearchType_e.ByExpression
Const USE_REGULAR_EXPRESSION As Boolean = False
~~~

### Searching By Empty Text Or Expression

Set the value of **SEARCH_TYPE** constant to **EmptyText** or **EmptyExpression** and all empty notes will be found and deleted

### Regular Expressions

For more advanced searching options it is possible to use the regular expressions. To enable this option set the **USE_REGULAR_EXPRESSION** to **True**. See [Regular Expressions](https://docs.microsoft.com/en-us/dotnet/standard/base-types/the-regular-expression-object-model) for more information

Example below will find and delete all notes which contain numeric value.

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
        Err.Raise vbError, "", "Only drawings are supported"
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
                    
                    Debug.Print "Deleting " & swNote.GetText & " (" & swNote.PropertyLinkedText & ")"

                    swAnn.Select3 True, Nothing
                    
                End If
                
            Next
            
        Next
        
        If draw.SelectionManager.GetSelectedObjectCount2(-1) > 0 Then
            If False <> draw.Extension.DeleteSelection2(swDeleteSelectionOptions_e.swDelete_Absorbed) Then
                draw.SetSaveFlag
            Else
                Err.Raise vbError, "", "Failed to delete annotations"
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


