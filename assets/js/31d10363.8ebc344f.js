"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[97615],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function A(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),a=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=a(e.components);return s.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=A(e,["components","mdxType","originalType","parentName"]),p=a(t),d=r,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?s.createElement(k,i(i({ref:n},c),{},{components:t})):s.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var A={};for(var l in n)hasOwnProperty.call(n,l)&&(A[l]=n[l]);A.originalType=e,A[p]="string"==typeof e?e:r,i[1]=A;for(var a=2;a<o;a++)i[a]=t[a];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>A,toc:()=>a});var s=t(87462),r=(t(67294),t(3905));const o={title:"Using persistent reference id in SOLIDWORKS API to track objects",caption:"Persistent Reference Id",description:"This article explains the use of persistent reference ids to track any selectable entity across SOLIDWORKS sessions",image:"persist-id-array.png",labels:["persistent","reference","tracking"]},i=void 0,A={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/persist-references/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/persist-references/index",title:"Using persistent reference id in SOLIDWORKS API to track objects",description:"This article explains the use of persistent reference ids to track any selectable entity across SOLIDWORKS sessions",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/persist-references/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/persist-references",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/persist-references/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/persist-references/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/persist-references/index.md",tags:[],version:"current",frontMatter:{title:"Using persistent reference id in SOLIDWORKS API to track objects",caption:"Persistent Reference Id",description:"This article explains the use of persistent reference ids to track any selectable entity across SOLIDWORKS sessions",image:"persist-id-array.png",labels:["persistent","reference","tracking"]},sidebar:"tutorialSidebar",previous:{title:"Macro for components configurations permutation using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/permutation/"},next:{title:"Utilizing SOLIDWORKS API methods in PowerShell scripts",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/power-shell/"}},l={},a=[],c={toc:a},p="wrapper";function m(e){let{components:n,...o}=e;return(0,r.kt)(p,(0,s.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Persistent reference ids available in SOLIDWORKS API allow to retrieve the persistent link to any selectable object in SOLIDWORKS. The main benefit of persistent reference is its life cycle as the reference remains valid across rebuild operations, SOLIDWORKS sessions or even SOLIDWORKS releases."),(0,r.kt)("p",null,"Persistent reference id is an array of bytes. This array may change for the same reference so it is not possible to compare two arrays to identify if the references are the same. Use ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~issamepersistentid.html"},"IModelDocExtension::IsSamePersistentID method")," to identify if two persist references are the same."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Array of bytes of persist reference displayed in the watch window of VBA Editor",src:t(53485).Z,width:"660",height:"321"}),"{ width=350 }"),(0,r.kt)("p",null,"Even if array may change for the same entity it is still possible to retrieve the valid pointer to the entity via ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldocextension~getpersistreference3.html"},"IModelDocExtension::GetPersistReference3")," SOLIDWORKS API method."),(0,r.kt)("p",null,"The following example outputs the persist id of any selected entity into immediate window in the format of base64 string"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Persist reference id converted to base64 string displayed in the immediate window of VBA Editor",src:t(31188).Z,width:"818",height:"120"})),(0,r.kt)("p",null,"Use this example to read the id of the entity."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The id output to immediate Window might contain line break. It should be removed from the id and should be considered as single line string")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swObj As Object\n        Set swObj = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swObj Is Nothing Then\n            Dim vId As Variant\n            vId = swModel.Extension.GetPersistReference3(swObj)\n            Debug.Print ConvertToBase64String(vId)\n        Else\n            MsgBox "Please select object to get its persist id"\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nFunction ConvertToBase64String(vArr As Variant) As String\n    \n    Dim xmlDoc As Object\n    Dim xmlNode As Object\n    \n    Set xmlDoc = CreateObject("MSXML2.DOMDocument")\n    \n    Set xmlNode = xmlDoc.createElement("b64")\n    \n    xmlNode.DataType = "bin.base64"\n    xmlNode.nodeTypedValue = vArr\n    \n    ConvertToBase64String = xmlNode.Text\n    \nEnd Function\n')),(0,r.kt)("p",null,"The following example allows to select the object by retrieving its pointer from persist id."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy the id from the previous macro"),(0,r.kt)("li",{parentName:"ul"},"Close the sample model"),(0,r.kt)("li",{parentName:"ul"},"Reopen the model and run the example."),(0,r.kt)("li",{parentName:"ul"},"Enter the copied id into the box"),(0,r.kt)("li",{parentName:"ul"},"The entities selected in previous example is re-selected")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim id As String\n        id = InputBox("Enter persist id encoded in base64 format")\n        \n        If id <> "" Then\n            \n            Dim vId As Variant\n            vId = Base64ToArray(id)\n            \n            Dim swObj As Object\n            Dim err As Long\n            \n            Set swObj = swModel.Extension.GetObjectByPersistReference3(vId, err)\n            \n            If Not swObj Is Nothing Then\n                Dim swSelObj(0) As Object\n                Set swSelObj(0) = swObj\n                swModel.Extension.MultiSelect2 swSelObj, False, Nothing\n            Else\n                MsgBox "Failed to get the object by persist reference. Error code " & err & " as defined in swPersistReferencedObjectStates_e"\n            End If\n            \n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nPrivate Function Base64ToArray(base64 As String) As Variant\n    \n    Dim xmlDoc As Object\n    Dim xmlNode As Object\n    \n    Set xmlDoc = CreateObject("MSXML2.DOMDocument")\n    Set xmlNode = xmlDoc.createElement("b64")\n    \n    xmlNode.DataType = "bin.base64"\n    xmlNode.Text = base64\n    \n    Base64ToArray = xmlNode.nodeTypedValue\n  \nEnd Function\n')))}m.isMDXComponent=!0},31188:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,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"},53485:(e,n,t)=>{t.d(n,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApQAAAFBCAMAAAD+Cs8PAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAKvOhzaHh4eHNrb/2///tuH//////zo6AJi00VrO/wA2hwAANM7OzraQOlZIdjYANlaA0TYAAGAANqtgAABgq3+Z//CrYOHO/zOZ/1qZ/7/N2zY2YHKgoAA6Otv/2wAAVP//21YoAKCr//DwqzYAYGUAZZm0lTaHzvDw8ABmZofO8P/bkIc2AIc2NqDu/2CHhwAoVCJls7ZmOs7w8GUAAMG8/4CAgDY2h/Dwzma2/3/e/7b//4NlMPDOh9v//5C2kCIAMOrq6mhoaGA2AMDAwKvwzgAAZTqQ2yIAAP+2Zv/e/9uQOlqr/zaHq5Db/87Oh8H//5A6Ztu2tp+goKDO/wBIlePj4yIAVJDbtuHu/zoAZjpmtoerh8Hu/5mAVJA6AABmtv/u/zpmZjY2Nj0oAM6HNkFyoJWWlbZmACIoAF+l0QA6kINyVKvw8AAodgAAOqCgij2A0ZmbdqC8/2Y6kH+r/9vbkGCr8GYAOm1IADoAOuHe/8HO/5mAdpA6OrbbkDqQtjoAAGaQkKCKWj1IADqQkD0AMIeHYDo6kD2As1okAAAAQQAAAGb/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///5x7KDQAAACOdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCbnvR6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAWEklEQVR4Xu2djYMcx1HFh4/TRopxEke2LAMhpyiyFZ8iMJxBn5dECEnrS4ziwwYZogsGwZGLEywCtkxIcuFLwB9Nvaqanc89y9rZneq+90vuemZ2zunuelvd0/08KSaEBKN4h5BgMFOScBTnCQkGRUnCQVGScFCUJBwUJQkHRUnCUfymYIfHCQlBMZncoChJKIp3dihKEoviPEVJgkFRknDURfnobVx59CP9rcdtds584EeELI26KO9/+QfQ3TP6u1LffVWpQlGSFVAX5cNvihwffvMfRHh66FCUZLXURblz5rXjx6+9jZEbQnx4pyikeFQUhVy5JsUHO2f+50yBTIpTlPetIGRAGg8610R8j16DICHMH/5AZOoCPX5NhvaHX9CxHZPOa/Ijoz0S6r9RlGRYGqIUmb38X/rfAx+mIUj8+AXNpQ//HLfoWC6HehshA9IQpUhPFDgTG0ZsF6U+A/mcUtKjjNpAhvOCk0wyNA1RytiNEfza2xidXz4oBdkjSjsVHt6ZHRIyDE1RXvu9vxXV3f/yf9go7XNH+fGn8VKUfgp0RCdkQJqifHgHz9IvH+A3hPfwTpklH8kvPOiYKPV053PH739gOiVkQJqi3DkjIjQF6pTyRz+Uc5k44qkciz8zUepC0Wu6asRESQamKUpCAkBRknAUOxQlCUZx4wZFSWLBf0eHhIP/NiMJh8wpdyZ2KEeEBEDmlO+UopTpJSHjU5z/ViXK8/4qtgy54WV+ZNiypiizZeeGNzI7cmwZRZk4FGWyUJQp0RXl9efUwHvrfT37ZK5/9UnvHBEN3aULz+vJSSsSqfonoC3zmD3zql9MnB5RZhCpDpZPTuk37ezmh3otI1EKOYXtSInS5GjSBBRlTA4R5QMZDa4/98qlr/93UTx//vpv/fGt989u6rB+ykYKK3C/DB969GtF8Yr9cTA8dDpwn5QqStXRpq++r7WXH29ZejREqe178LyHLNlGzZ1TSpukiRLASxcgxleuP/ehHH54/sFn/+DsF189f2pWSG8gA0n+EQXX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"}}]);