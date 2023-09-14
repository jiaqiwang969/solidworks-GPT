Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swAssy As SldWorks.AssemblyDoc
    
    Set swAssy = swApp.ActiveDoc

    Debug.Print SelectComponentByName(swAssy, "E-1/F^E-1/I-1")

End Sub

Function SelectComponentByName(assy As SldWorks.AssemblyDoc, name As String) As Boolean
    
    Dim rootName As String
    rootName = assy.GetTitle()
    
    Dim extPos As Long
    extPos = InStr(rootName, ".")
    If extPos <> -1 Then
        rootName = Left(rootName, extPos - 1)
    End If
    
    Dim selByIdStr As String
    selByIdStr = ConvertToSelectByIDString(rootName, name)
    
    SelectComponentByName = assy.Extension.SelectByID2(selByIdStr, "COMPONENT", 0, 0, 0, False, -1, Nothing, swSelectOption_e.swSelectOptionDefault)
    
End Function

Function ConvertToSelectByIDString(rootName As String, name As String) As String

    Dim vNameParts As Variant
    vNameParts = Split(name, "/")
    
    Dim prevParentName As String
    prevParentName = rootName
    
    Dim selByIdStr As String
    
    Dim i As Integer
    
    For i = 0 To UBound(vNameParts)
        
        Dim curPartName As String
        curPartName = vNameParts(i)
        
        If selByIdStr <> "" Then
            selByIdStr = selByIdStr & "/"
        End If
        
        selByIdStr = selByIdStr & curPartName & "@" & prevParentName
        
        prevParentName = Left(curPartName, InStrRev(curPartName, "-") - 1)
        
    Next
    
    ConvertToSelectByIDString = selByIdStr
    
End Function