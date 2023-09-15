"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[32759],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),l=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(u.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(t),p=r,m=d["".concat(u,".").concat(p)]||d[p]||f[p]||s;return t?o.createElement(m,a(a({ref:n},c),{},{components:t})):o.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},80903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const s={title:"SOLIDWORKS\u5b8f\u4ee5\u5728\u65b0\u914d\u7f6e\u4e2d\u521b\u5efa\u548c\u6291\u5236\u7279\u5f81",caption:"\u6291\u5236\u65b0\u914d\u7f6e\u4e2d\u7684\u7279\u5f81"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/create-feature-configurations/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/create-feature-configurations/index",title:"SOLIDWORKS\u5b8f\u4ee5\u5728\u65b0\u914d\u7f6e\u4e2d\u521b\u5efa\u548c\u6291\u5236\u7279\u5f81",description:"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u4e3a\u5728\u7279\u5f81\u6811\u4e2d\u9009\u62e9\u7684\u6240\u6709\u7279\u5f81\u521b\u5efa\u65b0\u914d\u7f6e\uff0c\u5e76\u9010\u4e2a\u5728\u76f8\u5e94\u7684\u914d\u7f6e\u4e2d\u6291\u5236\u5b83\u4eec\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/create-feature-configurations/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/create-feature-configurations",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/create-feature-configurations/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/create-feature-configurations/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/create-feature-configurations/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS\u5b8f\u4ee5\u5728\u65b0\u914d\u7f6e\u4e2d\u521b\u5efa\u548c\u6291\u5236\u7279\u5f81",caption:"\u6291\u5236\u65b0\u914d\u7f6e\u4e2d\u7684\u7279\u5f81"},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS API to create surface loft feature via contours",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/contrours-surface-loft/"},next:{title:"Create loft feature through selected sketches or curves feature using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/create-loft/"}},u={},l=[{value:"labels: \u7279\u5f81, \u914d\u7f6e, \u6291\u5236",id:"labels-\u7279\u5f81-\u914d\u7f6e-\u6291\u5236",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:2},{value:"\u94a3\u91d1\u5f2f\u66f2",id:"\u94a3\u91d1\u5f2f\u66f2",level:3}],c={toc:l},d="wrapper";function f(e){let{components:n,...s}=e;return(0,r.kt)(d,(0,o.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u4e3a\u5728\u7279\u5f81\u6811\u4e2d\u9009\u62e9\u7684\u6240\u6709\u7279\u5f81\u521b\u5efa\u65b0\u914d\u7f6e\uff0c\u5e76\u9010\u4e2a\u5728\u76f8\u5e94\u7684\u914d\u7f6e\u4e2d\u6291\u5236\u5b83\u4eec\u3002\nimage: sheet-metal-bends-selection.png"),(0,r.kt)("h2",{id:"labels-\u7279\u5f81-\u914d\u7f6e-\u6291\u5236"},"labels: ","[\u7279\u5f81, \u914d\u7f6e, \u6291\u5236]"),(0,r.kt)("p",null,"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u4e3a\u5728\u7279\u5f81\u6811\u4e2d\u9009\u62e9\u7684\u6240\u6709\u7279\u5f81\u521b\u5efa\u65b0\u914d\u7f6e\uff0c\u5e76\u9010\u4e2a\u5728\u76f8\u5e94\u7684\u914d\u7f6e\u4e2d\u6291\u5236\u5b83\u4eec\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u5728\u914d\u7f6e\u4e2d\u8868\u793a\u6a21\u578b\u7684\u67d0\u4e9b\u5386\u53f2\u6570\u636e\uff0c\u8be5\u5b8f\u53ef\u80fd\u975e\u5e38\u6709\u7528\u3002"),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4f5c\u4e3a\u6d3b\u52a8\u914d\u7f6e\u7684\u6d3e\u751f\u914d\u7f6e\u521b\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u914d\u7f6e\u4ee5\u7279\u5f81\u540d\u79f0\u547d\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u7279\u5f81\u6309\u7167\u9009\u62e9\u7684\u987a\u5e8f\u8fdb\u884c\u5904\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u76f8\u5e94\u7684\u914d\u7f6e\u4e2d\uff0c\u6bcf\u4e2a\u7279\u5f81\u53ca\u5176\u4e4b\u524d\u7684\u6240\u6709\u7279\u5f81\u90fd\u5c06\u88ab\u6291\u5236")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,r.kt)("h3",{id:"\u94a3\u91d1\u5f2f\u66f2"},"\u94a3\u91d1\u5f2f\u66f2"),(0,r.kt)("p",null,"\u8be5\u5b8f\u53ef\u7528\u4e8e\u8868\u793a\u94a3\u91d1\u5f2f\u66f2\u7684\u6b65\u9aa4\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6bcf\u4e2a\u914d\u7f6e\u5c06\u8868\u793a\u5f2f\u66f2\u6b65\u9aa4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u94a3\u91d1\u96f6\u4ef6\u8bbe\u7f6e\u4e3a\u5c55\u5f00\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"\u6309\u7167 ",(0,r.kt)("em",{parentName:"li"},"Flat-Pattern")," \u7279\u5f81\u4e0b\u7684\u987a\u5e8f\u9009\u62e9\u5c55\u5e73\u5f2f\u66f2")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u94a3\u91d1\u5c55\u5e73\u5f2f\u66f2",src:t(36099).Z,width:"599",height:"322"}),"{ width=350 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5b8f")),(0,r.kt)("p",null,"\u7ed3\u679c\u5c06\u521b\u5efa\u6bcf\u4e2a\u5f2f\u66f2\u7684\u5b50\u914d\u7f6e\uff0c\u8868\u793a\u5f2f\u66f2\u6b65\u9aa4\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u914d\u7f6e\u4e2d\u7684\u94a3\u91d1\u5f2f\u66f2\u6b65\u9aa4",src:t(81745).Z,width:"600",height:"298"})),(0,r.kt)("p",null,"\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/motion-study/animate-configurations/"},"SOLIDWORKS API\u52a8\u753b\u914d\u7f6e"),"\u7684\u793a\u4f8b\u5b8f\uff0c\u4ee5\u4f7f\u7528SOLIDWORKS API\u5bf9\u914d\u7f6e\u8fdb\u884c\u52a8\u753b\u5904\u7406\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim vFeats As Variant\n        vFeats = GetSelectedFeatures(swModel)\n        \n        Dim swActiveConf As SldWorks.Configuration\n        Set swActiveConf = swModel.ConfigurationManager.ActiveConfiguration\n        \n        Dim i As Integer\n        \n        Dim swFeatsList() As SldWorks.Feature\n        \n        For i = 0 To UBound(vFeats)\n            \n            ReDim Preserve swFeatsList(i)\n            \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = vFeats(i)\n            \n            Set swFeatsList(i) = swFeat\n            \n            If False = SuppressFeaturesInNewConfiguration(swModel, swFeatsList, swFeat.Name, swActiveConf.Name) Then\n                MsgBox "Failed to set the feature state for " & swFeat.Name\n                End\n            End If\n            \n        Next\n        \n        swModel.ShowConfiguration2 swActiveConf.Name\n\n    Else\n        MsgBox "Please open document"\n    End If\n    \nEnd Sub\n\nFunction GetSelectedFeatures(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim swFeatures() As SldWorks.Feature\n    \n    Dim isArrInit As Boolean\n    isArrInit = False\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Dim i As Integer\n    Set swSelMgr = model.SelectionManager\n            \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n            \n        On Error Resume Next\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swSelMgr.GetSelectedObject6(i, -1)\n            \n        If Not swFeat Is Nothing Then\n            If isArrInit Then\n                ReDim Preserve swFeatures(UBound(swFeatures) + 1)\n            Else\n                ReDim swFeatures(0)\n                isArrInit = True\n            End If\n            Set swFeatures(UBound(swFeatures)) = swFeat\n        End If\n        \n    Next\n    \n    GetSelectedFeatures = swFeatures\n    \nEnd Function\n\nFunction SuppressFeaturesInNewConfiguration(model As SldWorks.ModelDoc2, feats As Variant, confName As String, parentConfName As String) As Boolean\n    \n    Dim swFeatConf As SldWorks.Configuration\n    Set swFeatConf = model.ConfigurationManager.AddConfiguration(confName, "", "", swConfigurationOptions2_e.swConfigOption_LinkToParent + swConfigurationOptions2_e.swConfigOption_DontActivate + swConfigurationOptions2_e.swConfigOption_InheritProperties, parentConfName, "")\n    \n    If Not swFeatConf Is Nothing Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(feats)\n            \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = feats(i)\n            \n            Dim confNames(0) As String\n            confNames(0) = swFeatConf.Name\n            \n            If False = swFeat.SetSuppression2(swFeatureSuppressionAction_e.swSuppressFeature, swInConfigurationOpts_e.swSpecifyConfiguration, confNames) Then\n                SuppressFeaturesInNewConfiguration = False\n                Exit Function\n            End If\n        Next\n        SuppressFeaturesInNewConfiguration = True\n    Else\n        SuppressFeaturesInNewConfiguration = False\n        Exit Function\n    End If\n    \nEnd Function\n')))}f.isMDXComponent=!0},81745:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/sheet-metal-bending-412b4851760a344975b6201165a0edee.gif"},36099:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/sheet-metal-bends-selection-e9a5b1e4b9a9c25bf0f675363b73a62b.png"}}]);