---
caption: Loops
title: Using for, while, for each, do loops in Visual Basic
description: Article explaining the while-wend, for-next, for each-next, do-while loops and traversal techniques
sidebar_position: 0
---
Loops in programming are techniques for iterating over [collections](/docs/codestack/visual-basic/data-sets/collection/), [arrays](/docs/codestack/visual-basic/data-sets/array/), and other datasets.

The following sections describe different types of loops. All the code snippets below are based on a simple array declared as *String*:

```vba
Dim Arr(9) As String

Sub InitArr()
    Arr(0) = "A": Arr(1) = "B": Arr(2) = "C": Arr(3) = "D": Arr(4) = "E"
    Arr(5) = "F": Arr(6) = "G": Arr(7) = "H": Arr(8) = "I": Arr(9) = "J"
End Sub
```

However, similar techniques can be applied to arrays of any type.

## For-Next

This is perhaps the most common type of loop. It allows for a specified number of iterations. By default, the index value is incremented by one with each iteration.

```vba
Sub ForLoop()
    
    InitArr
    
    Dim i As Integer
    
    For i = 0 To 9
        Dim val As String
        val = Arr(i)
        Debug.Print val
    Next
    
End Sub
```

The above example will print all the values in the array:

```
A B C D E F G H I J
```

Alternatively, a different step value can be specified using the *Step* keyword. The step can be a negative number to iterate in reverse.

```vba
Sub ForLoopStep()
    
    InitArr
    
    Dim i As Integer
    
    For i = UBound(Arr) To 0 Step -1
        Dim val As String
        val = Arr(i)
        Debug.Print val
    Next
    
End Sub
```

The above code will output the values in reverse order:

```
J I H G F E D C B A
```

## While-Wend

This loop executes as long as the condition is *True*.

This type of loop is useful when the number of iterations is not known in advance.

```vba
Sub WhileLoop()
    
    InitArr
    
    Dim i As Integer
    Dim val As String
    i = 0
    
    While val <> "D"
        val = Arr(i)
        i = i + 1
        Debug.Print val
    Wend
    
End Sub
```

The above code will output and terminate when the current element is equal to *D*:

```
A B C D
```

## Do-Loop While

The **Do-Loop While** loop is similar to the **While-Wend** loop, with the only difference being that the condition is evaluated after the step, ensuring that at least one iteration is performed regardless of the condition.

```vba
Sub DoLoop()
    
    InitArr
    
    Dim i As Integer
    Dim val As String
    i = 0
    
    Do
        val = Arr(i)
        i = i + 1
        Debug.Print val
    Loop While val <> "D"
    
End Sub
```

The above code will produce the following result:

```
A B C D
```

## For Each-Next

While the **For-Next** loop is commonly used to iterate over elements of an array, it is not limited to this use case. Any code can be executed within the loop body.

To specifically iterate over elements of an array, the **For Each-Next** loop can be used.

```vba
Sub ForEachLoop()
            
    InitArr
    
    For Each x In Arr
        Debug.Print x
    Next
    
End Sub
```

The above code snippet will output:

```
J I H G F E D C B A
```

## Infinite Loop

Incorrect usage of loop conditions can result in an infinite loop. Such code often leads to software hanging or crashing.

For example, the following loop will run indefinitely as the **i** variable is never incremented.

```vba
Sub InifiniteLoop()
    
    InitArr
    
    Dim i As Integer
    i = 0
    
    While i <> UBound(Arr) + 1
        Debug.Print Arr(i)
    Wend
    
End Sub
```

To terminate an infinite loop (or any running code in VBA), you can press the key combination: *ctrl+alt+pause/break*

This will display the following message box, allowing you to stop the code or enter debug mode.

![Terminate Code Execution](terminate-code-execution.png)