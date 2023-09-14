"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[18211],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>w});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=o.createContext({}),a=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=a(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=a(t),m=s,w=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?o.createElement(w,i(i({ref:n},p),{},{components:t})):o.createElement(w,i({ref:n},p))}));function w(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:s,i[1]=c;for(var a=2;a<r;a++)i[a]=t[a];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=t(87462),s=(t(67294),t(3905));const r={layout:"sw-tool",title:"count all selected components using SOLIDWORKS API",caption:"Count All Selected Components",description:"Macro counts all unique components selected in the assembly and displays the result in the commands bar",image:"status-bar-selected-comps.png",labels:["assembly","count components","solidworks api","status bar","utility"],group:"Assembly","redirect-from":["/2018/03/solidworks-api-assembly-count-selected-components.html","/solidworks-api/document/assembly/count-all-selected-components"]},i=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/count-all-selected-components/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/count-all-selected-components/index",title:"count all selected components using SOLIDWORKS API",description:"Macro counts all unique components selected in the assembly and displays the result in the commands bar",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/count-all-selected-components/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/count-all-selected-components",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/count-all-selected-components/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/count-all-selected-components/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/count-all-selected-components/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"count all selected components using SOLIDWORKS API",caption:"Count All Selected Components",description:"Macro counts all unique components selected in the assembly and displays the result in the commands bar",image:"status-bar-selected-comps.png",labels:["assembly","count components","solidworks api","status bar","utility"],group:"Assembly","redirect-from":["/2018/03/solidworks-api-assembly-count-selected-components.html","/solidworks-api/document/assembly/count-all-selected-components"]},sidebar:"tutorialSidebar",previous:{title:"Copy custom properties from the drawing view to SOLIDWORKS drawing file",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-view-properties/"},next:{title:"SOLIDWORKS macro to create configuration with average dimension values",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-average-dimension-values-configuration/"}},l={},a=[],p={toc:a},u="wrapper";function d(e){let{components:n,...r}=e;return(0,s.kt)(u,(0,o.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This macro counts all unique components selected in the assembly using SOLIDWORKS API. Components can be either selected in the features manager tree or in the graphics area."),(0,s.kt)("p",null,"Macro will also count component if only entity of the component is selected (e.g. face or edge) using ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectionMgr.html"},"ISelectionMgr")," SOLIDWORKS API Interface.."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Quantity of selected components displayed in the status bar",src:t(55373).Z,width:"314",height:"320"}),"{ width=320 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swAssy As SldWorks.AssemblyDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n            \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swAssy.SelectionManager\n        \n        Dim swCompsColl As Collection\n        Set swCompsColl = New Collection\n        \n        Dim i As Integer\n        \n        For i = 0 To swSelMgr.GetSelectedObjectCount2(-1)\n            \n            Dim swComp As SldWorks.Component2\n            Set swComp = swSelMgr.GetSelectedObjectsComponent2(i)\n            \n            If Not swComp Is Nothing Then\n                If Not Contains(swCompsColl, swComp) Then \'get only unique components\n                    swCompsColl.Add swComp\n                End If\n            End If\n            \n        Next\n        \n        Dim swFrame As SldWorks.Frame\n        Set swFrame = swApp.Frame\n        swFrame.SetStatusBarText "Selected " & swCompsColl.Count() & " component(s)"\n    \n    Else\n        MsgBox "Please open assembly"\n    End If\n    \nEnd Sub\n\nFunction Contains(coll As Collection, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To coll.Count\n        If coll.item(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\n')))}d.isMDXComponent=!0},55373:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/status-bar-selected-comps-361f4ce8bf20f1eaa6791dd0aef89bd2.png"}}]);