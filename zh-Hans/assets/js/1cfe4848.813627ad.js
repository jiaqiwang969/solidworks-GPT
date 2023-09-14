"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[4629],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>w});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=n.createContext({}),l=function(e){var o=n.useContext(a),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},d=function(e){var o=l(e.components);return n.createElement(a.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,w=p["".concat(a,".").concat(m)]||p[m]||u[m]||i;return t?n.createElement(w,s(s({ref:o},d),{},{components:t})):n.createElement(w,s({ref:o},d))}));function w(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var c={};for(var a in o)hasOwnProperty.call(o,a)&&(c[a]=o[a]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54056:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const i={title:"Bring document foreground (activate document) using SOLIDWORKS API",caption:"Bring Document Foreground (Activate Document)",description:"Example demonstrates how to bring the document selected by path to foreground (make active)",labels:["activate doc","assembly","example","foreground","open document"],"redirect-from":["/2018/03/bring-document-foreground-activate.html"]},s=void 0,c={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/bring-document-foreground/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/bring-document-foreground/index",title:"Bring document foreground (activate document) using SOLIDWORKS API",description:"Example demonstrates how to bring the document selected by path to foreground (make active)",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/bring-document-foreground/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/bring-document-foreground",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/bring-document-foreground/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/bring-document-foreground/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/bring-document-foreground/index.md",tags:[],version:"current",frontMatter:{title:"Bring document foreground (activate document) using SOLIDWORKS API",caption:"Bring Document Foreground (Activate Document)",description:"Example demonstrates how to bring the document selected by path to foreground (make active)",labels:["activate doc","assembly","example","foreground","open document"],"redirect-from":["/2018/03/bring-document-foreground-activate.html"]},sidebar:"tutorialSidebar",previous:{title:"Determine the type Of active document using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/active-document-type/"},next:{title:"Macro to collect all reference documents of assembly into a folder",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/documents/collect-reference-documents/"}},a={},l=[],d={toc:l},p="wrapper";function u(e){let{components:o,...i}=e;return(0,r.kt)(p,(0,n.Z)({},d,i,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example demonstrates how to bring the document selected by path to foreground (make active) using ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~activatedoc3.html"},"ISldWorks::ActivateDoc3")," SOLIDWORKS API."),(0,r.kt)("p",null,"Document can be opened in 2 states (visible or hidden). Hidden document are usually models which are loaded into the memory from the components in the assembly or drawing. In this case when ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html"},"ISldWorks::OpenDoc6")," method is called the document will not be brought foreground automatically. Similar scenario applies to closing the document which is loaded as a component: document will be made invisible rather than closed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the macro when no files are opened - file will be opened and closed"),(0,r.kt)("li",{parentName:"ul"},"Open assembly and run the macro. In this case ",(0,r.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html"},"ISldWorks::OpenDoc6")," API doesn't force the part to be brought foreground, so it is required to force activate it.")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:t(86989).Z},"Download sample files")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILE_NAME As String = "SimpleBox.SLDPRT"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Dim path As String\n    path = swApp.GetCurrentMacroPathFolder() & "\\" & FILE_NAME\n    \n    Set swModel = swApp.GetOpenDocumentByName(path)\n    \n    Dim wasVisible As Boolean\n    \n    If Not swModel Is Nothing Then\n        wasVisible = swModel.Visible\n    End If\n    \n    Set swModel = swApp.OpenDoc6(path, swDocumentTypes_e.swDocPART, swOpenDocOptions_e.swOpenDocOptions_Silent, "", 0, 0)\n    \n    If Not swModel Is Nothing Then\n        swApp.ActivateDoc3 swModel.GetTitle(), False, swRebuildOnActivation_e.swDontRebuildActiveDoc, 0\n    End If\n    \n    MsgBox "Was Visible: " & wasVisible\n    \n    If False = wasVisible Then\n        swApp.CloseDoc swModel.GetTitle\n    End If\n    \nEnd Sub\n\n\n')))}u.isMDXComponent=!0},86989:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/files/SimpleBox-380ca889be65cae6192616c4263953b0.zip"}}]);