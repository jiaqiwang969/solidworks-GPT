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