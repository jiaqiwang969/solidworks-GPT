"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[26480],{3905:(n,e,o)=>{o.d(e,{Zo:()=>d,kt:()=>g});var t=o(67294);function a(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function s(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function r(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){a(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function i(n,e){if(null==n)return{};var o,t,a=function(n,e){if(null==n)return{};var o,t,a={},s=Object.keys(n);for(t=0;t<s.length;t++)o=s[t],e.indexOf(o)>=0||(a[o]=n[o]);return a}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)o=s[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(a[o]=n[o])}return a}var m=t.createContext({}),c=function(n){var e=t.useContext(m),o=e;return n&&(o="function"==typeof n?n(e):r(r({},e),n)),o},d=function(n){var e=c(n.components);return t.createElement(m.Provider,{value:e},n.children)},l="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(n,e){var o=n.components,a=n.mdxType,s=n.originalType,m=n.parentName,d=i(n,["components","mdxType","originalType","parentName"]),l=c(o),p=a,g=l["".concat(m,".").concat(p)]||l[p]||u[p]||s;return o?t.createElement(g,r(r({ref:e},d),{},{components:o})):t.createElement(g,r({ref:e},d))}));function g(n,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var s=o.length,r=new Array(s);r[0]=p;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=n,i[l]="string"==typeof n?n:a,r[1]=i;for(var c=2;c<s;c++)r[c]=o[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},73850:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=o(87462),a=(o(67294),o(3905));const s={title:"How to run commands synchronously using SOLIDWORKS API",image:"command_open.png",labels:["sync","command","close"]},r=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/run-command-sync/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/run-command-sync/index",title:"How to run commands synchronously using SOLIDWORKS API",description:"Opened Command (Property Manager Page){ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/run-command-sync/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/run-command-sync",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/run-command-sync/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/run-command-sync/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/run-command-sync/index.md",tags:[],version:"current",frontMatter:{title:"How to run commands synchronously using SOLIDWORKS API",image:"command_open.png",labels:["sync","command","close"]},sidebar:"tutorialSidebar",previous:{title:"Reveal (display or delete) all feature hidden in the SOLIDWORKS Feature Manager tree",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/reveal-hidden-features/"},next:{title:"Show the text of all comments in the active model using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/show-all-comments/"}},m={},c=[{value:"Run Instructions",id:"run-instructions",level:2},{value:"VBA Macro",id:"vba-macro",level:3},{value:"C#",id:"c",level:3}],d={toc:c},l="wrapper";function u(n){let{components:e,...s}=n;return(0,a.kt)(l,(0,t.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Opened Command (Property Manager Page)",src:o(83214).Z,width:"595",height:"499"}),"{ width=250 }"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~runcommand.html"},"ISldWorks::RunCommand")," SOLIDWORKS API method allows running any command. Usually it is used to open property manager page."),(0,a.kt)("p",null,"However this command runs asynchronously, which means that the control is returned to the executor once command started (e.g. Property Manager Page is opened). In some cases it is required to execute the code once this command closes (e.g. Property Manager Page is closed)."),(0,a.kt)("p",null,"This example demonstrates how to run command synchronously using SOLIDWORKS API, so the control is returned to the executor once the command finishes (not started)."),(0,a.kt)("h2",{id:"run-instructions"},"Run Instructions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open/create part document"),(0,a.kt)("li",{parentName:"ul"},"Create any sketch with rectangle (or another shape)"),(0,a.kt)("li",{parentName:"ul"},"Select the sketch"),(0,a.kt)("li",{parentName:"ul"},"Run the macro. As the result 'Boss-Extrude' property page is displayed"),(0,a.kt)("li",{parentName:"ul"},"Modify options and click green tick (OK) or cross (Cancel)"),(0,a.kt)("li",{parentName:"ul"},"Macro displays the message when property page is closed and the result (OK or Cancel) is displayed")),(0,a.kt)("h3",{id:"vba-macro"},"VBA Macro"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a class module and name it ",(0,a.kt)("em",{parentName:"li"},"CommandRunManager"),". Copy the code below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Dim WithEvents swApp As SldWorks.SldWorks\n\nDim CurrentCommandId As Long\nDim IsCommandCompleted As Boolean\nDim CloseReason As Long\n\nPrivate Sub Class_Initialize()\n    \n    Set swApp = Application.SldWorks\n    \nEnd Sub\n\nFunction RunCommand(cmd As swCommands_e) As Boolean\n    \n    IsCommandCompleted = False\n    CurrentCommandId = cmd\n    swApp.RunCommand cmd, ""\n    \n    While Not IsCommandCompleted\n        DoEvents\n    Wend\n    \n    RunCommand = CloseReason = swCommands_e.swCommands_PmOK\n    \nEnd Function\n\nPrivate Function swApp_CommandCloseNotify(ByVal Command As Long, ByVal reason As Long) As Long\n    \n    If CurrentCommandId <> -1 Then\n    \n        If Command = CurrentCommandId Then\n            CurrentCommandId = -1\n            IsCommandCompleted = True\n            CloseReason = reason\n        End If\n    \n    End If\n    \nEnd Function\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copy the following code into the main module (where the ",(0,a.kt)("em",{parentName:"li"},"main")," function is)"),(0,a.kt)("li",{parentName:"ul"},"Modify the ",(0,a.kt)("em",{parentName:"li"},"RunCommand")," to pass any other command id if needed. Method returns True if the command is closed with OK button, False is returned when command is cancelled.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Sub main()\n    \n    Dim cmdsMgr As CommandRunManager\n    Set cmdsMgr = New CommandRunManager\n    \n    If cmdsMgr.RunCommand(swCommands_Extrude) Then\n        MsgBox "Command Completed"\n    Else\n        MsgBox "Command Cancelled"\n    End If\n    \nEnd Sub\n\n')),(0,a.kt)("h3",{id:"c"},"C","#"),(0,a.kt)("p",null,"It is not recommended to use DoEvents function to emulate async operation in .NET languages (C# or VB.NET). It is better to use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/"},"Asynchronous programming with async and await")),(0,a.kt)("p",null,"Example below demonstrates an implementation of async version of RunCommand which can be awaited without locking of the UI thread:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SldWorksExtension.cs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.swcommands;\nusing System.Threading.Tasks;\n\nnamespace SolidWorks.Interop.sldworks\n{\n    public static class SldWorksExtension\n    {\n        public static Task<bool> RunCommandAsync(this ISldWorks app, swCommands_e cmd)\n        {\n            return Task.Run(() => \n            {\n                if (app.RunCommand((int)cmd, ""))\n                {\n                    var isCmdCompleted = false;\n                    var res = false;\n\n                    (app as SldWorks).CommandCloseNotify += (int Command, int reason) =>\n                    {\n                        res = reason == (int)swCommands_e.swCommands_PmOK;\n                        isCmdCompleted = true;\n                        return 0;\n                    };\n\n                    while (!isCmdCompleted)\n                    {\n                        Task.Delay(10);\n                    }\n\n                    return res;\n                }\n\n                return false;\n            });\n        }\n    }\n}\n\n')),(0,a.kt)("p",null,"The extension can be called from any async method. For example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swcommands;\nusing System;\nusing System.Threading.Tasks;\n\nnamespace RunCommandAsyncConsole\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            AsyncMain().Wait();\n            return;\n        }\n\n        static async Task AsyncMain()\n        {\n            var app = Activator.CreateInstance(Type.GetTypeFromProgID("SldWorks.Application")) as ISldWorks;\n            app.Visible = true;\n\n            var res = await app.RunCommandAsync(swCommands_e.swCommands_Extrude);\n\n            if (res)\n            {\n                app.SendMsgToUser("Command Completed");\n            }\n            else\n            {\n                app.SendMsgToUser("Command Canceled");\n            }\n        }\n    }\n}\n\n')))}u.isMDXComponent=!0},83214:(n,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/command_open-b4dee1f12aa2bf623f010197f243a31e.png"}}]);