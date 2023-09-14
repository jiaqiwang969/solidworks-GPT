---
title: Block model editing using SOLIDWORKS API
caption: Block Model Editing
description: Example demonstrate different ways of disabling the model editing
labels: [block editing, block model, example, lock, menu, solidworks api]
redirect-from:
  - /2018/03/block-model-editing.html
---
This example demonstrate different ways of disabling the model editing from SOLIDWORKS API: 

* Blocking menu - user is not able to invoke menu commands. This feature is usually used when property manager page is displayed and there should be no commands invoked
* Blocking model editing - model is a view only and cannot be changed
* Full block - editing and view manipulations are disabled

It is required to debug macro step-by-step to see the different SOLIDWORKS API functions in action.

~~~ vb
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

~~~

