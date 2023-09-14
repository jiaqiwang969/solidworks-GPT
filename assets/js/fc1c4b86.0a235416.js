"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[30579],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||s;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const s={title:"Write custom property to file, configuration and cut-list using SOLIDWORKS API",caption:"Write All Properties",description:"VBA macro example to write different types of properties (general, configuration specific and cut list) using SOLIDWORKS API",image:"approved-date-custom-property.png",labels:["set property","add property","write property","date"]},i=void 0,a={unversionedId:"codestack-clone/solidworks-api/data-storage/custom-properties/write-all-properties/index",id:"codestack-clone/solidworks-api/data-storage/custom-properties/write-all-properties/index",title:"Write custom property to file, configuration and cut-list using SOLIDWORKS API",description:"VBA macro example to write different types of properties (general, configuration specific and cut list) using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/data-storage/custom-properties/write-all-properties/index.md",sourceDirName:"codestack-clone/solidworks-api/data-storage/custom-properties/write-all-properties",slug:"/codestack-clone/solidworks-api/data-storage/custom-properties/write-all-properties/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/data-storage/custom-properties/write-all-properties/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/data-storage/custom-properties/write-all-properties/index.md",tags:[],version:"current",frontMatter:{title:"Write custom property to file, configuration and cut-list using SOLIDWORKS API",caption:"Write All Properties",description:"VBA macro example to write different types of properties (general, configuration specific and cut list) using SOLIDWORKS API",image:"approved-date-custom-property.png",labels:["set property","add property","write property","date"]},sidebar:"tutorialSidebar",previous:{title:"Upgrade legacy custom properties to a new architecture",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/data-storage/custom-properties/update-legacy/"},next:{title:"Write summary information to the active file using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/data-storage/custom-properties/write-summary-information/"}},p={},l=[],c={toc:l},d="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(d,(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Date custom property",src:r(26134).Z,width:"1025",height:"592"}),"{ width=550 }"),(0,n.kt)("p",null,"This VBA macro example demonstrates how to add (create new or change existing) custom properties to various custom properties sources using SOLIDWORKS API. This includes file (general) custom properties, configuration specific custom properties and cut-list items (weldment or sheet metal) custom properties."),(0,n.kt)("p",null,"Macro adds the ",(0,n.kt)("em",{parentName:"p"},"ApprovedDate")," custom property of type ",(0,n.kt)("em",{parentName:"p"},"Date")," and sets the value to the current date."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"By some reasons custom property field type is ignored and defaulted to Text when assigned to cut-list item")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Const PRP_NAME As String = "ApprovedDate"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim curDate As Date\n        curDate = Now\n        \n        Dim dateFormat As String\n        dateFormat = Format(curDate, "YYYY-MM-dd")\n        \n        SetGeneralProperty swModel, PRP_NAME, dateFormat, swCustomInfoType_e.swCustomInfoDate\n        SetConfigurationSpecificProperty swModel, PRP_NAME, dateFormat, swCustomInfoType_e.swCustomInfoDate\n        SetCutListProperty swModel, PRP_NAME, dateFormat, swCustomInfoType_e.swCustomInfoDate\n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nSub SetGeneralProperty(model As SldWorks.ModelDoc2, prpName As String, prpVal As String, prpType As swCustomInfoType_e)\n    \n    SetProperty model.Extension.CustomPropertyManager(""), prpName, prpVal, prpType\n    \nEnd Sub\n\nSub SetConfigurationSpecificProperty(model As SldWorks.ModelDoc2, prpName As String, prpVal As String, prpType As swCustomInfoType_e)\n    \n    Dim vNames As Variant\n    vNames = model.GetConfigurationNames()\n    \n    Dim i As Integer\n        \n    For i = 0 To UBound(vNames)\n        \n        Dim confName As String\n        confName = vNames(i)\n        \n        SetProperty model.Extension.CustomPropertyManager(confName), prpName, prpVal, prpType\n        \n    Next\n    \nEnd Sub\n\nSub SetCutListProperty(model As SldWorks.ModelDoc2, prpName As String, prpVal As String, prpType As swCustomInfoType_e)\n\n    Dim vCutLists As Variant\n    vCutLists = GetCutLists(model)\n        \n    If Not IsEmpty(vCutLists) Then\n        Dim i As Integer\n        \n        For i = 0 To UBound(vCutLists)\n            Dim swCutListFeat As SldWorks.Feature\n            Set swCutListFeat = vCutLists(i)\n            SetProperty swCutListFeat.CustomPropertyManager, prpName, prpVal\n        Next\n    End If\n\nEnd Sub\n\nFunction GetCutLists(model As SldWorks.ModelDoc2) As Variant\n    \n    Dim swCutListFeats() As SldWorks.Feature\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim swFeat As SldWorks.Feature\n    Dim swBodyFolder As SldWorks.BodyFolder\n    \n    Set swFeat = model.FirstFeature\n    \n    Do While Not swFeat Is Nothing\n        \n        If swFeat.GetTypeName2 = "CutListFolder" Then\n            \n            If Not isInit Then\n                isInit = True\n                ReDim swCutListFeats(0)\n            Else\n                ReDim Preserve swCutListFeats(UBound(swCutListFeats) + 1)\n            End If\n            \n            Set swCutListFeats(UBound(swCutListFeats)) = swFeat\n            \n        End If\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Loop\n    \n    If isInit Then\n        GetCutLists = swCutListFeats\n    Else\n        GetCutLists = Empty\n    End If\n\nEnd Function\n\nSub SetProperty(custPrpMgr As SldWorks.CustomPropertyManager, prpName As String, prpVal As String, Optional prpType As swCustomInfoType_e = swCustomInfoType_e.swCustomInfoText)\n    \n    Dim res As Long\n    res = custPrpMgr.Add3(prpName, prpType, prpVal, swCustomPropertyAddOption_e.swCustomPropertyReplaceValue)\n    \n    If res <> swCustomInfoAddResult_e.swCustomInfoAddResult_AddedOrChanged Then\n        Err.Raise vbError, "", "Failed to set custom property. Error code: " & res\n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0},26134:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/approved-date-custom-property-10a4c509553367e7833222c07ea3d2bd.png"}}]);