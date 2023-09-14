"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[86286],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8022:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const s={title:"Macro to reconstruct spherical surface using SOLIDWORKS modeler API",caption:"Reconstruct Spherical Surface",description:"Example demonstrates how to create spherical surface from the selected spherical face using SOLIDWORKS API in C#",image:"reconstructed-sphere.png",labels:["curve","sphere","c#"]},a=void 0,c={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/reconstruct-spherical-surface/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/reconstruct-spherical-surface/index",title:"Macro to reconstruct spherical surface using SOLIDWORKS modeler API",description:"Example demonstrates how to create spherical surface from the selected spherical face using SOLIDWORKS API in C#",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/reconstruct-spherical-surface/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/reconstruct-spherical-surface",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/reconstruct-spherical-surface/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/reconstruct-spherical-surface/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/reconstruct-spherical-surface/index.md",tags:[],version:"current",frontMatter:{title:"Macro to reconstruct spherical surface using SOLIDWORKS modeler API",caption:"Reconstruct Spherical Surface",description:"Example demonstrates how to create spherical surface from the selected spherical face using SOLIDWORKS API in C#",image:"reconstructed-sphere.png",labels:["curve","sphere","c#"]},sidebar:"tutorialSidebar",previous:{title:"Read and display body from the file using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/read-body-from-file/"},next:{title:"Save the selected body into external file using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/save-body-to-file/"}},i={},l=[],p={toc:l},u="wrapper";function d(e){let{components:r,...s}=e;return(0,o.kt)(u,(0,n.Z)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reconstructed spherical surface from the half-sphere",src:t(56442).Z,width:"265",height:"314"})),(0,o.kt)("p",null,"This example demonstrates how to create spherical surface (360 degress) from the selected spherical face (could be less than 360 degrees) using SOLIDWORKS API."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select any spherical surface and run the macro"),(0,o.kt)("li",{parentName:"ul"},"Reconstructed spherical surface is created as temp body and displayed in the graphics area"),(0,o.kt)("li",{parentName:"ul"},"Clear the selection to clear the preview")),(0,o.kt)("p",null,"Spherical surface is created using the ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler~createsphericalsurface2.html"},"IModeler::CreateSphericalSurface2")," SOLIDWORKS API method which is trimmed using the ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isurface~createtrimmedsheet4.html"},"ISurface::CreateTrimmedSheet4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System.Runtime.InteropServices;\nusing System;\n\nnamespace CodeStackExample\n{\n    public partial class SolidWorksMacro\n    {\n        private IBody2 m_PreviewBody;\n\n        public void Main()\n        {\n            PartDoc part = swApp.ActiveDoc as PartDoc;\n\n            if (part != null)\n            {\n                IFace2 face = (part as IModelDoc2).ISelectionManager.GetSelectedObject6(1, -1) as IFace2;\n\n                if (face != null && face.IGetSurface().IsSphere())\n                {\n                    double[] sphereParams = face.IGetSurface().SphereParams as double[];\n\n                    IModeler modeler = swApp.IGetModeler();\n\n                    ISurface sphereSurf = modeler.CreateSphericalSurface2(\n                        new double[] { sphereParams[0], sphereParams[1], sphereParams[2] },\n                        new double[] { 0, 0, 1 },\n                        new double[] { 1, 0, 0 }, sphereParams[3]) as ISurface;\n\n                    m_PreviewBody = sphereSurf.CreateTrimmedSheet4(new ICurve[] { null }, true) as IBody2;\n\n                    m_PreviewBody.Display3(part, ToColorRef(255, 255, 0), (int)swTempBodySelectOptions_e.swTempBodySelectOptionNone);\n\n                    part.ClearSelectionsNotify += new DPartDocEvents_ClearSelectionsNotifyEventHandler(OnClearSelections);\n                }\n                else \n                {\n                    swApp.SendMsgToUser("Please select spherical surface");\n                }\n            }\n            else \n            {\n                swApp.SendMsgToUser("Please open part document");\n            }\n        }\n\n        private int ToColorRef(byte r, byte g, byte b)\n        {\n            return (r << 0) | (g << 8) | (b << 16);\n        }\n\n        private int OnClearSelections()\n        {\n            m_PreviewBody = null;\n            GC.Collect();\n            return 0;\n        }\n\n        public SldWorks swApp;\n    }\n}\n')))}d.isMDXComponent=!0},56442:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/reconstructed-sphere-3a65cd6f23baca521c7346f597ab16d6.png"}}]);