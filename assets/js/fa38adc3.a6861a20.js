"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[87711],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(t),p=i,k=u["".concat(d,".").concat(p)]||u[p]||m[p]||l;return t?o.createElement(k,r(r({ref:n},c),{},{components:t})):o.createElement(k,r({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=p;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a[u]="string"==typeof e?e:i,r[1]=a;for(var s=2;s<l;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},67407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var o=t(87462),i=(t(67294),t(3905));const l={title:"Block model editing using SOLIDWORKS API",caption:"Block Model Editing",description:"Example demonstrate different ways of disabling the model editing",labels:["block editing","block model","example","lock","menu","solidworks api"],"redirect-from":["/2018/03/block-model-editing.html"]},r=void 0,a={unversionedId:"codestack/solidworks-api/document/block-model-editing/index",id:"codestack/solidworks-api/document/block-model-editing/index",title:"Block model editing using SOLIDWORKS API",description:"Example demonstrate different ways of disabling the model editing",source:"@site/docs/codestack/solidworks-api/document/block-model-editing/index.md",sourceDirName:"codestack/solidworks-api/document/block-model-editing",slug:"/codestack/solidworks-api/document/block-model-editing/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/block-model-editing/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/block-model-editing/index.md",tags:[],version:"current",frontMatter:{title:"Block model editing using SOLIDWORKS API",caption:"Block Model Editing",description:"Example demonstrate different ways of disabling the model editing",labels:["block editing","block model","example","lock","menu","solidworks api"],"redirect-from":["/2018/03/block-model-editing.html"]},sidebar:"tutorialSidebar",previous:{title:"Set title as part number for new file using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/auto-part-number-title/"},next:{title:"Change value of global variable in model using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/change-global-variable-value/"}},d={},s=[],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example demonstrate different ways of disabling the model editing from SOLIDWORKS API: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Blocking menu - user is not able to invoke menu commands. This feature is usually used when property manager page is displayed and there should be no commands invoked"),(0,i.kt)("li",{parentName:"ul"},"Blocking model editing - model is a view only and cannot be changed"),(0,i.kt)("li",{parentName:"ul"},"Full block - editing and view manipulations are disabled")),(0,i.kt)("p",null,"It is required to debug macro step-by-step to see the different SOLIDWORKS API functions in action."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},"Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    BlockAll\n    UnblockAll\n    \n    BlockMenusAndEdit\n    UnlockMenusAndEdit\n    \n    BlockMenu\n    UnblockMenu\n        \nEnd Sub\n\n'Block menu, buttons and any manipulations (including model rotation)\nSub BlockAll()\n    \n    'get the current blocking state if it will be required to reset\n    Dim curBlock As Integer\n    curBlock = swModel.GetBlockingState\n        \n    swModel.SetBlockingState swBlockingStates_e.swSystemBlock\n        \nEnd Sub\n\n'Block menu, buttons and any manipulations (including model rotation)\nSub UnblockAll()\n    \n    swModel.ResetBlockingState\n    \nEnd Sub\n\n'Blocks menus and edits, but allows model moving and zooming\nSub BlockMenusAndEdit()\n    \n    swModel.Lock\n    \nEnd Sub\n\nSub UnlockMenusAndEdit()\n    \n    swModel.UnLock\n    \nEnd Sub\n\n'Only blocks file related menu commands (new or save)\nSub BlockMenu()\n\n    swApp.EnableFileMenu = False\n\nEnd Sub\n\nSub UnblockMenu()\n\n    swApp.EnableFileMenu = True\n    \nEnd Sub\n\n")))}m.isMDXComponent=!0}}]);