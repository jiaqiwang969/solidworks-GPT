"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[20636],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var n=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(o),u=s,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return o?n.createElement(g,a(a({ref:t},p),{},{components:o})):n.createElement(g,a({ref:t},p))}));function g(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=o.length,a=new Array(r);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<r;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},57122:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=o(87462),s=(o(67294),o(3905));const r={title:"Get center of gravity for the SOLIDWORKS component in assembly",caption:"Get Center Of Gravity",description:"VBA macro which demonstrate 2 approaches to calculate center of gravity of the component in the SOLIDWORKS assembly space",image:"mass-property.png",labels:["assembly","component","cog","center of mass","center of gravity"]},a=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-cog/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-cog/index",title:"Get center of gravity for the SOLIDWORKS component in assembly",description:"VBA macro which demonstrate 2 approaches to calculate center of gravity of the component in the SOLIDWORKS assembly space",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-cog/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-cog",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-cog/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-cog/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-cog/index.md",tags:[],version:"current",frontMatter:{title:"Get center of gravity for the SOLIDWORKS component in assembly",caption:"Get Center Of Gravity",description:"VBA macro which demonstrate 2 approaches to calculate center of gravity of the component in the SOLIDWORKS assembly space",image:"mass-property.png",labels:["assembly","component","cog","center of mass","center of gravity"]},sidebar:"tutorialSidebar",previous:{title:"Get the pointer to component from name using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-by-name/"},next:{title:"Get instance Id of assembly component using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-instance-id/"}},c={},l=[{value:"Transforming the coordinates",id:"transforming-the-coordinates",level:2},{value:"Using IMassProperty interface",id:"using-imassproperty-interface",level:2}],p={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This macro demonstrates 2 approaches to find the component's center of gravity (COG) related ot assembly coordinate system."),(0,s.kt)("p",null,"Macro will calculate the COG for the selected component."),(0,s.kt)("h2",{id:"transforming-the-coordinates"},"Transforming the coordinates"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDocExtension~GetMassProperties2.html"},"IModelDocExtension::GetMassProperties2")," API allows to calculate the mass properties data in the model."),(0,s.kt)("p",null,"When calculated on the component's model level coordinates need to be transformed into the assembly space using transforms in order to achieve the desired result."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swModel = swApp.ActiveDoc\n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swComp As SldWorks.Component2\n    \n    Set swComp = swSelMgr.GetSelectedObjectsComponent3(1, -1)\n    \n    Dim swCompModel As SldWorks.ModelDoc2\n    Set swCompModel = swComp.GetModelDoc2\n    \n    Const ACCURACY_DEFAULT As Integer = 1\n    Dim status As swMassPropertiesStatus_e\n    \n    Dim vMassPrps As Variant\n    vMassPrps = swCompModel.Extension.GetMassProperties2(ACCURACY_DEFAULT, status, False)\n    \n    Dim dCog(2) As Double\n    \n    dCog(0) = vMassPrps(0): dCog(1) = vMassPrps(1): dCog(2) = vMassPrps(2)\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swMathPt As SldWorks.MathPoint\n    Set swMathPt = swMathUtils.CreatePoint(dCog)\n    \n    Set swMathPt = swMathPt.MultiplyTransform(swComp.Transform2)\n    \n    Dim vCog As Variant\n    vCog = swMathPt.ArrayData\n    \n    Debug.Print "COG: " & vCog(0) & "; " & vCog(1) & "; " & vCog(2)\n    \nEnd Sub\n')),(0,s.kt)("h2",{id:"using-imassproperty-interface"},"Using IMassProperty interface"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/English/api/sldworksapi/SOLIDWORKS.Interop.sldworks~SOLIDWORKS.Interop.sldworks.IMassProperty.html"},"IMassProperty")," interface emulates the functionality of Mass Property feature in SOLIDWORKS"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Mass properties dialog",src:o(83978).Z,width:"486",height:"719"}),"{ width=400 }"),(0,s.kt)("p",null,"Similarly to the UI equivalent it is possible to assign bodies (including component bodies) for the calculation scope."),(0,s.kt)("p",null,"One of the main benefits of this method compared to previous approach is that it is possible to calculate of COG for the lightweight components."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Dim swSelMgr As SldWorks.SelectionMgr\n    \n    Set swModel = swApp.ActiveDoc\n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swComp As SldWorks.Component2\n    \n    Set swComp = swSelMgr.GetSelectedObjectsComponent3(1, -1)\n    \n    Dim swMassPrps As SldWorks.MassProperty\n    Set swMassPrps = swModel.Extension.CreateMassProperty()\n    \n    Dim vCompBodies As Variant\n    vCompBodies = swComp.GetBodies3(swBodyType_e.swSolidBody, Empty)\n    \n    If False <> swMassPrps.AddBodies(vCompBodies) Then\n    \n        Dim vCog As Variant\n        vCog = swMassPrps.CenterOfMass\n        \n        Debug.Print "COG: " & vCog(0) & "; " & vCog(1) & "; " & vCog(2)\n    \n    Else\n        Err.Raise vbError, "", "Failed to add bodies for calculation"\n    End If\n    \nEnd Sub\n')))}m.isMDXComponent=!0},83978:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/mass-property-57bbbbc800e4a450f4f28365bacb9409.png"}}]);