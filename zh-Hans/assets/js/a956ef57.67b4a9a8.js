"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[44962],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>w});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),c=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return s.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,w=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?s.createElement(w,o(o({ref:n},d),{},{components:t})):s.createElement(w,o({ref:n},d))}));function w(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6133:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(87462),r=(t(67294),t(3905));const a={title:"\u4f7f\u7528SOLIDWORKS API\u5728\u914d\u4ef6\u4e4b\u95f4\u63d2\u5165\u7ba1\u9053\u7ec4\u4ef6",image:"pipe.svg",labels:["pipe","fitting","assembly","plumbing"]},o=void 0,i={unversionedId:"codestack/solidworks-api/document/assembly/insert-pipe/index",id:"codestack/solidworks-api/document/assembly/insert-pipe/index",title:"\u4f7f\u7528SOLIDWORKS API\u5728\u914d\u4ef6\u4e4b\u95f4\u63d2\u5165\u7ba1\u9053\u7ec4\u4ef6",description:"\u8fd9\u4e2aVBA\u5b8f\u5728\u4e24\u4e2a\u9009\u5b9a\u7684\u914d\u4ef6\u7684\u505c\u6b62\u9762\u4e4b\u95f4\u63d2\u5165\u65b0\u7684\u865a\u62df\u7ec4\u4ef6\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/assembly/insert-pipe/index.md",sourceDirName:"codestack/solidworks-api/document/assembly/insert-pipe",slug:"/codestack/solidworks-api/document/assembly/insert-pipe/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/insert-pipe/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/assembly/insert-pipe/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u914d\u4ef6\u4e4b\u95f4\u63d2\u5165\u7ba1\u9053\u7ec4\u4ef6",image:"pipe.svg",labels:["pipe","fitting","assembly","plumbing"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u663e\u793a\u88c5\u914d\u4f53\u53ef\u89c6\u5316\u9875\u9762",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/display-assembly-visualization-page/"},next:{title:"\u5728\u5927\u578b\u8bbe\u8ba1\u5ba1\u67e5\uff08LDR\uff09\u6a21\u5f0f\u4e0b\u6253\u5f00\u6240\u9009\u7ec4\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/assembly/open-component-ldr/"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,s.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u5728\u4e24\u4e2a\u9009\u5b9a\u7684\u914d\u4ef6\u7684\u505c\u6b62\u9762\u4e4b\u95f4\u63d2\u5165\u65b0\u7684\u865a\u62df\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u914d\u4ef6\u7684\u505c\u6b62\u9762",src:t(65394).Z,width:"571",height:"536"}),"{ width=400 }"),(0,r.kt)("p",null,"\u505c\u6b62\u9762\u5fc5\u987b\u662f\u5e73\u9762\u7684\uff0c\u5177\u67092\u4e2a\u5706\u5f62\u8fb9\u7f18\u3002\u4e24\u4e2a\u914d\u4ef6\u4e4b\u95f4\u7684\u8fb9\u7f18\u5fc5\u987b\u540c\u5fc3\u3002"),(0,r.kt)("p",null,"\u5b8f\u5c06\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u7b2c\u4e00\u4e2a\u505c\u6b62\u9762\u521b\u5efa\u65b0\u7684\u865a\u62df\u7ec4\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u7b2c\u4e00\u4e2a\u505c\u6b62\u9762\u4e0a\u521b\u5efa\u65b0\u7684\u8349\u56fe\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u505c\u6b62\u9762\u7684\u4e24\u4e2a\u8fb9\u7f18\u8f6c\u6362\u4e3a\u8349\u56fe\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u8349\u56fe\u6324\u538b\u5230\u7b2c\u4e8c\u4e2a\u505c\u6b62\u9762\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6839\u636e",(0,r.kt)("strong",{parentName:"li"},"MATERIAL_NAME"),"\u53d8\u91cf\u5206\u914d\u6750\u6599\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5173\u95ed\u865a\u62df\u7ec4\u4ef6\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4e24\u4e2a\u914d\u4ef6\u4e4b\u95f4\u7684\u7ba1\u9053",src:t(80868).Z,width:"794",height:"435"}),"{ width=400 }"),(0,r.kt)("p",null,"\u7ed3\u679c\u5c06\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u53ef\u8c03\u8282\u5185\u5916\u76f4\u5f84\u548c\u957f\u5ea6\u7684\u7ba1\u9053\u3002\u66f4\u6539\u914d\u4ef6\u7684\u4f4d\u7f6e\u6216\u5c3a\u5bf8\u5c06\u81ea\u52a8\u66f4\u6539\u7ba1\u9053\u7684\u51e0\u4f55\u5f62\u72b6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const MATERIAL_NAME As String = "PVC 0.007 Plasticized"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        If swModel.GetType() <> swDocumentTypes_e.swDocASSEMBLY Then\n            err.Raise vbError, "", "\u4ec5\u652f\u6301\u88c5\u914d\u6587\u6863"\n        End If\n        \n        Dim swAssy As SldWorks.AssemblyDoc\n        \n        Set swAssy = swModel\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swStopFace1 As SldWorks.Entity\n        Dim swStopFace2 As SldWorks.Entity\n        \n        Set swStopFace1 = swSelMgr.GetSelectedObject6(1, -1)\n        Set swStopFace2 = swSelMgr.GetSelectedObject6(2, -1)\n    \n        ValidateFace swStopFace1\n        ValidateFace swStopFace2\n        \n        Dim swComp As SldWorks.Component2\n        \n        Dim insErr As Long\n        insErr = swAssy.InsertNewVirtualPart(swStopFace1, swComp)\n        \n        If swComp Is Nothing Then\n            err.Raise vbError, "", "\u65e0\u6cd5\u521b\u5efa\u865a\u62df\u7ec4\u4ef6\u3002\u9519\u8bef\u4ee3\u7801\uff1a" & insErr\n        End If\n        \n        If Not swAssy.GetEditTargetComponent() Is swComp Then\n            \n            swComp.Select4 False, Nothing, False\n            \n            Dim info As Long\n            swAssy.EditPart2 True, False, info\n            \n            If info <> swEditPartCommandStatus_e.swEditPartSuccessful Then\n                err.Raise vbError, "", "\u65e0\u6cd5\u7f16\u8f91\u96f6\u4ef6\u3002\u9519\u8bef\u4ee3\u7801\uff1a" & info\n            End If\n            \n        End If\n        \n        Dim swProfileSketch As SldWorks.Feature\n        \n        If False <> swStopFace1.Select4(False, Nothing) Then\n            \n            swModel.SketchManager.InsertSketch True\n            swModel.SketchManager.AddToDB = True\n            \n            Dim vEdges As Variant\n            vEdges = swStopFace1.GetEdges\n            \n            If swModel.Extension.MultiSelect2(vEdges, False, Nothing) <> 2 Then\n                err.Raise vbError, "", "\u65e0\u6cd5\u9009\u62e9\u8981\u8f6c\u6362\u7684\u8fb9\u7f18"\n            End If\n            \n            If False = swModel.SketchManager.SketchUseEdge2(False) Then\n                err.Raise vbError, "", "\u65e0\u6cd5\u8f6c\u6362\u8349\u56fe\u5b9e\u4f53"\n            End If\n            \n            Set swProfileSketch = swModel.SketchManager.ActiveSketch\n            \n            swModel.SketchManager.AddToDB = False\n            swModel.SketchManager.InsertSketch True\n        Else\n            err.Raise vbError, "\u65e0\u6cd5\u9009\u62e9\u7b2c\u4e00\u4e2a\u505c\u6b62\u9762"\n        End If\n        \n        swProfileSketch.Select2 False, 0\n        swStopFace2.SelectByMark True, 1\n        \n        Dim swPipeFeat As SldWorks.Feature\n        Set swPipeFeat = swModel.FeatureManager.FeatureExtrusion2(True, False, False, swEndConditions_e.swEndCondUpToSurface, 0, 0, 0, False, False, False, False, 0, 0, False, False, False, False, True, True, True, 0, 0, False)\n        \n        If swPipeFeat Is Nothing Then\n            err.Raise vbError, "", "\u65e0\u6cd5\u521b\u5efa\u6324\u538b\u7279\u5f81"\n        End If\n        \n        Dim swCompPart As SldWorks.PartDoc\n        Set swCompPart = swComp.GetModelDoc2\n        \n        swCompPart.SetMaterialPropertyName2 "", "", MATERIAL_NAME\n        \n        swModel.ClearSelection2 True\n        swAssy.EditAssembly\n        \n    Else\n        err.Raise vbError, "", "\u6253\u5f00\u88c5\u914d\u6587\u6863"\n    End If\n    \nEnd Sub\n\nSub ValidateFace(face As SldWorks.Face2)\n    \n    If Not face Is Nothing Then\n        \n        Dim swSurf As SldWorks.Surface\n        Set swSurf = face.GetSurface()\n        \n        If False = swSurf.IsPlane() Then\n            err.Raise vbError, "", "\u4ec5\u652f\u6301\u5e73\u9762\u9762"\n        End If\n        \n        Dim vEdges As Variant\n        vEdges = face.GetEdges\n        \n        If Not UBound(vEdges) = 1 Then\n            err.Raise vbError, "", "\u9762\u5fc5\u987b\u5305\u542b2\u4e2a\u5706\u5f62\u8fb9\u7f18"\n        End If\n        \n        Dim swEdge As SldWorks.Edge\n        Dim swCurve As SldWorks.Curve\n        \n        Set swEdge = vEdges(0)\n        Set swCurve = swEdge.GetCurve\n        \n        If False = swCurve.IsCircle() Then\n            err.Raise vberr, "", "\u4ec5\u652f\u6301\u5706\u5f62\u8fb9\u7f18"\n        End If\n        \n        Set swEdge = vEdges(1)\n        Set swCurve = swEdge.GetCurve\n        \n        If False = swCurve.IsCircle() Then\n            err.Raise vberr, "", "\u4ec5\u652f\u6301\u5706\u5f62\u8fb9\u7f18"\n        End If\n        \n    Else\n        err.Raise vbError, "", "\u8bf7\u9009\u62e92\u4e2a\u505c\u6b62\u9762"\n    End If\n\nEnd Sub\n')))}u.isMDXComponent=!0},65394:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/fitting-stop-face-3698bba1f28469e09640948d1cc5e25c.png"},80868:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/pipe-fittings-e81afd50d45a533f1c3e2f088b0ddf9d.png"}}]);