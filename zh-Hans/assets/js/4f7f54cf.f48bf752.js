"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[43693],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>w});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function s(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?s(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},d=function(e){var o=l(e.components);return n.createElement(c.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,w=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return t?n.createElement(w,i(i({ref:o},d),{},{components:t})):n.createElement(w,i({ref:o},d))}));function w(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82463:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const s={title:"Bring Document to Foreground (Activate Document) Using SOLIDWORKS API",caption:"Bring Document to Foreground (Activate Document)"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/bring-document-foreground/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/bring-document-foreground/index",title:"Bring Document to Foreground (Activate Document) Using SOLIDWORKS API",description:"This example demonstrates how to use the ISldWorks::ActivateDoc3 method of the SOLIDWORKS API to bring a document selected by path to the foreground (activate it).",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/bring-document-foreground/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/bring-document-foreground",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/bring-document-foreground/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/bring-document-foreground/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/bring-document-foreground/index.md",tags:[],version:"current",frontMatter:{title:"Bring Document to Foreground (Activate Document) Using SOLIDWORKS API",caption:"Bring Document to Foreground (Activate Document)"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u786e\u5b9a\u6d3b\u52a8\u6587\u6863\u7684\u7c7b\u578b",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/active-document-type/"},next:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/documents/collect-reference-documents/"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:o,...s}=e;return(0,r.kt)(p,(0,n.Z)({},d,s,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example demonstrates how to use the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~activatedoc3.html"},"ISldWorks::ActivateDoc3")," method of the SOLIDWORKS API to bring a document selected by path to the foreground (activate it).\nlabels: ","[Activate Document, Assembly, Example, Foreground, Open Document]","\nredirect-from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/2018/03/bring-document-foreground-activate.html")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This example demonstrates how to use the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~activatedoc3.html"},"ISldWorks::ActivateDoc3")," method of the SOLIDWORKS API to bring a document selected by path to the foreground (activate it)."),(0,r.kt)("p",null,"Documents can be opened in two states, visible or hidden. Hidden documents are typically models loaded into memory from components in an assembly or drawing. In this case, when the ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html"},"ISldWorks::OpenDoc6")," method is called, the document is not automatically brought to the foreground. The same applies when closing a document that was loaded as a component: the document becomes invisible instead of closed."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the macro with no files open - a file will be opened and closed"),(0,r.kt)("li",{parentName:"ul"},"Open an assembly and run the macro. In this case, the ",(0,r.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~opendoc6.html"},"ISldWorks::OpenDoc6")," API does not force the part to the foreground, so it needs to be activated manually.")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:t(19523).Z},"Download Sample Files")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const FILE_NAME As String = "SimpleBox.SLDPRT"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Dim path As String\n    path = swApp.GetCurrentMacroPathFolder() & "\\" & FILE_NAME\n    \n    Set swModel = swApp.GetOpenDocumentByName(path)\n    \n    Dim wasVisible As Boolean\n    \n    If Not swModel Is Nothing Then\n        wasVisible = swModel.Visible\n    End If\n    \n    Set swModel = swApp.OpenDoc6(path, swDocumentTypes_e.swDocPART, swOpenDocOptions_e.swOpenDocOptions_Silent, "", 0, 0)\n    \n    If Not swModel Is Nothing Then\n        swApp.ActivateDoc3 swModel.GetTitle(), False, swRebuildOnActivation_e.swDontRebuildActiveDoc, 0\n    End If\n    \n    MsgBox "Was Visible: " & wasVisible\n    \n    If False = wasVisible Then\n        swApp.CloseDoc swModel.GetTitle\n    End If\n    \nEnd Sub\n\n\n')))}u.isMDXComponent=!0},19523:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/files/SimpleBox-380ca889be65cae6192616c4263953b0.zip"}}]);