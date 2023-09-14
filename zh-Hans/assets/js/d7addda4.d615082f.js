"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[47517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,k=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Tracking objects by temp and persistent ids in SOLIDWORKS API",caption:"Tracking Objects",description:"This collection of articles explaining how to track different objects while geometry manipulation or across sessions",sidebar_position:13,labels:["track","id","persist","reference"]},l=void 0,o={unversionedId:"codestack/solidworks-api/document/tracking-objects/index",id:"codestack/solidworks-api/document/tracking-objects/index",title:"Tracking objects by temp and persistent ids in SOLIDWORKS API",description:"This collection of articles explaining how to track different objects while geometry manipulation or across sessions",source:"@site/docs/codestack/solidworks-api/document/tracking-objects/index.md",sourceDirName:"codestack/solidworks-api/document/tracking-objects",slug:"/codestack/solidworks-api/document/tracking-objects/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/tracking-objects/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/tracking-objects/index.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Tracking objects by temp and persistent ids in SOLIDWORKS API",caption:"Tracking Objects",description:"This collection of articles explaining how to track different objects while geometry manipulation or across sessions",sidebar_position:13,labels:["track","id","persist","reference"]},sidebar:"tutorialSidebar",previous:{title:"Macro to remove all colors from SOLIDWORKS document",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/appearance/remove-color/"},next:{title:"Using internal IDs of SOLIDWORKS objects from API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/tracking-objects/internal-ids/"}},s={},c=[{value:"Persistent Reference Ids",id:"persistent-reference-ids",level:2},{value:"Internal Ids",id:"internal-ids",level:2},{value:"Tracking Ids",id:"tracking-ids",level:2},{value:"Names",id:"names",level:2},{value:"Attributes",id:"attributes",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When developing application which interacts with SOLIDWORKS entities in some cases it is required to reference certain objects and track them during different actions. For example it is required to find the specific feature in the template model or identify the user selected face after the face got modified (split or merged)."),(0,a.kt)("p",null,"There multiple different ways described below which provides the functionality to tag and track different elements using SOLIDWORKS API."),(0,a.kt)("h2",{id:"persistent-reference-ids"},"Persistent Reference Ids"),(0,a.kt)("p",null,"Allows to retrieve the persistent id for any selectable object in SOLIDWORKS model. The element can be quickly looked up via ",(0,a.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~getobjectbypersistreference3.html"},"IModelDocExtension::GetObjectByPersistReference3")," SOLIDWORKS API method to get the pointer by the id. The main cons of this method is a size of the id which varies around 250 bytes per entity. So if it is required to track thousands of elements this might not be the ideal approach due to the memory consumption."),(0,a.kt)("p",null,"Refer ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/tracking-objects/persist-references/"},"Persistent Reference Id")," article for more information"),(0,a.kt)("h2",{id:"internal-ids"},"Internal Ids"),(0,a.kt)("p",null,"Ids for various group of elements (sketch elements, features, etc.). Internal id only consumes small amount of memory (represented as 1 or 2 Integer or Long values). It is however not possible to lookup the element by its internal id, so it is not suitable for the software where it is required to have an instance access to the object by its id."),(0,a.kt)("p",null,"Refer ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/tracking-objects/internal-ids/"},"Internal IDs"),"  article for more information"),(0,a.kt)("h2",{id:"tracking-ids"},"Tracking Ids"),(0,a.kt)("p",null,"Assignable by the API and used to track the entities (faces, edges and vertices) across modelling operations. For example user selects face on the input body, this body is copied and changed (e.g. split or merged). In this case tracking id will be maintained and all split entities will inherit the id of the parent face."),(0,a.kt)("p",null,"Refer ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/tracking-objects/tracking-ids/"},"Tracking IDs"),"  article for more information"),(0,a.kt)("h2",{id:"names"},"Names"),(0,a.kt)("p",null,"Names are available for the user to view and edit via GUI. As names can be easily changed they shouldn't be used as a reliable way of tracking the entity. The names are good for use in the software which is using/modifying template models."),(0,a.kt)("p",null,"Refer ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/tracking-objects/names/"},"Object Names"),"  article for more information"),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("p",null,"Attributes are specific features which can be created by API and added to the feature tree. Optionally attribute can be associated with selectable object which allows tracking. Unlike macro features, attributes are native features and will remain functional in the environments where the application which created attributes is not installed."),(0,a.kt)("p",null,"Refer ",(0,a.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/data-storage/attributes/"},"Attributes")," article for more information"),(0,a.kt)("p",null,"Refer the comparison table below which categorizes all approaches above by the following criteria:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Lifetime")," - how long the id is available"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Size")," - memory consumed by id for a single element"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Visible")," - is this id visible to the user"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Changeable")," - can the id by changed by the user or API"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Searchable")," - can the reference be retrieved directly from id without the need of traversing of all elements"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Auto Disposable")," - is the id disposed automatically when the parent element is destroyed (e.g. deleted)")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Tracking Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Lifetime"),(0,a.kt)("th",{parentName:"tr",align:null},"Size"),(0,a.kt)("th",{parentName:"tr",align:null},"Visible"),(0,a.kt)("th",{parentName:"tr",align:null},"Changeable"),(0,a.kt)("th",{parentName:"tr",align:null},"Searchable"),(0,a.kt)("th",{parentName:"tr",align:null},"Auto Disposable"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Persistent Reference Ids"),(0,a.kt)("td",{parentName:"tr",align:null},"Persistent"),(0,a.kt)("td",{parentName:"tr",align:null},"~250 bytes"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Internal Ids"),(0,a.kt)("td",{parentName:"tr",align:null},"Persistent"),(0,a.kt)("td",{parentName:"tr",align:null},"2-8 bytes"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tracking Ids"),(0,a.kt)("td",{parentName:"tr",align:null},"Temp until rebuild"),(0,a.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Names"),(0,a.kt)("td",{parentName:"tr",align:null},"Persistent"),(0,a.kt)("td",{parentName:"tr",align:null},"usually 10-20 bytes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Attributes"),(0,a.kt)("td",{parentName:"tr",align:null},"Persistent unless deleted"),(0,a.kt)("td",{parentName:"tr",align:null},"~1 kilobyte"),(0,a.kt)("td",{parentName:"tr",align:null},"Can be hidden or visible"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"No")))))}m.isMDXComponent=!0}}]);