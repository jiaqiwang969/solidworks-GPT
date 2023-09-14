"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[26674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,m=d["".concat(u,".").concat(p)]||d[p]||f[p]||s;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:o,r[1]=a;for(var l=2;l<s;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const s={layout:"sw-tool",caption:"Split To Configurations",title:"Macro to split SOLIDWORKS cut-list bodies into individual configurations",description:"VBA macro which creates individual configurations for all cut-list bodies (or unique bodies) in the active SOLIDWORKS part document for the drawing generation purpose",image:"cut-list-to-configuration.svg",group:"Cut-List"},r=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/split-to-configurations/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/split-to-configurations/index",title:"Macro to split SOLIDWORKS cut-list bodies into individual configurations",description:"VBA macro which creates individual configurations for all cut-list bodies (or unique bodies) in the active SOLIDWORKS part document for the drawing generation purpose",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/split-to-configurations/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/split-to-configurations",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/split-to-configurations/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/split-to-configurations/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/split-to-configurations/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",caption:"Split To Configurations",title:"Macro to split SOLIDWORKS cut-list bodies into individual configurations",description:"VBA macro which creates individual configurations for all cut-list bodies (or unique bodies) in the active SOLIDWORKS part document for the drawing generation purpose",image:"cut-list-to-configuration.svg",group:"Cut-List"},sidebar:"tutorialSidebar",previous:{title:"Rename cut list features based on custom properties using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/rename-cut-list-items/"},next:{title:"Configuring document appearance using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/appearance/"}},u={},l=[{value:"Configuration",id:"configuration",level:2}],c={toc:l},d="wrapper";function f(e){let{components:t,...s}=e;return(0,o.kt)(d,(0,i.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cut-lists to configuration mapping",src:n(96167).Z,width:"962",height:"306"})),(0,o.kt)("p",null,"This VBA macro creates individual configuration for all cut-list bodies of the active part document."),(0,o.kt)("p",null,"This macro can be useful when preparing drawings for multi-body cut-list parts where drawing is required for each unique body."),(0,o.kt)("p",null,"Macro will create as many configurations as cut-lists feature in the document and will add the corresponding ",(0,o.kt)("strong",{parentName:"p"},"Delete Body")," feature and setup the suppression of this feature so each configuration will only display the body of the single cut-list."),(0,o.kt)("p",null,"Macro will name the configuration after the cut-list name."),(0,o.kt)("p",null,"Macro will display the progress bar in the SOLIDWORKS icon:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Progress of the operation",src:n(38322).Z,width:"117",height:"105"})),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"KEEP_ALL_CUT_LIST_BODIES")," constant allows to control should the macro isolate all cut-list bodies or only keep a single unique body."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Const KEEP_ALL_CUT_LIST_BODIES As Boolean = True 'keep all cut-list bodies\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("strong",{parentName:"p"},"KEEP_ALL_CUT_LIST_BODIES")," is set to ",(0,o.kt)("strong",{parentName:"p"},"False")," only first body of each cut-list will be kept. This simplifies the drawing creation process as it is only required to select the corresponding referenced configuration to display body on drawing. However this will result in incorrect quantity of the cut-list item if BOM table is inserted (will always be equal to 1)."),(0,o.kt)("p",null,"If ",(0,o.kt)("strong",{parentName:"p"},"KEEP_ALL_CUT_LIST_BODIES")," is set to ",(0,o.kt)("strong",{parentName:"p"},"True")," all bodies of each cut-list will be kept. in this case user is additionally required to select the single body to keep in the drawing via ",(0,o.kt)("strong",{parentName:"p"},"Select Body")," button in the drawing view. However in this case Bill Of Materials table will display the correct quantity."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select bodies feature in the drawing view",src:n(44824).Z,width:"314",height:"712"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const KEEP_ALL_CUT_LIST_BODIES As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Dim swProgressBar As SldWorks.UserProgressBar\n\ntry_:\n    \n    On Error GoTo catch_\n    \n    Set swApp = Application.SldWorks\n    \n    swApp.GetUserProgressBar swProgressBar\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetType() = swDocumentTypes_e.swDocPART Then\n            \n            Dim vCutLists As Variant\n            vCutLists = GetCutLists(swModel)\n            \n            swProgressBar.Start 0, UBound(vCutLists), "Creating configurations for cut-lists"\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vCutLists)\n                \n                Dim swCutList As SldWorks.Feature\n                Set swCutList = vCutLists(i)\n                \n                Dim swCutListFolder As SldWorks.BodyFolder\n                Set swCutListFolder = swCutList.GetSpecificFeature2\n                \n                Dim vCutListBodies As Variant\n                vCutListBodies = swCutListFolder.GetBodies()\n                \n                If Not IsEmpty(vCutListBodies) Then\n                \n                    Dim vBodies As Variant\n                    \n                    If KEEP_ALL_CUT_LIST_BODIES Then\n                        vBodies = vCutListBodies\n                    Else\n                        Dim swBody(0) As SldWorks.Body2\n                        Set swBody(0) = vCutListBodies(0)\n                        vBodies = swBody\n                    End If\n                    \n                    Debug.Print "Creating configuration for " & swCutList.Name\n                    \n                    CreateConfigurationForBodies swModel, vBodies, swCutList.Name\n                \n                Else\n                    Debug.Print swCutList.Name & " has no bodies"\n                End If\n                \n                swProgressBar.UpdateProgress i + 1\n                \n            Next\n            \n        Else\n            Err.Raise vbError, "", "Only part document is supported"\n        End If\n    Else\n        Err.Raise vbError, "", "Open part document"\n    End If\n    \n    GoTo finally_\n    \ncatch_:\n    MsgBox Err.Description, vbCritical\nfinally_:\n\n    If Not swProgressBar Is Nothing Then\n        swProgressBar.End\n    End If\n    \nEnd Sub\n\nSub CreateConfigurationForBodies(model As SldWorks.ModelDoc2, vBodies As Variant, confName As String)\n\n    If IsEmpty(vBodies) Then\n        Err.Raise vbError, "", "Bodies are nost specified"\n    End If\n    \n    Dim activeConfName As String\n    activeConfName = model.ConfigurationManager.ActiveConfiguration.Name\n\n    Dim swBodyConf As SldWorks.Configuration\n    Set swBodyConf = model.ConfigurationManager.AddConfiguration2(confName, "", "", swConfigurationOptions2_e.swConfigOption_DontActivate Or swConfigurationOptions2_e.swConfigOption_SuppressByDefault, activeConfName, "", False)\n    \n    If swBodyConf Is Nothing Then\n        Err.Raise vbError, "", "Failed to create configuration for " & confName\n    End If\n    \n    If model.Extension.MultiSelect2(vBodies, False, Nothing) = UBound(vBodies) + 1 Then\n        \n        Dim swBodyDeleteFeat As SldWorks.Feature\n        Set swBodyDeleteFeat = model.FeatureManager.InsertDeleteBody2(True)\n        \n        If Not swBodyDeleteFeat Is Nothing Then\n            \n            swBodyDeleteFeat.Name = confName + "_Isolated"\n            \n            If False = swBodyDeleteFeat.SetSuppression2(swFeatureSuppressionAction_e.swSuppressFeature, swInConfigurationOpts_e.swThisConfiguration, Empty) Then\n                Err.Raise vbError, "", "Failed suppress delete body feature for " & confName\n            End If\n            \n            Dim targetConf(0) As String\n            targetConf(0) = swBodyConf.Name\n            \n            If False = swBodyDeleteFeat.SetSuppression2(swFeatureSuppressionAction_e.swUnSuppressFeature, swInConfigurationOpts_e.swSpecifyConfiguration, targetConf) Then\n                Err.Raise vbError, "", "Failed to configure the suppression of the delete body feature for " & confName\n            End If\n        Else\n            Err.Raise vbError, "", "Failed to create Delete Body feature for " & confName\n        End If\n        \n    Else\n        Err.Raise vbError, "", "Failed to select bodies " & confName\n    End If\n\nEnd Sub\n\nFunction GetCutLists(model As SldWorks.ModelDoc2) As Variant\n\n    Dim swFeat As SldWorks.Feature\n    \n    Dim swCutLists() As SldWorks.Feature\n    \n    Set swFeat = model.FirstFeature\n    \n    While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 <> "HistoryFolder" Then\n        \n            ProcessFeature swFeat, swCutLists\n            \n            TraverseSubFeatures swFeat, swCutLists\n        \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \n    GetCutLists = swCutLists\n    \nEnd Function\n\nSub TraverseSubFeatures(parentFeat As SldWorks.Feature, cutLists() As SldWorks.Feature)\n    \n    Dim swChildFeat As SldWorks.Feature\n    Set swChildFeat = parentFeat.GetFirstSubFeature\n    \n    While Not swChildFeat Is Nothing\n        ProcessFeature swChildFeat, cutLists\n        Set swChildFeat = swChildFeat.GetNextSubFeature()\n    Wend\n    \nEnd Sub\n\nSub ProcessFeature(feat As SldWorks.Feature, cutLists() As SldWorks.Feature)\n    \n    If feat.GetTypeName2() = "SolidBodyFolder" Then\n        Dim swBodyFolder As SldWorks.BodyFolder\n        Set swBodyFolder = feat.GetSpecificFeature2\n        swBodyFolder.UpdateCutList\n    ElseIf feat.GetTypeName2() = "CutListFolder" Then\n        \n        If Not Contains(cutLists, feat) Then\n            If (Not cutLists) = -1 Then\n                ReDim cutLists(0)\n            Else\n                ReDim Preserve cutLists(UBound(cutLists) + 1)\n            End If\n            \n            Set cutLists(UBound(cutLists)) = feat\n        End If\n        \n    End If\n    \nEnd Sub\n\nFunction Contains(arr As Variant, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(arr)\n        If arr(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}f.isMDXComponent=!0},96167:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cut-lists-configurations-9dfd62f7c8cdedac753ef47cc4935cda.png"},38322:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},44824:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/view-select-bodies-4dfb1a1e499d4753eeeb256bb76d6135.png"}}]);