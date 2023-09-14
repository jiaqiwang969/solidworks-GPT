---
layout: sw-tool
title: Excel macro to manage custom properties in SOLIDWORKS files
caption: Manage Properties In Excel
description: Excel macro which allows very fast way to manage (read and write) SOLIDWORKS custom properties in a batch directly from Excel spreadsheet
image: excel-custom-properties.svg
labels: [dm, excel, custom properties]
group: Custom Properties
---
![SOLIDWORKS Custom Properties In Excel](excel-custom-properties.svg){ width=250 }

This Excel VBA macro adds additional functions to Excel palette allowing to read and write custom properties from SOLIDWORKS files.

This macro utilizes Document Manager which makes the process of reading and writing properties much faster (x10-x100+ times) than regular SOLIDWORKS API. 

Furthermore SOLIDWORKS installation is not required to use this macro.

## Preparation

* If you do not have Document Manager License key, follow [Activating Document Manager](/docs/codestack/solidworks-document-manager-api/getting-started/create-connection#activating-document-manager) article for the steps required to retrieve the Document Manager license. This key is free for SOLIDWORKS customers under subscription.
* Create new excel document and create new macro. Paste the macro code below

~~~ vb
Const SW_DM_KEY As String = "Your License Key"

Sub main()
End Sub

Function ConnectToDm() As SwDocumentMgr.SwDMApplication

    Dim swDmClassFactory As SwDocumentMgr.swDmClassFactory
    Dim swDmApp As SwDocumentMgr.SwDMApplication
    
    Set swDmClassFactory = CreateObject("SwDocumentMgr.SwDMClassFactory")
        
    If Not swDmClassFactory Is Nothing Then
        Set swDmApp = swDmClassFactory.GetApplication(SW_DM_KEY)
        Set ConnectToDm = swDmApp
    Else
        Err.Raise vbError, "", "Document Manager SDK is not installed"
    End If
    
End Function

Function OpenDocument(swDmApp As SwDocumentMgr.SwDMApplication, path As String, readOnly As Boolean) As SwDocumentMgr.SwDMDocument10
    
    Dim ext As String
    ext = LCase(Right(path, Len(path) - InStrRev(path, ".")))
    
    Dim docType As SwDmDocumentType
    
    Select Case ext
        Case "sldlfp"
            docType = swDmDocumentPart
        Case "sldprt"
            docType = swDmDocumentPart
        Case "sldasm"
            docType = swDmDocumentAssembly
        Case "slddrw"
            docType = swDmDocumentDrawing
        Case Else
            Err.Raise vbError, "", "Unsupported file type: " & ext
    End Select
    
    Dim swDmDoc As SwDocumentMgr.SwDMDocument10
    Dim openDocErr As SwDmDocumentOpenError
    Set swDmDoc = swDmApp.GetDocument(path, docType, readOnly, openDocErr)
    
    If swDmDoc Is Nothing Then
        Err.Raise vbError, "", "Failed to open document: '" & path & "'. Error Code: " & openDocErr
    End If
    
    Set OpenDocument = swDmDoc
    
End Function

Public Function GETSWPRP(fileName As String, prpNames As Variant, Optional confName As String = "") As Variant
    
    Dim swDmApp As SwDocumentMgr.SwDMApplication
    Dim swDmDoc As SwDocumentMgr.SwDMDocument10
    
try_:
    On Error GoTo catch_
    
    Dim vNames As Variant
            
    If TypeName(prpNames) = "Range" Then
        vNames = RangeToArray(prpNames)
    Else
        vNames = Array(CStr(prpNames))
    End If
    
    Set swDmApp = ConnectToDm()
    Set swDmDoc = OpenDocument(swDmApp, fileName, True)
    
    Dim res() As String
    Dim i As Integer
    ReDim res(UBound(vNames))
    
    Dim prpType As SwDmCustomInfoType
    
    If confName = "" Then
        For i = 0 To UBound(vNames)
            res(i) = swDmDoc.GetCustomProperty(CStr(vNames(i)), prpType)
        Next
    Else
        Dim swDmConf As SwDocumentMgr.SwDMConfiguration10
        Set swDmConf = swDmDoc.ConfigurationManager.GetConfigurationByName(confName)
        If Not swDmConf Is Nothing Then
            For i = 0 To UBound(vNames)
                res(i) = swDmConf.GetCustomProperty(CStr(vNames(i)), prpType)
            Next
        Else
            Err.Raise vbError, "", "Failed to get configuration '" & confName & "' from '" & fileName & "'"
        End If
    End If
    
    GETSWPRP = res
    
    GoTo finally_
    
catch_:
    Debug.Print Err.Description
    Err.Raise Err.Number, Err.Source, Err.Description
finally_:
    If Not swDmDoc Is Nothing Then
        swDmDoc.CloseDoc
    End If

End Function

Public Function SETSWPRP(fileName As String, prpNames As Variant, prpVals As Variant, Optional confName As String = "")
    
    Dim swDmApp As SwDocumentMgr.SwDMApplication
    Dim swDmDoc As SwDocumentMgr.SwDMDocument10
    
try_:
    On Error GoTo catch_
    
    If TypeName(prpNames) <> TypeName(prpVals) Then
        Err.Raise vbError, "", "Property name and value must be of the same type, e.g. either range or cell"
    End If
    
    Dim vNames As Variant
    Dim vVals As Variant
        
    If TypeName(prpNames) = "Range" Then
        
        vNames = RangeToArray(prpNames)
        
        vVals = RangeToArray(prpVals)
        
        If UBound(vNames) <> UBound(vVals) Then
            Err.Raise vbError, "", "Number of cells in the name and value are not equal"
        End If
    Else
        vNames = Array(CStr(prpNames))
        vVals = Array(CStr(prpVals))
    End If
    
    Set swDmApp = ConnectToDm()
    Set swDmDoc = OpenDocument(swDmApp, fileName, False)
    
    Dim i As Integer
    
    If confName = "" Then
        For i = 0 To UBound(vNames)
            swDmDoc.AddCustomProperty CStr(vNames(i)), swDmCustomInfoText, CStr(vVals(i))
            swDmDoc.SetCustomProperty CStr(vNames(i)), CStr(vVals(i))
        Next
    Else
        Dim swDmConf As SwDocumentMgr.SwDMConfiguration10
        Set swDmConf = swDmDoc.ConfigurationManager.GetConfigurationByName(confName)
        
        If Not swDmConf Is Nothing Then
            For i = 0 To UBound(vNames)
                swDmConf.AddCustomProperty CStr(vNames(i)), swDmCustomInfoText, CStr(vVals(i))
                swDmConf.SetCustomProperty CStr(vNames(i)), CStr(vVals(i))
            Next
        Else
            Err.Raise vbError, "", "Failed to get configuration '" & confName & "' from '" & fileName & "'"
        End If
    End If
    
    swDmDoc.Save
    
    SETSWPRP = "OK"
    
    GoTo finally_
    
catch_:
    Debug.Print Err.Description
    Err.Raise Err.Number, Err.Source, Err.Description
finally_:
    If Not swDmDoc Is Nothing Then
        swDmDoc.CloseDoc
    End If
    
End Function

Private Function RangeToArray(vRange As Variant) As Variant
    
    If TypeName(vRange) = "Range" Then
        Dim excelRange As range
        Set excelRange = vRange
        
        Dim i As Integer
        
        Dim valsArr() As String
        ReDim valsArr(excelRange.Cells.Count - 1)
        
        i = 0
        
        For Each cell In excelRange.Cells
            valsArr(i) = cell.Value
            i = i + 1
        Next
        
        RangeToArray = valsArr
        
    Else
        Err.Raise vbError, "", "Value is not a Range"
    End If
    
End Function
~~~



* Modify the macro and enter the license key instead of the *Your License Key* placeholder, retrieved in the first step. Note, depending on the size of the key you may see *Compile error: Invalid outside procedure error* error. Follow [this article](/docs/codestack/solidworks-api/troubleshooting/macros/too-long-vba-macro-line/) for a solution.

~~~ vb jagged-bottom
Const SW_DM_KEY As String = "Your License Key"
~~~

* Add the *SwDocumentMgr YEAR Type Library* reference to the macro.

![Document Manager Reference added to the macro](sw-document-manager-reference.png)

## Usage

{% youtube id: a068ht0rDQQ %}

Macro will add 2 functions into the Excel functions scope which can be used as any other function in Excel

![Excel function added to the list](excel-function.png)

As standard functions user can pass the parameter as reference to other cells.

![Setting the value of the Product Id property](setting-single-property.png)

Or can use free text

![Reading description property from the Default configuration of the file](reading-description-config-property.png)

When multiple properties need to be written or read, use Excel ranges to maximize the performance of the operation

![Batch updating 3 properties for multiple files](batch-set-properties.png)

### GETSWPRP

This function allows to extract the values of specified property from file or a given configuration. Error is thrown attempting to read the property which not exists.

#### Parameters

* File Name - full path to SOLIDWORKS part, assembly or drawing
* Property Names - property or range of properties to read values from
* (Optional) Configuration Name - name of the configuration to read values from, if not specified properties are read from the general tab

### SETSWPRP

Writes properties to the specified SOLIDWORKS file into the specified configuration. This function will either update existing property or create new if not exists.

#### Parameters

* File Name - full path to SOLIDWORKS part, assembly or drawing
* Property Names - property or range of properties to write values to
* Property Values - value or range of values of properties
* (Optional) Configuration Name - name of the configuration to write values to, if not specified properties are written to the general tab

## Troubleshooting

In case of an error the corresponding cell will indicate this:

![Calculation error in cell](cell-error.png)

To find more about the error. Open the macro and inspect immediate window output

![Error displayed in VBA Immediate Window](immediate-window-error.png)

Descriptions of open error code can be found [here](https://help.solidworks.com/2015/English/api/swdocmgrapi/SolidWorks.Interop.swdocumentmgr~SolidWorks.Interop.swdocumentmgr.SwDmDocumentOpenError.html)

> It is strongly recommended to test this macro on sample data before using on production file. And also it is strongly recommended to backup the data before using this macro.

## Notes

This macro will extract formulas (instead of resolved values) for properties with equations such as mass or material.

To define the formula use "" to protect the " symbol. For example

~~~
=SETSWPRP(A2, "Mass", """SW-Mass@Part1.SLDPRT""")
~~~
