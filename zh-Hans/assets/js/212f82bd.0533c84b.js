"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[88852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>w});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=i(n),f=o,w=u["".concat(l,".").concat(f)]||u[f]||b[f]||a;return n?r.createElement(w,s(s({ref:t},d),{},{components:n})):r.createElement(w,s({ref:t},d))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={layout:"sw-tool",caption:"Delete rolled back features",title:"Macro to delete all features which are in the rolled back state in SOLIDWORKS document",description:"VBA macro finds and deletes all features below the rollback bar",image:"rollback-feature.svg",group:"Model"},s=void 0,c={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/delete-rolledback-features/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/delete-rolledback-features/index",title:"Macro to delete all features which are in the rolled back state in SOLIDWORKS document",description:"VBA macro finds and deletes all features below the rollback bar",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/delete-rolledback-features/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/delete-rolledback-features",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/delete-rolledback-features/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/delete-rolledback-features/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/delete-rolledback-features/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",caption:"Delete rolled back features",title:"Macro to delete all features which are in the rolled back state in SOLIDWORKS document",description:"VBA macro finds and deletes all features below the rollback bar",image:"rollback-feature.svg",group:"Model"},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS Macro to delete feature folder with all children features",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/delete-feature-folder-all-children/"},next:{title:"Find features in the tree by type and/or name pattern using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/find-features/"}},l={},i=[],d={toc:i},u="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Features rolled back in the feature manager tree",src:n(74183).Z,width:"244",height:"256"})),(0,o.kt)("p",null,"This VBA macro deletes all features which are below the rollback bar."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\ntry_:\n    \n    On Error GoTo catch_\n    \n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim vRolledBackFeats As Variant\n    \n    vRolledBackFeats = GetRolledBackFeatures(swModel)\n    \n    If False = swModel.FeatureManager.EditRollback(swMoveRollbackBarTo_e.swMoveRollbackBarToEnd, "") Then\n        Err.Raise vbError, "", "Failed to roll forward"\n    End If\n    \n    If swModel.Extension.MultiSelect2(vRolledBackFeats, False, Nothing) <> UBound(vRolledBackFeats) + 1 Then\n        Err.Raise vbError, "", "Failed to select features"\n    End If\n    \n    If False = swModel.Extension.DeleteSelection2(swDeleteSelectionOptions_e.swDelete_Absorbed) Then\n        Err.Raise vbError, "", "Failed to delete features"\n    End If\n    \n    GoTo finally_\n    \ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n        \nEnd Sub\n\nFunction GetRolledBackFeatures(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim isInit As Boolean\n    Dim swFeats() As SldWorks.Feature\n        \n    Dim swFeat As SldWorks.Feature\n    Set swFeat = model.FirstFeature\n    \n    While Not swFeat Is Nothing\n        \n        If False <> swFeat.IsRolledBack() Then\n            \n            If Not isInit Then\n                isInit = True\n                ReDim swFeats(0)\n            Else\n                ReDim Preserve swFeats(UBound(swFeats) + 1)\n            End If\n            \n            Set swFeats(UBound(swFeats)) = swFeat\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n    Wend\n        \n    If isInit Then\n        GetRolledBackFeatures = swFeats\n        \n    Else\n        GetRolledBackFeatures = Empty\n    End If\n    \nEnd Function\n')))}b.isMDXComponent=!0},74183:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);