---
title: Move design table object using SOLIDWORKS API
caption: Move Design Table OLE Object
description: Example demonstrates how to resize and move the design table OLE object in the model graphics area
image: design-table-ole-object.png
labels: [adornment, boundary, design table, example, move, ole object, solidworks api]
redirect-from:
  - /2018/03/move-design-table-ole-object.html
---
This example demonstrates how to resize and move the design table OLE object in the graphics area using [ISwOLEObject::Boundaries](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iswoleobject~boundaries.html) SOLIDWORKS API method.

![Design Table OLE object in the graphics area](design-table-ole-object.png){ width=640 height=226 }

In this example an existing design table element will be moved to the right on the distance equals to object's width

~~~ vb
Const DESIGN_TABLE_CLSID As String = "{00020830-0000-0000-C000-000000000046}"

Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks

    Set swModel = swApp.ActiveDoc
            
    If Not swModel Is Nothing Then
                
        Dim vOleObjs As Variant
        vOleObjs = swModel.Extension.GetOLEObjects(swOleObjectOptions_e.swOleObjectOptions_GetAll)
        
        Dim i As Integer
        
        Dim isDesTableFound As Boolean
        
        For i = 0 To UBound(vOleObjs)
            
            Dim swOleObj As SldWorks.SwOLEObject
            Set swOleObj = vOleObjs(i)
            
            If swOleObj.Clsid = DESIGN_TABLE_CLSID Then
                
                isDesTableFound = True
                
                Dim vBounds As Variant
                vBounds = swOleObj.Boundaries
                
                Dim width As Double
                                
                width = vBounds(3) - vBounds(0)
                                
                Dim newBounds(6) As Double
                newBounds(0) = vBounds(0) + width: newBounds(1) = vBounds(1): newBounds(2) = 0
                newBounds(3) = vBounds(3) + width * 2: newBounds(4) = vBounds(4): newBounds(5) = 0
    
                swOleObj.Boundaries = newBounds
                
            End If
            
        Next
        
        If Not isDesTableFound Then
            MsgBox "Design table is not found in this model"
        End If
    
    Else
        
        MsgBox "Please open the model with design table"
        
    End If
    
End Sub
~~~


