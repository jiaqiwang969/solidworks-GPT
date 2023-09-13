"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[33426],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>u});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=r.createContext({}),d=function(e){var t=r.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},h=function(e){var t=d(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=d(o),b=n,u=p["".concat(a,".").concat(b)]||p[b]||c[b]||i;return o?r.createElement(u,l(l({ref:t},h),{},{components:o})):r.createElement(u,l({ref:t},h))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,l=new Array(i);l[0]=b;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<i;d++)l[d]=o[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}b.displayName="MDXCreateElement"},45182:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const i={title:"Fill hole with temp body using SOLIDWORKS API",caption:"Fill Hole",description:"VBA example demonstrates how to use SOLIDWORKS modeler and create temp body to fill hole in the geometry",image:"filled-hole.png",labels:["fill","modeler","hole","temp geometry"]},l=void 0,s={unversionedId:"codestack/solidworks-api/geometry/fill-hole/index",id:"codestack/solidworks-api/geometry/fill-hole/index",title:"Fill hole with temp body using SOLIDWORKS API",description:"VBA example demonstrates how to use SOLIDWORKS modeler and create temp body to fill hole in the geometry",source:"@site/docs/codestack/solidworks-api/geometry/fill-hole/index.md",sourceDirName:"codestack/solidworks-api/geometry/fill-hole",slug:"/codestack/solidworks-api/geometry/fill-hole/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/geometry/fill-hole/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/fill-hole/index.md",tags:[],version:"current",frontMatter:{title:"Fill hole with temp body using SOLIDWORKS API",caption:"Fill Hole",description:"VBA example demonstrates how to use SOLIDWORKS modeler and create temp body to fill hole in the geometry",image:"filled-hole.png",labels:["fill","modeler","hole","temp geometry"]},sidebar:"tutorialSidebar",previous:{title:"Macro to create ISO curves for face using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/geometry/face-iso-curves/"},next:{title:"Finding the body bounding cylinder using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/geometry/get-bounding-cylinder/"}},a={},d=[],h={toc:d},p="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Hole filled with a temp geometry",src:o(87711).Z,width:"396",height:"340"})),(0,n.kt)("p",null,"This VBA example demonstrates how to use ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/English/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModeler~CreateBodyFromFaces2.html"},"IModeler::CreateBodyFromFaces2")," API to fill the hole of the selected feature (e.g. cut-extrude) with temp geometry."),(0,n.kt)("p",null,"Macro stops execution and displays temp body. Continue execution to remove the temp body."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If swModel Is Nothing Then\n        Err.Raise vbError, "", "Open model"\n    End If\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swFeat As SldWorks.Feature\n    Set swFeat = swSelMgr.GetSelectedObject6(1, -1)\n    \n    If swFeat Is Nothing Then\n        Err.Raise vbError, "", "Select feature"\n    End If\n    \n    Dim vFaces As Variant\n    \n    Dim swTempBody As SldWorks.Body2\n        \n    vFaces = swFeat.GetFaces\n    \n    Dim swModeler As SldWorks.Modeler\n    Set swModeler = swApp.GetModeler\n    \n    Set swTempBody = swModeler.CreateBodyFromFaces2(UBound(vFaces) + 1, vFaces, swCreateFacesBodyAction_e.swCreateFacesBodyActionCap, _\n                                                False, False)\n    \n    If swTempBody Is Nothing Then\n        Err.Raise vbError, "", "Failed to create body"\n    End If\n    \n    swTempBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n    \n    Stop\n    \nEnd Sub\n')))}c.isMDXComponent=!0},87711:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);