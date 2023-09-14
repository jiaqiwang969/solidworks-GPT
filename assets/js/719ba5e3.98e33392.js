"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[28109],{3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>A});var o=t(67294);function m(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){m(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,o,m=function(n,e){if(null==n)return{};var t,o,m={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(m[t]=n[t]);return m}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(m[t]=n[t])}return m}var c=o.createContext({}),i=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},l=function(n){var e=i(n.components);return o.createElement(c.Provider,{value:e},n.children)},p="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,m=n.mdxType,a=n.originalType,c=n.parentName,l=r(n,["components","mdxType","originalType","parentName"]),p=i(t),d=m,A=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return t?o.createElement(A,s(s({ref:e},l),{},{components:t})):o.createElement(A,s({ref:e},l))}));function A(n,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof n||m){var a=t.length,s=new Array(a);s[0]=d;var r={};for(var c in e)hasOwnProperty.call(e,c)&&(r[c]=e[c]);r.originalType=n,r[p]="string"==typeof n?n:m,s[1]=r;for(var i=2;i<a;i++)s[i]=t[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10163:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>i});var o=t(87462),m=(t(67294),t(3905));const a={title:"Get all assembly components using SOLIDWORKS Document Manager API",caption:"Get All Components",description:"Example demonstrates how to get all components on all levels from the document using the Document Manager API",image:"components-tree.png"},s=void 0,r={unversionedId:"codestack/solidworks-document-manager-api/document/assembly/get-all-components/index",id:"codestack/solidworks-document-manager-api/document/assembly/get-all-components/index",title:"Get all assembly components using SOLIDWORKS Document Manager API",description:"Example demonstrates how to get all components on all levels from the document using the Document Manager API",source:"@site/docs/codestack/solidworks-document-manager-api/document/assembly/get-all-components/index.md",sourceDirName:"codestack/solidworks-document-manager-api/document/assembly/get-all-components",slug:"/codestack/solidworks-document-manager-api/document/assembly/get-all-components/",permalink:"/solidworks-GPT/docs/codestack/solidworks-document-manager-api/document/assembly/get-all-components/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-document-manager-api/document/assembly/get-all-components/index.md",tags:[],version:"current",frontMatter:{title:"Get all assembly components using SOLIDWORKS Document Manager API",caption:"Get All Components",description:"Example demonstrates how to get all components on all levels from the document using the Document Manager API",image:"components-tree.png"},sidebar:"tutorialSidebar",previous:{title:"Working with assembly documents using SOLIDWORKS Document Manager API",permalink:"/solidworks-GPT/docs/codestack/solidworks-document-manager-api/document/assembly/"},next:{title:"Storing and data in model using SOLIDWORKS Document Manager API",permalink:"/solidworks-GPT/docs/codestack/solidworks-document-manager-api/document/data-storage/"}},c={},i=[],l={toc:i},p="wrapper";function u(n){let{components:e,...a}=n;return(0,m.kt)(p,(0,o.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"SOLIDWORKS assembly tree",src:t(73981).Z,width:"191",height:"239"}),"{ width=200 }"),(0,m.kt)("p",null,"This example demonstrates how to get all components on all levels from the document using the Document Manager API."),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"Open the macro in SOLIDWORKS"),(0,m.kt)("li",{parentName:"ul"},"Specify the document manager key"),(0,m.kt)("li",{parentName:"ul"},"Specify the path to top assembly"),(0,m.kt)("li",{parentName:"ul"},"Run the macro. All components data is output to Immediate window of VBA editor")),(0,m.kt)("p",null,"To get top level components only modify the function as follows"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-vb"},'Call GetAllComponents(swDmDoc, "", True, comps)\n')),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"Do not store the pointer to ",(0,m.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2015/english/api/swdocmgrapi/solidworks.interop.swdocumentmgr~solidworks.interop.swdocumentmgr.iswdmcomponent.html"},"ISwDMComponent")," while traversing the levels of assembly as it will be destroyed once the document is closed or pointer is released")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-vb"},'Type CompData\n    DocName As String\n    CompName As String\n    ConfName As String\nEnd Type\n\nConst FILE_PATH As String = "Full path to assembly file"\n\nConst LIC_KEY As String = "Document Manager License Key"\n\nDim swDmApp As SwDocumentMgr.SwDMApplication4\n\nSub main()\n\n    Dim swClassFact As SwDocumentMgr.swDmClassFactory\n    \n    Set swClassFact = New SwDocumentMgr.swDmClassFactory\n    \n    Set swDmApp = swClassFact.GetApplication(LIC_KEY)\n    \n    If Not swDmApp Is Nothing Then\n        \n        Dim res As SwDmDocumentOpenError\n        Dim swDmDoc As SwDocumentMgr.SwDMDocument\n        \n        Set swDmDoc = swDmApp.GetDocument(FILE_PATH, swDmDocumentAssembly, True, res)\n        \n        If Not swDmDoc Is Nothing Then\n            \n            Dim comps() As CompData\n            \n            Call GetAllComponents(swDmDoc, "", False, comps)\n            Dim i As Integer\n            \n            For i = 0 To UBound(comps)\n                Dim comp As CompData\n                comp = comps(i)\n                Debug.Print comp.CompName & " (" & comp.ConfName & ")" & " - " & comp.DocName\n            Next\n            \n        Else\n            MsgBox "Failed to open the document"\n        End If\n        \n    End If\n    \nEnd Sub\n\nSub GetAllComponents(doc As SwDocumentMgr.SwDMDocument, ConfName As String, topLevelOnly As Boolean, comps() As CompData)\n    \n    If ConfName = "" Then\n        ConfName = doc.ConfigurationManager.GetActiveConfigurationName()\n    End If\n    \n    Dim swDmConf As SwDocumentMgr.SwDMConfiguration2\n    \n    Set swDmConf = doc.ConfigurationManager.GetConfigurationByName(ConfName)\n    \n    GetComponents swDmConf, comps, Not topLevelOnly, False\n        \nEnd Sub\n\nSub GetComponents(conf As SwDMConfiguration2, coll() As CompData, recursive As Boolean, isArrInit As Boolean)\n    \n    Dim vComps As Variant\n    vComps = conf.GetComponents()\n    \n    If Not IsEmpty(vComps) Then\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(vComps)\n            \n            Dim swDmComp As SwDocumentMgr.SwDMComponent10\n            Set swDmComp = vComps(i)\n            \n            Dim comp As CompData\n            comp.DocName = Right(swDmComp.PathName, Len(swDmComp.PathName) - InStrRev(swDmComp.PathName, "\\"))\n            comp.CompName = swDmComp.Name2\n            comp.ConfName = swDmComp.ConfigurationName\n            \n            If isArrInit Then\n                ReDim Preserve coll(UBound(coll) + 1)\n            Else\n                ReDim coll(0)\n                isArrInit = True\n            End If\n            \n            coll(UBound(coll)) = comp\n            \n            If recursive Then\n                \n                Dim err As SwDmDocumentOpenError\n                Dim swDmChildDoc As SwDocumentMgr.SwDMDocument10\n                Dim swDmChildConf As SwDocumentMgr.SwDMConfiguration2\n                \n                Set swDmChildDoc = swDmComp.GetDocument2(True, Nothing, err)\n                \n                Set swDmChildConf = swDmChildDoc.ConfigurationManager.GetConfigurationByName(swDmComp.ConfigurationName)\n                \n                GetComponents swDmChildConf, coll, recursive, isArrInit\n                \n            End If\n            \n        Next\n        \n    End If\n    \nEnd Sub\n')))}u.isMDXComponent=!0},73981:(n,e,t)=>{t.d(e,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAADvCAMAAACUuvXDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAN2zHGa2/21YGv//tnRcJToAANv//wAAZtC3ZsrEtDoAOgBmtoR3Vf7+/jo6OryQIpLF3r2xjj51kAAAOrb//2RPFpA6Ot/Gc7ZmAAA6kCZadt3Vv7mhWDqQ2zo6kPHTU/Dw79G4KwA6OpDb/7SVQZx2I2YAOnK31LKmjv//22CXs//bkFNqTTo6ZneWgtuQOn9rP2YAAPHGIP+2ZpmERmeKhtuQkJDbtmYAZtPBcRlNadXV1dC1RpmMaGZmOpA6AM+oGSYmJmY6ZvXROLGNFffnjkyAkoRpHKSagTNRSZN/TKuHL+fTfL20n//jWsauQKaZeOW7HczMzMqkNGtmVtvBStuQZntsSzVlcjqQkGY6kFlZWWyjvYiIiK2XTpvO5q6NPuDGaZaFYfXJH5Z0GG97SViBmKR8IaCoZsSmUdTMv9HMhdeuGOm+ILevm8CcF6eXYU2Gn/XZVnuyzejWgjBkg4RzPdrUyf/vlIBjHubITr65po1wJT19nLm+iSJgfpTM5fbKIZt7GrmcTLSMH9uxLcqvV8GcI9i6R9muIfndWN7YybmcO4RtNmikwxtTcezBIThWR9K9a7CqlLixoipeerKNN/PcXNW1TOzchZnT59LNwue5Ial+IeHKdEmDonleJYhzQOjTed/IceDayLCojbSMIAAAAJmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///z/SmAkAAACpdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD7b3sWAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAIBklEQVR4Xu2ciXcURRCHF4wCGscLRFDRaLxi1DWJB54Qb41GgyIeYLzxwoOoxJvgCV6g4IU36r9pV3V1V/dsJzvbO7u9E+p7cWa6u/L8ku1d3vulX9WyGypNLSvGwAA99BjinxbxT4v4p0X807Ko/Afeu+mh78OiVfA/+N93L394xdaZN56nCYdK+E/tvfujb37ZffG3NOHQ+/7HP/D1jrkDl771xwenzdCUw3z+G2rA2mVZtqafpoaPq9X6s76LBtVz34haXQlPpoBWR6h6jBZjYf+r3lyxf+7AzMyZp0xP05RD3n/TNnog0Wz48ltW4Xj4BDW+ZhX5w3WsttQW2NWT8LuGVut7NOw/euvno+B/aLqA/6bxcXoy/vV19XU4Hj5HvRhmWl/H4PXRBXb1ZnwB6o/q747G8Z9TaP/dNOXg+28afzznP7R6kNSGNoCt5w9XKrCr18IK3dqA/Zc8o/yfu2ProemtV9OUg+ev9PP+yk0Z6pk6vB/y/rbArNbVC1Dv1wXxsP+xG+EHOO+y6x954UeacnD9QT/vD3uDNpCivtzd/1nf+lVugV61XzgXC/tn2SV3whaamJycpAkH13/buMJ//+LnTG25fgfDHlqqxfRV/ardAlqt98N8if7ZrtvUS9Dc3wcN8B2qvcbUL1ndtBhe6+oz0hQ4q30jal6XxeP5Z08/uwT8b6ShQxP/NbgzcDsPwT8JS/UvfB1eQd0UmFX8udQ7oFz/7KU/N07s/OpKGjnM75+WnL9iyy568KiOfxjx7wzinxbxT0tNmVUZ2T9pEf+0iH9axD8ti8p/4PBdJ94XFq2C/8FPnvr7yGdfnE5Dj0r4T+298N1zJ4+hoUfv+x/+968dc9snJ2P9IWrAMBkjWiAYRFMZjTGO0AlFHOz/xM8r9rflrzzra5f1jZxP/uEg2pThGPIsvR4L+4/+evLo3Padmz8+++1XacqhmD+6GCEbNcNQX8e0uPoPx3yJxvGH8PC3C86Ynb39OppyiPAPB9HwQDcMsGx5HOw/Bf6f/vD77OyRF2nKofD+cYVCQTSV4f7HTI7LY2D/dzBAH33w3id/2kdTDsXev5jPukKNQTSV0Y9hV2Jh/yw7dQ+8BK3mtwbr4QoFgmi9ijf8i5hb3jquf/bPa6X5q0s4iNZDW0SXaDz/7PU9U+C/mYYOhf3xE30lWIeDaCrTN7W9SvXPznr/lYl9999DI4fm/mnI+Su2fEkPHtXxDyP+nUH80yL+aZH8OS3inxbxT4v4p0X80+L5S/7cdTx/yZ8Hs2yNvikqmT9D6oO5cmXzZ/W4Hv0rmj+jprpWNX9mo4rmzyNw3F9TwfzZ86le/sy3aubP6uMfNogaSf5cgJy/QvLnbiL+aRH/tFTfn4LciiL7Jy3inxbxT4v4p2VR+Uv/ja7j+R+F/TccdNysoE4cC5+DVpTRkIP9W+u/wZhOHBQ3qwdstNHsHLSps6txDTnYv6X+G4ztxEFxc0aNNmzSM08ObersalxDDscfwsOC/TcY7sRBcTN34jD+HW3Iwf4t9N9gvE4cGDfDL1Q32jD+tJD3t3VtNeRg/+L9Nxi/E4f63y93Gm24Jo05NNeZVfuFcwVh/+L9Nxi/E4eOm+EDBoN01ySQQ9s6uxrTkMP1j+u/YaC42TTaIFWY0QtaDK8lNuTw/KP6bxgobvYabSxwDrqkhhy+v/Tf6DaN/mHEvzOIf1rEPy2SP6dF/NMi/mkR/7SIf1o8fzn/3HU8/6P6/DMDGQOmyAsn0FRGY8whWj8Jzf7tnn9mwBOPqHahEwf7t3v+mQEPdDFCNmOGob6WdRLa8YfwsI3zzwyJsVAHT0Kzf7vnnxnwwLPBLNSxk9Ds3+75ZwaMMJh1hTp0Epr92z3/zFgPVyiQQOtVvEWfhHb92zv/zFgPfFCXDp6E9vzbOv/MkEezBJrK9C32JLTvL+efu02jfxjx7wzinxbxT4vkz2kR/7SIf1rEPy3inxbPX84/dx3PX84/4xlafa65SR8ORU+ff4bMZ6E+HKaud88/K9kF+nCYOrvac+efSXOe9Ln3zz+Tq6Ki558X7MPBdWbVfuFcQdi/7PPPnkggfTZ1vNpT55/JA2b0gp7AaxXOPzfrwyHnn5Gcv0LOP3cT8U+L+Kel+v4U5FYU2T9pEf+0iH9axD8ti8pf8ueu4/kf3fkzQ0l0LpBuchxaERFIs39s/szkkuhcIN2ZhhzsH5k/M/kk2qS4FDRztEMLjn98IO34Q3jYcv7MNCTRDYG08S8zkGb/qPyZCSTR+UDa+NNC3t/WtRJIs39M/syEkmi62aDZNSkrkGb/mPyZCSTRdOOg2TWxCa++RgfSrn97+TNjkmi6wR7CHwdNeAGHejI+kPb828qfGYqUc4E0DktvyOH7S/7cbRr9w4h/ZxD/tIh/WiR/Tov4p0X80yL+aRH/tHj+0n+j63j+0n8jB4QLKwcxidDBTjh6pjIaYwBRtBMH+5fXf4MBz/raZQ9DFII+4eiZyvQ4n3QtDPuX13+DAQ9y6XsM/YPRM5XhmC+FcPwhPCyl/wZDYvCok81w9ExlOIbIynxPAdi/vP4bDHjAxqlThw1FKHqmMtz/WKdXisD+5fXfYMCI3rh6/+NTQ/RMZfRj2JUisH95/TcYx4MfA9GzXsNbi504XP+y+m8w5AF/BNOfL+HomcrwxpdCeP4l9d9gyAM+9PWuD0fPVKZv8CePWH/pv9FtGv3DiH9nEP+UZNn/q/9la8aimJAAAAAASUVORK5CYII="}}]);