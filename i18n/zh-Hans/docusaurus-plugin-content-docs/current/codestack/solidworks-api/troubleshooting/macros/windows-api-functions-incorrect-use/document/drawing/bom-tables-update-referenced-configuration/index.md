---
title:  SOLIDWORKS macro to update referenced configuration from BOM tables
caption: Update Referenced Configuration From BOM Tables
---
 Macro will update the referenced configurations for all Bill of Materials (BOM) tables on the active drawing document using SOLIDWORKS API
image: bom-configurations-property.png
labels: [bom, default view, referenced configuration, solidworks api, utility, view]
redirect-from:
  - /2018/03/update-referenced-configuration-from.html
---
This macro will update the referenced configurations for all Bill of Materials (BOM) tables on the active drawing document using SOLIDWORKS API.

![List of configurations to use in the BOM table](bom-configurations-property.png){ width=168 height=320 }

Bill of Materials tables are not associated with the drawing views and will exist even in case view is deleted.
BOMs are not linked to the referenced configuration of the view. So if the view's referenced configuration is changed - the BOM won't update.

This macro will find all BOM tables and update their referenced configurations based on the default view of the sheet.

![Use custom properties value from model option in the sheet properties](use-custom-prps-from-view-sheet-property.png){ width=400 height=165 }

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swDraw As SldWorks.DrawingDoc

Sub main()

    Set swApp = Application.SldWorks
    
    Set swDraw = swApp.ActiveDoc
    
    Dim vSheetNames As Variant
    
    vSheetNames = swDraw.GetSheetNames
    
    Dim i As Integer
        
    For i = 0 To UBound(vSheetNames)
        
        Dim swSheet As SldWorks.Sheet
        Set swSheet = swDraw.Sheet(vSheetNames(i))
        
        Dim swView As SldWorks.View
        Set swView = GetPropertiesView(swSheet)
        
        Dim vBomFeatures As Variant
        vBomFeatures = GetBomFeatures(swSheet)
        ProcessView swView, vBomFeatures
        
    Next
    
End Sub

Sub ProcessView(swView As SldWorks.View, vBomFeatures As Variant)
    
    If Not IsEmpty(vBomFeatures) Then
        
        Dim i As Integer
        
        For i = 0 To UBound(vBomFeatures)
            
            Dim swBomFeat As SldWorks.BomFeature
            
            Set swBomFeat = vBomFeatures(i)
            
            Dim vConfVis As Variant
            Dim vConfNames As Variant
            vConfNames = swBomFeat.GetConfigurations(False, vConfVis)
            
            Dim visConfIndex As Integer
            
            Dim j As Integer
            
            For j = 0 To UBound(vConfNames)
                
                vConfVis(j) = UCase(vConfNames(j)) = UCase(swView.ReferencedConfiguration)
                                
            Next
            
            swBomFeat.SetConfigurations False, vConfVis, vConfNames
            
        Next
        
    End If
    
End Sub

Function GetBomFeatures(swSheet As SldWorks.Sheet) As Variant
    
    Dim vSheets As Variant
    vSheets = swDraw.GetViews()
    
    Dim i As Integer
    
    For i = 0 To UBound(vSheets)
    
        Dim vViews As Variant
        vViews = vSheets(i)
        
        Dim swSheetView As SldWorks.View
        Set swSheetView = vViews(0)
        
        If UCase(swSheetView.Name) = UCase(swSheet.GetName()) Then
            
            Dim swBomFeatures() As SldWorks.BomFeature
            
            Dim vTables As Variant
            vTables = swSheetView.GetTableAnnotations()
            
            Dim j As Integer
            Dim isArrInit As Boolean
            
            For j = 0 To UBound(vTables)
                
                Dim swTableAnn As SldWorks.TableAnnotation
                Set swTableAnn = vTables(j)
                
                If swTableAnn.Type = swTableAnnotationType_e.swTableAnnotation_BillOfMaterials Then
                    If False = isArrInit Then
                        isArrInit = True
                        ReDim swBomFeatures(0)
                    Else
                        ReDim Preserve swBomFeatures(UBound(swBomFeatures) + 1)
                    End If
                    
                    Dim swBomTableAnn As SldWorks.BomTableAnnotation
                    Set swBomTableAnn = swTableAnn
                    
                    Set swBomFeatures(UBound(swBomFeatures)) = swBomTableAnn.BomFeature
                    
                End If
                
            Next
            
            GetBomFeatures = swBomFeatures
            Exit Function
        End If
        
    Next
    
End Function

Function GetPropertiesView(swSheet As SldWorks.Sheet) As SldWorks.View
    
    Dim vViews As Variant
    
    vViews = swSheet.GetViews
    
    If Not IsEmpty(vViews) Then
        
        Dim i As Integer
        
        For i = 0 To UBound(vViews)
            
            Dim swView As SldWorks.View
            Set swView = vViews(i)
            
            If UCase(swView.Name) = UCase(swSheet.CustomPropertyView) Then
                Set GetPropertiesView = swView
                Exit Function
            End If
            
        Next
        
        Set GetPropertiesView = vViews(0) 'use first one
        
    End If
    
End Function

~~~


