---
title: Add Tag to selected note using SOLIDWORKS API
caption: Add Tag To Selected Note
description: Example demonstrates how to add text tag to the selected note in SOLIDWORKS model
image: drawing-note-revision.png
labels: [note, annotation. tag, attribute]
---
![Note with revision number in SOLIDWORKS drawing](drawing-note-revision.png){ width=300 }

This example demonstrates how to add text tag (attribute) to the selected note in SOLIDWORKS model (part, assembly or drawing) using SOLIDWORKS API.

Specify the name of the tag as the *TAG* constant in the macro.

* The tag allows to track the specific note across the model sessions. This can be useful if macro needs to update the note (e.g. change the revision or linked value)
* Tag is preserved if note changes its text or formatting
* Tag is preserved if note moves (including moving from sheet space to sheet format)
* Tag is not visible/changeable from the User Interface (it can only be accessed via SOLIDWORKS API)

~~~ vb
Const TAG As String = "_CodeStackNote_"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        If Not TagSelectedNote(swModel, TAG) Then
            MsgBox "Failed to add tag to the note"
        End If
        
    Else
        MsgBox "Please open the model"
    End If
    
End Sub

Function TagSelectedNote(model As SldWorks.ModelDoc2, TAG As String) As Boolean
    
    On Error Resume Next
    
    Dim swSelMgr As SldWorks.SelectionMgr
    Set swSelMgr = model.SelectionManager
            
    Dim swNote As SldWorks.Note
    
    Set swNote = swSelMgr.GetSelectedObject6(1, -1)
    
    If Not swNote Is Nothing Then
        swNote.TagName = TAG
        TagSelectedNote = True
        Exit Function
    Else
        MsgBox "Please select note to add tag to"
    End If
    
    TagSelectedNote = False
    
End Function
~~~


