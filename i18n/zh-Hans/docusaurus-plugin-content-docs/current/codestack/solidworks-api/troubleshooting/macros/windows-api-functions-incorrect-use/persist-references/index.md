---
title: Using persistent reference id in SOLIDWORKS API to track objects
caption: Persistent Reference Id
description: This article explains the use of persistent reference ids to track any selectable entity across SOLIDWORKS sessions
image: persist-id-array.png
labels: [persistent, reference, tracking]
---
Persistent reference ids available in SOLIDWORKS API allow to retrieve the persistent link to any selectable object in SOLIDWORKS. The main benefit of persistent reference is its life cycle as the reference remains valid across rebuild operations, SOLIDWORKS sessions or even SOLIDWORKS releases.

Persistent reference id is an array of bytes. This array may change for the same reference so it is not possible to compare two arrays to identify if the references are the same. Use [IModelDocExtension::IsSamePersistentID method](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~issamepersistentid.html) to identify if two persist references are the same.

![Array of bytes of persist reference displayed in the watch window of VBA Editor](persist-id-array.png){ width=350 }

Even if array may change for the same entity it is still possible to retrieve the valid pointer to the entity via [IModelDocExtension::GetPersistReference3](https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~getpersistreference3.html) SOLIDWORKS API method.

The following example outputs the persist id of any selected entity into immediate window in the format of base64 string

![Persist reference id converted to base64 string displayed in the immediate window of VBA Editor](immediate-window-persist-id.png)

Use this example to read the id of the entity.

> The id output to immediate Window might contain line break. It should be removed from the id and should be considered as single line string

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim swSelMgr As SldWorks.SelectionMgr
        Set swSelMgr = swModel.SelectionManager
        
        Dim swObj As Object
        Set swObj = swSelMgr.GetSelectedObject6(1, -1)
        
        If Not swObj Is Nothing Then
            Dim vId As Variant
            vId = swModel.Extension.GetPersistReference3(swObj)
            Debug.Print ConvertToBase64String(vId)
        Else
            MsgBox "Please select object to get its persist id"
        End If
        
    Else
        MsgBox "Please open the model"
    End If
    
End Sub

Function ConvertToBase64String(vArr As Variant) As String
    
    Dim xmlDoc As Object
    Dim xmlNode As Object
    
    Set xmlDoc = CreateObject("MSXML2.DOMDocument")
    
    Set xmlNode = xmlDoc.createElement("b64")
    
    xmlNode.DataType = "bin.base64"
    xmlNode.nodeTypedValue = vArr
    
    ConvertToBase64String = xmlNode.Text
    
End Function
~~~



The following example allows to select the object by retrieving its pointer from persist id.

* Copy the id from the previous macro
* Close the sample model
* Reopen the model and run the example.
* Enter the copied id into the box
* The entities selected in previous example is re-selected

~~~ vb
Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim id As String
        id = InputBox("Enter persist id encoded in base64 format")
        
        If id <> "" Then
            
            Dim vId As Variant
            vId = Base64ToArray(id)
            
            Dim swObj As Object
            Dim err As Long
            
            Set swObj = swModel.Extension.GetObjectByPersistReference3(vId, err)
            
            If Not swObj Is Nothing Then
                Dim swSelObj(0) As Object
                Set swSelObj(0) = swObj
                swModel.Extension.MultiSelect2 swSelObj, False, Nothing
            Else
                MsgBox "Failed to get the object by persist reference. Error code " & err & " as defined in swPersistReferencedObjectStates_e"
            End If
            
        End If
        
    Else
        MsgBox "Please open the model"
    End If
    
End Sub

Private Function Base64ToArray(base64 As String) As Variant
    
    Dim xmlDoc As Object
    Dim xmlNode As Object
    
    Set xmlDoc = CreateObject("MSXML2.DOMDocument")
    Set xmlNode = xmlDoc.createElement("b64")
    
    xmlNode.DataType = "bin.base64"
    xmlNode.Text = base64
    
    Base64ToArray = xmlNode.nodeTypedValue
  
End Function
~~~


