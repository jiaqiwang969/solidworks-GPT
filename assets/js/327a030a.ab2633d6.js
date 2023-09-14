"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[42851],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>I});var i=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},s=Object.keys(n);for(i=0;i<s.length;i++)t=s[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)t=s[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=i.createContext({}),A=function(n){var e=i.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},c=function(n){var e=A(n.components);return i.createElement(l.Provider,{value:e},n.children)},g="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},w=i.forwardRef((function(n,e){var t=n.components,o=n.mdxType,s=n.originalType,l=n.parentName,c=a(n,["components","mdxType","originalType","parentName"]),g=A(t),w=o,I=g["".concat(l,".").concat(w)]||g[w]||d[w]||s;return t?i.createElement(I,r(r({ref:e},c),{},{components:t})):i.createElement(I,r({ref:e},c))}));function I(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var s=t.length,r=new Array(s);r[0]=w;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a[g]="string"==typeof n?n:o,r[1]=a;for(var A=2;A<s;A++)r[A]=t[A];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}w.displayName="MDXCreateElement"},94877:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>A});var i=t(87462),o=(t(67294),t(3905));const s={title:"Find tables from drawing by type using SOLIDWORKS API",caption:"Find Tables By Type",description:"Find all tables (BOM, general, revision) from drawing sheets using SOLIDWORKS API",image:"drawing-view-tables.png",labels:["table","drawing"]},r=void 0,a={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-tables-by-type/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-tables-by-type/index",title:"Find tables from drawing by type using SOLIDWORKS API",description:"Find all tables (BOM, general, revision) from drawing sheets using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-tables-by-type/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-tables-by-type",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-tables-by-type/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-tables-by-type/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-tables-by-type/index.md",tags:[],version:"current",frontMatter:{title:"Find tables from drawing by type using SOLIDWORKS API",caption:"Find Tables By Type",description:"Find all tables (BOM, general, revision) from drawing sheets using SOLIDWORKS API",image:"drawing-view-tables.png",labels:["table","drawing"]},sidebar:"tutorialSidebar",previous:{title:"Find and select specific edge in the drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/find-specific-edge-in-drawing-view/"},next:{title:"Fix or float component in active or all configurations using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/fix-float/"}},l={},A=[],c={toc:A},g="wrapper";function d(n){let{components:e,...s}=n;return(0,o.kt)(g,(0,i.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tables in the drawing document",src:t(20930).Z,width:"272",height:"310"}),"{ width=250 }"),(0,o.kt)("p",null,"This examples allows to find all tables by specified type from the active drawing document using SOLIDWORKS API."),(0,o.kt)("p",null,"It is required to specify the array of types using the Array function, where each value represents the type of the table (BOM, general, cut-list, revision, title block etc.) as defined in ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/swconst/solidworks.interop.swconst~solidworks.interop.swconst.swtableannotationtype_e.html"},"swTableAnnotationType_e")," enumeration."),(0,o.kt)("p",null,"As the result array of pointer to ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITableAnnotation.html"},"ITableAnnotation")," SOLIDWORKS API interface is returned and title of each table is output to the immediate window of VBA editor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swDraw As SldWorks.DrawingDoc\n    \n    Set swDraw = swApp.ActiveDoc\n    \n    If Not swDraw Is Nothing Then\n        \n        Dim vTables As Variant\n        vTables = FindTables(swDraw, Array(swTableAnnotationType_e.swTableAnnotation_BillOfMaterials, swTableAnnotationType_e.swTableAnnotation_RevisionBlock))\n        \n        If Not IsEmpty(vTables) Then\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vTables)\n                \n                Dim swTable As SldWorks.TableAnnotation\n                Set swTable = vTables(i)\n                \n                Debug.Print swTable.Title\n                \n            Next\n            \n        End If\n        \n    Else\n        MsgBox "Please open drawing"\n    End If\n    \nEnd Sub\n\nFunction FindTables(draw As SldWorks.DrawingDoc, filter As Variant) As Variant\n    \n    Dim swTables() As SldWorks.TableAnnotation\n    Dim isInit As Boolean\n    isInit = False\n    \n    Dim vSheets As Variant\n    \n    vSheets = draw.GetViews()\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vSheets)\n        \n        Dim vViews As Variant\n        vViews = vSheets(i)\n        \n        Dim swSheetView As SldWorks.View\n        Set swSheetView = vViews(0)\n        \n        Dim vTableAnns As Variant\n        vTableAnns = swSheetView.GetTableAnnotations\n        \n        If Not IsEmpty(vTableAnns) Then\n            \n            Dim j As Integer\n            \n            For j = 0 To UBound(vTableAnns)\n                \n                Dim swTableAnn As SldWorks.TableAnnotation\n                Set swTableAnn = vTableAnns(j)\n                \n                If FilterContains(swTableAnn.Type, filter) Then\n\n                    If isInit Then\n                        ReDim Preserve swTables(UBound(swTables) + 1)\n                    Else\n                        ReDim swTables(0)\n                        isInit = True\n                    End If\n\n                    Set swTables(UBound(swTables)) = swTableAnn\n\n                End If\n                \n            Next\n            \n        End If\n        \n    Next\n    \n    FindTables = swTables\n    \nEnd Function\n\nFunction FilterContains(val As swTableAnnotationType_e, filter As Variant) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(filter)\n        If val = filter(i) Then\n            FilterContains = True\n            Exit Function\n        End If\n    Next\n    \n    FilterContains = False\n    \nEnd Function\n')))}d.isMDXComponent=!0},20930:(n,e,t)=>{t.d(e,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAE2CAMAAACeIT0MAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAMmhHIs4APb29gA4i2KjwGxfQAAAOKKhoDgAOCl9n62JGT4yE6a7xYuwi2NRKwBji4PN65B1GTgAANbLtgA3VNCzRzIyMouLYzgAYx5VcmOw9ziL1GMAOAAAY32bq3281YKCgrD29os4OPewi2MAAKvCzTg4i67J1aurq3+pvjg4Y7BjANSLOEuCnRxtj3ZwYsvDtNSLY8PDw/bKIItji/ewY4mJiTtdXRVCVmOw1GlNFPfUizhjsNPQyl2du9Hd4mMAY/TBE4uw93pgKby8vJSGY5iYmGOLi4s4Y7Kyskw6F3R0dCtXlydJSpjO5DhhnXh4eN7VvIG40ZaIMFxbWzmMsGM4iwBjsN3e3bGokwJAXWOwsMO8sdSwY2hoaIBkHO7u21CNq6alpdbX1bCLi/rbNrDro87Ozo+qt52LawZFY0RERDg4OOS4ILCLOCxtkEVtg2mas2pSJYrT9j19mUVro+PXt5ZvIL7P11+AsF5FGYrB2WJhYSxlg1uRrNPU01RUVPXfXH9rRtDLwmyxzpaywZGRkXvC4Pb1se/GImeMoXpbFGJVPwpAXnqVvczR0UcxCkySswQ7WI5tFo+5zK6/2DhyktmuIA5GY3VhPE9PTyhde+TauzB/pVJ2qnyyy+Le177K0MrV5Stqi1E5DtLKu5F3Ko+NjZaIXLWQGmhhUEo0C9X19Zx5MujgxItkILjDyNS7S9vUw2yjvaKRc1Y+EtfPvJl0KNrVzBtDTGBWMC50mJe7zdbQxlSSsUFxjYSbqKiop2xVKmKeuMrEuZC70Om+INjZ11GGoQo7VD+AnVWQrTKEpy97oF5JHbqTG4Sou5CntPHGIIRjIC1wk5DH3ypGSRFIZXpkPeXatpmyvQAAAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///0lZ/9UAAADddFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A+TcJrwAAAAlwSFlzAAAOwwAADsMBx2+oZAAAFgVJREFUeF7tnYtjHMddx1WtS1VeLbXFAbYDcWOCqFQIUlRoxaOA6iIw4QpOfQQRFonUQEUfqA0F0qqG4ByPgFtegZRnUwL4CLS0TaA8KhoqyrulPP8Zft/f7zezM7N7d3srW9rdm699t7PzWO187jezt/PbmZtJkuUoRwQkylUEEigCCRSBBGIgt99k8ZEbqkks5Pa9copAAkUggaYSyEfnA31UE0itArLeCbSuCSQXyPwjgeY1gdQqIB3dWjkRHpDnBmovkOtGHBoKJCdNIDUNiPc9oQDIAyICgrchQPKWpAmk5gFxzngckHQoEDYLTSE1GIhHZFyTGQHkkYe/fj7RrrczaDIQl8jITjUllbMQyqcJpOYBcYgUAmH7QCUhjmYN7UMGAKcJpBYCQeeBSlK+EhaCrM0GMq7JlAPi9SG9VneqL3rggRfRptfp9XrjLITNA/k0gdQ0IC6PIiArKgZyMBQIC70H82g2EA1ABUC+UUVADg62R1uIwUHgNIHUNCCeckBSXGJEB53t7RFA0IfIhYjUYiDmM++RdWzbtgEVWYjkPCBwmkBqFZDc7X9XE0gekKz3YB57bQUySi6QC8rL6oImkKYSyChFIIEikEBNB7KwoOFxom905bTQYBGQZVRWHwaYchEICwRv064IJFAEEigCCRSBBIpAAkUggQIgP/jDnu77P8RPlQIg933e7u7uuXODc+fu+ZJ7//kzv+I+xE+VIpBAIZBQiJ8qBUBufxkCrN7y3kZnTnemRwGQZMcg2N5YXncfHZoWhUCSzgW8J72NK8vTyCMPRIikG8tXOhu8P2XKA2EiG3t7nX3ZnTIVAEl2LiTrqTadqVMRkKSTrHee1PC0aQiQBcdZN10qBpJGICbM6qRbEYiGWZ10LgLRMCsCCYAQkQhEwyr3Sczp0hAg06sIJFAEEigCCRSBBPKARJEcIFGqCCRQBBIoAgmkQEbNX54uKZDc7cvU3s9YIDoDomD+8nQpA+JN1zVA0tmZmRMDCizOzNx2jrZLsinS0mUNNFpDgOiYSDp7mV/JIlHBa+35u5xQpLYBMeKQAln7QjIHektnT8sORwxRy4A4wkQYiVhFc+mfP50snqEKnxgszczMULV14wSoRZ14gwJZPEPRVDCd/Z7z1L68zMSVNs8jM1vljbybPFriWOUCYfvw5i+zQQBI//zlJZw5RyzRSXNDsgG0plWpNuCc4dh09iWoq5t57ZuANVm97Rza3h278m7zSInjlQckN11XaqufK+oLIP2zOGsKBYFFA4QzPn83nSWzyvIQVhLvUwtkssI3y8MljlmjgZBlzMy8/MW7WadKNaDPFylnd21A6mX6EDQvxHLHE2RGG4FO0+WLUuXd5uESxyy3Ux0yf5mqyzXGZ1wMRALlgMiGtHYSQbzbPPUCotOX8/OXqaJ8yjhdAJFLLzD5Aa/JUAmuXpDHvW5LA6F3m6deQHT6sjd/Ob2bekDqTPvn6dy5V4SpLFKAa5MF/E4VnTA6VlTPy0ydKu/fPVg9jXR5t3nqBKR4/jK+qNLJkj1TX4IAA+GrJD5dG0C+y7bJ3Is9RHL1bGa6NONCRRvaXzuZvds8tQJCoq6DRNbhz1+eVNyHNFYKZNT85UnVCiA3UxFIqxSBBIpAAkUggSKQQBFIoAgk0GggV/hL2hXdmwqNBtJZ3tvbWz7E1/jmaQwQXg/k29hOoCmYNDIGyBVfxlZwd6r3sL5wI18oLoECuRw1G6wfA6QbSIlwJfqTjJCjxNrJorv7hgHRgJELJOEh6JLiEmZMzVN9gTwk0j0WgGyJbWiEbLQSPLJIjQHjPuJh4TtdddKksy+f5SRIgFAqvbIE686Rg9TIL8PK8WAggoKJGP+VAYLBUM/PIlXW8cR0FoRoB0IJ5sdANMGOPOpBauSXEYU8XCD7XXj0fCD9s7v0n4f+ZGwR1eUYtA4eSdV46VR5jBVAJMHmNAfhhGOW34cEPDwL6XZzQMgsfD8LqqvDrgBCMWaUHSXE7aVjyZRgc2YHKep1j1bjO1UBQjC6qXXXKJDVEwNuBiz2s1B1JaYICO84QGxOc5DmABlgBLrbC4Cw50orTILBw0I4hptMDgiZhGshJqfJ1BggMiIfAlk7iXfPzyLVtZ1qACRsMlmnqgdpCBA2j97BdhceConnLlLt3PWzoLpUX3HS+EBQggE6QDJ3jhykGUDm+GsI6QKWkdWEsQKZRmocEGotZhnZ7Qn8V1lf2zSNBrKhd7lWZW53Yf6N5TEGyBQqAgkUgQSKQAJFIIGqApmz2ko1qh2qDES3SfJku4jcBCBJq4gcAsgF0aWkVURuhoW0isihgVy4dOnSk09ucZhvaSdy10xw0+PeLvId8kjxqZgR7klUBchFRxolfPg8J3LX3DogI3PwLI9iVQKiW9JF7kk8IMkk7poWAhG5QKSSZLOw2DHuGpsXg0c8+L6GJ7zhnjHZMPSE8zdAXF8ODzlxwB1ZWqQdA4SfIj5Nx8DfMTN5cD9+mb1mSycG/dd6cKoBQVv5Dm46BRbCg2El3TUMxEyXyYC8BKNpmu2rEKYDK5DMl6OlzEQcoyXuxCwQOsoSQZBD8KgcBWAheMnY3UnNy6poIRcv/urF379ITDTKA0IVM54W8TSgMhyTc9cAiKRQTAaEcnjZcPICxB4mKyUTcVSmdrAaNgba5Rx8CKThM8IODqDHX3UuBJWB/Dj9+0UKFltIWXcNgHCrsRQZCOXIsqFuFog9jC0lAVH/PGVkWQuhUnxcyxR72MGeyUV/A6cJVQbyVmovg2ILoT+XneVod02WdxgQrqOtTXYYWyr7UyT9AEoBWT3BfwNRzoXxEE3m4m8jmLeQSdw16GskTCDkxHWijcnGJoEeSYDYw9hS9lAqdBTDgCASABlI/+znsrnJTCajqkDeCiYcZDlAJnLX8A7nJWzcsdKH5QOhnGsnBQjCvi8HHQ0CTqdKEVSyGAiZD0/9Eata3EGm/isdHJWBGAUWgn6D/xb9NQqOc9f0z0tvhnII0P5trwv7EFwpvzcDkvlyTCn8KXsZN+JTofr7QHQmDw5CGzmJQIcGIhIg44XzOz4Ff50bTqhKQBxpVEkgXgd49PKBcHvLqQoQKCBQAgja0PHy8IEscuPJqTKQQBrdfFUF0lpFIIEikEARSKAIJFAEEmg0kDhfJlCcLxMozpcJNGy+DG4Eiu6MRmq4c6ZOGgNEH0C0skTWdorunR15t5KF95X11DggGjCyQBbP8PDTcLUbyN+/S7YWSF9XYjJOlszZgpEZQsWuDx4fIhayw/eammzzi9+mRioH5F2/9VfY2NkQ+Mh1XIuqs4gd2WbeEjYK41PhHQAxySY/Bq3uaB6QX/nYv/wTbdIMCFeOP2kK8EC5bHm0DoGslSBggNhkkx8566VSQP7mG778I1/KzzQrEB6NlBFOGfk0WxkSQ70FCFqIA8QmZ+WsQ6QmKgPky948eNun/4Ef8VYgMoQ7kz3HXwzE+lSGAqE3zwlw/CoD5B0f+fQb3/ve38Mj7wJERyOXtCNxgHAdbZPhBsFeXgVikzMg5mB1UQkgb3szGcfnvP3nMANAgEhN6MOVSWG0aytovSUwBkSwT4UtA/1O5oKR/Oq3qZFKAHnHz6C1/O3jf2bny+ByQqLLRQ4ItyZ85Oz6oB32qfAOgJhkk1/9NjXSeCD//sZfIx5f/Pjjj//SBPNlGqtxQHBpqTBfprkaDaTSfJlmazSQKVQEEigCCRSBBIpAAkUggSKQQCOB7K3ntKdJrdVIIAW/utP6r6pjgPA3dxZ/fe8VMWqXxgHRkGrBWIgMG4+5c8+eK26QJgOiFsIDx8kPDF/vAwNC6ezzvqDlQNJkXyyEBz4QMQpItmmUHCC8ape3TtUwCzETEDxvjLOVBtV4IPl1zBwg1ATo35b2ITInBa1CvTH0wjCh2bbDQvLrmBkgeokhiYVQozkpA4H0tqbeGGo/ZtsaIOE6ZuvURqAeWQe9eslc9j3EfY7fzI4x2/YACWSB6Ivesu8hztCyuFsIgG7bDiTt7fe26N9cz7EQ9KwGiLnqmO0UWAj+cYAtZO1r6W3J+UkddrfcPbBbNZU2Almgf9Y+jIXg12bwIL8FwhdaXHh0K34Y9Cd8MW6SxgDJqSCqXRoJZK+zHv6TSf4t1kgg06gIJFAEEigCCRSBBIpAAkUggSoBmVt2vppoXFtUCYhXomXfXSsB8a2iXTZSCYgaxe/+9TM8otYqG6luIT/9Gx+++oEffdbuk/CI4ZinCodNmtG5FbQZluOIvDxlgIQ/kCAmsdl/8NRrntrMIggIajXZOmZGMoLiryfk6si8PKWAhERgEf9z10r/T/tXCUiapC4QOnf5tCeSoLBjkEU6muGmckByg8/J5l0P9vun+gUWwtWSpcjMdBmK5gpT+iKeYjbenEVK5iXJEMYWb+b5Xng4nII1A+ITIQvZXOmThZz6k/c9cRBaCMbQ5JdidLoMaiKr5OjiO+rNwYvjIRgHj8ABiPp33IK1t5D/7ff7D24+9dSHYSM+EJ7tYLpWqgaPur76zgHcNgyE0ow3RyyDhD2eLEA5jH/HLVgvIBowIgt55sZ72Ebe8/mbvaRXYCH4TPmyw1Mm+q983dld1IiBUBrl4eqbMgyCw7TNVkHLCtYKiG6tUP/0rlNkI/TKWwidOVfaTpdZurx252Dx9BJZhgNEelALxCwrBiCmb3UK1glITrjKpMlPbT6n/2P99+csBN2gVNpMl1m78w1UyxcizrUQ9uKYJkPtRJYVoxySQnIK1hqI1j/dPHXqNZvPZBEMhNcxM5WW6TL989SNru1oD2HS7MpmKl0UiHJY/45TsOYWgkcB0uTrnr3+7LPJQbJtgKDls7mL9dM+T5fh64l8PXGAUGBGlyRjrcr0OwDJ/DxZQRybL9a3VoexkEy5iPLi+tdIlYA8RNYh7s0e7CPZm/wQRrb/rIsqAdlb1qdWVcvVnl5FK6gbj2pA2qwIJFAEEigCCRSBBIpAAo0G8qb5TG/SuJZrNJD57880r3Et1xggrjSu5RoNBPf5WA8BL4SnQKWBDFwgfFvLd6P01Zvv13O3aEv6rRw/zgD1z9vb2iK53hjnYEc/5WYMEF2+rPuVf/yv3/qq79ZYGfiwv+JfCMSO8ci681SEF1FXjR7asAc7jik35SzkF775D/v9r/7EY49yrACxY13FQGRQh1J2+LNPZysAIR3NqJCjMkAG6Y1/+76vecvDD//jF2nPKkAUhAcEjYkSdUNavJfHilbZAeOta4ZM1J7EhYMDaCofzKxvVjcg3F4+4wVPfHzl0Ze+5d0vvccBwiMZIRC7jFlmIWcwqooNxXrrmqnzRVw4OIDzSzJocby+Wf0sJO2mnRc8/amVR//zdx67xwJBp4oPPgAiDhTAcICox4WtioQq4mWcL+LC0QNwCoCY4nUDMkjTbu/6x59eWXn0J7/zv+/5mGMh5sO0L5KMfykBjkEK/acCDAQkFYjjfJFsNpXCdn2zmgG5n5eVub6ysvKz3z7/54+9/b8+W+K5cjBr1MO8SMVAKPziXZTx1jUzg4cWiE3lg+n6ZjUDIvq7V/wRIfmuv/jEX77/usQIEKqzgcF1EEa5JkNVfoiqRWU4krsOepkLswViU+Vg0pRqCST5oRu/TER+/emrVx0gRU1GHCrqu9UY2uHfgAIQYuCsa4a85sf+KZtNpbBd36yeQJL3fejnV1Y+5QBB64eVGBh4sZCCsAeEf9MGECk1W9dMnS9ZH2JSKazrmx2VM8ZROSDUbK4/50eevvoHN3S3vSoLJPngjc/6j1f8hO60WKWBJB/40BMf1GCbVR7IlCgCCRSBBIpAAkUggSKQQBFIoJFAtvhm19N0T2R2B9pVBVHt0hggG44WSBGIhlQLZul/GSaWG9Vhwh2rDgI1SBMBSRUID4WMXcfsWzDmcdTDGYfWBEAGabovQPzBrgLZYR2TszlygGAWiD/xwQOCBREViJn4NG4dM2ecqDFyLSTk4QIh8yBt6W8hlFzH7BhGAA8tr8kEPCwQXF8W9ve3tgwQdJiExJv5Qu3HbC0HjmiW/D4kmAhigXBr6fV6cwYIBo7Hr2PGPxjeMI3pVBewoYsLWguAHFggAGGB6NXVbBWIOBIaphJA0lSay9bcnAuEelYDxFxLzFaANJLHeCDoS/fJPshCDg7m5OdDSq1jJl9WGqdxQExvCvMgyc+HlFrHTDoU04gao9FA5GKL3oPMAz+n0v7fUxkJJN7+R0UgoSKQQBFIoAgkUAQSKAIJVAnIJ3V+BPRJjWuLKgFp8zSaakBcaVxbVAkIbmjaOo3msEC8aTT80GDBTX82GSYL+eKSbln7WKMNQEcwfaYaEJ4TIPKAUIUqDxvalVVYRUCOZPrM4SwkzX7WHOI6YeS9isYDId36UfxDABmk3bTbyQPhN/HPKCBUSibAcPUoEY0j8+qwBEg2ZwaP8XKAYo3bp7ZAtLl0L92f3L+tkSTUiQfQ1D+D08eoGlUK0XcIkPC3/53CzpyZGTzjjABKyOEoub4WQtaR9rqdvcQdQ0PXiDN2/TTw3QGIuPAoJL4a2vefiVcgEGrNezxcmy1rpkm3VtWA8DSaXu+dt9NO94pEkqgW7OW0/hmqDVoQbXQCDIXko6ZKZiOyLAWC9gQgaCkggRLmcLUFYoYWd3pU/mBHY6VOqK/UmaRrk3HteALMOCD+nBkDxByutkBU69eSmZk0fZldkgl1QkOwtdS1ybh2nEIhSeQmkwfCLQhdBu+BhC3BqjeQ16dUPk0PXq/7Wgt0lVQT+GeSxR2wwKcsE2CAhhMJTiEQ2pU5M9RC+CuNLYHD1RvIxlaSpjNpr3eBHZ4krhOv12b8NKDDlTITYBCJboK2RUCQJnNm7sUiZ4hGCT0cf5/NLtS3RNWBpO+kr2V0gr2Dvd8Mfg6vyaoO5NqG+LAOtvf2r2lcC3QIC7mm15pO51q0kPYqAgkUgQSKQAJFIIEikECVgLh+GVaLnDOVgMw/EqhFvohqQJ4baOqB5KQJLVAlIDJqiHF3edMIEg9u8W1rCfGNrN7D1sInA91UIOksxrb6ry154ll95dbfqAjIkS1pdlOAGPfdhC6ZSYCQbv3gEFQNiHohrASImUYDiSclnFDj/exMDsix+2Sgw1sIHu6VCGcwWD0p4YQa72dnckCO3ScDHRoI4fCA0Ad6m51AY1wv3r7kpdqFQCCOxx7GFimDKalJt16HBDJgIDqLRi2EABhPihk29fYZmvW9sBSIG29cEFzwiHwy0OGApOzA6ykQHTAGEG08Foi77/teWAzk+H0y0M3sVPWDJiBmLN0A8fet78UHksVjDyQogylJqr+FoLXAo9kz04rkuxMqpp4UAyS3b9YrUwkQG39cPhmoMhA8DAF/N3hk86z4WydVmgOuL8rZR1dh1itTiWnZ+OPyyUBVgcA40Ht0eSKNBdJ8VQPCE4u4tXR5YtG0A8lNLGrRtKJKQNqsCCRQBBIoAgkUgQSKQAJFIIEikEARSKAIxFOS/D8QwAP5Q826AwAAAABJRU5ErkJggg=="}}]);