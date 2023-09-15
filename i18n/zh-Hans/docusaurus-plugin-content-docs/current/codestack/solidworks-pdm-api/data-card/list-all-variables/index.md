---
title:  使用SOLIDWORKS PDM API列出存储库中的所有变量
caption: 列出所有变量
---
 使用SOLIDWORKS PDM API列出指定存储库中的所有变量的VBA宏
image: pdm-variables.png
labels: [变量, 列表]
---
![PDM变量列表SOLIDWORKS PDM管理面板](pdm-variables.png)

这个VBA宏使用SOLIDWORKS PDM API列出了指定存储库中的所有变量。变量名称和ID将以以下格式输出到VBA编辑器的即时窗口中：

~~~
Album(102)
Approved by(53)
Approved On(46)
Artist(101)
Assembly No.(67)
Attachments(92)
Author(55)
Body(91)
BOM Quantity(106)
Checked by(58)
Checked Date(62)
~~~

~~~ vb
Sub main()

    Dim swPdmVault As New EdmVault5
    swPdmVault.LoginAuto "TestVault", 0
    
    If swPdmVault.IsLoggedIn Then
        
        Dim swPdmVarsMgr As IEdmVariableMgr7
        Set swPdmVarsMgr = swPdmVault
        
        Dim swVarPost As IEdmPos5
        Set swVarPost = swPdmVarsMgr.GetFirstVariablePosition()
        
        While Not swVarPost.IsNull
            Dim swPdmVar As IEdmVariable5
            Set swPdmVar = swPdmVarsMgr.GetNextVariable(swVarPost)
            Debug.Print swPdmVar.Name & "(" & swPdmVar.ID & ")"
        Wend
    Else
        Err.Raise vberr, "", "未登录"
    End If

End Sub
~~~