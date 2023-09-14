Sub main()
    
    Dim byteVar As Byte
    byteVar = 17
    byteVar = CByte("12") 'converting from text value to byte
    byteVar = CByte(15.6) 'floating number is not acceptable so the value will be rounded to 16
    
    Dim intVar As Integer
    intVar = 12567
    intVar = CInt("124")
    
    Dim longVar As Long
    longVar = 1256936
    longVar = CLng("-124")
    longVar = 123&
    
    Dim longLongVar As LongLong '64 bit only
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
    doubleVar = CDbl("106.278856") 'holds more precise value with more floating digits
    doubleVar = 12345# 'force integer value to be converted to double
    
    Dim currVal As Currency
    currVal = 3105.6
    currVal = CCur("31,256,78")
    currVal = 689.3458@
    
    Dim decVal As Variant
    decVal = CDec(1E-18)
    
    Dim boolVar As Boolean
    boolVar = True
    boolVar = CBool(1) 'converted to true
    
    Dim strVar As String
    strVar = "Hello World"
    strVar = CStr(125) 'number converted to string
    
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
