---
title:  使用SOLIDWORKS API向装配体添加组件
caption: 添加组件到装配体
---
 该示例演示了使用SOLIDWORKS API向装配体树中添加组件的两种不同方式（单个组件添加或批量添加）
labels: [添加组件, 装配体, 示例, solidworks api]
redirect-from:
  - /2018/03/solidworks-api-assembly-add-components.html
  - /solidworks-api/document/assembly/add-components
---
该示例演示了使用SOLIDWORKS API向装配体树中添加组件的两种不同方式。

* 传统的方式是通过[SOLIDWORKS API的AddComponentX](https://help.solidworks.com/2015/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IAssemblyDoc~AddComponent5.html)方法添加组件。这种方式要求将模型加载到内存中，否则操作将失败。
* 更高级的方式是使用[SOLIDWORKS API的AddComponents](https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAssemblyDoc~AddComponents3.html)方法。该方法允许在不预先打开模型的情况下批量插入不同的组件。

[下载示例文件](parts.zip)

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swMathUtils As SldWorks.MathUtility
Dim swAssy As SldWorks.AssemblyDoc

Sub main()

    Set swApp = Application.SldWorks
    
    Set swMathUtils = swApp.GetMathUtility
    
    Set swAssy = swApp.ActiveDoc
    
    If Not swAssy Is Nothing Then
        
        Dim comp1Path As String
        Dim comp2Path As String
        
        comp1Path = swApp.GetCurrentMacroPathFolder() & "\Part1.sldprt"
        comp2Path = swApp.GetCurrentMacroPathFolder() & "\Part2.sldprt"
        
        Dim swComp As SldWorks.Component2
        
        '以下API调用将失败，因为需要将模型加载到内存中
        Set swComp = swAssy.AddComponent4(comp1Path, "", 0, 0, 0)
        
        Debug.Assert Not swComp Is Nothing
                
        '以不可见方式加载模型
        swApp.DocumentVisible False, swDocumentTypes_e.swDocPART
        swApp.OpenDoc6 comp1Path, swDocumentTypes_e.swDocPART, swOpenDocOptions_e.swOpenDocOptions_Silent, "", 0, 0
        swApp.DocumentVisible True, swDocumentTypes_e.swDocPART
        
        '现在这个API调用成功了
        Set swComp = swAssy.AddComponent4(comp1Path, "", 0, 0, 0)
        
        Debug.Assert Not swComp Is Nothing
        
        Dim strCompNames(0) As String
        Dim vTransformData As Variant
        Dim vComps As Variant
        strCompNames(0) = comp2Path
        
        vTransformData = swMathUtils.CreateTransform(Empty).ArrayData
        
        '如果使用这种方法，则不需要将文档加载到内存中
        vComps = swAssy.AddComponents(strCompNames, vTransformData)
    
        Debug.Assert UBound(vComps) <> 1
        
    Else
        
        MsgBox "请打开或创建装配体"
        
    End If

End Sub


~~~