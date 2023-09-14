"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[67845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),p=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={layout:"sw-tool",title:"Export SOLIDWORKS files using SOLIDWORKS API in shell script",caption:"Export Files",description:"Script allows exporting of the SOLIDWORKS file into the foreign format using command line",image:"power-shell-export.svg",labels:["export","script"],group:"Import/Export"},s=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/power-shell/export-file/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/power-shell/export-file/index",title:"Export SOLIDWORKS files using SOLIDWORKS API in shell script",description:"Script allows exporting of the SOLIDWORKS file into the foreign format using command line",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/power-shell/export-file/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/power-shell/export-file",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/power-shell/export-file/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/power-shell/export-file/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/power-shell/export-file/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Export SOLIDWORKS files using SOLIDWORKS API in shell script",caption:"Export Files",description:"Script allows exporting of the SOLIDWORKS file into the foreign format using command line",image:"power-shell-export.svg",labels:["export","script"],group:"Import/Export"},sidebar:"tutorialSidebar",previous:{title:"Utilizing SOLIDWORKS API methods in PowerShell scripts",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/power-shell/"},next:{title:"Script generates model from input parameters using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/scripts/power-shell/model-generator/"}},a={},p=[{value:"Configuration and usage instructions",id:"configuration-and-usage-instructions",level:2},{value:"export-file.ps1",id:"export-fileps1",level:3},{value:"export-file.cmd",id:"export-filecmd",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This PowerShell script allows exporting the SOLIDWORKS file into the specified foreign format from the command line using SOLIDWORKS API"),(0,r.kt)("h2",{id:"configuration-and-usage-instructions"},"Configuration and usage instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create two files and paste the code from the below snippets")),(0,r.kt)("h3",{id:"export-fileps1"},"export-file.ps1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ps1"},'$inputFilePath=$args[0]\n$outFilePath=$args[1]\n\n$ScriptDir = Split-Path $script:MyInvocation.MyCommand.Path\n\n$Assem = ( \n    $ScriptDir + "\\SolidWorks.Interop.sldworks.dll"\n    ) \n    \n$Source = @"\nusing SolidWorks.Interop.sldworks;\nusing System;\n\n namespace CodeStack\n {\n    public static class Exporter\n    {\n        #region Libraries\n        \n        static Exporter()\n        {\n            AppDomain.CurrentDomain.AssemblyResolve += OnAssemblyResolve;\n        }\n\n        public static void LoadLibrary(params object[] libs)\n        {\n            foreach(string lib in libs)\n            {\n                Console.WriteLine(string.Format("Loading library: {0}", lib));\n                System.Reflection.Assembly assm = System.Reflection.Assembly.LoadFrom(lib);\n                Console.WriteLine(assm.GetName().ToString());\n            }\n        }\n        \n        private static System.Reflection.Assembly OnAssemblyResolve(object sender, ResolveEventArgs args)\n        {\n            foreach (System.Reflection.Assembly assm in AppDomain.CurrentDomain.GetAssemblies())\n            {\n               if(assm.GetName().ToString() == args.Name)\n               {\n                   return assm;\n               }\n            };\n            \n            return null;\n        }\n        \n        #endregion\n        \n        public static void ExportFile(string filePath, string outFilePath)\n        {\n            Console.WriteLine("Connecting to SOLIDWORKS...");\n\n            ISldWorks app = Activator.CreateInstance(Type.GetTypeFromProgID("SldWorks.Application")) as ISldWorks;\n\n            if (app != null)\n            {\n                Console.WriteLine(string.Format("Opening file \'{0}\'...", filePath));\n\n                IDocumentSpecification docSpec = app.GetOpenDocSpec(filePath) as IDocumentSpecification;\n                docSpec.ReadOnly = true;\n                docSpec.Silent = true;\n                IModelDoc2 model = app.OpenDoc7(docSpec);\n\n                if (model != null)\n                {\n                    const int swSaveAsCurrentVersion = 0;\n                    const int swSaveAsOptions_Silent = 1;\n                    int err = -1;\n                    int warn = -1;\n\n                    Console.WriteLine(string.Format("Exporting file \'{0}\' to \'{1}\'...", filePath, outFilePath));\n\n                    if (!model.Extension.SaveAs(outFilePath, swSaveAsCurrentVersion,\n                        swSaveAsOptions_Silent, null, ref err, ref warn))\n                    {\n                        Console.WriteLine(string.Format("Failed to export \'{0}\' to \'{1}\'. Error code: {2}", filePath, outFilePath, err));\n                    }\n\n                    Console.WriteLine(string.Format("Closing file \'{0}\'...", filePath));\n\n                    app.CloseDoc(model.GetTitle());\n                }\n                else\n                {\n                    Console.WriteLine(string.Format("Failed to open document: \'{0}\'. Error code: {1}",\n                        filePath, docSpec.Error));\n                }\n            }\n            else\n            {\n                Console.WriteLine("Failed to connect to SOLIDWORKS instance");\n            }\n        }\n    }\n}\n"@\n \nAdd-Type -TypeDefinition $Source -ReferencedAssemblies $Assem -Language CSharp\n \n[CodeStack.Exporter]::LoadLibrary($Assem)\n[CodeStack.Exporter]::ExportFile($inputFilePath, $outFilePath)\n')),(0,r.kt)("h3",{id:"export-filecmd"},"export-file.cmd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},'SET inputFilePath=%1\nSET outFilePath=%2\n\nPowerShell -NoProfile -ExecutionPolicy Bypass -File "%~dp0export-file.ps1" %inputFilePath% %outFilePath%\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy the ",(0,r.kt)("em",{parentName:"li"},"SolidWorks.Interop.sldworks.dll")," into the folder where the above scripts are created. PowerShell script is based on .NET Framework 2.0 so the SOLIDWORKS interop must target this framework. The dll can be found at: ",(0,r.kt)("strong",{parentName:"li"},"SOLIDWORKS Installation Folder"),"\\api\\redist\\CLR2\\SolidWorks.Interop.sldworks.dll")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Script data files in the folder",src:n(97282).Z,width:"761",height:"148"}),"{ width=450 }"),(0,r.kt)("p",null,"Alternatively full path to SOLIDWORKS interop can be specified as shown below. In this case it is not required to copy this dll into the folder with script files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ps1"},'$Assem = ( \n   "Full path to SolidWorks.Interop.sldworks.dll"\n    ) \n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start the command line and execute the following command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bat"},"[Full Path To export-file.cmd] [Full Path To Input SOLIDWORKS file] [Full Path to output file and extension]\n")),(0,r.kt)("p",null,"As the result the file is exported and the process log is displayed directly in the console:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Messages in console reporting the progress and the result of exporting",src:n(24783).Z,width:"852",height:"555"}),"{ width=450 }"))}u.isMDXComponent=!0},24783:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/export-file-result-console-8c434d63e5297a14b1028c3df9e797e0.png"},97282:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvkAAACUCAMAAAA+l8bnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAEjH7ExgeuPNqLZmAABmttH/6KBtbWYAAG2HuaCgbQAAOtHR0auZv7bbkABmkFC94DpmtgA6kP7+/v+2ZqzZ6raQOodth2Y6AP//0dHouToAOmZmAKCHbVikxauzkYe56JKSkhaWx25gkYTN5rb//4dtbaOzujoAZuXm52YAOqBth93d3avNv5nR/25gqIdtoDoAACGx3f/bkG5gev//tgAAZrm56MPL0dGgbYeg0Wa2/9H/0bmgudG5uei5hzo6OnaJkqDR0eD1+zo6ZrnR/26Z1UyZ1cj//6t9ehmOvguPw0xgkTo6kIeHubb/222HoLKysmaQkP//44fb8+OzkY1gkdv//+jRoNuQOsjJyaDR/6BtoKCgoI1gev/RudGgoOTk5HbV8KvV5TqQ27S4u4yeqLaQkExgqG1th7b/tsiZem1toAA6ZmxsbP/nvzo6AG6z6ra/xLno/42mr43N//+2kKapq8HV3J+ipWYAZma2tm2z1cDDxarm/jqQtpA6ANPW1+n3/MizkaC5uf/ouf/NqDSr1bK7wJC2/4eHbbmHbf/RoMizv9H//87Y3kx9v2LN7eP/6qDR6Lrj8uOzqLHEy8zOz4eHh4eHoMbp9Le3t7O1tzq03Ga224e50WiUqaqrrIubo2edtn7F4KqwtcPGyOnq66e8xVDA46Klp8rT2bvEyZXO5NHb4tG5h6Pc7259keDg4PLz8660uW2g0bu+v8XQ1pDb/7Pj8uj//5BmkFDI64yPkQ6azLmHhyy34rq6usbc5K6vr46kro+wvuP//22goKassG6zv7zAwr7IzUFBQbnRubva5Oi5oJSYmlzE5s7Q0SWOvqi4v8DJzsLk8Kzf8HuDiJeeopGjrFfF6ILT7D664cLt+RqSw9Ph5n/L5Wi62pDV6tXY2VfA47Ld7aq6wTmo0G2guYjS6JiZmWO42A6SxSy75cve5Y6oswAAAP+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///6zvm64AAADydFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AkDR/aQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAFyRJREFUeF7tnYufVddVxxEHIRZfvZg4pio+mDYNauIkyJXUqY+appoovabpQINSMxqDgpBEqpY4qBfRwZBqLVHQ+IJRBm3k8khRqzWxRqJWo60arfVBje/6J7h+a639OI9777mPuTNzzvp9Zu7Zd521H2ef79lnnzPsxaqayVRFGfmmasrIN1VTRr6pmjLyTdWUkW+qpoz84Wm3bpeXqtuqznWsFPJ3/OkOTS1fGfnFZeQX1I69tb3LHn0jv7iM/GIi8GvLH30jv7iM/EJi8Jc/+kZ+cRn5hfSFqe0ylZFfXEZ+mWTkF5eRXyYZ+cVl5JdJRn5xGfllkpFfXEZ+mWTkF9eyI3/PNz2Gzb138jdTT/I9fe9qaL9+61no/T0PvhHlPPhGTsTq9dy4Vu3hRq1eJmc2UIl2uQMernojf/UTH6SNkd+PAvnovvFd8bk8wv1aTK73930xD0Mp9Us+ac/yOa2uVY270KafKt45Pag38v9kF4YqI78fJcnXk6rqi/wvzxsGy0V+/tU9HPVG/v4jfJulLtp322q+Aex5512rVz9K33gIoxu5TIhMGaXIr6ErtRf1lh71XqZbZR5Cjk/8KKX27FcbJUI+t7cXpchn+u994oN79lOhcoNfilPqWjW+61FJ0HEeoQNOd9Mg6pF87hqcup99TEYtTP3vpT7iL9RlfEJNOUqTj/HM9SKP+XHvJbuVjNLZ8OBpLwHPYz4SLp/f24tS5KMhjbsepYtov1S5NKc09JU+D/EVLq0ZVot6JR/ny91R0U3oLr4y6cv4W+hSRL+ZcpQmn3uLhF7Eb6L3Mt0K0CWBXTH5Ll/Y24tS5KMQFMzF0Ll2hYvHyBRaRbc9QC/kA76htahX8nHJ8anD3Rbkk4kbQ6dI7kerjfxcpcnnOaz2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"}}]);