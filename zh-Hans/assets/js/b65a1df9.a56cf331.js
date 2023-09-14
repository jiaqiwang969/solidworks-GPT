"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[71145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>w});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=l.createContext({}),d=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return l.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,w=u["".concat(i,".").concat(p)]||u[p]||f[p]||r;return n?l.createElement(w,a(a({ref:t},c),{},{components:n})):l.createElement(w,a({ref:t},c))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var l=n(87462),o=(n(67294),n(3905));const r={layout:"sw-tool",title:"SOLIDWORKS Macro to delete feature folder with all children features",caption:"Delete Feature Folder With All Children Features",description:"Macro allows to delete all of the features in the selected folder in one click using SOLIDWORKS API",image:"deleted-folder-features.svg",labels:["delete folder","feature manager","folder","solidworks api","utility"],group:"Model","redirect-from":["/2018/04/solidworks-api-feature-manager-delete-feature-folder-with-all-children.html"]},a=void 0,s={unversionedId:"codestack/solidworks-api/document/features-manager/delete-feature-folder-all-children/index",id:"codestack/solidworks-api/document/features-manager/delete-feature-folder-all-children/index",title:"SOLIDWORKS Macro to delete feature folder with all children features",description:"Macro allows to delete all of the features in the selected folder in one click using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/features-manager/delete-feature-folder-all-children/index.md",sourceDirName:"codestack/solidworks-api/document/features-manager/delete-feature-folder-all-children",slug:"/codestack/solidworks-api/document/features-manager/delete-feature-folder-all-children/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/delete-feature-folder-all-children/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/features-manager/delete-feature-folder-all-children/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"SOLIDWORKS Macro to delete feature folder with all children features",caption:"Delete Feature Folder With All Children Features",description:"Macro allows to delete all of the features in the selected folder in one click using SOLIDWORKS API",image:"deleted-folder-features.svg",labels:["delete folder","feature manager","folder","solidworks api","utility"],group:"Model","redirect-from":["/2018/04/solidworks-api-feature-manager-delete-feature-folder-with-all-children.html"]},sidebar:"tutorialSidebar",previous:{title:"Macro to delete all empty feature folders in SOLIDWORKS files",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/delete-empty-folders/"},next:{title:"Macro to delete all features which are in the rolled back state in SOLIDWORKS document",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/delete-rolledback-features/"}},i={},d=[],c={toc:d},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When deleting the top folder in SOLIDWORKS features tree all sub features are not get deleted so it is required to select all of them one-by-one in order to delete folder content."),(0,o.kt)("p",null,"This is not always possible to do in one step due to the features relations:  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Manually deleting the folder feature",src:n(84750).Z,width:"400",height:"238"}),"{ width=400 }"),(0,o.kt)("p",null,"The macro below allows to delete all of the features in the selected folder in one click using SOLIDWORKS API. Nested folders are also supported."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deleting the folder with all children features",src:n(89818).Z,width:"400",height:"147"}),"{ width=400 }"),(0,o.kt)("p",null,"Macro can optionally display the confirmation dialog with the list of features about to be deleted"),(0,o.kt)("p",null,"Watch ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/9uZCecGg25I?t=396"},"video demonstration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const SHOW_CONFIRMATION_DIALOG As Boolean = True\n\nDim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swFolderFeat As SldWorks.Feature\n        \n        Set swFolderFeat = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swFolderFeat Is Nothing Then\n            \n            If swFolderFeat.GetTypeName2() = "FtrFolder" Then\n                \n                Dim vFeats As Variant\n                vFeats = GetFeaturesInFolder(swFolderFeat)\n                Dim i As Integer\n                \n                If Not IsEmpty(vFeats) Then\n                    For i = 0 To UBound(vFeats)\n                        Dim swFeat As SldWorks.Feature\n                        Set swFeat = vFeats(i)\n                        swFeat.Select2 True, -1\n                    Next\n                End If\n                \n                If SHOW_CONFIRMATION_DIALOG Then\n                    \n                    Dim featNames As String\n                    \n                    For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n                        \n                        On Error Resume Next\n                        \n                        Set swFeat = swSelMgr.GetSelectedObject6(i, -1)\n                        If Not swFeat Is Nothing Then\n                            featNames = featNames & vbCrLf & swFeat.Name\n                        End If\n                        \n                    Next\n                \n                    If swApp.SendMsgToUser2( _\n                        "Delete the following feature(s) and all absorbed features?" & vbCrLf & featNames, _\n                        swMessageBoxIcon_e.swMbQuestion, _\n                        swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitNo Then\n                        End\n                    End If\n                End If\n                \n                swModel.Extension.DeleteSelection2 swDeleteSelectionOptions_e.swDelete_Absorbed\n                \n            Else\n                MsgBox "Selected feature is not a folder"\n            End If\n            \n        Else\n            MsgBox "Please select folder feature"\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nFunction GetFeaturesInFolder(folderFeat As SldWorks.Feature) As Variant\n    \n    Const FOLDER_CLOSE_TAG As String = "___EndTag___"\n    \n    Dim swFeatsColl As Collection\n    Set swFeatsColl = New Collection\n        \n    Dim swNextFeat As SldWorks.Feature\n    \n    Set swNextFeat = folderFeat.GetNextFeature\n    \n    Dim nestedFolderLevel As Integer\n    nestedFolderLevel = 0\n    \n    While Not swNextFeat Is Nothing\n        \n        Dim isEndFolderTagFeat As Boolean\n        isEndFolderTagFeat = False\n        \n        If swNextFeat.GetTypeName2() = "FtrFolder" Then\n                        \n            isEndFolderTagFeat = Right(swNextFeat.Name, Len(FOLDER_CLOSE_TAG)) = FOLDER_CLOSE_TAG\n            \n            If isEndFolderTagFeat Then\n                If nestedFolderLevel = 0 Then\n                    GetFeaturesInFolder = CollectionToArray(swFeatsColl)\n                    Exit Function\n                Else\n                    nestedFolderLevel = nestedFolderLevel - 1\n                End If\n            Else\n                nestedFolderLevel = nestedFolderLevel + 1\n            End If\n            \n        End If\n    \n        If Not isEndFolderTagFeat Then\n            If Not Contains(swFeatsColl, swNextFeat) Then\n                swFeatsColl.Add swNextFeat\n            End If\n        \n            CollectAllSubFeatures swNextFeat, swFeatsColl\n        End If\n        \n        Set swNextFeat = swNextFeat.GetNextFeature\n        \n    Wend\n        \nEnd Function\n\n\nSub CollectAllSubFeatures(swFeat As SldWorks.Feature, coll As Collection)\n    \n    Dim swSubFeat As SldWorks.Feature\n    Set swSubFeat = swFeat.GetFirstSubFeature\n        \n    While Not swSubFeat Is Nothing\n        \n        If Not Contains(coll, swSubFeat) Then\n            coll.Add swNextFeat\n        End If\n        \n        CollectAllSubFeatures swSubFeat, coll\n        Set swSubFeat = swSubFeat.GetNextSubFeature\n        \n    Wend\n    \nEnd Sub\n\nFunction Contains(coll As Collection, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To coll.Count\n        If coll.item(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n\nFunction CollectionToArray(coll As Collection) As Variant\n    \n    If coll.Count() > 0 Then\n        \n        Dim arr() As Object\n        \n        ReDim arr(coll.Count() - 1)\n        Dim i As Integer\n        \n        For i = 1 To coll.Count\n            Set arr(i - 1) = coll(i)\n        Next\n        \n        CollectionToArray = arr\n        \n    Else\n        CollectionToArray = Empty\n    End If\n    \nEnd Function\n')))}f.isMDXComponent=!0},84750:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/delete-features-manually-11cf0b194628985e19a04ec2506134fd.gif"},89818:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/delete-folder-with-features-6442f02e7bfc97d861232563bc60441b.png"}}]);