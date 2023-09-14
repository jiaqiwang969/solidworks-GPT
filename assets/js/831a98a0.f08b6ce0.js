"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[47519],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function A(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=o.createContext({}),i=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=i(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=A(e,["components","mdxType","originalType","parentName"]),p=i(t),m=s,u=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return t?o.createElement(u,a(a({ref:n},d),{},{components:t})):o.createElement(u,a({ref:n},d))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,a=new Array(r);a[0]=m;var A={};for(var l in n)hasOwnProperty.call(n,l)&&(A[l]=n[l]);A.originalType=e,A[p]="string"==typeof e?e:s,a[1]=A;for(var i=2;i<r;i++)a[i]=t[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>A,toc:()=>i});var o=t(87462),s=(t(67294),t(3905));const r={layout:"sw-tool",title:"Macro to save all opened documents silently using SOLIDWORKS API",caption:"Save All Documents Silently",description:"VBA macro to save all currently opened modified documents silently (without the popup messages) using SOLIDWORKS API",image:"save-all-documents.png",labels:["save all","silent"],group:"Frame"},a=void 0,A={unversionedId:"codestack-clone/solidworks-api/application/documents/save-all-silently/index",id:"codestack-clone/solidworks-api/application/documents/save-all-silently/index",title:"Macro to save all opened documents silently using SOLIDWORKS API",description:"VBA macro to save all currently opened modified documents silently (without the popup messages) using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/application/documents/save-all-silently/index.md",sourceDirName:"codestack-clone/solidworks-api/application/documents/save-all-silently",slug:"/codestack-clone/solidworks-api/application/documents/save-all-silently/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/application/documents/save-all-silently/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/application/documents/save-all-silently/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Macro to save all opened documents silently using SOLIDWORKS API",caption:"Save All Documents Silently",description:"VBA macro to save all currently opened modified documents silently (without the popup messages) using SOLIDWORKS API",image:"save-all-documents.png",labels:["save all","silent"],group:"Frame"},sidebar:"tutorialSidebar",previous:{title:"Run macro on new document creation using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/application/documents/handle-new-document/"},next:{title:"Application frame customization using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/application/frame/"}},l={},i=[],d={toc:i},p="wrapper";function c(e){let{components:n,...r}=e;return(0,s.kt)(p,(0,o.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This VBA macro allows to save all documents currently opened and modified in SOLIDWORKS silently using SOLIDWORKS API. Unlike default save as command where the various warning messages can be displayed while saving the files this macro will save documents without showing any popup messages."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Old version warning while saving file",src:t(35333).Z,width:"462",height:"288"}),"{ width=350 }"),(0,s.kt)("p",null,"Macro can be configured to either display the error (in case some of the files were not saved properly) or to keep it silent."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const SHOW_ERROR As Boolean = False 'True to show message box in case of an error, False to keep it silent\n")),(0,s.kt)("p",null,"The result of the operation is displayed in the status bar."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Result displayed in the status bar",src:t(56528).Z,width:"455",height:"101"})),(0,s.kt)("p",null,"This macro can be used as a part of background integration where modal dialogs should not be displayed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const SHOW_ERROR As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swFrame As SldWorks.Frame\n    Set swFrame = swApp.Frame()\n    \n    Dim vModelWnds As Variant\n    vModelWnds = swFrame.ModelWindows\n    \n    If Not IsEmpty(vModelWnds) Then\n        \n        Dim i As Integer\n        \n        Dim savedCount As Integer\n        Dim failedCount As Integer\n        savedCount = 0\n        failedCount = 0\n        \n        For i = 0 To UBound(vModelWnds)\n            \n            Dim swModelWnd As SldWorks.ModelWindow\n            Set swModelWnd = vModelWnds(i)\n            Dim swModel As SldWorks.ModelDoc2\n            Set swModel = swModelWnd.ModelDoc\n            \n            If swModel.GetSaveFlag() Then\n                \n                Dim errs As Long\n                Dim warns As Long\n                \n                If False = swModel.Save3(swSaveAsOptions_e.swSaveAsOptions_Silent, errs, warns) Then\n                    failedCount = failedCount + 1\n                    Debug.Print "Failed to save " & swModel.GetTitle() & ": " & errs\n                Else\n                    savedCount = savedCount + 1\n                    Debug.Print "Saved " & swModel.GetTitle\n                End If\n                \n            End If\n            \n        Next\n        \n        swFrame.SetStatusBarText "Saved " & savedCount & " document(s). Failed: " & failedCount & " document(s)"\n        \n        If failedCount > 0 And SHOW_ERROR Then\n            swApp.SendMsgToUser2 "Some of the files failed to save automatically", swMessageBoxIcon_e.swMbWarning, swMessageBoxBtn_e.swMbOk\n        End If\n        \n    End If\n    \nEnd Sub\n')))}c.isMDXComponent=!0},35333:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc4AAAEgCAMAAAAKdmNwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAL6bDbP8swAtfCjP5Jubm3oxALmrmvfrGzk5jgAAOMi5pjpmtrOdYKmGDYbN7x0dHvDpD/7+/nub2lac3cfIyZC2kCUAMQBkjnhXfJtXACcAAO/vqrLL5Zm10c3Y3f//tpBcl++qX83v73hsOF0ANajC3cjb7vy0jr+WLTWGzTqg7rnR6evr6wAzq82GNXm411+q7wB/3jMAXdjgxf/BvFcAAIaHhxxUW6K82NidWc3IJQBNnQAAWafBnTbN83dMAP/hzuzDStv//wBazoyCSdHKp+a7CLZ/mbb//wAzmbXR2Q03Ul4rAGYzmcnDd7OztGbB/+OsF4Dd9Jnb3e/y89ff5MrV2//bkComB7bbkIxrMaurrDpamazF32a2tqC61kDW+4c2YHuH3CVsvNLh8arv8NWMY96kBcy3W/z82OfIMMfH0d3d3TmRvaa/2zMzM7agzuXi3ABmttPr8bh8Moy92NK+KWVeOtPRxAA6kLZmAGQAZKqQRJA6AGa2/0KI3JdWANLb4f+2Znacf0NDRNuQOjQANFjS8fDaJq6hjdLBuNv/22a22+ru8GSOjjB7vT7O8q6zuZDb/2ZmALna3uPj5OWzARESFG5tUvDw70MAANnm8+rDV+/NhgAzvAAAZdugq9XRUJ2406mmfAA1hbyyLuC6RQBfqjo6ZrHMwufCC3y821xcWWhoZ6+LjKOjpClSoDqQ21+qzM7S17m6u8nEiLOOOdi8IZC2/6vEwNKmC0A3CkxMTNDQ0KiKWOCmCzo6Ovr0B7W1nOa2LdPT0zx/sVONucmxRpTi9PXnKdLbwNvp7DoAOereQHV0d393S7esj8DBwjoAZuzOHoY1AKpfAL2xeDgAALb/24aFZsvO1PXjJl6m3L+3ou/TScHY6du2Ymva9dnZutfu9Dozmbx+Wte7fKO9uY6Pj0jQ8mYAOpNuMszMzXBwcOrKDWUAAOvDK3W929bcn6nW4HrE4NDZ3ujCF82/Ks/NyZDh/+KrApPE3/DNSO3MVgAAAMFXAKkAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAXpklEQVR4Xu2dC3wUx3nAjyjm1RJjivIwtBVgqHFQXOqCG8qzJIZAcK6tReVwpXZDMcg5Ww3GISgWGIpsnMSBuMjmcCnvOMEQxfVhxxgoNIKUNiZcAasBK34GU2NMTcFJcf3r933zzezeau8hafekG33/H7qdnZn9dnb+mtk9sbcX6SdYhOi0CtFpFUpntVDU9O1LGpXO6hXJerUmFCn//vnHaAk6q8/U/45Q5NzzP+QTdK4QmxYw5I+UzuokZwhFzVw8f4JOGZxWoHVW8LpQ1MytVjr7bRYs4F9Fp00YnbcJFiA6rUJ0WoXotArRaRWi0ypEp1UYnZ8WLMBf58RIJDJWJ0ruxQStzsI1eAHmmMyJTgWnOlbBnFn4sg9rm5hCePjpfHMGdvuRez89fh26mTjuXbYFdiCDDI1fB7n7sOTNGb1fwtel3urj14FErLxlwFInphAmfjq3fAz8IGrckRuvTvJDFbd87Nalahtvda5MWk1MIUz+XOu822H8uqVpS1Bx98SxlARDd89SSRiab86YA1ljsWxfyb0tqmPFWWOpkoklhIqfzrtnRdAACqNVVNFSJ1rD5MQ5oBLLvdWxAssGOKYQKkbnMDdbBkTmDBu2b9xFWgM/wyaOpeTZkveHnVXJ8T99CWvAAv9BlbTqeE30PqycjfR+iXI5phAq/jpBZWRsDp0w+LBkX8n7z81YuuWGi97quIANxp7lbBVTCJVXtc7ZHsAW/NPJ2RPHUhJ0zj6rkuBx9uyJc3ANnMGKtzroxaLZE3FpSoQwyagTBpd2iIsWOrEc1j//PCz2jXt+Dqx4qj83AzKh8nMzUDyithHCw0/nlh/CC8yR0P0oiEaXV+eWAZSxZUBvGHDj1+Fri+r7IBcrY76J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"},56528:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAccAAABlCAMAAAAPgdjRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAIHF5nZqVKTm5mMAAPf3sIGkgQAAVTB3l4vUsMWkXGhoZ+jo6QAwd6TFgf7+/jIAAObmpFykxZ+4u9TUl+Xl5QAA/5dVAISFm8vLzaCksPT09Pf39zAAVbD39zMAMwBVl2RjY8/P0ebo8ebm59SLOJWVlb29vVUAMDAwVQAANFWX1MXmxc7T5mNjAOjq8pd3MLbUth4eHubmxcTExDAwd9S2d+vr7NTUtlUAAHcwMHe21IB/fzRcpKepvMWBNKRcANPT1DSBxZ2dndT39wAwVYvU9wBcpPDw8AA0gebFgVwAXNSXVfewY/fUi3cwAIE0XNzc3cTEx2Ow9y0tLThjY7BjAM7O0KSBgaurq4qJiTiL1IE0AIKCgsWBXLZ3MPf31FUwAAA4izAwAIFcgdbW2IGk5uakXFyk5jB3tpebpgAAXHJycgBjsKOjo1RUVJfU1OakgVUwd8Xm5jk5ObbU1ENDQwBVVVVVlwAAY4s4ALCLODiLsF5eXrGxsVwAAFwANDMyMjgAAKSBNHh3dzSBpLy9wIE0NCUlJTQAXDQ0gQAAOG1sbK+urnhsVnpuWAAAAGb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///8/WdGEAAACRdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAy+WGbAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAKhUlEQVR4Xu2cjV8cRxnHV019KzFguQIetgkmEN9fQEiMCidqCZJGkprYhBOtUkibELWkmmqTktZoX6L/sr/nZXZn93bvbo9Z2N3M99O7nX1mdm5mvjuzc0AatL+rTPbgsR49nbRPpPF8swMtP6klOlixWejCUALv0QUZHk+cmJxUgYoU1/w0VGGIaktHHRLeowsyPTKWSy6t4VRUXwy1lo736JBUj0Yjoy5RVgNZqLskai0d79ERvT0SLFLTmTRVXApqLRXv0QVpHp9n9CQHKi0L9ZbEe3RB+vNxMCZVWBfUnY336AKXHrutrBbqz+A9usCpx14ra4Q6JLxHF7j1KHtbddUD1eg9OsGtR97YEuqqN96jGxx7DEUCNdUL79EFrj0mfpqnrrrhPbrAtUd7QirqKwvv0QXOPaaIBOosDe/RBYfkkVFxCbxHF7j3mHxExlB3Nt6jCwrweALVqrZU1J/Be3RBER5JZHeVtkvv0QXFeWRUWyreo0MK8WiJBKotHe/RDcV4jIsEai0N79EFBXnsEAnUWxLv0QVFeUwTCdSdjffogkP2yKhAJYfH9TQac7vTtWF3rjEIBXrsatJ2mcOjtjrBbkNrqgHoTD6GFhZWVpqFeiTUQDrS9BweT3eAnixMoxL9DlN9pvW3632Da+iPUgv2yKiGVHJ55L9bTv7DAvIoY1B9FhaWVU8PtLxwWB4JVZHCQB7Rej4B8Njxt1tukXVD0FBBDOXwGN28h+mRUB0JBvG4svJuzKP2riCae6ea/NpvF+txqNG/x+Z+KPKwPRKqxGIAjysrP7hteYRGTRdD89Ruk1/PPmlqqBhON4b69/ifu0bkUXgEasWQ3yM0vn3D8jjUWN8qkuYHD5rymmlqqBhaU+s5PJ76REUekUdCzRC5PULj/t3lp97jK7fbbRF5hB4FtpPf4yv7dz95cIgeGx88aMhrpqGhYsjlce/G9PKrLPLIPYKB5uPe7R/PPPUe357enSjJfGQGeT4+e8N7vGs0VtYjRE7H1tX1rVaRNKZnGvK6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"}}]);