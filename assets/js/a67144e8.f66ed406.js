"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[81240],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=u(r),p=o,f=l["".concat(c,".").concat(p)]||l[p]||m[p]||n;return r?a.createElement(f,s(s({ref:t},d),{},{components:r})):a.createElement(f,s({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<n;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var a=r(87462),o=(r(67294),r(3905));const n={title:"Overview of SwEx.MacroFeature framework for SOLIDWORKS add-ins",caption:"Overview",description:"Generic overview of macro feature and SwEx.MacroFeature framework","toc-group-name":"labs-solidworks-swex",sidebar_position:0},s=void 0,i={unversionedId:"codestack/labs/solidworks/swex/macro-feature/getting-started/overview/index",id:"codestack/labs/solidworks/swex/macro-feature/getting-started/overview/index",title:"Overview of SwEx.MacroFeature framework for SOLIDWORKS add-ins",description:"Generic overview of macro feature and SwEx.MacroFeature framework",source:"@site/docs/codestack/labs/solidworks/swex/macro-feature/getting-started/overview/index.md",sourceDirName:"codestack/labs/solidworks/swex/macro-feature/getting-started/overview",slug:"/codestack/labs/solidworks/swex/macro-feature/getting-started/overview/",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/macro-feature/getting-started/overview/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/macro-feature/getting-started/overview/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview of SwEx.MacroFeature framework for SOLIDWORKS add-ins",caption:"Overview",description:"Generic overview of macro feature and SwEx.MacroFeature framework","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Getting Started with SwEx.MacroFeature framework for SOLIDWORKS macro features",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/macro-feature/getting-started/"},next:{title:"Page for reporting issues and enhancements for SwEx.MacroFeature framework",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/macro-feature/issues/"}},c={},u=[{value:"Icon",id:"icon",level:2},{value:"Options",id:"options",level:2}],d={toc:u},l="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Framework provides 3 main macro feature abstract classes which reside in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/macro-feature/html/N_CodeStack_SwEx_MacroFeature.htm"},"CodeStack.SwEx.MacroFeature")," namespace to be inherited in order to register new macro feature."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_MacroFeatureEx.htm"},"MacroFeatureEx")," - simple macro feature. Macro feature doesn't require any parameters and will performa a simle operation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_MacroFeatureEx_1.htm"},"MacroFeatureEx{TParams}")," parameters driven macro feature. All of the required inputs can be defined within the ",(0,o.kt)("em",{parentName:"li"},"TParams")," structure (data model). ",(0,o.kt)("a",{parentName:"li",href:"/docs/codestack/labs/solidworks/swex/macro-feature/data"},"Macro feature data")," includes",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Field Values (Named parameters)"),(0,o.kt)("li",{parentName:"ul"},"Dimensions"),(0,o.kt)("li",{parentName:"ul"},"Selections"),(0,o.kt)("li",{parentName:"ul"},"Edit Bodies"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_MacroFeatureEx_2.htm"},"MacroFeatureEx{TParams,THandler}")," - parameters driven macro feature with ability to assign the handler per feature to track the lifecycle.")),(0,o.kt)("p",null,"Macro feature class must be com visible."),(0,o.kt)("p",null,"It is recommended to explicitly assign guid and prog id for the macro feature."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.MacroFeature;\nusing CodeStack.SwEx.MacroFeature.Attributes;\nusing CodeStack.SwEx.Properties;\nusing SolidWorks.Interop.swconst;\nusing System;\nusing System.Runtime.InteropServices;\n\nnamespace CodeStack.SwEx\n{\n    public class MySimplaeMacroFeatureParameters\n    {\n        public string Parameter1 { get; set; }\n    }\n\n    [ComVisible(true)]\n    [Guid("47827004-8897-49F5-9C65-5B845DC7F5AC")]\n    [ProgId("CodeStack.MyMacroFeature")]\n    [Options("MyMacroFeature", swMacroFeatureOptions_e.swMacroFeatureAlwaysAtEnd)]\n    [FeatureIcon(typeof(Resources), nameof(Resources.macro_feature_icon), "CodeStack\\\\MyMacroFeature\\\\Icons")]\n    public class MySimplaeMacroFeature : MacroFeatureEx<MySimplaeMacroFeatureParameters>\n    {\n    }\n}\n\n')),(0,o.kt)("h2",{id:"icon"},"Icon"),(0,o.kt)("p",null,"Custom macro feature icon can be assigned via ",(0,o.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_Attributes_IconAttribute.htm"},"IconAttribute"),". Icon can be loaded from the resources and supports transparency. By defaul icon files will be created in the %ProgramData%\\CodeStack","{","MacroFeatureId}\\Icons folder, hovever this location can be changed by specifying this in the ",(0,o.kt)("em",{parentName:"p"},"iconFolderName")," parameter."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"Additional options can be assigned via ",(0,o.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_Attributes_OptionsAttribute.htm"},"OptionsAttribute")," and "),(0,o.kt)("p",null,"Macro feature is a COM object which means it needs to be registered in order for maco feature to operate. Macro feature is strored within the model, but if model is opened in the environment where the Macro Feature COM object is not registered - rebuild error will be displayed. Furthermore this 'dangling' macro feature cannot be removed or suppressed."),(0,o.kt)("p",null,"User can specify the custom message to be displayed in the ",(0,o.kt)("em",{parentName:"p"},"What's Wrong")," dialog via ",(0,o.kt)("em",{parentName:"p"},"provider")," parameter of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_Attributes_OptionsAttribute.htm"},"OptionsAttribute"),". Specified message will be displayedafter the predefined ",(0,o.kt)("em",{parentName:"p"},"Add-in not found. Please contact")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.MacroFeature;\nusing CodeStack.SwEx.MacroFeature.Attributes;\nusing System.Runtime.InteropServices;\n\nnamespace CodeStack.SwEx\n{\n    [ComVisible(true)]\n    [Options("SwExMacroFeature", "CodeStack. Download the add-in")]\n    public class UnregisteredMacroFeature : MacroFeatureEx\n    {\n    }\n}\n\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Rebuild error message for unregistered macro feature",src:r(22247).Z,width:"1210",height:"379"}),"{ width=650 }"),(0,o.kt)("p",null,"To insert the macro feature use the extension method: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/macro-feature/html/M_SolidWorks_Interop_sldworks_FeatureManagerEx_InsertComFeature__2.htm"},"IFeatureManager::InsertComFeature"),"."))}m.isMDXComponent=!0},22247:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/unregistered-macro-feature-ecbce3264b051ea5166c496d6eea337a.png"}}]);