"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[54536],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var r=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,s=function(e,t){if(null==e)return{};var o,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(o),h=s,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||n;return o?r.createElement(u,i(i({ref:t},p),{},{components:o})):r.createElement(u,i({ref:t},p))}));function u(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=o.length,i=new Array(n);i[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<n;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},59581:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var r=o(87462),s=(o(67294),o(3905));const n={title:"How to Use the Accessors Section in the SOLIDWORKS API Help",image:"accessors.png",labels:["access","translation"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/accessors/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/accessors/index",title:"How to Use the Accessors Section in the SOLIDWORKS API Help",description:"In the SOLIDWORKS API Help documentation, you can find accessibility information for certain interfaces in the Accessors section of the specific interface.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/accessors/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/accessors",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/accessors/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/accessors/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/accessors/index.md",tags:[],version:"current",frontMatter:{title:"How to Use the Accessors Section in the SOLIDWORKS API Help",image:"accessors.png",labels:["access","translation"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS API Object Model Class Hierarchy Diagram",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/class-diagram/"},next:{title:'Difference between SOLIDWORKS API Methods with and without "I"',permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/api-object-model/i-api-versions/"}},c={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In the SOLIDWORKS API Help documentation, you can find accessibility information for certain interfaces in the ",(0,s.kt)("em",{parentName:"p"},"Accessors")," section of the specific interface."),(0,s.kt)("p",null,"For example, the snapshot below shows the ",(0,s.kt)("em",{parentName:"p"},"Accessors")," section of the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation.html"},"IAnnotation interface"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Accessors section in the API Help documentation",src:o(91854).Z,width:"526",height:"351"}),"{ width=250 }"),(0,s.kt)("p",null,"This means that you can obtain a pointer to the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation.html"},"IAnnotation interface")," through the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IAnnotation~GetNext3.html"},"IAnnotation::GetNext3 method"),", the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotationView~Annotations.html"},"IAnnotationView::Annotations property"),", or other properties or methods listed here."),(0,s.kt)("p",null,"Certain interfaces can be explicitly or implicitly converted from one interface to another. For example, ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html"},"IModelDoc2")," represents the parent interface (although not directly inherited) and ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartDoc.html"},"IPartDoc"),", ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAssemblyDoc.html"},"IAssemblyDoc"),", ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDrawingDoc.html"},"IDrawingDoc")," interfaces are its child interfaces."),(0,s.kt)("p",null,"This means that the parent interface and the specific object will point to the same object in memory."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"VBA")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swModel As SldWorks.ModelDoc2\n...\nDim swPart As SldWorks.PartDoc\nSet swPart = swModel\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"VB.NET")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swModel As IModelDoc2\n...\nDim swPart As IPartDoc = CType(swModel, IPartDoc)\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"C#")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cs"},"IModelDoc2 model;\n...\nIPartDoc part = model as IPartDoc;\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"C++")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"LPMODELDOC2 pModelDoc;\n...\nLPPARTDOC pPartDoc = NULL;\nhres = pModelDoc->QueryInterface(IID_IPartDoc, (LPVOID*)&pPartDoc);\n")))}m.isMDXComponent=!0},91854:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/accessors-176f670913eb55c7c358a5ee65e18258.png"}}]);