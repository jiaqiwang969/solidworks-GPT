---
caption: Conditions
title: Conditions (if, select case, logical operations) in Visual Basic
description: Articles explaining logical conditions, if-else, select case statements and boolean operations
sidebar_position: 0
---
Conditions are vital parts of any application as this is usually what drives the logic of an application.

There are multiple options available in Visual Basic to execute certain code based on the condition

## If Statement

This is the most common way to decide if the code within the **If** statement body should be executed. If statement simply evaluates the expression to Boolean **True** or **False** and executes the code if expression is **True**. This means that all expressions must result in either **True** or **False** value

~~~ vb jagged
If True Then
    Debug.Print "Always Prints"
End If
~~~

However the following code will result in the runtime exception as String value cannot be cast to Boolean

~~~ vb jagged
If "A" Then
End If
~~~

![Type mismatch runtime error](type-mismatch-runtime-error.png)

while the following snippet is valid as comparison of 2 String values results into the Boolean value

~~~ vb jagged
If "A" = "A" Then
End If
~~~

### Fallback Value

It is possible to specify the fallback value for the statement, i.e. block of code which should be executed if the main condition is **False**

~~~vba
Sub main()

    Dim myVar As Integer
    myVar = 25
    
    If myVar > 10 Then
        Debug.Print "Value of myVar variable is greater than 10"
    Else
        Debug.Print "Value of myVar variable is lower than 10"
    End If
~~~

### Multiple Сonditions

It is possible to specify multiple conditions as well as combine the expressions with [logical operations](#logical-operators)

~~~vba
Sub main()

    Dim myVar As Integer
    myVar = 25
    
    If myVar < 0 Then
        Debug.Print "myVar has a negative value"
    ElseIf myVar = 0 Then
        Debug.Print "myVar equals to 0"
    ElseIf myVar > 0 And myVar < 10 Then
        Debug.Print "myVar value in a range of 0...10 (exclusive)"
    Else
        Debug.Print "Value of myVar is 10 or more"
    End If
    
End Sub
~~~


Conditions are executed one-by-one until the **True** condition is found

## Select Case

If it is required to perform the check against multiple constant values, instead of using **If-ElseIf** it is possible to use **Select Case**. Although, **Select Case** can be considered redundant to **If-ElseIf**, it is widely used as it allows to create a simple, more readable code. **Select Case** statement also supports fallback value using the **Case Else** statement.

The below code converts the position of the day in the week to its text representation. It throws an error if the specified value is outside of 1-7 range as this would be an invalid input.


~~~
Sub main2()

    Dim dayOfTheWeek As Integer
    dayOfTheWeek = 3
    
    Select Case dayOfTheWeek
        Case 1
            Debug.Print "Monday"
        Case 2
            Debug.Print "Tuesday"
        Case 3
            Debug.Print "Wednesday"
        Case 4
            Debug.Print "Thursday"
        Case 5
            Debug.Print "Friday"
        Case 6
            Debug.Print "Saturday"
        Case 7
            Debug.Print "Sunday"
        Case Else
            Err.Raise vbError, "", "Value outside of the 1...7 range"
    End Select

End Sub
~~~


## Logical Operators

Visual basic supports 3 logical operators: **And**, **Or** and **Not**

* Result of **And** operators will be equal to **True** if all of its arguments are equal to **True**
* Result of **Or** operators will be equal to **True** if at least one of its arguments is equal to **True**
* **Not** operator reverses the value

Operators can be grouped with parenthesis to define the order of operations


~~~vba
Sub main3()
    
    Dim varA, varB, varC, varD As Boolean
        
    varA = True
    varB = False
    varC = True
    varD = False
    
    Debug.Print varA And varB 'False
    Debug.Print Not (varA And varB) 'True
    Debug.Print varA And varC 'True
    Debug.Print varA Or varC 'True
    Debug.Print varA Or varB 'True
    Debug.Print varB Or varD 'False
    Debug.Print (varA Or varB) And varD 'False
    Debug.Print varA Or (varB And varD) 'True
    
End Sub
~~~

The following table demonstrates the results based on the values and operator

| Value1 | Value2 | Operator | Result |
|--------|--------|----------|--------|
| True   | True   | And      | True   |
| True   | False  | And      | False  |
| False  | True   | And      | False  |
| False  | False  | And      | False  |
| True   | True   | Or       | True   |
| True   | False  | Or       | True   |
| False  | True   | Or       | True   |
| False  | False  | Or       | False  |
| True   | N/A    | Not      | False  |
| False  | N/A    | Not      | True   |
