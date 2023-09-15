---
title:  使用SOLIDWORKS API进行块模型编辑
caption: 块模型编辑
---
 该示例演示了使用SOLIDWORKS API禁用模型编辑的不同方法。
labels: [块编辑, 块模型, 示例, 锁定, 菜单, solidworks api]
redirect-from:
  - /2018/03/block-model-editing.html
---

该示例演示了使用SOLIDWORKS API禁用模型编辑的不同方法：

* 阻止菜单 - 用户无法调用菜单命令。通常在显示属性管理器页面时使用此功能，不应调用任何命令。
* 阻止模型编辑 - 模型只能查看，无法更改。
* 完全阻止 - 禁用编辑和视图操作。

需要逐步调试宏以查看不同的SOLIDWORKS API函数的操作。

```vb
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

'阻止菜单、按钮和任何操作（包括模型旋转）
Sub BlockAll()
    
    '获取当前的阻止状态，如果需要重置
    Dim curBlock As Integer
    curBlock = swModel.GetBlockingState
        
    swModel.SetBlockingState swBlockingStates_e.swSystemBlock
        
End Sub

'解除阻止菜单、按钮和任何操作（包括模型旋转）
Sub UnblockAll()
    
    swModel.ResetBlockingState
    
End Sub

'阻止菜单和编辑，但允许模型移动和缩放
Sub BlockMenusAndEdit()
    
    swModel.Lock
    
End Sub

Sub UnlockMenusAndEdit()
    
    swModel.UnLock
    
End Sub

'仅阻止与文件相关的菜单命令（新建或保存）
Sub BlockMenu()

    swApp.EnableFileMenu = False

End Sub

Sub UnblockMenu()

    swApp.EnableFileMenu = True
    
End Sub

```
