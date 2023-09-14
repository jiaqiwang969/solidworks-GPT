"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[89518],{3905:(e,o,n)=>{n.d(o,{Zo:()=>p,kt:()=>u});var r=n(67294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function i(e,o){if(null==e)return{};var n,r,t=function(e,o){if(null==e)return{};var n,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),c=function(e){var o=r.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):s(s({},o),e)),n},p=function(e){var o=c(e.components);return r.createElement(l.Provider,{value:o},e.children)},m="mdxType",A={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=t,u=m["".concat(l,".").concat(d)]||m[d]||A[d]||a;return n?r.createElement(u,s(s({ref:o},p),{},{components:n})):r.createElement(u,s({ref:o},p))}));function u(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i[m]="string"==typeof e?e:t,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62815:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>A,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),t=(n(67294),n(3905));const a={layout:"sw-tool",title:"Macro to remove all colors from SOLIDWORKS document",caption:"Remove All Colors From Part",description:"Macro demonstrates how to remove all colors from the part or assembly documents on all levels (face, feature, body, model) using SOLIDWORKS API",image:"remove-colors.svg",labels:["remove color","appearance","material property"],group:"Part"},s=void 0,i={unversionedId:"codestack-clone/solidworks-api/document/appearance/remove-color/index",id:"codestack-clone/solidworks-api/document/appearance/remove-color/index",title:"Macro to remove all colors from SOLIDWORKS document",description:"Macro demonstrates how to remove all colors from the part or assembly documents on all levels (face, feature, body, model) using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/document/appearance/remove-color/index.md",sourceDirName:"codestack-clone/solidworks-api/document/appearance/remove-color",slug:"/codestack-clone/solidworks-api/document/appearance/remove-color/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/appearance/remove-color/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/appearance/remove-color/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to remove all colors from SOLIDWORKS document",caption:"Remove All Colors From Part",description:"Macro demonstrates how to remove all colors from the part or assembly documents on all levels (face, feature, body, model) using SOLIDWORKS API",image:"remove-colors.svg",labels:["remove color","appearance","material property"],group:"Part"},sidebar:"tutorialSidebar",previous:{title:"Macro to apply random colors to components in SOLIDWORKS assembly",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/appearance/color-assembly/"},next:{title:"Tracking objects by temp and persistent ids in SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/tracking-objects/"}},l={},c=[],p={toc:c},m="wrapper";function A(e){let{components:o,...a}=e;return(0,t.kt)(m,(0,r.Z)({},p,a,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Appearance layers in Part document",src:n(34560).Z,width:"356",height:"176"}),"{ width=250 }"),(0,t.kt)("p",null,"This macro removes all colors from the part document on all levels (face, feature, body, model) using SOLIDWORKS API."),(0,t.kt)("p",null,"Macro can be configured to remove the colors from all configurations or active configuration only. This option can be set by changing the value of the following constant at the beginning of the macro:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},"Const REMOVE_FROM_ALL_CONFIGS As Boolean = True 'True to remove from all configurations, False to remove from active configuration only\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Const REMOVE_FROM_ALL_CONFIGS As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetType() = swDocumentTypes_e.swDocDRAWING Then\n            Err.Raise vbError, "", "Drawings are not supported"\n        End If\n        \n        Dim configOpts As swInConfigurationOpts_e\n        configOpts = GetConfigurationOptions(REMOVE_FROM_ALL_CONFIGS)\n        \n        If swModel.GetType() = swDocumentTypes_e.swDocPART Then\n                    \n            Dim swPart As SldWorks.PartDoc\n            Set swPart = swModel\n                    \n            Dim vBodies As Variant\n            vBodies = swPart.GetBodies2(swBodyType_e.swAllBodies, False)\n            \n            RemoveMaterialPropertiesFromBodies vBodies, True, configOpts\n            RemoveMaterialPropertiesFromFeatures swPart.FeatureManager.GetFeatures(False), configOpts\n        \n        End If\n        \n        swModel.Extension.RemoveMaterialProperty configOpts, Empty\n        \n        swModel.GraphicsRedraw2\n        \n    Else\n        Err.Raise "Please open part or assembly document"\n    End If\n    \nEnd Sub\n\nSub RemoveMaterialPropertiesFromBodies(bodies As Variant, removeFromFaces As Boolean, configOpts As swInConfigurationOpts_e)\n    \n    If Not IsEmpty(bodies) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(bodies)\n            \n            Dim swBody As SldWorks.Body2\n            Set swBody = bodies(i)\n            \n            swBody.RemoveMaterialProperty configOpts, Empty\n                        \n            If removeFromFaces Then\n                Dim vFaces As Variant\n                vFaces = swBody.GetFaces()\n                RemoveMaterialPropertiesFromFaces vFaces, configOpts\n            End If\n            \n        Next\n        \n    End If\n        \nEnd Sub\n\nSub RemoveMaterialPropertiesFromFaces(faces As Variant, configOpts As swInConfigurationOpts_e)\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(faces) Then\n    \n        For i = 0 To UBound(faces)\n            \n            Dim swFace As SldWorks.Face2\n            Set swFace = faces(i)\n            \n            swFace.RemoveMaterialProperty2 configOpts, Empty\n\n        Next\n    \n    End If\n    \nEnd Sub\n\nSub RemoveMaterialPropertiesFromFeatures(features As Variant, configOpts As swInConfigurationOpts_e)\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(features) Then\n    \n        For i = 0 To UBound(features)\n            \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = features(i)\n            \n            Debug.Print swFeat.Name\n            swFeat.RemoveMaterialProperty2 configOpts, Empty\n                \n        Next\n    \n    End If\nEnd Sub\n\nFunction GetConfigurationOptions(allConfigs As Boolean) As swInConfigurationOpts_e\n    \n    If REMOVE_FROM_ALL_CONFIGS Then\n        GetConfigurationOptions = swInConfigurationOpts_e.swAllConfiguration\n    Else\n        GetConfigurationOptions = swInConfigurationOpts_e.swThisConfiguration\n    End If\n    \nEnd Function\n')))}A.isMDXComponent=!0},34560:(e,o,n)=>{n.d(o,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWQAAACwCAMAAAAPHeSfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAADUAAMDoN+7EIw3AGxtbmO1d/f49xcXFxZKbB8fH1+w0nNXG1panfewizKCAAAAOCRduKXK27oAAI6SpoFvO9NxchERrjllgz5lQbqvjEm/SzgAOAotVcEfJChjwSQka9e+SoW817tmMvf2r4TNhQBjsAA3VJBIb7D39ykqKWCIpdwoAGMAOAD9AACcANSLOPCsnIuwi/njXE9whLCMHgA4i16Iwg2hEPK0p+MAAEcxCoq7TTY1rDs8PNscGWSElz560snBt3YhIZSZrmMAAGOw9yD6IBiBgouLix2YZbBjADhppnaoLQAAY8DH4ovU9lf1V8BUWDQ0jvewY16T3vOUiGMAY77Tvpy3xDKnDt61OCorxxtoJqqrqnGMc0BCXrQ0QHOTprgRE/4mJk+avORkSjgAY7GJj8+JYidaeaHuoVta6o84OEpI1A1FYqfF7pmrmUyKqKdPQm6wzV+CXrGxsUN+nK2MN+UODuqHcnW72dDLrFZ4kTL5MlxCEzgAADp0ks7UzfnritvJdpKTkhiNHo7C2SlqiT8+wfbKH0yF2Yt7Uuh3Xt8/HHil5GCmxBpIH0NDQzB+o4tji8vLyzCfM5Db/bS61aOpviNZm54fIqKoonyef87W7vn5yvbkdYtlHtOeMVmXtfXZQrq6usyXIP13d0yDoC55NPbOx4NXh2d8zRfCHzIxn2FhYZGGUSVbtcozM8wWFnyft9MeHHeAhEGHSGmryKifTs8AAGM4Y5aktPQBAbzJ06q1ucXFxV4dHcHuvY1URzs6tyhhgDqKiy52mFFP3QM+XGwuMERCytng3CoqgDIyMpp5eX+Jj3G10pp3G1wSERlWdhOrO714QPoQEN0xDDQ1zfS7t+2ik2j1aP06OmWkaoKCgi9syrDvsL+tYtW7YTGErI05ZP5VVYfyh4ONgziL1MCspXvC4Hh4eExztaOZfFOSsI607K9eFOFPLsiwTSn6KYTL6Am5CV+eu5/U6pqbm1OYHD/3P665xxoaT/fUiwAAAKzrOe4AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAd1klEQVR4Xu2dC3xU9ZXHR0l6SWQXSxXS2srSUqZAxLSIL1Z8lIdTWAUFtqySYtB2Gx/RbEioKJhAMIpiDI2ApkaMI5C1xQJqtDFMqRGpd6cN0lURHCy2aImCGhpTsvnsOed//vc9mfckg/P7ZO79P+69+c/3nnvu/97/Y1xKCI3jtbPUjqUdJ+CvYxZFO8bNUnH93uH3Ok6c6NisHp42bdZ7lCW1f9q0jo6lJ5aKDc0aN673/5aqihGycvhEx9KlQFnExk0T7Hbu7zhxeFbHCYJMOZoAcsXhWSdOLD2xk+KHaakJOJ98oGOFrCg375+1/2YRHDdt2mEK7jzRcVjdGQwyLNXDS5dSxnvTOnhnXScd6Ngh6xoHzuNmtGX1cMf+ncrOaQC5gx2JJgFZUcGboCm/12GHjDqpQMcR8jjw0LP2T9sPkE903HyzgDxtmsX3AmThtpcuRbrvTZvmCBl10nB2KYG07GI6cRJA5lBautKQk6A05CToCwR5S6+qNIl3iZO+SJA9vcnENQ05Wm3htbPSkOOiPoRcUVHBwXgoDdlJgfz8PoJMD2r6wouLhMoAufvu3/72d1dwRCgo5O1Z33jjDxy2yM/iaFAFPAmGrHoCHs+kLZanYUV5X9eaNWuskGup8LWKMvgfP+QkR6nzcorcl9kO7igNcnPrRx9959LnFt76N05ABYHcknPBnFU3LPz+f3LcKD9/1/ZQlBMO2d9ep6pq/qRMjrNUBkyI16yp8II4C+X3wU4+LPzgwYNFkpPcRYUNRzftdrs53qsk5LEz5syZ88yloMcMFuoMuWXsscdvn/Pflz73mI1yHRhBrc/ng4L7/XWc6KzEQ1by232w9k5qFwms99/Hpe4uzKXww62ioqLd72/3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"}}]);