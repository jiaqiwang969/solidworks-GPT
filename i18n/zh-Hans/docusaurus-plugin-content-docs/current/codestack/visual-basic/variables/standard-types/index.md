---
title: Standard Types in Visual Basic
caption: Standard Types
description: An overview of the standard types (such as Integer, String, Double, Object, etc.) in Visual Basic
image: vba-integer-overflow.png
sidebar_position: 0
---
The following categorizes the different standard types in Visual Basic, grouped by category. Each type allocates different amounts of memory storage space. Some types have declaration characters that can be used to explicitly define the type of a variable in a short form. Most types provide specific functions for converting values from variants.

## Numeric

Numeric types variables are used to store positive and negative integer values (without decimal points), such as 1, 2, 10, -10, -1000, etc. Different numeric types allow storing different ranges of values and require different sizes of allocated storage space. The most commonly used type is [Integer](#integer).

If a value assigned is not suitable for the range, a runtime error "6" Overflow will be displayed at compile time.

![Runtime error "6" Overflow is displayed when an assigned integer value exceeds the acceptable range](vba-integer-overflow.png){ width=350 }

### Byte
Allocates 1 byte of storage space. The value range is from 0 to 255. The function to convert it to Byte is *CByte*.

### Integer
Allocates 2 bytes of storage space. The value range is from -32,768 to 32,767. The declaration character for an integer is %. The function to convert it to Integer is *CInt*.

### Long
Allocates 4 bytes of storage space. The value range is from -2,147,483,648 to 2,147,486,647. The declaration character for a long integer is &. The function to convert it to Long is *CLng*.

### LongLong
Allocates 8 bytes of storage space. The value range is from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. The declaration character for LongLong is ^. LongLong is only a valid declared type on 64-bit platforms.

### LongPtr
Represents a Long type (4 bytes) on a 32-bit system and a LongLong type (8 bytes) on a 64-bit system.

LongPtr is commonly used to write portable code that can run in both 32-bit and 64-bit environments. It is particularly used in the [Windows 32-bit API](/docs/codestack/visual-basic/windows-api) for pointers and handles.

## Numeric with Decimal Point
These types of variables are used to store positive and negative values with decimal points, such as 20.5, -152.89, etc. Different types of variables allow storing values in different ranges and have different levels of precision. The most commonly used type is Double. For high-precision numbers, the Currency or Decimal type can be used.

### Single
Allocates 4 bytes of storage space. The value range is from -3.402823E38 to -1.401298E–45 or from 1.401298E–45 to 3.402823E38. The declaration character for single precision is !. The function to convert it to Single is *CSng*.

### Double
Allocates 8 bytes of storage space. The value range is from -1.79769313486232E308 to -4.94065645841247E–324 or from 1.79769313486232E308 to 4.94065645841247E–324. The declaration character for double precision is #. The function to convert it to Double is *CDbl*.

### Currency
Allocates 8 bytes of storage space. The value range is from -922,337,203,477.5808 to 922,337,203,685,477.5807. The declaration character for currency is @. The function to convert it to Currency is *CCur*.

### Decimal
Allocates 14 bytes of storage space. The value range is from -79,228,162,514,264,337,593,543,950,335 to 79,228,162,514,264,337,593,543,950,335 or from -7.2998162514264337593543950335 to 7.9228162514264337593543950335. The function to convert it to Decimal is *CDec*. Note that variables of the Decimal type must be declared as [Variant](/docs/codestack/visual-basic/variables/standard-types#variant) and assigned using the *CDec* function.

## Logical
Logical variables are used for [conditions](/docs/codestack/visual-basic/conditions) and are represented as 1 (True) or 0 (False).

### Boolean
Allocates 2 bytes of storage space. It can be True or False. The function to convert it to Boolean is *CBool*.

## Text
Text variables store text and are enclosed in double quotation marks "" when defined.

### String
Allocates storage space of 10 bytes plus the number of characters. The value range is from 0 to 2 billion characters. The function to convert it to String is *CStr*.

## Date and Time
Variables that store date and time information.

### Date
Allocates 8 bytes of storage space. The value range is from January 1, 100 to December 31, 9999. The function to convert it to String is *CDate*.

## Reference
These variables are any reference types that can store complex data and structures.

### Object
Allocates 4 bytes of storage space. Used for [late binding](/docs/codestack/visual-basic/variables/declaration#early-binding-and-late-binding).

## Any
These variable types can store any data object (value types, reference types, or arrays).

### Variant
Allocates 16 bytes of storage space. The function to convert it to Variant is *CVar*.

The following code example demonstrates the declaration and conversion of various standard data types.

~~~ vb
Sub main()
    
    Dim byteVar As Byte
    byteVar = 17
    byteVar = CByte("12") 'converts text value to byte
    byteVar = CByte(15.6) 'floating-point number not acceptable, so the value will be rounded to 16
    
    Dim intVar As Integer
    intVar = 12567
    intVar = CInt("124")
    
    Dim longVar As Long
    longVar = 1256936
    longVar = CLng("-124")
    longVar = 123&
    
    Dim longLongVar As LongLong 'only applicable on 64-bit
    longLongVar = 103456
    longLongVar = 7392984646^
    
    Dim longPtrVar As LongPtr
    longPtrVar = 94874882
    
    Dim singleVar As Single
    singleVar = 3.4E+38 '3.4 * 10^38
    singleVar = CSng("15.656")
    singleVar = 12345.35!
    
    Dim doubleVar As Double
    doubleVar = 3.4E+100
    doubleVar = CDbl("106.278856") 'converts integer value to double
    doubleVar = 12345# 
    
    Dim currVal As Currency
    currVal = 3105.6
    currVal = CCur("31,256,78")
    currVal = 689.3458@
    
    Dim decVal As Variant
    decVal = CDec(1E-18)
    
    Dim boolVar As Boolean
    boolVar = True
    boolVar = CBool(1) 'converts to true
    
    Dim strVar As String
    strVar = "Hello World"
    strVar = CStr(125) 'converts number to string
    
    Dim dateVar As Date
    dateVar = Now() 'assigns current date
    dateVar = CDate("10-Jun-2018")
    
    Dim objVar As Object
    Set objVar = Nothing
    
    Dim varVar As Variant
    varVar = Array("A", "B", "C")
    varVar = "Hello World"
    varVar = CVar(10.5)
    
End Sub

~~~