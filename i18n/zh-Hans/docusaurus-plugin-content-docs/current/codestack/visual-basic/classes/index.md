---
title: Classes in Visual Basic 6 (VBA)
description: Article explaining the usage of classes in Visual Basic. Introducing to Object Oriented Programming (OOP)
caption: Classes
image: insert-class-module.png
sidebar_position: 0
---
Class is a fundamental concept of Object Oriented Programming (OOP). Class can be considered as repository for storing data in class level [variables](/docs/codestack/visual-basic/variables/), and providing [functions](/docs/codestack/visual-basic/functions/), [properties](/docs/codestack/visual-basic/properties/) and exposing [events](/docs/codestack/visual-basic/events/).

Classes are created in the class modules

![Adding new class module](insert-class-module.png){ width=300 }

Classes must have a unique name which can be defined in the Visual Basic Editor

![Name of a class](class-name.png)

## MyClass Class Module
~~~vb
Public Var1 As String
Public Var2 As Double

Public Sub Foo()
End Sub
~~~

## Macro11 Module
~~~ vb
Dim cl1 As MyClass
Dim cl2 As MyClass

Set cl1 = New MyClass
Set cl2 = New MyClass

cl1.Var1 = "A"
cl2.Var1 = "B"

cl1.Var2 = 1
cl2.Var2 = 2
~~~

Classes are similar to [modules](/docs/codestack/visual-basic/modules/), but there are several differences:

* It is required to create an instance of a class using **new** keyword
* All the data associated with this class wil be stored within its instance, which means that different instances of the same class may have different data.
* Classes allow to handle and expose events
