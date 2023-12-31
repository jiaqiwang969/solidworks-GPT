---
title:  Macro for extended advanced selections using SOLIDWORKS API
caption: Advanced Selections
---
 Macro adds additional selection criteria to the advanced selection tool allowing to select components which are excluded from bom, envelope, float etc.
image: filtered-components-selection.png
labels: [selection, fixed, envelope]
---
![Envelope components selected in the feature manager tree](filtered-components-selection.png){ width=250 }

This macro is using SOLIDWORKS API to extend the available list of selection criteria in the *Advanced Selection* tool in SOLIDWORKS assembly.

Macro allows to select the following group of components (or combinations)

* Float - underconstrained components (components which have minus symbol (-) in their names)
* ExcludedFromBom - components which are excluded from Bill Of Materials (including Envelope components)
* Envelope - components which are marked as envelope
* NoMates - components which contain no mates

In order to configure the macro modify the *CRITERIA*  and *TOP_LEVEL_ONLY* constants in the beginning of the macro.

~~~ vb
Const CRITERIA As Integer = Criteria_e.Float + Criteria_e.NoMates
Const TOP_LEVEL_ONLY As Boolean = False
~~~

*TOP_LEVEL_ONLY* indicates if only top level components should be used for filtering. Set this option to *True* to select nested components as well

~~~ vb
Const TOP_LEVEL_ONLY As Boolean = True
~~~

*CRITERIA* is a combination of filters where *Or* operator is applied.

For example

~~~ vb
Const CRITERIA As Integer = Criteria_e.Float + Criteria_e.NoMates 'All float components or components with no mates wil be selected
~~~

~~~ vb
Const CRITERIA As Integer = Criteria_e.Envelope 'Only envelope components will be selected
~~~

Modify the filter in the macro as required.

~~~ vb
Enum Criteria_e
    Float = 1
    ExcludedFromBom = 2
    Envelope = 4
    NoMates = 8
End Enum

Const CRITERIA As Integer = Criteria_e.Float + Criteria_e.NoMates
Const TOP_LEVEL_ONLY As Boolean = False

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swAssy As SldWorks.AssemblyDoc
    
    Set swAssy = swApp.ActiveDoc
    
    If Not swAssy Is Nothing Then
    
        SelectComponents swAssy, CRITERIA, TOP_LEVEL_ONLY
    
    Else
        MsgBox "Please open assembly"
    End If
    
    Dim val As Criteria_e
    val = Envelope + ExcludedFromBom + Float
    
    Debug.Print (val And Envelope) = Envelope
    Debug.Print (val And ExcludedFromBom) = ExcludedFromBom
    Debug.Print (val And Float) = Float
    
End Sub

Function SelectComponents(assy As SldWorks.AssemblyDoc, crit As Criteria_e, topLevelOnly As Boolean)
    
    Dim vComps As Variant
    vComps = assy.GetComponents(topLevelOnly)
    
    Dim swFilteredComps() As SldWorks.Component2
    Dim isArrInit As Boolean
    isArrInit = False
    
    Dim i As Integer
    
    For i = 0 To UBound(vComps)
        
        Dim swComp As SldWorks.Component2
        Set swComp = vComps(i)
        
        Debug.Print swComp.Name2
        
        Dim isFiltered As Boolean
        isFiltered = False
        
        If IsFlagSet(crit, Criteria_e.Float) And swComp.GetConstrainedStatus() <> swConstrainedStatus_e.swFullyConstrained Then
            isFiltered = True
        ElseIf IsFlagSet(crit, Criteria_e.ExcludedFromBom) And swComp.ExcludeFromBOM Then
            isFiltered = True
        ElseIf IsFlagSet(crit, Criteria_e.Envelope) And swComp.IsEnvelope() Then
            isFiltered = True
        ElseIf IsFlagSet(crit, Criteria_e.NoMates) And IsEmpty(swComp.GetMates()) Then
            isFiltered = True
        End If
        
        If True = isFiltered Then
            If False = isArrInit Then
                isArrInit = True
                ReDim swFilteredComps(0)
            Else
                ReDim Preserve swFilteredComps(UBound(swFilteredComps) + 1)
            End If
            
            Set swFilteredComps(UBound(swFilteredComps)) = swComp
            
        End If
        
    Next
    
    If True = isArrInit Then
        Dim swModel As SldWorks.ModelDoc2
        Set swModel = assy
        If UBound(swFilteredComps) + 1 <> swModel.Extension.MultiSelect2(swFilteredComps, False, Nothing) Then
            Err.Raise vbError, , "Failed to select components"
        End If
    End If
    
End Function

Function IsFlagSet(val As Criteria_e, flag As Criteria_e) As Boolean
    IsFlagSet = (val And flag) = flag
End Function
~~~


