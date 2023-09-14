---
title: VBA macro to review SOLIDWORKS sheets and configurations
caption: Configurations And Sheets Reviewer
description: VBA macro which iterates all sheets and configurations of SOLIDWORKS file and activates each one by one
image: configurations-reviewer.svg
labels: [configuration,sheet,review,iterate]
---
![Configurations in SOLIDWORKS model](configurations.png)

This VBA macro allows to review all configurations in part or assembly and all sheets in the drawing document of SOLIDWORKS.

Macro will activate each sheet or configuration one by one and wait the specified amount of seconds before activating the next configuration.

Specify the time in seconds to wait before activating next configuration by changing the value of *WAIT_TIME* constant

~~~vb
Const WAIT_TIME As Single = 10 ' wait 10 seconds before activating next configuration or sheet
~~~

Main window will not be blocked so it is possible to manipulate the model in the graphics view.

~~~ vb
Const WAIT_TIME As Single = 5

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        If swModel.GetType() <> swDocumentTypes_e.swDocDRAWING Then
            ReviewConfigurations swModel, WAIT_TIME
        Else
            ReviewDrawingSheets swModel, WAIT_TIME
        End If
        
        MsgBox "Review Completed"
        
    Else
        MsgBox "Please open model"
    End If
    
End Sub

Sub ReviewConfigurations(model As SldWorks.ModelDoc2, waitTime As Single)
    
    Dim vConfNames As Variant
    vConfNames = model.GetConfigurationNames()
    
    Dim curConfName As String
    curConfName = model.ConfigurationManager.ActiveConfiguration.Name
    
    Dim i As Integer
    
    For i = 0 To UBound(vConfNames)
        model.ShowConfiguration2 CStr(vConfNames(i))
        SleepAsync waitTime
    Next
    
    model.ShowConfiguration2 curConfName
    
End Sub

Sub ReviewDrawingSheets(draw As SldWorks.DrawingDoc, waitTime As Single)

    Dim vSheetNames As Variant
    vSheetNames = draw.GetSheetNames
    
    Dim curSheetName As String
    curSheetName = draw.GetCurrentSheet().Name
    
    Dim i As Integer
    
    For i = 0 To UBound(vSheetNames)
        draw.ActivateSheet CStr(vSheetNames(i))
        SleepAsync waitTime
    Next
    
    draw.ActivateSheet curSheetName
    
End Sub

Sub SleepAsync(sec As Single)
    
    Dim startTime As Single
    startTime = Timer
    
    While Timer() - startTime < sec
        DoEvents
    Wend
    
End Sub
~~~


