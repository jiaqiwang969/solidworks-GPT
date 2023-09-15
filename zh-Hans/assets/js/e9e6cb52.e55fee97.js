"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[10759],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},p="mdxType",w={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(t),g=o,u=p["".concat(c,".").concat(g)]||p[g]||w[g]||r;return t?i.createElement(u,s(s({ref:n},l),{},{components:t})):i.createElement(u,s({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=g;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var d=2;d<r;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},53710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>w,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(87462),o=(t(67294),t(3905));const r={layout:"article",caption:"Find Specific Edge In Drawing View",title:"Find and select specific edge in the drawing view using SOLIDWORKS API"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/find-specific-edge-in-drawing-view/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/find-specific-edge-in-drawing-view/index",title:"Find and select specific edge in the drawing view using SOLIDWORKS API",description:"VBA macro to find and select specific edge from the underlying model in the drawing view using SOLIDWORKS API",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/find-specific-edge-in-drawing-view/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/find-specific-edge-in-drawing-view",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/find-specific-edge-in-drawing-view/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/find-specific-edge-in-drawing-view/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/find-specific-edge-in-drawing-view/index.md",tags:[],version:"current",frontMatter:{layout:"article",caption:"Find Specific Edge In Drawing View",title:"Find and select specific edge in the drawing view using SOLIDWORKS API"},sidebar:"tutorialSidebar",previous:{title:"Export flat pattern view in the drawing using VBA macro",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/export-sheet-metal-views/"},next:{title:"Get all visible components in the drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-all-visible-components/"}},c={},d=[{value:"image: selected-edge.png",id:"image-selected-edgepng",level:2}],l={toc:d},p="wrapper";function w(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,i.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"VBA macro to find and select specific edge from the underlying model in the drawing view using SOLIDWORKS API"),(0,o.kt)("h2",{id:"image-selected-edgepng"},"image: selected-edge.png"),(0,o.kt)("p",null,"This VBA macro demonstrates how to find the specific named edge from the underlying 3D document and select it in the drawing view."),(0,o.kt)("p",null,"This technique can be used when developing drawing automation macros and applications."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note in your macro you might not use named entities, instead some different logic can be applied (e.g. finding by coordinates, color, attributes etc.). However the process of conversion the pointer to drawing view space will be the same.")),(0,o.kt)("p",null,"This macro will work with the drawing view of the assembly where named edge is contained in the top level component as shown below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edge selected in the drawing view",src:t(57439).Z,width:"622",height:"637"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Refer ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/assembly/components/get-by-name/"},"Get Component By Name")," example for the code to get component on any level if needed.")),(0,o.kt)("p",null,"Name of the edge needs to be assigned from the corresponding part document."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Name of the edge assigned in the part",src:t(87372).Z,width:"434",height:"229"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n        \n    Set swDraw = swApp.ActiveDoc\n    \n    Dim swView As SldWorks.view\n    Set swView = swDraw.FeatureByName("Drawing View1").GetSpecificFeature()\n    \n    Dim swEdge As SldWorks.edge\n    Set swEdge = FindEdge(swDraw, swView, "Part1-1", "MyEdge")\n    \n    Debug.Print swView.SelectEntity(swEdge, False)\n    \nEnd Sub\n\nFunction FindEdge(draw As SldWorks.DrawingDoc, view As SldWorks.view, compName As String, edgeName As String) As SldWorks.edge\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    Set swAssy = view.ReferencedDocument\n    \n    Dim swComp As SldWorks.Component2\n    Set swComp = swAssy.GetComponentByName(compName)\n    \n    Dim swRefPart As SldWorks.PartDoc\n    Set swRefPart = swComp.GetModelDoc2\n    \n    Dim swEdge As SldWorks.edge\n    Set swEdge = swRefPart.GetEntityByName(edgeName, swSelectType_e.swSelEDGES)\n    \n    Set swEdge = swComp.GetCorresponding(swEdge)\n    \n    Set FindEdge = swEdge\n    \nEnd Function\n')))}w.isMDXComponent=!0},87372:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/edge-name-e92af4469cebfaf808c02dc22622f09d.png"},57439:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/selected-edge-c33638bdabb90b767b3120d9f957b78b.png"}}]);