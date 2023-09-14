"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[83919],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=o.createContext({}),p=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(r),u=n,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return r?o.createElement(f,s(s({ref:e},c),{},{components:r})):o.createElement(f,s({ref:e},c))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[d]="string"==typeof t?t:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48609:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"Export flat pattern to DXF/DWG from part SOLIDWORKS API",caption:"Export Flat Pattern From Part",description:"Exports flat pattern to DXF or DWG from the sheet metal part document",image:"export-dxf-dwg.png",labels:["sheet metal","dxf","dwg","flat pattern"]},s=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-metal/export-dxf-dwg/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-metal/export-dxf-dwg/index",title:"Export flat pattern to DXF/DWG from part SOLIDWORKS API",description:"Exports flat pattern to DXF or DWG from the sheet metal part document",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-metal/export-dxf-dwg/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-metal/export-dxf-dwg",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-metal/export-dxf-dwg/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-metal/export-dxf-dwg/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-metal/export-dxf-dwg/index.md",tags:[],version:"current",frontMatter:{title:"Export flat pattern to DXF/DWG from part SOLIDWORKS API",caption:"Export Flat Pattern From Part",description:"Exports flat pattern to DXF or DWG from the sheet metal part document",image:"export-dxf-dwg.png",labels:["sheet metal","dxf","dwg","flat pattern"]},sidebar:"tutorialSidebar",previous:{title:"Export flat patterns from SOLIDWORKS part or assembly components",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-metal/export-all-flat-patterns/"},next:{title:"Find cut-list item from the sheet metal flat pattern using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-metal/get-body-flat-pattern/"}},l={},p=[],c={toc:p},d="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,o.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Export flat pattern to DXF/DWG",src:r(87778).Z,width:"299",height:"323"})),(0,n.kt)("p",null,"This VBA macro exports the sheet metal part or selected flat pattern feature in the multi-body sheet metal part to the DXF or DWG."),(0,n.kt)("p",null,"Change the value of ",(0,n.kt)("em",{parentName:"p"},"OUT_PATH")," variable to save output to different location (change the extension to export to DXF or DWG)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Enum SheetMetalOptions_e\n    ExportFlatPatternGeometry = 1\n    IncludeHiddenEdges = 2\n    ExportBendLines = 4\n    IncludeSketches = 8\n    MergeCoplanarFaces = 16\n    ExportLibraryFeatures = 32\n    ExportFormingTools = 64\n    ExportBoundingBox = 2048\nEnd Enum\n\nConst OUT_PATH As String = "D:\\sm.dwg"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    Dim modelPath As String\n    \n    modelPath = swPart.GetPathName\n    \n    If modelPath = "" Then\n        Err.Raise vbError, "", "Part document must be saved"\n    End If\n    \n    If False = swPart.ExportToDWG2(OUT_PATH, modelPath, swExportToDWG_e.swExportToDWG_ExportSheetMetal, True, Empty, False, False, SheetMetalOptions_e.ExportFlatPatternGeometry + SheetMetalOptions_e.ExportBendLines, Empty) Then\n        Err.Raise vbError, "", "Failed to export flat pattern"\n    End If\n    \nEnd Sub\n')))}m.isMDXComponent=!0},87778:(t,e,r)=>{r.d(e,{Z:()=>o});const o=r.p+"assets/images/export-dxf-dwg-024357d657b94e9bce3b665f60ebd5f5.png"}}]);