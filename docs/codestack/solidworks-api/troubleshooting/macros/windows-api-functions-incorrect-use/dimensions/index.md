---
title: Working with dimensions using SOLIDWORKS API
caption: Dimensions
description: Collection of articles and code examples for automating models dimensions via SOLIDWORKS API
sidebar_position: 7
image: solidworks-dimensions-api.png
---
![Automating dimensions via SOLIDWORKS API](solidworks-dimensions-api.png){ width=300 }

Dimensions can be added to the selected sketch segments via [IModelDocExtension::AddDimension](https://help.solidworks.com/2022/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~adddimension.html) SOLIDWORKS API method.

Each dimension has a unique name which can be assigned by the user. Dimension object can be retrieved by name via [IModelDoc2::Parameter](https://help.solidworks.com/2022/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldoc2~parameter.html) method. 

Refer the [IDimension](https://help.solidworks.com/2022/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDimension.html) SOLIDWORKS API interface for the list of available methods for dimensions automation.
