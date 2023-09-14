"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[12381],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>m});var o=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,o,n=function(e,t){if(null==e)return{};var l,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)l=a[o],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)l=a[o],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},d=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},A=o.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(l),A=n,m=u["".concat(i,".").concat(A)]||u[A]||g[A]||a;return l?o.createElement(m,r(r({ref:t},d),{},{components:l})):o.createElement(m,r({ref:t},d))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,r=new Array(a);r[0]=A;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<a;c++)r[c]=l[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,l)}A.displayName="MDXCreateElement"},57939:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=l(87462),n=(l(67294),l(3905));const a={layout:"sw-tool",title:"SOLIDWORKS Macro to display callouts with diameters for edges",caption:"Display Callouts With Diameters For All Selected Circular Edges",description:"Macro will display the callouts with the diameter values of all selected circular edges in the 3D model",image:"edge-callout.svg",labels:["adornment","callout","diameter","edge","example","macro","solidworks api","unit conversion"],group:"Model","redirect-from":["/2018/03/display-callouts-with-diameters-for-all.html"]},r=void 0,s={unversionedId:"codestack-clone/solidworks-api/adornment/callouts/circular-edges-display-callouts/index",id:"codestack-clone/solidworks-api/adornment/callouts/circular-edges-display-callouts/index",title:"SOLIDWORKS Macro to display callouts with diameters for edges",description:"Macro will display the callouts with the diameter values of all selected circular edges in the 3D model",source:"@site/docs/codestack-clone/solidworks-api/adornment/callouts/circular-edges-display-callouts/index.md",sourceDirName:"codestack-clone/solidworks-api/adornment/callouts/circular-edges-display-callouts",slug:"/codestack-clone/solidworks-api/adornment/callouts/circular-edges-display-callouts/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/adornment/callouts/circular-edges-display-callouts/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/adornment/callouts/circular-edges-display-callouts/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"SOLIDWORKS Macro to display callouts with diameters for edges",caption:"Display Callouts With Diameters For All Selected Circular Edges",description:"Macro will display the callouts with the diameter values of all selected circular edges in the 3D model",image:"edge-callout.svg",labels:["adornment","callout","diameter","edge","example","macro","solidworks api","unit conversion"],group:"Model","redirect-from":["/2018/03/display-callouts-with-diameters-for-all.html"]},sidebar:"tutorialSidebar",previous:{title:"Using Callouts object for model annotation in SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/adornment/callouts/"},next:{title:"Create multiple rows callout using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/adornment/callouts/multiple-rows-callout/"}},i={},c=[],d={toc:c},u="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This macro will display the callouts with the diameter values of all selected circular edges in the 3D model using ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iselectionmgr~createcallout2.html"},"ISelectionMgr::CreateCallout2")," SOLIDWORKS API method."),(0,n.kt)("p",null,"This can be useful while inspecting the model and it is required to see multiple diameters at the same time."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Diameters displayed in the callout for selected holes",src:l(92470).Z,width:"400",height:"292"}),"{ width=400 height=290 }"),(0,n.kt)("p",null,"The callout is a visual element in SOLIDWORKS which displays data organized in key-value pairs (single or multiple rows). The callout elements are used in some standard SOLIDWORKS tools such as ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/solidworks/sldworks/t_using_the_measure_tool.htm"},"Measure tool"),". Usually callouts are attached to the selection and destroyed once the object is deselected."),(0,n.kt)("p",null,"To run the macro:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select circular edges and run the macro"),(0,n.kt)("li",{parentName:"ol"},"Callouts with the diameter value in the model's units are displayed for all circular edges"),(0,n.kt)("li",{parentName:"ol"},"Clear the selection to remove the callouts")),(0,n.kt)("p",null,"Create new macro and copy the following code into the macro's module:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Macro module in VBA editor",src:l(26697).Z,width:"640",height:"232"}),"{ width=640 height=230 }"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swCalloutHandler As New HoleDiamCalloutHandler\n        \n        Dim i As Integer\n        \n        Dim swCalloutsCollection As New Collection\n        \n        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n            If swSelMgr.GetSelectedObjectType3(i, -1) = swSelectType_e.swSelEDGES Then\n            \n                Dim swEdge As SldWorks.Edge\n                \n                Set swEdge = swSelMgr.GetSelectedObject6(i, -1)\n                \n                Dim swCurve As SldWorks.Curve\n                \n                Set swCurve = swEdge.GetCurve\n                \n                If swCurve.IsCircle() Then\n                \n                    Dim vParams As Variant\n                    vParams = swCurve.CircleParams\n                    \n                    Dim diam As Double\n                    diam = vParams(6) * 2\n                    \n                    Dim swUserUnit As SldWorks.UserUnit\n                    Set swUserUnit = swModel.GetUserUnit(swUserUnitsType_e.swLengthUnit)\n                    \n                    Dim diamVal As String\n                    diamVal = swUserUnit.ConvertToUserUnit(diam, False, False)\n                    \n                    Dim swCallout As SldWorks.Callout\n                    Set swCallout = swSelMgr.CreateCallout2(1, swCalloutHandler)\n                    \n                    swCallout.Label2(0) = "Diameter"\n                    swCallout.Value(0) = diamVal\n                    \n                    swSelMgr.SetCallout i, swCallout\n                    \n                    swCalloutsCollection.Add swCallout\n                \n                End If\n                \n            End If\n            \n        Next\n        \n        While swSelMgr.GetSelectedObjectCount2(-1) > 0\n            DoEvents\n        Wend\n    \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n')),(0,n.kt)("p",null,"Create new class module and name it ",(0,n.kt)("em",{parentName:"p"},"HoleDiamCalloutHandler."),"  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Adding class module to VBA macro",src:l(12379).Z,width:"320",height:"220"}),"{ width=320 height=220 }"),(0,n.kt)("p",null,"Copy the following code in there:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"Implements swCalloutHandler\n\nPrivate Function swCalloutHandler_OnStringValueChanged(ByVal pManipulator As Object, ByVal RowID As Long, ByVal Text As String) As Boolean\n\nEnd Function\n\n")))}g.isMDXComponent=!0},92470:(e,t,l)=>{l.d(t,{Z:()=>o});const o=l.p+"assets/images/hole-diams-da16ed536541491aca2651b7e1f3aa0c.png"},12379:(e,t,l)=>{l.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADcCAMAAAA2nYgUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQEBA83NPAAjovXRhxFn3+sAAKQFpGkDD33P//7+/rkYANGhhmeV3GpZkdTg7bKyrOHghqYAXe4+P2FGsOnj5ABJAJrc/qWko5Ky4nsAe9e1opyWatLS0p3Q4E1BiUUkCXNzc51+geny9WybtMC6nZ1dBXSEie0aIkB53/uMa5qpwanZnOzZx5Sv/WNjY590c0YmW5d/nMHc70FjtO6MjLnR6WCe/+Lq3MePDAAAWNnq+QBVxgA1OMyXWdzKu6GmrJu4zoF+ru72+2E9Orza/K1xUmpwivrk5Gxsa/724cq8ppqatLvK2bm7v5ZkM/Dlzi06QzGY/8HLyH6cwCtQkod6ZMPf/VVsiKzB3fTw7MeedXWz/vDw8ARpfIeHh+Pt+NLZ2X2j5mE7XDZWbr3AzYRthMRgit/BupycnKO/+bOkj2aHwsHS4UFAQIOJxlOMt7eHcuazCsHK05htSYGjzntGC/jVsLjS99Li+gCR/3qzcKrN8O61i6+2yE2c/tSyiYVZP7OaW+LQw6ayt2FGdYRmcs1/SzkAQMSwcEYABAA1acrc/fzs0x+VyYFlWqysrRxvjc4yNcHAwbJzAUB6oq3d7LKrvOLSqMDd/EtQWkySQYqQleno5a93Ndf4/MPs/pVvYWZ+q4MAg83Dxbq6AOns8pC7/cnJy4J9efC/YKbJgwRTmheW/1Wd54OPqPDY1NSyl+X2/WRoeuTc17/v9Wujz2l7kenp6qTD7KfIzYyouLmfcH+y/qCIdwC6ANWesWRbR7K0uLZBtvfrtjR+ALSqncrW4baXl62Ntld0ubSEXLiRgn234pTA4rDN4nCNrejzzyA7YlBLSPTs5NTc4795mtfNxcbT6c3O0fHm25qShvbDwUlXj6nM/eSzTm6t/oi504RSJWyX8dbR3OLi48G3sr+lr8rc7FZha7/N29a5d5rN9nZUenpAV1WjvXeImjc+YuDl6dStt9rX1LPDz/r38tRsMrDh/vOXl1Zundra2sRbGy1qn9DBulyNjwAAANv4dVIAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAfcUlEQVR4Xu2dD1wTV77o3dvun99icV8fT7g2diP+Wc2NWuli1+yKOCKaAkVBI2AatMUrQqpcoIKriEZs3ZqV7vgHfaEgj9WwVxcMKrFY75rrk61/wFZcSFipbhuk0bYUYS5rbrOfe87MCQT5IyQEQsxXkznnzICTr79zZubkzJkxgYh4X+hJL2UhW5b3y5a9ZMNhQApSqdTMl5nRohMZWTmMeAQ6SN8CjWQJ5oiICC6DBGKFnRqPb8fvq+eyGcTTI5Cho+Lx8vSJPgRG6HSJOl0ETprX/CTvJ7xcXa4eCfxR5vaT6LV8y8nly09uKZyLFlvGzzx5kvW6xXUEGhaWhm0laSjzJonHaZLxPyTJ/phUUn6GJDvxieN+vbQPgTT7zgrU53/ve9+7r4xsi0ACx8fP3LJXtH314Q1I3F7R3OPLV98ZPxMl5245vnfvclcRKF5IwV/WAhORZUJRMmdjVpaGrAGhLqtOU6wTocQtyCuaA2CJCRoXDoaItqZcEdnoMa6FpQPTpLeMCwBFu0LXTqGybCxQoZM/WaAs19fX9/Llpd9jBTZmrG7smFv4kWTmjzLmFs4t3D7++HiUvCPZnnlng8sIZMIytMcAPvZmHlYDPIyRogyH+LZIsTszbzLaZlIBfHAm+wwo3xZIp6RD3HvayFBiUCnDnOMyoNzt36CBzfP0tQ2BzNQWad4VVMgKZIRFfQk0ZWVlmWitlgd0rVKpNNT+/giNBc7cmzGzcHXmlh9tKPwcVWEkcOb4mYWZe0V3JJkbXKcKMwkRpZniE4JDh/43BevrSSmCubAAxVlsNHVIvA6Uj2DzRhDvRuUNBdsmooi6y23VnVNnwSscNkejn74BVwtQRBYSgaBc2IdAndZoNGrH4aQ6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"},26697:(e,t,l)=>{l.d(t,{Z:()=>o});const o=l.p+"assets/images/macro-module-51c1365bced5ca9b5cf11c3a39ff0935.png"}}]);