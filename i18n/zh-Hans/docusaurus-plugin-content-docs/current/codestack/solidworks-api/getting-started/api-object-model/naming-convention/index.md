---
title: Method and Property Naming in SOLIDWORKS API
caption: Naming Conventions
description: Explanation of naming conventions for methods, properties, and interfaces in the SOLIDWORKS API object model (i.e., OpenDoc6 vs OpenDoc5)
image: obsolete-api-interface.png
labels: [obsolete, version, number]
---
The SOLIDWORKS API (as well as SOLIDWORKS itself) is backward compatible, meaning that the API for older versions is compatible with newer versions of SOLIDWORKS. This means that when a new version is released, the signature and behavior of API methods should not change. To achieve this, SOLIDWORKS introduced a revision system for method and interface names. Whenever a new version of the API is available, it is added to the class diagram as **MethodName** *Last Revision + 1*. For example, [ISldWorks::OpenDoc6](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html) is a newer version of the [ISldWorks::OpenDoc5](https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc5.html) method. Similarly, [IModelDoc2](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html) is a newer (and current) version of the [IModelDoc](https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc.html) interface.

## Obsolete Methods and Interfaces

While SOLIDWORKS is backward compatible and all versions of methods should be available, it is recommended to use the latest version that is compatible with the target version of SOLIDWORKS.

The main reasons for doing so are:

* Obsolete methods (or any remarks and descriptions) may not be available in the API documentation. Therefore, it may be necessary to maintain API help documentation for previous versions.

![Obsolete IModelDoc API interface](obsolete-api-interface.png){ width=250 }

* The reasons for adding alternative methods are not always known. This could be due to some error (or behavior) present in the older version method, and using that method may introduce unknown side effects.

* If issues arise, there may be difficulties in seeking support, as the most obvious advice would be to upgrade the method to the newer version, as the older method may be considered as *out of warranty*.