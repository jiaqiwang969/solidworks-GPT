"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[31457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||i;return n?o.createElement(m,s(s({ref:t},l),{},{components:n})):o.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={title:"Extract selection from boss-extrude feature using SOLIDWORKS API",caption:"Extract Selection From Boss-Extrude Feature",description:"C# VSTA macro to extract selection references (from entity, end condition and direction references) from the selected boss-extrude feature using SOLIDWORKS API",image:"boss-extrude-property-page.png",labels:["selection","boss-extrude"]},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/get-boss-extrude-selection/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/get-boss-extrude-selection/index",title:"Extract selection from boss-extrude feature using SOLIDWORKS API",description:"C# VSTA macro to extract selection references (from entity, end condition and direction references) from the selected boss-extrude feature using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/get-boss-extrude-selection/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/get-boss-extrude-selection",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/get-boss-extrude-selection/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/get-boss-extrude-selection/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/get-boss-extrude-selection/index.md",tags:[],version:"current",frontMatter:{title:"Extract selection from boss-extrude feature using SOLIDWORKS API",caption:"Extract Selection From Boss-Extrude Feature",description:"C# VSTA macro to extract selection references (from entity, end condition and direction references) from the selected boss-extrude feature using SOLIDWORKS API",image:"boss-extrude-property-page.png",labels:["selection","boss-extrude"]},sidebar:"tutorialSidebar",previous:{title:"Find features in the tree by type and/or name pattern using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/find-features/"},next:{title:"VBA macro to get feature type names using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/get-feature-type-name/"}},c={},u=[],l={toc:u},d="wrapper";function f(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This C# VSTA macro extracts the information about the selection entities specified in the From Entity, End Condition and Direction selection boxes in the Boss-Extrude feature definition using SOLIDWORKS API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Boss-Extrude feature property manager page",src:n(63776).Z,width:"257",height:"673"})),(0,r.kt)("p",null,"Extracted data is output to the Output Window of VSTA Editor in the following format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"From Entity: Yes [swSelFACES]\nEnd Condition (Direction 1): No\nEnd Condition (Direction 2): No\nDirection (Direction 1): Yes [swSelSKETCHSEGS]\nDirection (Direction 2): No\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System.Runtime.InteropServices;\nusing System;\nusing System.Diagnostics;\n\nnamespace GetExtrudeFeatureSelection.csproj\n{\n    public partial class SolidWorksMacro\n    {\n        public void Main()\n        {\n            IModelDoc2 model = swApp.IActiveDoc2;\n\n            if (model != null)\n            {\n                IFeature feat = model.ISelectionManager.GetSelectedObject6(1, -1) as IFeature;\n\n                if (feat != null)\n                {\n                    IExtrudeFeatureData2 featData = feat.GetDefinition() as IExtrudeFeatureData2;\n\n                    if (featData != null)\n                    {\n                        if (featData.AccessSelections(model, null))\n                        {\n                            object fromEntity;\n                            int fromEntType;\n                            featData.GetFromEntity(out fromEntity, out fromEntType);\n\n                            Debug.Print(string.Format("From Entity: {0}",\n                                    fromEntity != null ? string.Format("Yes [{0}]", (swSelectType_e)fromEntType) : "No"));\n\n                            int endCondRefType;\n                            object endCondRef = featData.GetEndConditionReference(true, out endCondRefType);\n\n                            Debug.Print(string.Format("End Condition (Direction 1): {0}",\n                                    endCondRef != null ? string.Format("Yes [{0}]", (swSelectType_e)endCondRef) : "No"));\n\n                            endCondRef = featData.GetEndConditionReference(false, out endCondRefType);\n\n                            Debug.Print(string.Format("End Condition (Direction 2): {0}",\n                                    endCondRef != null ? string.Format("Yes [{0}]", (swSelectType_e)endCondRef) : "No"));\n\n                            object firstDirDirRef;\n                            int firstDirDirRefType;\n                            object secondDirDirRef;\n                            int secondDirDirRefType;\n\n                            featData.GetDirectionReference(out firstDirDirRef, out firstDirDirRefType, out secondDirDirRef, out secondDirDirRefType);\n\n                            Debug.Print(string.Format("Direction (Direction 1): {0}",\n                                    firstDirDirRef != null ? string.Format("Yes [{0}]", (swSelectType_e)firstDirDirRefType) : "No"));\n\n                            Debug.Print(string.Format("Direction (Direction 2): {0}",\n                                    secondDirDirRef != null ? string.Format("Yes [{0}]", (swSelectType_e)secondDirDirRefType) : "No"));\n\n                            featData.ReleaseSelectionAccess();\n                        }\n                        else\n                        {\n                            throw new InvalidOperationException("Failed to access feature selection");\n                        }\n                    }\n                    else \n                    {\n                        throw new InvalidCastException("Selected feature is not Boss-Extrude");\n                    }\n                }\n                else \n                {\n                    throw new NullReferenceException("Select feature");\n                }\n            }\n            else \n            {\n                throw new NullReferenceException("Open model");\n            }\n        }\n\n        public SldWorks swApp;\n    }\n}\n')))}f.isMDXComponent=!0},63776:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/boss-extrude-property-page-d4125c43275ff712a053a6ca8485816a.png"}}]);