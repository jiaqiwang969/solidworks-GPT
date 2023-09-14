"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[36827],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>b});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return o?n.createElement(b,s(s({ref:t},p),{},{components:o})):n.createElement(b,s({ref:t},p))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},37383:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const i={title:"Tables (BOM, General, Revision etc.) automation using SOLIDWORKS API",caption:"Tables",description:"Article explaining the functions to work with tables (Bill of Materials, General, Weldment Cut List, Holes Table) using SOLIDWORKS API",sidebar_position:8},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/index",title:"Tables (BOM, General, Revision etc.) automation using SOLIDWORKS API",description:"Article explaining the functions to work with tables (Bill of Materials, General, Weldment Cut List, Holes Table) using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/index.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Tables (BOM, General, Revision etc.) automation using SOLIDWORKS API",caption:"Tables",description:"Article explaining the functions to work with tables (Bill of Materials, General, Weldment Cut List, Holes Table) using SOLIDWORKS API",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Traverse all dimensions of component or model using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/traverse-all/"},next:{title:"Combine identical components command in SOLIDWORKS BOM table",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/tables/combine-identical-components/"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All table types supported by SOLIDWORKS can be accessed via API. This includes but not limited to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bill Of Material"),(0,r.kt)("li",{parentName:"ul"},"General"),(0,r.kt)("li",{parentName:"ul"},"Weldment Cut List"),(0,r.kt)("li",{parentName:"ul"},"Holes Table")),(0,r.kt)("p",null,"etc."),(0,r.kt)("p",null,"All table inherit the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITableAnnotation.html"},"ITableAnnotation")," SOLIDWORKS API interface. This interface provides the method to work with the table (i.e. change cells, change formatting, add/remove rows etc.)."),(0,r.kt)("p",null,"There are specific table annotation for a generic table annotation. For example ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBomTableAnnotation.html"},"IBomTableAnnotation")," is a specific table annotation for Bill of Materials (BOM) table. Generic table annotation can be cast to specific by directly assigning the pointer."),(0,r.kt)("p",null,"Table is also present in the Feature Manager tree which means that it also provides methods exposed by the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature.html"},"IFeature")," interface. Each specific table annotation provides the property to access the specific table feature. For example ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibomtableannotation~bomfeature.html"},"IBomTableAnnotation::BomFeature")," will return the specific BOM feature. To get the pointer to ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature.html"},"IFeature")," it is required to call the ::GetFeature method for all specific table features."))}u.isMDXComponent=!0}}]);