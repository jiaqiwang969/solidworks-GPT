"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[7227],{3905:(e,s,o)=>{o.d(s,{Zo:()=>c,kt:()=>w});var n=o(67294);function t(e,s,o){return s in e?Object.defineProperty(e,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[s]=o,e}function r(e,s){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var s=1;s<arguments.length;s++){var o=null!=arguments[s]?arguments[s]:{};s%2?r(Object(o),!0).forEach((function(s){t(e,s,o[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(o,s))}))}return e}function a(e,s){if(null==e)return{};var o,n,t=function(e,s){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],s.indexOf(o)>=0||(t[o]=e[o]);return t}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],s.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var A=n.createContext({}),l=function(e){var s=n.useContext(A),o=s;return e&&(o="function"==typeof e?e(s):i(i({},s),e)),o},c=function(e){var s=l(e.components);return n.createElement(A.Provider,{value:s},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var s=e.children;return n.createElement(n.Fragment,{},s)}},p=n.forwardRef((function(e,s){var o=e.components,t=e.mdxType,r=e.originalType,A=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=l(o),p=t,w=g["".concat(A,".").concat(p)]||g[p]||d[p]||r;return o?n.createElement(w,i(i({ref:s},c),{},{components:o})):n.createElement(w,i({ref:s},c))}));function w(e,s){var o=arguments,t=s&&s.mdxType;if("string"==typeof e||t){var r=o.length,i=new Array(r);i[0]=p;var a={};for(var A in s)hasOwnProperty.call(s,A)&&(a[A]=s[A]);a.originalType=e,a[g]="string"==typeof e?e:t,i[1]=a;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},71484:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>A,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=o(87462),t=(o(67294),o(3905));const r={title:"\u4f7f\u7528SOLIDWORKS API\u663e\u793a\u88c5\u914d\u4f53\u53ef\u89c6\u5316\u9875\u9762",image:"sw-assembly-visualization.png",labels:["\u88c5\u914d\u4f53","\u793a\u4f8b","solidworks api","\u53ef\u89c6\u5316"],"redirect-from":["/2018/03/solidworks-api-assembly-display-assm-visual-tool.html"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/display-assembly-visualization-page/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/display-assembly-visualization-page/index",title:"\u4f7f\u7528SOLIDWORKS API\u663e\u793a\u88c5\u914d\u4f53\u53ef\u89c6\u5316\u9875\u9762",description:"\u8be5\u793a\u4f8b\u4f7f\u7528SOLIDWORKS API\u663e\u793a\u88c5\u914d\u4f53\u53ef\u89c6\u5316\u9875\u9762\u7684\u7279\u5f81\u6811\u9875\u9762\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/display-assembly-visualization-page/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/display-assembly-visualization-page",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/display-assembly-visualization-page/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/display-assembly-visualization-page/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/display-assembly-visualization-page/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u663e\u793a\u88c5\u914d\u4f53\u53ef\u89c6\u5316\u9875\u9762",image:"sw-assembly-visualization.png",labels:["\u88c5\u914d\u4f53","\u793a\u4f8b","solidworks api","\u53ef\u89c6\u5316"],"redirect-from":["/2018/03/solidworks-api-assembly-display-assm-visual-tool.html"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS\u7ec4\u4ef6\u4e0a\u4e0b\u6587\u7684\u6982\u8ff0\u548cAPI\u7684\u4f7f\u7528\u65b9\u6cd5",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/context/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u914d\u4ef6\u4e4b\u95f4\u63d2\u5165\u7ba1\u9053\u7ec4\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/insert-pipe/"}},A={},l=[],c={toc:l},g="wrapper";function d(e){let{components:s,...r}=e;return(0,t.kt)(g,(0,n.Z)({},c,r,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"\u8be5\u793a\u4f8b\u4f7f\u7528SOLIDWORKS API\u663e\u793a\u88c5\u914d\u4f53\u53ef\u89c6\u5316\u9875\u9762\u7684\u7279\u5f81\u6811\u9875\u9762\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"\u88c5\u914d\u4f53\u53ef\u89c6\u5316\u7279\u5f81\u7ba1\u7406\u5668\u9009\u9879\u5361",src:o(5918).Z,width:"320",height:"292"}),"{ width=320 height=291 }"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n        \n    Dim swAssy As SldWorks.AssemblyDoc\n    Set swAssy = TryGetActiveAssembly\n    \n    If Not swAssy Is Nothing Then\n        swApp.RunCommand swCommands_VisualizationTool, ""\n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u88c5\u914d\u4f53"\n    End If\n    \nEnd Sub\n\nFunction TryGetActiveAssembly() As SldWorks.AssemblyDoc\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        If swModel.GetType() = swDocumentTypes_e.swDocASSEMBLY Then\n            Set TryGetActiveAssembly = swApp.ActiveDoc\n        End If\n        \n    End If\n    \nEnd Function\n')))}d.isMDXComponent=!0},5918:(e,s,o)=>{o.d(s,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAEkCAMAAABpKxjUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAO7ICQeuAQBtp/j4+KdsAa1rpVcBAIHP9KR3dAADQrmwoG5xtR9pjlkASKXj+5ybnnZo1IZ4VgAAfNCkBdzQmZyPdcICGcPHzysAAGhJAJyls0gAVF6f2G5saMp5qZ1QU45ovtTZ2sm0n9mlcp9/L+fQVABEgWSrDTZ9rsCkPN9raW1wjFtYuo+Ia/bsl4hIAMHT4ykDLKC9z46cpClJjKx7ygIxUyE1Ulc2Aq+lm8N2AFRRUAIAGqipteHh3buXInqh0qaaijyL1MHBweZ7j2uasuGYj357+dnTybHM2/LczOG+CHdpNmRNJJ+zveWhR2FfXwCF035QGAFZonnE6IOCg7Z7v3l6euTTxfzOns1qednq9PZ7gEA+Pt7Z0tQiEdl7nVuJo72pYYOGpdTU1MaopYxw0owuALGUOkcgAdbW1qJ4GdDP2T12Int6jU11ZRERDyllw5KSksLN2+TPdc/AhNi/Sm9IUL6YAry9vHAGBHmgvPm8b8y5wpHUqKVYAL1pjG2FnOPj5diSN+vBHgAFZOzDqyF5q3JycygnKKGioo9xAANFZQJVeNfLxzmh7NjY2AMrhYx6fXy30srLueazirG/1N52fE18m6qNLruYjEdQdXpWHmVlgqNut9e8bNc8Po576LHS8Z172XdTANvc3fvmX5ReSM+lHY247IyTrHiicZJxMsGweLi3wUIAAQuxQRmN06eFAs2XGWypvt7e3Up6lF01RM6yPauOF4uLi2wyANBykFyr8to3LcCIPpnQ6t61HklKSvbxtsnIxeHDtypIXH67lRaefut1d4doaxQAAfvbtujo6athMRQcHF56j+ino2mQsYquwqmpqbW1tCdffYV4cLeLaABdik0AMDUzMo9tFsJ7tABzvK5+Js3b5+BcW29dRMfq93x24PvFh6OYmoM7KKSFT9oBAPyuSJyfxPLq2IoNAM7NzpW5zoFiAQAALbS1vp+33UqIrTlwjQAtZ/rNH8a5r4hgHDmWPt7PslOVs+/r5AAAADkD06oAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAcbElEQVR4Xu2dD1wTV57A5+pzVahnVqsLWHO7KriiW3W1pyAaxdSuUNGozQbLQk+NWwieS6NSo+u5xlhjFI0g/qF26XmEpV2Uq4oibqsxsbdWs7qY+Gdx1cK21W6a4h8MVPO592YGmCQzCWEgKLzvR5OZNzPM5Jv3bya/eUMADDta+t0PWCAXz6JAha5SJ6KnO51nUGC51Sa2WS30XGfzDAqU68wOhU5Nz3U2z6BAvdWh11uxwDZjEdvMKjMuwm3HYlY5nhZ/z6TApwoskCdYIE8CEmhR6DFMFIHmQLUFwwT2pXAR5gkWyBMskCcBCVRXKp9lKluDmPykrScggRZHK1AJ5PSUL4K/ls1GfgY/OFq1FoPABMr9oxAL9PSkD1q7lk5BT/rAey2qtzWUnqNQqFqlRhFMgQoD2a0RuasQC1o+jsK946hoWcJcSy5HSxTwhbECiftaCD3cpad6T4H6sCW9eq35tkDOVPgUCtSrRY7YiKTQNHU58wMwPrRiQog7lxz0Enc1eoJIdaQSRBbhIcxLoEJtJgQWj0R3gYoVfa+P/vSDLwr6fNvASGcRmBYbMbvBRc/QBFOgJTYieuWYMYsjcuVqkb75WBkfWj/pdTd654iblnkIBNUOQmYAjlQlnUThKVBfrnYQOkt5y94QbgIVYSOqHrzyxbk3iON9fryUToR4CaSPPibe7cJO8AQqFBYic1/2yoG7BFdyJoTpDXS6m8DPnrizjVugqlobFycRxtmYbtwFKgwihzQ1NVWrMhjc1mIIVDhGDDlg+eu5X/0u6+L52D4NdDKLwPOZ6VHw6CdcyZljaHEYNIF6dbk8xllyS1h//Ule3sNtl4Y21UxuAmXLETKZbLQWMVFML/ESKBRqJQK4C6vV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"}}]);