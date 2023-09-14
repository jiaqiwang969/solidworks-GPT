"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[64497],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),w=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=w(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",A={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=w(t),l=s,m=c["".concat(p,".").concat(l)]||c[l]||A[l]||i;return t?n.createElement(m,o(o({ref:r},d),{},{components:t})):n.createElement(m,o({ref:r},d))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=l;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[c]="string"==typeof e?e:s,o[1]=a;for(var w=2;w<i;w++)o[w]=t[w];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},69538:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>A,frontMatter:()=>i,metadata:()=>a,toc:()=>w});var n=t(87462),s=(t(67294),t(3905));const i={layout:"sw-tool",title:"Copy custom properties from the drawing view to SOLIDWORKS drawing file",caption:"Copy Drawing View Properties",description:"VBA macro to copy specified custom properties from the selected or default drawing view into the drawing properties",image:"drawing-custom-properties.png",labels:["drawing","view","custom properties"],group:"Drawing"},o=void 0,a={unversionedId:"codestack-clone/solidworks-api/document/drawing/copy-view-properties/index",id:"codestack-clone/solidworks-api/document/drawing/copy-view-properties/index",title:"Copy custom properties from the drawing view to SOLIDWORKS drawing file",description:"VBA macro to copy specified custom properties from the selected or default drawing view into the drawing properties",source:"@site/docs/codestack-clone/solidworks-api/document/drawing/copy-view-properties/index.md",sourceDirName:"codestack-clone/solidworks-api/document/drawing/copy-view-properties",slug:"/codestack-clone/solidworks-api/document/drawing/copy-view-properties/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/drawing/copy-view-properties/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/drawing/copy-view-properties/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Copy custom properties from the drawing view to SOLIDWORKS drawing file",caption:"Copy Drawing View Properties",description:"VBA macro to copy specified custom properties from the selected or default drawing view into the drawing properties",image:"drawing-custom-properties.png",labels:["drawing","view","custom properties"],group:"Drawing"},sidebar:"tutorialSidebar",previous:{title:"Macro to copy file paths to all drawings of an assembly components using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/drawing/copy-drawing-paths/"},next:{title:"Draw border of the active sheet on the specified layer",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/drawing/draw-border-on-layer/"}},p={},w=[],d={toc:w},c="wrapper";function A(e){let{components:r,...i}=e;return(0,s.kt)(c,(0,n.Z)({},d,i,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Custom properties in SOLIDWORKS drawing",src:t(8070).Z,width:"1013",height:"595"}),"{ width=500 }"),(0,s.kt)("p",null,"This macro copies the specified custom properties from the SOLIDWORKS part or assembly referenced in the drawing view to the drawing view itself."),(0,s.kt)("p",null,"Custom properties can be specified in the ",(0,s.kt)("em",{parentName:"p"},"PRP_NAMES")," constant in the macro. Use comma to specify multiple properties to copy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const PRP_NAMES As String = "PartNo,Description,Title"\n')),(0,s.kt)("p",null,"In order to select the properties to copy at runtime, specify an empty string as the value of ",(0,s.kt)("em",{parentName:"p"},"PRP_NAMES")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const PRP_NAMES As String = ""\n')),(0,s.kt)("p",null,"In this case the following input box will be displayed."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Input box for properties to be copied to drawing",src:t(90607).Z,width:"499",height:"211"})),(0,s.kt)("p",null,"User can specify either single property or multiple properties, separated by comma."),(0,s.kt)("p",null,"If drawing view is selected when running the macro, properties will be copied from this drawing view. Otherwise, the default properties view will be used as specified in the sheet properties (this is usually the first view in the drawing):"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Drawing View for custom properties",src:t(63837).Z,width:"735",height:"297"}),"{ width=500 }"),(0,s.kt)("p",null,"At first, custom property value will be extracted from the configuration of the model which corresponds to the referenced configuration of the drawing view. If the property doesn't exist or empty, file specific custom property will be extracted."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const PRP_NAMES As String = "Description" \'comma separated, empty string for popup select\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n        \n    On Error GoTo catch\n    \ntry:\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If swDraw Is Nothing Then\n        Err.Raise vbError, , "Please open the drawing"\n    End If\n    \n    Dim vPrpNames As Variant\n    vPrpNames = GetPropertyNames()\n    \n    Dim swPrpsView As SldWorks.view\n    Set swPrpsView = GetPropertiesView(swDraw)\n    \n    If swPrpsView Is Nothing Then\n        Err.Raise vbError, , "Failed to find the drawing view with properties"\n    End If\n    \n    Dim i As Integer\n    \n    Dim swDrwPrpMgr As SldWorks.CustomPropertyManager\n    Set swDrwPrpMgr = swDraw.Extension.CustomPropertyManager("")\n    \n    For i = 0 To UBound(vPrpNames)\n        \n        Dim prpName As String\n        Dim prpVal As String\n        \n        prpName = vPrpNames(i)\n        prpVal = GetPropertyValue(swPrpsView, prpName)\n        \n        swDrwPrpMgr.Add2 prpName, swCustomInfoType_e.swCustomInfoText, prpVal\n        swDrwPrpMgr.Set prpName, prpVal\n        \n    Next\n    \n    GoTo finally\n    \ncatch:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally:\n    \nEnd Sub\n\nFunction GetPropertyValue(view As SldWorks.view, prpName As String)\n    \n    Dim swViewDoc As SldWorks.ModelDoc2\n    Set swViewDoc = view.ReferencedDocument\n    \n    If swViewDoc Is Nothing Then\n        Err.Raise vbError, , "Cannot get document from the view. Make sure view is not empty and document is not lightweigh"\n    End If\n\n    Dim prpVal As String\n          \n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    Set swCustPrpMgr = swViewDoc.Extension.CustomPropertyManager(view.ReferencedConfiguration)\n    \n    swCustPrpMgr.Get3 prpName, False, "", prpVal\n    \n    If prpVal = "" Then\n        Set swCustPrpMgr = swViewDoc.Extension.CustomPropertyManager("")\n        \n        swCustPrpMgr.Get3 prpName, False, "", prpVal\n    End If\n    \n    GetPropertyValue = prpVal\n    \nEnd Function\n\nFunction GetPropertyNames() As Variant\n    \n    Dim prpNames As String\n    prpNames = PRP_NAMES\n    \n    If prpNames = "" Then\n        prpNames = InputBox("Please specify comma separated custom property names to transfer to drawing")\n    End If\n    \n    If prpNames = "" Then\n        End\n    End If\n    \n    Dim vPrpNames As Variant\n    vPrpNames = Split(prpNames, ",")\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vPrpNames)\n        vPrpNames(i) = Trim(CStr(vPrpNames(i)))\n    Next\n    \n    GetPropertyNames = vPrpNames\n    \nEnd Function\n\nFunction GetPropertiesView(draw As SldWorks.DrawingDoc) As SldWorks.view\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = draw.SelectionManager\n    \n    Dim swCustPrpView As SldWorks.view\n    Set swCustPrpView = swSelMgr.GetSelectedObjectsDrawingView2(1, -1)\n    \n    If Not swCustPrpView Is Nothing Then\n        Set GetPropertiesView = swCustPrpView\n        Exit Function\n    End If\n    \n    Dim vSheetNames As Variant\n    vSheetNames = draw.GetSheetNames\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vSheetNames)\n        \n        Dim swSheet As SldWorks.Sheet\n        Set swSheet = draw.Sheet(vSheetNames(i))\n        \n        Dim custPrpViewName As String\n        custPrpViewName = swSheet.CustomPropertyView\n        \n        Dim vViews As Variant\n        vViews = swSheet.GetViews()\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(vViews)\n            \n            Dim swView As SldWorks.view\n            Set swView = vViews(j)\n            \n            If LCase(swView.Name) = LCase(custPrpViewName) Then\n                Set swCustPrpView = swView\n                Exit For\n            End If\n            \n        Next\n        \n        If swCustPrpView Is Nothing Then\n            Set swCustPrpView = vViews(0)\n        End If\n        \n    Next\n    \n    Set GetPropertiesView = swCustPrpView\n    \nEnd Function\n')))}A.isMDXComponent=!0},8070:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/drawing-custom-properties-42fb5d6b10be981a931dde917f8e1a14.png"},90607:(e,r,t)=>{t.d(r,{Z:()=>n});const n="data:image/png;base64,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"},63837:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/properties-view-8c25deafb5c3168552a7a777fe116a48.png"}}]);