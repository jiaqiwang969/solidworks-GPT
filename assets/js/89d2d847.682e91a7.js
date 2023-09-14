"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[55592],{3905:(e,t,a)=>{a.d(t,{Zo:()=>L,kt:()=>N});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function M(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},L=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},j="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},o=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,L=M(e,["components","mdxType","originalType","parentName"]),j=s(a),o=n,N=j["".concat(c,".").concat(o)]||j[o]||l[o]||r;return a?i.createElement(N,u(u({ref:t},L),{},{components:a})):i.createElement(N,u({ref:t},L))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,u=new Array(r);u[0]=o;var M={};for(var c in t)hasOwnProperty.call(t,c)&&(M[c]=t[c]);M.originalType=e,M[j]="string"==typeof e?e:n,u[1]=M;for(var s=2;s<r;s++)u[s]=a[s];return i.createElement.apply(null,u)}return i.createElement.apply(null,a)}o.displayName="MDXCreateElement"},93068:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>l,frontMatter:()=>r,metadata:()=>M,toc:()=>s});var i=a(87462),n=(a(67294),a(3905));const r={title:"Tutorials and code examples of SOLIDWORKS eDrawings API",caption:"eDrawings API",description:"Overview of SOLIDWORKS eDrawings API, examples, tutorials and code snippets",image:"edrawings-api.svg",labels:["edrawings"],sidebar_position:0},u=void 0,M={unversionedId:"codestack-clone/edrawings-api/index",id:"codestack-clone/edrawings-api/index",title:"Tutorials and code examples of SOLIDWORKS eDrawings API",description:"Overview of SOLIDWORKS eDrawings API, examples, tutorials and code snippets",source:"@site/docs/codestack-clone/edrawings-api/index.md",sourceDirName:"codestack-clone/edrawings-api",slug:"/codestack-clone/edrawings-api/",permalink:"/solidworks-GPT/docs/codestack-clone/edrawings-api/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/edrawings-api/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Tutorials and code examples of SOLIDWORKS eDrawings API",caption:"eDrawings API",description:"Overview of SOLIDWORKS eDrawings API, examples, tutorials and code snippets",image:"edrawings-api.svg",labels:["edrawings"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"edrawings-api",permalink:"/solidworks-GPT/docs/category/edrawings-api"},next:{title:"getting started",permalink:"/solidworks-GPT/docs/category/getting-started-2"}},c={},s=[],L={toc:s},j="wrapper";function l(e){let{components:t,...r}=e;return(0,n.kt)(j,(0,i.Z)({},L,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"eDrawings API",src:a(5998).Z,width:"88",height:"33"}),"{ width=350 }"),(0,n.kt)("p",null,"eDrawings is a stand-alone application developed by SOLIDWORKS which allows to view and markup SOLIDWORKS files, some foreign files and lightweight eDrawings format. Free version is available along with Professional version."),(0,n.kt)("p",null,"In addition to specific eDrawings files format (",(0,n.kt)("em",{parentName:"p"},".eprt, "),".easm, ",(0,n.kt)("em",{parentName:"p"},".edrw), eDrawings can import files from several popular CAD systems, such as SOLIDWORKS ("),".sldprt, ",(0,n.kt)("em",{parentName:"p"},".sldasm, "),".slddrw), Autodesk Inventor (",(0,n.kt)("em",{parentName:"p"},".ipt, "),".iam), CATIA (",(0,n.kt)("em",{parentName:"p"},".catpart, .catproduct), Solid Edge ("),".par, ",(0,n.kt)("em",{parentName:"p"},".psm, "),".asm), Pro/Engineer (",(0,n.kt)("em",{parentName:"p"},".asm, "),".prt), NX (*.prt) etc. as well as neutral CAD formats, such as STEP, IGES, SAT, etc."),(0,n.kt)("p",null,"eDrawings can export files to Web Html Files (",(0,n.kt)("em",{parentName:"p"},".html), Stereolithography Files ("),".stl), Image Files (",(0,n.kt)("em",{parentName:"p"},".bmp, "),".tif, ",(0,n.kt)("em",{parentName:"p"},".jpg, "),".png, *.gif) etc."),(0,n.kt)("p",null,"eDrawings also supports printing from drawing documents. "),(0,n.kt)("p",null,"eDrawings viewer is lightweight and doesn't require to have SOLIDWORKS installed to view files. Download eDrawings from the ",(0,n.kt)("a",{parentName:"p",href:"https://www.edrawingsviewer.com"},"eDrawings Viewer")," web-site."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/SWHelp_List.html?id=910f478a27674aea9e7869b31a3f9252"},"API help")," is available online."))}l.isMDXComponent=!0},5998:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OC4yNjggMzMuMTE4Ij48cGF0aCBzdHlsZT0ibGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDA7dGV4dC10cmFuc2Zvcm06bm9uZTt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO3NvbGlkLWNvbG9yOiMwMDA7c29saWQtb3BhY2l0eToxIiBmaWxsPSIjYmRlNTZhIiBzdHJva2U9IiNiNWIxYjkiIHN0cm9rZS1vcGFjaXR5PSIuOTkyIiBzdHJva2Utd2lkdGg9Ii41IiBkPSJNMjAuNzc4LjI1djE1LjIyOGwtLjk5Ny0uNDc2LTYuNzExLTMuMjA5LS4wMzUgMi42MjhILjI1djIuMjQxaDEyLjc1NmwtLjAzIDIuMzk0IDcuODAyLTMuNDExdjE3LjIyM2gxLjY0NFYuMjV6bTE2LjA5IDYuNDUyYy00LjM5NC0uMDYxLTkuMTYyIDMuMzEzLTkuNzggOC40NjgtLjkxOCA3LjY1OCA1LjcwNiAxNS45NDIgMTcuNzAzIDcuODNsLTEuOTU3LTIuNzk2Yy01LjE1NyAyLjY5Ni05LjY3NyA0LjAxMi0xMC40MTQtMi44NjZINDQuNTFjLjI4My03LjQ5LTMuNTE1LTEwLjU4LTcuNjQzLTEwLjYzNnptLS4zODUgMy4zMThoLjE4YzEuNDkyLjA1NSAyLjg2MyAxLjI2IDMuMDI2IDQuMTczbC03LjA2LjE0YzAtMi40NyAxLjk4Ny00LjI2NiAzLjg1NC00LjMxM3oiIGNvbG9yPSIjMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjQwMCIgb3ZlcmZsb3c9InZpc2libGUiLz48cGF0aCBzdHlsZT0ibGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDA7dGV4dC10cmFuc2Zvcm06bm9uZTt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO3NvbGlkLWNvbG9yOiMwMDA7c29saWQtb3BhY2l0eToxIiBmaWxsPSIjYmRlNTZhIiBkPSJNNTYuMzYxIDIuMTRhMy44MTQgMy44MTQgMCAwIDAtMy43OTkgMy43OTlWMjUuNjhjMCAyLjA4NyAxLjcxMyAzLjggMy44IDMuOGgyOC4xMDZjMi4wODcgMCAzLjgtMS43MTMgMy44LTMuOFY1LjkzOWMwLS43MTUtLjIwMS0xLjM4NS0uNTQ5LTEuOTU4di0uMTJoLS4wNzdBMy44MDYgMy44MDYgMCAwIDAgODQuNDcgMi4xNHptMjMuNjM0IDIuNDdoNS43OThWOS4xaC01Ljc5OHptLTkuMzY3Ljk2OWg3LjYzOXYyLjU1M2gtNy42Mzl6bS0xNS45MSA2Ljg2MWgzMS4zOTV2MTMuMjQxYzAgLjkzLS43MTUgMS42NDQtMS42NDUgMS42NDRINTYuMzYxYy0uOTMgMC0xLjY0My0uNzE0LTEuNjQzLTEuNjQ0eiIgY29sb3I9IiMwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNDAwIiBvdmVyZmxvdz0idmlzaWJsZSIvPjxwYXRoIHN0cm9rZS13aWR0aD0iMS4xNzciIGQ9Ik03OS44MyAxNC40ODZjLS4yOCAwLS41Ni4wMzUtLjgzLjA3Ni0uMDQyLjY4OS0uMTUgMS4zNi0uNzIgMS41OTctLjU3My4yMzctMS4xMS0uMTcyLTEuNjI4LS42My0uNDUzLjMzMS0uODY3LjczLTEuMTk4IDEuMTgzLjQ2LjUyLjg4MyAxLjA1My42NDUgMS42MjctLjIzNy41NzMtLjkyLjY4LTEuNjEyLjcyMmE1LjM5MiA1LjM5MiAwIDAgMC0uMDYxLjgyOWMwIC4yODcuMDE4LjU3LjA2MS44NDQuNjkyLjA0MiAxLjM3NS4xMTggMS42MTIuNjkuMjM4LjU3NS0uMTg1IDEuMTQtLjY0NSAxLjY1OS4zMy40NS43NDguODM4IDEuMTk4IDEuMTY3LjUxNi0uNDU2IDEuMDU3LS44NSAxLjYyNy0uNjE0LjU3NC4yMzcuNjguOTA1LjcyMiAxLjU5NmE1LjUxOCA1LjUxOCAwIDAgMCAxLjY0MyAwYy4wNDItLjY5MS4xNDgtMS4zNTkuNzIxLTEuNTk2LjU3LS4yMzYgMS4xMTEuMTU4IDEuNjI4LjYxNC40NS0uMzI5Ljg2OC0uNzE4IDEuMTk3LTEuMTY3LS40Ni0uNTItLjg4My0xLjA4NC0uNjQ1LTEuNjU4LjIzOC0uNTczLjkzNi0uNjQ5IDEuNjI4LS42OTFhNS40NiA1LjQ2IDAgMCAwIC4wNjEtLjg0NGMwLS4yODQtLjAyLS41NTgtLjA2MS0uODMtLjY5Mi0uMDQyLTEuMzktLjE0OC0xLjYyOC0uNzIxLS4yMzgtLjU3NC4xODUtMS4xMDguNjQ1LTEuNjI3YTUuNTAzIDUuNTAzIDAgMCAwLTEuMTk3LTEuMTgzYy0uNTE4LjQ1OC0xLjA1Ni44NjctMS42MjguNjMtLjU3LS4yMzYtLjY3OS0uOTA4LS43MjEtMS41OTdhNS4zMTMgNS4zMTMgMCAwIDAtLjgxNC0uMDc2em0wIDMuNjM4Yy45NzYgMCAxLjc2NS43OSAxLjc2NSAxLjc2NnMtLjc4OSAxLjc2NS0xLjc2NSAxLjc2NWMtLjk3NiAwLTEuNzgxLS43ODktMS43ODEtMS43NjUgMC0uOTc3LjgwNS0xLjc2NiAxLjc4LTEuNzY2eiIgY29sb3I9IiMwMDAiLz48ZyBhcmlhLWxhYmVsPSJBUEkiIHN0eWxlPSJsaW5lLWhlaWdodDoxLjI1IiBmaWxsPSIjOGE2OTExIiBzdHJva2Utd2lkdGg9IjEuNDY4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNy42MzkiIGZvbnQtd2VpZ2h0PSI3MDAiIGxldHRlci1zcGFjaW5nPSIwIiB3b3JkLXNwYWNpbmc9IjAiPjxwYXRoIGQ9Ik02MC4xODMgMjIuMjk4SDU3LjM2bC0uNDQ1IDEuMjc1SDU1LjFsMi41OTMtN2gyLjE1M2wyLjU5MyA3aC0xLjgxNXpNNTcuODExIDIxaDEuOTE3bC0uOTU2LTIuNzg1ek02My4zNjIgMTYuNTczaDIuOTk3cTEuMzM2IDAgMi4wNDkuNTk1LjcxNy41OTEuNzE3IDEuNjg4IDAgMS4xMDItLjcxNyAxLjY5OC0uNzEzLjU5LTIuMDUuNTloLTEuMTl2Mi40M2gtMS44MDZ6bTEuODA2IDEuMzA4djEuOTU1aC45OThxLjUyNSAwIC44MTItLjI1My4yODYtLjI1OC4yODYtLjcyN3QtLjI4Ni0uNzIycS0uMjg3LS4yNTMtLjgxMi0uMjUzek03MC4zOTYgMTYuNTczSDcyLjJ2N2gtMS44MDV6IiBzdHlsZT0iLWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonc2Fucy1zZXJpZiBCb2xkJyIvPjwvZz48L3N2Zz4="}}]);