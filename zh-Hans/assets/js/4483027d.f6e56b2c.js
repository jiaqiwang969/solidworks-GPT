"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[48477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>S});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,c=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(n),k=s,S=u["".concat(i,".").concat(k)]||u[k]||p[k]||c;return n?r.createElement(S,o(o({ref:t},d),{},{components:n})):r.createElement(S,o({ref:t},d))}));function S(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var c=n.length,o=new Array(c);o[0]=k;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[u]="string"==typeof e?e:s,o[1]=a;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},97962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const c={layout:"sw-tool",title:"Macro to select equal arcs in the sketch using SOLIDWORKS API",caption:"Select Equal Arcs",description:"VBA macro to find and select all arcs with diameter equal to the input arc using SOLIDWORKS API",image:"selected-equal-arcs.png",labels:["sketch","arc","circle","equal"],group:"Sketch"},o=void 0,a={unversionedId:"codestack/solidworks-api/document/sketch/select-equal-arcs/index",id:"codestack/solidworks-api/document/sketch/select-equal-arcs/index",title:"Macro to select equal arcs in the sketch using SOLIDWORKS API",description:"VBA macro to find and select all arcs with diameter equal to the input arc using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/sketch/select-equal-arcs/index.md",sourceDirName:"codestack/solidworks-api/document/sketch/select-equal-arcs",slug:"/codestack/solidworks-api/document/sketch/select-equal-arcs/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/sketch/select-equal-arcs/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/sketch/select-equal-arcs/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to select equal arcs in the sketch using SOLIDWORKS API",caption:"Select Equal Arcs",description:"VBA macro to find and select all arcs with diameter equal to the input arc using SOLIDWORKS API",image:"selected-equal-arcs.png",labels:["sketch","arc","circle","equal"],group:"Sketch"},sidebar:"tutorialSidebar",previous:{title:"Macro to merge sketches using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/sketch/merge-sketches/"},next:{title:"Macro to toggle the sketch snapping in SOLIDWORKS document",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/sketch/toggle-snapping/"}},i={},l=[{value:"Options",id:"options",level:2}],d={toc:l},u="wrapper";function p(e){let{components:t,...c}=e;return(0,s.kt)(u,(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Equal arcs selected in the sketch",src:n(62313).Z,width:"1083",height:"718"}),"{ width=350 }"),(0,s.kt)("p",null,"This VBA macro selects equal size sketch arcs to the pre-selected input sketch arc. Only arcs in the sketch of the original input arc are selected. Macro works both for active and inactive sketch."),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("p",null,"Macro can be configured by changing the values of the constant at the beginning of the macro"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const EPS As Double = 0.0000000001 'arcs radius comparison tolerance\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const EPS As Double = 0.0000000001\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    On Error GoTo catch\n    \ntry:\n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSkSrcArc As SldWorks.SketchArc\n        Set swSkSrcArc = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swSkSrcArc Is Nothing Then\n            \n            Dim radius As Double\n            radius = swSkSrcArc.GetRadius()\n            \n            Dim swSketch As SldWorks.Sketch\n            Set swSketch = swSkSrcArc.GetSketch\n            \n            Dim vSegs As Variant\n            vSegs = swSketch.GetSketchSegments()\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vSegs)\n                \n                Dim swSkSeg As SldWorks.SketchSegment\n                Set swSkSeg = vSegs(i)\n                \n                If swSkSeg.GetType() = swSketchSegments_e.swSketchARC Then\n                \n                    If Not swSkSrcArc Is swSkSeg Then\n                    \n                        Dim swSkArc As SldWorks.SketchArc\n                        Set swSkArc = swSkSeg\n                        \n                        If Abs(swSkArc.GetRadius() - radius) < EPS Then\n                            swSkSeg.Select4 True, Nothing\n                        End If\n                        \n                    End If\n                End If\n                \n            Next\n            \n        Else\n            Err.Raise vbError, "", "Please select sketch arc"\n        End If\n        \n    Else\n        Err.Raise vbError, "", "Open model"\n    End If\n    \n    GoTo finally\ncatch:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally:\n    \nEnd Sub\n\n')))}p.isMDXComponent=!0},62313:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/selected-equal-arcs-790aeea06f25a7d4a8a3707d17da8acf.png"}}]);