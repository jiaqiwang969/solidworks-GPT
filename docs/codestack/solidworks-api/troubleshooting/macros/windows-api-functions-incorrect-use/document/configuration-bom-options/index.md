---
caption: Set Configuration BOM Options
title: Macro to change the Bill Of Materials options (Part Number source and children visibility) of SOLIDWORKS configuration
description: VBA macro which changes the Bill Of Materials part number source (configuration name, document name, parent name) and children display (show, hide, promote) options for all or active configuration in SOLIDWORKS document
image: configuration-options.png
---
This VBA macro allows to change the options of the configuration regarding the processing in the Bill Of Materials

* Part Number Source
    * Configuration name
    * Document name
    * Parent name
* Children Components Display
    * Show
    * Hide
    * Promote

![Configuration options Property Manager Page](configuration-options.png)

Macro can process active configuration only or all configurations

Configure the macro by changing its constants

Specify -1 for **PART_NUMBER_SRC** or **CHILD_COMPS_DISP** options to keep original values or new value to override

~~~ vb
Const ALL_CONFIGS As Boolean = True 'True to process all configurations, False to process active configuration only
Const PART_NUMBER_SRC As Integer = swBOMPartNumberSource_e.swBOMPartNumber_ConfigurationName 'Part number source: -1 to keep as is or swBOMPartNumberSource_e.swBOMPartNumber_ConfigurationName, swBOMPartNumberSource_e.swBOMPartNumber_DocumentName or swBOMPartNumberSource_e.swBOMPartNumber_ParentName
Const CHILD_COMPS_DISP As Integer = swChildComponentInBOMOption_e.swChildComponent_Promote 'Display of components in BOM: -1 to keep as is or swChildComponentInBOMOption_e.swChildComponent_Show, swChildComponentInBOMOption_e.swChildComponent_Hide or swChildComponentInBOMOption_e.swChildComponent_Promote
~~~

~~~ vb
Const ALL_CONFIGS As Boolean = True
Const PART_NUMBER_SRC As Integer = swBOMPartNumberSource_e.swBOMPartNumber_ConfigurationName
Const CHILD_COMPS_DISP As Integer = swChildComponentInBOMOption_e.swChildComponent_Promote

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If swModel Is Nothing Then
        Err.Raise vbError, "", "Open document"
    End If
    
    If swModel.GetType() = swDocumentTypes_e.swDocDRAWING Then
        Err.Raise vbError, "", "Drawings are not supported"
    End If
    
    If ALL_CONFIGS Then
        
        Dim vConfNames As Variant
        
        vConfNames = swModel.GetConfigurationNames
        Dim i As Integer
        
        For i = 0 To UBound(vConfNames)
            Dim swConf As SldWorks.Configuration
            Set swConf = swModel.GetConfigurationByName(CStr(vConfNames(i)))
            SetConfigurationBomOptions swConf
        Next
        
    Else
        SetConfigurationBomOptions swModel.ConfigurationManager.ActiveConfiguration
    End If
    
End Sub

Sub SetConfigurationBomOptions(config As SldWorks.Configuration)
    
    If CHILD_COMPS_DISP <> -1 Then
        config.ChildComponentDisplayInBOM = CHILD_COMPS_DISP
    End If
    
    If PART_NUMBER_SRC <> -1 Then
        config.BOMPartNoSource = PART_NUMBER_SRC
    End If
    
End Sub
~~~

