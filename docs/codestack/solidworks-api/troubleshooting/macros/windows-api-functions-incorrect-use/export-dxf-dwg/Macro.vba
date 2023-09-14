Dim swApp As SldWorks.SldWorks

Const EXPORT_NAME_TEMPLATE As String = "[title]_[sketch].dxf"

Sub main()

    Set swApp = Application.SldWorks
    
try:
    On Error GoTo catch
    
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = swApp.ActiveDoc
    
    Dim swSelMgr As SldWorks.SelectionMgr
    Set swSelMgr = swModel.SelectionManager
    
    Dim swSketchFeat As SldWorks.Feature
    Set swSketchFeat = swSelMgr.GetSelectedObject6(1, -1)
    
    If swSketchFeat.GetTypeName2() = "ProfileFeature" Then
        
        swSketchFeat.Select2 False, -1
        swModel.EditCopy
        
        Dim drawTemplate As String
        drawTemplate = swApp.GetUserPreferenceStringValue(swUserPreferenceStringValue_e.swDefaultTemplateDrawing)
        
        If drawTemplate = "" Then
            Err.Raise vbError, "", "Failed to find the default template"
        End If
        
        Dim swDraw As SldWorks.ModelDoc2
        Set swDraw = swApp.NewDocument(drawTemplate, swDwgPaperSizes_e.swDwgPapersUserDefined, 0.1, 0.1)
        swDraw.Paste
        
        Dim errs As Long
        Dim warns As Long
        Dim exportFilePath As String
        exportFilePath = GetExportFilePath(swModel, swSketchFeat)
        
        If False = swDraw.Extension.SaveAs(exportFilePath, swSaveAsVersion_e.swSaveAsCurrentVersion, swSaveAsOptions_e.swSaveAsOptions_Silent, Nothing, errs, warns) Then
            Err.Raise vbError, "", "Failed to export to DXF, DWG"
        End If
        
        swApp.CloseDoc swDraw.GetTitle
        
    Else
        Err.Raise vbError, "", "Please select 2D sketch to export"
    End If
    
    GoTo finally
catch:
    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk
finally:
    
End Sub

Function GetExportFilePath(model As SldWorks.ModelDoc2, sketch As SldWorks.Feature) As String

    Const PLACEHOLDER_TITLE As String = "[title]"
    Const PLACEHOLDER_SKETCH As String = "[sketch]"
    
    Dim path As String
    Dim dir As String
    Dim title As String
    
    path = model.GetPathName
    
    If path = "" Then
        Err.Raise vbError, "", "Original model is never saved"
    End If
    
    title = Mid(path, InStrRev(path, "\") + 1, InStrRev(path, ".") - InStrRev(path, "\") - 1)
    dir = Left(path, InStrRev(path, "\"))
    
    Dim newTitle As String
    Dim newPath As String
    
    newTitle = Replace(EXPORT_NAME_TEMPLATE, PLACEHOLDER_TITLE, title)
    newTitle = Replace(newTitle, PLACEHOLDER_SKETCH, sketch.Name)
    newPath = dir & newTitle
            
    GetExportFilePath = newPath
    
End Function