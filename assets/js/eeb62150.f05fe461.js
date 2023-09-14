"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[86706],{3905:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>m});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=t.createContext({}),l=function(e){var n=t.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},c=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(o),p=r,m=u["".concat(d,".").concat(p)]||u[p]||f[p]||a;return o?t.createElement(m,i(i({ref:n},c),{},{components:o})):t.createElement(m,i({ref:n},c))}));function m(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},84103:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=o(87462),r=(o(67294),o(3905));const a={layout:"sw-tool",title:"Run VBA macro on model load using macro feature and SOLIDWORKS API",caption:"Automatically Run Macro On Model Load",description:"Macro feature to run VBA code on model loading using SOLIDWORKS API",image:"load-watcher-macro-feature.png",labels:["macro feature","load event","auto run"],group:"Model"},i=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macro-feature/model-load-watcher/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macro-feature/model-load-watcher/index",title:"Run VBA macro on model load using macro feature and SOLIDWORKS API",description:"Macro feature to run VBA code on model loading using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macro-feature/model-load-watcher/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macro-feature/model-load-watcher",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macro-feature/model-load-watcher/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macro-feature/model-load-watcher/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macro-feature/model-load-watcher/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Run VBA macro on model load using macro feature and SOLIDWORKS API",caption:"Automatically Run Macro On Model Load",description:"Macro feature to run VBA code on model loading using SOLIDWORKS API",image:"load-watcher-macro-feature.png",labels:["macro feature","load event","auto run"],group:"Model"},sidebar:"tutorialSidebar",previous:{title:"Link Cut-List Custom Properties To File With SOLIDWORKS Macro Feature API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macro-feature/link-cut-list-properties/"},next:{title:"Create MultiBoss-Extrude VBA macro feature using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macro-feature/multi-extrude/"}},d={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Macro Module",id:"macro-module",level:2},{value:"HandlerModule Module",id:"handlermodule-module",level:2}],c={toc:l},u="wrapper";function f(e){let{components:n,...a}=e;return(0,r.kt)(u,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"{% youtube { id: BTM5NZNdON8 } %}"),(0,r.kt)("p",null,"This VBA macro inserts the macro feature into the model using SOLIDWORKS API and allows to run custom code every time the model with this feature is loaded."),(0,r.kt)("p",null,"This can be useful when certain code needs to be run on every model load (e.g. update custom properties, log information, etc.)"),(0,r.kt)("p",null,"Feature is visible in the tree and can be embedded into the document template if required."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Macro feature inserted into the feature manager tree",src:o(62071).Z,width:"382",height:"418"}),"{ width=250 }"),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create new macro")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy the code into corresponding modules of the macro")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To configure the macro modify the options defined in the constants:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"EMBED_MACRO_FEATURE - true to embed this macro directly into the document. With this option model can be shared and will work on each computer (macro doesn't meed to be shared). Refer the ",(0,r.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/document/macro-feature/#macro-based-macro-feature"},"Macro Based Macro Feature")," section for benefits and limitation of this approach."),(0,r.kt)("li",{parentName:"ul"},"BASE_NAME - default naming convention for the feature")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const EMBED_MACRO_FEATURE As Boolean = True\nConst BASE_NAME As String = "MyFeatureName"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Place your code into the ",(0,r.kt)("em",{parentName:"li"},"main")," sub of the ",(0,r.kt)("em",{parentName:"li"},"HandlerModule")," module. The pointer to ",(0,r.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModelDoc2.html"},"IModelDoc2")," document is passed as the parameter. Use this pointer instead of ",(0,r.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isldworks~activedoc.html"},"ISldWorks::ActiveDoc")," SOLIDWORKS API property as this method is called for invisible documents (i.e. loaded as assembly or drawing components).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Sub main(model As SldWorks.ModelDoc2)\n    'TODO: add your routine here\nEnd Sub\n")),(0,r.kt)("h2",{id:"macro-module"},"Macro Module"),(0,r.kt)("p",null,"Main macro routine to insert feature and define event handles"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const EMBED_MACRO_FEATURE As Boolean = False\nConst BASE_NAME As String = "ModelLoadWatcher"\n\nDim HandledModels As Collection\n\nSub main()\n\n    Dim swApp As SldWorks.SldWorks\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim curMacroPath As String\n        curMacroPath = swApp.GetCurrentMacroPathName\n        \n        Dim vMethods(8) As String\n        Dim moduleName As String\n        \n        GetMacroEntryPoint swApp, curMacroPath, moduleName, ""\n        \n        vMethods(0) = curMacroPath: vMethods(1) = moduleName: vMethods(2) = "swmRebuild"\n        vMethods(3) = curMacroPath: vMethods(4) = moduleName: vMethods(5) = "swmEditDefinition"\n        vMethods(6) = curMacroPath: vMethods(7) = moduleName: vMethods(8) = "swmSecurity"\n        \n        Dim opts As swMacroFeatureOptions_e\n        \n        If EMBED_MACRO_FEATURE Then\n            opts = swMacroFeatureOptions_e.swMacroFeatureEmbedMacroFile\n        Else\n            opts = swMacroFeatureOptions_e.swMacroFeatureByDefault\n        End If\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = swModel.FeatureManager.InsertMacroFeature3(BASE_NAME, "", vMethods, _\n            Empty, Empty, Empty, Empty, Empty, Empty, _\n            Empty, opts)\n        \n        If swFeat Is Nothing Then\n            MsgBox "Failed to create model load watcher"\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nSub GetMacroEntryPoint(app As SldWorks.SldWorks, macroPath As String, ByRef moduleName As String, ByRef procName As String)\n        \n    Dim vMethods As Variant\n    vMethods = app.GetMacroMethods(macroPath, swMacroMethods_e.swMethodsWithoutArguments)\n    \n    Dim i As Integer\n    \n    If Not IsEmpty(vMethods) Then\n    \n        For i = 0 To UBound(vMethods)\n            Dim vData As Variant\n            vData = Split(vMethods(i), ".")\n            \n            If i = 0 Or LCase(vData(1)) = "main" Then\n                moduleName = vData(0)\n                procName = vData(1)\n            End If\n        Next\n        \n    End If\n    \nEnd Sub\n\nFunction swmRebuild(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmRebuild = True\nEnd Function\n\nFunction swmEditDefinition(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n    swmEditDefinition = True\nEnd Function\n\nFunction swmSecurity(varApp As Variant, varDoc As Variant, varFeat As Variant) As Variant\n\n    Dim swFeat As SldWorks.Feature\n    Set swFeat = varFeat\n    \n    If HandledModels Is Nothing Then\n        Set HandledModels = New Collection\n    End If\n\n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = varDoc\n        \n    If Not CollectionContains(HandledModels, swModel) Then\n        \n        HandledModels.Add swModel\n        Dim swApp As SldWorks.SldWorks\n        Set swApp = varApp\n        ClearCache swApp\n        \n        OnModelLoad swModel\n        \n    End If\n\n    swmSecurity = SwConst.swMacroFeatureSecurityOptions_e.swMacroFeatureSecurityByDefault\n\nEnd Function\n\nSub ClearCache(app As SldWorks.SldWorks)\n    \n    If Not HandledModels Is Nothing Then\n    \n        Dim vDocs As Variant\n        vDocs = app.GetDocuments\n        \n        If Not IsEmpty(vDocs) Then\n            \n            Dim i As Integer\n            \n            For i = HandledModels.Count To 1 Step -1\n            \n                Dim swModel As SldWorks.ModelDoc2\n                Set swModel = HandledModels(i)\n                \n                If Not ArrayContains(vDocs, swModel) Then\n                    HandledModels.Remove i\n                End If\n                \n            Next\n            \n        End If\n        \n    End If\n    \nEnd Sub\n\nFunction CollectionContains(coll As Collection, model As SldWorks.ModelDoc2) As Boolean\n\n    Dim i As Integer\n\n    For i = 1 To coll.Count()\n        If coll(i) Is model Then\n            CollectionContains = True\n            Exit Function\n        End If\n    Next\n\n    CollectionContains = False\n\nEnd Function\n\nFunction ArrayContains(arr As Variant, model As SldWorks.ModelDoc2) As Boolean\n\n    Dim i As Integer\n\n    If Not IsEmpty(arr) Then\n        For i = 0 To UBound(arr)\n            Dim thisModel As SldWorks.ModelDoc2\n            Set thisModel = arr(i)\n            If thisModel Is model Then\n                ArrayContains = True\n                Exit Function\n            End If\n        Next\n    End If\n    \n    ArrayContains = False\n\nEnd Function\n\nSub OnModelLoad(model As SldWorks.ModelDoc2)\n    HandlerModule.main model\nEnd Sub\n')),(0,r.kt)("h2",{id:"handlermodule-module"},"HandlerModule Module"),(0,r.kt)("p",null,"Module to insert required code to be run every time model loads. Must be named ",(0,r.kt)("em",{parentName:"p"},"HandlerModule")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Sub main(model As SldWorks.ModelDoc2)\n    'TODO: add your routine here\n    MsgBox model.GetTitle()\nEnd Sub\n")))}f.isMDXComponent=!0},62071:(e,n,o)=>{o.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX4AAAGiCAMAAADX+F2aAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAi/CYs4AGNjAJd3FPf393h4eAAAY3vC4LsdHBGaFTgAALLCyQA3VWyJJ5CMYJqZmRsbG69SPQBjsNzFY9TMtbG6CyGElSYOoYNjZQA4i2Ow9zgAOEsiIjaOxH1bAXesxjgAYypjgeDbzAAAOL6aB7lzcxpTcc25Z2eatENDQ7DUi8RZQL+sRWMAOIGbqfewYysrK+nDCXiUecPQ12MAALLn5lSQrSpkwGOw1DiK1IfO6lVVVY98PSJWg3pjHuswA9fQxD9xQmM4ANbW1gwMDNXSz9HY3Edug9TU06SkoxicZvfUi9SLYuq2K97g3rSic42NjTk5OYEYFbiZOqeGPbKyst7FT2aHmAJAXeZ+f4mv9daury51mfjiXVGClXJycmMAYzg4Y9+7DMOvYjg4i3Oa3MTExFV3pDIyMpKtwCaLJaWCLe0cJHJaIZrI3vfHx/bKIGOwsLoyJOdeXVmYtrBjAItjiyIiIrTO8p6Naa+kjdvJeFQ+FMzFuuaxGWJiYjpykUFwv9SLOLGMjZy+7Weoxs3NzXUkJdjZ1xxtjxRJZkiLS9T29ktLS4l5U5SptYKCgu6fnru7uqurq4w3OJGxktO6NbCVN2V8Ydvb2lbDCjg4AGmsyodxOfHx2GaLaJZ1JXSRoE6LqV2gFSdVb3O41l+gvurq6SBapVqP2Nu2IAu0FPb1rWM4i9IcAe6srbCKGzqLr8+pHaiPR8SSl0cxCttCRW4WEr+ZH26e4qi7xNTIyTBsiu2Skni92sXh7ZOTk1OSsb+zlzh20opkH51dX9zIiFg8PThjsJOHQIrT9mywzvTOC1KlVtAnLHC00lx9jz97mUqGpKN7IDKCqGNJExQUFNO4SGuhvcGgoi4tLczV2ixwk6zF0QZEYqKWgScmJuFpaV5bWgU7WOJOTyZbeK+KN7vJz1eWtNSwY1ubud+1uosqKciyVj1ri/ewi8gVGxmzEi58oZC6z4GovK/29pBpINs3NOrAHmloaPw/BZywuWKkwS2sLgAAAJeCqJcAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAhXElEQVR4Xu2dD5wcVX3Az8geaLx6Z7CtRKtEFFlLzVkCNIRq20vl0rPHbTWGKBpL23MtxWLtcVWgxFPWNHJyvaB2WxyBClPxVECiaCMkgrYGBIkhWEAa/imi+CeIGqGf/n6/93tv3szO7u3M2+Ntdn/fz93uzLw372a+8/bN7LzfvekZzsEMv7eO1pe4gMwUstEgv+jPjuj3iuj3Siv1zwiZYXfN0kg/vwsLh+j3SiP9w8PwOi4sGPPpz9qUCRlp2PhkPpMIGWmoX1hoRL9XRL9XRL9XOkp/pb+/wpMHCJ2kv7JmdnzLgeW/k/T3z1YqlX6eOTDoKP2V4WpV9PuisrYazErj4w059QqZEP1eEf1eEf1eEf1eEf1eEf1emVc/d0sKC4DUfs+Ifq+Ifq+Ifq/Mq59jFw94aGfajlbV/mbjkL3l4+1sM0S/Vw4c/UOjYTg6xDOGZL6huy/8wBc+8GfPOZfnNR2jPzz3Q+e858U8Y7A1vKIvwSs4AYjrKpfLw/vhBd4S1OqvhsViWOUZQyLfa96y7G2/+MWDL732qxfxEqZD9J97xtfPnps7+2PnvIcXMLaGvkMS9HECkNBfKA+Xi/jtr1zhRUxS/1A1QP1BNVH/4/nu/v23vfHadz24/gWTz7v2h3/MC4kO0b/1qp8/eujLPnfJ67byAiam/8kEjfXPUP3fz4uYhP5NQbBmf7G4f00QbOJFili+1/zok++/4LPr7/vnvZOT//WDH9pHqlP0n/nL62563Rve/OZG+mvgBCCpn9RjAYnmJ55vUzA+XQLK8FGJ+7fzDb3tvV/8h8Lffvm+L98/MDn5vDddZPlvH/2xa+Bs+p/7oTvOPPPMm94MNNBPOi1CS21S/9ogCDC/nQeJ5RsK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"}}]);