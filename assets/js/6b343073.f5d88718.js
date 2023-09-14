"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[31441],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>d});var l=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,l)}return o}function n(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,l,r=function(t,e){if(null==t)return{};var o,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)o=a[l],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)o=a[l],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var i=l.createContext({}),A=function(t){var e=l.useContext(i),o=e;return t&&(o="function"==typeof t?t(e):n(n({},e),t)),o},u=function(t){var e=A(t.components);return l.createElement(i.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=A(o),p=r,d=c["".concat(i,".").concat(p)]||c[p]||m[p]||a;return o?l.createElement(d,n(n({ref:e},u),{},{components:o})):l.createElement(d,n({ref:e},u))}));function d(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,n=new Array(a);n[0]=p;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[c]="string"==typeof t?t:r,n[1]=s;for(var A=2;A<a;A++)n[A]=o[A];return l.createElement.apply(null,n)}return l.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2035:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>n,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>A});var l=o(87462),r=(o(67294),o(3905));const a={title:"Create multiple rows callout using SOLIDWORKS API",caption:"Create Multiple Rows Callout",description:"Example demonstrates how to create a callout with multiple rows from the selection in SOLIDWORKS API",image:"sw-callout-spec.png",labels:["adornment","callout","example","note","solidworks api"],"redirect-from":["/2018/04/solidworks-api-adornment-create-multirow-callout.html"]},n=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/callouts/multiple-rows-callout/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/callouts/multiple-rows-callout/index",title:"Create multiple rows callout using SOLIDWORKS API",description:"Example demonstrates how to create a callout with multiple rows from the selection in SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/callouts/multiple-rows-callout/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/callouts/multiple-rows-callout",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/callouts/multiple-rows-callout/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/callouts/multiple-rows-callout/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/callouts/multiple-rows-callout/index.md",tags:[],version:"current",frontMatter:{title:"Create multiple rows callout using SOLIDWORKS API",caption:"Create Multiple Rows Callout",description:"Example demonstrates how to create a callout with multiple rows from the selection in SOLIDWORKS API",image:"sw-callout-spec.png",labels:["adornment","callout","example","note","solidworks api"],"redirect-from":["/2018/04/solidworks-api-adornment-create-multirow-callout.html"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS Macro to display callouts with diameters for edges",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/callouts/circular-edges-display-callouts/"},next:{title:"Managing OLE Objects in models using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/ole-objects/"}},i={},A=[],u={toc:A},c="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,l.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example demonstrates how to create a callout with multiple rows while selecting the object using ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iselectionmgr~createcallout2.html"},"ISelectionMgr::CreateCallout2")," SOLIDWORKS API method."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Callout element specification",src:o(71663).Z,width:"598",height:"332"}),"{ width=640 height=354 }"),(0,r.kt)("p",null,"First row of the displayed callout is not editable (read only). Value of second row can be changed. The changed value will be displayed in the message box."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Macro")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As ModelDoc2\nDim swSelMgr As SelectionMgr\nDim swMathUtilss As MathUtility\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swMathPt As MathPoint\n        Dim dPt(2) As Double\n    \n        dPt(0) = 0#: dPt(1) = 0#: dPt(2) = 0#\n    \n        Set swMathPt = swMathUtils.CreatePoint(dPt)\n    \n        Dim swCallout As SldWorks.Callout\n        Dim swCalloutHandler As CalloutHandler\n        \n        Set swCalloutHandler = New CalloutHandler\n        \n        Set swCallout = swSelMgr.CreateCallout2(2, swCalloutHandler)\n        swCallout.TargetStyle = swCalloutTargetStyle_e.swCalloutTargetStyle_Triangle\n             \n        swCallout.Label2(0) = "Row 1"\n        swCallout.Value(0) = "Value 1"\n        swCallout.SetTargetPoint 0, 0.01, 0.01, 0.01\n        swCallout.ValueInactive(0) = True\n        \n        swCallout.Label2(1) = "Row 1"\n        swCallout.Value(1) = "Value 1"\n        swCallout.SetTargetPoint 1, 0.02, 0.02, 0.02\n        swCallout.ValueInactive(1) = False\n        \n        swCallout.SetLeader True, True\n        swCallout.Position = swMathPt\n                \n        swCallout.Display True\n        \n        Stop\n        \n        swCallout.Display False\n        Set swCallout = Nothing\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n        \nEnd Sub\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"CalloutHandler class")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Implements swCalloutHandler\n\nPrivate Function SwCalloutHandler_OnStringValueChanged(ByVal pManipulator As Object, ByVal RowID As Long, ByVal Text As String) As Boolean\n\n        MsgBox "Text changed at row " & RowID & ": " & Text\n                \n        SwCalloutHandler_OnStringValueChanged = True\n\nEnd Function\n')))}m.isMDXComponent=!0},71663:(t,e,o)=>{o.d(e,{Z:()=>l});const l="data:image/png;base64,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"}}]);