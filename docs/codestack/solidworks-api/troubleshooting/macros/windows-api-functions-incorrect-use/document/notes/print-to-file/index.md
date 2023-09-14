---
layout: sw-tool
title: Macro to print all notes to the text file from SOLIDWORKS drawing
caption: Print Notes Text To File
description: VBA macro to output all notes text to the text file from the SOLIDWORKS drawing file
image: print-notes.svg
labels: [note, print, regular expression, regex]
group: Drawing
---
This VBA macro outputs text from all drawing views in the SOLIDWORKS drawing to the text file.

Each note will be printed in the new line. It is possible to additionally include the name of the view and the file into the output.

## Configuration

Macro can be configured by modifying the constants

~~~ vb
Const FILE_PATH As String = "" 'Full path to a text file where notes should be written. If empty file is saved with the same name as the original file with _Note.txt prefix
Const PRINT_FILE_NAME As Boolean = True 'True to output the file name to the text file
Const PRINT_VIEW_NAME As Boolean = True 'True to output the drawing view name to the text file
Const FILTER As String = "" 'Regular expression filter for the notes to include (e.g. \d+ to include all notes containing numeric value)
~~~

## Notes

* For the notes which are empty the value will be output as **\[X\]**
* See [Regular Expressions](https://docs.microsoft.com/en-us/dotnet/standard/base-types/the-regular-expression-object-model) for more information about regular expressions which can be used to configure the **FILTER**
* Notes will be appended to an existing text file (new file will be created if not exists). This allows to batch run this macro via [Batch+](https://cadplus.xarial.com/batch/) to output notes from multiple files.

~~~ vb
Const FILE_PATH As String = ""
Const PRINT_FILE_NAME As Boolean = True
Const PRINT_VIEW_NAME As Boolean = True
Const FILTER As String = ""

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swDraw As SldWorks.DrawingDoc
    Set swDraw = swApp.ActiveDoc
    
    If Not swDraw Is Nothing Then
        
        Dim outFilePath As String
        
        If FILE_PATH <> "" Then
            outFilePath = FILE_PATH
        Else
            outFilePath = swDraw.GetPathName
            
            If outFilePath = "" Then
                Err.Raise "Drawing is not saved to the and FILE_PATH is not specified"
            End If
            
            outFilePath = Left(outFilePath, InStrRev(outFilePath, ".") - 1) & "_Notes.txt"
        End If
        
        Dim fileNmb As Integer
        fileNmb = FreeFile
    
        Open outFilePath For Append As #fileNmb
    
        If PRINT_FILE_NAME Then
            Print #fileNmb, "*** File Path: " & swDraw.GetPathName & " ***"
        End If
    
        PrintNotes swDraw, fileNmb
        
        Print #fileNmb, ""
        Close #fileNmb
        
    Else
        Err.Raise vbError, "", "Only drawings are supported"
    End If
    
End Sub

Sub PrintNotes(draw As SldWorks.DrawingDoc, fileNmb As Integer)
    
    Dim vSheets As Variant
    vSheets = draw.GetViews
    
    Dim i As Integer
        
    For i = 0 To UBound(vSheets)
        
        Dim vViews As Variant
        vViews = vSheets(i)
        
        Dim j As Integer
        
        For j = 0 To UBound(vViews)
            
            Dim swView As SldWorks.View
            Set swView = vViews(j)
            
            If PRINT_VIEW_NAME Then
                Print #fileNmb, "*** View Name: " & swView.Name & " ***"
            End If
            
            Dim vNotes As Variant
            vNotes = swView.GetNotes
            
            Dim k As Integer
            
            For k = 0 To UBound(vNotes)
                Dim swNote As SldWorks.Note
                Set swNote = vNotes(k)
                
                Dim text As String
                text = swNote.GetText
                
                If IncludeNote(text) Then
                    If text = "" Then
                        text = "[X]"
                    End If
                    
                    Print #fileNmb, text
                End If
                
            Next
            
        Next
        
    Next
    
End Sub

Function IncludeNote(text As String) As Boolean

    If FILTER = "" Then
        IncludeNote = True
    Else
        Dim regEx As Object
        Set regEx = CreateObject("VBScript.RegExp")
        
        regEx.Global = True
        regEx.IgnoreCase = True
        regEx.Pattern = FILTER
        
        IncludeNote = regEx.Test(text)
    
    End If
    
End Function
~~~


