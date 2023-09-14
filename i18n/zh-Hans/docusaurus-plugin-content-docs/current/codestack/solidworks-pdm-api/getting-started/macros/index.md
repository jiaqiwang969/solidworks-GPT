---
title: Using SOLIDWORKS PDM API In VBA And VSTA Macros
caption: Developing Macros
description: Getting starting with writing VBA and VSTA macros utilizing SOLIDWORKS PDM API
image: edm-type-library.png
labels: [getting started,vba macros,pdm api]
---
In some cases it might be beneficial to use SOLIDWORKS PDM API directly from SOLIDWORKS VBA or VSTA macro. In this case you can combine [SOLIDWORKS API](/docs/codestack/solidworks-api/) and [SOLIDWORKS PDM API](/docs/codestack/solidworks-pdm-api/) functions in a single macro.

## Connecting to SOLIDWORKS PDM In VBA Macro

Macro should be created in the same way as any other VBA macro for SOLIDWORKS. You can also add PDM API code into existing SOLIDWORKS macro if needed.

### Early Binding

To enable early binding to SOLIDWORKS PDM API (recommended approach), it is required to add the SOLIDWORKS type library under the Tools->References window in VBA Editor.

Search for *PDMWorks Enterprise [Year] Type Library*. If this reference is not available in the list use the *Browse* button to lookup the file in the installation directory as shown on the image below:

![Adding SOLIDWORKS PDM Type Library to the macro references](edm-type-library.png){ width=450 }

Below is a typical initialization routine to connect to the vault. This example will display the standard PDM Login Window if login is required.

~~~ vb
Dim pdmVault As EdmVault5

Sub main()

    Set pdmVault = New EdmVault5
    pdmVault.LoginAuto "MyVault", 0
    
    If pdmVault.IsLoggedIn Then
        'TODO: Implement the routine            
    Else
        Err.Raise vbError, "User is not logged in to the vault"
    End If
    
End Sub
~~~

Alternatively it is possible to login silently by providing login and password.

~~~ vb
pdmVault.Login "admin", "mypassword", "MyVault"
~~~

### Late Binding

Unlike SOLIDWORKS macro, SOLIDWORKS PDM library is not default selection in the references list. When you create new macro this library is not selected and might not be available from the libraries list. This might introduce additional challenges when macro needed to be shared across different machines.

In this case it might be beneficial to utilize [Late Binding](/docs/codestack/visual-basic/variables/declaration/#early-binding-and-late-binding) to connect to vault and call PDM API. In this case it is not required to add references to the macro in VBA Editor. All PDM objects must be declared as [Object](/docs/codestack/visual-basic/variables/standard-types#object). The functions can still be called in the same way, however intelli-sense will not be available.

~~~ vb
Dim pdmVault As Object

Sub main()

    Set pdmVault = CreateObject("ConisioLib.EdmVault")

    pdmVault.LoginAuto "MyVault", 0
    
    If pdmVault.IsLoggedIn Then
        'TODO: Implement the routine            
    Else
        Err.Raise vbError, "User is not logged in to the vault"
    End If
    
End Sub
~~~