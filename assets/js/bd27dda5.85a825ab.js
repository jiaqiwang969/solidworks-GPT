"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[6894],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>w});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=l(t),u=s,w=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return t?o.createElement(w,i(i({ref:n},p),{},{components:t})):o.createElement(w,i({ref:n},p))}));function w(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[m]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62942:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(87462),s=(t(67294),t(3905));const r={title:"Traversing the components tree using SOLIDWORKS API",caption:"Traversing The Components Tree",description:"Example demonstrates how to traverse components tree in the assembly and output the result using the specified indentation symbol",image:"sw-components-tree.png",labels:["assembly","components tree","solidworks api","traverse"],"redirect-from":["/2018/03/solidworks-api-assembly-traverse-comps-tree.html","/solidworks-api/document/assembly/traversing-components-tree"]},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/traversing-tree/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/traversing-tree/index",title:"Traversing the components tree using SOLIDWORKS API",description:"Example demonstrates how to traverse components tree in the assembly and output the result using the specified indentation symbol",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/traversing-tree/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/traversing-tree",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/traversing-tree/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/traversing-tree/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/traversing-tree/index.md",tags:[],version:"current",frontMatter:{title:"Traversing the components tree using SOLIDWORKS API",caption:"Traversing The Components Tree",description:"Example demonstrates how to traverse components tree in the assembly and output the result using the specified indentation symbol",image:"sw-components-tree.png",labels:["assembly","components tree","solidworks api","traverse"],"redirect-from":["/2018/03/solidworks-api-assembly-traverse-comps-tree.html","/solidworks-api/document/assembly/traversing-components-tree"]},sidebar:"tutorialSidebar",previous:{title:"VBA Macro calls Show All Components command from SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/show-with-dependents/"},next:{title:"Find the where used assemblies of the selected component using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/where-used/"}},c={},l=[],p={toc:l},m="wrapper";function d(e){let{components:n,...r}=e;return(0,s.kt)(m,(0,o.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This example demonstrates how to traverse components tree in the assembly using SOLIDWORKS API and output the result using the specified indentation symbol."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Components Tree",src:t(57103).Z,width:"140",height:"320"}),"{ width=150 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nConst INDENT_SYMBOL As String = "    "\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n\n        Dim swRootComp As SldWorks.Component2\n\n        Set swRootComp = swModel.ConfigurationManager.ActiveConfiguration.GetRootComponent\n    \n        TraverseComponent swRootComp, ""\n\n    Else\n\n        MsgBox "Please open assembly"\n\n    End If\n    \nEnd Sub\n\nSub TraverseComponent(comp As SldWorks.Component2, indent As String)\n    \n    Dim vChildComps As Variant\n    \n    vChildComps = comp.GetChildren\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vChildComps)\n    \n        Dim swChildComp As SldWorks.Component2\n        Set swChildComp = vChildComps(i)\n            \n        Debug.Print indent & swChildComp.Name2 & " (" & swChildComp.GetPathName() & ")"\n        \n        TraverseComponent swChildComp, indent & INDENT_SYMBOL\n        \n    Next\n    \nEnd Sub\n\n\n')))}d.isMDXComponent=!0},57103:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/sw-components-tree-1c8aebaa47e6812655df10300003e9ed.png"}}]);