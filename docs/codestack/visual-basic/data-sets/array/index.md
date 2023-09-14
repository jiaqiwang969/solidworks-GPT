---
title: Arrays in Visual Basic
caption: Array
description: Article explaining arrays in Visual Basic - set of elements which stored in the single variable and can be accessed by index
image: two-dimensional-array.png
sidebar_position: 0
---
Visual Basic array is a set of elements which is stored in the single variable and can be accessed by index.

In order to declare array it is required to append the variable name with parenthesis () symbol;

~~~ vb
Dim arr() As Double 'declaring the array of doubles
~~~

Array elements can be accessed by the index

~~~ vb
Dim arr(2) As String
Dim elem As String
elem = arr(0) 'getting first element
~~~

## Initializing arrays in Visual Basic

Arrays is a set of the fixed size. Size can be assigned while declaration.

~~~ vb
Dim arr(2) As Double 'declaring the array of 3 doubles (from 0 to 1)
~~~

> The single number between the parenthesis represents the upper boundary of the array. By default arrays are 0-based. So specifying (5) as array size means that there will be 6 elements in the array.

It is possible to explicitly specify the upper and inner boundaries of the array

~~~ vb
Dim arr(1 To 5) As Double 'declaring the array of 5 doubles (from 1 to 5)
~~~

> It is recommended to use 0-based array as it is a common practice across different programming languages.

Array elements can be accessed and changed by their index. If specified index is outside of the boundaries of the array, run-time error is raised.

In some cases size of the array cannot be known at the compile time and it will be identified during the run-time. In this case array can be declared without the size (i.e. not initialized). Such array can be then resized dynamically using the **ReDim** keyword.

~~~ vb
Dim arr() As Double
ReDim arr(2) 'initializing the size of the array
~~~

In order to retrieve the upper and lower boundaries of the array **UBound** and **LBound** can be used respectively.

> UBound function cannot be used to identify if the array is initialized as it will throw an exception when used on not initialized array. Use the **IsArrayInitialized** function from the example below to safely identify the state of the array.

![Run-time error 9: subscript out of range while reading the upper boundary of uninitialized array](subscript-out-of-range.png){ width=350 }

~~~ vb
Sub InitializeArray()
    
    Dim doubleArr() As Double 'not initialized array
    
    'Array is initialized = False
    Debug.Print "Array is initialized = " & IsArrayInitialized(doubleArr)
    
    ReDim doubleArr(2) 'resizing array to hold 3 doubles
    
    'Array is initialized = True of size 3
    Debug.Print "Array is initialized = " & IsArrayInitialized(doubleArr) & " of size " & GetArraySize(doubleArr)
    
    Dim textArr(4) As String 'initialized at declaration
    'Array is initialized = True of size 5
    Debug.Print "Array is initialized = " & IsArrayInitialized(textArr) & " of size " & GetArraySize(textArr)
    
    'initializing with custom boundaries
    Dim intArr(1 To 5) As Integer
    'Array is initialized = True of size 5 (1 to 5)
    Debug.Print "Array is initialized = " & IsArrayInitialized(intArr) & " of size " & GetArraySize(intArr) & " (" & LBound(intArr) & " to " & UBound(intArr) & ")"
    
    'Debug.Print intArr(0) 'Run-time error 9: subscript out of range
    
End Sub

Function IsArrayInitialized(vArr As Variant) As Boolean

    If IsArray(vArr) Then
        
        On Error GoTo End_
        
        If UBound(vArr) >= 0 Then
            IsArrayInitialized = True
            Exit Function
        End If
        
    End If

End_:

    IsArrayInitialized = False
    
End Function

Function GetArraySize(vArr As Variant) As Integer
    
    If IsArrayInitialized(vArr) Then
        GetArraySize = UBound(vArr) - LBound(vArr) + 1
    Else
        GetArraySize = 0
    End If
    
End Function
~~~



## Filling array with data

Array elements can be treated as individual variables and the same rules of reading and editing the data applies to array elements as any other variable. Refer [Variables](/docs/codestack/visual-basic/variables) article for more information.

~~~ vb
Dim arr(2) As Double
arr(<INDEX>) = 10 'changing the value of the variable at <INDEX>
Debug.Print arr(<INDEX>) 'reading the value of the variable at <INDEX>
~~~

~~~ vb
Sub FillArray()
    
    Dim doubleArr(2) As Double 'array initialized from the declaration
    Dim i As Integer
    
    For i = 0 To UBound(doubleArr)
        doubleArr(i) = i + 1
    Next
    
    '1 2 3
    For i = 0 To UBound(doubleArr)
        Debug.Print doubleArr(i)
    Next

    Dim vArr As Variant
    vArr = Array("A", "B", "C", "D") 'filling the variant array on initialization
    
    'A B C D
    For i = 0 To UBound(vArr)
        Debug.Print vArr(i)
    Next
    
End Sub
~~~



## Resizing array

Array size can be changed at run-time. But that can only be done for the array whose size was not explicitly specified on declaration

~~~ vb
Dim arrCanResize() As Integer 'size of this array can be resized
Dim arrCannotResize(3) As Integer 'size of this array cannot be resized
~~~

Attempt of resizing the already dimensioned array will result in the compile error:

![Compile error: Array already dimensioned](array-already-dimensioned.png){ width=350 }

### Clearing the existing values

**ReDim** keyword allows to resize the array. In this case all existing values will be cleared.

~~~ vb
Sub ResizeAndClearArray()
    
    Dim doubleArr() As Double
    Dim i As Integer
    
    ReDim doubleArr(2)
    
    For i = 0 To UBound(doubleArr)
        doubleArr(i) = i + 1
    Next
    
    'resizing and clearing the array
    ReDim doubleArr(3)
    doubleArr(3) = 4
    
    '0 0 0 4
    For i = 0 To UBound(doubleArr)
        Debug.Print doubleArr(i)
    Next

End Sub
~~~



### Preserving existing values

In order to keep the existing values of the array it is required to use **ReDim Preserve** keyword.

~~~ vb
Sub ResizeAndPreserveArray()

    Dim doubleArr() As Double 'array initialized from the declaration
    Dim i As Integer

    ReDim doubleArr(3)
    
    For i = 0 To UBound(doubleArr)
        doubleArr(i) = i + 1
    Next
    
    'resizing the array and preserving the values
    ReDim Preserve doubleArr(4)
    doubleArr(4) = 5
    
    '1 2 3 4 5
    For i = 0 To UBound(doubleArr)
        Debug.Print doubleArr(i)
    Next

End Sub
~~~



### Resizing arrays dynamically

In some cases it might be unknown in advance the size of the array or when the first item (if any) will be added.

In this cases it is beneficial to only init array when needed. It is possible to use the following statement to identify if the array is not initialized `(Not array) = -1` and init with a first item or dynamically resize preserving the existing values.

~~~ vb
Dim evenNumbersArr() As Integer

Dim i As Integer

For i = 0 To 100
    If i Mod 2 = 0 Then
                
        If (Not evenNumbersArr) = -1 Then
            ReDim evenNumbersArr(0)
        Else
            ReDim Preserve evenNumbersArr(UBound(evenNumbersArr) + 1)
        End If
        
        evenNumbersArr(UBound(evenNumbersArr)) = i
    End If
Next
~~~



## Two dimensional array

Two-dimensional array allows to store the table data and can be declared in the following format

~~~ vb
Dim table(<ROWS COUNT>, <COLUMNS COUNT>) As String
~~~

> 2-dimensional array can be resized, but if it is required to preserve the values only second (column) dimension can be resized.

~~~ vb
Sub TwoDimensionalArrays()
    
    '3 rows and 4 columns
    Dim matrixArr() As String
    ReDim matrixArr(2, 3)
        
    Dim i As Integer
    Dim j As Integer
    
    For i = 0 To UBound(matrixArr, 1)
        For j = 0 To UBound(matrixArr, 2)
        matrixArr(i, j) = (i + 1) & "." & (j + 1)
        Next
    Next
    
    'first dimension cannot be resized
    'ReDim Preserve matrixArr(5, 5) 'Run-time error 9: subscript out of range
    
    'second dimension can be resized preserving the data
    ReDim Preserve matrixArr(2, 4)
    
    ReDim matrixArr(5, 5) 'dimensions of the array can be changed when cleared
    
End Sub
~~~



![Values of two-dimensional array (matrixArr) in the Watch window from the code above](two-dimensional-array.png)
