Enum MyEnum_e
    Val1 = 0
    Val2 = 1
    Val3 = 3
End Enum

Type MyStruct
    Field1 As String
    Field2 As Boolean
End Type    

Sub main()

    Dim enumVar As MyEnum_e
    enumVar = Val2
    
    Dim typeVar As MyStruct
    typeVar.Field1 = "Hello World"
    
    Dim classVar As MyClass
    Set classVar = New MyClass
    classVar.Member = "Hello World"

End Sub