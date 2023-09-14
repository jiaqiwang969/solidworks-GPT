"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[30478],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),a=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=a(o),m=r,u=d["".concat(c,".").concat(m)]||d[m]||y[m]||s;return o?n.createElement(u,l(l({ref:t},p),{},{components:o})):n.createElement(u,l({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,l=new Array(s);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var a=2;a<s;a++)l[a]=o[a];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},40822:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var n=o(87462),r=(o(67294),o(3905));const s={title:"Get the sheet body geometry type using SOLIDWORKS API",caption:"Get The Sheet Body Geometry Type",description:"Example identifies the type of the selected sheet body (open shell, internal shell, external shell)",image:"face-shell-types.png",labels:["example","face","geometry","open geometry","shell","solidworks api","topology"],"redirect-from":["/2018/03/solidworks-api-geometry-get-body-geometry-type.html"]},l=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/sheet-body-geometry-type/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/sheet-body-geometry-type/index",title:"Get the sheet body geometry type using SOLIDWORKS API",description:"Example identifies the type of the selected sheet body (open shell, internal shell, external shell)",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/sheet-body-geometry-type/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/sheet-body-geometry-type",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/sheet-body-geometry-type/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/sheet-body-geometry-type/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/sheet-body-geometry-type/index.md",tags:[],version:"current",frontMatter:{title:"Get the sheet body geometry type using SOLIDWORKS API",caption:"Get The Sheet Body Geometry Type",description:"Example identifies the type of the selected sheet body (open shell, internal shell, external shell)",image:"face-shell-types.png",labels:["example","face","geometry","open geometry","shell","solidworks api","topology"],"redirect-from":["/2018/03/solidworks-api-geometry-get-body-geometry-type.html"]},sidebar:"tutorialSidebar",previous:{title:"Create sketch points on selected edge via SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/selected-edge-create-sketch-points/"},next:{title:"Macro slices body by sections using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/slice-body/"}},c={},a=[],p={toc:a},d="wrapper";function y(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are 3 types of faces in SOLIDWORKS bodies:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Open Shell"),". Faces from the sheet bodies which are together with connected faces do not form the closed geometry (for example planar face, while face of the shell cube or sphere won't be considered as open)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Internal Shell"),". Faces in solid bodies which belong to the cavities."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"External Shell"),". Any other faces which do not belong to previous groups")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shell types of face",src:o(52228).Z,width:"400",height:"244"}),"{ width=400 height=243 }"),(0,r.kt)("p",null,"The example below identifies the type of the selected sheet body using SOLIDWORKS API. If the body is of open geometry (contains open shell faces) or closed geometry (no open shell faces). The closed geometry sheet body can be converted to a solid body.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\n\nnamespace CodeStack\n{\n    public partial class SolidWorksMacro\n    {\n        public enum FaceShellType_e\n        {\n            Open = 0,\n            Internal = 1,\n            External = 2\n        }\n\n        public void Main()\n        {\n            IModelDoc2 model = swApp.IActiveDoc2;\n\n            if (model != null)\n            {\n                SelectionMgr selMgr = model.ISelectionManager;\n\n                IBody2 body = selMgr.GetSelectedObject6(1, -1) as IBody2;\n\n                if (body != null)\n                {\n                    if (body.GetType() == (int)swBodyType_e.swSheetBody)\n                    {\n                        if (IsOpenGeometry(body))\n                        {\n                            swApp.SendMsgToUser("Selected body is an open geometry");\n                        }\n                        else\n                        {\n                            swApp.SendMsgToUser("Selected body is not an open geometry");\n                        }\n                    }\n                    else\n                    {\n                        swApp.SendMsgToUser("Selected body is not a sheet body");\n                    }\n                }\n                else\n                {\n                    swApp.SendMsgToUser("Please select sheet body");\n                }\n            }\n            else\n            {\n                swApp.SendMsgToUser("Please open model");\n            }\n\n            return;\n        }\n\n        private static bool IsOpenGeometry(IBody2 body)\n        {\n            object[] faces = body.GetFaces() as object[];\n\n            if (faces != null)\n            {\n                foreach (IFace2 face in faces)\n                {\n                    FaceShellType_e shellType = (FaceShellType_e)face.GetShellType();\n\n                    if (shellType == FaceShellType_e.Open)\n                    {\n                        return true;\n                    }\n                }\n            }\n\n            return false;\n        }\n\n        public SldWorks swApp;\n    }\n}\n\n')))}y.isMDXComponent=!0},52228:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/face-shell-types-b88867713a41316540db0e7841f42a93.png"}}]);