Sub main()

    Dim i, j, k As Integer 'declaring 3 variables of type Integer

    i = 10 'setting the value to declared variable
    l = 20 'setting the value of implicitly declared variable
    Debug.Print TypeName(l) 'Integer
    
    Dim intVar%, doubleVar#, longVar&
    Debug.Print TypeName(intVar%) 'Integer
    Debug.Print TypeName(doubleVar#) 'Double
    Debug.Print TypeName(longVar&) 'Long
    
    Const PI As Double = 3.14159265359 'declaring and initiating constant
    'PI = 0 'compile error
    
    Dim res As Double
    res = Sqrt(16) 'returns 4 and assigns to res variable
    Debug.Print res
    
End Sub