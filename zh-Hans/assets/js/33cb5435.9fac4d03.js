"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[23462],{3905:(e,n,s)=>{s.d(n,{Zo:()=>p,kt:()=>w});var o=s(67294);function t(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function i(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,o)}return s}function r(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?i(Object(s),!0).forEach((function(n){t(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function c(e,n){if(null==e)return{};var s,o,t=function(e,n){if(null==e)return{};var s,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)s=i[o],n.indexOf(s)>=0||(t[s]=e[s]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)s=i[o],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}var l=o.createContext({}),a=function(e){var n=o.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):r(r({},n),e)),s},p=function(e){var n=a(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var s=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=a(s),u=t,w=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return s?o.createElement(w,r(r({ref:n},p),{},{components:s})):o.createElement(w,r({ref:n},p))}));function w(e,n){var s=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=s.length,r=new Array(i);r[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[m]="string"==typeof e?e:t,r[1]=c;for(var a=2;a<i;a++)r[a]=s[a];return o.createElement.apply(null,r)}return o.createElement.apply(null,s)}u.displayName="MDXCreateElement"},943:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=s(87462),t=(s(67294),s(3905));const i={title:"Get and select all visible components in assembly using SOLIDWORKS API",caption:"Get And Select Visible Components Only",description:"VBA macro example to get and select all visible components (not suppressed and not hidden) using SOLIDWORKS API",image:"components-tree.png",labels:["components","suppressed","hidden","select"]},r=void 0,c={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible/index",title:"Get and select all visible components in assembly using SOLIDWORKS API",description:"VBA macro example to get and select all visible components (not suppressed and not hidden) using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-visible/index.md",tags:[],version:"current",frontMatter:{title:"Get and select all visible components in assembly using SOLIDWORKS API",caption:"Get And Select Visible Components Only",description:"VBA macro example to get and select all visible components (not suppressed and not hidden) using SOLIDWORKS API",image:"components-tree.png",labels:["components","suppressed","hidden","select"]},sidebar:"tutorialSidebar",previous:{title:"Get instance Id of assembly component using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/get-instance-id/"},next:{title:"Batch add components and position them in the grid using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/insert-position/"}},l={},a=[],p={toc:a},m="wrapper";function d(e){let{components:n,...i}=e;return(0,t.kt)(m,(0,o.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Components selected in the feature manager tree",src:s(70743).Z,width:"277",height:"695"}),"{ width=350 }"),(0,t.kt)("p",null,"This VBA macro gets all the pointers to the visible (not suppressed and not hidden) components in the active assembly. All the components are selected using multi-select SOLIDWORKS API."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        Dim vComps As Variant\n        vComps = GetVisibleComponents(swAssy, False)\n        swAssy.Extension.MultiSelect2 vComps, False, Nothing\n    Else\n        MsgBox "Please open assembly document"\n    End If\n    \nEnd Sub\n\nFunction GetVisibleComponents(assy As SldWorks.AssemblyDoc, topLevelOnly As Boolean) As Variant\n    \n    Dim swVisComps() As SldWorks.Component2\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim vComps As Variant\n    vComps = assy.GetComponents(topLevelOnly)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        \n        If False = swComp.IsSuppressed() And IsVisible(swComp) Then\n            \n            If Not isInit Then\n                ReDim swVisComps(0)\n                isInit = True\n            Else\n                ReDim Preserve swVisComps(UBound(swVisComps) + 1)\n            End If\n            \n            Set swVisComps(UBound(swVisComps)) = swComp\n        \n        End If\n        \n    Next\n    \n    GetVisibleComponents = swVisComps\n    \nEnd Function\n\nFunction IsVisible(comp As SldWorks.Component2) As Boolean\n    \n    Dim swThisComp As SldWorks.Component2\n    Set swThisComp = comp\n    \n    While Not swThisComp Is Nothing\n        If swThisComp.Visible = swComponentVisibilityState_e.swComponentHidden Then\n            IsVisible = False\n            Exit Function\n        End If\n        Set swThisComp = swThisComp.GetParent\n    Wend\n    \n    IsVisible = True\n    \nEnd Function\n')))}d.isMDXComponent=!0},70743:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/components-tree-c0f2d8ea25915719e670626154d203ea.png"}}]);