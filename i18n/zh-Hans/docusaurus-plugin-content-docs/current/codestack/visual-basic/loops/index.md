---
caption: 循环
title:  在Visual Basic中使用for、while、for each、do循环的用法
---
 解释循环（while-wend、for-next、for each-next、do-while）和遍历技术的文章
sidebar_position: 0
---
编程中的循环是一种迭代遍历[集合](/docs/codestack/visual-basic/data-sets/collection/)、[数组](/docs/codestack/visual-basic/data-sets/array/)和其他数据集的技术。

以下部分介绍了不同类型的循环。下面的所有代码片段都基于一个简单的声明为*String*的数组：

~~~vba
Dim Arr(9) As String

Sub InitArr()
    Arr(0) = "A": Arr(1) = "B": Arr(2) = "C": Arr(3) = "D": Arr(4) = "E"
    Arr(5) = "F": Arr(6) = "G": Arr(7) = "H": Arr(8) = "I": Arr(9) = "J"
End Sub
~~~


然而，类似的技术可以用于任何类型的数组。

## For-Next

这可能是最常见的循环类型。它允许执行指定次数的迭代。默认情况下，每次循环迭代都会将索引值增加一。

~~~vba
Sub ForLoop()
    
    InitArr
    
    Dim i As Integer
    
    For i = 0 To 9
        Dim val As String
        val = Arr(i)
        Debug.Print val
    Next
    
End Sub
~~~



上面的示例将打印数组中的所有值：

> A B C D E F G H I J

或者，可以使用*Step*关键字指定不同的步长值。步长可以为负数，以逆向迭代。

~~~vba
Sub ForLoopStep()
    
    InitArr
    
    Dim i As Integer
    
    For i = UBound(Arr) To 0 Step -1
        Dim val As String
        val = Arr(i)
        Debug.Print val
    Next
    
End Sub
~~~



上面的代码将以相反的顺序输出值：

> J I H G F E D C B A

## While-Wend

此循环在条件为*True*时执行。

当迭代次数事先不知道时，这种类型的循环很有用。

~~~vba
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
~~~



上面的代码将输出并在当前元素等于*D*时终止：

> A B C D

## Do-Loop While

**Do-Loop While**与**While-Wend**循环类似，唯一的区别是条件在步骤之后执行，因此它确保至少执行一次迭代，而不管条件如何。

~~~vba
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
~~~



上面的代码将产生以下结果：

> A B C D

## For Each-Next

尽管在大多数情况下，**For-Next**循环用于迭代数组的元素，但它不限于此用例。在循环体中可以执行任何代码。

要专门迭代数组的元素，可以使用**For Each-Next**循环

~~~vba
Sub ForEachLoop()
            
    InitArr
    
    For Each x In Arr
        Debug.Print x
    Next
    
End Sub
~~~



上面的代码片段将输出：

> J I H G F E D C B A

## 无限循环

循环条件的错误使用可能导致无限循环。这种代码通常导致软件挂起或崩溃。

例如，下面的循环将无限运行，因为**i**变量从未递增。

~~~vba
Sub InifiniteLoop()
    
    InitArr
    
    Dim i As Integer
    i = 0
    
    While i <> UBound(Arr) + 1
        Debug.Print Arr(i)
    Wend
    
End Sub
~~~




要终止无限循环（或VBA中的任何正在运行的代码），可以按下组合键：*ctrl+alt+pause/break*

这将显示下面的消息框，可以停止代码或进入调试模式。

![终止无限循环](terminate-code-execution.png)