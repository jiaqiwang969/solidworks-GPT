Sub Remove()
    
    Dim dict As Dictionary
    
    Set dict = New Dictionary
    
    dict.Add "A", 1
    dict.Add "B", 2
    dict.Add "C", 3
    dict.Add "D", 4
    
    dict.Remove "A"
    
    'dict.Remove "Not Existing Item" 'Run-time error 32811: Method Remove of object IDictionary failed
    
    Dim i As Integer
    
    '2 3 4
    For i = 1 To dict.Count
        Dim item As Integer
        item = dict.Items(i - 1) '0-based index
        Debug.Print item
    Next
    
    dict.RemoveAll
    
    '0
    Debug.Print dict.Count
    
End Sub