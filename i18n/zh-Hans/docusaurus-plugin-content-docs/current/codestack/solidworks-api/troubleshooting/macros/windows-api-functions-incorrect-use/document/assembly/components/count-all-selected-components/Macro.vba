Dim swApp As SldWorks.SldWorks
Dim swAssy As SldWorks.AssemblyDoc

Sub main()

    Set swApp = Application.SldWorks
    
    Set swAssy = swApp.ActiveDoc
    
    If Not swAssy Is Nothing Then
            
        Dim swSelMgr As SldWorks.SelectionMgr
        Set swSelMgr = swAssy.SelectionManager
        
        Dim swCompsColl As Collection
        Set swCompsColl = New Collection
        
        Dim i As Integer
        
        For i = 0 To swSelMgr.GetSelectedObjectCount2(-1)
            
            Dim swComp As SldWorks.Component2
            Set swComp = swSelMgr.GetSelectedObjectsComponent2(i)
            
            If Not swComp Is Nothing Then
                If Not Contains(swCompsColl, swComp) Then 'get only unique components
                    swCompsColl.Add swComp
                End If
            End If
            
        Next
        
        Dim swFrame As SldWorks.Frame
        Set swFrame = swApp.Frame
        swFrame.SetStatusBarText "Selected " & swCompsColl.Count() & " component(s)"
    
    Else
        MsgBox "Please open assembly"
    End If
    
End Sub

Function Contains(coll As Collection, item As Object) As Boolean
    
    Dim i As Integer
    
    For i = 1 To coll.Count
        If coll.item(i) Is item Then
            Contains = True
            Exit Function
        End If
    Next
    
    Contains = False
    
End Function
