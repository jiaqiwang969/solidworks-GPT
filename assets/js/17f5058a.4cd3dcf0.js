"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[76692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,w=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?s.createElement(w,i(i({ref:t},p),{},{components:n})):s.createElement(w,i({ref:t},p))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(87462),r=(n(67294),n(3905));const o={caption:"Set Document Units",title:"Macro to set SOLIDWORKS document units (length, angle, mass, volume, time)",description:"VBA macro to set unit system in the SOLIDWORKS document or custom units (length, angle, mass, volume, time)",image:"document-units.png"},i=void 0,a={unversionedId:"codestack/solidworks-api/options/document/set-units/index",id:"codestack/solidworks-api/options/document/set-units/index",title:"Macro to set SOLIDWORKS document units (length, angle, mass, volume, time)",description:"VBA macro to set unit system in the SOLIDWORKS document or custom units (length, angle, mass, volume, time)",source:"@site/docs/codestack/solidworks-api/options/document/set-units/index.md",sourceDirName:"codestack/solidworks-api/options/document/set-units",slug:"/codestack/solidworks-api/options/document/set-units/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/options/document/set-units/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/options/document/set-units/index.md",tags:[],version:"current",frontMatter:{caption:"Set Document Units",title:"Macro to set SOLIDWORKS document units (length, angle, mass, volume, time)",description:"VBA macro to set unit system in the SOLIDWORKS document or custom units (length, angle, mass, volume, time)",image:"document-units.png"},sidebar:"tutorialSidebar",previous:{title:"Setting ShadedImageQualityCoarse in user preferences of the active document using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/options/document/image-quality-coarse/"},next:{title:"deployment",permalink:"/solidworks-GPT/docs/category/deployment"}},c={},l=[],p={toc:l},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,s.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Document Units",src:n(28693).Z,width:"983",height:"849"}),"{ width=600 }"),(0,r.kt)("p",null,"This macro allows to change the units of the active SOLIDWORKS document (part or assembly)."),(0,r.kt)("p",null,"Configure the constants of the macro to specify the target unit system"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const UNIT_SYSTEM As Integer = swUnitSystem_e.swUnitSystem_Custom 'sets the custom units individually as per the constants below\n\nConst CUSTOM_LENGTH_UNIT As Integer = swLengthUnit_e.swMETER\nConst CUSTOM_ANGLE_UNIT As Integer = swAngleUnit_e.swDEGREES\nConst CUSTOM_MASS_UNIT As Integer = swUnitsMassPropMass_e.swUnitsMassPropMass_Pounds\nConst CUSTOM_VOLUME_UNIT As Integer = swUnitsMassPropVolume_e.swUnitsMassPropVolume_Feet3\nConst CUSTOM_TIME_UNIT As Integer = swUnitsTimeUnit_e.swUnitsTimeUnit_Second\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("strong",{parentName:"p"},"UNIT_SYSTEM")," constant is set to ",(0,r.kt)("strong",{parentName:"p"},"swUnitSystem_e.swUnitSystem_Custom")," then it is required to provide the individual units for each custom type by changing the ",(0,r.kt)("strong",{parentName:"p"},"CUSTOM_???")," constants."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const UNIT_SYSTEM As Integer = swUnitSystem_e.swUnitSystem_IPS\n\nConst CUSTOM_LENGTH_UNIT As Integer = swLengthUnit_e.swINCHES\nConst CUSTOM_ANGLE_UNIT As Integer = swAngleUnit_e.swRADIANS\nConst CUSTOM_MASS_UNIT As Integer = swUnitsMassPropMass_e.swUnitsMassPropMass_Kilograms\nConst CUSTOM_VOLUME_UNIT As Integer = swUnitsMassPropVolume_e.swUnitsMassPropVolume_Meters3\nConst CUSTOM_TIME_UNIT As Integer = swUnitsTimeUnit_e.swUnitsTimeUnit_Minute\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n        \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n\n    If Not swModel Is Nothing Then\n                \n        swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitSystem, swUserPreferenceOption_e.swDetailingNoOptionSpecified, UNIT_SYSTEM\n                \n        If UNIT_SYSTEM = swUnitSystem_e.swUnitSystem_Custom Then\n        \n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsLinear, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_LENGTH_UNIT\n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsDualLinear, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_LENGTH_UNIT\n            \n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsAngular, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_ANGLE_UNIT\n            \n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsMassPropLength, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_LENGTH_UNIT\n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsMassPropMass, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_MASS_UNIT\n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsMassPropVolume, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_VOLUME_UNIT\n            \n            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsTimeUnits, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_TIME_UNIT\n            \n        End If\n                \n    Else\n        Err.Raise vbError, "", "Model is not opened"\n    End If\n        \nEnd Sub\n')))}m.isMDXComponent=!0},28693:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/document-units-088c18144df13d2c1c5a7172737ac217.png"}}]);