---
layout: sw-tool
caption: 添加显示数据标记
title:  将显示数据标记添加到主SOLIDWORKS装配使用的配置的宏
---
 用于在大型装配的大型设计审查模式或eDrawings中支持配置的VBA宏
image: display-data-mark.svg
group: Assembly
---
这个VBA宏对于在大型设计审查模式下使用装配的用户或需要在eDrawings中支持配置的用户非常有用。

默认情况下，只有活动配置被保留用于使用大型设计审查模式，而装配的其他配置无法被激活：

![装配配置中没有显示标记](configuration-no-display-marks.png)

该宏将遍历根装配的所有组件，找到所有使用的配置，并为所有配置添加显示标记数据。

![添加显示数据标记命令](add-display-data-mark.png)

这将允许在大型设计审查模式下打开所有子组件并激活使用的配置。

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
            
    Dim swAssy As SldWorks.AssemblyDoc
    Set swAssy = swApp.ActiveDoc
    
    If Not swAssy Is Nothing Then
    
        Dim vComps As Variant
        vComps = CollectSelectedComponents(swAssy)
        
        If IsEmpty(vComps) Then
            vComps = swAssy.GetComponents(False)
        End If
        
        Dim files As Object
        Set files = CollectFilesNeedDisplayMarks(vComps, swAssy.GetPathName)
        
        For Each filePath In files.Keys
            Dim vConfNames As Variant
            vConfNames = files.item(filePath)
            AddDisplayMarks CStr(filePath), vConfNames
        Next
    
    Else
        Err.Raise vbError, "", "打开装配"
    End If
    
End Sub

Function CollectSelectedComponents(model As SldWorks.ModelDoc2) As Variant
    
    Dim i As Integer
    
    Dim swSelMgr As SldWorks.SelectionMgr
    Set swSelMgr = model.SelectionManager
    
    Dim swComps() As SldWorks.Component2
    Dim isInit As Boolean
    
    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)
        
        If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelCOMPONENTS Then
            
            Dim swComp As SldWorks.Component2
            Set swComp = swSelMgr.GetSelectedObject6(i, -1)
            
            If Not isInit Then
                isInit = True
                ReDim swComps(0)
            Else
                ReDim Preserve swComps(UBound(swComps) + 1)
            End If
            
            Set swComps(UBound(swComps)) = swComp
            
        End If
    Next
    
    If isInit Then
        CollectSelectedComponents = swComps
    Else
        CollectSelectedComponents = Empty
    End If
    
End Function

Function CollectFilesNeedDisplayMarks(comps As Variant, rootDocPath As String) As Object
    
    Dim files As Object
    Set files = CreateObject("Scripting.Dictionary")
    
    Dim i As Integer
    
    For i = 0 To UBound(comps)
        
        Dim swComp As SldWorks.Component2
        Set swComp = comps(i)
        
        Dim filePath As String
        filePath = ResolveReferencePath(rootDocPath, swComp.GetPathName())
        
        If Dir(filePath) <> "" Then
        
            Dim refConfName As String
            refConfName = swComp.ReferencedConfiguration
            
            Dim activeConfName As String
            activeConfName = swApp.GetActiveConfigurationName(swComp.GetPathName())
            
            Dim confNames() As String
            
            If LCase(refConfName) <> LCase(activeConfName) Then
                If files.Exists(LCase(filePath)) Then
                    confNames = files(LCase(filePath))
                    If Not Contains(confNames, refConfName) Then
                        ReDim Preserve confNames(UBound(confNames) + 1)
                        confNames(UBound(confNames)) = refConfName
                        files(LCase(filePath)) = confNames
                    End If
                Else
                    ReDim confNames(0)
                    confNames(0) = refConfName
                    files.Add LCase(filePath), confNames
                End If
            End If
        Else
            Debug.Print "无法解析组件 " & swComp.Name2 & " 路径: " & filePath
        End If
        
    Next
    
    Set CollectFilesNeedDisplayMarks = files
    
End Function

Function Contains(arr() As String, item As String) As Boolean
    
    Dim i As Integer
    
    For i = 0 To UBound(arr)
        If LCase(arr(i)) = LCase(item) Then
            Contains = True
            Exit Function
        End If
    Next
    
    Contains = False
    
End Function

Sub AddDisplayMarks(filePath As String, confNames As Variant)
    
    Debug.Print "为 " & filePath & " 添加显示标记"
    
    Dim swModel As SldWorks.ModelDoc2
    Dim swDocSpec As SldWorks.DocumentSpecification
    
    Set swDocSpec = swApp.GetOpenDocSpec(filePath)
    
    swDocSpec.LightWeight = False
    swDocSpec.ViewOnly = False
    swDocSpec.Silent = True
    
    Set swModel = swApp.OpenDoc7(swDocSpec)
    
    If Not swModel Is Nothing Then
    
        Set swModel = swApp.ActivateDoc3(swModel.GetTitle(), False, swRebuildOnActivation_e.swDontRebuildActiveDoc, -1)
        
        If Not swModel Is Nothing Then
        
            Dim i As Integer
            
            For i = 0 To UBound(confNames)
                Dim swConf As SldWorks.Configuration
                Set swConf = swModel.GetConfigurationByName(CStr(confNames(i)))
                swConf.LargeDesignReviewMark = True
            Next
            
            swModel.ForceRebuild3 False
            
            swModel.Save3 swSaveAsOptions_e.swSaveAsOptions_Silent, 0, 0
            
            swApp.CloseDoc swModel.GetTitle
        
        Else
            Debug.Print "无法激活文档: " & filePath
        End If
        
    Else
        Debug.Print "无法打开文档: " & filePath
    End If

End Sub

Function ResolveReferencePath(rootDocPath As String, refPath As String) As String
    
    Dim pathParts As Variant
    pathParts = Split(refPath, "\")
    
    Dim rootFolder As String
    rootFolder = rootDocPath
    rootFolder = Left(rootFolder, InStrRev(rootFolder, "\") - 1)

    Dim i As Integer
    
    Dim curRelPath As String
    
    For i = UBound(pathParts) To 1 Step -1
        
        curRelPath = pathParts(i) & IIf(curRelPath <> "", "\", "") & curRelPath
        Dim path As String
        path = rootFolder & "\" & curRelPath
        
        If Dir(path) <> "" Then
            ResolveReferencePath = path
            Exit Function
        End If
        
    Next
    
    ResolveReferencePath = refPath
    
End Function
~~~



另一个版本的宏仅处理活动零件或装配的配置，并添加显示数据标记

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
            
        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Or swModel.GetType() = swDocumentTypes_e.swDocPART Then
            
            Dim vConfNames As Variant
            vConfNames = swModel.GetConfigurationNames
            
            Dim i As Integer
            
            For i = 0 To UBound(vConfNames)
                Dim swConf As SldWorks.Configuration
                Set swConf = swModel.GetConfigurationByName(CStr(vConfNames(i)))
                swConf.LargeDesignReviewMark = True
            Next
            
            swModel.ForceRebuild3 False
            
        Else
            Err.Raise vbError, "", "仅支持装配和零件"
        End If
        
    Else
        Err.Raise vbError, "", "没有打开的文件"
    End If
    
End Sub
~~~