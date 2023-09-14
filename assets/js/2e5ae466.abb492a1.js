"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[14165],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>w});var r=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var d=r.createContext({}),c=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(d.Provider,{value:e},t.children)},l="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,o=t.originalType,d=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),l=c(n),m=s,w=l["".concat(d,".").concat(m)]||l[m]||u[m]||o;return n?r.createElement(w,i(i({ref:e},p),{},{components:n})):r.createElement(w,i({ref:e},p))}));function w(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var d in e)hasOwnProperty.call(e,d)&&(a[d]=e[d]);a.originalType=t,a[l]="string"==typeof t?t:s,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96062:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const o={title:"Add and read attributes with parameters to components using SOLIDWORKS API",caption:"Add Attributes With Parameters To Components And Read Values",description:"Example adds attributes with string values as the parameters to the selected components",image:"two-attributes-features-tree.png",labels:["attributes","data","definition","example","instance","properties","storage"],"redirect-from":["/2018/03/add-attributes-with-parameters-to.html"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/attributes/add-parameters-components/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/attributes/add-parameters-components/index",title:"Add and read attributes with parameters to components using SOLIDWORKS API",description:"Example adds attributes with string values as the parameters to the selected components",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/attributes/add-parameters-components/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/attributes/add-parameters-components",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/attributes/add-parameters-components/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/attributes/add-parameters-components/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/attributes/add-parameters-components/index.md",tags:[],version:"current",frontMatter:{title:"Add and read attributes with parameters to components using SOLIDWORKS API",caption:"Add Attributes With Parameters To Components And Read Values",description:"Example adds attributes with string values as the parameters to the selected components",image:"two-attributes-features-tree.png",labels:["attributes","data","definition","example","instance","properties","storage"],"redirect-from":["/2018/03/add-attributes-with-parameters-to.html"]},sidebar:"tutorialSidebar",previous:{title:"Using attributes in SOLIDWORKS API to store data and selections",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/attributes/"},next:{title:"Create invisible attribute using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/attributes/create-invisible/"}},d={},c=[],p={toc:c},l="wrapper";function u(t){let{components:e,...o}=t;return(0,s.kt)(l,(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This example adds attributes with string values as the parameters to the selected components via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iattributedef.html"},"IAttributeDef")," SOLIDWORKS API interface. Rebuilds the model and reads the attributes back by finding them with ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IComponent2~FindAttribute.html"},"IComponent2::FindAttribute")," method."),(0,s.kt)("p",null,"Attributes are lightweight features which can be attached to SOLIDWORKS entities and store the custom data."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Two attributes features created in the Feature Manager Tree using SOLIDWORKS API",src:n(35901).Z,width:"302",height:"320"}),"{ width=301 height=320 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Enum CreateAtttributeOptions_e\n    Visible = 0\n    Hidden = 1\nEnd Enum\n\nDim swApp As SldWorks.SldWorks\nDim swSelMgr As SldWorks.SelectionMgr\nDim swAssy As SldWorks.AssemblyDoc\nDim swAttDef As SldWorks.AttributeDef\n\nConst ATT_DEF_NAME As String = "SampleAtt"\nConst ATT_PARAM_NAME As String = "RefData"\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swAttDef = swApp.DefineAttribute(ATT_DEF_NAME)\n    \n    \'add single string parameter\n    swAttDef.AddParameter ATT_PARAM_NAME, swParamType_e.swParamTypeString, 0, 0\n\n    If False = swAttDef.Register Then\n        MsgBox "Failed to register attribute"\n        End\n    End If\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    Set swSelMgr = swAssy.SelectionManager\n    \n    \'Create attributes for all selected components\n    AddAttributes\n    \n    swAssy.EditRebuild\n    \n    \'reading the data from attributes\n    ReadAttributes\n    \nEnd Sub\n\nSub AddAttributes()\n    \n    Dim swComp As SldWorks.Component2\n    Dim swAtt As SldWorks.Attribute\n    Dim i As Integer\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n\n        Set swComp = swSelMgr.GetSelectedObjectsComponent3(i, -1)\n        \n        If Not swComp Is Nothing Then\n            \n            Set swAtt = swAttDef.CreateInstance5(swAssy, swComp, ATT_DEF_NAME & i, CreateAtttributeOptions_e.Visible, swInConfigurationOpts_e.swAllConfiguration)\n\n            Dim swParam As SldWorks.Parameter\n\n            Set swParam = swAtt.GetParameter(ATT_PARAM_NAME)\n            \n            swParam.SetStringValue2 "Data for " & swComp.Name2 & " at index " & i, swInConfigurationOpts_e.swAllConfiguration, ""\n            \n        End If\n        \n    Next\n    \nEnd Sub\n\nSub ReadAttributes()\n    \n    Dim swComp As SldWorks.Component2\n    Dim swAtt As SldWorks.Attribute\n    Dim i As Integer\n    \n    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n\n        Set swComp = swSelMgr.GetSelectedObjectsComponent3(i, -1)\n        \n        If Not swComp Is Nothing Then\n            \n            Dim j As Integer\n\n            For j = 0 To 10\n            \n                Set swAtt = swComp.FindAttribute(swAttDef, j)\n                \n                If Not swAtt Is Nothing Then\n                    \n                    Set swParam = swAtt.GetParameter(ATT_PARAM_NAME)\n                    Debug.Print swParam.GetStringValue()\n                    \n                End If\n            \n            Next\n            \n        End If\n        \n    Next\n\nEnd Sub\n\n\n')))}u.isMDXComponent=!0},35901:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/two-attributes-features-tree-70151d1dc698d80360b2d2ea4e997575.png"}}]);