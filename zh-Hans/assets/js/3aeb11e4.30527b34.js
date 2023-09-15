"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[36969],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},b=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,p=u["".concat(c,".").concat(b)]||u[b]||g[b]||s;return t?o.createElement(p,i(i({ref:n},d),{},{components:t})):o.createElement(p,i({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=b;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},41748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const s={layout:"sw-tool",title:"Create selectable 3D bounding box sketch using SOLIDWORKS API",caption:"Create Selectable Bounding Box"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-selectable-bounding-box/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-selectable-bounding-box/index",title:"Create selectable 3D bounding box sketch using SOLIDWORKS API",description:"VBA macro which creates 3D bounding box sketch based on the SOLIDWORKS bounding box with an ability to select sketch segments",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-selectable-bounding-box/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-selectable-bounding-box",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-selectable-bounding-box/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-selectable-bounding-box/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-selectable-bounding-box/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Create selectable 3D bounding box sketch using SOLIDWORKS API",caption:"Create Selectable Bounding Box"},sidebar:"tutorialSidebar",previous:{title:"Create and display b-spline curve using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-bspline-curve/"},next:{title:"Get type of cylindrical face using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/cylindrical-face-type/"}},c={},l=[{value:"group: Geometry",id:"group-geometry",level:2},{value:"Notes",id:"notes",level:2}],d={toc:l},u="wrapper";function g(e){let{components:n,...s}=e;return(0,r.kt)(u,(0,o.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"VBA macro which creates 3D bounding box sketch based on the SOLIDWORKS bounding box with an ability to select sketch segments\nimage: bounding-box.svg\nlabels: ","[bounding box]"),(0,r.kt)("h2",{id:"group-geometry"},"group: Geometry"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bonding box sketch",src:t(6594).Z,width:"1066",height:"690"}),"{ width=450 }"),(0,r.kt)("p",null,"SOLIDWORKS enables the functionality to insert 3D bounding box into the part document. However the edges (segments) of this bonding box cannot be selected and used for the modelling purposes."),(0,r.kt)("p",null,"This VBA macro creates a bounding box sketch based on SOLIDWORKS 3D bounding box. All segments from the sketch can be selected and used for reference or geometry creation."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Macro will use existing 3D bonding box or create new one if not exists"),(0,r.kt)("li",{parentName:"ul"},"Generated bounding box is automatically updated when original bounding box changes (after the rebuild)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It is required for the original bounding box to be visible to update the derived bounding box")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swFeat As SldWorks.Feature\n        \n        Set swFeat = GetBoundingBoxFeature(swModel)\n        \n        If Not swFeat Is Nothing Then\n        \n            Dim swSketch As SldWorks.Sketch\n            Set swSketch = swFeat.GetSpecificFeature2\n            \n            Dim vSegs As Variant\n            \n            vSegs = swSketch.GetSketchSegments\n            \n            ConvertSegmentsIntoSketch swModel, vSegs\n            \n        Else\n            MsgBox "Failed to get bounding box feature"\n        End If\n    \n    Else\n        MsgBox "Please open document"\n    End If\n    \nEnd Sub\n\nFunction GetBoundingBoxFeature(model As SldWorks.ModelDoc2) As SldWorks.Feature\n    \n    Dim swFeat As SldWorks.Feature\n    Set swFeat = FindBoundingBoxFeature(model)\n    \n    If swFeat Is Nothing Then\n        \n        Dim status As Long\n        model.FeatureManager.InsertGlobalBoundingBox swGlobalBoundingBoxFitOptions_e.swBoundingBoxType_BestFit, False, False, status\n        \n        Set swFeat = FindBoundingBoxFeature(model)\n        \n    End If\n    \n    Set GetBoundingBoxFeature = swFeat\n    \nEnd Function\n\nFunction FindBoundingBoxFeature(model As SldWorks.ModelDoc2) As SldWorks.Feature\n    \n    Dim swFeat As SldWorks.Feature\n    Set swFeat = model.FirstFeature\n    \n    While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2() = "BoundingBoxProfileFeat" Then\n            Set FindBoundingBoxFeature = swFeat\n            Exit Function\n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \n    Set FindBoundingBoxFeature = Nothing\n    \nEnd Function\n\nSub ConvertSegmentsIntoSketch(model As SldWorks.ModelDoc2, segs As Variant)\n    \n    If model.SketchManager.ActiveSketch Is Nothing Then\n        model.SketchManager.Insert3DSketch True\n    Else\n        If False = model.SketchManager.ActiveSketch.Is3D() Then\n            Err.Raise vbError, "", "Only 3D sketch is supported"\n        End If\n    End If\n    \n    Dim i As Integer\n    \n    model.ClearSelection2 True\n    \n    For i = 0 To UBound(segs)\n        Dim swSkSeg As SldWorks.SketchSegment\n        Set swSkSeg = segs(i)\n        swSkSeg.Select4 True, Nothing\n    Next\n    \n    model.SketchManager.SketchUseEdge3 False, False\n    \n    model.SketchManager.Insert3DSketch True\n    \nEnd Sub\n')))}g.isMDXComponent=!0},6594:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/bounding-box-sketch-69500c13ca2fe6341b19f5b0aedd91df.png"}}]);