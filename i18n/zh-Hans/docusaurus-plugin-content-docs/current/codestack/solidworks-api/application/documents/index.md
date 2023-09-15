---
title: Managing SOLIDWORKS Documents with the API
caption: Documents
description: Examples of using the SOLIDWORKS API to enumerate, close, activate, open, and identify document types.
labels: [documents]
---
SOLIDWORKS documents are represented as [IModelDoc2](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html) interfaces in the SOLIDWORKS API.

SOLIDWORKS allows multiple documents to be open and active at the same time. Additionally, documents can contain embedded documents, such as assemblies typically having other assemblies or parts linked as components to them, drawings referencing underlying documents to load drawing views, and parts can also have embedded parts.

Note that documents can be invisible (e.g., loaded within an assembly) but still loaded into memory and can be traversed and accessed from API methods.

This section contains code examples and macros for managing documents with the SOLIDWORKS API (enumerating, closing, activating, opening, and identifying types).