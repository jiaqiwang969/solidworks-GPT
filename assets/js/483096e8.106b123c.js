"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[48088],{3905:(e,t,i)=>{i.d(t,{Zo:()=>o,kt:()=>j});var M=i(67294);function I(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(e);t&&(M=M.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,M)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){I(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,M,I=function(e,t){if(null==e)return{};var i,M,I={},n=Object.keys(e);for(M=0;M<n.length;M++)i=n[M],t.indexOf(i)>=0||(I[i]=e[i]);return I}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(M=0;M<n.length;M++)i=n[M],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(I[i]=e[i])}return I}var c=M.createContext({}),r=function(e){var t=M.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},o=function(e){var t=r(e.components);return M.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return M.createElement(M.Fragment,{},t)}},s=M.forwardRef((function(e,t){var i=e.components,I=e.mdxType,n=e.originalType,c=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),y=r(i),s=I,j=y["".concat(c,".").concat(s)]||y[s]||u[s]||n;return i?M.createElement(j,l(l({ref:t},o),{},{components:i})):M.createElement(j,l({ref:t},o))}));function j(e,t){var i=arguments,I=t&&t.mdxType;if("string"==typeof e||I){var n=i.length,l=new Array(n);l[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[y]="string"==typeof e?e:I,l[1]=a;for(var r=2;r<n;r++)l[r]=i[r];return M.createElement.apply(null,l)}return M.createElement.apply(null,i)}s.displayName="MDXCreateElement"},34661:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>r});var M=i(87462),I=(i(67294),i(3905));const n={layout:"sw-tool",title:"Macro to delete all empty feature folders in SOLIDWORKS files",caption:"Delete Empty Folders",description:"VBA macro deletes all empty feature folders in the SOLIDWORKS files (part or assembly)",image:"delete-folders.svg",labels:["feature","empty","delete","cleanup"],group:"Model"},l=void 0,a={unversionedId:"codestack-clone/solidworks-api/document/features-manager/delete-empty-folders/index",id:"codestack-clone/solidworks-api/document/features-manager/delete-empty-folders/index",title:"Macro to delete all empty feature folders in SOLIDWORKS files",description:"VBA macro deletes all empty feature folders in the SOLIDWORKS files (part or assembly)",source:"@site/docs/codestack-clone/solidworks-api/document/features-manager/delete-empty-folders/index.md",sourceDirName:"codestack-clone/solidworks-api/document/features-manager/delete-empty-folders",slug:"/codestack-clone/solidworks-api/document/features-manager/delete-empty-folders/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/features-manager/delete-empty-folders/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/features-manager/delete-empty-folders/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to delete all empty feature folders in SOLIDWORKS files",caption:"Delete Empty Folders",description:"VBA macro deletes all empty feature folders in the SOLIDWORKS files (part or assembly)",image:"delete-folders.svg",labels:["feature","empty","delete","cleanup"],group:"Model"},sidebar:"tutorialSidebar",previous:{title:"Defeature Part (convert to dumb solid) using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/features-manager/defeature-part/"},next:{title:"SOLIDWORKS Macro to delete feature folder with all children features",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/features-manager/delete-feature-folder-all-children/"}},c={},r=[],o={toc:r},y="wrapper";function u(e){let{components:t,...n}=e;return(0,I.kt)(y,(0,M.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"Delete feature manager folders",src:i(46709).Z,width:"89",height:"73"}),"{ width=300 }"),(0,I.kt)("p",null,"This VBA macro will delete all empty feature folders from the active part or assembly."),(0,I.kt)("blockquote",null,(0,I.kt)("p",{parentName:"blockquote"},"Feature folders which only contain empty folders will also be deleted.")),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"Empty folders deleted from the feature manager tree",src:i(46653).Z,width:"233",height:"429"})),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n       \n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim swFeat As SldWorks.Feature\n    \n    Set swFeat = swModel.FirstFeature\n    \n    swModel.ClearSelection2 True\n    \n    While Not swFeat Is Nothing\n        \n        If IsFolder(swFeat) Then\n            \n            If Not FolderHasFeatures(swFeat.GetSpecificFeature2()) Then\n                swFeat.Select2 True, -1\n            End If\n            \n        End If\n        \n        Dim swSubFeat As SldWorks.Feature\n        Set swSubFeat = swFeat.GetFirstSubFeature\n        \n        While Not swSubFeat Is Nothing\n            \n            If IsFolder(swSubFeat) Then\n                \n                If Not FolderHasFeatures(swSubFeat.GetSpecificFeature2()) Then\n                    swSubFeat.Select2 True, -1\n                End If\n                \n            End If\n            \n            Set swSubFeat = swSubFeat.GetNextSubFeature\n        Wend\n        \n        Set swFeat = swFeat.GetNextFeature\n        \n    Wend\n    \n    swModel.Extension.DeleteSelection2 swDeleteSelectionOptions_e.swDelete_Absorbed\n    \nEnd Sub\n\nFunction IsFolder(feat As SldWorks.Feature) As Boolean\n    Const END_FOLDER_TAG As String = "___EndTag___"\n    IsFolder = feat.GetTypeName2() = "FtrFolder" And Right(feat.Name, Len(END_FOLDER_TAG)) <> END_FOLDER_TAG\nEnd Function\n\nFunction FolderHasFeatures(folder As SldWorks.FeatureFolder) As Boolean\n    \n    If folder.GetFeatureCount() = 0 Then\n        FolderHasFeatures = False\n    Else\n        \n        Dim vFeats As Variant\n        \n        vFeats = folder.GetFeatures()\n        Dim i As Integer\n        \n        For i = 0 To UBound(vFeats)\n            \n            Dim swFeat As SldWorks.Feature\n            Set swFeat = vFeats(i)\n            \n            If IsFolder(swFeat) Then\n                If FolderHasFeatures(swFeat.GetSpecificFeature2()) Then\n                    FolderHasFeatures = True\n                    Exit Function\n                End If\n            Else\n                FolderHasFeatures = True\n                Exit Function\n            End If\n            \n        Next\n        \n        FolderHasFeatures = False\n        \n    End If\n    \nEnd Function\n')))}u.isMDXComponent=!0},46709:(e,t,i)=>{i.d(t,{Z:()=>M});const M="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODkuMTU3IDcyLjY2OSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJpIiB4MT0iMTM4LjkyIiB4Mj0iMjQzLjkzIiB5MT0iNjA0Ljg2IiB5Mj0iNzE1Ljk4IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjQ1IDM4OC41MDUpIHNjYWxlKC4xOTUyNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjYSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjEzOC45MiIgeDI9IjI0My45MyIgeTE9IjYwNC44NiIgeTI9IjcxNS45OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZWM2NyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2YyOTEwMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJqIiB4MT0iMzA0LjU5IiB4Mj0iMTUzLjAxIiB5MT0iNjI1LjA3IiB5Mj0iNzM1LjY1IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjQ1IDM4OC41MDUpIHNjYWxlKC4xOTUyNSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4bGluazpocmVmPSIjYiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjMwNC41OSIgeDI9IjE1My4wMSIgeTE9IjYyNS4wNyIgeTI9IjczNS42NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZWM2NyIgc3RvcC1vcGFjaXR5PSIuNjQzIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjJiMzAwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImsiIHgxPSIyNDkuNDgiIHgyPSIyNzIuMDMiIHkxPSIyNjIuODciIHkyPSI0MjcuNTQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLS4zMDE2MyAuMDgwODIgLS4wODI5NSAtLjMwOTU3IDQwMi44NiA3MzAuMTEpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2MiLz48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIyNDkuNDgiIHgyPSIyNzIuMDMiIHkxPSIyNjIuODciIHkyPSI0MjcuNTQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLS4zMDE2MyAuMDgwODIgLS4wODI5NSAtLjMwOTU3IDQwMi44NiA3MzAuMTEpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJyZWQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibCIgeDE9IjI2NC41OCIgeDI9IjM4MC42OCIgeTE9IjI5Ni4zNyIgeTI9IjU1My43NCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguMzEyMjcgMCAwIC4zMjA0OSAxMjcuNTUgNDM0LjM4KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNkIi8+PGxpbmVhckdyYWRpZW50IGlkPSJkIiB4MT0iMjY0LjU4IiB4Mj0iMzgwLjY4IiB5MT0iMjk2LjM3IiB5Mj0iNTUzLjc0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC4zMTIyNyAwIDAgLjMyMDQ5IDEyNy41NSA0MzQuMzgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJyZWQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZSIgeDE9IjEzOC45MiIgeDI9IjI0My45MyIgeTE9IjYwNC44NiIgeTI9IjcxNS45OCIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxNi40NSAzODguNTA1KSBzY2FsZSguMTk1MjUpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2EiLz48bGluZWFyR3JhZGllbnQgaWQ9ImYiIHgxPSIzMDQuNTkiIHgyPSIxNTMuMDEiIHkxPSI2MjUuMDciIHkyPSI3MzUuNjUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuNDUgMzg4LjUwNSkgc2NhbGUoLjE5NTI1KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNiIi8+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMjQ5LjQ4IiB4Mj0iMjcyLjAzIiB5MT0iMjYyLjg3IiB5Mj0iNDI3LjU0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0uMzAxNjMgLjA4MDgyIC0uMDgyOTUgLS4zMDk1NyA0MDIuODYgNzMwLjExKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHhsaW5rOmhyZWY9IiNjIi8+PGxpbmVhckdyYWRpZW50IGlkPSJoIiB4MT0iMjY0LjU4IiB4Mj0iMzgwLjY4IiB5MT0iMjk2LjM3IiB5Mj0iNTUzLjc0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC4zMTIyNyAwIDAgLjMyMDQ5IDEyNy41NSA0MzQuMzgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeGxpbms6aHJlZj0iI2QiLz48L2RlZnM+PGcgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiM5YTdiMDgiIHN0cm9rZS13aWR0aD0iLjk3NiI+PHBhdGggZmlsbD0idXJsKCNlKSIgZD0iTTQ1LjQ1NiA1MzEuNjMxbC0zLjM2Ni0yNi45OTggMTEuMjQyLS4xOTcuNzkgMS4zOGgxMC42NWw2LjcwNSAyMC45MDgiIHRyYW5zZm9ybT0ibWF0cml4KDEuMTUyNDggMCAwIDEuMTUyNDggLTQwLjUwNyAtNTgwLjc4MykiLz48cGF0aCBmaWxsPSJ1cmwoI2YpIiBkPSJNNDUuNzMzIDUzMS4wODJsMjUuOTQxLTQuMzU4IDcuMjk5LTE5LjEzLTI0LjQ1NyAxLjE4M3oiIHRyYW5zZm9ybT0ibWF0cml4KDEuMTUyNDggMCAwIDEuMTUyNDggLTQwLjUwNyAtNTgwLjc4MykiLz48L2c+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODg4IiBzdHJva2UtZGFzaGFycmF5PSI2IDYiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTI4LjI3MiAzMi4zNzZ2MTYuMTM3SDQxLjM3Ii8+PHBhdGggZmlsbD0icmVkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI2NiMDAwMCIgc3Ryb2tlLXdpZHRoPSIuOTQyMTkxNjgiIGQ9Ik0yMy44NzggMjkuMDNhMTEuNzAzIDExLjcwMyAwIDEgMS0yMy40MDcgMCAxMS43MDMgMTEuNzAzIDAgMSAxIDIzLjQwNyAweiIvPjxwYXRoIGZpbGw9InVybCgjZykiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI2NC4xOSA2NjguOTNjMTkuMDUtNS4xIDM0LjE3LTE3LjY2IDQzLjIzLTMzLjgyIDE0LjcxLTM0LjgyLTQwLjE3IDQ2LjctODUuNDkgMzEuODkgMTMuMTcgNC44MyAyNy44MSA1LjggNDIuMjYgMS45M3oiIHRyYW5zZm9ybT0ibWF0cml4KC4xNTI1NiAwIDAgLjE1MjU2IC0yNS4yODUgLTYyLjYwOCkiLz48cGF0aCBmaWxsPSJ1cmwoI2gpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNDUuNjYgNTI5LjM2Yy0zOS40NCAwLTcxLjQ0IDMyLjg1LTcxLjQ0IDczLjMyIDAgNS40OC42IDEwLjgxIDEuNzEgMTUuOTQgMzkuMjEtNzUuNDcgODEuNDUtMjcuOTYgMTM1LjkxLTQzLjU1LTEwLjY0LTI2LjgtMzYuMjYtNDUuNzEtNjYuMTgtNDUuNzF6IiB0cmFuc2Zvcm09Im1hdHJpeCguMTUyNTYgMCAwIC4xNTI1NiAtMjUuMjg1IC02Mi42MDgpIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE1LjUxMiAzNS4wMzNsLTMuMzA4LTMuMzA3LTMuMzM3IDMuMzM4LTIuNzI3LTIuNzI2IDMuMzM4LTMuMzQtMy4zMDctMy4zMDcgMi42NTQtMi42NTUgMy4zMDggMy4zMDggMy4zNDgtMy4zNDkgMi43MjggMi43MjgtMy4zNSAzLjM0OCAzLjMwNyAzLjMwOC0yLjY1NCAyLjY1NCIgb3BhY2l0eT0iLjczNSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNS40OTQgMzQuNTcxTDEyLjIgMzEuMjc3bC0zLjMyIDMuMzItMi4yNzMtMi4yNzUgMy4zMi0zLjMxOC0zLjI5NC0zLjI5MyAyLjIxNC0yLjIxNCAzLjI5MiAzLjI5NCAzLjMyOS0zLjMyOCAyLjI3MyAyLjI3My0zLjMyOCAzLjMyOCAzLjI5MyAzLjI5My0yLjIxMiAyLjIxNCIvPjxnIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjOWE3YjA4IiBzdHJva2Utd2lkdGg9Ii45NzYiPjxwYXRoIGZpbGw9InVybCgjaSkiIGQ9Ik00NS40NTYgNTMxLjYzMWwtMy4zNjYtMjYuOTk4IDExLjI0Mi0uMTk3Ljc5IDEuMzhoMTAuNjVsNi43MDUgMjAuOTA4IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjE1MjQ4IDAgMCAxLjE1MjQ4IC0yLjY5IC01NDkuMzE5KSIvPjxwYXRoIGZpbGw9InVybCgjaikiIGQ9Ik00NS43MzMgNTMxLjA4MmwyNS45NDEtNC4zNTggNy4yOTktMTkuMTMtMjQuNDU3IDEuMTgzeiIgdHJhbnNmb3JtPSJtYXRyaXgoMS4xNTI0OCAwIDAgMS4xNTI0OCAtMi42OSAtNTQ5LjMxOSkiLz48L2c+PGc+PHBhdGggZmlsbD0icmVkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iI2NiMDAwMCIgc3Ryb2tlLXdpZHRoPSIuOTQyMTkxNjgiIGQ9Ik02MS42OTUgNjAuNDk1YTExLjcwMyAxMS43MDMgMCAxIDEtMjMuNDA3IDAgMTEuNzAzIDExLjcwMyAwIDEgMSAyMy40MDcgMHoiLz48cGF0aCBmaWxsPSJ1cmwoI2spIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNjQuMTkgNjY4LjkzYzE5LjA1LTUuMSAzNC4xNy0xNy42NiA0My4yMy0zMy44MiAxNC43MS0zNC44Mi00MC4xNyA0Ni43LTg1LjQ5IDMxLjg5IDEzLjE3IDQuODMgMjcuODEgNS44IDQyLjI2IDEuOTN6IiB0cmFuc2Zvcm09Im1hdHJpeCguMTUyNTYgMCAwIC4xNTI1NiAxMi41MzMgLTMxLjE0NCkiLz48cGF0aCBmaWxsPSJ1cmwoI2wpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNDUuNjYgNTI5LjM2Yy0zOS40NCAwLTcxLjQ0IDMyLjg1LTcxLjQ0IDczLjMyIDAgNS40OC42IDEwLjgxIDEuNzEgMTUuOTQgMzkuMjEtNzUuNDcgODEuNDUtMjcuOTYgMTM1LjkxLTQzLjU1LTEwLjY0LTI2LjgtMzYuMjYtNDUuNzEtNjYuMTgtNDUuNzF6IiB0cmFuc2Zvcm09Im1hdHJpeCguMTUyNTYgMCAwIC4xNTI1NiAxMi41MzMgLTMxLjE0NCkiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNTMuMzI5IDY2LjQ5OGwtMy4zMDctMy4zMDgtMy4zMzggMy4zMzgtMi43MjctMi43MjYgMy4zMzgtMy4zNC0zLjMwNy0zLjMwNyAyLjY1NC0yLjY1NCAzLjMwOCAzLjMwNyAzLjM0OC0zLjM0OCAyLjcyOCAyLjcyNy0zLjM1IDMuMzQ5IDMuMzA3IDMuMzA3LTIuNjU0IDIuNjU1IiBvcGFjaXR5PSIuNzM1Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTUzLjMxIDY2LjAzNmwtMy4yOTMtMy4yOTQtMy4zMiAzLjMyLTIuMjczLTIuMjc1IDMuMzItMy4zMTgtMy4yOTQtMy4yOTQgMi4yMTQtMi4yMTMgMy4yOTIgMy4yOTMgMy4zMjktMy4zMjcgMi4yNzMgMi4yNzMtMy4zMjcgMy4zMjcgMy4yOTIgMy4yOTQtMi4yMTIgMi4yMTQiLz48L2c+PC9zdmc+"},46653:(e,t,i)=>{i.d(t,{Z:()=>M});const M=i.p+"assets/images/deleted-empty-folders-0ae2259a57c554dd1a67f152b759e576.png"}}]);