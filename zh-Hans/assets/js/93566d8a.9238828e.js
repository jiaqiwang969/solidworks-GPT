"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[49798],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),c=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return s.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},f=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?s.createElement(m,i(i({ref:n},p),{},{components:t})):s.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(87462),r=(t(67294),t(3905));const o={title:"Insert pipe component between fittings using SOLIDWORKS API",caption:"Insert Pipe",description:"VBA macro for plumbing automation which inserts pipe component based on the stop faces of the fitting",image:"pipe.svg",labels:["pipe","fitting","assembly","plumbing"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/insert-pipe/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/insert-pipe/index",title:"Insert pipe component between fittings using SOLIDWORKS API",description:"VBA macro for plumbing automation which inserts pipe component based on the stop faces of the fitting",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/insert-pipe/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/insert-pipe",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/insert-pipe/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/insert-pipe/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/insert-pipe/index.md",tags:[],version:"current",frontMatter:{title:"Insert pipe component between fittings using SOLIDWORKS API",caption:"Insert Pipe",description:"VBA macro for plumbing automation which inserts pipe component based on the stop faces of the fitting",image:"pipe.svg",labels:["pipe","fitting","assembly","plumbing"]},sidebar:"tutorialSidebar",previous:{title:"Display assembly visualization page using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/display-assembly-visualization-page/"},next:{title:"Open selected components in the Large Design Review (LDR) mode",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/open-component-ldr/"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:n,...o}=e;return(0,r.kt)(d,(0,s.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA macro inserts new virtual component into SOLIDWORKS assembly between the selected stop faces of the 2 fittings"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stop face of the fitting",src:t(77064).Z,width:"571",height:"536"}),"{ width=400 }"),(0,r.kt)("p",null,"Stop faces must be planar with 2 circular edges. Edges between 2 fittings must be concentric."),(0,r.kt)("p",null,"Macro will perform the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create new virtual component based on the first stop face."),(0,r.kt)("li",{parentName:"ul"},"Create new sketch on the first stop face"),(0,r.kt)("li",{parentName:"ul"},"Convert both edges of the stop face into the sketch"),(0,r.kt)("li",{parentName:"ul"},"Extrude the sketch up to the second stop face"),(0,r.kt)("li",{parentName:"ul"},"Assign the material based on the ",(0,r.kt)("strong",{parentName:"li"},"MATERIAL_NAME")," variable"),(0,r.kt)("li",{parentName:"ul"},"Close virtual component")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pipe between 2 fittings",src:t(11694).Z,width:"794",height:"435"}),"{ width=400 }"),(0,r.kt)("p",null,"As the result pipe with adjustable inner and outer diameter and length is created. Changing the position or size of the fitting will change the geometry of the pipe automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const MATERIAL_NAME As String = "PVC 0.007 Plasticized"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        If swModel.GetType() <> swDocumentTypes_e.swDocASSEMBLY Then\n            err.Raise vbError, "", "Only assembly documents are supported"\n        End If\n        \n        Dim swAssy As SldWorks.AssemblyDoc\n        \n        Set swAssy = swModel\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swStopFace1 As SldWorks.Entity\n        Dim swStopFace2 As SldWorks.Entity\n        \n        Set swStopFace1 = swSelMgr.GetSelectedObject6(1, -1)\n        Set swStopFace2 = swSelMgr.GetSelectedObject6(2, -1)\n    \n        ValidateFace swStopFace1\n        ValidateFace swStopFace2\n        \n        Dim swComp As SldWorks.Component2\n        \n        Dim insErr As Long\n        insErr = swAssy.InsertNewVirtualPart(swStopFace1, swComp)\n        \n        If swComp Is Nothing Then\n            err.Raise vbError, "", "Failed to create virtual component. Error code: " & insErr\n        End If\n        \n        If Not swAssy.GetEditTargetComponent() Is swComp Then\n            \n            swComp.Select4 False, Nothing, False\n            \n            Dim info As Long\n            swAssy.EditPart2 True, False, info\n            \n            If info <> swEditPartCommandStatus_e.swEditPartSuccessful Then\n                err.Raise vbError, "", "Failed to edit part. Error code: " & info\n            End If\n            \n        End If\n        \n        Dim swProfileSketch As SldWorks.Feature\n        \n        If False <> swStopFace1.Select4(False, Nothing) Then\n            \n            swModel.SketchManager.InsertSketch True\n            swModel.SketchManager.AddToDB = True\n            \n            Dim vEdges As Variant\n            vEdges = swStopFace1.GetEdges\n            \n            If swModel.Extension.MultiSelect2(vEdges, False, Nothing) <> 2 Then\n                err.Raise vbError, "", "Failed to select edges to convert"\n            End If\n            \n            If False = swModel.SketchManager.SketchUseEdge2(False) Then\n                err.Raise vbError, "", "Failed to convert sketch entitites"\n            End If\n            \n            Set swProfileSketch = swModel.SketchManager.ActiveSketch\n            \n            swModel.SketchManager.AddToDB = False\n            swModel.SketchManager.InsertSketch True\n        Else\n            err.Raise vbError, "Failed to select first stop face"\n        End If\n        \n        swProfileSketch.Select2 False, 0\n        swStopFace2.SelectByMark True, 1\n        \n        Dim swPipeFeat As SldWorks.Feature\n        Set swPipeFeat = swModel.FeatureManager.FeatureExtrusion2(True, False, False, swEndConditions_e.swEndCondUpToSurface, 0, 0, 0, False, False, False, False, 0, 0, False, False, False, False, True, True, True, 0, 0, False)\n        \n        If swPipeFeat Is Nothing Then\n            err.Raise vbError, "", "Failed to create extrusion"\n        End If\n        \n        Dim swCompPart As SldWorks.PartDoc\n        Set swCompPart = swComp.GetModelDoc2\n        \n        swCompPart.SetMaterialPropertyName2 "", "", MATERIAL_NAME\n        \n        swModel.ClearSelection2 True\n        swAssy.EditAssembly\n        \n    Else\n        err.Raise vbError, "", "Open assembly document"\n    End If\n    \nEnd Sub\n\nSub ValidateFace(face As SldWorks.Face2)\n    \n    If Not face Is Nothing Then\n        \n        Dim swSurf As SldWorks.Surface\n        Set swSurf = face.GetSurface()\n        \n        If False = swSurf.IsPlane() Then\n            err.Raise vbError, "", "Only planar faces are supported"\n        End If\n        \n        Dim vEdges As Variant\n        vEdges = face.GetEdges\n        \n        If Not UBound(vEdges) = 1 Then\n            err.Raise vbError, "", "Face must contain 2 circular edges"\n        End If\n        \n        Dim swEdge As SldWorks.Edge\n        Dim swCurve As SldWorks.Curve\n        \n        Set swEdge = vEdges(0)\n        Set swCurve = swEdge.GetCurve\n        \n        If False = swCurve.IsCircle() Then\n            err.Raise vberr, "", "Only circular edges are supported"\n        End If\n        \n        Set swEdge = vEdges(1)\n        Set swCurve = swEdge.GetCurve\n        \n        If False = swCurve.IsCircle() Then\n            err.Raise vberr, "", "Only circular edges are supported"\n        End If\n        \n    Else\n        err.Raise vbError, "", "Please select 2 stop faces"\n    End If\n\nEnd Sub\n')))}u.isMDXComponent=!0},77064:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/fitting-stop-face-3698bba1f28469e09640948d1cc5e25c.png"},11694:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/pipe-fittings-e81afd50d45a533f1c3e2f088b0ddf9d.png"}}]);