"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[23985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=s.createContext({}),l=function(e){var t=s.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,w=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return n?s.createElement(w,r(r({ref:t},p),{},{components:n})):s.createElement(w,r({ref:t},p))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[d]="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(87462),o=(n(67294),n(3905));const i={title:"Select components associated with attributes using SOLIDWORKS API",caption:"Select The Components Associated With Attributes On Select",description:"Example attaches to the selection events of the active assembly",labels:["attribute","component","data","example","selection","solidworks api"],"redirect-from":["/2018/03/select-components-associated-with.html"]},r=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-associated-components/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-associated-components/index",title:"Select components associated with attributes using SOLIDWORKS API",description:"Example attaches to the selection events of the active assembly",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-associated-components/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-associated-components",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-associated-components/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-associated-components/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-associated-components/index.md",tags:[],version:"current",frontMatter:{title:"Select components associated with attributes using SOLIDWORKS API",caption:"Select The Components Associated With Attributes On Select",description:"Example attaches to the selection events of the active assembly",labels:["attribute","component","data","example","selection","solidworks api"],"redirect-from":["/2018/03/select-components-associated-with.html"]},sidebar:"tutorialSidebar",previous:{title:"Select all sketch elements using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-all-sketch-elements/"},next:{title:"Selecting SOLIDWORKS objects by name and coordinates using API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-by-id/"}},a={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example attaches to the selection SOLIDWORKS API events of the active assembly via ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dassemblydocevents_newselectionnotifyeventhandler.html"},"NewSelectionNotify")," notification."),(0,o.kt)("p",null,"If the attribute is selected and there is a component associated with this attribute - this component will be selected in the tree.  "),(0,o.kt)("p",null,"Macro will stop once the active assembly is closed.  "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Macro module")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\nDim swEventsListener As EventsListener\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swEventsListener = New EventsListener\n        \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    swEventsListener.SetAssembly swAssy\n    \n    While swApp.ActiveDoc Is swAssy\n        DoEvents\n    Wend\n        \nEnd Sub\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"EventsListener class")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swModel As SldWorks.ModelDoc2\nDim WithEvents swAssy As SldWorks.AssemblyDoc\nDim swSelMgr As SldWorks.SelectionMgr\n\nPrivate Function swAssy_NewSelectionNotify() As Long\n    \n    Dim swFeat As SldWorks.Feature\n    Dim swAtt As SldWorks.Attribute\n    Dim swComp As SldWorks.Component2\n\n    Dim i As Integer\n    \n    i = swSelMgr.GetSelectedObjectCount2(-1)\n    \n    If i > 0 Then\n        \n        On Error Resume Next\n        \n        Set swFeat = swSelMgr.GetSelectedObject6(i, -1)\n        \n        If Not swFeat Is Nothing Then\n        \n            If swFeat.GetTypeName2 = "Attribute" Then\n            \n                Set swAtt = swFeat.GetSpecificFeature2\n            \n                Set swComp = swAtt.GetComponent()\n            \n                swComp.Select4 True, Nothing, False\n                \n            End If\n            \n        End If\n        \n    End If\n    \n    Set swFeat = Nothing\n    \nEnd Function\n\nSub SetAssembly(assy As SldWorks.AssemblyDoc)\n        \n    Set swAssy = assy\n    \n    Set swModel = swAssy\n        \n    Set swSelMgr = swModel.SelectionManager\n       \nEnd Sub\n\n\n')))}u.isMDXComponent=!0}}]);