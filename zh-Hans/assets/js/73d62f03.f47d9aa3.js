"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[12716],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(f,i(i({ref:n},p),{},{components:t})):o.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18194:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={title:"\u4f7f\u7528SOLIDWORKS API\u6dfb\u52a0\u79fb\u52a8-\u590d\u5236\u4f53\u7279\u5f81\u548c\u5171\u9762\u7ea6\u675f",image:"move-copy-body-mate-pmp.png",labels:["\u79fb\u52a8-\u590d\u5236\u4f53","\u7ea6\u675f"]},i=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/move-copy-body-mate/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/move-copy-body-mate/index",title:"\u4f7f\u7528SOLIDWORKS API\u6dfb\u52a0\u79fb\u52a8-\u590d\u5236\u4f53\u7279\u5f81\u548c\u5171\u9762\u7ea6\u675f",description:"\u6dfb\u52a0\u4e86\u5171\u9762\u7ea6\u675f\u7684\u79fb\u52a8-\u590d\u5236\u4f53\u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762{ width=150 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/move-copy-body-mate/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/move-copy-body-mate",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/move-copy-body-mate/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/move-copy-body-mate/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/move-copy-body-mate/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u6dfb\u52a0\u79fb\u52a8-\u590d\u5236\u4f53\u7279\u5f81\u548c\u5171\u9762\u7ea6\u675f",image:"move-copy-body-mate-pmp.png",labels:["\u79fb\u52a8-\u590d\u5236\u4f53","\u7ea6\u675f"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u4fee\u6539\u5b54\u8868\u4e2d\u5b54\u7684\u4f4d\u7f6e\u7cbe\u5ea6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/modify-holes-table-holes-location-precision/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u79fb\u52a8\u8bbe\u8ba1\u8868\u5bf9\u8c61",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/move-design-table/"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,o.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u6dfb\u52a0\u4e86\u5171\u9762\u7ea6\u675f\u7684\u79fb\u52a8-\u590d\u5236\u4f53\u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762",src:t(27387).Z,width:"249",height:"764"}),"{ width=150 }"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2aC# VSTA\u5b8f\u793a\u4f8b\uff0c\u5b83\u53ef\u4ee5\u627e\u5230\u6240\u9009\u4f53\u7684\u6700\u5927\u5e73\u9762\u9762\uff0c\u5e76\u5728\u96f6\u4ef6\u4e2d\u63d2\u5165\u79fb\u52a8-\u590d\u5236\u4f53\u7279\u5f81\uff0c\u5e76\u4f7f\u7528SOLIDWORKS API\u5728\u6700\u5927\u9762\u548c\u524d\u5e73\u9762\u4e4b\u95f4\u6dfb\u52a0\u5171\u9762\u7ea6\u675f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6253\u5f00\u96f6\u4ef6\u6587\u6863"),(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5305\u542b\u5e73\u9762\u9762\u7684\u4efb\u4f55\u4f53"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5b8f\u3002\u7ed3\u679c\u662f\u901a\u8fc7",(0,r.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2016/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeaturemanager~insertmovecopybody2.html"},"IFeatureManager::InsertMoveCopyBody2")," SOLIDWORKS API\u65b9\u6cd5\u63d2\u5165\u4e86\u79fb\u52a8-\u590d\u5236\u4f53\u7279\u5f81\u3002\u7136\u540e\uff0c\u4f7f\u7528",(0,r.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2016/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMoveCopyBodyFeatureData~AddMate.html"},"IMoveCopyBodyFeatureData::AddMate")," SOLIDWORKS API\u65b9\u6cd5\u5728\u4f53\u7684\u6700\u5927\u9762\u548c\u524d\u5e73\u9762\u4e4b\u95f4\u6dfb\u52a0\u4e86\u5171\u9762\u7ea6\u675f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System;\nusing System.Linq;\nusing System.Runtime.InteropServices;\n\nnamespace MoveBodyMate\n{\n    public partial class SolidWorksMacro\n    {\n        public void Main()\n        {\n            try\n            {\n                var model = swApp.IActiveDoc2;\n                var body = model.ISelectionManager.GetSelectedObject6(1, -1) as IBody2;\n\n                if (body == null)\n                {\n                    throw new NullReferenceException("\u9009\u62e9\u8981\u79fb\u52a8\u7684\u4f53");\n                }\n\n                var plane = FindFrontPlane(model);\n                var face = FindLargestPlanarFace(body);\n\n                AddCoincidentMate(model, body, plane as IEntity, face as IEntity);\n            }\n            catch(Exception ex)\n            {\n                swApp.SendMsgToUser2(ex.Message, (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);\n            }\n        }\n\n        private static void AddCoincidentMate(ModelDoc2 model, IBody2 body, IEntity mateEnt, IEntity mateEntOnBody)\n        {\n            var selData = model.ISelectionManager.CreateSelectData();\n            selData.Mark = 1;\n\n            if (!body.Select2(false, selData))\n            {\n                throw new InvalidOperationException("\u9009\u62e9\u4f53\u5931\u8d25");\n            }\n\n            var moveCopyBodyFeat = model.FeatureManager.InsertMoveCopyBody2(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, 1);\n\n            var featData = moveCopyBodyFeat.GetDefinition() as IMoveCopyBodyFeatureData;\n\n            if (featData.AccessSelections(model, null))\n            {\n                int err;\n\n                var mate = featData.AddMate(new DispatchWrapper[]\n                {\n                    new DispatchWrapper(mateEnt),\n                    new DispatchWrapper(mateEntOnBody)\n                }, (int)swMateType_e.swMateCOINCIDENT, (int)swMateAlign_e.swMateAlignCLOSEST, 0, 0, out err);\n\n                if (mate == null)\n                {\n                    throw new NullReferenceException(string.Format("\u6dfb\u52a0\u7ea6\u675f\u5931\u8d25: {0}", (swAddMateError_e)err));\n                }\n\n                if (!moveCopyBodyFeat.ModifyDefinition(featData, model, null))\n                {\n                    throw new InvalidOperationException("\u5e94\u7528\u7279\u5f81\u66f4\u6539\u5931\u8d25");\n                }\n            }\n            else\n            {\n                throw new InvalidOperationException("\u65e0\u6cd5\u8bbf\u95ee\u5b9a\u4e49");\n            }\n        }\n\n        private IFeature FindFrontPlane(IModelDoc2 model)\n        {\n            var feat = model.IFirstFeature();\n\n            while (feat != null && feat.GetTypeName2() != "RefPlane")\n            {\n                feat = feat.IGetNextFeature();\n            }\n\n            if (feat == null)\n            {\n                throw new NullReferenceException("\u65e0\u6cd5\u627e\u5230\u524d\u5e73\u9762");\n            }\n\n            return feat;\n        }\n\n        private IFace2 FindLargestPlanarFace(IBody2 body)\n        {\n            var faces = body.GetFaces() as object[];\n\n            if (faces == null)\n            {\n                throw new NullReferenceException("\u4f53\u4e2d\u4e0d\u5305\u542b\u9762");\n            }\n\n            var face = faces.Cast<IFace2>()\n                .Where(f => f.IGetSurface().IsPlane())\n                .OrderBy(f => f.GetArea()).LastOrDefault();\n\n            if (face == null)\n            {\n                throw new NullReferenceException("\u8be5\u4f53\u4e2d\u6ca1\u6709\u5e73\u9762\u9762");\n            }\n\n            return face;\n        }\n\n        public SldWorks swApp;\n    }\n}\n\n\n')))}u.isMDXComponent=!0},27387:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/move-copy-body-mate-pmp-ad29fa4152244c41ef21e2d538d7f15c.png"}}]);