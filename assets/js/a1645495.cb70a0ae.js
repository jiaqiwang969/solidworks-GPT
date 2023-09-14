"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[50309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Catch new feature creation event from SOLIDWORKS API notification",caption:"Catch New Feature Creation Event",description:"Example listens for feature added event of the active part document and displays the message box",labels:["event","example","feature manager","new feature","solidworks api"],"redirect-from":["/2018/03/solidworks-api-features-manager-catch-adding-feat-event.html"]},i=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/catch-new-feature-creation-event/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/catch-new-feature-creation-event/index",title:"Catch new feature creation event from SOLIDWORKS API notification",description:"Example listens for feature added event of the active part document and displays the message box",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/catch-new-feature-creation-event/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/catch-new-feature-creation-event",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/catch-new-feature-creation-event/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/catch-new-feature-creation-event/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/catch-new-feature-creation-event/index.md",tags:[],version:"current",frontMatter:{title:"Catch new feature creation event from SOLIDWORKS API notification",caption:"Catch New Feature Creation Event",description:"Example listens for feature added event of the active part document and displays the message box",labels:["event","example","feature manager","new feature","solidworks api"],"redirect-from":["/2018/03/solidworks-api-features-manager-catch-adding-feat-event.html"]},sidebar:"tutorialSidebar",previous:{title:"VBA macro to capture SOLIDWORKS commands via API event handlers",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/capture-commands/"},next:{title:"Change apply appearance option in material using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-apply-appearance/"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example listens for feature added event of the active part document using SOLIDWORKS API."),(0,o.kt)("p",null,"Once the new feature creation notification is caught, macro displays the message box to the user."),(0,o.kt)("p",null,"The listener is detached as soon as active part is closed."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Macro Module")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\nDim swEventListener As EventListener\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swEventListener = New EventListener\n    \n    Dim swPart As SldWorks.PartDoc\n    \n    Set swPart = swApp.ActiveDoc\n    \n    swEventListener.SetPart swPart\n    \n    While swApp.ActiveDoc Is swPart\n        DoEvents\n    Wend\n    \nEnd Sub\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"EventListener Class")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim WithEvents swPart As SldWorks.PartDoc\n\nPrivate Function swPart_AddItemNotify(ByVal EntityType As Long, ByVal itemName As String) As Long\n\n    If EntityType = swNotifyEntityType_e.swNotifyFeature Then\n        MsgBox itemName & " feature is added"\n    End If\n    \nEnd Function\n\nSub SetPart(part As SldWorks.PartDoc)\n    \n    Set swPart = part\n    \nEnd Sub\n')))}u.isMDXComponent=!0}}]);