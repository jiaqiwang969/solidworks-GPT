"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[68714],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>A});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=t.createContext({}),l=function(e){var n=t.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},d=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},w=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(o),w=r,A=p["".concat(c,".").concat(w)]||p[w]||f[w]||i;return o?t.createElement(A,a(a({ref:n},d),{},{components:o})):t.createElement(A,a({ref:n},d))}));function A(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=w;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}w.displayName="MDXCreateElement"},29126:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=o(87462),r=(o(67294),o(3905));const i={title:"Compare model views transformations using SOLIDWORKS API",caption:"Compare Model Views",description:"Example demonstrates how to compare 2 model views (by orientation, translation and scale)",image:"view-orientation.png"},a=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/compare-model-views/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/compare-model-views/index",title:"Compare model views transformations using SOLIDWORKS API",description:"Example demonstrates how to compare 2 model views (by orientation, translation and scale)",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/compare-model-views/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/compare-model-views",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/compare-model-views/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/compare-model-views/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/compare-model-views/index.md",tags:[],version:"current",frontMatter:{title:"Compare model views transformations using SOLIDWORKS API",caption:"Compare Model Views",description:"Example demonstrates how to compare 2 model views (by orientation, translation and scale)",image:"view-orientation.png"},sidebar:"tutorialSidebar",previous:{title:"Combine identical components command in SOLIDWORKS BOM table",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/combine-identical-components/"},next:{title:"SOLIDWORKS VBA macro to compose flat BOM table using API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/compose-flat-bom/"}},c={},l=[],d={toc:l},p="wrapper";function f(e){let{components:n,...i}=e;return(0,r.kt)(p,(0,t.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Model View Orientation",src:o(36882).Z,width:"414",height:"328"}),"{ width=250 }"),(0,r.kt)("p",null,"This example demonstrates how to compare two model views in part or assembly using SOLIDWORKS API."),(0,r.kt)("p",null,"Macro will identify the changes and display the result if"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Views are the same"),(0,r.kt)("li",{parentName:"ul"},"Views are of different orientation (i.e. rotated)"),(0,r.kt)("li",{parentName:"ul"},"Views are of different translation (i.e. moved)"),(0,r.kt)("li",{parentName:"ul"},"Views are of different scale")),(0,r.kt)("p",null,"Macro is using ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/data-structures/types/"},"user defined type")," ",(0,r.kt)("strong",{parentName:"p"},"ViewData")," to store the orientation, translation and scale of the view. This structure is not linked to the view and represents the snapshot of view transformation."),(0,r.kt)("p",null,"Result of the ",(0,r.kt)("strong",{parentName:"p"},"CompareViewData")," function is defined as ",(0,r.kt)("em",{parentName:"p"},"CompareViewResult_e")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/data-structures/enumerators#flag-enumerator-multiple-options"},"flag enumerator"),". This allows to return specific change in the view orientation or combination of changes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the model and start the macro."),(0,r.kt)("li",{parentName:"ul"},"Macro will pause the execution once the data from the first view is read."),(0,r.kt)("li",{parentName:"ul"},"Change the view and continue the execution of the macro."),(0,r.kt)("li",{parentName:"ul"},"Result is displayed in the message box.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Type ViewData\n    ViewScale As Double\n    Orientation As SldWorks.MathTransform\n    Translation As SldWorks.MathVector\nEnd Type\n\nEnum CompareViewResult_e\n    Same = 0\n    DiffOrientation = 2 ^ 0\n    DiffTranslation = 2 ^ 1\n    DiffScale = 2 ^ 2\nEnd Enum\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swView As SldWorks.ModelView\n        Set swView = swModel.ActiveView\n        \n        If Not swView Is Nothing Then\n            \n            Dim origViewData As ViewData\n            origViewData = GetViewData(swView)\n            \n            Stop \'move the view now\n            \n            Dim newViewData As ViewData\n            newViewData = GetViewData(swView)\n            \n            Dim compRes As CompareViewResult_e\n            compRes = CompareViewData(origViewData, newViewData)\n            \n            If compRes = Same Then\n                MsgBox "Views are the same"\n            Else\n                Dim msg As String\n                \n                If compRes And DiffOrientation Then\n                    msg = msg & vbLf & "Orientation"\n                End If\n                \n                If compRes And DiffTranslation Then\n                    msg = msg & vbLf & "Translation"\n                End If\n                \n                If compRes And DiffScale Then\n                    msg = msg & vbLf & "Scale"\n                End If\n                \n                MsgBox "Views are not the same. Differences:" & msg\n                \n            End If\n            \n        Else\n            MsgBox "Please open part or assembly"\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\nFunction GetViewData(view As SldWorks.ModelView) As ViewData\n    \n    Dim data As ViewData\n    \n    Set data.Orientation = view.Orientation3\n    Set data.Translation = view.Translation3\n    data.ViewScale = view.Scale2\n    \n    GetViewData = data\n    \nEnd Function\n\nFunction CompareViewData(firstViewData As ViewData, secondViewData As ViewData) As CompareViewResult_e\n    \n    Dim res As CompareViewResult_e\n    res = Same\n    \n    If Not CompareArrays(firstViewData.Orientation.ArrayData, secondViewData.Orientation.ArrayData) Then\n        res = res + DiffOrientation\n    End If\n    \n    If Not CompareArrays(firstViewData.Translation.ArrayData, secondViewData.Translation.ArrayData) Then\n        res = res + DiffTranslation\n    End If\n    \n    If firstViewData.ViewScale <> secondViewData.ViewScale Then\n        res = res + DiffScale\n    End If\n    \n    CompareViewData = res\n    \nEnd Function\n\nFunction CompareArrays(firstArr As Variant, secondArr As Variant) As Boolean\n    \n    If UBound(firstArr) = UBound(secondArr) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(firstArr)\n            If firstArr(i) <> secondArr(i) Then\n                CompareArrays = False\n                Exit Function\n            End If\n        Next\n        \n        CompareArrays = True\n    Else\n        CompareArrays = False\n    End If\n    \nEnd Function\n')))}f.isMDXComponent=!0},36882:(e,n,o)=>{o.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZ4AAAFICAMAAABXxWgPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAMDAwP8AAPHw5AD/APdHRwAA//P0+EjfLuLl7RkZWLMZGfz8/f3k5P3w8PHl6a/XlhmDGUwZGfLk2O3v9HjcX+bo7+40KeiGeiHMIRk5Geyys/D98PgfHexoXfjr7dTVu+nr8hkZiw3yAErgSpbcfO+ZmRkZHu07L+7i6HwZGRm6GfMLAD/hJvXo607/TnRXV8JxcY3mgPDy9psZGcXjuCXwGOvQ0RkZL+xZTvAmGxnmAOy+wPkuLqPaimfdTuqIfFfdPhkAABlbGe2joxmiGe1BNhkZpPvu7+fc4O3s4vXc3uvg5RkZdDDjF20ZGfj4+voiIoHodErqPcfWrpD2kOHTx/wWFvZXV2TdSzXkNep8cWT/ZPkqKu/u4/Dj5DLtJRrFGkHrNDcZGe6UlRkKABlzGXPcWq7albjjq/c9PfVnZ4kZGVTeO+W6rxkZQn7xft7QxOne4+XYzPZDQxmVGX/bZvN5efg0NPkxMe62t3A0NGLpVfg4ORmsGboZGezDxIv1i6wZGRkZmrzWohlUGTzhI/scHJLlhfSDgxkZZGroXe+OjtPhxjnsLFbpSVwZGRrLGhkZq8nWsOM+Ju2pqvZLS3nnbPhMTO+xsfZTU0XgLPdAQKrlnfKdnU7fNHT/dPZPTyUMDO7FxhljGfVdXScZGfOPj57kkVz/XBkZfIvbcnDdVnz/fC7cLvKHiEPgKp7YhfKpqZIZGfR0dPViYlLpRRmzGfKLi/Rqal/dRU/fNsjfu/J+fjjhHhkZOxkZkvqRkevZ00LzQg0MAIEZGcAZGfGTkxrPGvCkpWvdUvXMze8wJfG4uHUZGUUZGePVyjvrOxklGUvfMRlEGVvdQafYjaQZGTbiHN/e0hmbGXrcYS7tIRlqGVUZGdbYvXLnZeiTh4PbaRl6GRkZgjbtKbvaoVvpToTzhOy5ulT/VE7qQYT/hEbrORkZTKXjmBkZa7PWmmz/bGIZGT3sMO1GOyfTJ7rprYz/jMnZsCruHVDiUO8rHpjafqHllAAAAFF4bzIAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAhbklEQVR4Xu3dD3yUd33A8XrlNlaBVBlWV12ZsVEqQefszlmeZLTUejyn7SMIwfnrtUgHvcCmdym5y7g2VnbXWIt2HbFJrsEMIypMrpS0hEh0z6gIlprJ0gbbtQ6FWqudzuoGo772/f2e3/1/nnv+/Z4/d/d85iv3JwFyz5vv7/nd5Vgv+gMvF+fxuDqPx9V5PK7O43F1Ho+r83hcncfj6jweV+fxuDqPx9V5PK7O43F1Ho+r83hcncfj6jweV+fxuLqL3kCveLmxi96gOforvGxMB4969Pf0YhZTnhqKPny316g8pvP58Ed6FC3L4zGWL0h4qkWPsKk8HiP5fEF1nqrRw6+Wx6M/jGOWR2Mej94kHI/HleVwPB4XVsDxeNxXEY7H47aKRweqdR6f9MytTvL5oqXVPA88hHoRqsCpCx78KOpASAanXnigGheSxakjHqiGgeRx6otHzwj9iZsqG51gcP36pUFy1Ue/ojL6OFgkx0P/FLNV/LUDIfqpWql8XQuOI0iNR1P0WKt0Ef1qC5JbFWpKqOKkExxB8UQkmSQ+djwQu3mgWhGq3BEEBxF3YMdIEg3gW7Y8Cvt5oBoQ8vlC5UX7UHJ9MNgbj6+Pws364pEeYj6XA1XihEKBJNoRDHYKnBCsCx7pUSnl4hGSGR08PNxYsBsJQpIMT73zQO4UKsOJBpeTaQn6I4czgoAOtgTJ/fXPA7lOqHxyggcRErrBZymKJAWhOxhMJBpkeqTcJFSxrAWDXCLTj2BgWtKcMBqApz6JcTI+jcIDuUSoEmd8Nxc/cCDJLQ1FD3L9S6Oh6NIEGiCfayAeyAVAFd9wNJHsTxwOBpPJ5ZgnEwwFL++HDQL5ZF3zLKoMRugPHczno99HoSCXSXYH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"}}]);