"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[1391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>y});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),l=p(n),u=o,y=l["".concat(c,".").concat(u)]||l[u]||d[u]||r;return n?i.createElement(y,s(s({ref:t},f),{},{components:n})):i.createElement(y,s({ref:t},f))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const r={layout:"sw-tool",title:"Identify SOLIDWORKS API feature definition and specific type",caption:"Identify Feature Definition And Specific Type",description:"Helper methods allowing to identify the definition and specific type of the selected feature via SOLIDWORKS API and reflection",image:"specific-feature-types.png",labels:["reflection","specific feature","feature definition"],group:"Developers"},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/identify-feature/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/identify-feature/index",title:"Identify SOLIDWORKS API feature definition and specific type",description:"Helper methods allowing to identify the definition and specific type of the selected feature via SOLIDWORKS API and reflection",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/identify-feature/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/identify-feature",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/identify-feature/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/identify-feature/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/identify-feature/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Identify SOLIDWORKS API feature definition and specific type",caption:"Identify Feature Definition And Specific Type",description:"Helper methods allowing to identify the definition and specific type of the selected feature via SOLIDWORKS API and reflection",image:"specific-feature-types.png",labels:["reflection","specific feature","feature definition"],group:"Developers"},sidebar:"tutorialSidebar",previous:{title:"Difference between SOLIDWORKS API methods with and without I",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/i-api-versions/"},next:{title:"Setting ShadedImageQualityCoarse in user preferences of the active document using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/image-quality-coarse/"}},c={},p=[],f={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Type of specific feature and feature definition of selected feature output to the window",src:n(3386).Z,width:"904",height:"354"}),"{ width=450 }"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeature~GetSpecificFeature2.html"},"IFeature::GetSpecificFeature2")," and ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature~getdefinition.html"},"IFeature::GetDefinition")," SOLIDWORKS API methods return dispatch pointers which in some cases are not easy to identify and cast to specific types."),(0,o.kt)("p",null,"The following code example allows to output all assignable interfaces for the selected feature's definition and specific feature. The result is output to the ",(0,o.kt)("em",{parentName:"p"},"Output")," window of VSTA editor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System.Runtime.InteropServices;\nusing System;\nusing System.Collections.Generic;\nusing System.Diagnostics;\n\nnamespace CodeStack.csproj\n{\n    public partial class SolidWorksMacro\n    {\n        public void Main()\n        {\n            IFeature feat = swApp.IActiveDoc2.ISelectionManager.GetSelectedObject6(1, -1) as IFeature;\n\n            PrintFeatureTypes(feat);\n        }\n\n        private void PrintFeatureTypes(IFeature feat) \n        {\n            object featDef = feat.GetDefinition();\n\n            if (featDef != null)\n            {\n                foreach (Type defType in FindSpecificInterfacesFromDispatch(featDef))\n                {\n                    Debug.Print("Feature Definition: " + defType.FullName);\n                }\n            }\n            else\n            {\n                Debug.Print("Feature Definition: None");\n            }\n\n            object featSpec = feat.GetSpecificFeature2();\n\n            if (featSpec != null)\n            {\n                foreach (Type specType in FindSpecificInterfacesFromDispatch(featSpec))\n                {\n                    Debug.Print("Specific Feature: " + specType.FullName);\n                }\n            }\n            else\n            {\n                Debug.Print("Specific Feature: None");\n            }\n        }\n\n        private IEnumerable<Type> FindSpecificInterfacesFromDispatch(object disp) \n        {\n            if (disp == null) \n            {\n                throw new ArgumentNullException("disp");\n            }\n\n            Type[] types = typeof(ISldWorks).Assembly.GetTypes();\n\n            foreach (Type type in types) \n            {\n                if (type.IsInstanceOfType(disp)) \n                {\n                    yield return type;\n                }\n            }\n        }\n\n        public SldWorks swApp;\n    }\n}\n')))}d.isMDXComponent=!0},3386:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/specific-feature-types-3ca199dfdd75eb9164a899750c0cb32b.png"}}]);