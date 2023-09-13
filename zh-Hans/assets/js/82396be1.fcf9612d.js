"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[95684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={title:"Creating VB.NET add-in for SOLIDWORKS using API",caption:"Creating VB.NET Add-In For SOLIDWORKS",description:"Detailed guide of creating 'hello world' SOLIDWORKS add-in from scratch using VB.NET",image:"new-vbnet-class-library.png",labels:["add-in","vb.net"]},o=void 0,s={unversionedId:"codestack/solidworks-api/getting-started/add-ins/vbnet/index",id:"codestack/solidworks-api/getting-started/add-ins/vbnet/index",title:"Creating VB.NET add-in for SOLIDWORKS using API",description:"Detailed guide of creating 'hello world' SOLIDWORKS add-in from scratch using VB.NET",source:"@site/docs/codestack/solidworks-api/getting-started/add-ins/vbnet/index.md",sourceDirName:"codestack/solidworks-api/getting-started/add-ins/vbnet",slug:"/codestack/solidworks-api/getting-started/add-ins/vbnet/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/add-ins/vbnet/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/add-ins/vbnet/index.md",tags:[],version:"current",frontMatter:{title:"Creating VB.NET add-in for SOLIDWORKS using API",caption:"Creating VB.NET Add-In For SOLIDWORKS",description:"Detailed guide of creating 'hello world' SOLIDWORKS add-in from scratch using VB.NET",image:"new-vbnet-class-library.png",labels:["add-in","vb.net"]},sidebar:"tutorialSidebar",previous:{title:"Creating C# add-in for SOLIDWORKS automation using API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/add-ins/csharp/"},next:{title:"Explanation of SOLIDWORKS API Object Model and object relations",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/getting-started/api-object-model/"}},l={},d=[],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create new project in Microsoft Visual Studio"),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("em",{parentName:"li"},"Class Library")," template under the ",(0,r.kt)("em",{parentName:"li"},"Visual Basic")," templates. Specify the location and the name of the project")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creating new type library in VB.NET project in Visual Studio",src:n(79378).Z,width:"1199",height:"828"}),"{ width=550 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add reference to SolidWorks Interop libraries: SolidWorks.Interop.sldworks.dll, SolidWorks.Interop.swconst.dll, SolidWorks.Interop.swpublished.dll. Interop libraries are located at ",(0,r.kt)("strong",{parentName:"li"},"SOLIDWORKS Installation Folder"),"\\api\\redist for projects targeting Framework 4.0 onwards and ",(0,r.kt)("strong",{parentName:"li"},"SOLIDWORKS Installation Folder"),"\\api\\redist\\CLR2 for projects targeting Framework 2.0 and 3.5.")),(0,r.kt)("p",null,"If project targeting Framework 4.0 I would recommend setting the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/dotnet/framework/interop/type-equivalence-and-embedded-interop-types"},"Embed Interop Types"))," option for all SOLIDWORKS interop dlls to false. In some cases embedded interop libraries causing type casting issues which affects functionality and can result to crash."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Embedding SOLIDWORKS interops",src:n(64493).Z,width:"495",height:"575"}),"{ width=350 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a public class with a user friendly name which will represent the add-in. This class must be public and COM-visible. I would recommend to decorate the class with ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.comvisibleattribute?view=netframework-4.7.2"},"ComVisibleAttribute")," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-gb/dotnet/api/system.runtime.interopservices.guidattribute?view=netframework-4.7.2"},"GuidAttribute")," to expose the type to COM and assign the permanent Global Unique Identifier (GUID):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'<ComVisible(True)>\n<Guid("799707B3-1632-469F-B294-EC05A5FBFFC8")>\nPublic Class MySampleAddin\n    Implements ISwAddin\n    ...\nEnd Class\n')),(0,r.kt)("p",null,"Avoid selecting ",(0,r.kt)("em",{parentName:"p"},"Make assembly COM-Visible")," option in the project settings to expose types to COM and only mark required classes as COM visible with the attributes described above."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add-in dll must be registered with /codebase flag. ",(0,r.kt)("em",{parentName:"li"},"Register for COM interop")," options available in the project setting doesn't use this option while registering and not suitable in this case, furthermore this option would register the type in the 32-bit registry while SOLIDWORKS requires the entries in 64-bit registry. Instead add the post build action as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},'"%windir%\\Microsoft.NET\\Framework64\\v4.0.30319\\regasm" /codebase "$(TargetPath)"\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Post build event to register dll as a COM object",src:n(35520).Z,width:"1403",height:"593"})),(0,r.kt)("p",null,"This would ensure the proper registration after each compilation of the add-in project."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For the enhanced debugging experience I would recommend to specify the full path to SOLIDWORKS as an external application in project settings.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Starting SOLIDWORKS as an external program while debugging the add-in",src:n(57834).Z,width:"901",height:"501"})),(0,r.kt)("p",null,"This would automatically start SOLIDWORKS by pressing green run button or F5 key and attach the debugger from the Visual Studio."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Registry information needs to be added to SOLIDWORKS registry branch to make it visible for the application. To simplify the process this information can be automatically added and removed when dll is registered and unregistered as COM object by defining the functions and decorating them with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.comregisterfunctionattribute?view=netframework-4.7.2"},"ComRegisterFunctionAttribute")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.comunregisterfunctionattribute?view=netframework-4.7.2"},"ComUnregisterFunctionAttribute")," attributes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy paste the code for the add-in as shown below and compile the project"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Imports SolidWorks.Interop.sldworks\nImports SolidWorks.Interop.swpublished\nImports System\nImports System.ComponentModel\nImports System.Diagnostics\nImports System.Linq\nImports System.Runtime.InteropServices\n\n<ComVisible(True)>\n<Guid("799707B3-1632-469F-B294-EC05A5FBFFC8")>\n<DisplayName("Sample Add-In")>\n<Description("Sample \'Hello World\' SOLIDWORKS add-in")>\nPublic Class MySampleAddin\n    Implements ISwAddin\n\n    Private Const ADDIN_KEY_TEMPLATE As String = "SOFTWARE\\SolidWorks\\Addins\\{{{0}}}"\n    Private Const ADDIN_STARTUP_KEY_TEMPLATE As String = "Software\\SolidWorks\\AddInsStartup\\{{{0}}}"\n    Private Const ADD_IN_TITLE_REG_KEY_NAME As String = "Title"\n    Private Const ADD_IN_DESCRIPTION_REG_KEY_NAME As String = "Description"\n\n#Region "Registration"\n\n    <ComRegisterFunction>\n    Public Shared Sub RegisterFunction(ByVal t As Type)\n        Try\n            Dim addInTitle = ""\n            Dim loadAtStartup = True\n            Dim addInDesc = ""\n            Dim dispNameAtt = t.GetCustomAttributes(False).OfType(Of DisplayNameAttribute)().FirstOrDefault()\n\n            If dispNameAtt IsNot Nothing Then\n                addInTitle = dispNameAtt.DisplayName\n            Else\n                addInTitle = t.ToString()\n            End If\n\n            Dim descAtt = t.GetCustomAttributes(False).OfType(Of DescriptionAttribute)().FirstOrDefault()\n\n            If descAtt IsNot Nothing Then\n                addInDesc = descAtt.Description\n            Else\n                addInDesc = t.ToString()\n            End If\n\n            Dim addInkey = Microsoft.Win32.Registry.LocalMachine.CreateSubKey(String.Format(ADDIN_KEY_TEMPLATE, t.GUID))\n            addInkey.SetValue(Nothing, 0)\n            addInkey.SetValue(ADD_IN_TITLE_REG_KEY_NAME, addInDesc)\n            addInkey.SetValue(ADD_IN_DESCRIPTION_REG_KEY_NAME, addInTitle)\n            Dim addInStartupkey = Microsoft.Win32.Registry.CurrentUser.CreateSubKey(String.Format(ADDIN_STARTUP_KEY_TEMPLATE, t.GUID))\n            addInStartupkey.SetValue(Nothing, Convert.ToInt32(loadAtStartup), Microsoft.Win32.RegistryValueKind.DWord)\n        Catch ex As Exception\n            Console.WriteLine("Error while registering the addin: " & ex.Message)\n        End Try\n\n    End Sub\n\n    <ComUnregisterFunction>\n    Public Shared Sub UnregisterFunction(ByVal t As Type)\n        Try\n            Microsoft.Win32.Registry.LocalMachine.DeleteSubKey(String.Format(ADDIN_KEY_TEMPLATE, t.GUID))\n            Microsoft.Win32.Registry.CurrentUser.DeleteSubKey(String.Format(ADDIN_STARTUP_KEY_TEMPLATE, t.GUID))\n        Catch e As Exception\n            Console.WriteLine("Error while unregistering the addin: " & e.Message)\n        End Try\n    End Sub\n#End Region\n\n    Private m_App As ISldWorks\n\n    Public Function ConnectToSW(ByVal ThisSW As Object, ByVal Cookie As Integer) As Boolean Implements ISwAddin.ConnectToSW\n        m_App = TryCast(ThisSW, ISldWorks)\n        m_App.SendMsgToUser("Hello World!")\n        Return True\n    End Function\n\n    Public Function DisconnectFromSW() As Boolean Implements ISwAddin.DisconnectFromSW\n        Return True\n    End Function\n\nEnd Class\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can ignore the following warning displayed in the Visual Studio window while compilation.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unsigned assembly compile warning",src:n(23209).Z,width:"713",height:"383"}),"{ width=450 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run SOLIDWORKS and the ",(0,r.kt)("em",{parentName:"li"},"Hello World")," message box is displayed on start.")),(0,r.kt)("p",null,"The above code can be simplified as shown below with a help of ",(0,r.kt)("a",{parentName:"p",href:"https://xcad.net/"},"xCAD.NET Framework")," framework:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'<Title("Sample Add-In")>\n<Description("Sample \'Hello World\' SOLIDWORKS add-in")>\n<ComVisible(True), Guid("799707B3-1632-469F-B294-EC05A5FBFFC8")>\nPublic Class MySampleAddIn\n    Inherits SwAddInEx\n\n    Public Overrides Sub OnConnect()\n    End Sub\n\nEnd Class\n')))}u.isMDXComponent=!0},64493:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/embed-interop-types-option-56efa8c1c2bfc4cbf4d12ec6264c917b.png"},79378:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new-vbnet-class-library-8bdd7edfdf60d872202a6f62f6b37c6e.png"},35520:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/post-build-events-c13848dbef1a2ded68df0e0810fb7881.png"},57834:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/start-external-program-f35e97a77c674a8605c828f98f71b0f2.png"},23209:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/unsigned-assembly-warning-585c203b90153d83cbb0ab7b281b2e31.png"}}]);