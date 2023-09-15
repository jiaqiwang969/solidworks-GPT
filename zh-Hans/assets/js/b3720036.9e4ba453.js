"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[77125],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>A});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},w=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(t),w=s,A=p["".concat(c,".").concat(w)]||p[w]||m[w]||r;return t?o.createElement(A,i(i({ref:n},l),{},{components:t})):o.createElement(A,i({ref:n},l))}));function A(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=w;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[p]="string"==typeof e?e:s,i[1]=a;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}w.displayName="MDXCreateElement"},24025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(87462),s=(t(67294),t(3905));const r={title:"Select Named Entity (face, edge or vertex) using SOLIDWORKS API",image:"face-name.png",labels:["face","edge","vertex","name","selection"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-named-entity/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-named-entity/index",title:"Select Named Entity (face, edge or vertex) using SOLIDWORKS API",description:"This example demonstrates how to select a named entity (face, edge or vertex) in the different document types using SOLIDWORKS API.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-named-entity/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-named-entity",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-named-entity/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-named-entity/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-named-entity/index.md",tags:[],version:"current",frontMatter:{title:"Select Named Entity (face, edge or vertex) using SOLIDWORKS API",image:"face-name.png",labels:["face","edge","vertex","name","selection"]},sidebar:"tutorialSidebar",previous:{title:"Macro to select all features in SOLIDWORKS model by type using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-features-by-type/"},next:{title:"Select any SOLIDWORKS objects in a batch using API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/select-objects/"}},c={},d=[],l={toc:d},p="wrapper";function m(e){let{components:n,...r}=e;return(0,s.kt)(p,(0,o.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This example demonstrates how to select a named entity (face, edge or vertex) in the different document types using SOLIDWORKS API."),(0,s.kt)("p",null,"Named entity can be only defined in the part document by selecting corresponding face or edge:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Face properties command in context menu",src:t(17714).Z,width:"498",height:"607"}),"{ width=250 }"),(0,s.kt)("p",null,"Name can be set in the displayed dialog and it is unique per part."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Face name dialog",src:t(65448).Z,width:"269",height:"193"}),"{ width=250 }"),(0,s.kt)("p",null,"Pointer to the entity can be retrieved via ",(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2014/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPartDoc~GetEntityByName.html"},"IPartDoc::GetEntityByName")," SOLIDWORKS API method."),(0,s.kt)("p",null,"This example enhances the functionality and also allows to select entity by name in drawing (from the selected drawing view) or assembly (from the selected component of part)."),(0,s.kt)("p",null,"Modify the value of the ",(0,s.kt)("em",{parentName:"p"},"ENT_NAME")," constant to define different name and change the value of ",(0,s.kt)("em",{parentName:"p"},"entType")," argument if edge or vertex needs to be selected"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const ENT_NAME As String = "MyEdge1"\nSelectNamedEntity swParentObject, ENT_NAME, NamedEntityType_e.Edge\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Enum NamedEntityType_e\n    Face\n    Edge\n    Vertex\nEnd Enum\n\nConst ENT_NAME As String = "Face1"\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swParentObject As Object\n        \n        If swModel.GetType() = swDocumentTypes_e.swDocPART Then\n            Set swParentObject = swModel\n        Else\n            Set swParentObject = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        End If\n                \n        SelectNamedEntity swParentObject, ENT_NAME, NamedEntityType_e.Face\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nSub SelectNamedEntity(parent As Object, name As String, entType As NamedEntityType_e)\n    \n    Dim swEnt As SldWorks.Entity\n    Set swEnt = GetNamedEntity(parent, name, entType)\n    \n    If TypeOf parent Is SldWorks.View Then\n        Dim swView As SldWorks.View\n        Set swView = parent\n        swView.SelectEntity swEnt, False\n    Else\n        swEnt.Select4 False, Nothing\n    End If\n    \nEnd Sub\n\nFunction GetNamedEntity(parent As Object, name As String, entType As NamedEntityType_e) As SldWorks.Entity\n    \n    Dim swEnt As SldWorks.Entity\n    \n    If parent Is Nothing Then\n        Err.Raise vbError, "", "Entity parent is not specified (open part or select drawing view or component in assembly or drawing"\n    ElseIf TypeOf parent Is SldWorks.PartDoc Then\n        Set swEnt = GetNamedEntityFromPartDoc(parent, name, entType)\n    ElseIf TypeOf parent Is SldWorks.Component2 Then\n        Dim swComp As SldWorks.Component2\n        Set swComp = parent\n        Set swEnt = GetNamedEntityFromPartDoc(swComp.GetModelDoc2(), name, entType)\n        Set swEnt = swComp.GetCorresponding(swEnt)\n    ElseIf TypeOf parent Is SldWorks.View Then\n        Dim swView As SldWorks.View\n        Set swView = parent\n        Set swEnt = GetNamedEntityFromPartDoc(swView.ReferencedDocument, name, entType)\n    Else\n        Err.Raise vbError, "", "Invalid parent selection: only drawing view or component is supported"\n    End If\n    \n    If swEnt Is Nothing Then\n        Err.Raise vbError, "", "Failed to find the entity by name"\n    End If\n    \n    Set GetNamedEntity = swEnt\n    \nEnd Function\n\nFunction GetNamedEntityFromPartDoc(model As SldWorks.ModelDoc2, name As String, entType As NamedEntityType_e) As SldWorks.Entity\n    \n    Dim selType As swSelectType_e\n    \n    Select Case entType\n        Case NamedEntityType_e.Face\n            selType = swSelFACES\n        Case NamedEntityType_e.Edge\n            selType = swSelEDGES\n        Case NamedEntityType_e.Vertex\n            selType = swSelVERTICES\n    End Select\n    \n    Dim swEnt As SldWorks.Entity\n    \n    If model Is Nothing Then\n        Err.Raise vbError, "", "Pointer to model doc is null"\n    End If\n    \n    If model.GetType() = swDocumentTypes_e.swDocPART Then\n        Dim swPart As SldWorks.PartDoc\n        Set swPart = model\n        Set swEnt = swPart.GetEntityByName(name, selType)\n    Else\n        Err.Raise vbError, "", "Document is not part doc"\n    End If\n    \n    If swEnt Is Nothing Then\n        Err.Raise vbError, "", "Failed to find the entity by name"\n    End If\n    \n    Set GetNamedEntityFromPartDoc = swEnt\n    \nEnd Function\n')))}m.isMDXComponent=!0},65448:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ0AAADBCAMAAADikRVBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAADqQkKvwqwA6Onajh9uQOv//tgA6kK/IwjMAAIng9HhNAOPj49DQ0IfOqwAAWOzs7PDw8EMAAJpVTHuc2qC61joAOsjd6s7BhSdxoYE7NCvE7xtDSrnR6bBdTM7h7VcAAK+rfyctM+zFv5m10Y1rMSvF8KrEvy5+y/7+/mJQf52guQAAMwArfMLZ5tbW1lYAWoNdg14rAM10YycAMpPEwJ7b3Do6kLuam+jx9qc/K1HS8pxXALa2208nNtXf5bx8MVeb2c7hy9fl80JMAMrfqKjr6z/O8q3F4HXDqbbO5+iqYUKInHp6VzF6eiYrWLzb29LS0pDb/3gxAOvrqI2+2lYAMeOdj7LL5amnfb1+c6a/2wBgq4TJ68Pv9atSQuPp7zjV/BgYGKK82N+UhlNWZqa/vGA2YCYAWVKh7f//2/PSy1ONubPm9d2jmOi9tZ2403fB3L/V7F8ANUSM36+OWnwxMYeHh6WHV7dgT9vbvOns8NLh8WGNfu3Nh6Lc7p9FM9v//5BmkEMUIo+Pj9vb29J+bjSRwgAtgKjC3cXa67pJM8zd75A6AOfw9QBMnMygXkJCQv/bkKrDnnBwcF09TXjc83VLAJbU56uts3i31ZVrZyVsvDMzgKpfAJg3JKh4c2nb9uvz92a2/9majv+2ZjLR+eS0q3TB7dDkqdHj7rb//8GKgYdKQjx/sc6HNu/vzVkAMmCp3wAAANXVmPDwq4c2YIbO8Lq7veWhlMNdSmYAOmEAAF+q8ABXnDqQ2+ipnNu8fJ9LPeLj6c7w8Krw8Lbp99vp7AAAAGAAYCdwwnW92dranLZmAIY1AKqLWZHD3rKAfC7O95Ti7Y9BOeGYiwAAYL5SPducV8hpV3u72jEAXl2k29Lw9wBmtijP5JNuMgAxezQ0NDWFzJvX6l3V8+fwrzLI87dCK4aqhjZgq4So7ABQoAAAOX1QAEQAMhxUW6dYSaXn9PCrYJfI49vn9JXj9AA1h+/JwuemmWEsADaHh0KIu3vF4Ljr+QAAAKhUcXwAAAEAdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AP//////////////////////////AP///////////////////////////////////////////////////////////////////////wDKzsC7AAAACXBIWXMAAA7DAAAOwwHHb6hkAAALVUlEQVR4Xu2dC5hUZRnHTxcQ2s3dtQjCDAxQJpbQzYikFgzLCbqQ6EYtWgiDykUhMA1rFYeNphso2FLhFrooJJfNJ4JqKUCwR0VQICKhlEvRBZYUC6Li6X3f751zvnPmcs6cue3seX/PM/N95z3f9zH/35xzZpnDPhghwUJs6IgNHbGhIzZ0TBuHg8tNN7GDuI3D928sV70g8pt3sA9l4/D88v5B5g9DlQ5l4/5gy+jf/8Z/kAeycXgjF4PLDDo4lI2gHxr9+7+q2XiYa8Hl1cOWjdDMoCM2dP6l2+gRdMSGTue2MejBqDsPDuLRnd1G7bBp7gyr5dGd3UZ02mZ3pkV5dOe38W93gmPjzM/dOZPCxqTORvTMZyxWRyKRF7Q2zpkoj5406U2pbAwwgOqDvMU0VTzLPYumJOM6CtF+v7WIQMbIjyavpnY1F4F+Xmws5A5z1+DrHR2maRkM9qjDOTffRPtNtkALoEM1n+MikHMbU2rgyQNFtfGC8kBPP/Bgo15jwEJqptT8twZOhHo8HxbWNy1TnSbcOWDw9TgCajBq2ZSaj19Q8Ww9nmC4s2kZ9GgAtDCfdl/tnJtvbDYmq8MCsMkAGzy6vt7dBkQpg9cOb2t9fRkkxw4+ptTMoRFYg/6Umk8dhFkVs2ADppYZy1QHc99VMUvtds7NN9GWv+jsVToivX/IBaLFsvFd3UZM42V4H43Bz8O7Hot99pZZsV2Dn4/FymADO4tPHqQigrUyjAst1tXwsoXYueIgVUgW7E6Ym28cNrZGKpFI7yu5QLREeXQsltoGxonFLq2Zg6mesNvADg+IlZE1NXBXBaZcfPIJGomdXSjVMObQ7oS5+Sba8k2NrZFyRWQvV4hUNsIaLx+n5tKzc8Jh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"},17714:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/face-properties-2f9c061871bfb628eda02d8fd6747a23.png"}}]);