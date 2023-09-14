"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[94106],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>w});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,w=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return o?n.createElement(w,a(a({ref:t},d),{},{components:o})):n.createElement(w,a({ref:t},d))}));function w(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},41144:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const s={title:"Hosting custom user controls in SOLIDWORKS panels using SwEx.AddIn framework",caption:"Hosting User Controls",description:"Hosting custom user controls in SOLIDWORKS panels (task pane, model view manager, feature manager, options dialog) using SwEx.AddIn framework","toc-group-name":"labs-solidworks-swex",sidebar_position:0},a=void 0,i={unversionedId:"codestack/labs/solidworks/swex/add-in/hosting-user-controls/index",id:"codestack/labs/solidworks/swex/add-in/hosting-user-controls/index",title:"Hosting custom user controls in SOLIDWORKS panels using SwEx.AddIn framework",description:"Hosting custom user controls in SOLIDWORKS panels (task pane, model view manager, feature manager, options dialog) using SwEx.AddIn framework",source:"@site/docs/codestack/labs/solidworks/swex/add-in/hosting-user-controls/index.md",sourceDirName:"codestack/labs/solidworks/swex/add-in/hosting-user-controls",slug:"/codestack/labs/solidworks/swex/add-in/hosting-user-controls/",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/add-in/hosting-user-controls/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/add-in/hosting-user-controls/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Hosting custom user controls in SOLIDWORKS panels using SwEx.AddIn framework",caption:"Hosting User Controls",description:"Hosting custom user controls in SOLIDWORKS panels (task pane, model view manager, feature manager, options dialog) using SwEx.AddIn framework","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Entry Point of SwEx.AddIn framework",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/add-in/getting-started/entry-point/"},next:{title:"Hosting user control in SOLIDWORKS Task Pane using SwEx.AddIn framework",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/add-in/hosting-user-controls/task-pane/"}},l={},c=[],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Frameworks simplifies adding and managing of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.usercontrol?view=netframework-4.8"},"custom user controls")," in the standard panels of SOLIDWORKS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Task Pane - application scope panel (usually located on the right hand side of SOLIDWORKS window)"),(0,r.kt)("li",{parentName:"ul"},"Model View Manager - document scope panel (usually located at the model of document window). Used to control custom model view (such as motion views, FEA, etc)"),(0,r.kt)("li",{parentName:"ul"},"Feature Manager View - document scope panel (tab of the Feature Manager Design Tree, usually located on the right hand side of SOLIDWORKS document). Used to add custom feature tree elements, such as electrical tree, costing, architectural etc."),(0,r.kt)("li",{parentName:"ul"},"Settings - custom page in the SOLIDWORKS settings dialog")))}p.isMDXComponent=!0}}]);