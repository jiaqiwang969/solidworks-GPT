"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[71892],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>w});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,w=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(w,a(a({ref:t},u),{},{components:r})):n.createElement(w,a({ref:t},u))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={title:"\u901a\u8fc7SOLIDWORKS API\u521b\u5efaLoft\u7279\u5f81"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-loft/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-loft/index",title:"\u901a\u8fc7SOLIDWORKS API\u521b\u5efaLoft\u7279\u5f81",description:"\u4f7f\u7528SOLIDWORKS API\u4ece\u9009\u5b9a\u7684\u8349\u56fe\u6216\u66f2\u7ebf\u7279\u5f81\u521b\u5efa\u5b9e\u4f53Loft\u7279\u5f81\u7684VBA\u5b8f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-loft/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-loft",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-loft/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-loft/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-loft/index.md",tags:[],version:"current",frontMatter:{title:"\u901a\u8fc7SOLIDWORKS API\u521b\u5efaLoft\u7279\u5f81"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u4e0d\u53ef\u89c1\u5c5e\u6027",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-invisible/"},next:{title:"Create selectable 3D bounding box sketch using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-selectable-bounding-box/"}},c={},l=[{value:"image: loft-feature-through-curves.png",id:"image-loft-feature-through-curvespng",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...s}=e;return(0,o.kt)(d,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u4ece\u9009\u5b9a\u7684\u8349\u56fe\u6216\u66f2\u7ebf\u7279\u5f81\u521b\u5efa\u5b9e\u4f53Loft\u7279\u5f81\u7684VBA\u5b8f"),(0,o.kt)("h2",{id:"image-loft-feature-through-curvespng"},"image: loft-feature-through-curves.png"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u901a\u8fc7\u66f2\u7ebf\u521b\u5efaLoft\u7279\u5f81",src:r(27965).Z,width:"639",height:"367"}),"{ width=400 }"),(0,o.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u6f14\u793a\u4e86\u5982\u4f55\u5229\u7528",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IFeatureManager~InsertProtrusionBlend2.html"},"IFeatureManager::InsertProtrusionBlend2")," API\u4ece\u5728\u7279\u5f81\u7ba1\u7406\u5668\u4e2d\u9009\u5b9a\u7684\u8349\u56fe\u6216\u66f2\u7ebf\u7279\u5f81\u521b\u5efaLoft\u7279\u5f81\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Dim swModel As SldWorks.ModelDoc2\n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swApp = Application.SldWorks\n    Set swModel = swApp.ActiveDoc\n\n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swFeats() As SldWorks.Feature\n    ReDim swFeats(swSelMgr.GetSelectedObjectCount2(-1) - 1)\n    \n    Dim i As Integer\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swSelMgr.GetSelectedObject6(i, -1)\n        Set swFeats(i - 1) = swFeat\n    Next\n    \n    Dim swSelData As SldWorks.SelectData\n    Set swSelData = swSelMgr.CreateSelectData\n    \n    swSelData.Mark = 1\n    \n    If swModel.Extension.MultiSelect2(swFeats, False, swSelData) <> UBound(swFeats) + 1 Then\n        Err.Raise vbError, "", "Failed to selected profiles"\n    End If\n        \n    Const CONSTRAINT_DEFAULT As Integer = 6\n    Const THIN_TYPE_ONE_DIR As Integer = 0\n    \n    swModel.FeatureManager.InsertProtrusionBlend2 False, True, False, 1, CONSTRAINT_DEFAULT, CONSTRAINT_DEFAULT, 1, 1, True, True, False, 0, 0, THIN_TYPE_ONE_DIR, True, True, True, swGuideCurveInfluence_e.swGuideCurveInfluenceNextGuide\n\nEnd Sub\n')))}p.isMDXComponent=!0},27965:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/loft-feature-through-curves-04b14704c0a793362839f4ab9ab7505a.png"}}]);