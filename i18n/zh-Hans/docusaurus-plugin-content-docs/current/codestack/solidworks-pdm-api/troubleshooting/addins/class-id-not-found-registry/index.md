---
layout: sw-pdm-addin-fix
title: Fix 'Class ID could not be found in the registry' PDM add-in error
caption: Class ID could not be fond in the registry
description: Troubleshooting the '...the add-in registration succeeded but the add-in's class ID could not be found in the registry' error when registering SOLIDWORKS PDM add-in
image: class-id-not-found-in-registry.png
labels: [pdm add-in, error]
---
## Symptoms

The following error is displayed when .NET add-in is added to the vault via PDM Administration tool: *Error creating the add-in COM object from the dll 'name.dll'. Cause: the add-in registration succeeded but the add-in's class ID could not be found in the registry*

![Error when adding add-in to the PDM vault](class-id-not-found-in-registry.png){ width=450 }

Add-in works correctly while [debugging](/docs/codestack/solidworks-pdm-api/getting-started/add-ins/debugging-best-practices/)

## Cause

This error happens if project is using the libraries which are not compatible with SOLIDWORKS PDM. For example the [System.Threading.Tasks.Extensions](https://www.nuget.org/packages/System.Threading.Tasks.Extensions/) will cause this issue. The issue will be reproducible even if dll is not used in the project but just present in the folder.

![References tree of the add-in project](tasks-extension-reference.png){ width=450 }

## Resolution

* Find the problematic dll. Note, it is recommended to clear the bin (output) folder as the dll might no longer be used in the project, but still present in the output folder.
    * It might be required to comment out the code and remove the references one-by-one to find the dll which is causing the problem
* Once found, inspect how to avoid using this dll. This library may be a part of another package which is not necessarily to be in the add-in project. For example [System.Threading.Tasks.Extensions](https://www.nuget.org/packages/System.Threading.Tasks.Extensions/) could be added to the project as a part of [Moq](https://www.nuget.org/packages/Moq/) framework for Unit Testing. Unit Testing binaries should not be compiled into the target add-in output folder.
* If it is not possible to avoid using the dll, alternative way could be to add dll as the resource file and dynamically copy the dll on add-in load and use the [AppDomain::AssemblyResolve](https://docs.microsoft.com/en-us/dotnet/api/system.appdomain.assemblyresolve?view=netframework-4.8) notification to properly resolve references at runtime.
