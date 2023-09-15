## 代码说明

此宏使用SOLIDWORKS API将所有文件特定的属性复制到活动配置的属性中。

```vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2
Dim swCustPrpMgr As SldWorks.CustomPropertyManager
Dim swConfCustPrpMgr As SldWorks.CustomPropertyManager
 
Sub main()
 
    Set swApp = Application.SldWorks
 
    Set swModel = swApp.ActiveDoc

    If Not swModel Is Nothing Then
   
        Set swCustPrpMgr = swModel.Extension.CustomPropertyManager("")
       
        Dim vNames As Variant
        Dim vTypes As Variant
        Dim vValues As Variant
        swCustPrpMgr.GetAll vNames, vTypes, vValues
   
        Dim activeConfName As String
        activeConfName = swModel.ConfigurationManager.ActiveConfiguration.Name

        Set swConfCustPrpMgr = swModel.Extension.CustomPropertyManager(activeConfName)
 
        Dim i As Integer
   
        For i = 0 To UBound(vNames)
            swConfCustPrpMgr.Add2 vNames(i), vTypes(i), vValues(i)
            swConfCustPrpMgr.Set vNames(i), vValues(i)
        Next

    Else

        MsgBox "请打开零件或装配体"

    End If
   
End Sub
```

## 示例

在以下示例中，我们有一个零件文件，其中包含一个文件特定的自定义属性。我们将使用上述宏将该属性复制到活动配置的属性中。

![文件的自定义选项卡中的属性](file-specific-custom-properties.png){ width=640 }

要运行此宏，请按照以下步骤操作：

1. 打开SOLIDWORKS并打开一个零件或装配体文件。
2. 打开Visual Basic for Applications (VBA)编辑器。
3. 在VBA编辑器中，将上述代码粘贴到一个新的模块中。
4. 单击运行按钮或按下F5键以运行宏。

运行宏后，文件特定的自定义属性将被复制到活动配置的属性中。

请注意，如果没有打开任何零件或装配体文件，将显示一个消息框提示您打开一个零件或装配体文件。