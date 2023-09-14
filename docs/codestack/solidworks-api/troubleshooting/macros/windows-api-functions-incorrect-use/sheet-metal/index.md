---
title: Automation Sheet Metal parts using SOLIDWORKS API
caption: Sheet Metal
description: Using SOLIDWORKS API to manipulate sheet metal features
sidebar_position: 10
labels: [sheet metal,bend,fold]
---
SOLIDWORKS API provide number of methods and interface for manipulating sheet metal features in part documents: [IBaseFlangeFeatureData](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData.html), [IBendsFeatureData](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibendsfeaturedata_members.html), [ISketchedBendFeatureData](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isketchedbendfeaturedata.html) etc.

All the specific feature data could be retrieved via calling the [IFeature::GetDefinition](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeature~GetDefinition.html) SOLIDWORKS API on the corresponding sheet metal feature.

Explore this section to find useful macros and code examples for automation and enhancement of sheet metal functionality in SOLIDWORKS.
