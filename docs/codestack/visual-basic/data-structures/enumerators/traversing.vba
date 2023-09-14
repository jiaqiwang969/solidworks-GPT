Enum MyFirstLastEnum_e
    [_First]
    Val1
    Val2
    Val3
    [_Last]
End Enum

Sub TraversingEnumValues()
    
    Debug.Print MyFirstLastEnum_e.[_First] '0
    Debug.Print MyFirstLastEnum_e.[_Last] '4
        
    'Traverse all enumerator values
    '1 2 3
    For enumVal = MyFirstLastEnum_e.[_First] + 1 To MyFirstLastEnum_e.[_Last] - 1
        Debug.Print enumVal
    Next
    
End Sub