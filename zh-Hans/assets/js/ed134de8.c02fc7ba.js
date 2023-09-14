"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[94647],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>g});var s=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,s)}return n}function t(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,s,o=function(e,r){if(null==e)return{};var n,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=s.createContext({}),l=function(e){var r=s.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):t(t({},r),e)),n},d=function(e){var r=l(e.components);return s.createElement(p.Provider,{value:r},e.children)},c="mdxType",A={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},u=s.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(n),u=o,g=c["".concat(p,".").concat(u)]||c[u]||A[u]||a;return n?s.createElement(g,t(t({ref:r},d),{},{components:n})):s.createElement(g,t({ref:r},d))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,t=new Array(a);t[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[c]="string"==typeof e?e:o,t[1]=i;for(var l=2;l<a;l++)t[l]=n[l];return s.createElement.apply(null,t)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55216:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>t,default:()=>A,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=n(87462),o=(n(67294),n(3905));const a={title:"Handling the long operation progress using progress bar in SOLIDWORKS API",caption:"User Progress Bar",description:"Displaying the long operation progress using user progress bar in SOLIDWORKS API",image:"taskbar-progress.png",labels:["progress","user progress bar","background"]},t=void 0,i={unversionedId:"codestack-clone/solidworks-api/application/frame/user-progress-bar/index",id:"codestack-clone/solidworks-api/application/frame/user-progress-bar/index",title:"Handling the long operation progress using progress bar in SOLIDWORKS API",description:"Displaying the long operation progress using user progress bar in SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/application/frame/user-progress-bar/index.md",sourceDirName:"codestack-clone/solidworks-api/application/frame/user-progress-bar",slug:"/codestack-clone/solidworks-api/application/frame/user-progress-bar/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/application/frame/user-progress-bar/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/application/frame/user-progress-bar/index.md",tags:[],version:"current",frontMatter:{title:"Handling the long operation progress using progress bar in SOLIDWORKS API",caption:"User Progress Bar",description:"Displaying the long operation progress using user progress bar in SOLIDWORKS API",image:"taskbar-progress.png",labels:["progress","user progress bar","background"]},sidebar:"tutorialSidebar",previous:{title:"Run Xpress products (e.g. DriveWorks) using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/application/frame/run-xpress-products/"},next:{title:"data-storage",permalink:"/solidworks-GPT/zh-Hans/docs/category/data-storage"}},p={},l=[{value:"Notes and limitations",id:"notes-and-limitations",level:2},{value:"Running the macro",id:"running-the-macro",level:2}],d={toc:l},c="wrapper";function A(e){let{components:r,...a}=e;return(0,o.kt)(c,(0,s.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To improve the user experience of your macro or add-in it is recommended to display and update the progress bar when the long SOLIDWORKS API operation is performed."),(0,o.kt)("p",null,"SOLIDWORKS API provides a built-in method to display the progress while main thread is locked (i.e. operations are performed in process). Progress value and message can be handled via ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IUserProgressBar.html"},"IUserProgressBar")," SOLIDWORKS API interface."),(0,o.kt)("p",null,"Message and progress is displayed in the standard SOLIDWORKS progress bar in the bottom left corner of the application."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Progress and message displayed in the progress bar",src:n(69129).Z,width:"471",height:"175"})),(0,o.kt)("p",null,"Progress is also reflected in the SOLIDWORKS icon in the task bar."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Progress is displayed in the SOLIDWORKS icon in the task bar",src:n(93632).Z,width:"86",height:"39"})),(0,o.kt)("h2",{id:"notes-and-limitations"},"Notes and limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Progress values and messages can be overridden by standard progress messages from SOLIDWORKS (e.g. rebuild operation, file load etc.)")),(0,o.kt)("h2",{id:"running-the-macro"},"Running the macro"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open part document with bodies"),(0,o.kt)("li",{parentName:"ul"},"Macro traverses all faces of the body and performs data extraction of each face"),(0,o.kt)("li",{parentName:"ul"},"Operation is repeated as specified in ",(0,o.kt)("em",{parentName:"li"},"ITERATIONS_COUNT")," constant"),(0,o.kt)("li",{parentName:"ul"},"Progress bar is displayed"),(0,o.kt)("li",{parentName:"ul"},"Press ESC to have an option to cancel the operation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const ITERATIONS_COUNT As Integer = 1000\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If TypeOf swModel Is SldWorks.PartDoc Then\n        \n        Dim swPart As SldWorks.PartDoc\n        Set swPart = swModel\n        Dim vBodies As Variant\n        vBodies = swPart.GetBodies2(swBodyType_e.swAllBodies, False)\n            \n        If Not IsEmpty(vBodies) Then\n            PerformOperation vBodies\n        Else\n            MsgBox "There are no bodies in this part"\n        End If\n            \n    Else\n        MsgBox "Please open part document"\n    End If\n    \nEnd Sub\n\nSub PerformOperation(bodies As Variant)\n    \n    Dim swPrgBar As SldWorks.UserProgressBar\n    swApp.GetUserProgressBar swPrgBar\n    \n    swPrgBar.Start 0, GetProgressBarUpperBound(bodies), "Performing operations on faces"\n    \n    Dim i As Integer\n    \n    Dim pos As Long\n    pos = 0\n    \n    For i = 0 To UBound(bodies)\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = bodies(i)\n        \n        Dim vFaces As Variant\n        vFaces = swBody.GetFaces()\n        \n        swPrgBar.UpdateTitle "Processing " & swBody.Name & " with " & UBound(vFaces) + 1 & " face(s)"\n        \n        Dim j As Integer\n        \n        For j = 0 To UBound(vFaces)\n            \n            Dim k As Integer\n            \n            For k = 0 To ITERATIONS_COUNT\n                \n                pos = pos + 1\n                \n                Dim swFace As SldWorks.Face2\n                Set swFace = vFaces(j)\n                \n                Dim swSurf As SldWorks.Surface\n                Set swSurf = swFace.GetSurface()\n                    \n                swSurf.EvaluateAtPoint 0, 0, 0\n                swSurf.GetClosestPointOn 0, 0, 0\n                \n                If swUpdateProgressError_e.swUpdateProgressError_UserCancel = swPrgBar.UpdateProgress(pos) Then\n                    If swApp.SendMsgToUser2("Cancel operation?", swMessageBoxIcon_e.swMbWarning, swMessageBoxBtn_e.swMbYesNo) = swMessageBoxResult_e.swMbHitYes Then\n                        swPrgBar.End\n                    End If\n                End If\n                \n            Next\n        Next\n        \n    Next\n    \nEnd Sub\n\nFunction GetProgressBarUpperBound(bodies As Variant) As Long\n    \n    Dim totalFaceCount As Long\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(bodies)\n        Dim swBody As SldWorks.Body2\n        Set swBody = bodies(i)\n        totalFaceCount = swBody.GetFaceCount()\n    Next\n    \n    GetProgressBarUpperBound = totalFaceCount * ITERATIONS_COUNT\n    \nEnd Function\n')))}A.isMDXComponent=!0},93632:(e,r,n)=>{n.d(r,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAnCAMAAACi9k+hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAHGClNiGiZERE6evuDM6Q+m8vXXnaMzMzJNJTTcBAbnVvY/WjMjX6VFdal3Ed7XK4djj79UjJunf3xYZHaDUoWn3b/fm5pycnMvryVIEBMhUWLQdIVxqec/d7JjDnNbo2Pnv7w0PErq6upz6oG/3dILRfs+eppmjrklUYb3P5JXmjcE/Q6z/uyYmJlQoKmmueNbW1o7GkHZ2duvr6+Tk6qB0dKzxpNX/3b97fXL/jNPq1EBKVYyMjKnLrYTie67F3/b29pbgkXpeZmNyg93c38vZ6ojLiKyFhbS0tGMGBow2OD4aHMUdIB4WF+7+8cuyssL0vf3+/rvkutXg7rjttJvTmuUlKLLTtIX4iXjfbictM1VicfH1+cr+05zrlF//fO7z+JBdXb3M3eX/6sXV5xIVGEZQXMzzyJvNnYnUhomTn2UdHZHIk+Dt4cD7w1kLC7iXl3rqbaamptv/4rssMOCcnuLq86vjp29vb3yPpMvizdJydd7n8sKmprHrrMbdydaqsIX/m374g+fu9Yzlg/b4+xYICFhYWKX6qdzz2rzF1ExMTHcODxwhJdX605O8mpn5nZLPks1jZ6AdIsDkwGl5i0UEBJXsi8r3xLL7tU5ZZ6vTraRgYxAREdnIyMLT5paQlrDyqdZ+gWb/gWJqcpvamKLumdrl8L3/yaDFptHk0zpDTA8AAJ/PoXTsZaa/29n11rHH4JbKmITseLPcs8shJOXb3LHPtpPBl7ggJaHjnYDZeVoQEOrw9prBoWtzfHzdcyEmLH95eaurq+zFxhkdIYzdhsXFxXj4fdD0zeGho5n/q8+5uV8GBoDscywzOqL/s7nN47j0sbzcvXIYGYz5kLf/xO3l5WBufmYOEKv6ruD+5uWvsL7qu8fzwt/x3pPwiJXYktf92dvr3FhldLLjsMv7y5zyktDqz4vwf9n51nr/krGNjdPw0ZrjlMP8zlNgbqHdnojrfENNWKraqaDJo8bsxPHr65DeisIhJiYSEofbgUUTFOolKAAAAKXGr+oAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEU0lEQVRIS+3WfVhTVRzA8SOU6UgSjGIIm/RiYkRvBCRCzmAmRZPj1CwuBLWgLATUMHFiCSupwLQyGt1NLLAsvYKI3ARSsReTpMSaZWrmxCJFghC1ePydew/gBnfP5NH/+v61Pc9+n91nzzlnB6muSP+z0JVivyQVFBQ0TuzomLiDvck+lvQM7XpIGOiZkArV5grpx81Rq7+4S4OdygAxV8GEVEin05khtdnKcY2atLS0I0fy81tafg9joCShWkj88iyaHsqqhQmpgCWq2axo47gdmLD5+ZtaWgrDRBLqpxIUMsCEVIiqZgV8N2GPgbqpsLAwwR61NfX6dYyjpwVxPEnhR9hjY8aEnzq1e3dzcwLxSP3NdWIMTEiFRBTYA4QFNRzU1KLm0xehVO01PYQYmJAKUXW8Ioqw69eH/yFPTS0qmvuxCOZWPZwuqxlOURC1vTEwIRX6gUbYJ3B2drZcLj98OE5g73v5g/2rYz1nbXGtGX5bNDwkBcUugV26NFt+5kxcXNzcn3J/9ontvijfN9OpR3OabcRuTU3vHDo0Y9++9+/IkvHnPGdRs7s71vU7mcKmJEfsSBphr8Zubk3Tp/ey0DlPAXWN8fHxGTy79bHKyuMzckpKfvleL+MDXVxG81s8Y11j0mvSMxoGy36KI4uLK4/n5JSELifstxjf6MLzgGYsed5UJaMbnuY8a4iMLP5n4cLQ0NDle4D138XzQ1fx+7tMXTi5atqlsOU0sh06NHWdG7z+/rysrOyWPR4y/kU8NDBwMR9jMllUD41aIhthU5Kj7UDVcrJ5UzR1ymdnlrYmJp54a8IIGb/gV+y/Fn6EaVUNpgbLSTvW4ealqsAGaJTKipmlk1sTT8x+EtjRC9b6Y2BPjsrIsHSFDIqF88ioWVFdsfLo5Nvfy7yBsHgxH7hrFR+TbAkJwZZke9bRCTaJpo3nuPinV1S/sPLas49fs1FgXV5i0aP3swiRP56dr342h4JiDExI1cfCoWw9KLDbRHa179usNw6+sx6rIiKCWRQdHfQRFYUYR8c4VSdp3TnOT2DHbhfZB2W+7LA1w17D3vUqFWbrMZ6HqCjEwIRUfawR2PnAThm7bXvmxls/VKtf/++R80FTWfzGvbheYO9GdMkKMTAhlQ17oJfNJKxat+Z8BO5hve1ZgzOsRwDHRc1XVt8z5bl/H9i795sJZJINVu1kccQ8wiKEv7ZlYUKqPjYF2LA6kd0MLDlNWLgTsFMxvpmwODoICWcMzQATUvVjYSV8lde+eZnIInFxsUEseWmjOsl2CKyyAtZtXnv7sr/osHQGmJBqAPbo2by8P2dfVvaTTjhqYPP+9uMr9B9LOmfYci1lN8AJdtnYkTozWWAJWzu9vEpbW51h9YyjBSbeULRPDXmX4xZddzqsp4Pkxkgil86BShoHE1Ihes81DiHvFkX5+Vmt1vj4trY2d3d3o9EYIJYC0U/2JE4MGMddANTeCe3qn40+AAAAAElFTkSuQmCC"},69129:(e,r,n)=>{n.d(r,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdcAAACvCAMAAACYXGTrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAC7FQgCAAIvU92MAAObFgTudO4HF5gAAVXd2dvn5+crKzMWkXLZ3MAAA/xknGbsaGqXrqjB3l9na3FykxaHHm2NjADQAAKCksABVl5+4uwAwVYSFm6Tm5ubmxebn6MjtwvE5OdT392RjY1ykpBkZlOXl5VLeYhkZVcWBXJUZGTMAM7G/rnnpfv8AAIuLixlLGc/P0VUwd7bU1AAANebo8afxqzMAW/WenncwAFkAMubmpFWX1Ojr8hkZtcTExM7T5o/xlOvr66urqxt1G8Xm5u2CghkZcbr+sjEwMNLyzNS2d1yBgdPT1BwbHNUkJIvUsHwyMne21KRcAJ2dncWBNGLicLTKsABcpDvPTQA0gVgAAJWVlaepvGYZGTSBxbD3993d30UZGcDcu/25udTUlzMzf8TEx83N0OVmZiyMLBljGTAwAPDw8RkZM6HoplVVl5d3MInujPewY6MZGRoaw9j+0mOw91wAXH0ZGbBjAIB/f2TNZZ6onNvj2TIyWPfUi9XV2LPdrJebpnHmebD1sIFcgThjYwA4i739tziL1AAwdxk6GRkZg4E0AEvaW4KCgukrK9fX2vf31NSLOPf3sNTUtpdVABkZqMwaGvqVlbvRud1LS4Gk5jk4OFyk5pnpnxkZZhlUGQAAXGjqc4GBXOakgaf9o6y6qv2srIE0XCOCI1RUVKayo0HYTbAZGYDshDB3tgBjsJfU1BkZRgBcgaiENRoaz1zearGxseakXDLKRWfebDMZGcD8vFYZGRlrGdUwMPNPT6Ojo7L8rK7wsb29vRlEGbPTraH0odSXVVUwAABVVeDg4pf9lvZmZpehlar0qpbzmWjeb2HqbkOmQ3MZGXLrc4vwkcDku0PVVXTpgIs4AAAAYxlbGRkZi4cZGUNDQzOVMxkZmjiLsDTTQmpqabjcsnvsg7H5r2rjcV5eXqz3qsIaGt8nJ5z1nPE2NsT/vz7fR6jzpb2+wG/rePh+fiUlJRkZe8ogIKrPpG7mc1rmaYPuin/uhwAAAFDi9Y4AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAQgUlEQVR4Xu2dC5wVVRnAb+ZC7LZKbbVhuGvZroQi3CRNSDYuS4B0KdnF124mFo/cLhZimkW6SSW4rNuGPLJAscICFawkHhm1tCB1y2f4BHQTESFKqUiEX993zjeP+2LvOXMG5g7f/8fMOXPmzOzc+e935juzwEYuIIq7YT+VjKSNymCRqJzYHp1aUlLCXjUJqNfq9mb26gX2Gk4C6jXZ3BwFrexVl8B6jbNXLwTTaywZj+MwzF51CaRXTIfZqyeC6bW6TKZN7FWXgHqldJi96hJMr0nhderUqexVk4B6hWkOWGWv2gTRayKG0xz26oVAesV0mL16IpBeq8tgmsNevRBMr+3N7NUbgfQK6TB79YaO1xNcaz+Q0xz26gWteEWlPmqFdJi9eiSIXiEdZq8e0Xu+nuCjVvBaxl69EkSvSZjmsFdv6Hn1UyumTeBVwl41CabXZvbqkeB5hXSYvXomgF4rJ5axV68E0Gs1THPYq0eC6BWnOQR71UTTq4/gNIe9ekXT64YmqphHTl8J9qqJntely2upZhxMhzlePaPltWXD8tpBVDeNTIcF7FUfHa8t2zY8VevXQAzpsOUVYK+aaHhtWbphOXhtoU3DsFcjqHttWbqtdnmP2iafBmKRDpNV9qqNsteWQds21F4NXredTC1mYa9GUPY6aFtT7fKXetRu2ObLQAzpMHs1gLLXpU0Yri+B103UYpREZRJfI1qwV03Un68bamuvfgq8+vOAxbSJvXpH3WsxDMNPXQ1eadMs5LUZYa/6aHht2dajB3ilLcPEkujVhr1qouW1qWkp1Y2TAK/kFGGvmmh43dTkn1dIhyFtcmCvmmh4HdTkU84EyHTYgb1qouF1aVOTP3McIFHNXo2g7vVk9OrT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"}}]);