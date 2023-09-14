"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[6553],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46987:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Defeature Part (convert to dumb solid) using SOLIDWORKS API",caption:"Defeature Part",description:"Macro to convert all features in part to dumb solids (defeature part) and surfaces using SOLIDWORKS API",image:"part-feature-tree-defeatured.png",labels:["defeature","parasolid"]},s=void 0,i={unversionedId:"codestack-clone/solidworks-api/document/features-manager/defeature-part/index",id:"codestack-clone/solidworks-api/document/features-manager/defeature-part/index",title:"Defeature Part (convert to dumb solid) using SOLIDWORKS API",description:"Macro to convert all features in part to dumb solids (defeature part) and surfaces using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/document/features-manager/defeature-part/index.md",sourceDirName:"codestack-clone/solidworks-api/document/features-manager/defeature-part",slug:"/codestack-clone/solidworks-api/document/features-manager/defeature-part/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/features-manager/defeature-part/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/features-manager/defeature-part/index.md",tags:[],version:"current",frontMatter:{title:"Defeature Part (convert to dumb solid) using SOLIDWORKS API",caption:"Defeature Part",description:"Macro to convert all features in part to dumb solids (defeature part) and surfaces using SOLIDWORKS API",image:"part-feature-tree-defeatured.png",labels:["defeature","parasolid"]},sidebar:"tutorialSidebar",previous:{title:"Create loft feature through selected sketches or curves feature using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/features-manager/create-loft/"},next:{title:"Macro to delete all empty feature folders in SOLIDWORKS files",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/features-manager/delete-empty-folders/"}},d={},l=[],c={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This macro emulates the functionality of ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/solidworks/sldworks/c_defeature_for_parts.htm"},"Defeature for Part")," but not using it directly."),(0,o.kt)("p",null,"Macro copies all visible solid and surface bodies, deletes all user features and imports the copied bodies using SOLIDWORKS API."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Part with feature tree",src:r(55100).Z,width:"821",height:"608"}),"{ width=350 }"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"After:"),"\n",(0,o.kt)("img",{alt:"Part with defeatured tree",src:r(22330).Z,width:"810",height:"561"}),"{ width=350 }"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    If Not swPart Is Nothing Then\n        \n        Dim vBodies As Variant\n        vBodies = GetBodyCopies(swPart)\n        \n        DeleteAllUserFeatures swPart\n        \n        CreateFeaturesForBodies swPart, vBodies\n        \n    Else\n        MsgBox "Please open part document"\n    End If\n    \nEnd Sub\n\nFunction GetBodyCopies(part As SldWorks.PartDoc) As Variant\n    \n    Dim vBodies As Variant\n        \n    vBodies = part.GetBodies2(swBodyType_e.swAllBodies, True)\n    Dim i As Integer\n    \n    For i = 0 To UBound(vBodies)\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = vBodies(i)\n        Set swBody = swBody.Copy()\n        Set vBodies(i) = swBody\n        \n    Next\n    \n    GetBodyCopies = vBodies\n    \nEnd Function\n\nSub CreateFeaturesForBodies(part As SldWorks.PartDoc, vBodies As Variant)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vBodies)\n        Dim swBody As SldWorks.Body2\n        Set swBody = vBodies(i)\n        part.CreateFeatureFromBody3 swBody, False, swCreateFeatureBodyOpts_e.swCreateFeatureBodySimplify\n    Next\n    \nEnd Sub\n\nSub DeleteAllUserFeatures(model As SldWorks.ModelDoc2)\n    \n    SelectAllTopLevelUserFeatures model\n            \n    model.Extension.DeleteSelection2 swDeleteSelectionOptions_e.swDelete_Children + swDeleteSelectionOptions_e.swDelete_Absorbed\n            \nEnd Sub\n\nSub SelectAllTopLevelUserFeatures(model As SldWorks.ModelDoc2)\n    \n    model.ClearSelection2 True\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = model.FirstFeature\n    \n    Dim selectFeat As Boolean\n    selectFeat = False\n    \n    While Not swFeat Is Nothing\n        \n        If selectFeat Then\n            swFeat.Select2 True, -1\n        Else\n            If swFeat.GetTypeName2() = "OriginProfileFeature" Then\n                selectFeat = True\n            End If\n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \nEnd Sub\n')))}p.isMDXComponent=!0},22330:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/part-feature-tree-defeatured-115dd74747ade0b48293fdd93867f3cc.png"},55100:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/part-feature-tree-b1db2d05aa6e7652600e4d2cce888a13.png"}}]);