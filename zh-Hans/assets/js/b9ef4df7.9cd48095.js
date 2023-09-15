"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[68610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={layout:"sw-tool",title:"\u8bc6\u522bSOLIDWORKS API\u7279\u5f81\u5b9a\u4e49\u548c\u7279\u5b9a\u7c7b\u578b",caption:"\u8bc6\u522b\u7279\u5b9a\u7279\u5f81\u548c\u7279\u5f81\u5b9a\u4e49"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/identify-feature/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/identify-feature/index",title:"\u8bc6\u522bSOLIDWORKS API\u7279\u5f81\u5b9a\u4e49\u548c\u7279\u5b9a\u7c7b\u578b",description:"\u901a\u8fc7SOLIDWORKS API\u548c\u53cd\u5c04\uff0c\u63d0\u4f9b\u5e2e\u52a9\u65b9\u6cd5\u6765\u8bc6\u522b\u6240\u9009\u7279\u5f81\u7684\u5b9a\u4e49\u548c\u7279\u5b9a\u7c7b\u578b",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/identify-feature/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/identify-feature",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/identify-feature/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/identify-feature/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/identify-feature/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u8bc6\u522bSOLIDWORKS API\u7279\u5f81\u5b9a\u4e49\u548c\u7279\u5b9a\u7c7b\u578b",caption:"\u8bc6\u522b\u7279\u5b9a\u7279\u5f81\u548c\u7279\u5f81\u5b9a\u4e49"},sidebar:"tutorialSidebar",previous:{title:"VBA\u5b8f\u4ee5\u9690\u85cfSOLIDWORKS\u6587\u4ef6\u6811\u4e2d\u7684\u6240\u6709\u9009\u5b9a\u7279\u5f81",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/hide-features/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u4fee\u6539\u8f74\u7279\u5f81\u7684\u5b9a\u4e49",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-axis-definition/"}},c={},p=[{value:"group: Developers",id:"group-developers",level:2}],l={toc:p},u="wrapper";function f(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u901a\u8fc7SOLIDWORKS API\u548c\u53cd\u5c04\uff0c\u63d0\u4f9b\u5e2e\u52a9\u65b9\u6cd5\u6765\u8bc6\u522b\u6240\u9009\u7279\u5f81\u7684\u5b9a\u4e49\u548c\u7279\u5b9a\u7c7b\u578b\nimage: specific-feature-types.png\nlabels: ","[reflection, specific feature, feature definition]"),(0,o.kt)("h2",{id:"group-developers"},"group: Developers"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5c06\u7279\u5b9a\u7279\u5f81\u548c\u7279\u5f81\u5b9a\u4e49\u7684\u7c7b\u578b\u8f93\u51fa\u5230\u7a97\u53e3",src:n(29182).Z,width:"904",height:"354"}),"{ width=450 }"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeature~GetSpecificFeature2.html"},"IFeature::GetSpecificFeature2"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature~getdefinition.html"},"IFeature::GetDefinition"),"\u662fSOLIDWORKS API\u7684\u65b9\u6cd5\uff0c\u8fd4\u56de\u7684\u662f\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u4e0d\u5bb9\u6613\u8bc6\u522b\u548c\u8f6c\u6362\u4e3a\u7279\u5b9a\u7c7b\u578b\u7684\u5206\u6d3e\u6307\u9488\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u793a\u4f8b\u5141\u8bb8\u8f93\u51fa\u6240\u9009\u7279\u5f81\u7684\u5b9a\u4e49\u548c\u7279\u5b9a\u7279\u5f81\u7684\u6240\u6709\u53ef\u5206\u914d\u63a5\u53e3\u3002\u7ed3\u679c\u8f93\u51fa\u5230VSTA\u7f16\u8f91\u5668\u7684",(0,o.kt)("em",{parentName:"p"},"Output"),"\u7a97\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System.Runtime.InteropServices;\nusing System;\nusing System.Collections.Generic;\nusing System.Diagnostics;\n\nnamespace CodeStack.csproj\n{\n    public partial class SolidWorksMacro\n    {\n        public void Main()\n        {\n            IFeature feat = swApp.IActiveDoc2.ISelectionManager.GetSelectedObject6(1, -1) as IFeature;\n\n            PrintFeatureTypes(feat);\n        }\n\n        private void PrintFeatureTypes(IFeature feat) \n        {\n            object featDef = feat.GetDefinition();\n\n            if (featDef != null)\n            {\n                foreach (Type defType in FindSpecificInterfacesFromDispatch(featDef))\n                {\n                    Debug.Print("\u7279\u5f81\u5b9a\u4e49: " + defType.FullName);\n                }\n            }\n            else\n            {\n                Debug.Print("\u7279\u5f81\u5b9a\u4e49: \u65e0");\n            }\n\n            object featSpec = feat.GetSpecificFeature2();\n\n            if (featSpec != null)\n            {\n                foreach (Type specType in FindSpecificInterfacesFromDispatch(featSpec))\n                {\n                    Debug.Print("\u7279\u5b9a\u7279\u5f81: " + specType.FullName);\n                }\n            }\n            else\n            {\n                Debug.Print("\u7279\u5b9a\u7279\u5f81: \u65e0");\n            }\n        }\n\n        private IEnumerable<Type> FindSpecificInterfacesFromDispatch(object disp) \n        {\n            if (disp == null) \n            {\n                throw new ArgumentNullException("disp");\n            }\n\n            Type[] types = typeof(ISldWorks).Assembly.GetTypes();\n\n            foreach (Type type in types) \n            {\n                if (type.IsInstanceOfType(disp)) \n                {\n                    yield return type;\n                }\n            }\n        }\n\n        public SldWorks swApp;\n    }\n}\n')))}f.isMDXComponent=!0},29182:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/specific-feature-types-3ca199dfdd75eb9164a899750c0cb32b.png"}}]);