---
layout: sw-macro-fix
title: Fix invalid namespace in VSTA (C# or VB.NET) SOLIDWORKS macro
caption: Invalid Namespace In VSTA (C# or VB.NET) Macro
description: Fixing the compile error of VSTA macro when the code is copied from the example
image: vsta-copy-example-compile-error.png
labels: [macro, troubleshooting, vsta]
---
## Symptoms

Example for SOLIDWORKS VSTA macro (C# or VB.NET) is copied from the SOLIDWORKS API Help documentation or from any source as a code. Number of compilation error are displayed:

* MacroName.SolidWorksMacro doesn't contain a definition for 'SwApp'
* The name 'Main' doesn't exist in the current context

![Compile error when code is copied from the example into the VSTA macro](vsta-copy-example-compile-error.png){ width=450 }

## Cause

VSTA macro is based on multiple connected files which must reside in the same namespace. When new macro is created the namespace might not be equal to the one 
used in the example source code.

~~~ cs
namespace MacroName.csproj
{
  ...
}
~~~

## Resolution

Change the namespace in the *SolidWorksMacro.cs* file to match the default namespace

* Open the project properties page

![VSTA macro project properties](project-properties.png){ width=250 }

* Copy the value in the *Default Namespace* field of the *Application* tab

![Default namespace of the VSTA project](project-default-namespace.png){ width=350 }

* Rename the namespace to the copied value

![Renamed namespace to match the default namespace](modified-namespace.png){ width=500 }

* Rebuild the macro