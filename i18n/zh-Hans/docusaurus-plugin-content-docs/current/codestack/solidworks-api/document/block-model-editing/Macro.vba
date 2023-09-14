Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    BlockAll
    UnblockAll
    
    BlockMenusAndEdit
    UnlockMenusAndEdit
    
    BlockMenu
    UnblockMenu
        
End Sub

'Block menu, buttons and any manipulations (including model rotation)
Sub BlockAll()
    
    'get the current blocking state if it will be required to reset
    Dim curBlock As Integer
    curBlock = swModel.GetBlockingState
        
    swModel.SetBlockingState swBlockingStates_e.swSystemBlock
        
End Sub

'Block menu, buttons and any manipulations (including model rotation)
Sub UnblockAll()
    
    swModel.ResetBlockingState
    
End Sub

'Blocks menus and edits, but allows model moving and zooming
Sub BlockMenusAndEdit()
    
    swModel.Lock
    
End Sub

Sub UnlockMenusAndEdit()
    
    swModel.UnLock
    
End Sub

'Only blocks file related menu commands (new or save)
Sub BlockMenu()

    swApp.EnableFileMenu = False

End Sub

Sub UnblockMenu()

    swApp.EnableFileMenu = True
    
End Sub
