"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[70436],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var i=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,i,s=function(e,t){if(null==e)return{};var o,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(o),h=s,k=d["".concat(l,".").concat(h)]||d[h]||m[h]||n;return o?i.createElement(k,a(a({ref:t},p),{},{components:o})):i.createElement(k,a({ref:t},p))}));function k(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=o.length,a=new Array(n);a[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:s,a[1]=r;for(var c=2;c<n;c++)a[c]=o[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},42559:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var i=o(87462),s=(o(67294),o(3905));const n={title:"Performing entity selection using SOLIDWORKS API",caption:"Selection",description:"Articles and examples explaining the selection techniques in SOLIDWORKS API",sidebar_position:5,image:"solidworks-selection.png"},a=void 0,r={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/index",title:"Performing entity selection using SOLIDWORKS API",description:"Articles and examples explaining the selection techniques in SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Performing entity selection using SOLIDWORKS API",caption:"Selection",description:"Articles and examples explaining the selection techniques in SOLIDWORKS API",sidebar_position:5,image:"solidworks-selection.png"},sidebar:"tutorialSidebar",previous:{title:"Open SOLIDWORKS assembly in quick view mode from Windows file explorer",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/open-quick-view/"},next:{title:"Selecting SOLIDWORKS Objects for API only",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/api-only-selection/"}},l={},c=[{value:"Application",id:"application",level:3},{value:"Selection Marks",id:"selection-marks",level:3},{value:"Selection Data",id:"selection-data",level:3},{value:"Selection Methods",id:"selection-methods",level:3},{value:"Selecting Entities In Drawing Views",id:"selecting-entities-in-drawing-views",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Selections in SOLIDWORKS API",src:o(62672).Z,width:"420",height:"340"}),"{ width=300 }"),(0,s.kt)("p",null,"Selection is a vital part of SOLIDWORKS API development process. In this article different selection methods and selection options will be discussed."),(0,s.kt)("h3",{id:"application"},"Application"),(0,s.kt)("p",null,"Mainly selections are used for"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/document/features-manager"},"Features creation")," (e.g. Extrude feature requires selection of the sketch and optional selection of direction)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/document/assembly/mates"},"Mating")),(0,s.kt)("li",{parentName:"ul"},"Evaluation (i.e. surface area or perimeter calculation)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/document/dimensions"},"Dimensioning")),(0,s.kt)("li",{parentName:"ul"},"Highlighting")),(0,s.kt)("h3",{id:"selection-marks"},"Selection Marks"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Selection marks for Extrude feature",src:o(24822).Z,width:"936",height:"586"}),"{ width=500 }"),(0,s.kt)("p",null,"Selection marks are integer attributes which can be associated with the selected entity in order to differentiate different group of objects by purpose. For example selection used in different selection boxes in the property manager page will have different selection marks. Selection marks can be assigned while selection of new objects via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~selectbyid2.html"},"IModelDocExtension::SelectByID2")," method, or direct ",(0,s.kt)("em",{parentName:"p"},"Select")," methods such as ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature~select2.html"},"IFeature::Select2")," where the mark is passed as an ",(0,s.kt)("em",{parentName:"p"},"Mark")," parameter."),(0,s.kt)("p",null,"Selection mark can also be passed within the ",(0,s.kt)("a",{parentName:"p",href:"#selection-data"},"Selection Data")," ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectData~Mark.html"},"ISelectData::Mark")," property as some select methods expect this object to be passed to the method as ",(0,s.kt)("em",{parentName:"p"},"Data")," parameter (e.g. ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IComponent2~Select4.html"},"IComponent2::Select4"),", ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~Select3.html"},"IAnnotation::Select3")," methods)."),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectionMgr~SetSelectedObjectMark.html"},"ISelectionMgr::SetSelectedObjectMark")," method to change the selection mark of already selected object."),(0,s.kt)("h3",{id:"selection-data"},"Selection Data"),(0,s.kt)("p",null,"Selection data is an object created via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iselectionmgr~createselectdata.html"},"ISelectionMgr::CreateSelectData")," SOLIDWORKS API method which can be passed to various selection methods (e.g. ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IBody2~Select2.html"},"IBody2::Select2"),")."),(0,s.kt)("p",null,"Selection data allows to provide additional instruction to the selection:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/adornment/callouts"},"Associate callouts")," elements with the selection"),(0,s.kt)("li",{parentName:"ul"},"Assign the ",(0,s.kt)("a",{parentName:"li",href:"#selection-marks"},"selection mark")," attributes"),(0,s.kt)("li",{parentName:"ul"},"Specify the drawing view to select element in"),(0,s.kt)("li",{parentName:"ul"},"Set the selection point. This can be also set via ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectionMgr~SetSelectionPoint2.html"},"ISelectionMgr::SetSelectionPoint2")," method for already selected object."),(0,s.kt)("li",{parentName:"ul"},"Set the cells range to select in the table annotation.")),(0,s.kt)("p",null,"Selection data is an optional parameter. Pass ",(0,s.kt)("em",{parentName:"p"},"NULL")," to methods if it is not used."),(0,s.kt)("p",null,"Refer the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectData_members.html"},"ISelectData")," SOLIDWORKS API interface members for more information."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"ISelectData Interface Members",src:o(47125).Z,width:"783",height:"468"}),"{ width=500 }"),(0,s.kt)("h3",{id:"selection-methods"},"Selection Methods"),(0,s.kt)("p",null,"There are multiple ways of selecting entities in SOLIDWORKS. The following list is the most common ways of selecting elements:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"By name or by coordinate. This method is usually used in macro recording and selects the object 'as is' (i.e. as it would be selected from the User Interface). This approach introduces potential issues and usually a reason for macro ",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/troubleshooting/macros/selection-inconsistency"},"instability and inconsistency")," and should be avoided. Refer the ",(0,s.kt)("a",{parentName:"p",href:"select-by-id"},"Selecting Objects By Name And Coordinates")," article for pros and cons of this approach.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"By direct ",(0,s.kt)("em",{parentName:"p"},"SelectX")," method. Majority of selectable objects in SOLIDWORKS provide direct ",(0,s.kt)("em",{parentName:"p"},"SelectX")," method which allows to select the element from its pointer:"))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Direct SelectX methods for SOLIDWORKS objects",src:o(28812).Z,width:"594",height:"676"}),"{ width=300 }"),(0,s.kt)("p",null,"This is a preferable method of selection as it provides the consistency and it is not dependent on the view's orientation. Refer the ",(0,s.kt)("a",{parentName:"p",href:"select-all-sketch-elements"},"Select All Sketch Elements")," example which shows how different sketch elements can be selected."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"By object dispatches in a batch mode. This is useful way of selecting any selectable object without the need to cast it to the specific interface. Refer the ",(0,s.kt)("a",{parentName:"p",href:"select-objects"},"Select Any SOLIDWORKS Objects In A Batch")," for an example")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"By type (i.e. standard plane or view). Refer the ",(0,s.kt)("a",{parentName:"p",href:"select-standard-ref-geometry"},"Select Standard Plane Or Origin By Type")," for an example")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"By name of named entities (face, edge or vertex). Refer ",(0,s.kt)("a",{parentName:"p",href:"select-named-entity"},"Select Named Entity"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"By adding objects directly to selection list. Read ",(0,s.kt)("a",{parentName:"p",href:"api-only-selection"},"Selecting Objects For API Only")," article for more information")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"By using the ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/Use_Advanced_Component_Selection_Example_VB.htm"},"Advanced Component Selection")," in assembly")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"By vector using ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/Select_Objects_Using_Intersecting_Ray_Example_VB.htm"},"intersection rays")))),(0,s.kt)("h3",{id:"selecting-entities-in-drawing-views"},"Selecting Entities In Drawing Views"),(0,s.kt)("p",null,"Entities in the drawing view (i.e. elements which are created in the 3D models) can be selected via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~selectbyid2.html"},"IModelDocExtension::SelectByID2")," method but it introduces the same issues as using this method in 3D models (refer ",(0,s.kt)("a",{parentName:"p",href:"#selection-methods"},"Selection Methods")," section). Refer ",(0,s.kt)("a",{parentName:"p",href:"drawing-view-entities"},"Selecting Entities In Drawing View")," article for examples of different approaches for selecting entities in the drawing views."))}m.isMDXComponent=!0},28812:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/objects-select-method-api-help-2e0bd37e1b7ba5224da62822ea39d43c.png"},47125:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/select-data-interface-members-fe3322cc0c0fa2be411994a664bf5917.png"},24822:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/selection-marks-for-extrude-feature-c9d4b15ec734d312efb087218c7fcfe8.png"},62672:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/solidworks-selection-0aca332c746e14e8d614ea7184766129.png"}}]);