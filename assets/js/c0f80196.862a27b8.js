"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[49716],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>u});var s=o(67294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,s)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,s,t=function(e,n){if(null==e)return{};var o,s,t={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var c=s.createContext({}),l=function(e){var n=s.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},p=function(e){var n=l(e.components);return s.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},w=s.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(o),w=t,u=m["".concat(c,".").concat(w)]||m[w]||d[w]||r;return o?s.createElement(u,a(a({ref:n},p),{},{components:o})):s.createElement(u,a({ref:n},p))}));function u(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,a=new Array(r);a[0]=w;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:t,a[1]=i;for(var l=2;l<r;l++)a[l]=o[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,o)}w.displayName="MDXCreateElement"},75565:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=o(87462),t=(o(67294),o(3905));const r={title:"VBA Macro calls Show All Components command from SOLIDWORKS API",caption:"Show All Components (Show With Dependents)",description:"Example demonstrates how to call the Show With Dependents command for components or assembly using SOLIDWORKS API",image:"assembly-show-with-dependents.png",labels:["assembly","components","show"]},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/show-with-dependents/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/show-with-dependents/index",title:"VBA Macro calls Show All Components command from SOLIDWORKS API",description:"Example demonstrates how to call the Show With Dependents command for components or assembly using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/show-with-dependents/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/show-with-dependents",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/show-with-dependents/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/show-with-dependents/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/show-with-dependents/index.md",tags:[],version:"current",frontMatter:{title:"VBA Macro calls Show All Components command from SOLIDWORKS API",caption:"Show All Components (Show With Dependents)",description:"Example demonstrates how to call the Show With Dependents command for components or assembly using SOLIDWORKS API",image:"assembly-show-with-dependents.png",labels:["assembly","components","show"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS Macro shows selected assembly component in the Window folder",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/show-selected-assembly-component-window-folder/"},next:{title:"Traversing the components tree using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/traversing-tree/"}},c={},l=[],p={toc:l},m="wrapper";function d(e){let{components:n,...r}=e;return(0,t.kt)(m,(0,s.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Show With Dependents command in assembly",src:o(12820).Z,width:"363",height:"461"}),"{ width=250 }"),(0,t.kt)("p",null,"This example demonstrates how to call the 'Show With Dependents' command for components or assembly to show all components at once using SOLIDWORKS API and Windows API."),(0,t.kt)("p",null,"Macro will call the command for the selected component or for the assembly (if no components selected)."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n \nDim swApp As SldWorks.SldWorks\n \nSub main()\n \n     Set swApp = Application.SldWorks\n     \n     Dim swAssy As SldWorks.AssemblyDoc\n     Set swAssy = swApp.ActiveDoc\n     \n     If Not swAssy Is Nothing Then\n     \n        Dim swComp As SldWorks.Component2\n        Set swComp = swAssy.SelectionManager.GetSelectedObjectsComponent3(1, -1)\n        \n        If swComp Is Nothing Then\n            Set swComp = swAssy.ConfigurationManager.ActiveConfiguration.GetRootComponent3(False)\n        End If\n        \n        ShowWithDependents swComp\n        \n     Else\n        MsgBox "Please open assembly"\n     End If\n     \n End Sub\n \nSub ShowWithDependents(comp As SldWorks.Component2)\n    \n    comp.Select4 False, Nothing, False\n    \n    Const WM_COMMAND As Long = &H111\n    Const SHOW_WITH_DEPENDENTS_CMD As Long = 33227\n    \n    Dim swFrame As SldWorks.Frame\n    \n    Set swFrame = swApp.Frame\n    \n    SendMessage swFrame.GetHWnd(), WM_COMMAND, SHOW_WITH_DEPENDENTS_CMD, 0\n     \nEnd Sub\n')))}d.isMDXComponent=!0},12820:(e,n,o)=>{o.d(n,{Z:()=>s});const s=o.p+"assets/images/assembly-show-with-dependents-b6fa3aec5b2cf58b85c1d128b199418b.png"}}]);