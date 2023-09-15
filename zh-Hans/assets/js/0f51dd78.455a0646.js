"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[76090],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),l=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return o.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},w=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),w=n,g=d["".concat(c,".").concat(w)]||d[w]||u[w]||s;return t?o.createElement(g,a(a({ref:r},p),{},{components:t})):o.createElement(g,a({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=w;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:n,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}w.displayName="MDXCreateElement"},2100:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=t(87462),n=(t(67294),t(3905));const s={layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5347\u7ea7\u6d3b\u52a8SOLIDWORKS\u96f6\u4ef6\u6216\u88c5\u914d\u4e2d\u7684\u7f8e\u5316\u87ba\u7eb9",image:"upgrade-cosmetic-thread.png",labels:["api","\u5347\u7ea7","\u6027\u80fd","\u7f8e\u5316\u87ba\u7eb9"],group:"\u6027\u80fd"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/upgrade-cosmetic-threads/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/upgrade-cosmetic-threads/index",title:"\u4f7f\u7528SOLIDWORKS API\u5347\u7ea7\u6d3b\u52a8SOLIDWORKS\u96f6\u4ef6\u6216\u88c5\u914d\u4e2d\u7684\u7f8e\u5316\u87ba\u7eb9",description:"\u5347\u7ea7\u7f8e\u5316\u87ba\u7eb9\u547d\u4ee4{ width=500 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/upgrade-cosmetic-threads/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/upgrade-cosmetic-threads",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/upgrade-cosmetic-threads/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/upgrade-cosmetic-threads/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/upgrade-cosmetic-threads/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5347\u7ea7\u6d3b\u52a8SOLIDWORKS\u96f6\u4ef6\u6216\u88c5\u914d\u4e2d\u7684\u7f8e\u5316\u87ba\u7eb9",image:"upgrade-cosmetic-thread.png",labels:["api","\u5347\u7ea7","\u6027\u80fd","\u7f8e\u5316\u87ba\u7eb9"],group:"\u6027\u80fd"},sidebar:"tutorialSidebar",previous:{title:"\u5347\u7ea7\u9057\u7559\u81ea\u5b9a\u4e49\u5c5e\u6027",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/update-legacy/"},next:{title:"\u5728SOLIDWORKS API\u4e2d\u4f7f\u7528\u8fdb\u5ea6\u6761\u5904\u7406\u957f\u65f6\u95f4\u64cd\u4f5c\u8fdb\u5ea6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/user-progress-bar/"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:r,...s}=e;return(0,n.kt)(d,(0,o.Z)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5347\u7ea7\u7f8e\u5316\u87ba\u7eb9\u547d\u4ee4",src:t(5828).Z,width:"526",height:"566"}),"{ width=500 }"),(0,n.kt)("p",null,"\u6b64\u5b8f\u5728SOLIDWORKS\u96f6\u4ef6\u548c\u88c5\u914d\u4e2d\u8c03\u7528",(0,n.kt)("em",{parentName:"p"},"\u5347\u7ea7\u7f8e\u5316\u87ba\u7eb9\u7279\u5f81"),"\u547d\u4ee4\uff0c\u53ef\u4ee5\u63d0\u9ad8\u6587\u6863\u7684\u6027\u80fd\u3002"),(0,n.kt)("p",null,"\u6b64\u5b8f\u53ef\u4e0e",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/English/SolidWorks/sldworks/c_SOLIDWORKS_Task_Scheduler_Overview.htm"},"SOLIDWORKS\u4efb\u52a1\u8ba1\u5212\u7a0b\u5e8f"),"\u6216",(0,n.kt)("a",{parentName:"p",href:"https://cadplus.xarial.com/batch/"},"Batch+"),"\u7b49\u4efb\u52a1\u81ea\u52a8\u5316\u8f6f\u4ef6\u4e00\u8d77\u4f7f\u7528\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Dim allowUpgrade As Boolean\n    allowUpgrade = swApp.GetUserPreferenceToggle(swUserPreferenceToggle_e.swEnableAllowCosmeticThreadsUpgrade)\n\ntry:\n    On Error GoTo catch\n    \n    Set swModel = swApp.ActiveDoc\n        \n    If Not swModel Is Nothing Then\n                \n        swApp.SetUserPreferenceToggle swUserPreferenceToggle_e.swEnableAllowCosmeticThreadsUpgrade, True\n        \n        If False = swModel.Extension.UpgradeLegacyCThreads() Then\n            Debug.Print "\u87ba\u7eb9\u672a\u5347\u7ea7"\n        End If\n            \n    Else\n        Err.Raise vbError, "", "\u8bf7\u6253\u5f00\u6587\u6863"\n    End If\n    \n    GoTo finally\n    \ncatch:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally:\n    \n    swApp.SetUserPreferenceToggle swUserPreferenceToggle_e.swEnableAllowCosmeticThreadsUpgrade, allowUpgrade\n\nEnd Sub\n')))}u.isMDXComponent=!0},5828:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/upgrade-cosmetic-thread-c84c84d34b28bbdea45a32a114b84f29.png"}}]);