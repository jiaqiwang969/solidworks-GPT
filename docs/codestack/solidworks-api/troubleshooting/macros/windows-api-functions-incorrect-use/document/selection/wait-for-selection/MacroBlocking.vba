Const FILTER As Integer = swSelectType_e.swSelEDGES

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        swModel.ClearSelection2 True
        
        Dim swSelMgr As SldWorks.SelectionMgr
        
        Set swSelMgr = swModel.SelectionManager
        
        Dim swObject As Object
        
        While swObject Is Nothing
            
            Dim i As Integer
            
            For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)
                If swSelMgr.GetSelectedObjectType3(i, -1) = FILTER Then
                    Set swObject = swSelMgr.GetSelectedObject6(i, -1)
                End If
            Next
            DoEvents
        Wend
        
        Stop
        
    Else
        MsgBox "Please open the model"
    End If
    
End Sub