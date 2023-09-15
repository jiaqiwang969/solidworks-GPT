"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[33826],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>F});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,F=u["".concat(l,".").concat(p)]||u[p]||f[p]||s;return t?o.createElement(F,a(a({ref:n},c),{},{components:t})):o.createElement(F,a({ref:n},c))}));function F(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var d=2;d<s;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},20785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(87462),r=(t(67294),t(3905));const s={caption:"Split Folders To Configurations",title:"Split feature folders of the SOLIDWORKS file to individual configurations"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/split-folders-confgurations/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/split-folders-confgurations/index",title:"Split feature folders of the SOLIDWORKS file to individual configurations",description:"VBA macro creates individual configurations for each feature folder in the active SOLIDWORKS part or assembly",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/split-folders-confgurations/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/split-folders-confgurations",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/split-folders-confgurations/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/split-folders-confgurations/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/split-folders-confgurations/index.md",tags:[],version:"current",frontMatter:{caption:"Split Folders To Configurations",title:"Split feature folders of the SOLIDWORKS file to individual configurations"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u62c6\u5206\u9762\u7684SOLIDWORKS\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/split-body-by-faces/"},next:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/split-to-configurations/"}},l={},d=[{value:"VBA macro creates individual configurations for each feature folder in the active SOLIDWORKS part or assembly",id:"vba-macro-creates-individual-configurations-for-each-feature-folder-in-the-active-solidworks-part-or-assembly",level:2}],c={toc:d},u="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vba-macro-creates-individual-configurations-for-each-feature-folder-in-the-active-solidworks-part-or-assembly"},"VBA macro creates individual configurations for each feature folder in the active SOLIDWORKS part or assembly"),(0,r.kt)("p",null,"This VBA macro creates configuration for each top-level feature folder in the active SOLIDWORKS part or assembly."),(0,r.kt)("p",null,"If no objects selected in the model then all folder features will be processed, otherwise only selected feature folders will be processed."),(0,r.kt)("p",null,"Created configuration will be named after the feature folder."),(0,r.kt)("p",null,"It is possible to specify if derived or top level configurations should be created for each feature folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const CREATE_DERIVED_CONFS As Boolean = True 'True to create derived configuration, False to create top level configuration\n")),(0,r.kt)("p",null,"All other folders will be suppressed for each configuration. Features outside of the folders will not be suppressed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const CREATE_DERIVED_CONFS As Boolean = True\n\nConst FOLDER_END_TAG As String = "___EndTag___"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim vFeatFolders As Variant\n        Dim vAllFeatFolders As Variant\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swModel.SelectionManager\n        \n        vAllFeatFolders = GetAllFeatureFolders(swModel)\n        \n        If swSelMgr.GetSelectedObjectCount2(-1) = 0 Then\n            vFeatFolders = vAllFeatFolders\n        Else\n            vFeatFolders = GetSelectedFeatureFolders(swModel)\n        End If\n        \n        If Not IsEmpty(vFeatFolders) Then\n            \n            Dim activeConfName As String\n            activeConfName = swModel.ConfigurationManager.ActiveConfiguration.Name\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vFeatFolders)\n                Dim swFeatFolder As SldWorks.Feature\n                Set swFeatFolder = vFeatFolders(i)\n                CreateConfigurationForFolder swModel, swFeatFolder, vAllFeatFolders, IIf(CREATE_DERIVED_CONFS, activeConfName, "")\n            Next\n            \n        End If\n                \n    Else\n        Err.Raise vbError, "", "No active document"\n    End If\n    \nEnd Sub\n\nFunction GetAllFeatureFolders(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim swFeatFolders() As SldWorks.Feature\n    \n    Dim swFeat As SldWorks.Feature\n    Set swFeat = model.FirstFeature\n    \n    While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2() = "FtrFolder" And InStr(LCase(swFeat.Name), LCase(FOLDER_END_TAG)) = 0 Then\n\n            If (Not swFeatFolders) = -1 Then\n                ReDim swFeatFolders(0)\n            Else\n                ReDim Preserve swFeatFolders(UBound(swFeatFolders) + 1)\n            End If\n            \n            Set swFeatFolders(UBound(swFeatFolders)) = swFeat\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \n    \n    If (Not swFeatFolders) = -1 Then\n        GetAllFeatureFolders = Empty\n    Else\n        GetAllFeatureFolders = swFeatFolders\n    End If\n        \nEnd Function\n\nFunction GetSelectedFeatureFolders(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n\n    Dim swFeatFolders() As SldWorks.Feature\n    \n    Dim i As Integer\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelFTRFOLDER Then\n        \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = swSelMgr.GetSelectedObject6(i, -1)\n            \n            If (Not swFeatFolders) = -1 Then\n                ReDim swFeatFolders(0)\n            Else\n                ReDim Preserve swFeatFolders(UBound(swFeatFolders) + 1)\n            End If\n            \n            Set swFeatFolders(UBound(swFeatFolders)) = swFeat\n        End If\n    \n    Next\n        \n    If (Not swFeatFolders) = -1 Then\n        GetSelectedFeatureFolders = Empty\n    Else\n        GetSelectedFeatureFolders = swFeatFolders\n    End If\n    \nEnd Function\n\nSub CreateConfigurationForFolder(model As SldWorks.ModelDoc2, folderFeat As SldWorks.Feature, allFeatFolders As Variant, parentConfName As String)\n    \n    Dim swFolderConf As SldWorks.Configuration\n    Set swFolderConf = model.ConfigurationManager.AddConfiguration2(folderFeat.Name, "", "", swConfigurationOptions2_e.swConfigOption_DontActivate Or swConfigurationOptions2_e.swConfigOption_SuppressByDefault, parentConfName, "", False)\n    \n    If swFolderConf Is Nothing Then\n        Err.Raise vbError, "", "Failed to create configuration for " & folderFeat.Name\n    End If\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(allFeatFolders)\n        \n        Dim swOtherFeatFolder As SldWorks.Feature\n        Set swOtherFeatFolder = allFeatFolders(i)\n        \n        If swApp.IsSame(folderFeat, swOtherFeatFolder) <> swObjectEquality.swObjectSame Then\n        \n            Dim targetConf(0) As String\n            targetConf(0) = swFolderConf.Name\n            \n            If False = swOtherFeatFolder.SetSuppression2(swFeatureSuppressionAction_e.swSuppressFeature, swInConfigurationOpts_e.swSpecifyConfiguration, targetConf) Then\n                Err.Raise vbError, "", "Failed to configure the suppression of the folder feature for " & swOtherFeatFolder.Name & " in " & swFolderConf.Name\n            End If\n            \n        End If\n        \n    Next\n    \nEnd Sub\n')))}f.isMDXComponent=!0}}]);