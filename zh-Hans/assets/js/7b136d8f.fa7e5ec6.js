"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[22401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=s.createContext({}),l=function(e){var t=s.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return s.createElement(a.Provider,{value:t},e.children)},k="mdxType",S={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},A=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=l(n),A=o,d=k["".concat(a,".").concat(A)]||k[A]||S[A]||r;return n?s.createElement(d,c(c({ref:t},m),{},{components:n})):s.createElement(d,c({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=A;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[k]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return s.createElement.apply(null,c)}return s.createElement.apply(null,n)}A.displayName="MDXCreateElement"},17374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>S,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(87462),o=(n(67294),n(3905));const r={layout:"sw-tool",title:"Macro to merge sketches using SOLIDWORKS API",caption:"Merge Sketches",description:"VBA macro to merge selected sketches into a single 3D sketch using SOLIDWORKS API",image:"merged-sketches.svg",labels:["sketch","convert entities","merge"],group:"Sketch"},c=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches/index",title:"Macro to merge sketches using SOLIDWORKS API",description:"VBA macro to merge selected sketches into a single 3D sketch using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to merge sketches using SOLIDWORKS API",caption:"Merge Sketches",description:"VBA macro to merge selected sketches into a single 3D sketch using SOLIDWORKS API",image:"merged-sketches.svg",labels:["sketch","convert entities","merge"],group:"Sketch"},sidebar:"tutorialSidebar",previous:{title:"Installing SOLIDWORKS add-in by manual registration",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/manual/"},next:{title:"How to fix merged SOLIDWORKS macro errors",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merged-macro-error/"}},a={},l=[{value:"Options",id:"options",level:2},{value:"Notes",id:"notes",level:2}],m={toc:l},k="wrapper";function S(e){let{components:t,...r}=e;return(0,o.kt)(k,(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sketches merged into the 3D sketch",src:n(39543).Z,width:"275",height:"97"})),(0,o.kt)("p",null,"This VBA macro merges the selected sketches (3D and 3D) into a single 3D sketch using SOLIDWORKS API. This macro is using convert entities API to copy the entities from the source sketches to a target sketch."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"Macro can be configured by changing the values of the constant at the beginning of the macro"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"DELETE_SOURCE_SKETCHES")," - True to delete original source sketches, False to not delete"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"NEW_SKETCH_NAME")," - Name for the newly generated merged sketch, Empty string to use default auto generated name")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Const DELETE_SOURCE_SKETCHES As Boolean = True 'delete all source sketches\nConst NEW_SKETCH_NAME As String = \"MergedSketch\" 'new merged sketch to be named 'MergedSketch'\n")),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sketches in the assembly or drawings components are also supported"),(0,o.kt)("li",{parentName:"ul"},"Relations and dimensions from the source sketch are not copied to a target sketch"),(0,o.kt)("li",{parentName:"ul"},"Sketches are merged to an active 3D sketch, or new 3D sketch is created automatically")),(0,o.kt)("p",null,"Use this macro in conjunction with ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/selection/select-features-by-type/"},"Select Features By Type")," to select all sketches to be merged."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const DELETE_SOURCE_SKETCHES As Boolean = False\nConst NEW_SKETCH_NAME As String = ""\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \ntry:\n        \n    On Error GoTo catch\n        \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        MergeSelectedSketches swModel\n    Else\n        Err.Raise vbError, "", "Please open model"\n    End If\n    \n    GoTo finally\n    \ncatch:\n    Debug.Print Err.Number\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally:\n\nEnd Sub\n\nSub MergeSelectedSketches(model As SldWorks.ModelDoc2)\n    \n    Dim swSketch As SldWorks.Sketch\n        \n    If Not model.SketchManager.ActiveSketch Is Nothing Then\n        If False = model.SketchManager.ActiveSketch.Is3D() Then\n            Err.Raise vbError, "", "Only 3D sketch is supported as a target sketch"\n        End If\n    End If\n    \n    Dim vSketchSegs As Variant\n    Dim vSketches As Variant\n    vSketchSegs = GetSelectedSketchSegments(model, vSketches)\n    \n    If model.SketchManager.ActiveSketch Is Nothing Then\n        model.ClearSelection2 True\n        model.SketchManager.Insert3DSketch True\n    End If\n    \n    Dim swTargetSketch As SldWorks.Feature\n    \n    If model.Extension.MultiSelect2(vSketchSegs, False, Nothing) = UBound(vSketchSegs) + 1 Then\n    \n        model.SketchManager.SketchUseEdge3 False, False\n        \n        Set swTargetSketch = model.SketchManager.ActiveSketch\n        \n        model.SketchManager.ActiveSketch.RelationManager.DeleteAllRelations\n                \n        model.SketchManager.Insert3DSketch True\n    Else\n        Err.Raise vbError, "", "Failed to select sketches"\n    End If\n    \n    If DELETE_SOURCE_SKETCHES Then\n        If model.Extension.MultiSelect2(vSketches, False, Nothing) = UBound(vSketches) + 1 Then\n            model.Extension.DeleteSelection2 swDeleteSelectionOptions_e.swDelete_Absorbed\n        Else\n            Err.Raise vbError, "", "Failed to selected sketches for deletion"\n        End If\n    End If\n    \n    If NEW_SKETCH_NAME <> "" Then\n        swTargetSketch.Name = NEW_SKETCH_NAME\n    End If\n    \nEnd Sub\n\nFunction GetSelectedSketchSegments(model As SldWorks.ModelDoc2, ByRef vSketches As Variant) As Variant\n    \n    Dim swSketches() As SldWorks.Feature\n    Dim isSkArrInit As Boolean\n    isSkArrInit = False\n    \n    Dim swSketchSegs() As SldWorks.SketchSegment\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    Dim i As Integer\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n        If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelSKETCHES Then\n            \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = swSelMgr.GetSelectedObject6(i, -1)\n            \n            If Not isSkArrInit Then\n                isSkArrInit = True\n                ReDim swSketches(0)\n            Else\n                ReDim Preserve swSketches(UBound(swSketches) + 1)\n            End If\n            \n            Set swSketches(UBound(swSketches)) = swFeat\n            \n            Dim swSketch As SldWorks.Sketch\n            Set swSketch = swFeat.GetSpecificFeature2\n            \n            Dim vSegs As Variant\n            vSegs = swSketch.GetSketchSegments\n            \n            Dim j As Integer\n            \n            If Not IsEmpty(vSegs) Then\n                                \n                For j = 0 To UBound(vSegs)\n                                \n                    If Not isInit Then\n                        ReDim swSketchSegs(0)\n                        isInit = True\n                    Else\n                        ReDim Preserve swSketchSegs(UBound(swSketchSegs) + 1)\n                    End If\n                    \n                    Set swSketchSegs(UBound(swSketchSegs)) = vSegs(j)\n                \n                Next\n                \n            End If\n            \n        End If\n    Next\n    \n    GetSelectedSketchSegments = swSketchSegs\n    \n    If isSkArrInit Then\n        vSketches = swSketches\n    End If\n    \nEnd Function\n')))}S.isMDXComponent=!0},39543:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,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"}}]);