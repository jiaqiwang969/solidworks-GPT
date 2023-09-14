Const FILTER As Integer = swSelectType_e.swSelEDGES

Dim swApp As SldWorks.SldWorks
Dim swEventsListener As EventsListener

Sub main()

    Set swApp = Application.SldWorks
        
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Set swEventsListener = New EventsListener
        swEventsListener.WaitForSelection swModel, FILTER
        
    Else
        MsgBox "Please open the model"
    End If
End Sub