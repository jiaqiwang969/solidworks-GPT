"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[95123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=s.createContext({}),l=function(e){var t=s.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(a.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=l(n),d=o,h=g["".concat(a,".").concat(d)]||g[d]||u[d]||r;return n?s.createElement(h,c(c({ref:t},p),{},{components:n})):s.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[g]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return s.createElement.apply(null,c)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(87462),o=(n(67294),n(3905));const r={title:"Get the total length of segments in selected sketch using SOLIDWORKS API",image:"sketch-total-length.png",labels:["sketch","length"]},c=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-sketch-segments-total-length/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-sketch-segments-total-length/index",title:"Get the total length of segments in selected sketch using SOLIDWORKS API",description:"Total length of the selected sketch segments{ width=450 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-sketch-segments-total-length/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-sketch-segments-total-length",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-sketch-segments-total-length/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-sketch-segments-total-length/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-sketch-segments-total-length/index.md",tags:[],version:"current",frontMatter:{title:"Get the total length of segments in selected sketch using SOLIDWORKS API",image:"sketch-total-length.png",labels:["sketch","length"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u9009\u5b9a\u7684\u8349\u56fe\u6bb5\u4fe1\u606f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-selected-sketch-segments-info/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u4ece\u7ed8\u56fe\u89c6\u56fe\u83b7\u53d6\u5b9e\u4f53\u548c\u6750\u6599",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-view-bodies/"}},a={},l=[],p={toc:l},g="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Total length of the selected sketch segments",src:n(75760).Z,width:"668",height:"471"}),"{ width=450 }"),(0,o.kt)("p",null,"This C# example of ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/"},"stand-alone console application")," to calculate the total length of all segments in the selected sketch using SOLIDWORKS API. Construction geometry sketch segments are excluded from the calculation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System;\nusing System.Linq;\n\nnamespace CodeStack\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            var app = Activator.CreateInstance(Type.GetTypeFromProgID("SldWorks.Application")) as ISldWorks;\n            app.Visible = true;\n\n            if (app.IActiveDoc2 != null)\n            {\n                var feat = app.IActiveDoc2.ISelectionManager.GetSelectedObject6(1, -1) as IFeature;\n\n                var sketch = feat?.GetSpecificFeature2() as ISketch;\n\n                if (sketch != null)\n                {\n                    var segs = (sketch.GetSketchSegments() as object[])?.Cast<ISketchSegment>();\n\n                    if (segs != null)\n                    {\n                        var totalLength = segs.Where(s => !s.ConstructionGeometry).Sum(s => s.GetLength());\n\n                        app.SendMsgToUser2($"Total length of segments: {totalLength} meters", (int)swMessageBoxIcon_e.swMbInformation, (int)swMessageBoxBtn_e.swMbOk);\n                    }\n                    else\n                    {\n                        throw new NullReferenceException("No segments in the sketch");\n                    }\n                }\n                else\n                {\n                    throw new NullReferenceException("Select sketch");\n                }\n            }\n            else\n            {\n                throw new NullReferenceException("Open document");\n            }\n        }\n    }\n}\n\n')))}u.isMDXComponent=!0},75760:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/sketch-total-length-764709b06ebf398c0871e544700bbe7b.png"}}]);