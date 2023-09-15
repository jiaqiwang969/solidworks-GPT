"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[7578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>w});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=s.createContext({}),u=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return s.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,w=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return n?s.createElement(w,i(i({ref:t},l),{},{components:n})):s.createElement(w,i({ref:t},l))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<r;u++)i[u]=n[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var s=n(87462),o=(n(67294),n(3905));const r={caption:"Set Document Units",title:"Macro to set SOLIDWORKS document units (length, angle, mass, volume, time)",description:"VBA macro to set unit system in the SOLIDWORKS document or custom units (length, angle, mass, volume, time)",image:"document-units.png"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/document/set-units/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/document/set-units/index",title:"Macro to set SOLIDWORKS document units (length, angle, mass, volume, time)",description:"VBA macro to set unit system in the SOLIDWORKS document or custom units (length, angle, mass, volume, time)",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/document/set-units/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/document/set-units",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/document/set-units/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/document/set-units/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/document/set-units/index.md",tags:[],version:"current",frontMatter:{caption:"Set Document Units",title:"Macro to set SOLIDWORKS document units (length, angle, mass, volume, time)",description:"VBA macro to set unit system in the SOLIDWORKS document or custom units (length, angle, mass, volume, time)",image:"document-units.png"},sidebar:"tutorialSidebar",previous:{title:"Setting ShadedImageQualityCoarse in user preferences of the active document using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/options/document/image-quality-coarse/"},next:{title:"Tables (BOM, General, Revision etc.) automation using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/tables/"}},c={},u=[],l={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Document Units",src:n(14617).Z,width:"983",height:"849"}),"{ width=600 }"),(0,o.kt)("p",null,"This macro allows to change the units of the active SOLIDWORKS document (part or assembly)."),(0,o.kt)("p",null,"Configure the constants of the macro to specify the target unit system"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Const UNIT_SYSTEM As Integer = swUnitSystem_e.swUnitSystem_Custom 'sets the custom units individually as per the constants below\n\nConst CUSTOM_LENGTH_UNIT As Integer = swLengthUnit_e.swMETER\nConst CUSTOM_ANGLE_UNIT As Integer = swAngleUnit_e.swDEGREES\nConst CUSTOM_MASS_UNIT As Integer = swUnitsMassPropMass_e.swUnitsMassPropMass_Pounds\nConst CUSTOM_VOLUME_UNIT As Integer = swUnitsMassPropVolume_e.swUnitsMassPropVolume_Feet3\nConst CUSTOM_TIME_UNIT As Integer = swUnitsTimeUnit_e.swUnitsTimeUnit_Second\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("strong",{parentName:"p"},"UNIT_SYSTEM")," constant is set to ",(0,o.kt)("strong",{parentName:"p"},"swUnitSystem_e.swUnitSystem_Custom")," then it is required to provide the individual units for each custom type by changing the ",(0,o.kt)("strong",{parentName:"p"},"CUSTOM_???")," constants."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const UNIT_SYSTEM As Integer = swUnitSystem_e.swUnitSystem_IPS\n\nConst CUSTOM_LENGTH_UNIT As Integer = swLengthUnit_e.swINCHES\nConst CUSTOM_ANGLE_UNIT As Integer = swAngleUnit_e.swRADIANS\nConst CUSTOM_MASS_UNIT As Integer = swUnitsMassPropMass_e.swUnitsMassPropMass_Kilograms\nConst CUSTOM_VOLUME_UNIT As Integer = swUnitsMassPropVolume_e.swUnitsMassPropVolume_Meters3\nConst CUSTOM_TIME_UNIT As Integer = swUnitsTimeUnit_e.swUnitsTimeUnit_Minute\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n        \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n\n    If Not swModel Is Nothing Then\n                \n        swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitSystem, swUserPreferenceOption_e.swDetailingNoOptionSpecified, UNIT_SYSTEM\n                \n        If UNIT_SYSTEM = swUnitSystem_e.swUnitSystem_Custom Then\n        \n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsLinear, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_LENGTH_UNIT\n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsDualLinear, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_LENGTH_UNIT\n            \n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsAngular, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_ANGLE_UNIT\n            \n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsMassPropLength, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_LENGTH_UNIT\n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsMassPropMass, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_MASS_UNIT\n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsMassPropVolume, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_VOLUME_UNIT\n            \n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsTimeUnits, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_TIME_UNIT\n            \n        End If\n                \n    Else\n        Err.Raise vbError, "", "Model is not opened"\n    End If\n        \nEnd Sub\n')))}m.isMDXComponent=!0},14617:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/document-units-088c18144df13d2c1c5a7172737ac217.png"}}]);