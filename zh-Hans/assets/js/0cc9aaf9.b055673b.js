"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[67178],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),w=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=w(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=w(t),m=i,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(u,o(o({ref:n},l),{},{components:t})):r.createElement(u,o({ref:n},l))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var w=2;w<s;w++)o[w]=t[w];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70532:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>w});var r=t(87462),i=(t(67294),t(3905));const s={caption:"Rename Drawings Views After Sheets",title:"Macro to rename all drawing views after the sheet name",description:"VBA macro renames all SOLIDWORKS drawings views after the sheet name the drawing view is on"},o=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-views-after-sheets/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-views-after-sheets/index",title:"Macro to rename all drawing views after the sheet name",description:"VBA macro renames all SOLIDWORKS drawings views after the sheet name the drawing view is on",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-views-after-sheets/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-views-after-sheets",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-views-after-sheets/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-views-after-sheets/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-views-after-sheets/index.md",tags:[],version:"current",frontMatter:{caption:"Rename Drawings Views After Sheets",title:"Macro to rename all drawing views after the sheet name",description:"VBA macro renames all SOLIDWORKS drawings views after the sheet name the drawing view is on"},sidebar:"tutorialSidebar",previous:{title:"Rename SOLIDWORKS drawing sheets with custom properties values",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/rename-sheets-custom-properties-values/"},next:{title:"Macro to replace sheet formats in SOLIDWORKS drawings",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/drawing/replace-sheet-format/"}},c={},w=[],l={toc:w},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This VBA macro allows to rename all drawing views from all sheets in the active SOLIDWORKS drawing document after the sheet name followed by index."),(0,i.kt)("p",null,"Detailing and section views will be excluded from the renaming process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetType() = swDocumentTypes_e.swDocDRAWING Then\n            \n            Dim swDraw As SldWorks.DrawingDoc\n            \n            Set swDraw = swModel\n            \n            Dim vSheets As Variant\n            vSheets = swDraw.GetViews\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vSheets)\n                \n                Dim vViews As Variant\n                vViews = vSheets(i)\n                \n                Dim swSheetView As SldWorks.View\n                \n                Set swSheetView = vViews(0)\n                \n                Dim j As Integer\n                \n                Dim nextViewIndex As Integer\n                nextViewIndex = 0\n                \n                For j = 1 To UBound(vViews)\n                    \n                    Dim swView As SldWorks.View\n                    Set swView = vViews(j)\n                    \n                    Dim viewType As Integer\n                    viewType = swView.Type\n                    \n                    If viewType <> swDrawingViewTypes_e.swDrawingDetailView And viewType <> swDrawingViewTypes_e.swDrawingSectionView Then\n                        \n                        nextViewIndex = nextViewIndex + 1\n                        \n                        Dim newViewName As String\n                        newViewName = swSheetView.Name & "(" & nextViewIndex & ")"\n                        \n                        If False = swView.SetName2(newViewName) Then\n                            Err.Raise vbError, "", "Failed to rename " & swView.Name & " to " & ""\n                        End If\n                    End If\n                    \n                Next\n                \n            Next\n            \n        Else\n            Err.Raise vbError, "", "Active document is not a drawing"\n        End If\n    Else\n        Err.Raise vbError, "", "Please open the drawing"\n    End If\n    \nEnd Sub\n')))}p.isMDXComponent=!0}}]);