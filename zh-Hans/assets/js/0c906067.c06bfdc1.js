"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[34877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(r),h=n,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||s;return r?o.createElement(m,i(i({ref:t},d),{},{components:r})):o.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},21941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const s={layout:"sw-macro-fix",title:"Fix errors when creating sketch segments using SOLIDWORKS API",caption:"Failed to Create Sketch Segments",description:"Fixing the inconsistency of sketch segments (line, arcs, etc) or sketch points creation in the macro",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-failed-create-sketch-segments.html"]},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-sketch-segments-error/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-sketch-segments-error/index",title:"Fix errors when creating sketch segments using SOLIDWORKS API",description:"Fixing the inconsistency of sketch segments (line, arcs, etc) or sketch points creation in the macro",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-sketch-segments-error/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-sketch-segments-error",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-sketch-segments-error/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-sketch-segments-error/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-sketch-segments-error/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"Fix errors when creating sketch segments using SOLIDWORKS API",caption:"Failed to Create Sketch Segments",description:"Fixing the inconsistency of sketch segments (line, arcs, etc) or sketch points creation in the macro",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-failed-create-sketch-segments.html"]},sidebar:"tutorialSidebar",previous:{title:"Create selectable 3D bounding box sketch using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-selectable-bounding-box/"},next:{title:"Create temp spherical sheet body using SOLIDWORKS modeler API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-spherical-surface/"}},c={},l=[{value:"Symptoms",id:"symptoms",level:2},{value:"Cause",id:"cause",level:2},{value:"Resolution",id:"resolution",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"symptoms"},"Symptoms"),(0,n.kt)("p",null,"SOLIDWORKS macro creates sketch segments (line, arcs, etc) or sketch points using SOLIDWORKS API. And in some cases the elements are not created while it works correct in other cases."),(0,n.kt)("h2",{id:"cause"},"Cause"),(0,n.kt)("p",null,"By default all entities inserted using the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/English/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.ISketchManager.html"},"ISketchManager")," interface are created via user interface. That means that the entity cannot be created if the target area (i.e. boundaries of the segments) is not visible in the user interface (e.g. the view is moved or scaled).  "),(0,n.kt)("h2",{id:"resolution"},"Resolution"),(0,n.kt)("p",null,"Set ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isketchmanager~addtodb.html"},"ISketchManager::AddToDB")," property to ",(0,n.kt)("em",{parentName:"p"},"True")," before the entities creation and restore the original value once the job is finished.\nSetting this option to true will bypass the creation of entities via User Interface rather add the data directly to the model storage. This may also improve performance while creating the entities."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim addToDbOrig As Boolean\n    \n    addToDbOrig = swModel.SketchManager.AddToDB 'get the original value\n    swModel.SketchManager.AddToDB = True\n    \n    swModel.SketchManager.CreateLine 0, 0, 0, 0.01, 0.02, 0\n\n    swModel.SketchManager.AddToDB = addToDbOrig 'restore the original value\n    \nEnd Sub\n")))}u.isMDXComponent=!0}}]);