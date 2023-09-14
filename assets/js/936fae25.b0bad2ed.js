"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[89904],{3905:(e,o,t)=>{t.d(o,{Zo:()=>A,kt:()=>w});var n=t(67294);function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){i(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,i=function(e,o){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(i[t]=e[t]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},A=function(e){var o=d(e.components);return n.createElement(l.Provider,{value:o},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},g=n.forwardRef((function(e,o){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,A=a(e,["components","mdxType","originalType","parentName"]),c=d(t),g=i,w=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return t?n.createElement(w,s(s({ref:o},A),{},{components:t})):n.createElement(w,s({ref:o},A))}));function w(e,o){var t=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=g;var a={};for(var l in o)hasOwnProperty.call(o,l)&&(a[l]=o[l]);a.originalType=e,a[c]="string"==typeof e?e:i,s[1]=a;for(var d=2;d<r;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},47532:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=t(87462),i=(t(67294),t(3905));const r={title:"Add equation to dimension using SOLIDWORKS API",caption:"Add Equation To Dimension",description:"Example will modify the value of the selected dimension and sets its value to be equal to the equation",image:"sw-dimension-equation.png",labels:["dimension","solidworks api","equation","example"],"redirect-from":["/2018/03/solidworks-api-dimensions-add-equation-to-dim.html"]},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-equation/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-equation/index",title:"Add equation to dimension using SOLIDWORKS API",description:"Example will modify the value of the selected dimension and sets its value to be equal to the equation",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-equation/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-equation",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-equation/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-equation/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-equation/index.md",tags:[],version:"current",frontMatter:{title:"Add equation to dimension using SOLIDWORKS API",caption:"Add Equation To Dimension",description:"Example will modify the value of the selected dimension and sets its value to be equal to the equation",image:"sw-dimension-equation.png",labels:["dimension","solidworks api","equation","example"],"redirect-from":["/2018/03/solidworks-api-dimensions-add-equation-to-dim.html"]},sidebar:"tutorialSidebar",previous:{title:"Macro to add display data marks to configuration used by the main SOLIDWORKS assembly",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-display-data-marks/"},next:{title:"Add mate between coordinate systems using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/add-mate-between-coordinate-systems/"}},l={},d=[],A={toc:d},c="wrapper";function u(e){let{components:o,...r}=e;return(0,i.kt)(c,(0,n.Z)({},A,r,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example will modify the value of the selected dimension and sets its value to be equal to the equation using SOLIDWORKS API:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"sin(0.5) * 2 + (10 - 5)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Equation in dimension",src:t(83720).Z,width:"320",height:"200"}),"{ width=320 height=200 }"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEquationMgr.html"},"IEquationMgr")," SOLIDWORKS API interface should be used to manage equations in SOLIDWORKS document."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\nDim swEqMgr As SldWorks.EquationMgr\n\nConst EQUATION = "sin(0.5) * 2 + (10 - 5)"\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swDispDim As SldWorks.DisplayDimension\n        \n        Set swDispDim = swSelMgr.GetSelectedObject6(1, -1)\n                \n        If Not swDispDim Is Nothing Then\n                \n            Set swEqMgr = swModel.GetEquationMgr\n            \n            Dim formula As String\n            \n            formula = """" & swDispDim.GetNameForSelection & """ = " & EQUATION\n            \n            swEqMgr.Add2 -1, formula, True\n        \n        Else\n            MsgBox "Please select dimension"\n        End If\n    \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\n\n')))}u.isMDXComponent=!0},83720:(e,o,t)=>{t.d(o,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADICAMAAACu2siZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANkDAABWf7v+u0230rmXigDjAGf/aAAA/gDTAI6hp7vB94y8393VjYR3c1lf/ACdACf+J/L+8t7m3o2qwwAAoFgAAMG5spnO4pL9krfR5MSKPMrn98vS9i00/i0sLnuD+5uj+lh1kz+FI5eXemJjZOfy57WmaKW1x9jc2NPGtZPIAOjXsE9OUOkAZMWxrEL+QupRAH+3bdr/2+357ar+qkFzmgY+AIGSqFxmgarX8YKDhmt7mnr/epG/icr+yrGxsdTLeqnD3sPewJ+61bnQ6HdWQ97l7EVK/YFeABf/FuLMt6uWg8LCwzpYdCQk/WSdx+3BANzi3Jq20oyR+IWLmWtx/HOWqNjw/O/v76ux+Iaiu8rS3HJzdgAALO2QfVaTUS+Bp9zRvrSqnJOTnLLI3LvN3/D+/emqpVf/V+bv5pv/mwD+AOLTyM3c7AC9AP1BWJu73OHg4QRwl5WIi0Jfhr/e7MuohEx8Osu4hLTP6VMtC7vR1tT91O748np6fYz/jDxAQqyDds/EwOr06jP+NeDo4GCQvLfG0MbP9tTZ1KOnmD1B/efm5hFrAK7B0uPq4eX/5ePr805U/ZOUlLC6xneavKquqHP9c9bGquu0sb7S6tY/K8P+w1FXmNPb9Ix6SazK5qAqEnOJoqDE56HJAPTqy6XRnW62V9nf5cbIytLZ4oSK+4mEzGtqaRueAMSol7DU45251MOZYECbwicACvHy8lBObipOfdHMy+nu8pSyzz5kNZ+qt6L+orW2t3qoywn/Cebd17PM5eK8jqubmOnwzFpaW5eak8nIxz2rNZSa+rP/s5ucncLI9gMdAbO799rh9P5QYdwpHXR5+3KCic7PzpGYsYmKjKOp+AgX/qzF4crKzcTFyO/HxaGlpmJo/Pbdt9zo8k3/TdHT0fXq3KW/29PRzE9/i3sUDH17lLu8vIL/gtfk0RwYGohrL9C2mGCVopSDa9+2XVNvn6uJiez0+6O92U+JqyA4F/DTyWN2jI+Nq6m6lfBRLQAAALrePsQAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAc4ElEQVR4Xt2dDXwWxZ3H4+V4qXAGJlwRz2C4KymPyjVtNlSNNE/BlByS6qWA5SV3VsBIWKpS1DO9JFQeIkQseUIg4WiaWl5agUvV9mINJdFSeZGEEg8xGDwwJPTOYEt7LXjY6+f+Mzu7z+4+O7Ozb3ke7/vR55md7DzPsz9m5j/zn7cU5J2Mc3U0BEjVNOCU0jdvoSE+cxfSgI5IGQ0MPT4I2Ly5jYY8ISjgsUk0kCQwBCyTaECAwg004A0xATOP0YBfFNN355RF8CtDwOIsGrBnnzFLSDU04BQRASvnWue/snQacM4Z+u6cYlJvMASsJuqKcOIkDVACFXDuPhowUeY+H7n9uQjV8nKgMM0b+2hIRVh6EwICZrLqP8ntl3rHo4Dd55ppyDP2Ah6bSwPJhMciPDJev8ByYPNGXWvJiOTA5plwX4SriZ3wZkROx+eJwOrAuo3szO6hDgzIiGQJ/ZMes6jTgxKw1SKza3gQ0G27X9XISx3IfSbH8AVse6ebhpIMDwK2ncugIV/gCth6T5Lq56UOzLQ2im67pTwBW+9h2g+CJN7uNxNQHVhsb0tHnbTsAgdRB7aOtMl/HurAU/TdOVwB7fXbwHAhSCEacApbwLaR/PwHArrvyrlvgittJ7d1YJ3vlRJbwHuO00AywhDQtmWaeZoGfIMp4MLMShoKAve1JzcH2hmRScxeleS2NLEEXDifBjhEamnAOQEZkXR+1dBcaHYhaPhtRCaJ5D8PRqSfvjuH25Xjl+A+Tq/K5xy4cH4rDfHw4NK3q6vscGVERjLznwcsBZwkUH4TC0NArkv/NMOt6Q0rARdmiuQ/T7gv/HyXPqcOPMYdlvCzHbjQ5O1mkuW+Hei+IZ2uGBFQKgvntzK4lPBL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"}}]);