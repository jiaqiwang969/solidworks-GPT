"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[21933],{3905:(e,n,o)=>{o.d(n,{Zo:()=>m,kt:()=>h});var t=o(67294);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,s=function(e,n){if(null==e)return{};var o,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var c=t.createContext({}),i=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},m=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},w=t.forwardRef((function(e,n){var o=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=i(o),w=s,h=p["".concat(c,".").concat(w)]||p[w]||d[w]||r;return o?t.createElement(h,a(a({ref:n},m),{},{components:o})):t.createElement(h,a({ref:n},m))}));function h(e,n){var o=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=o.length,a=new Array(r);a[0]=w;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:s,a[1]=l;for(var i=2;i<r;i++)a[i]=o[i];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}w.displayName="MDXCreateElement"},45896:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var t=o(87462),s=(o(67294),o(3905));const r={title:"VBA Macro calls Show All Components command from SOLIDWORKS API",caption:"Show All Components (Show With Dependents)",description:"Example demonstrates how to call the Show With Dependents command for components or assembly using SOLIDWORKS API",image:"assembly-show-with-dependents.png",labels:["assembly","components","show"]},a=void 0,l={unversionedId:"codestack-clone/solidworks-api/document/assembly/components/show-with-dependents/index",id:"codestack-clone/solidworks-api/document/assembly/components/show-with-dependents/index",title:"VBA Macro calls Show All Components command from SOLIDWORKS API",description:"Example demonstrates how to call the Show With Dependents command for components or assembly using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/document/assembly/components/show-with-dependents/index.md",sourceDirName:"codestack-clone/solidworks-api/document/assembly/components/show-with-dependents",slug:"/codestack-clone/solidworks-api/document/assembly/components/show-with-dependents/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/assembly/components/show-with-dependents/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/assembly/components/show-with-dependents/index.md",tags:[],version:"current",frontMatter:{title:"VBA Macro calls Show All Components command from SOLIDWORKS API",caption:"Show All Components (Show With Dependents)",description:"Example demonstrates how to call the Show With Dependents command for components or assembly using SOLIDWORKS API",image:"assembly-show-with-dependents.png",labels:["assembly","components","show"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS Macro shows selected assembly component in the Window folder",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/assembly/components/show-selected-assembly-component-window-folder/"},next:{title:"Traversing the components tree using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/assembly/components/traversing-tree/"}},c={},i=[],m={toc:i},p="wrapper";function d(e){let{components:n,...r}=e;return(0,s.kt)(p,(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Show With Dependents command in assembly",src:o(60802).Z,width:"363",height:"461"}),"{ width=250 }"),(0,s.kt)("p",null,"This example demonstrates how to call the 'Show With Dependents' command for components or assembly to show all components at once using SOLIDWORKS API and Windows API."),(0,s.kt)("p",null,"Macro will call the command for the selected component or for the assembly (if no components selected)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n \nDim swApp As SldWorks.SldWorks\n \nSub main()\n \n     Set swApp = Application.SldWorks\n     \n     Dim swAssy As SldWorks.AssemblyDoc\n     Set swAssy = swApp.ActiveDoc\n     \n     If Not swAssy Is Nothing Then\n     \n        Dim swComp As SldWorks.Component2\n        Set swComp = swAssy.SelectionManager.GetSelectedObjectsComponent3(1, -1)\n        \n        If swComp Is Nothing Then\n            Set swComp = swAssy.ConfigurationManager.ActiveConfiguration.GetRootComponent3(False)\n        End If\n        \n        ShowWithDependents swComp\n        \n     Else\n        MsgBox "Please open assembly"\n     End If\n     \n End Sub\n \nSub ShowWithDependents(comp As SldWorks.Component2)\n    \n    comp.Select4 False, Nothing, False\n    \n    Const WM_COMMAND As Long = &H111\n    Const SHOW_WITH_DEPENDENTS_CMD As Long = 33227\n    \n    Dim swFrame As SldWorks.Frame\n    \n    Set swFrame = swApp.Frame\n    \n    SendMessage swFrame.GetHWnd(), WM_COMMAND, SHOW_WITH_DEPENDENTS_CMD, 0\n     \nEnd Sub\n')))}d.isMDXComponent=!0},60802:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/assembly-show-with-dependents-b6fa3aec5b2cf58b85c1d128b199418b.png"}}]);