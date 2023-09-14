Enum MyOptionEnum_e
    Option1 = 1 '2 ^ 0
    Option2 = 2 '2 ^ 1
    Option3 = 4 '2 ^ 2
    Option4 = 8 '2 ^ 3
    Option5 = 16 '2 ^ 4
End Enum

Enum MyOptionExpEnum_e
    Option1 = 2 ^ 0 '1
    Option2 = 2 ^ 1 '2
    Option3 = 2 ^ 2 '4
    Option4 = 2 ^ 3 '8
    Option5 = 2 ^ 4 '16
End Enum

Sub FlagEnums()

    Dim opts As MyOptionEnum_e
    
    '1 2 4 8 16
    Debug.Print MyOptionExpEnum_e.Option1 & " " & MyOptionExpEnum_e.Option2 & " " & MyOptionExpEnum_e.Option3 & " " & MyOptionExpEnum_e.Option4 & " " & MyOptionExpEnum_e.Option5
    
    opts = MyOptionEnum_e.Option1 + MyOptionEnum_e.Option3 + MyOptionEnum_e.Option4

    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option1)  'True
    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option2)  'False
    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option3)  'True
    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option4)  'True
    Debug.Print IsFlagSet(opts, MyOptionEnum_e.Option5)  'False
    
End Sub

Function IsFlagSet(options As MyOptionEnum_e, value As MyOptionEnum_e) As Boolean
    IsFlagSet = options And value
End Function