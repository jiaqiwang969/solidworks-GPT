Const AUTHOR As String = "CodeStack"
Const KEYWORDS As String = "sample,summary,api"
Const COMMENTS As String = "Example comments"
Const TITLE As String = "Summary API Example"
Const SUBJECT As String = "CodeStack API Examples"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        swModel.SummaryInfo(swSummInfoField_e.swSumInfoAuthor) = AUTHOR
        swModel.SummaryInfo(swSummInfoField_e.swSumInfoKeywords) = KEYWORDS
        swModel.SummaryInfo(swSummInfoField_e.swSumInfoComment) = COMMENTS
        swModel.SummaryInfo(swSummInfoField_e.swSumInfoTitle) = TITLE
        swModel.SummaryInfo(swSummInfoField_e.swSumInfoSubject) = SUBJECT
    Else
        MsgBox "Please open model"
    End If
    
End Sub