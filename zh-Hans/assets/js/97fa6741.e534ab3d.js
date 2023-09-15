"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[25901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u4f7f\u7528SOLIDWORKS API\u8fdb\u884c\u7b80\u5316\u96f6\u4ef6\uff08\u8f6c\u6362\u4e3a\u7b80\u5316\u5b9e\u4f53\uff09",caption:"\u7b80\u5316\u96f6\u4ef6"},s=void 0,i={unversionedId:"codestack/solidworks-api/document/features-manager/defeature-part/index",id:"codestack/solidworks-api/document/features-manager/defeature-part/index",title:"\u4f7f\u7528SOLIDWORKS API\u8fdb\u884c\u7b80\u5316\u96f6\u4ef6\uff08\u8f6c\u6362\u4e3a\u7b80\u5316\u5b9e\u4f53\uff09",description:"\u4f7f\u7528SOLIDWORKS API\u5c06\u96f6\u4ef6\u4e2d\u7684\u6240\u6709\u7279\u5f81\u8f6c\u6362\u4e3a\u7b80\u5316\u5b9e\u4f53\uff08\u7b80\u5316\u96f6\u4ef6\uff09\u548c\u66f2\u9762\u7684\u5b8f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/features-manager/defeature-part/index.md",sourceDirName:"codestack/solidworks-api/document/features-manager/defeature-part",slug:"/codestack/solidworks-api/document/features-manager/defeature-part/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/defeature-part/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/features-manager/defeature-part/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u8fdb\u884c\u7b80\u5316\u96f6\u4ef6\uff08\u8f6c\u6362\u4e3a\u7b80\u5316\u5b9e\u4f53\uff09",caption:"\u7b80\u5316\u96f6\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u901a\u8fc7SOLIDWORKS API\u521b\u5efaLoft\u7279\u5f81",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/create-loft/"},next:{title:"\u5220\u9664SOLIDWORKS\u6587\u4ef6\u4e2d\u7684\u6240\u6709\u7a7a\u7279\u5f81\u6587\u4ef6\u5939\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/delete-empty-folders/"}},l={},d=[{value:"labels: \u7b80\u5316, Parasolid",id:"labels-\u7b80\u5316-parasolid",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u5c06\u96f6\u4ef6\u4e2d\u7684\u6240\u6709\u7279\u5f81\u8f6c\u6362\u4e3a\u7b80\u5316\u5b9e\u4f53\uff08\u7b80\u5316\u96f6\u4ef6\uff09\u548c\u66f2\u9762\u7684\u5b8f\nimage: part-feature-tree-defeatured.png"),(0,o.kt)("h2",{id:"labels-\u7b80\u5316-parasolid"},"labels: ","[\u7b80\u5316, Parasolid]"),(0,o.kt)("p",null,"\u6b64\u5b8f\u6a21\u62df\u4e86",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/solidworks/sldworks/c_defeature_for_parts.htm"},"\u96f6\u4ef6\u7b80\u5316"),"\u7684\u529f\u80fd\uff0c\u4f46\u4e0d\u76f4\u63a5\u4f7f\u7528\u5b83\u3002"),(0,o.kt)("p",null,"\u5b8f\u4f1a\u590d\u5236\u6240\u6709\u53ef\u89c1\u7684\u5b9e\u4f53\u548c\u66f2\u9762\uff0c\u5220\u9664\u6240\u6709\u7528\u6237\u7279\u5f81\uff0c\u5e76\u4f7f\u7528SOLIDWORKS API\u5bfc\u5165\u590d\u5236\u7684\u5b9e\u4f53\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4e4b\u524d\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5177\u6709\u7279\u5f81\u6811\u7684\u96f6\u4ef6",src:n(58682).Z,width:"821",height:"608"}),"{ width=350 }"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4e4b\u540e\uff1a"),"\n",(0,o.kt)("img",{alt:"\u5177\u6709\u7b80\u5316\u6811\u7684\u96f6\u4ef6",src:n(66404).Z,width:"810",height:"561"}),"{ width=350 }"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    If Not swPart Is Nothing Then\n        \n        Dim vBodies As Variant\n        vBodies = GetBodyCopies(swPart)\n        \n        DeleteAllUserFeatures swPart\n        \n        CreateFeaturesForBodies swPart, vBodies\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u96f6\u4ef6\u6587\u6863"\n    End If\n    \nEnd Sub\n\nFunction GetBodyCopies(part As SldWorks.PartDoc) As Variant\n    \n    Dim vBodies As Variant\n        \n    vBodies = part.GetBodies2(swBodyType_e.swAllBodies, True)\n    Dim i As Integer\n    \n    For i = 0 To UBound(vBodies)\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = vBodies(i)\n        Set swBody = swBody.Copy()\n        Set vBodies(i) = swBody\n        \n    Next\n    \n    GetBodyCopies = vBodies\n    \nEnd Function\n\nSub CreateFeaturesForBodies(part As SldWorks.PartDoc, vBodies As Variant)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vBodies)\n        Dim swBody As SldWorks.Body2\n        Set swBody = vBodies(i)\n        part.CreateFeatureFromBody3 swBody, False, swCreateFeatureBodyOpts_e.swCreateFeatureBodySimplify\n    Next\n    \nEnd Sub\n\nSub DeleteAllUserFeatures(model As SldWorks.ModelDoc2)\n    \n    SelectAllTopLevelUserFeatures model\n            \n    model.Extension.DeleteSelection2 swDeleteSelectionOptions_e.swDelete_Children + swDeleteSelectionOptions_e.swDelete_Absorbed\n            \nEnd Sub\n\nSub SelectAllTopLevelUserFeatures(model As SldWorks.ModelDoc2)\n    \n    model.ClearSelection2 True\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = model.FirstFeature\n    \n    Dim selectFeat As Boolean\n    selectFeat = False\n    \n    While Not swFeat Is Nothing\n        \n        If selectFeat Then\n            swFeat.Select2 True, -1\n        Else\n            If swFeat.GetTypeName2() = "OriginProfileFeature" Then\n                selectFeat = True\n            End If\n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \nEnd Sub\n')))}u.isMDXComponent=!0},66404:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/part-feature-tree-defeatured-115dd74747ade0b48293fdd93867f3cc.png"},58682:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/part-feature-tree-b1db2d05aa6e7652600e4d2cce888a13.png"}}]);