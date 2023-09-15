"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[78238],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),a=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=a(e.components);return s.createElement(l.Provider,{value:n},e.children)},A="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},S=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),A=a(t),S=r,d=A["".concat(l,".").concat(S)]||A[S]||k[S]||o;return t?s.createElement(d,i(i({ref:n},m),{},{components:t})):s.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=S;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[A]="string"==typeof e?e:r,i[1]=c;for(var a=2;a<o;a++)i[a]=t[a];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}S.displayName="MDXCreateElement"},26574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=t(87462),r=(t(67294),t(3905));const o={layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5408\u5e76\u8349\u56fe\u7684\u5b8f",caption:"\u5408\u5e76\u8349\u56fe"},i=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches/index",title:"\u4f7f\u7528SOLIDWORKS API\u5408\u5e76\u8349\u56fe\u7684\u5b8f",description:"\u4f7f\u7528SOLIDWORKS API\u5c06\u9009\u5b9a\u7684\u8349\u56fe\u5408\u5e76\u4e3a\u4e00\u4e2a\u5355\u72ec\u76843D\u8349\u56fe\u7684VBA\u5b8f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5408\u5e76\u8349\u56fe\u7684\u5b8f",caption:"\u5408\u5e76\u8349\u56fe"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u88ab\u538b\u5236\u7684\u7ea6\u675f\u79fb\u52a8\u5230\u7279\u5f81\u6587\u4ef6\u5939\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/mates/move-suppressed-to-folder/"},next:{title:"\u5982\u4f55\u4fee\u590d\u5408\u5e76\u7684SOLIDWORKS\u5b8f\u9519\u8bef",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merged-macro-error/"}},l={},a=[{value:"group: Sketch",id:"group-sketch",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],m={toc:a},A="wrapper";function k(e){let{components:n,...o}=e;return(0,r.kt)(A,(0,s.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u5c06\u9009\u5b9a\u7684\u8349\u56fe\u5408\u5e76\u4e3a\u4e00\u4e2a\u5355\u72ec\u76843D\u8349\u56fe\u7684VBA\u5b8f\nimage: merged-sketches.svg\nlabels: ","[sketch,convert entities,merge]"),(0,r.kt)("h2",{id:"group-sketch"},"group: Sketch"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5c06\u8349\u56fe\u5408\u5e76\u52303D\u8349\u56fe\u4e2d",src:t(40065).Z,width:"275",height:"97"})),(0,r.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u4f7f\u7528SOLIDWORKS API\u5c06\u9009\u5b9a\u7684\u8349\u56fe\uff082D\u548c3D\uff09\u5408\u5e76\u4e3a\u4e00\u4e2a\u5355\u72ec\u76843D\u8349\u56fe\u3002\u8be5\u5b8f\u4f7f\u7528\u8f6c\u6362\u5b9e\u4f53API\u5c06\u6e90\u8349\u56fe\u7684\u5b9e\u4f53\u590d\u5236\u5230\u76ee\u6807\u8349\u56fe\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u66f4\u6539\u5b8f\u5f00\u5934\u7684\u5e38\u91cf\u7684\u503c\u6765\u914d\u7f6e\u5b8f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"DELETE_SOURCE_SKETCHES")," - \u8bbe\u7f6e\u4e3aTrue\u4ee5\u5220\u9664\u539f\u59cb\u6e90\u8349\u56fe\uff0c\u8bbe\u7f6e\u4e3aFalse\u4ee5\u4e0d\u5220\u9664"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"NEW_SKETCH_NAME")," - \u65b0\u751f\u6210\u7684\u5408\u5e76\u8349\u56fe\u7684\u540d\u79f0\uff0c\u8bbe\u7f6e\u4e3a\u7a7a\u5b57\u7b26\u4e32\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u81ea\u52a8\u751f\u6210\u7684\u540d\u79f0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const DELETE_SOURCE_SKETCHES As Boolean = True '\u5220\u9664\u6240\u6709\u6e90\u8349\u56fe\nConst NEW_SKETCH_NAME As String = \"MergedSketch\" '\u65b0\u5408\u5e76\u7684\u8349\u56fe\u5c06\u88ab\u547d\u540d\u4e3a\u201cMergedSketch\u201d\n")),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u88c5\u914d\u6216\u7ed8\u56fe\u4e2d\u7684\u8349\u56fe\u4e5f\u53d7\u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},"\u6e90\u8349\u56fe\u7684\u5173\u7cfb\u548c\u5c3a\u5bf8\u4e0d\u4f1a\u590d\u5236\u5230\u76ee\u6807\u8349\u56fe\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u8349\u56fe\u5c06\u5408\u5e76\u5230\u6d3b\u52a8\u76843D\u8349\u56fe\u4e2d\uff0c\u6216\u8005\u5c06\u81ea\u52a8\u521b\u5efa\u65b0\u76843D\u8349\u56fe")),(0,r.kt)("p",null,"\u4e0e",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/selection/select-features-by-type/"},"\u6309\u7c7b\u578b\u9009\u62e9\u7279\u5f81"),"\u4e00\u8d77\u4f7f\u7528\u6b64\u5b8f\u6765\u9009\u62e9\u8981\u5408\u5e76\u7684\u6240\u6709\u8349\u56fe\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const DELETE_SOURCE_SKETCHES As Boolean = False\nConst NEW_SKETCH_NAME As String = ""\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \ntry:\n        \n    On Error GoTo catch\n        \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        MergeSelectedSketches swModel\n    Else\n        Err.Raise vbError, "", "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \n    GoTo finally\n    \ncatch:\n    Debug.Print Err.Number\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally:\n\nEnd Sub\n\nSub MergeSelectedSketches(model As SldWorks.ModelDoc2)\n    \n    Dim swSketch As SldWorks.Sketch\n        \n    If Not model.SketchManager.ActiveSketch Is Nothing Then\n        If False = model.SketchManager.ActiveSketch.Is3D() Then\n            Err.Raise vbError, "", "\u53ea\u652f\u6301\u5c063D\u8349\u56fe\u4f5c\u4e3a\u76ee\u6807\u8349\u56fe"\n        End If\n    End If\n    \n    Dim vSketchSegs As Variant\n    Dim vSketches As Variant\n    vSketchSegs = GetSelectedSketchSegments(model, vSketches)\n    \n    If model.SketchManager.ActiveSketch Is Nothing Then\n        model.ClearSelection2 True\n        model.SketchManager.Insert3DSketch True\n    End If\n    \n    Dim swTargetSketch As SldWorks.Feature\n    \n    If model.Extension.MultiSelect2(vSketchSegs, False, Nothing) = UBound(vSketchSegs) + 1 Then\n    \n        model.SketchManager.SketchUseEdge3 False, False\n        \n        Set swTargetSketch = model.SketchManager.ActiveSketch\n        \n        model.SketchManager.ActiveSketch.RelationManager.DeleteAllRelations\n                \n        model.SketchManager.Insert3DSketch True\n    Else\n        Err.Raise vbError, "", "\u9009\u62e9\u8349\u56fe\u5931\u8d25"\n    End If\n    \n    If DELETE_SOURCE_SKETCHES Then\n        If model.Extension.MultiSelect2(vSketches, False, Nothing) = UBound(vSketches) + 1 Then\n            model.Extension.DeleteSelection2 swDeleteSelectionOptions_e.swDelete_Absorbed\n        Else\n            Err.Raise vbError, "", "\u9009\u62e9\u8981\u5220\u9664\u7684\u8349\u56fe\u5931\u8d25"\n        End If\n    End If\n    \n    If NEW_SKETCH_NAME <> "" Then\n        swTargetSketch.Name = NEW_SKETCH_NAME\n    End If\n    \nEnd Sub\n\nFunction GetSelectedSketchSegments(model As SldWorks.ModelDoc2, ByRef vSketches As Variant) As Variant\n    \n    Dim swSketches() As SldWorks.Feature\n    Dim isSkArrInit As Boolean\n    isSkArrInit = False\n    \n    Dim swSketchSegs() As SldWorks.SketchSegment\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    Dim i As Integer\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelSKETCHES Then\n            \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = swSelMgr.GetSelectedObject6(i, -1)\n            \n            If Not isSkArrInit Then\n                isSkArrInit = True\n                ReDim swSketches(0)\n            Else\n                ReDim Preserve swSketches(UBound(swSketches) + 1)\n            End If\n            \n            Set swSketches(UBound(swSketches)) = swFeat\n            \n            Dim swSketch As SldWorks.Sketch\n            Set swSketch = swFeat.GetSpecificFeature2\n            \n            Dim vSegs As Variant\n            vSegs = swSketch.GetSketchSegments\n            \n            Dim j As Integer\n            \n            If Not IsEmpty(vSegs) Then\n                                \n                For j = 0 To UBound(vSegs)\n                                \n                    If Not isInit Then\n                        ReDim swSketchSegs(0)\n                        isInit = True\n                    Else\n                        ReDim Preserve swSketchSegs(UBound(swSketchSegs) + 1)\n                    End If\n                    \n                    Set swSketchSegs(UBound(swSketchSegs)) = vSegs(j)\n                \n                Next\n                \n            End If\n            \n        End If\n    Next\n    \n    GetSelectedSketchSegments = swSketchSegs\n    \n    If isSkArrInit Then\n        vSketches = swSketches\n    End If\n    \nEnd Function\n')))}k.isMDXComponent=!0},40065:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"}}]);