Const MESSAGE As String = "Sample model by CodeStack"
Const FEATURE_NAME As String = "www.codestack.net"

Function swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant
    swmRebuild = True
End Function

Function swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant
    
    On Error Resume Next
    
    varApp.SendMsgToUser2 MESSAGE, swMessageBoxIcon_e.swMbInformation, swMessageBoxBtn_e.swMbOk
    swmEditDefinition = True
    
End Function

Function swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant
    
    On Error Resume Next
    
    Const swMacroFeatureSecurityCannotBeDeleted As Long = 1
    Const swMacroFeatureSecurityCannotBeSuppressed As Long = 4
    Const swMacroFeatureSecurityCannotBeReplaced As Long = 8
    Const swMacroFeatureSecurityEnableNote As Long = 16
    
    swmSecurity = swMacroFeatureSecurityCannotBeDeleted + swMacroFeatureSecurityCannotBeReplaced + swMacroFeatureSecurityCannotBeSuppressed + swMacroFeatureSecurityEnableNote

    If varFeat.Name <> FEATURE_NAME Then
        varFeat.Name = FEATURE_NAME
    End If
    
End Function
