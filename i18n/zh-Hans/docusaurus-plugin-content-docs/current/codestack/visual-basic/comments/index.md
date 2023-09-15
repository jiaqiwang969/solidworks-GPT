---
title:  Visual Basic 中的注释
caption: 注释
---
 解释了使用注释对代码进行注解的用法
sidebar_position: 0
---
注释是可以放置在代码中进行注解和参考的自由文本。编译器会忽略注释，并允许在其中添加任何文本。

在 Visual Basic 中，注释是指放置在撇号 **'** 符号和行尾之间的任何文本。尽管颜色方案是可调整的，但在 Visual Basic 中，注释的默认颜色是绿色。

注释可以添加在行的开头

``` vb
'Function is executing some code
Sub DoWork()
End Sub
```

注释也可以放置在行的末尾

``` vb
Dim a As String 'declaring the string variable
a = "Hello World" 'assigning value to string variable
```

尽管注释是注解代码的好工具，但尽量不要过多地使用注释，因为这可能会使代码看起来很繁忙。相反，尽量使用描述性的变量名和函数名。

> 好的代码可以自我注释

不要使用以下代码中的注释

``` vb
Dim var1 As String
var1 = = "Xarial" 'company name
```

而要使用

``` vb
Dim companyName As String
companyName = "Xarial"
```

还要避免为显而易见的代码添加注释。例如，下面的代码中的注释是重言，并且不应该添加

``` vb
'Calculates the square root of the value
Function CalculateSquareRoot(val as double)
End Function
```

一般来说，我建议在以下情况下添加注释

* 用于教育和教程目的
* 对于不容易理解的代码，可能是一些复杂的算法
* 对于解决方法，即某些功能可以以更简单的方式完成，但已知存在限制或错误。例如，当使用第三方 API 并且已知某个方法存在问题时，可能会出现这种情况
* 作为未来工作的占位符。在这种情况下，您可以使用 **TODO** 占位符

``` vb
Function IsValid() As Boolean
    'TODO: implement validation
    IsValid = True
End Function
```