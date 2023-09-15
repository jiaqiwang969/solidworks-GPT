"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[74645],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>d});var n=o(67294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=c(o),h=s,d=p["".concat(l,".").concat(h)]||p[h]||g[h]||i;return o?n.createElement(d,r(r({ref:t},m),{},{components:o})):n.createElement(d,r({ref:t},m))}));function d(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=o.length,r=new Array(i);r[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:s,r[1]=a;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},81250:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(87462),s=(o(67294),o(3905));const i={layout:"sw-macro-fix",title:"Fix SOLIDWORKS macro issues with lightweight components in assembly or drawing",caption:"Lightweight Components In Assembly Or Drawing",description:"Fixing the Run-time Error '91' - Object variable or With block variable not set when macro is working with the components in the assembly",image:"lightweight-component.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-lightweight-components-in-assembly.html"]},r=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/assembly-drawing-lightweight-components/index",id:"codestack/solidworks-api/troubleshooting/macros/assembly-drawing-lightweight-components/index",title:"Fix SOLIDWORKS macro issues with lightweight components in assembly or drawing",description:"Fixing the Run-time Error '91' - Object variable or With block variable not set when macro is working with the components in the assembly",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/assembly-drawing-lightweight-components/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/assembly-drawing-lightweight-components",slug:"/codestack/solidworks-api/troubleshooting/macros/assembly-drawing-lightweight-components/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/assembly-drawing-lightweight-components/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/assembly-drawing-lightweight-components/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"Fix SOLIDWORKS macro issues with lightweight components in assembly or drawing",caption:"Lightweight Components In Assembly Or Drawing",description:"Fixing the Run-time Error '91' - Object variable or With block variable not set when macro is working with the components in the assembly",image:"lightweight-component.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-lightweight-components-in-assembly.html"]},sidebar:"tutorialSidebar",previous:{title:"Write summary information to the active file using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/write-summary-information/"},next:{title:"Fix issues with failed to connect to database or Excel in SOLIDWORKS macro",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/connect-database-excel-error/"}},l={},c=[{value:"Symptoms",id:"symptoms",level:2},{value:"Cause",id:"cause",level:2},{value:"Resolutions",id:"resolutions",level:2}],m={toc:c},p="wrapper";function g(e){let{components:t,...i}=e;return(0,s.kt)(p,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"symptoms"},"Symptoms"),(0,s.kt)("p",null,"SOLIDWORKS macro is working with the components in the assembly (e.g. reading/writing properties, materials, working with features etc.).\nError ",(0,s.kt)("em",{parentName:"p"},"Run-time Error '91': Object variable or With block variable not set")," is displayed when macro is run."),(0,s.kt)("h2",{id:"cause"},"Cause"),(0,s.kt)("p",null,"Components can be loaded lightweight which means that their underlying model is not loaded into the memory.\nIn this case all APIs of the component's model are not available"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Lightweight component in the Feature Manager Tree",src:o(79242).Z,width:"286",height:"80"})),(0,s.kt)("h2",{id:"resolutions"},"Resolutions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Check if the pointer to reference model is not null. Display the error message to the user"),(0,s.kt)("li",{parentName:"ul"},"Use ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2016/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iassemblydoc~resolvealllightweightcomponents.html"},"AssemblyDoc::ResolveAllLightWeightComponents")," or ",(0,s.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2016/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAssemblyDoc~ResolveAllLightweight.html"},"AssemblyDoc::ResolveAllLightWeight")," method to forcibly resolve components states")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swAssy As SldWorks.AssemblyDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    swAssy.ResolveAllLightWeightComponents True\n    \n    Dim swComp As SldWorks.Component2\n    Set swComp = swAssy.SelectionManager.GetSelectedObject6(1, -1)\n        \n    Dim swRefModel As SldWorks.ModelDoc2\n    Set swRefModel = swComp.GetModelDoc2\n        \n    If Not swRefModel Is Nothing Then \'Check if the pointer is not nothing\n        MsgBox "Material of " & swComp.Name2 & ": " & swRefModel.MaterialIdName\n    Else\n        MsgBox "Component\'s model is not loaded into the memory" \'display the error\n    End If\n    \nEnd Sub\n\n')))}g.isMDXComponent=!0},79242:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAABQCAMAAAD4MupMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAOK3IPbgXQAtgGMAAExoamOwsIODg10tMwAAM7D396bIovf31AA3VVmYtq+GIJR0FPj4+I/V8CVxwxUVFQBRos63ZOPs8iUAM/b29iQkJHFcJoHI43asgHZRAMPQ1kcxCjB+pCUtgI+PW8a1fjiL1PvihSUAW2Ow9zs7O11xMyUAAF2s48zf7os4AKbIw11RgF0tAAAAW4imuHa82kmEouPRiX9zVVt6c4PN6f7+/gBjsNSLONO4SabI46mHFsmrVff3sNT39xNLaSUtW49xM7DO5jgAADgAOPewY0OP46asgGOkwuzfpzgAYwA4i6rK5HmSmrvV6kOPolE6DTFtiysrK11xW2MAOPnXVKOPS6+2tVKPraaDL0RERGOw1GhLFpmZmWWHmKOilIvU99mvICxUXiVhf4tji9rn7kMAM7BjAMnd7YtkIHbI49CpG3C100NRADMzM5pyIPrndvbKIMOthdLCdGaoxjl3lKurq/LPSZeKdK6UOJeThBsbG0KItaaPW0MtgNSLY7HCygAAY05OTvvuoLy9qSdVbz9pgvfUi2NiYvLji2JFE0MAW49xW1+gvpiGRcPa7HRWGol0Ok6KqG9ePv72wsCXIGyvzcfT2d3DY1SSsNHj6zg4Y4rS7Vubube+vMaxgfvtlXrB32auy6yifaiHPUMAAJaWlhxVczGGro/I44l/Xzdxj93ET1eWtMbW487h8FRBF9vp8ks0DZSqtgAAOAQ7V7WWOU+MqnO41iBZd7nDw3tgH66PROrchpB9Qcu2hWiryZCLfauNVEVtgzJcZW+z0bCLOC1nhT17mFx8fcvW3Oq+IPrqhNjJeJBpItSwY+3u78y7eZp1KEqIphhQbrzBuzx5lYbP637F42aKnfzwpYR3Uni+3NTk8TV0kfnjXrmYOqqjg8y4iVE7Etro7pPY87W7tUlwhXFZKClXcGiImgY7WbPQ51VAGAAAAP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///wfdnL4AAADzdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AHXY/3wAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAgYSURBVHhe7ZqJfxNFFMejVBHaVYNBLWqJBwpCUouidoFA0YClVSpKvTDK4UlQRKqIB60CHhUU40URpCpqpailAip4gjfUq1oRRQRU8Kz/ge+9mdndaTbZDeXzMcnu7/Npd3Z298287773NtmJJ99VvLqqXC4eM7l4ksrFk1Q28Xi9qtfL206SXTxqRPXmt875g+87RfbxLF7714pNCt93imziafk7ck1b3fppLp549Z74z7imyGnrp31S5+KJk7KpfPny7ZH10+rqNmp4pnhAg7ExtzvrAeUF+/KWEJ72+mTY9uEdGSY7eH5Yvp1CZ+PMch0PoCnJ6eC0hqd0zAjWQCxDgE824yE6EDozyxdKePKHCApc5njygn2yGg+FTmRmefnC+g544B85Djk05tPBAOKKIOYSphQel/HUjoKzRmgnweUs8dJZdvBQ6EQATn2ThKf2HF5VpoDXpQAkL4hscEeOnr60vWcyNA0nYeyVGipXOsoOHqo6lQvrD25aIpVmYgCOl1yMMQDAME7ya8/rLuPB4o1bFBwQJ9FV8cU8vWQHD1UdX33TkvHrjNFTkoOugeMIhDKNnMWY0vFwioQHkgl2xEmlsAfKfDxUdSB0xq9rk5KLMgMcZxlijodHDWxLcqCToofjSfO8ItnBQ1UH4DzeNkjCQ2mC0YM1iCVXEjwUY1BvxEnsqjSXHTwUOr51bYNeeUvCk1+KRbYPUMG4oNIs8IjIMOKB/tpROh6qSXnXco5pKjt4KHR841a8MbE37+J4kAsCyAvCg9yYXNCBxyU8WHrGfG3AQ4WJH09X2cHTtKRt3He+iS18P4EEiaySHTyfnXX/2sU+NfnrsIyotCnLBp6P5rTme9VkeDBLspKOHTwo92Uq73BllIsnqVw8SeXiSSorPFCTnVmUmSzxqBFc4XKqLPB41VmRyCzn8rHCkz8vEpnX6uJJgGdCBDTBxZMoubD2mCaX9jqVZFzukncyWjZKcz8zOvTuL4s4JJA1nn6meHCpATfstU7Wai/xsNfw9ForL3hgztzu9LYH8g2Xu/DVj76aldHaSzzi7Q5gygs+jW/+AI9Y7mJ4+GpWZssGnulWeChwDMtdDA/0shWeTJY1numWeDDPgIi23MXwiDfKGa2U8HhBrCUcp9rD8TBkjsID30inV+KXUpLatVV8P+WPLNjo0UMwtORyBB6gUwl8uGZXvsRDqSQH+dBSlcCjLXc5CQ/QqexFmo3y+VR2BNe2aDFLw0NduNzlMDw6HKAj8CQScsoeWeMBNPwUVfX1EsmVSFm23GVdmkG8MhtLs5mycLnLAg89yzUihqZDZIXH4XLxJFVSPNUOlxWekLNlC09FeywWCERj7RW06yDZwdMea9ky6YzXXt4SjbbTRc6RHTyxJ/585Mv35t/62Jq7YnSRc2QHT2DNIV8Nf+rwd7/d5Q/QRc6RJZ6KWLTZX/X5oqm7Xt1/p7+ZX+YUWeKJrfr9pwVVVVVTd4JkPAU9Q6GwZ+DJsGEqgO8U3QbwHVm5DV1W8iZXfA8JjIbBjMdzGO9ggnFu4E1NBfIpsjpthAzE4XmQ/gtVhwL+d+ZP1fEYHl41gKXsSKARFiPgUOGOfGqAQmFRt4tkGPE9TGg0jLxzG4yu0DgdhcOhdVN12ggZiMcj8akONfsX3SzwDF3wdjQ6lgMqPAgGKzsJhs99iM8BhyosErC4+NjxUzCbFBmliYEh2jDROB1ljaczRhLhMfJBPFX7XYV4Zpy+4dlv3v9t0ir+9KL7DPGHG05E4Cnr7/HAiIVFFzQMvImdIk2hYDT+Zz25dxunhka5Z6EavPMwAoQjG4ebzb2e3xcYDtOZnS2sorCVshF5ItyAGR4DH8JDGr7hAGXzk9vmX+qP8suRCbsh5BSI4RkdengA3bbCorNhDpyLjifMKwLvKesv/AORUe4Z5kIYzkEPaRxu1uiZblZYFa3UjUgT4QYsoyfgvxHpXHKismmPsvncFy8X5ZluFsNTdhybIw5VwLMdhmR5xh0QfuiT0Dyr0SsoGeWegQfkBAJn44DgIjM8ulXR2gsjxokkxkMbLnhy3XfhMKLz/R6lh/LrUPH0oirBRxTFB6OURsI4RjzoLB+bbYyPKzEpUNjDEoMZ1W98DdgBCc+Y2XjPdKt6K2UjJDERUAI89F+oOtQebTnq0NuBTg9l2TJlm/5wTxA9IJojDGmCB+6iNgFtUobnizF64DhVDhSOI8yaeKZb1VqpG5EmkgiPLPjUXBELvHDH1USn7uN7DXiQBcNjrD0g6oSEN8MDKuhYewxzIgvMs9wGuN/iUYwmhVnyDH02eqZZFa3UjUgT4Qas8YRCY1efj3S2bt1x5nM6HmJCo0lPLhDOp6y/hocNquOB8+gGsx7tUwFJf3KxGoKVrPCUlcwzzSxUVrzP5JnuErOKwlbKRuSJpIBn5M/K0coyBbRtxs47xfcuLTzlzz0oSO8uxws8EO49qSrJH6jje1BkFKuD+HyLp4FVdtOZWXDLM/AY6MDhyLqZOm2EDNjBEzv1NmVrcfEO5ZYv3rzy32fEt3aRUvqn5n0gzWh6yAaesc2KUlz8/A7lhA8fXXNZNDaSXQk3hbnCsnxfiRv9/wRhhWKZagNPFNNKeeDHI37xf7DKYS/EbOFpbm4ORGOxaED7wuUU2ak9DpYVHofLAo8rF09SWeKh32g47ZcHmqzweNWljY2NS/FXPcbfajhFFni83t2Nq+FvN6KBs9wfsEjyqo274eB1x6qGMHKQOB5V/Q9B3yeWIcWTfgAAAABJRU5ErkJggg=="}}]);