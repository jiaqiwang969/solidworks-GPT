"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[20511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=s.createContext({}),c=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return s.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?s.createElement(g,i(i({ref:t},l),{},{components:n})):s.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}f.displayName="MDXCreateElement"},21517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(87462),r=(n(67294),n(3905));const o={title:"SOLIDWORKS macro to create and suppress features in new configurations",caption:"Suppress Features In New Configurations",description:"Macro create new configurations for all features  selected in the feature tree and suppresses them one by one in the respective configuration using SOLIDWORKS API",image:"sheet-metal-bends-selection.png",labels:["feature","configuration","suppress"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-feature-configurations/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-feature-configurations/index",title:"SOLIDWORKS macro to create and suppress features in new configurations",description:"Macro create new configurations for all features  selected in the feature tree and suppresses them one by one in the respective configuration using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-feature-configurations/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-feature-configurations",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-feature-configurations/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-feature-configurations/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-feature-configurations/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS macro to create and suppress features in new configurations",caption:"Suppress Features In New Configurations",description:"Macro create new configurations for all features  selected in the feature tree and suppresses them one by one in the respective configuration using SOLIDWORKS API",image:"sheet-metal-bends-selection.png",labels:["feature","configuration","suppress"]},sidebar:"tutorialSidebar",previous:{title:"Create extruded slot temp body using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-extruded-slot/"},next:{title:"Create invisible attribute using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-invisible/"}},u={},c=[{value:"Notes",id:"notes",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Sheet Metal Bending",id:"sheet-metal-bending",level:3}],l={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,s.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This macro create new configurations for all features selected in the feature tree and suppresses them one by one in the respective configuration using SOLIDWORKS API."),(0,r.kt)("p",null,"This macro can be useful if it is needed to represents some historical data of the model in the configurations."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configurations created as derived configurations of the active configuration"),(0,r.kt)("li",{parentName:"ul"},"Each configuration named after the feature name"),(0,r.kt)("li",{parentName:"ul"},"Features are processed in the order they have been selected"),(0,r.kt)("li",{parentName:"ul"},"Each feature and all previous features will be suppressed in the respective configuration")),(0,r.kt)("h2",{id:"use-cases"},"Use cases"),(0,r.kt)("h3",{id:"sheet-metal-bending"},"Sheet Metal Bending"),(0,r.kt)("p",null,"This macro can be used to represent the steps of bending of the sheet metal. In this case each configuration will represent the bending step."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set the sheet metal part to the flattened state"),(0,r.kt)("li",{parentName:"ul"},"Select flatten bends in the order under the ",(0,r.kt)("em",{parentName:"li"},"Flat-Pattern")," feature")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sheet metal flatten bends",src:n(54753).Z,width:"599",height:"322"}),"{ width=350 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the macro")),(0,r.kt)("p",null,"As the result sub configurations for each bend are created representing the bending step:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sheet metal bending steps in the configurations",src:n(80397).Z,width:"600",height:"298"})),(0,r.kt)("p",null,"Refer the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/motion-study/animate-configurations/"},"Animate Configurations")," for example macro to animate the configurations using SOLIDWORKS API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim vFeats As Variant\n        vFeats = GetSelectedFeatures(swModel)\n        \n        Dim swActiveConf As SldWorks.Configuration\n        Set swActiveConf = swModel.ConfigurationManager.ActiveConfiguration\n        \n        Dim i As Integer\n        \n        Dim swFeatsList() As SldWorks.Feature\n        \n        For i = 0 To UBound(vFeats)\n            \n            ReDim Preserve swFeatsList(i)\n            \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = vFeats(i)\n            \n            Set swFeatsList(i) = swFeat\n            \n            If False = SuppressFeaturesInNewConfiguration(swModel, swFeatsList, swFeat.Name, swActiveConf.Name) Then\n                MsgBox "Failed to set the feature state for " & swFeat.Name\n                End\n            End If\n            \n        Next\n        \n        swModel.ShowConfiguration2 swActiveConf.Name\n\n    Else\n        MsgBox "Please open document"\n    End If\n    \nEnd Sub\n\nFunction GetSelectedFeatures(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim swFeatures() As SldWorks.Feature\n    \n    Dim isArrInit As Boolean\n    isArrInit = False\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Dim i As Integer\n    Set swSelMgr = model.SelectionManager\n            \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n            \n        On Error Resume Next\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swSelMgr.GetSelectedObject6(i, -1)\n            \n        If Not swFeat Is Nothing Then\n            If isArrInit Then\n                ReDim Preserve swFeatures(UBound(swFeatures) + 1)\n            Else\n                ReDim swFeatures(0)\n                isArrInit = True\n            End If\n            Set swFeatures(UBound(swFeatures)) = swFeat\n        End If\n        \n    Next\n    \n    GetSelectedFeatures = swFeatures\n    \nEnd Function\n\nFunction SuppressFeaturesInNewConfiguration(model As SldWorks.ModelDoc2, feats As Variant, confName As String, parentConfName As String) As Boolean\n    \n    Dim swFeatConf As SldWorks.Configuration\n    Set swFeatConf = model.ConfigurationManager.AddConfiguration(confName, "", "", swConfigurationOptions2_e.swConfigOption_LinkToParent + swConfigurationOptions2_e.swConfigOption_DontActivate + swConfigurationOptions2_e.swConfigOption_InheritProperties, parentConfName, "")\n    \n    If Not swFeatConf Is Nothing Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(feats)\n            \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = feats(i)\n            \n            Dim confNames(0) As String\n            confNames(0) = swFeatConf.Name\n            \n            If False = swFeat.SetSuppression2(swFeatureSuppressionAction_e.swSuppressFeature, swInConfigurationOpts_e.swSpecifyConfiguration, confNames) Then\n                SuppressFeaturesInNewConfiguration = False\n                Exit Function\n            End If\n        Next\n        SuppressFeaturesInNewConfiguration = True\n    Else\n        SuppressFeaturesInNewConfiguration = False\n        Exit Function\n    End If\n    \nEnd Function\n')))}p.isMDXComponent=!0},80397:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/sheet-metal-bending-412b4851760a344975b6201165a0edee.gif"},54753:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/sheet-metal-bends-selection-e9a5b1e4b9a9c25bf0f675363b73a62b.png"}}]);