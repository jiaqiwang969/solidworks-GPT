---
layout: sw-tool
title: Macro to colorize SOLIDWORKS sheet metal and weldment cut-list items
caption: Colorize Cut Lists
description: SOLIDWORKS VBA macro to colorize all the cut-list item bodies (sheet metal and weldments) based on the value of the custom property
image: color-cut-list.svg
labels: [cut-list,sheet metal,weldment,color]
group: Cut-List
---
This VBA macro allows to assign a unique color for each group of cut-list items (sheet metal or weldment) based on the value of the custom property.

The most common use of this macro will be to differentiate different type of weldment items based on the profile size.

Macro will automatically assign random color to the specific group. It is possible to specify the constant colors to use for the specific group instead of random colors.

## Configuration

In order to specify the name of the custom property to read the value from and group cut-list items, change the value of the **PRP_NAME** constant

~~~ vb
Const PRP_NAME As String = "Description" 'Change the value of Description to select different custom property
~~~

In order to specify colors it is required to modify the values within the **InitColors** method.

~~~ vb
Sub InitColors(Optional dummy As Variant = Empty)

    ColorsMap.Add "SB BEAM 80 X 6", RGB(255, 0, 0)
    ColorsMap.Add "TUBE, RECTANGULAR 50 X 30 X 2.60", RGB(0, 255, 0)
    
End Sub
~~~

To add new color to the map add the following line

~~~ vb
ColorsMap.Add "[PROPERTY VALUE]", RGB([Red], [Green], [Blue])
~~~

For example to add the blue (RGB = 0, 0, 255) color to the weldment profile "50 X 50", it is required to add the following line

~~~ vb
ColorsMap.Add "50 X 50", RGB(0, 0, 255)
~~~

~~~ vb
Const PRP_NAME As String = "Description"

Dim swApp As SldWorks.SldWorks
Dim ColorsMap As Object

Sub main()

try_:
    
    On Error GoTo catch_
    
    Set ColorsMap = CreateObject("Scripting.Dictionary")

    ColorsMap.CompareMode = vbTextCompare

    InitColors

    Set swApp = Application.SldWorks
    
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
        If swModel.GetType() = swDocumentTypes_e.swDocPART Then
            Dim vCutLists As Variant
            vCutLists = GetCutLists(swModel)
            ColorizeCutLists vCutLists
            swModel.GraphicsRedraw2
        Else
            Err.Raise vbError, "", "Only part document is supported"
        End If
    Else
        Err.Raise vbError, "", "Open part document"
    End If
    
    GoTo finally_
    
catch_:
    MsgBox Err.Description, vbCritical
finally_:
    
End Sub

Sub InitColors(Optional dummy As Variant = Empty)

    ColorsMap.Add "SB BEAM 80 X 6", RGB(255, 0, 0)
    ColorsMap.Add "TUBE, RECTANGULAR 50 X 30 X 2.60", RGB(0, 255, 0)
    
End Sub

Sub ColorizeCutLists(vCutLists As Variant)
    
    Dim i As Integer
    
    For i = 0 To UBound(vCutLists)
        
        Dim swCutList As SldWorks.Feature
        Set swCutList = vCutLists(i)
        
        Dim swBodyFolder As SldWorks.BodyFolder
        Set swBodyFolder = swCutList.GetSpecificFeature2
        
        If swBodyFolder.GetBodyCount() > 0 Then
            
            Dim swCustPrpsMgr As SldWorks.CustomPropertyManager
            Set swCustPrpsMgr = swCutList.CustomPropertyManager
            Dim prpVal As String
            swCustPrpsMgr.Get5 PRP_NAME, True, "", prpVal, False
            
            Dim color As Long
            
            If ColorsMap.Exists(prpVal) Then
                color = ColorsMap(prpVal)
            Else
                color = RGB(Int(255 * Rnd), Int(255 * Rnd), Int(255 * Rnd))
                ColorsMap.Add prpVal, color
            End If
            
            Dim j As Integer
            
            Dim vBodies As Variant
            vBodies = swBodyFolder.GetBodies
            
            For j = 0 To UBound(vBodies)
            
                Dim swBody As SldWorks.Body2
                Set swBody = vBodies(j)
                
                Dim RGBHex As String

                RGBHex = Right("000000" & Hex(color), 6)
                
                Dim dMatPrps(8) As Double
                
                dMatPrps(0) = CInt("&H" & Mid(RGBHex, 5, 2)) / 255
                dMatPrps(1) = CInt("&H" & Mid(RGBHex, 3, 2)) / 255
                dMatPrps(2) = CInt("&H" & Mid(RGBHex, 1, 2)) / 255
                dMatPrps(3) = 1
                dMatPrps(4) = 1
                dMatPrps(5) = 0.5
                dMatPrps(6) = 0.3125
                dMatPrps(7) = 0
                dMatPrps(8) = 0
                
                swBody.MaterialPropertyValues2 = dMatPrps
            Next
            
        End If
        
    Next
    
End Sub

Function GetCutLists(model As SldWorks.ModelDoc2) As Variant

    Dim swFeat As SldWorks.Feature
    
    Dim swCutLists() As SldWorks.Feature
    
    Set swFeat = model.FirstFeature
    
    While Not swFeat Is Nothing
        
        If swFeat.GetTypeName2 <> "HistoryFolder" Then
        
            ProcessFeature swFeat, swCutLists
            
            TraverseSubFeatures swFeat, swCutLists
        
        End If
        
        Set swFeat = swFeat.GetNextFeature
        
    Wend
    
    GetCutLists = swCutLists
    
End Function

Sub TraverseSubFeatures(parentFeat As SldWorks.Feature, cutLists() As SldWorks.Feature)
    
    Dim swChildFeat As SldWorks.Feature
    Set swChildFeat = parentFeat.GetFirstSubFeature
    
    While Not swChildFeat Is Nothing
        ProcessFeature swChildFeat, cutLists
        Set swChildFeat = swChildFeat.GetNextSubFeature()
    Wend
    
End Sub

Sub ProcessFeature(feat As SldWorks.Feature, cutLists() As SldWorks.Feature)
    
    If feat.GetTypeName2() = "SolidBodyFolder" Then
        Dim swBodyFolder As SldWorks.BodyFolder
        Set swBodyFolder = feat.GetSpecificFeature2
        swBodyFolder.UpdateCutList
    ElseIf feat.GetTypeName2() = "CutListFolder" Then
        
        If Not Contains(cutLists, feat) Then
            If (Not cutLists) = -1 Then
                ReDim cutLists(0)
            Else
                ReDim Preserve cutLists(UBound(cutLists) + 1)
            End If
            
            Set cutLists(UBound(cutLists)) = feat
        End If
        
    End If
    
End Sub

Function Contains(arr As Variant, item As Object) As Boolean
    
    Dim i As Integer
    
    For i = 0 To UBound(arr)
        If arr(i) Is item Then
            Contains = True
            Exit Function
        End If
    Next
    
    Contains = False
    
End Function

~~~


