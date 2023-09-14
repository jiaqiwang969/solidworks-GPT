"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[14762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||i;return n?o.createElement(u,a(a({ref:t},p),{},{components:n})):o.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={title:"Create VB.NET Stand-Alone (exe) application for SOLIDWORKS",caption:"Create VB.NET Stand-Alone Application for SOLIDWORKS",description:"Guide for how to connect to SOLIDWORKS application from out-of-process (a.k.a Stand-Alone) application (e.g. Windows Forms, Windows Console) using VB.NET and Microsoft Visual Studio",sidebar_position:2,image:"proj-template.png",labels:["activator","create instance","example","getobject","rot","sdk","solidworks api","vb.net"],"redirect-from":["/2018/03/create-vbnet-stand-alone-application.html"]},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-vbnet/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-vbnet/index",title:"Create VB.NET Stand-Alone (exe) application for SOLIDWORKS",description:"Guide for how to connect to SOLIDWORKS application from out-of-process (a.k.a Stand-Alone) application (e.g. Windows Forms, Windows Console) using VB.NET and Microsoft Visual Studio",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-vbnet/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-vbnet",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-vbnet/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-vbnet/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-vbnet/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Create VB.NET Stand-Alone (exe) application for SOLIDWORKS",caption:"Create VB.NET Stand-Alone Application for SOLIDWORKS",description:"Guide for how to connect to SOLIDWORKS application from out-of-process (a.k.a Stand-Alone) application (e.g. Windows Forms, Windows Console) using VB.NET and Microsoft Visual Studio",sidebar_position:2,image:"proj-template.png",labels:["activator","create instance","example","getobject","rot","sdk","solidworks api","vb.net"],"redirect-from":["/2018/03/create-vbnet-stand-alone-application.html"]},sidebar:"tutorialSidebar",previous:{title:"Create C# stand-alone application for SOLIDWORKS API automation",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-csharp/"},next:{title:"Create C++ Stand-Alone (exe) application for SOLIDWORKS",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-cpp/"}},c={},l=[{value:"Creating new project",id:"creating-new-project",level:2},{value:"Creating or connecting to instance",id:"creating-or-connecting-to-instance",level:2},{value:"Getting the running instance via ROT",id:"getting-the-running-instance-via-rot",level:2}],p={toc:l},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial I will demonstrate how to connect to SOLIDWORKS application from out-of-process (a.k.a Stand-Alone) application (e.g. Windows Forms, Windows Console) using VB.NET and Microsoft Visual Studio."),(0,r.kt)("p",null,"For more detailed explanation of the approaches discussed in this article please read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/"},"Connect To SOLIDWORKS From Stand-Alone Application")," article."),(0,r.kt)("h2",{id:"creating-new-project"},"Creating new project"),(0,r.kt)("p",null,"I will be using Microsoft Visual Studio development environment. You can use any edition of Visual Studio. The same code will work in Professional, Express or Community editions. Follow this link to download ",(0,r.kt)("a",{parentName:"p",href:"https://www.visualstudio.com/vs/community/"},"Visual Studio"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Visual Studio"),(0,r.kt)("li",{parentName:"ul"},"Start new project:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Creating new VB.NET project in Visual Studio",src:n(99557).Z,width:"400",height:"202"}),"{ width=400 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select the project template. I would recommend to start with Console Application project template as it contains the minimum pregenerated code:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Selecting VB.NET Console Application project template",src:n(18351).Z,width:"400",height:"138"}),"{ width=400 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add reference to SolidWorks Interop library. Interop libraries are located at ",(0,r.kt)("strong",{parentName:"li"},"SOLIDWORKS Installation Folder"),"\\api\\redist\\SolidWorks.Interop.sldworks.dll* for projects targeting Framework 4.0 onwards and ",(0,r.kt)("strong",{parentName:"li"},"SOLIDWORKS Installation Folder"),"\\api\\redist","*","*CLR2**","*",(0,r.kt)("em",{parentName:"li"},"SolidWorks.Interop.sldworks.dll")," for projects targeting Framework 2.0 and 3.5.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding assembly references to the project",src:n(66998).Z,width:"320",height:"213"}),"{ width=320 }"),(0,r.kt)("p",null,"For projects targeting Framework 4.0 I recommend to set the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/dotnet/framework/interop/type-equivalence-and-embedded-interop-types"},"Embed Interop Types"))," option to false.\nOtherwise it is possible to have unpredictable behavior of the application when calling the SOLIDWORKS API due to a type cast issue.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Option to embed interop assemblies",src:n(2123).Z,width:"400",height:"386"}),"{ width=400 height=385 }"),(0,r.kt)("p",null,"Now we can add the code to connect to SOLIDWORKS instance.  "),(0,r.kt)("h2",{id:"creating-or-connecting-to-instance"},"Creating or connecting to instance"),(0,r.kt)("p",null,"Probably the most common and quick way to connect to COM server is using the ",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/microsoft.visualbasic.interaction.createobject(v=vs.110).aspx"},"CreateObject")," method.\nAlternative methods are: ",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/system.activator.createinstance(v=vs.110).aspx"},"Activator::CreateInstance")," and ",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/microsoft.visualbasic.interaction.getobject(v=vs.110).aspx"},"GetObject"),". Note, that ",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/microsoft.visualbasic.interaction.getobject(v=vs.110).aspx"},"GetObject")," will create new instance if it cannot connect to the active session.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const PROG_ID As String = "SldWorks.Application"\n\n\'Using Interaction.CreateObject function\nDim app1 = TryCast(CreateObject(PROG_ID), SolidWorks.Interop.sldworks.ISldWorks)\napp1.Visible = True\n\n\'Using Interaction.GetObject function\nDim app2 = TryCast(GetObject("", PROG_ID), SolidWorks.Interop.sldworks.ISldWorks)\napp2.Visible = True\n\n\'Using Activator\nDim progType = System.Type.GetTypeFromProgID(PROG_ID)\nDim app3 = TryCast(System.Activator.CreateInstance(progType), SolidWorks.Interop.sldworks.ISldWorks)\napp3.Visible = True\n\n')),(0,r.kt)("p",null,"I would recommend to use ",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/system.activator.createinstance(v=vs.110).aspx"},"Activator::CreateInstance")," as this allows to connect to the session in 2 steps:  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"As SOLIDWORKS application is registered as COM server we can create the type from its program identifier via ",(0,r.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/library/system.type.gettypefromprogid(v=vs.110).aspx"},"Type::GetTypeFromProgID")," method"),(0,r.kt)("li",{parentName:"ol"},"Construct the instance of the type from the type definition.  ")),(0,r.kt)("p",null,"This approach would allow better troubleshooting options in case of an error: if the first step failed it means that either COM class is not registered or cannot be accessed from the registry; otherwise this might indicate some permissions issues.\nPlease read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone#method-a---activator-and-progid"},"Connect To SOLIDWORKS From Stand-Alone Application")," article for explanations of limitation of this approach.  "),(0,r.kt)("p",null,"Alternatively you can connect to active (already started) session of SOLIDWORKS using the ",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/system.runtime.interopservices.marshal.getactiveobject(v=vs.110).aspx"},"Marshal::GetActiveObject")," method. Unlike calling the ",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/microsoft.visualbasic.interaction.getobject(v=vs.110).aspx"},"GetObject"),", this approach will ensure that  there will be no new instances of SOLIDWORKS created and will throw an exception if there is no running SOLIDWORKS session to connect to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const PROG_ID As String = "SldWorks.Application"\nDim app = TryCast(System.Runtime.InteropServices.Marshal.GetActiveObject(PROG_ID),\n    SolidWorks.Interop.sldworks.ISldWorks)\n')),(0,r.kt)("h2",{id:"getting-the-running-instance-via-rot"},"Getting the running instance via ROT"),(0,r.kt)("p",null,"In order to connect to already running specific session of SOLIDWORKS or to be able to create multiple sessions you can use Running Object Table APIs.\nPlease read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone#method-b---running-object-table-rot"},"Connect To SOLIDWORKS From Stand-Alone Application")," article for more details about this approach."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Imports System.Runtime.InteropServices\nImports System.Runtime.InteropServices.ComTypes\nImports SolidWorks.Interop.sldworks\n\nModule CodeStackSample\n\n    <DllImport("ole32.dll")>\n    Private Function CreateBindCtx(ByVal reserved As UInteger, <Out> ByRef ppbc As IBindCtx) As Integer\n    End Function\n\n    Sub Main()\n\n        Const SW_PATH As String = "C:\\Program Files\\SOLIDWORKS Corp\\SOLIDWORKS\\SLDWORKS.exe"\n\n        Try\n            Dim app = StartSwApp(SW_PATH)\n            Console.WriteLine(app.RevisionNumber())\n        Catch ex As Exception\n            Console.WriteLine("Failed to connect to SOLIDWORKS instance: " & ex.Message)\n        End Try\n\n        Console.ReadLine()\n\n    End Sub\n\n    Function StartSwApp(ByVal appPath As String, _\n            ByVal Optional timeoutSec As Integer = 10) As ISldWorks\n\n        Dim timeout = TimeSpan.FromSeconds(timeoutSec)\n\n        Dim startTime = DateTime.Now\n\n        Dim prc = Process.Start(appPath)\n        Dim app As ISldWorks = Nothing\n\n        While app Is Nothing\n            If DateTime.Now - startTime > timeout Then\n                Throw New TimeoutException()\n            End If\n\n            app = GetSwAppFromProcess(prc.Id)\n        End While\n\n        Return app\n    End Function\n\n    Function GetSwAppFromProcess(ByVal processId As Integer) As ISldWorks\n\n        Dim monikerName = "SolidWorks_PID_" & processId.ToString()\n\n        Dim context As IBindCtx = Nothing\n        Dim rot As IRunningObjectTable = Nothing\n        Dim monikers As IEnumMoniker = Nothing\n\n        Try\n\n            CreateBindCtx(0, context)\n\n            context.GetRunningObjectTable(rot)\n            rot.EnumRunning(monikers)\n\n            Dim moniker = New IMoniker(0) {}\n\n            While monikers.[Next](1, moniker, IntPtr.Zero) = 0\n\n                Dim curMoniker = moniker.First()\n                Dim name As String = Nothing\n\n                If curMoniker IsNot Nothing Then\n\n                    Try\n                        curMoniker.GetDisplayName(context, Nothing, name)\n                    Catch ex As UnauthorizedAccessException\n                    End Try\n\n                End If\n\n                If String.Equals(monikerName, name, StringComparison.CurrentCultureIgnoreCase) Then\n                    Dim app As Object = Nothing\n                    rot.GetObject(curMoniker, app)\n                    Return TryCast(app, ISldWorks)\n                End If\n\n            End While\n\n        Finally\n\n            If monikers IsNot Nothing Then\n                Marshal.ReleaseComObject(monikers)\n            End If\n\n            If rot IsNot Nothing Then\n                Marshal.ReleaseComObject(rot)\n            End If\n\n            If context IsNot Nothing Then\n                Marshal.ReleaseComObject(context)\n            End If\n        End Try\n\n        Return Nothing\n\n    End Function\n\nEnd Module\n\n')),(0,r.kt)("p",null,"In the above example new session of SOLIDWORKS is launched by starting new process from SOLIDWORKS application installation path.\n",(0,r.kt)("em",{parentName:"p"},"StartSwApp")," function requires the full path to ",(0,r.kt)("strong",{parentName:"p"},"sldworks.exe")," as first parameter and optional timeout in seconds as second parameter.\nTimeout will ensure that the application won't be locked in case process failed to start.  "),(0,r.kt)("p",null,"You can also make this call asynchronous and display some progress indication in your application while SOLIDWORKS process is starting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Private Async Function StartSwAppAsync(ByVal appPath As String, _\n    ByVal Optional timeoutSec As Integer = 10) _\n        As System.Threading.Tasks.Task(Of SolidWorks.Interop.sldworks.ISldWorks)\n    Return Await System.Threading.Tasks.Task.Run(Function() StartSwApp(appPath, timeoutSec))\nEnd Function\n\n")))}m.isMDXComponent=!0},66998:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-ref-694b569dfa4fb5696b4cff04c4552177.png"},2123:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/embed-interops-21a542462697486d696bd2d17ea06824.png"},99557:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/new-project-8c3c8b93d341720c31dcd2d84cf8afdf.png"},18351:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAACKCAMAAACzW+y3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANPaxXxvaLWwrQCQ//7+/sCxoXO0/5GRke/swrvH0Qw8RazF4ENzr6mRf4G00MnY5Pz1xrQ3DgAZlcmzpbnO5FSAtaS1y6Kfo4GWsFdWVdzr9Nrd4MrGw7y+xIGBgu7fsE6h//Ds6qu6y75vYOeilObr9SBsrdLS0XWu/6TC9pq10T9gfaOpspODgNne5+TczcrL0Im1/9rMwsvj9Ors8hKS/4GRpL+biiqX/67I4ypTbZOgtKGyxNrn693Bqbq1s6nB3LOoos7T4O7v8HmBkNPZ4rzBw0RCQnR0dODk7KScnMvN2l+m/6O82RcXF8fHyUCc/5PA2Pbr1+Pe2mNiYpKYptLY26+OlGp2h8m9s6yxvL3CzI7E/+Hg3+zw9PH1+X17eenp7L3T66DV/7i1uuTs+qWoqparxjaY/yOV/8TJ07KQlaK20ZaIjYuftLtJMdPOy9HU2YiJlZ2QibXP6J251QBNoOTw9MzR24mEiOzs2qy2wtjZ3Kq80qStu7DP+xuU/+zu7tWAcPj39jo6OTKY/9zItunt98PJzJmhq4K2/nd8ieLTxsrCu+fl4ezf0cO+uuzk27nV+Ofm6cXY7KqkpGqs//Pz9OrbwbqtpbTE2cPO2prH/9nk8dzr/tDKw9nU0WlqbNTh69zf3KOWj+Ln5rukmMHCyMPCwvTs4vTx7XSMtU1bbbO6w55nZZyltU1NTb+0q6ygnJqbo7KdiWuLt8FbRKLH2auxtNrY1KGOl7LL5cHV6s3PzeHn8dvg6eHh5Ovz+6C61jIxMMPR4oukxMO6s+XQvI2Sm7vI2rm+y8zR1KKjqa/D1GS2/6TA3IyUpdTc6XZyfpyJgIi40lFogZqXmayssIyLjAAAJMvc7ry8vLO+y8zKytvRy9G8qnu3/9PBsrKsqRtkqOTo7sXIxMCsmd3g43+ZvePb02h8mYp7d6KsxKmZkLKxstTi8Y+8/6upqsDZ/CwpIPr07MC+wKPI/3mJnuzp5LK1ukGs/7Sek4d+h9LGuwAAAALizUcAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAg+klEQVR4Xu2dDVwTV6Lo08WjXJ+3y71XChaCl7iPG59LgVJ07UNLIQ0awBtrhC1fiaEINbe6QW2NErDsqHwUAmnEEVCJohKyyyLg7jVPkWAVRbCV6oKPGD68QWSrQbpgw3X93TMfQUJBvgImLn9C5mRmkjkz/znnzJwzM4eybBZL4s+Uz2aZWS6RQ4xLl9aRIcilS59dgkIuzTKjfBbvsGrVKgcH/D0+vtJxkCDfS+s+xIWsgxBzY0EyhGHyYRaz8OmNC5cvX1iyqg4ODi65+b+H8P9wIevWfbviSnz8t5iVdeuWffQAH165tA6OcViGf5jFjFzKv3Dhwo3Sokj7CxcOJuFCYvNOa36FCVlHCFnw3V8WxW/btshhUfxnq1b8uOKB74r4+PhtV3wf7P4j6WkWc/HtuqTzkEWaSDi0d7j5W8hp2am8X8Dh1m/f//CXlPfff/eDKx+l//7Hj1YcX7TO4fdXvryyYslfrn3w0V9WfOv4YMH7s5iXdfHYwdS22EXYYFXon37zm3/+g5p/659/85s/bV2w4HYZZcGCnT8u+DL+o8+W/Lnsd+cdHsT8uG5F+oObMJGsuBL34PyCWczKu++v+mzZsksrmrddWrbsM1zInzQ7/lD8B0zIu+dvz6fA9PP++fffvbEMDhbg4fM3liUtOh+/ID/+vAOWvGYxJwuS7O3tdyYlvw8H9ktCsSzrF7/4LZZj/Xbr+Z1QyM6d5+EfCQxgn2KS3jeOmMW87HzXIQmDfHf4NeQ//gN7/frXyTt33k6m7IyZZUbBUoaR4Z9ibt+l7GxJ/XvHZxByxEui5mDM7VAoxO3vnc2DkCNeEj4HYz78X4SQVGIMOTAvU/vREb/tQw7Nw2bJYSMjG6meIaAQeNiL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"}}]);