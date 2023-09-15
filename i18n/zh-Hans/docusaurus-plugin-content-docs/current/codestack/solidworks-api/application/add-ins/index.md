---
title:  Developing C++, C#, VB.NET Plugins for SOLIDWORKS using the API
caption: Plugins
---
 Examples and articles on how to use plugins in SOLIDWORKS
---
Plugins are in-process extensions for SOLIDWORKS that offer the best performance advantages across all application types. Plugins are COM objects that must implement the [ISwAddin](https://help.solidworks.com/2012/english/api/swpublishedapi/solidworks.interop.swpublished~solidworks.interop.swpublished.iswaddin.html) interface in the SOLIDWORKS API.

Plugins can be developed using any COM-compatible language: C++, C#, VB.NET, VB6, Managed C++.

Plugins can be found in the Tools->Add-Ins dialog in the SOLIDWORKS menu and can be selectively enabled or disabled.

Most SOLIDWORKS partner products, as well as some products in the SOLIDWORKS Standard, Professional, and Premium editions, are developed as plugin applications rather than built-in applications.

Plugins can monitor the complete lifecycle of SOLIDWORKS applications and documents. Plugins have access to all available SOLIDWORKS APIs, whereas macros and standalone applications have some limitations as some APIs may not be available.