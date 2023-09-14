"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[72765],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[d]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={title:"Rendering custom 3D graphics with Open GL in SOLIDWORKS API",caption:"OpenGL",description:"Section contains examples and code snippets for rendering 3D graphics in the model view using SOLIDWORKS API with OpenGL methods",sidebar_position:3,labels:["graphics","opengl","render"],"redirect-from":["/solidworks-api/adornment/open-gl/"]},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/adornment/opengl/index",id:"codestack-clone/solidworks-api/adornment/opengl/index",title:"Rendering custom 3D graphics with Open GL in SOLIDWORKS API",description:"Section contains examples and code snippets for rendering 3D graphics in the model view using SOLIDWORKS API with OpenGL methods",source:"@site/docs/codestack-clone/solidworks-api/adornment/opengl/index.md",sourceDirName:"codestack-clone/solidworks-api/adornment/opengl",slug:"/codestack-clone/solidworks-api/adornment/opengl/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/adornment/opengl/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/adornment/opengl/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Rendering custom 3D graphics with Open GL in SOLIDWORKS API",caption:"OpenGL",description:"Section contains examples and code snippets for rendering 3D graphics in the model view using SOLIDWORKS API with OpenGL methods",sidebar_position:3,labels:["graphics","opengl","render"],"redirect-from":["/solidworks-api/adornment/open-gl/"]},sidebar:"tutorialSidebar",previous:{title:"Move design table object using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/adornment/ole-objects/move-design-table/"},next:{title:"Render box grid with transparency using OpenGL and SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/adornment/opengl/box-grid-transparency/"}},p={},l=[],c={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SOLIDWORKS model is utilizing 3D rendering engines (such as DirectX and OpenGL) to draw the geometry in the graphics area."),(0,o.kt)("p",null,"SOLIDWORKS API enables 3rd party add-ins and macros to inject 3D graphical objects directly into the model layer using ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OpenGL"},"OpenGL")," functions."),(0,o.kt)("p",null,"In this case geometry is embedded into the graphics view and transformed together with the model itself. It means that is is not required to calculate the transformation matrix."),(0,o.kt)("p",null,"OpenGL is the most popular cross-platform library for high performance rendering which is used in gaming, virtual reality, CAD, etc.. Explore the ",(0,o.kt)("a",{parentName:"p",href:"https://www.opengl.org/documentation/"},"Documentation")," for more information about this library."),(0,o.kt)("p",null,"OpenGL graphics should be rendered within the ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dmodelviewevents_bufferswapnotifyeventhandler.html"},"BufferSwapNotify")," event of ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelView.html"},"IModelView")," interface."),(0,o.kt)("p",null,"Such technique of rendering can be useful when it is required to display complex graphics or animation, but creating temp or permanent geometry can be performance consuming or impossible due to the other constraints."),(0,o.kt)("p",null,"Explore this section for code examples and macros which demonstrate the usage of OpenGL to render objects in views using SOLIDWORKS API."))}m.isMDXComponent=!0}}]);