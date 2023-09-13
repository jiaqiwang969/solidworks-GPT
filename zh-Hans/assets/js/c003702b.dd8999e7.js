"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[26555],{3905:(e,t,o)=>{o.d(t,{Zo:()=>A,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=r.createContext({}),s=function(e){var t=r.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},A=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,A=i(e,["components","mdxType","originalType","parentName"]),c=s(o),d=n,f=c["".concat(m,".").concat(d)]||c[d]||l[d]||a;return o?r.createElement(f,p(p({ref:t},A),{},{components:o})):r.createElement(f,p({ref:t},A))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,p=new Array(a);p[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[c]="string"==typeof e?e:n,p[1]=i;for(var s=2;s<a;s++)p[s]=o[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},37770:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={title:"Export assembly or part to IFC 2x3 or 4 using SOLIDWORKS API",caption:"Export To IFC (2x3 and 4)",description:"Example in VBA to export active part or assembly document to IFC format (2x3 or 4) using SOLIDWORKS API",image:"save-as-dialog-ifc.png",labels:["ifc","ifc2x3","ifc4","export"]},p=void 0,i={unversionedId:"codestack/solidworks-api/import-export/export-ifc/index",id:"codestack/solidworks-api/import-export/export-ifc/index",title:"Export assembly or part to IFC 2x3 or 4 using SOLIDWORKS API",description:"Example in VBA to export active part or assembly document to IFC format (2x3 or 4) using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/import-export/export-ifc/index.md",sourceDirName:"codestack/solidworks-api/import-export/export-ifc",slug:"/codestack/solidworks-api/import-export/export-ifc/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/export-ifc/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/import-export/export-ifc/index.md",tags:[],version:"current",frontMatter:{title:"Export assembly or part to IFC 2x3 or 4 using SOLIDWORKS API",caption:"Export To IFC (2x3 and 4)",description:"Example in VBA to export active part or assembly document to IFC format (2x3 or 4) using SOLIDWORKS API",image:"save-as-dialog-ifc.png",labels:["ifc","ifc2x3","ifc4","export"]},sidebar:"tutorialSidebar",previous:{title:"Macro to export selected bodies to foreign format",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/export-bodies/"},next:{title:"Macro to export SOLIDWORKS file to multiple formats",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/import-export/export-multi-formats/"}},m={},s=[],A={toc:s},c="wrapper";function l(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This example demonstrates how to export active assembly or part document into IFC format using SOLIDWORKS API."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Save As Dialog with 2 ifc format options",src:o(35117).Z,width:"963",height:"757"}),"{ width=450 }"),(0,n.kt)("p",null,"Currently SOLIDWORKS supports 2 schemas for IFC format"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IFC 2x3"),(0,n.kt)("li",{parentName:"ul"},"IFC 4")),(0,n.kt)("p",null,"The schema can be validated in the output IFC file when opened in text editor."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IFC schema",src:o(54499).Z,width:"442",height:"238"}),"{ width=450 }"),(0,n.kt)("p",null,"This VBA macro demonstrates how to export file to both IFC schemas. Change the value of the ",(0,n.kt)("em",{parentName:"p"},"IfcFormat_e")," enumeration to change the format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"ExportIfc swModel, OUT_FILE_PATH, IfcFormat_e.Ifc4 'Export to IFC 4\nExportIfc swModel, OUT_FILE_PATH, IfcFormat_e.Ifc2x3 'Export to IFC 2x3\n")),(0,n.kt)("p",null,"Change the value of ",(0,n.kt)("em",{parentName:"p"},"OUT_FILE_PATH")," constant to specify the output file location"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Const OUT_FILE_PATH As String = "C:\\Output\\Building.ifc"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Enum IfcFormat_e\n    Ifc2x3 = 23\n    Ifc4 = 4\nEnd Enum\n\nConst OUT_FILE_PATH As String = "C:\\Engine.ifc"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        ExportIfc swModel, OUT_FILE_PATH, IfcFormat_e.Ifc4\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nSub ExportIfc(model As SldWorks.ModelDoc2, path As String, format As IfcFormat_e)\n    \n    Dim curIfcFormat As Integer\n    curIfcFormat = swApp.GetUserPreferenceIntegerValue(swUserPreferenceIntegerValue_e.swSaveIFCFormat)\n\n    swApp.SetUserPreferenceIntegerValue swUserPreferenceIntegerValue_e.swSaveIFCFormat, format\n    \n    Dim errors As Long\n    Dim warnings As Long\n    \n    If False = model.Extension.SaveAs(path, swSaveAsVersion_e.swSaveAsCurrentVersion, swSaveAsOptions_e.swSaveAsOptions_Silent, Nothing, errors, warnings) Then\n        Err.Raise vbError, "", "Failed to export file. Error code: " & errors\n    End If\n    \n    swApp.SetUserPreferenceIntegerValue swUserPreferenceIntegerValue_e.swSaveIFCFormat, curIfcFormat\n        \nEnd Sub\n')))}l.isMDXComponent=!0},54499:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,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"},35117:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/save-as-dialog-ifc-65b4d3d47ff93f16de9e65335039f6de.png"}}]);