Imports SolidWorks.Interop.swdocumentmgr
Imports System

Module CodeStack

    Const SW_DM_KEY As String = "[CompanyName]:swdocmgr_general-00000-{31 times},swdocmgr_previews-00000-{31 times},swdocmgr_dimxpert-00000-{31 times},swdocmgr_geometry-00000-{31 times},swdocmgr_xml-00000-{31 times},swdocmgr_tessellation-00000-{31 times}"

    Sub Main(ByVal args As String())

        Dim classFactory As SwDMClassFactory =
            TryCast(Activator.CreateInstance(Type.GetTypeFromProgID("SwDocumentMgr.SwDMClassFactory")), SwDMClassFactory)

        If classFactory IsNot Nothing Then
            Dim dmApp As SwDMApplication = classFactory.GetApplication(SW_DM_KEY)
            Console.WriteLine(dmApp.GetLatestSupportedFileVersion())
        Else
            Throw New NullReferenceException("Document Manager SDK is not installed")
        End If

    End Sub

End Module