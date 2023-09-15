---
title: Comments in Visual Basic
caption: Comments
description: Explains how to annotate code using comments
sidebar_position: 0
---
Comments are free-form text that can be placed within code for annotation and reference. The compiler ignores comments and allows any text to be added within them.

In Visual Basic, comments refer to any text placed between the apostrophe **'** symbol and the end of the line. Although color schemes are adjustable, the default color for comments in Visual Basic is green.

Comments can be added at the beginning of a line:

``` vb
'Function is executing some code
Sub DoWork()
End Sub
```

Comments can also be placed at the end of a line:

``` vb
Dim a As String 'declaring the string variable
a = "Hello World" 'assigning value to string variable
```

While comments are a good tool for annotating code, it is advisable not to use them excessively as it can make the code look cluttered. Instead, strive to use descriptive variable and function names.

> Good code is self-commenting.

Avoid using comments like the following code:

``` vb
Dim var1 As String
var1 = = "Xarial" 'company name
```

Instead, use:

``` vb
Dim companyName As String
companyName = "Xarial"
```

Also, avoid adding comments for obvious code. For example, the comment in the following code is redundant and should not be added:

``` vb
'Calculates the square root of the value
Function CalculateSquareRoot(val as double)
End Function
```

In general, I recommend adding comments in the following cases:

* For educational and tutorial purposes
* For code that is not easily understandable, such as some complex algorithms
* For workarounds, i.e., when a certain functionality can be achieved in a simpler way but there are known limitations or issues. For example, this may occur when using a third-party API and a method is known to have a problem
* As placeholders for future work. In such cases, you can use the **TODO** placeholder.

``` vb
Function IsValid() As Boolean
    'TODO: implement validation
    IsValid = True
End Function
```