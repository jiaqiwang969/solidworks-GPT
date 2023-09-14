"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[64421],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return o?r.createElement(f,s(s({ref:t},l),{},{components:o})):r.createElement(f,s({ref:t},l))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:n,s[1]=a;for(var p=2;p<i;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},95054:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const i={layout:"article",caption:"Import To Active Part",title:"Macro to import foreign file into active part using SOLIDWORKS API",description:"VBA macro to import foreign file (parasolid, step, iges, etc.) directly into the active part document using SOLIDWORKS API",image:"imported-file.png"},s=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-to-active-part/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-to-active-part/index",title:"Macro to import foreign file into active part using SOLIDWORKS API",description:"VBA macro to import foreign file (parasolid, step, iges, etc.) directly into the active part document using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-to-active-part/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-to-active-part",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-to-active-part/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-to-active-part/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-to-active-part/index.md",tags:[],version:"current",frontMatter:{layout:"article",caption:"Import To Active Part",title:"Macro to import foreign file into active part using SOLIDWORKS API",description:"VBA macro to import foreign file (parasolid, step, iges, etc.) directly into the active part document using SOLIDWORKS API",image:"imported-file.png"},sidebar:"tutorialSidebar",previous:{title:"Macro to import STEP files and save as SOLIDWORKS files using a sub-folder with the same name",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/import-step/"},next:{title:"Macro feature to increment the numeric value in the note via SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/increment-revision/"}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"File imported to an active part document",src:o(79307).Z,width:"759",height:"498"})),(0,n.kt)("p",null,"This VBA macro demonstrates how to import foreign file with bodies (e.g. parasolid, step, iges, etc.) directly into the active part document."),(0,n.kt)("p",null,"Change the path to the import file in the ",(0,n.kt)("strong",{parentName:"p"},"INPUT_FILE")," constant"),(0,n.kt)("p",null,"This macro only supports foreign files which are imported as part document."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Const INPUT_FILE As String = "D:\\Model.x_t"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry_:\n    \n    On Error GoTo catch_\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    swApp.DocumentVisible False, swDocumentTypes_e.swDocPART\n\n    Dim swImpPart As SldWorks.PartDoc\n    \n    Dim errs As Long\n    Set swImpPart = swApp.LoadFile4(INPUT_FILE, "", Nothing, errs)\n    \n    Dim vBodies As Variant\n    vBodies = swImpPart.GetBodies2(swBodyType_e.swAllBodies, True)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vBodies)\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = vBodies(i)\n        Set swBody = swBody.Copy\n        \n        Dim swBodyFeat As SldWorks.Feature\n        Set swFeat = swModel.CreateFeatureFromBody3(swBody, False, swCreateFeatureBodyOpts_e.swCreateFeatureBodySimplify)\n        \n        If swFeat Is Nothing Then\n            Err.Raise vbError, "", "Failed to create feature from body"\n        End If\n        \n    Next\n    \n    swApp.CloseDoc swImpPart.GetTitle\n    \n    GoTo finally_\n    \ncatch_:\n    Debug.Print "Error: " & Err.Number & ":" & Err.Source & ":" & Err.Description\n    GoTo finally_\n    \nfinally_:\n\n    swApp.DocumentVisible True, swDocumentTypes_e.swDocPART\n    \nEnd Sub\n')))}u.isMDXComponent=!0},79307:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/imported-file-df7937290df81ce34bf34d8c10ceaa04.png"}}]);