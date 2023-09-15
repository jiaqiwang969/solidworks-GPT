"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[79425],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>u});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(o),b=n,u=p["".concat(c,".").concat(b)]||p[b]||m[b]||s;return o?r.createElement(u,i(i({ref:t},l),{},{components:o})):r.createElement(u,i({ref:t},l))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:n,i[1]=a;for(var d=2;d<s;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}b.displayName="MDXCreateElement"},55442:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const s={layout:"sw-tool",title:"SOLIDWORKS Macro to Split Body By Faces using SOLIDWORKS API",image:"split-body-by-faces.svg",labels:["split","body","faces"],group:"Geometry"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/split-body-by-faces/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/split-body-by-faces/index",title:"SOLIDWORKS Macro to Split Body By Faces using SOLIDWORKS API",description:"Feature Manager Tree with sheet bodies for each face{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/split-body-by-faces/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/split-body-by-faces",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/split-body-by-faces/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/split-body-by-faces/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/split-body-by-faces/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"SOLIDWORKS Macro to Split Body By Faces using SOLIDWORKS API",image:"split-body-by-faces.svg",labels:["split","body","faces"],group:"Geometry"},sidebar:"tutorialSidebar",previous:{title:"Macro slices body by sections using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/slice-body/"},next:{title:"Storing and restoring temp body in 3rd party storage using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/store-restore-body/"}},c={},d=[],l={toc:d},p="wrapper";function m(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Feature Manager Tree with sheet bodies for each face",src:o(87058).Z,width:"333",height:"447"}),"{ width=250 }"),(0,n.kt)("p",null,"This macro creates individual surface (sheet) body for each face of the selected solid or surface body using the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeler~createsheetfromfaces.html"},"IModeler::CreateSheetFromFaces")," SOLIDWORKS API method."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swBody Is Nothing Then\n            SplitBodyFaces swModel, swBody\n        Else\n            MsgBox "Please select body"\n        End If\n        \n    Else\n        MsgBox "Please open part"\n    End If\n    \nEnd Sub\n\nSub SplitBodyFaces(part As SldWorks.PartDoc, body As SldWorks.Body2)\n    \n    Dim swModeler As SldWorks.Modeler\n    Set swModeler = swApp.GetModeler\n    \n    Dim vFaces As Variant\n    vFaces = body.GetFaces\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vFaces)\n        \n        Dim swFace(0) As SldWorks.Face2\n        Set swFace(0) = vFaces(i)\n        \n        Dim swSheetBody As SldWorks.Body2\n        Set swSheetBody = swModeler.CreateSheetFromFaces(swFace)\n        part.CreateFeatureFromBody3 swSheetBody, True, swCreateFeatureBodyOpts_e.swCreateFeatureBodySimplify\n        \n    Next\n    \nEnd Sub\n')),(0,n.kt)("p",null,"For more advanced functionality (supporting parametric approach) refer the ",(0,n.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/"},"Geomtery++ Split Body By Faces feature")))}m.isMDXComponent=!0},87058:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU0AAAG/CAMAAADrdHXkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANSwYyYOoYs4APf39zBcdWOwsAAAOHR0dDgAOIuLOKOzugBjsCMjI0xxhTgAAJe0woJgDbDbkwA4iwA3VTaOxGMAODg4Y3WToxVbeVWfvmOw9zgAY87OzmMAAEuRrb+aBwAAY4+PjziL1IKCgg5JZ/ewizk5OWNjADhjsIzS7VxcXPTOC12w0hcXF4ypttSLY4s4OEuDoQo/W8XFxVynxtbX1bBjY4uw94tji7CLizIyMjJohE2XtmW63LCLOFCCnTN0k/ewY7Gda2MAYziLsExMTHefvdSLOCJohoLI5PfimmM4i7BjADF7mVmZtpTY8qvAyzg4i7KyssjV26Ojo4uLY0JCQnCNnWywzlOQrmCgvkZug3i61WNjsAU7WWaoxtjZ17nIzwxEYVSYtx9gfSoqKoegrhpUcos4Y4a501CbumxsbGyoxXWwzld6jkJ7mc/Y3WGryoiIiJmZmWWXsFmjwrm5uWmz0mmJm7/P1jp0kpnF3CRsiilifoLM6wBBX0OLqhNPbRRHYt7e3WGZtnh4eNPT05be/TBxj4jO6nO41k6Lqdb09E18li5bdDFlgmqhv4vU90BRY6uqqlWTsSNigHvA3WWvzhsbG2SDky54lnWrxqm7xDd3lmJhYSBPakWEohFLaWKkwjt+nTpxjw5HZRxYdjRgeEyVtGax0gE4VlmUsrakdS1sini00ZSUlFycupWsuEmJpj52lE6ev2231nOaqzqEoghBXrnn3AhHZWqbtDJsioZnGHe+3K/29l6pyLvJ0HzD4R9dfJustGmsyidkg1GNqlCZuFmPrFx8jnW72YC82kJ/nXC00qS3wXmrxXuXpdHa3idVbxZIZWWFmGyVqiloh2advPrUDFKIpiJgekh+nCZwjm+52BVRb6O5w2qjwcXT2hhKZClde2CImlCGpPTQDHCrybDByR9ceDlti1t+kJ+zvb2bCJzI3nuvyQAAAP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///z91uDoAAADzdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AHXY/3wAAAAJcEhZcwAADsMAAA7DAcdvqGQAABzDSURBVHhe7Z2Nn1TVecdp56o0ldDKbWoW2UZANiHR1gibmJW0bBKydUppQs0GMQGqJS8bGwJbUIxScWUTZVpjAZc0alREEUUUY0vSRJEExFJNa021jY3pa15q0/4HfZ7nPOfcc+fO7M49c5g9c+f5fnTu27l3me+cc8+d85s7MyUS3JjLU5txbc7qQ2bxkpAit82+BaOjowv6eElIkd8myBwdnUo1FFnO6wUgv81ZaaSWWuS3ua0KrXPplClTzuR5w8CUc5/m2VoMwD5T5vBCwgAcZ2mNHZfS8QfOuJ1KBIiDTZ6JYjVhmyV8fu+pqAVN+Rdu57naoJTy9Jm8ZKjjqp9Wl3vwoAPZ1yAA3G1e8ZzSqWzW9lY+Z7yaydpUjbOpY/NC+hOl098E0/L7xz/y5DC+zbsVvESgzTvf+OBpN13ylb8GnZUK2+xWNaxMTxUklk7vPvcN1PjL06dMmYGVFts1lIIJtFVC2cRqhtvIIZwwZvwmzOm1WLSfJqpqDpxJfyLMyjlB3czIRJt3/unN6y755rrLQWdF24QnTk8vsfmrPBP9BszgeWAAzoTld0cDYLafT4pok+ZxGxVailvRK9rkoljv58G5Ev8AHFHZVG4DY6KWXi0Tbf7D//3vl955//3rdn7lj+PKiO6FoArC001s8nNXG/tnVLj2KhclVZOpF4JZtdKYwrYPNnVRPspS3Ad25MIfrjpHh8CE580qmWgzfuLTnwed1z1/+bq/GTE2sUFCs8anSjbxuSsP6GxGhesjtFpWiFuwgkGVVNtgX95B2TRFS1QcT5u4hW2GeOJ06oX2X/fpz79yw73xlSDTsoldUdZmuRvba2JTTRRkE/YyNtWMtmmKlqfDLNbNkhKMjaAt62Y1aDPa/8Tf/ftHvwMqR0bW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"}}]);