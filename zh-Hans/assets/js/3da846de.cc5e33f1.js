"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[51613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=i.createContext({}),l=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},S=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=l(n),S=o,g=d["".concat(a,".").concat(S)]||d[S]||u[S]||s;return n?i.createElement(g,c(c({ref:t},p),{},{components:n})):i.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,c=new Array(s);c[0]=S;var r={};for(var a in t)hasOwnProperty.call(t,a)&&(r[a]=t[a]);r.originalType=e,r[d]="string"==typeof e?e:o,c[1]=r;for(var l=2;l<s;l++)c[l]=n[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}S.displayName="MDXCreateElement"},81186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const s={title:"Select any SOLIDWORKS objects in a batch using API",caption:"Select Any Objects In A Batch",description:"Example demonstrates how to select any SOLIDWORKS objects (entities, features, annotations, etc.) in a batch mode",image:"select-objects.png",labels:["selection","batch selection","dispatch"]},c=void 0,r={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-objects/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-objects/index",title:"Select any SOLIDWORKS objects in a batch using API",description:"Example demonstrates how to select any SOLIDWORKS objects (entities, features, annotations, etc.) in a batch mode",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-objects/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-objects",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-objects/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-objects/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-objects/index.md",tags:[],version:"current",frontMatter:{title:"Select any SOLIDWORKS objects in a batch using API",caption:"Select Any Objects In A Batch",description:"Example demonstrates how to select any SOLIDWORKS objects (entities, features, annotations, etc.) in a batch mode",image:"select-objects.png",labels:["selection","batch selection","dispatch"]},sidebar:"tutorialSidebar",previous:{title:"Select Named Entity (face, edge or vertex) using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-named-entity/"},next:{title:"Select standard reference geometry (e.g. Front plane or origin) by type using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-standard-ref-geometry/"}},a={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...s}=e;return(0,o.kt)(d,(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Different object types selected in the graphics area",src:n(92256).Z,width:"977",height:"367"})),(0,o.kt)("p",null,"This example demonstrates how to select any SOLIDWORKS objects (entities, features, annotations, etc.) in a batch mode."),(0,o.kt)("p",null,"This technique can be useful when the type of the object is not known in advance. It also gives performance benefits when selecting several objects at a time instead of selecting one-by-one using SOLIDWORKS API."),(0,o.kt)("p",null,"The following example provides similar functionality to SOLIDWORKS ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/whatsnew/t_creating_selection_sets.htm"},"Create Selection Set")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Selection Set context menu command",src:n(5029).Z,width:"325",height:"377"}),"{ width=300 }"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open any model and select any objects (this can be different types objects like features, entities, annotations etc.)"),(0,o.kt)("li",{parentName:"ul"},"Run the macro. Macro will collect the pointers of all selected object"),(0,o.kt)("li",{parentName:"ul"},"Macro clears the selection and stops the execution"),(0,o.kt)("li",{parentName:"ul"},"Continue the execution and all previously selected objects are reselected.")),(0,o.kt)("details",{open:!0},(0,o.kt)("summary",null,"VBA Example"),"~~~ vb Dim swApp As SldWorks.SldWorks",(0,o.kt)("p",null,"Sub main()"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Set swApp = Application.SldWorks\n\nDim swModel As SldWorks.ModelDoc2\n\nSet swModel = swApp.ActiveDoc\n\nIf Not swModel Is Nothing Then\n    \n    Dim vObjects As Variant\n    vObjects = GetAllSelectedObjects(swModel)\n    \n    swModel.ClearSelection2 True\n    \n    Stop\n    \n    swModel.Extension.MultiSelect2 vObjects, False, Nothing\n    \nElse\n    MsgBox "Please open the document"\nEnd If\n')),(0,o.kt)("p",null,"End Sub"),(0,o.kt)("p",null,"Function GetAllSelectedObjects(model As SldWorks.ModelDoc2) As Variant"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Dim swSelMgr As SldWorks.SelectionMgr\nDim swObjects() As Object\n\nSet swSelMgr = model.SelectionManager\n\nDim i As Integer\n\nFor i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n    \n    Dim swObj As Object\n    Set swObj = swSelMgr.GetSelectedObject6(i, -1)\n    \n    ReDim Preserve swObjects(i - 1)\n    Set swObjects(i - 1) = swObj\nNext\n\nGetAllSelectedObjects = swObjects\n")),(0,o.kt)("p",null,"End Function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\n\n</details>\n\n<details open>\n<summary>C# Example</summary>\n~~~ cs\nusing System.Collections.Generic;\nusing SolidWorks.Interop.sldworks;\nusing System.Diagnostics;\nusing System.Runtime.InteropServices;\n\nnamespace CodeStack\n{\n    public partial class SolidWorksMacro\n    {\n        public void Main()\n        {\n            List<DispatchWrapper> swObjects = new List<DispatchWrapper>();\n\n            IModelDoc2 model = swApp.IActiveDoc2;\n\n            if (model != null)\n            {\n                ISelectionMgr selMgr = model.ISelectionManager;\n\n                for (int i = 0; i < selMgr.GetSelectedObjectCount2(-1); i++)\n                {\n                    object swSelObj = selMgr.GetSelectedObject6(i + 1, -1);\n                    swObjects.Add(new DispatchWrapper(swSelObj));//it is required to wrap dispatch pointers to allow selection of objects of different types (i.e. faces, annotations, components etc.) together\n                }\n\n                model.ClearSelection2(true);\n\n                Debugger.Break();\n\n                model.Extension.MultiSelect2(swObjects.ToArray(), false, null);\n            }\n            else\n            {\n                swApp.SendMsgToUser("Please open the model");\n            }\n        }\n\n        public SldWorks swApp;\n    }\n}\n\n\n'))))}u.isMDXComponent=!0},5029:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAAF5CAMAAAA/Esi5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAm3ChNLaLBjAPf391kbF3RSAGOvrwAAOLGxsQAAW8FMUQ2gEWSOqIq+1AA3VYs4AE6zhi95nQBRorCLOG9xcrLAxyMjI5qkqjaOxLKLiqS0u8oWFiUAW4q7TQAtgGyKmyUAANrFiwBji10tM2Ow98XR12JiYlOSsCUAMyYOoVuFxGyGlzNvNjg4OH2YpppSSiRZqTiLi6XH4qGVgRQUFNSwY9SLY80lJWe42SRsisjBsoyy+cWxi0R/1dfY1Tg4Y3qBhWMAAOFPLqaPW9rFmjx5l9KHiI5KczExMWOYvXuivIIyLYGJjsrW3aqqqiZ1LdwoAM6UKJy91/PIvqzF2WGv0t+0OeZnS5mamsPCvru8vE6buyFceVdWUkGItKXGoYuy6fflaTAzhgBjsGWnxenVh4rT9jqQ212s4/f1sJOTlGhqbH2o5T0+PxI1QSpnxUhvhUKBn+nMPlpanWMAOJSptGCmaRuLIQU8WcC3n6asgHbI467N5ZRHbOyYhcVtNLH29/vfjaG7yuh8ZIyMjOBHJrOmiCligUpLTFmoyOfapjGErIyPkiVMZWKW3mWDabPN4Tg4AP+2ZpDb/yorK4KCgvK/tIPL6Y5yM943Em2xzzRxkHh4eIaGhrYvPulLRJffsDgAOIyxjEKArs6wr83NzduQOnWheTgAAFxdXtgbGDgAYjtrr0yIpo/K5fbUirDUi9XRxhsbG8VmZu2kluPBDtLd5EOP49zc2868j2a2/0RERc2zsj1leViWtDlxj6WlpTCoDqUfG6DV6zKCN2GiwGMAYyVxw4uL1BpVdN+kQPewY4qojDiL1NSLOIuEay1acl0tALvJ0Pb100yAwPewi1qR3cXFxfC0psszMna72XG104tji2aYsUJ8mgA4i9K9vHN8gkdUX2msynalvImmvc/Bm0NALnvC4OqLdt7t7gtDYS9riUqEoV0tW0+Nq8GtixemMlycui51mChbekFES9TU1L/M0wAAY9HUkvjgTDB+pKbIwyVUbQAAANpWKbgAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAiH0lEQVR4Xu2dD3wcxXXHVesCdlJzKon/NKYtSSusNkROapt/gagYcLokSHGJaVxhQwLC5STMnxQHQ9RUShz8B0opsQNIIs2fisgORolDxTkqtgpVU1exC1aCg0xxiWqirOVCBQi3Dp++9+bN7O7d7ulOGo/uTvP7wO7M7Mzqs1+/N7M3b3e2JDaG4gMDh1pauuvqekdG4lwGKr2edvtLSkowVboPUoddKoNMLNZfto/2nR1U3l92VVnJ9NVwEOrRvmC0lfeZNDbFQ4daBge7ewHi7jSK+483ASBIlpbsEwmUoFhO+3NXU3l/GaArBZz74f8+aFU40kOxpWWwrm4LMNxdkUoxcTtaVed3m0S285vCyJBeKZDCParvsIumiRWpBRIuHOmhODhY19u7eGR3RcWrqRSFUSEZAiagwjFwc/RuKkSfR4oADij3QQ409ShSjwiG+OqrO7KlyDYI+8QS9GAfxYJyZpIeitQjgiHu2HEslaJwYeXREpGPIh7DvlBSlE5fQNJDkQxx8as7ju1ZmTa6YO9HXV4pOGliiUdP7pFaZ4dHUbR4kQfzgpAmimiIi1v3rjv7LC5CCYrU6yGz0mvKxC0PykcRKxw+x0eROk0+XhjSQ3F3xY7haYvPruZ8uCS4IpQeihumvb32rMWci5KlmFm3zsatpZhRY1Kc8rIUdchS1CFLUYcsRR2yFHVII8Vu3My+ldJTTDopVq99du9S3+/oTNo6VcTXmyXF6jO7N+xoOXQoW4q8L3blQvGss9cN7+6m6IulGFAOFONLe4eGBrop+qIo4sSMiFr5Zl1p3gZlKaYpPgQQ0RAH6+o8ikBQTSdKWYrRiiNDNMS63t4ARQrn+WUpRis0Hi0owobmcsC/D78Ho6Ui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"},92256:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/select-objects-b28c60ab804241085411bec1272c0e77.png"}}]);