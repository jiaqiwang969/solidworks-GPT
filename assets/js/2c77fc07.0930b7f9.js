"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[29123],{3905:(A,o,e)=>{e.d(o,{Zo:()=>a,kt:()=>M});var n=e(67294);function t(A,o,e){return o in A?Object.defineProperty(A,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[o]=e,A}function i(A,o){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(A,o).enumerable}))),e.push.apply(e,n)}return e}function m(A){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?i(Object(e),!0).forEach((function(o){t(A,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(o){Object.defineProperty(A,o,Object.getOwnPropertyDescriptor(e,o))}))}return A}function s(A,o){if(null==A)return{};var e,n,t=function(A,o){if(null==A)return{};var e,n,t={},i=Object.keys(A);for(n=0;n<i.length;n++)e=i[n],o.indexOf(e)>=0||(t[e]=A[e]);return t}(A,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(n=0;n<i.length;n++)e=i[n],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(t[e]=A[e])}return t}var r=n.createContext({}),l=function(A){var o=n.useContext(r),e=o;return A&&(e="function"==typeof A?A(o):m(m({},o),A)),e},a=function(A){var o=l(A.components);return n.createElement(r.Provider,{value:o},A.children)},p="mdxType",c={inlineCode:"code",wrapper:function(A){var o=A.children;return n.createElement(n.Fragment,{},o)}},R=n.forwardRef((function(A,o){var e=A.components,t=A.mdxType,i=A.originalType,r=A.parentName,a=s(A,["components","mdxType","originalType","parentName"]),p=l(e),R=t,M=p["".concat(r,".").concat(R)]||p[R]||c[R]||i;return e?n.createElement(M,m(m({ref:o},a),{},{components:e})):n.createElement(M,m({ref:o},a))}));function M(A,o){var e=arguments,t=o&&o.mdxType;if("string"==typeof A||t){var i=e.length,m=new Array(i);m[0]=R;var s={};for(var r in o)hasOwnProperty.call(o,r)&&(s[r]=o[r]);s.originalType=A,s[p]="string"==typeof A?A:t,m[1]=s;for(var l=2;l<i;l++)m[l]=e[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,e)}R.displayName="MDXCreateElement"},15542:(A,o,e)=>{e.r(o),e.d(o,{assets:()=>r,contentTitle:()=>m,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=e(87462),t=(e(67294),e(3905));const i={title:"SOLIDWORKS VBA macro to compose flat BOM table using API",caption:"Compose Flat Bill Of Materials (BOM)",description:"Example demonstrates how to compose bill of materials from the assembly tree using SOLIDWORKS API",image:"bill-of-materials.png",labels:["bom","flat","top level"]},m=void 0,s={unversionedId:"codestack/solidworks-api/document/assembly/compose-flat-bom/index",id:"codestack/solidworks-api/document/assembly/compose-flat-bom/index",title:"SOLIDWORKS VBA macro to compose flat BOM table using API",description:"Example demonstrates how to compose bill of materials from the assembly tree using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/document/assembly/compose-flat-bom/index.md",sourceDirName:"codestack/solidworks-api/document/assembly/compose-flat-bom",slug:"/codestack/solidworks-api/document/assembly/compose-flat-bom/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/assembly/compose-flat-bom/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/assembly/compose-flat-bom/index.md",tags:[],version:"current",frontMatter:{title:"SOLIDWORKS VBA macro to compose flat BOM table using API",caption:"Compose Flat Bill Of Materials (BOM)",description:"Example demonstrates how to compose bill of materials from the assembly tree using SOLIDWORKS API",image:"bill-of-materials.png",labels:["bom","flat","top level"]},sidebar:"tutorialSidebar",previous:{title:"Write component quantity in the SOLIDWORKS assembly to custom property",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/assembly/components/write-quantities/"},next:{title:"Overview of SOLIDWORKS Assembly context and usage from API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/document/assembly/context/"}},r={},l=[],a={toc:l},p="wrapper";function c(A){let{components:o,...i}=A;return(0,t.kt)(p,(0,n.Z)({},a,i,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Bill Of Materials",src:e(69232).Z,width:"439",height:"295"}),"{ width=250 }"),(0,t.kt)("p",null,"This example demonstrates how to compose flat (top level only) Bill Of Materials table from the assembly tree using SOLIDWORKS API."),(0,t.kt)("p",null,"Bill Of Materials position includes the following columns:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Model Path"),(0,t.kt)("li",{parentName:"ul"},"Model Configuration"),(0,t.kt)("li",{parentName:"ul"},"Description (custom property)"),(0,t.kt)("li",{parentName:"ul"},"Price (custom property)"),(0,t.kt)("li",{parentName:"ul"},"Quantity (calculated)")),(0,t.kt)("p",null,"The composed BOM is output to the immediate window of VBA editor:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"BOM Table printed in the immediate window",src:e(48035).Z,width:"650",height:"179"}),"{ width=250 }"),(0,t.kt)("p",null,"It is not required to have a BOM Table inserted for this macro to work."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-vb"},'Type BomPosition\n    ModelPath As String\n    Configuration As String\n    Quantity As Double\n    Description As String\n    Price As Double\nEnd Type\n\nDim swApp As SldWorks.SldWorks\n\nSub Main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n        \n        swAssy.ResolveAllLightWeightComponents True\n\n        Dim bom() As BomPosition\n        bom = GetFlatBom(swAssy)\n        \n        Dim i As Integer\n        Debug.Print "Path" & vbTab & "Configuration" & vbTab & "Description" & vbTab & "Price" & vbTab & "Qty"\n        \n        For i = 0 To UBound(bom)\n            Debug.Print bom(i).ModelPath & vbTab & bom(i).Configuration & vbTab & bom(i).Description & vbTab & bom(i).Price & vbTab & bom(i).Quantity\n        Next\n        \n    Else\n        MsgBox "Please open assembly"\n    End If\n    \nEnd Sub\n\nFunction GetFlatBom(assy As SldWorks.AssemblyDoc) As BomPosition()\n    \n    Dim bom() As BomPosition\n        \n    Dim vComps As Variant\n    vComps = assy.GetComponents(False)\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        \n        If swComp.GetSuppression() <> swComponentSuppressionState_e.swComponentSuppressed And Not swComp.ExcludeFromBOM Then\n            \n            Dim bomPos As Integer\n            bomPos = FindBomPosition(bom, swComp)\n            \n            If bomPos = -1 Then\n                \n                If (Not bom) = -1 Then\n                    ReDim bom(0)\n                Else\n                    ReDim Preserve bom(UBound(bom) + 1)\n                End If\n                                \n                bomPos = UBound(bom)\n\n                bom(bomPos).ModelPath = swComp.GetPathName()\n                bom(bomPos).Configuration = swComp.ReferencedConfiguration\n                bom(bomPos).Quantity = 1\n                \n                GetProperties swComp, bom(bomPos).Description, bom(bomPos).Price\n                \n            Else\n                bom(bomPos).Quantity = bom(bomPos).Quantity + 1\n            End If\n            \n        End If\n        \n    Next\n    \n    GetFlatBom = bom\n    \nEnd Function\n\nFunction FindBomPosition(bom() As BomPosition, comp As SldWorks.Component2) As Integer\n    \n    FindBomPosition = -1\n    \n    If (Not bom) <> -1 Then\n        Dim i As Integer\n    \n        For i = 0 To UBound(bom)\n            If LCase(bom(i).ModelPath) = LCase(comp.GetPathName()) And LCase(bom(i).Configuration) = LCase(comp.ReferencedConfiguration) Then\n                FindBomPosition = i\n                Exit Function\n            End If\n        Next\n    End If\n    \nEnd Function\n\nSub GetProperties(comp As SldWorks.Component2, ByRef desc As String, ByRef prc As Double)\n    \n    Dim swCompModel As SldWorks.ModelDoc2\n    Set swCompModel = comp.GetModelDoc2()\n    \n    If swCompModel Is Nothing Then\n        Err.Raise vbError, "", "Failed to get model from the component"\n    End If\n    \n    desc = GetPropertyValue(swCompModel, comp.ReferencedConfiguration, "Description")\n        \n    Dim prcTxt As String\n    prcTxt = GetPropertyValue(swCompModel, comp.ReferencedConfiguration, "Price")\n    \n    If prcTxt <> "" Then\n        prc = CDbl(prcTxt)\n    End If\n    \nEnd Sub\n\nFunction GetPropertyValue(model As SldWorks.ModelDoc2, conf As String, prpName As String) As String\n    \n    Dim confSpecPrpMgr As SldWorks.CustomPropertyManager\n    Dim genPrpMgr As SldWorks.CustomPropertyManager\n    \n    Set confSpecPrpMgr = model.Extension.CustomPropertyManager(conf)\n    Set genPrpMgr = model.Extension.CustomPropertyManager("")\n    \n    Dim prpVal As String\n    Dim prpResVal As String\n    \n    confSpecPrpMgr.Get3 prpName, False, "", prpVal\n    \n    If prpVal = "" Then\n        genPrpMgr.Get3 prpName, False, prpVal, prpResVal\n    End If\n    \n    GetPropertyValue = prpResVal\n    \nEnd Function\n')))}c.isMDXComponent=!0},69232:(A,o,e)=>{e.d(o,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbcAAAEnCAMAAAAdL/2aAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAP///wAAAICAAAAAgIAAgACAgICAgMDAwP8AAAD/AP//AAAA//8A/wD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMwAAZgAAmQAAzAAA/wAzAAAzMwAzZgAzmQAzzAAz/wBmAABmMwBmZgBmmQBmzABm/wCZAACZMwCZZgCZmQCZzACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNmZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///5v2QGkAAAAodFJOU///AP////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABes0bjAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAblUlEQVR4Xu2Yi5bkKo5Fu///pwe9ELYlIROnZiJnxV4ZRoC8pYCq2531n//++Iv87u1v8ru3v8nv3v4mv3v7m/zu7W/yu7e/ye/e/ia/e/ub+L3958f3o3d1uTcdQXzhX2RYS2ciQHlXRBEEsA4BrKUzEaC8K6IIAliHANbSmQhQ3hVRBAGsQwBr6UwEKO+KKIIA1iGAtXQmApR3RRRBAOsQwFo6EwHKuyKKIIB1CGAtnYkA5V0RRRDAOgSwls5EgPKuiCLiP/J7+AhkuKILMgT7g2jtwuMtWbjXm/E13ZIk/fpKRpTjHhnkeZE/eaxZHr+g7/JzJTLNNyW0QNYrRRQR/N5k7trAIz8t4U6wdGF5z2y8oAMt0IM2eUoPWdeQs3hYX6qIEvRNHcZoSy5/cl+zRBn5leC90GT59q4Gy8aKL0QRIQb58JRHU9nMVnR55blyxV/Wt+eCTJdlDpYdDSn5siJxTrQvb4pHRvtGU/7kti55+po+gnefK8ubVlU/c++KL0URMQ2yrIdiZzOr6HyOzmPhhhnoscYacKwry45EHPqWzCzOifZXj4wcMh7duK5bGo0cj0f06nNpvunRJXzgS1FE0FvyIXiQie7qvs7n6DwWbpCCLSrzBXfqTLd5RdZl0wZpj/dKogR9Uwb7ngovhS/pKFgKjRJ33iI87elYNh1fiiLCBNo7P/Qpu/PHFm48Fm6Qi9+ih3yWBWKM80dTbEGzdaA1HjZECfoiDzrqji8+uK5Zirw/wwfPNU+bkUsihy9FEWHv69tj4O/g08t8js5j4cZ8gzzTJws80ChbvCDj+mMDb2pQEqXcBBdR6ryuc9p40KivhG8+1zzNIhn5GTl8KYoIess+MuWv5FN6zPkcncfCDX+T4QVZ8x3ZlQUd11QdfHNDlHETXEQe3biury/qK+GbzzVPs2h5P3L4UhQR9qaJdEmzJPT9Zcu4zp7Ii4uAAvGsOy/uTcKCKMEF9lERR7z35LbOefKaviLDPU3HBc0bw4zYY587vhRFhL8t6JLalueyzYvGZRKg2T5QxDNd0lGWWS67sjaXeJy7JVGCvsXDFIlUA96/cl+TRFXIgqzyxLi/RciLmi2RDuK44UtRRPCb9BHN3JRApzzw/pxNrrMAfUnzxkARTXVlNUgJXtCHVaVR2+NHRZRgazSayOTsrl6acJ68I/PlOXm8RSwVLNIxSve1KIIA1iGAtXQmApR3RRRBAOsQwFo6EwHKuyKKIIB1CGAtnYkA5V0RRRDAOgSwls5EgPKuiCIIYB0CWEtnIkB5V0QRBLAOAaylMxGgvCuiCAJYhwDW0pkIUN4VUQQBrEMAa+lMBCjviiX68f3oXcU3CAGsuzP1L+rAWjoTAcq7Iooq1jsvAXRZ4f86pGMDWEupqDwdQHlXRFHF794Gqeh7780PbEMrbXxP+ao66AJDU8YmvGrJFPDT/j3X81MaKT1yUdUGoLwroqikc0BEJ43Pn85eRwsITbE1T368xbn82NBI6ZGLqjYA5V0RRSWdAyIaaaIaTw5sHE+6DUPX5t4toAf98OKGTk6LXFT1ASjviigqaZ3QoJEmqvHkm+JRFmiUpyVdkiXQjfGcixs6OS1yUdUHoLwroqikdUKDRpqollO3BRrtYu57S0AjPS11RyupQy6qGgGUd0UUlfSOqKXzG6DAxvGUUdA1DZakuUAPXtvRSuqQi6pGAOVdEUUlvSPq6eiG+Myv40ATCFuQ8RlwiqRu6GU1yEVVJ4DyroiimmZeI218SfmhUPJppB+eKHo5MloyL/kC7W/pZTUoRGdbXVwRRRA6OjpvvZSP+KJ7KwCUd0UUQejo6G/Q/9614b7hmQhQ3hVRBAGsQwBr6UwEKO+KJfrx/ehdxTcIAaxDAGvpTAQo74ooqrhcesXbLqd2jvp/GnHAbKmoPBxAeVdEUQFdW+8033b5u7cGroiiAu6rdZw9Hbv426pZfiGjgEJbM9b9ZWE8PSenk9MiF1V9AMq7IooKOAl2SHTeCks1tHVa0+iS74sa8GNPJ6dFLqr6AJR3RRRtaJ1RS8fHrR/5mdPHmg1yTzK7jHt6WQ1yUdUJoLwroqgGeEh27pQ9BnnFroEWJhTOdeP2wpZeVoNcVHUCKO+KKCppnlFLxy55jEHNfj+8dkHWHZrPF7b0shrkoqoTQHlXRFGFHdaWThq75EGDTXnUwEIf7L5k38c9vawGuajqBFDeFVFUQIem57ahlUNJ8qBhyi2Ya5y9rvOw5nXoZTXIRVUngPKuiKICO6k9rRxKkgcPrJY1CW3NuC/yKEsNelkNclHVCaC8K6IIAlhH8KE07ygC1tKZCFDeFVEEAaxj6K/X796YKIIA1ikf3BqwpTMRoLwrlujH96N3Fd8gBLAOAaylMxGgvCuiqOJy6RVvu3xoqdBH/1l8AJPloqphQHlXRFEBXVvvMN92+f/i3sqzAZR3RRQVUF+9w2wlGWI1sQzXUnPPVq7JLV6k1uQib/gJoLwromhD1Zvzokv+K0wPNkswmRkc67AmcUKLF6k1uahqB1DeFVFU0j2pF10OI9+bRPQiTXQuCRzPTRsJTujxJrckF1X9AMq7IopKumf1oks26lXoN9dAJusaMxd0v8mr5IpcVDUEKO+KKNrROq03Xc6roFFXeIEXbaBrEpYFGru8Sq7IRVVDgPKuiKIC7qt1Wi3dRK9gPESugUyWNRs10P0mr5IrclHVEKC8K6KogPrqHVYrSWAnW8eDAp7RAi/yOqNrkiSLst/jVXJFLqoaApR3RRRVtM/qRZfsZC09aGYLvEjomoxzPpDtHq+SK3JR1RCgvCuiCAJSJ6fx7pICYC2diQDlXRFFEKC693+3ImAtnYkA5V0RRRCwOsS14Vo6EwHKuyKKIIB1CGAtnYkA5V2xRD++H72r+AYhgHUIYC2diQDlXRFFEMA6BLCWzkSA8q6IIghgHQJYS2ciQHlXRBEEsA4BrKUzEaC8K6IIAliHANbSmQhQ3hVRBAGsQwBr6UwEKO+KKIKw0dn2TNN/oTxhfa9ynPofnIkA5V0RRRt651snTYcFYzy9t/W90nHof5KK1t+wHgDKuyKKasrenE2SbZtsjD3vk/W90nHof5KLqvqA8q6Ioprje6Pf98e7/L58mGVDQ823dR59Lly2r3sS0ws3orUjclFYVwGUd0UUlSRn8uCZxMcp0PfTcAbL2iVfx8v7nGHhskfjjB8ES2fkoqisASjviiiq4HPRuOSZxGfJL7NDIjthWdA1WtBhWdRRX/AE26InBTyRlSvB0hm5KCprAMq7Iooq9Gz2PJP8POWsdVF0tHDH9oXbC/wKP/lVXaCAVmjxQbB0Ri6KyhqA8q6IooL0TB48c/g1fYxBLGbjBQl5dt/nUJ62sMwt5EAmAdn6a3JRWnsAKO+KKCqgU6p6c55J/J4+xmDRXF9CQuPLPi/wKEu2blsc6IRSrgRLZ+SiqKwBKO+KKNpQ9eY8k/w85ezpSYGPusbZ931fsASb0HyNZSI5F6K1I3JRWFcBlHdFFG3oJQZZtCQHa/E4aN7gQLbmN6e126K+oBljJuuWwiMvaP6NcPGEQnS21cUVUQThYx1fS3wBQrUXAvuGZyJAeVdEEYTPdZtr+92bAPtWAliHANbSmQhQ3hVRBAGsQwBr6UwEKO+KKIIA1iGAtXQmApR3RRRBAOsQwFo6EwHKuyKKIIB1CGAtnYkA5V0RRRDAOgSwls5EgPKuiCIIYB0CWEtnIkB5VyzRj+9H7yq+QQhgHQJYS2ciQHlXRFHF9dYL2l2++GePNfP1v5a8aGlHKirPBlDeFVFU8bu3QSr65nvTYEe7y2G0r0vjiGQ6nuqYGbqsCzOzy5vcklxU9QMo74ooqpDzatDukowi1YjRyTWDfhbWnA79zA25qOoGUN4VUVTRPql2l+LjW5CZzZ9PzeEnTWkiKy36mRtyUdUNoLwromhD76Re6sZT3tCL42Gge/J83JtASx3aiTtyUdUMoLwromhH66TaOrHRNcwpTRRb0gxfoKlCSx3aiTtyUdUMoLwroqhAT6xBK4kQ3XhyINdgt3F7Pu6NJ/Ro0c/ckIukpRhAeVdEUQEdaNWb0+5SlCNdA2GtJCFlXLJtwjkd+pkbclHVDaC8K6Koon1Q7S757DlbIr4yndHqkmHLNLnldHiRWpOLqnYA5V0RRRCAujd3UwFr6UwEKO+KKIIA1P3uzXBFFEEA6xDAWjoTAcq7Yol+fD96V/ENQgDrEMBaOhMByrsiijb0Et90uf5BuqDrxf/AvfnfvjctlZy1AyjviiiqaZ7Uiy4v/wG4oOtFyWY3zIvUmlSUfhECUN4VUVRStrbwosvb7Syj79w3jfu84kVqTS6q2gGUd0UUlXQPqt8l/XXTfx+ZMwvEMkMNJNY5JfR4kVqTi6p2AOVdEUUV7ZN60SUZ5Sr030r8Q6u+aR8Z6MFhlxepNbmoagdQ3hVRVEDX1juqF13KNXBkoxbRUo9F/tGBlnq8SK3JRVU7gPKuiKIC7qt1Vi2dQD5J96uxkZ46LIsc/u6NaWm5r9ZZtXQC+cRp97BckQ/rIt+bBLTU40VqTS6q2gGUd0UUFch56aTkRZdy/stF+Gc8OOG2qYHNmrxIrclFVTuA8q6IoopxWM1EHRuwkcTrKIFYPPSRHhY0eZFak4uqdgDlXRFFNc08QJdoYC2diQDlXbFEP74fvav4BiGAdQhgLZ2JAOVdEUUF92vPOehyetMCUelWN8xBSzG5qDocQHlXRFEB9dU7qIMupzitENXutUMctBSTisrTAZR3RRRt6B1UVzf+H77k8i8Y8rU5oDUrZim6e92z6ZZu3pZUVLYCKO+KKKppHlNTN05dD54vTSYzkEifMrtMdEqvN+jmbUlFZTOA8q6IoprmMTV1/EU5l6+AV6QEzSzgkbdsiVaXhRbtxB2pyFsNAJR3RRSVdI/pjY5z9ZboaYFDc0nWhYkmd2gn7qhEeTuA8q6IopLuMb3Rce7/k3vL+wGUd0UUVbRPqZnHPv6E97aOvGV7c9SgQztxRybiVtJ+AOVdEUUV7VNq5ulX5buRwQPekIkn6xJPbGzSTtyRiajTvB1AeVdEUQH8kEQoX5e/tQe2QfdDsSbLkga22KKduCMVWWshgPKuiCIIYB0CWEtnIkB5VyzRj+9H7yq+QQhgHQJYS2ciQHlXRBEEsA4BrKUzEaC8K6IIAliHANbSmQhQ3hVRBAGsQwBr6UwEKO+KKIIA1iGAtXQmApR3RRRBAOsQwFo6EwHKuyKKIIB1CGAtnYkA5V0RRRWXXyIqNlkPC3m76iKt3NPxY3LRPy7viigqoGvrne4m6S5ha89cH061p+PHpKLybADlXRFFBf3TLZJEYt+RZzTnj8AzCXhuSTrnTQ3XJydwGJLvvKQoUdQAlHdFFBVQX1VvTp40jpbPlwYdba5qC6+jJPH2ZUf3dW3AjoB04y25KC8OKe+KKKqozuVCmiXv09M/dOhza8Zcyj6yYPu6IgtzMkZZiSm23pGL/nF5V0RRAZ9OL1PHJ3rM9NDvOZ6+uK4Zc4GCGemoOQNZSym23pGL/nF5V0RRwfZsJkUOvS8iVY2nzG3GwwgMXbadJZ1jQ9cyiq135KJ/XN4VUVSwPZtJlTMEIlLVnMtLFsv0nuSRPmT1d28VdDhVb06aJAaWjI8I14vgNUJT70m6rHky4Y+ucUpIsfWOXPSPy7siiir0ePbkWWyQQ5YZLchcX9I1CZYF3beIR0u7KSKKrXfkon9c3hVRBOED3fYCDoEZz0SA8q6IIggf6PivD7gdAqY8EwHKuyKKIHyk+yfXhvuGZyJAeVdEEQSwDgGspTMRoLwroggCWIcA1tKZCFDeFVEEAaxDAGvpTAQo74ooggDWIYC1dCYClHdFFEEA6xDAWjoTAcq7IooggHUIYC2diQDlXRFFEMA6BLCWzkSA8q5Yoh/fj95VfIMl3d+Im2kz7+GNCj2WKCnIi2kn7shF1ekAyrsiiiqut17Q7dLyju6Nm+lW6ifuSEXl2QDKuyKKCqivqjenlTSwvIc1KhPmBHkx7cQduag6G0B5V0RRAfVV9ea0kgb0V8asFi+LPGjeMufA4YwtzbQ9uahqBVDeFVFUIIenk5JW0oBOXT40ELzGgX04TX54oJHQebuUjh+Ti6peAOVdEUUVcl4Nul2yTY6fX+FwDeZMn7Y+A550aCfuyEXSWQygvCuiqKR5be0uJS+7N0GmY5BoTeB5k3bijlwkncUAyrsiikqqzla6XXIeX4GYObwEBi3weEu4JFW0E3fkomvHVwDlXRFFJVVnK90u5ej5CjwcAT1sQaAFHu8JtNihnbgjF81mAwDlXRFFFVVjF9p5jIg9XgNPE+mSwJuS0KCduCMXabchgPKuiCIIXZ3+7ZF8ii6B7BFL0pxKLFGDduKOQnS21cUVS/Tj+9G7im8QAliHANbSmQhQ3hVRlGL/cVruPaWRIjxkpN9U6DTw5OiliFxUHQ2gvCuiKEW6Gs/GuTV0wsNF9k2BRv2Ao5ciUlF5NIDyroiiHGqKG9sfXEfHPFQN/758xNFLEZlIjkbiJ4DyroiiHGpMmttm93TDw39GxcmBDF7FAl2dD83gUWcbGik9MpG2JJMHgPKuiKIcOSMNalo68tCRm1cugXbkdQvHx7bpR4PLYoNWUodKlLcCKO+KKMqRc9KgpquzhxjpORd54A27GZ7LaJuEzLe0kjpUorwVQHlXRFEONcWN7Q+qp3OfGHlBRxlohwed04LMZIdoFRsv6PgxhUj6DAGUd0UU5ci5aVDT0bFHfWKkp8xpxuuy59v00FEWKdSxppfVIBfNjgIA5V0RRTl2bmV/QktHHnOKlh4yZ2TBVvgCxzBX5ki5W3pZDVIR95MBKO+KKMrRc+LT3NDT0ZmLU7006pzxiW7rQ5dlrVWsm9UgE3E33FsEoLwromhL2tpCS3dN2mh1+5rVacV4kVpzJgKUd8US/fh+9K7iG4QA1iGAtXQmApR3RRSl6IWv957SSBlYlo7zJa/gNeeSoSutdohm2p5cVPUCKO+KKErxM+RpSSNlMI9+HdYKI+LYxoV8J6GX1SAVlb0AyrsiinK0qc45dXR3oXst4nE8fGeFVi2jQSupQyaa/YQAyrsiinK0qc4xdXRkojz9Q7r8WbVIt32LxttEgz2tpA6VKG8FUN4VUZSjTXWOqaMjE+XN53zpUmFMaE+WeMKRZPFkrpS0kjrkouUrPACUd0UU5WhXnWPq6EikPzxx71qBYvrRtVsWz3ypopXUIRet3+EOoLwroihHm+ocU0dHouVncqkwQw14X5iZvlTRSupQitJeAOVdEUU52lPnmDo6Fuk9KcuGwJE/OJXHAUXr1oZWUodMVPcCKO+KKMrRnjrH1NGxiO9BjO7lSHeZuTkGjTxrLtT0shpkIuoj7wVQ3hVRlKNNdc6poxMRfzjdvbIxkXDZoHDNkvmGXlaDVFT2AijviiiCANZVvm4pWEtnvQDKu2KJfnw/elfxDUIA6xDAWjoTAcq7IooggHUIYC2diQDlXRFFEMA6BLCWzkSA8q6IIghgHQJYS2ciQHlXRBEEsA4BrKUzEaC8K6IIAliHANbSmQhQ3hVRBAGsQwBr6UwEKO+KKIIA1iGAtXQmApR3RRSl6O996+9/KY2UG5dfK2eoq5dfOhVdabVDNNP25KKqFUB5V0RRipwQHeE+uaEbzKO/ai8Rxzau5DsxvawGqajsBVDeFVGUIwdlQUlHNz002GcuzHE85sYFWrWMBq2kDplo9hMCKO+KKMp5cVAdHXnERl4OeNUD3b5trLuXhZpWUodMVLcCKO+KKMqZTe0PqqMjD+Xpf1yW/8Zc/GMytnSJJxxJFk/mSkkrqUMumm0GAMq7IopyrKnGOXV05NEfmU3vWoBizpK15WR0Rx9bWkkdctHyFR4AyrsiinK0qc4xdXQkmj8yZy4VZug5PA5mpi9VtJI6lKK0F0B5V0RRjvS0nFxOR8c+vSd2TrFX8HVd++J74/W0F0B5V0RRjh5SK1XHEjIV98YbczpDCSRet3a0kjpkotlPCKC8K6IoRw9JT7mko1OfBBfrUojwTd2gcM2S+YZeVoNUVPYCKO+KKMrhHG5um93RqU8fF6kuSq1lc33aZN+M0Ezbk4uqVgDlXRFFEMA6BLCWzkSA8q6IIghgHQJYS2ciQHlXRBEEsA4BrKUzEaC8K6IIAliHANbSmQhQ3hVRBAGsQwBr6UwEKO+KKIIA1iGAtXQmApR3RRRBAOsQwFo6EwHKuyKKIIB1CGAtnYkA5V2xRD++H72r+AYhgHUIYC2diQDlXRFFEMA6BLCWzkSA8q6IIghgHQJYS2ciQHlXRBEEsA4BrKUzEaC8K6IIAliHANbSmQhQ3hVRBAGsQwBr6UwEKO+KKIIA1iGAtXQmApR3RRRBAOsQwFo6EwHKuyKKUvQXv8svgBkN3QY1cK1WyR2fG5RUVLYJKO+KKEqRrqi5fXJDt0GL0NArueNzg5KJuM20CqC8K6IoR85Qg5qOrkZq0EE0S+74vCUlE1GLeZuA8q6IohxrqnGGHV2N/NG1P8CNkjs+NyiF6Hv/vvGwT+7oSkYRcmitTskdnxuUXFS1CSjviijKsa4ap9jRlYwS+qPTz406fkwlytsElHdFFOXMpvaH2NGV0I3xpWmtfckdHwuMUpT2CSjviijKoZ64r/0hdnQlUksevZI7PhYYmajuE1DeFVGUo43pSZZ0dCVUwg6iV3LHxwIjE9VtAsq7IopypKmquUlHV8I1+DMerZI7PjcoqahsE1DeFVEEAaxDAGvpTAQo74ooggDWIYC1dCYClHdFFEEA6xDAWjoTAcq7IooggHUIYC2diQDlXRFFEMA6BLCWzkSA8q6IIghgHQJYS2ciQHlXRBEEsA4BrKUzEaC8K6IIAliHANbSmQhQ3hVL9OP70buKbxACWIcA1tKZCFDeFVGU4he+T27oNtxq4YQfk4oufyXuAMq7IooyvKuiO2OfsUOLXIdP+NygZCI6oLxPQHlXRFGONdU4xI6u5nphjZI7PjcomYh6zPsElHdFFOXMM9wnd3Q1UkVrdUru+NygVKK8T0B5V0RRzjzDfXJHV6JV5vNjIeLghFxUtQko74ooyplnuE/u6EpGDf6hWhJ/yucGpRAVRwMo74ooyuGm6Cj3p9jRlchd0U+35I6PBUYpSvsElHdFFOVQT3KG2+yOrkRrzYL7kjs+FhiZiFtM+wSUd0UU5VhPjTPs6EqoBl+WFGuU3PG5QclE1G7eJ6C8K6Iox5pqHGJHV8I1+MOqRskdnxuUVFT+VwFQ3hVRBAGsQwBr6UwEKO+KJfrx/ehdQf4Q/Pg/4Hdvf5Pfvf1Nfvf2N/nd29/kd29/k9+9/U1+9/Y3+d3bX+S///0fI/rAL9W688oAAAAASUVORK5CYII="},48035:(A,o,e)=>{e.d(o,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAooAAACzCAMAAAA5QM3yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAP/bkIOAVDo6AD2A0QAodpDb//Dw8Jm0lQAAMDpmZv///z0AMLZmADoAAJi00QBmtv+2Zma2/zo6Orb/trb//yJllToAZm1lMNuQOmaQkAAAVGYAAGYAZmYAOpA6ALZmOpA6OgA6kCJls2200Vab0ZA6Zm1IAJCQZqCgoDo6kAAAZv//tiIAMJm0s1ZIdgBIlTqQ22lpaSIAAFYoACIAVJmbdjoAOjpmtmY6kINlVJmAVINlMAAAOgAAAACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNmZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///ytxp5MAAAA/dFJOU///////////////////////////////////////////////////////////////////////////////////AI4mfBcAAAAJcEhZcwAADsMAAA7DAcdvqGQAABVHSURBVHhe7Z0Pm9w2EYf3oIRCuCSXUOBKyEGgDZCjcLS0QMv3/1po/o+8six7ba9ub97nya127dGMNL+Vtbb05PDTIOiCkGLQCSHFoBNCikEnhBSDTiApvgyCcxNSDDohpBh0Qkgx6ISQYtAJLMUfDoef8CeT/PCPly8//PZP/C4I1kFGxR+alYhS9HzfbhoEo4QUg07wUvzwq28Oh0++/foAV9/sDVzAf/ZFev2QLuS/gQv0H1++TMfgqp4+OqRP5IwgWEYmxaSlH5K6vvoGxObfwNHvkyY/wCsID6T43y/oII6KckYQLCSTYtLVpy8+IXH5N5/+Io13X33zCb7iEZAiAGfCPzmDPg2C+WRSTPpCTaEU3Zvv0zU48cm3/8KLtUgxXZPhCo1y5DOwziBYQJsU+cpLryzFT1+IDOFfXJuDE2mS4rd/S68JeuULNA6ROEVM/+SMIFhKkxTxjvZXf0+voDz+2QLq+/Zr+ABGRDkjCBbCUsSnLeNSxDs26YOvvjkc/iFzRbD5UTqYPoRP6IwgWIiMikFwZkKKQSeEFINOCCkGnRBSDDqBpBgEZ4ek+JcgODcsxX8GwZkRKT4PgvMSUgw6IaQYdEJIMeiEkGLQCZ1J8e6BCws4xXY+dW+Ppx39MFuKt4f3XFqP28Ph8L9nUAophhT5LQLKOAwVd/XXYaGd+7eHw8df/u4zfjvk6tdjRyZZEMwRVy+wva/57WJmx1Ls55O4k6/0Gv2yN8VR8eZV+nOb99EJUrx6kdJ8c/g4Jrib5dlYp8v/kNJ3//ZULc6PpdTPJ3D/No2nVy9gUL0sKUKCcMCApsG4lgA1Xf31Rr57jfyevqgw9uH4mF7TZT7VjbXwoJS8wEG+OKGLu8MDTgeu8cT00et0LvY2ne+jcrYFHxOAFJ/fw6h9naojaYCTV9cozzTWHD5PubUI1Nv14RWMbem0JbFoPxdqTohfF1WVazS8f/fMYknBJcP0Fz31TV2KyB2+s1HxTdLUnK8y5pig8REycvXm3bPnt5Cl9IFVdktpgANX372B89AthXL9+XfPxqJKsG3ZRxWu/vXzW6gULXCQvCaNoUIwRhcBe7uBVOMpC2Jx/Xxcs/m1qKpIP98mnxoLJWq9kXdDxqVI/ZSgZmnjrlKfmU4bcCmi8RFqxiRxLUdSpE5FR2RM5137UWUQVYJTWPZRhat/4GTegAaScgiuFnER8Mc3qBA0nB+L6+fjmtWvi6qK+AdDjQW/UqdPPvagLEUe3ukaQdcGbRwVGhIsWIq4U+HF13IkRbaAo/48ulwmClElyHbERxWu/gEuygCIA8ooD/WacGVWCgnJhUq0xWL9XKhZP/FR1RD/YG+xwID4KAbF2gU6gVdBapY2rtipNTghVhqmZq4US1El2tJfQqr3tQE4Lm8pRVNXTYqDqMZgb2hoNmlEfByDYl2K1CD/VwsNCVasm6kE1ftaJi/QfLXkenw89JfIUjj0UQVPAafDc6FKnKkx1hLxVr9AT8RSlaL5bWgBQj9b8Oehi+X2vevfnqlKESXA97RphEgd35xghb6V+FMEf0VDrb6WIyniFeX+HfxsgZOvXtBEitNVjCrBtmUfVfCUu1Q7/sJAEaAQsBaOfnixFiliHPj5/FiqUjS/FlUd/KFzgzdIXSzp5zRV2DslKeKtVwwfJjPvr15gk6AMOYLZDUxfrO8mwZsLKB2cHSVLVwt+hNMyuGeRgC6HEF5j4lIJbuu8pgki1lKIytsWfFThuRg2GMvgAwJgS43eIjBvN3gzB9zOjwV9oNtSza7XNKoJwAJla7EkWu4h9EBxVOyEhvHs7LiBrQNo/BzwWB4kdizFRzHF6UqKMCp+/IymjApOEh4DnUoRri+P4boC19N+vjFwKeZJNEOTj4kZSif0fIEOnhQhxaATQopBJ4QUg04IKQad0CpFfgTQGX1GFSyiVYrZ3Sl4TFC6mSrc7fWoSaO6lkcLdHOt6H46qvxGiDHVXmTgd/s+qEQ12gczSS6ablVdvVjh9mpBivwgbHAzyt04nb5puttopVFlt5pH3E9H5VYROLS95cNG5mC1PijnYyoL4n4q5hq4wGy6GTeH//15GynSE7fhyiLX8unHIKulYQqNakspanvPI8VyPqayIO5PkCItkPqyqnhmjYdOo1LkQJLi+RogAxB/SeEdPWiCD60Ez0kesjTY/g84yHs4nAUuBhjs4QAntLPESmrhatGobl6BY84Wu8dIqWhRlZ6PqA/bt2O2WIIy+E9w0ILaJqTZ6s1FwOelOUDqD+vVJiwfGr1GZT5wekH7gOAdui3H3MjVv+GvWzM0zrZSpBis02xYlO+j27mhJVwGcveGup9x+z90D4dZlPZw4BDAO0ukZBZWi0WFGwrZRzYg4Tpbi8p8GM5Hvm+H9s9UR0WzTbDfQR9gLXpemlbdv/342ayF1ZoPH302KrrVxHSy9sEJoyLpqwspuoQCsKAPkU6wnRtaoqF0sBjELS/VPRxmq7ph23xniZXMwmpJcFTkg4XppQipsKicD8N84DI/SaamsSpFtU2Q32EfoJWeByGm7M5SiOQjiz6TIlZHdT4FKWrbucAdk16sxA3PTTlOrJUbZhbWVL7m4G9hKJPcpOQssu7hYLwPTYPsgbGovA9Dvblkim2iJkUXqfj1fWC1yHlwdKkUs+g1KvXhor80KQ5jkGFxKykOOo2GKCk5izw0iqokRb1qWVTjiUFvdBgqcVe8uhQBifRIir6WBJwH71L4Y1UVkXxkRhKV+aDDdPIaUiTTIxmU2FaKnHuHNF5eKUiIQktsVLlAc8PM1hbKcycq0ptUMgurBaBoChdo6kn466Ia+jDASJNptolJKUqk9GLeslqAdAK8S+GPVlVC8+Gj56icD/wjMwEOaZ6jHGwIt2aCbaXIo41efRIyL+PUYOKx6VbC6XjpZwvLR0RkFjihH+zhQHlSfVoyi1yKFBX/bKHPWRJoj74tKvNhOB+Yt9R8Z2vtpdGPdoxIv5gtvKFmqzcfgZwHLhZJEZrpo+eonA+snvcBmRQt5tnApFTqqbORFHlGQiFkUsQ+gDsVPD3CImbfSnDf5uE2m4zZ/g+c1lCCzQJvOOBn6BkTBwfxqJXMwtUCQFR4g4SO2u4Q+IT3wFhU6sNQH6ngd9yQLbrlXoAytUyliEdzv+bNapHz0MX1IU37mtXh86HRW1TmAyqnfUAuFhfzfFJP511VxAd4AsVRcQz59s9kja9MhYVRBZ0xS4oL2ViKwWWwgxRLzzeCYMgeo2IQNLCVFHkqC+BvjiCYIEbFoBNCikEnhBSDTmiVYttN972ZjCp/Ahn0TKsU+ekuAY8O3EOYI/bf20Ic+50nRXnSN2SqvQg8NHLeLmJvS+ueldjbkkUFnOq3/GRY2zv14DhzPxrLrMfPiXI+prIg7ud6c9w07llpPW+C4qgIj99laYHgWq7LA0bZTYqDfGwjRVsOcRYplvMxlYUVpJhofVC27cocWh1kyyFkAHIPv+E6QE/1rQRP38+wt8X82lG9TEG98BlUXnr2oz5W3ttSanm5ljqWD41eo7JIcXqx5t6WRB9SpJVYJkUbgOT72NPeFu/3+P9AodWMMHE0H4bzsfLellLLF46KqYK997YkepEiN0bg1YrWCR3tbcn8Hv8fKHgWqNb5MMwHLcfmZGoaq1L0y4LIm4ul1PLlUtx7b0uiVWKt59WYIUVtOxe4Y9KLlbjhuSnHibXypcwsbBksX3NwcR2UKXVSchZaC0DBZH7dUUkIjHTXqWLvw1BvLpm6Y8Q1vJRWi1S8uVgKLS/XUkfykUWvUWmkLvpLk6JllJBhcSspDjpNdoxQyVnkoWFUmV93VBPy3TO8lI4nBr3RYQh0nb0t60px770tiT6kyLl3SOPllToXotASG1Uu0JwQs8X5D8KdqEhvUsksrBYAo8n8uqNaxfUDRT30YcCpmkwqcBqlveNpZTf04mIptXyBODQfPnqOykWKf2TGIC2f783TKrHW82qMS5HGQPvZkuBhUVKDPxmw6VY6194W77ckxZuPP8ai+TCcD8xbaj75PrpAw+g3Y29LseW+lkY0Hz56jspFCsVV97YkJ1lHjbORFHlGQk3JpIh9AHcqeHqERexhK8Hdi/33tji/dhTufCTw8P1bbof6MNRHKqy8t6XUcldLEz4fGr1FZZGC3zX3tnjHNVrPm6A4Ko4h3/6ZrPGVqbAwqj3YuOWXxSwpLuTpJiSkOIMdpFh6vvE0eLotX8Ieo2IQNLCVFHkqC+BvjiCYIEbFoBNCikEnhBSDTmiVoj626IrJqPInkFuzr7dLo1WK+NhNgEcI/PCiyJPc25Jo8qYLeomL2ANz13jTqroHpiBF/vE7+OHrFtsMBFBgtzE0XwJ0st/y2gFt72lLC4wszNGY53or520qW+L+hLbh2uDraS3e1PfAFEdFePxOqxQM1yJdHjDKblIc9PM2UrTlEF1LsZy3qWytIEV6psRrZerUHj+NSpGXNtlyCBmA3MNvGN9pzYeV4On709nb4tqm3tJlPtkML4nqIyHdIzE//j0wCV15VGOZFKluk6INQPI9i70tedvE29Wbd8/GfST4PIv50e+BGbgZZakUOUhBR2DxGntb0jHXNpUifGmsFiRbPkTnuZhLPbRcimfYAzOcKY2xkhS1TVzgBqcXK3GDclP2j7XyMG4WbkkpXUtwcR2UKSVSchZaC0DBZH7dUenozfa2+LapFK0Ww1ok57mYCz1U9DYBuTzHHhjZUjHFUilaRgkZFreS4qAzrHlQchZ5aBhV5tcd1Y7eam9LsxQBadHGUtx/DwzPm6ZZJkXOvUMaJa/UaVC7ltiocoHmjjZbWoQNDJMnvUQls7BaAIwm8+uOahVb7W0pXqClliP4BHpxMZd6qORtAs2b983RuxbhH5kxSA/N92YM5sUVlkmRxsBsQwEPi5IanB9gk6z0VPa2CL5tJSnqxgP1AW/ovEvZA0O/87KcjDFTijzToBAzKWLb4A4ET3uwiBFYCe5KPIG9LYK1Tb25WsCCLNWHjwo+vIA9MFwLJqmGD7BAcVQcQ77VM6l9FVZgYVTrsE7bNu6hx8EsKS7kkjs6pLgaO0gRxu/8ing5rNO2S+6hdvYYFYOgga2kyFNUYHI6GwSJGBWDTggpBp0QUgw6oVWK+tiiKyajyp9ABj3TKsVsERA8GuCHF0We5N4WXTq7gIHtuv1Xif6UmD13jTejYm9LM+U1AdreqSUDx+7bFxlktqPtqNVXzttUtsRVe6RHxN4WYNDPp/ot58OWQ3QtxXLeprIlrk6QIj0r4rUydWqPlUalyEuWbDmEDEDuoTaM77SWw0rwVP1J7m1JcLPV1ltU/Saky6QdS/a7WN7Um0ZvUcXelqeztwUhW7Wo+02wrbWj1GsNo2I6Ofa2QMktBzVKOzcueW8LQueKxYTfBNm6dpR6bUIwkrfMW6YRtKdK1pXiYKY0xkpS1DZxgRucXqzEDcpN2T/WysO4WdjAztcSXDQHZep+KTkLrQWgYDK/7qh0NIx0u+1tcbZiMeE3QbauHYVeK0bgkLxl3jR6jcq1ci0pylaJKZZK0TJKyLC4lRQHnWHNg5KzyEPDqDK/7qh29J57W5ytWBQsGWnlilKMvS1QYqPKBZo71WxpETbAnaNIL1HJLKwWAKPJ/LqjWsWOe1u8rVrU/eqLa0ep10oRODRv3htH7+LBPzI7kB6q11xnMAeusEyKNAZmGwp4WJTU4PwAm2Qlv8dEKO3cMAscrS5pb4u3VQvvVzcZqF94Q5FaO0q9VorAoXnLvFH0Liooxt4WOI2SZBZ4IwE/Q89QgvPpqJXMwtUCUI+rXzsKdzQSeHjHvS3O1lk4vypFOB9b5CLVdsze7+Lzpt4sehdVqjj2tmzBwqjWYbu2bdxr/TFLigu55E4NKa7GDlKE8Tu/Il4O27XtknutzB6jYhA0sJUUeYoKTE5ngyARo2LQCSHFoBNCikEntEpRH1t0RZ9RBYtolWK2CAgeA/DDiyLn2tsCnLQ/pcBYfRXg8ZHrgK16o9KiQQSLSS6aWn+3xo2nghT5x+/gh69bbFMQwIDdRqt8CRBSfq6vMc9+7L9onUDWAaO90VZ1OR9TWRCni8Jn4OFyQypb97ZMUBwV4bE6rVIwXMt1ecAou0mxkI9y39uShkcnxXI+prKwghRpVdCXVcUD9FyI18osZ1SKHIgth5AByD3UhusAreWwEjxVP8feFj1v9v6UOzw7nfLeWZTqs/h8BIpaJKQD0omLd6oYlg+NACPFWLEE7nAqseaelat/w19u0SSt540yLkWq26RoA5B8H3va2+LOm7s/hb5z9vVHi1J9Fp+PQDCLBEvRemPBThVD8+EjyEZFt1qXg5IvwwmjIo12jRKbGKQbqEmRGyPoCCxeO9rb4s6jZdGqEk5FRYp8rh7AQqE+F18WAZMtEOIxyXpjwU4VQ/KRRZDlHmui6rjlO0txYubawgwpatu5wB2TXqzEDc9NqUlUKzfMLKypfM3BRXNQpoRJyVlk3SNRqYVLCC70o+M1Kd6+fn73nqI0i+P6fHylBFnMIgTXG4U+KMZSRPKRRaAt0phdy/eWIn1fT2PqAu2RYXErKQ46zZoHJWeRh+amy2hhCXFXraoUb15d/fzdM6jTWyTy+jLLo84hJOZNpLj3nhUyHWlpBs+bTmPqZ4tHGi+vFCR0spbYaPe9LQycpwmhAqeiJsX7/9w+XD8MLYCsviw+H4GHY6YX1xsLdqoY6BhsfQTcIhcz/pF5AgfS7KMARsttqMKz1xMZlyKNNtmGAh6AJK04P8CmW8n2Zhi77G2x87DvUxPI/ugCDePWYA/Hl2+e0c8KsyjU5+LzEej2ALWAN6xIqGrpThVD8+Ej4Ba5mKG45p4VnJRKPRXoN2KWkyUUpMgzEgohkyL2Adyf4EkRFjECK8E9izPsbdHzUmHu/hToy/u30jayKNVn8fkIVIr4GcQHd1wSEtap/zOLz4dGYC2ymMHbmntWMFbt5nHYGzT9FIqj4hjynZ8Jz5O2YmFU+7JxH1wCs6S4kEhD9EEDO0hRnxA8YaIPptljVAyCBraSIs+1gVOns8HToCDFA78GwZ6EFINOCCkGnRBSDDohpBh0Qkgx6ISQYtAJIcWgE0KKQSeEFINOCCkGnRBSDDohpBh0Qkgx6ISQYtAJIcWgE0KKQSeEFINOCCkGnRBSDDqhIMUgOAchxaATQopBJ4QUg04IKQadEFIMOiGkGHRCSDHogufP/w/tPEy4Da84ZQAAAABJRU5ErkJggg=="}}]);