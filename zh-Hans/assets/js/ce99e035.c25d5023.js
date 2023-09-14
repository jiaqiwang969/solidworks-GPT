"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[92989],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var r=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,r,s=function(e,t){if(null==e)return{};var o,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),c=d(o),m=s,k=c["".concat(l,".").concat(m)]||c[m]||h[m]||a;return o?r.createElement(k,i(i({ref:t},p),{},{components:o})):r.createElement(k,i({ref:t},p))}));function k(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=o.length,i=new Array(a);i[0]=m;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[c]="string"==typeof e?e:s,i[1]=n;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},71832:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>d});var r=o(87462),s=(o(67294),o(3905));const a={title:"Data saving in the 3rd party storage using SOLIDWORKS API",caption:"3rd Party Storage And Store",description:"Section explaining how to use 3rd party storage and 3rd party store in SOLIDWORKS API to serialize and deserialize the data directly in the model stream",image:"store-diagram.svg",labels:["store","3rd party","third party","storage","serialization"]},i=void 0,n={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/index",title:"Data saving in the 3rd party storage using SOLIDWORKS API",description:"Section explaining how to use 3rd party storage and 3rd party store in SOLIDWORKS API to serialize and deserialize the data directly in the model stream",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/index.md",tags:[],version:"current",frontMatter:{title:"Data saving in the 3rd party storage using SOLIDWORKS API",caption:"3rd Party Storage And Store",description:"Section explaining how to use 3rd party storage and 3rd party store in SOLIDWORKS API to serialize and deserialize the data directly in the model stream",image:"store-diagram.svg",labels:["store","3rd party","third party","storage","serialization"]},sidebar:"tutorialSidebar",previous:{title:"Write summary information to the active file using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/custom-properties/write-summary-information/"},next:{title:"Save custom properties revisions into 3rd party storage store using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/custom-properties-revisions/"}},l={},d=[{value:"3rd Party Storage",id:"3rd-party-storage",level:2},{value:"Notes",id:"notes",level:3},{value:"Lifecycle",id:"lifecycle",level:3},{value:"3rd Party Storage Store",id:"3rd-party-storage-store",level:2},{value:"Notes",id:"notes-1",level:3},{value:"Lifecycle",id:"lifecycle-1",level:3},{value:"Usage",id:"usage",level:2},{value:"Storage And Streams Naming Conflicts",id:"storage-and-streams-naming-conflicts",level:2}],p={toc:d},c="wrapper";function h(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"3rd party storage and 3rd party store are the containers for the external applications (add-ins, macros, stand alone applications) to store serialize the data directly in the model stream."),(0,s.kt)("p",null,"This technique allows to store the complex data and provides best performance options to read and write large amount of data."),(0,s.kt)("p",null,"SOLIDWORKS enables to store the data in 2 different containers:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Storage (Stream)"),(0,s.kt)("li",{parentName:"ul"},"Storage Store")),(0,s.kt)("p",null,"If File System is taken as analogue the Storage would correspond to file while Storage Store to folder. Storage Stores can have sub streams or sub stores."),(0,s.kt)("p",null,"The following diagram explains the structure of the SOLIDWORKS model storages. Red elements represent the containers managed directly by SOLIDWORKS while other elements represent the containers managed by 3rd parties."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Document Store Diagram",src:o(6889).Z,width:"501",height:"447"}),"{ width=550 }"),(0,s.kt)("h2",{id:"3rd-party-storage"},"3rd Party Storage"),(0,s.kt)("p",null,"This is a container which is managed via ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nn-objidl-istream"},"IStream")," interface. This option is used when application only needs to store the single data structure (e.g. XML tree, text, image, binary data)."),(0,s.kt)("p",null,"In order to get the pointer to the stream (both for reading or writing) the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~IGet3rdPartyStorage.html"},"IModelDoc2::IGet3rdPartyStorage")," SOLIDWORKS API method should be called and corresponding flag is passed."),(0,s.kt)("h3",{id:"notes"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If stream was never written before the ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~IGet3rdPartyStorage.html"},"IModelDoc2::IGet3rdPartyStorage")," method returns null."),(0,s.kt)("li",{parentName:"ul"},"Stream should always be released after the get method called via ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~IRelease3rdPartyStorage.html"},"IModelDoc2::IRelease3rdPartyStorage"),". This also applies when get method returns null (i.e. stream was not stored before)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nf-objidl-istream-commit"},"IStream::Commit")," method should not be called when storing the data otherwise ",(0,s.kt)("em",{parentName:"li"},"Method Not Implemented")," exception will be thrown.")),(0,s.kt)("h3",{id:"lifecycle"},"Lifecycle"),(0,s.kt)("p",null,"Storage is available for reading between the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_loadfromstoragenotifyeventhandler.html"},"LoadFromStorage")," notification and the destroying of the model. LoadFromStorageStore available for ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_loadfromstoragenotifyeventhandler.html"},"part"),", ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dassemblydocevents_loadfromstoragenotifyeventhandler.html"},"assembly"),"  and ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ddrawingdocevents_loadfromstoragenotifyeventhandler.html"},"drawing")," "),(0,s.kt)("p",null,"Storage is available for writing only within the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_savetostoragenotifyeventhandler.html"},"SaveToStorage")," notification for ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_savetostoragenotifyeventhandler.html"},"part"),", ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dassemblydocevents_savetostoragenotifyeventhandler.html"},"assembly")," and ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ddrawingdocevents_savetostoragenotifyeventhandler.html"},"drawing")," correspondingly."),(0,s.kt)("h2",{id:"3rd-party-storage-store"},"3rd Party Storage Store"),(0,s.kt)("p",null,"This is a container which is managed via ",(0,s.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nn-objidl-istorage"},"IStorage")," interface. This option is used when application manages complex sets of data and access to certain portions is required at certain times. Storage container allows to create sub streams and sub storages to manage the data and only specific streams can be accessed when required avoiding the need to load the whole structure into the memory."),(0,s.kt)("p",null,"To get the pointer to the storage the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension~IGet3rdPartyStorageStore.html"},"IModelDocExtension::IGet3rdPartyStorageStore")," SOLIDWORKS API method needs to be called."),(0,s.kt)("h3",{id:"notes-1"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension~IGet3rdPartyStorageStore.html"},"IModelDocExtension::IGet3rdPartyStorageStore")," returns null for the storage which was never written before"),(0,s.kt)("li",{parentName:"ul"},"Similar to streams, store always needs to be released via ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension~IRelease3rdPartyStorageStore.html"},"IModelDocExtension::IRelease3rdPartyStorageStore")," method."),(0,s.kt)("li",{parentName:"ul"},"Use methods of ",(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nn-objidl-istorage"},"IStorage")," interface to create sub streams and storages.")),(0,s.kt)("h3",{id:"lifecycle-1"},"Lifecycle"),(0,s.kt)("p",null,"Storage is available for reading between the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_loadfromstoragestorenotifyeventhandler.html"},"LoadFromStorageStore")," notification and the destroying of the model. LoadFromStorageStore available for ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_loadfromstoragestorenotifyeventhandler.html"},"part"),", ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dassemblydocevents_loadfromstoragestorenotifyeventhandler.html"},"assembly"),"  and ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ddrawingdocevents_loadfromstoragestorenotifyeventhandler.html"},"drawing")," "),(0,s.kt)("p",null,"Storage is available for writing only within the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_savetostoragestorenotifyeventhandler.html"},"SaveToStorageStore")," notification for ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dpartdocevents_savetostoragestorenotifyeventhandler.html"},"part"),", ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dassemblydocevents_savetostoragestorenotifyeventhandler.html"},"assembly")," and ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ddrawingdocevents_savetostoragestorenotifyeventhandler.html"},"drawing")," correspondingly."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Usually 3rd party containers (storage and store) are used in add-ins when model is complemented with additional functionality (e.g. electrical data, PDM, security, etc.). In this case this additional information is usually displayed in the Feature Tree, Task Panes etc. and loaded when model is opened and saved together with the model making this approach a fully integrated solutions."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"SaveToStorage")," and ",(0,s.kt)("em",{parentName:"p"},"SaveToStorageStore")," SOLIDWORKS API notifications are raised directly after the File Save Notification which means that there is no need to implement custom saving of the data as it will be automatically triggered via user saving."),(0,s.kt)("p",null,"The best place to attach save and load event would be within the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.dsldworksevents_documentloadnotify2eventhandler.html"},"DocumentLoadNotify")," event."),(0,s.kt)("p",null,"When 3rd party data is modified (e.g. user added new node in the 3rd party tree) it is recommended to mark model as dirty via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModelDoc2~SetSaveFlag.html"},"IModelDoc2::SetSaveFlag")," which indicates that model required to be saved by the user."),(0,s.kt)("h2",{id:"storage-and-streams-naming-conflicts"},"Storage And Streams Naming Conflicts"),(0,s.kt)("p",null,"Storages and stores accessed by the corresponding names. It might be the cases when different developers might use the same name for storage or store. In this case conflict occurs. When using 3rd party containers it is recommended to register the storage or store name via SOLIDWORKS API Support and in this case this name will be reserved."),(0,s.kt)("p",null,"Refer ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/swex/add-in/third-party-data-storage/"},"Storing 3rd party data in SOLIDWORKS models using SwEx.AddIn framework")," article for the information of how to access 3rd party containers using SwEx.AddIn framework."))}h.isMDXComponent=!0},6889:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/store-diagram-cc9dc9f7759f706023af00821676e43a.svg"}}]);