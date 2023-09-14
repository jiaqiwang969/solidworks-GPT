#If VBA7 Then
     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
#Else
     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long
#End If

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    swModel.ShowConfiguration2 "B"
    
    Dim swRootComp As SldWorks.Component2
    Set swRootComp = swModel.ConfigurationManager.ActiveConfiguration.GetRootComponent3(False)
    
    Dim swComp As SldWorks.Component2
    
    Set swComp = swRootComp.GetChildren()(0)
    
    Dim swTransform As SldWorks.MathTransform
    
    Dim dMatrix(15) As Double
    dMatrix(0) = 1: dMatrix(1) = 0: dMatrix(2) = 0: dMatrix(3) = 0
    dMatrix(4) = 1: dMatrix(5) = 0: dMatrix(6) = 0: dMatrix(7) = 0
    dMatrix(8) = 1: dMatrix(9) = -0.03: dMatrix(10) = -0.05: dMatrix(11) = -0.01
    dMatrix(12) = 1: dMatrix(13) = 0: dMatrix(14) = 0: dMatrix(15) = 0
    
    Dim swMathUtils As SldWorks.MathUtility
    
    Set swMathUtils = swApp.GetMathUtility
    
    Set swTransform = swMathUtils.CreateTransform(dMatrix)
    
    swComp.Transform = swTransform
    
    swModel.EditRebuild3
    
    Stop 'Component is aligned
	
    'FixComponentInThisConfiguration swComp
        
    swModel.ShowConfiguration2 "A"
    
    Dim swAssy As SldWorks.AssemblyDoc
    Set swAssy = swModel
    
    swAssy.AddComponent5 swComp.GetPathName(), 0, 0, False, "", 0.2, 0.2, 0.2
    
    swModel.EditRebuild3
    
    Stop 'New component is added into configuration A
	
    swModel.ShowConfiguration2 "B"
	
    Stop 'Component in configuraiton B lost its position
    
End Sub

Sub FixComponentInThisConfiguration(comp As SldWorks.Component2)
    
    If False <> comp.Select4(False, Nothing, False) Then
        Const WM_COMMAND As Long = &H111
        Const CMD_FixCompInThisConf As Long = 51605
        SendMessage swApp.Frame().GetHWnd(), WM_COMMAND, CMD_FixCompInThisConf, 0
    Else
        Err.Raise vbError, "", "Failed to select component"
    End If
    
End Sub