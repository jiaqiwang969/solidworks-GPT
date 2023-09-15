"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[92163],{3905:(n,o,e)=>{e.d(o,{Zo:()=>u,kt:()=>f});var t=e(67294);function r(n,o,e){return o in n?Object.defineProperty(n,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[o]=e,n}function i(n,o){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),e.push.apply(e,t)}return e}function a(n){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?i(Object(e),!0).forEach((function(o){r(n,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))}))}return n}function s(n,o){if(null==n)return{};var e,t,r=function(n,o){if(null==n)return{};var e,t,r={},i=Object.keys(n);for(t=0;t<i.length;t++)e=i[t],o.indexOf(e)>=0||(r[e]=n[e]);return r}(n,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)e=i[t],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var c=t.createContext({}),l=function(n){var o=t.useContext(c),e=o;return n&&(e="function"==typeof n?n(o):a(a({},o),n)),e},u=function(n){var o=l(n.components);return t.createElement(c.Provider,{value:o},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var o=n.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(n,o){var e=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),p=l(e),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return e?t.createElement(f,a(a({ref:o},u),{},{components:e})):t.createElement(f,a({ref:o},u))}));function f(n,o){var e=arguments,r=o&&o.mdxType;if("string"==typeof n||r){var i=e.length,a=new Array(i);a[0]=d;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=n,s[p]="string"==typeof n?n:r,a[1]=s;for(var l=2;l<i;l++)a[l]=e[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,e)}d.displayName="MDXCreateElement"},46802:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=e(87462),r=(e(67294),e(3905));const i={caption:"Set Configuration BOM Options",title:"Macro to change the Bill Of Materials options (Part Number source and children visibility) of SOLIDWORKS configuration",description:"VBA macro which changes the Bill Of Materials part number source (configuration name, document name, parent name) and children display (show, hide, promote) options for all or active configuration in SOLIDWORKS document",image:"configuration-options.png"},a=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/configuration-bom-options/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/configuration-bom-options/index",title:"Macro to change the Bill Of Materials options (Part Number source and children visibility) of SOLIDWORKS configuration",description:"VBA macro which changes the Bill Of Materials part number source (configuration name, document name, parent name) and children display (show, hide, promote) options for all or active configuration in SOLIDWORKS document",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/configuration-bom-options/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/configuration-bom-options",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/configuration-bom-options/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/configuration-bom-options/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/configuration-bom-options/index.md",tags:[],version:"current",frontMatter:{caption:"Set Configuration BOM Options",title:"Macro to change the Bill Of Materials options (Part Number source and children visibility) of SOLIDWORKS configuration",description:"VBA macro which changes the Bill Of Materials part number source (configuration name, document name, parent name) and children display (show, hide, promote) options for all or active configuration in SOLIDWORKS document",image:"configuration-options.png"},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS VBA macro to compose flat BOM table using API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/compose-flat-bom/"},next:{title:"VBA macro to review SOLIDWORKS sheets and configurations",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/configuration-reviewer/"}},c={},l=[],u={toc:l},p="wrapper";function m(n){let{components:o,...i}=n;return(0,r.kt)(p,(0,t.Z)({},u,i,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA macro allows to change the options of the configuration regarding the processing in the Bill Of Materials"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Part Number Source",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Configuration name"),(0,r.kt)("li",{parentName:"ul"},"Document name"),(0,r.kt)("li",{parentName:"ul"},"Parent name"))),(0,r.kt)("li",{parentName:"ul"},"Children Components Display",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Show"),(0,r.kt)("li",{parentName:"ul"},"Hide"),(0,r.kt)("li",{parentName:"ul"},"Promote")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuration options Property Manager Page",src:e(11126).Z,width:"243",height:"731"})),(0,r.kt)("p",null,"Macro can process active configuration only or all configurations"),(0,r.kt)("p",null,"Configure the macro by changing its constants"),(0,r.kt)("p",null,"Specify -1 for ",(0,r.kt)("strong",{parentName:"p"},"PART_NUMBER_SRC")," or ",(0,r.kt)("strong",{parentName:"p"},"CHILD_COMPS_DISP")," options to keep original values or new value to override"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const ALL_CONFIGS As Boolean = True 'True to process all configurations, False to process active configuration only\nConst PART_NUMBER_SRC As Integer = swBOMPartNumberSource_e.swBOMPartNumber_ConfigurationName 'Part number source: -1 to keep as is or swBOMPartNumberSource_e.swBOMPartNumber_ConfigurationName, swBOMPartNumberSource_e.swBOMPartNumber_DocumentName or swBOMPartNumberSource_e.swBOMPartNumber_ParentName\nConst CHILD_COMPS_DISP As Integer = swChildComponentInBOMOption_e.swChildComponent_Promote 'Display of components in BOM: -1 to keep as is or swChildComponentInBOMOption_e.swChildComponent_Show, swChildComponentInBOMOption_e.swChildComponent_Hide or swChildComponentInBOMOption_e.swChildComponent_Promote\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const ALL_CONFIGS As Boolean = True\nConst PART_NUMBER_SRC As Integer = swBOMPartNumberSource_e.swBOMPartNumber_ConfigurationName\nConst CHILD_COMPS_DISP As Integer = swChildComponentInBOMOption_e.swChildComponent_Promote\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If swModel Is Nothing Then\n        Err.Raise vbError, "", "Open document"\n    End If\n    \n    If swModel.GetType() = swDocumentTypes_e.swDocDRAWING Then\n        Err.Raise vbError, "", "Drawings are not supported"\n    End If\n    \n    If ALL_CONFIGS Then\n        \n        Dim vConfNames As Variant\n        \n        vConfNames = swModel.GetConfigurationNames\n        Dim i As Integer\n        \n        For i = 0 To UBound(vConfNames)\n            Dim swConf As SldWorks.Configuration\n            Set swConf = swModel.GetConfigurationByName(CStr(vConfNames(i)))\n            SetConfigurationBomOptions swConf\n        Next\n        \n    Else\n        SetConfigurationBomOptions swModel.ConfigurationManager.ActiveConfiguration\n    End If\n    \nEnd Sub\n\nSub SetConfigurationBomOptions(config As SldWorks.Configuration)\n    \n    If CHILD_COMPS_DISP <> -1 Then\n        config.ChildComponentDisplayInBOM = CHILD_COMPS_DISP\n    End If\n    \n    If PART_NUMBER_SRC <> -1 Then\n        config.BOMPartNoSource = PART_NUMBER_SRC\n    End If\n    \nEnd Sub\n')))}m.isMDXComponent=!0},11126:(n,o,e)=>{e.d(o,{Z:()=>t});const t=e.p+"assets/images/configuration-options-6d51f17b0ae6206be59a0be26cb7ef1f.png"}}]);