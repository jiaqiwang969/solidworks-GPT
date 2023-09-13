"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[8640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),a=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=a(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=a(n),u=i,p=m["".concat(c,".").concat(u)]||m[u]||A[u]||s;return n?o.createElement(p,r(r({ref:t},d),{},{components:n})):o.createElement(p,r({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var a=2;a<s;a++)r[a]=n[a];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>A,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var o=n(87462),i=(n(67294),n(3905));const s={title:"Wait for user selection in document using SOLIDWORKS API",caption:"Wait For User Selection",description:"2 approaches to wait for the object selected by the user in VBA macro using SOLIDWORKS API",image:"selected-edge.png",labels:["selection","event","notification"]},r=void 0,l={unversionedId:"codestack/solidworks-api/document/selection/wait-for-selection/index",id:"codestack/solidworks-api/document/selection/wait-for-selection/index",title:"Wait for user selection in document using SOLIDWORKS API",description:"2 approaches to wait for the object selected by the user in VBA macro using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/selection/wait-for-selection/index.md",sourceDirName:"codestack/solidworks-api/document/selection/wait-for-selection",slug:"/codestack/solidworks-api/document/selection/wait-for-selection/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/selection/wait-for-selection/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/selection/wait-for-selection/index.md",tags:[],version:"current",frontMatter:{title:"Wait for user selection in document using SOLIDWORKS API",caption:"Wait For User Selection",description:"2 approaches to wait for the object selected by the user in VBA macro using SOLIDWORKS API",image:"selected-edge.png",labels:["selection","event","notification"]},sidebar:"tutorialSidebar",previous:{title:"Select corresponding features in all drawing views",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/selection/view-select-corresponding-feature/"},next:{title:"Set BOM Quantity (Unit Of Measure) property using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/set-bom-quantity-unit-of-measure-property/"}},c={},a=[{value:"Block the thread waiting for selection",id:"block-the-thread-waiting-for-selection",level:2},{value:"Handling the selection event",id:"handling-the-selection-event",level:2},{value:"Macro Module",id:"macro-module",level:3},{value:"EventsListener Class Module",id:"eventslistener-class-module",level:3}],d={toc:a},m="wrapper";function A(e){let{components:t,...s}=e;return(0,i.kt)(m,(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article describes two approaches of waiting for the object selection in SOLIDWORKS document using SOLIDWORKS API in VBA macro."),(0,i.kt)("p",null,"For both approaches specify the filter to wait selection for at the beginning of the macro. Available filter values defined in the ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2014/english/api/swconst/SolidWorks.Interop.swconst~SolidWorks.Interop.swconst.swSelectType_e.html"},"swSelectType_e")," enumeration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Const FILTER As Integer = swSelectType_e.swSelEDGES\n")),(0,i.kt)("h2",{id:"block-the-thread-waiting-for-selection"},"Block the thread waiting for selection"),(0,i.kt)("p",null,"This approach loops the selected objects and blocks the current thread until the required selection is done. ",(0,i.kt)("em",{parentName:"p"},"DoEvents")," function is called in each iteration to continue message queue so SOLIDWORKS window is not locked"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run the macro"),(0,i.kt)("li",{parentName:"ul"},"Select edge (or the object specified in the filter)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selected edge",src:n(63653).Z,width:"418",height:"380"}),"{ width=250 }"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Macro stops execution and the reference of ",(0,i.kt)("em",{parentName:"li"},"swObject")," is set to the selected element")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VBA macro stops once specified object is selected",src:n(92342).Z,width:"831",height:"484"}),"{ width=550 }"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILTER As Integer = swSelectType_e.swSelEDGES\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        swModel.ClearSelection2 True\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swObject As Object\n        \n        While swObject Is Nothing\n            \n            Dim i As Integer\n            \n            For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n                If swSelMgr.GetSelectedObjectType3(i, -1) = FILTER Then\n                    Set swObject = swSelMgr.GetSelectedObject6(i, -1)\n                End If\n            Next\n            DoEvents\n        Wend\n        \n        Stop\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n')),(0,i.kt)("h2",{id:"handling-the-selection-event"},"Handling the selection event"),(0,i.kt)("p",null,"This approach uses the SOLIDWORKS notifications to handle the selection. This is more preferable option as it doesn't block the main thread, however this option requires adding of class module and additional synchronization (depending on the requirements) as events are handled asynchronously."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create macro module and class module as shown below")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Macro solution tree",src:n(23940).Z,width:"225",height:"110"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run macro and select edge (or the object specified in the filter)"),(0,i.kt)("li",{parentName:"ul"},"Similar to the previous approach code stops after the selection and the reference of ",(0,i.kt)("em",{parentName:"li"},"swObject")," is set to the selected element")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VBA macro stops once specified object is selected via notification",src:n(80797).Z,width:"825",height:"448"}),"{ width=550 }"),(0,i.kt)("h3",{id:"macro-module"},"Macro Module"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILTER As Integer = swSelectType_e.swSelEDGES\n\nDim swApp As SldWorks.SldWorks\nDim swEventsListener As EventsListener\n\nSub main()\n\n    Set swApp = Application.SldWorks\n        \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Set swEventsListener = New EventsListener\n        swEventsListener.WaitForSelection swModel, FILTER\n        \n    Else\n        MsgBox "Please open the model"\n    End If\nEnd Sub\n')),(0,i.kt)("h3",{id:"eventslistener-class-module"},"EventsListener Class Module"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim WithEvents swPart As SldWorks.PartDoc\nDim WithEvents swAssy As SldWorks.AssemblyDoc\nDim WithEvents swDraw As SldWorks.DrawingDoc\n\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\n\nDim swSelFilter As Integer\n\nSub WaitForSelection(model As SldWorks.ModelDoc2, selFilter As Integer)\n        \n    Set swModel = model\n    swSelFilter = selFilter\n            \n    Set swSelMgr = swModel.SelectionManager\n            \n    If TypeOf model Is SldWorks.PartDoc Then\n        Set swPart = model\n    ElseIf TypeOf model Is SldWorks.AssemblyDoc Then\n        Set swAssy = model\n    ElseIf TypeOf model Is SldWorks.DrawingDoc Then\n        Set swDraw = model\n    End If\n    \nEnd Sub\n\nPrivate Function swPart_NewSelectionNotify() As Long\n    HandleSelection\nEnd Function\n\nPrivate Function swAssy_NewSelectionNotify() As Long\n    HandleSelection\nEnd Function\n\nPrivate Function swDraw_NewSelectionNotify() As Long\n    HandleSelection\nEnd Function\n\nSub HandleSelection()\n    \n    Dim selCount As Integer\n    selCount = swSelMgr.GetSelectedObjectCount2(-1)\n    \n    If selCount > 0 Then\n        If swSelMgr.GetSelectedObjectType3(selCount, -1) = swSelFilter Then\n            Dim swObject As Object\n            Set swObject = swSelMgr.GetSelectedObject6(selCount, -1)\n            Stop\n        End If\n    End If\nEnd Sub\n")))}A.isMDXComponent=!0},23940:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},63653:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaIAAAF8CAMAAAC64U8CAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQEBAV25/3Hm/0xMTUR2qquvvLpyFaW42nF3hSAgIz9Zdf7+/pabrvy2W8bP5mdqcE5uj3R0dGZqd2pteW5webrp/8C6t6aEWIObuqfS/3xTHDMzNBAREruxqGnT/96GEsPEyMTQ6rzD2aaorJOWoVAyCnaAksLa/VNUVoeHh7/8/5vw/02b6Le90oHf/6+PZMbHyoOy6Ky40pGRkZ2pw6vE6gUGBn6Qqte0hW9TMN+UMpiesTw9Q9jY3cHJ3oimyszZ84uLixYWGG/i/6OwzH+8/D8nB9X7/9js/76/w9Dd+P3LiXN7il5eXmVKKLvR8r3M6XeEl5qjuo6OjsjJzY9nNcq8tLK/24Sev7aFSKysrIfq/ykpLZKOie+UG4Wp06uzyZSZrLvJ45phFiEUA9ne6xEKAf+kLd/g47T9/8zp/4CVssDBxa/J8srb+rLS/tPS0qOrwsTU8myFpWM8CMLG0Zqam2ZwgHbT/+X+/9vz/29yfXjj/7Ozs5fa/7u7u8PL4XnL/7nU+6i/4qmrsbK5zWDD/0NERnVnVVxfZ9C3n3R+j3l6fLu9wZWx183h/rGchtHX5v7Bcm6v88nT6tLx/3yOp5acsFtcZNLj/svMz5qgtUVIUHl+ip+luY5XDqGuyX+Ci7O70futRhodIXDk/woLCyAlLHvD/9CMM8bO46br/+ry+LjF4JqHbaK00rvZ/qmruHuLorDN+HmInXLb/6u82m90f3eClYWNn1Q7HJumv7LD44G28bPI62lWP4St3YWhw3B1gai10KWlpqTg/6hpF//XoUhJUGFiY4OImOq8frj0/6etwmJlccOoh2TL/56sx4GYtpLs/wwNDrrA1cPh/6uxxNLGv7/G26+2yolwUE1PVdrb4CMjJYrf/6KpvRkaGtTq/5FhImva/+bo7dvk9rXB1X5cL4ejx8rW78bm/2JkaqGnsq+jmd35/3iFmYjF/s58ETM0N37n/6f2/9/f4Ons8sCENnNFCVNVXP+aFTIfBcz+/3+TrgAAAMqnwTwAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAa60lEQVR4Xu3dC5hUxZXA8UYXhRAkKEaTmaCEhwouAdHxkcHIKGAU8IFGBaJRUEExjsZFiINAdJkQiW6I6MiChhUGVHAdFSUoBmE0wCoisCACA6wiathFMzwMI357qurUfXTf7lu3um7fGjj/T+FOgwHr91X17evRpFpQlkdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1kdE1hc7UYr/CuJbSqf4l04Q8UtKpwKsHfwSJJRHhSCiUy6vCrF6RJRXtIusrxBEBflVDt3iXzz+K5CRfrGvHX0uyjdaOusjIusjIusjIusjIuuLm2h/qhdeUZrFTdSrYzFeUZrFTdT87/fQNsqvmIkG9Wk4id7u8ivm9at8u6GBtlF+xUu075aGBtpGeRbv8q34BxDRNsqveIlS1zMi2kZ5FevqjerIhGAbtcYXKI1iJSo6ShDRNsqnOBdv3NdCiLZRXsVJdOpQFIJttB9foyIXI9H+FAJB97TCF6nIxUjU+pavhw0bBj4piJ7UaRfnQTdt2r59209q6DMOv6a0ipOI1fykho6D8JrSKm6ior8TUZ7FTVR5VMM9o/Ca0oqIrC9uohVH3fp9IsorIrK+uIlav33r0NPwmtIqbqLTht76Nj2gyysisr64iWo/evorIsorIrK+uInGfv/pZ3bhNaVVAYjO64/XlFZxE40jonyLm+iqAU+fdyReU1rFTVT+acunV+A1pVXcRFvObdnyAF5TWhGR9cVNNHxAy5b0XpRXcRO1WNSy5SK8pLSKnejcKVMG4CWlVexEA6ZMORcvKa2IyPpiJ9o1ZcqnO/Ca0il2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"},80797:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/selection-event-stop-execution-ec120e4ab7d11589ab5872ed3fd4f2e9.png"},92342:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/selection-stop-execution-36c80a52a27ed26e6e40f30d8f71cddd.png"}}]);