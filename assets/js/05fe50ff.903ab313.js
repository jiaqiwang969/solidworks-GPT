"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[15534],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(a,".").concat(f)]||p[f]||w[f]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var d={};for(var a in t)hasOwnProperty.call(t,a)&&(d[a]=t[a]);d.originalType=e,d[p]="string"==typeof e?e:i,s[1]=d;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>w,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={caption:"Insert Predefined Views",title:"Macro to insert model into the predefined views of the SOLIDWORKS drawing template",description:"VBA macro allows to insert SOLIDWORKS model into all or selected predefined views of the active drawing document",image:"predefined-views.png"},s=void 0,d={unversionedId:"codestack-clone/solidworks-api/document/drawing/insert-predefined-views/index",id:"codestack-clone/solidworks-api/document/drawing/insert-predefined-views/index",title:"Macro to insert model into the predefined views of the SOLIDWORKS drawing template",description:"VBA macro allows to insert SOLIDWORKS model into all or selected predefined views of the active drawing document",source:"@site/docs/codestack-clone/solidworks-api/document/drawing/insert-predefined-views/index.md",sourceDirName:"codestack-clone/solidworks-api/document/drawing/insert-predefined-views",slug:"/codestack-clone/solidworks-api/document/drawing/insert-predefined-views/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/drawing/insert-predefined-views/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/drawing/insert-predefined-views/index.md",tags:[],version:"current",frontMatter:{caption:"Insert Predefined Views",title:"Macro to insert model into the predefined views of the SOLIDWORKS drawing template",description:"VBA macro allows to insert SOLIDWORKS model into all or selected predefined views of the active drawing document",image:"predefined-views.png"},sidebar:"tutorialSidebar",previous:{title:"Add location label to a drawing view",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/drawing/insert-location-label/"},next:{title:"Macro to lock sheet format for editing using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/document/drawing/lock-sheet-format/"}},a={},l=[],c={toc:l},p="wrapper";function w(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SOLIDWORKS predefined views",src:n(23475).Z,width:"746",height:"871"}),"{ width = 400 }"),(0,i.kt)("p",null,"This VBA macro allows to insert SOLIDWORKS part or assembly into the predefined views of the active drawing or drawing template"),(0,i.kt)("p",null,"Select the predefined drawing views to insert model to. If no views are selected, all predefined views will be filled."),(0,i.kt)("p",null,"Macro will show the file browse dialog to select model to insert."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n        \n    Dim filePath As String\n    filePath = swApp.GetOpenFileName("Select model to insert into a predefined views", "", _\n        "SOLIDWORKS Model Files (*.sldprt; *.sldasm)|*.sldprt;*.sldasm|All Files (*.*)|*.*|", 0, "", "")\n    \n    If filePath <> "" Then\n    \n        If False = swDraw.InsertModelInPredefinedView(filePath) Then\n            Err.Raise vbError, "", "Failed to insert model into predefined views"\n        End If\n    \n    End If\n    \nEnd Sub\n')))}w.isMDXComponent=!0},23475:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/predefined-views-7727176e5acbe53e83f6fdc2ff471b1c.png"}}]);