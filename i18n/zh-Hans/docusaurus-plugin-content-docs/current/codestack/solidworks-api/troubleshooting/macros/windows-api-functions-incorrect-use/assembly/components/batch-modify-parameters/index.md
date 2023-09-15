---
title:  使用SOLIDWORKS API修改组件的配置参数
caption: 修改多个组件的配置参数
---
 该示例演示了如何使用SOLIDWORKS API修改指定配置（例如抑制状态）中多个组件的参数。不需要激活配置或选择任何组件即可使用宏。
image: modify-configurations.png
labels: [参数, 设计表, 组件, 配置]
---
![在配置中修改组件参数](modify-configurations.png){ width=350 }

该示例演示了如何使用参数（类似于设计表参数）来抑制除活动配置之外的所有配置中的所有组件，使用SOLIDWORKS API。不需要激活配置或选择任何组件即可使用宏。

可以批量修改多个组件以提高性能。

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swAssy As SldWorks.AssemblyDoc
    
    Set swAssy = swApp.ActiveDoc
    
    If Not swAssy Is Nothing Then
        
        Dim vConfNames As Variant
        vConfNames = GetOtherConfigurations(swAssy)
        
        If Not IsEmpty(vConfNames) Then
        
            Dim vComps As Variant
            vComps = swAssy.GetComponents(True)
            
            Dim i As Integer
            
            Dim paramNames() As String
            Dim paramValues() As String
            
            ReDim paramNames(UBound(vComps))
            ReDim paramValues(UBound(vComps))
            
            For i = 0 To UBound(vComps)
                    
                Dim swComp As SldWorks.Component2
                Set swComp = vComps(i)
                
                Dim instId As Integer
                Dim compName As String
                compName = swComp.Name2
                instId = CInt(Right(compName, Len(compName) - InStrRev(compName, "-")))
                compName = Left(compName, InStrRev(compName, "-") - 1)
                
                paramNames(i) = "$STATE@" & compName & "<" & instId & ">"
                paramValues(i) = "S"
                                
            Next
            
            For i = 0 To UBound(vConfNames)
                
                Dim swConfMgr As SldWorks.ConfigurationManager
                Set swConfMgr = swAssy.ConfigurationManager
                
                If False = swConfMgr.SetConfigurationParams(CStr(vConfNames(i)), (paramNames), (paramValues)) Then
                    MsgBox "Failed to set configuration parameters for " & CStr(vConfNames(i))
                End If
                
            Next
            
        Else
            MsgBox "There is no other configurations in the assembly"
        End If
    
    Else
        MsgBox "Please open assembly"
    End If
    
End Sub

Function GetOtherConfigurations(model As SldWorks.ModelDoc2) As Variant
    
    Dim vAllConfs As Variant
    vAllConfs = model.GetConfigurationNames()
    
    If UBound(vAllConfs) > 0 Then
        
        Dim confs() As String
        ReDim confs(UBound(vAllConfs) - 1)
        
        Dim curIndex As Integer
        curIndex = 0
        
        Dim activeConf As String
        activeConf = model.ConfigurationManager.ActiveConfiguration.Name
        
        Dim i As Integer
        
        For i = 0 To UBound(vAllConfs)
            If LCase(vAllConfs(i)) <> LCase(activeConf) Then
                confs(curIndex) = vAllConfs(i)
                curIndex = curIndex + 1
            End If
        Next
        
        GetOtherConfigurations = confs
        
    Else
        GetOtherConfigurations = Empty
    End If
    
End Function
~~~