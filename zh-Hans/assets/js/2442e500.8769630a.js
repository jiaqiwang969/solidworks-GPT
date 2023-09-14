"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var A=n.createContext({}),p=function(e){var t=n.useContext(A),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(A.Provider,{value:t},e.children)},w="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,A=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),w=p(r),u=s,d=w["".concat(A,".").concat(u)]||w[u]||c[u]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=u;var a={};for(var A in t)hasOwnProperty.call(t,A)&&(a[A]=t[A]);a.originalType=e,a[w]="string"==typeof e?e:s,i[1]=a;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46954:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>A,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const o={layout:"sw-tool",title:"Rename SOLIDWORKS drawing sheets with custom properties values",caption:"Rename Drawing Sheets With Custom Properties Values",description:"Macro will rename all drawings sheets using the value of the specified custom property using SOLIDWORKS API",image:"drw-sheets.png",labels:["custom property","drawing","example","macro","properties","rename","sheet","solidworks api","vba"],group:"Drawing","redirect-from":["/2018/03/document_8.html"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-sheets-custom-properties-values/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-sheets-custom-properties-values/index",title:"Rename SOLIDWORKS drawing sheets with custom properties values",description:"Macro will rename all drawings sheets using the value of the specified custom property using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-sheets-custom-properties-values/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-sheets-custom-properties-values",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-sheets-custom-properties-values/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-sheets-custom-properties-values/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-sheets-custom-properties-values/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Rename SOLIDWORKS drawing sheets with custom properties values",caption:"Rename Drawing Sheets With Custom Properties Values",description:"Macro will rename all drawings sheets using the value of the specified custom property using SOLIDWORKS API",image:"drw-sheets.png",labels:["custom property","drawing","example","macro","properties","rename","sheet","solidworks api","vba"],group:"Drawing","redirect-from":["/2018/03/document_8.html"]},sidebar:"tutorialSidebar",previous:{title:"Rename flat pattern views with cut-list names VBA macro",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-sheet-metal-views/"},next:{title:"Macro to rename all drawing views after the sheet name",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-views-after-sheets/"}},A={},p=[],l={toc:p},w="wrapper";function c(e){let{components:t,...o}=e;return(0,s.kt)(w,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This macro will rename all drawings sheets using the value of the specified custom property using SOLIDWORKS API."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"List of sheets in the drawing",src:r(1705).Z,width:"320",height:"171"}),"{ width=320 }"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Open the drawing and run the macro"),(0,s.kt)("li",{parentName:"ul"},"Specify the property to read the value from")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Popup form for property name input",src:r(75175).Z,width:"320",height:"133"}),"{ width=320 }"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All sheets are renamed based on the value of this property. Macro will get the value from the model view specified in the Sheet Properties.\nThe 'Same as sheet specified in Document Properties'  option is not supported.\nIf this option is selected then the property from the first view will be used.\nMacro will try to read the configuration specific property and if the property is not specified then model level property is read.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Use custom properties value from model option in the sheet properties",src:r(8473).Z,width:"400",height:"381"}),"{ width=400 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swDraw As SldWorks.DrawingDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If swDraw Is Nothing Then\n        MsgBox "Please open the drawing"\n        End\n    End If\n    \n    Dim prpName As String\n    prpName = InputBox("Please specify the custom property name to get the value from")\n    \n    Dim vSheetNames As Variant\n    vSheetNames = swDraw.GetSheetNames\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vSheetNames)\n        \n        Dim swSheet As SldWorks.Sheet\n        Set swSheet = swDraw.Sheet(vSheetNames(i))\n        \n        Dim custPrpViewName As String\n        custPrpViewName = swSheet.CustomPropertyView\n        \n        Dim vViews As Variant\n        vViews = swSheet.GetViews()\n        \n        Dim swCustPrpView As SldWorks.View\n        Set swCustPrpView = Nothing\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(vViews)\n            \n            Dim swView As SldWorks.View\n            Set swView = vViews(j)\n            \n            If LCase(swView.Name) = LCase(custPrpViewName) Then\n                Set swCustPrpView = swView\n                Exit For\n            End If\n            \n        Next\n        \n        If swCustPrpView Is Nothing Then\n            Set swCustPrpView = vViews(0)\n        End If\n        \n        If Not swCustPrpView Is Nothing Then\n            \n            Dim swRefConfName As String\n            Dim swRefDoc As SldWorks.ModelDoc2\n            \n            swRefConfName = swCustPrpView.ReferencedConfiguration\n            Set swRefDoc = swCustPrpView.ReferencedDocument\n            \n            If Not swRefDoc Is Nothing Then\n                \n                Dim prpValue As String\n                \n                prpValue = GetCustomPropertyValue(swRefDoc, swRefConfName, prpName)\n                \n                If prpValue <> "" Then\n                    swSheet.SetName (prpValue)\n                End If\n                \n            Else\n                MsgBox "Failed to get the model from drawing view. Make sure that the drawing is not lightweight"\n            End If\n            \n        Else\n            MsgBox "Failed to get the view to get property from"\n        End If\n        \n    Next\n    \nEnd Sub\n\nFunction GetCustomPropertyValue(model as SldWorks.ModelDoc2, confName as String, prpName As String) As String\n    \n    Dim prpValue As String\n                \n    model.Extension.CustomPropertyManager(confName).Get3 prpName, False, "", prpValue\n    \n    If prpValue = "" Then\n        model.Extension.CustomPropertyManager("").Get3 prpName, False, "", prpValue\n    End If\n    \n    GetCustomPropertyValue = prpValue\n    \nEnd Function\n')))}c.isMDXComponent=!0},1705:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAACrCAMAAAAgurVtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAHK82f7lKwRzpHZYAOLBAABYZIyNopVba8LFygIlUWtnbNS9b184Al5bI3R/qZSqqGxsksLU2ff399y8hsPlwJ1lOV4pTayCaDsCAApij7anoI3E5crZ2Yuqw/PouzMeAFRneWufx06CpoN6bsGnab+gAKe6rtS/rwADNsZ5NY2ito6OjuPn78zP0lI9bb3AxFKTvYNhG2qq0j0/ecLa9Ju50aXH45SUlKyiljoFTyxed1ktJ83Q2VFvlODg38fHx+nIt4aGh1KftwAogKrM6JZrU3xPSn9/f5urt9rWz9LQzixxmdPT067A0Nrl6kNsqrq4tndeS/Pezm+hqtzBnoB0abyVV3oTAOOufJmzyMrM2MyypE5IUX6w6HFRdZmcq7qOajc4O/eZAIBJAVJgbdbW1cCtlZuKgV90gF1aWPjTHKmpqNLMyaV8VKSPAOrq6frw4FuKsn2LkMzNzXN5fn45MwADVtbX2KepvM3Y4jRTjdfKvbXT6+7LlvnXtJfB287r+2uAlQA+aMi/tpKxzXefwnpqVbKjf0RplT6Lt2R/l5ubm3p6eVum1IiKneuSdoJkZDUzXqjK5K+vr36t0HSxvJBuAYZ9esOATJGXpF9MRnZ/g9ra2rW5v7zJ1+3w8XqUpwFMf3YwAV+IpsnIxqzM1ubXxYrB05zJ56fR+CSEtZ15NKGjtE9UYdCuj4iJgN/e3dKSWUJhgnV1devm4lMABDdPcL7T6vjvzVlhh3GjyoGNm1V7mYRsOKKwurC2xLKTgGGdwpeXhLvo7XpRJqFvAJiBc6bCwvHv7Memf7q6uqhoU4+332cARHSTs6Kjo4GetXOJmhY+XFx/jGGLwGNjYL+/vzx9ndje5kyFzpzD0cm7nqWOWdjNpAAAIfvdR93PiImAWdjVwYew0/7PA+Xdq9zv+UFIT7Ort4CCl5CSp9OoAeTk5F9gQYBjeMPDw9HS2ltOcdjQsa7V37W1taa2zK+zt6La7aPG3Japmmc6RYVhSWRPWWl5XwAAAJbNO+YAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAWE0lEQVR4Xu2dD3wTRb7Aw6mPh4inDA+LYDlAFCQF7oC2qLQlXiA0bEH+HhUQ/LPQ2vISWGSFFihQ/khrn5cgUF27LbS1yJ9GivyxBWlRCJEjgFIRPd8JEq8aDWC4q3/e5/1mdvKnf0Ak13Z67BeyOzs7mWy+nZmdnSSzmgjUVDisHquJhpsAnYEJmlCgU5AcbhpuAv79BRq9cQ6ZhpuAf3+BSOLtNNQU3AQCmxZVYIiwIvAM1yqR1BIYKqrAEGFHYPVV8VyDpjzBXhfsCDRdFW913NVIsdH30WK0hipcLfCkxealAEqM6I2laVoM9gTKAWhMtUBsce2WJfkZRQzyqkBKQKCQZbWmAM4UZ5ZXiaIC+ZTH2vjpIakCgwkItJpKq6q0s7WxpRtsOiXKL3D5TuARQgsLjPaP77AnUHrgN8B64bbb4rRKFBUoOt2iyClRKLtlBWad9hlkUGCH9UAH4dZbhfoCbcsfK+DwEWcLLSwQZRmoQQarMEL9BRuSL8Z5Ggh0Omfgfovdbi9r6TawfbKyZk+gG5nW3xYtm7KTk+sLlHKzciV8mjaZWlpg3Ok4JcBgFRYGPvAbg4czOJ31BfIFjxUI2UBZdQtXYcdpX2PMnEBv//XfPPfcN99oDe7Y+gI5LlVw2+0mk9vdwiXwK1r+WBQorP8GozXYpAYCl69Z7in0VFc7uBZvA32wV4U5h+N1r9dbWGaT6vYDRadx+cfLB3qt0NMWVIF1CQh0aykGnaFaiaIC+RSvUIjxQBls6W6MH+YENgIVyAkpTj/VJEYV6OMXBIo8RqQjMQQSI3mb8BPf64MVgWcEekCN4HHi0YVGiVZKYgthFNj5TOSihBCtqQ0QPHT4lDUEWWZHINRFX9+01YAPWBUY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"},75175:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAACFCAMAAAAdHNErAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQoABWLX+QCp2bqrcAFGgOX5+KGgoePavbHCz2xqd46oxIwAAPDjsuvz+8CAdIfB2+ro5CsqdXtDTPXy6e/u7/X08/Dw8NGterDH4tzcsG59nS1iralaSwABWX+9yJXF1NOvo03N8sba5bM1FEsfQ87Pzra7vmOlub7W4oeXroJdbTBrksfm6+Lm6ah8UkKLtaOxxtvNqn9zSWUAANHCfgCYy6m5ycCrnqtxJNCKfJ7J4GqFtaGipl1jfVxQPv7+/gBFY63f7ItcE9rl65iHg7XO6MeOVG57i+izqvDfylBoo0+Fy32r0Oikl0EmerlGL+Po7uLe3EnC1/HKquzt8qLI84peUNHZ4qC61rGwsJO61KKxlM/k8392Zt69szEkQsZjULLT4brR6rPL5X6PqpGwzvLz98za3EpghmA2A6K82M+/lquHZVhTXZaTnF6Bq0kvX4aFhdTU1Jm10Ys9IqPG0qurr3ZZM2B2mvX2+0t3t8DV7GOoyIHT84SfvHNUZDVEXLHJ2cqmj8vPwsbt9qmRh5KSkUEAEvbu2JPb9uTy89Wbb/f4/cO6uXJ1g3WJoZCPZ6+moE54ku7w9dnKlMSkia7p+2pAIF/S8myUxb2xsKzF4KW/287d6yBLiJm83Kenq2doXQBnpayprM+7ql2Qp0h5pqO/47za911Ge2u0yOLVzNXFu6q+3H2Chox5OiwlYJiltdrn81A8SCQGVb5RPMLPoGKay4aKjrOQUMxwXpSdqYxbZvjhwcvc78TY7eTu92JzhOTg0Ozs7LSCN456Y5241CZ9u0tjltHh6/Dj1cDL19ra2prX7NPi8c2ZZI86A6zJ5LrE07GVaY2u2tje6uCXidvCpKnD3KaYlHCmyd/OwKy70fXRtt2yjX2Wt+Tp8IGMm32t44iIiZ20r7aPdsG7isCahZByUNTw9kdKgnt/lOLi4qymqFaTt6ZqXXlieGyVtEdGaL3Ns+bElJOWgH85ODBSgl52p4Z3fmQzSpFfMsTExBbC5Z6dngAAAKU3KrAAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAATBUlEQVR4Xu2de1xUZf7H2S0E+YlODufkpbTcQFhBsXUhDWMV2YLc38JPUjG1n4wedTRtaDNHTPNGSJO30UoYU4OukAntrrpeuKWrMGGgJYGXTK1IdNWstGhev+/3+zznzDAzKjP8/hHO25nzfG/P88z58JzbYOYjAWZAMkOLjmc4dsFBZB9HpIY8anmI4VDKALdlADCnYJljL9lWhucNWvY6ZsGWRXGrjI4Nn5xlU1JgGkcoQbUEhRziaEIftpXMKKAyuBPuoy2QS7Bl88iGnFIG4TnZlj0esNexEHftcTd14MIuMANefG5lYBbjW/pIWI8GjSLLRnmUgtWxHLwJh3KWgxcqrkiewgSUi72E7wcfAMe1e4CROSyqVClbVk8+tuYUKiITYw6VTiG5IYOPIvezu04hJhzrQyFWQvA6iuOwVMG1pRwrggEUAWkFSkbEBPtpNMLLZCIfAvhiYIkEGROPooUxKqCZ0KCYCWx6Q4L3B1euQTWpFm0Gj8AbWzlGUXjRRDQvFrEB5QE4cjnVo08TYktb2JDPY+zDkMct1iJgMRe20KAkPMyxWwhK6iOZjVJeXt48ALfKqwVUwNM8wA3KgcdyGKVU3hYIyTWUR4+XkYkxLKMcVPO+WzAiA3leyIdhHRkO5hYch7tQnIop6sAno3nYwBiBmFxPmy1b2Fjy3NiHGfIcUIENjIOgj8TgsoQVGGIIiVDxgnGnQ/AcaJxUNU3FK9LeSjH7GM/4P6viJSN2SiBgHPdUPOYTFDCz9NkDKl5BApoyv1QFvCHj9TdgPKWZgKXPjle5EWGr3UNJVcBboQ9bMdkt0Y/qMf/JTqMq4M3Qr578F7ecGG7BPF+BB6h4/HiLxaIfr8cNHPrwtujB4R44FJRr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"},8473:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/use-custom-prps-from-view-sheet-property-4c11fae04658f75fc828f7ec0add8064.png"}}]);