"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[35720],{3905:(e,o,n)=>{n.d(o,{Zo:()=>c,kt:()=>k});var t=n(67294);function i(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function s(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?s(Object(n),!0).forEach((function(o){i(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function a(e,o){if(null==e)return{};var n,t,i=function(e,o){if(null==e)return{};var n,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),l=function(e){var o=t.useContext(d),n=o;return e&&(n="function"==typeof e?e(o):r(r({},o),e)),n},c=function(e){var o=l(e.components);return t.createElement(d.Provider,{value:o},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var n=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(n),u=i,k=p["".concat(d,".").concat(u)]||p[u]||m[u]||s;return n?t.createElement(k,r(r({ref:o},c),{},{components:n})):t.createElement(k,r({ref:o},c))}));function k(e,o){var n=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=u;var a={};for(var d in o)hasOwnProperty.call(o,d)&&(a[d]=o[d]);a.originalType=e,a[p]="string"==typeof e?e:i,r[1]=a;for(var l=2;l<s;l++)r[l]=n[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60535:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=n(87462),i=(n(67294),n(3905));const s={title:"Working with dimensions using SOLIDWORKS API",caption:"Dimensions",description:"Collection of articles and code examples for automating models dimensions via SOLIDWORKS API",sidebar_position:7,image:"solidworks-dimensions-api.png"},r=void 0,a={unversionedId:"codestack/solidworks-api/document/dimensions/index",id:"codestack/solidworks-api/document/dimensions/index",title:"Working with dimensions using SOLIDWORKS API",description:"Collection of articles and code examples for automating models dimensions via SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/dimensions/index.md",sourceDirName:"codestack/solidworks-api/document/dimensions",slug:"/codestack/solidworks-api/document/dimensions/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/dimensions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/dimensions/index.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Working with dimensions using SOLIDWORKS API",caption:"Dimensions",description:"Collection of articles and code examples for automating models dimensions via SOLIDWORKS API",sidebar_position:7,image:"solidworks-dimensions-api.png"},sidebar:"tutorialSidebar",previous:{title:"Understanding transforms in sketches while using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/sketch/transform/"},next:{title:"Add dimensions to bend lines using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/dimensions/add-bend-lines/"}},d={},l=[],c={toc:l},p="wrapper";function m(e){let{components:o,...s}=e;return(0,i.kt)(p,(0,t.Z)({},c,s,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Automating dimensions via SOLIDWORKS API",src:n(49913).Z,width:"574",height:"370"}),"{ width=300 }"),(0,i.kt)("p",null,"Dimensions can be added to the selected sketch segments via ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~adddimension.html"},"IModelDocExtension::AddDimension")," SOLIDWORKS API method."),(0,i.kt)("p",null,"Each dimension has a unique name which can be assigned by the user. Dimension object can be retrieved by name via ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldoc2~parameter.html"},"IModelDoc2::Parameter")," method. "),(0,i.kt)("p",null,"Refer the ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2022/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDimension.html"},"IDimension")," SOLIDWORKS API interface for the list of available methods for dimensions automation."))}m.isMDXComponent=!0},49913:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/solidworks-dimensions-api-1e06a3e02a036c6e87b2315f9fd874db.png"}}]);