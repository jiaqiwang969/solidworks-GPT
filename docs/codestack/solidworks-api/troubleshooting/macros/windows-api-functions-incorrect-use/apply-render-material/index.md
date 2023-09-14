---
caption: Apply Render Materia;
title: Generate material variants configuration using SOLIDWORKS API
description: VBA macro to generate a series of configuration with a custom appearance
image: configurations.png
---
![Generated configurations](configurations.png)

This VBA macro generates a series of configurations corresponding to the material variant of the model.

Macro will assign the name of the configuration based on the file name and specified suffix.

Macro will create a configuration specific property which is based on the file specific property and the name of the color. 

Macro will not generate new display states and assumes that the *Link display states to configuration colors* option is selected so display state is attached to the configuration.

![Link display states to configuration colors](link-display-states-configuration.png)

## Configuration

Specify the name of the property to create

~~~ vb
Const PRP_NAME As String = "Description"
~~~

Configure the input parameters for the configuration by modifying the **CONFIGS_DATA** array

Set the size of the array to be equal to number of total instances - 1, e.g. 4 for 5 instances or 0 for 1 instance

~~~ vb
Dim CONFIGS_DATA(0) As ConfigData

CONFIGS_DATA(0).colorName = "MyColor"
CONFIGS_DATA(0).ConfigNameSuffix = "-9"
CONFIGS_DATA(0).MaterialFilePath = "D:\my-color.p2m"
~~~

* colorName - name of the color to be written as the suffix to the custom property
* ConfigNameSuffix - suffix name of the configuration, can be empty (in this case the configuration will be named after the file)
* MaterialFilePath - full path to the *.p2m* file to apply as appearance. If empty current appearance is preserved

Macro will create new configuration for all instances starting from second. First instance will be skipped and active configuration will be used for the process (e.g. renamed and painted).

~~~ vb
Type ConfigData
    MaterialFilePath As String
    ConfigNameSuffix As String
    colorName As String
End Type

Const PRP_NAME As String = "Description"

Dim swApp As SldWorks.SldWorks

Sub main()
    
    Dim CONFIGS_DATA(4) As ConfigData

    CONFIGS_DATA(0).colorName = "Unpainted"
    CONFIGS_DATA(0).ConfigNameSuffix = "-9"
    CONFIGS_DATA(0).MaterialFilePath = ""

    CONFIGS_DATA(1).colorName = "RED"
    CONFIGS_DATA(1).ConfigNameSuffix = ""
    CONFIGS_DATA(1).MaterialFilePath = "C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\data\graphics\Materials\red.p2m"

    CONFIGS_DATA(2).colorName = "GREEN"
    CONFIGS_DATA(2).ConfigNameSuffix = "-1"
    CONFIGS_DATA(2).MaterialFilePath = "C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\data\graphics\Materials\green.p2m"

    CONFIGS_DATA(3).colorName = "BLUE"
    CONFIGS_DATA(3).ConfigNameSuffix = "-2"
    CONFIGS_DATA(3).MaterialFilePath = "C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\data\graphics\Materials\blue.p2m"

    CONFIGS_DATA(4).colorName = "YELLOW"
    CONFIGS_DATA(4).ConfigNameSuffix = "-3"
    CONFIGS_DATA(4).MaterialFilePath = "C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\data\graphics\Materials\yellow.p2m"

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    Dim i As Integer
    
    For i = 0 To UBound(CONFIGS_DATA)
        
        Dim confName As String
        
        confName = GetFileNameWithoutExtension(swModel.GetPathName())
        
        If CONFIGS_DATA(i).ConfigNameSuffix <> "" Then
            confName = confName & CONFIGS_DATA(i).ConfigNameSuffix
        End If
        
        If i <> 0 Then
            swModel.AddConfiguration3 confName, "", "", 0
        End If
        
        swModel.ConfigurationManager.ActiveConfiguration.Name = confName
        
        If CONFIGS_DATA(i).MaterialFilePath <> "" Then
            AddRenderMaterial swModel, CONFIGS_DATA(i).MaterialFilePath
        End If
        
        AddConfigProperty swModel, CONFIGS_DATA(i).colorName
        
    Next

End Sub

Sub AddRenderMaterial(model As SldWorks.ModelDoc2, path As String)
    
    Dim swRenderMaterial As SldWorks.RenderMaterial
    Set swRenderMaterial = model.Extension.CreateRenderMaterial(path)
    
    If False <> swRenderMaterial.AddEntity(model) Then
        If False = model.Extension.AddDisplayStateSpecificRenderMaterial(swRenderMaterial, swDisplayStateOpts_e.swThisDisplayState, Empty, -1, -1) Then
            Err.Raise vbError, "", "Failed to apply render material to display state"
        End If
    Else
        Err.Raise vbError, "", "Failed to add model as entity to render material"
    End If
   
End Sub

Sub AddConfigProperty(model As SldWorks.ModelDoc2, colorName As String)
    
    Dim swCustPrpMgr As SldWorks.CustomPropertyManager
    
    Set swCustPrpMgr = model.Extension.CustomPropertyManager("")
    
    Dim prpVal As String
    
    swCustPrpMgr.Get4 PRP_NAME, False, "", prpVal
    
    Set swCustPrpMgr = model.ConfigurationManager.ActiveConfiguration.CustomPropertyManager
    
    swCustPrpMgr.Add3 PRP_NAME, swCustomInfoType_e.swCustomInfoText, prpVal & " - " & colorName, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue

End Sub

Function GetFileNameWithoutExtension(filePath As String) As String
    GetFileNameWithoutExtension = Mid(filePath, InStrRev(filePath, "\") + 1, InStrRev(filePath, ".") - InStrRev(filePath, "\") - 1)
End Function
~~~

