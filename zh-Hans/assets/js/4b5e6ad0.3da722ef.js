"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[42867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>S});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),d=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),w=o,S=p["".concat(a,".").concat(w)]||p[w]||u[w]||s;return n?r.createElement(S,i(i({ref:t},c),{},{components:n})):r.createElement(S,i({ref:t},c))}));function S(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=w;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<s;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}w.displayName="MDXCreateElement"},90246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const s={title:"\u4f7f\u7528SOLIDWORKS\u6a21\u578bAPI\u521b\u5efa\u692d\u5706\u626b\u63cf\u4e34\u65f6\u4f53",caption:"\u521b\u5efa\u692d\u5706\u626b\u63cf\u4e34\u65f6\u4f53"},i=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-elliptical-sweep/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-elliptical-sweep/index",title:"\u4f7f\u7528SOLIDWORKS\u6a21\u578bAPI\u521b\u5efa\u692d\u5706\u626b\u63cf\u4e34\u65f6\u4f53",description:"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u5c06\u5706\u5f62\u5256\u9762\u6cbf\u692d\u5706\u8def\u5f84\u626b\u63cf\u4ee5\u521b\u5efa\u4e34\u65f6\u4f53\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-elliptical-sweep/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-elliptical-sweep",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-elliptical-sweep/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-elliptical-sweep/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-elliptical-sweep/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS\u6a21\u578bAPI\u521b\u5efa\u692d\u5706\u626b\u63cf\u4e34\u65f6\u4f53",caption:"\u521b\u5efa\u692d\u5706\u626b\u63cf\u4e34\u65f6\u4f53"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS\u6a21\u578bAPI\u521b\u5efa\u4e34\u65f6\u5706\u67f1\u9762\u677f\u4f53",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-cylindrical-surface/"},next:{title:"\u4f7f\u7528SOLIDWORKS\u6a21\u578bAPI\u521b\u5efa\u6324\u51fa\u69fd\u4e34\u65f6\u4f53",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/primitives/create-extruded-slot/"}},a={},d=[{value:"labels: \u62d3\u6251\u7ed3\u6784, \u51e0\u4f55, \u7247, \u6a21\u578b, \u7403\u4f53",id:"labels-\u62d3\u6251\u7ed3\u6784-\u51e0\u4f55-\u7247-\u6a21\u578b-\u7403\u4f53",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...s}=e;return(0,o.kt)(p,(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u5c06\u5706\u5f62\u5256\u9762\u6cbf\u692d\u5706\u8def\u5f84\u626b\u63cf\u4ee5\u521b\u5efa\u4e34\u65f6\u4f53\u3002\nimage: elliptical-sweep.png"),(0,o.kt)("h2",{id:"labels-\u62d3\u6251\u7ed3\u6784-\u51e0\u4f55-\u7247-\u6a21\u578b-\u7403\u4f53"},"labels: ","[\u62d3\u6251\u7ed3\u6784, \u51e0\u4f55, \u7247, \u6a21\u578b, \u7403\u4f53]"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u6cbf\u692d\u5706\u8def\u5f84\u626b\u63cf\u7684\u5706\u5f62\u5256\u9762",src:n(86261).Z,width:"564",height:"457"}),"{ width=250 }"),(0,o.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u5c06\u5706\u5f62\u5256\u9762\u6cbf\u692d\u5706\u8def\u5f84\u626b\u63cf\u4ee5\u521b\u5efa\u4e34\u65f6\u4f53\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IModeler~CreateSweptBody.html"},"SOLIDWORKS API\u65b9\u6cd5IModeler::CreateSweptBody"),"\u8981\u6c42\u9884\u5148\u9009\u62e9\u5256\u9762\u548c\u8def\u5f84\uff0c\u8fd9\u610f\u5473\u7740\u65e0\u6cd5\u4f7f\u7528\u66f2\u7ebf\u8fdb\u884c\u626b\u63cf\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u8be5\u5b8f\u6f14\u793a\u4e86\u5982\u4f55\u4ece\u4e34\u65f6\u7ebf\u4f53\u4e2d\u521b\u5efa\u8fb9\u7f18\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/selection/api-only-selection/"},"\u4ec5\u7528\u4e8eAPI\u7684\u5bf9\u8c61\u9009\u62e9"),"\u6280\u672f\u53ef\u4ee5\u5728\u4e0d\u663e\u793a\u4efb\u4f55\u7ebf\u4f53\u5e76\u4e14\u4e0d\u5728\u56fe\u5f62\u533a\u57df\u4e2d\u663e\u793a\u4efb\u4f55\u53ef\u89c1\u9009\u62e9\u7684\u60c5\u51b5\u4e0b\u521b\u5efa\u626b\u63cf\u4f53\u3002\u6240\u6709\u7528\u6237\u9009\u62e9\u4e5f\u5c06\u88ab\u4fdd\u7559\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6253\u5f00\u96f6\u4ef6\u6587\u6863"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u9009\u62e9\u4efb\u4f55\u5bf9\u8c61\uff08\u8fd9\u4e0d\u4f1a\u5f71\u54cd\u626b\u63cf\u64cd\u4f5c\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5b8f\u3002\u5b8f\u663e\u793a\u4e34\u65f6\u4f53\uff0c\u6240\u6709\u7528\u6237\u9009\u62e9\u7684\u5bf9\u8c61\u90fd\u5c06\u88ab\u4fdd\u7559\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u505c\u6b62\u5b8f\u7684\u6267\u884c"),(0,o.kt)("li",{parentName:"ul"},"\u7ee7\u7eed\u5b8f\u4ee5\u9690\u85cf\u9884\u89c8")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n                \n        Dim swSweptBody As SldWorks.Body2\n                \n        Dim swPath As SldWorks.Curve\n        \n        Set swPath = GetPath()\n        \n        Dim vPtOnPath As Variant\n        \n        vPtOnPath = swPath.GetClosestPointOn(0, 0, 0)\n        \n        Dim dCenter(2) As Double\n        dCenter(0) = vPtOnPath(0): dCenter(1) = vPtOnPath(1): dCenter(2) = vPtOnPath(2)\n        \n        Dim swProfile As SldWorks.Curve\n        Set swProfile = GetProfile(dCenter)\n        \n        Set swSweptBody = CreateSweptBody(swModel, swProfile, swPath)\n\n        swSweptBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n        \n        Stop\n        Set swSweptBody = Nothing\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n\nEnd Sub\n\nFunction CreateSweptBody(model As SldWorks.ModelDoc2, profile As SldWorks.Curve, path As SldWorks.Curve) As SldWorks.Body2\n    \n    Dim swModeler As SldWorks.modeler\n    Set swModeler = swApp.GetModeler\n    \n    Dim swProfileBody As SldWorks.Body2\n    Set swProfileBody = profile.CreateWireBody\n        \n    Dim swPathBody As SldWorks.Body2\n    Set swPathBody = path.CreateWireBody()\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = model.SelectionManager\n    \n    swSelMgr.SuspendSelectionList\n\n    AddToCurrentSelectionSet swSelMgr, swProfileBody.GetEdges(), 1\n    AddToCurrentSelectionSet swSelMgr, swPathBody.GetEdges(), 4\n    \n    Dim swSweptBody As SldWorks.Body2\n    Set swSweptBody = swModeler.CreateSweptBody(model, True, False, swTwistControlType_e.swTwistControlFollowPath, True, False, swTangencyType_e.swTangencyNone, swTangencyType_e.swTangencyNone, False, 0, 0, swThinWallType_e.swThinWallMidPlane, 0, 0, False)\n        \n    Set CreateSweptBody = swSweptBody\n    \n    Set swProfileBody = Nothing\n    Set swPathBody = Nothing\n    \n    swSelMgr.ResumeSelectionList\n    \nEnd Function\n\nSub AddToCurrentSelectionSet(selMgr As SldWorks.SelectionMgr, vObjects As Variant, selMark As Integer)\n    \n    Dim swSelData As SldWorks.SelectData\n    \n    Set swSelData = selMgr.CreateSelectData\n    \n    swSelData.Mark = selMark\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vObjects)\n        Dim obj As Object\n        Set obj = vObjects(i)\n        selMgr.AddSelectionListObject obj, swSelData\n    Next\n    \nEnd Sub\n\nFunction GetProfile(center As Variant) As SldWorks.Curve\n\n    Dim swModeler As SldWorks.modeler\n    Set swModeler = swApp.GetModeler\n    \n    Dim dAxis(2) As Double\n    dAxis(0) = 0: dAxis(1) = 0: dAxis(2) = 1\n    \n    Const radius As Double = 0.01\n    Dim dStartPt(2) As Double\n    dStartPt(0) = radius + center(0): dStartPt(1) = center(1): dStartPt(2) = center(2)\n    \n    Dim swProfileCurve As SldWorks.Curve\n    Set swProfileCurve = swModeler.CreateArc(center, dAxis, radius, dStartPt, dStartPt)\n    \n    Set GetProfile = swProfileCurve\n    \nEnd Function\n\nFunction GetPath() As SldWorks.Curve\n\n    Dim swModeler As SldWorks.modeler\n    Set swModeler = swApp.GetModeler\n\n    Const majorRadius As Double = 0.2\n    Const minorRadius As Double = 0.1\n    \n    Dim dCenter(2) As Double\n    dCenter(0) = 0: dCenter(1) = 0: dCenter(2) = 0\n    \n    Dim dMajorAxis(2) As Double\n    dMajorAxis(0) = 0.5: dMajorAxis(1) = 0: dMajorAxis(2) = 1\n    \n    Dim dMinorAxis(2) As Double\n    dMinorAxis(0) = 0.25: dMinorAxis(1) = 1: dMinorAxis(2) = 0\n    \n    Dim swPath As SldWorks.Curve\n    \n    Set swPath = swModeler.CreateEllipse(dCenter, majorRadius, minorRadius, dMajorAxis, dMinorAxis)\n\n    Set GetPath = swPath\n\nEnd Function\n')))}u.isMDXComponent=!0},86261:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/elliptical-sweep-f2cdc15e3633149047938f4698e37c90.png"}}]);