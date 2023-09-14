"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[83866],{3905:(n,e,s)=>{s.d(e,{Zo:()=>c,kt:()=>p});var t=s(67294);function o(n,e,s){return e in n?Object.defineProperty(n,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[e]=s,n}function i(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.push.apply(s,t)}return s}function r(n){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){o(n,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}))}return n}function l(n,e){if(null==n)return{};var s,t,o=function(n,e){if(null==n)return{};var s,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)s=i[t],e.indexOf(s)>=0||(o[s]=n[s]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)s=i[t],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(n,s)&&(o[s]=n[s])}return o}var a=t.createContext({}),m=function(n){var e=t.useContext(a),s=e;return n&&(s="function"==typeof n?n(e):r(r({},e),n)),s},c=function(n){var e=m(n.components);return t.createElement(a.Provider,{value:e},n.children)},A="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(n,e){var s=n.components,o=n.mdxType,i=n.originalType,a=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),A=m(s),u=o,p=A["".concat(a,".").concat(u)]||A[u]||d[u]||i;return s?t.createElement(p,r(r({ref:e},c),{},{components:s})):t.createElement(p,r({ref:e},c))}));function p(n,e){var s=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=s.length,r=new Array(i);r[0]=u;var l={};for(var a in e)hasOwnProperty.call(e,a)&&(l[a]=e[a]);l.originalType=n,l[A]="string"==typeof n?n:o,r[1]=l;for(var m=2;m<i;m++)r[m]=s[m];return t.createElement.apply(null,r)}return t.createElement.apply(null,s)}u.displayName="MDXCreateElement"},52616:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var t=s(87462),o=(s(67294),s(3905));const i={title:"Traverse all dimensions of component or model using SOLIDWORKS API",caption:"Traverse All Dimensions",description:"VBA macro which traverses all dimensions of all features in the selected component or active document using SOLIDWORKS API and outputs the dimension name and value to the output Window",image:"dimensions.png",labels:["dimension","display dimension","traverse"]},r=void 0,l={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/traverse-all/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/traverse-all/index",title:"Traverse all dimensions of component or model using SOLIDWORKS API",description:"VBA macro which traverses all dimensions of all features in the selected component or active document using SOLIDWORKS API and outputs the dimension name and value to the output Window",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/traverse-all/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/traverse-all",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/traverse-all/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/traverse-all/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/traverse-all/index.md",tags:[],version:"current",frontMatter:{title:"Traverse all dimensions of component or model using SOLIDWORKS API",caption:"Traverse All Dimensions",description:"VBA macro which traverses all dimensions of all features in the selected component or active document using SOLIDWORKS API and outputs the dimension name and value to the output Window",image:"dimensions.png",labels:["dimension","display dimension","traverse"]},sidebar:"tutorialSidebar",previous:{title:"Macro to rename dimensions in the SOLIDWORKS drawing view",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/rename/"},next:{title:"Tables (BOM, General, Revision etc.) automation using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/"}},a={},m=[],c={toc:m},A="wrapper";function d(n){let{components:e,...i}=n;return(0,o.kt)(A,(0,t.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dimensions in the sketch of weldment feature",src:s(54625).Z,width:"428",height:"307"})),(0,o.kt)("p",null,"This VBA macro demonstrates how to traverse all dimensions of the features from active SOLIDWORKS document or component (if selected) in the assembly using SOLIDWORKS API."),(0,o.kt)("p",null,"Macro will output the name of the dimension and the value in the current system units into the Immediate Window of VBA."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"D1@Sketch1=0.15\nD2@Sketch1=2.0\nRI@Sketch11=0.008\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The macro will exclude all duplicate dimensions as in some cases (e.g. weldment features) the same dimension may be present in the sketch and in the structural member feature as the same time")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swComp As SldWorks.Component2\n        \n        Set swComp = swSelMgr.GetSelectedObjectsComponent3(1, -1)\n        \n        If Not swComp Is Nothing Then\n            TraverseDimensions swComp.FirstFeature\n        Else\n            TraverseDimensions swModel.FirstFeature\n        End If\n        \n    Else\n        MsgBox "Please open document"\n    End If\n    \nEnd Sub\n\nSub TraverseDimensions(startFeat As SldWorks.Feature)\n\n    Dim vFeats As Variant\n    vFeats = GetAllFeatures(startFeat)\n    \n    Dim vDispDims As Variant\n    vDispDims = GetAllDimensions(vFeats)\n    \n    If Not IsEmpty(vDispDims) Then\n    \n        Dim i As Integer\n        \n        For i = 0 To UBound(vDispDims)\n        \n            Dim swDispDim As SldWorks.DisplayDimension\n            Set swDispDim = vDispDims(i)\n            \n            Dim swDim As SldWorks.Dimension\n            Set swDim = swDispDim.GetDimension2(0)\n            \n            Dim val As Double\n            val = swDim.GetSystemValue3(swInConfigurationOpts_e.swThisConfiguration, Empty)(0)\n            \n            Debug.Print swDim.GetNameForSelection() & "=" & val\n        \n        Next\n    \n    End If\n\nEnd Sub\n\nFunction GetAllDimensions(vFeats As Variant) As Variant\n    \n    Dim swDimsColl As Collection\n    Set swDimsColl = New Collection\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vFeats)\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = vFeats(i)\n        \n        Dim swDispDim As SldWorks.DisplayDimension\n        Set swDispDim = swFeat.GetFirstDisplayDimension\n        \n        While Not swDispDim Is Nothing\n            \n            If Not Contains(swDimsColl, swDispDim) Then\n                swDimsColl.Add swDispDim\n            End If\n            \n            Set swDispDim = swFeat.GetNextDisplayDimension(swDispDim)\n        Wend\n        \n    Next\n\n    GetAllDimensions = CollectionToArray(swDimsColl)\n    \nEnd Function\n\nFunction GetAllFeatures(startFeat As SldWorks.Feature) As Variant\n        \n    Dim swProcFeatsColl As Collection\n    Set swProcFeatsColl = New Collection\n    \n    Dim swFeat As SldWorks.Feature\n    Set swFeat = startFeat\n    \n    While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2() <> "HistoryFolder" Then\n        \n            If Not Contains(swProcFeatsColl, swFeat) Then\n                swProcFeatsColl.Add swFeat\n            End If\n        \n            CollectAllSubFeatures swFeat, swProcFeatsColl\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \n    GetAllFeatures = CollectionToArray(swProcFeatsColl)\n    \nEnd Function\n\nSub CollectAllSubFeatures(parentFeat As SldWorks.Feature, procFeatsColl As Collection)\n    \n    Dim swSubFeat As SldWorks.Feature\n    Set swSubFeat = parentFeat.GetFirstSubFeature\n        \n    While Not swSubFeat Is Nothing\n        \n        If Not Contains(procFeatsColl, swSubFeat) Then\n            procFeatsColl.Add swSubFeat\n        End If\n        \n        CollectAllSubFeatures swSubFeat, procFeatsColl\n        Set swSubFeat = swSubFeat.GetNextSubFeature\n        \n    Wend\n    \nEnd Sub\n\nFunction CollectionToArray(coll As Collection) As Variant\n    \n    If coll.Count() > 0 Then\n        \n        Dim arr() As Object\n        \n        ReDim arr(coll.Count() - 1)\n        Dim i As Integer\n        \n        For i = 1 To coll.Count\n            Set arr(i - 1) = coll(i)\n        Next\n        \n        CollectionToArray = arr\n        \n    Else\n        CollectionToArray = Empty\n    End If\n    \nEnd Function\n\nFunction Contains(coll As Collection, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To coll.Count\n        If coll.item(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}d.isMDXComponent=!0},54625:(n,e,s)=>{s.d(e,{Z:()=>t});const t="data:image/png;base64,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"}}]);