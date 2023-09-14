"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[24851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>w});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),a=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},S=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=a(n),S=o,w=d["".concat(c,".").concat(S)]||d[S]||p[S]||s;return n?r.createElement(w,i(i({ref:t},u),{},{components:n})):r.createElement(w,i({ref:t},u))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=S;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var a=2;a<s;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}S.displayName="MDXCreateElement"},94945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=n(87462),o=(n(67294),n(3905));const s={title:"Selecting SOLIDWORKS Objects for API only",caption:"Selecting Objects For API Only",description:"Example shows how to select the object for API purpose only (without graphics selection) preserving current user selections",image:"extrude-direction-up-to-surface.png",labels:["selection","extrude"]},i=void 0,l={unversionedId:"codestack/solidworks-api/document/selection/api-only-selection/index",id:"codestack/solidworks-api/document/selection/api-only-selection/index",title:"Selecting SOLIDWORKS Objects for API only",description:"Example shows how to select the object for API purpose only (without graphics selection) preserving current user selections",source:"@site/docs/codestack/solidworks-api/document/selection/api-only-selection/index.md",sourceDirName:"codestack/solidworks-api/document/selection/api-only-selection",slug:"/codestack/solidworks-api/document/selection/api-only-selection/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/selection/api-only-selection/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/selection/api-only-selection/index.md",tags:[],version:"current",frontMatter:{title:"Selecting SOLIDWORKS Objects for API only",caption:"Selecting Objects For API Only",description:"Example shows how to select the object for API purpose only (without graphics selection) preserving current user selections",image:"extrude-direction-up-to-surface.png",labels:["selection","extrude"]},sidebar:"tutorialSidebar",previous:{title:"Performing entity selection using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/selection/"},next:{title:"Selecting entities in drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/selection/drawing-view-entities/"}},c={},a=[],u={toc:a},d="wrapper";function p(e){let{components:t,...s}=e;return(0,o.kt)(d,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Extruded sketch arc up to the planar surface following the line direction",src:n(97955).Z,width:"936",height:"586"}),"{ width=500 }"),(0,o.kt)("p",null,"This example shows how to create extrude feature in SOLIDWORKS part by selecting the inputs for API purpose only (without graphics selection) preserving current user selections."),(0,o.kt)("p",null,"To run the macro"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download the example file and open it in SOLIDWORKS ",(0,o.kt)("a",{target:"_blank",href:n(28952).Z},"Extrude Selection Example")),(0,o.kt)("li",{parentName:"ul"},"Select any objects (e.g. Front and Right plane)"),(0,o.kt)("li",{parentName:"ul"},"Debug the macro step-by-step. The macro pre-selects the required objects for the extrude feature directly in the data base (i.e. it is not visible for the user)")),(0,o.kt)("p",null,"As the result the extrude is created with the specified direction up to specified surface and all the original user selections are preserved."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n            \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swProfileSketch As SldWorks.Feature\n        Set swProfileSketch = swModel.FeatureByName("Profile")\n        \n        Dim swBoundarySurface As SldWorks.Feature\n        Set swBoundarySurface = swModel.FeatureByName("Boundary")\n        \n        Dim swDirectionSketch As SldWorks.Sketch\n        Set swDirectionSketch = swModel.FeatureByName("Direction").GetSpecificFeature\n        \n        Dim swDirectionSeg As SldWorks.SketchSegment\n        Set swDirectionSeg = swDirectionSketch.GetSketchSegments()(0)\n        \n        swSelMgr.SuspendSelectionList \'preserving current selections\n        \n        \'selecting objects for extrude features (those selections won\'t be visible in the graphics view)\n        AddToCurrentSelectionSet swProfileSketch, 0\n        AddToCurrentSelectionSet swBoundarySurface, 1\n        AddToCurrentSelectionSet swDirectionSeg, 16\n        \n        swModel.FeatureManager.FeatureExtrusion2 True, False, False, swEndConditions_e.swEndCondUpToSurface, 0, 0, 0, False, False, False, False, 0, 0, False, False, False, False, True, True, True, 0, 0, False\n\n        \'resuming the original selections\n        swSelMgr.ResumeSelectionList\n        \n    Else\n        MsgBox "Please open the sample model"\n    End If\n\nEnd Sub\n\nSub AddToCurrentSelectionSet(obj As Object, selMark As Integer)\n    \n    Dim swSelData As SldWorks.SelectData\n    \n    Set swSelData = swSelMgr.CreateSelectData\n    \n    swSelData.Mark = selMark\n    \n    swSelMgr.AddSelectionListObject obj, swSelData\n    \nEnd Sub\n')))}p.isMDXComponent=!0},28952:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/extrude-selection-example-76dc29f4b29915dab803474fe1f14f79.SLDPRT"},97955:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/extrude-direction-up-to-surface-77626bac046294a71200cb855adde9a8.png"}}]);