Sub RemoveItems()
    
    Dim coll As Collection
    Set coll = New Collection
    
    'items are stored as variant, so data types can be mixed
    coll.Add "A"
    coll.Add 1, "IntegerItem"
    coll.Add 10.5
    coll.Add True, "BoolItem"
    
    coll.Remove 1 'removing first item by index
    coll.Remove "BoolItem" 'removing item by key
    
    Dim i As Integer
    
    '1 10.5
    For i = 1 To coll.Count()
        Debug.Print coll(i)
    Next
    
End Sub