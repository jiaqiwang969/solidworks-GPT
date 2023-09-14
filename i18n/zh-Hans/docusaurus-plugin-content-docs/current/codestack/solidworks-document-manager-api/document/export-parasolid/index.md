---
layout: sw-tool
title: Export part to Parasolid via Document Manager API (without SOLIDWORKS)
caption: Export Part File To Parasolid
description: Power Shell script to export part file to parasolid format (.xmp_bin) from command line via Document Manager API (without SOLIDWORKS)
image: export-parasolid.svg
labels: [export,parasolid]
group: Import/Export
---
This PowerShell script allows exporting the SOLIDWORKS part file into the parasolid format (.xmp_bin) from the command line using SOLIDWORKS Document Manager API

This file can be opened in any compatible CAD application (SOLIDWORKS, Solid Edge, etc.)

This script doesn't require SOLIDWORKS to be installed and doesn't consume SOLIDWORKS license.

## Configuration and usage instructions

* Create two files and paste the code from the below snippets

### export-parasolid.ps1

~~~ ps1
$inputFilePath=$args[0]
$outDirPath=$args[1]

$ScriptDir = Split-Path $script:MyInvocation.MyCommand.Path

$Assem = ( 
    $ScriptDir + "\SolidWorks.Interop.swdocumentmgr.dll"
    ) 
    
$Source = @"
Imports System
Imports System.IO
Imports SolidWorks.Interop.swdocumentmgr

Public Class Exporter

    Const LICENSE_KEY As String = "Your license key"

    Shared Sub New()
        AddHandler AppDomain.CurrentDomain.AssemblyResolve, AddressOf OnAssemblyResolve
    End Sub

    Public Shared Sub LoadLibrary(ParamArray libs As Object())
        For Each [lib] As String In libs
            Console.WriteLine(String.Format("Loading library: {0}", [lib]))
            Dim assm As System.Reflection.Assembly = System.Reflection.Assembly.LoadFrom([lib])
            Console.WriteLine(assm.GetName().ToString())
        Next
    End Sub

    Private Shared Function OnAssemblyResolve(ByVal sender As Object, ByVal args As ResolveEventArgs) As System.Reflection.Assembly
        For Each assm As System.Reflection.Assembly In AppDomain.CurrentDomain.GetAssemblies()

            If assm.GetName().ToString() = args.Name Then
                Return assm
            End If
        Next

        Return Nothing
    End Function
    
    Public Shared Sub ExportParasolid(filePath As String, outDirPath As String)

        Try
        
            Dim classFact As SwDMClassFactory = New SwDMClassFactory()
            Dim app As ISwDMApplication = classFact.GetApplication(LICENSE_KEY)

            Dim docType As SwDmDocumentType
            Dim doc As ISwDMDocument = OpenDocument(app, filePath, True, docType)

            If docType <> SwDmDocumentType.swDmDocumentPart Then
                Throw New InvalidCastException("Only part documents are supported")
            End If

            Dim confNames As String() = CType(doc.ConfigurationManager.GetConfigurationNames(), String())

            If confNames Is Nothing OrElse confNames.Length = 0 Then
                Throw New NullReferenceException("No configurations found")
            End If

            If Not Directory.Exists(outDirPath) Then
                Directory.CreateDirectory(outDirPath)
            End If

            For Each confName As String In confNames

                Console.WriteLine(String.Format("Extracting parasolid bodies from the '{0}'", confName))
                Dim conf As ISwDMConfiguration2 = doc.ConfigurationManager.GetConfigurationByName(confName)

                Dim outFilePath As String = Path.Combine(outDirPath, String.Format("{0}_{1}.xmp_bin", Path.GetFileNameWithoutExtension(filePath), confName))
                Dim err As SwDmBodyError = conf.GetPartitionStream(outFilePath)
                If err <> SwDmBodyError.swDmBodyErrorNone Then
                    PrintError(String.Format("Failed to export parasolid body of '{1}' in '{2}'", confName, filePath), True)
                End If

            Next
        
        Catch ex As Exception
            PrintError(ex.Message, False)
        End Try

    End Sub

    Private Shared Function OpenDocument(app As ISwDMApplication, filePath As String, [readOnly] As Boolean, Optional ByRef docType As SwDmDocumentType = SwDmDocumentType.swDmDocumentUnknown) As ISwDMDocument

        docType = SwDmDocumentType.swDmDocumentUnknown

        Select Case Path.GetExtension(filePath).ToLower()
            Case ".sldprt"
                docType = SwDmDocumentType.swDmDocumentPart
            Case ".sldasm"
                docType = SwDmDocumentType.swDmDocumentAssembly
            Case ".slddrw"
                docType = SwDmDocumentType.swDmDocumentDrawing
        End Select

        Dim err As SwDmDocumentOpenError
        Dim doc As ISwDMDocument = app.GetDocument(filePath, SwDmDocumentType.swDmDocumentPart, [readOnly], err)

        If doc Is Nothing Then
            Throw New NullReferenceException(String.Format("Failed to open document: {0}", err))
        End If

        Return doc

    End Function
    
    Private Shared Sub PrintError(msg As String, isWarning As Boolean)
        
        Dim color As ConsoleColor
        
        If isWarning Then
            color = ConsoleColor.DarkYellow
        Else
            color = ConsoleColor.DarkRed
        End If
        
        Console.WriteLine(msg)
        Console.ResetColor()
        
    End Sub

End Class
"@

Add-Type -TypeDefinition $Source -ReferencedAssemblies $Assem -Language VisualBasic

[Exporter]::LoadLibrary($Assem)
[Exporter]::ExportParasolid($inputFilePath, $outDirPath)
~~~



### export-parasolid.cmd

~~~ cmd
SET inputFilePath=%1
SET outDirPath=%2

PowerShell -NoProfile -ExecutionPolicy Bypass -File "%~dp0export-parasolid.ps1" %inputFilePath% %outDirPath%
~~~



* Copy the *SolidWorks.Interop.swdocumentmgr.dll* into the folder where the above scripts are created. PowerShell script is based on .NET Framework 2.0 so the SOLIDWORKS Document Manager interop must target this framework. The dll can be found at: **SOLIDWORKS Installation Folder**\api\redist\CLR2\SolidWorks.Interop.swdocumentmgr.dll

Alternatively full path to interop can be specified as shown below. In this case it is not required to copy this dll into the folder with script files.

~~~ ps1
$Assem = ( 
   "Full path to SolidWorks.Interop.swdocumentmgr.dll"
    ) 
~~~

* Start the command line and execute the following command

~~~ bat
> [Full Path To export-parasolid.cmd] [Full Path To Input SOLIDWORKS file] [Full Path to output directory]
~~~

As the result all bodies from all configurations of the file are exported to the specified directory (directory is automatically created if not exist). Output files are named as following: *[original file name]_[configuration name].xmp_bin* The process log is displayed directly in the console:

![Parasolid export console output](export-parasolid-console-output.png)