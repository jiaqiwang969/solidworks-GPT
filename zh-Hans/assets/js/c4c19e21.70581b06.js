"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[58627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,p=m["".concat(c,".").concat(d)]||m[d]||A[d]||i;return n?o.createElement(p,s(s({ref:t},u),{},{components:n})):o.createElement(p,s({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>A,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={layout:"sw-macro-fix",title:"Failed to run SOLIDWORKS macro with multiple entry points",caption:"Multiple Entry Points In The Macro",description:"Fixing the macro which doesn't work if it is run from the Tools->Macro->Run menu in SOLIDWORKS but works correctly if opened in the VBA editor and executed via F5 or by clicking green arrow",image:"error-object-variable-or-with-block-variable-not-set.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-multiple-entry-points-in-macro.html"]},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/macro-multiple-entry-points/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/macro-multiple-entry-points/index",title:"Failed to run SOLIDWORKS macro with multiple entry points",description:"Fixing the macro which doesn't work if it is run from the Tools->Macro->Run menu in SOLIDWORKS but works correctly if opened in the VBA editor and executed via F5 or by clicking green arrow",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/macro-multiple-entry-points/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/macro-multiple-entry-points",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/macro-multiple-entry-points/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/macro-multiple-entry-points/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/macro-multiple-entry-points/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"Failed to run SOLIDWORKS macro with multiple entry points",caption:"Multiple Entry Points In The Macro",description:"Fixing the macro which doesn't work if it is run from the Tools->Macro->Run menu in SOLIDWORKS but works correctly if opened in the VBA editor and executed via F5 or by clicking green arrow",image:"error-object-variable-or-with-block-variable-not-set.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-multiple-entry-points-in-macro.html"]},sidebar:"tutorialSidebar",previous:{title:"Creating macro buttons in SOLIDWORKS toolbars",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/macro-buttons/"},next:{title:"How to fix merged SOLIDWORKS macro errors",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/merged-macro-error/"}},c={},l=[{value:"Symptoms",id:"symptoms",level:2},{value:"Cause",id:"cause",level:2},{value:"Resolution",id:"resolution",level:2}],u={toc:l},m="wrapper";function A(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"symptoms"},"Symptoms"),(0,r.kt)("p",null,"SOLIDWORKS macro doesn't work if it is ",(0,r.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2016/english/solidworks/sldworks/t_run_macro.htm"},"run")," from the Tools->Macro->Run menu in SOLIDWORKS."),(0,r.kt)("p",null,"This may produce error like ",(0,r.kt)("em",{parentName:"p"},"Run-time Error '91': Object variable or With block variable not set"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"&#39;Run-time Error &#39;91&#39;: Object variable or With block variable not set when running the macro",src:n(80554).Z,width:"320",height:"194"}),"{ width=320 height=194 }"),(0,r.kt)("p",null,"Alternatively macro can misbehave or just do not execute any steps.\nMacro runs correctly if opened in the VBA editor and executed via F5 or by clicking green arrow (run) button from the VBA editor"),(0,r.kt)("h2",{id:"cause"},"Cause"),(0,r.kt)("p",null,"When macro starts SOLIDWORKS tries to find the entry point (the subroutine (sub) to execute first). This will be the sub which doesn't contain any parameters."),(0,r.kt)("p",null,"If the macro contains multiple such subs this will provide the ambiguity and any sub can be an entry point."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main() \'this method must be an entry point\n\n    ConnectToSw\n    CountFeatures\n    \nEnd Sub\n\nSub ConnectToSw() \'this method could be selected as an entry point\n    \n    Set swApp = Application.SldWorks\n    Set swModel = swApp.ActiveDoc\n    \n    If swModel Is Nothing Then\n        MsgBox "Please open the model"\n        End\n    End If\n    \nEnd Sub\n\nSub CountFeatures() \'this method could be selected as an entry point\n    \n    swApp.SendMsgToUser "There are " & swModel.GetFeatureCount() & " features in the active model"\n    \nEnd Sub\n')),(0,r.kt)("p",null,"The entry sub is critical as it usually contains initialisation routines and if this is not executed in the correct order the macro logic is compromised."),(0,r.kt)("h2",{id:"resolution"},"Resolution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Always keep one parameterless subroutine (usually called main). Use ",(0,r.kt)("em",{parentName:"li"},"dummy"),' parameter if necessarily for any other subs which do not require input parameters to prevent the incorrect behaviour. It is possible to pass any value for this parameter as it is not used (i.e. "" or Empty).')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Call AnotherProc(Empty) 'calling the sub with empty value\n----\nSub AnotherProc(dummy) 'dummy parameter not in use\nEnd Sub\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\n\nSub main() \'this method is the only one without parameters\n\n    ConnectToSw Empty\n    CountFeatures Empty\n    \nEnd Sub\n\nSub ConnectToSw(dummy)\n    \n    Set swApp = Application.SldWorks\n    Set swModel = swApp.ActiveDoc\n    \n    If swModel Is Nothing Then\n        MsgBox "Please open the model"\n        End\n    End If\n    \nEnd Sub\n\nSub CountFeatures(dummy) \'this method could be selected as an entry point\n    \n    swApp.SendMsgToUser "There are " & swModel.GetFeatureCount() & " features in the active model"\n    \nEnd Sub\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-api/getting-started/macros/macro-buttons"},"Assign the macro to the button"),". In this case it will be required to forcibly select the entry point sub so no ambiguity in case of multiple parameterless subs exist in the macro")))}A.isMDXComponent=!0},80554:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADCCAMAAAAPQev/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQMAALjHg/HJnACk1L2EDT7N8vj2zW+qxOHp7ZNjD+Lu+ezx8/Py7PT09PDw8MzY32SGkpPG2rusai1gfQICZqOwvpOTk8zs54CDhWdjZ4Xg/FweAYG60FIDXeDf2kyInJufo8zNzqWnqcDb9qTQ4zw7O1QdY8K7slpXWY+Acwdmnur4/o2YonN1atru89za0sjg9lyOvdbUvLXN4ePfvcHMse/q1q7Z5vf397W1tUdGRpmst6+ah39PAMzCvnV1dYxeVcbN2L6thz9nmLTN8T9JdbOZYMKzpZmdowAtTbba/NDQ0NTw7ez1/W43UbJzMf39/SARLpqBRH+fwVk8c6Ojo4zC5ImJiVhfcFlPPdHk9rfU8PHvvdrJrrvGzAC34pqamuzs7Ep3sJR8V2dpeXVZL7q+whJAT+Tk5DiLy9K1iNPp/tDIwsPh9Wt0hoCvyKa81bPV9s7UxpKz2unu8DNCXMrKyrWcdXaBmbKDPdfX17vY9Obip3+Nm9rs/bHS87Guq/Du7FNIkKq1prvc+6uup6urq6KJYNHc48zJk8bf+NTU1dbV1+ny4tfr1mabtUcQH63O7r3U3dP2/ePx/lVnlrelnJGiucrk/IxxR0ElANC1ddvnyFJggH5kZWdJHNDEoV0AIPv43LK5wanD2HVObI9nNS1vpd7w/ujn5X5+frHQ7n09OOnfywIjgdvb221fWbvWwYNTTMvW3a7P8NvaqqWdsXSh1ERnfJbI6MTt+SmHueTQsCIwdXCu162PUaqZZlF2nnTV8omasc24l32z27ji/Kq0v7qumFJRUcqjd1GbyUBXifPwyoRybbbo9IlFI8/m/b2zdcTh/PL6/ru7uwgbRcHd+aKMUdzXy63OyqWlwGOgyLG0t8bGxs7HrcmhXEyJsx5Leap5U/TdvfTz2dzTlZeQhABGhvPx4tbg5vL09ZrM87/h42NMUVyEp2Vrncbc6YJ2ktLFfodxVc64o1lxhGFKd83r+sPGyZWuyevj05m95vb45npmVQAAAE2OYzAAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAW20lEQVR4Xu3dDVwTZ57Acep2EUkm9aUirF0qQqstKfImhNYaX070wChVYyi+lCByKVQFpbGioLYcWqm6StCwvpRTaxPUjW9U6VlfTlCr1RaRRS3FooIN+LLW14r0c/9n5gEmIZm8DPau9vltFyaTyeTh22dmQrDiEkMnkVAilJLEEU1ESSSMGRMNSOsplXoVyUZ6WpFiESJA8FMqVSqDwZBB4gyIVCowZAkCIPIDvtxotVpdQ+JIrfbJzUCELEGXGIlIpFdlqJMicnL6ykmc5SyqrFHnGtiCCFCpMqgj4qWvv0SyUX9PeUQSI9gKCAew3hCd49l/lOwJp2nJ/YmF9o6f7Ul07riXl0cOCHrrW6egC5qAuTWK/kt1KQ5UjmtdaEvbVgVUhfL1hX+y57eUBi00b69Zq+xoW0uTmNDOfeHJqqrgmfEgtFo8MCb8BTiXLkDqFR+R5JPRNgVd0ARUR3w9NQtvwzs80FbIwMBlyxhH+NJoP7q0NPpLxnrmYURWWMpy9K4gtGN4FhCcsawFEA8Hj45nWQ1vwVFcE22AKdgCCGfAGrkU+WU5GvMQZtfto8eNvwpgDESEtB0KTcI0a3yWAO0nxIJtc5AeSAcRZsVL43Mq1W1nQReR0ju3Mt7T33E+jvCzofDo4eswIaQBsVb7MJl5NJUVSAzIImQdxcwY8Ih4pfnBywOmYC4LEC4hlR6e/vQXrtPRZ3m70plF76B9zPNiwmVYkOazCoi5LAZUzMf2YcAWQd8qOHUwfh04CTU/9Ff0yUlCx3ALoMrgE8EAOsJnPcuaiDBOiwDRtcRZPhRQrVplkRADsiZhxwsCoCccwz4GFT4JuijhRXSEAgECnz/9WgM+tr3maBezDbxcaP1gHn49ocF2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"}}]);