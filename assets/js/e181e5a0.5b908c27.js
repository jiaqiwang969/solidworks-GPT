"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[12917],{3905:(e,o,r)=>{r.d(o,{Zo:()=>A,kt:()=>m});var l=r(67294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function i(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);o&&(l=l.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,l)}return r}function a(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?i(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function n(e,o){if(null==e)return{};var r,l,t=function(e,o){if(null==e)return{};var r,l,t={},i=Object.keys(e);for(l=0;l<i.length;l++)r=i[l],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=l.createContext({}),s=function(e){var o=l.useContext(d),r=o;return e&&(r="function"==typeof e?e(o):a(a({},o),e)),r},A=function(e){var o=s(e.components);return l.createElement(d.Provider,{value:o},e.children)},p="mdxType",R={inlineCode:"code",wrapper:function(e){var o=e.children;return l.createElement(l.Fragment,{},o)}},c=l.forwardRef((function(e,o){var r=e.components,t=e.mdxType,i=e.originalType,d=e.parentName,A=n(e,["components","mdxType","originalType","parentName"]),p=s(r),c=t,m=p["".concat(d,".").concat(c)]||p[c]||R[c]||i;return r?l.createElement(m,a(a({ref:o},A),{},{components:r})):l.createElement(m,a({ref:o},A))}));function m(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=c;var n={};for(var d in o)hasOwnProperty.call(o,d)&&(n[d]=o[d]);n.originalType=e,n[p]="string"==typeof e?e:t,a[1]=n;for(var s=2;s<i;s++)a[s]=r[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,r)}c.displayName="MDXCreateElement"},20099:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>R,frontMatter:()=>i,metadata:()=>n,toc:()=>s});var l=r(87462),t=(r(67294),r(3905));const i={title:"Recursively Traverse Files And Folders In Vault Using SOLIDWORKS PDM API",caption:"Traverse Folder Recursively",description:"VBA example to traverse and list all files and folders from the selected folder in SOLIDWORKS PDM vault using SOLIDWORKS PDM API",image:"pdm-folder-structure-output.png",labels:["traverse","vault","browse folder"]},a=void 0,n={unversionedId:"codestack-clone/solidworks-pdm-api/files/traverse/index",id:"codestack-clone/solidworks-pdm-api/files/traverse/index",title:"Recursively Traverse Files And Folders In Vault Using SOLIDWORKS PDM API",description:"VBA example to traverse and list all files and folders from the selected folder in SOLIDWORKS PDM vault using SOLIDWORKS PDM API",source:"@site/docs/codestack-clone/solidworks-pdm-api/files/traverse/index.md",sourceDirName:"codestack-clone/solidworks-pdm-api/files/traverse",slug:"/codestack-clone/solidworks-pdm-api/files/traverse/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-pdm-api/files/traverse/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-pdm-api/files/traverse/index.md",tags:[],version:"current",frontMatter:{title:"Recursively Traverse Files And Folders In Vault Using SOLIDWORKS PDM API",caption:"Traverse Folder Recursively",description:"VBA example to traverse and list all files and folders from the selected folder in SOLIDWORKS PDM vault using SOLIDWORKS PDM API",image:"pdm-folder-structure-output.png",labels:["traverse","vault","browse folder"]},sidebar:"tutorialSidebar",previous:{title:"Cache file from PDM vault locally using SOLIDWORKS PDM API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-pdm-api/files/local-cache/"},next:{title:"data card and variables",permalink:"/solidworks-GPT/docs/category/data-card-and-variables"}},d={},s=[],A={toc:s},p="wrapper";function R(e){let{components:o,...i}=e;return(0,t.kt)(p,(0,l.Z)({},A,i,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This VBA example demonstrates how to traverse files and folders in the SOLIDWORKS PDM vault using SOLIDWORKS PDM API."),(0,t.kt)("p",null,"Macro displays the built-in folder browse dialog for the folder to traverse:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Built-in PDM Folder Browse dialog",src:r(88909).Z,width:"424",height:"544"}),"{ width=250 }"),(0,t.kt)("p",null,"Macro recursively traverses files and sub folders and outputs the file or folder name, id, level to the VBA Editor immediate window."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Folders and files structure output to immediate window of VBA Editor",src:r(58329).Z,width:"592",height:"420"}),"{ width=350 }"),(0,t.kt)("p",null,"This macro can traverse the tree even if it is not ",(0,t.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-pdm-api/files/local-cache/"},"cached locally")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Const VAULT_NAME As String = "MyVault"\n\nDim pdmVault As EdmVault5\n\nSub main()\n\n    Set pdmVault = New EdmVault5\n    pdmVault.LoginAuto VAULT_NAME, 0\n    \n    If pdmVault.IsLoggedIn Then\n        \n        Dim pdmFolder As IEdmFolder5\n        \n        Set pdmFolder = pdmVault.BrowseForFolder(0, "Select folder to traverse")\n        \n        If Not pdmFolder Is Nothing Then\n            TraverseFolder pdmFolder\n        End If\n        \n    Else\n        Err.Raise vbError, "User is not logged in to the vault"\n    End If\n    \nEnd Sub\n\nSub TraverseFolder(folder As IEdmFolder5, Optional parentLevel As String = "")\n\n    Debug.Print parentLevel & "[+]" & folder.Name & " (" & folder.ID & ")"\n    \n    Dim thisLevel As String\n    thisLevel = parentLevel & " "\n    \n    Dim pdmFilePos As IEdmPos5\n    Set pdmFilePos = folder.GetFirstFilePosition()\n\n    While Not pdmFilePos.IsNull\n        Dim pdmFile As IEdmFile5\n        Set pdmFile = folder.GetNextFile(pdmFilePos)\n        Debug.Print thisLevel & " " & pdmFile.Name & " (" & pdmFile.ID & ")"\n    Wend\n    \n    Dim pdmSubFolderPos As IEdmPos5\n    Set pdmSubFolderPos = folder.GetFirstSubFolderPosition()\n    \n    While Not pdmSubFolderPos.IsNull\n        Dim pdmSubFolder As IEdmFolder5\n        Set pdmSubFolder = folder.GetNextSubFolder(pdmSubFolderPos)\n        TraverseFolder pdmSubFolder, thisLevel\n    Wend\n\nEnd Sub\n')))}R.isMDXComponent=!0},88909:(e,o,r)=>{r.d(o,{Z:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAagAAAIgCAMAAADnZw3aAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAGmsMq3rbVhYAHKmRf//trCwY51aABYXF7q7vKOjowBRnKrv8M7OzlcAAB9DiHW96gAANijP5HKr3aiLWABeX1YAMXnD3sna5CMjI8zzoV+n3SpVoP7+/rm5eu/w8J2sxQAte7p/NZC2kFpaWlOFKr+IgS8AWV8sACBeyLnR6dzKkNbW1p240zHN9czd7xokWaBKN7LK5FApOMrs7K/Jv2dvhNvbvCYAMVOPtdqbV0NGQJPf74zNVO/NhwAAWDBAWNvf5shpV1KR43C4uKPS4qC61pyiuWEAYTx/sYSpfZ2dnZzZYaZYSeSgk/X203RqeopHPq3zrUMUIr7N2nsxAOvsqf+2Zl41hazF3zMzMz/O8rb//zY2idHl/7bO55vb2zWB38/f8ILGSoGBgc10Y6/c6NLS0trr23u72gBfqmOXN01UWOzFv//bkHq+n17W9JVrZ5Dbtl8ANWO8S6K82CgsQV+q77ryczvV/HzK/9uQOpG14L/R4oqKiniLrO+rYJm10T9lkX6yT6a/2tra2pvddDWGzYc5Nt3d3ZA6ANnm845sMV9efdfX17Gxsb5SPa7GoNfpuDF7vCZtvsXZ7d+UhrdCK/PSy9KKYgA1hqx7dqjB3dzvzZ3s/4bN75DE3JPYX2JirqjBnRZZ0jYAAJVbAMyGNqLkZys2ZlypRGa2/5Db/3l5eVio/zU4PmIAAGlpaUhRfk8mNa9iAN6ZjNPi8TYAN2YAOjmJjaussuTl4zQ1AAAAYqbAvNramzqQ24eHYIGGj8PDxT6KwLuam1qNL71+c8JeSp85JhtLUuD0vrpJM3tYezcAYnK1Pnrc86fb+Cpw3Mfdu4rVXrp6V3u9QuinmsP1gzlkswBktjZIdea4sLvp/b3slYY1AGzNU6qnfYu82Idgh0QAMpOTk+Po7tHgpVkAMlec2wA4kNimZHhNAGqdPn/OWazlg8Xs99J+btq8fNzt/lNWZvDwq22hx0SL30MAAGA5QNLh6YSs3Y/Pb87w8HBwcAAAAKI3uZUAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAc+ElEQVR4Xu2dD3wU5ZnHR07KkWAqrX9SNTfC2ZbiP6RVT9TQO2tBxeY0CLL+wX9XDlTqHZXYQyCnpBjF3FVMr6VYpW0a/NdgDaKmiC3q9cpVi21tC/U4704UxCtnQtFa+NzzPO8zs5vNZDfszpJ5yO/7ITvvvO8zszPvN+87k312F68KmACijABRRoAoI0CUEQJRKZBEPvKn6kdFpc4c2iEFkDDu+omqElGpBR3/CJLJnnOdKRF1Jjwll50/CUWlhmodSCLDZEiJKAyoJDPsI6GoKq0CSWRYKi3qRJBcNkKUDc7KEPVZkFwgyggQ1U9MeK82P+9N0Ogcom4eWynMnz92PqG1IC4ef/5r+Xn+cY3uVdSiRfMn393Wlkq1nXba/MpUZaXWg7io/dqv8vO1Wo3uTdSi+fMnzF3Q0OD76/funZuCqPiBKCPU3vi5/NwYLermkPnHHjv3ab+xscP3GxpSZanmZm0AcdFN1Me6urq+sXr1al5+jJartf7GWo2++eZIUdPmjxmTerTthhvOPK6so6OjMTV//jTXssPzvHJXZHbcq4UIONTbrStEGLskYwcDl9obWYjSRf3f9Y2vfkyWYsqRT9T8hZs3ty3cSPw+1dTU2JBauHA+1z8zivv4r/+Ly0KEqMNGaHN2G0R1o/bGr6ZhQWTKLf5VK4l8oio333bbhzf6O3duTJU1NDQ0pTZvruT61/7iaGkPgaiC6SZKFcnD30WL+lmGqEUBzT1FNXP9t9/dLe2LFi3xvOFHL1q04950mZfebpkbJUTaCK7mGlmn5hFLeM1t9Myop94dP5OjBhzdRKkpopsnEqXRixZFixpzzjmHbnx15059c0VqzBgRRd3ren/JiAcWHTb+SOn8oLyEfl47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"},58329:(e,o,r)=>{r.d(o,{Z:()=>l});const l=r.p+"assets/images/pdm-folder-structure-output-60019ae9ca8a5f6a64c0ab18d49a5d19.png"}}]);