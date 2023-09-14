"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[5890],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>b});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(o),w=r,b=p["".concat(l,".").concat(w)]||p[w]||u[w]||s;return o?n.createElement(b,i(i({ref:t},d),{},{components:o})):n.createElement(b,i({ref:t},d))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=w;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<s;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}w.displayName="MDXCreateElement"},29093:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const s={caption:"Insert Holes Table",title:"Macro to insert holes table to SOLIDWORKS drawing",description:"VBA macro demonstrates how to insert hole table for the specified entities using SOLIDWORKS API",image:"holes-table.png"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-holes-table/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-holes-table/index",title:"Macro to insert holes table to SOLIDWORKS drawing",description:"VBA macro demonstrates how to insert hole table for the specified entities using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-holes-table/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-holes-table",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-holes-table/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-holes-table/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-holes-table/index.md",tags:[],version:"current",frontMatter:{caption:"Insert Holes Table",title:"Macro to insert holes table to SOLIDWORKS drawing",description:"VBA macro demonstrates how to insert hole table for the specified entities using SOLIDWORKS API",image:"holes-table.png"},sidebar:"tutorialSidebar",previous:{title:"Macro to insert SOLIDWORKS Bill Of Materials table and attach to the anchor point",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-bom-table/"},next:{title:"Add location label to a drawing view",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/insert-location-label/"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Holes table",src:o(59562).Z,width:"585",height:"363"}),"{ width=300 }"),(0,r.kt)("p",null,"This macro demonstrates how to insert holes table into the existing drawing."),(0,r.kt)("p",null,"Before running the macro it is required to preselect input objects in the following order."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Vertex which corresponds to an origin"),(0,r.kt)("li",{parentName:"ol"},"Edge which corresponds to X axis"),(0,r.kt)("li",{parentName:"ol"},"Edge which corresponds to Y axis"),(0,r.kt)("li",{parentName:"ol"},"Face which contains holes")),(0,r.kt)("p",null,"Macro will clear the selection and reselect entities."),(0,r.kt)("p",null,"Table is inserted using default template into 0,0 coordinate."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note, in your case you might be using different approach of retrieving the pointers to entities. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n   Set swApp = Application.SldWorks\n\n   Dim swModel As SldWorks.ModelDoc2\n   \n   Set swModel = swApp.ActiveDoc\n   \n   Dim swSelMgr As SldWorks.SelectionMgr\n   \n   Set swSelMgr = swModel.SelectionManager\n   \n   Dim swVertexOrigin As SldWorks.Entity\n   Dim swEdgeX As SldWorks.Entity\n   Dim swEdgeY As SldWorks.Entity\n   Dim swHolesFace As SldWorks.Entity\n   \n   Set swVertexOrigin = swSelMgr.GetSelectedObject6(2, -1)\n   Set swEdgeX = swSelMgr.GetSelectedObject6(3, -1)\n   Set swEdgeY = swSelMgr.GetSelectedObject6(4, -1)\n   Set swHolesFace = swSelMgr.GetSelectedObject6(5, -1)\n   \n   Dim swView As SldWorks.View\n   Set swView = swModel.SelectionManager.GetSelectedObjectsDrawingView(1)\n   \n   swModel.ClearSelection2 True\n   \n   swVertexOrigin.SelectByMark False, 1\n   swEdgeX.SelectByMark True, 4\n   swEdgeY.SelectByMark True, 8\n   swHolesFace.SelectByMark True, 2\n   \n   Dim swHoleTable As SldWorks.TableAnnotation\n   Set swHoleTable = swView.InsertHoleTable2(False, 0, 0, 1, "", "")\n   \nEnd Sub\n')))}u.isMDXComponent=!0},59562:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/holes-table-3298253e41a9d2f5abe776acb5858bb5.png"}}]);