---
title: Select Named Entity (face, edge or vertex) using SOLIDWORKS API
caption: Select Named Entity
description: Select named entity (face, edge or vertex) in part, assembly (from component) or drawing (from view) using SOLIDWORKS API
image: face-name.png
labels: [face,edge,vertex,name,selection]
---
This example demonstrates how to select a named entity (face, edge or vertex) in the different document types using SOLIDWORKS API.

Named entity can be only defined in the part document by selecting corresponding face or edge:

![Face properties command in context menu](face-properties.png){ width=250 }

Name can be set in the displayed dialog and it is unique per part.

![Face name dialog](face-name.png){ width=250 }

Pointer to the entity can be retrieved via [IPartDoc::GetEntityByName](https://help.solidworks.com/2014/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartDoc~GetEntityByName.html) SOLIDWORKS API method.

This example enhances the functionality and also allows to select entity by name in drawing (from the selected drawing view) or assembly (from the selected component of part).

Modify the value of the *ENT_NAME* constant to define different name and change the value of *entType* argument if edge or vertex needs to be selected

~~~ vb
Const ENT_NAME As String = "MyEdge1"
SelectNamedEntity swParentObject, ENT_NAME, NamedEntityType_e.Edge
~~~

~~~ vb
Enum NamedEntityType_e
    Face
    Edge
    Vertex
End Enum

Const ENT_NAME As String = "Face1"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        
        Dim swParentObject As Object
        
        If swModel.GetType() = swDocumentTypes_e.swDocPART Then
            Set swParentObject = swModel
        Else
            Set swParentObject = swModel.SelectionManager.GetSelectedObject6(1, -1)
        End If
                
        SelectNamedEntity swParentObject, ENT_NAME, NamedEntityType_e.Face
        
    Else
        MsgBox "Please open model"
    End If
    
End Sub

Sub SelectNamedEntity(parent As Object, name As String, entType As NamedEntityType_e)
    
    Dim swEnt As SldWorks.Entity
    Set swEnt = GetNamedEntity(parent, name, entType)
    
    If TypeOf parent Is SldWorks.View Then
        Dim swView As SldWorks.View
        Set swView = parent
        swView.SelectEntity swEnt, False
    Else
        swEnt.Select4 False, Nothing
    End If
    
End Sub

Function GetNamedEntity(parent As Object, name As String, entType As NamedEntityType_e) As SldWorks.Entity
    
    Dim swEnt As SldWorks.Entity
    
    If parent Is Nothing Then
        Err.Raise vbError, "", "Entity parent is not specified (open part or select drawing view or component in assembly or drawing"
    ElseIf TypeOf parent Is SldWorks.PartDoc Then
        Set swEnt = GetNamedEntityFromPartDoc(parent, name, entType)
    ElseIf TypeOf parent Is SldWorks.Component2 Then
        Dim swComp As SldWorks.Component2
        Set swComp = parent
        Set swEnt = GetNamedEntityFromPartDoc(swComp.GetModelDoc2(), name, entType)
        Set swEnt = swComp.GetCorresponding(swEnt)
    ElseIf TypeOf parent Is SldWorks.View Then
        Dim swView As SldWorks.View
        Set swView = parent
        Set swEnt = GetNamedEntityFromPartDoc(swView.ReferencedDocument, name, entType)
    Else
        Err.Raise vbError, "", "Invalid parent selection: only drawing view or component is supported"
    End If
    
    If swEnt Is Nothing Then
        Err.Raise vbError, "", "Failed to find the entity by name"
    End If
    
    Set GetNamedEntity = swEnt
    
End Function

Function GetNamedEntityFromPartDoc(model As SldWorks.ModelDoc2, name As String, entType As NamedEntityType_e) As SldWorks.Entity
    
    Dim selType As swSelectType_e
    
    Select Case entType
        Case NamedEntityType_e.Face
            selType = swSelFACES
        Case NamedEntityType_e.Edge
            selType = swSelEDGES
        Case NamedEntityType_e.Vertex
            selType = swSelVERTICES
    End Select
    
    Dim swEnt As SldWorks.Entity
    
    If model Is Nothing Then
        Err.Raise vbError, "", "Pointer to model doc is null"
    End If
    
    If model.GetType() = swDocumentTypes_e.swDocPART Then
        Dim swPart As SldWorks.PartDoc
        Set swPart = model
        Set swEnt = swPart.GetEntityByName(name, selType)
    Else
        Err.Raise vbError, "", "Document is not part doc"
    End If
    
    If swEnt Is Nothing Then
        Err.Raise vbError, "", "Failed to find the entity by name"
    End If
    
    Set GetNamedEntityFromPartDoc = swEnt
    
End Function
~~~


