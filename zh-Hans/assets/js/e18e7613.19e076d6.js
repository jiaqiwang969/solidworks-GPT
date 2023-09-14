"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[96115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=i.createContext({}),c=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(a.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,w=d["".concat(a,".").concat(u)]||d[u]||m[u]||r;return n?i.createElement(w,s(s({ref:t},p),{},{components:n})):i.createElement(w,s({ref:t},p))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={layout:"sw-tool",title:"Open SOLIDWORKS assembly in quick view mode from Windows file explorer",caption:"Open Document In Quick View Mode From File Explorer",description:"Tool to open SOLIDWORKS assembly or drawing in quick view (large design review) mode from the context menu in Windows file explorer",image:"open-in-quick-view.svg",labels:["quick view","large design review","performance","shell","context menu"],group:"Performance"},s=void 0,l={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/open-quick-view/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/open-quick-view/index",title:"Open SOLIDWORKS assembly in quick view mode from Windows file explorer",description:"Tool to open SOLIDWORKS assembly or drawing in quick view (large design review) mode from the context menu in Windows file explorer",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/open-quick-view/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/open-quick-view",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/open-quick-view/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/open-quick-view/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/open-quick-view/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Open SOLIDWORKS assembly in quick view mode from Windows file explorer",caption:"Open Document In Quick View Mode From File Explorer",description:"Tool to open SOLIDWORKS assembly or drawing in quick view (large design review) mode from the context menu in Windows file explorer",image:"open-in-quick-view.svg",labels:["quick view","large design review","performance","shell","context menu"],group:"Performance"},sidebar:"tutorialSidebar",previous:{title:"Script extract mass properties of file using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/scripts/vbscript/get-mass-properties/"},next:{title:"Performing entity selection using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/selection/"}},a={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Opening large design review form SOLIDWORKS",src:n(18847).Z,width:"787",height:"588"}),"{ width=450 }"),(0,o.kt)("p",null,"SOLIDWORKS enables an option to open large assemblies or drawing in ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/English/SolidWorks/sldworks/HIDD_DIALOG_LDR_WARNING.htm"},"Large Design Review")," mode (aka Quick View). This allows to only load visual information of assembly and drawing and significantly improves the performance (large assembly usually opens in just few seconds instead minutes or even hours). Individual components can be later loaded on demand."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Assembly opened in large design review mode",src:n(68036).Z,width:"1351",height:"854"}),"{ width=650 }"),(0,o.kt)("p",null,"However this mode is not supported when opening documents from Windows File Explorer. "),(0,o.kt)("p",null,"The following guide explains how to enable Quick View mode directly from the Windows File Explorer."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create new folder which will contain the script to open the file in Quick View mode"),(0,o.kt)("li",{parentName:"ul"},"Create a text file with an extension of .vbs and name it ",(0,o.kt)("em",{parentName:"li"},"opener.vbs")),(0,o.kt)("li",{parentName:"ul"},"Paste the following code into this file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vbs"},'Dim swApp\nSet swApp = CreateObject("SldWorks.Application")\nswApp.Visible = True\n\nDim filePath\nfilePath = WScript.Arguments.Item(0)\n\nIf filePath <> "" then\n\n    Dim docSpec\n    Set docSpec = swApp.GetOpenDocSpec(filePath)\n    docSpec.ViewOnly = True\n\n    Dim swModel\n    Set swModel = swApp.OpenDoc7(docSpec)\n\n    If swModel is Nothing Then\n        MsgBox "Failed to open document"\n    End If\n    \nElse\n    MsgBox "File path is not specified"\nEnd If\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create another text file and name it ",(0,o.kt)("em",{parentName:"li"},"install.cmd")),(0,o.kt)("li",{parentName:"ul"},"Add the following line into the ",(0,o.kt)("em",{parentName:"li"},"install.cmd")," which will enable a Quick Mode for assemblies")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bat"},'reg add "HKCR\\SldAssem.Document\\shell\\Quick View\\command" /ve /d "wscript.exe """%~dp0opener.vbs""" ""%%1""" /f\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you want to enable Quick View model for drawings, add the following line as well")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bat"},'reg add "HKCR\\SldDraw.Document\\shell\\Quick View\\command" /ve /d "wscript.exe """%~dp0opener.vbs""" ""%%1""" /f\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Save both files. It is important to keep those files in the same folder")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Files for enabling the quick mode from the Windows Explorer",src:n(26003).Z,width:"303",height:"176"}),"{ width=250 }"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("em",{parentName:"li"},"install.cmd"),". You might need to run this as an administrator")),(0,o.kt)("p",null,"As the result the ",(0,o.kt)("em",{parentName:"p"},"Quick View")," context menu command is added to the Windows File Explorer. Select any assembly and click right mouse button. Click Quick View and the file will be opened in the quick view mode in SOLIDWORKS:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick View context menu when assembly is selected",src:n(4288).Z,width:"758",height:"231"}),"{ width=450 }"),(0,o.kt)("p",null,"Watch ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/9uZCecGg25I?t=12"},"video demonstration")))}m.isMDXComponent=!0},18847:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/large-design-review-open-a33404aba6233922505fd6fb88849f1d.png"},68036:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/large-design-review-9380f8a238c2affcf4d16c2c52c68014.png"},4288:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/quick-view-context-menu-e2f36b2b11415701d6ed97e72c713a77.png"},26003:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAACwCAMAAABpRxjIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAzV1QSBgfzYjhakpK3AxI45ALPj6pqjqOv7/AA5jldxgvj4+Pz8/Fl3oIfGxi47SKzV2qri/fuzZWWz/AAAOerq6taOOWeioi9YWHvr64SSntHR0cvk8aCwuB0dHTmOs4KKj5HA/qnF1Pz82DkAOVnHx32izWmLu7Gxscn0+TkAAFtcXdzg5bDa6e7w8rNlALL8/DdMYXFxcn+o5O/v7/b19QBls/b39z2lpfPz8xvm5tHW3o6zjp7CxxISEq/JzrK3v7nK2fz8s2UAOUft7dny/WuLn43s7GNnaaHQ7HmAg8vQ1LXd8ymZmePj5LO6w4y467rk/aG6zp2lsElLTYqr1Njs9JqamitAVkhkg9PZ4cHFzXKWy47Y/IO9vjTr66HI3yosLQAAZQeOjjkAZVZzkI5ljre3t5KSklSrq83j/XLW1rz6/qqqqmCAqkJbc8TZ8ZSWmMLCw8TL0uDk6Uf9/cDv9Hd3eNr9/sr9/myNsbu8vLHH2nH8/DjPz4uoub3T6dnZ2cXh6Wxsbert8Iv9/dTU1NfX14GBgTs7O2qzs5vP/pm2xbnW23ii2xaKipy94MLU4Y26/GUAAMbJzXmav5je3tLp/aKps6/q/mNjY9nr60hSWVm8vDD8/IebrfXw7Wxwc/yzjr3Dyr7r/hS0tM7S2Xp7ewz5+aLa/q/I4y8yMzmO2KKjo05jdZnOzgFwcPT29l3t7bW9yLjN4qq6y3mMncHW7I+krkJERdnd4iHV1VHY2GR7kNiOZV5qdam0uYPZ2YqLi378/GSCndTw+nSDj8fHx+D+/sHO24Su7J78/FVZXGSGsjhUcXWa0lr7+8ra4pKzwtH9/m2RwMPx/lFsiMPj+KWzwp+vveLy+VFRUhiSkpKwtDy0tMnd9rzR5SMkJcL+/nC/v8rs7uXo7Aaamr+/wCtEYtjg6KzU45K119Lm8kKdnXeVq7be/2l3gLq+w5bI/uPs8bvl6pefrSD5+Ym09J7x8cjT33mkrLPC0rTy/ZGZpwAAADhovScAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAa9UlEQVR4Xu2dC1wTV7rA6bYWrImPdm/alWCvZW81LBCVhtKUazVdUQQbqygRcKturzdojUhAQwSrIRFDq91qsdqoZbm00sUNbJSHYL3QoETqoyo+UNuKVhoftKWFbavob79z5kwSQgBHkihs/pLMmWScnPnznW/OnJkJXmwPTPD4YobHFzM8vpjh8cUMjy9mdPJVMnvU/WR2CanHA4q9r8JCPindH/iFhaT0YGLvaxSLFO4XrFGk8GDSyReZ3j9saiAMUt0HxELy8Y54oH0FdVdzlyFQkYIjHmhf3VXchawjU0d4fHXG44sZHl/M8PhihscXMzy+mMHYV5bZ/ZjwxwN90JecBRhohACfQkPRhEmlCQq6FmSl0gJ5wfJ2alNTEFqZ0JDKT8lJ4adCMTU8vNIg1KQKVQJyJNYXfbFthdG6rKpoTQBRE29LOAWZo4BFKoNSU+P50SkpO/nhTeEJKk68hs9vStmZytc0pfIthyF9Pb7AFvZlpwvbIrqIE4spG8gbQDgICwoPT8nfkxKesDN/T354CryfMHHidHgvlZ/F5VAB1kd9EVuW6OrGFxHiwBZA3kPAoqk7MdHUBIgGwsN3avhZJnGYtQYUfccXkYVzlyV7AVgaAoujwPp6hiwNkFVgyHr5yFeotQYUfcaXwXerc4i5O/6Z08d93cEzvQRlQUIYmYTBDxBqCKUgAZya8O/jiwXbbHA0KkspAkASXcK+YNaiixIm/vfxZUgdAe2uOrXTsD9RZIktShsOrzCiC8IM6/o38sXauLFkIzwSokl3gEAc2UKpAlnoH3JFt0bkS9O/fbGofT+bzS/NyMgQlZTsyZGS/mYYvAXqiCRbiC9DGJ29LML6uS+WIb5SQBU1M0sQje3hEjF+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"}}]);