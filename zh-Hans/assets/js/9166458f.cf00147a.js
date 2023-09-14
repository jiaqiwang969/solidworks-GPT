"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[44273],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),l=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(a.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return t?o.createElement(f,s(s({ref:n},u),{},{components:t})):o.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const i={title:"Convert meters to fraction inches using SOLIDWORKS API",caption:"Convert Meters To Fraction Inches",description:"VBA macro to convert value in system units (meters) to the fraction inches using SOLIDWORKS API",image:"dimension-fractions.png",labels:["inches","fraction","conversion","unit"]},s=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches/index",title:"Convert meters to fraction inches using SOLIDWORKS API",description:"VBA macro to convert value in system units (meters) to the fraction inches using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-to-fraction-inches/index.md",tags:[],version:"current",frontMatter:{title:"Convert meters to fraction inches using SOLIDWORKS API",caption:"Convert Meters To Fraction Inches",description:"VBA macro to convert value in system units (meters) to the fraction inches using SOLIDWORKS API",image:"dimension-fractions.png",labels:["inches","fraction","conversion","unit"]},sidebar:"tutorialSidebar",previous:{title:"Convert arc to circle by merging end points using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/convert-arc-to-circle/"},next:{title:"Macro to copy SOLIDWORKS custom properties from cut-list to model",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/copy-custom-properties/"}},a={},l=[],u={toc:l},p="wrapper";function d(e){let{components:n,...i}=e;return(0,r.kt)(p,(0,o.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA macro converts the value specified in system units (meters) into the fraction inches with specified denominator."),(0,r.kt)("p",null,'For example the value of 0.112713 with denominator 16 would be converted to 4 7/16"'),(0,r.kt)("p",null,"Configure the parameters as per the settings below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const DENOMINATOR As Integer = 16 'denominator value\nConst ROUND_TO_NEAREST_FRACTION As Boolean = True 'True to round to nearest fraction, False to not\n")),(0,r.kt)("p",null,"The result and available options are equal to the dimension property manager page in SOLIDWORKS"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Override units option in the Dimension proeprty manager page",src:t(7694).Z,width:"943",height:"468"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const DENOMINATOR As Integer = 16\nConst ROUND_TO_NEAREST_FRACTION As Boolean = True\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Debug.Print ConvertMetersToFractionInches(0.112713, DENOMINATOR, ROUND_TO_NEAREST_FRACTION)\n    \nEnd Sub\n\nFunction ConvertMetersToFractionInches(value As Double, denom As Integer, round As Boolean) As String\n    \n    Dim swUserUnits As SldWorks.UserUnit\n    Set swUserUnits = swApp.GetUserUnit(swUserUnitsType_e.swLengthUnit)\n    \n    swUserUnits.FractionBase = swFractionDisplay_e.swFRACTION\n    swUserUnits.SpecificUnitType = swLengthUnit_e.swINCHES\n    \n    swUserUnits.RoundToFraction = round\n    swUserUnits.FractionValue = denom\n\n    ConvertMetersToFractionInches = swUserUnits.ConvertToUserUnit(value, True, True)\n    \nEnd Function\n")))}d.isMDXComponent=!0},7694:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/dimension-fractions-be02105fa1aa14ff1ce2d8b85f09e21a.png"}}]);