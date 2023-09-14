---
title: Variables Scope in Visual Basic
caption: Variables Scope
description: Article explaining different variables scopes (public and private class level, local) in Visual Basic
image: custom-module-named-module1.png
sidebar_position: 0
---
In Visual Basic language variables can be declared in different scopes (module level, local in the function, within the code block) with different access modifiers (private or public) which define their visibility in the code.

## Class or module (aka members)

Usually declared in the header of the class (outside of functions and procedures). Member variables have 2 levels of visibility (private and public).

### Private

Declared using *Dim* or *Private* keyword and only visible by the function and procedures within the scope of this class or module.

*Module1*

~~~vb
Dim member As Integer
Private member1 As String

Sub Init()
    member = 10 'visible within the Init function of the Module
    member1 = "A"
End Sub
~~~

Private variables cannot be accessed from outside of the module or class. Compile error: method or data member not found occurs when attempting to access the private member from outside class or module.

![Compile error: method or data member not found when calling the privately declared variable from outside class](not-found-member-on-private-variable.png){ width=500 }

### Public

Public variables declared using the *Public* keyword and can be accessed both from current module or class and external module or class.

*Module1*
~~~vb jagged
Dim publicMember As Integer
~~~

*Module2*
~~~vb jagged
Sub main()
    Module1.publicMember = 20 'variable is accessed and assigned from the external module
End Sub
~~~

Alternatively public member can be declared with the *Global* keyword. It will act exactly the same as *Public* however can only be declared within the [module](/docs/codestack/visual-basic/modules/) and cannot be declared in the [user form](/docs/codestack/visual-basic/user-forms/) or [class module](/docs/codestack/visual-basic/classes/).

## Local

Local variables declared in the scope of specific code block or function and only visible within that block for the code appearing after the declaration of the variable

~~~ vb jagged
Dim var1 As Double
var1 = 0.5 'var1 is visible here
var2 = 0.25 'var2 is not visible at this step as it is declared in the next line
Dim var2 As Double
~~~

### Code block
Variables defined in the loops or conditional statements

~~~ vb jagged
If res Then
    Dim localVar As Integer 'local variable defined within the If code block
    localVar = 25
End If
~~~

Although, local code block variables are only visible within this code block, same variable name cannot be used in other code block.

### Function or procedure

Variables defined in the context of function or procedure. These variables are visible within the function or any nested code blocks.

~~~ vb
Sub main()
    Dim localVar As String
    Dim localBoolVar As Boolean
    localVar = "Hello World"
    If localBoolVar Then 'local variable accessed in the conditional statement
        localVar = "New Hello World" 'local variable modified within the body of conditional statement
    End If
End Sub
~~~

### Function or procedure parameter

Variables are defined in the signature of the function. These variables declaration equivalent to the local function variable declared at the first line of the function body, i.e. the variables are visible for all code blocks within this function.

~~~ vb
Sub DoWork(paramVar As Double, paramVar2 As Integer)
End Sub
~~~

This example demonstrates the behaviour of variables declared in the different scopes:

*Module1*
![Module1 module in the Visual Basic Project](custom-module-named-module1.png)

~~~ vb
Public Module1PublicText As String 'public variable is visible outside of the module
Dim Module1PrivateText As String 'only visible by functions and properties of this module

Sub Init()
    
    Module1PublicText = "Module1 Public Text"
    Module1PrivateText = "Module1 Private Text"
    
End Sub
~~~



*Main Module*

~~~ vb
Dim memberInt As Integer

Sub main()
    
    memberInt = 10
    
    Dim localString As String
    localString = "Hello World"

    Debug.Print memberInt 'Prints 10
    Debug.Print localString 'Prints Hello World
    
    proc
    proc2
    module
    
End Sub

Sub proc()
    
    Dim localString As String
    localString = "New Hello World"
    
    memberInt = 20
    
    Debug.Print localString 'Prints New Hello World
    Debug.Print memberInt 'Prints 20
    
End Sub

Sub proc2()
    Debug.Print localString 'prints empty string as localString local variable from main and proc functions are not visible in this scope
    Debug.Print memberInt 'prints 20 as module level variable was modified in proc function
End Sub

Sub module()
    Module1.Init
    'Debug.Print Module1.Module1PrivateText 'compile error as variable is not visible outside of module 1
    Debug.Print Module1.Module1PublicText 'prints Module1 Public Text
End Sub
~~~



Output to [Immediate Window](/docs/codestack/visual-basic/vba/vba-editor/windows#immediate-window)

![Output of variable values](immediate-window-output.png){ width=350 }

## Scope Table

Given the following project structure:

![VBA project](vb-project.png)

Each of the files has the following declarations:

### UserForm

~~~ vb jagged
Public VarFormPublic As String
Private VarFormPrivate As String
Dim VarFormDim As String
Dim VarFormGlobal As String 'cannot be declared
~~~

### Module

~~~ vb jagged
Public VarModulePublic As String
Global VarModuleGlobal As String
Dim VarModuleDim As String
Private VarModulePrivate As String
~~~

### Class

~~~ vb jagged
Public VarClassPublic As String
Dim VarClassDim As String
Private VarClassPrivate As String
Dim VarClassGlobal As String 'cannot be declared
~~~

Table below describes the visibility of variables across different files

|Variable Name|UserForm|Module|Module1|Class
|---|---|--|--|--|
VarFormPublic|✓|✓|✓|✓|
VarFormPrivate|✓|☓|☓|☓|
VarFormDim|✓|☓|☓|☓|
VarFormGlobal|-|-|-|-|
VarModulePublic|✓|✓|✓|✓|
VarModuleGlobal|✓|✓|✓|✓|
VarModuleDim|☓|✓|☓|☓|
VarModulePrivate|☓|✓|☓|☓|
VarClassPublic|✓|✓|✓|✓|
VarClassPrivate|☓|☓|☓|✓|
VarClassDim|☓|☓|☓|✓|
VarClassGlobal|-|-|-|-|