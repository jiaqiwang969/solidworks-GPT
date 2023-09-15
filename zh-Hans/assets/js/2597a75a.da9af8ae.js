"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[62375],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>m});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=t.createContext({}),l=function(e){var n=t.useContext(a),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},d=function(e){var n=l(e.components);return t.createElement(a.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(o),f=r,m=u["".concat(a,".").concat(f)]||u[f]||p[f]||i;return o?t.createElement(m,s(s({ref:n},d),{},{components:o})):t.createElement(m,s({ref:n},d))}));function m(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=f;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[u]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=o[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},75669:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=o(87462),r=(o(67294),o(3905));const i={},s=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/invoke-add-in-functions/via-rot/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/invoke-add-in-functions/via-rot/index",title:"index",description:'Console.WriteLine($"Selected body contains:  face(s)");',source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/invoke-add-in-functions/via-rot/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/invoke-add-in-functions/via-rot",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/invoke-add-in-functions/via-rot/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/invoke-add-in-functions/via-rot/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/invoke-add-in-functions/via-rot/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"In-process Calling of SOLIDWORKS Add-in API from External Process Application",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/invoke-add-in-functions/in-process-invoking/"},next:{title:"\u5728 JavaScript \u4e2d\u4f7f\u7528 SOLIDWORKS API \u65b9\u6cd5",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/java-script/"}},a={},l=[],d={toc:l},u="wrapper";function p(e){let{components:n,...o}=e;return(0,r.kt)(u,(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Console.WriteLine($"Selected body contains: {count} face(s)");\n}\ncatch (Exception ex)\n{\nConsole.WriteLine(ex.Message);\n}\n}\ncatch (Exception ex)\n{\nConsole.WriteLine("Invalid arguments");\n}\n}\n}\n}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n```csharp\nusing System;\nusing SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\n\nnamespace CodeStack\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            try\n            {\n                SldWorks swApp = Activator.CreateInstance(Type.GetTypeFromProgID("SldWorks.Application")) as SldWorks;\n                ModelDoc2 model = swApp.ActiveDoc as ModelDoc2;\n\n                if (model == null)\n                {\n                    Console.WriteLine("No active document");\n                    return;\n                }\n\n                SelectionMgr selMgr = model.SelectionManager;\n                int count = 0;\n                double minArea = 100;\n\n                foreach (Face2 face in selMgr.GetSelectedObject6(1, -1))\n                {\n                    if (face.GetArea() >= minArea)\n                    {\n                        count++;\n                    }\n                }\n\n                Console.WriteLine($"Selected body contains {count} faces of area more or equal to {minArea}");\n            }\n            catch (Exception ex)\n            {\n                Console.ForegroundColor = ConsoleColor.Red;\n                Console.Write(ex.Message);\n                Console.ResetColor();\n            }\n        }\n    }\n}\n```\n\n\u65e0\u6cd5\u4ece\u8fd0\u884c\u5bf9\u8c61\u8868\uff08ROT\uff09\u4e2d\u68c0\u7d22\u5bf9\u8c61\uff08\u5373\u8fd4\u56denull\uff09\u7684\u6700\u5e38\u89c1\u539f\u56e0\u662f\u8fd0\u884cSOLIDWORKS\u548c\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u7684\u5e10\u6237\u7ea7\u522b\u4e4b\u95f4\u7684\u5dee\u5f02\u3002\u4f8b\u5982\uff0cSOLIDWORKS\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884c\uff0c\u800c\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\u6ca1\u6709\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002\u8fd9\u662fWindows\u7684\u9650\u5236\uff0c\u9700\u8981\u4ee5\u76f8\u540c\u7684\u6743\u9650\u7ea7\u522b\u8fd0\u884c\u4e24\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4ee5\u542f\u7528\u901a\u4fe1\u3002\n\n\u5728[GitHub](https://github.com/codestackdev/solidworks-api-examples/tree/master/swex/add-in/geometry-helper-api-rot)\u4e0a\u4e0b\u8f7d\u6e90\u4ee3\u7801\u3002\n')))}p.isMDXComponent=!0}}]);