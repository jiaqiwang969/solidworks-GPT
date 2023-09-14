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