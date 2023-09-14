"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[89252],{3905:(e,t,s)=>{s.d(t,{Zo:()=>m,kt:()=>w});var n=s(67294);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,o=function(e,t){if(null==e)return{};var s,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},m=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var s=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=d(s),u=o,w=l["".concat(c,".").concat(u)]||l[u]||p[u]||r;return s?n.createElement(w,a(a({ref:t},m),{},{components:s})):n.createElement(w,a({ref:t},m))}));function w(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=s.length,a=new Array(r);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<r;d++)a[d]=s[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}u.displayName="MDXCreateElement"},70975:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=s(87462),o=(s(67294),s(3905));const r={title:"Add mate between coordinate systems using SOLIDWORKS API",caption:"Add Mate Between Coordinate Systems",description:"Macro adds coincident mate between 2 coordinate systems of 2 selected components",image:"sw-mate-coincident.png",labels:["assembly","component","coordinate system","example","mate","solidworks api"],"redirect-from":["/2018/03/solidworks-api-assembly-add-mate-between-coord-sys.html","/solidworks-api/document/assembly/add-mate-between-coordinate-systems"]},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/add-mate-between-coordinate-systems/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/add-mate-between-coordinate-systems/index",title:"Add mate between coordinate systems using SOLIDWORKS API",description:"Macro adds coincident mate between 2 coordinate systems of 2 selected components",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/add-mate-between-coordinate-systems/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/add-mate-between-coordinate-systems",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/add-mate-between-coordinate-systems/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/add-mate-between-coordinate-systems/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/add-mate-between-coordinate-systems/index.md",tags:[],version:"current",frontMatter:{title:"Add mate between coordinate systems using SOLIDWORKS API",caption:"Add Mate Between Coordinate Systems",description:"Macro adds coincident mate between 2 coordinate systems of 2 selected components",image:"sw-mate-coincident.png",labels:["assembly","component","coordinate system","example","mate","solidworks api"],"redirect-from":["/2018/03/solidworks-api-assembly-add-mate-between-coord-sys.html","/solidworks-api/document/assembly/add-mate-between-coordinate-systems"]},sidebar:"tutorialSidebar",previous:{title:"Automating mates in assemblies using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/"},next:{title:"Macro to flip alignment of the last inserted mate in SOLIDWORKS assembly",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/mates/flip-last/"}},c={},d=[],m={toc:d},l="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Adds coincident mate between 2 coordinate systems of 2 selected components using SOLIDWORKS API. The components must contain the coordinate system features named ",(0,o.kt)("em",{parentName:"p"},"Coordinate System1")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Coincident mate property manager page",src:s(35307).Z,width:"640",height:"265"}),"{ width=640 }"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iassemblydoc~addmate3.html"},"IAssemblyDoc::AddMate3")," SOLIDWORKS API is used to insert mate feature."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swAssy As SldWorks.AssemblyDoc\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swAssy = swApp.ActiveDoc\n        \n    If Not swAssy Is Nothing Then\n    \n        Set swSelMgr = swAssy.SelectionManager\n                \n        Dim swCs1 As SldWorks.Feature\n        Dim swCs2 As SldWorks.Feature\n    \n        Set swCs1 = GetCoordinateSystemFromSelection(1, "Coordinate System1")\n        Set swCs2 = GetCoordinateSystemFromSelection(2, "Coordinate System1")\n        \n        swCs1.Select2 False, 1\n        swCs2.Select2 True, 1\n        \n        swAssy.AddMate3 swMateType_e.swMateCOINCIDENT, swMateAlign_e.swMateAlignCLOSEST, False, 0, 0, 0, 0, 0, 0, 0, 0, False, 0\n        \n        swAssy.EditRebuild\n    \n    Else\n        \n        MsgBox "Please open assembly"\n    \n    End If\n    \nEnd Sub\n\nFunction GetCoordinateSystemFromSelection(index As Integer, name As String) As SldWorks.Feature\n    \n    Dim swComp As SldWorks.Component2\n    Dim swCoordSys As SldWorks.Feature\n    \n    Set swComp = swSelMgr.GetSelectedObjectsComponent2(index)\n    \n    If Not swComp Is Nothing Then\n    \n        Set swCoordSys = swComp.FeatureByName(name)\n        \n        If swCoordSys Is Nothing Then\n            MsgBox "Component " & swComp.Name2 & " doesn\'t contain the feature " & name\n            End\n        End If\n    \n    Else\n        \n        MsgBox "Please select 2 components"\n        End\n        \n    End If\n    \n    Set GetCoordinateSystemFromSelection = swCoordSys\n    \nEnd Function\n\n\n')))}p.isMDXComponent=!0},35307:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/sw-mate-coincident-3065c16fa9b47b5ab4592231a16be6c9.png"}}]);