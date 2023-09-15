---
title: 'Visual Basic Data Structures: Objects, Types, Enumerations'
caption: User-Defined Types
description: An overview of user-defined types (i.e., objects, types, enumerations) in Visual Basic
image: class-module-class-declaration.png
sidebar_position: 0
---

## Enumerations
Enumerations are a data type in Visual Basic used to store a set of integer constants. Enumerations are useful for defining a series of constants that developers (i.e., users) can use.

For more information on enumerations, see the [Enumerations](/docs/codestack/visual-basic/data-structures/enumerators) article.

Enumerations are treated like any other data type and can be declared and assigned values. Enumerations can be assigned values implicitly or explicitly.

```vb
Dim myEnumVal As MyEnum_e
Dim myEnumVal1 As MyEnum_e
myEnumVal = MyEnum_e.Val1 'explicitly assign the enumeration by specifying the enumeration name
myEnumVal1 = Val1 'implicitly assign the enumeration
```

## Types

Visual Basic allows for the creation of new data structures. User-defined types are a data type, also known as a *structure*, that allows for the definition of complex data storage. Types are useful when there is a need to pass or store data consisting of multiple elements (e.g., geometric points, log entries).

For more information on user-defined types, see the [User-Defined Types](/docs/codestack/visual-basic/data-structures/types) article.

## Classes
Unlike enumerations and types, classes can only be created in separate Visual Basic class modules.

![Adding a MyClass class module to a Visual Basic project](class-module-class-declaration.png){ width=500 }

Classes are reference types and must be initialized using the *new* keyword and assigned using the *Set* keyword.

For more information on classes, see the [Classes](/docs/codestack/visual-basic/classes) article.

The following code example demonstrates how to declare and assign enumerations, types, and classes.

*Class Declaration*
```vb
Public Member As String

Private Sub Class_Initialize()

End Sub
```

*Module*
```vb
Enum MyEnum_e
    Val1 = 0
    Val2 = 1
    Val3 = 3
End Enum

Type MyStruct
    Field1 As String
    Field2 As Boolean
End Type    

Sub main()

    Dim enumVar As MyEnum_e
    enumVar = Val2
    
    Dim typeVar As MyStruct
    typeVar.Field1 = "Hello World"
    
    Dim classVar As MyClass
    Set classVar = New MyClass
    classVar.Member = "Hello World"

End Sub
```