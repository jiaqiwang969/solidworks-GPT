"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[59624],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=n,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?o.createElement(m,i(i({ref:r},u),{},{components:t})):o.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},69246:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(87462),n=(t(67294),t(3905));const a={title:"Handling Regeneration method of SOLIDWORKS macro feature",caption:"Regeneration",description:"Handling regeneration event of SOLIDWORKS macro feature and returning bodies or errors to drive the behavior using SwEx.MacroFeature framework","toc-group-name":"labs-solidworks-swex",order:1},i=void 0,s={unversionedId:"codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration/index",id:"codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration/index",title:"Handling Regeneration method of SOLIDWORKS macro feature",description:"Handling regeneration event of SOLIDWORKS macro feature and returning bodies or errors to drive the behavior using SwEx.MacroFeature framework",source:"@site/docs/codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration/index.md",sourceDirName:"codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration",slug:"/codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration/index.md",tags:[],version:"current",frontMatter:{title:"Handling Regeneration method of SOLIDWORKS macro feature",caption:"Regeneration",description:"Handling regeneration event of SOLIDWORKS macro feature and returning bodies or errors to drive the behavior using SwEx.MacroFeature framework","toc-group-name":"labs-solidworks-swex",order:1},sidebar:"tutorialSidebar",previous:{title:"Handling the life cycle of SOLIDWORKS macro feature",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/macro-feature/lifecycle/feature-handler/"},next:{title:"Handling the SOLIDWORKS macro feature state update in SwEx.MacroFeature framework",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/macro-feature/lifecycle/state/"}},l={},c=[],u={toc:c},d="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This handler called when feature is being rebuilt (either when regenerate is invoked or when the parent elements have been changed)."),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_Base_MacroFeatureRebuildResult.htm"},"MacroFeatureRebuildResult")," class to generate the required output."),(0,n.kt)("p",null,"Feature can generate the following output"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.MacroFeature;\nusing CodeStack.SwEx.MacroFeature.Base;\nusing CodeStack.SwEx.MacroFeature.Data;\nusing SolidWorks.Interop.sldworks;\n\nnamespace CodeStack.SwEx\n{\n    //returns successful regeneration without bodies\n    public class RegenerationNoResultsMacroFeature : MacroFeatureEx\n    {\n        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)\n        {\n            return MacroFeatureRebuildResult.FromStatus(true);\n        }\n    }\n\n    // returns regeneration error\n    public class RegenerationRebuildErrorMacroFeature : MacroFeatureEx\n    {\n        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)\n        {\n            return MacroFeatureRebuildResult.FromStatus(false, "Failed to regenerate this feature");\n        }\n    }\n\n    //return body without automatically assigning ids\n    public class RegenerationBodyMacroFeature : MacroFeatureEx\n    {\n        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)\n        {\n            //use extension methods of IModeler to create a box body\n            IBody2 tempBody = app.IGetModeler().CreateBox(new Point(0, 0, 0), new Vector(1, 0, 0), 0.1, 0.1, 0.1);\n\n            return MacroFeatureRebuildResult.FromBody(tempBody, feature.GetDefinition() as IMacroFeatureData, false); \n        }\n    }\n\n    //return pattern of bodies and automatically assign entity ids\n    public class RegenerationArrayOfBodiesMacroFeature : MacroFeatureEx\n    {\n        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)\n        {\n            IBody2[] tempBodies = null; //TODO: create temp bodies\n            return MacroFeatureRebuildResult.FromBodies(tempBodies, feature.GetDefinition() as IMacroFeatureData, true);\n        }\n    }\n}\n\n')),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler.html"},"IModeler")," interface if feature needs to create new bodies. Only temp bodies can be returned from the regeneration method."),(0,n.kt)("p",null,"Use extension methods available in the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/macro-feature/html/T_SolidWorks_Interop_sldworks_ModelerEx.htm"},"IModelerExtension")," class."))}p.isMDXComponent=!0}}]);