"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[87629],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var s=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=s.createContext({}),p=function(e){var t=s.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?s.createElement(g,r(r({ref:t},d),{},{components:a})):s.createElement(g,r({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[c]="string"==typeof e?e:o,r[1]=n;for(var p=2;p<i;p++)r[p]=a[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74739:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>p});var s=a(87462),o=(a(67294),a(3905));const i={title:"Customizing SOLIDWORKS PDM convert task using API",caption:"Customizing SOLIDWORKS PDM Convert Task",description:"Guide of changing the script for the standard task. Custom utility to simplify the debugging of the PDM tasks",image:"pdm-convert-task-script.png",labels:["convert task","debugging.dpi","solidworks pd","task"],"redirect-from":["/2018/03/customizing-solidworks-pdm-convert-task.html"]},r=void 0,n={unversionedId:"codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task/index",id:"codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task/index",title:"Customizing SOLIDWORKS PDM convert task using API",description:"Guide of changing the script for the standard task. Custom utility to simplify the debugging of the PDM tasks",source:"@site/docs/codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task/index.md",sourceDirName:"codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task",slug:"/codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task/",permalink:"/solidworks-GPT/docs/codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/customizing-solidworks-pdm-convert-task/index.md",tags:[],version:"current",frontMatter:{title:"Customizing SOLIDWORKS PDM convert task using API",caption:"Customizing SOLIDWORKS PDM Convert Task",description:"Guide of changing the script for the standard task. Custom utility to simplify the debugging of the PDM tasks",image:"pdm-convert-task-script.png",labels:["convert task","debugging.dpi","solidworks pd","task"],"redirect-from":["/2018/03/customizing-solidworks-pdm-convert-task.html"]},sidebar:"tutorialSidebar",previous:{title:"Configuring built-in tasks using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-pdm-api/pdm-tasks/built-in-tasks/"},next:{title:"troublesshooting",permalink:"/solidworks-GPT/docs/category/troublesshooting"}},l={},p=[],d={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,s.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SOLIDWORKS PDM Task is a powerful built-in feature which allows to run custom functionality directly from the context menu in PDM vault or from the workflow state change trigger. The actual work can be performed either on the local machine or on the delegated remote task server.  "),(0,o.kt)("p",null,"There are several out-of-the-box tasks provided by SOLIDWORKS PDM"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"List of standard tasks in the Administration Panel",src:a(95135).Z,width:"204",height:"320"}),"{ width=203 height=320 }"),(0,o.kt)("p",null,"Those tasks are highly customizable via task settings. For example it is possible to change the conversion settings for ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/enterprisepdm/admin/t_configure_convert.htm"},"Convert task")," from the Settings Page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Convert task conversion settings",src:a(38512).Z,width:"320",height:"309"}),"{ width=320 height=308 }"),(0,o.kt)("p",null,"As well as specify output name and folder with an ability to use placeholders (such as file name, file folder, variable value, configuration name etc.)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Convert task output settings",src:a(99095).Z,width:"320",height:"169"}),"{ width=320 height=168 }"),(0,o.kt)("p",null,"Tasks provide open source editable scripts which enable API developers and PDM administrators to further customize the logic of the task."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Convert task advanced scripting options",src:a(33559).Z,width:"320",height:"241"}),"{ width=320 height=241 }"),(0,o.kt)("p",null,"Script is utilizing SOLIDWORKS APIs and is written in Visual Basic (the same language which is used in .swp macros). The main responsibilities of the script are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Validate if the processing file extension is supported"),(0,o.kt)("li",{parentName:"ul"},"Open SOLIDWORKS file (this will work with both native or foreign file formats)"),(0,o.kt)("li",{parentName:"ul"},"Compose an output file name by replacing all of the placeholders"),(0,o.kt)("li",{parentName:"ul"},"Process the specified output options (such as quality and format)"),(0,o.kt)("li",{parentName:"ul"},"Traverse configurations or drawing sheets (as specified in the options)"),(0,o.kt)("li",{parentName:"ul"},"Log any errors"),(0,o.kt)("li",{parentName:"ul"},"Save the file to the specified output folder"),(0,o.kt)("li",{parentName:"ul"},"Close the file")),(0,o.kt)("p",null,"As an example, in order to set the DPI settings for the PDF output is it required to add the following lines into the ",(0,o.kt)("em",{parentName:"p"},"SetConversionOptions")," function as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"swApp.SetUserPreferenceIntegerValue swUserPreferenceIntegerValue_e.swPDFExportShadedDraftDPI, 600\nswApp.SetUserPreferenceIntegerValue swUserPreferenceIntegerValue_e.swPDFExportOleDPI, 600\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Code block to set DPI for the output file",src:a(19741).Z,width:"640",height:"210"}),"{ width=640 height=210 }"),(0,o.kt)("p",null,"Please note that starting and closing of SOLIDWORKS as well as check-in of the output file and ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/enterprisepdm/fileexplorer/t_Creating_a_Topic_Reference.htm"},"paste-as-reference")," (if specified) are performed outside of the script scope."),(0,o.kt)("p",null,"In order to intercept the task execution for debug purposes it is required to add the ",(0,o.kt)("em",{parentName:"p"},"Debug.Assert False")," statement anywhere in the code and make sure that the dedicated task host is set to the local machine."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Selection of the host to run the task",src:a(45371).Z,width:"320",height:"114"}),"{ width=320 height=113 }"),(0,o.kt)("p",null,"The macro will then be available for debugging in the VBA editor once the task is launched. There are several limitations with this approach:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Some of the debugging features are locked. It is only possible to debug step-by-step."),(0,o.kt)("li",{parentName:"ul"},"The debug will not be working if the macro contains the compile error\nIn order to workaround this limitation I have developed a console utility which intercepts the debug macro and copies it to the nominated location for later troubleshooting.")),(0,o.kt)("p",null,"When task is started SOLIDWORKS will perform the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start SOLIDWORKS"),(0,o.kt)("li",{parentName:"ol"},"Create new text file in temp location"),(0,o.kt)("li",{parentName:"ol"},"Copy script content to the file"),(0,o.kt)("li",{parentName:"ol"},"Replace all placeholders (i.e. file name, variable value, etc.)"),(0,o.kt)("li",{parentName:"ol"},"Rename file to *.swb"),(0,o.kt)("li",{parentName:"ol"},"Run macro"),(0,o.kt)("li",{parentName:"ol"},"Delete the macro")),(0,o.kt)("p",null,"If macro in step 5 contains compile errors then step 6 will fail and the macro won't be able to start debugging. Step 7 will be executed regardless of step 6 failed or not. So in this case it is not possible to inspect the macro for compile errors."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"CopyTaskScript")," utility will intercept step 6 and copy the file to the nominated folder before deletion so it could be opened in SOLIDWORKS and troubleshooted."),(0,o.kt)("p",null,"I have published the utility to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/pdm-copy-task-script"},"GitHub"),"."),(0,o.kt)("p",null,"Please take a look at the video demonstration:  "),(0,o.kt)("center",null,(0,o.kt)("iframe",{allow:"autoplay; encrypted-media",allowfullscreen:"",frameborder:"0",width:"560",height:"315",src:"https://www.youtube.com/embed/kNRbmTDAyBA"})))}m.isMDXComponent=!0},38512:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/convert-task-conversion-settings-f6d3fc168dc946e6585972110e0e46a4.png"},99095:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAACpCAMAAABtchRmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURRkBQtTPmqqXXt/syfr81F+bw+7pvu3q5fPy4u3w9PDw8PX19PPz9Ih4UqWtukd2manS8LyiXwNGcaa2yqzT15p9LXJ+lJGYmFg6aZynuWE0G7utmNPc4rO+yd/Y0Ob5+qCxl5SAcmByhcG7tfr59n1YAxt4rZWzz/7+/nGtylVjgdvToYmNlzxDZNK8l8fS0sLIzdLo8YJ3e7ufgLW0s6GNb+Dr4IhJP8bS4M3R2aPB23WIpODXu56enn+et1+BrOnizmZ1k+Tj48+pf76yo5d9Wz9nkevs7KCah5Kwq1BGWXRhZAguTmZgfHl3brPF1unt8Xq0zx1ee4yCfJWIhLrKt8nd0dXJuKmilKmTfJm52tjHp8PN2uTr8aW9s77UxPDs1IKRq5m4wabGz9ra2vDu6/D56z1Ved/Rscjd6tHFhrPT6FB9q4t7Zq+fgnyfwl+EnnpthdHh7KaOVndVL7i5vMjq+2ZfaEALE4dnRr3FqnF9iWGTutTRysO8lrOyl+zfwFc7P4yTobaCRqarqh4/ZICMmoSpv8PCw9XX2aampnaStYiHi+Dl6Yi3z6q5zId3crTK4u/Zr8zLzMGwgPLy7NDQ0OnEmJiKd4Vqan98hrvc9E6NtV9ZV6jJ4VRwmOTp7LKIbT45SbrV2IObrWhsjZ6WlpGpw8bh8vf4+MCocZt+SYuet6+/q6rCwm5zga2shlN8nkxacufw6XCcv2J5n5VkJ7WdbZm8zuzl2uDl0hhmn87Yv66wocaulJeKYoq+2+Piwdvi6iJEgbW6wqeywqaRh5aTidWwjJXH4/Ht3LvH136AlODf3cO6poVpWM7VsNfv+mmLsEFLdWhldNnq1/r75WyEnpCaqKu80Jmiq7KuqZ6lgPXuyrvY6LrAzb6vjOi3jNTizoijwWhtf9rq8FlaamhOOeHcreLz+HWSqMzb43VaUMvFuZKRk+TKqoeEg6eabmBIT/j06HVsb62trdve4svDpurz+LXHxNXEl6m0rYmrzPjl0IiEcwAAAI7TOIMAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAdCklEQVR4Xu2dCVwTV8LAa0WSOTxaXFzL4aLZBY8iYujHfUQxtn6aWBA5EuUIKCqgdNGtCFLaRUBAEEMRKdJFwSAVD6jaVSxURAkgUOTQcqyABVHEgggW/X3vzUw4VNJo2tVP5v8jM++elz8zmclkZt5bKI1S0AKVhBaoJLRAJaEFKgktUElogUpCC1SS30kgQ8SnQmONIYH5hl3TEVySz8NxDJdgqAS84BwFf4hEguIg2raRhYEkEHKd1IeiOMjHJRI837Q+sB0UG4sMCWzz01u45obFWsFdi9pZRTzXdIs46xvpFv7WF3HUNX1a62pja62jk1dFpte5ForLvvnMnY+bR3YaW1tYeJ/+ePuKaYVjcx0kBaampqJtJx+UPPwhdZylb/OG3JCaGYt9TpT/EL3wTN4Ahr1zRd9yp3Pbjg0x5nOClp87IbZNS/JH8Q07XGpOOfpMGDchvyfI0Bs2MxbgEs4oCIGpOI6jbbnzo9smsObuOp4yd0Al8JzNOfXyHSzrLfbeqPjbCtXcnaYhOzZcUXWTGK6y8rqQNq8dCLxSX7L4drnV3Nn1JTMSGzDQzFiAP9wgFMjlw8+vtso+vC2ZNdfSN2Vujkrg3UrzOeXJmOfR2wiKZQ5c3lXWvC95XI65etDhm4eD3ksDKxy+YaX+oaZdLn9rS84PPKXTMFY+BfFUKgAZEmgtQNCzAszaJMjf2phpwJ/FbvxOgIp9TUEmk81uL2YHCBjs7S2TOtDV7ADhai0+vmFzQCuDzZZyZxkYoPEFRINjgFEEjgQHu1iYenZZKxHFqVeIGbH3BdlgV7zhexaMgBBMgOXGBAoJlMHtpQIUDA4VgDCGtzR2eCGBNM9CC1QSWqCSKCIQgd/hSJ7OI/YtYxr5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"},33559:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/pdm-convert-task-script-ce8268ffdb413a581cecd29f708d1b3a.png"},45371:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAByCAMAAAAVi/iKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAUTrrToY+sg/r61c7nzwBolrKhc5RnK6ywtdbq6vDq5IeNlfLw4vX08uzy9PDw8PT09bbU1XdkRoFJaDOs18WpdACKxLDBudLS0pamx6KJcCxlgtnd08TDunAJAcewl0+It8DTx6qqqm12kmdqeLZ4HXGOvYd3h6SgjNPa4oOXrqG/x/7+/t3Sv8LS2be6tMPDxNS3k2J8h05xooSkwkIzQZGIkqZYTpKntpF/a67E0+Pf2Embxd3s3GqJqbiynqeRfAAzX5R/Usbb6sm+grSghOLj4+Ls64q0ybC7w+TXqunYwMjJylV7npOLh3hvc6mWYJq82+v66sW4ppO01WBSRnmayWlfYKScl9PApqjR63aht2iFuodxXOvr69TNxsenhM7SvrHJ2Yd2a01gf8edf9HIt6KiodfY2MHV5Kuyv7quisO8suHazJmOccvr99Li7Hx7gcnUsO7q0nCGmHKQxZu1vJSVn+n59bOooKR6YWR9oiJDcezrvtzc3bmZb4aiqpizyGRriYyEcrzBpYupxNPV1zhfkYSDis3VzJe+04SavKLG2nlnYGqmytrGpOvt8N7l2ZmsqmGVuMrIlIqWnnOVqsfM01dBW19wlrG2u+3j1OPv9El3h7vExea9lnZbgMuUXrfi98bIpz1IYqqag+vgy7Wzs9jr82U9Iu/u7NnV0igVNOvy7fTsybvM3mJ/t4q61sjg2JOCX4xrSebgs9/dwaCotevs29vIjrWulFaGpbfS492nc8SzidrTsKS61AFMdHN9ipmTinmXt5WDd9vLuJ6x0mycu3qFlJ/H5H+jzKuER4uFhrOsqsnh75VqWpeVk666zHZzfoZ6d5mMe7m6vdvj6nuGhtPGmufm47zH0aiWbd7f4LbW7Jqqy9Pfuz15nL60dcvY4rKij7myrKaJWtrw/O7ivvn49tfSoMm7levMpqSxpX1ubmyJvpuZm7DGyltUacvS2a/M5YiiuHaKpff46J2jqoiDfYCMns3DuY2Yq/Pz7PLv2wAAAP4IIKEAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAUWklEQVR4Xu2cCVwTV/7A3bV/NkAmb/D/dxst/K3AatEAaXX9c6xKRcIVUcS2RNagYCEcURDKUZZYUCgol6tCkZTuajkW/sIqchRcoFwVaKDhCBKB0gJqoLZYtOFw+OybSVBQKdh4bZ0vEn7vzTuSrzPz3rxMsuC9H74GJL+cBStIgSpBClQRUqCKkAJVhBSoIqRAFSEFqggpUEVmCkRRZUAyX6YLlMay2YIcZYJkfkwTKGAKWCw6U5kimR/3BHIl3FP1wd0CNsDo1kQOPxsAal+AJo1ITaekD1FGSuT9Xvfl4OSeLb/1kOy7YLmKjpSYdyiDB9CIVjwHjB5SelHZIpYrVATo4I6f6+QJc08gm0UxaS7TZzG58kOWALC6wbY4LlpYVuRvwEKkgiRYRCroZgEpMO8eLONyBdYYSyAV4C+aKpBmmLGABkxoCKxhYRYmYMHsAi21SlYSJuiGZTCBIIcloGmYd2sIuBosQZKUqyF1N8PMBTRpNwu2DDCfKOupfpJYSRodsC0YsmCXRa1+GN4T9YJlRmU3yCFiUze8Vo6g+8Q5DdjbM2LBij8rBRpz3+g5/T9vprO58lpLpOKn/tVXozqQxI913mmKXC86vIIG7CP3tOlJ/1Z+e8BiS2y18U/hCzZ+NKAfApB9xZ6md97Xsig+dH4ppUq7LZ3iE+HgBV/uarXxpXHLTDJ6AOgMayr96V2b8lSryNLbJyIPRmXcGnTZFXGmJkOrIFnHPT0YxdSSe6v6a1CQFnO4xmlVxmoH4/FjP+qI/a2vrt5q9Jq3qBmULLrZdef9iz7FDvtBya4I7aZdbgeDdH3WOhgoXsMzYMEPUwIlXP3/+v3v32QTAmV/D6xe+20PQgu/FFAf0m6sfyNVCNIc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"},19741:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/set-dpi-output-9b85353b925557117e6e323301657fc2.png"},95135:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/standard-sw-pdm-tasks-2d68070c5ebc5baf7cc571523b1f7c38.png"}}]);