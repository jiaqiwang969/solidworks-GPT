"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[48328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),a=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=a(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},w=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=a(n),w=r,f=p["".concat(l,".").concat(w)]||p[w]||d[w]||s;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=w;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var a=2;a<s;a++)i[a]=n[a];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}w.displayName="MDXCreateElement"},92093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=n(87462),r=(n(67294),n(3905));const s={title:"Selecting SOLIDWORKS Objects for API only",caption:"Selecting Objects For API Only",description:"Example shows how to select the object for API purpose only (without graphics selection) preserving current user selections",image:"extrude-direction-up-to-surface.png",labels:["selection","extrude"]},i=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/api-only-selection/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/api-only-selection/index",title:"Selecting SOLIDWORKS Objects for API only",description:"Example shows how to select the object for API purpose only (without graphics selection) preserving current user selections",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/api-only-selection/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/api-only-selection",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/api-only-selection/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/api-only-selection/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/api-only-selection/index.md",tags:[],version:"current",frontMatter:{title:"Selecting SOLIDWORKS Objects for API only",caption:"Selecting Objects For API Only",description:"Example shows how to select the object for API purpose only (without graphics selection) preserving current user selections",image:"extrude-direction-up-to-surface.png",labels:["selection","extrude"]},sidebar:"tutorialSidebar",previous:{title:"Performing entity selection using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/"},next:{title:"Selecting entities in drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/drawing-view-entities/"}},l={},a=[],u={toc:a},p="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Extruded sketch arc up to the planar surface following the line direction",src:n(77236).Z,width:"936",height:"586"}),"{ width=500 }"),(0,r.kt)("p",null,"This example shows how to create extrude feature in SOLIDWORKS part by selecting the inputs for API purpose only (without graphics selection) preserving current user selections."),(0,r.kt)("p",null,"To run the macro"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the example file and open it in SOLIDWORKS ",(0,r.kt)("a",{target:"_blank",href:n(87924).Z},"Extrude Selection Example")),(0,r.kt)("li",{parentName:"ul"},"Select any objects (e.g. Front and Right plane)"),(0,r.kt)("li",{parentName:"ul"},"Debug the macro step-by-step. The macro pre-selects the required objects for the extrude feature directly in the data base (i.e. it is not visible for the user)")),(0,r.kt)("p",null,"As the result the extrude is created with the specified direction up to specified surface and all the original user selections are preserved."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n            \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swProfileSketch As SldWorks.Feature\n        Set swProfileSketch = swModel.FeatureByName("Profile")\n        \n        Dim swBoundarySurface As SldWorks.Feature\n        Set swBoundarySurface = swModel.FeatureByName("Boundary")\n        \n        Dim swDirectionSketch As SldWorks.Sketch\n        Set swDirectionSketch = swModel.FeatureByName("Direction").GetSpecificFeature\n        \n        Dim swDirectionSeg As SldWorks.SketchSegment\n        Set swDirectionSeg = swDirectionSketch.GetSketchSegments()(0)\n        \n        swSelMgr.SuspendSelectionList \'preserving current selections\n        \n        \'selecting objects for extrude features (those selections won\'t be visible in the graphics view)\n        AddToCurrentSelectionSet swProfileSketch, 0\n        AddToCurrentSelectionSet swBoundarySurface, 1\n        AddToCurrentSelectionSet swDirectionSeg, 16\n        \n        swModel.FeatureManager.FeatureExtrusion2 True, False, False, swEndConditions_e.swEndCondUpToSurface, 0, 0, 0, False, False, False, False, 0, 0, False, False, False, False, True, True, True, 0, 0, False\n\n        \'resuming the original selections\n        swSelMgr.ResumeSelectionList\n        \n    Else\n        MsgBox "Please open the sample model"\n    End If\n\nEnd Sub\n\nSub AddToCurrentSelectionSet(obj As Object, selMark As Integer)\n    \n    Dim swSelData As SldWorks.SelectData\n    \n    Set swSelData = swSelMgr.CreateSelectData\n    \n    swSelData.Mark = selMark\n    \n    swSelMgr.AddSelectionListObject obj, swSelData\n    \nEnd Sub\n')))}d.isMDXComponent=!0},87924:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/extrude-selection-example-76dc29f4b29915dab803474fe1f14f79.SLDPRT"},77236:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/extrude-direction-up-to-surface-77626bac046294a71200cb855adde9a8.png"}}]);