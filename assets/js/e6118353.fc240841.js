"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[55954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const s={layout:"sw-tool",title:"Setting ShadedImageQualityCoarse in user preferences of the active document using SOLIDWORKS API",caption:"Set Shaded Image quality to coarse",description:'SolidWorks VBA Macro to set the Shaded Image quality to coarse in Part and Assembly files. Also the checkmark "Apply to all referenced part documents" is set to ON if the active document is an assembly.',image:"coarse-icon.svg",labels:["document","preferences","options","imagequality","batch+"],group:"Options"},r=void 0,i={unversionedId:"codestack-clone/solidworks-api/options/document/image-quality-coarse/index",id:"codestack-clone/solidworks-api/options/document/image-quality-coarse/index",title:"Setting ShadedImageQualityCoarse in user preferences of the active document using SOLIDWORKS API",description:'SolidWorks VBA Macro to set the Shaded Image quality to coarse in Part and Assembly files. Also the checkmark "Apply to all referenced part documents" is set to ON if the active document is an assembly.',source:"@site/docs/codestack-clone/solidworks-api/options/document/image-quality-coarse/index.md",sourceDirName:"codestack-clone/solidworks-api/options/document/image-quality-coarse",slug:"/codestack-clone/solidworks-api/options/document/image-quality-coarse/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/options/document/image-quality-coarse/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/options/document/image-quality-coarse/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Setting ShadedImageQualityCoarse in user preferences of the active document using SOLIDWORKS API",caption:"Set Shaded Image quality to coarse",description:'SolidWorks VBA Macro to set the Shaded Image quality to coarse in Part and Assembly files. Also the checkmark "Apply to all referenced part documents" is set to ON if the active document is an assembly.',image:"coarse-icon.svg",labels:["document","preferences","options","imagequality","batch+"],group:"Options"},sidebar:"tutorialSidebar",previous:{title:"Export all SOLIDWORKS document level options to Excel",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/options/document/extract-all-options/"},next:{title:"Macro to set SOLIDWORKS document units (length, angle, mass, volume, time)",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/options/document/set-units/"}},l={},c=[{value:"Shaded and draft quality HLR/HLV resolution",id:"shaded-and-draft-quality-hlrhlv-resolution",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...s}=e;return(0,a.kt)(u,(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Author: ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/eddyalleman/"},"Eddy Alleman")," "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shaded Image Quality Settings set to Coarse",src:n(43362).Z,width:"616",height:"465"}),"{ width=650 }"),(0,a.kt)("p",null,"When working in large assemblies, there are document options you can set when you want your files to be saved as light as possible:"),(0,a.kt)("h2",{id:"shaded-and-draft-quality-hlrhlv-resolution"},"Shaded and draft quality HLR/HLV resolution"),(0,a.kt)("p",null,"Controls the tessellation of curved surfaces for shaded rendering output. A higher resolution setting results in slower model rebuilding but more accurate curves.\nLow (faster) - High (slower)  "),(0,a.kt)("p",null,"This means that if you are working in an assembly, you can set all the referenced files to Low ImageQuality manually."),(0,a.kt)("p",null,"But in case you have a lot of files and need to work in large assemblies a macro can help and make the files lighter before opening the root assembly."),(0,a.kt)("p",null,"This macro sets both options (1) and (2) as shown in the above image. Option (2) is not available for parts."),(0,a.kt)("p",null,"The real power begins if you use this macro with Batch+. You can let it run when you're not working on your assembly."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example settings to let Batch+ run in the background and also handle the saving of the files",src:n(29837).Z,width:"1105",height:"95"}),"{ width=800 }"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Option Explicit\n\n\' An assembly or a part file must be the active document.\n\n\' the document options are set to use coarse quality\n\' and the checkmark "Apply to all referenced part documents" is set to ON if the active document is an assembly\n\nDim swxApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\n\nSub main()\n\ntry_:\n\n    On Error GoTo catch_\n\n    Set swxApp = Application.SldWorks\n    \n    Set swModel = swxApp.ActiveDoc\n\n    \'Check if active document is a Part or an Assembly file\n    Select Case True\n    \n           Case swModel Is Nothing, (swModel.GetType <> swDocASSEMBLY And swModel.GetType <> swDocPART)\n              Call swxApp.SendMsgToUser2("Please open an assembly or part file", swMbInformation, swMbOk)\n                           \n           Case Else\n               Call SetCoarseQuality\n               \n    End Select\n\n    GoTo finally_:\n    \ncatch_:\n\n        Debug.Print "Error: " & Err.Number & ":" & Err.Source & ":" & Err.Description\n    \nfinally_:\n    \nEnd Sub\n\nPrivate Function SetCoarseQuality() As Boolean\n                  \n    \'set to use coarse quality\n    Dim boolstatus As Boolean\n    boolstatus = swModel.Extension.SetUserPreferenceInteger(swUserPreferenceIntegerValue_e.swImageQualityShaded, _\n                                                              swUserPreferenceOption_e.swDetailingNoOptionSpecified, _\n                                                              swImageQualityShaded_e.swShadedImageQualityCoarse)\n        \n    \'option "Apply to all referenced part documents" is set to ON\n    If swModel.GetType = swDocASSEMBLY Then\n      \n       Dim res As Boolean\n       res = swModel.Extension.SetUserPreferenceToggle(swImageQualityApplyToAllReferencedPartDoc, _\n                                                         swDetailingNoOptionSpecified, True)\n        \n    End If\n           \nEnd Function\n')))}p.isMDXComponent=!0},43362:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Image-Quality-Coarse-3bc7000e2b6699117aeec5344a5a970e.png"},29837:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/batch-plus-settings-6fcedf4a724d56a1b3ef2168d74f2d29.png"}}]);