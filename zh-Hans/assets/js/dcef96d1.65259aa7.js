"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[28896],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(o),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||s;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},97446:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const s={title:"Selecting SOLIDWORKS objects by name and coordinates using API",caption:"Selecting Objects By Name And Coordinates",description:"Article explains the pros and cons of SelectById2 method",image:"recorded-macro-for-extrude-feature.png",labels:["selection","select by name","select by id"]},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-by-id/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-by-id/index",title:"Selecting SOLIDWORKS objects by name and coordinates using API",description:"Article explains the pros and cons of SelectById2 method",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-by-id/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-by-id",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-by-id/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-by-id/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-by-id/index.md",tags:[],version:"current",frontMatter:{title:"Selecting SOLIDWORKS objects by name and coordinates using API",caption:"Selecting Objects By Name And Coordinates",description:"Article explains the pros and cons of SelectById2 method",image:"recorded-macro-for-extrude-feature.png",labels:["selection","select by name","select by id"]},sidebar:"tutorialSidebar",previous:{title:"Select components associated with attributes using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-associated-components/"},next:{title:"Select component in feature tree using its name via SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/select-component-by-name/"}},c={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this articles the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~selectbyid2.html"},"IModelDocExtension::SelectByID2")," SOLIDWORKS API method is explained. This methods is one of the most popular ways for selecting the elements in the SOLIDWORKS either by their names or by coordinates."),(0,r.kt)("p",null,"This is a primary method used to represent user selections when ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/solidworks/sldworks/t_record_pause_macro.htm"},"recording the macro"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Recorded macro for Extrude feature",src:o(11234).Z,width:"1728",height:"659"}),"{ width=500 }"),(0,r.kt)("p",null,"It is not recommended to use this method for the selection because of the following limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Selecting the object (elements such as Face, Vertex, Edge or Annotation) by coordinates (i.e. ",(0,r.kt)("em",{parentName:"p"},"Name")," parameter is empty and ",(0,r.kt)("em",{parentName:"p"},"X"),", ",(0,r.kt)("em",{parentName:"p"},"Y"),", ",(0,r.kt)("em",{parentName:"p"},"Z")," parameters are specified) might fail if the target entity is outside of the active view orientation. I.e. if it is not possible to select this element from the user interface at the current view position.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sketch elements (lines, arcs, points, splines etc.) do not have permanent names. So it is not valid to use the name recorded by the macro in SelectByID2 method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Incorrect object can be selected if target object is overlapped by another element when selecting by coordinates."))),(0,r.kt)("p",null,"There are however scenarios where this method can be used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When selecting the objects by permanent names, i.e. features, components. It is still recommended to use direct selection methods (i.e. ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature~select2.html"},"IFeature::Select2"),", ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IComponent2~Select4.html"},"IComponent2::Select4")," SOLIDWORKS API methods)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When selecting sheet in the drawings (there is no direct Select method in ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isheet.html"},"ISheet")," interface)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When SOLIDWORKS page is active. According to SOLIDWORKS API Help documentation (see ",(0,r.kt)("em",{parentName:"p"},"Remarks")," section ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~selectbyid2.html"},"here"),")"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use this method instead of using the selection methods on the following objects: IAnnotation, IComponent2, IFeature, IFeatureManager, ISketchHatch, ISketchPoint, ISketchSegment, ISketchSpline. The previously listed objects' selection methods do not work well when a PropertyManager page is open or a command is running. This method, IModelDocExtension::SelectByID2, handles selection correctly whether or not a command is running.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When developing the driver software for input manipulators (i.e. joystick, mouse, keypad, space mouse etc.) where it is required to translate user input directly to the graphics area.")))}m.isMDXComponent=!0},11234:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/recorded-macro-for-extrude-feature-df24f008e1ac25766365d6808791c7b4.png"}}]);