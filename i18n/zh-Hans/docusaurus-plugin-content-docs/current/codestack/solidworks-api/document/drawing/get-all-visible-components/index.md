---
title:  使用SOLIDWORKS API获取绘图视图中的所有可见组件
caption: 获取所有可见组件
---
 使用SOLIDWORKS API获取绘图视图中的所有可见组件（包括子装配件）的VBA宏
image: drawing-view-feature-tree.png
labels: [可见组件, 绘图视图]
---
![绘图视图特征树](drawing-view-feature-tree.png){ width=350 }

这个VBA宏使用SOLIDWORKS API从选定的绘图视图中提取所有可见组件。该宏将提取所有类型的组件（零件组件和装配组件）。

[IView::GetVisibleComponents](https://help.solidworks.com/2013/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iview~getvisiblecomponents.html) SOLIDWORKS API方法只提取零件组件（即sldprt文件），而所有子装配组件都不会被返回。此外，此函数返回的[IComponent2](https://help.solidworks.com/2017/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IComponent2.html)接口指针是绘图上下文组件。[IComponent2::GetParent](https://help.solidworks.com/2016/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icomponent2~getparent.html) SOLIDWORKS API方法对于所有组件都返回Nothing，这意味着无法找到父子装配。

下面的代码解决了这些限制，并返回其装配文档上下文中的所有组件。

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim swView As SldWorks.view
        Set swView = swModel.SelectionManager.GetSelectedObjectsDrawingView2(1, -1)
        
        If Not swView Is Nothing Then
            
            Dim vComps As Variant
            vComps = GetAllVisibleComponents(swView)
            
            If Not IsEmpty(vComps) Then
                
                Dim i As Integer
                Dim swComp As SldWorks.Component2
                
                For i = 0 To UBound(vComps)
                    Set swComp = vComps(i)
                    Debug.Print swComp.Name2
                Next
            End If
            
        Else
            MsgBox "请选择绘图视图"
        End If
    Else
        MsgBox "请打开模型"
    End If
    
End Sub

Function GetAllVisibleComponents(view As SldWorks.view) As Variant
        
    Dim swRootModel As SldWorks.ModelDoc2
    Set swRootModel = view.RootDrawingComponent.Component.GetModelDoc2
    
    Dim vComps As Variant
    vComps = view.GetVisibleComponents()
            
    Dim swAllComps() As SldWorks.Component2
    Dim isInit As Boolean
    
    Dim i As Integer
    
    For i = 0 To UBound(vComps)
        
        Dim swComp As SldWorks.Component2
        Set swComp = vComps(i)
        
        Dim swCorrComp As SldWorks.Component2
        Set swCorrComp = GetCorrespondingComponent(swRootModel, swComp)
            
        While Not swCorrComp Is Nothing
                                    
            Dim add As Boolean
            add = False

            If Not isInit Then
                ReDim swAllComps(0)
                isInit = True
                add = True
            Else
                If Not Contains(swAllComps, swCorrComp) Then
                    ReDim Preserve swAllComps(UBound(swAllComps) + 1)
                    add = True
                End If
            End If

            If add Then
                Set swAllComps(UBound(swAllComps)) = swCorrComp
            End If
            
            Set swCorrComp = swCorrComp.GetParent

        Wend
        
    Next
    
    GetAllVisibleComponents = swAllComps
    
End Function

Function GetCorrespondingComponent(assy As SldWorks.AssemblyDoc, swDrawComp As SldWorks.Component2) As SldWorks.Component2
        
    Dim name As String
    name = swDrawComp.Name2
    
    Dim vNameParts As Variant
    vNameParts = Split(name, "/")
    
    Dim swComp As SldWorks.Component2
    
    Dim swCompFeat As SldWorks.Feature
    
    Dim i As Integer
    i = 0
    
    While swCompFeat Is Nothing
        Set swCompFeat = assy.FeatureByName(vNameParts(i))
        i = i + 1
    Wend
    
    Set swComp = swCompFeat.GetSpecificFeature2
    
    For i = i To UBound(vNameParts)
                
        Set swCompFeat = swComp.FeatureByName(vNameParts(i))
        
        If swCompFeat Is Nothing Then
            Set GetComponentByName = Nothing
            Exit Function
        End If
        
        Set swComp = swCompFeat.GetSpecificFeature2
        
    Next
    
    Set GetCorrespondingComponent = swComp
    
End Function

Function Contains(vArr As Variant, item As Object) As Boolean
    
    Dim i As Integer
    
    For i = 0 To UBound(vArr)
        If vArr(i) Is item Then
            Contains = True
            Exit Function
        End If
    Next
    
    Contains = False
    
End Function
~~~