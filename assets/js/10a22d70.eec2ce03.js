"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[29923],{3905:(e,o,n)=>{n.d(o,{Zo:()=>d,kt:()=>u});var t=n(67294);function s(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){s(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function c(e,o){if(null==e)return{};var n,t,s=function(e,o){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||(s[n]=e[n]);return s}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=t.createContext({}),a=function(e){var o=t.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},d=function(e){var o=a(e.components);return t.createElement(l.Provider,{value:o},e.children)},p="mdxType",w={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=a(n),m=s,u=p["".concat(l,".").concat(m)]||p[m]||w[m]||r;return n?t.createElement(u,i(i({ref:o},d),{},{components:n})):t.createElement(u,i({ref:o},d))}));function u(e,o){var n=arguments,s=o&&o.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in o)hasOwnProperty.call(o,l)&&(c[l]=o[l]);c.originalType=e,c[p]="string"==typeof e?e:s,i[1]=c;for(var a=2;a<r;a++)i[a]=n[a];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68969:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>w,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=n(87462),s=(n(67294),n(3905));const r={layout:"sw-tool",title:"SOLIDWORKS Macro shows selected assembly component in the Window folder",caption:"Show Selected Assembly Component In The Window Folder",description:"Example demonstrates how to open the folder of the selected component in the assembly in the Windows File Explorer",image:"windows-folder-selected-component.svg",labels:["assembly","component","explorer","frame","macro","show in folder","solidworks","solidworks api","utility","vba"],group:"Assembly","redirect-from":["/2018/03/show-selected-assembly-component-in.html","/solidworks-api/document/assembly/show-selected-assembly-component-window-folder"]},i=void 0,c={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-selected-assembly-component-window-folder/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-selected-assembly-component-window-folder/index",title:"SOLIDWORKS Macro shows selected assembly component in the Window folder",description:"Example demonstrates how to open the folder of the selected component in the assembly in the Windows File Explorer",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-selected-assembly-component-window-folder/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-selected-assembly-component-window-folder",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-selected-assembly-component-window-folder/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-selected-assembly-component-window-folder/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-selected-assembly-component-window-folder/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"SOLIDWORKS Macro shows selected assembly component in the Window folder",caption:"Show Selected Assembly Component In The Window Folder",description:"Example demonstrates how to open the folder of the selected component in the assembly in the Windows File Explorer",image:"windows-folder-selected-component.svg",labels:["assembly","component","explorer","frame","macro","show in folder","solidworks","solidworks api","utility","vba"],group:"Assembly","redirect-from":["/2018/03/show-selected-assembly-component-in.html","/solidworks-api/document/assembly/show-selected-assembly-component-window-folder"]},sidebar:"tutorialSidebar",previous:{title:"Show Edit Material dialog using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-edit-material-dialog/"},next:{title:"VBA Macro calls Show All Components command from SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-with-dependents/"}},l={},a=[],d={toc:a},p="wrapper";function w(e){let{components:o,...r}=e;return(0,s.kt)(p,(0,t.Z)({},d,r,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This macro demonstrates how to open the folder of the selected component in the assembly in the Windows File Explorer using SOLIDWORKS API."),(0,s.kt)("p",null,"The component's file will be preselected in the opened window."),(0,s.kt)("p",null,"This macro will produce similar results to the following manual steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Open component in its own window"),(0,s.kt)("li",{parentName:"ol"},"Go to File Menu"),(0,s.kt)("li",{parentName:"ol"},"Select the file from the Open Recent"),(0,s.kt)("li",{parentName:"ol"},'Select "Show In Folder" option')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Open Recent file menu command",src:n(66647).Z,width:"320",height:"69"}),"{ width=320 height=69 }"),(0,s.kt)("p",null,"If none of the components selected then the path of active model will be opened."),(0,s.kt)("p",null,"Watch ",(0,s.kt)("a",{parentName:"p",href:"https://youtu.be/9uZCecGg25I?t=266"},"video demonstration")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\nDim swComp As SldWorks.Component2\n\nSub main()\n\n    On Error Resume Next\n    \n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swSelMgr = swModel.SelectionManager\n        \n        Set swComp = swSelMgr.GetSelectedObjectsComponent3(1, -1)\n\n        Dim path As String\n        \n        If Not swComp Is Nothing Then\n            path = swComp.GetPathName\n        Else\n            path = swModel.GetPathName\n        End If\n        \n        If path <> "" Then\n            Shell "explorer.exe /select, " & """" & path & """"\n        Else\n            MsgBox "Model is not saved"\n        End If\n    \n    Else\n        MsgBox "Please open assembly document and select the component"\n    End If\n    \nEnd Sub\n\n')))}w.isMDXComponent=!0},66647:(e,o,n)=>{n.d(o,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAABFCAMAAAAM9M+fAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAO/OPQAAVdfp3mqty4VgTyUnLc62cdz+/uLat4aEkTx+m+4vMv/0XL6zZn/K6McAAKJ5VZmUkencfdTw/OKqq7C0u8nKyv/83FtAVHp6f/b29onX9+W5Bf39/fj39vL296GpqIVSI8/MsuVfX4KPq4d5erSbk2mBqPXrycXe4NDRzsm5qqaJefG3t6qqqpKzzgB2pri5uWBnh9Tc1bnM0uzg1IuLi/fU1Pvy0Ozo2keNr9nZ2NPe6mOgvqNzIL2Uh4iSmJ6KpcCvos3Lvtaeno2evMnDwbrAyHhiaMjV5EJkfmOCmzlLW7jN2s21naaUbIhvcPPt4+Lc1WeTsI2uwaK5z6nA0Pb36uXs8u3y8/nY2fry4tre49zc3OPczuvbyKXP2ne92r+ZIpuLgKuTg83R2IuQoZZ+ebislnhufrjc9JqcqaSUmFN9kvr59u0AANzKu4mcqZ1uQ7/b5HZ9mexKSsC/wNrj7JiGaeXp7F9EK8HQ31xkcZKElb60qwNTfsytk3qTo9eqqrGxsgAAS9W5uZ6qv9/IyOTg3eO+myNffdvq8+TLqdbW1rORc67D3Mrb6vTw7FeZt36svanN8fb49fXp6ffgwerQZZOTlff4+OTRvt/f3/Pk1K2Zi29vkYOHnnySup+/3Z+xznSJpYiDh8Chf8arirbL4trT0NK9ounk35NzaUVzkpOer3icr3mLlnZycpuem7ekmuXy+pOmy+zr67vD0tPV2z4zPZKBh9/Ls3lXPqGgodbAq+qdnrLBz6uimcvN0KSIiKmBZuz1/MfBtIeXhrKOAFt9n9Ha5fXg4KibfMPN0V93i+Lk5tji2e8ME9vr/JOZl+LaxGFcYJiOjHJ+ir+hita2jp6rtPXp2vvy6qG0wW50d7Sup5mjt4+ao8ng+fHw8da7QMXGxn2LsoxuWsPBvI2TrId5h72cccGsmQkJGt7Tyqu8xdHMyb+3sv766rnU5YmhtOv6/trOwilrjKWclHijwtLFutHk8dO/suvn5QAAAJq63QgAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAATPUlEQVR4XtWcC1xTR77H7a3dVuzdVq8Vr9n9J2zrowUXLlVYlXh1saBosYZKmmzA2JWHz1PYUjAbtbq5emkhlKjVMgSkKIrEgiUYKDQUUNwtFeMFReVRxRSfLAoCRTGfnZlzQEqwV5HU+NOcM3NmTs7km/9/Zv5zThgGjoZgrX2qycyzcznzEAZo0nJZOxNy5CEuaZ9CyNnAIwANYJ9ytLJARIkihPhWaEkRfuEy+qKHuJcNhIBPtmp304AAdSYBl+qRQavgUr+grAAijYJgqteaeIYeMoh8Eh4PtxnxdRKk0UoYi1ZKDxoYfIaAFuN63H5oJBAjhgBMCh4I4N1sX4cOLs1pcclxPy7ZozuIS9hCTWTTHyASHV8AfCQ6OM0l9CqpQFrQIgRcBPJLUxJdtk5UpLburnd32VzOB6jfjYs3kWYz+NXKkR4KAUhn3hZgUycAtdH9AdYtBCgKPGb0FNbrc4UuYWcwzMLyYmWdMalD7llrDkkd05ydpv3dkv5mOoQaFo031hZYvwF4sD8TICUb9KP9PXLnxIw6oUAImKPPTQ+b0xG/JBKur4I2zzymOeN9B2iunh+jXzM+pniz8a9iAnpIBG6zZs4MVGD7JgAtVgDl2/HrsP6irH1Tu/ft5otZuMEHq7Mh4cbZhpoOZp9b1pIjF8+9djaPq28LDXPEG2uAokIMMCGRQSkXihYe+9Z8IERc5A9oRrRXeIfsWhhKTquF/TugOBBkE2M0USntECI8Kpwe2bwDjpQPmQUy0pn/5U86wfu4MLHA4k/0VW3tCWKtdEXVR+nYAjumxIx6zZTiADDqfS1aU3Vu2b5yrr4t5Ew2A1ogH85+gi3wwqIlWsmihmZxMQYoUluOPvdqI7bAhkhIGHPq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"}}]);