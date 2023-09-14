"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[11585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50234:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Traverse feature manager nodes using SOLIDWORKS API",caption:"Traverse Feature Nodes",description:"Example demonstrates how to traverse nodes in the Feature Manager Tree using SOLIDWORKS API",image:"feature-manager-tree.png",labels:["traverse","feature","node"]},s=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/traverse-feature-nodes/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/traverse-feature-nodes/index",title:"Traverse feature manager nodes using SOLIDWORKS API",description:"Example demonstrates how to traverse nodes in the Feature Manager Tree using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/traverse-feature-nodes/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/traverse-feature-nodes",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/traverse-feature-nodes/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/traverse-feature-nodes/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/traverse-feature-nodes/index.md",tags:[],version:"current",frontMatter:{title:"Traverse feature manager nodes using SOLIDWORKS API",caption:"Traverse Feature Nodes",description:"Example demonstrates how to traverse nodes in the Feature Manager Tree using SOLIDWORKS API",image:"feature-manager-tree.png",labels:["traverse","feature","node"]},sidebar:"tutorialSidebar",previous:{title:"Toggle Show Comment Indicator option using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/toggle-show-comment-indicator/"},next:{title:"Traverse SOLIDWORKS feature manager tree in the reversed order",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/traverse-reverse/"}},d={},c=[],l={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Feature Manager Tree",src:r(52684).Z,width:"258",height:"574"}),"{ width=150 }"),(0,o.kt)("p",null,"This example demonstrates how to traverse nodes in the Feature Manager Tree using SOLIDWORKS API. Nodes traversed in the exact order they are rendered in the tree and the exact text is extracted."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.itreecontrolitem.html"},"ITreeControlItem")," SOLIDWORKS API interface represents the node element and allows its automation."),(0,o.kt)("p",null,"This macro can be useful if it is required to get the exact features hierarchy and order or get the nodes of the system features (like history, design journal etc.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const OFFSET_SYMBOL = " "\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n\n    If Not swModel Is Nothing Then\n    \n        Dim swFeatMgr As SldWorks.FeatureManager\n        \n        Set swFeatMgr = swModel.FeatureManager\n        \n        Dim swRootFeatNode As SldWorks.TreeControlItem\n        \n        Set swRootFeatNode = swFeatMgr.GetFeatureTreeRootItem2(swFeatMgrPane_e.swFeatMgrPaneBottom)\n        \n        If Not swRootFeatNode Is Nothing Then\n            TraverseFeatureNode swRootFeatNode, ""\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\nEnd Sub\n\nSub TraverseFeatureNode(featNode As SldWorks.TreeControlItem, offset As String)\n    \n    Debug.Print offset & featNode.Text\n    \n    Dim swChildFeatNode As SldWorks.TreeControlItem\n    \n    Set swChildFeatNode = featNode.GetFirstChild()\n    \n    While Not swChildFeatNode Is Nothing\n        TraverseFeatureNode swChildFeatNode, offset + OFFSET_SYMBOL\n        Set swChildFeatNode = swChildFeatNode.GetNext\n    Wend\n    \nEnd Sub\n')))}p.isMDXComponent=!0},52684:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/feature-manager-tree-c3e240244a9ff548eb933bffc65105b1.png"}}]);