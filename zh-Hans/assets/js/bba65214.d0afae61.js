"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[3272],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>w});var t=o(67294);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,s=function(e,n){if(null==e)return{};var o,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=t.createContext({}),a=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},p=function(e){var n=a(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=a(o),d=s,w=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return o?t.createElement(w,c(c({ref:n},p),{},{components:o})):t.createElement(w,c({ref:n},p))}));function w(e,n){var o=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=o.length,c=new Array(r);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[m]="string"==typeof e?e:s,c[1]=i;for(var a=2;a<r;a++)c[a]=o[a];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},73469:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var t=o(87462),s=(o(67294),o(3905));const r={layout:"sw-tool",title:"count all selected components using SOLIDWORKS API",image:"status-bar-selected-comps.png",labels:["assembly","count components","solidworks api","status bar","utility"],group:"Assembly","redirect-from":["/2018/03/solidworks-api-assembly-count-selected-components.html","/solidworks-api/document/assembly/count-all-selected-components"]},c=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/count-all-selected-components/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/count-all-selected-components/index",title:"count all selected components using SOLIDWORKS API",description:"This macro counts all unique components selected in the assembly using SOLIDWORKS API. Components can be either selected in the features manager tree or in the graphics area.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/count-all-selected-components/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/count-all-selected-components",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/count-all-selected-components/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/count-all-selected-components/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/count-all-selected-components/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"count all selected components using SOLIDWORKS API",image:"status-bar-selected-comps.png",labels:["assembly","count components","solidworks api","status bar","utility"],group:"Assembly","redirect-from":["/2018/03/solidworks-api-assembly-count-selected-components.html","/solidworks-api/document/assembly/count-all-selected-components"]},sidebar:"tutorialSidebar",previous:{title:"Macro to copy path of SOLIDWORKS component to clipboard",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/copy-path/"},next:{title:"VBA macro to export component positions to CSV via SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/export-positions/"}},l={},a=[],p={toc:a},m="wrapper";function u(e){let{components:n,...r}=e;return(0,s.kt)(m,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This macro counts all unique components selected in the assembly using SOLIDWORKS API. Components can be either selected in the features manager tree or in the graphics area."),(0,s.kt)("p",null,"Macro will also count component if only entity of the component is selected (e.g. face or edge) using ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectionMgr.html"},"ISelectionMgr")," SOLIDWORKS API Interface.."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Quantity of selected components displayed in the status bar",src:o(11130).Z,width:"314",height:"320"}),"{ width=320 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swAssy As SldWorks.AssemblyDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n            \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swAssy.SelectionManager\n        \n        Dim swCompsColl As Collection\n        Set swCompsColl = New Collection\n        \n        Dim i As Integer\n        \n        For i = 0 To swSelMgr.GetSelectedObjectCount2(-1)\n            \n            Dim swComp As SldWorks.Component2\n            Set swComp = swSelMgr.GetSelectedObjectsComponent2(i)\n            \n            If Not swComp Is Nothing Then\n                If Not Contains(swCompsColl, swComp) Then \'get only unique components\n                    swCompsColl.Add swComp\n                End If\n            End If\n            \n        Next\n        \n        Dim swFrame As SldWorks.Frame\n        Set swFrame = swApp.Frame\n        swFrame.SetStatusBarText "Selected " & swCompsColl.Count() & " component(s)"\n    \n    Else\n        MsgBox "Please open assembly"\n    End If\n    \nEnd Sub\n\nFunction Contains(coll As Collection, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To coll.Count\n        If coll.item(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\n')))}u.isMDXComponent=!0},11130:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/status-bar-selected-comps-361f4ce8bf20f1eaa6791dd0aef89bd2.png"}}]);