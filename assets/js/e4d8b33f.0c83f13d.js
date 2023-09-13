"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[38838],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var s=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,s,r=function(e,t){if(null==e)return{};var o,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)o=n[s],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)o=n[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=s.createContext({}),l=function(e){var t=s.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},k=s.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(o),k=r,h=d["".concat(c,".").concat(k)]||d[k]||m[k]||n;return o?s.createElement(h,a(a({ref:t},p),{},{components:o})):s.createElement(h,a({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,a=new Array(n);a[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<n;l++)a[l]=o[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,o)}k.displayName="MDXCreateElement"},62050:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var s=o(87462),r=(o(67294),o(3905));const n={title:"How to use Accessors section in SOLIDWORKS API Help",caption:"Accessors",description:"Explanation of accessors section in API Help documentation which helps to find the way of accessing specific objects in SOLIDWORKS API",image:"accessors.png",labels:["access","cast"]},a=void 0,i={unversionedId:"codestack/solidworks-api/getting-started/api-object-model/accessors/index",id:"codestack/solidworks-api/getting-started/api-object-model/accessors/index",title:"How to use Accessors section in SOLIDWORKS API Help",description:"Explanation of accessors section in API Help documentation which helps to find the way of accessing specific objects in SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/getting-started/api-object-model/accessors/index.md",sourceDirName:"codestack/solidworks-api/getting-started/api-object-model/accessors",slug:"/codestack/solidworks-api/getting-started/api-object-model/accessors/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/api-object-model/accessors/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/getting-started/api-object-model/accessors/index.md",tags:[],version:"current",frontMatter:{title:"How to use Accessors section in SOLIDWORKS API Help",caption:"Accessors",description:"Explanation of accessors section in API Help documentation which helps to find the way of accessing specific objects in SOLIDWORKS API",image:"accessors.png",labels:["access","cast"]},sidebar:"tutorialSidebar",previous:{title:"Explanation of SOLIDWORKS API Object Model and object relations",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/api-object-model/"},next:{title:"SOLIDWORKS API Object Model class hierarchy diagram",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/getting-started/api-object-model/class-diagram/"}},c={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Accessibility of certain interface can be found in the ",(0,r.kt)("em",{parentName:"p"},"Accessors")," section of specific interface in the SOLIDWORKS API Help documentation."),(0,r.kt)("p",null,"For example, the snapshot below is an ",(0,r.kt)("em",{parentName:"p"},"Accessors")," section of the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation.html"},"IAnnotation Interface")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Accessors section in API Help documentation",src:o(42108).Z,width:"526",height:"351"}),"{ width=250 }"),(0,r.kt)("p",null,"Which means that the pointer to ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation.html"},"IAnnotation Interface")," could be retrieved either via ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IAnnotation~GetNext3.html"},"IAnnotation::GetNext3 Method")," or ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotationView~Annotations.html"},"IAnnotationView::Annotations")," property or other properties or methods in this list."),(0,r.kt)("p",null,"Some of the interfaces can be explicitly or implicitly cast from one to another. For example ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html"},"IModelDoc2")," represents the parent interface (although there is no direct inheritance) for ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartDoc.html"},"IPartDoc"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAssemblyDoc.html"},"IAssemblyDoc"),", ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDrawingDoc.html"},"IDrawingDoc")," interfaces."),(0,r.kt)("p",null,"Which means that both parent and specific object would be pointing to the same object in memory."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"VBA")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swModel As SldWorks.ModelDoc2\n...\nDim swPart As SldWorks.PartDoc\nSet swPart = swModel\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"VB.NET")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swModel As IModelDoc2\n...\nDim swPart As IPartDoc = CType(swModel, IPartDoc)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"C#")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"IModelDoc2 model;\n...\nIPartDoc part = model as IPartDoc;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"C++")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"LPMODELDOC2 pModelDoc;\n...\nLPPARTDOC pPartDoc = NULL;\nhres = pModelDoc->QueryInterface(IID_IPartDoc, (LPVOID*)&pPartDoc);\n")))}m.isMDXComponent=!0},42108:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/accessors-176f670913eb55c7c358a5ee65e18258.png"}}]);