---
title: Entry Point of SwEx.AddIn framework
caption: Entry Point
description: Instructions on starting the coding with the SwEx.AddIn framework for SOLIDWORKS
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
## Registering the add-in

In order to register the SOLIDWORKS add-in with SwEx framework it is required:

* Create a public class which inherits the [SwAddInEx](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_SwAddInEx.htm) class
* Make this class com visible by adding the *System.Runtime.InteropServices.ComVisibleAttribute* attribute
* Add the [AutoRegisterAttribute](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_AutoRegisterAttribute.htm) attribute to add the required information to the registry.

### C\#

~~~ cs
using CodeStack.SwEx.AddIn;
using CodeStack.SwEx.AddIn.Attributes;
using System;
using System.Runtime.InteropServices;

namespace CodeStack.SwEx
{
    [AutoRegister("MyAddIn title", "MyAddIn description", true)]
    [ComVisible(true), Guid("025F9A68-F2FE-46CF-8BA2-8E19FBCDE9A0")]
    public class MyAddIn : SwAddInEx
    {
        public override bool OnConnect()
        {
            // Initialize the add-in, create menu, load data etc.
            return true;
        }

        public override bool OnDisconnect()
        {
            // Dispose the add-in's resources
            return true;
        }
    }
}

~~~



### VB.NET

~~~ vb
Imports CodeStack.SwEx.AddIn
Imports CodeStack.SwEx.AddIn.Attributes
Imports System.Runtime.InteropServices

<AutoRegister("MyAddIn title", "MyAddIn description", True)>
<ComVisible(True), Guid("025F9A68-F2FE-46CF-8BA2-8E19FBCDE9A0")>
Public Class MyAddIn
    Inherits SwAddInEx

    Public Overrides Function OnConnect() As Boolean
        'Initialize the add-in, create menu, load data etc.
        Return True
    End Function

    Public Overrides Function OnDisconnect() As Boolean
        'Dispose the add-in's resources
        Return True
    End Function

End Class

~~~



## OnConnect

This function is called within the ConnectToSw entry point. Override this function to initialize the add-in.

Return the result of the initialization. Return *true* to indicate that the initialization is successful. Return 'false' to cancel the loading of the add-in.

This override should be used to validate license (return false if the validation is failed), add command manager, task pane views, initialize events manager, etc.

## OnDisconnect

This function is called within the DisconnectFromSw function. Use the function to release all resources. You do not need to release the com pointers to SOLIDWORKS or command manager as those will be automatically released by SwEx framework.

## Accessing SOLIDWORKS application objects

SwEx framework provides the access to the following objects which are preassigned by the framework

### App property
Pointer to SOLIDWORKS application

### AddInCookie property
Add-in id

### CmdMgr property
Pointer to command manager

## Unregistering add-in
Add-in will be automatically removed and all COM objects unregistered when project is cleaned in Visual Studio