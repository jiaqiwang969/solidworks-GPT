"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[10542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>w});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,w=p["".concat(a,".").concat(b)]||p[b]||u[b]||s;return n?o.createElement(w,i(i({ref:t},d),{},{components:n})):o.createElement(w,i({ref:t},d))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=b;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},67327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const s={caption:"Insert Holes Table",title:"Macro to insert holes table to SOLIDWORKS drawing",description:"VBA macro demonstrates how to insert hole table for the specified entities using SOLIDWORKS API",image:"holes-table.png"},i=void 0,l={unversionedId:"codestack/solidworks-api/document/tables/insert-holes-table/index",id:"codestack/solidworks-api/document/tables/insert-holes-table/index",title:"Macro to insert holes table to SOLIDWORKS drawing",description:"VBA macro demonstrates how to insert hole table for the specified entities using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/tables/insert-holes-table/index.md",sourceDirName:"codestack/solidworks-api/document/tables/insert-holes-table",slug:"/codestack/solidworks-api/document/tables/insert-holes-table/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/tables/insert-holes-table/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/tables/insert-holes-table/index.md",tags:[],version:"current",frontMatter:{caption:"Insert Holes Table",title:"Macro to insert holes table to SOLIDWORKS drawing",description:"VBA macro demonstrates how to insert hole table for the specified entities using SOLIDWORKS API",image:"holes-table.png"},sidebar:"tutorialSidebar",previous:{title:"Macro to insert SOLIDWORKS Bill Of Materials table and attach to the anchor point",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/tables/insert-bom-table/"},next:{title:"Macro to insert SOLIDWORKS Revision table and attach to the anchor point",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/tables/insert-revision-table/"}},a={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Holes table",src:n(23039).Z,width:"585",height:"363"}),"{ width=300 }"),(0,r.kt)("p",null,"This macro demonstrates how to insert holes table into the existing drawing."),(0,r.kt)("p",null,"Before running the macro it is required to preselect input objects in the following order."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Vertex which corresponds to an origin"),(0,r.kt)("li",{parentName:"ol"},"Edge which corresponds to X axis"),(0,r.kt)("li",{parentName:"ol"},"Edge which corresponds to Y axis"),(0,r.kt)("li",{parentName:"ol"},"Face which contains holes")),(0,r.kt)("p",null,"Macro will clear the selection and reselect entities."),(0,r.kt)("p",null,"Table is inserted using default template into 0,0 coordinate."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note, in your case you might be using different approach of retrieving the pointers to entities. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n   Set swApp = Application.SldWorks\n\n   Dim swModel As SldWorks.ModelDoc2\n   \n   Set swModel = swApp.ActiveDoc\n   \n   Dim swSelMgr As SldWorks.SelectionMgr\n   \n   Set swSelMgr = swModel.SelectionManager\n   \n   Dim swVertexOrigin As SldWorks.Entity\n   Dim swEdgeX As SldWorks.Entity\n   Dim swEdgeY As SldWorks.Entity\n   Dim swHolesFace As SldWorks.Entity\n   \n   Set swVertexOrigin = swSelMgr.GetSelectedObject6(2, -1)\n   Set swEdgeX = swSelMgr.GetSelectedObject6(3, -1)\n   Set swEdgeY = swSelMgr.GetSelectedObject6(4, -1)\n   Set swHolesFace = swSelMgr.GetSelectedObject6(5, -1)\n   \n   Dim swView As SldWorks.View\n   Set swView = swModel.SelectionManager.GetSelectedObjectsDrawingView(1)\n   \n   swModel.ClearSelection2 True\n   \n   swVertexOrigin.SelectByMark False, 1\n   swEdgeX.SelectByMark True, 4\n   swEdgeY.SelectByMark True, 8\n   swHolesFace.SelectByMark True, 2\n   \n   Dim swHoleTable As SldWorks.TableAnnotation\n   Set swHoleTable = swView.InsertHoleTable2(False, 0, 0, 1, "", "")\n   \nEnd Sub\n')))}u.isMDXComponent=!0},23039:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/holes-table-3298253e41a9d2f5abe776acb5858bb5.png"}}]);