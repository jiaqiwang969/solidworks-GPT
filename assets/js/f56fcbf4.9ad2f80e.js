"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[12420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=l(r),p=o,m=f["".concat(c,".").concat(p)]||f[p]||u[p]||a;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},76808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={caption:"Batch Create Folders",title:"Batch create feature folders in the active SOLIDWORKS document",description:"VBA macro creates specified number of the feature folders with the specified prefix name in the active SOLIDWORKS part or assembly"},s=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/batch-create-folders/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/batch-create-folders/index",title:"Batch create feature folders in the active SOLIDWORKS document",description:"VBA macro creates specified number of the feature folders with the specified prefix name in the active SOLIDWORKS part or assembly",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/batch-create-folders/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/batch-create-folders",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/batch-create-folders/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/batch-create-folders/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/batch-create-folders/index.md",tags:[],version:"current",frontMatter:{caption:"Batch Create Folders",title:"Batch create feature folders in the active SOLIDWORKS document",description:"VBA macro creates specified number of the feature folders with the specified prefix name in the active SOLIDWORKS part or assembly"},sidebar:"tutorialSidebar",previous:{title:"VSTA Macro which activates feature manager tab via SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/activate-tabs/"},next:{title:"Catch new feature creation event from SOLIDWORKS API notification",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/features-manager/catch-new-feature-creation-event/"}},c={},l=[],d={toc:l},f="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This VBA macro allows to create feature folders in the batch mode in the active SOLIDWORKS assembly or part document."),(0,o.kt)("p",null,"Macro will ask for the number of folders to be created and the folder prefix name."),(0,o.kt)("p",null,"Macro will create the specified number of folder with the prefix name followed by the index."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If folder with the next index already exists, next index will be used for the naming")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim foldersCount As Integer\n        Dim folderNamePrefix As String\n        \n        foldersCount = CInt(InputBox("Specify the number of folders to create", "Batch Folder Creator", "5"))\n        folderNamePrefix = InputBox("Specify the prefix name of the folder", "Batch Folder Creator", "MyFolder")\n        \n        Dim swAnchorFeat As SldWorks.Feature\n        Set swAnchorFeat = swModel.Extension.GetLastFeatureAdded\n        \n        Dim swFeatMgr As SldWorks.FeatureManager\n        Set swFeatMgr = swModel.FeatureManager\n        \n        Dim i As Integer\n        \n        Dim nextIndex As Integer\n        nextIndex = 0\n        \n        For i = 1 To foldersCount\n            \n            swAnchorFeat.Select2 False, -1\n            \n            Dim swFolderFeat As SldWorks.Feature\n            Set swFolderFeat = swFeatMgr.InsertFeatureTreeFolder2(swFeatureTreeFolderType_e.swFeatureTreeFolder_EmptyBefore)\n            \n            If swFolderFeat Is Nothing Then\n                Err.Raise vbError, "", "Failed to create a folder, make sure there there is at least one feature in the model"\n            End If\n            \n            Dim folderName As String\n            \n            Do\n                nextIndex = nextIndex + 1\n                folderName = folderNamePrefix & nextIndex\n            Loop While False <> swFeatMgr.IsNameUsed(swNameType_e.swFeatureName, folderName)\n            \n            swFolderFeat.Name = folderName\n            \n            swModel.Extension.ReorderFeature swFolderFeat.Name, "", swMoveLocation_e.swMoveToEnd\n            \n        Next\n        \n    Else\n        Err.Raise vbError, "", "No model opened"\n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0}}]);