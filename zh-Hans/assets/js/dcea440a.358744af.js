"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[27391],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return t?o.createElement(f,i(i({ref:r},d),{},{components:t})):o.createElement(f,i({ref:r},d))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[p]="string"==typeof e?e:n,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14593:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(87462),n=(t(67294),t(3905));const s={title:"\u4f7f\u7528SOLIDWORKS\u6a21\u578bAPI\u521b\u5efa\u4e34\u65f6\u73af\u9762\u7247\u4f53",image:"toroidal-surface.png",labels:["\u62d3\u6251\u7ed3\u6784","\u51e0\u4f55","\u7247\u4f53","\u6a21\u578b","\u5706\u67f1\u4f53"]},i=void 0,a={unversionedId:"codestack/solidworks-api/geometry/primitives/create-toroidal-surface/index",id:"codestack/solidworks-api/geometry/primitives/create-toroidal-surface/index",title:"\u4f7f\u7528SOLIDWORKS\u6a21\u578bAPI\u521b\u5efa\u4e34\u65f6\u73af\u9762\u7247\u4f53",description:"\u73af\u9762\u7247\u4f53",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/geometry/primitives/create-toroidal-surface/index.md",sourceDirName:"codestack/solidworks-api/geometry/primitives/create-toroidal-surface",slug:"/codestack/solidworks-api/geometry/primitives/create-toroidal-surface/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/primitives/create-toroidal-surface/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/primitives/create-toroidal-surface/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS\u6a21\u578bAPI\u521b\u5efa\u4e34\u65f6\u73af\u9762\u7247\u4f53",image:"toroidal-surface.png",labels:["\u62d3\u6251\u7ed3\u6784","\u51e0\u4f55","\u7247\u4f53","\u6a21\u578b","\u5706\u67f1\u4f53"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS\u6a21\u578bAPI\u521b\u5efa\u4e34\u65f6\u7403\u9762\u7247\u4f53",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/primitives/create-spherical-surface/"},next:{title:"\u5c04\u7ebf\u4ea4\u70b9",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/ray-intersection/"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:r,...s}=e;return(0,n.kt)(p,(0,o.Z)({},d,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u73af\u9762\u7247\u4f53",src:t(3955).Z,width:"260",height:"282"})),(0,n.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u4ece\u73af\u9762\u521b\u5efa\u7247\u4f53\u3002"),(0,n.kt)("p",null,"\u51e0\u4f55\u4f53\u662f\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler~createtoroidalsurface.html"},"SOLIDWORKS API\u7684IModeler::CreateToroidalSurface"),"\u65b9\u6cd5\u521b\u5efa\u7684\u3002"),(0,n.kt)("p",null,"\u8fd0\u884c\u5b8f\u540e\uff0c\u5c06\u663e\u793a\u4e34\u65f6\u7247\u4f53\u3002\u53ef\u4ee5\u65cb\u8f6c\u548c\u9009\u62e9\u8be5\u7247\u4f53\uff0c\u4f46\u5b83\u4e0d\u4f1a\u663e\u793a\u5728\u7279\u5f81\u6811\u4e2d\u3002\u7ee7\u7eed\u6267\u884c\u5b8f\u4ee5\u9500\u6bc1\u8be5\u7247\u4f53\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swModeler As SldWorks.Modeler\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swModeler = swApp.GetModeler\n    \n        Dim dCenter(2) As Double\n        Dim dAxis(2) As Double\n        Dim dRef(2) As Double\n        \n        Const MAJOR_RADIUS As Double = 0.1\n        Const MINOR_RADIUS As Double = 0.05\n        \n        dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0\n        dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n        dRef(0) = 1: dRef(1) = 0: dRef(2) = 0\n        \n        Dim swSurf As SldWorks.Surface\n        Set swSurf = swModeler.CreateToroidalSurface(dCenter, dAxis, dRef, MAJOR_RADIUS, MINOR_RADIUS)\n        \n        Dim swBody As SldWorks.Body2\n        Dim swCurve(0) As SldWorks.Curve\n        Set swBody = swSurf.CreateTrimmedSheet(swCurve)\n        \n        swBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectable\n    \n        Stop \'\u7ee7\u7eed\u9690\u85cf\u7247\u4f53\n        \n        Set swBody = Nothing\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u96f6\u4ef6\u6587\u6863"\n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0},3955:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/toroidal-surface-c6a88ca5af61da126e6605690970e978.png"}}]);