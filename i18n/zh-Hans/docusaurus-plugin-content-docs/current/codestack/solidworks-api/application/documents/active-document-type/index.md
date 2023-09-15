## 代码说明

该示例显示当前在SOLIDWORKS中活动文档的类型的消息框。无论文档是否已保存，都可以使用[IModelDoc2::GetType](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~GetType.html) SOLIDWORKS API方法返回类型枚举，该枚举将标识文档为SOLIDWORKS零件、装配或绘图。

```vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Select Case swModel.GetType
            
            Case swDocPART:
                MsgBox "活动文档是零件"
            
            Case swDocASSEMBLY:
                MsgBox "活动文档是装配"
                
            Case swDocDRAWING:
                MsgBox "活动文档是绘图"
        End Select
        
    Else
        
        MsgBox "未打开文档"
        
    End If
    
End Sub
```

## 代码说明

- 首先，我们声明了一个`swApp`变量和一个`swModel`变量，分别用于存储SOLIDWORKS应用程序和活动文档的引用。
- 在`main`子过程中，我们将`swApp`设置为`Application.SldWorks`，以获取SOLIDWORKS应用程序的引用。
- 然后，我们将`swModel`设置为`swApp.ActiveDoc`，以获取活动文档的引用。
- 如果`swModel`不为空，则使用`Select Case`语句根据文档的类型进行判断。
- 如果文档类型是`swDocPART`，则显示消息框"活动文档是零件"。
- 如果文档类型是`swDocASSEMBLY`，则显示消息框"活动文档是装配"。
- 如果文档类型是`swDocDRAWING`，则显示消息框"活动文档是绘图"。
- 如果`swModel`为空，则显示消息框"未打开文档"。

## 示例

```vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Select Case swModel.GetType
            
            Case swDocPART:
                MsgBox "活动文档是零件"
            
            Case swDocASSEMBLY:
                MsgBox "活动文档是装配"
                
            Case swDocDRAWING:
                MsgBox "活动文档是绘图"
        End Select
        
    Else
        
        MsgBox "未打开文档"
        
    End If
    
End Sub
```

[!INCLUDE [code-snippet](../code-snippets/sidebar.md)]