Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim swSelMgr As SldWorks.SelectionMgr
        Set swSelMgr = swModel.SelectionManager
        
        Dim swComp As SldWorks.Component2
        
        If TypeOf swModel Is SldWorks.AssemblyDoc Then
            
            Set swComp = swSelMgr.GetSelectedObjectsComponent4(1, -1)
            
        ElseIf TypeOf swModel Is SldWorks.DrawingDoc Then
            
            Dim swDrawComp As SldWorks.DrawingComponent
            Set swDrawComp = swSelMgr.GetSelectedObjectsComponent4(1, -1)
            
            If swDrawComp Is Nothing Then
                'for entities selected in graphics view - first seleciton is a view itself
                Set swDrawComp = swSelMgr.GetSelectedObjectsComponent4(2, -1)
            End If
            
            If Not swDrawComp Is Nothing Then
                Set swComp = swDrawComp.Component
            End If
            
        Else
            MsgBox "Only parts and drawings are supported"
            End
        End If
        
        If Not swComp Is Nothing Then
            
            Dim path As String
            path = swComp.GetPathName
            Debug.Print path
            SetTextToClipboard path
            
        Else
            MsgBox "Please select component"
        End If
        
    Else
        MsgBox "Please open document"
    End If
    
End Sub

Sub SetTextToClipboard(text As String)
    
    Dim dataObject As Object
    Set dataObject = CreateObject("new:{1C3B4210-F441-11CE-B9EA-00AA006B1A69}")
    dataObject.SetText text
    dataObject.PutInClipboard
    Set dataObject = Nothing
    
End Sub