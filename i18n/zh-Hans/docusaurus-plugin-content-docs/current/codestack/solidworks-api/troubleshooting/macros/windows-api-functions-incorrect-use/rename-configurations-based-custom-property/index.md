---
layout: sw-tool
title: SOLIDWORKS macro to rename configurations based on custom property
caption: Rename Configurations Based On Custom Property
description: Macro renames all configurations of assembly or part into the value of the specified configuration specific custom property
image: sw-configuration-name.png
labels: [configuration, custom property, rename, solidworks api, utility]
group: Custom Properties
redirect-from:
  - /2018/04/solidworks-api-model-rename-configurations-based-on-custom-prp.html
---
This macro renames all configurations of assembly or part into the value of the specified configuration specific custom property using SOLIDWORKS API.

![Configuration name in the configuration properties manager page](sw-configuration-name.png){ width=200 }

* Run the macro and enter the name of the custom property to read the value from
* Macro will traverse all configurations and rename them based on the corresponding value of the configuration specific custom property
* If property doesn't exist in configuration or value is empty - configuration is not renamed  

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim prpName As String
        
        prpName = InputBox("Specify the property name to read the value from")
        
        If prpName <> "" Then
            
            Dim vConfNames As Variant
            Dim i As Integer
            
            vConfNames = swModel.GetConfigurationNames()
            
            For i = 0 To UBound(vConfNames)
                    
                Dim swConf As SldWorks.Configuration
                Set swConf = swModel.GetConfigurationByName(vConfNames(i))
                
                Dim prpVal As String
                
                If swConf.CustomPropertyManager.Get3(prpName, False, "", prpVal) Then
                    
                    If prpVal <> "" Then
                        swConf.Name = prpVal
                    End If
                    
                End If
                
            Next
            
        End If
        
    Else
        MsgBox "Please open the model"
    End If
    
End Sub
~~~


