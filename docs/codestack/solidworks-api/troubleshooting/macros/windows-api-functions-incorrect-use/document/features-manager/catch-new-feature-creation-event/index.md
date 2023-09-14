---
title: Catch new feature creation event from SOLIDWORKS API notification
caption: Catch New Feature Creation Event
description: Example listens for feature added event of the active part document and displays the message box
labels: [event, example, feature manager, new feature, solidworks api]
redirect-from:
  - /2018/03/solidworks-api-features-manager-catch-adding-feat-event.html
---
This example listens for feature added event of the active part document using SOLIDWORKS API.

Once the new feature creation notification is caught, macro displays the message box to the user.

The listener is detached as soon as active part is closed.

*Macro Module*

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swEventListener As EventListener

Sub main()

    Set swApp = Application.SldWorks
    
    Set swEventListener = New EventListener
    
    Dim swPart As SldWorks.PartDoc
    
    Set swPart = swApp.ActiveDoc
    
    swEventListener.SetPart swPart
    
    While swApp.ActiveDoc Is swPart
        DoEvents
    Wend
    
End Sub

~~~



*EventListener Class*

~~~ vb
Dim WithEvents swPart As SldWorks.PartDoc

Private Function swPart_AddItemNotify(ByVal EntityType As Long, ByVal itemName As String) As Long

    If EntityType = swNotifyEntityType_e.swNotifyFeature Then
        MsgBox itemName & " feature is added"
    End If
    
End Function

Sub SetPart(part As SldWorks.PartDoc)
    
    Set swPart = part
    
End Sub
~~~

