"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[88781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>h});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},c=Object.keys(e);for(s=0;s<c.length;s++)n=c[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)n=c[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=s.createContext({}),l=function(e){var t=s.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=l(e.components);return s.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(a,".").concat(d)]||u[d]||p[d]||c;return n?s.createElement(h,r(r({ref:t},g),{},{components:n})):s.createElement(h,r({ref:t},g))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var l=2;l<c;l++)r[l]=n[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var s=n(87462),o=(n(67294),n(3905));const c={title:"Get the total length of segments in selected sketch using SOLIDWORKS API",caption:"Get Total Length Of Sketch Segments",description:"C# example to calculate total length of all non construction geometry sketch segments in the selected sketch using SOLIDWORKS API",image:"sketch-total-length.png",labels:["sketch","length"]},r=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/get-sketch-segments-total-length/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/get-sketch-segments-total-length/index",title:"Get the total length of segments in selected sketch using SOLIDWORKS API",description:"C# example to calculate total length of all non construction geometry sketch segments in the selected sketch using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/get-sketch-segments-total-length/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/get-sketch-segments-total-length",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/get-sketch-segments-total-length/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/get-sketch-segments-total-length/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/get-sketch-segments-total-length/index.md",tags:[],version:"current",frontMatter:{title:"Get the total length of segments in selected sketch using SOLIDWORKS API",caption:"Get Total Length Of Sketch Segments",description:"C# example to calculate total length of all non construction geometry sketch segments in the selected sketch using SOLIDWORKS API",image:"sketch-total-length.png",labels:["sketch","length"]},sidebar:"tutorialSidebar",previous:{title:"Get selected sketch segments info using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/get-selected-sketch-segments-info/"},next:{title:"VBA Macro to hide all sketches in the model using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/sketch/hide-all-sketches/"}},a={},l=[],g={toc:l},u="wrapper";function p(e){let{components:t,...c}=e;return(0,o.kt)(u,(0,s.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Total length of the selected sketch segments",src:n(23259).Z,width:"668",height:"471"}),"{ width=450 }"),(0,o.kt)("p",null,"This C# example of ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/"},"stand-alone console application")," to calculate the total length of all segments in the selected sketch using SOLIDWORKS API. Construction geometry sketch segments are excluded from the calculation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System;\nusing System.Linq;\n\nnamespace CodeStack\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            var app = Activator.CreateInstance(Type.GetTypeFromProgID("SldWorks.Application")) as ISldWorks;\n            app.Visible = true;\n\n            if (app.IActiveDoc2 != null)\n            {\n                var feat = app.IActiveDoc2.ISelectionManager.GetSelectedObject6(1, -1) as IFeature;\n\n                var sketch = feat?.GetSpecificFeature2() as ISketch;\n\n                if (sketch != null)\n                {\n                    var segs = (sketch.GetSketchSegments() as object[])?.Cast<ISketchSegment>();\n\n                    if (segs != null)\n                    {\n                        var totalLength = segs.Where(s => !s.ConstructionGeometry).Sum(s => s.GetLength());\n\n                        app.SendMsgToUser2($"Total length of segments: {totalLength} meters", (int)swMessageBoxIcon_e.swMbInformation, (int)swMessageBoxBtn_e.swMbOk);\n                    }\n                    else\n                    {\n                        throw new NullReferenceException("No segments in the sketch");\n                    }\n                }\n                else\n                {\n                    throw new NullReferenceException("Select sketch");\n                }\n            }\n            else\n            {\n                throw new NullReferenceException("Open document");\n            }\n        }\n    }\n}\n\n')))}p.isMDXComponent=!0},23259:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/sketch-total-length-764709b06ebf398c0871e544700bbe7b.png"}}]);