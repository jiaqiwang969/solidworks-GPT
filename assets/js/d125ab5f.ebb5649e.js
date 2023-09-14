"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[81467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const r={title:"Edit feature in the context of the assembly using SOLIDWORKS API",caption:"Edit Feature In The Context Of The Assembly",description:"Example demonstrates how to modify feature definition in the context of the assembly",image:"edit-extrude-feature-in-context.png",labels:["edit","feature","context"]},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context/index",title:"Edit feature in the context of the assembly using SOLIDWORKS API",description:"Example demonstrates how to modify feature definition in the context of the assembly",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context/index.md",tags:[],version:"current",frontMatter:{title:"Edit feature in the context of the assembly using SOLIDWORKS API",caption:"Edit Feature In The Context Of The Assembly",description:"Example demonstrates how to modify feature definition in the context of the assembly",image:"edit-extrude-feature-in-context.png",labels:["edit","feature","context"]},sidebar:"tutorialSidebar",previous:{title:"Modify the definition of axis feature using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-axis-definition/"},next:{title:"Add move-copy body feature with coincident mate using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/move-copy-body-mate/"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Boss-Extrude feature is editing in the context of the assembly",src:n(2426).Z,width:"1022",height:"718"}),"{ width=450 }"),(0,i.kt)("p",null,"This example demonstrates how to modify feature definition in the context of the assembly using SOLIDWORKS API."),(0,i.kt)("p",null,"The steps performed in the macro are equivalent of the following steps in SOLIDWORKS User Interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select component of the part which contains extrusion"),(0,i.kt)("li",{parentName:"ul"},"Select 'Edit Part' menu in the context menu of the component"),(0,i.kt)("li",{parentName:"ul"},"Select extrusion feature and click 'Edit' command from the context menu"),(0,i.kt)("li",{parentName:"ul"},"Modify the value of the extrusion in the forward direction"),(0,i.kt)("li",{parentName:"ul"},"Click green tick"),(0,i.kt)("li",{parentName:"ul"},"Exit the edit part mode")),(0,i.kt)("p",null,"When editing feature in the assembly it is important to follow the correct ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/assembly/context/"},"Assembly Context"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example below is implemented as VSTA3 macro"),(0,i.kt)("li",{parentName:"ul"},"Select component of the part in the assembly"),(0,i.kt)("li",{parentName:"ul"},"Specify the name of the extrude feature as the value of the ",(0,i.kt)("em",{parentName:"li"},"EXTRUDE_FEAT_NAME")," variable")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'const string EXTRUDE_FEAT_NAME = "Boss-Extrude1";\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run macro. As the result the value of the extrusion is changed to the value of ",(0,i.kt)("em",{parentName:"li"},"EXTRUDE_DEPTH")," variable (in meters)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"const double EXTRUDE_DEPTH = 0.02;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\n\nnamespace ModifyFeatureInContextOfAssembly\n{\n    public partial class SolidWorksMacro\n    {\n        public void Main()\n        {\n            const string EXTRUDE_FEAT_NAME = "Boss-Extrude1";\n            const double EXTRUDE_DEPTH = 0.02;\n            \n            try\n            {\n                SetExtrudeDepth(swApp.IActiveDoc2 as IAssemblyDoc,\n                    swApp.IActiveDoc2.ISelectionManager.GetSelectedObjectsComponent3(1, -1) as IComponent2,\n                    EXTRUDE_FEAT_NAME, EXTRUDE_DEPTH);\n            }\n            catch(Exception ex)\n            {\n                swApp.SendMsgToUser2(ex.Message, (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);\n            }\n\n            return;\n        }\n\n        private void SetExtrudeDepth(IAssemblyDoc assy, IComponent2 comp, string extrudeFeatName, double depth)\n        {\n            if (comp != null)\n            {\n                if (comp.GetSuppression() == (int)swComponentSuppressionState_e.swComponentLightweight ||\n                    comp.GetSuppression() == (int)swComponentSuppressionState_e.swComponentFullyLightweight)\n                {\n                    if (comp.SetSuppression2((int)swComponentSuppressionState_e.swComponentResolved) != (int)swSuppressionError_e.swSuppressionChangeOk)\n                    {\n                        throw new InvalidOperationException("Failed to set component state to resolved");\n                    }\n                }\n                else if (comp.GetSuppression() == (int)swComponentSuppressionState_e.swComponentSuppressed)\n                {\n                    throw new NotSupportedException("Suppressed component is not supported");\n                }\n\n                var feat = comp.FeatureByName(extrudeFeatName);\n\n                if (feat == null)\n                {\n                    throw new MissingMemberException("Feature is not found in the component");\n                }\n\n                if (comp.Select4(false, null, false))\n                {\n                    int info = -1;\n                    if (assy.EditPart2(true, false, ref info) == (int)swEditPartCommandStatus_e.swEditPartSuccessful)\n                    {\n                        var featData = feat.GetDefinition() as IExtrudeFeatureData2;\n\n                        if (featData != null)\n                        {\n                            if (featData.AccessSelections(assy, comp))\n                            {\n                                featData.SetDepth(true, depth);\n                                if (feat.ModifyDefinition(featData, assy, comp))\n                                {\n                                    (assy as IModelDoc2).ClearSelection2(true);\n                                    assy.EditAssembly();//Exit edit part mode\n                                }\n                                else\n                                {\n                                    throw new Exception("Failed to set the depth to the feature");\n                                }\n                            }\n                            else\n                            {\n                                throw new InvalidOperationException("Failed to access feature");\n                            }\n                        }\n                        else\n                        {\n                            throw new InvalidCastException("Selected feature is not an extrude feature");\n                        }\n                    }\n                    else\n                    {\n                        throw new InvalidOperationException("Failed to edit part");\n                    }\n                }\n                else\n                {\n                    throw new InvalidOperationException("Failed to select component");\n                }\n            }\n            else\n            {\n                throw new Exception("Select component");\n            }\n        }\n\n        public SldWorks swApp;\n    }\n}\n')))}d.isMDXComponent=!0},2426:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/edit-extrude-feature-in-context-24eb8c4d67cfc905ec3fe83e25f25124.png"}}]);