"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[96842],{3905:(e,n,i)=>{i.d(n,{Zo:()=>m,kt:()=>w});var o=i(67294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,o,t=function(e,n){if(null==e)return{};var i,o,t={},s=Object.keys(e);for(o=0;o<s.length;o++)i=s[o],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)i=s[o],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var l=o.createContext({}),c=function(e){var n=o.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},m=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var i=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=c(i),p=t,w=d["".concat(l,".").concat(p)]||d[p]||u[p]||s;return i?o.createElement(w,r(r({ref:n},m),{},{components:i})):o.createElement(w,r({ref:n},m))}));function w(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=i.length,r=new Array(s);r[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:t,r[1]=a;for(var c=2;c<s;c++)r[c]=i[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}p.displayName="MDXCreateElement"},84900:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=i(87462),t=(i(67294),i(3905));const s={layout:"sw-tool",title:"SOLIDWORKS macro to create configuration with average dimension values",caption:"Create Configuration With Average Dimension Values",description:"Macro will create child configuration where all the dimension will be set to average value based on the minimum and maximum values of the tolerance",image:"sw-dimension-tolerance.png",labels:["average","configuration","dimension","solidworks api","tolerance","utility"],group:"Model","redirect-from":["/2018/03/solidworks-api-dimensions-average-dims.html"]},r=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/create-average-dimension-values-configuration/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/create-average-dimension-values-configuration/index",title:"SOLIDWORKS macro to create configuration with average dimension values",description:"Macro will create child configuration where all the dimension will be set to average value based on the minimum and maximum values of the tolerance",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/create-average-dimension-values-configuration/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/create-average-dimension-values-configuration",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/create-average-dimension-values-configuration/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/create-average-dimension-values-configuration/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/create-average-dimension-values-configuration/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"SOLIDWORKS macro to create configuration with average dimension values",caption:"Create Configuration With Average Dimension Values",description:"Macro will create child configuration where all the dimension will be set to average value based on the minimum and maximum values of the tolerance",image:"sw-dimension-tolerance.png",labels:["average","configuration","dimension","solidworks api","tolerance","utility"],group:"Model","redirect-from":["/2018/03/solidworks-api-dimensions-average-dims.html"]},sidebar:"tutorialSidebar",previous:{title:"Add smart dimension between two segments using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/add-smart-dimension-between-two-segments/"},next:{title:"Find-replace text in dimension names using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/dimensions/names-find-replace-text/"}},l={},c=[],m={toc:c},d="wrapper";function u(e){let{components:n,...s}=e;return(0,t.kt)(d,(0,o.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This macro will create child configuration where all the dimension will be set to average value based on the minimum and maximum values of the tolerance using SOLIDWORKS API."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Dimension Tolerance/Precision group in property manager page",src:i(16392).Z,width:"400",height:"223"}),"{ width=400 }"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swFeat As SldWorks.Feature\n        \n        Dim activeConfName As String\n        activeConfName = swModel.ConfigurationManager.ActiveConfiguration.Name\n        \n        swModel.ConfigurationManager.AddConfiguration "Average", "", "", 0, activeConfName, ""\n        \n        Set swFeat = swModel.FirstFeature\n        \n        While Not swFeat Is Nothing\n        \n            Dim swDispDim As SldWorks.DisplayDimension\n            Dim swDim As SldWorks.Dimension\n            Dim swDimTol As SldWorks.DimensionTolerance\n        \n            Set swDispDim = swFeat.GetFirstDisplayDimension\n            \n            While Not swDispDim Is Nothing\n            \n                Set swDim = swDispDim.GetDimension2(0)\n                Set swDimTol = swDim.Tolerance\n                \n                If swDimTol.Type <> swTolType_e.swTolNONE Then\n                    \n                    Dim averageVal As Double\n                    \n                    averageVal = swDim.GetSystemValue3(swInConfigurationOpts_e.swThisConfiguration, "")(0) + (swDimTol.GetMinValue + swDimTol.GetMaxValue) / 2\n                    \n                    swDimTol.Type = swTolType_e.swTolNONE\n                    \n                    swDim.SetSystemValue3 averageVal, swInConfigurationOpts_e.swThisConfiguration, ""\n                    \n                End If\n                        \n                Set swDispDim = swFeat.GetNextDisplayDimension(swDispDim)\n                \n            Wend\n            \n            Set swFeat = swFeat.GetNextFeature\n            \n        Wend\n        \n        swModel.EditRebuild3\n    \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\n\n')))}u.isMDXComponent=!0},16392:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/sw-dimension-tolerance-19007c76555e1ce774b3f12b2659635d.png"}}]);