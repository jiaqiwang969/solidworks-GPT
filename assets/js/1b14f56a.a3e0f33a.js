"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[59180],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>h});var n=t(67294);function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function s(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?s(Object(t),!0).forEach((function(o){i(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,i=function(e,o){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||(i[t]=e[t]);return i}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=n.createContext({}),c=function(e){var o=n.useContext(a),t=o;return e&&(t="function"==typeof e?e(o):r(r({},o),e)),t},d=function(e){var o=c(e.components);return n.createElement(a.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},b=n.forwardRef((function(e,o){var t=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),b=i,h=p["".concat(a,".").concat(b)]||p[b]||u[b]||s;return t?n.createElement(h,r(r({ref:o},d),{},{components:t})):n.createElement(h,r({ref:o},d))}));function h(e,o){var t=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=b;var l={};for(var a in o)hasOwnProperty.call(o,a)&&(l[a]=o[a]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<s;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},73653:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const s={title:"Modify location precision of holes in holes table using SOLIDWORKS API",caption:"Modify Holes Table Holes Location Precision",description:"Example demonstrates how to change the precision for the hole locations in the selected Hole Table",image:"sw-hole-table.png",labels:["drawing","example","hole table","precision","solidworks api"],"redirect-from":["/2018/04/solidworks-api-drawing-hole-table-holes-location-precision.html"]},r=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/modify-holes-table-holes-location-precision/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/modify-holes-table-holes-location-precision/index",title:"Modify location precision of holes in holes table using SOLIDWORKS API",description:"Example demonstrates how to change the precision for the hole locations in the selected Hole Table",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/modify-holes-table-holes-location-precision/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/modify-holes-table-holes-location-precision",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/modify-holes-table-holes-location-precision/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/modify-holes-table-holes-location-precision/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/modify-holes-table-holes-location-precision/index.md",tags:[],version:"current",frontMatter:{title:"Modify location precision of holes in holes table using SOLIDWORKS API",caption:"Modify Holes Table Holes Location Precision",description:"Example demonstrates how to change the precision for the hole locations in the selected Hole Table",image:"sw-hole-table.png",labels:["drawing","example","hole table","precision","solidworks api"],"redirect-from":["/2018/04/solidworks-api-drawing-hole-table-holes-location-precision.html"]},sidebar:"tutorialSidebar",previous:{title:"Macro to insert SOLIDWORKS Revision table and attach to the anchor point",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/insert-revision-table/"},next:{title:"Read table content into array using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/read-table-content-into-array/"}},a={},c=[],d={toc:c},p="wrapper";function u(e){let{components:o,...s}=e;return(0,i.kt)(p,(0,n.Z)({},d,s,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example demonstrates how to change the precision for the hole locations in the selected Hole Table using SOLIDWORKS API."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Holes Table",src:t(41351).Z,width:"320",height:"95"}),"{ width=320 height=95 }"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n    \n    On Error Resume Next\n    \n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swHoleTableAnn As SldWorks.HoleTableAnnotation\n\n        Set swHoleTableAnn = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swHoleTableAnn Is Nothing Then\n                        \n            Dim swHoleTable As SldWorks.HoleTable\n            \n            Set swHoleTable = swHoleTableAnn.HoleTable\n                \n            swHoleTable.SetHoleLocationPrecision False, 3\n                \n        Else\n            MsgBox "Please select hole table"\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0},41351:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/sw-hole-table-8b6e5bf9bf56d095ea62a9e98f944109.png"}}]);