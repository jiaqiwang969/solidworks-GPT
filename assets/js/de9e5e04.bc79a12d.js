"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[89629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>D});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),c=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(m.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,D=u["".concat(m,".").concat(d)]||u[d]||l[d]||s;return n?o.createElement(D,a(a({ref:t},p),{},{components:n})):o.createElement(D,a({ref:t},p))}));function D(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const s={title:"Write custom properties to all sources using Document Manager API",caption:"Write All Properties",description:"VBA macro to write custom properties to all sources (file, configuration, cut-list items) using Document Manager API",image:"added-custom-property.png",labels:["write properties"]},a=void 0,i={unversionedId:"codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties/index",id:"codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties/index",title:"Write custom properties to all sources using Document Manager API",description:"VBA macro to write custom properties to all sources (file, configuration, cut-list items) using Document Manager API",source:"@site/docs/codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties/index.md",sourceDirName:"codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties",slug:"/codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties/index.md",tags:[],version:"current",frontMatter:{title:"Write custom properties to all sources using Document Manager API",caption:"Write All Properties",description:"VBA macro to write custom properties to all sources (file, configuration, cut-list items) using Document Manager API",image:"added-custom-property.png",labels:["write properties"]},sidebar:"tutorialSidebar",previous:{title:"Read All Custom Properties using SOLIDWORKS Document Manager API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-document-manager-api/document/data-storage/custom-properties/read-all-properties/"},next:{title:"Saving the data into 3rd party storage using SOLIDWORKS Document Manager API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-document-manager-api/document/data-storage/third-party/"}},m={},c=[],p={toc:c},u="wrapper";function l(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom property added to the file",src:n(52133).Z,width:"1006",height:"687"}),"{ width=450 }"),(0,r.kt)("p",null,"This VBA example demonstrates how to add the ",(0,r.kt)("em",{parentName:"p"},"ApprovedBy")," property with the value of the name of current user to all sources using Document Manager API. Property will be added (or updated) for the file (general), all configurations and all cut-list items."),(0,r.kt)("p",null,"Specify the full path of the file in the ",(0,r.kt)("em",{parentName:"p"},"FILE_PATH")," constant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const SW_DM_KEY As String = "Your License Key"\n\nConst FILE_PATH As String = "C:\\SampleModel.SLDPRT"\nConst PRP_NAME As String = "ApprovedBy"\n\nDim swDmClassFactory As SwDocumentMgr.swDmClassFactory\nDim swDmApp As SwDocumentMgr.SwDMApplication\n\nSub main()\n\n    Set swDmClassFactory = CreateObject("SwDocumentMgr.SwDMClassFactory")\n    \n    If Not swDmClassFactory Is Nothing Then\n        \n        Set swDmApp = swDmClassFactory.GetApplication(SW_DM_KEY)\n        Dim swDmDoc As SwDocumentMgr.SwDMDocument19\n        Set swDmDoc = OpenDocument(FILE_PATH, False)\n        \n        Dim curUser As String\n        curUser = Environ("UserName")\n        \n        SetGeneralProperty swDmDoc, PRP_NAME, curUser, SwDmCustomInfoType.swDmCustomInfoText\n        SetConfigurationSpecificProperty swDmDoc, PRP_NAME, curUser, SwDmCustomInfoType.swDmCustomInfoText\n        SetCutListProperty swDmDoc, PRP_NAME, curUser, SwDmCustomInfoType.swDmCustomInfoText\n        \n        swDmDoc.Save\n        swDmDoc.CloseDoc\n        \n    Else\n        MsgBox "Document Manager SDK is not installed"\n    End If\n    \nEnd Sub\n\nSub SetGeneralProperty(dmDoc As SwDocumentMgr.SwDMDocument19, prpName As String, prpVal As String, prpType As SwDmCustomInfoType)\n    dmDoc.AddCustomProperty prpName, prpType, prpVal\n    dmDoc.SetCustomProperty prpName, prpVal\nEnd Sub\n\nSub SetConfigurationSpecificProperty(dmDoc As SwDocumentMgr.SwDMDocument19, prpName As String, prpVal As String, prpType As SwDmCustomInfoType)\n    \n    Dim vConfNames As Variant\n    vConfNames = dmDoc.ConfigurationManager.GetConfigurationNames()\n    \n    Dim i As Integer\n        \n    For i = 0 To UBound(vConfNames)\n        \n        Dim confName As String\n        confName = vConfNames(i)\n        \n        Dim swDmConf As SwDocumentMgr.SwDMConfiguration13\n        Set swDmConf = dmDoc.ConfigurationManager.GetConfigurationByName(confName)\n        \n        swDmConf.AddCustomProperty prpName, prpType, prpVal\n        swDmConf.SetCustomProperty prpName, prpVal\n        \n    Next\n    \nEnd Sub\n\nSub SetCutListProperty(dmDoc As SwDocumentMgr.SwDMDocument19, prpName As String, prpVal As String, prpType As SwDmCustomInfoType)\n    \n    Dim vConfNames As Variant\n    vConfNames = dmDoc.ConfigurationManager.GetConfigurationNames()\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vConfNames)\n        \n        Dim confName As String\n        confName = vConfNames(i)\n        \n        Dim swDmConf As SwDocumentMgr.SwDMConfiguration16\n        Set swDmConf = dmDoc.ConfigurationManager.GetConfigurationByName(confName)\n        \n        Dim vCutListItems As Variant\n        vCutListItems = swDmConf.GetCutListItems\n                \n        If Not IsEmpty(vCutListItems) Then\n            \n            Dim j As Integer\n            \n            For j = 0 To UBound(vCutListItems)\n                \n                Dim swDmCutList As SwDocumentMgr.SwDMCutListItem3\n                Set swDmCutList = vCutListItems(j)\n                \n                swDmCutList.AddCustomProperty prpName, prpType, prpVal\n                swDmCutList.SetCustomProperty prpName, prpVal\n                \n            Next\n        \n        End If\n        \n    Next\n    \nEnd Sub\n\nFunction OpenDocument(filePath As String, readOnly As Boolean) As SwDocumentMgr.SwDMDocument19\n    \n    Dim openErr As SwDmDocumentOpenError\n    \n    Dim docType As SwDocumentMgr.SwDmDocumentType\n    \n    Dim ext As String\n    ext = LCase(Right(filePath, Len(".SLDXXX")))\n    \n    Select Case ext\n        Case ".sldprt"\n            docType = swDmDocumentPart\n        Case ".sldasm"\n            docType = swDmDocumentAssembly\n        Case ".slddrw"\n            docType = swDmDocumentDrawing\n    End Select\n    \n    Dim swDmDoc As SwDocumentMgr.SwDMDocument19\n    \n    Set swDmDoc = swDmApp.GetDocument(filePath, docType, readOnly, openErr)\n    \n    If swDmDoc Is Nothing Then\n        Err.Raise vbError, "", "Failed to open document: " & openErr\n    End If\n    \n    Set OpenDocument = swDmDoc\n    \nEnd Function\n')))}l.isMDXComponent=!0},52133:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/added-custom-property-612161da20c0d34ddff3982a9f16495a.png"}}]);