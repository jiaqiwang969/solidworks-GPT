---
layout: sw-tool
title: Export flat patterns from SOLIDWORKS part or assembly components
caption: Export Flat Patterns From Part Or Assembly Components
description: VBA macro to export flat patterns from all components of the active assembly or active part
image: assembly-flat-pattern.svg
labels: [where used,parent,component]
group: Import/Export
redirect-from:
    - /solidworks-api/document/sheet-metal/export-assembly-components/
---
This VBA macro allows to export all flat patterns to DXF/DWG from all sheet metal components in the active SOLIDWORKS assembly or an active part document.

Macro enables flexibility in specifying the name of the output file allowing to use placeholders (original file name, feature name, custom property, cut-list custom property, etc.) combined with the free text and supports specifying sub-folders.

The following message box will be displayed once the exporting is completed.

![Message box displayed when exporting is completed](operation-completed.png)

{%youtube id: FtXkdSlekG8 %}

## Configuration

Macro can be configured by modifying the **OUT_NAME_TEMPLATE** and **FLAT_PATTERN_OPTIONS** constants

### Output name template

This constant allows to specify template for the output path of the flat pattern.

This can be either absolute or relative path. If later, result will be saved relative to the assembly directory.

Extension (either .dxf or .dwg) must be specified as the part of naming template

The following placeholders are supported

* <\_FileName\_> - name of the part file (without extension) where the flat pattern resides in
* <\_FeatureName\_> - name of the flat pattern feature
* <\_ConfName\_> - name of the configuration of this flat pattern (i.e. referenced configuration of the component)
* <\_AssmFileName\_> - name of the main assembly
* <$CLPRP:[PropertyName]> - any name of the cut-list property to read value from, e.g. \<Thickness\> is replaced with the value of cut-list custom property *Thickness*
* <$PRP:[PropertyName]> - any name of the custom property of sheet metal part to read value from, e.g. \<PartNo\> is replaced with the value of cut-list custom property *PartNo*
* <$ASSMPRP:[PropertyName]> - any name of the custom property of main assembly to read value from, e.g. \<ProductId\> is replaced with the value of cut-list custom property *ProductId*

Placeholders will be resolved for each flat pattern at runtime.

For example the following value will save flat patterns with the name of the part document in the *DXFs* sub-folder in the same folder as main assembly

~~~ vb
Const OUT_NAME_TEMPLATE As String = "DXFs\<_FileName_>.dxf"
~~~

While the following name will save all of the flat patterns as DWG file into the *Output* folder in *D* drive, where the file name will be extracted from the *PartNo* property for each corresponding flat pattern.

~~~ vb
Const OUT_NAME_TEMPLATE As String = "D:\Output\<$CLPRP:PartNo>.dwg"
~~~

The following setup will create sub-folder corresponding to value of the **Thickness** custom property in cut-lists and name files using the **ProductName** custom property extracted from the main assembly followed by underscore symbol and value of **PartNo** property from sheet metal part document.

~~~ vb
Const OUT_NAME_TEMPLATE As String = "D:\Output\<$CLPRP:Thickness>\<$ASSMPRP:ProductName>_<$PRP:PartNo>.dwg"
~~~

### Include quantity into file name

This macro does not have an explicit variable to include quantity of flat patterns into the file name. It is however possible to extract the quantity of the multi body sheet metal part by including the value of automatic **QUANTITY** custom property with **<$CLPRP:QUANTITY>** placeholder.

In order to include the component quantity in the assembly, use the [Write component quantity in the SOLIDWORKS assembly to custom property
](/docs/codestack/solidworks-api/document/assembly/components/write-quantities/) macro. Run this macro before exporting to create custom property with the quantity value and then use **<$CLPRP:Qty>** placeholder in order to include this into the output file name.

> Note, this macro will not multiple the quantity of multi-body sheet metal part and the component quantity

### Flat pattern options

Options can be configured by specifying the values of **FLAT_PATTERN_OPTIONS**. Use **+** to combine options

![Flat pattern export options](flat-pattern-export-options.png)

For example to export hidden edges, library features and forming tools, use the setting below.

~~~ vb
Const FLAT_PATTERN_OPTIONS As Integer = SheetMetalOptions_e.IncludeHiddenEdges + SheetMetalOptions_e.ExportLibraryFeatures + SheetMetalOptions_e.ExportFormingTools
~~~

> Note, geometry option must always be specified as it is required for the flat pattern export

## Skip created files

**SKIP_EXISTING_FILES** options allows to specify if macro should regenerate output file if it already exists.

Set this option to true to skip exporting the file if the output file (.dxf or .dwg) exists on the target location.

~~~ vb
Const SKIP_EXISTING_FILES As Boolean = True
~~~

This option can be useful when processing large assemblies and it is required to continue the execution after SOLIDWORKS restart. Exporting flat patterns is a heavy performance operation so SOLIDWORKS may crash or hang when large job is processed. This option can help to continue the exporting after the restart.

## Troubleshooting

If macro reports an error, in some cases it might not be immediately evident what is causing an error as the error details are 'swallowed' by exception handler. In order to disable errors handling and reveal the exact line causing the error comment all *On Error GoTo catch_* lines in the code by placing the apostrophe ' symbol at the beginning of the line as shown below.

~~~ vb jagged
Sub main()
        
    Set swApp = Application.SldWorks
    
try_:
    'On Error GoTo catch_
~~~

~~~ vb jagged
Sub ExportFlatPattern(part As SldWorks.PartDoc, flatPattern As SldWorks.Feature, outFilePath As String, opts As SheetMetalOptions_e, conf As String)
    
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = part
    
    Dim error As ErrObject
    Dim hide As Boolean

try_:
    
    'On Error GoTo catch_
~~~

Please submit the [bug report](https://github.com/xarial/codestack/issues/new?labels=bug) and attach snapshot of this error and model used to reproduce (if possible)

## Notes

* Macro will ask to resolve lightweight components if any. Macro can generate error if components are not resolved
* Each flat pattern from the multi-body sheet metal part will be exported. Make sure to use either <\_FeatureName\_> or <$CLPRP:[PropertyName]> to differentiate between result files
* $PRP and $ASSMPRP values will be firstly extracted from the configuration specific properties and if empty from the general file properties
* If specified property does not exist (for $CLPRP, $PRP and $ASSMPRP) - empty string is used as the placeholder value
* Macro will process all distinct components (file path + configuration)
* Macro will automatically create folders if required
* Macro will replace all path invalid symbols with \_
* Macro will only export unique bodies grouped under cut-list and skip flat patterns which belong to already exported cut-list

~~~ vb
Enum SheetMetalOptions_e
    ExportFlatPatternGeometry = 1
    IncludeHiddenEdges = 2
    ExportBendLines = 4
    IncludeSketches = 8
    MergeCoplanarFaces = 16
    ExportLibraryFeatures = 32
    ExportFormingTools = 64
    ExportBoundingBox = 2048
End Enum

Const SKIP_EXISTING_FILES As Boolean = False

Const OUT_NAME_TEMPLATE As String = "DXFs\<_FileName_>_<_FeatureName_>_<_ConfName_>_<$CLPRP:Description>.dxf"

Const FLAT_PATTERN_OPTIONS As Integer = SheetMetalOptions_e.ExportBendLines + SheetMetalOptions_e.ExportFlatPatternGeometry

Dim swApp As SldWorks.SldWorks

Sub main()
        
    Set swApp = Application.SldWorks
    
try_:
    On Error GoTo catch_
    
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = swApp.ActiveDoc
    
    If swModel Is Nothing Then
        Err.Raise vbError, "", "Please open assembly or part document"
    End If
    
    If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Then
    
        Dim swAssy As SldWorks.AssemblyDoc
        
        Set swAssy = swModel
            
        swAssy.ResolveAllLightWeightComponents True
            
        Dim vComps As Variant
        vComps = GetDistinctSheetMetalComponents(swAssy)
        
        Dim i As Integer
        
        For i = 0 To UBound(vComps)
        
            Dim swComp As SldWorks.Component2
            Set swComp = vComps(i)
            
            ProcessSheetMetalModel swAssy, swComp.GetModelDoc2(), swComp.ReferencedConfiguration
        
        Next
        
    ElseIf swModel.GetType() = swDocumentTypes_e.swDocPART Then
        
        Dim swPart As SldWorks.PartDoc
        Set swPart = swApp.ActiveDoc
        
        ProcessSheetMetalModel swPart, swPart, swPart.ConfigurationManager.ActiveConfiguration.Name
        
    Else
        Err.Raise vbError, "", "Only assembly and part documents are supported"
    End If
    
    swApp.SendMsgToUser2 "Operation completed", swMessageBoxIcon_e.swMbInformation, swMessageBoxBtn_e.swMbOk
    
    GoTo finally_
    
catch_:
    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk
finally_:

End Sub

Function GetDistinctSheetMetalComponents(assy As SldWorks.AssemblyDoc) As Variant
    
    Dim vComps As Variant
    vComps = assy.GetComponents(False)
        
    Dim i As Integer
    
    Dim swSheetMetalComps() As SldWorks.Component2
    
    For i = 0 To UBound(vComps)
        
        Dim swComp As SldWorks.Component2
        Set swComp = vComps(i)
                
        If False = swComp.IsSuppressed() Then
            
            If Not ContainsComponent(swSheetMetalComps, swComp) Then
                
                If IsSheetMetalComponent(swComp) Then
                    If (Not swSheetMetalComps) = -1 Then
                        ReDim swSheetMetalComps(0)
                    Else
                        ReDim Preserve swSheetMetalComps(UBound(swSheetMetalComps) + 1)
                    End If
                    
                    Set swSheetMetalComps(UBound(swSheetMetalComps)) = swComp
                End If
            
            End If
            
        End If
        
    Next
    
    If (Not swSheetMetalComps) = -1 Then
        GetDistinctSheetMetalComponents = Empty
    Else
        GetDistinctSheetMetalComponents = swSheetMetalComps
    End If
    
End Function

Function IsSheetMetalComponent(comp As SldWorks.Component2) As Boolean
    
    Dim vBodies As Variant
    vBodies = comp.GetBodies3(swBodyType_e.swSolidBody, Empty)
    
    If Not IsEmpty(vBodies) Then
        
        Dim i As Integer
        
        For i = 0 To UBound(vBodies)
            Dim swBody As SldWorks.Body2
            Set swBody = vBodies(i)
            
            If False <> swBody.IsSheetMetal() Then
                IsSheetMetalComponent = True
                Exit Function
            End If
            
        Next
    End If
    
    IsSheetMetalComponent = False
    
End Function

Function ContainsComponent(comps As Variant, swComp As SldWorks.Component2) As Boolean

    Dim i As Integer
    
    For i = 0 To UBound(comps)
        Dim swThisComp As SldWorks.Component2
        Set swThisComp = comps(i)
        
        If swThisComp.GetPathName() = swComp.GetPathName() And swThisComp.ReferencedConfiguration = swComp.ReferencedConfiguration Then
            ContainsComponent = True
            Exit Function
        End If
    Next
    
    ContainsComponent = False

End Function

Function ComposeOutFileName(template As String, rootModel As SldWorks.ModelDoc2, sheetMetalModel As SldWorks.ModelDoc2, conf As String, flatPatternFeat As SldWorks.Feature, cutListFeat As SldWorks.Feature) As String

    Dim regEx As Object
    Set regEx = CreateObject("VBScript.RegExp")
    
    regEx.Global = True
    regEx.IgnoreCase = True
    regEx.Pattern = "<[^>]*>"
    
    Dim regExMatches As Object
    Set regExMatches = regEx.Execute(template)
    
    Dim i As Integer
    
    Dim outFileName As String
    outFileName = template
    
    For i = regExMatches.Count - 1 To 0 Step -1
        
        Dim regExMatch As Object
        Set regExMatch = regExMatches.Item(i)
                    
        Dim tokenName As String
        tokenName = Mid(regExMatch.Value, 2, Len(regExMatch.Value) - 2)
        
        outFileName = Left(outFileName, regExMatch.FirstIndex) & ResolveToken(tokenName, rootModel, sheetMetalModel, conf, flatPatternFeat, cutListFeat) & Right(outFileName, Len(outFileName) - (regExMatch.FirstIndex + regExMatch.Length))
    Next
    
    ComposeOutFileName = ReplaceInvalidPathSymbols(GetFullPath(rootModel, outFileName))
    
End Function

Function ReplaceInvalidPathSymbols(path As String) As String
    
    Const REPLACE_SYMB As String = "_"
    
    Dim res As String
    res = Right(path, Len(path) - Len("X:\"))
    
    Dim drive As String
    drive = Left(path, Len("X:\"))
    
    Dim invalidSymbols As Variant
    invalidSymbols = Array("/", ":", "*", "?", """", "<", ">", "|")
    
    Dim i As Integer
    For i = 0 To UBound(invalidSymbols)
        Dim invalidSymb As String
        invalidSymb = CStr(invalidSymbols(i))
        res = Replace(res, invalidSymb, REPLACE_SYMB)
    Next
    
    ReplaceInvalidPathSymbols = drive + res
    
End Function

Function ResolveToken(token As String, rootModel As SldWorks.ModelDoc2, sheetMetalModel As SldWorks.ModelDoc2, conf As String, flatPatternFeat As SldWorks.Feature, cutListFeat As SldWorks.Feature) As String
    
    Const FILE_NAME_TOKEN As String = "_FileName_"
    Const ASSM_FILE_NAME_TOKEN As String = "_AssmFileName_"
    Const FEAT_NAME_TOKEN As String = "_FeatureName_"
    Const CONF_NAME_TOKEN As String = "_ConfName_"
    
    Const PRP_TOKEN As String = "$PRP:"
    Const CUT_LIST_PRP_TOKEN As String = "$CLPRP:"
    Const ASM_PRP_TOKEN As String = "$ASSMPRP:"
    
    Select Case LCase(token)
        Case LCase(FILE_NAME_TOKEN)
            ResolveToken = GetFileNameWithoutExtension(sheetMetalModel.GetPathName)
        Case LCase(FEAT_NAME_TOKEN)
            ResolveToken = flatPatternFeat.Name
        Case LCase(CONF_NAME_TOKEN)
            ResolveToken = conf
        Case LCase(ASSM_FILE_NAME_TOKEN)
            If rootModel.GetPathName() = "" Then
                Err.Raise vbError, "", "Assembly must be saved to use " & ASSM_FILE_NAME_TOKEN
            End If
            ResolveToken = GetFileNameWithoutExtension(rootModel.GetPathName())
        Case Else
            
            Dim prpName As String
                        
            If Left(token, Len(PRP_TOKEN)) = PRP_TOKEN Then
                prpName = Right(token, Len(token) - Len(PRP_TOKEN))
                ResolveToken = GetModelPropertyValue(sheetMetalModel, conf, prpName)
            ElseIf Left(token, Len(ASM_PRP_TOKEN)) = ASM_PRP_TOKEN Then
                prpName = Right(token, Len(token) - Len(ASM_PRP_TOKEN))
                ResolveToken = GetModelPropertyValue(rootModel, rootModel.ConfigurationManager.ActiveConfiguration.Name, prpName)
            ElseIf Left(token, Len(CUT_LIST_PRP_TOKEN)) = CUT_LIST_PRP_TOKEN Then
                prpName = Right(token, Len(token) - Len(CUT_LIST_PRP_TOKEN))
                ResolveToken = GetPropertyValue(cutListFeat.CustomPropertyManager, prpName)
            Else
                Err.Raise vbError, "", "Unrecognized token: " & token
            End If
            
    End Select
    
End Function

Function GetModelPropertyValue(model As SldWorks.ModelDoc2, confName As String, prpName As String) As String
    
    Dim prpVal As String
    Dim swCustPrpMgr As SldWorks.CustomPropertyManager
    
    Set swCustPrpMgr = model.Extension.CustomPropertyManager(confName)
    prpVal = GetPropertyValue(swCustPrpMgr, prpName)
    
    If prpVal = "" Then
        Set swCustPrpMgr = model.Extension.CustomPropertyManager("")
        prpVal = GetPropertyValue(swCustPrpMgr, prpName)
    End If
    
    GetModelPropertyValue = prpVal
    
End Function

Function GetPropertyValue(custPrpMgr As SldWorks.CustomPropertyManager, prpName As String) As String
    Dim resVal As String
    custPrpMgr.Get2 prpName, "", resVal
    GetPropertyValue = resVal
End Function

Function GetFileNameWithoutExtension(path As String) As String
    GetFileNameWithoutExtension = Mid(path, InStrRev(path, "\") + 1, InStrRev(path, ".") - InStrRev(path, "\") - 1)
End Function

Function GetCutListFeatures(model As SldWorks.ModelDoc2) As Variant
    GetCutListFeatures = GetFeaturesByType(model, "CutListFolder")
End Function

Function GetFlatPatternFeatures(model As SldWorks.ModelDoc2) As Variant
    GetFlatPatternFeatures = GetFeaturesByType(model, "FlatPattern")
End Function

Sub ProcessSheetMetalModel(rootModel As SldWorks.ModelDoc2, sheetMetalModel As SldWorks.ModelDoc2, conf As String)
        
    Dim vCutListFeats As Variant
    vCutListFeats = GetCutListFeatures(sheetMetalModel)
    
    If Not IsEmpty(vCutListFeats) Then
        
        Dim vFlatPatternFeats As Variant
        vFlatPatternFeats = GetFlatPatternFeatures(sheetMetalModel)
        
        If Not IsEmpty(vFlatPatternFeats) Then
            
            Dim swProcessedCutListsFeats() As SldWorks.Feature
            
            Dim i As Integer
    
            For i = 0 To UBound(vFlatPatternFeats)
                
                Dim swFlatPatternFeat As SldWorks.Feature
                Dim swFlatPattern As SldWorks.FlatPatternFeatureData
                
                Set swFlatPatternFeat = vFlatPatternFeats(i)
                
                Set swFlatPattern = swFlatPatternFeat.GetDefinition
                
                Dim swFixedEnt As SldWorks.Entity
                
                Set swFixedEnt = swFlatPattern.FixedFace2
                
                Dim swBody As SldWorks.Body2
                
                If TypeOf swFixedEnt Is SldWorks.Face2 Then
                    Dim swFixedFace As SldWorks.Face2
                    Set swFixedFace = swFixedEnt
                    Set swBody = swFixedFace.GetBody
                ElseIf TypeOf swFixedEnt Is SldWorks.Edge Then
                    Dim swFixedEdge As SldWorks.Edge
                    Set swFixedEdge = swFixedEnt
                    Set swBody = swFixedEdge.GetBody
                ElseIf TypeOf swFixedEnt Is SldWorks.Vertex Then
                    Dim swFixedVert As SldWorks.Vertex
                    Set swFixedVert = swFixedEnt
                    Set swBody = swFixedVert.GetBody
                End If
                
                Dim swCutListFeat As SldWorks.Feature
                Set swCutListFeat = FindCutListFeature(vCutListFeats, swBody)
                
                If Not swCutListFeat Is Nothing Then
                    
                    Dim isUnique As Boolean
                                        
                    If (Not swProcessedCutListsFeats) = -1 Then
                        isUnique = True
                    ElseIf Not ContainsSwObject(swProcessedCutListsFeats, swCutListFeat) Then
                        isUnique = True
                    Else
                        isUnique = False
                    End If
                    
                    If isUnique Then
                        
                        If (Not swProcessedCutListsFeats) = -1 Then
                            ReDim swProcessedCutListsFeats(0)
                        Else
                            ReDim Preserve swProcessedCutListsFeats(UBound(swProcessedCutListsFeats) + 1)
                        End If
                        
                        Set swProcessedCutListsFeats(UBound(swProcessedCutListsFeats)) = swCutListFeat
                        
                        Dim outFileName As String
                        outFileName = ComposeOutFileName(OUT_NAME_TEMPLATE, rootModel, sheetMetalModel, conf, swFlatPatternFeat, swCutListFeat)
                        
                        If Not SKIP_EXISTING_FILES Or Not FileExists(outFileName) Then
                            ExportFlatPattern sheetMetalModel, swFlatPatternFeat, outFileName, FLAT_PATTERN_OPTIONS, conf
                        End If
                    End If
                    
                Else
                    Err.Raise vbError, "", "Failed to find cut-list for flat pattern " & swFlatPatternFeat.Name
                End If
                
            Next
            
        Else
            Err.Raise vbError, "", "No flat pattern features found"
        End If
        
    Else
        Err.Raise vbError, "", "No cut-list items found"
    End If
    
End Sub

Function FileExists(filePath As String) As Boolean
    FileExists = Dir(filePath) <> ""
End Function

Function FindCutListFeature(vCutListFeats As Variant, body As SldWorks.Body2) As SldWorks.Feature
    
    Dim i As Integer
    
    For i = 0 To UBound(vCutListFeats)
        
        Dim swCutListFeat As SldWorks.Feature
        Set swCutListFeat = vCutListFeats(i)
        
        Dim swBodyFolder As SldWorks.BodyFolder
        Set swBodyFolder = swCutListFeat.GetSpecificFeature2
        
        Dim vBodies As Variant
        
        vBodies = swBodyFolder.GetBodies
        
        If ContainsSwObject(vBodies, body) Then
            Set FindCutListFeature = swCutListFeat
        End If
            
    Next
    
End Function

Function ContainsSwObject(vArr As Variant, obj As Object) As Boolean
    
    If Not IsEmpty(vArr) Then
    
        Dim i As Integer
        
        For i = 0 To UBound(vArr)
            
            Dim swObj As Object
            Set swObj = vArr(i)
            
            If swApp.IsSame(swObj, obj) = swObjectEquality.swObjectSame Then
                ContainsSwObject = True
                Exit Function
            End If
        Next
        
    End If
    
    ContainsSwObject = False
    
End Function

Function GetFeaturesByType(model As SldWorks.ModelDoc2, typeName As String) As Variant
    
    Dim swFeats() As SldWorks.Feature
    
    Dim swFeat As SldWorks.Feature
    
    Set swFeat = model.FirstFeature
    
    Do While Not swFeat Is Nothing
        
        If typeName = "CutListFolder" And swFeat.GetTypeName2() = "SolidBodyFolder" Then
            Dim swBodyFolder As SldWorks.BodyFolder
            Set swBodyFolder = swFeat.GetSpecificFeature2
            swBodyFolder.UpdateCutList
        End If
        
        ProcessFeature swFeat, swFeats, typeName

        Set swFeat = swFeat.GetNextFeature
        
    Loop
    
    If (Not swFeats) = -1 Then
        GetFeaturesByType = Empty
    Else
        GetFeaturesByType = swFeats
    End If
    
End Function

Sub ProcessFeature(thisFeat As SldWorks.Feature, featsArr() As SldWorks.Feature, typeName As String)
    
    If thisFeat.GetTypeName2() = typeName Then
    
        If (Not featsArr) = -1 Then
            ReDim featsArr(0)
            Set featsArr(0) = thisFeat
        Else
            Dim i As Integer
            
            For i = 0 To UBound(featsArr)
                If swApp.IsSame(featsArr(i), thisFeat) = swObjectEquality.swObjectSame Then
                    Exit Sub
                End If
            Next
            
            ReDim Preserve featsArr(UBound(featsArr) + 1)
            Set featsArr(UBound(featsArr)) = thisFeat
        End If
    
    End If
    
    Dim swSubFeat As SldWorks.Feature
    Set swSubFeat = thisFeat.GetFirstSubFeature
        
    While Not swSubFeat Is Nothing
        ProcessFeature swSubFeat, featsArr, typeName
        Set swSubFeat = swSubFeat.GetNextSubFeature
    Wend
        
End Sub

Sub ExportFlatPattern(part As SldWorks.PartDoc, flatPattern As SldWorks.Feature, outFilePath As String, opts As SheetMetalOptions_e, conf As String)
    
    Dim swModel As SldWorks.ModelDoc2
    Set swModel = part
    
    Dim error As ErrObject
    Dim hide As Boolean

try_:
    
    On Error GoTo catch_

    If False = swModel.Visible Then
        hide = True
        swModel.Visible = True
    End If
    
    swApp.ActivateDoc3 swModel.GetPathName(), False, swRebuildOnActivation_e.swDontRebuildActiveDoc, 0
    
    swModel.FeatureManager.EnableFeatureTree = False
    swModel.FeatureManager.EnableFeatureTreeWindow = False
    swModel.ActiveView.EnableGraphicsUpdate = False
    
    Dim curConf As String
    
    curConf = swModel.ConfigurationManager.ActiveConfiguration.Name
    
    If curConf <> conf Then
        If False = swModel.ShowConfiguration2(conf) Then
            Err.Raise vbError, "", "Failed to activate configuration"
        End If
    End If
    
    Dim outDir As String
    outDir = Left(outFilePath, InStrRev(outFilePath, "\"))
    
    CreateDirectories outDir
    
    Dim modelPath As String
    
    modelPath = part.GetPathName
    
    If modelPath = "" Then
        Err.Raise vbError, "", "Part document must be saved"
    End If
    
    If False <> flatPattern.Select2(False, -1) Then
        If False = part.ExportToDWG2(outFilePath, modelPath, swExportToDWG_e.swExportToDWG_ExportSheetMetal, True, Empty, False, False, opts, Empty) Then
            Err.Raise vbError, "", "Failed to export flat pattern"
        End If
    Else
        Err.Raise vbError, "", "Failed to select flat-pattern"
    End If
    
    swModel.ShowConfiguration2 curConf
    
    GoTo finally_
    
catch_:
    Set error = Err
finally_:

    swModel.FeatureManager.EnableFeatureTree = True
    swModel.FeatureManager.EnableFeatureTreeWindow = True
    swModel.ActiveView.EnableGraphicsUpdate = True
    
    If hide Then
        swApp.CloseDoc swModel.GetTitle
    End If
    
    If Not error Is Nothing Then
        Err.Raise error.Number, error.Source, error.Description, error.HelpFile, error.HelpContext
    End If
    
End Sub

Sub CreateDirectories(path As String)

    Dim fso As Object
    Set fso = CreateObject("Scripting.FileSystemObject")

    If fso.FolderExists(path) Then
        Exit Sub
    End If

    CreateDirectories fso.GetParentFolderName(path)
    
    fso.CreateFolder path
    
End Sub

Function GetFullPath(model As SldWorks.ModelDoc2, path As String)
    
    GetFullPath = path
        
    If IsPathRelative(path) Then
        
        If Left(path, 1) <> "\" Then
            path = "\" & path
        End If
        
        Dim modelPath As String
        Dim modelDir As String
        
        modelPath = model.GetPathName
        
        modelDir = Left(modelPath, InStrRev(modelPath, "\") - 1)
        
        GetFullPath = modelDir & path
        
    End If
    
End Function

Function IsPathRelative(path As String)
    IsPathRelative = Mid(path, 2, 1) <> ":" And Not IsPathUnc(path)
End Function

Function IsPathUnc(path As String)
    IsPathUnc = Left(path, 2) = "\\"
End Function
~~~


