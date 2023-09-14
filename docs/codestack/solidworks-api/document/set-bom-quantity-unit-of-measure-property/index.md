---
title: Set BOM Quantity (Unit Of Measure) property using SOLIDWORKS API
caption: Set BOM Quantity (Unit Of Measure) Property In The Model
description: Example demonstrates how to modify the BOM quantity field in the properties dialog
image: bom-quantity-property.png
labels: [bom quantity, example, qty, unit of measure]
redirect-from:
  - /2018/03/set-bom-quantity-unit-of-measure.html
---
This example demonstrates how to modify the BOM quantity field in the properties dialog using SOLIDWORKS API.

![Option to specify the property linked to Unit Of Measure](bom-quantity-property.png){ width=640 height=170 }

This option allows overwriting the quantity value of the component in the BOM table

![Bill Of Materials table displaying the altered quantity of the components](bom-table-unit-of-measure.png){ width=640 }

In order to change this property it is required to set the hidden *UNIT_OF_MEASURE* custom property via [ICustomPropertyManager](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.icustompropertymanager.html) SOLIDWORKS API interface.

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Const BOM_QTY_PRP_NAME As String = "UNIT_OF_MEASURE"
Const QTY_PRP_NAME As String = "Qty"

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Dim swCustPrpMgr As SldWorks.CustomPropertyManager
        
        Set swCustPrpMgr = swModel.Extension.CustomPropertyManager("")
            
        Dim bomQtyPrp As String
        swCustPrpMgr.Get3 BOM_QTY_PRP_NAME, False, "", bomQtyPrp
        
        Debug.Print bomQtyPrp
        
        swCustPrpMgr.Add2 BOM_QTY_PRP_NAME, swCustomInfoType_e.swCustomInfoText, QTY_PRP_NAME
        swCustPrpMgr.Set2 BOM_QTY_PRP_NAME, QTY_PRP_NAME
    
    Else
        
        MsgBox "Please open model"
        
    End If
    
End Sub
~~~


