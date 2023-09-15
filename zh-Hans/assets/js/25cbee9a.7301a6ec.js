"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[66854],{3905:(e,n,s)=>{s.d(n,{Zo:()=>m,kt:()=>p});var t=s(67294);function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function o(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function i(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?o(Object(s),!0).forEach((function(n){r(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function a(e,n){if(null==e)return{};var s,t,r=function(e,n){if(null==e)return{};var s,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)s=o[t],n.indexOf(s)>=0||(r[s]=e[s]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)s=o[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var A=t.createContext({}),l=function(e){var n=t.useContext(A),s=n;return e&&(s="function"==typeof e?e(n):i(i({},n),e)),s},m=function(e){var n=l(e.components);return t.createElement(A.Provider,{value:n},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var s=e.components,r=e.mdxType,o=e.originalType,A=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),y=l(s),d=r,p=y["".concat(A,".").concat(d)]||y[d]||c[d]||o;return s?t.createElement(p,i(i({ref:n},m),{},{components:s})):t.createElement(p,i({ref:n},m))}));function p(e,n){var s=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=s.length,i=new Array(o);i[0]=d;var a={};for(var A in n)hasOwnProperty.call(n,A)&&(a[A]=n[A]);a.originalType=e,a[y]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<o;l++)i[l]=s[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,s)}d.displayName="MDXCreateElement"},65149:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>A,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(87462),r=(s(67294),s(3905));const o={title:"Get mass of bodies in drawing view using SOLIDWORKS API",image:"multi-body-sheet-metal-mass-property.png",labels:["view","mass","flat pattern"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-view-bodies-mass/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-view-bodies-mass/index",title:"Get mass of bodies in drawing view using SOLIDWORKS API",description:"It is possible to find the mass of the specific body by using the IBody2::GetMassProperties SOLIDWORKS API method, but it is required to specify the density in order to calculate mass which might not be easy to extract.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-view-bodies-mass/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-view-bodies-mass",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-view-bodies-mass/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-view-bodies-mass/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-view-bodies-mass/index.md",tags:[],version:"current",frontMatter:{title:"Get mass of bodies in drawing view using SOLIDWORKS API",image:"multi-body-sheet-metal-mass-property.png",labels:["view","mass","flat pattern"]},sidebar:"tutorialSidebar",previous:{title:"Get bodies and materials from drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/get-view-bodies/"},next:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/drawing/import-export-layers/"}},A={},l=[],m={toc:l},y="wrapper";function c(e){let{components:n,...o}=e;return(0,r.kt)(y,(0,t.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is possible to find the mass of the specific body by using the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ibody2~getmassproperties.html"},"IBody2::GetMassProperties")," SOLIDWORKS API method, but it is required to specify the density in order to calculate mass which might not be easy to extract."),(0,r.kt)("p",null,"If it is required to find the mass of bodies in the drawing view, this method might not be applicable. The density is not available for the body if the material was applied to the body itself. It is possible to extract density form the material properties, but it will be required to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:4000/solidworks-api/document/materials/copy-custom-property/"},"parse material XML file")," to find the value of the node."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Drawing view of flat pattern",src:s(48476).Z,width:"502",height:"610"}),"{ width=250 }"),(0,r.kt)("p",null,"Alternative option is to use ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IMassProperty.html"},"IMassProperty")," interface."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Body mass in part document",src:s(58887).Z,width:"1069",height:"616"}),"{ width=450 }"),(0,r.kt)("p",null,"However pointers to bodies extracted at the drawing context are not applicable for the calculation. The mass value will always be equal to 0 in this case. The body pointers need to be converted to the part context in the corresponding configuration."),(0,r.kt)("p",null,"Below code of C# VSTA macro retrieves the mass of all bodies in the selected drawing view using SOLIDWORKS API and displays the result in the message box."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\n\nnamespace GetMassPropertyFromBody\n{\n    public partial class SolidWorksMacro\n    {\n        public void Main()\n        {\n            try\n            {\n                var model = swApp.IActiveDoc2;\n\n                if (model is IDrawingDoc)\n                {\n                    var view = model.ISelectionManager.GetSelectedObject6(1, -1) as IView;\n                    \n                    if (view != null)\n                    {\n                        var mass = GetViewBodiesMass(view);\n\n                        swApp.SendMsgToUser2(string.Format("Mass of body(ies) in selected view is {0:0.000} kg", mass),\n                                    (int)swMessageBoxIcon_e.swMbInformation,\n                                    (int)swMessageBoxBtn_e.swMbOk);\n                    }\n                    else\n                    {\n                        throw new NullReferenceException("Please select drawing view");\n                    }\n                }\n                else\n                {\n                    throw new InvalidCastException("Please open drawing document");\n                }\n            }\n            catch(Exception ex)\n            {\n                swApp.SendMsgToUser2(ex.Message,\n                    (int)swMessageBoxIcon_e.swMbStop,\n                    (int)swMessageBoxBtn_e.swMbOk);\n            }\n\n            return;\n        }\n\n        private double GetViewBodiesMass(IView view)\n        {\n            if (view.ReferencedDocument is IPartDoc)\n            {\n                var bodies = GetViewBodies(view);\n\n                var refDoc = view.ReferencedDocument;\n                var activeConf = refDoc.ConfigurationManager.ActiveConfiguration.Name;\n                refDoc.ShowConfiguration2(view.ReferencedConfiguration);\n\n                try\n                {\n                    var partContextBodies = ConvertBodiesContext(bodies, view.ReferencedDocument as IPartDoc).ToArray();\n\n                    var massPrp = refDoc.Extension.CreateMassProperty();\n\n                    if (massPrp.AddBodies(partContextBodies))\n                    {\n                        return massPrp.Mass;\n                    }\n                    else\n                    {\n                        throw new InvalidOperationException(\n                            "Failed to add bodies to the mass properties scope");\n                    }\n                }\n                catch\n                {\n                    throw;\n                }\n                finally\n                {\n                    refDoc.ShowConfiguration2(activeConf);\n                }\n            }\n            else\n            {\n                throw new InvalidCastException("Only part views are supported");\n            }\n        }\n\n        private IBody2[] GetViewBodies(IView view)\n        {\n            IEnumerable<IBody2> bodies = null;\n\n            if (view.IsFlatPatternView())\n            {\n                var visComps = view.GetVisibleComponents() as object[];\n\n                if (visComps == null || !visComps.Any())\n                {\n                    throw new NullReferenceException("No components in this view");\n                }\n\n                var faces = view.GetVisibleEntities2(visComps.First() as Component2,\n                    (int)swViewEntityType_e.swViewEntityType_Face) as object[];\n\n                bodies = new IBody2[] \n                {\n                    (faces.FirstOrDefault() as IFace2).IGetBody()\n                };\n            }\n            else\n            {\n                bodies = (view.Bodies as object[]).Cast<IBody2>().ToArray();\n            }\n\n            return bodies.ToArray();\n        }\n\n        private IEnumerable<IBody2> ConvertBodiesContext(IEnumerable<IBody2> inputBodies, IPartDoc context)\n        {\n            var partBodies = (context.GetBodies2((int)swBodyType_e.swAllBodies, false) as object[]).Cast<IBody2>();\n\n            return inputBodies.Select(b =>\n            {\n                var corrBody = partBodies.FirstOrDefault(\n                    pb => pb.Name.Equals(b.Name, StringComparison.CurrentCultureIgnoreCase));\n\n                if (corrBody == null)\n                {\n                    throw new NullReferenceException(string.Format("Failed to find the corresponding body of {0}", b.Name));\n                }\n\n                return corrBody;\n            }).ToArray();\n        }\n\n        public SldWorks swApp;\n    }\n}\n\n\n')))}c.isMDXComponent=!0},48476:(e,n,s)=>{s.d(n,{Z:()=>t});const t="data:image/png;base64,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TyR7Jnsm+0SyZ7Jnsk8keyZ7JvtEsmeyZ7JPJHsmeyb7RLJnsmeyTyR7Jnsm+0SyZ7Jnsk8keyZ7JvtEsmeyZ7JPJHsmeyb7RLJnsmeyTyR7Jnsm+0SyZ7Jnsk8keyZ7JvtEsmeyZ7JPJHsmeyb7RLJnsmeyTyR7Jnsm+0SyZ7Jnsk8keyZ7JvtEsmeyZ7JPJHsmeyb7RLJnsmeyTyR7Jnsm+0SyZ7Jnsk8keyZ7JvtEsmeyZ7JPJHsmeyb7RLJnsmeyTyR7Jnsm+0SyZ7Jnsk8keyZ7JvtEsmeyZ7JPJHsmeyb7RLJnsmeyTyR7Jnsm+0SyZ7Jnsk8keyZ7JvtEsmeyZ7JPJHv2Y2XbNX6W7CNtl/hpC2cnk72S7JVkryR7JdkryV5J9kqyV5K9kuyVZK8keyXZK8leSfZKsleSvZLslWSvJHsl2SvJXkn2SrJXkr2S7JVkryR7JdkryV5J9kqyV5K9kuyVZK8keyXZK8leSfZKsleSvZLslWSvJHsl2SvJXkn2SrJXkr2S7JVkryR7JdkryV5J9kqyV5K9kuyVZK8keyXZK8leSfZKsleSvZLslWSvJHsl2SvJXkn2SrJXkr2S7JVkryR7oZ8//wfDqZ5BqMfVigAAAABJRU5ErkJggg=="},58887:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/multi-body-sheet-metal-mass-property-b627b58932654fea86b7d4b184a28229.png"}}]);