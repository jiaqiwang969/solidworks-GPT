---
layout: sw-macro-fix
title: Fix failed SOLIDWORKS VSTA (C# or VB.NET) macro
caption: Failed to Run VSTA (C# or VB.NET) Macro
description: Fixing the Cannot Open error when running the VSTA macro (C# or VB.NET)
image: cannot-open-vsta-macro.png
labels: [macro, troubleshooting]
redirect-from:
  - /2018/04/macro-troubleshooting-failed-to-run-vsta-macro.html
---
## Symptoms

SOLIDWORKS VSTA macro (C# or VB.NET) cannot be run and the *Cannot Open* error is displayed  

![Error displayed when running VSTA macro](cannot-open-vsta-macro.png){ width=320 height=129 }

## Cause

Unlike VBA macros VSTA macros are compiled in-process applications based on .NET Framework.

The main difference is source code and binaries (deliverables) are separate elements.

In order to run the macro it is required to compile it. .NET applications are using interops to communicate with COM objects (such as SOLIDWORKS).

Which means that it is required to have interops copied locally to run the macro.  

## Resolution

* Copy all files in the output (bin) directory as the deliverables. You may exclude .pdb and .xml files as those are used for debugging and documentation purposes

![List of binaries from the compiled VSTA macro](vsta-macro-binaries.png){ width=400 height=108 }

* If the macro was supplied without this files try to create new VSTA macro and copy missing files
* If macro (or zip archive) was downloaded from web. Make sure that files are not blocked as it might cause the issue.

![Option to unblock the dll file in Windows](unblock-dll.png){ width=217 height=320 }
