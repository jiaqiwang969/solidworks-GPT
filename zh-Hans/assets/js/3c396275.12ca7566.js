"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[93415],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return t?r.createElement(g,i(i({ref:n},m),{},{components:t})):r.createElement(g,i({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72826:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"Script generates model from input parameters using SOLIDWORKS API",caption:"Model Generator",description:"Script generating model based on the template with specified parameters using SOLIDWORKS API",image:"model-parameters.png",labels:["dimension","parameters","script"]},i=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/power-shell/model-generator/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/power-shell/model-generator/index",title:"Script generates model from input parameters using SOLIDWORKS API",description:"Script generating model based on the template with specified parameters using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/power-shell/model-generator/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/power-shell/model-generator",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/power-shell/model-generator/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/power-shell/model-generator/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/power-shell/model-generator/index.md",tags:[],version:"current",frontMatter:{title:"Script generates model from input parameters using SOLIDWORKS API",caption:"Model Generator",description:"Script generating model based on the template with specified parameters using SOLIDWORKS API",image:"model-parameters.png",labels:["dimension","parameters","script"]},sidebar:"tutorialSidebar",previous:{title:"Export SOLIDWORKS files using SOLIDWORKS API in shell script",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/power-shell/export-file/"},next:{title:"Macro create precise part bounding box using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/precise-bounding-box/"}},l={},p=[{value:"model-generator.ps1",id:"model-generatorps1",level:2},{value:"model-generator.cmd",id:"model-generatorcmd",level:2}],m={toc:p},d="wrapper";function c(e){let{components:n,...o}=e;return(0,a.kt)(d,(0,r.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This PowerShell script allows generating model using SOLIDWORKS API based on the template with specified parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create two files and paste the code from the below snippets")),(0,a.kt)("h2",{id:"model-generatorps1"},"model-generator.ps1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ps1"},'$curDir = Split-Path $script:MyInvocation.MyCommand.Path\n$templateFilePath = $curDir + "\\template.SLDPRT"\n\n$outFilePath=$args[0]\n$width=$args[1]\n$length=$args[2]\n$height=$args[3]\n\n$Source = @"\nImports System\nImports System.Collections.Generic\n\nPublic Class ModelGenerator\n\n    Public Shared Sub GenerateModelFromTemplate(templatePath as String, outFilePath As String, width As String, length As String, height As String)\n        \n        Dim swApp As Object = Activator.CreateInstance(Type.GetTypeFromProgID("SldWorks.Application"))\n        swApp.CommandInProgress = True\n        swApp.UserControlBackground = True\n        \n        If swApp Is Nothing Then\n            Console.WriteLine("Failed to connect to SOLIDWORKS instance")\n            Exit Sub\n        End If\n\n        Const PARAM_WIDTH As String = "Width@Base"\n        Const PARAM_LENGTH As String = "Length@Base"\n        Const PARAM_HEIGHT As String = "Height@Boss"\n\n        Dim openDocSpec As Object\n        Console.WriteLine("Opening template model: " + templatePath)\n        openDocSpec = swApp.GetOpenDocSpec(templatePath)\n        openDocSpec.Silent = True\n        openDocSpec.ReadOnly = True\n        \n        Dim model As Object = swApp.OpenDoc7(openDocSpec)\n\n        If model IsNot Nothing Then\n\n            Try\n                Console.WriteLine("Setting parameters")\n\n                Dim parameters As New Dictionary(Of String, Double)\n                parameters.Add(PARAM_WIDTH, Double.Parse(width))\n                parameters.Add(PARAM_LENGTH, Double.Parse(length))\n                parameters.Add(PARAM_HEIGHT, Double.Parse(height))\n\n                For Each paramData As KeyValuePair(Of String, Double) In parameters\n\n                    Dim paramName As String = paramData.Key\n                    Dim param As Object = model.Parameter(paramName)\n\n                    If param IsNot Nothing Then\n\n                        Const swSetValue_InAllConfigurations As Integer = 2\n                        Const swSetValue_Successful As Integer = 0\n\n                        Dim paramValue As Double = paramData.Value\n\n                        If param.SetSystemValue3(paramValue, swSetValue_InAllConfigurations, Nothing) = swSetValue_Successful Then\n                            Console.WriteLine(String.Format("{0}={1}", paramName, paramValue))\n                        Else\n                            Throw New Exception(String.Format("Failed to set the parameter {0} to {1} ", paramName, paramValue))\n                        End If\n                    Else\n                        Throw New Exception("Failed to find the parameter: " + paramName)\n                    End If\n\n                Next\n\n                Console.WriteLine("Saving model to " + outFilePath)\n\n                Const swSaveAsCurrentVersion As Integer = 0\n                Const swSaveAsOptions_Silent As Integer = 1\n                Const swSaveAsOptions_Copy As Integer = 2\n\n                model.ForceRebuild3(False)\n\n                If model.Extension.GetWhatsWrongCount() > 0 Then\n                    Console.WriteLine("Model has rebuild errors")\n                End If\n\n                Dim err As Integer = model.SaveAs3(outFilePath, swSaveAsCurrentVersion, swSaveAsOptions_Silent + swSaveAsOptions_Copy)\n                \n                If err <> 0  Then\n                    Throw New Exception(String.Format("Failed to save document to {0}. Error code: {1}", outFilePath, err))\n                End If\n\n            Catch ex As Exception\n                Console.WriteLine("Error: " & ex.Message)\n            Finally\n                swApp.CommandInProgress = False\n                Dim modelTitle As String = model.GetTitle()\n                System.Runtime.InteropServices.Marshal.ReleaseComObject(model)\n                model = Nothing\n                GC.Collect()\n                swApp.CloseDoc(modelTitle)\n            End Try\n        Else\n            Console.WriteLine("Failed to open template model " + templatePath)\n        End If\n        \n    End Sub\n\nEnd Class\n"@\n\nAdd-Type -TypeDefinition $Source -Language VisualBasic\n\n[ModelGenerator]::GenerateModelFromTemplate($templateFilePath, $outFilePath, $width, $length, $height)\n\n')),(0,a.kt)("h2",{id:"model-generatorcmd"},"model-generator.cmd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},'SET inputFilePath=%1\nSET outFilePath=%2\n\nSET outFilePath=%1\nSET width=%2\nSET length=%3\nSET height=%4\n\nPowerShell -NoProfile -ExecutionPolicy Bypass -File "%~dp0model-generator.ps1" %outFilePath% %width% %length% %height%\n')),(0,a.kt)("p",null,"Download ",(0,a.kt)("a",{target:"_blank",href:t(54292).Z},"Template Model")," and save it to the same folder where the above two scripts are saved."),(0,a.kt)("p",null,"This is template model which has 3 driving parameters: width, height and length."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Model with parameters",src:t(61968).Z,width:"805",height:"494"}),"{ width=350 }"),(0,a.kt)("p",null,"This will be modified by the script and saved to a new file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start the command line and execute the following command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bat"},"[Full Path To model-generator.cmd] [Full Path To Output SOLIDWORKS file] [Width] [Length] [Height]\n")),(0,a.kt)("p",null,"As the result the file is generated and the process log is displayed directly in the console:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Messages in console reporting the progress and the result of model generation",src:t(60243).Z,width:"850",height:"242"}),"{ width=450 }"),(0,a.kt)("p",null,"Template file is not modified and the resulting model is saved with the parameters updated."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Generated model with applied parameters",src:t(22470).Z,width:"870",height:"507"}),"{ width=350 }"))}c.isMDXComponent=!0},54292:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/template-9fba74a704b4ab3821fe1d4887a21df6.SLDPRT"},60243:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"},61968:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/model-parameters-e90b06214fea36c0fcee18b186d7920c.png"},22470:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/model-result-f0aa51fe1cffc1d25e55961784ef5bdd.png"}}]);