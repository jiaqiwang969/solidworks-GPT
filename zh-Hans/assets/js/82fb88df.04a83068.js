"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[20924],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return o?r.createElement(k,a(a({ref:t},p),{},{components:o})):r.createElement(k,a({ref:t},p))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},67343:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={title:"Tables (BOM, General, Revision etc.) automation using SOLIDWORKS API",caption:"Tables",description:"Article explaining the functions to work with tables (Bill of Materials, General, Weldment Cut List, Holes Table) using SOLIDWORKS API",sidebar_position:8},a=void 0,s={unversionedId:"codestack/solidworks-api/document/tables/index",id:"codestack/solidworks-api/document/tables/index",title:"Tables (BOM, General, Revision etc.) automation using SOLIDWORKS API",description:"Article explaining the functions to work with tables (Bill of Materials, General, Weldment Cut List, Holes Table) using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/tables/index.md",sourceDirName:"codestack/solidworks-api/document/tables",slug:"/codestack/solidworks-api/document/tables/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/tables/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/tables/index.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Tables (BOM, General, Revision etc.) automation using SOLIDWORKS API",caption:"Tables",description:"Article explaining the functions to work with tables (Bill of Materials, General, Weldment Cut List, Holes Table) using SOLIDWORKS API",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Traverse all dimensions of component or model using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/dimensions/traverse-all/"},next:{title:"Combine identical components command in SOLIDWORKS BOM table",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/tables/combine-identical-components/"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"All table types supported by SOLIDWORKS can be accessed via API. This includes but not limited to"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bill Of Material"),(0,n.kt)("li",{parentName:"ul"},"General"),(0,n.kt)("li",{parentName:"ul"},"Weldment Cut List"),(0,n.kt)("li",{parentName:"ul"},"Holes Table")),(0,n.kt)("p",null,"etc."),(0,n.kt)("p",null,"All table inherit the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITableAnnotation.html"},"ITableAnnotation")," SOLIDWORKS API interface. This interface provides the method to work with the table (i.e. change cells, change formatting, add/remove rows etc.)."),(0,n.kt)("p",null,"There are specific table annotation for a generic table annotation. For example ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBomTableAnnotation.html"},"IBomTableAnnotation")," is a specific table annotation for Bill of Materials (BOM) table. Generic table annotation can be cast to specific by directly assigning the pointer."),(0,n.kt)("p",null,"Table is also present in the Feature Manager tree which means that it also provides methods exposed by the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature.html"},"IFeature")," interface. Each specific table annotation provides the property to access the specific table feature. For example ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibomtableannotation~bomfeature.html"},"IBomTableAnnotation::BomFeature")," will return the specific BOM feature. To get the pointer to ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature.html"},"IFeature")," it is required to call the ::GetFeature method for all specific table features."))}u.isMDXComponent=!0}}]);