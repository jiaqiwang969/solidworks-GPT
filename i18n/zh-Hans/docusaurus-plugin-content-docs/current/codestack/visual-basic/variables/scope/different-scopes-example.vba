Dim memberInt As Integer

Sub main()
    
    memberInt = 10
    
    Dim localString As String
    localString = "Hello World"

    Debug.Print memberInt 'Prints 10
    Debug.Print localString 'Prints Hello World
    
    proc
    proc2
    module
    
End Sub

Sub proc()
    
    Dim localString As String
    localString = "New Hello World"
    
    memberInt = 20
    
    Debug.Print localString 'Prints New Hello World
    Debug.Print memberInt 'Prints 20
    
End Sub

Sub proc2()
    Debug.Print localString 'prints empty string as localString local variable from main and proc functions are not visible in this scope
    Debug.Print memberInt 'prints 20 as module level variable was modified in proc function
End Sub

Sub module()
    Module1.Init
    'Debug.Print Module1.Module1PrivateText 'compile error as variable is not visible outside of module 1
    Debug.Print Module1.Module1PublicText 'prints Module1 Public Text
End Sub