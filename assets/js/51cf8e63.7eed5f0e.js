"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[95157],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>g});var n=i(67294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},w="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),w=c(i),u=s,g=w["".concat(l,".").concat(u)]||w[u]||p[u]||o;return i?n.createElement(g,r(r({ref:t},d),{},{components:i})):n.createElement(g,r({ref:t},d))}));function g(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=i.length,r=new Array(o);r[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[w]="string"==typeof e?e:s,r[1]=a;for(var c=2;c<o;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},78599:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=i(87462),s=(i(67294),i(3905));const o={title:"Selecting entities in drawing view using SOLIDWORKS API",caption:"Selecting Entities In Drawing View",description:"Example demonstrates different approaches of selecting entities (e.g. edge, face, vertex) in the drawing views",image:"circular-edge-selected-in-views.png"},r=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/drawing-view-entities/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/drawing-view-entities/index",title:"Selecting entities in drawing view using SOLIDWORKS API",description:"Example demonstrates different approaches of selecting entities (e.g. edge, face, vertex) in the drawing views",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/drawing-view-entities/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/drawing-view-entities",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/drawing-view-entities/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/drawing-view-entities/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/drawing-view-entities/index.md",tags:[],version:"current",frontMatter:{title:"Selecting entities in drawing view using SOLIDWORKS API",caption:"Selecting Entities In Drawing View",description:"Example demonstrates different approaches of selecting entities (e.g. edge, face, vertex) in the drawing views",image:"circular-edge-selected-in-views.png"},sidebar:"tutorialSidebar",previous:{title:"Selecting SOLIDWORKS Objects for API only",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/api-only-selection/"},next:{title:"Macro to select all dimensions from the drawing views of the active sheet of SOLIDWORKS drawing",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-all-drawing-dimensions/"}},l={},c=[],d={toc:c},w="wrapper";function p(e){let{components:t,...o}=e;return(0,s.kt)(w,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Named edge is selected in 3 drawing views",src:i(97093).Z,width:"872",height:"622"}),"{ width=300 }"),(0,s.kt)("p",null,"This example demonstrates different approaches of selecting entities (e.g. edge, face, vertex) in the drawing views using SOLIDWORKS API"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Selecting entity in the target view via direct ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IView~SelectEntity.html"},"IView:SelectEntity")," method. This method is useful when it is required to select entity without the need of passing any additional data (such as selection mark or callout)."),(0,s.kt)("li",{parentName:"ol"},"Selecting entity by specifying the view in the selection data via ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISelectData~View.html"},"ISelectData::View")," SOLIDWORKS API property. This enables more flexibility compared to previous method as it is possible to provide more selection information."),(0,s.kt)("li",{parentName:"ol"},"Selecting visual entities. This approach allows to find the entity in the context of the drawing view. The main benefit as it would only attempt to select the entity which is visible in the current view orientation while previous two approaches do not consider the case where entity is hidden behind other entities.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To run the macro download the ",(0,s.kt)("a",{target:"_blank",href:i(54913).Z},"sample model and the drawing"),"."),(0,s.kt)("li",{parentName:"ul"},"Circular edge was named ",(0,s.kt)("em",{parentName:"li"},"Hole")," in the part document")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Named edge in SOLIDWORKS part",src:i(73784).Z,width:"718",height:"592"}),"{ width=300 }"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Run the macro and this edge is selected in all 3 views with 3 different approaches described above.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const ENT_NAME As String = "Hole"\n\nDim swApp As SldWorks.SldWorks\nDim swDraw As SldWorks.DrawingDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    Dim swView1 As SldWorks.view\n    Dim swView2 As SldWorks.view\n    Dim swView3 As SldWorks.view\n    \n    Set swView1 = swDraw.FeatureByName("Drawing View1").GetSpecificFeature()\n    Set swView2 = swDraw.FeatureByName("Drawing View2").GetSpecificFeature()\n    Set swView3 = swDraw.FeatureByName("Drawing View3").GetSpecificFeature()\n    \n    Dim swRefDoc As SldWorks.PartDoc\n    Set swRefDoc = swView1.ReferencedDocument\n    \n    Dim swEdge As SldWorks.Edge\n    Set swEdge = swRefDoc.GetEntityByName(ENT_NAME, swSelectType_e.swSelEDGES)\n    \n    swDraw.ClearSelection2 True\n    \n    SelectInView swView1, swEdge\n    SelectInViewBySelData swView2, swEdge\n    SelectFromVisibleEntities swView3\n    \nEnd Sub\n\nSub SelectInView(view As SldWorks.view, ent As SldWorks.Entity)\n    view.SelectEntity ent, True\nEnd Sub\n\nSub SelectInViewBySelData(view As SldWorks.view, ent As SldWorks.Entity)\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Dim swSelData As SldWorks.SelectData\n    \n    Set swSelMgr = swDraw.SelectionManager\n    \n    Set swSelData = swSelMgr.CreateSelectData\n    swSelData.view = view \'specify the view to select entity in\n    \n    ent.Select4 True, swSelData\n    \nEnd Sub\n\nSub SelectFromVisibleEntities(view As SldWorks.view)\n    \n    Dim vVisComps As Variant\n    vVisComps = view.GetVisibleComponents()\n    \n    Dim vVisEnts As Variant\n    vVisEnts = view.GetVisibleEntities2(vVisComps(0), swViewEntityType_e.swViewEntityType_Edge)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vVisEnts)\n        Dim swEdge As SldWorks.Entity\n        Set swEdge = vVisEnts(i)\n        If swEdge.ModelName = ENT_NAME Then\n            swEdge.Select4 True, Nothing \'no need to explicitly specify the view to select in as pointer to the entity already belongs to the view\n            Exit Sub\n        End If\n    Next\n    \nEnd Sub\n')))}p.isMDXComponent=!0},54913:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/plate-with-hole-97ecebf6213d05027b3ea978fbf8b08f.zip"},97093:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/circular-edge-selected-in-views-e61d000727c9b7834a8e5d7d599a7765.png"},73784:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/named-edge-fa685d79287094d0f5d9a615d8b038ee.png"}}]);