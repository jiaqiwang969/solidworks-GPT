"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||n;return r?a.createElement(g,s(s({ref:t},l),{},{components:r})):a.createElement(g,s({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14328:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(87462),o=(r(67294),r(3905));const n={title:"Passing the parameters to SOLIDWORKS Macro using the SWBasic macro",caption:"Via SWBasic Macro",description:"Workaround of passing the parameters to the SOLIDWORKS macro via replacing the text in the SWBasic macro",labels:["argument","swb"]},s=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pass-parameters-to-vba-macro/via-swb-macro/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pass-parameters-to-vba-macro/via-swb-macro/index",title:"Passing the parameters to SOLIDWORKS Macro using the SWBasic macro",description:"Workaround of passing the parameters to the SOLIDWORKS macro via replacing the text in the SWBasic macro",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pass-parameters-to-vba-macro/via-swb-macro/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pass-parameters-to-vba-macro/via-swb-macro",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pass-parameters-to-vba-macro/via-swb-macro/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pass-parameters-to-vba-macro/via-swb-macro/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pass-parameters-to-vba-macro/via-swb-macro/index.md",tags:[],version:"current",frontMatter:{title:"Passing the parameters to SOLIDWORKS Macro using the SWBasic macro",caption:"Via SWBasic Macro",description:"Workaround of passing the parameters to the SOLIDWORKS macro via replacing the text in the SWBasic macro",labels:["argument","swb"]},sidebar:"tutorialSidebar",previous:{title:"Passing the parameters to SOLIDWORKS VBA Macro via clipboard",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pass-parameters-to-vba-macro/via-clipboard/"},next:{title:"SOLIDWORKS macro to change configuration specific properties for component in pattern",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/pattern-seed-configuration-properties/"}},c={},p=[],l={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/macros/types#swbasic-macros.swb"},"SWBasic (*.swb) macros")," is a legacy type of macros still supported in SOLIDWORKS applications."),(0,o.kt)("p",null,"One of the benefits of this type of macro is that it is saved in the plain text. This enables 3rd party application to create macros on the fly. In particular this technique can be employed to emulate the passing of parameters to the SOLIDWORKS macro."),(0,o.kt)("p",null,"For example, the following template macro can be created"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"template.swb")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n        \n    Set swApp = Application.SldWorks\n        \n     swApp.SendMsgToUser "Specified argument: {{Argument1}}"\n    \nEnd Sub\n')),(0,o.kt)("p",null,"where ",(0,o.kt)("em",{parentName:"p"},"{{Argument1}}")," is a placeholder to the argument value to be filled by external application or script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"jagged-bottom","jagged-bottom":!0},'static void Main(string[] args)\n{\n    var macroPath = args[0];\n    var param = args[1];\n    \n    var templateMacro = File.ReadAllText(macroPath);\n    var macro = templateMacro.Replace("{{Argument1}}", param);\n\n    var tempMacroPath = Path.Combine(Path.GetTempPath(), Path.GetFileName(macroPath));\n    File.WriteAllText(tempMacroPath, macro);\n')),(0,o.kt)("p",null,"The resulting file can be run as a normal ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/application/frame/run-macros-group/"},"SOLIDWORKS macro")))}u.isMDXComponent=!0}}]);