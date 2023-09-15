## 概述

这个VBA宏使用SOLIDWORKS API为活动模型的自定义属性的*摘要信息*选项卡（作者、关键字、注释、标题和主题）填充值。

## 配置宏并指定要写入的值

```vb
Const AUTHOR As String = "CodeStack"
Const KEYWORDS As String = "sample,summary,api"
Const COMMENTS As String = "Example comments"
Const TITLE As String = "Summary API Example"
Const SUBJECT As String = "CodeStack API Examples"
```

## 主程序

```vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        swModel.SummaryInfo(swSummInfoField_e.swSumInfoAuthor) = AUTHOR
        swModel.SummaryInfo(swSummInfoField_e.swSumInfoKeywords) = KEYWORDS
        swModel.SummaryInfo(swSummInfoField_e.swSumInfoComment) = COMMENTS
        swModel.SummaryInfo(swSummInfoField_e.swSumInfoTitle) = TITLE
        swModel.SummaryInfo(swSummInfoField_e.swSumInfoSubject) = SUBJECT
    Else
        MsgBox "请打开模型"
    End If
    
End Sub
```

[![](summary.png)](summary.png)