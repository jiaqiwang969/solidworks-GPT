"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[50917],{3905:(e,r,o)=>{o.d(r,{Zo:()=>u,kt:()=>g});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=t.createContext({}),l=function(e){var r=t.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):a(a({},r),e)),o},u=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},A=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(o),A=n,g=d["".concat(c,".").concat(A)]||d[A]||p[A]||i;return o?t.createElement(g,a(a({ref:r},u),{},{components:o})):t.createElement(g,a({ref:r},u))}));function g(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=A;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}A.displayName="MDXCreateElement"},89378:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=o(87462),n=(o(67294),o(3905));const i={layout:"sw-macro-fix",title:"Fix failed SOLIDWORKS VSTA (C# or VB.NET) macro",caption:"Failed to Run VSTA (C# or VB.NET) Macro",description:"Fixing the Cannot Open error when running the VSTA macro (C# or VB.NET)",image:"cannot-open-vsta-macro.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-failed-to-run-vsta-macro.html"]},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-vsta-macro-error/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-vsta-macro-error/index",title:"Fix failed SOLIDWORKS VSTA (C# or VB.NET) macro",description:"Fixing the Cannot Open error when running the VSTA macro (C# or VB.NET)",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-vsta-macro-error/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-vsta-macro-error",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-vsta-macro-error/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-vsta-macro-error/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-vsta-macro-error/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"Fix failed SOLIDWORKS VSTA (C# or VB.NET) macro",caption:"Failed to Run VSTA (C# or VB.NET) Macro",description:"Fixing the Cannot Open error when running the VSTA macro (C# or VB.NET)",image:"cannot-open-vsta-macro.png",labels:["macro","troubleshooting"],"redirect-from":["/2018/04/macro-troubleshooting-failed-to-run-vsta-macro.html"]},sidebar:"tutorialSidebar",previous:{title:"Run SOLIDWORKS macro automatically on application start",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/run-macro-on-solidworks-start/"},next:{title:"Fixing the inconsistent selections in the SOLIDWORKS macro",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/selection-inconsistency/"}},c={},l=[{value:"Symptoms",id:"symptoms",level:2},{value:"Cause",id:"cause",level:2},{value:"Resolution",id:"resolution",level:2}],u={toc:l},d="wrapper";function p(e){let{components:r,...i}=e;return(0,n.kt)(d,(0,t.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"symptoms"},"Symptoms"),(0,n.kt)("p",null,"SOLIDWORKS VSTA macro (C# or VB.NET) cannot be run and the ",(0,n.kt)("em",{parentName:"p"},"Cannot Open")," error is displayed  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Error displayed when running VSTA macro",src:o(79147).Z,width:"320",height:"130"}),"{ width=320 height=129 }"),(0,n.kt)("h2",{id:"cause"},"Cause"),(0,n.kt)("p",null,"Unlike VBA macros VSTA macros are compiled in-process applications based on .NET Framework."),(0,n.kt)("p",null,"The main difference is source code and binaries (deliverables) are separate elements."),(0,n.kt)("p",null,"In order to run the macro it is required to compile it. .NET applications are using interops to communicate with COM objects (such as SOLIDWORKS)."),(0,n.kt)("p",null,"Which means that it is required to have interops copied locally to run the macro.  "),(0,n.kt)("h2",{id:"resolution"},"Resolution"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Copy all files in the output (bin) directory as the deliverables. You may exclude .pdb and .xml files as those are used for debugging and documentation purposes")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"List of binaries from the compiled VSTA macro",src:o(73394).Z,width:"400",height:"110"}),"{ width=400 height=108 }"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the macro was supplied without this files try to create new VSTA macro and copy missing files"),(0,n.kt)("li",{parentName:"ul"},"If macro (or zip archive) was downloaded from web. Make sure that files are not blocked as it might cause the issue.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Option to unblock the dll file in Windows",src:o(10478).Z,width:"218",height:"320"}),"{ width=217 height=320 }"))}p.isMDXComponent=!0},79147:(e,r,o)=>{o.d(r,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAACCCAMAAAAAGeGTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAOe/BlVnfPXqAi4yOppqCQG4435TAP32AL+3lIyTm9PLmGFKEQCq2AwWIqfh7pBtU4CBgwBajZK6vJfN1ZpaAbx3WHxpX/r12UGGrdDS0o61z6Gio1YIAAk0Yi5JZfPjsMKHeVLE5q62v5rQ5qlMPU1gdhx0omd2iHVBUMy1OpehrDlPZt3h5uCpA5V8gkCDl2o7AHuRrJ2oswAFFdG4fjdBUMX5/rqNZFIOSQxpkSkEXUlOgru/xLCztR90gMnHuurr6z9JWXY+bbbI0cGkf7rP5ZNsPdbZ29n1/KleUnt8feewqU1xlVhYW4m67I2ZpiQrNVaApYCNnLGKVZGrxkBVa6eSe3efxLw2IAEZXmVjZdm2cZorHM3S2ua5IvfRru7y9Vw6V+Lr87m6vK3B2j+LzM2fGRgjLxxSmYEvLoRgRNanV4mjvn5ujU5NUF5rqqurrK6mO108LMTr9NaFev7+/tKgkn6SfUNXbnOCkqC4yWxtb9F6blN1eAA4S5SaoHC21T9loe71/a7M77O7xJNzbv7oyMFPO3B3ovDd0H6etsjKysNlS0ldc5ulsKU2JbB7bVFkeTxVb39YdmN1iDRPamZqaOrRHrWSDXOLpPXs5e7LRneFlcqnoqavue7l2+vVmba3uLrCysbL0fz37tvb3FubypKdqWB4men9/jo/SvXlJHij3NaWP29+j19OZzdPaebUx2ZOg3NzdubBol1gocnY5TIHGFsla97Ptcy+szxRadGccGMPJ4pKSGNQUlyNsr6fbI9XYyAmLqWorHtXK/Pcv7y4qIyNja6hkTldheC/hp+kqoSRoGQ9Q4mVo6G61llqfoNgWMF3bW+Em9iThbN9PayTbtqwqFJXjTQkXKN5XGBxhN+bkdPW1zpEU+bl5jA5RpbB8G99jsWRiNze4Lk/LKuzvCZEYrPZ/cDHztWjf76dmERacbfp/SeezWp6i1xtgVB3vMbc8p6Ib5zQ/Km3y3KLvNHj9nuJmPDw8N3r/OLaYKGrtQAAAOtdhiEAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAXmklEQVR4Xu2dDVhUZb7AFenDcVPJyhFoox2zlEuuomY3Z65jaChXgxCjdFlRWHcrolE7rUB7Jwm5BiupoSYRH8OMMNraFi67kKtoyKCCoHntAy8eNlnacXU1SmVYnvv/v+8752NmwBlpn/s8cn7KmTNn3vOe9/zm/34yOkPmUM4BMxR8ApTNmUMFgrt2BV/ZjQ6JQLAXM22IAjKSPd6IaUM+9W9vnzEDBZ5r9x/ib0j611LqCd0PBMuuT1gZvEBbWZbrDbqGUv8hMWAQBJ6b4T9SpQn1SB4FH+EH//ZBuZPo8mhKM6EJiUW6gcLCwjTg66+/vgw8Qjkr44oLJ0+yHQZLRmE5IJgh5IvgJdLgUgheFSAliI0lpUFo4QBWWCfNCRtqvgD+sz8wQY2ht9M4DQyiwPZpDUUkb5YpwPLrF5qQbPFkLCArLoqiqtL2AlRWfj7eMhrx89uyZcKECZs2bbp4cd26dUuQT5z8W3+wNJ98Qs5ZsgTOXncRgKw2bYIstyB+fn4nqXYi+Wx+vlMwKobykIIhpJgIK3Z3d5p97BevAf/bH5jg/bry7vCGIf4gEALQP7S5CZ2xICKwyOoblo5AbBKHrCBQKFpGUSA1CLdFDUoVUocI89MPLCFxBzB5RJ/gjwl0+kOBRN9ejE9RIJUn2gMK7WPfP3/+/P9IePVVccuAFH+vK49tCt39qT8KjMmwN6E9rLHhLvT2huMfl105WLFBIjFIiwGQIqI+6g9uA+/G3Z9UIHN0A1hi4o/EH3OIColDUSFxCJeWKIQ/LgZJkRkg8LUHgVedvG7M0lS++npUaVYDO/Iqvv4gCuzWRo1Ege2/zChrRnugqMgDnQjbFsFfd8BqXig1iIVAsHyiPom/vgOQ+fEC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"},10478:(e,r,o)=>{o.d(r,{Z:()=>t});const t=o.p+"assets/images/unblock-dll-2d4798dc7bed6e867aae97c4311d9fc1.png"},73394:(e,r,o)=>{o.d(r,{Z:()=>t});const t=o.p+"assets/images/vsta-macro-binaries-a7d479122c8f7fb567fa76ffd8dc05c9.png"}}]);