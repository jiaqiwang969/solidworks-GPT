"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[75228],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>u});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=t.createContext({}),c=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,u=p["".concat(d,".").concat(f)]||p[f]||m[f]||i;return r?t.createElement(u,a(a({ref:n},l),{},{components:r})):t.createElement(u,a({ref:n},l))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63119:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const i={layout:"sw-tool",title:"VBA macro to open referenced document of the drawing view",caption:"Open Drawing View Referenced Document",description:"VBA macro opens the document referenced by the selected drawing view in the referenced configuration and display state",image:"ref-doc-display-state.svg",labels:["drawing","reference","display state"],group:"Drawing"},a=void 0,s={unversionedId:"codestack/solidworks-api/document/drawing/open-referenced-model/index",id:"codestack/solidworks-api/document/drawing/open-referenced-model/index",title:"VBA macro to open referenced document of the drawing view",description:"VBA macro opens the document referenced by the selected drawing view in the referenced configuration and display state",source:"@site/docs/codestack/solidworks-api/document/drawing/open-referenced-model/index.md",sourceDirName:"codestack/solidworks-api/document/drawing/open-referenced-model",slug:"/codestack/solidworks-api/document/drawing/open-referenced-model/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/drawing/open-referenced-model/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/drawing/open-referenced-model/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"VBA macro to open referenced document of the drawing view",caption:"Open Drawing View Referenced Document",description:"VBA macro opens the document referenced by the selected drawing view in the referenced configuration and display state",image:"ref-doc-display-state.svg",labels:["drawing","reference","display state"],group:"Drawing"},sidebar:"tutorialSidebar",previous:{title:"Open associated drawings of active document or selected components",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/drawing/open-associated-drawing/"},next:{title:"Macro propagates configurations of the referenced document to sheets in the SOLIDWORKS drawings",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/drawing/propagate-configurations-sheets/"}},d={},c=[],l={toc:c},p="wrapper";function m(e){let{components:n,...i}=e;return(0,o.kt)(p,(0,t.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This VBA macro performs similar operation to ",(0,o.kt)("strong",{parentName:"p"},"Open assembly command")," on the selected SOLIDWORKS drawing view, but also activates the referenced display state associated with the drawing view."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open assembly command",src:r(80029).Z,width:"222",height:"96"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swSelMgr As SldWorks.SelectionMgr\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swView As SldWorks.View\n        \n        Set swView = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swView Is Nothing Then\n        \n            Dim swRefDoc As SldWorks.ModelDoc2\n            Set swRefDoc = swView.ReferencedDocument\n            \n            If swRefDoc Is Nothing Then\n                Err.Raise vbError, "", "Drawing view model is not loaded"\n            End If\n            \n            swRefDoc.ShowConfiguration2 swView.ReferencedConfiguration\n            \n            Dim swConf As SldWorks.Configuration\n            Set swConf = swRefDoc.GetConfigurationByName(swView.ReferencedConfiguration)\n            \n            swConf.ApplyDisplayState swView.DisplayState\n            \n            swRefDoc.Visible = True\n            \n        Else\n            Err.Raise vbError, "", "Select drawing view"\n        End If\n        \n    Else\n        Err.Raise vbError, "", "No active documents"\n    End If\n    \nEnd Sub\n')))}m.isMDXComponent=!0},80029:(e,n,r)=>{r.d(n,{Z:()=>t});const t="data:image/png;base64,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"}}]);