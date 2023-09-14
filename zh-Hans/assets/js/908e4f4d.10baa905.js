"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[31112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(b,i(i({ref:t},l),{},{components:n})):a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:o,i[1]=d;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Concatenate description variable on a data card button click using SOLIDWORKS PDM API",caption:"Concatenate Description Variable",description:"This example demonstrates how to handle the button click on data card and concatenate value of description variable based on values of revision and number variables in PDM add-in using SOLIDWORKS PDM Professional API",image:"button-update-variable.gif",labels:["hook","button click","variables"]},i=void 0,d={unversionedId:"codestack-clone/solidworks-pdm-api/hooks/datacard-button/update-description-addin/index",id:"codestack-clone/solidworks-pdm-api/hooks/datacard-button/update-description-addin/index",title:"Concatenate description variable on a data card button click using SOLIDWORKS PDM API",description:"This example demonstrates how to handle the button click on data card and concatenate value of description variable based on values of revision and number variables in PDM add-in using SOLIDWORKS PDM Professional API",source:"@site/docs/codestack-clone/solidworks-pdm-api/hooks/datacard-button/update-description-addin/index.md",sourceDirName:"codestack-clone/solidworks-pdm-api/hooks/datacard-button/update-description-addin",slug:"/codestack-clone/solidworks-pdm-api/hooks/datacard-button/update-description-addin/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-pdm-api/hooks/datacard-button/update-description-addin/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-pdm-api/hooks/datacard-button/update-description-addin/index.md",tags:[],version:"current",frontMatter:{title:"Concatenate description variable on a data card button click using SOLIDWORKS PDM API",caption:"Concatenate Description Variable",description:"This example demonstrates how to handle the button click on data card and concatenate value of description variable based on values of revision and number variables in PDM add-in using SOLIDWORKS PDM Professional API",image:"button-update-variable.gif",labels:["hook","button click","variables"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS PDM API example for handling the data card button click",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-pdm-api/hooks/datacard-button/"},next:{title:"permisions",permalink:"/solidworks-GPT/zh-Hans/docs/category/permisions"}},s={},c=[],l={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to handle the button click on data card using SOLIDWORKS PDM API and set the value of description variable based on concatenation of values of revision and number variables in PDM add-in."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add button to data card in PDM administration console"),(0,o.kt)("li",{parentName:"ul"},"Set the ",(0,o.kt)("em",{parentName:"li"},"Command type")," option to ",(0,o.kt)("em",{parentName:"li"},"Run Add-in")),(0,o.kt)("li",{parentName:"ul"},"Specify the name of the add-in as shown on the picture below. This option allows to specify the unique tag which can be retrieved by the add-in when button is clicked to properly identify the button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data card setup options",src:n(10893).Z,width:"993",height:"485"}),"{ width=500 }"),(0,o.kt)("p",null,"This option should be equal to the value specified in the ",(0,o.kt)("em",{parentName:"p"},"BUTTON_TAG")," constant in the add-in"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'private const string BUTTON_TAG = "_UpdateDesc_";\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure that the ",(0,o.kt)("em",{parentName:"li"},"Number"),", ",(0,o.kt)("em",{parentName:"li"},"Revision")," and ",(0,o.kt)("em",{parentName:"li"},"Description")," variables are present on the data card or modify the add-in code accordingly:")),(0,o.kt)("p",null,"When button clicked the ",(0,o.kt)("em",{parentName:"p"},"Description")," variable is updated by concatenation of values in ",(0,o.kt)("em",{parentName:"p"},"Number")," and ",(0,o.kt)("em",{parentName:"p"},"Revision")," variables."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Description is updated when button is clicked",src:n(43166).Z,width:"500",height:"299"}),"{ width=450 }"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using EPDM.Interop.epdm;\nusing System;\nusing System.Linq;\nusing System.Runtime.InteropServices;\n\nnamespace PdmCardVariableUpdate\n{\n    [ComVisible(true)]\n    [Guid("9AD5B02B-5027-4751-BBC3-6EF4AE6E3206")]\n    public class ButtonPdmAddIn : IEdmAddIn5\n    {\n        private const string BUTTON_TAG = "_UpdateDesc_";\n\n        public void GetAddInInfo(ref EdmAddInInfo poInfo, IEdmVault5 poVault, IEdmCmdMgr5 poCmdMgr)\n        {\n            poInfo.mbsAddInName = "ButtonPdmAddIn";\n            poInfo.mlAddInVersion = 1;\n            poInfo.mlRequiredVersionMajor = 16;\n\n            poCmdMgr.AddHook(EdmCmdType.EdmCmd_CardButton);\n        }\n\n        public void OnCmd(ref EdmCmd poCmd, ref EdmCmdData[] ppoData)\n        {\n            switch (poCmd.meCmdType)\n            {\n                case EdmCmdType.EdmCmd_CardButton:\n                    var addInTagName = poCmd.mbsComment;\n                    if (addInTagName == BUTTON_TAG)\n                    {\n                        var confName = ppoData.First().mbsStrData1;\n                        var enumVar = poCmd.mpoExtra as IEdmEnumeratorVariable5;\n\n                        object varVal;\n                        enumVar.GetVar("Number", confName, out varVal);\n\n                        var number = varVal?.ToString();\n                        enumVar.GetVar("Revision", confName, out varVal);\n\n                        var revision = varVal?.ToString();\n\n                        var desc = (object)$"{number} ({revision})";\n                        enumVar.SetVar("Description", confName, ref desc);\n                    }\n                    break;\n            }\n        }\n    }\n}\n')))}u.isMDXComponent=!0},43166:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/button-update-variable-d6197ab0fce67599c3d9b0932d0ab80f.gif"},10893:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data-card-button-be6ceb6354573d4cd43c08c4796d73d7.png"}}]);