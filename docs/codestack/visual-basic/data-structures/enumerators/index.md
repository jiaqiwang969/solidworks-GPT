---
title: Enumerations in Visual Basic (VBA)
caption: Enumerations
description: Introduction to enumeration data types (collection of predefined long constants) in Visual Basic
image: enum-icon-intellisense.png
---
![Enumerator type in intelli-sense](enum-icon-intellisense.png){ width=350 }

Enumerator is a grouped structure of named constants of type [Long](/docs/codestack/visual-basic/variables/standard-types#long)

The main benefit of enumerator vs constant is an ability to group the constant under single data type and allow an automatic incrementing of values.

Enumerators are usually used to declare different options or actions (e.g. add, remove, delete, move, copy etc. ).

## Declaration and assignment of enumerators

Enumerator can be declared using **Enum - End Enum** code block where each constant declared on new line

~~~ vb
Enum SampleEnum_e
    Val1
    Val2
    Val3
End Enum
~~~

Values of constant can be assigned explicitly or implicitly (automatically). First automatic value is 0 and it is incremented by 1 for every next item.

Enumerator is a value type and can be assigned to the variable. It is possible to use enumerator value directly or via enumerator name

~~~ vb
Dim enumVal As SampleEnum_e
enumVal = SampleEnum_e.Val1 'using enumerator name
enumVal = Val1
~~~

>It is recommended to explicitly use the name of the enumerator. It makes the code more readable and resolves the potential ambiguity if another enumerator or variable has the same name.

~~~ vb
Enum MyEnum_e
    Val1 'automatically assigned value 0
    Val2 = 5 'explicitly assigned value 5
    Val3 'next automatically assigned number 6
End Enum

Enum MyIncrementEnum_e
    Val1 '0
    Val2 = Val1 + 3 '3
    Val3 = Val2 + 4 '7
End Enum

Sub main()
    
    '0 5 6
    Debug.Print MyEnum_e.Val1 & " " & MyEnum_e.Val2 & " " & MyEnum_e.Val3
    
    '0 3 7
    Debug.Print MyIncrementEnum_e.Val1 & " " & MyIncrementEnum_e.Val2 & " " & MyIncrementEnum_e.Val3
    
    'assigning the value to the variable
    Dim val As MyEnum_e
    val = MyEnum_e.Val2
    
End Sub
~~~



## Traversing enumerator values

As enumerators are Long constants it is possible to traverse all the items by knowing the first and last one.

Visual basic allows to declare the special enumerators which are not visible in intelli-sense but still valid values. In order to make the item invisible it is required to use underscore _ symbol at the beginning of the name. For example adding [_First] and [_Last] elements at the beginning and the end of the enumerator would allow defining the boundaries of enumerator values for traversing.

![Only visible enumerator values displayed in intelli-sense](enum-invisible-elements.png){ width=250 }

~~~ vb
Enum MyFirstLastEnum_e
    [_First]
    Val1
    Val2
    Val3
    [_Last]
End Enum

Sub TraversingEnumValues()
    
    Debug.Print MyFirstLastEnum_e.[_First] '0
    Debug.Print MyFirstLastEnum_e.[_Last] '4
        
    'Traverse all enumerator values
    '1 2 3
    For enumVal = MyFirstLastEnum_e.[_First] + 1 To MyFirstLastEnum_e.[_Last] - 1
        Debug.Print enumVal
    Next
    
End Sub
~~~



## Flag enumerator (multiple options)

Enumerators can be useful to hold multiple options using bitmasks.

This technique allows combining multiple options within one variable using plus + symbol. it is possible to identify if the specific option was set using **And** bitwise operator.

~~~ vb
Enum MyOptionEnum_e
    Option1 = 1 '2 ^ 0
    Option2 = 2 '2 ^ 1
    Option3 = 4 '2 ^ 2
    Option4 = 8 '2 ^ 3
    Option5 = 16 '2 ^ 4
End Enum

Enum MyOptionExpEnum_e
    Option1 = 2 ^ 0 '1
    Option2 = 2 ^ 1 '2
    Option3 = 2 ^ 2 '4
    Option4 = 2 ^ 3 '8
    Option5 = 2 ^ 4 '16
End Enum

Sub FlagEnums()

    Dim opts As MyOptionEnum_e
    
    '1 2 4 8 16
    Debug.Print MyOptionExpEnum_e.Option1 & " " & MyOptionExpEnum_e.Option2 & " " & MyOptionExpEnum_e.Option3 & " " & MyOptionExpEnum_e.Option4 & " " & MyOptionExpEnum_e.Option5
    
    opts = MyOptionEnum_e.Option1 + MyOptionEnum_e.Option3 + MyOptionEnum_e.Option4

    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option1)  'True
    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option2)  'False
    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option3)  'True
    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option4)  'True
    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option5)  'False
    
End Sub

Function IsFlagSet(options As MyOptionEnum_e, value As MyOptionEnum_e) As Boolean
    IsFlagSet = options And value
End Function
~~~


