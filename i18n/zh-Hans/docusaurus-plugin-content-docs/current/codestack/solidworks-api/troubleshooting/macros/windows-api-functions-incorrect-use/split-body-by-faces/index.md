---
layout: sw-tool
title: 使用SOLIDWORKS API拆分面的SOLIDWORKS宏
caption: 拆分面
description: 该宏使用SOLIDWORKS API将选定的曲面或实体体拆分为面，为每个面创建单独的面体
image: split-body-by-faces.svg
labels: [拆分,体,面]
group: 几何
---
![每个面的特征管理器树](feature-manager-tree-split-faces.png){ width=250 }

该宏使用[SOLIDWORKS API](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler~createsheetfromfaces.html)方法[IModeler::CreateSheetFromFaces](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler~createsheetfromfaces.html)为选定的实体或曲面体的每个面创建单独的曲面（面）体。

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim swSelMgr As SldWorks.SelectionMgr
        
        Set swSelMgr = swModel.SelectionManager
        
        Dim swBody As SldWorks.Body2
        Set swBody = swSelMgr.GetSelectedObject6(1, -1)
        
        If Not swBody Is Nothing Then
            SplitBodyFaces swModel, swBody
        Else
            MsgBox "请选择体"
        End If
        
    Else
        MsgBox "请打开零件"
    End If
    
End Sub

Sub SplitBodyFaces(part As SldWorks.PartDoc, body As SldWorks.Body2)
    
    Dim swModeler As SldWorks.Modeler
    Set swModeler = swApp.GetModeler
    
    Dim vFaces As Variant
    vFaces = body.GetFaces
    
    Dim i As Integer
    
    For i = 0 To UBound(vFaces)
        
        Dim swFace(0) As SldWorks.Face2
        Set swFace(0) = vFaces(i)
        
        Dim swSheetBody As SldWorks.Body2
        Set swSheetBody = swModeler.CreateSheetFromFaces(swFace)
        part.CreateFeatureFromBody3 swSheetBody, True, swCreateFeatureBodyOpts_e.swCreateFeatureBodySimplify
        
    Next
    
End Sub
~~~



有关更高级的功能（支持参数化方法），请参阅[Geomtery++ Split Body By Faces功能](/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/)