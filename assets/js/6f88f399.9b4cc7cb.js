"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[74713],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),u=d(a),h=i,k=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return a?n.createElement(k,s(s({ref:e},p),{},{components:a})):n.createElement(k,s({ref:e},p))}));function k(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,s=new Array(o);s[0]=h;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r[u]="string"==typeof t?t:i,s[1]=r;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},22409:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const o={layout:"sw-addin-fix",title:"Fix missing Visual Studio SOLIDWORKS API SDK project templates",caption:"Project templates are not shown in Visual Studio after the installation of SDK",description:"Fixing the installation of SOLIDWORKS API SDK when add-in templates are not shown in Visual Studio C# and VB.NET projects",image:"solidworks-api-sdk-installation.png",labels:["add-in","troubleshooting"]},s=void 0,r={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/sdk-installation/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/sdk-installation/index",title:"Fix missing Visual Studio SOLIDWORKS API SDK project templates",description:"Fixing the installation of SOLIDWORKS API SDK when add-in templates are not shown in Visual Studio C# and VB.NET projects",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/sdk-installation/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/sdk-installation",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/sdk-installation/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/sdk-installation/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/sdk-installation/index.md",tags:[],version:"current",frontMatter:{layout:"sw-addin-fix",title:"Fix missing Visual Studio SOLIDWORKS API SDK project templates",caption:"Project templates are not shown in Visual Studio after the installation of SDK",description:"Fixing the installation of SOLIDWORKS API SDK when add-in templates are not shown in Visual Studio C# and VB.NET projects",image:"solidworks-api-sdk-installation.png",labels:["add-in","troubleshooting"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS Add-Ins Troubleshooting: Issues And Resolutions",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/"},next:{title:"How to fix the error of SOLIDWORKS add-ins sharing common libraries",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/addins/shared-library-conflict/"}},l={},d=[{value:"Symptoms",id:"symptoms",level:2},{value:"Cause",id:"cause",level:2},{value:"Resolution",id:"resolution",level:2}],p={toc:d},u="wrapper";function c(t){let{components:e,...o}=t;return(0,i.kt)(u,(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"symptoms"},"Symptoms"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SOLIDWORKS API SDK installation process",src:a(86977).Z,width:"635",height:"482"}),"{ width=250 }"),(0,i.kt)("p",null,"After installation of SOLIDWORKS API SDK no project templates are shown in Visual Studio New Project dialog for C# and VB.NET"),(0,i.kt)("h2",{id:"cause"},"Cause"),(0,i.kt)("p",null,"System error happened while installing the templates and registering the Wizard assembly in the Global Assembly Cache (GAC). This might be caused by permission issues."),(0,i.kt)("h2",{id:"resolution"},"Resolution"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Locate ",(0,i.kt)("em",{parentName:"p"},"SOLIDWORKS API SDK.msi")," file. Usually found in ",(0,i.kt)("em",{parentName:"p"},"apisdk")," folder of installation DVD or SOLIDWORKS download package.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The MSI package is a zip storage. Extract (unzip) the file using any Archive tools which support zip format (such as WinRar, WinZip or 7-Zip)"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Unzipping .msi package",src:a(34316).Z,width:"870",height:"383"}),"{ width=500 }"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Find ",(0,i.kt)("em",{parentName:"p"},"swvbaddin.zip")," for VB.NET template and ",(0,i.kt)("em",{parentName:"p"},"swcsharpaddin.zip")," for C# template in the files of the unzipped folder.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open Visual Studio and select ",(0,i.kt)("em",{parentName:"p"},"Tools->Options...")," menu command. Navigate to ",(0,i.kt)("em",{parentName:"p"},"Projects and Solutions")," group."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Projects and Solutions options in Visual Studio",src:a(21625).Z,width:"1238",height:"560"}),"{ width=400 }"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Copy the path of the ",(0,i.kt)("em",{parentName:"p"},"User project templates location")," field value and open this folder in the explorer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Copy the ",(0,i.kt)("em",{parentName:"p"},"swvbaddin.zip")," file into the ",(0,i.kt)("em",{parentName:"p"},"Visual Basic")," folder and ",(0,i.kt)("em",{parentName:"p"},"swcsharpaddin.zip")," into the ",(0,i.kt)("em",{parentName:"p"},"Visual C#")," folder. It is not needed to unzip these files."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Project templates folder",src:a(82227).Z,width:"629",height:"354"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start Visual Studio and create new project. Now C# and VB.NET project templates are available for selection.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VB.NET project template for SOLIDWORKS add-in",src:a(10950).Z,width:"1194",height:"825"}),"{ width=500 }"),(0,i.kt)("p",null,"If the following error is displayed when creating the project:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SolidWorksToolsWizard component load error",src:a(28236).Z,width:"566",height:"300"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the folder unzipped from the ",(0,i.kt)("em",{parentName:"li"},"SOLIDWORKS API SDK.msi")," file and find the ",(0,i.kt)("em",{parentName:"li"},"SolidWorksToolsWizard.dll"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SolidworksToolsWizard.dll",src:a(52889).Z,width:"750",height:"290"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This dll needs to be registered in the Global Assembly Cache (GAC). Navigate to ",(0,i.kt)("em",{parentName:"li"},"%windir%\\assembly")," folder in explorer and drag-n-drop the dll file into the folder")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SolidWorksToolsWizard dll registered in GAC",src:a(47146).Z,width:"795",height:"321"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If ",(0,i.kt)("strong",{parentName:"p"},"Access Denied")," error is displayed while registering the assembly in the GAC, you can use gacutil from Windows SDK and run it from the ",(0,i.kt)("strong",{parentName:"p"},"Command Prompt")," run as administrator ",(0,i.kt)("strong",{parentName:"p"},'gacutil.exe" /i "{FULL PATH TO solidworkstoolswizard.dll}"'))),(0,i.kt)("p",null,"Alternatively follow the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/app-domains/how-to-install-an-assembly-into-the-gac"},"How to: Install an Assembly into the Global Assembly Cache")," article on the guide of registering assembly in GAC."))}c.isMDXComponent=!0},34316:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/extract-solidworks-api-sdk-files-fb15b8a7a88a9b7e641fdf84d610797c.png"},82227:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnUAAAFiCAMAAACnEt7YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAMGpVanj/KhhAFNZXvjigWWxtLNlOQBjsvDt4wAAZMjAs/r14fj39u7jrvv8/F4AAO0cJIdtbW2x5zdjsoyyjbnR6tbl821gqG1geuLi4riHbQA2jOysjITO+PLozWU5AAAAOIeHh83a6uDq9sqIZOju9W1gkeysZMry1oe1y4RhjM65e+vy+fbqq4Ss+TcAZFabwDWI1q+Mjc7Lwu3emOPJVDcAAF4AONzJhO72/YdthzxecvLkudb82jcAOKjy+am0v5/P/OHj0eT8/OGxke7esNizZcqIOPPcea6WXuTMZp9th0yX0sWXejg4ZPP4/jeLsm2HuKCvw/70rPLinG1tn/zPn9XV19jKnfz8z7arlF6s+dzm9AwMDbLc8vyzZc69l8/f8Ydtn/XowOvYjbP8s8X8/MfHyqmXvbNlANO9bI7Y/K7UjenVgpWWlb+pajk5OZ9tbal9evXcczk5jvvqmuW4h2VlAMCnW/Pv34eHuNj8/Ik3ZLjl/NiOOUxgkfLktp9tn6i+1eH8566URtHR0/TciPz710x9vd7OjI45AIe45Z+fz/Dw8LP8/NjEfOzy1jmO2K22qM+fbfPhks/8/PzLqGUAZeXPcmWz/Mayb4eHn+TKXvzkuObw+vjuuPrzzOnp6W1th+DRpPz8szk5AOTQigA5Zbq6utzGa21tbdG4XM+fn4xgermiYPLlpO/gpWiw1P7tqJ/Pz+zPjPv75QAAAPrli2mDldjAXPjtwcHj9Mq/qf3soYzL+9bJrri4n0xgem2fzs64Y/DahNrb2+zysWUAOejPckxgqPfrsqHU8BISE822henNTriHn+bWkf72stG7ZISIZOzTZeGxqLKZT/jy0/vnk4Q2ALifuLiHh2UAAJubm/Xno97Kd/yzjrWeVwA5juPu+sry+fn02Ovcq6nLvdTDgfzYjoxhkMGqX+vak/z80trKlsDAw/r37erQW87O0Obi2cWxkdXBdeLOgO7WbsOsZfnww/3yp46z/P72vdiOZQAAAAdacBYAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD//////////////////////////////////////////////////////////////////////////////////////////////wDSZQBsAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAhEElEQVR4Xu2dDbgdR1nHD0RKiK23UhBpKtiKWhFCASGIBRRbSAXCh9SWUG1QEAwF7IfEj0JEpN5ya0tCsBI0UGhEqLYINA+IUm2kRQooKArRUKF8SCoVKIqtyOP7f993Zmf37DlnbrJn7vn4/57cu7szs3Nmd36Z2T3ZfdP7eUJK0/s2QkrTWyCkNL0HE1IaWkfKQ+tIeWgdKQ+tI+UZj3WrVofFqjU/rqv9rHpYWOn1ela+wQZJ7dv/2vW9nqbJbsd9XpY3Hq2LDVJLezUBfM6oMkJs17LBBxx/P9+IDDgDY2/NJLNs607UPm7wEV8GTtQzfePRZ9lmK34+t+/HiX/451sqhnVNtr9Mal4lRTcc93nsun3/8f9o1vV1T7NRgv9tGEraz60HG+irH3tu6NeuH692vK2ZZLqxrtc4ZvPN3BuEn89rH+fdlGedIvvoJ1x7Ej7Aduy3rtkoodN+7qsfe27f39eOfrza8bZmkrEhHtPTWTc+SvofHbnq6ftlU6YytUby5O/v9v3v3I+lTYcnNqaSXvOY9YTiF86alo61Y4rE6fPzGQZErTgWwuZxr/L9tXlpD0kJLeRyD7KuvyO8n+2Q6se56mGSGtrlbbSDDcVHH7TsKdZt33/E0VJjaHQ4At0XiWd5tWNuzSTTwwS3QQ702odU1snhbJDj1MlPZjIMWjKTiXJYlx+MT99TP+TGMWOY275fnJCzZqVj7d8PhaVi7Q1hQ89WUHHVBHwSzjFKoXk2ETtSVFXTTwjWeVdW9DVKatMSfkj141wlzYjtCm3Uqr346IPGntKk7fufKsVio/UI/BPtRHuLx9yaSaYnfezDTdXlcoSaJoepiXoq5fCRiUPHsoYccu/nfF3BblpKzpqVjrUDVILzqchfZawiLRTSpbZDStlG8plI0B6w6UxXNf1o2aGir1FWo9UHYdPjtCz0ZWgXEmObpHjSAKOvfuwp9w7aqqrR4QikijCue4vH25pJpieHgb9pgh6QnyfbkMOUgRyIdXI+cBpw6Nv39+z0BXDEP+DrhtShl2WytNKxdh2VcGL9fAo6qsVzKoXsnOo97MN0IPD9lRuPlj1RWjvLVxU/EKe/UdaZ4ZBqx2nNwZaueBuRUZ2BUQeNKVB20FZVjcYRaA29s0L7vMXjbc0kM9I6P1E162RtfaODm0d84nE/pEroWUPpULt+0RFPrBMqDoXsU9ut8wEOiTZ2WIsAqqlo6Qbr59D09DitOdiSldhG/YlHOuqg/YharPP94tJaPN7WTDKYYb2z7JDlUNLjDx3ZsM77PtDrNY/4xkfdW8crPX0oHWrXYQwXJ5ZjQB9UHAvpp6JXpJRt6H6Cf7CWtDRvEdYa/dDXDdrP4ZBqx1kpgE8MbURGLD7yoP2I4qmyBsYjqD7ZWzze1kwyPTQdX2Re+xBcsd6Iu6/68UvC9h+Wa9xgnWyfeJad2shHHuArFavs2l7qstKhdtRx7XpUbOfs2nvJL1xlo+KqCTjJ4W5Cm+CnWC+rgZTwNO1DaaLsaWWctkZZm1CflK8fp8xYWoGkxjaqxl589EH7EVmp2Oh4BPhEWeJuAtVK6lhbM8nYDaRckcgd1I1H99a8yP52VsevVyu4OHPr5IJiNW7ldb8hnGjXHThrVjrULhcpx92BE2s1SLL9YwMqjoVko7faZ1iRUpug2HWNnn7/+gHbevs3uk3ez35I9ePULy60QkkNbdQ2efHRB+1H5DaEBmmqfyKW0lardsytmWT477COK9M9h1Tx2FozGdA6Z1z9jPlh+dC6+WA8/SwXBOnFVza0jpCOoXWkPLSOlIdvJpLy9H6CkNL07kNIaXrfRUhpaB0pD60j5aF1pDy0jpSH1pHy0DpSnt4rCSkN/0WMlIfWkfLQOlKe3tMIKQ2tI+WhdaQ8tI6Uh9aR8vQeTUhpaB0pD60j5aF1pDx8H5aUh9aR8tA6Uh5aR8rTeyMhpaF1pDy0jpSn97OElIbWkfLQOlIeWkfKQ+tIeWgdKQ+tI+WhdaQ8tI6Uh9aR8tA6Uh5aR8pD60h5aB0pD60j5aF1pDy0jpSn9zlCStP7PkJK0/tpQkrTu9R488J9PFIx6ZIH+HKyWOlWTbV1J/tygqF1bUyzdSc/dPK1o3VtTLF1Jz/0fh9+r69PLLSujem17uR913347LNf6VuTCq1rY2qtO/mBZ3/47L8QfHtCoXVtTPXdxBRA69qgdeOF1rVB68YLrWuD1o0XWtdG7yhaN05oXRu9l5h2Q6zb+Jt3xeLUp+gWWRaxf0+9HhzjW8sGZ3/jh56Pej70fF1JWW7fhFZt1EZdX7xne297m2o3zLrrLz5FFrTuUKisw+m77erUl8v1vOYRzv7uH9QhoMGhWidsXIlu7R01eqw74mr8FaV1h0LduoW95ydn8ZCs++7GMKdMnXXq3HDrjrlch3Zp3u77Xq8D38Z3nn/99dfJlv7VlcnDJmHSR8O6BZxKP4uY3iQxOXt9p9XmPil48X/J2sZjPE1Wqv1C7nJoWqe/Tr34lI3HSK02s421T7Os01bhtP3TXe1vKy71TpXm6Ya0Vk8maaFpHWbIcBZ1rEvPXv20SqKdbJSAf5BNxzqshP1i7nJoWoeW7D3/OjH4GPvMMfdpnnU4V2EURwvR1Nuuvk43brtV/k6gyaSFpnV6tgScRfzUzl7faYVktoKs1LqwX5W7HJrWoRbUrBvS2aF2LTEG8qyD+3raMMLDOknSlsnpuVySBFrXSttYF86impeevdpp1ZFGtuxKDrun1oX9qtzl0LQONYZPwGeOu08zrbvt6mOkVbdd7edKk2qnh7TzOV8GMeSExbOoP+nZ6z+tMEBX+qzz/arc5RBbJXXprpdf/NsY2fAJ1WeOj0zr5Oie/RQ7ZEz56elpv5cnRsM6zJ/xLMK62tnrP61S1lYgB7KDdWG/Knc59Fl3263/rhVjQ5SrtWoM5FonF5pinTRm930b1umXl3t/Kf9LgLnijb4063bfV37Hs6gjSnr2+k/r+ZLSfjcR9juku4nYKqnHdt34Xiw3yqQq01pV+5jItk5PGO6rr8QZkaR4enDvfuhfus84D/alXsvZNyLxLO49X12qzl79tGIPZEix65/SnGHjfjF3OcRWSTW2q4+Z+OpGE8bbpxnWkcMg6d8Jor9V6rkPMOOH1o2XKbFOp3JaNys82peTRbNVuGjXJa2bCabDutLQuvHyNF9OFivdKlpHykPrSHloHSkPrSPloXWkPLSOlIfWkfLQOlIeWkfKQ+tIeWgdKQ+tI+WhdaQ8tI6Uh9aR8tA6Up4s646885NfOHLvV32LkMMky7r3ffwV33HTm25at+7OTx55lKcRcshkWffcd/3fY179iHVvuvOKK+68ydMIOWQyrfv44nO/9LGb19100xU3exohh0yudR8/8g1f+tjpN6+jdeTwybLuMbDulx/06i+ffvOd7/A0Qg6ZbOuuuOYNP/qxL5/+vpp123rC8ef41jC2rLlsYcuOxgaW88Lue1511c/8nqzs9OXCwhnPOAVb8rvK1dS0LHIXNp2HxRlXKY/XYp5WLZWtb3m5/A67jUZKosKd8mk7L/G0wNbQIhBzt+7zlcMh27o7r3nDa976vNe9qW7dal8xNt9yoa+1Eq0DYWPEPrPC3r+XHtwpLoQfSVr7+IWtzzhl79p9Va6mxq2Qu/Ytf615AKoKIa2Wt7D7hB8T63y3HBLVmtbtRlWRFbLufdfc8ZpvvPh16/7M0xRatyykI6Hawu5fwCAivzedF7dCNydbSa67JlRyhLQqb+/adz/55TL4JZWOYJh1tRpWwLpXvOuZz7zpmjv++xsv/sA72qzbJjPl4tLqLTLdSoJMuzLpLi69c0kn3826qRPqDsmCZLahP7rPFlSzbfb1Q0ei+2Qwki3pP+1ZtcRzq16VrSQ3mrVJtHJq1qmyW/chu1bpCFwmLHR161VX6Ryta1dJU3xhuZi5P4otKyaSn5dMwssgy7onvOt/37/us//xwn97/Wmva7NucWmHSqPjlq6suWxxCa7dcuHBx52z8Bm3rrcDctas033ws7i0S+uaZeDHpvP22cUXBFFhdPjz3Moq2UpydRWYsEpI0yWsE936Kh1BwzrUfoaLpPJulQ2drbUEclVFK7Z37R/EvwLLI8+697/0pad/9tde+PbX/89pj/j15F8n9G5ClDl40i9+EMOarO7BiigEEyX9MvmDkioZHIWFTeuwj5ebZcwoGScwXKgcLoh2veUGlRJ9kBuSU5lCWprX2G0kuJvwOwn50SaEj4B11iashdyFnftisczPaCHPupd+6j1v/ee7/MPbn/SJ/1n3xUuPit7F67otmFpt3IKIvZ5YJ2OXKLa41MMgFiRTw5rWYaVxiTiDbDoPnRTvJtDTLgi62XI1NWwludGwZEaLab7E3JxYdwhjXe0mGa7Zx6FSydXBD58SimV+RgtZ1n3xU++524NedZc/+fM//NonvnDlsW++NGgXVdkmk6db59+GBOvk1/rwRQnKtFq3+ZbHzvwEayODdh0uujb9lqxor+olWBjwkBq2qtxolow0kYZ1e9eaDJcku42kYV3idL91tgHrvNi4rXvP3U5T6x75d1/75JUX3XBs0C5Yd/CkF8EvGKSiCZV1sip3DZBMx8NEwWjdng/ee9YnWNdKewzdpXcNOlehe8NkZfcSQcGQG83SlEDDOgUFkt1GUrfO7qId1FDdVsdc8T4UG7N19/+d0y4I1v3ks15w+7GNsS7eTWCcw1e/i7deGKzbvEsFVMlkrt1zIDFOrdOxccu5Mz7Bhi/QdOqUa3TvMZlroVjItdT4ZZvnCm5Wci/RsM5NUOOq3ZBsf3Srn7p1+m3x3n+xatVbTUBdmisfpHcTXmzM1h31hAsu+OhP3fE3Yt0jX/usr5x5qafb3URvl9yqqk5yDSfy4MsQrJt1B9djyyR7+pJ+tVKzzvYJI+TMYtdC0lubztPF7t+wvpXLeenGkGupsazn2r8g6FcVJgkIab5MrQu7Ccu0Tmvzz7DREt+caIb8why+T0djKzZm6xa++rwLnvPsv/yrK9/6t0/6zx+5IUrXHTrPzhPe3Q3aU2ePPOsW7v+B53z7149aOOoeX69uJTpEv2aZJ2oXaJH21Bkk07qF+99jDCNcwL53IXNDrnWEdEfv0+C1t9M6Uo7em4VjL3otrSPl6B17ww0XfeWil9A6Uo7eDWee+QJaR4rSO/Oi21/wldtpHSkIrSPlybKOESdIp2RZx4gTpFOyrGPECdIpmdYx4gTpkFzrGHGCdEeWdYw4QTol27rWiBPxLYk2/PXYlHkKMdGAEScSsq1rjTgxxDp98XXh4UMe1pyrJzkZcSIl27rWiBNDrBv9TPrcPT+MjtSnvu3hcPmtb3LZVujmZCvJDe9IpHKEtCpveiJO5Fg3MOKEWoc3I0SgEDbCN/ccCK8a4uWKXYtLRxxYc5m9LGFxJ1om4FkHHYnus5dupP+0Z8NLhNbNoVdlK8mNZiWPG9esU2WnJ+JEjnUDI06odd9CUJPVOnThFR3f9FdkZQkxv7m49FQZ+9S6EHdi/sY6+MGIE0KedYMiTsQZVgxKw0aoUDLoiWQ+5tmbEWodBjjMv3NnnRkl4wSGC5XDBdGut9ygUqIPckNyKlNIS/Mau40EdxN+JyE/2oTwEbDO2oS1kNtRxIks6wZFnDDrMIViyvSwEb6JXJlC3Ut9UdGsg35QdN6sY8SJSJZ1AyNO6Bh3QOyBQRY2Im4CvIVN6wwbGbTrcNE13xEnsqwbFHFC7x4wq+LNfwsbETeBTK9+L5tYh/EQLs6Xda6V9hi6S+8adK5C94bJyu4lgoIhN5qlKYGGdQoKJLuNpG6d3UU7qKG6rY653UScyLFuYMQJuAStDq6HQVvOFanC5sF7ST7uJPDNMO4monUh7kS4JpwLwhdojDgBsqwbFHHigN6m4ouQJ8K6zRoX2zf3HJDLO/VqC4J1JtaFuBMWa2JOiFEkGHFCyLKu04gTel0393h3N2hPnT3yrOsy4gStE2oXaJH21Bkk07oOI07QOpJrHSHdQetIeWgdKQ+tI+WhdaQ8tI6Uh9aR8mRZx4gTpFOyrGPECdIpWdYx4gTplEzrGHGCdEiudYw4QbojyzpGnCCdkm1dW8QJvNIqDHk2k1EnAow4kZBtXXvECXsLYhCMOhFhxImUbOvaI04Mt87f1BnCfL2xIx2pT33bw+HyW9/ksq3QzclWkhvekUjlCGlV3rxEnDDr9Ne2Wy4MwST05Ynjz2HUiQboSHSfvXQj/ac9G14itG4OvSpbSW40K3ncuGadKjsvESf8PUMRCK/jxGASeDMRr4Ax6kQN+MGIE0KedQMjTph1IdiEbsi0im3VkFEnUswoGScwXKgcLoh2veUGlRJ9kBuSU5lCWprX2G0kuJvwOwn50SaEj4B11iashdyJiDhh/sAkBJvQVyJEuc24s5UpFVmMOhFgxIlIlnWDI064dRZsorIu/XJEhjRaJ9jIoF2Hiy5GnBhp3cCIE26dBZuwDVGsdu/KqBOKa6U9hu7Suwadq9C9YbKye4mgYMiNZmlKoGGdggLJbiOpW2d30Q5qqG6rY+4ERJwI1i1sORfLGEwC3wQv3sqoExXhCzRGnABZ1g2KOCG4dTaaxWAS+pXIDhFLFurV3EediFEkGHFCyLJudMQJmyn1ci2H7IIzi3d3g/bU2SPPulERJ+w7EVqXTe0CLdKeOoNkWjc84sQWnyZpHcki1zpCuoPWkfLQOlKeFuu+k5DDwDUaBq0jHeMaDYPWkY5xjYbRbp2vEbJMOrSOESdIJh1ax4gTJJMOrWPECZJJp9Yx4gTJolvrGHGC5NChdYw4QTLp2LrWiBP+qMnqIWEkwuMleCPW31NMmZv4EyGKBJb+FB0eAt5pwSHw8KQ/iSmpAyJO6LamC8kefcUEPHeJFyB36luQyPKydVCs04gTHVvXFnHCnj+v3rVuI1onhh5cP6zkTBOjSPwpHifWZ3DxKO5WDw6xNXa5pA6MOIE0/IBqj75iAJbgvdudrvjWE9qtq2ppWld/AHmFrGuLOGG+DX/3IbUuDI7zSuhIe9NrdxJxonLIHhzXsjHXhkV7YjzkV3s0iymwBA+87zxBB6y9a5dvnX+QsQLWDYw4oRbhF9zajHcj9AVsvJF9cL0Fn6hbJxshQ4tbtsaj0FKzTehI60LpP02ANZVDoVclK+YGnbBfeGHH98BbEc1iAEXVugfqyw1nWKSIPlwmLHTVQkkAzOCyiy8sFzP5iIgTHVo3MOIEhjl9B0fkwQs7n6ms+9Y5kuM+Alino6JnWHHNtngUVmymcSmqt0zjEBY6t3qIXbJibtgzRqsQfA+xrq8YMOvkiu0S1VQWWn2ThnUoG952VZmXHXGiS+sGRZyAY/pfrsM6LDXFV8UyGdOidbibCAOaZHgZyR5+XThDqFGbzvPYcjDEhdGut+v94E3iJHI9WVRL5PE7hP5igloiyuy8BDWJQQOsE3e1lO6hDTR/zTr7O4C1kDsq4kSX1g2MOCHShKlzcQlSVdZBs9Q6KWbx7CzDiiN7Xt6J9ZgS0ov3xAp62oWxbtZBBqlCe8SJ9G4C2LDUVwxAJ2xIffJHlMsZ6zqIONGhdYMjTnioCXPr4Po1lwXr9hwQ42pjHYSTaTVmaPE5si4ZGdCZjYgTAu41hkac0G4PpYHdnTSLKa6T2fLYf315nnUqmdNnnW3AOi82busGRpzwUBPu1uLSDrVOPLLhrs+6k6oMe59Rsj0exYyTTkfoNrVA5yobQ5LUUDbJVZ20t9Outu5vFlNcJyz3rv20JOdYZxY7qNESsBZzR0Sc6NC6YREn/F1/GbJ2iUa7MInuOWChTg6ub1gX7iKQYcU12+JRWLFZJUSR2PS78iPTp/eYzJdQDFEeqtRQNuQKqlOIVoGEsAcMaBRTXCddnoHv7HKs6yDiRIfWDYk4sdnuEDBkrdd/e9hzoLfmRTKeydXbLU9MrcPdhF/WIcOLa7bGo9BSM0uIIqGRl6QH6xEn9I40pg6MOOHRKpSwB8adRjHgOulSp+0s67QK39NGT/8Yzc2JONGhdaMjTpBl4t3doD11mujSulERJ8gy0WuxPtpTp4pOrRsecYIQp1vrCMmB1pHy0DpSHlpHykPrSHloHSkPrSPl6dA6RpwgmXRoHSNOkEw6tI4RJ0gmnVrHiBMki26tY8QJkkOH1jHiBMmkY+sON+KEPdepxbbtWrj7PDy0XqNAxIm4myUx4gSeXkfhzSh693MWXzZI0lmlRMSJsBuAJYw44S/ogD2/f9nBXwkbc0XoyLFFnNDddAlL8MLDfEeciAMi0kGceOeI0JHWhdJ/mgBrKodCr0pWzHXrdD+8dw98D7EsKVb/CLVuriNOJAPi5tW4sptH/BWu6oXCOISFzq0eYpesaoDzPUdGnIgf4dbNe8SJxLq5vJkAatRYI05U0qolosx8R5yI1uF/yRaGXgvOJvo6KxhfxIn4EaoT0qU++SPK5Yx1MxdxonrBf15vJpKRAZ05jogTyUe4TmbL3EacsMA6QJSTK7u5I52O0G1qgc5VNoYkqaFskqvWaW+nXW3dH4ulH+E6YTnPESd08EOh+byZCFEkxhhxIu4GXCddznHECVz32Xcpc0mBiBPVboLrpEtGnCCGd3eD9tRpokvrGHGiY/RarI/21KmiU+sYcYJk0a11hORA60h5Dsc6Qg4Z12gYtI50jGs0DFpHOsY1GkaLdYSMGVpHypNlHSNOkE7Jso4RJ0inZFnHiBOkUzKtY8QJ0iG51jHiBOmOLOsYcYJ0SrZ1HUacaAev8fT/b2KDK54y0igS/uQlHhCWLTwmnASLkNQBESdqL9N4WrWsVvEkZvou2RDweGanESfyyLauw4gT7aDgtpz/xE7/c9lpI4aDCD94NDdGnEiCRUjqwIgTQJ9lRzFLS/LiahKMYhSJak3rwtsRxgpZ113EiQGgIP7H2JFMpXWKdKQ+9W0Ph8tvfbPLtkI3J1tJrrsmVHKEtCrPVzuyzhtirIB1XUacANuiW9VasG5x6YgDojGmY60cBWRDB0Ek7sJMbDP71IGORPfp6/joP+3Z8K6hdXPoVdlKcqNZyePGNetM2UO1Dgtdlcn58CJO5JFlXbcRJ4Zat2tx6alSwzat2HfHMIn9kXjwm1M81kGKGDUC/qgl4aUX3YhWyVaSq6vAhFVCmi5r1mVf1jWt81ASmqbOLzviRB551nUacWKIdXLvoJOs1qLVSKpuiI9huJxa68wocUKVgCFqib98aLlBpcRJ5IbkYCgIaWEpxNUB4er6wN2E30nIjzYhfASsszZhLeSOijiRR551HUacwEQMJLlaA5g5pbwOnVYadcnuXmxXqGJarbNwEPFuAj3tXqGbLVdTw1aSGw1LZrSY5kuhWk0LDsE/Dgv5qd0kw7XqNW/J1cEPVwChWPpXYHlkWddpxAlh4FgntFgXbJtu62xk0K7DtVoj4kQY8IZFnBAs8p0x1DqbcUfSsC5Vtc8624B1Xmzc1nUZcUIYaZ056jNsEDYsp9M610p7DN2ldw06V6F7w2Rl9xJBwZAbddKUwFDragINpm5dTVV8sCVgLeaOiDiRR5Z1nUacEEZap18O6xUeUnXjVqlKlrib8DFvqgjhIELUCO8xmWuhWMi11LAVcgXXKbmXaFhnJuhqCEYBJNn+6FY/des6iDiRR5Z1RSJO1KzTq0IkaCou+Xx5PG6Np/CbkxgOwqNG1CNOhNwRESfCiAhCmi8hVkjCPawXXKZ1WkXYVQfZUBdycyJO5JFl3QpGnIjSzhje3Q3aU2ePPOtWLOJE7SZkhqhdoEXaU2eQTOtWJuLE5p7N32TGyLWOkO6gdaQ8tI6Uh9aR8tA6Uh5aR8pD60h5sqxjxAnSKVnWMeIE6ZQs6xhxgnRKpnWMOEE6JNc6Rpwg3ZFlHSNOkE7Jtu4wI05Y0S36VKfvBmqPz+FJzvjyTitT/LRdiYgTCwv20mPYbTR4PHOGI05o0cUlvEztTwsrdetgIx5/t80Wpte6AhEnhN0n4Klh3y2HRLWmdfUHkFfIusOMOKGPZx583B/JDumTmv3WiZTVUNhkeq1TpCP1qW97OFx+6wtgthW6OdlKct01oZIjpFV5e9e++8n4nxWTSkcwzLpaDStgXQcRJ/TVm22rUVbf8ZLZFOPelh14v8JfpjDrzGLL1/rxplksjm2ZhvVz476W67EqJhh0JLrPXrqR/tOetXcPQzeHXpWtJDealTxuXLNOld26D9m1SkfgMmGhqxZKAngAAV9YLmbuqYo4oUpt2aFvyMpaCCKxRS7j4uDm1qEiz0dx1B+LQ139TNQW9vVci1UxycCPMUacEN36Kh1BwzrUHt5pVHmnPOIEtJA8/JFpWUtBJx3MwpTr1lkxzcdSKquKe/wJ/YSwb8jV4XSSMaNknMBwoXK4INr1lhtUSvRBbkhOZQppaV5jt5HgbsLvJORHmxA+AtZZm7AWcqcr4gSuAUVCkQOZIYiE5ZpI6ViX5ktquokhz3YJ+4ZcaDnJjDviBObmxLpDGOtqN8lwzT4OlUquDn74lFAs8zNayLKug4gTKAKrtq0Os6Unyq+GdbJXzLf60+It1nnuhFtnI4N2HS66Oo84of+3u3BJsttIGtYlTvdbZxuwzouN27rDjzghG3/8vWLF5jW/KglhTrVZMmhj1mEGjvlWf1U8xJ+IMyw+ynMn2zrXSnsM3aV3DTpXoXvDZGX3EkHBkBvN0pRAwzoFBZLdRlK3zu6iHdRQ3VbH3OmKOCFbuAvdcwC/qyASMm3uOeBF1LqD6/E75C9sOReZsbhs6LoGowj7eu5EWxe+QBtvxAkzrtoNyfZHt/qpWzeTESdkyxTBQq7EIMzTl6rIm7gSDPGyQ5CJzSppLI4kFMOy2tdyJ9q6GEVijBEnBBsMfTdhmdZpbf4ZNlrimxPNkF/zE3FiCNHnacS7u0F76uyRZ92KRZwYxjRbV7tAi7SnziCZ1q1MxInhTPVYN9/kWkdId9A6Uh5aR8pD60h5aB0pD60j5aF1pDy0jpSH1pHy0DpSHlpHykPrSHloHSkPrSPloXWkPLSOlIfWkfLQOlIeWkfKQ+tIeWgdKQ+tI+WhdaQ8tI6Uh9aR8tA6Uh5aR8pD60h5aB0pD60j5aF1pDy0jpSH1pHy0DpSHlpHykPrSHloHSkPrSPloXWkPLSOlIfWkfLQOlIeWkfKQ+tIeWgdKQ+tI+WhdaQ8tI6Uh9aR8tA6Uh5aR8pD60h5aB0pD60jpVlY+H9KzZOtknA4yQAAAABJRU5ErkJggg=="},86977:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/solidworks-api-sdk-installation-9dc2a4acdacc1ae5ceefd44a02ecc538.png"},28236:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/solidworkstoolswizard-component-load-error-ed5b47d350645c5f60c942407401c8ab.png"},52889:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/solidworkstoolswizard-dll-ea9d9d0461005c9e7158556aad4c1333.png"},47146:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/solidworkstoolswizard-gac-400e91fe54697b824687c5818daca484.png"},10950:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/vbnet-addin-template-6a896f444f430175907258e113302965.png"},21625:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/visual-studio-projects-and-solutions-options-4162035bbb38b752f24b5955188d0a00.png"}}]);