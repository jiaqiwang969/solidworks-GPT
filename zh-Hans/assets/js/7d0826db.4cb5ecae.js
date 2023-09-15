"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[39376],{3905:(e,n,o)=>{o.d(n,{Zo:()=>m,kt:()=>g});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=t.createContext({}),l=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},m=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(o),p=r,g=d["".concat(c,".").concat(p)]||d[p]||u[p]||a;return o?t.createElement(g,i(i({ref:n},m),{},{components:o})):t.createElement(g,i({ref:n},m))}));function g(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},96362:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=o(87462),r=(o(67294),o(3905));const a={title:"Toggle Show Comment Indicator option using SOLIDWORKS API",caption:"Toggle Show Comment Indicator option"},i=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/toggle-show-comment-indicator/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/toggle-show-comment-indicator/index",title:"Toggle Show Comment Indicator option using SOLIDWORKS API",description:"VBA macro to turn On and Off the Show Comment Indicator option of Feature Manager tree using SOLIDWORKS API and Windows API",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/toggle-show-comment-indicator/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/toggle-show-comment-indicator",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/toggle-show-comment-indicator/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/toggle-show-comment-indicator/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/toggle-show-comment-indicator/index.md",tags:[],version:"current",frontMatter:{title:"Toggle Show Comment Indicator option using SOLIDWORKS API",caption:"Toggle Show Comment Indicator option"},sidebar:"tutorialSidebar",previous:{title:"Macro to toggle the scroll item into view option in SOLIDWORKS documents",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/toggle-scroll-into-view/"},next:{title:"Traverse feature manager nodes using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/features-manager/traverse-feature-nodes/"}},c={},l=[{value:"labels: winapi,comments",id:"labels-winapicomments",level:2}],m={toc:l},d="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"VBA macro to turn On and Off the Show Comment Indicator option of Feature Manager tree using SOLIDWORKS API and Windows API\nimage: show-comment-indicator-command.png"),(0,r.kt)("h2",{id:"labels-winapicomments"},"labels: ","[winapi,comments]"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Show Comments Indicator command",src:o(64687).Z,width:"874",height:"571"}),"{ width=350 }"),(0,r.kt)("p",null,"This VBA macro uses the combination of SOLIDWORKS API and Windows API to toggle the 'Show Comment Indicator' option in Feature Manager tree which is currently not available in SOLIDWORKS API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Const WM_COMMAND As Long = &H111\n    Const SHOW_COMMENT_INDICATOR As Long = 56000\n    \n    Set swApp = Application.SldWorks\n        \n    Dim swFrame As SldWorks.Frame\n    \n    Set swFrame = swApp.Frame\n    \n    SendMessage swFrame.GetHWnd(), WM_COMMAND, SHOW_COMMENT_INDICATOR, 0\n    \nEnd Sub\n')))}u.isMDXComponent=!0},64687:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/show-comment-indicator-command-775cb5a97f5df83c621cb0151bf4a9ea.png"}}]);