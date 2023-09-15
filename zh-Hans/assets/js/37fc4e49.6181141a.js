"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[77751],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},A=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),A=r,h=p["".concat(l,".").concat(A)]||p[A]||u[A]||s;return t?o.createElement(h,a(a({ref:n},d),{},{components:t})):o.createElement(h,a({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=A;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}A.displayName="MDXCreateElement"},48760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const s={layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u4e2d\u66f4\u6539\u6240\u9009\u5bf9\u8c61\u7684\u56fe\u5c42\u7684SOLIDWORKS\u5b8f",caption:"\u66f4\u6539\u7ed8\u56fe\u4e2d\u6240\u9009\u5bf9\u8c61\u7684\u56fe\u5c42"},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-layer-selected-drawing-objects/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-layer-selected-drawing-objects/index",title:"\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u4e2d\u66f4\u6539\u6240\u9009\u5bf9\u8c61\u7684\u56fe\u5c42\u7684SOLIDWORKS\u5b8f",description:"\u4f7f\u7528SOLIDWORKS API\uff0c\u5c06\u7ed8\u56fe\u4e2d\u7684\u6240\u6709\u6240\u9009\u5bf9\u8c61\u79fb\u52a8\u5230\u6307\u5b9a\u7684\u56fe\u5c42",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-layer-selected-drawing-objects/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-layer-selected-drawing-objects",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-layer-selected-drawing-objects/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-layer-selected-drawing-objects/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-layer-selected-drawing-objects/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u5728\u7ed8\u56fe\u4e2d\u66f4\u6539\u6240\u9009\u5bf9\u8c61\u7684\u56fe\u5c42\u7684SOLIDWORKS\u5b8f",caption:"\u66f4\u6539\u7ed8\u56fe\u4e2d\u6240\u9009\u5bf9\u8c61\u7684\u56fe\u5c42"},sidebar:"tutorialSidebar",previous:{title:"Change value of global variable in model using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-global-variable-value/"},next:{title:"SOLIDWORKS Macro to display callouts with diameters for edges",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/circular-edges-display-callouts/"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:n,...s}=e;return(0,r.kt)(p,(0,o.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\uff0c\u5c06\u7ed8\u56fe\u4e2d\u7684\u6240\u6709\u6240\u9009\u5bf9\u8c61\u79fb\u52a8\u5230\u6307\u5b9a\u7684\u56fe\u5c42\nimage: sw-drawing-layers.png\nlabels: ","[\u7ed8\u56fe, \u56fe\u5c42, solidworks api, \u5b9e\u7528\u5de5\u5177]","\ngroup: \u7ed8\u56fe\nredirect-from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/2018/03/solidworks-api-drawing-change-layer-for-selected-objects.html")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u6b64\u5b8f\u5c06\u4f7f\u7528SOLIDWORKS API\u5c06\u7ed8\u56fe\u4e2d\u7684\u6240\u6709\u6240\u9009\u5bf9\u8c61\u79fb\u52a8\u5230\u6307\u5b9a\u7684\u56fe\u5c42\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u7ed8\u56fe\u56fe\u5c42",src:t(26169).Z,width:"400",height:"144"}),"{ width=400 }"),(0,r.kt)("p",null,"SOLIDWORKS API\u4e2d\u6ca1\u6709\u901a\u7528\u7684::Layer\u5c5e\u6027\u6765\u66f4\u6539\u4efb\u4f55\u5b9e\u4f53\u7684\u56fe\u5c42\uff0c\u800c\u662f\u5c06\u6b64\u5c5e\u6027\u6dfb\u52a0\u5230\u652f\u6301\u5b83\u7684\u6bcf\u4e2a\u63a5\u53e3\u4e2d\uff08\u4f8b\u5982",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isketchsegment~layer.html"},"ISketchSegment::Layer"),"\u5c5e\u6027\uff09\u3002\u6b64\u5b8f\u68c0\u67e5\u5b9e\u4f53\u7684\u7c7b\u578b\uff0c\u5e76\u8c03\u7528\u76f8\u5e94\u7684SOLIDWORKS API\u5c5e\u6027\u6765\u66f4\u6539\u56fe\u5c42\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swDraw As SldWorks.DrawingDoc\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n    \n    On Error Resume Next\n    \n    Set swApp = Application.SldWorks\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Set swSelMgr = swDraw.SelectionManager\n        \n        If swSelMgr.GetSelectedObjectCount2(-1) > 0 Then\n            \n            Dim layerName As String\n            layerName = InputBox("\u6307\u5b9a\u8981\u5c06\u6240\u9009\u5bf9\u8c61\u79fb\u52a8\u5230\u7684\u56fe\u5c42\u540d\u79f0")\n            \n            Dim swAnn As SldWorks.Annotation\n            \n            Dim i As Integer\n                        \n            For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n                    \n                Dim swSelObj As Object\n                Set swSelObj = swSelMgr.GetSelectedObject6(i, -1)\n                \n                If TypeOf swSelObj Is SldWorks.SketchSegment Then\n                    \n                    Dim swSkSegment As SldWorks.SketchSegment\n                    Set swSkSegment = swSelObj\n                    swSkSegment.Layer = layerName\n                \n                ElseIf TypeOf swSelObj Is SldWorks.SketchPoint Then\n                    \n                    Dim swSkPoint As SldWorks.SketchPoint\n                    Set swSkPoint = swSelObj\n                    swSkPoint.Layer = layerName\n                    \n                ElseIf TypeOf swSelObj Is SldWorks.Note Then\n                    \n                    Dim swNote As SldWorks.Note\n                    Set swNote = swSelObj\n                    Set swAnn = swNote.GetAnnotation()\n                    swAnn.Layer = layerName\n                    \n                ElseIf TypeOf swSelObj Is SldWorks.DisplayDimension Then\n                    \n                    Dim swDispDim As SldWorks.DisplayDimension\n                    Set swDispDim = swSelObj\n                    Set swAnn = swDispDim.GetAnnotation\n                    swAnn.Layer = layerName\n                    \n                Else \'\u5c1d\u8bd5\u4f7f\u7528\u540e\u671f\u7ed1\u5b9a\u8bbe\u7f6e\u56fe\u5c42\n                    swSelObj.Layer = layerName\n                End If\n                    \n            Next\n        Else\n            MsgBox "\u8bf7\u9009\u62e9\u6ce8\u91ca\u3001\u8349\u56fe\u7ebf\u6bb5\u6216\u70b9\u4ee5\u79fb\u52a8\u5230\u65b0\u56fe\u5c42"\n        End If\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u7ed8\u56fe"\n    End If\n    \nEnd Sub\n\n')))}u.isMDXComponent=!0},26169:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAACQCAMAAAARFs1KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAN4WFqYAAOjnxnh4xwAAq6XDwcvCn/3760Vqi2ttcdjaxZGlvKahiG3M6gCXyLHJ3Mra7BJEdS6O55exzspiS97StWiEkR1cnM/s/cXO2W+r/+bz3t3l7ZK308nKzYfF/5Y1JuHh0KmxvZ+LdyhwsymW/5ihprnS6+Dx9fDw8Pf08o94S9+2n5e620ee/pCMh1FLS6unpbTP5HJhWcrT3N/q9QAA/hKT/7fO8sHLut3n/8qglLPL8q+2qWy4zKnC3Y+Yo5S9/8/Pz21zibDM6Ov1/MjAvDGT8tPY3MFdSYmEeiycydff466LjLHK4+Pq7I60/8nS1AAA2ejs8NHS0klfd6K9yr2qi9fV08S3rTOZ/ujo593a07re7YqOlBMVGDma/7y8vJ3D/8vMz8jJyrHDuZm10niQoOvr6+/u8p7A3v7+/uXh2dLh8NnZ2qWZj8qHeu7u7ZGms7pLM9LOy6K82LrQ/FttldPKvZu1vZ18edzc4ICAhqu0taa+2uPj476/z97e3X+z/12j/rzS3qSbnf4AAMXFxahra6rJ4oZsarKqmGRjZXSMrZaWlnievOObjbjDyrS1ya7X/8bNxNTV1wCM//X1+Ojn4KmmrL3V7J5YUCmA0fjy43eu0KsxDvvBxJ/F4GBwg5qbq7i6sZqimLS4vsfBsfnn6r/f7yd3xPj4+Z6ksKm8zqrH0s95bh6V/yUlwPHlzrnI08PQ3aSlo6vE3523062traC61uDw/tfRw6eTfFStwJKBib2tmcTY7svd77bb89jm9Ht+l5Kuu7KsqVxleZqRioOOnXOAkLWbjZqZm7q1qKmklbebnMTJreTZxv2WmYyarFiu/3h3esLJ06uss5Z/ZVp7ncnGw83h6tbGrcAAALi1tbbP6Obm59Dc46XV4sTbyPPw7XNxcqXB3cG8uYWHhv769KOvsbY8IFpYT6m7v6uae5zR/7ve/qK0v/Ozpe7v8BUV3cXb46XI4PDn2tqLe7KysbLM/9iUh8zN2ZWwvAAAAG4OnggAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAARz0lEQVR4Xu2dD1xTR57AvetetYp7ZevZKywNWz2MyVWolp7n7XJiFMt6HpRLulJJWSNYYwOh6UqNhRL54+UsKy62MdRd706p8bqP2p6Ayx8P9WxVEKic/9HjzxVB7Gn1spbDtZ+defN7SQgS8hdGd76GvJlfXp68+TLvvczMm0wwIzgGHSAXSAjHSRh0oMFCOMNgXzuDBj4UceYJnLn642kMKnhtv4KbwClmvMaghGk3JBO45Mra3zDo4GkiJLuWMeZkv+4MCvJCFEzIeHDmbSdSkQZHIczK2FL+7P8NpSG7NpsIOY9S2bVB+CmbMUbUlv/uF4hTX7zxuy++4JMNr2fbhCB+s/i17N7evN5s9A8tEHn8GxmBAYRs1vRt1qjecBKyMDuvt3bxnIWpJ7blPt0YdO5E0NVLuXu2LcxjBIre7PJPMD/ezGlUP+CTDb15eSDk4MKFC7ORkDOpG2at3Rq1oXHb1TmxW2tRlBEoesu/wvxLlkFe8wM+2YA0PH1bioSEbDl48GDe4oOlG958bP9z25ov5WVfnZN3/VICCjMCRfnPEF81dNU0JB7/CqcbkIY5REgC4vFze7Zda9qacG1aZ+6e12J3x+55GocZAWJLxY8xv3z3lz97912c+rOGJQkJIKQTrbBEzHN765YEsbizM6FTjKOMgFHxxv8PpQEV+OsbQUhn57yEBPTo/Pggn0IkzOtkBJDbf+9ELNJAhFShGrGEMdYc7IWzCaF3SWeneDcWIgsRdwbLGeNOmFi8+1t02csLgR4rxjgShmqITYgVgozxgwmhDGchOgPDj6j5Qpa6Ab8iwlmIVqFl+A2FCZex+nE3KErkfQwTIpJoKIaDpR13IuOHWoGKWFr73Y9eHZXvFt1fSJp/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"}}]);