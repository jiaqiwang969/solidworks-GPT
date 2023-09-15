"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[36365],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>w});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),p=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},c=function(e){var o=p(e.components);return r.createElement(l.Provider,{value:o},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,w=d["".concat(l,".").concat(m)]||d[m]||g[m]||a;return t?r.createElement(w,s(s({ref:o},c),{},{components:t})):r.createElement(w,s({ref:o},c))}));function w(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60054:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const a={title:"Adding and customizing controls to Property Manager page",caption:"Controls",description:"Overview of controls supported by the SwEx.PMPage framework and the customization and decoration options","toc-group-name":"labs-solidworks-swex",sidebar_position:0},s=void 0,i={unversionedId:"codestack/labs/solidworks/swex/pmpage/controls/index",id:"codestack/labs/solidworks/swex/pmpage/controls/index",title:"Adding and customizing controls to Property Manager page",description:"Overview of controls supported by the SwEx.PMPage framework and the customization and decoration options",source:"@site/docs/codestack/labs/solidworks/swex/pmpage/controls/index.md",sourceDirName:"codestack/labs/solidworks/swex/pmpage/controls",slug:"/codestack/labs/solidworks/swex/pmpage/controls/",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/pmpage/controls/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/pmpage/controls/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Adding and customizing controls to Property Manager page",caption:"Controls",description:"Overview of controls supported by the SwEx.PMPage framework and the customization and decoration options","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"SwEx.PMPage - advanced framework for SOLIDWORKS property manager pages",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/pmpage/"},next:{title:"Bitmap control in SOLIDWORKS property Manager Page",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/pmpage/controls/bitmap/"}},l={},p=[{value:"Accessing controls",id:"accessing-controls",level:2}],c={toc:p},d="wrapper";function g(e){let{components:o,...t}=e;return(0,n.kt)(d,(0,r.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Framework will automatically generate the best suitable control for the public property in the data model. For example for all numeric properties the number box control will be generated. For all string properties text box control will be generated. For all complex types group box will be generated."),(0,n.kt)("p",null,"The style of the controls can be customized via attributes."),(0,n.kt)("h2",{id:"accessing-controls"},"Accessing controls"),(0,n.kt)("p",null,"Access to controls is provided via ",(0,n.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Controls_IPropertyManagerPageControlEx.htm"},"IPropertyManagerPageControlEx")," wrapper interface. Common properties can be accessed via this interface (such as control id, enable or visible flags). Underlying native SOLIDWORKS control can be accessed via ",(0,n.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/pmpage/html/P_CodeStack_SwEx_PMPage_Controls_IPropertyManagerPageControlEx_SwControl.htm"},"IPropertyManagerPageControlEx::SwControl")," property. It returns the pointer to corresponding ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ipropertymanagerpagecontrol.html"},"IPropertyManagerPageControl")," which can be cast to specific control such as ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ipropertymanagerpageselectionbox.html"},"IPropertyManagerPageSelectionbox"),", ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ipropertymanagerpagecombobox.html"},"IPropertyManagerPageCombobox"),", ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ipropertymanagerpagetextbox.html"},"IPropertyManagerPageTextbox")," etc."),(0,n.kt)("p",null,"All controls can be accessed via ",(0,n.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/pmpage/html/P_CodeStack_SwEx_PMPage_Base_IPropertyManagerPageEx_2_Controls.htm"},"IPropertyManagerPageEx::Controls")," property."))}g.isMDXComponent=!0}}]);