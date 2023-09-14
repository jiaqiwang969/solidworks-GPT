"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[5132],{3905:(e,n,o)=>{o.d(n,{Zo:()=>l,kt:()=>u});var t=o(67294);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,s=function(e,n){if(null==e)return{};var o,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var c=t.createContext({}),p=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},w=t.forwardRef((function(e,n){var o=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(o),w=s,u=m["".concat(c,".").concat(w)]||m[w]||d[w]||r;return o?t.createElement(u,i(i({ref:n},l),{},{components:o})):t.createElement(u,i({ref:n},l))}));function u(e,n){var o=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=o.length,i=new Array(r);i[0]=w;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[m]="string"==typeof e?e:s,i[1]=a;for(var p=2;p<r;p++)i[p]=o[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}w.displayName="MDXCreateElement"},55973:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var t=o(87462),s=(o(67294),o(3905));const r={layout:"sw-tool",title:"Open all selected components in positions in new windows",caption:"Open Components In Positions",description:"VBA macro to open each selected component in the assembly in the separate window in the same position they appear in the current assembly view",image:"open-in-position.svg",labels:["position","component"],group:"Assembly"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/open-in-position/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/open-in-position/index",title:"Open all selected components in positions in new windows",description:"VBA macro to open each selected component in the assembly in the separate window in the same position they appear in the current assembly view",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/open-in-position/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/open-in-position",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/open-in-position/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/open-in-position/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/open-in-position/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Open all selected components in positions in new windows",caption:"Open Components In Positions",description:"VBA macro to open each selected component in the assembly in the separate window in the same position they appear in the current assembly view",image:"open-in-position.svg",labels:["position","component"],group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"Copy component name to the component reference using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/name-to-component-reference/"},next:{title:"SOLIDWORKS macro to change configuration specific properties for component in pattern",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/pattern-seed-configuration-properties/"}},c={},p=[],l={toc:p},m="wrapper";function d(e){let{components:n,...r}=e;return(0,s.kt)(m,(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This VBA macro opens all selected components in the active assembly in their own windows in the same position as they appear in the original SOLIDWORKS assembly."),(0,s.kt)("p",null,"This macro emulates the ",(0,s.kt)("em",{parentName:"p"},"Open Part In Position")," command in SOLIDWORKS toolbar, but allows to open multiple selected components at the same time."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Open part in position command",src:o(71025).Z,width:"515",height:"296"}),"{ width=250 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n    \nSub main()\n \n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n\n    Set swAssy = swApp.ActiveDoc\n    \ntry:\n    \n    On Error GoTo catch\n    \n    If Not swAssy Is Nothing Then\n    \n        Dim swSelMgr As SldWorks.SelectionMgr\n       \n        Set swSelMgr = swAssy.SelectionManager\n        \n        Dim i As Integer\n        \n        Dim hasCompSel As Boolean\n        hasCompSel = False\n        \n        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n        \n            Dim swComp As SldWorks.Component2\n        \n            Set swComp = swSelMgr.GetSelectedObjectsComponent3(i, -1)\n        \n            If Not swComp Is Nothing Then\n             \n                hasCompSel = True\n                \n                Dim swCompTransform As SldWorks.MathTransform\n                Dim swViewTransform As SldWorks.MathTransform\n                Dim swTotalTransform As SldWorks.MathTransform\n             \n                Set swCompTransform = swComp.Transform2\n             \n                Set swViewTransform = swAssy.ActiveView.Orientation3\n             \n                Set swTotalTransform = swCompTransform.Multiply(swViewTransform)\n                \n                OpenComponentWithTransforms swComp, swTotalTransform\n                \n            End If\n            \n        Next\n        \n        If Not hasCompSel Then\n            Err.Raise vbError, , "No components selected"\n        End If\n        \n    Else\n        Err.Raise vbError, , "Please open assembly"\n    End If\n    \n    GoTo finally\ncatch:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally:\n\nEnd Sub\n\nSub OpenComponentWithTransforms(comp As SldWorks.Component2, transform As SldWorks.MathTransform)\n    \n    Dim swRefModel As SldWorks.ModelDoc2\n    \n    Dim swDocSpec As SldWorks.DocumentSpecification\n    Set swDocSpec = swApp.GetOpenDocSpec(comp.GetPathName())\n    \n    swDocSpec.Silent = True\n    Set swRefModel = swApp.OpenDoc7(swDocSpec)\n    \n    Dim errs As Long\n    Dim warns As Long\n    \n    If Not swRefModel Is Nothing Then\n        \n        If Not swApp.ActiveDoc Is swRefModel Then\n            \n            Set swRefModel = swApp.ActivateDoc3(swRefModel.GetTitle(), False, swRebuildOnActivation_e.swUserDecision, errs)\n            \n            If swRefModel Is Nothing Then\n                Err.Raise vbError, , "Cannot activate the referenced document. Error code:" & errs\n            End If\n        End If\n        \n        Dim swView As SldWorks.ModelView\n        Set swView = swRefModel.ActiveView\n        swView.Orientation3 = transform\n        swRefModel.ViewZoomtofit2\n        \n    Else\n        Err.Raise vbError, , "Cannot open the referenced document. Error code:" & swDocSpec.Error\n    End If\n\nEnd Sub\n')))}d.isMDXComponent=!0},71025:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/open-part-in-position-command-7bc75f8c074d3f6905a1a7cb43358761.png"}}]);