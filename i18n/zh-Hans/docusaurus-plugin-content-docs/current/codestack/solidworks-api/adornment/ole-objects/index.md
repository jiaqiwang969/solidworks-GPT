---
title:  Managing OLE Objects in Models with SOLIDWORKS API
caption: OLE Objects
---
 A set of macros and examples demonstrating how to work with different embedded OLE objects (design tables, attachments, etc.) using the SOLIDWORKS API.
sidebar_position: 2
labels: [ole, embedding]
---
Object Linking and Embedding (OLE) is a Microsoft technology that allows third-party application objects to be inserted into documents. In SOLIDWORKS, OLE objects are used to represent design tables, attachments, and any files directly dropped into the document.

These objects can often be manipulated directly from within the host environment. For example, an embedded Excel file can be modified without exiting the SOLIDWORKS window.

OLE objects are typically saved along with the SOLIDWORKS file and can be manipulated by resizing, deleting, or using directly in the graphics area.

The SOLIDWORKS API provides access to OLE objects through the [ISwOLEObject](https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.ISwOLEObject.html) interface. The API methods of the [IModelDocExtension](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension.html) interface can be used to enumerate, create, and delete objects.

This section contains macros and examples using the SOLIDWORKS API to manipulate OLE objects within documents.