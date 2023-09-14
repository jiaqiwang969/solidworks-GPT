"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[14002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Catch new feature creation event from SOLIDWORKS API notification",caption:"Catch New Feature Creation Event",description:"Example listens for feature added event of the active part document and displays the message box",labels:["event","example","feature manager","new feature","solidworks api"],"redirect-from":["/2018/03/solidworks-api-features-manager-catch-adding-feat-event.html"]},s=void 0,i={unversionedId:"codestack-clone/solidworks-api/document/features-manager/catch-new-feature-creation-event/index",id:"codestack-clone/solidworks-api/document/features-manager/catch-new-feature-creation-event/index",title:"Catch new feature creation event from SOLIDWORKS API notification",description:"Example listens for feature added event of the active part document and displays the message box",source:"@site/docs/codestack-clone/solidworks-api/document/features-manager/catch-new-feature-creation-event/index.md",sourceDirName:"codestack-clone/solidworks-api/document/features-manager/catch-new-feature-creation-event",slug:"/codestack-clone/solidworks-api/document/features-manager/catch-new-feature-creation-event/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/features-manager/catch-new-feature-creation-event/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/features-manager/catch-new-feature-creation-event/index.md",tags:[],version:"current",frontMatter:{title:"Catch new feature creation event from SOLIDWORKS API notification",caption:"Catch New Feature Creation Event",description:"Example listens for feature added event of the active part document and displays the message box",labels:["event","example","feature manager","new feature","solidworks api"],"redirect-from":["/2018/03/solidworks-api-features-manager-catch-adding-feat-event.html"]},sidebar:"tutorialSidebar",previous:{title:"Batch create feature folders in the active SOLIDWORKS document",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/features-manager/batch-create-folders/"},next:{title:"SOLIDWORKS API to create surface loft feature via contours",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/features-manager/contrours-surface-loft/"}},c={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example listens for feature added event of the active part document using SOLIDWORKS API."),(0,a.kt)("p",null,"Once the new feature creation notification is caught, macro displays the message box to the user."),(0,a.kt)("p",null,"The listener is detached as soon as active part is closed."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Macro Module")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\nDim swEventListener As EventListener\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swEventListener = New EventListener\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    swEventListener.SetPart swPart\n    \n    While swApp.ActiveDoc Is swPart\n        DoEvents\n    Wend\n    \nEnd Sub\n\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"EventListener Class")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vb"},'Dim WithEvents swPart As SldWorks.PartDoc\n\nPrivate Function swPart_AddItemNotify(ByVal EntityType As Long, ByVal itemName As String) As Long\n\n    If EntityType = swNotifyEntityType_e.swNotifyFeature Then\n        MsgBox itemName & " feature is added"\n    End If\n    \nEnd Function\n\nSub SetPart(part As SldWorks.PartDoc)\n    \n    Set swPart = part\n    \nEnd Sub\n')))}p.isMDXComponent=!0}}]);