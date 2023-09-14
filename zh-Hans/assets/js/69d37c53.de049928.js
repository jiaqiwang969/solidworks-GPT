"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[18491],{3905:(n,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>h});var t=o(67294);function s(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function r(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function a(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){s(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function i(n,e){if(null==n)return{};var o,t,s=function(n,e){if(null==n)return{};var o,t,s={},r=Object.keys(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||(s[o]=n[o]);return s}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(s[o]=n[o])}return s}var c=t.createContext({}),m=function(n){var e=t.useContext(c),o=e;return n&&(o="function"==typeof n?n(e):a(a({},e),n)),o},l=function(n){var e=m(n.components);return t.createElement(c.Provider,{value:e},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(n,e){var o=n.components,s=n.mdxType,r=n.originalType,c=n.parentName,l=i(n,["components","mdxType","originalType","parentName"]),d=m(o),p=s,h=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return o?t.createElement(h,a(a({ref:e},l),{},{components:o})):t.createElement(h,a({ref:e},l))}));function h(n,e){var o=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var r=o.length,a=new Array(r);a[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i[d]="string"==typeof n?n:s,a[1]=i;for(var m=2;m<r;m++)a[m]=o[m];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},16244:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var t=o(87462),s=(o(67294),o(3905));const r={title:"How to run commands synchronously using SOLIDWORKS API",caption:"Run Command Synchronously",description:"Example demonstrates how to run SOLIDWORKS commands synchronously (i.e. return the execution once command closed)",image:"command_open.png",labels:["sync","command","close"]},a=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-command-sync/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-command-sync/index",title:"How to run commands synchronously using SOLIDWORKS API",description:"Example demonstrates how to run SOLIDWORKS commands synchronously (i.e. return the execution once command closed)",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-command-sync/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-command-sync",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-command-sync/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-command-sync/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-command-sync/index.md",tags:[],version:"current",frontMatter:{title:"How to run commands synchronously using SOLIDWORKS API",caption:"Run Command Synchronously",description:"Example demonstrates how to run SOLIDWORKS commands synchronously (i.e. return the execution once command closed)",image:"command_open.png",labels:["sync","command","close"]},sidebar:"tutorialSidebar",previous:{title:"Run VBA and VSTA macros in SOLIDWORKS",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run/"},next:{title:"Macro feature to automatically run SOLIDWORKS macro on rebuild",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/run-macro-on-rebuild/"}},c={},m=[{value:"Run Instructions",id:"run-instructions",level:2},{value:"VBA Macro",id:"vba-macro",level:3},{value:"C#",id:"c",level:3}],l={toc:m},d="wrapper";function u(n){let{components:e,...r}=n;return(0,s.kt)(d,(0,t.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Opened Command (Property Manager Page)",src:o(45720).Z,width:"595",height:"499"}),"{ width=250 }"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~runcommand.html"},"ISldWorks::RunCommand")," SOLIDWORKS API method allows running any command. Usually it is used to open property manager page."),(0,s.kt)("p",null,"However this command runs asynchronously, which means that the control is returned to the executor once command started (e.g. Property Manager Page is opened). In some cases it is required to execute the code once this command closes (e.g. Property Manager Page is closed)."),(0,s.kt)("p",null,"This example demonstrates how to run command synchronously using SOLIDWORKS API, so the control is returned to the executor once the command finishes (not started)."),(0,s.kt)("h2",{id:"run-instructions"},"Run Instructions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Open/create part document"),(0,s.kt)("li",{parentName:"ul"},"Create any sketch with rectangle (or another shape)"),(0,s.kt)("li",{parentName:"ul"},"Select the sketch"),(0,s.kt)("li",{parentName:"ul"},"Run the macro. As the result 'Boss-Extrude' property page is displayed"),(0,s.kt)("li",{parentName:"ul"},"Modify options and click green tick (OK) or cross (Cancel)"),(0,s.kt)("li",{parentName:"ul"},"Macro displays the message when property page is closed and the result (OK or Cancel) is displayed")),(0,s.kt)("h3",{id:"vba-macro"},"VBA Macro"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create a class module and name it ",(0,s.kt)("em",{parentName:"li"},"CommandRunManager"),". Copy the code below:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim WithEvents swApp As SldWorks.SldWorks\n\nDim CurrentCommandId As Long\nDim IsCommandCompleted As Boolean\nDim CloseReason As Long\n\nPrivate Sub Class_Initialize()\n    \n    Set swApp = Application.SldWorks\n    \nEnd Sub\n\nFunction RunCommand(cmd As swCommands_e) As Boolean\n    \n    IsCommandCompleted = False\n    CurrentCommandId = cmd\n    swApp.RunCommand cmd, ""\n    \n    While Not IsCommandCompleted\n        DoEvents\n    Wend\n    \n    RunCommand = CloseReason = swCommands_e.swCommands_PmOK\n    \nEnd Function\n\nPrivate Function swApp_CommandCloseNotify(ByVal Command As Long, ByVal reason As Long) As Long\n    \n    If CurrentCommandId <> -1 Then\n    \n        If Command = CurrentCommandId Then\n            CurrentCommandId = -1\n            IsCommandCompleted = True\n            CloseReason = reason\n        End If\n    \n    End If\n    \nEnd Function\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Copy the following code into the main module (where the ",(0,s.kt)("em",{parentName:"li"},"main")," function is)"),(0,s.kt)("li",{parentName:"ul"},"Modify the ",(0,s.kt)("em",{parentName:"li"},"RunCommand")," to pass any other command id if needed. Method returns True if the command is closed with OK button, False is returned when command is cancelled.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Sub main()\n    \n    Dim cmdsMgr As CommandRunManager\n    Set cmdsMgr = New CommandRunManager\n    \n    If cmdsMgr.RunCommand(swCommands_Extrude) Then\n        MsgBox "Command Completed"\n    Else\n        MsgBox "Command Cancelled"\n    End If\n    \nEnd Sub\n\n')),(0,s.kt)("h3",{id:"c"},"C","#"),(0,s.kt)("p",null,"It is not recommended to use DoEvents function to emulate async operation in .NET languages (C# or VB.NET). It is better to use ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/"},"Asynchronous programming with async and await")),(0,s.kt)("p",null,"Example below demonstrates an implementation of async version of RunCommand which can be awaited without locking of the UI thread:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SldWorksExtension.cs")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.swcommands;\nusing System.Threading.Tasks;\n\nnamespace SolidWorks.Interop.sldworks\n{\n    public static class SldWorksExtension\n    {\n        public static Task<bool> RunCommandAsync(this ISldWorks app, swCommands_e cmd)\n        {\n            return Task.Run(() => \n            {\n                if (app.RunCommand((int)cmd, ""))\n                {\n                    var isCmdCompleted = false;\n                    var res = false;\n\n                    (app as SldWorks).CommandCloseNotify += (int Command, int reason) =>\n                    {\n                        res = reason == (int)swCommands_e.swCommands_PmOK;\n                        isCmdCompleted = true;\n                        return 0;\n                    };\n\n                    while (!isCmdCompleted)\n                    {\n                        Task.Delay(10);\n                    }\n\n                    return res;\n                }\n\n                return false;\n            });\n        }\n    }\n}\n\n')),(0,s.kt)("p",null,"The extension can be called from any async method. For example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swcommands;\nusing System;\nusing System.Threading.Tasks;\n\nnamespace RunCommandAsyncConsole\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            AsyncMain().Wait();\n            return;\n        }\n\n        static async Task AsyncMain()\n        {\n            var app = Activator.CreateInstance(Type.GetTypeFromProgID("SldWorks.Application")) as ISldWorks;\n            app.Visible = true;\n\n            var res = await app.RunCommandAsync(swCommands_e.swCommands_Extrude);\n\n            if (res)\n            {\n                app.SendMsgToUser("Command Completed");\n            }\n            else\n            {\n                app.SendMsgToUser("Command Canceled");\n            }\n        }\n    }\n}\n\n')))}u.isMDXComponent=!0},45720:(n,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/command_open-b4dee1f12aa2bf623f010197f243a31e.png"}}]);