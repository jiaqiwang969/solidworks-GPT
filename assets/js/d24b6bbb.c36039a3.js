"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[55066],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return r?o.createElement(g,i(i({ref:t},c),{},{components:r})):o.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const s={title:"Managing Custom Properties using SOLIDWORKS API",caption:"Custom Properties",description:"Managing model, configuration and feature specific custom properties using SOLIDWORKS API",labels:["custom properties","configuration properties"]},i=void 0,a={unversionedId:"codestack/solidworks-api/data-storage/custom-properties/index",id:"codestack/solidworks-api/data-storage/custom-properties/index",title:"Managing Custom Properties using SOLIDWORKS API",description:"Managing model, configuration and feature specific custom properties using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/data-storage/custom-properties/index.md",sourceDirName:"codestack/solidworks-api/data-storage/custom-properties",slug:"/codestack/solidworks-api/data-storage/custom-properties/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/data-storage/custom-properties/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/data-storage/custom-properties/index.md",tags:[],version:"current",frontMatter:{title:"Managing Custom Properties using SOLIDWORKS API",caption:"Custom Properties",description:"Managing model, configuration and feature specific custom properties using SOLIDWORKS API",labels:["custom properties","configuration properties"]},sidebar:"tutorialSidebar",previous:{title:"Select components associated with attributes using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/data-storage/attributes/select-associated-components/"},next:{title:"Create a dynamic auto updatable date custom property in SOLIDWORKS file",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/data-storage/custom-properties/auto-date/"}},p={},l=[],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section contains macros and code examples for utilizing the custom properties in SOLIDWORKS API."),(0,n.kt)("p",null,"Custom properties is a collection of key value pairs used in SOLIDWORKS to store the metadata. Custom properties can be associated with the model itself, its configurations or cut-list features (such as weldment or sheet metal)."),(0,n.kt)("p",null,"Custom properties are managed via ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICustomPropertyManager.html"},"ICustomPropertyManager")," SOLIDWORKS API interface."),(0,n.kt)("p",null,"In many cases when it is required to read the value of the custom property (e.g. for using in the file name, for exporting, etc.) property will be firstly read from the referenced configuration and if missing from the file property. This is similar to the way properties are used to populate Bill Of Materials table."),(0,n.kt)("p",null,"Code below demonstrates how to implement this practice in the code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Debug.Print GetPropertyValue(swModel, "Part Number")\n    Debug.Print GetPropertyValue(swModel, "Revision")\n    \nEnd Sub\n\nFunction GetPropertyValue(model As SldWorks.ModelDoc2, prpName As String) As String\n    \n    Dim prpVal As String\n    Dim swCustPrpMgr As SldWorks.CustomPropertyManager\n    \n    If TypeOf model Is SldWorks.PartDoc Or TypeOf model Is SldWorks.AssemblyDoc Then\n        Set swCustPrpMgr = model.ConfigurationManager.ActiveConfiguration.CustomPropertyManager\n        swCustPrpMgr.Get4 prpName, True, "", prpVal\n    End If\n    \n    If prpVal = "" Then\n        Set swCustPrpMgr = model.Extension.CustomPropertyManager("")\n        swCustPrpMgr.Get4 prpName, True, "", prpVal\n    End If\n    \n    GetPropertyValue = prpVal\n    \nEnd Function\n')))}d.isMDXComponent=!0}}]);