"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[15624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,w=d["".concat(c,".").concat(u)]||d[u]||m[u]||s;return n?o.createElement(w,i(i({ref:t},p),{},{components:n})):o.createElement(w,i({ref:t},p))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const s={title:"Traversing the components tree using SOLIDWORKS API",caption:"Traversing The Components Tree",description:"Example demonstrates how to traverse components tree in the assembly and output the result using the specified indentation symbol",image:"sw-components-tree.png",labels:["assembly","components tree","solidworks api","traverse"],"redirect-from":["/2018/03/solidworks-api-assembly-traverse-comps-tree.html","/solidworks-api/document/assembly/traversing-components-tree"]},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traversing-tree/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traversing-tree/index",title:"Traversing the components tree using SOLIDWORKS API",description:"Example demonstrates how to traverse components tree in the assembly and output the result using the specified indentation symbol",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traversing-tree/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traversing-tree",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traversing-tree/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traversing-tree/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traversing-tree/index.md",tags:[],version:"current",frontMatter:{title:"Traversing the components tree using SOLIDWORKS API",caption:"Traversing The Components Tree",description:"Example demonstrates how to traverse components tree in the assembly and output the result using the specified indentation symbol",image:"sw-components-tree.png",labels:["assembly","components tree","solidworks api","traverse"],"redirect-from":["/2018/03/solidworks-api-assembly-traverse-comps-tree.html","/solidworks-api/document/assembly/traversing-components-tree"]},sidebar:"tutorialSidebar",previous:{title:"Traverse SOLIDWORKS feature manager tree in the reversed order",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/traverse-reverse/"},next:{title:"Tree structure serialization in model 3rd party storage using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tree-structure-serialization/"}},c={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example demonstrates how to traverse components tree in the assembly using SOLIDWORKS API and output the result using the specified indentation symbol."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Components Tree",src:n(79021).Z,width:"140",height:"320"}),"{ width=150 }"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nConst INDENT_SYMBOL As String = "    "\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n\n        Dim swRootComp As SldWorks.Component2\n\n        Set swRootComp = swModel.ConfigurationManager.ActiveConfiguration.GetRootComponent\n    \n        TraverseComponent swRootComp, ""\n\n    Else\n\n        MsgBox "Please open assembly"\n\n    End If\n    \nEnd Sub\n\nSub TraverseComponent(comp As SldWorks.Component2, indent As String)\n    \n    Dim vChildComps As Variant\n    \n    vChildComps = comp.GetChildren\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vChildComps)\n    \n        Dim swChildComp As SldWorks.Component2\n        Set swChildComp = vChildComps(i)\n            \n        Debug.Print indent & swChildComp.Name2 & " (" & swChildComp.GetPathName() & ")"\n        \n        TraverseComponent swChildComp, indent & INDENT_SYMBOL\n        \n    Next\n    \nEnd Sub\n\n\n')))}m.isMDXComponent=!0},79021:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sw-components-tree-1c8aebaa47e6812655df10300003e9ed.png"}}]);