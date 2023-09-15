---
title:  使用SOLIDWORKS API将文档前景带到前台（激活文档）
caption: 将文档前景带到前台（激活文档）
---
 本示例演示了如何使用[SOLIDWORKS API的ISldWorks::ActivateDoc3](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~activatedoc3.html)方法将通过路径选择的文档带到前台（激活）。
labels: [激活文档, 装配体, 示例, 前景, 打开文档]
redirect-from:
  - /2018/03/bring-document-foreground-activate.html
---
本示例演示了如何使用[SOLIDWORKS API的ISldWorks::ActivateDoc3](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~activatedoc3.html)方法将通过路径选择的文档带到前台（激活）。

文档可以以两种状态打开（可见或隐藏）。隐藏文档通常是从装配体或绘图中的组件加载到内存中的模型。在这种情况下，当调用[ISldWorks::OpenDoc6](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html)方法时，文档不会自动带到前台。关闭作为组件加载的文档时也是类似的情况：文档将变为不可见而不是关闭。

* 在没有打开文件的情况下运行宏 - 文件将被打开并关闭
* 打开装配体并运行宏。在这种情况下，[ISldWorks::OpenDoc6](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html) API不会强制将零件带到前台，因此需要强制激活它。

[下载示例文件](SimpleBox.zip)

~~~ vb
Const FILE_NAME As String = "SimpleBox.SLDPRT"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Dim path As String
    path = swApp.GetCurrentMacroPathFolder() & "\" & FILE_NAME
    
    Set swModel = swApp.GetOpenDocumentByName(path)
    
    Dim wasVisible As Boolean
    
    If Not swModel Is Nothing Then
        wasVisible = swModel.Visible
    End If
    
    Set swModel = swApp.OpenDoc6(path, swDocumentTypes_e.swDocPART, swOpenDocOptions_e.swOpenDocOptions_Silent, "", 0, 0)
    
    If Not swModel Is Nothing Then
        swApp.ActivateDoc3 swModel.GetTitle(), False, swRebuildOnActivation_e.swDontRebuildActiveDoc, 0
    End If
    
    MsgBox "Was Visible: " & wasVisible
    
    If False = wasVisible Then
        swApp.CloseDoc swModel.GetTitle
    End If
    
End Sub


~~~