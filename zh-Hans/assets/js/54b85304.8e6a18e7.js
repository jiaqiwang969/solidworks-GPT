"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[54224],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},A="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),A=c(t),f=r,u=A["".concat(l,".").concat(f)]||A[f]||d[f]||o;return t?a.createElement(u,i(i({ref:n},p),{},{components:t})):a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[A]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={caption:"Apply Render Materia;",title:"Generate material variants configuration using SOLIDWORKS API",description:"VBA macro to generate a series of configuration with a custom appearance",image:"configurations.png"},i=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/apply-render-material/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/apply-render-material/index",title:"Generate material variants configuration using SOLIDWORKS API",description:"VBA macro to generate a series of configuration with a custom appearance",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/apply-render-material/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/apply-render-material",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/apply-render-material/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/apply-render-material/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/apply-render-material/index.md",tags:[],version:"current",frontMatter:{caption:"Apply Render Materia;",title:"Generate material variants configuration using SOLIDWORKS API",description:"VBA macro to generate a series of configuration with a custom appearance",image:"configurations.png"},sidebar:"tutorialSidebar",previous:{title:"Configuring document appearance using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/"},next:{title:"Macro to apply random colors to components in SOLIDWORKS assembly",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/color-assembly/"}},l={},c=[{value:"Configuration",id:"configuration",level:2}],p={toc:c},A="wrapper";function d(e){let{components:n,...o}=e;return(0,r.kt)(A,(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generated configurations",src:t(15549).Z,width:"280",height:"211"})),(0,r.kt)("p",null,"This VBA macro generates a series of configurations corresponding to the material variant of the model."),(0,r.kt)("p",null,"Macro will assign the name of the configuration based on the file name and specified suffix."),(0,r.kt)("p",null,"Macro will create a configuration specific property which is based on the file specific property and the name of the color. "),(0,r.kt)("p",null,"Macro will not generate new display states and assumes that the ",(0,r.kt)("em",{parentName:"p"},"Link display states to configuration colors")," option is selected so display state is attached to the configuration."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Link display states to configuration colors",src:t(31337).Z,width:"284",height:"314"})),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Specify the name of the property to create"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const PRP_NAME As String = "Description"\n')),(0,r.kt)("p",null,"Configure the input parameters for the configuration by modifying the ",(0,r.kt)("strong",{parentName:"p"},"CONFIGS_DATA")," array"),(0,r.kt)("p",null,"Set the size of the array to be equal to number of total instances - 1, e.g. 4 for 5 instances or 0 for 1 instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim CONFIGS_DATA(0) As ConfigData\n\nCONFIGS_DATA(0).colorName = "MyColor"\nCONFIGS_DATA(0).ConfigNameSuffix = "-9"\nCONFIGS_DATA(0).MaterialFilePath = "D:\\my-color.p2m"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"colorName - name of the color to be written as the suffix to the custom property"),(0,r.kt)("li",{parentName:"ul"},"ConfigNameSuffix - suffix name of the configuration, can be empty (in this case the configuration will be named after the file)"),(0,r.kt)("li",{parentName:"ul"},"MaterialFilePath - full path to the ",(0,r.kt)("em",{parentName:"li"},".p2m")," file to apply as appearance. If empty current appearance is preserved")),(0,r.kt)("p",null,"Macro will create new configuration for all instances starting from second. First instance will be skipped and active configuration will be used for the process (e.g. renamed and painted)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Type ConfigData\n    MaterialFilePath As String\n    ConfigNameSuffix As String\n    colorName As String\nEnd Type\n\nConst PRP_NAME As String = "Description"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n    \n    Dim CONFIGS_DATA(4) As ConfigData\n\n    CONFIGS_DATA(0).colorName = "Unpainted"\n    CONFIGS_DATA(0).ConfigNameSuffix = "-9"\n    CONFIGS_DATA(0).MaterialFilePath = ""\n\n    CONFIGS_DATA(1).colorName = "RED"\n    CONFIGS_DATA(1).ConfigNameSuffix = ""\n    CONFIGS_DATA(1).MaterialFilePath = "C:\\Program Files\\SOLIDWORKS Corp\\SOLIDWORKS\\data\\graphics\\Materials\\red.p2m"\n\n    CONFIGS_DATA(2).colorName = "GREEN"\n    CONFIGS_DATA(2).ConfigNameSuffix = "-1"\n    CONFIGS_DATA(2).MaterialFilePath = "C:\\Program Files\\SOLIDWORKS Corp\\SOLIDWORKS\\data\\graphics\\Materials\\green.p2m"\n\n    CONFIGS_DATA(3).colorName = "BLUE"\n    CONFIGS_DATA(3).ConfigNameSuffix = "-2"\n    CONFIGS_DATA(3).MaterialFilePath = "C:\\Program Files\\SOLIDWORKS Corp\\SOLIDWORKS\\data\\graphics\\Materials\\blue.p2m"\n\n    CONFIGS_DATA(4).colorName = "YELLOW"\n    CONFIGS_DATA(4).ConfigNameSuffix = "-3"\n    CONFIGS_DATA(4).MaterialFilePath = "C:\\Program Files\\SOLIDWORKS Corp\\SOLIDWORKS\\data\\graphics\\Materials\\yellow.p2m"\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(CONFIGS_DATA)\n        \n        Dim confName As String\n        \n        confName = GetFileNameWithoutExtension(swModel.GetPathName())\n        \n        If CONFIGS_DATA(i).ConfigNameSuffix <> "" Then\n            confName = confName & CONFIGS_DATA(i).ConfigNameSuffix\n        End If\n        \n        If i <> 0 Then\n            swModel.AddConfiguration3 confName, "", "", 0\n        End If\n        \n        swModel.ConfigurationManager.ActiveConfiguration.Name = confName\n        \n        If CONFIGS_DATA(i).MaterialFilePath <> "" Then\n            AddRenderMaterial swModel, CONFIGS_DATA(i).MaterialFilePath\n        End If\n        \n        AddConfigProperty swModel, CONFIGS_DATA(i).colorName\n        \n    Next\n\nEnd Sub\n\nSub AddRenderMaterial(model As SldWorks.ModelDoc2, path As String)\n    \n    Dim swRenderMaterial As SldWorks.RenderMaterial\n    Set swRenderMaterial = model.Extension.CreateRenderMaterial(path)\n    \n    If False <> swRenderMaterial.AddEntity(model) Then\n        If False = model.Extension.AddDisplayStateSpecificRenderMaterial(swRenderMaterial, swDisplayStateOpts_e.swThisDisplayState, Empty, -1, -1) Then\n            Err.Raise vbError, "", "Failed to apply render material to display state"\n        End If\n    Else\n        Err.Raise vbError, "", "Failed to add model as entity to render material"\n    End If\n   \nEnd Sub\n\nSub AddConfigProperty(model As SldWorks.ModelDoc2, colorName As String)\n    \n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    \n    Set swCustPrpMgr = model.Extension.CustomPropertyManager("")\n    \n    Dim prpVal As String\n    \n    swCustPrpMgr.Get4 PRP_NAME, False, "", prpVal\n    \n    Set swCustPrpMgr = model.ConfigurationManager.ActiveConfiguration.CustomPropertyManager\n    \n    swCustPrpMgr.Add3 PRP_NAME, swCustomInfoType_e.swCustomInfoText, prpVal & " - " & colorName, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue\n\nEnd Sub\n\nFunction GetFileNameWithoutExtension(filePath As String) As String\n    GetFileNameWithoutExtension = Mid(filePath, InStrRev(filePath, "\\") + 1, InStrRev(filePath, ".") - InStrRev(filePath, "\\") - 1)\nEnd Function\n')))}d.isMDXComponent=!0},15549:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"},31337:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/link-display-states-configuration-e11845be853f1656c3985fb0edb7e8a4.png"}}]);