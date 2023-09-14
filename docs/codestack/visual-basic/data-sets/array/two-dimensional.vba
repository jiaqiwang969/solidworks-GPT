Sub TwoDimensionalArrays()
    
    '3 rows and 4 columns
    Dim matrixArr() As String
    ReDim matrixArr(2, 3)
        
    Dim i As Integer
    Dim j As Integer
    
    For i = 0 To UBound(matrixArr, 1)
        For j = 0 To UBound(matrixArr, 2)
        matrixArr(i, j) = (i + 1) & "." & (j + 1)
        Next
    Next
    
    'first dimension cannot be resized
    'ReDim Preserve matrixArr(5, 5) 'Run-time error 9: subscript out of range
    
    'second dimension can be resized preserving the data
    ReDim Preserve matrixArr(2, 4)
    
    ReDim matrixArr(5, 5) 'dimensions of the array can be changed when cleared
    
End Sub