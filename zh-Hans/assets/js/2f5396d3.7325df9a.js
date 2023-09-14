"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[60558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>p});var o=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,c=function(e,t){if(null==e)return{};var n,o,c={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=o.createContext({}),m=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},A=function(e){var t=m(e.components);return o.createElement(a.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},P=o.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,a=e.parentName,A=i(e,["components","mdxType","originalType","parentName"]),l=m(n),P=c,p=l["".concat(a,".").concat(P)]||l[P]||d[P]||r;return n?o.createElement(p,s(s({ref:t},A),{},{components:n})):o.createElement(p,s({ref:t},A))}));function p(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,s=new Array(r);s[0]=P;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[l]="string"==typeof e?e:c,s[1]=i;for(var m=2;m<r;m++)s[m]=n[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}P.displayName="MDXCreateElement"},38560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=n(87462),c=(n(67294),n(3905));const r={title:"Convert arc to circle by merging end points using SOLIDWORKS API",caption:"Convert Arc To Circle",description:"VBA macro to convert sketch arc to a sketch circle by adding the merge relation between start and end points using SOLIDWORKS API",image:"sketch-arc.png",labels:["sketch","arc","circle","merge","relation"]},s=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/convert-arc-to-circle/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/convert-arc-to-circle/index",title:"Convert arc to circle by merging end points using SOLIDWORKS API",description:"VBA macro to convert sketch arc to a sketch circle by adding the merge relation between start and end points using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/convert-arc-to-circle/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/convert-arc-to-circle",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/convert-arc-to-circle/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/convert-arc-to-circle/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/convert-arc-to-circle/index.md",tags:[],version:"current",frontMatter:{title:"Convert arc to circle by merging end points using SOLIDWORKS API",caption:"Convert Arc To Circle",description:"VBA macro to convert sketch arc to a sketch circle by adding the merge relation between start and end points using SOLIDWORKS API",image:"sketch-arc.png",labels:["sketch","arc","circle","merge","relation"]},sidebar:"tutorialSidebar",previous:{title:"Macro to assign random color to sketches in the document",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/assign-random-color/"},next:{title:"Macro to create spline CSV file using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/csv-create-spline/"}},a={},m=[],A={toc:m},l="wrapper";function d(e){let{components:t,...r}=e;return(0,c.kt)(l,(0,o.Z)({},A,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Sketch arc",src:n(35137).Z,width:"445",height:"357"}),"{ width=350 }"),(0,c.kt)("p",null,"This VBA macro example demonstrates how to apply the merge sketch relation between start and end points of the selected sketch arc to convert it to sketch circle. This is the analogue of dragging the point manually until it is merged or adding the merge sketch relation in relation manager."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSkArc As SldWorks.SketchArc\n        Set swSkArc = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swSkArc Is Nothing Then\n            Dim swEndPts(1) As SldWorks.SketchPoint\n            Set swEndPts(0) = swSkArc.GetStartPoint2()\n            Set swEndPts(1) = swSkArc.GetEndPoint2()\n            swModel.SketchManager.ActiveSketch.RelationManager.AddRelation swEndPts, swConstraintType_e.swConstraintType_MERGEPOINTS\n        Else\n            MsgBox "Please select sketch arc"\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n')))}d.isMDXComponent=!0},35137:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);