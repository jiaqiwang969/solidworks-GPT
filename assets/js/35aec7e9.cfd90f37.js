"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>w});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),p=n,w=d["".concat(c,".").concat(p)]||d[p]||f[p]||s;return r?o.createElement(w,a(a({ref:t},u),{},{components:r})):o.createElement(w,a({ref:t},u))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},30345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const s={caption:"Create Loft Feature",title:"Create loft feature through selected sketches or curves feature using SOLIDWORKS API",description:"VBA macro to create solid loft feature from selected sketch or curve features using SOLIDWORKS API",image:"loft-feature-through-curves.png"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/create-loft/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/create-loft/index",title:"Create loft feature through selected sketches or curves feature using SOLIDWORKS API",description:"VBA macro to create solid loft feature from selected sketch or curve features using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/create-loft/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/create-loft",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/create-loft/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/create-loft/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/create-loft/index.md",tags:[],version:"current",frontMatter:{caption:"Create Loft Feature",title:"Create loft feature through selected sketches or curves feature using SOLIDWORKS API",description:"VBA macro to create solid loft feature from selected sketch or curve features using SOLIDWORKS API",image:"loft-feature-through-curves.png"},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS macro to create and suppress features in new configurations",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/create-feature-configurations/"},next:{title:"Defeature Part (convert to dumb solid) using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/defeature-part/"}},c={},l=[],u={toc:l},d="wrapper";function f(e){let{components:t,...s}=e;return(0,n.kt)(d,(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Loft feature through curves",src:r(70567).Z,width:"639",height:"367"}),"{ width=400 }"),(0,n.kt)("p",null,"This VBA macro demonstrates how to utilize ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IFeatureManager~InsertProtrusionBlend2.html"},"IFeatureManager::InsertProtrusionBlend2")," API to create loft feature from the selected sketches or curves features selected in the Feature Manager Tree."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Dim swModel As SldWorks.ModelDoc2\n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swApp = Application.SldWorks\n    Set swModel = swApp.ActiveDoc\n\n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swFeats() As SldWorks.Feature\n    ReDim swFeats(swSelMgr.GetSelectedObjectCount2(-1) - 1)\n    \n    Dim i As Integer\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swSelMgr.GetSelectedObject6(i, -1)\n        Set swFeats(i - 1) = swFeat\n    Next\n    \n    Dim swSelData As SldWorks.SelectData\n    Set swSelData = swSelMgr.CreateSelectData\n    \n    swSelData.Mark = 1\n    \n    If swModel.Extension.MultiSelect2(swFeats, False, swSelData) <> UBound(swFeats) + 1 Then\n        Err.Raise vbError, "", "Failed to selected profiles"\n    End If\n        \n    Const CONSTRAINT_DEFAULT As Integer = 6\n    Const THIN_TYPE_ONE_DIR As Integer = 0\n    \n    swModel.FeatureManager.InsertProtrusionBlend2 False, True, False, 1, CONSTRAINT_DEFAULT, CONSTRAINT_DEFAULT, 1, 1, True, True, False, 0, 0, THIN_TYPE_ONE_DIR, True, True, True, swGuideCurveInfluence_e.swGuideCurveInfluenceNextGuide\n\nEnd Sub\n')))}f.isMDXComponent=!0},70567:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/loft-feature-through-curves-04b14704c0a793362839f4ab9ab7505a.png"}}]);