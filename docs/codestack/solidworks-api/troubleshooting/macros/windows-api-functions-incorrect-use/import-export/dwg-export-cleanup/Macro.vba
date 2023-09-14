#If VBA7 Then
     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
#Else
     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
#End If

Const FLAT_PATTERN_FEAT_NAME As String = "Flat-Pattern1"
Const OUT_FILE_NAME As String = "D:\sample.dxf"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swPart As SldWorks.PartDoc
    Set swPart = swApp.ActiveDoc
    
    If Not swPart Is Nothing Then
        
        Dim swFeat As SldWorks.Feature
        Set swFeat = swPart.FeatureByName(FLAT_PATTERN_FEAT_NAME)
        
        If Not swFeat Is Nothing Then
            ExportFlatPattern swPart, swFeat, OUT_FILE_NAME
        Else
            MsgBox "Failed to find the flat pattern feature"
        End If
        
    Else
        MsgBox "Please open part document"
    End If
        
End Sub

Sub ExportFlatPattern(Part As SldWorks.PartDoc, feat As SldWorks.Feature, fileName As String)
                    
    Dim swEvListener As ExportEventsListener
    Set swEvListener = New ExportEventsListener
    
    'Set the file name for the exported DXF/DWG file
    Set swEvListener.Part = Part
    swEvListener.FilePath = fileName
    
    feat.Select2 False, 0
    
    'Call the Export command
    Const WM_COMMAND As Long = &H111
    Const CMD_ExportFlatPattern As Long = 54244
    SendMessage swApp.Frame().GetHWnd(), WM_COMMAND, CMD_ExportFlatPattern, 0
    
    'wait for property page to be displayed
    Dim isActive As Boolean
    
    Do
        swApp.GetRunningCommandInfo -1, "", isActive
        DoEvents
    Loop While Not isActive
    
    Set swEvListener.Part = Nothing

    'TODO: call Windows API to set the required options in the property page
    
    'close property page
    Const swCommands_PmOK As Long = -2
    swApp.RunCommand swCommands_PmOK, ""
    
End Sub