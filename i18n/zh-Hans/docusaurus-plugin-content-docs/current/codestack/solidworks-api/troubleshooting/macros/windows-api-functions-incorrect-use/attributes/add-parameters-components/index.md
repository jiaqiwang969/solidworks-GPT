---
title: Add and read attributes with parameters to components using SOLIDWORKS API
caption: Add Attributes With Parameters To Components And Read Values
description: Example adds attributes with string values as the parameters to the selected components
image: two-attributes-features-tree.png
labels: [attributes, data, definition, example, instance, properties, storage]
redirect-from:
  - /2018/03/add-attributes-with-parameters-to.html
---
This example adds attributes with string values as the parameters to the selected components via [IAttributeDef](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iattributedef.html) SOLIDWORKS API interface. Rebuilds the model and reads the attributes back by finding them with [IComponent2::FindAttribute](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IComponent2~FindAttribute.html) method.

Attributes are lightweight features which can be attached to SOLIDWORKS entities and store the custom data.

![Two attributes features created in the Feature Manager Tree using SOLIDWORKS API](two-attributes-features-tree.png){ width=301 height=320 }

~~~ vb
Enum CreateAtttributeOptions_e
    Visible = 0
    Hidden = 1
End Enum

Dim swApp As SldWorks.SldWorks
Dim swSelMgr As SldWorks.SelectionMgr
Dim swAssy As SldWorks.AssemblyDoc
Dim swAttDef As SldWorks.AttributeDef

Const ATT_DEF_NAME As String = "SampleAtt"
Const ATT_PARAM_NAME As String = "RefData"

Sub main()

    Set swApp = Application.SldWorks
    
    Set swAttDef = swApp.DefineAttribute(ATT_DEF_NAME)
    
    'add single string parameter
    swAttDef.AddParameter ATT_PARAM_NAME, swParamType_e.swParamTypeString, 0, 0

    If False = swAttDef.Register Then
        MsgBox "Failed to register attribute"
        End
    End If
    
    Set swAssy = swApp.ActiveDoc
    
    Set swSelMgr = swAssy.SelectionManager
    
    'Create attributes for all selected components
    AddAttributes
    
    swAssy.EditRebuild
    
    'reading the data from attributes
    ReadAttributes
    
End Sub

Sub AddAttributes()
    
    Dim swComp As SldWorks.Component2
    Dim swAtt As SldWorks.Attribute
    Dim i As Integer
    
    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)

        Set swComp = swSelMgr.GetSelectedObjectsComponent3(i, -1)
        
        If Not swComp Is Nothing Then
            
            Set swAtt = swAttDef.CreateInstance5(swAssy, swComp, ATT_DEF_NAME & i, CreateAtttributeOptions_e.Visible, swInConfigurationOpts_e.swAllConfiguration)

            Dim swParam As SldWorks.Parameter

            Set swParam = swAtt.GetParameter(ATT_PARAM_NAME)
            
            swParam.SetStringValue2 "Data for " & swComp.Name2 & " at index " & i, swInConfigurationOpts_e.swAllConfiguration, ""
            
        End If
        
    Next
    
End Sub

Sub ReadAttributes()
    
    Dim swComp As SldWorks.Component2
    Dim swAtt As SldWorks.Attribute
    Dim i As Integer
    
    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)

        Set swComp = swSelMgr.GetSelectedObjectsComponent3(i, -1)
        
        If Not swComp Is Nothing Then
            
            Dim j As Integer

            For j = 0 To 10
            
                Set swAtt = swComp.FindAttribute(swAttDef, j)
                
                If Not swAtt Is Nothing Then
                    
                    Set swParam = swAtt.GetParameter(ATT_PARAM_NAME)
                    Debug.Print swParam.GetStringValue()
                    
                End If
            
            Next
            
        End If
        
    Next

End Sub


~~~


