"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[79171],{3905:(e,n,o)=>{o.d(n,{Zo:()=>x,kt:()=>f});var c=o(67294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);n&&(c=c.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,c)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function r(e,n){if(null==e)return{};var o,c,t=function(e,n){if(null==e)return{};var o,c,t={},i=Object.keys(e);for(c=0;c<i.length;c++)o=i[c],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)o=i[c],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var a=c.createContext({}),l=function(e){var n=c.useContext(a),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},x=function(e){var n=l(e.components);return c.createElement(a.Provider,{value:n},e.children)},O="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return c.createElement(c.Fragment,{},n)}},p=c.forwardRef((function(e,n){var o=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,x=r(e,["components","mdxType","originalType","parentName"]),O=l(o),p=t,f=O["".concat(a,".").concat(p)]||O[p]||d[p]||i;return o?c.createElement(f,s(s({ref:n},x),{},{components:o})):c.createElement(f,s({ref:n},x))}));function f(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=o.length,s=new Array(i);s[0]=p;var r={};for(var a in n)hasOwnProperty.call(n,a)&&(r[a]=n[a]);r.originalType=e,r[O]="string"==typeof e?e:t,s[1]=r;for(var l=2;l<i;l++)s[l]=o[l];return c.createElement.apply(null,s)}return c.createElement.apply(null,o)}p.displayName="MDXCreateElement"},95059:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var c=o(87462),t=(o(67294),o(3905));const i={layout:"sw-tool",title:"\u5173\u95ed\u9664\u6d3b\u52a8\u6587\u6863\u5916\u7684\u6240\u6709SOLIDWORKS\u6587\u6863",caption:"\u5173\u95ed\u9664\u6d3b\u52a8\u6587\u6863\u5916\u7684\u6240\u6709\u6587\u6863"},s=void 0,r={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/close-all-documents-except-active/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/close-all-documents-except-active/index",title:"\u5173\u95ed\u9664\u6d3b\u52a8\u6587\u6863\u5916\u7684\u6240\u6709SOLIDWORKS\u6587\u6863",description:"\u4f7f\u7528SOLIDWORKS API\u5173\u95ed\u9664\u6d3b\u52a8\u6587\u6863\u5916\u7684\u6240\u6709\u5df2\u6253\u5f00\u6587\u6863",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/close-all-documents-except-active/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/close-all-documents-except-active",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/close-all-documents-except-active/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/close-all-documents-except-active/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/close-all-documents-except-active/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u5173\u95ed\u9664\u6d3b\u52a8\u6587\u6863\u5916\u7684\u6240\u6709SOLIDWORKS\u6587\u6863",caption:"\u5173\u95ed\u9664\u6d3b\u52a8\u6587\u6863\u5916\u7684\u6240\u6709\u6587\u6863"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528API\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u6355\u83b7SOLIDWORKS\u547d\u4ee4\u7684VBA\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/capture-commands/"},next:{title:"\u5728SOLIDWORKS\u5de5\u5177\u680f\u4e2d\u7a81\u51fa\u663e\u793a/\u95ea\u70c1\u7279\u5b9a\u6309\u94ae\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/application/frame/flash-toolbar-buttons/"}},a={},l=[{value:"group: \u6846\u67b6",id:"group-\u6846\u67b6",level:2}],x={toc:l},O="wrapper";function d(e){let{components:n,...i}=e;return(0,t.kt)(O,(0,c.Z)({},x,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u5173\u95ed\u9664\u6d3b\u52a8\u6587\u6863\u5916\u7684\u6240\u6709\u5df2\u6253\u5f00\u6587\u6863\nimage: close-all-but-active.svg\nlabels: ","[\u5173\u95ed, \u7a97\u53e3]"),(0,t.kt)("h2",{id:"group-\u6846\u67b6"},"group: \u6846\u67b6"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"\u5728SOLIDWORKS\u4e2d\u6253\u5f00\u7684\u6587\u6863",src:o(38833).Z,width:"355",height:"372"}),"{ width=250 }"),(0,t.kt)("p",null,"\u6b64\u5b8f\u5229\u7528SOLIDWORKS API\u5173\u95ed\u9664\u6d3b\u52a8\u6587\u6863\u5916\u7684\u6240\u6709\u5df2\u6253\u5f00\u6587\u6863\u3002"),(0,t.kt)("p",null,"\u5982\u679c\u6587\u6863\u6709\u672a\u4fdd\u5b58\u7684\u66f4\u6539\uff08\u5373\u810f\u6587\u6863\uff09\uff0c\u5b8f\u5c06\u63d0\u793a\u7528\u6237\u4e3a\u8981\u5173\u95ed\u7684\u6587\u6863\u6307\u5b9a\u64cd\u4f5c\uff08\u4fdd\u5b58\u3001\u4e0d\u4fdd\u5b58\u6216\u53d6\u6d88\uff09\u3002\u5426\u5219\uff0c\u6587\u6863\u5c06\u88ab\u9759\u9ed8\u5173\u95ed\u3002"),(0,t.kt)("p",null,"\u89c2\u770b",(0,t.kt)("a",{parentName:"p",href:"https://youtu.be/9uZCecGg25I?t=166"},"\u6f14\u793a\u89c6\u9891")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'#If VBA7 Then\n     Private Declare PtrSafe Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#Else\n     Private Declare Function SendMessage Lib "User32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Any) As Long\n#End If\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim vDocsWindows As Variant\n        \n        Dim swFrame As SldWorks.Frame\n        Set swFrame = swApp.Frame\n        \n        vDocsWindows = swFrame.ModelWindows\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vDocsWindows)\n            \n            Dim swDocWin As SldWorks.ModelWindow\n            Set swDocWin = vDocsWindows(i)\n            \n            Dim swRefDoc As SldWorks.ModelDoc2\n            Set swRefDoc = swDocWin.ModelDoc\n            \n            If Not swRefDoc Is swModel Then\n                If swRefDoc.GetSaveFlag() Then\n                    \'\u663e\u793a\u672a\u4fdd\u5b58\u6587\u4ef6\u7684\u5173\u95ed\u786e\u8ba4\u5bf9\u8bdd\u6846\n                    swApp.ActivateDoc3 swRefDoc.GetTitle, False, swRebuildOnActivation_e.swDontRebuildActiveDoc, 0\n                    Const WM_COMMAND As Long = &H111\n                    Const CMD_FileClose As Long = 57602\n                    SendMessage swFrame.GetHWnd(), WM_COMMAND, CMD_FileClose, 0\n                Else\n                    swApp.CloseDoc swDocWin.ModelDoc.GetTitle\n                End If\n                \n            End If\n        Next\n        \n        swApp.ActivateDoc3 swModel.GetTitle, True, swRebuildOnActivation_e.swUserDecision, 0\n        \n    End If\n    \nEnd Sub\n')))}d.isMDXComponent=!0},38833:(e,n,o)=>{o.d(n,{Z:()=>c});const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWMAAAF0CAMAAADBz6jwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAALCwYzKCAABji/b39gAAY2anxVdXWDgAAKurq38+GTgAY1iXtYuLOJrD1SN4mywsLAA3VJDbtouwi5xgGW2OVzw/QTgAOAA4i9TUuQAAOJmZmTiL1B5XdWOw99SLYzg4i2MAONS5f3Nzc4uLY2MAAIs4OGMAY8fHx0tLSz94lrGxsdbX1YLN6wA4Y9TUnNSLOGOFldScYF2szItjiz4ZPrHyr6CgoGNjAKampvewYzJRYIuw94mKijNohmNjsFKJp5WVlRJEYDKHrzg4ANjZ2Lm6u3WwznrB32xsbI6Ojos4Y7DUiwBjsLvJ0Pj1rTpmtjo6Ol2UspHb/mOwsENicanR4UePGpPB1kREROHi4RkZGbZmOl9gYbBjY4KCgsXFxffUi/ewiz+PtBk+f1KjxIvU9jiLi09PUCFlg7BjAP+2Zl+gvj5/ubCLOAw2TJuqscXGyGyRos/ax0eCoH+zzBhPbdSwY1WUsmmsyszNzGa2/7bEzIs4AEV0ijVzkdHa3mM4AHh4eDIyMmAZPtuQOjaJsTg4Y5Db22JjZdPT01d6jitnhQtNazqQ25qkk1FRUXG+3QA6kK2ur56en0RGSCt/opA6AFJ0g7l/Pne927D29y9cdGywzmymxDRtiz+Rs1ybuVGZu22pxjo6kABBXofS8HiVpGObuRk1RBdObFOQrjiLsHG100eTt4DI5iJRa2OLi2KjwDt0kipjgTJwjmOw1CNefEqFoxpScHvF5EN8mkB1k5A6Ok6LqU6RI5C2kLaQOn+51GaQkNvbkCh8n1COrAQ7Vy5qiEmau7Pr1A9QbjqQkHO41nKsxxZIY26xz5CQZi6CpQ1ScSZhf0qAngAAAMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///2j4ZlAAAADXdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AxEYZ1QAAAAlwSFlzAAAOwwAADsMBx2+oZAAAHMxJREFUeF7tnY+fXNVZh1c6+YEgMLUWhDQmxS0JG3RVSshKWmPc2MSm44rWMhWzQ+uKC6UWW4XgtLhjrFkVqUGjjYq0hGppiwUKtAhq1Yooilr/H9/v+77n3HN/zcy9uyfs3nmfT7L33HPOnJn7zNkzd+9575mp1kblwOK8pjY75jg+5jg+cDyzZqSt9aVhjiVZH3M8FHMcH3Mcn03puN3WRMLqgLniiis0o5yLfv4mTZXwvnZbWhPa7fdpQY6DWoU4qFkFbEbH7U99LSd50OVN99oT5ZJPsozV1kUXXaQ5xbSfWhpokhh8eWv+LVXCarrNsbi4CR23v/aBD7ySPWw9xO61rYOlkgeLq6uri1RzhOT2EjleUVqD1+9fm+PVjeT4ssOaYMock+JnPnX3s5njdo5XWq3Snjwgxaur1w4O/eFFF33PgYVB2ctuP/GEN9btDu4fox9TNU3lWEyNFcsP0Y/O9AP089Txu66+lTMdncc1UUDyYpd34Ofscd4hOted09QYfOJwKLnEMSl+pd1+9r7n0wfuHdOYcbRE8uCksI868t9350+WaWk/cUPSj7uDrU+PdNwd2/Fdf4QfUzB9FqJTXADHnz8cSi523H6Ux4n28y+8LXXk3vHKytHhjjFw02Dxa9ThJTtH+4anXHOQ9/TdIxyj1hDH3dBx50rqussLZLqzO92JifiOSfHvBJILHZPi3+cjbr/t+q+Hh+4Osdvdt3qyzPEeYuYICRYeoU9ALUrRfoocSy9GP37ssRLH957fiw0rnt97/l7OzJF2zL33pTeTX+rRsPPSm6entpCkzvTU1D/B8dmpKXoHMKacou1dTmWRYzxmJ1rpXHfT9NTVS1xcBnXgD9H/w5//xGWaU+y4/YoqpuTXH/314Ni9LBxw4PitQNODReJgF70YUI7vfWG1Vvsb70E+u+vODy69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"}}]);