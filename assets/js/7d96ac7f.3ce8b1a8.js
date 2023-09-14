"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[63049],{3905:(e,o,n)=>{n.d(o,{Zo:()=>l,kt:()=>w});var i=n(67294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function s(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);o&&(i=i.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?s(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function a(e,o){if(null==e)return{};var n,i,t=function(e,o){if(null==e)return{};var n,i,t={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=i.createContext({}),d=function(e){var o=i.useContext(c),n=o;return e&&(n="function"==typeof e?e(o):r(r({},o),e)),n},l=function(e){var o=d(e.components);return i.createElement(c.Provider,{value:o},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return i.createElement(i.Fragment,{},o)}},u=i.forwardRef((function(e,o){var n=e.components,t=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(n),u=t,w=p["".concat(c,".").concat(u)]||p[u]||m[u]||s;return n?i.createElement(w,r(r({ref:o},l),{},{components:n})):i.createElement(w,r({ref:o},l))}));function w(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var s=n.length,r=new Array(s);r[0]=u;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=e,a[p]="string"==typeof e?e:t,r[1]=a;for(var d=2;d<s;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71972:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(87462),t=(n(67294),n(3905));const s={title:"Working with dimensions using SOLIDWORKS API",caption:"Dimensions",description:"Collection of articles and code examples for automating models dimensions via SOLIDWORKS API",sidebar_position:7,image:"solidworks-dimensions-api.png"},r=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/index",title:"Working with dimensions using SOLIDWORKS API",description:"Collection of articles and code examples for automating models dimensions via SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/index.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Working with dimensions using SOLIDWORKS API",caption:"Dimensions",description:"Collection of articles and code examples for automating models dimensions via SOLIDWORKS API",sidebar_position:7,image:"solidworks-dimensions-api.png"},sidebar:"tutorialSidebar",previous:{title:"Understanding transforms in sketches while using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/transform/"},next:{title:"Add dimensions to bend lines using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/add-bend-lines/"}},c={},d=[],l={toc:d},p="wrapper";function m(e){let{components:o,...s}=e;return(0,t.kt)(p,(0,i.Z)({},l,s,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Automating dimensions via SOLIDWORKS API",src:n(32327).Z,width:"574",height:"370"}),"{ width=300 }"),(0,t.kt)("p",null,"Dimensions can be added to the selected sketch segments via ",(0,t.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~adddimension.html"},"IModelDocExtension::AddDimension")," SOLIDWORKS API method."),(0,t.kt)("p",null,"Each dimension has a unique name which can be assigned by the user. Dimension object can be retrieved by name via ",(0,t.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldoc2~parameter.html"},"IModelDoc2::Parameter")," method. "),(0,t.kt)("p",null,"Refer the ",(0,t.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDimension.html"},"IDimension")," SOLIDWORKS API interface for the list of available methods for dimensions automation."))}m.isMDXComponent=!0},32327:(e,o,n)=>{n.d(o,{Z:()=>i});const i=n.p+"assets/images/solidworks-dimensions-api-1e06a3e02a036c6e87b2315f9fd874db.png"}}]);