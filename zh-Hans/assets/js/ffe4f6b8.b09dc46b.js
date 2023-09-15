"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[79158],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(f,s(s({ref:n},p),{},{components:t})):o.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const i={title:"\u5728\u88c5\u914d\u4e0a\u4e0b\u6587\u4e2d\u4f7f\u7528SOLIDWORKS API\u7f16\u8f91\u7279\u5f81",image:"edit-extrude-feature-in-context.png",labels:["\u7f16\u8f91","\u7279\u5f81","\u4e0a\u4e0b\u6587"]},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context/index",title:"\u5728\u88c5\u914d\u4e0a\u4e0b\u6587\u4e2d\u4f7f\u7528SOLIDWORKS API\u7f16\u8f91\u7279\u5f81",description:"\u5728\u88c5\u914d\u4e0a\u4e0b\u6587\u4e2d\u7f16\u8f91Boss-Extrude\u7279\u5f81{ width=450 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-feature-definition-in-context/index.md",tags:[],version:"current",frontMatter:{title:"\u5728\u88c5\u914d\u4e0a\u4e0b\u6587\u4e2d\u4f7f\u7528SOLIDWORKS API\u7f16\u8f91\u7279\u5f81",image:"edit-extrude-feature-in-context.png",labels:["\u7f16\u8f91","\u7279\u5f81","\u4e0a\u4e0b\u6587"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u4fee\u6539\u8f74\u7279\u5f81\u7684\u5b9a\u4e49",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/modify-axis-definition/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u6dfb\u52a0\u79fb\u52a8-\u590d\u5236\u4f53\u7279\u5f81\u5e76\u4f7f\u7528\u91cd\u5408\u7ea6\u675f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/move-copy-body-mate/"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,o.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5728\u88c5\u914d\u4e0a\u4e0b\u6587\u4e2d\u7f16\u8f91Boss-Extrude\u7279\u5f81",src:t(26683).Z,width:"1022",height:"718"}),"{ width=450 }"),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u5728\u88c5\u914d\u4e0a\u4e0b\u6587\u4e2d\u4fee\u6539\u7279\u5f81\u5b9a\u4e49\u3002"),(0,r.kt)("p",null,"\u5b8f\u4e2d\u6267\u884c\u7684\u6b65\u9aa4\u76f8\u5f53\u4e8e\u5728SOLIDWORKS\u7528\u6237\u754c\u9762\u4e2d\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5305\u542b\u6324\u538b\u7279\u5f81\u7684\u96f6\u4ef6\u7684\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u7ec4\u4ef6\u7684\u4e0a\u4e0b\u6587\u83dc\u5355\u4e2d\u9009\u62e9\u201c\u7f16\u8f91\u96f6\u4ef6\u201d\u83dc\u5355"),(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6324\u538b\u7279\u5f81\u5e76\u4ece\u4e0a\u4e0b\u6587\u83dc\u5355\u4e2d\u9009\u62e9\u201c\u7f16\u8f91\u201d\u547d\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539\u6324\u538b\u7684\u6b63\u5411\u65b9\u5411\u7684\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u51fb\u7eff\u8272\u52fe\u53f7"),(0,r.kt)("li",{parentName:"ul"},"\u9000\u51fa\u7f16\u8f91\u96f6\u4ef6\u6a21\u5f0f")),(0,r.kt)("p",null,"\u5728\u88c5\u914d\u4e2d\u7f16\u8f91\u7279\u5f81\u65f6\uff0c\u91cd\u8981\u7684\u662f\u8981\u9075\u5faa\u6b63\u786e\u7684",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/assembly/context/"},"\u88c5\u914d\u4e0a\u4e0b\u6587"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u9762\u7684\u793a\u4f8b\u5b9e\u73b0\u4e3aVSTA3\u5b8f"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u88c5\u914d\u4e2d\u9009\u62e9\u96f6\u4ef6\u7684\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u6324\u538b\u7279\u5f81\u7684\u540d\u79f0\u6307\u5b9a\u4e3a",(0,r.kt)("em",{parentName:"li"},"EXTRUDE_FEAT_NAME"),"\u53d8\u91cf\u7684\u503c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'const string EXTRUDE_FEAT_NAME = "Boss-Extrude1";\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5b8f\u3002\u7ed3\u679c\u662f\u5c06\u6324\u538b\u7684\u503c\u66f4\u6539\u4e3a",(0,r.kt)("em",{parentName:"li"},"EXTRUDE_DEPTH"),"\u53d8\u91cf\u7684\u503c\uff08\u4ee5\u7c73\u4e3a\u5355\u4f4d\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"const double EXTRUDE_DEPTH = 0.02;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\n\nnamespace ModifyFeatureInContextOfAssembly\n{\n    public partial class SolidWorksMacro\n    {\n        public void Main()\n        {\n            const string EXTRUDE_FEAT_NAME = "Boss-Extrude1";\n            const double EXTRUDE_DEPTH = 0.02;\n            \n            try\n            {\n                SetExtrudeDepth(swApp.IActiveDoc2 as IAssemblyDoc,\n                    swApp.IActiveDoc2.ISelectionManager.GetSelectedObjectsComponent3(1, -1) as IComponent2,\n                    EXTRUDE_FEAT_NAME, EXTRUDE_DEPTH);\n            }\n            catch(Exception ex)\n            {\n                swApp.SendMsgToUser2(ex.Message, (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);\n            }\n\n            return;\n        }\n\n        private void SetExtrudeDepth(IAssemblyDoc assy, IComponent2 comp, string extrudeFeatName, double depth)\n        {\n            if (comp != null)\n            {\n                if (comp.GetSuppression() == (int)swComponentSuppressionState_e.swComponentLightweight ||\n                    comp.GetSuppression() == (int)swComponentSuppressionState_e.swComponentFullyLightweight)\n                {\n                    if (comp.SetSuppression2((int)swComponentSuppressionState_e.swComponentResolved) != (int)swSuppressionError_e.swSuppressionChangeOk)\n                    {\n                        throw new InvalidOperationException("\u65e0\u6cd5\u5c06\u7ec4\u4ef6\u72b6\u6001\u8bbe\u7f6e\u4e3a\u5df2\u89e3\u6790");\n                    }\n                }\n                else if (comp.GetSuppression() == (int)swComponentSuppressionState_e.swComponentSuppressed)\n                {\n                    throw new NotSupportedException("\u4e0d\u652f\u6301\u6291\u5236\u7684\u7ec4\u4ef6");\n                }\n\n                var feat = comp.FeatureByName(extrudeFeatName);\n\n                if (feat == null)\n                {\n                    throw new MissingMemberException("\u5728\u7ec4\u4ef6\u4e2d\u627e\u4e0d\u5230\u7279\u5f81");\n                }\n\n                if (comp.Select4(false, null, false))\n                {\n                    int info = -1;\n                    if (assy.EditPart2(true, false, ref info) == (int)swEditPartCommandStatus_e.swEditPartSuccessful)\n                    {\n                        var featData = feat.GetDefinition() as IExtrudeFeatureData2;\n\n                        if (featData != null)\n                        {\n                            if (featData.AccessSelections(assy, comp))\n                            {\n                                featData.SetDepth(true, depth);\n                                if (feat.ModifyDefinition(featData, assy, comp))\n                                {\n                                    (assy as IModelDoc2).ClearSelection2(true);\n                                    assy.EditAssembly();//\u9000\u51fa\u7f16\u8f91\u96f6\u4ef6\u6a21\u5f0f\n                                }\n                                else\n                                {\n                                    throw new Exception("\u65e0\u6cd5\u5c06\u6df1\u5ea6\u8bbe\u7f6e\u4e3a\u7279\u5f81");\n                                }\n                            }\n                            else\n                            {\n                                throw new InvalidOperationException("\u65e0\u6cd5\u8bbf\u95ee\u7279\u5f81");\n                            }\n                        }\n                        else\n                        {\n                            throw new InvalidCastException("\u6240\u9009\u7279\u5f81\u4e0d\u662f\u6324\u538b\u7279\u5f81");\n                        }\n                    }\n                    else\n                    {\n                        throw new InvalidOperationException("\u65e0\u6cd5\u7f16\u8f91\u96f6\u4ef6");\n                    }\n                }\n                else\n                {\n                    throw new InvalidOperationException("\u65e0\u6cd5\u9009\u62e9\u7ec4\u4ef6");\n                }\n            }\n            else\n            {\n                throw new Exception("\u9009\u62e9\u7ec4\u4ef6");\n            }\n        }\n\n        public SldWorks swApp;\n    }\n}\n')))}d.isMDXComponent=!0},26683:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/edit-extrude-feature-in-context-24eb8c4d67cfc905ec3fe83e25f25124.png"}}]);