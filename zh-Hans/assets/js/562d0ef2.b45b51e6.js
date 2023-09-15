"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[32349],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>w});var s=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,s,n=function(e,t){if(null==e)return{};var o,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=s.createContext({}),p=function(e){var t=s.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,w=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return o?s.createElement(w,i(i({ref:t},c),{},{components:o})):s.createElement(w,i({ref:t},c))}));function w(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:n,i[1]=a;for(var p=2;p<r;p++)i[p]=o[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,o)}m.displayName="MDXCreateElement"},51255:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var s=o(87462),n=(o(67294),o(3905));const r={title:"\u83b7\u53d6SOLIDWORKS\u7ec4\u4ef6\u5728\u88c5\u914d\u4f53\u4e2d\u7684\u91cd\u5fc3",image:"mass-property.png",labels:["\u88c5\u914d\u4f53","\u7ec4\u4ef6","\u91cd\u5fc3","\u8d28\u5fc3","\u91cd\u529b\u4e2d\u5fc3"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-cog/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-cog/index",title:"\u83b7\u53d6SOLIDWORKS\u7ec4\u4ef6\u5728\u88c5\u914d\u4f53\u4e2d\u7684\u91cd\u5fc3",description:"\u8fd9\u4e2a\u5b8f\u6f14\u793a\u4e86\u4e24\u79cd\u65b9\u6cd5\u6765\u627e\u5230\u7ec4\u4ef6\u76f8\u5bf9\u4e8e\u88c5\u914d\u4f53\u5750\u6807\u7cfb\u7684\u91cd\u5fc3\uff08COG\uff09\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-cog/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-cog",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-cog/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-cog/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-cog/index.md",tags:[],version:"current",frontMatter:{title:"\u83b7\u53d6SOLIDWORKS\u7ec4\u4ef6\u5728\u88c5\u914d\u4f53\u4e2d\u7684\u91cd\u5fc3",image:"mass-property.png",labels:["\u88c5\u914d\u4f53","\u7ec4\u4ef6","\u91cd\u5fc3","\u8d28\u5fc3","\u91cd\u529b\u4e2d\u5fc3"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u6839\u636e\u540d\u79f0\u83b7\u53d6\u7ec4\u4ef6\u6307\u9488",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-by-name/"},next:{title:"Get the transformation matrix of coordinate system using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/get-coordinate-system-transform/"}},l={},p=[{value:"\u8f6c\u6362\u5750\u6807",id:"\u8f6c\u6362\u5750\u6807",level:2},{value:"\u4f7f\u7528IMassProperty\u63a5\u53e3",id:"\u4f7f\u7528imassproperty\u63a5\u53e3",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8fd9\u4e2a\u5b8f\u6f14\u793a\u4e86\u4e24\u79cd\u65b9\u6cd5\u6765\u627e\u5230\u7ec4\u4ef6\u76f8\u5bf9\u4e8e\u88c5\u914d\u4f53\u5750\u6807\u7cfb\u7684\u91cd\u5fc3\uff08COG\uff09\u3002"),(0,n.kt)("p",null,"\u5b8f\u5c06\u8ba1\u7b97\u6240\u9009\u7ec4\u4ef6\u7684\u91cd\u5fc3\u3002"),(0,n.kt)("h2",{id:"\u8f6c\u6362\u5750\u6807"},"\u8f6c\u6362\u5750\u6807"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension~GetMassProperties2.html"},"IModelDocExtension::GetMassProperties2")," API\u5141\u8bb8\u5728\u6a21\u578b\u4e2d\u8ba1\u7b97\u8d28\u91cf\u5c5e\u6027\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u5f53\u5728\u7ec4\u4ef6\u7684\u6a21\u578b\u7ea7\u522b\u4e0a\u8ba1\u7b97\u65f6\uff0c\u9700\u8981\u4f7f\u7528\u53d8\u6362\u5c06\u5750\u6807\u8f6c\u6362\u4e3a\u88c5\u914d\u4f53\u7a7a\u95f4\uff0c\u4ee5\u8fbe\u5230\u6240\u9700\u7684\u7ed3\u679c\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swModel = swApp.ActiveDoc\n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swComp As SldWorks.Component2\n    \n    Set swComp = swSelMgr.GetSelectedObjectsComponent3(1, -1)\n    \n    Dim swCompModel As SldWorks.ModelDoc2\n    Set swCompModel = swComp.GetModelDoc2\n    \n    Const ACCURACY_DEFAULT As Integer = 1\n    Dim status As swMassPropertiesStatus_e\n    \n    Dim vMassPrps As Variant\n    vMassPrps = swCompModel.Extension.GetMassProperties2(ACCURACY_DEFAULT, status, False)\n    \n    Dim dCog(2) As Double\n    \n    dCog(0) = vMassPrps(0): dCog(1) = vMassPrps(1): dCog(2) = vMassPrps(2)\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dCog)\n    \n    Set swMathPt = swMathPt.MultiplyTransform(swComp.Transform2)\n    \n    Dim vCog As Variant\n    vCog = swMathPt.ArrayData\n    \n    Debug.Print "COG: " & vCog(0) & "; " & vCog(1) & "; " & vCog(2)\n    \nEnd Sub\n')),(0,n.kt)("h2",{id:"\u4f7f\u7528imassproperty\u63a5\u53e3"},"\u4f7f\u7528IMassProperty\u63a5\u53e3"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/English/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IMassProperty.html"},"IMassProperty"),"\u63a5\u53e3\u6a21\u62df\u4e86SOLIDWORKS\u4e2d\u7684\u8d28\u91cf\u5c5e\u6027\u529f\u80fd\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u8d28\u91cf\u5c5e\u6027\u5bf9\u8bdd\u6846",src:o(66461).Z,width:"486",height:"719"}),"{ width=400 }"),(0,n.kt)("p",null,"\u4e0eUI\u7b49\u6548\u65b9\u6cd5\u7c7b\u4f3c\uff0c\u53ef\u4ee5\u4e3a\u8ba1\u7b97\u8303\u56f4\u5206\u914d\u4f53\uff08\u5305\u62ec\u7ec4\u4ef6\u4f53\uff09\u3002"),(0,n.kt)("p",null,"\u4e0e\u524d\u4e00\u79cd\u65b9\u6cd5\u76f8\u6bd4\uff0c\u8fd9\u79cd\u65b9\u6cd5\u7684\u4e3b\u8981\u4f18\u70b9\u4e4b\u4e00\u662f\u53ef\u4ee5\u8ba1\u7b97\u8f7b\u91cf\u7ea7\u7ec4\u4ef6\u7684\u91cd\u5fc3\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swModel = swApp.ActiveDoc\n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swComp As SldWorks.Component2\n    \n    Set swComp = swSelMgr.GetSelectedObjectsComponent3(1, -1)\n    \n    Dim swMassPrps As SldWorks.MassProperty\n    Set swMassPrps = swModel.Extension.CreateMassProperty()\n    \n    Dim vCompBodies As Variant\n    vCompBodies = swComp.GetBodies3(swBodyType_e.swSolidBody, Empty)\n    \n    If False <> swMassPrps.AddBodies(vCompBodies) Then\n    \n        Dim vCog As Variant\n        vCog = swMassPrps.CenterOfMass\n        \n        Debug.Print "COG: " & vCog(0) & "; " & vCog(1) & "; " & vCog(2)\n    \n    Else\n        Err.Raise vbError, "", "Failed to add bodies for calculation"\n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0},66461:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"assets/images/mass-property-57bbbbc800e4a450f4f28365bacb9409.png"}}]);