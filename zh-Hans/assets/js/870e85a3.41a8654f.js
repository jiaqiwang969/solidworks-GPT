"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[46689],{3905:(e,n,o)=>{o.d(n,{Zo:()=>m,kt:()=>g});var t=o(67294);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function r(e,n){if(null==e)return{};var o,t,s=function(e,n){if(null==e)return{};var o,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(s[o]=e[o]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var i=t.createContext({}),d=function(e){var n=t.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},m=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=d(o),p=s,g=c["".concat(i,".").concat(p)]||c[p]||u[p]||a;return o?t.createElement(g,l(l({ref:n},m),{},{components:o})):t.createElement(g,l({ref:n},m))}));function g(e,n){var o=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=o.length,l=new Array(a);l[0]=p;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r[c]="string"==typeof e?e:s,l[1]=r;for(var d=2;d<a;d++)l[d]=o[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},25414:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=o(87462),s=(o(67294),o(3905));const a={layout:"sw-tool",title:"Delete all equations from SOLIDWORKS model using SOLIDWORKS API",caption:"Delete All Equations",description:"Macro removes all of the equations (or optionally only broken equations) in the active model (part or assembly)",image:"deleted-equations.svg",labels:["api","clean","delete equations","equation","macro","utility","vba"],group:"Model","redirect-from":["/2018/03/delete-all-equations-from-solidworks.html"]},l=void 0,r={unversionedId:"codestack-clone/solidworks-api/document/delete-model-equations/index",id:"codestack-clone/solidworks-api/document/delete-model-equations/index",title:"Delete all equations from SOLIDWORKS model using SOLIDWORKS API",description:"Macro removes all of the equations (or optionally only broken equations) in the active model (part or assembly)",source:"@site/docs/codestack-clone/solidworks-api/document/delete-model-equations/index.md",sourceDirName:"codestack-clone/solidworks-api/document/delete-model-equations",slug:"/codestack-clone/solidworks-api/document/delete-model-equations/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/delete-model-equations/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/delete-model-equations/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Delete all equations from SOLIDWORKS model using SOLIDWORKS API",caption:"Delete All Equations",description:"Macro removes all of the equations (or optionally only broken equations) in the active model (part or assembly)",image:"deleted-equations.svg",labels:["api","clean","delete equations","equation","macro","utility","vba"],group:"Model","redirect-from":["/2018/03/delete-all-equations-from-solidworks.html"]},sidebar:"tutorialSidebar",previous:{title:"VBA macro to review SOLIDWORKS sheets and configurations",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/configuration-reviewer/"},next:{title:"Handling pre and post close notifications using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/file-close-event/"}},i={},d=[],m={toc:d},c="wrapper";function u(e){let{components:n,...a}=e;return(0,s.kt)(c,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This macro removes all of the equations (or optionally only broken equations) in the active model (part or assembly) using SOLIDWORKS API."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Equations Manager dialog",src:o(23864).Z,width:"640",height:"361"}),"{ width=640 }"),(0,s.kt)("p",null,"If active model is assembly, macro optionally allows to remove all equations from each component of the assembly. The following message will be displayed. Click ",(0,s.kt)("strong",{parentName:"p"},"Yes")," to remove equations from all components on all levels and ",(0,s.kt)("strong",{parentName:"p"},"No")," to only process equations of the top level assembly."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Macro option to delete equations in the assembly components",src:o(39206).Z,width:"320",height:"121"}),"{ width=320 height=120 }"),(0,s.kt)("p",null,"Set the ",(0,s.kt)("em",{parentName:"p"},"DELETE_BROKEN_ONLY")," option to ",(0,s.kt)("em",{parentName:"p"},"True")," in order to only remove the broken (dangling) equations."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"IMPORTANT: Use this macro on your own risk. This macro modifies your data (deletes all equations) please backup your file before running this macro")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const DELETE_BROKEN_ONLY As Boolean = False 'if this flag is True than only broken equations are deleted, otherwise all equations are deleted\n\nDim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swEqMgr As SldWorks.EquationMgr\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \ntry_:\n    On Error GoTo catch_\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Dim hasDeleted As Boolean\n    \n    DeleteEquationsFromModel swModel, hasDeleted\n    \n    If swModel.GetType = swDocumentTypes_e.swDocASSEMBLY Then\n        \n        If swApp.SendMsgToUser2(\"Do you want to delete equations in all components of the assembly?\", swMessageBoxIcon_e.swMbQuestion, swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitYes Then\n            \n            Dim swAssy As SldWorks.AssemblyDoc\n            Set swAssy = swModel\n            \n            'component needs to be loaded in memory in order to process it's equations\n            swAssy.ResolveAllLightWeightComponents True\n            \n            Dim vComps As Variant\n            vComps = swAssy.GetComponents(False)\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vComps)\n                \n                Dim swComp As SldWorks.Component2\n                Set swComp = vComps(i)\n                \n                Dim swCompModel As SldWorks.ModelDoc2\n                \n                Set swCompModel = swComp.GetModelDoc2\n                \n                If Not swCompModel Is Nothing Then\n                    \n                    Dim hasCompEqDeleted As Boolean\n                    DeleteEquationsFromModel swCompModel, hasCompEqDeleted\n                    \n                    If hasCompEqDeleted Then\n                        hasDeleted = True\n                    End If\n                    \n                End If\n                \n            Next\n            \n        End If\n        \n    End If\n    \n    If hasDeleted Then\n        swModel.ForceRebuild3 False\n    End If\n    \n    GoTo finally_\n    \ncatch_:\n    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk\nfinally_:\n    \nEnd Sub\n\nSub DeleteEquationsFromModel(model As SldWorks.ModelDoc2, ByRef hasDeleted As Boolean)\n    \n    Set swEqMgr = model.GetEquationMgr()\n    \n    Dim i As Integer\n    \n    hasDeleted = False\n    \n    'iterate in the reverse direction as the equation index will change once previous equation is deleted\n    For i = swEqMgr.GetCount - 1 To 0 Step -1\n        \n        If Not DELETE_BROKEN_ONLY Or IsEquationBroken(swEqMgr, i) Then\n            swEqMgr.Delete i\n            hasDeleted = True\n        End If\n    Next\n    \n    If hasDeleted Then\n        'deleting equation doesn't make the model dirty\n        model.SetSaveFlag\n    End If\n    \nEnd Sub\n\nFunction IsEquationBroken(eqMgr As SldWorks.EquationMgr, index As Integer) As Boolean\n    \n    Const STATUS_BROKEN As Integer = -1\n    \n    Dim val As String\n    val = eqMgr.Value(index) 'evaluate to get the status\n    \n    IsEquationBroken = (eqMgr.Status = STATUS_BROKEN)\n    \nEnd Function\n\n")))}u.isMDXComponent=!0},39206:(e,n,o)=>{o.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAB5CAMAAAB/TAhJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAABcnl4LxyAKq/xc/4/UUFO4qiv9nEmU1eoop+ipzO2+/gxQCu2DVKfc7OzqjT5j6ayb+hi5+JNACDkKa5vs3X3e3n4mhad77N2HhTAJmtmbTl8XidxPz157mQXpHE2W2Eou3x8o272KLK4pxZVcrd8NTj6/L1+MLT5Jipv/bu42thmPLv7PDw8ERDnn04ZUU5V8O1maDO6KS5ztDs8AATZh9VgM7Ft9bW1pSir9SmWdfNx0iMoZazz02725CIeIhLbqTE44uPnH1mb6/I4niWqby0rjtyjo5mPW97mm1lWKKEcbmSg7vN4+jc0KCnrPLh0rLL5am6z8XKzFRaaHitz2F8ok9SdqzB1fDXsdnu+83c5CR/nZ+VkQCBm0YwJo1wb+DhyWdKQZq10a57WO7Hm6zW7+zs7eC6i12VoUunwwhRWtLh8luxy7ymlqCIf7nd95y41KS0tMnl8IBgVdLT02dwg7iNcXZ2e6JpdqK82H6Jq5CaqsPX7DSLn9rU0qSvwD56q1ZGU7y8vLfW4oSqxn+Bjs/g0sHDxHOXuLnR6vXq2r3V6/j29MnQ1FZidbRzSt3o9ODUv9Ouf4muzI9vXrbK3tvj4x11vZq73XxuitHEqTJVk7LE1q+lnJibnuHd2cnn+uru8LbT6Hyk1FNARcyskv7+/uv6/dK8q6C61vvrxIyQkvb986K0yeTx+uXr7FB6qMGnbkmft6KshNnc3xu74XhGQa/Y82yHtVSsyI+Khdri7IOftbXO6GRUjFJzmdra2oBwZKW/2oJ6c8uzonFQWrS1vW6Chd7l6dLY2595ccXa8JK129Lb4eHh4T9egWxzk1Jog4qu1bp8LGCRsN7LuXSyxuT8/ampqbGzs62XcLiegKWjomS506yQVuzWwUdKYlhGX1KMyd7EqaSQgt68n6zF4PX6/Pvx14K/zKjB3YBnfF98r4t3fdnl8zE7a2eWnqqYjuHr9dXf7mlkakNflOfVrM+zl3yDmoJbJZ13X5OUkberrZewtAAAAMQQvy0AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAOY0lEQVR4Xu2dC1gU173ASTUaS8XQANrIKqC4QqB5QG6whnJBJCagsICCWm6JqFAvSsAsIEJ8UO0KjBREKFpkIYSzPGQ1vTRBYMu6IRF5aagoKygx4C5ZHylbFOLG7/7nAS66qMy03/3ce34fzJzzP+f858xvz8wssH6aIGRW24Nhh1KMTFCPMjQXwxJ3sUlkocodw5YFcSZmZu4RGLYs+IeJmdw9FsMWWmA5U8MYptwQdBMjEPMYksqZy3U8EAeLC34HAiPojhjDxBYsNkQu1YgFPpGkiJXR9hTbyX00U7FfHEEuQX2BCo1GUZ4E26RyhYKsKqAMIagk0TGyRxLZgwoqFHTRyAGB9i2AfUtgFWyqXOzpqp7A2CSKJcGZNYryocyQfZolazRJum8OVAZnZh7wnGGtSLpmp0i+qfEKzlyT7zKUGVyjKKzR9Nxp9YJ2UGrcjAqs6kr1SktWKh3GBAIPBCrivumInebyXk2sQ3Br8h2VYvdrHV/UlN8PtvbY4xlnUqI5/W3huZyqxAsun+RY7O0Iu2mxt8R/ZkSEg7ELVIwKDO0Si7xSxUoXqtqiJzBfQQJCvFUv/9lT4emxx/+OSlN1ze4La41nzzv3Z3rXXrvpvSHnvRKNxiIk51p+6LXWsDVDJaq47zu84UI3cmJXpmSQtDgUis3kXdNaqFrGyliy8Q1SYBLc6gD/4Ib8mLdVGtXLf/K/461xIQWqNHHnYjfMH3L4esrMqg3zNZopwSUbMoOtPcNMTgo0msLgNcxgI6a8QOBNIlDFy+Xy/RqmlltONr7xNggknxUajUoV6HGydo+3xvt/QKBAFUgJ9O664+lRM3vW7BknQzfYqVRTgjv2untc8A5rGFqtUqlcTt9UUaONGBBI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"},23864:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/equations-manager-4f810c5b0008b6fb504f16c776850146.png"}}]);