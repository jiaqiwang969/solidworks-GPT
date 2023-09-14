"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[98539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={layout:"sw-tool",title:"Export all SOLIDWORKS document level options to Excel",caption:"Export All Document Options To Excel",description:"Macro allows to export all document properties into excel format using SOLIDWORKS API and reflection",image:"document-properties.png",labels:["export","excel","csv","options"],group:"Options"},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/extract-all-options/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/extract-all-options/index",title:"Export all SOLIDWORKS document level options to Excel",description:"Macro allows to export all document properties into excel format using SOLIDWORKS API and reflection",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/extract-all-options/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/extract-all-options",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/extract-all-options/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/extract-all-options/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/extract-all-options/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Export all SOLIDWORKS document level options to Excel",caption:"Export All Document Options To Excel",description:"Macro allows to export all document properties into excel format using SOLIDWORKS API and reflection",image:"document-properties.png",labels:["export","excel","csv","options"],group:"Options"},sidebar:"tutorialSidebar",previous:{title:"Save SOLIDWORKS drawing with detailing mode on and off",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/detailing-mode-save-model-data/"},next:{title:"Handling pre and post close notifications using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/file-close-event/"}},l={},c=[{value:"C# VSTA Macro",id:"c-vsta-macro",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Document Properties dialog",src:n(11583).Z,width:"1180",height:"816"}),"{ width=350 }"),(0,o.kt)("p",null,"This macro exports all document properties (available under the Tools->Options->Document) menu"),(0,o.kt)("p",null,"Macro is utilizing ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/reflection"},"Reflection")," to dynamically read all available user preferences enumerations and calling the corresponding SOLIDWORKS API to extract each property value."),(0,o.kt)("p",null,"Macro outputs the properties into the CSV file which can be opened in Excel. The following information is included:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Preference Group - numeric, toggle or text"),(0,o.kt)("li",{parentName:"ul"},"ID of preference - the exact option being exported"),(0,o.kt)("li",{parentName:"ul"},"Preference option - additional information about preference"),(0,o.kt)("li",{parentName:"ul"},"Value - current value of the preference")),(0,o.kt)("p",null,"Refer ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapiprogguide/overview/system_options_and_document_properties.htm"},"System Options and Document Properties")," article for a list of options to match the specific preference ID and value."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Extracted user preferences opened in Excel",src:n(36772).Z,width:"937",height:"369"}),"{ width=350 }"),(0,o.kt)("p",null,"This macro can be useful if it is required to compare the preferences between different files. Any diff tool can be used to simplify the comparison and identify the differences, such as ",(0,o.kt)("a",{parentName:"p",href:"https://winmerge.org/"},"WinMerge")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Differences between user preferences of two models",src:n(380).Z,width:"1527",height:"342"}),"{ width=550 }"),(0,o.kt)("p",null,"File output location be customized by modifying the ",(0,o.kt)("em",{parentName:"p"},"OUT_FILE_PATH")," constant at the beginning of the macro."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'const string OUT_FILE_PATH = @""; //Output file will be created at the same location as SOLIDWORKS model and will be named as <ModelName>_prefs.csv\nconst string OUT_FILE_PATH = @"Options.csv"; //Output file will be created at the same location as SOLIDWORKS model and will be named as Options.csv\nconst string OUT_FILE_PATH = @"D:\\Output\\prefs.csv"; //File will be output to D:\\Output\\prefs.csv\n')),(0,o.kt)("p",null,"Refer ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/create-vsta/"},"Create And Run VSTA Macro")," for information about creating and adding code to VSTA macro."),(0,o.kt)("h2",{id:"c-vsta-macro"},"C# VSTA Macro"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System.Runtime.InteropServices;\nusing System;\nusing System.Collections.Generic;\nusing System.IO;\n\nnamespace ExtractAlLDocProperties.csproj\n{\n    public partial class SolidWorksMacro\n    {\n        const string OUT_FILE_PATH = @"";\n\n        public delegate object PreferenceHandlerDelegate(IModelDocExtension ext, int pref, swUserPreferenceOption_e opt, out string type);\n\n        public void Main()\n        {\n            try\n            {\n                IModelDoc2 model = swApp.IActiveDoc2;\n\n                if (model != null)\n                {\n                    IModelDocExtension modelExt = model.Extension;\n\n                    Dictionary<Type, PreferenceHandlerDelegate> handlers = InitHandlers();\n\n                    string outFilePath = OUT_FILE_PATH;\n\n                    if (string.IsNullOrEmpty(outFilePath))\n                    {\n                        outFilePath = Path.GetFileNameWithoutExtension(model.GetTitle()) + "_prefs.csv";\n                    }\n\n                    if (!Path.IsPathRooted(outFilePath))\n                    {\n                        string curModelPath = model.GetPathName();\n\n                        if (string.IsNullOrEmpty(curModelPath))\n                        {\n                            throw new NullReferenceException("Current model is not saved. Either save the model or specify the full path to the output file");\n                        }\n\n                        outFilePath = Path.Combine(Path.GetDirectoryName(curModelPath), outFilePath);\n                    }\n\n                    ExtractUserPreferences(modelExt, outFilePath, handlers);\n                }\n                else\n                {\n                    throw new NullReferenceException("Please open the model");\n                }\n            }\n            catch (Exception ex)\n            {\n                swApp.SendMsgToUser2(ex.Message, (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);\n            }\n        }\n\n        private void ExtractUserPreferences(IModelDocExtension modelExt, string outFilePath, Dictionary<Type, PreferenceHandlerDelegate> handlers)\n        {\n            using (StreamWriter fileWriter = new StreamWriter(outFilePath))\n            {\n                fileWriter.WriteLine("Type,Preference,Options,Value");\n\n                foreach (KeyValuePair<Type, PreferenceHandlerDelegate> prefData in handlers)\n                {\n                    foreach (Enum pref in Enum.GetValues(prefData.Key))\n                    {\n                        if (pref.ToString().StartsWith("swDetailing"))\n                        {\n                            foreach (swUserPreferenceOption_e opt in Enum.GetValues(typeof(swUserPreferenceOption_e)))\n                            {\n                                OutputValue(fileWriter, prefData.Value, modelExt, pref, opt);\n                            }\n                        }\n                        else\n                        {\n                            OutputValue(fileWriter, prefData.Value, modelExt, pref, swUserPreferenceOption_e.swDetailingNoOptionSpecified);\n                        }\n                    }\n                }\n            }\n        }\n\n        private Dictionary<Type, PreferenceHandlerDelegate> InitHandlers()\n        {\n            Dictionary<Type, PreferenceHandlerDelegate> preferences\n                = new Dictionary<Type, PreferenceHandlerDelegate>();\n\n            preferences.Add(typeof(swUserPreferenceDoubleValue_e),\n                GetDoublePreferenceValue);\n\n            preferences.Add(typeof(swUserPreferenceIntegerValue_e),\n                GetIntegerPreferenceValue);\n\n            preferences.Add(typeof(swUserPreferenceStringValue_e),\n                GetStringPreferenceValue);\n\n            preferences.Add(typeof(swUserPreferenceToggle_e),\n                GetTogglePreferenceValue);\n            return preferences;\n        }\n\n        private void OutputValue(System.IO.StreamWriter fileWriter, PreferenceHandlerDelegate handler, \n            IModelDocExtension ext, Enum pref, swUserPreferenceOption_e opt) \n        {\n            int prefVal = Convert.ToInt32(pref);\n\n            string type;\n            object value = handler.Invoke(ext, prefVal, opt, out type);\n\n            string line = string.Format("{0},{1},{2},\\"{3}\\"", type, pref, opt, value);\n\n            fileWriter.WriteLine(line);\n        }\n\n        private object GetDoublePreferenceValue(IModelDocExtension ext, int pref, swUserPreferenceOption_e opt, out string type) \n        {\n            type = "Double";\n            return ext.GetUserPreferenceDouble(pref, (int)opt);\n        }\n\n        private object GetIntegerPreferenceValue(IModelDocExtension ext, int pref, swUserPreferenceOption_e opt, out string type)\n        {\n            type = "Integer";\n            return ext.GetUserPreferenceInteger(pref, (int)opt);\n        }\n\n        private object GetStringPreferenceValue(IModelDocExtension ext, int pref, swUserPreferenceOption_e opt, out string type)\n        {\n            type = "String";\n            return ext.GetUserPreferenceString(pref, (int)opt);\n        }\n\n        private object GetTogglePreferenceValue(IModelDocExtension ext, int pref, swUserPreferenceOption_e opt, out string type)\n        {\n            type = "Toggle";\n            return ext.GetUserPreferenceToggle(pref, (int)opt);\n        }\n\n        public SldWorks swApp;\n    }\n}\n')))}d.isMDXComponent=!0},380:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/diff-user-preferences-3b24d5484a0660d4b818e53c6983577d.png"},11583:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/document-properties-d056f2ae240b07a2d670fea7021e1f32.png"},36772:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/user-preferences-excel-2b681c20d16a452cda602ca5d70addd7.png"}}]);