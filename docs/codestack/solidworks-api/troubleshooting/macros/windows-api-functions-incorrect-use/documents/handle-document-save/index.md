---
layout: sw-tool
title: Run VBA macro automatically on document save using SOLIDWORKS API
caption: Run Macro On Document Save
description: Macro runs VBA code (or another macro) automatically on file save using SOLIDWORKS API
image: run-macro-on-save.svg
labels: [auto run,model save event]
group: Model
---
This VBA macro handles active document (part, assembly or drawing) save events (including save all and save as) using SOLIDWORKS API and runs a custom code.

Macro operates in the background and needs to be run once a session to start monitoring.

![File save command](save-command.png)

## Configuration

* Create new macro
* Place the code from the [Macro Module](#macro-module) to the default module
* Add the code which needs to be executed on each save into the *OnSaveDocument* function

~~~ vb
Sub OnSaveDocument(Optional dummy As Variant = Empty)
    'TODO: place the code here to run when document is saved
    MsgBox "Saved"
End Sub
~~~

* To simplify this function you can call another macro without explicitly copying the code. Explore the [Run Group Of Macros](/docs/codestack/solidworks-api/application/frame/run-macros-group/) example.

* Add new Class Module and name it *SaveEventsHandler*. Paste the code from the [SaveEventsHandler Class Module](#saveeventshandler-class-module)

* It might be useful to automatically run this macro with each session of SOLIDWORKS. Follow the [Run SOLIDWORKS macro automatically on application start](/docs/codestack/solidworks-api/getting-started/macros/run-macro-on-solidworks-start/) link for more information.

## Macro Module

Entry point which starts events monitoring and handles the code which needs to be run once the save event arrives.

~~~ vb
Dim swFileSaveHandler As SaveEventsHandler

Sub main()
    
    Set swFileSaveHandler = New SaveEventsHandler
    
    While True
        DoEvents
    Wend
    
End Sub

Sub OnSaveDocument(Optional dummy As Variant = Empty)
    'TODO: place the code here to run whn document is saved
    MsgBox "Saved"
End Sub
~~~



## SaveEventsHandler Class Module

Class which handles SOLIDWORKS API save notifications

~~~ vb
Dim WithEvents swApp As SldWorks.SldWorks

Private Sub Class_Initialize()
    Set swApp = Application.SldWorks
End Sub

Private Function swApp_CommandCloseNotify(ByVal Command As Long, ByVal reason As Long) As Long
    
    Const swCommands_Save As Long = 2
    Const swCommands_SaveAll As Long = 19
    Const swCommands_SaveAs As Long = 620
    
    If Command = swCommands_Save Or Command = swCommands_SaveAll Or Command = swCommands_SaveAs Then
        OnSaveDocument
    End If
    
End Function

~~~


