"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[19714],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>D});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),p=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),l=o,D=u["".concat(m,".").concat(l)]||u[l]||d[l]||s;return t?r.createElement(D,a(a({ref:n},c),{},{components:t})):r.createElement(D,a({ref:n},c))}));function D(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=l;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},65369:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const s={title:"\u4f7f\u7528\u6587\u6863\u7ba1\u7406\u5668 API \u5c06\u81ea\u5b9a\u4e49\u5c5e\u6027\u5199\u5165\u6240\u6709\u6765\u6e90",caption:"\u5199\u5165\u6240\u6709\u5c5e\u6027"},a=void 0,i={unversionedId:"codestack/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties/index",id:"codestack/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties/index",title:"\u4f7f\u7528\u6587\u6863\u7ba1\u7406\u5668 API \u5c06\u81ea\u5b9a\u4e49\u5c5e\u6027\u5199\u5165\u6240\u6709\u6765\u6e90",description:"\u4f7f\u7528\u6587\u6863\u7ba1\u7406\u5668 API \u5c06\u81ea\u5b9a\u4e49\u5c5e\u6027\u5199\u5165\u6240\u6709\u6765\u6e90\uff08\u6587\u4ef6\u3001\u914d\u7f6e\u3001\u5207\u5272\u5217\u8868\u9879\uff09\u7684 VBA \u5b8f\u793a\u4f8b",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties/index.md",sourceDirName:"codestack/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties",slug:"/codestack/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-document-manager-api/document/data-storage/custom-properties/write-all-properties/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528\u6587\u6863\u7ba1\u7406\u5668 API \u5c06\u81ea\u5b9a\u4e49\u5c5e\u6027\u5199\u5165\u6240\u6709\u6765\u6e90",caption:"\u5199\u5165\u6240\u6709\u5c5e\u6027"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS\u6587\u6863\u7ba1\u7406\u5668API\u8bfb\u53d6\u6240\u6709\u81ea\u5b9a\u4e49\u5c5e\u6027",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/data-storage/custom-properties/read-all-properties/"},next:{title:"\u4f7f\u7528SOLIDWORKS Document Manager API\u5c06\u6570\u636e\u4fdd\u5b58\u5230\u7b2c\u4e09\u65b9\u5b58\u50a8",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-document-manager-api/document/data-storage/third-party/"}},m={},p=[{value:"labels: \u5199\u5165\u5c5e\u6027",id:"labels-\u5199\u5165\u5c5e\u6027",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...s}=e;return(0,o.kt)(u,(0,r.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f7f\u7528\u6587\u6863\u7ba1\u7406\u5668 API \u5c06\u81ea\u5b9a\u4e49\u5c5e\u6027\u5199\u5165\u6240\u6709\u6765\u6e90\uff08\u6587\u4ef6\u3001\u914d\u7f6e\u3001\u5207\u5272\u5217\u8868\u9879\uff09\u7684 VBA \u5b8f\u793a\u4f8b\nimage: added-custom-property.png"),(0,o.kt)("h2",{id:"labels-\u5199\u5165\u5c5e\u6027"},"labels: ","[\u5199\u5165\u5c5e\u6027]"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom property added to the file",src:t(21856).Z,width:"1006",height:"687"}),"{ width=450 }"),(0,o.kt)("p",null,"\u6b64 VBA \u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528\u6587\u6863\u7ba1\u7406\u5668 API \u5c06 ",(0,o.kt)("em",{parentName:"p"},"ApprovedBy")," \u5c5e\u6027\u6dfb\u52a0\u5230\u6240\u6709\u6765\u6e90\u4e2d\uff0c\u5e76\u5c06\u5176\u503c\u8bbe\u7f6e\u4e3a\u5f53\u524d\u7528\u6237\u7684\u540d\u79f0\u3002\u8be5\u5c5e\u6027\u5c06\u6dfb\u52a0\uff08\u6216\u66f4\u65b0\uff09\u5230\u6587\u4ef6\uff08\u901a\u7528\uff09\u3001\u6240\u6709\u914d\u7f6e\u548c\u6240\u6709\u5207\u5272\u5217\u8868\u9879\u4e2d\u3002"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("em",{parentName:"p"},"FILE_PATH")," \u5e38\u91cf\u4e2d\u6307\u5b9a\u6587\u4ef6\u7684\u5b8c\u6574\u8def\u5f84\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const SW_DM_KEY As String = "Your License Key"\n\nConst FILE_PATH As String = "C:\\SampleModel.SLDPRT"\nConst PRP_NAME As String = "ApprovedBy"\n\nDim swDmClassFactory As SwDocumentMgr.swDmClassFactory\nDim swDmApp As SwDocumentMgr.SwDMApplication\n\nSub main()\n\n    Set swDmClassFactory = CreateObject("SwDocumentMgr.SwDMClassFactory")\n    \n    If Not swDmClassFactory Is Nothing Then\n        \n        Set swDmApp = swDmClassFactory.GetApplication(SW_DM_KEY)\n        Dim swDmDoc As SwDocumentMgr.SwDMDocument19\n        Set swDmDoc = OpenDocument(FILE_PATH, False)\n        \n        Dim curUser As String\n        curUser = Environ("UserName")\n        \n        SetGeneralProperty swDmDoc, PRP_NAME, curUser, SwDmCustomInfoType.swDmCustomInfoText\n        SetConfigurationSpecificProperty swDmDoc, PRP_NAME, curUser, SwDmCustomInfoType.swDmCustomInfoText\n        SetCutListProperty swDmDoc, PRP_NAME, curUser, SwDmCustomInfoType.swDmCustomInfoText\n        \n        swDmDoc.Save\n        swDmDoc.CloseDoc\n        \n    Else\n        MsgBox "\u672a\u5b89\u88c5\u6587\u6863\u7ba1\u7406\u5668 SDK"\n    End If\n    \nEnd Sub\n\nSub SetGeneralProperty(dmDoc As SwDocumentMgr.SwDMDocument19, prpName As String, prpVal As String, prpType As SwDmCustomInfoType)\n    dmDoc.AddCustomProperty prpName, prpType, prpVal\n    dmDoc.SetCustomProperty prpName, prpVal\nEnd Sub\n\nSub SetConfigurationSpecificProperty(dmDoc As SwDocumentMgr.SwDMDocument19, prpName As String, prpVal As String, prpType As SwDmCustomInfoType)\n    \n    Dim vConfNames As Variant\n    vConfNames = dmDoc.ConfigurationManager.GetConfigurationNames()\n    \n    Dim i As Integer\n        \n    For i = 0 To UBound(vConfNames)\n        \n        Dim confName As String\n        confName = vConfNames(i)\n        \n        Dim swDmConf As SwDocumentMgr.SwDMConfiguration13\n        Set swDmConf = dmDoc.ConfigurationManager.GetConfigurationByName(confName)\n        \n        swDmConf.AddCustomProperty prpName, prpType, prpVal\n        swDmConf.SetCustomProperty prpName, prpVal\n        \n    Next\n    \nEnd Sub\n\nSub SetCutListProperty(dmDoc As SwDocumentMgr.SwDMDocument19, prpName As String, prpVal As String, prpType As SwDmCustomInfoType)\n    \n    Dim vConfNames As Variant\n    vConfNames = dmDoc.ConfigurationManager.GetConfigurationNames()\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vConfNames)\n        \n        Dim confName As String\n        confName = vConfNames(i)\n        \n        Dim swDmConf As SwDocumentMgr.SwDMConfiguration16\n        Set swDmConf = dmDoc.ConfigurationManager.GetConfigurationByName(confName)\n        \n        Dim vCutListItems As Variant\n        vCutListItems = swDmConf.GetCutListItems\n                \n        If Not IsEmpty(vCutListItems) Then\n            \n            Dim j As Integer\n            \n            For j = 0 To UBound(vCutListItems)\n                \n                Dim swDmCutList As SwDocumentMgr.SwDMCutListItem3\n                Set swDmCutList = vCutListItems(j)\n                \n                swDmCutList.AddCustomProperty prpName, prpType, prpVal\n                swDmCutList.SetCustomProperty prpName, prpVal\n                \n            Next\n        \n        End If\n        \n    Next\n    \nEnd Sub\n\nFunction OpenDocument(filePath As String, readOnly As Boolean) As SwDocumentMgr.SwDMDocument19\n    \n    Dim openErr As SwDmDocumentOpenError\n    \n    Dim docType As SwDocumentMgr.SwDmDocumentType\n    \n    Dim ext As String\n    ext = LCase(Right(filePath, Len(".SLDXXX")))\n    \n    Select Case ext\n        Case ".sldprt"\n            docType = swDmDocumentPart\n        Case ".sldasm"\n            docType = swDmDocumentAssembly\n        Case ".slddrw"\n            docType = swDmDocumentDrawing\n    End Select\n    \n    Dim swDmDoc As SwDocumentMgr.SwDMDocument19\n    \n    Set swDmDoc = swDmApp.GetDocument(filePath, docType, readOnly, openErr)\n    \n    If swDmDoc Is Nothing Then\n        Err.Raise vbError, "", "\u65e0\u6cd5\u6253\u5f00\u6587\u6863\uff1a" & openErr\n    End If\n    \n    Set OpenDocument = swDmDoc\n    \nEnd Function\n')))}d.isMDXComponent=!0},21856:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/added-custom-property-612161da20c0d34ddff3982a9f16495a.png"}}]);