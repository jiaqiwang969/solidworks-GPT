"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[63019],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>S});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(t),p=r,S=c["".concat(l,".").concat(p)]||c[p]||u[p]||a;return t?o.createElement(S,i(i({ref:n},m),{},{components:t})):o.createElement(S,i({ref:n},m))}));function S(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},98353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=t(87462),r=(t(67294),t(3905));const a={title:"Serialize file content in model 3rd party storage using SOLIDWORKS API",caption:"Embed File In Third Party Store",description:"VB.NET example of usage of 3rd Party Storage (stream) to embed and retrieve file content using SOLIDWORKS API and XmlSerializers within the model document",image:"embed-file-menu.png",labels:["serialization","third party store","file"]},i=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/embed-file/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/embed-file/index",title:"Serialize file content in model 3rd party storage using SOLIDWORKS API",description:"VB.NET example of usage of 3rd Party Storage (stream) to embed and retrieve file content using SOLIDWORKS API and XmlSerializers within the model document",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/embed-file/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/embed-file",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/embed-file/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/embed-file/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/embed-file/index.md",tags:[],version:"current",frontMatter:{title:"Serialize file content in model 3rd party storage using SOLIDWORKS API",caption:"Embed File In Third Party Store",description:"VB.NET example of usage of 3rd Party Storage (stream) to embed and retrieve file content using SOLIDWORKS API and XmlSerializers within the model document",image:"embed-file-menu.png",labels:["serialization","third party store","file"]},sidebar:"tutorialSidebar",previous:{title:"Save custom properties revisions into 3rd party storage store using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/custom-properties-revisions/"},next:{title:"Tree structure serialization in model 3rd party storage using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/tree-structure-serialization/"}},l={},d=[{value:"Usage Instructions",id:"usage-instructions",level:2}],m={toc:d},c="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,o.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example demonstrates how to use 3rd Party Storage in SOLIDWORKS API to embed and extract the file content directly into the model stream."),(0,r.kt)("p",null,"Example SOLIDWORKS add-in is built using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/swex/add-in/"},"SwEx.AddIn")," framework but it could work with any other methods of creating the add-ins."),(0,r.kt)("p",null,"Add-in adds two buttons in the menu and toolbar and provides two handlers correspondingly: "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add-in menu",src:t(84283).Z,width:"599",height:"237"}),"{ width=400 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AddFile - asynchronous method to store the embed file data in the stream. This method asks user to select the file, reads its content and serializes it into a file stream."),(0,r.kt)("li",{parentName:"ul"},"LoadFile - loads the embedded file from the stream and prompts user to select the file path to store the content. The file name is prepopulated based on the embedded file name")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Browse for save file path",src:t(66353).Z,width:"965",height:"607"}),"{ width=550 }"),(0,r.kt)("h2",{id:"usage-instructions"},"Usage Instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open any model (model must be saved to a disk)"),(0,r.kt)("li",{parentName:"ul"},'Click "AddFile" button. File browse dialog is displayed. Select any file. File data is serialized into the model and message box is displayed.'),(0,r.kt)("li",{parentName:"ul"},"You can close the model and SOLIDWORKS"),(0,r.kt)("li",{parentName:"ul"},'Reopen the model and click "LoadFile". File data is deserialized from the model and File Save As dialog is displayed (name is populated based on the embedded file name). File is saved to the selected location')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"EmbedFileAddIn.vb")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'\nImports System.IO\nImports System.Runtime.InteropServices\nImports System.Windows.Forms\nImports CodeStack.SwEx.AddIn\nImports CodeStack.SwEx.AddIn.Attributes\nImports SolidWorks.Interop.swconst\n\n<ComVisible(True), Guid("E54E85ED-B8AE-434D-B616-7D691527A429")>\n<AutoRegister("EmbedFileAddIn", "Sample Demonstrating use of 3rd party store")>\nPartial Public Class EmbedFile\n    Inherits SwAddInEx\n\n    Private Const STREAM_NAME As String = "CodeStack.EmbedFile"\n\n    <CodeStack.SwEx.Common.Attributes.Title("Embed File")>\n    Public Enum Commands_e\n        AddFile\n        LoadFile\n    End Enum\n\n    Public Overrides Function OnConnect() As Boolean\n        AddCommandGroup(Of Commands_e)(AddressOf OnButtonClick)\n        Return True\n    End Function\n\n    Private Async Sub OnButtonClick(ByVal cmd As Commands_e)\n        Select Case cmd\n            Case Commands_e.AddFile\n                Await SaveFile()\n            Case Commands_e.LoadFile\n                LoadFile()\n        End Select\n    End Sub\n\n    Private Async Function SaveFile() As Task\n\n        Try\n            Dim fileToSave As String = BrowseFile(True)\n\n            If Not String.IsNullOrEmpty(fileToSave) Then\n\n                Dim embedData As New EmbedFileData()\n                embedData.FileName = Path.GetFileName(fileToSave)\n                embedData.Content = File.ReadAllBytes(fileToSave)\n\n                Await SaveDataToDocument(App.IActiveDoc2, embedData)\n                App.SendMsgToUser2("Data saved", swMessageBoxIcon_e.swMbInformation, swMessageBoxBtn_e.swMbOk)\n\n            End If\n        Catch ex As Exception\n            App.SendMsgToUser2(ex.Message, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk)\n        End Try\n\n    End Function\n\n    Private Sub LoadFile()\n\n        Try\n            Dim embedData = ReadDataFromDocument(App.IActiveDoc2)\n\n            Dim fileToSave As String = BrowseFile(False, embedData.FileName)\n\n            If Not String.IsNullOrEmpty(fileToSave) Then\n                File.WriteAllBytes(fileToSave, embedData.Content)\n            End If\n\n        Catch ex As Exception\n            App.SendMsgToUser2(ex.Message, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk)\n        End Try\n\n    End Sub\n\n    Function BrowseFile(isOpen As Boolean, Optional fileName As String = "") As String\n\n        Dim fileDlg As FileDialog\n\n        If isOpen Then\n            fileDlg = New OpenFileDialog()\n        Else\n            fileDlg = New SaveFileDialog()\n        End If\n\n        fileDlg.Title = "Select File"\n        fileDlg.Filter = "All files (*.*)|*.*"\n        fileDlg.FileName = fileName\n\n        If fileDlg.ShowDialog() = DialogResult.OK Then\n            Return fileDlg.FileName\n        Else\n            Return ""\n        End If\n\n    End Function\n\nEnd Class\n\n')),(0,r.kt)("p",null,"Structure used for serialization contains the content of the file and file name"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"EmbedFileData.vb")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Public Class EmbedFileData\n    Public Property FileName As String\n    Public Property Content As Byte()\nEnd Class\n\n")),(0,r.kt)("p",null,"For simplicity ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nn-objidl-istream"},"IStream")," com stream is wrapped into the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.io.stream?view=netframework-4.7.2"},"System.IO.Stream")," type."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ComStream.vb")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Imports System.IO\nImports System.Runtime.InteropServices\nImports System.Runtime.InteropServices.ComTypes\n\nPublic Class ComStream\n    Inherits Stream\n\n    Private ReadOnly m_ComStream As IStream\n    Private ReadOnly m_Commit As Boolean\n    Private m_IsWritable As Boolean\n\n    Public Sub New(ByRef comStream As IStream, writable As Boolean, Optional commit As Boolean = True)\n\n        If comStream Is Nothing Then\n            Throw New ArgumentNullException(NameOf(comStream))\n        End If\n\n        m_ComStream = comStream\n        m_IsWritable = writable\n        m_Commit = commit\n\n    End Sub\n\n    Public Overrides ReadOnly Property CanRead() As Boolean\n        Get\n            Return True\n        End Get\n    End Property\n\n    Public Overrides ReadOnly Property CanSeek() As Boolean\n        Get\n            Return True\n        End Get\n    End Property\n\n    Public Overrides ReadOnly Property CanWrite() As Boolean\n        Get\n            Return m_IsWritable\n        End Get\n    End Property\n\n    Public Overrides ReadOnly Property Length As Long\n        Get\n            Const STATSFLAG_NONAME As Integer = 1\n\n            Dim stats As ComTypes.STATSTG = Nothing\n            m_ComStream.Stat(stats, STATSFLAG_NONAME)\n\n            Return stats.cbSize\n        End Get\n    End Property\n\n    Public Overrides Property Position() As Long\n        Get\n            Return Seek(0, SeekOrigin.Current)\n        End Get\n        Set(ByVal Value As Long)\n            Seek(Value, SeekOrigin.Begin)\n        End Set\n    End Property\n\n    Public Overrides Sub Flush()\n        If m_Commit Then\n            Const STGC_DEFAULT As Integer = 0\n            m_ComStream.Commit(STGC_DEFAULT)\n        End If\n    End Sub\n\n    Public Overrides Sub SetLength(ByVal Value As Long)\n        m_ComStream.SetSize(Value)\n    End Sub\n\n    Public Overrides Sub Write(buffer() As Byte, offset As Integer, count As Integer)\n        If offset <> 0 Then\n            Dim bufferSize As Integer\n            bufferSize = buffer.Length - offset\n            Dim tmpBuffer(bufferSize) As Byte\n            Array.Copy(buffer, offset, tmpBuffer, 0, bufferSize)\n            m_ComStream.Write(tmpBuffer, bufferSize, Nothing)\n        Else\n            m_ComStream.Write(buffer, count, Nothing)\n        End If\n    End Sub\n\n    Public Overrides Function Read(buffer() As Byte, offset As Integer, count As Integer) As Integer\n\n        Dim bytesRead As Integer = 0\n        Dim boxBytesRead As Object = bytesRead\n        Dim hObject As GCHandle\n\n        Try\n            hObject = GCHandle.Alloc(boxBytesRead, GCHandleType.Pinned)\n            Dim pBytesRead As IntPtr = hObject.AddrOfPinnedObject()\n\n            If offset <> 0 Then\n                Dim tmpBuffer(count - 1) As Byte\n                m_ComStream.Read(tmpBuffer, count, pBytesRead)\n                bytesRead = CInt(boxBytesRead)\n                Array.Copy(tmpBuffer, 0, buffer, offset, bytesRead)\n            Else\n                m_ComStream.Read(buffer, count, pBytesRead)\n                bytesRead = CInt(boxBytesRead)\n            End If\n\n        Finally\n            If hObject.IsAllocated Then\n                hObject.Free()\n            End If\n        End Try\n\n        Return bytesRead\n\n    End Function\n\n    Public Overrides Function Seek(offset As Long, origin As SeekOrigin) As Long\n\n        Dim curPosition As Long = 0\n        Dim boxCurPosition As Object = curPosition\n        Dim hObject As GCHandle\n\n        Try\n            hObject = GCHandle.Alloc(boxCurPosition, GCHandleType.Pinned)\n            Dim pCurPosition As IntPtr = hObject.AddrOfPinnedObject()\n\n            m_ComStream.Seek(offset, origin, pCurPosition)\n            curPosition = CLng(boxCurPosition)\n        Finally\n            If hObject.IsAllocated Then\n                hObject.Free()\n            End If\n        End Try\n\n        Return curPosition\n    End Function\n\n    Protected Overrides Sub Dispose(ByVal disposing As Boolean)\n        Try\n            If disposing Then\n                m_IsWritable = False\n            End If\n        Finally\n            MyBase.Dispose(disposing)\n        End Try\n    End Sub\n\n    Protected Overrides Sub Finalize()\n        Dispose(False)\n    End Sub\n\nEnd Class\n\n")),(0,r.kt)("p",null,"Serialization and deserialization routine utilizing the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.xml.serialization.xmlserializer?view=netframework-4.7.2"},"XmlSerializer")," class, but any other serialization methods could be used."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"EmbedFile.vb")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Imports System.Runtime.InteropServices.ComTypes\nImports System.Xml.Serialization\nImports SolidWorks.Interop.sldworks\nImports SolidWorks.Interop.swconst\n\nPartial Public Class EmbedFile\n    Public Class ThirdPartyStreamNotFoundException\n        Inherits Exception\n    End Class\n\n    Private Async Function SaveDataToDocument(ByVal model As IModelDoc2, ByVal data As EmbedFileData) As Task\n\n        Dim err As Integer = -1\n        Dim warn As Integer = -1\n        model.SetSaveFlag()\n        Const S_OK As Integer = 0\n        Dim result As Boolean? = Nothing\n        Dim onSaveToStorageNotifyFunc = Function()\n                                            Try\n                                                StoreData(model, data, STREAM_NAME)\n                                                result = True\n                                            Catch\n                                                result = False\n                                            End Try\n\n                                            Return S_OK\n                                        End Function\n\n        Select Case CType(model.[GetType](), swDocumentTypes_e)\n            Case swDocumentTypes_e.swDocPART\n                AddHandler TryCast(model, PartDoc).SaveToStorageNotify, onSaveToStorageNotifyFunc\n            Case swDocumentTypes_e.swDocASSEMBLY\n                AddHandler TryCast(model, AssemblyDoc).SaveToStorageNotify, onSaveToStorageNotifyFunc\n            Case swDocumentTypes_e.swDocDRAWING\n                AddHandler TryCast(model, DrawingDoc).SaveToStorageNotify, onSaveToStorageNotifyFunc\n        End Select\n\n        If Not model.Save3(CInt(swSaveAsOptions_e.swSaveAsOptions_Silent), err, warn) Then\n            Throw New InvalidOperationException($"Failed to save the model: {CType(err, swFileSaveError_e)}")\n        End If\n\n        Await Task.Run(Sub()\n                           While Not result.HasValue\n                               Threading.Thread.Sleep(10)\n                           End While\n                       End Sub)\n\n        Select Case CType(model.GetType(), swDocumentTypes_e)\n            Case swDocumentTypes_e.swDocPART\n                RemoveHandler TryCast(model, PartDoc).SaveToStorageNotify, onSaveToStorageNotifyFunc\n            Case swDocumentTypes_e.swDocASSEMBLY\n                RemoveHandler TryCast(model, AssemblyDoc).SaveToStorageNotify, onSaveToStorageNotifyFunc\n            Case swDocumentTypes_e.swDocDRAWING\n                RemoveHandler TryCast(model, DrawingDoc).SaveToStorageNotify, onSaveToStorageNotifyFunc\n        End Select\n\n        If Not result.Value Then\n            Throw New Exception("Failed to store the data")\n        End If\n    End Function\n\n    Private Function ReadDataFromDocument(ByVal model As IModelDoc2) As EmbedFileData\n        Return ReadData(Of EmbedFileData)(model, STREAM_NAME)\n    End Function\n\n    Private Sub StoreData(Of T)(ByVal model As IModelDoc2, ByVal data As T, ByVal streamName As String)\n        Try\n            Dim stream = TryCast(model.IGet3rdPartyStorage(streamName, True), IStream)\n\n            Using comStr = New ComStream(stream, True, False)\n                comStr.Seek(0, IO.SeekOrigin.Begin)\n                Dim ser = New XmlSerializer(GetType(T))\n                ser.Serialize(comStr, data)\n            End Using\n\n        Catch\n            Throw\n        Finally\n            model.IRelease3rdPartyStorage(streamName)\n        End Try\n    End Sub\n\n    Private Function ReadData(Of T)(ByVal model As IModelDoc2, ByVal streamName As String) As T\n        Try\n            Dim stream = TryCast(model.IGet3rdPartyStorage(streamName, False), IStream)\n\n            If stream IsNot Nothing Then\n\n                Using comStr = New ComStream(stream, False)\n                    comStr.Seek(0, IO.SeekOrigin.Begin)\n                    Dim ser = New XmlSerializer(GetType(T))\n                    Return CType(ser.Deserialize(comStr), T)\n                End Using\n            Else\n                Throw New ThirdPartyStreamNotFoundException()\n            End If\n\n        Catch\n            Throw\n        Finally\n            model.IRelease3rdPartyStorage(streamName)\n        End Try\n    End Function\n\nEnd Class\n\n')))}u.isMDXComponent=!0},84283:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/embed-file-menu-90c1099f7cd76d4011e8f23b4da7bcf0.png"},66353:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/select-save-path-d5fe2a913f0280c4c89474dbf9f900cf.png"}}]);