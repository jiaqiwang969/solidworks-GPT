"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[81064],{3905:(e,n,o)=>{o.d(n,{Zo:()=>l,kt:()=>h});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=t.createContext({}),p=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return o?t.createElement(h,s(s({ref:n},l),{},{components:o})):t.createElement(h,s({ref:n},l))}));function h(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=o[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},653:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var t=o(87462),r=(o(67294),o(3905));const i={title:"Rendering custom 3D graphics with Open GL in SOLIDWORKS API",caption:"OpenGL",description:"Section contains examples and code snippets for rendering 3D graphics in the model view using SOLIDWORKS API with OpenGL methods",sidebar_position:3,labels:["graphics","opengl","render"],"redirect-from":["/solidworks-api/adornment/open-gl/"]},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/opengl/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/opengl/index",title:"Rendering custom 3D graphics with Open GL in SOLIDWORKS API",description:"Section contains examples and code snippets for rendering 3D graphics in the model view using SOLIDWORKS API with OpenGL methods",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/opengl/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/opengl",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/opengl/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/opengl/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/opengl/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Rendering custom 3D graphics with Open GL in SOLIDWORKS API",caption:"OpenGL",description:"Section contains examples and code snippets for rendering 3D graphics in the model view using SOLIDWORKS API with OpenGL methods",sidebar_position:3,labels:["graphics","opengl","render"],"redirect-from":["/solidworks-api/adornment/open-gl/"]},sidebar:"tutorialSidebar",previous:{title:"Pan model views with screen pixels using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/model-view/transform-pan-view/"},next:{title:"Render box grid with transparency using OpenGL and SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/opengl/box-grid-transparency/"}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:n,...o}=e;return(0,r.kt)(d,(0,t.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SOLIDWORKS model is utilizing 3D rendering engines (such as DirectX and OpenGL) to draw the geometry in the graphics area."),(0,r.kt)("p",null,"SOLIDWORKS API enables 3rd party add-ins and macros to inject 3D graphical objects directly into the model layer using ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OpenGL"},"OpenGL")," functions."),(0,r.kt)("p",null,"In this case geometry is embedded into the graphics view and transformed together with the model itself. It means that is is not required to calculate the transformation matrix."),(0,r.kt)("p",null,"OpenGL is the most popular cross-platform library for high performance rendering which is used in gaming, virtual reality, CAD, etc.. Explore the ",(0,r.kt)("a",{parentName:"p",href:"https://www.opengl.org/documentation/"},"Documentation")," for more information about this library."),(0,r.kt)("p",null,"OpenGL graphics should be rendered within the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dmodelviewevents_bufferswapnotifyeventhandler.html"},"BufferSwapNotify")," event of ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelView.html"},"IModelView")," interface."),(0,r.kt)("p",null,"Such technique of rendering can be useful when it is required to display complex graphics or animation, but creating temp or permanent geometry can be performance consuming or impossible due to the other constraints."),(0,r.kt)("p",null,"Explore this section for code examples and macros which demonstrate the usage of OpenGL to render objects in views using SOLIDWORKS API."))}u.isMDXComponent=!0}}]);