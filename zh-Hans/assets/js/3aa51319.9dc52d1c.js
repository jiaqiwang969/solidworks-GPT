"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[13474],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},A=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=c(t),A=o,g=m["".concat(l,".").concat(A)]||m[A]||p[A]||r;return t?i.createElement(g,s(s({ref:n},d),{},{components:t})):i.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=A;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[m]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<r;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}A.displayName="MDXCreateElement"},25382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(87462),o=(t(67294),t(3905));const r={layout:"sw-tool",title:"Find-replace text in dimension names using SOLIDWORKS API",caption:"Find-Replace Text In Dimension Names",description:"Macro replaces the text in the dimension names of the selected feature or features",image:"rename-dims.png",labels:["dimension","example","find","model","rename","replace","solidworks","solidworks api"],group:"Model","redirect-from":["/2018/03/find-replace-text-in-dimension-names.html"]},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/names-find-replace-text/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/names-find-replace-text/index",title:"Find-replace text in dimension names using SOLIDWORKS API",description:"Macro replaces the text in the dimension names of the selected feature or features",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/names-find-replace-text/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/names-find-replace-text",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/names-find-replace-text/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/names-find-replace-text/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/names-find-replace-text/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Find-replace text in dimension names using SOLIDWORKS API",caption:"Find-Replace Text In Dimension Names",description:"Macro replaces the text in the dimension names of the selected feature or features",image:"rename-dims.png",labels:["dimension","example","find","model","rename","replace","solidworks","solidworks api"],group:"Model","redirect-from":["/2018/03/find-replace-text-in-dimension-names.html"]},sidebar:"tutorialSidebar",previous:{title:"Reading and changing names of SOLIDWORKS objects (features, components, views) using API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/names/"},next:{title:"Naming for methods and properties in SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/naming-convention/"}},l={},c=[],d={toc:c},m="wrapper";function p(e){let{components:n,...r}=e;return(0,o.kt)(m,(0,i.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This macro finds and replaces the text in the dimension names of the selected feature or features (similar to Find-Replace feature in text editors) using SOLIDWORKS API:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Input box for the text to find in the dimension names",src:t(8738).Z,width:"320",height:"267"}),"{ width=320 }"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open SOLIDWORKS assembly or part"),(0,o.kt)("li",{parentName:"ol"},"Select features to lookup dimensions in"),(0,o.kt)("li",{parentName:"ol"},"Run the macro"),(0,o.kt)("li",{parentName:"ol"},"Specify the text to find and the text to replace. Only include short dimension name.\nFor example the dimension D1 in Sketch1 will have a short name ",(0,o.kt)("em",{parentName:"li"},"D1")," and full name ",(0,o.kt)("em",{parentName:"li"},"D1@Sketch1.")," Specifying ",(0,o.kt)("em",{parentName:"li"},"D")," in find field and ",(0,o.kt)("em",{parentName:"li"},"B")," in replace field will result in dimension to be renamed to ",(0,o.kt)("em",{parentName:"li"},"B1@Sketch1"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    If Not swModel Is Nothing Then\n    \n        Dim fromText As String\n        Dim toText As String\n        \n        fromText = InputBox("Specify the text to find")\n        toText = InputBox("Specify the text to replace")\n    \n        Dim i As Integer\n        Dim isFeatSelected As Boolean\n        isFeatSelected = False\n        \n        For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n            \n            Dim swFeat As SldWorks.Feature\n                \n            Set swFeat = swSelMgr.GetSelectedObject6(i, -1)\n                \n            If Not swFeat Is Nothing Then\n                \n                isFeatSelected = True\n                \n                Dim swDispDim As SldWorks.DisplayDimension\n                Set swDispDim = swFeat.GetFirstDisplayDimension\n                \n                While Not swDispDim Is Nothing\n                    \n                    Dim swDim As SldWorks.Dimension\n                    Set swDim = swDispDim.GetDimension2(0)\n                    \n                    swDim.Name = Replace(swDim.Name, fromText, toText)\n                    \n                    Set swDispDim = swFeat.GetNextDisplayDimension(swDispDim)\n                    \n                Wend\n                \n            End If\n            \n        Next\n        \n        If Not isFeatSelected Then\n            MsgBox "Please select feature(s) you want to rename dimensions in"\n        End If\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n')))}p.isMDXComponent=!0},8738:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAELCAMAAACf0a83AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAOOFAAADmey9s5ybnAD/APq6t6XZtWUnCpr/mlhYW5eR4uNxchWr18rKyuLo7V+9XJN0ZLPC06dFBkxjpM3Y4AAGQO/q4WWw1ry3o9rb2+r+6pOT/7r+usBmYpq+mP26Xevr/gDDhp47K66u/n1yZfDz8SonK77Xsld1vvby7eWYJvDw8EZISP7+/trl75xjMmjH5+S+iZ+51czK/57LL5OisLa4ujn/NgCXttv+28mLhsvP0o5GRYmEhau+13/Zo3OJomZs6lV0jr3U5eKYjHv+ewAAgLLL1jVScEtfgv2ZAc/w+f3pzmz+apaowKR0T93Rx6v+qsnb71O/oY/E2W+cxqRMRLzBwsyaWYB9ggA5mImrzdvb/8exnX2Ineri1or+irZpAv3Ni7PN5+aiTMDT61xIW7q5/uKwapSVlIexUwBFes3W3JCHeqrH4lj+WM6NLyNUpe/Cfbehii285KG71kTQivf49tTKuerr68r/yqOor67G4N/MtJ2yygAyyINGAhAUEBv/EDc3OX57eaOio4GWrJq2vcl2A+mlmIa71HaBkvzv5Ozu77LL5fKTAF5qhNfJbIVkSNjg5r/Gz9F5bP6aFP3ht4KZvUj/SPzVn7bU8O/byLc8Jb9UR/P0/VpXS5Sx0Z+EeQhAYLu8vM/i77XZ5Fx3nshoVPHt6IoAAKCMirPR5p6e/oRtZqqUiceuiXm51eTk/1JZb7L/sliWxdTT/tPU1Eq2yjtzktPd5OHs9LHa6sLMzeL+4tT+07l7N/7Dc+Pe1mL+YpL+k6K81wAZdc6/rrXP6bzc5n3S8LSzs8P9wgAEzXRydgDcWaP+ovylKuDh4cXExMOkbqjR4VGn0e7SrmmMsKW/2oL+gtLMyu3x9cTE/v2vRJO33qx6aYST9Dde23P+c7lHMeOIfISCjqysrLjO6Ofm5d3DoImivygyp+WPG2d7kaetnbOCc9Xe1V4wToIkDqnC3rnR6pq10m17n6a2vdS5kS0r0YuRnIyMjGZkaAAAAGSfKEgAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAZYklEQVR4Xu2dD3zT1p3ATeu0c9ZzBhtQ7LorWylrTnnZVkaYCYFe24zCSBqztVkW/qRktOcbJHdjmaoQskHiQCFJWeko6SgZmTnGcRQGGb4Lw25JKHTOstTeDmJC2eYNz2Rj7TXQ9Eg+9570kvi/JUtWJUffT4yeJP/BX78/Pz29J6lIBV4ggYAkJiDwawsBFAh0Zqd1wpHj1AliEAokhqdUnZ1wVFU0+LEDXqhI4B66ORHZv71YiCwIBVqn7sfvObHYbhVGIOnsuPlQSoMLbQBVaPP2HCEaT5XTmZfaAqtqHw6jEBqs2q6+pOWPyqazdNysSmH6Sm4PI6/2bFUVrAMFIEDg2b6z8IH+odN9MAkzO/4b24f+0Jps6Cu54/lQju4XViBdS/Q1NJT2FTY07D878NDZuQ21DQ0NN2sHztYO9NUODM5t2HMWbtlztnB/X8N++CwkVx4Mltz+GGS+ZeO789Ub56P084dr4Q6hBM7oyUYC+4Yv1g5sPVE6d0lV+v4+9ZK5S2pvLdm65Kz5p1fMD6of2V9ycehE7cjA1T3mg1uX1MpK4PO0QDdwWoDt9yj92OGbcIdQAjdMy0bFdXD9gxUV65+sqah/cuTK4MaDQwcH4erIQzueuVI/ALdMGSndWdFTemvnBxVDj1+pga+QCRUlj/0I8ZQTANuCe+n04Zt9fQsFEqhbOS27bxBSYz6x/7WfD9ZAa1cqGIHmX6x/8vrciztrR/oGF/eUpo9crBiuK60ZHIIJ9BJZUNHzs1cRnzQTlPN9Ovlq20Nwx8+FETgEBaLPqWkuH/rU8JPNzbNKR/qafVBg83/Wlw4t+aDqmYN9I2drppyovb74xNlbDelXmssX/+RKDXqRHCiv/9mfIK+qKauP8H0Wpf/UVlUzWCOQQBsSWFNTs/jqwPDFxSMDqy7WjDQUmpcMLSks2QNNPdn84pPNQzsLe7YP7SxXHzSXFp9QfzB35+/gS+RBecmP9kH+5Mt5/7OWnAUova+tD+4QSuDRadkVzZDB2qrm5pqbVeXNC2GUWTVY9VBfeXPzwprmhRXN5QtrB5tr4N/ZGrgOd9GvkAfnS/78M8S+p5gH4vAg3CGUQPdwNv1B5eXQ1+g/DGgr/Ye3j++mXyEPflyCg78A2gbLm/8ilECdJXtcWQpyo7bkaihzz5eXCymw/C/wDVOXH4dxvvz8+RtCCbSps8/fuNE0wTh/Y+3Pc7ADXqhyrCW0QNw7M1EQTiAAOYpAHkCBTkUgDxSBPFEE8iR1BFJT2bALP1sRGMb2736BBf+ADSZLoM42+hPRHNIRZ9b14xUXhRNRmW5z6R5gkmfE/kWou7/az4JfvcQ8PTkC+8/d0hajk51EPxovA8AhXeb6dSQB042+B9oOADSiBD6vaDHZCsh+kgB7p8B9K/vRQBO4b2Vhho4kQSZcbQv6IURAGgKP7QFk0arDq/o3DV89VVR/K7f2XNbcW+DYo8S5usINO3oOrF6ft5wgnljSsXJ47nMDq2+9+/g6suhjc6nJw4UEsfrFi0ULi3a8VpHZNvxMBv3/FA8okMCSGPzadaQ/u9+WgdcZkiuQOLRhVcemBvK3U+pPb9i6/sChoj3ThzPWZ+SdIhqvNrU9em1rW9XKX5DEudplO3MnP3rU/OiFQpLIfPfUhl9mth0gMje89Vzhpj3LVs2oynztIxDYjw/TEP2r63OPVjy3/7mHmwI2J11gK7iw49J+8OHWHre2qIRs3QsF9q8cLiWRwKMHLtyatdjdQRDXqi48os3t//DbpzbRAjOe+Cp57JeZjMAry0oO/5Jsy6bfUDyouw9QGeM0rRzoX339c/UfnMIbMMmuA08/11C0872ejLbF7l1Hq567tGf61VOrZ0NnjfVTjy6/NjBj66V1BLGpYXrPOnfRqnOFe1dlQIFvnWt472oTzoFXlu24tKrof8XPgW/tCiB7Q2n2mUdmnLi+HG/AfCG5OXC1W9u/ac+lXeQh90v9me5calemrr9xxymCeECXe6Zpegd56SVo5tClDL973ZnsQ7YHLsHGwq9tLXIjYWcy/Lv82Zk6skirY95QPKDAjkDOHcw+d3FG6YyL2XgDQ5IFIooWBo+58a+filOSBgrEsTJDx99Ldrx1rrZj/eIOvAUhhsAwxM5LiUHd/e9Y0ijr8DKI5Ai8EVOgPIAC1wUDFa6DFvEaRhEYDeruX/2OBd/NZZ4usMC18hdITP0fNpTiZ99YqwgMhR5xG49M/GRFIE+EFbh27VpFYIKkjkDKxQr87BtrlwsnMCMVBDb5tDYWWHTM0xWBofitqKcyHiRhZRJQ4HZFYCB+a/ARaBSo5AhcnlIC/dqwvjTX6PcbFbh2uSIwGL+VoGiaVg8XD3fgrRT9R2TmdeCdyRG4PKUEHusjznScM891zTBXZVpuZZ8xD2WWYIGUIjAafqtLR7PriT6da7VTO3nrrPfW/32g6PSsKb/fWp/L7NS5xgQeEE7gqZQSqDtW6lpZbPZNHqp/b716q+vMrELf6WQLPJASAplIT1fUdmvHe23mkaHh94ZPT561cMbV9afzTuuYvWMCDwgrcHkKCMSKIJfwcozxXckReCDFBMZgXGD21xWBgfidflzNxcJlK2aeLqjAplQQSORYfCww+5lnLxdWYHYKCEQjeOIz+qTl2YpAXggrMHsiCjylCOSDIpAnAgs8NfEEnlIE8kIRyBNBBaZEbwxHBO2NiTM6KyURc3hbSqII5IkikCeKQJ4oAnmiCOSJIpAnikCeKAJ5kiSBU6ekPHjUTHIEZq7Fk0JTmEeZrJKkHHgAb01hDjDz7pMm8JxvI96ToiRZIHm9tTFvJt6XkiRb4MMk+PBRvC8lEUHgtQq8LyVJehE+lXn4FN6XkiS7EVFvVGfjXalJsgWmPIpAniRX4HK8NYVZnlSB2QdSHjwHJ0kCJw6KQJ4oAnmiCOSJ4ALx+04YBBeIL242YRBc4PkJxg1BBZbfmIAIKDDjxtqJiHAC/2ti8mWhBFKXJigUdsALKFCBD4pAnigCeaII5ISTwIkx5CtwGLYBThteEQmnahinxpCvQGcOcNXhtFg4bbOtODmKfAX680B66LdJKhaU3W2qkEwv4zqwvseMU+LQQ7syjwRXgzIW6FcJEgmzpp6pAEfc9Jqf/lfWAkkViVPiUK+arYULphC7GY2KQA7Uz6ayslwAuPyAUo9lfhkLBDq8TDa40quvc9fV0b+ZK6DxkrNAcdCNqNLpn6pele4eQdWgdbT4IhSB8Sjx2XJmo2pPnU4CFwVclqC2SxEYB5cKZj83avCZGtca0ouoCIwFjFWILNT0WszAh0xSztHwZRRFYAxcKjXMfT10itKmE4BwhoWeisAYDKvrXIDMggc8lArGLyDHyWwPRL4CRQgCSZAzAgtxj5nw1cOlNbT4ImQrUFeCE0lCZ0GtLZnlg/+MqGYTQOcLK74I2QpUfz7i9xGKYZXTkoUMqnDQlxMY/AUgV4HEa9tQ65gshtExWx190KtCBbfJHKn4IuQqMHfbC4dxMhmQWU4w3EMfw6lhy2GL0Hpg5CpQPWnp55PZjNhU9aoSHfoE+Ag6dgtBpgL7X1y6e9tpvJIULCpnlirLB0uuP/jYLQSZCsx9evfuF5LbIV1SDwgfzHqxsh9EpgJ9k3bvTm4ZBtRsGMEA4EQRdAzkKZD8wdLdu3dvK8arySHXCg/hzGEngkOQp0AdLMFJL8MQZ/yfSJ4C1S8ggUufaMLryYEM63qJgCwFUpNRCYZlOJmxNLChJjgushSYu432t3tS2EALAclh9+uIJLAVL4VBDdtgmvfxBuHx++K1HhhRBGYMHRQ06P3YJNrgC5M+KWQ7nNHw8FScBC4r2xBJFIEPT/vpDpwUhJzija/DNmRDsTWRM5u9vXqcCualaT/9Nk462VeuoghcNe22/zsOnr3nOLh8zwr6Meeek+AkvZwDVtBptESPy+D4Pc/CB1reD2ai9JH7QStKwyW45whohcum15fufiEH3H9/KzhyDwBHjrSC+0eXdBotZ8KPnAmX6GNh+g+L7F//8qJ5XztyZ8H3fvG9eZ/58lr4seijmY8//k+3/ZqxEaXnLzLiFOElf419PMSZDEYgF8iCtC1lJpMeZj9SD6nWVHqMeB+Nv+TX9DvmuFlWfzSiCAQzL+OEUHAVSDp655nSevHaKMZKT3VoXUfmsAlexhFHoOBkvL77bfYC9ZrOsnYSRKj6ussKqnESAmMFl4VjcC5TgdTrb7MW2F3ZYojcbCD0+Q6cglUosHCuasQRePxZnBAKtgJJvWZLmR2vRCHfixPg407u/TspLVBv8ha0R898o1SXMUvdRm7VH418i/A78QRWw3YjTubDVJc17m0EzoQiBdkKfOedt2MJtBu8HhNOx6f7z3fdZaUAjDM5I45AwcOYOAK7uyp7x9uG+Cy766l7H4NROl7lQuoJhO1GWlk7XmHJ7e8v2Hc7TnNEpCIsbG9MLIEGr5dlzTeGS103ed/TeIUrMq0Dm75x333vhE+z6dak9do5hiKUWaWygkwvtH4Eb+KCTItwJIH6ak8+i6AlBOtmFTP8JU0vYYGCx4HhAqtNHhOXdmMUW7qKGbdh6gWJXH03NYqw3pHfG3BMy4FiLcDhH1nAOfci5Crwt2+8cd+owOqurt6gjinWkIGnzT2OCRQHjgvUmyq5V3wYV9CJD4NJwnGg4HUgEgjLXnVXWXWi+kKP3ao9iQRbIhVhoeNAJPCNT5u8JmPC42N0YSPu0xJ5L5nWgf3HvvPDL30irDuZA7bw80ZbJBwHzsEJoej+ly996YcJ9Z5g0MC1UHr/gBNcEEegsHGg3TOv7Ldr1qxJVKDe6LJEOm9k6MIJLsivDuz2dnaT/cfWrPlOggL13Xd+OmLZN+COVU7IrA60l3WWOeC37/8w4Rxo7Oq8M3LUaLiCE1wQqQ4UJA60V88r6GaClv5rr7zyyiU6yQnS2Fut10eJug2pXQc6NJX5KPPRJCbQDsixd4hA7504wQWZ1IFGQ6XHgNOIRASSXXEOl9PwkhNyqANJu6ezLPh4g7NAe6D+KGyR8LEwjzjQ2OXtDPv2rZtefvnlIrwSF0e3pptFzL0lFevA7i35uN0IgoNA0mGqZtXHr6/sxykuiFSEE7tRmF2T743cYrIWaKw2xWo3AunleCaKQbp1oNHQkm+IlnXYCrR3s+6l1hdI+bww1zqQ1JdVevTRs07r3mXLlp3BK1EgDZw6qavLJHxemGMdaDR4K2OXJxIJXI1XIkHCmI9l0cW0OMBxnOSCSEWYSxwIi25XvE5SWmD0HGg3RGp5YlKdjxMckVodaNd481mc34glUO9IpJu1ExpPJFYQqQ48iROxIdsLorcbwUxvbGycjtOBkA4Du6AlhHbUEyPvOpBEPS2sv/shKPAQTgdgN3AdmMDAdAVK97xwa9z/mtFQ0MIy89FEEEhWJ3JinUaf0GEwjSTqQNLh8Wq41fphAvVAn0jRJfO0ABD1zEtlWgfqDZ3zunGaNZnwEdAt74gy+2gcIsrMc10WAOn4yrxyrAPJdk9l3KAlNqSxuzt+5tO9/6JlXaT60eL8hAUnV+AlF0QqwlHqQNhuaBKuuBhIRzerdqNj29JJT79myQh7rmEzr0mzIgmM9BXtBk2sCRys0PcajIAgMjMPURTlR7ggugBs6xiG0BzjpZM+OWtjR8B/huxu8cweGd2QSKebKAI7Gh7chZOjwHajQMO55gtBD+woHtwLuXDtwoVrX4T8M+QbkH8dZRuGvkoAcvj0ZPMuWpk+v92j0T/jamIuLds/949T0JIbogi8/pXvX8dJhjJN5bzEhqMFAbNvZmNjJjwoWfYy4hXIGsgbkPsg7yDehjDuRkFlGV3HWJO2xQissACr6QucTJn2zTfpt+WEKAJvTXvz8YApaGRnWhrfoouXiQr8vfpzmkpNpwmQ9LlRN8qCc1V4uisnRBFIrvprwNTy9s7eFvZTOCJAGsaDRliCG+Fx8d4LiDWvvPLF70BQMf4W5B8hf5vE8DdscekLT0+26Hq99DGjNnCAQtPIg7k4yQFRBILW8erZ2MUvatEbTe0BQQsJge0HNdZ22CC5CO3p3NMvvQT/IMXFxUPfWkrnvRfVp+3tlRqmArElYCwEcQSOQZoCp5dyR29oZ3N6KAJ0GDPZYrO3e/PHfgEq+LJ2Mhgjnc+r7ML8Gz9ijoLuBz+w6FrJrrSgY5bgEFD6o/R7+fir5jqBJgjCBrNvZWXICVJd0ChByY+RNiXsj4RVfmJFd4x2T2eESTgRx7lxQcwinHD+M5r4HrEYTfN6I4btQZc2lvgY6QTzn91g4nnEQpryx9uNEIKaEWlP9UrMn17Drq8gOvqulliTcHwB7y7t6a6VnOfCwK/WzmJMUCz07ZWdppjF3xZyly6uiFYH6gu4ZiR7L7+sB2u+iO1GCPRxMIOE60AAPNwCaKMe8OwoNJpaOtl8ZsDdHqVchI0tOMkGIdoNT37sojsGOdofLeU48Piz+eyN2MsSPDc5hl0Ts90IYXzCnISLMNu5pKS9m283q97g6TRx+QHGexQkLJBtDGMwcG6rgyAdZZ1cf4HxUFDCceBn2Ix3SWiAYxCmLQUJzJ9T46WUG5HPxGtSYQlPeNovA+nwtMQ9OxyZtkacSACRinDAJdIiYewy8Iz5jJoWb6Izh+946s934CR3xBEYsw3Rd5t4dbLCt+/O59ZuBPP8gnvvovOghIvw13AiBH03cJja+QUtpEPj7Uq05SaJHGfexxYs2LcXrUm4EYks0KHJT0t8xj5De5o3Xl8XFfWavLa6zSpVz5lX/2M+vSrdMEZfiRMhGPk1vLDdqNTEz762rCi9pk0lUF9AZ4L8BJK8oj5T/HaDQqdTnarxo7UAbGqnTWUL9C/hLv0odWDikNXesIvyhmHLoq9KVFKymVkfh6S0vvB+LJkH0hxw9HrDL2AczmY1KrtknTbk1vyEzedzRXi5hA/loszYSgyD1xsv6GYuET87T5dDAGozaVb9hN5AQ/p8/M+njyGSQIcHJ/hCOkydZXF7CqkRemFT1anqSLeqro6+tyiC0FksUbOuhIvw14URSLa3eNkcrumYK9pp1ZTfYunpcfqxQJvPoo1R8iUcSA/mx6+x4mL0pmlwMio2VTr816oau92Sqx59MvJJuC1Bba4wiFSEAb8hMRC9qSA/fruRl2VG7UXWCLqnN2iyUsDK3AWWtFlZ3eGHM2IJdMzDiYQgDV52PS3D9Ckiqo6aTUcpZlgJIm2kxZfLQh8dB+ri3EguBJGK8GVgSvygw9He4mF5hsk9/JPZeUCrgocYPiLdDHxQKKFTRwykw6EbEWt4fBgLcQSiwUXz2OSgcEiDp4D9JBzrZqd2RO1U9ZjrXECNLvNL+tjfYAANb6Os7O9mgxCrCAPQm8g5ckfnPM7zIGyqkiaoErcbgSMP2OC3Bo8ZjId4AvWVXJtAfbvXy/aCB6PAp2tVTN8Baje41WeoDtRaud2oSaQ6EA3xtUfpUYhCdUFlL+cBga7NVncdnYUIn0/LtdlFcSDp93P6zUQSSA+w5NCOGNu3sJl3HY6tvh7WfITOzbXojkFE6fuKgkhFmDlM17Ab7aLv9lRqeBw8E/B4I/GYr0mSAjEGFufXq03c241AbOaA0S7coMMYSQocu+yJ0RM7D+qryzpZ9DFHg6Ssam5hXBDSFTg+3dUea8RUd0FnGY9DPsppCbsyLyfoaQ7SLMLjXZX2/HmRL6hDmtI8PM7PkS4rP3ujSLoOpDHOKwg9iav39MKiy6PdoNxqN399dDmRosCMT/0xqA/YbthicoydD6p2aNLS0jiOael45L/H56ZqzQndpTSEpuvfR28pRYENb37/weMAnFwBWlesoJfkot90Fixa5M1ftCi/8jeL7J5FcDvat+IkWrYyy5Ot4HjYYya9LPzKt/+NeSui9gMbfhl+OX4qSge/lHnMpJcz4TL4UfuVbz4O/7NSFPjItDc/Bb/N5ZOgdQ5awjZ5zgqgnzPH4Zhz0gFOwvWPw+Jzck4rmHOZWZ7EyxWXURotZzKPOcxy4LY3b0NvtcdiPQmX6GVz8MvoJZ2GLxtbopcxb3N87HF87DETPgpve1MFi4EUBepKRq+LEZWQaX9xoa6mu4ErR83tYDcm5HAW6k2UZiMS/9qQnKNfnU0dNN1XAOhmSJoC46Pl1gxofRw7PtniJyjokbCx1SgZgSSHMkzpzDqBM98YhNZGEIQ/x6p1s7pRrmQEApbd7gC4LTncOo054ddq0QT4nBxrLqt+LekIJAKmDEWH8gnZbkSAIgi6CLO9/qV0BI6P9Y4Oj56WZCEhgRHuMROE1mdJTrvBCwkJbIpVhgmd2SW1zEcjIYExyrDW6RRwQJWgSElglGaEslhYR2XiIyWBYGxEUABateTajSAkJVAbGqG4YObDSakiKYHBPQqkzuwmuPUSfgRISiBw4qMnLQlsvgijwCWItARqaWdNeZtLnLFGkkoJaQkE8+9oBDaVSsWMipQD0hJ4x767fpSu6unJKZZ0yxuItAQ+f++CBfNdHO9j8dEiLYGP7VvwKo/Jzx8F0hKYOf/dczgpFyTWiMgPRSBPFIE8UQTyRBHIE0UgTxSBPFEE8kQRyBNFIE8UgTxRBPJEEcgTRSBPFIE8UQTyAoD/B+Ac8m6s23MRAAAAAElFTkSuQmCC"}}]);