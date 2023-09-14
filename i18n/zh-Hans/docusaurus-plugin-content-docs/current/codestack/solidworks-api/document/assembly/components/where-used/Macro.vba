Const CONSIDER_CONFIG As Boolean = False
Const INCLUDE_SUPPRESSED As Boolean = False

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swAssy As SldWorks.AssemblyDoc
    
    Set swAssy = swApp.ActiveDoc
    
    If Not swAssy Is Nothing Then
        Dim swSelMgr As SldWorks.SelectionMgr
        Set swSelMgr = swAssy.SelectionManager
        
        Dim swComp As SldWorks.Component2
        Set swComp = swSelMgr.GetSelectedObjectsComponent3(1, -1)
        
        If Not swComp Is Nothing Then
        
            Dim vComps As Variant
            vComps = GetAllComponentInstances(swAssy, swComp, CONSIDER_CONFIG, INCLUDE_SUPPRESSED)
            
            If Not IsEmpty(vComps) Then
                Dim vParents As Variant
                vParents = GetParents(vComps)
                WhereUsedForm.Components = vParents
                Set WhereUsedForm.Assembly = swAssy
                WhereUsedForm.Show vbModeless
            Else
                MsgBox "Failed to find component instances"
            End If
            
        Else
            MsgBox "Please select component"
        End If
    Else
        MsgBox "Please open assembly"
    End If
    
End Sub

Function GetAllComponentInstances(assy As SldWorks.AssemblyDoc, targComp As SldWorks.Component2, considerConfig As Boolean, includeSuppressed As Boolean)
    
    Dim swCompInst() As SldWorks.Component2
    Dim isInit As Boolean
    
    Dim vComps As Variant
    vComps = assy.GetComponents(False)
    
    Dim i As Integer
    
    For i = 0 To UBound(vComps)
        
        Dim swComp As SldWorks.Component2
        Set swComp = vComps(i)
        
        If UCase(swComp.GetPathName()) = UCase(targComp.GetPathName()) Then
            
            If Not considerConfig Or UCase(swComp.ReferencedConfiguration) = UCase(targComp.ReferencedConfiguration) Then
                
                If includeSuppressed Or False = swComp.IsSuppressed() Then
                    
                    If isInit Then
                        ReDim Preserve swCompInst(UBound(swCompInst()) + 1)
                    Else
                        ReDim swCompInst(0)
                        isInit = True
                    End If
                    
                    Set swCompInst(UBound(swCompInst())) = swComp
                    
                End If
                
            End If
        End If
    Next
    
    If isInit Then
        GetAllComponentInstances = swCompInst
    Else
        GetAllComponentInstances = Empty
    End If
    
End Function

Function GetParents(comps As Variant) As Variant
    
    Dim swParents() As SldWorks.Component2
    Dim isInit As Variant
    
    Dim i As Integer
    
    For i = 0 To UBound(comps)
        
        Dim swComp As SldWorks.Component2
        Set swComp = comps(i)
        
        Dim swParentComp As SldWorks.Component2
        
        Set swParentComp = swComp.GetParent
        
        Dim addParent As Boolean
        addParent = True
        
        If Not isInit Then
            isInit = True
            ReDim swParents(0)
        Else
            If Not Contains(swParents, swParentComp) Then
                ReDim Preserve swParents(UBound(swParents) + 1)
            Else
                addParent = False
            End If
        End If
        
        If addParent Then
            Set swParents(UBound(swParents)) = swParentComp
        End If
        
    Next
    
    GetParents = swParents
    
End Function

Function Contains(vArr As Variant, item As Object) As Boolean
    
    Dim i As Integer
    
    For i = 0 To UBound(vArr)
        If vArr(i) Is item Then
            Contains = True
            Exit Function
        End If
    Next
    
    Contains = False
    
End Function