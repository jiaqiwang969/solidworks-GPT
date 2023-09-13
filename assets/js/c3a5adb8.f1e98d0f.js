"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[31975],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>k});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)i=s[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)i=s[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(i),h=n,k=d["".concat(l,".").concat(h)]||d[h]||m[h]||s;return i?o.createElement(k,a(a({ref:t},p),{},{components:i})):o.createElement(k,a({ref:t},p))}));function k(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,a=new Array(s);a[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:n,a[1]=r;for(var c=2;c<s;c++)a[c]=i[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},59578:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=i(87462),n=(i(67294),i(3905));const s={title:"Performing entity selection using SOLIDWORKS API",caption:"Selection",description:"Articles and examples explaining the selection techniques in SOLIDWORKS API",order:5,image:"solidworks-selection.png"},a=void 0,r={unversionedId:"codestack/solidworks-api/document/selection/index",id:"codestack/solidworks-api/document/selection/index",title:"Performing entity selection using SOLIDWORKS API",description:"Articles and examples explaining the selection techniques in SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/selection/index.md",sourceDirName:"codestack/solidworks-api/document/selection",slug:"/codestack/solidworks-api/document/selection/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/selection/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/selection/index.md",tags:[],version:"current",frontMatter:{title:"Performing entity selection using SOLIDWORKS API",caption:"Selection",description:"Articles and examples explaining the selection techniques in SOLIDWORKS API",order:5,image:"solidworks-selection.png"},sidebar:"tutorialSidebar",previous:{title:"Macro to force rebuild SOLIDWORKS document",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/rebuild/"},next:{title:"Selecting SOLIDWORKS Objects for API only",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/selection/api-only-selection/"}},l={},c=[{value:"Application",id:"application",level:3},{value:"Selection Marks",id:"selection-marks",level:3},{value:"Selection Data",id:"selection-data",level:3},{value:"Selection Methods",id:"selection-methods",level:3},{value:"Selecting Entities In Drawing Views",id:"selecting-entities-in-drawing-views",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...s}=e;return(0,n.kt)(d,(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Selections in SOLIDWORKS API",src:i(18942).Z,width:"420",height:"340"}),"{ width=300 }"),(0,n.kt)("p",null,"Selection is a vital part of SOLIDWORKS API development process. In this article different selection methods and selection options will be discussed."),(0,n.kt)("h3",{id:"application"},"Application"),(0,n.kt)("p",null,"Mainly selections are used for"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/document/features-manager"},"Features creation")," (e.g. Extrude feature requires selection of the sketch and optional selection of direction)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/document/assembly/mates"},"Mating")),(0,n.kt)("li",{parentName:"ul"},"Evaluation (i.e. surface area or perimeter calculation)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/document/dimensions"},"Dimensioning")),(0,n.kt)("li",{parentName:"ul"},"Highlighting")),(0,n.kt)("h3",{id:"selection-marks"},"Selection Marks"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Selection marks for Extrude feature",src:i(65841).Z,width:"936",height:"586"}),"{ width=500 }"),(0,n.kt)("p",null,"Selection marks are integer attributes which can be associated with the selected entity in order to differentiate different group of objects by purpose. For example selection used in different selection boxes in the property manager page will have different selection marks. Selection marks can be assigned while selection of new objects via ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~selectbyid2.html"},"IModelDocExtension::SelectByID2")," method, or direct ",(0,n.kt)("em",{parentName:"p"},"Select")," methods such as ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature~select2.html"},"IFeature::Select2")," where the mark is passed as an ",(0,n.kt)("em",{parentName:"p"},"Mark")," parameter."),(0,n.kt)("p",null,"Selection mark can also be passed within the ",(0,n.kt)("a",{parentName:"p",href:"#selection-data"},"Selection Data")," ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectData~Mark.html"},"ISelectData::Mark")," property as some select methods expect this object to be passed to the method as ",(0,n.kt)("em",{parentName:"p"},"Data")," parameter (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IComponent2~Select4.html"},"IComponent2::Select4"),", ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~Select3.html"},"IAnnotation::Select3")," methods)."),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectionMgr~SetSelectedObjectMark.html"},"ISelectionMgr::SetSelectedObjectMark")," method to change the selection mark of already selected object."),(0,n.kt)("h3",{id:"selection-data"},"Selection Data"),(0,n.kt)("p",null,"Selection data is an object created via ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iselectionmgr~createselectdata.html"},"ISelectionMgr::CreateSelectData")," SOLIDWORKS API method which can be passed to various selection methods (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IBody2~Select2.html"},"IBody2::Select2"),")."),(0,n.kt)("p",null,"Selection data allows to provide additional instruction to the selection:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/adornment/callouts"},"Associate callouts")," elements with the selection"),(0,n.kt)("li",{parentName:"ul"},"Assign the ",(0,n.kt)("a",{parentName:"li",href:"#selection-marks"},"selection mark")," attributes"),(0,n.kt)("li",{parentName:"ul"},"Specify the drawing view to select element in"),(0,n.kt)("li",{parentName:"ul"},"Set the selection point. This can be also set via ",(0,n.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectionMgr~SetSelectionPoint2.html"},"ISelectionMgr::SetSelectionPoint2")," method for already selected object."),(0,n.kt)("li",{parentName:"ul"},"Set the cells range to select in the table annotation.")),(0,n.kt)("p",null,"Selection data is an optional parameter. Pass ",(0,n.kt)("em",{parentName:"p"},"NULL")," to methods if it is not used."),(0,n.kt)("p",null,"Refer the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectData_members.html"},"ISelectData")," SOLIDWORKS API interface members for more information."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ISelectData Interface Members",src:i(41155).Z,width:"783",height:"468"}),"{ width=500 }"),(0,n.kt)("h3",{id:"selection-methods"},"Selection Methods"),(0,n.kt)("p",null,"There are multiple ways of selecting entities in SOLIDWORKS. The following list is the most common ways of selecting elements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By name or by coordinate. This method is usually used in macro recording and selects the object 'as is' (i.e. as it would be selected from the User Interface). This approach introduces potential issues and usually a reason for macro ",(0,n.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/troubleshooting/macros/selection-inconsistency"},"instability and inconsistency")," and should be avoided. Refer the ",(0,n.kt)("a",{parentName:"p",href:"select-by-id"},"Selecting Objects By Name And Coordinates")," article for pros and cons of this approach.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By direct ",(0,n.kt)("em",{parentName:"p"},"SelectX")," method. Majority of selectable objects in SOLIDWORKS provide direct ",(0,n.kt)("em",{parentName:"p"},"SelectX")," method which allows to select the element from its pointer:"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Direct SelectX methods for SOLIDWORKS objects",src:i(5506).Z,width:"594",height:"676"}),"{ width=300 }"),(0,n.kt)("p",null,"This is a preferable method of selection as it provides the consistency and it is not dependent on the view's orientation. Refer the ",(0,n.kt)("a",{parentName:"p",href:"select-all-sketch-elements"},"Select All Sketch Elements")," example which shows how different sketch elements can be selected."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By object dispatches in a batch mode. This is useful way of selecting any selectable object without the need to cast it to the specific interface. Refer the ",(0,n.kt)("a",{parentName:"p",href:"select-objects"},"Select Any SOLIDWORKS Objects In A Batch")," for an example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By type (i.e. standard plane or view). Refer the ",(0,n.kt)("a",{parentName:"p",href:"select-standard-ref-geometry"},"Select Standard Plane Or Origin By Type")," for an example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By name of named entities (face, edge or vertex). Refer ",(0,n.kt)("a",{parentName:"p",href:"select-named-entity"},"Select Named Entity"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By adding objects directly to selection list. Read ",(0,n.kt)("a",{parentName:"p",href:"api-only-selection"},"Selecting Objects For API Only")," article for more information")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By using the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/Use_Advanced_Component_Selection_Example_VB.htm"},"Advanced Component Selection")," in assembly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By vector using ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/Select_Objects_Using_Intersecting_Ray_Example_VB.htm"},"intersection rays")))),(0,n.kt)("h3",{id:"selecting-entities-in-drawing-views"},"Selecting Entities In Drawing Views"),(0,n.kt)("p",null,"Entities in the drawing view (i.e. elements which are created in the 3D models) can be selected via ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~selectbyid2.html"},"IModelDocExtension::SelectByID2")," method but it introduces the same issues as using this method in 3D models (refer ",(0,n.kt)("a",{parentName:"p",href:"#selection-methods"},"Selection Methods")," section). Refer ",(0,n.kt)("a",{parentName:"p",href:"drawing-view-entities"},"Selecting Entities In Drawing View")," article for examples of different approaches for selecting entities in the drawing views."))}m.isMDXComponent=!0},5506:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/objects-select-method-api-help-2e0bd37e1b7ba5224da62822ea39d43c.png"},41155:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/select-data-interface-members-fe3322cc0c0fa2be411994a664bf5917.png"},65841:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/selection-marks-for-extrude-feature-c9d4b15ec734d312efb087218c7fcfe8.png"},18942:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/solidworks-selection-0aca332c746e14e8d614ea7184766129.png"}}]);