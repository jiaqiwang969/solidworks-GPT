"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[94106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>w});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,w=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return n?o.createElement(w,a(a({ref:t},d),{},{components:n})):o.createElement(w,a({ref:t},d))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const s={title:"Hosting custom user controls in SOLIDWORKS panels using SwEx.AddIn framework",caption:"Hosting User Controls",description:"Hosting custom user controls in SOLIDWORKS panels (task pane, model view manager, feature manager, options dialog) using SwEx.AddIn framework","toc-group-name":"labs-solidworks-swex",order:4},a=void 0,i={unversionedId:"codestack/labs/solidworks/swex/add-in/hosting-user-controls/index",id:"codestack/labs/solidworks/swex/add-in/hosting-user-controls/index",title:"Hosting custom user controls in SOLIDWORKS panels using SwEx.AddIn framework",description:"Hosting custom user controls in SOLIDWORKS panels (task pane, model view manager, feature manager, options dialog) using SwEx.AddIn framework",source:"@site/docs/codestack/labs/solidworks/swex/add-in/hosting-user-controls/index.md",sourceDirName:"codestack/labs/solidworks/swex/add-in/hosting-user-controls",slug:"/codestack/labs/solidworks/swex/add-in/hosting-user-controls/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/hosting-user-controls/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/add-in/hosting-user-controls/index.md",tags:[],version:"current",frontMatter:{title:"Hosting custom user controls in SOLIDWORKS panels using SwEx.AddIn framework",caption:"Hosting User Controls",description:"Hosting custom user controls in SOLIDWORKS panels (task pane, model view manager, feature manager, options dialog) using SwEx.AddIn framework","toc-group-name":"labs-solidworks-swex",order:4},sidebar:"tutorialSidebar",previous:{title:"Entry Point of SwEx.AddIn framework",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/getting-started/entry-point/"},next:{title:"Hosting user control in SOLIDWORKS Task Pane using SwEx.AddIn framework",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/add-in/hosting-user-controls/task-pane/"}},l={},c=[],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Frameworks simplifies adding and managing of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.usercontrol?view=netframework-4.8"},"custom user controls")," in the standard panels of SOLIDWORKS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Task Pane - application scope panel (usually located on the right hand side of SOLIDWORKS window)"),(0,r.kt)("li",{parentName:"ul"},"Model View Manager - document scope panel (usually located at the model of document window). Used to control custom model view (such as motion views, FEA, etc)"),(0,r.kt)("li",{parentName:"ul"},"Feature Manager View - document scope panel (tab of the Feature Manager Design Tree, usually located on the right hand side of SOLIDWORKS document). Used to add custom feature tree elements, such as electrical tree, costing, architectural etc."),(0,r.kt)("li",{parentName:"ul"},"Settings - custom page in the SOLIDWORKS settings dialog")))}p.isMDXComponent=!0}}]);