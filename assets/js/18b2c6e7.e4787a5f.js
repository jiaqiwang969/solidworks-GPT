"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[54428],{3905:(e,t,i)=>{i.d(t,{Zo:()=>I,kt:()=>p});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),m=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},I=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,I=o(e,["components","mdxType","originalType","parentName"]),d=m(i),u=n,p=d["".concat(c,".").concat(u)]||d[u]||s[u]||r;return i?a.createElement(p,l(l({ref:t},I),{},{components:i})):a.createElement(p,l({ref:t},I))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var m=2;m<r;m++)l[m]=i[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},54220:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=i(87462),n=(i(67294),i(3905));const r={title:"Introduction to SOLIDWORKS Document Manager API",caption:"Document Manager API",description:"Collection of examples and articles utilizing SOLIDWORKS Document Manager library",image:"document-manager-api.svg",labels:["document manager"],"redirect-from":["/2018/04/document-manager-api-getting-started.html"],sidebar_position:0},l=void 0,o={unversionedId:"codestack-clone/solidworks-document-manager-api/index",id:"codestack-clone/solidworks-document-manager-api/index",title:"Introduction to SOLIDWORKS Document Manager API",description:"Collection of examples and articles utilizing SOLIDWORKS Document Manager library",source:"@site/docs/codestack-clone/solidworks-document-manager-api/index.md",sourceDirName:"codestack-clone/solidworks-document-manager-api",slug:"/codestack-clone/solidworks-document-manager-api/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-document-manager-api/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-document-manager-api/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction to SOLIDWORKS Document Manager API",caption:"Document Manager API",description:"Collection of examples and articles utilizing SOLIDWORKS Document Manager library",image:"document-manager-api.svg",labels:["document manager"],"redirect-from":["/2018/04/document-manager-api-getting-started.html"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"solidworks-document-manager-api",permalink:"/solidworks-GPT/docs/category/solidworks-document-manager-api"},next:{title:"getting start",permalink:"/solidworks-GPT/docs/category/getting-start"}},c={},m=[{value:"Benefits",id:"benefits",level:2},{value:"Supported Functionality",id:"supported-functionality",level:2},{value:"Application",id:"application",level:2}],I={toc:m},d="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},I,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SOLIDWORKS Document Manager API",src:i(3672).Z,width:"31",height:"40"}),"{ width=150 }"),(0,n.kt)("p",null,"This section introduces you to SOLIDWORKS Document Manager - powerful stand-alone library supplied by SOLIDWORKS which exposes API and allows to read and write metadata directly from SOLIDWORKS files stream."),(0,n.kt)("h2",{id:"benefits"},"Benefits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Free for customers or SOLIDWORKS partners (research, solution or gold) on subscription"),(0,n.kt)("li",{parentName:"ul"},"Lightweight - library is about 13 MB in size"),(0,n.kt)("li",{parentName:"ul"},"Stand-alone - doesn't require SOLIDWORKS to be installed in order to access the files"),(0,n.kt)("li",{parentName:"ul"},"Quick - data is accessed directly from the stream without the need to load the full file into the memory")),(0,n.kt)("h2",{id:"supported-functionality"},"Supported Functionality"),(0,n.kt)("p",null,"Document Manager has a limited functionality compared to full SOLIDWORKS API. The following list are the main modules supported by Document Manager library."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Basic"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Reading/Writing Custom Properties (including configuration specific and summary information)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Reading file relationships (assembly Bill of Materials and drawings)"),(0,n.kt)("li",{parentName:"ul"},"Replacing file relationships (components and drawing view references)"),(0,n.kt)("li",{parentName:"ul"},"Reading components transformations in the assembly"),(0,n.kt)("li",{parentName:"ul"},"Reading tables data in models and drawings"),(0,n.kt)("li",{parentName:"ul"},"Reading ",(0,n.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2015/english/api/sldworksapiprogguide/overview/third-party_data_in_solidworks_files.htm"},"3rd party storage data")),(0,n.kt)("li",{parentName:"ul"},"Getting the information about the configurations, drawing views and their properties"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Previews"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Getting 2D image previews from files and configurations"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DimXpert"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Accessing DimXpert dimensions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Accessing DimXpert features"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Geometry Streams"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Getting Parasolid geometry"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"XML Streams"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Reading embedded assembly XML data",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Reading 3D Content Central data"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tesselation"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Getting the tessellation (triangulation) data (if stored in the model)")))),(0,n.kt)("h2",{id:"application"},"Application"),(0,n.kt)("p",null,"List of possible applications which could be developed with SOLIDWORKS Document Manager API includes but not limited to the following types of software:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Product Data Management (PDM) or Product Life cycle Management (PLM) application",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Bill Of Materials",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Preview"),(0,n.kt)("li",{parentName:"ul"},"Properties"))))),(0,n.kt)("li",{parentName:"ul"},"3D Viewers for SOLIDWORKS files"),(0,n.kt)("li",{parentName:"ul"},"CAD systems with the requirement of importing the SOLIDWORKS files"),(0,n.kt)("li",{parentName:"ul"},"Inspection software with requirements to access DimXpert data")),(0,n.kt)("p",null,"Refer the ",(0,n.kt)("a",{parentName:"p",href:"getting-started"},"Getting Started")," article for an overview of steps required to start development with Document Manager."))}s.isMDXComponent=!0},3672:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzAuNTU2IDQwLjQ5NyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJmIiBjeD0iODEuNzkiIGN5PSIxMDAuMzIiIHI9IjQ0LjQyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC43MDU5OCAtLjU2MyAuNjI2NTYgLjc4NTY4IC05MS4yNjEgNTguOCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjYSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZGJkYmRiIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIzMy44MjQiIHgyPSI0NC41NTYiIHkxPSI1Ni43NDEiIHkyPSI1Ni43NDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjYiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjYWNhNGE0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWVlIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iaCIgY3g9IjIxOS42MDgiIGN5PSIxOTguNjEzIiByPSI4Mi4yNzQiIGZ4PSIyMTkuNjA4IiBmeT0iMTk4LjYxMyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAuNjA4MDYgMCA1Ny4wNDgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2MiLz48bGluZWFyR3JhZGllbnQgaWQ9ImMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2VlZWU1NyIvPjxzdG9wIG9mZnNldD0iLjY0OSIgc3RvcC1jb2xvcj0iI2YyZjY1NCIgc3RvcC1vcGFjaXR5PSIuNDk4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNWRiNTUwIiBzdG9wLW9wYWNpdHk9Ii45MTQiLz48L2xpbmVhckdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iaSIgY3g9IjIxOS42MDgiIGN5PSIxOTguNjEzIiByPSI4Mi4yNzQiIGZ4PSIyMTkuNjA4IiBmeT0iMTk4LjYxMyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAuNjA4MDYgMCA1Ny4wNDgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2MiLz48bGluZWFyR3JhZGllbnQgaWQ9ImoiIHgxPSI4NC4xNTMiIHgyPSIxMDMuNzM0IiB5MT0iMzE2Ljk2NyIgeTI9IjMyNS40OTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjZCIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWVlZTU3Ii8+PHN0b3Agb2Zmc2V0PSIuMjYyIiBzdG9wLWNvbG9yPSIjZWVmMjY0IiBzdG9wLW9wYWNpdHk9Ii40OTgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNiNWIwNTAiIHN0b3Atb3BhY2l0eT0iLjkxNCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJrIiB4MT0iLTg2Mi45MTYiIHgyPSItODIxLjg3OCIgeTE9IjcwLjc3MyIgeTI9IjMwLjU3NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNlIi8+PGxpbmVhckdyYWRpZW50IGlkPSJlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyOTk5M2EiLz48c3RvcCBvZmZzZXQ9Ii41MTkiIHN0b3AtY29sb3I9IiMyY2NiMDAiIHN0b3Atb3BhY2l0eT0iLjQ3OCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOWExOCIgc3RvcC1vcGFjaXR5PSIuOTYxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0idXJsKCNmKSIgc3Ryb2tlPSIjMDMwMzAzIiBzdHJva2Utb3BhY2l0eT0iLjgyIiBzdHJva2Utd2lkdGg9Ii4yNjUiIGQ9Ik0xNC4xODkgNTEuMzR2NDAuMjMySDQ0LjQ4VjYyLjE5N0wzMy45MzIgNTEuMzR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQuMDU2IC01MS4yMDcpIi8+PHBhdGggZmlsbD0idXJsKCNnKSIgc3Ryb2tlPSIjMDMwMzAzIiBzdHJva2Utb3BhY2l0eT0iLjgyIiBzdHJva2Utd2lkdGg9Ii4yNjUiIGQ9Ik0zNS45MTYgNTkuNTI5bC4wNDYtMi44NDdjLjAyMy0yLjI1LS45NS0zLjgyLTIuMDMtNS4zNDJsMTAuNTI5IDEwLjc4M2MtMS4zODctLjkwMi0yLjkwNS0yLjQ0Ny01LjM3NC0yLjUyN3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNC4wNTYgLTUxLjIwNykiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM1MTUxNTEiIHN0cm9rZS1vcGFjaXR5PSIuODY4IiBzdHJva2Utd2lkdGg9Ii40MzEiIGQ9Ik0yLjA1OCA1LjQ5NmgxNi4xMjFNMi4wNTggMTAuNTRoMTYuMTIxIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTE1MTUxIiBzdHJva2Utb3BhY2l0eT0iLjg2OCIgc3Ryb2tlLXdpZHRoPSIuNTQiIGQ9Ik0yLjA1OCAxNS42MzdIMjcuNE0yLjA1OCAzNi4yNDdIMjcuNCIvPjxnIHN0cm9rZS13aWR0aD0iMS44MyI+PHBhdGggZmlsbD0idXJsKCNqKSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii4zNjkiIGQ9Ik04NC4xNTMgMzA4Ljg3djguMDk3aC04LjI2N3Y4LjUyNGgyNy44NDh2LTguNTI0aC04LjI2OHYtOC4wOThIODkuODF6IiB0cmFuc2Zvcm09Im1hdHJpeCguODcxMSAwIDAgLjg3MTEgLTYzLjcwMyAtMjUwLjc2NCkiLz48cGF0aCBmaWxsPSJ1cmwoI2spIiBzdHJva2U9IiMwMDAiIGQ9Ik0tODYyLjkxNiA3MC43NzNoNDEuMDM4VjMwLjU3N2gtNDAuNjV6IiB0cmFuc2Zvcm09Im1hdHJpeCguMTc1NSAwIDAgLjE3NTUgMTUzLjgzNiAxMi45MjcpIi8+PC9nPjwvc3ZnPg=="}}]);