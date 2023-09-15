"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[95533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>w,kt:()=>m});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},w=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,w=a(e,["components","mdxType","originalType","parentName"]),d=c(n),u=s,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?i.createElement(m,o(o({ref:t},w),{},{components:n})):i.createElement(m,o({ref:t},w))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:s,o[1]=a;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=n(87462),s=(n(67294),n(3905));const r={title:"\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u5b9e\u4f53",caption:"\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u5b9e\u4f53"},o=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/drawing-view-entities/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/drawing-view-entities/index",title:"\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u5b9e\u4f53",description:"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u5b9e\u4f53\uff08\u4f8b\u5982\u8fb9\u3001\u9762\u3001\u9876\u70b9\uff09\u7684\u4e0d\u540c\u65b9\u6cd5\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/drawing-view-entities/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/drawing-view-entities",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/drawing-view-entities/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/drawing-view-entities/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/drawing-view-entities/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u5b9e\u4f53",caption:"\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u5b9e\u4f53"},sidebar:"tutorialSidebar",previous:{title:"\u4ec5\u7528\u4e8eAPI\u9009\u62e9SOLIDWORKS\u5bf9\u8c61",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/api-only-selection/"},next:{title:"\u5b8f\u4ee5\u6279\u5904\u7406\u6a21\u5f0f\u9009\u62e9SOLIDWORKS\u7ed8\u56fe\u6d3b\u52a8\u5de5\u4f5c\u8868\u7684\u7ed8\u56fe\u89c6\u56fe\u4e2d\u7684\u6240\u6709\u5c3a\u5bf8",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/selection/select-all-drawing-dimensions/"}},l={},c=[{value:"image: circular-edge-selected-in-views.png",id:"image-circular-edge-selected-in-viewspng",level:2}],w={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,i.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u5b9e\u4f53\uff08\u4f8b\u5982\u8fb9\u3001\u9762\u3001\u9876\u70b9\uff09\u7684\u4e0d\u540c\u65b9\u6cd5\u3002"),(0,s.kt)("h2",{id:"image-circular-edge-selected-in-viewspng"},"image: circular-edge-selected-in-views.png"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u57283\u4e2a\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u4e86\u547d\u540d\u8fb9",src:n(26564).Z,width:"872",height:"622"}),"{ width=300 }"),(0,s.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u89c6\u56fe\u4e2d\u9009\u62e9\u5b9e\u4f53\uff08\u4f8b\u5982\u8fb9\u3001\u9762\u3001\u9876\u70b9\uff09\u7684\u4e0d\u540c\u65b9\u6cd5\u3002"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u76f4\u63a5\u4f7f\u7528",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IView~SelectEntity.html"},"IView:SelectEntity"),"\u65b9\u6cd5\u5728\u76ee\u6807\u89c6\u56fe\u4e2d\u9009\u62e9\u5b9e\u4f53\u3002\u5f53\u9700\u8981\u9009\u62e9\u5b9e\u4f53\u800c\u4e0d\u9700\u8981\u4f20\u9012\u4efb\u4f55\u9644\u52a0\u6570\u636e\uff08\u4f8b\u5982\u9009\u62e9\u6807\u8bb0\u6216\u6807\u6ce8\uff09\u65f6\uff0c\u6b64\u65b9\u6cd5\u975e\u5e38\u6709\u7528\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u5728\u9009\u62e9\u6570\u636e\u4e2d\u6307\u5b9a\u89c6\u56fe\u6765\u9009\u62e9\u5b9e\u4f53\uff0c\u4f7f\u7528\u7684\u662f",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectData~View.html"},"ISelectData::View")," SOLIDWORKS API\u5c5e\u6027\u3002\u4e0e\u524d\u4e00\u79cd\u65b9\u6cd5\u76f8\u6bd4\uff0c\u8fd9\u79cd\u65b9\u6cd5\u66f4\u52a0\u7075\u6d3b\uff0c\u56e0\u4e3a\u53ef\u4ee5\u63d0\u4f9b\u66f4\u591a\u7684\u9009\u62e9\u4fe1\u606f\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u9009\u62e9\u53ef\u89c1\u5b9e\u4f53\u3002\u8fd9\u79cd\u65b9\u6cd5\u5141\u8bb8\u5728\u7ed8\u56fe\u89c6\u56fe\u7684\u4e0a\u4e0b\u6587\u4e2d\u67e5\u627e\u5b9e\u4f53\u3002\u5176\u4e3b\u8981\u4f18\u70b9\u662f\u5b83\u53ea\u4f1a\u5c1d\u8bd5\u9009\u62e9\u5f53\u524d\u89c6\u56fe\u65b9\u5411\u4e2d\u53ef\u89c1\u7684\u5b9e\u4f53\uff0c\u800c\u524d\u4e24\u79cd\u65b9\u6cd5\u4e0d\u8003\u8651\u5b9e\u4f53\u88ab\u5176\u4ed6\u5b9e\u4f53\u906e\u6321\u7684\u60c5\u51b5\u3002")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8981\u8fd0\u884c\u5b8f\uff0c\u8bf7\u4e0b\u8f7d",(0,s.kt)("a",{target:"_blank",href:n(77819).Z},"\u793a\u4f8b\u6a21\u578b\u548c\u7ed8\u56fe"),"\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5728\u96f6\u4ef6\u6587\u6863\u4e2d\uff0c\u5706\u5f62\u8fb9\u7f18\u88ab\u547d\u540d\u4e3a",(0,s.kt)("em",{parentName:"li"},"Hole"),"\u3002")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5728SOLIDWORKS\u96f6\u4ef6\u4e2d\u547d\u540d\u7684\u8fb9\u7f18",src:n(60860).Z,width:"718",height:"592"}),"{ width=300 }"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5b8f\u540e\uff0c\u6b64\u8fb9\u7f18\u5c06\u5728\u6240\u67093\u4e2a\u89c6\u56fe\u4e2d\u4f7f\u7528\u4e0a\u8ff03\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u88ab\u9009\u62e9\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const ENT_NAME As String = "Hole"\n\nDim swApp As SldWorks.SldWorks\nDim swDraw As SldWorks.DrawingDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    Dim swView1 As SldWorks.view\n    Dim swView2 As SldWorks.view\n    Dim swView3 As SldWorks.view\n    \n    Set swView1 = swDraw.FeatureByName("Drawing View1").GetSpecificFeature()\n    Set swView2 = swDraw.FeatureByName("Drawing View2").GetSpecificFeature()\n    Set swView3 = swDraw.FeatureByName("Drawing View3").GetSpecificFeature()\n    \n    Dim swRefDoc As SldWorks.PartDoc\n    Set swRefDoc = swView1.ReferencedDocument\n    \n    Dim swEdge As SldWorks.Edge\n    Set swEdge = swRefDoc.GetEntityByName(ENT_NAME, swSelectType_e.swSelEDGES)\n    \n    swDraw.ClearSelection2 True\n    \n    SelectInView swView1, swEdge\n    SelectInViewBySelData swView2, swEdge\n    SelectFromVisibleEntities swView3\n    \nEnd Sub\n\nSub SelectInView(view As SldWorks.view, ent As SldWorks.Entity)\n    view.SelectEntity ent, True\nEnd Sub\n\nSub SelectInViewBySelData(view As SldWorks.view, ent As SldWorks.Entity)\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Dim swSelData As SldWorks.SelectData\n    \n    Set swSelMgr = swDraw.SelectionManager\n    \n    Set swSelData = swSelMgr.CreateSelectData\n    swSelData.view = view \'specify the view to select entity in\n    \n    ent.Select4 True, swSelData\n    \nEnd Sub\n\nSub SelectFromVisibleEntities(view As SldWorks.view)\n    \n    Dim vVisComps As Variant\n    vVisComps = view.GetVisibleComponents()\n    \n    Dim vVisEnts As Variant\n    vVisEnts = view.GetVisibleEntities2(vVisComps(0), swViewEntityType_e.swViewEntityType_Edge)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vVisEnts)\n        Dim swEdge As SldWorks.Entity\n        Set swEdge = vVisEnts(i)\n        If swEdge.ModelName = ENT_NAME Then\n            swEdge.Select4 True, Nothing \'no need to explicitly specify the view to select in as pointer to the entity already belongs to the view\n            Exit Sub\n        End If\n    Next\n    \nEnd Sub\n')))}p.isMDXComponent=!0},77819:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/plate-with-hole-97ecebf6213d05027b3ea978fbf8b08f.zip"},26564:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/circular-edge-selected-in-views-e61d000727c9b7834a8e5d7d599a7765.png"},60860:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/named-edge-fa685d79287094d0f5d9a615d8b038ee.png"}}]);