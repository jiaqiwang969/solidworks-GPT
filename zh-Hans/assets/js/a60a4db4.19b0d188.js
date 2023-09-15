"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[89460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={layout:"sw-tool",title:"\u5c06\u6240\u6709SOLIDWORKS\u6587\u6863\u7ea7\u9009\u9879\u5bfc\u51fa\u5230Excel",caption:"\u5bfc\u51fa\u6240\u6709\u6587\u6863\u9009\u9879\u5230Excel"},s=void 0,a={unversionedId:"codestack/solidworks-api/options/document/extract-all-options/index",id:"codestack/solidworks-api/options/document/extract-all-options/index",title:"\u5c06\u6240\u6709SOLIDWORKS\u6587\u6863\u7ea7\u9009\u9879\u5bfc\u51fa\u5230Excel",description:"\u4f7f\u7528SOLIDWORKS API\u548c\u53cd\u5c04\uff0c\u5b8f\u5141\u8bb8\u5c06\u6240\u6709\u6587\u6863\u5c5e\u6027\u5bfc\u51fa\u4e3aExcel\u683c\u5f0f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/options/document/extract-all-options/index.md",sourceDirName:"codestack/solidworks-api/options/document/extract-all-options",slug:"/codestack/solidworks-api/options/document/extract-all-options/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/options/document/extract-all-options/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/options/document/extract-all-options/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u5c06\u6240\u6709SOLIDWORKS\u6587\u6863\u7ea7\u9009\u9879\u5bfc\u51fa\u5230Excel",caption:"\u5bfc\u51fa\u6240\u6709\u6587\u6863\u9009\u9879\u5230Excel"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u8be6\u7ec6\u6a21\u5f0f\u4fdd\u5b58SOLIDWORKS\u7ed8\u56fe",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/options/document/detailing-mode-save-model-data/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u6d3b\u52a8\u6587\u6863\u7684\u7528\u6237\u9996\u9009\u9879\u4e2d\u8bbe\u7f6eShadedImageQualityCoarse",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/options/document/image-quality-coarse/"}},l={},p=[{value:"group: \u9009\u9879",id:"group-\u9009\u9879",level:2},{value:"C# VSTA\u5b8f",id:"c-vsta\u5b8f",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u548c\u53cd\u5c04\uff0c\u5b8f\u5141\u8bb8\u5c06\u6240\u6709\u6587\u6863\u5c5e\u6027\u5bfc\u51fa\u4e3aExcel\u683c\u5f0f\nimage: document-properties.png\nlabels: ","[\u5bfc\u51fa, Excel, CSV, \u9009\u9879]"),(0,o.kt)("h2",{id:"group-\u9009\u9879"},"group: \u9009\u9879"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u6587\u6863\u5c5e\u6027\u5bf9\u8bdd\u6846",src:n(5964).Z,width:"1180",height:"816"}),"{ width=350 }"),(0,o.kt)("p",null,"\u6b64\u5b8f\u5c06\u5bfc\u51fa\u6240\u6709\u6587\u6863\u5c5e\u6027\uff08\u4f4d\u4e8e\u201c\u5de5\u5177\u201d->\u201c\u9009\u9879\u201d->\u201c\u6587\u6863\u201d\u83dc\u5355\u4e0b\uff09"),(0,o.kt)("p",null,"\u5b8f\u5229\u7528",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/csharp/programming-guide/concepts/reflection"},"\u53cd\u5c04"),"\u52a8\u6001\u8bfb\u53d6\u6240\u6709\u53ef\u7528\u7684\u7528\u6237\u9996\u9009\u9879\u679a\u4e3e\uff0c\u5e76\u8c03\u7528\u76f8\u5e94\u7684SOLIDWORKS API\u63d0\u53d6\u6bcf\u4e2a\u5c5e\u6027\u503c\u3002"),(0,o.kt)("p",null,"\u5b8f\u5c06\u5c5e\u6027\u8f93\u51fa\u5230CSV\u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u5728Excel\u4e2d\u6253\u5f00\u3002\u5305\u62ec\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9996\u9009\u9879\u7ec4 - \u6570\u5b57\u3001\u5207\u6362\u6216\u6587\u672c"),(0,o.kt)("li",{parentName:"ul"},"\u9996\u9009\u9879\u7684ID - \u6b63\u5728\u5bfc\u51fa\u7684\u786e\u5207\u9009\u9879"),(0,o.kt)("li",{parentName:"ul"},"\u9996\u9009\u9879\u9009\u9879 - \u5173\u4e8e\u9996\u9009\u9879\u7684\u9644\u52a0\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ul"},"\u503c - \u9996\u9009\u9879\u7684\u5f53\u524d\u503c")),(0,o.kt)("p",null,"\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapiprogguide/overview/system_options_and_document_properties.htm"},"System Options and Document Properties"),"\u6587\u7ae0\uff0c\u4e86\u89e3\u5339\u914d\u7279\u5b9a\u9996\u9009\u9879ID\u548c\u503c\u7684\u9009\u9879\u5217\u8868\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5728Excel\u4e2d\u6253\u5f00\u7684\u63d0\u53d6\u7684\u7528\u6237\u9996\u9009\u9879",src:n(91198).Z,width:"937",height:"369"}),"{ width=350 }"),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u6bd4\u8f83\u4e0d\u540c\u6587\u4ef6\u4e4b\u95f4\u7684\u9996\u9009\u9879\uff0c\u6b64\u5b8f\u53ef\u80fd\u5f88\u6709\u7528\u3002\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u5dee\u5f02\u5de5\u5177\u7b80\u5316\u6bd4\u8f83\u5e76\u8bc6\u522b\u5dee\u5f02\uff0c\u4f8b\u5982",(0,o.kt)("a",{parentName:"p",href:"https://winmerge.org/"},"WinMerge")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u4e24\u4e2a\u6a21\u578b\u7684\u7528\u6237\u9996\u9009\u9879\u4e4b\u95f4\u7684\u5dee\u5f02",src:n(64567).Z,width:"1527",height:"342"}),"{ width=550 }"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u5b8f\u5f00\u5934\u7684",(0,o.kt)("em",{parentName:"p"},"OUT_FILE_PATH"),"\u5e38\u91cf\u6765\u81ea\u5b9a\u4e49\u6587\u4ef6\u8f93\u51fa\u4f4d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'const string OUT_FILE_PATH = @""; //\u8f93\u51fa\u6587\u4ef6\u5c06\u5728\u4e0eSOLIDWORKS\u6a21\u578b\u76f8\u540c\u7684\u4f4d\u7f6e\u521b\u5efa\uff0c\u5e76\u547d\u540d\u4e3a<\u6a21\u578b\u540d\u79f0>_prefs.csv\nconst string OUT_FILE_PATH = @"Options.csv"; //\u8f93\u51fa\u6587\u4ef6\u5c06\u5728\u4e0eSOLIDWORKS\u6a21\u578b\u76f8\u540c\u7684\u4f4d\u7f6e\u521b\u5efa\uff0c\u5e76\u547d\u540d\u4e3aOptions.csv\nconst string OUT_FILE_PATH = @"D:\\Output\\prefs.csv"; //\u6587\u4ef6\u5c06\u8f93\u51fa\u5230D:\\Output\\prefs.csv\n')),(0,o.kt)("p",null,"\u6709\u5173\u521b\u5efa\u548c\u6dfb\u52a0\u4ee3\u7801\u5230VSTA\u5b8f\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/create-vsta/"},"\u521b\u5efa\u548c\u8fd0\u884cVSTA\u5b8f"),"\u3002"),(0,o.kt)("h2",{id:"c-vsta\u5b8f"},"C# VSTA\u5b8f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System.Runtime.InteropServices;\nusing System;\nusing System.Collections.Generic;\nusing System.IO;\n\nnamespace ExtractAlLDocProperties.csproj\n{\n    public partial class SolidWorksMacro\n    {\n        const string OUT_FILE_PATH = @"";\n\n        public delegate object PreferenceHandlerDelegate(IModelDocExtension ext, int pref, swUserPreferenceOption_e opt, out string type);\n\n        public void Main()\n        {\n            try\n            {\n                IModelDoc2 model = swApp.IActiveDoc2;\n\n                if (model != null)\n                {\n                    IModelDocExtension modelExt = model.Extension;\n\n                    Dictionary<Type, PreferenceHandlerDelegate> handlers = InitHandlers();\n\n                    string outFilePath = OUT_FILE_PATH;\n\n                    if (string.IsNullOrEmpty(outFilePath))\n                    {\n                        outFilePath = Path.GetFileNameWithoutExtension(model.GetTitle()) + "_prefs.csv";\n                    }\n\n                    if (!Path.IsPathRooted(outFilePath))\n                    {\n                        string curModelPath = model.GetPathName();\n\n                        if (string.IsNullOrEmpty(curModelPath))\n                        {\n                            throw new NullReferenceException("\u5f53\u524d\u6a21\u578b\u672a\u4fdd\u5b58\u3002\u8bf7\u4fdd\u5b58\u6a21\u578b\u6216\u6307\u5b9a\u8f93\u51fa\u6587\u4ef6\u7684\u5b8c\u6574\u8def\u5f84");\n                        }\n\n                        outFilePath = Path.Combine(Path.GetDirectoryName(curModelPath), outFilePath);\n                    }\n\n                    ExtractUserPreferences(modelExt, outFilePath, handlers);\n                }\n                else\n                {\n                    throw new NullReferenceException("\u8bf7\u6253\u5f00\u6a21\u578b");\n                }\n            }\n            catch (Exception ex)\n            {\n                swApp.SendMsgToUser2(ex.Message, (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);\n            }\n        }\n\n        private void ExtractUserPreferences(IModelDocExtension modelExt, string outFilePath, Dictionary<Type, PreferenceHandlerDelegate> handlers)\n        {\n            using (StreamWriter fileWriter = new StreamWriter(outFilePath))\n            {\n                fileWriter.WriteLine("Type,Preference,Options,Value");\n\n                foreach (KeyValuePair<Type, PreferenceHandlerDelegate> prefData in handlers)\n                {\n                    foreach (Enum pref in Enum.GetValues(prefData.Key))\n                    {\n                        if (pref.ToString().StartsWith("swDetailing"))\n                        {\n                            foreach (swUserPreferenceOption_e opt in Enum.GetValues(typeof(swUserPreferenceOption_e)))\n                            {\n                                OutputValue(fileWriter, prefData.Value, modelExt, pref, opt);\n                            }\n                        }\n                        else\n                        {\n                            OutputValue(fileWriter, prefData.Value, modelExt, pref, swUserPreferenceOption_e.swDetailingNoOptionSpecified);\n                        }\n                    }\n                }\n            }\n        }\n\n        private Dictionary<Type, PreferenceHandlerDelegate> InitHandlers()\n        {\n            Dictionary<Type, PreferenceHandlerDelegate> preferences\n                = new Dictionary<Type, PreferenceHandlerDelegate>();\n\n            preferences.Add(typeof(swUserPreferenceDoubleValue_e),\n                GetDoublePreferenceValue);\n\n            preferences.Add(typeof(swUserPreferenceIntegerValue_e),\n                GetIntegerPreferenceValue);\n\n            preferences.Add(typeof(swUserPreferenceStringValue_e),\n                GetStringPreferenceValue);\n\n            preferences.Add(typeof(swUserPreferenceToggle_e),\n                GetTogglePreferenceValue);\n            return preferences;\n        }\n\n        private void OutputValue(System.IO.StreamWriter fileWriter, PreferenceHandlerDelegate handler, \n            IModelDocExtension ext, Enum pref, swUserPreferenceOption_e opt) \n        {\n            int prefVal = Convert.ToInt32(pref);\n\n            string type;\n            object value = handler.Invoke(ext, prefVal, opt, out type);\n\n            string line = string.Format("{0},{1},{2},\\"{3}\\"", type, pref, opt, value);\n\n            fileWriter.WriteLine(line);\n        }\n\n        private object GetDoublePreferenceValue(IModelDocExtension ext, int pref, swUserPreferenceOption_e opt, out string type) \n        {\n            type = "Double";\n            return ext.GetUserPreferenceDouble(pref, (int)opt);\n        }\n\n        private object GetIntegerPreferenceValue(IModelDocExtension ext, int pref, swUserPreferenceOption_e opt, out string type)\n        {\n            type = "Integer";\n            return ext.GetUserPreferenceInteger(pref, (int)opt);\n        }\n\n        private object GetStringPreferenceValue(IModelDocExtension ext, int pref, swUserPreferenceOption_e opt, out string type)\n        {\n            type = "String";\n            return ext.GetUserPreferenceString(pref, (int)opt);\n        }\n\n        private object GetTogglePreferenceValue(IModelDocExtension ext, int pref, swUserPreferenceOption_e opt, out string type)\n        {\n            type = "Toggle";\n            return ext.GetUserPreferenceToggle(pref, (int)opt);\n        }\n\n        public SldWorks swApp;\n    }\n}\n')))}d.isMDXComponent=!0},64567:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/diff-user-preferences-3b24d5484a0660d4b818e53c6983577d.png"},5964:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/document-properties-d056f2ae240b07a2d670fea7021e1f32.png"},91198:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/user-preferences-excel-2b681c20d16a452cda602ca5d70addd7.png"}}]);