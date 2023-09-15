"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[52719],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),i=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=i(e.components);return o.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(t),f=n,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?o.createElement(m,s(s({ref:r},u),{},{components:t})):o.createElement(m,s({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var i=2;i<a;i++)s[i]=t[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},24145:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=t(87462),n=(t(67294),t(3905));const a={title:"\u5904\u7406SOLIDWORKS\u5b8f\u7279\u5f81\u7684\u518d\u751f\u6210\u65b9\u6cd5",caption:"\u518d\u751f\u6210"},s=void 0,l={unversionedId:"codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration/index",id:"codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration/index",title:"\u5904\u7406SOLIDWORKS\u5b8f\u7279\u5f81\u7684\u518d\u751f\u6210\u65b9\u6cd5",description:"\u4f7f\u7528SwEx.MacroFeature\u6846\u67b6\u5904\u7406SOLIDWORKS\u5b8f\u7279\u5f81\u7684\u518d\u751f\u6210\u4e8b\u4ef6\uff0c\u5e76\u8fd4\u56de\u5b9e\u4f53\u6216\u9519\u8bef\u4ee5\u9a71\u52a8\u884c\u4e3a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration/index.md",sourceDirName:"codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration",slug:"/codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/macro-feature/lifecycle/regeneration/index.md",tags:[],version:"current",frontMatter:{title:"\u5904\u7406SOLIDWORKS\u5b8f\u7279\u5f81\u7684\u518d\u751f\u6210\u65b9\u6cd5",caption:"\u518d\u751f\u6210"},sidebar:"tutorialSidebar",previous:{title:"\u5904\u7406SOLIDWORKS\u5b8f\u7279\u5f81\u7684\u751f\u547d\u5468\u671f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/macro-feature/lifecycle/feature-handler/"},next:{title:"\u5728SwEx.MacroFeature\u6846\u67b6\u4e2d\u5904\u7406SOLIDWORKS\u5b8f\u7279\u5f81\u72b6\u6001\u66f4\u65b0",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/macro-feature/lifecycle/state/"}},c={},i=[{value:"sidebar_position: 0",id:"sidebar_position-0",level:2}],u={toc:i},d="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f7f\u7528SwEx.MacroFeature\u6846\u67b6\u5904\u7406SOLIDWORKS\u5b8f\u7279\u5f81\u7684\u518d\u751f\u6210\u4e8b\u4ef6\uff0c\u5e76\u8fd4\u56de\u5b9e\u4f53\u6216\u9519\u8bef\u4ee5\u9a71\u52a8\u884c\u4e3a\ntoc-group-name: labs-solidworks-swex"),(0,n.kt)("h2",{id:"sidebar_position-0"},"sidebar_position: 0"),(0,n.kt)("p",null,"\u5f53\u7279\u5f81\u6b63\u5728\u91cd\u65b0\u6784\u5efa\u65f6\uff08\u65e0\u8bba\u662f\u8c03\u7528\u91cd\u65b0\u751f\u6210\u8fd8\u662f\u7236\u5143\u7d20\u5df2\u66f4\u6539\uff09\uff0c\u5c06\u8c03\u7528\u6b64\u5904\u7406\u7a0b\u5e8f\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_Base_MacroFeatureRebuildResult.htm"},"MacroFeatureRebuildResult"),"\u7c7b\u751f\u6210\u6240\u9700\u7684\u8f93\u51fa\u3002"),(0,n.kt)("p",null,"\u7279\u5f81\u53ef\u4ee5\u751f\u6210\u4ee5\u4e0b\u8f93\u51fa"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.MacroFeature;\nusing CodeStack.SwEx.MacroFeature.Base;\nusing CodeStack.SwEx.MacroFeature.Data;\nusing SolidWorks.Interop.sldworks;\n\nnamespace CodeStack.SwEx\n{\n    //\u8fd4\u56de\u6210\u529f\u7684\u518d\u751f\u6210\uff0c\u4e0d\u5e26\u5b9e\u4f53\n    public class RegenerationNoResultsMacroFeature : MacroFeatureEx\n    {\n        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)\n        {\n            return MacroFeatureRebuildResult.FromStatus(true);\n        }\n    }\n\n    //\u8fd4\u56de\u518d\u751f\u6210\u9519\u8bef\n    public class RegenerationRebuildErrorMacroFeature : MacroFeatureEx\n    {\n        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)\n        {\n            return MacroFeatureRebuildResult.FromStatus(false, "\u65e0\u6cd5\u91cd\u65b0\u751f\u6210\u6b64\u7279\u5f81");\n        }\n    }\n\n    //\u8fd4\u56de\u5b9e\u4f53\uff0c\u4f46\u4e0d\u81ea\u52a8\u5206\u914d\u5b9e\u4f53ID\n    public class RegenerationBodyMacroFeature : MacroFeatureEx\n    {\n        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)\n        {\n            //\u4f7f\u7528IModeler\u7684\u6269\u5c55\u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a\u7acb\u65b9\u4f53\u5b9e\u4f53\n            IBody2 tempBody = app.IGetModeler().CreateBox(new Point(0, 0, 0), new Vector(1, 0, 0), 0.1, 0.1, 0.1);\n\n            return MacroFeatureRebuildResult.FromBody(tempBody, feature.GetDefinition() as IMacroFeatureData, false); \n        }\n    }\n\n    //\u8fd4\u56de\u5b9e\u4f53\u7684\u6a21\u5f0f\uff0c\u5e76\u81ea\u52a8\u5206\u914d\u5b9e\u4f53ID\n    public class RegenerationArrayOfBodiesMacroFeature : MacroFeatureEx\n    {\n        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)\n        {\n            IBody2[] tempBodies = null; //TODO: \u521b\u5efa\u4e34\u65f6\u5b9e\u4f53\n            return MacroFeatureRebuildResult.FromBodies(tempBodies, feature.GetDefinition() as IMacroFeatureData, true);\n        }\n    }\n}\n\n')),(0,n.kt)("p",null,"\u5982\u679c\u7279\u5f81\u9700\u8981\u521b\u5efa\u65b0\u7684\u5b9e\u4f53\uff0c\u8bf7\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler.html"},"IModeler"),"\u63a5\u53e3\u3002\u53ea\u80fd\u4ece\u518d\u751f\u6210\u65b9\u6cd5\u8fd4\u56de\u4e34\u65f6\u5b9e\u4f53\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/macro-feature/html/T_SolidWorks_Interop_sldworks_ModelerEx.htm"},"IModelerExtension"),"\u7c7b\u4e2d\u63d0\u4f9b\u7684\u6269\u5c55\u65b9\u6cd5\u3002"))}p.isMDXComponent=!0}}]);