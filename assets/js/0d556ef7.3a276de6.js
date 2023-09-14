"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[4285],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(g,s(s({ref:n},l),{},{components:t})):o.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const i={title:"Rendering custom 3D graphics with Open GL in SOLIDWORKS API",caption:"OpenGL",description:"Section contains examples and code snippets for rendering 3D graphics in the model view using SOLIDWORKS API with OpenGL methods",sidebar_position:3,labels:["graphics","opengl","render"],"redirect-from":["/solidworks-api/adornment/open-gl/"]},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/index",title:"Rendering custom 3D graphics with Open GL in SOLIDWORKS API",description:"Section contains examples and code snippets for rendering 3D graphics in the model view using SOLIDWORKS API with OpenGL methods",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Rendering custom 3D graphics with Open GL in SOLIDWORKS API",caption:"OpenGL",description:"Section contains examples and code snippets for rendering 3D graphics in the model view using SOLIDWORKS API with OpenGL methods",sidebar_position:3,labels:["graphics","opengl","render"],"redirect-from":["/solidworks-api/adornment/open-gl/"]},sidebar:"tutorialSidebar",previous:{title:"Move design table object using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/ole-objects/move-design-table/"},next:{title:"Render box grid with transparency using OpenGL and SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/box-grid-transparency/"}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SOLIDWORKS model is utilizing 3D rendering engines (such as DirectX and OpenGL) to draw the geometry in the graphics area."),(0,r.kt)("p",null,"SOLIDWORKS API enables 3rd party add-ins and macros to inject 3D graphical objects directly into the model layer using ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OpenGL"},"OpenGL")," functions."),(0,r.kt)("p",null,"In this case geometry is embedded into the graphics view and transformed together with the model itself. It means that is is not required to calculate the transformation matrix."),(0,r.kt)("p",null,"OpenGL is the most popular cross-platform library for high performance rendering which is used in gaming, virtual reality, CAD, etc.. Explore the ",(0,r.kt)("a",{parentName:"p",href:"https://www.opengl.org/documentation/"},"Documentation")," for more information about this library."),(0,r.kt)("p",null,"OpenGL graphics should be rendered within the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dmodelviewevents_bufferswapnotifyeventhandler.html"},"BufferSwapNotify")," event of ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelView.html"},"IModelView")," interface."),(0,r.kt)("p",null,"Such technique of rendering can be useful when it is required to display complex graphics or animation, but creating temp or permanent geometry can be performance consuming or impossible due to the other constraints."),(0,r.kt)("p",null,"Explore this section for code examples and macros which demonstrate the usage of OpenGL to render objects in views using SOLIDWORKS API."))}u.isMDXComponent=!0}}]);