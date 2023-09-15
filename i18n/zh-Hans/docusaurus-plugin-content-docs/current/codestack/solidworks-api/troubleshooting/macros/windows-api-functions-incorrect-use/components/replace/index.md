---
layout: sw-tool
title:  使用SOLIDWORKS API替换组件并保留选择
caption: 替换组件
---
 该宏演示了如何使用SOLIDWORKS API替换批量选择的组件，并保留原始选择。
image: replace_components.png
labels: [component, replace, selection]
group: Assembly
---
![在树中替换的组件](replace_components.png){ width=350 }

该宏允许使用SOLIDWORKS API将树中选择的组件替换为指定文件夹中的组件（可选地添加后缀到文件名）。

在管理类似类型的项目时，该功能非常有用，其中一些文件被复制、更新和重命名，并且需要在原始装配中进行替换。

该宏使用了[SOLIDWORKS API中的API Only Selections](/docs/codestack/solidworks-api/document/selection/api-only-selection/)，它允许保留原始选择的组件，避免使用临时集合变量来满足[SOLIDWORKS API方法IAssemblyDoc::ReplaceComponents2](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iassemblydoc~replacecomponents2.html)的要求，该方法要求为每个组件选择替换。

* 修改输入参数。通过*REPLACEMENT_DIR*设置替换零件所在的目录，并可选地使用*SUFFIX*来设置文件名的后缀。

~~~ vb
Const REPLACEMENT_DIR As String = "D:\Assembly\Replacement"
Const SUFFIX As String = "_new"
~~~

* 选择组件
* 运行宏。所有组件都将被替换

~~~ vb
Const REPLACEMENT_DIR As String = "D:\Assembly\Replacement"
Const SUFFIX As String = "_new"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim swAssy As SldWorks.AssemblyDoc
        Set swAssy = swModel
        
        Dim swSelMgr As SldWorks.SelectionMgr
        Set swSelMgr = swModel.SelectionManager
        
        Dim i As Integer
        
        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)
            
            If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelCOMPONENTS Then
                
                Dim swComp As SldWorks.Component2
                Set swComp = swSelMgr.GetSelectedObject6(i, -1)
                
                Debug.Print swSelMgr.SuspendSelectionList
                
                swSelMgr.AddSelectionListObject swComp, Nothing
                
                swAssy.ReplaceComponents2 GetReplacementPath(swComp), swComp.ReferencedConfiguration, False, swReplaceComponentsConfiguration_e.swReplaceComponentsConfiguration_MatchName, True
                    
                swSelMgr.ResumeSelectionList
                
            End If
        Next
        
    Else
        MsgBox ("请打开装配文档")
    End If
    
End Sub

Function GetReplacementPath(comp As SldWorks.Component2)
    
    Dim replFilePath As String
    
    Dim compPath As String
    compPath = comp.GetPathName()
                
    Dim dir As String
    dir = REPLACEMENT_DIR
    
    If Right(dir, 1) <> "\" Then
        dir = dir & "\"
    End If
    
    Dim fileName As String
    fileName = Right(compPath, Len(compPath) - InStrRev(compPath, "\"))
    
    If SUFFIX <> "" Then
        
        Dim ext As String
        
        ext = Right(fileName, Len(".SLDXXX"))
        
        fileName = Left(fileName, Len(fileName) - Len(ext)) & SUFFIX & ext
        
    End If
    
    replFilePath = dir & fileName
                
    GetReplacementPath = replFilePath
    
End Function
~~~