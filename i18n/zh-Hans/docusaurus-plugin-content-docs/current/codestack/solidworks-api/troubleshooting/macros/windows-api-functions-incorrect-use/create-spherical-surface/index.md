---
title: 使用SOLIDWORKS模型API创建临时球面片体
caption: 创建临时球面片体
description: 该示例演示了如何使用SOLIDWORKS API从球面创建片体。
image: spherical-surface.png
labels: [拓扑结构, 几何, 片体, 模型, 球体]
---
![球面片体](spherical-surface.png)

该示例演示了如何使用SOLIDWORKS API从球面创建片体。

几何体是使用[SOLIDWORKS API的IModeler::CreateSphericalSurface2](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler~createsphericalsurface2.html)方法创建的。

运行宏，临时片体将显示出来。可以旋转和选择该片体，但它不会显示在特征树中。继续执行宏以销毁该片体。

~~~ vb
Const RADIUS As Double = 0.01

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swPart As SldWorks.PartDoc
    
    Set swPart = swApp.ActiveDoc
    
    If Not swPart Is Nothing Then
    
        Dim swModeler As SldWorks.Modeler
        Set swModeler = swApp.GetModeler
        
        Dim dCenter(2) As Double
        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0
        
        Dim dAxis(2) As Double
        dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1
        
        Dim dRef(2) As Double
        dRef(0) = 1: dRef(1) = 0: dRef(2) = 0
        
        Dim swSurf As SldWorks.Surface
        
        Set swSurf = swModeler.CreateSphericalSurface2(dCenter, dAxis, dRef, RADIUS)
                
        Dim swBody As SldWorks.Body2
        
        '完整球体
        Set swBody = swSurf.CreateTrimmedSheet4(Empty, True)
        
        swBody.Display3 swPart, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectable
        
        Stop '继续隐藏片体
        
        Set swBody = Nothing
    Else
        MsgBox "请打开零件文档"
    End If
	
End Sub
~~~