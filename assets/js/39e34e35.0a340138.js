"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[48703],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=d(t),p=r,f=c["".concat(l,".").concat(p)]||c[p]||u[p]||i;return t?o.createElement(f,s(s({ref:n},m),{},{components:t})):o.createElement(f,s({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[c]="string"==typeof e?e:r,s[1]=a;for(var d=2;d<i;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},21808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(87462),r=(t(67294),t(3905));const i={title:"Read and display body from the file using SOLIDWORKS API",caption:"Read Body From File",description:"VBA example to deserialize body geometry from external binary file into temp body and display using SOLIDWORKS API",labels:["deserialize","com stream","temp body"]},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/read-body-from-file/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/read-body-from-file/index",title:"Read and display body from the file using SOLIDWORKS API",description:"VBA example to deserialize body geometry from external binary file into temp body and display using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/read-body-from-file/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/read-body-from-file",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/read-body-from-file/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/read-body-from-file/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/read-body-from-file/index.md",tags:[],version:"current",frontMatter:{title:"Read and display body from the file using SOLIDWORKS API",caption:"Read Body From File",description:"VBA example to deserialize body geometry from external binary file into temp body and display using SOLIDWORKS API",labels:["deserialize","com stream","temp body"]},sidebar:"tutorialSidebar",previous:{title:"Read custom properties from file, configuration and cut-list elements using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/read-all-properties/"},next:{title:"Read configuration specific cut-list property from the selected component using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/read-component-cutlist/"}},l={},d=[],m={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA example demonstrates how to read the body geometry data from the external binary file. Load this data into the COM Stream and restore into the temp solid body using SOLIDWORKS API."),(0,r.kt)("p",null,"Body is displayed to the user and macro execution stops. Body is not present in the Feature Manager Tree and only visible in the graphics area."),(0,r.kt)("p",null,"Continue the macro execution to destroy the body."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Imports SolidWorks.Interop.sldworks\nImports SolidWorks.Interop.swconst\nImports System.IO\nImports System.Runtime.InteropServices\nImports System.Runtime.InteropServices.ComTypes\n\nModule Module1\n\n    Declare Function CreateStreamOnHGlobal Lib "ole32" (ByVal hGlobal As IntPtr, ByVal fDeleteOnRelease As Boolean, ByRef ppstm As IStream) As Long\n\n    Const FILE_PATH As String = "D:\\body.dat"\n\n    Sub Main()\n\n        Dim app As ISldWorks = CreateObject("SldWorks.Application")\n        app.Visible = True\n\n        Dim model As IModelDoc2\n        model = app.ActiveDoc\n\n        If Not model Is Nothing Then\n\n            Dim body As IBody2 = LoadBodyFromFile(app, FILE_PATH)\n\n            If Not body Is Nothing Then\n                body.Display3(model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone)\n                Console.ReadLine()\n            Else\n                Throw New Exception("Failed to restore the body")\n            End If\n\n        Else\n            Throw New Exception("Please open the model")\n        End If\n\n    End Sub\n\n    Function LoadBodyFromFile(app As ISldWorks, filePath As String) As IBody2\n\n        Dim stream As IStream = Nothing\n\n        CreateStreamOnHGlobal(IntPtr.Zero, True, stream)\n\n        Dim comStream = New ComStream(stream, True, True)\n\n        Using fileStream = File.OpenRead(filePath)\n            fileStream.CopyTo(comStream)\n            comStream.Seek(0, SeekOrigin.Begin)\n        End Using\n\n        Dim modeler As IModeler = app.IGetModeler()\n\n        Return modeler.Restore(stream)\n\n    End Function\n\nEnd Module\n\nPublic Class ComStream\n    Inherits Stream\n\n    Private ReadOnly m_ComStream As IStream\n    Private ReadOnly m_Commit As Boolean\n    Private m_IsWritable As Boolean\n\n    Public Sub New(ByRef comStream As IStream, writable As Boolean, Optional commit As Boolean = True)\n\n        If comStream Is Nothing Then\n            Throw New ArgumentNullException(NameOf(comStream))\n        End If\n\n        m_ComStream = comStream\n        m_IsWritable = writable\n        m_Commit = commit\n\n    End Sub\n\n    Public Overrides ReadOnly Property CanRead() As Boolean\n        Get\n            Return True\n        End Get\n    End Property\n\n    Public Overrides ReadOnly Property CanSeek() As Boolean\n        Get\n            Return True\n        End Get\n    End Property\n\n    Public Overrides ReadOnly Property CanWrite() As Boolean\n        Get\n            Return m_IsWritable\n        End Get\n    End Property\n\n    Public Overrides ReadOnly Property Length As Long\n        Get\n            Const STATSFLAG_NONAME As Integer = 1\n\n            Dim stats As ComTypes.STATSTG = Nothing\n            m_ComStream.Stat(stats, STATSFLAG_NONAME)\n\n            Return stats.cbSize\n        End Get\n    End Property\n\n    Public Overrides Property Position() As Long\n        Get\n            Return Seek(0, SeekOrigin.Current)\n        End Get\n        Set(ByVal Value As Long)\n            Seek(Value, SeekOrigin.Begin)\n        End Set\n    End Property\n\n    Public Overrides Sub Flush()\n        If m_Commit Then\n            Const STGC_DEFAULT As Integer = 0\n            m_ComStream.Commit(STGC_DEFAULT)\n        End If\n    End Sub\n\n    Public Overrides Sub SetLength(ByVal Value As Long)\n        m_ComStream.SetSize(Value)\n    End Sub\n\n    Public Overrides Sub Write(buffer() As Byte, offset As Integer, count As Integer)\n        If offset <> 0 Then\n            Dim bufferSize As Integer\n            bufferSize = buffer.Length - offset\n            Dim tmpBuffer(bufferSize) As Byte\n            Array.Copy(buffer, offset, tmpBuffer, 0, bufferSize)\n            m_ComStream.Write(tmpBuffer, bufferSize, Nothing)\n        Else\n            m_ComStream.Write(buffer, count, Nothing)\n        End If\n    End Sub\n\n    Public Overrides Function Read(buffer() As Byte, offset As Integer, count As Integer) As Integer\n\n        Dim bytesRead As Integer = 0\n        Dim boxBytesRead As Object = bytesRead\n        Dim hObject As GCHandle\n\n        Try\n            hObject = GCHandle.Alloc(boxBytesRead, GCHandleType.Pinned)\n            Dim pBytesRead As IntPtr = hObject.AddrOfPinnedObject()\n\n            If offset <> 0 Then\n                Dim tmpBuffer(count - 1) As Byte\n                m_ComStream.Read(tmpBuffer, count, pBytesRead)\n                bytesRead = CInt(boxBytesRead)\n                Array.Copy(tmpBuffer, 0, buffer, offset, bytesRead)\n            Else\n                m_ComStream.Read(buffer, count, pBytesRead)\n                bytesRead = CInt(boxBytesRead)\n            End If\n\n        Finally\n            If hObject.IsAllocated Then\n                hObject.Free()\n            End If\n        End Try\n\n        Return bytesRead\n\n    End Function\n\n    Public Overrides Function Seek(offset As Long, origin As SeekOrigin) As Long\n\n        Dim curPosition As Long = 0\n        Dim boxCurPosition As Object = curPosition\n        Dim hObject As GCHandle\n\n        Try\n            hObject = GCHandle.Alloc(boxCurPosition, GCHandleType.Pinned)\n            Dim pCurPosition As IntPtr = hObject.AddrOfPinnedObject()\n\n            m_ComStream.Seek(offset, origin, pCurPosition)\n            curPosition = CLng(boxCurPosition)\n        Finally\n            If hObject.IsAllocated Then\n                hObject.Free()\n            End If\n        End Try\n\n        Return curPosition\n    End Function\n\n    Protected Overrides Sub Dispose(ByVal disposing As Boolean)\n        Try\n            If disposing Then\n                m_IsWritable = False\n            End If\n        Finally\n            MyBase.Dispose(disposing)\n        End Try\n    End Sub\n\n    Protected Overrides Sub Finalize()\n        Dispose(False)\n    End Sub\n\nEnd Class\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vba"},'Const FILE_PATH As String = "D:\\body.dat"\n\nPrivate Declare PtrSafe Function CreateStreamOnHGlobal Lib "ole32" (ByVal hGlobal As LongPtr, ByVal fDeleteOnRelease As Long, ByRef ppstm As Any) As Long\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swBody As SldWorks.Body2\n        Set swBody = LoadBodyFromFile(FILE_PATH)\n        swBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n        \n        Stop \' continue to hide body\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nFunction LoadBodyFromFile(filePath As String) As SldWorks.Body2\n\n    Dim buff() As Byte\n    buff = ReadByteArrFromFile(filePath)\n    \n    Dim comStream As IUnknown\n    Set comStream = BytesArrToComStream(buff)\n    \n    Dim swModeler As SldWorks.Modeler\n    Set swModeler = swApp.GetModeler\n    \n    Dim swBody As SldWorks.Body2\n    Set swBody = swModeler.Restore(comStream)\n    \n    Set LoadBodyFromFile = swBody\n        \nEnd Function\n\nFunction ReadByteArrFromFile(filePath) As Byte()\n\n    Dim buff() As Byte\n    \n    Dim fileNumb As Integer\n    fileNumb = FreeFile\n    \n    Open filePath For Binary Access Read As fileNumb\n    \n    ReDim buff(0 To LOF(fileNumb) - 1)\n    \n    Get fileNumb, , buff\n    \n    Close fileNumb\n    \n    ReadByteArrFromFile = buff\n    \nEnd Function\n\nPrivate Function BytesArrToComStream(ByRef buff() As Byte) As IUnknown\n    \n    Dim comStream As IUnknown\n    \n    If CreateStreamOnHGlobal(VarPtr(buff(LBound(buff))), 0, comStream) Then\n        Err.Raise vbError, "", "Faield to create stream from byte array"\n    End If\n    \n    Set BytesArrToComStream = comStream\n    \nEnd Function\n')))}u.isMDXComponent=!0}}]);