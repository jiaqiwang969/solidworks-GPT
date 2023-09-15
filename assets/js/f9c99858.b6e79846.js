"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[86935],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>f});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function s(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?s(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=t.createContext({}),m=function(e){var n=t.useContext(a),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},p=function(e){var n=m(e.components);return t.createElement(a.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=m(o),d=r,f=l["".concat(a,".").concat(d)]||l[d]||u[d]||s;return o?t.createElement(f,c(c({ref:n},p),{},{components:o})):t.createElement(f,c({ref:n},p))}));function f(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=o.length,c=new Array(s);c[0]=d;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i[l]="string"==typeof e?e:r,c[1]=i;for(var m=2;m<s;m++)c[m]=o[m];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},28720:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var t=o(87462),r=(o(67294),o(3905));const s={layout:"sw-tool",title:"Copy component name to the component reference using SOLIDWORKS API",caption:"Copy Component Name To Component Reference",description:"VBA macro to copy component name to the component reference using SOLIDWORKS with an ability to filter virtual components only",image:"component-reference.png",labels:["name","virtual","component reference"],group:"Assembly"},c=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/name-to-component-reference/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/name-to-component-reference/index",title:"Copy component name to the component reference using SOLIDWORKS API",description:"VBA macro to copy component name to the component reference using SOLIDWORKS with an ability to filter virtual components only",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/name-to-component-reference/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/name-to-component-reference",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/name-to-component-reference/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/name-to-component-reference/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/name-to-component-reference/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Copy component name to the component reference using SOLIDWORKS API",caption:"Copy Component Name To Component Reference",description:"VBA macro to copy component name to the component reference using SOLIDWORKS with an ability to filter virtual components only",image:"component-reference.png",labels:["name","virtual","component reference"],group:"Assembly"},sidebar:"tutorialSidebar",previous:{title:"Move selected components to feature folder using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/move-to-folder/"},next:{title:"Open all selected components in positions in new windows",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/open-in-position/"}},a={},m=[],p={toc:m},l="wrapper";function u(e){let{components:n,...s}=e;return(0,r.kt)(l,(0,t.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Component reference",src:o(36626).Z,width:"629",height:"455"}),"{ width=350 }"),(0,r.kt)("p",null,"This VBA macro allows to copy the name of the components in the active assembly to the component's reference using SOLIDWORKS API."),(0,r.kt)("p",null,"Macro has an option to only process virtual components by settings the ",(0,r.kt)("em",{parentName:"p"},"VIRTUAL_ONLY")," option to ",(0,r.kt)("em",{parentName:"p"},"True"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const VIRTUAL_ONLY As Boolean = True\n")),(0,r.kt)("p",null,"This macro can be useful if component names are used to store the project attributes (e.g. Part Number) as component name cannot be added to the Bill Of Materials while Component Reference can be."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bill Of Materials with component references",src:o(7085).Z,width:"1180",height:"537"}),"{ width=350 }"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const VIRTUAL_ONLY As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n    \n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    Dim swSelMgr As SldWorks.SelectionMgr\n\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Then\n        \n            Dim swAssy As SldWorks.AssemblyDoc\n            Set swAssy = swModel\n            \n            Dim vComps As Variant\n            vComps = swAssy.GetComponents(False)\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vComps)\n                \n                Dim swComp As SldWorks.Component2\n                Set swComp = vComps(i)\n                \n                If swComp.IsVirtual Or Not VIRTUAL_ONLY Then\n                \n                    Dim compName As String\n                    \n                    compName = swComp.Name2\n                    \n                    If Not swComp.GetParent() Is Nothing Then\n                        \'if not root remove the sub-assemblies name\n                        compName = Right(compName, Len(compName) - InStrRev(compName, "/"))\n                    End If\n                    \n                    If swComp.IsVirtual() Then\n                        \'if virtual remove the context assembly name\n                        compName = Left(compName, InStr(compName, "^") - 1)\n                    Else\n                        \'remove the index name\n                        compName = Left(compName, InStrRev(compName, "-") - 1)\n                    End If\n                    \n                    swComp.ComponentReference = compName\n                \n                End If\n                \n            Next\n\n        Else\n            MsgBox "Active document is not an assembly"\n        End If\n    \n    Else\n        MsgBox "Please open assembly document"\n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0},7085:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/bill-of-materials-fc85c2b971689b53cb4f0855d1223186.png"},36626:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/component-reference-2567e8387dd18e346522eb828562795d.png"}}]);