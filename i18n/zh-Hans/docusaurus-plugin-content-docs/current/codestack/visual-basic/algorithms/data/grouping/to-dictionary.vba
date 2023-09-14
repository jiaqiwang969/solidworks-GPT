Sub main()

    Dim strArr(6) As String
    
    strArr(0) = "A"
    strArr(1) = "B"
    strArr(2) = "C"
    strArr(3) = "A"
    strArr(4) = "B"
    strArr(5) = "C"
    strArr(6) = "C"
    
    Dim groups As Object
    Set groups = ToDictionary(strArr)

    'A x 2
    'B x 2
    'C x 3
    For Each key In groups.Keys
        Debug.Print key & " x " & UBound(groups.Item(key)) + 1
    Next
    
End Sub

Function ToDictionary(arr As Variant) As Object
    
    Dim dict As Object
    Set dict = CreateObject("Scripting.Dictionary")
        
    If Not IsEmpty(arr) Then
    
        For Each elem In arr
        
            Dim group() As Variant
            Dim key As Variant
            
            key = KeySelector(elem)
            
            If dict.Exists(key) Then
                group = dict.Item(key)
                ReDim Preserve group(UBound(group) + 1)
                group(UBound(group)) = elem
                dict.Item(key) = group
            Else
                ReDim group(0)
                group(0) = elem
                dict.Add key, group
            End If
            
        Next
        
    End If

    Set ToDictionary = dict
    
End Function

'modify the key selector to work with complex structures if required
Function KeySelector(elem As Variant) As Variant
    KeySelector = elem
End Function