"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[54276],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>A});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,A=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return t?o.createElement(A,s(s({ref:n},c),{},{components:t})):o.createElement(A,s({ref:n},c))}));function A(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const a={title:"\u4f7f\u7528SOLIDWORKS API\u8fdb\u884c\u6269\u5c55\u9ad8\u7ea7\u9009\u62e9\u7684\u5b8f",image:"filtered-components-selection.png",labels:["\u9009\u62e9","\u56fa\u5b9a","\u5305\u7edc"]},s=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/advanced-selection/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/advanced-selection/index",title:"\u4f7f\u7528SOLIDWORKS API\u8fdb\u884c\u6269\u5c55\u9ad8\u7ea7\u9009\u62e9\u7684\u5b8f",description:"\u5728\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u9009\u62e9\u5305\u7edc\u7ec4\u4ef6{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/advanced-selection/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/advanced-selection",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/advanced-selection/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/advanced-selection/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/advanced-selection/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u8fdb\u884c\u6269\u5c55\u9ad8\u7ea7\u9009\u62e9\u7684\u5b8f",image:"filtered-components-selection.png",labels:["\u9009\u62e9","\u56fa\u5b9a","\u5305\u7edc"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5411\u88c5\u914d\u4f53\u6dfb\u52a0\u7ec4\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/add/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u4eceCSV\u6587\u4ef6\u52a0\u8f7d\u7ec4\u4ef6\u6f14\u793a\u53d8\u6362",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/components/apply-presentation-transform-from-csv/"}},l={},p=[],c={toc:p},d="wrapper";function m(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,o.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5728\u7279\u5f81\u7ba1\u7406\u5668\u6811\u4e2d\u9009\u62e9\u5305\u7edc\u7ec4\u4ef6",src:t(68348).Z,width:"309",height:"416"}),"{ width=250 }"),(0,r.kt)("p",null,"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u6765\u6269\u5c55SOLIDWORKS\u88c5\u914d\u4e2d\u201c\u9ad8\u7ea7\u9009\u62e9\u201d\u5de5\u5177\u4e2d\u53ef\u7528\u7684\u9009\u62e9\u6761\u4ef6\u5217\u8868\u3002"),(0,r.kt)("p",null,"\u8be5\u5b8f\u5141\u8bb8\u9009\u62e9\u4ee5\u4e0b\u7ec4\u4ef6\uff08\u6216\u7ec4\u5408\uff09\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Float - \u672a\u5b8c\u5168\u7ea6\u675f\u7684\u7ec4\u4ef6\uff08\u540d\u79f0\u4e2d\u5e26\u6709\u51cf\u53f7\uff08-\uff09\u7684\u7ec4\u4ef6\uff09"),(0,r.kt)("li",{parentName:"ul"},"ExcludedFromBom - \u4eceBOM\u4e2d\u6392\u9664\u7684\u7ec4\u4ef6\uff08\u5305\u62ec\u5305\u7edc\u7ec4\u4ef6\uff09"),(0,r.kt)("li",{parentName:"ul"},"Envelope - \u6807\u8bb0\u4e3a\u5305\u7edc\u7684\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"NoMates - \u4e0d\u5305\u542b\u4efb\u4f55\u8fde\u63a5\u7684\u7ec4\u4ef6")),(0,r.kt)("p",null,"\u8981\u914d\u7f6e\u8be5\u5b8f\uff0c\u8bf7\u4fee\u6539\u5b8f\u7684\u5f00\u5934\u5904\u7684",(0,r.kt)("em",{parentName:"p"},"CRITERIA"),"\u548c",(0,r.kt)("em",{parentName:"p"},"TOP_LEVEL_ONLY"),"\u5e38\u91cf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const CRITERIA As Integer = Criteria_e.Float + Criteria_e.NoMates\nConst TOP_LEVEL_ONLY As Boolean = False\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"TOP_LEVEL_ONLY"),"\u6307\u793a\u662f\u5426\u4ec5\u4f7f\u7528\u9876\u5c42\u7ec4\u4ef6\u8fdb\u884c\u8fc7\u6ee4\u3002\u5c06\u6b64\u9009\u9879\u8bbe\u7f6e\u4e3a",(0,r.kt)("em",{parentName:"p"},"True"),"\u4ee5\u9009\u62e9\u5d4c\u5957\u7ec4\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const TOP_LEVEL_ONLY As Boolean = True\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"CRITERIA"),"\u662f\u4e00\u7ec4\u8fc7\u6ee4\u5668\u7684\u7ec4\u5408\uff0c\u5176\u4e2d\u5e94\u7528",(0,r.kt)("em",{parentName:"p"},"Or"),"\u8fd0\u7b97\u7b26\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const CRITERIA As Integer = Criteria_e.Float + Criteria_e.NoMates '\u5c06\u9009\u62e9\u6240\u6709\u6d6e\u52a8\u7ec4\u4ef6\u6216\u6ca1\u6709\u8fde\u63a5\u7684\u7ec4\u4ef6\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Const CRITERIA As Integer = Criteria_e.Envelope '\u5c06\u9009\u62e9\u4ec5\u5305\u7edc\u7ec4\u4ef6\n")),(0,r.kt)("p",null,"\u6839\u636e\u9700\u8981\u4fee\u6539\u5b8f\u4e2d\u7684\u8fc7\u6ee4\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Enum Criteria_e\n    Float = 1\n    ExcludedFromBom = 2\n    Envelope = 4\n    NoMates = 8\nEnd Enum\n\nConst CRITERIA As Integer = Criteria_e.Float + Criteria_e.NoMates\nConst TOP_LEVEL_ONLY As Boolean = False\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swAssy As SldWorks.AssemblyDoc\n    \n    Set swAssy = swApp.ActiveDoc\n    \n    If Not swAssy Is Nothing Then\n    \n        SelectComponents swAssy, CRITERIA, TOP_LEVEL_ONLY\n    \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u88c5\u914d\u4f53"\n    End If\n    \n    Dim val As Criteria_e\n    val = Envelope + ExcludedFromBom + Float\n    \n    Debug.Print (val And Envelope) = Envelope\n    Debug.Print (val And ExcludedFromBom) = ExcludedFromBom\n    Debug.Print (val And Float) = Float\n    \nEnd Sub\n\nFunction SelectComponents(assy As SldWorks.AssemblyDoc, crit As Criteria_e, topLevelOnly As Boolean)\n    \n    Dim vComps As Variant\n    vComps = assy.GetComponents(topLevelOnly)\n    \n    Dim swFilteredComps() As SldWorks.Component2\n    Dim isArrInit As Boolean\n    isArrInit = False\n    \n    Dim i As Integer\n    \n    For i = 0 To UBound(vComps)\n        \n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(i)\n        \n        Debug.Print swComp.Name2\n        \n        Dim isFiltered As Boolean\n        isFiltered = False\n        \n        If IsFlagSet(crit, Criteria_e.Float) And swComp.GetConstrainedStatus() <> swConstrainedStatus_e.swFullyConstrained Then\n            isFiltered = True\n        ElseIf IsFlagSet(crit, Criteria_e.ExcludedFromBom) And swComp.ExcludeFromBOM Then\n            isFiltered = True\n        ElseIf IsFlagSet(crit, Criteria_e.Envelope) And swComp.IsEnvelope() Then\n            isFiltered = True\n        ElseIf IsFlagSet(crit, Criteria_e.NoMates) And IsEmpty(swComp.GetMates()) Then\n            isFiltered = True\n        End If\n        \n        If True = isFiltered Then\n            If False = isArrInit Then\n                isArrInit = True\n                ReDim swFilteredComps(0)\n            Else\n                ReDim Preserve swFilteredComps(UBound(swFilteredComps) + 1)\n            End If\n            \n            Set swFilteredComps(UBound(swFilteredComps)) = swComp\n            \n        End If\n        \n    Next\n    \n    If True = isArrInit Then\n        Dim swModel As SldWorks.ModelDoc2\n        Set swModel = assy\n        If UBound(swFilteredComps) + 1 <> swModel.Extension.MultiSelect2(swFilteredComps, False, Nothing) Then\n            Err.Raise vbError, , "\u9009\u62e9\u7ec4\u4ef6\u5931\u8d25"\n        End If\n    End If\n    \nEnd Function\n\nFunction IsFlagSet(val As Criteria_e, flag As Criteria_e) As Boolean\n    IsFlagSet = (val And flag) = flag\nEnd Function\n')))}m.isMDXComponent=!0},68348:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAAGgCAMAAAD8agDGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAMiuRCYOoff390NRAGOwsDk3isLCqXR0dAAAM5x7FAU7V5C7zgBRoiUAM4uwizgAAGNjADaOxCQkJMPQ1+PLVKbIon2Rb7SPGwAtgBpTcV2s4yUAWzB/pUcxCrBjAFdXVgA3VKbI44s4AMDh3rDUiyVxw2Ow91GIpJOBQn2XomMAOAAAW4s4OM3g7/ewY8KmQNIcATiL1MfHynZRABQUFGMAALCLOF1RgCtqi3e923GvyYODg4vU95a2x2MAY0GHojg4OF1xM4dxOGOkwt7f3lGOrABjsAA4i9O4SaOPS/ewi10tM9na2/fUi10tAEOP43ZXGThjsNjSx87Ozjg4Y/w/Ba6kjYuLOPDEHyUAAItji3asgH5gG2Ow1NSLOGRHEzgAOCUtM9KxY9SLY0KItTgAY9bMr0RERFmYttXV1xNKaLGysdCoHlRzfChefSVxooN4XXZRW6Ojo5JyE/jiXTGFrXK31KWCL5aWlqKSgOvcg49xW9T29kxMTI9xM4s4YyUtW93Ld9HBc7W6u9HR01E6D+Pj4qiFFkMAM0ZuhJagqKaPW2NNIcyuVl1xW7jJ03bI49+1HYuLYb6/wbKgcyUtgO7u5bfS5qeGPca4kmeoxkMAAGectjlZSLCLiwAAY5BpIFZAFXyxzaasgFSSsCsrK6bHw0yRs3RbJz17mSxwkn1rSCpkhGOGmvb2sIV9bDRujMCYHc3N0d3EUKqqqkMAW0NRouK3IGNiYo6Ojm2xz93FYRsbG6GRa8vd6JmZmaN7IF0tW7mvncvFuTiLsIpjIGM4i/jpj02LqS96n729veswA5Wrt/bKICVWcR5MV8vV3KuDIjIyMo/I45p1KOzWWLeXOUtrXHh4eHJlSGhoaNLj61ubua2TOF+gvXtgLlpII3vC4GVNGWKMo5dxH6+vrWmsysDAw5Z9LrH09mhUL0qGpEo0C66RRS51mQAAOMDP1tLMvNa3K6+KMdmvIFeWtIp6VYGovOLe0rLCyZV2PMWuYDIzIei9IAAAAM51x2wAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAghElEQVR4Xu2dD5wcZXnH125RRGhjxVShuSV3lKBCTvOvjU2UVI5A6V2gRi1QerQWvJ7QlEICQpO0aFiL0CJoByVYEgIBEa6gaU0ACS2eGOQoHNWeiLTy10gMYAtKqZ8+/9533tmZ2dt9d9672dn3B5mZnZn3nWe+97zv7L7PPvuWyl4RVYNAtrSWyDqUp1YjT81G2VCr3vvy5g/9TF50gLKgdu9NP77owvs+/rbN75cdhVcW1LpOPP8rF9734uv+bPYlD8mugisTamNnPfzy2x/84uOPXH3U7AdkZ6HVMrXq68ZHx8bGZh90zNXn3XHUQc/Nlv3lynJeD8q6XO4tlebIZtBz7FrZnEQji9SZg/N4bVXYuDYrPBQRWD1YQqmLsQZL1+6WTVTL1MYvu5CoXXPbRxd/9LnrHlHUejUsfbfhrvLAsj9aKpt1FfQ8f6Xc3cii56WIRWFQxaQWPRQKTaQ/88giE9NAzQVbptZ1+yhRu+6662Zf98gjilpwpL7OyHvl+ga1yjzlipOqV+5ucJ4qb1EYFKEGMg5pkdXcOIIe4xoDZ5ie1iS17Sx5xeoa+8k9ihpAU9QMQtrZwn0j71jKhkDDAQ/iJTYNXFW+3gPNaWCGNAq5O2AvfwmLwqiQGm/xoZFvmOzIQulSerEGrhXb7PIyVFqCMnD5Jn0tDg2okRS13xJqulmCFK2QGlgc9IDt6PnHL+VleRBMQlMrZCeeQefLjWOFvGlRGKWoDUqXJYcGZmirxGqhhhWrWumv9CdLyQGbp4bYZEup6yyi9oXDidrh//Z/vNtsDwOvZdNDahWwDo1jn+ElWgNmzaHHyMgiKK8hqXOCHryr5guT2KIQkj7UG/b8dI5Qgyp1rXwREBSyoFauhVb+yMWfRGo/+cLsw2e/9IZfXd1Fe6kxjSwqUUNRHZumhn9GWgQ9+GTjJbQ0FNw43ATZG7txkm1hJGI+OI1Dg1gFiLuA0Nd0rUwNG6odtbiCm849ibjNnv0fd64WavV9DS8Pwj/xwAzkikvqR1CTULMtTBYxY5I+ZDwuTV+D47pWpEbEYWc21Mrlz3bdjtjGRleDFDW8K1Ftv8YNjToN9QKW5EOo+tSsC6u/Y6W2X9PMxGqmhs1c14rUyN/gsllRK49s3q+WWtiHwaXYTL1PjBmYMad3DtyyLMsVMD84Ze0k1KwLh97PW3xIvy0ikYVEjfs/VStRgwsPzODnTCbUyuX3nXvF2EmbANprhBpZzoq9X6vwrcDl8WE+D2zhBlfhhhe5cdxHbymUrAuH1FCxeklUkroAcUCplf0MerUPQ60ji7KiVv78nreMbVr97R9eNiI7QmfTb0JM/5t6RamlqEETs6JWrj6x36bvX/yivAKp9+/SuYLgkdSI5U7U6LUb+9SRGbVy+WtdF8hW4ZUhtQ6Sp2YjT81GnpqNPDUbeWo28tRs5IjaynHUSnlVODmiNv7s8PDws+PyqnByRW0Dal/yONSZsr8gckVtZVTK6+RDKY5M4ChMuyobarFx8fGJGgk2g1ooYxCsTZQRtVps4xOyIQo8tbhioSuhtv9Rs8bX7QhAcWr4rxdHBnHkD3bjYCCsgp59Fl37RjyNB7lzqcyoRbExtcfWzJpVru44BC6SSA0HlY9fyr42iIPNPcvh3wd4D45r51UufW3/NUfdjS927AiqihqOLoOEGg4scwvlEXPYQQEUfCUHcymX/dqNsw4dH4Z1dV21L9HXJM6G1DiIBrTYxeCgnJpLZURN1lpEbdYu2MB3asv6kqlhKAhoJVDrPbYvxw00I2oxAbWr10Cvdk0Ab3Gr6/r6U6iBu80jahywoxaKtEbe8cs5bqAOqZXXzNq1l17sWNKfTE1imeRnFHoEhPIQqCzLcQN1SC0I9t68ckcVn6Eb+ocTqUksE7o32I0PCnpB1CRYnFM5o4Zv0qp9O9YtW7cEoClqDQtbbX7lkFq1Wu3r6+vvB2bDG5qkxl/gyK0cUTuThzpCNTfoUcEmm2M5olZweWo28tRs5KnZyFOzURI1Q7zHU6tRAjVDnlqyHFHrvHioIWtqnRcPNWRPrePioYbsqUkcVEl7nYRW2lyuqMVEuzGcUi7/Q7sF8mJauW1nVLKf1QI12RBJjCrfo2aNa1uVVjgaRuqjl0qtUluyrLQM6oB6+TVl05EGKUci6PnDHsqVoMAoj0yCN1JMdLfsy6M+xqsqqq+vf8N8fi1qkdoh26rb+7Ydgn8N8T2VnCmJl0EPcKkcu1YCo5GYqOzLpYgauBiqf3h4/rO0V6k1aku2PQrLNbtwhFKo4aA3cKPoZ9AzhwYfB87YzbHPaEw0z/FQpAau0I8a3vDlTKktg+YezNo7PA5urKhhY1yODRIF1KDFglNJkmckumckJeZOLqmVtpeDXXuDoRK0/ZAaUmI+5G70GhY6yVPHRDlYmku5pDbejz3aBz84Do3foAaPBAIFCqnBpiR56pgo7aN17uSQWjBxzrqg+q1vfWtfqJupDfweLLDPl8RLRc1M8lQxUdmXS7mjBrUecs6G6rvetQ6rZmqYCc+pl5x4qaipJE8zJqr25VHOqEGlQXXf8dI4elrz8dB8yyG1VuKhOZcjai3GQ/MuR9QKLk/NRsnU5u/cSR9IPbVkJVJbec79n9mGg/6eWrISqe28f/7KDTjS5qklK5nayuH+fk8tXckt9Mz+6id8C02Xo6dBweOhydSUrKkVPB7qilqx46GuqEkcVEl5HWcEJQxlpGaLUgksEDtjGpNfsqGWkNtSI8FGdxr9LdpJhCUGZiSNs7U/tcQ8KkPRnD0OJjcmKpH4S1UFoJaQs3cOexm8ggtEqHFchUOiEgql/KBKqXTsb2BgT6KkKKYGR+FfeEDOVJVwABVPnxplRi2KDamxu01QvkYNNYwQSEgUN49navgzfhjBUlFSOhVLEGSiJgfUmWFc9QMCeWrk0NeE2jbEpvNDmdpI+Fu0EvYEJhwOhcYYCYfS0wC7NaLGB/SZqpKpDss47NeUr01MhPHQ0NfCkKhiwpzgDBVNoFOxBPWDRI0P6DMjcdUpVEbUZK2lqKGbVSfCeKhQ6zV+i5bDnsCE9yRRoxcGNX2mqqQ9qcUk1BBaX99EGA9lapHfosV7nke+RnuohcaogXOZvqbOVCcViRo5GhCbgLpNapHfolWhUGSinwY11GpbaPg0MOOqUyh31AL8UgzGqIaBms4PxW5ImhWHRCXsCUwASqm0HChFqWEJomxQU2eqSgpDLQjk/drExM5m4qGIL/dySM0qHho+JPIsR9Ss4qHY2toCmitqBZenZiNPzUaemo08NRslUJPUUBKf5KnVKIkaHzHkqdXIEbXOi4dmQa3z4qGZUOu4eGgm1CQOqhR6XeOTf2qlxkqnTdlQSxjLrZHGNunkn5Ffw8rpT2NlRC0pbmBKxahwJCgxuBmqk6glxKhQ+9+IS7iAojYik3+q0GYY4sThRxydpRWOVQIwfkFDbnK4NqN0epQZtSg2Re3GWe/B6kNq4Dw08KpCmzrEqXJD2b1krk5+gdTC1FE+H0d0py971K2v7X/NrmMIms4PJQLkM7ABXhcNcaIb6kaJG4qaPqzOxzOnT277tevv/uneVyjmItQoGsAj/xwCUGsew0U4TA0bpEFNHw7LTWf2aEbUZK3F1C6/Jnjh5sNpJFyoUexEx0dSqam5OtOpwWIas0ezoRYTU7t+7803L158OUYPmJp8s2AwnNlYrQmEbqHU/ug7HEJNHw6pqcqmQw6pBS9cA41z6y1PYsSFqfHtgpsYudtCgSKbyAHdCnfgXJ3sY9gXqsPq/OnNHnVHLQiefA/2aJesegWqZmr4sATBwzBGjRovOg/0WDS/P83VSS+Qmjqszp/e7FFn1ILgp4tvgw7t7atWrfpyB+SHZkWts/JDs6DWefmhWVAruDw1G3lqNvLUbOSp2chTs5FrakPwL3jlEn5RGDmn9tADDx70xdnyqihyS+2hW4dWffOO887z1BrWgbe+4baXht593nl33OGpNarZXzz6Bz949xBAe+YZTQ3DJ5MPwuJZGEqhwY48yiE1YEaO9szVR4fU6nGgIUgUnjWIUZVOpEbQngFoj1tQwyHITqRGjjZ09dFHP/5YDTVJ58SBRiPEycFPdZaiJpHRSNyU1tMph9TI0YaA2WMvxahhOmdtiLPW1yhNSEVGw7gpnojj4tMph9SoR7vh8cf+9KXrI08DTIIFHLEQZ5QaBgqYMTVddRKVmsaIAcshNerRFj720vXHHBPzNbjreLAupAZscZvOxnYcxrRURiifOF1ySI16NHC0Y775XLPUxMdgrSKjmtp0N06SQ2rUo4GjffO5RGrICZZGiDOJGrZcM37KpaZbDqmRoy0EZrc9mEQtFuIMO3mTGuzHyKg+iUqdIninSw6pkaMtvO2gN9x6oOyKUqsNccKG8c5DreEkjIzqk6jTk+PTJofUXrr+udsOWnjrQ/K6SHJI7ZaPPvjAgQvlVbHkjtolr+CMMJ6al5KnZiNPzUaemo08NRt5ajZyTc3HQ23k46HNy8dDm5aPh1ooKR6K4xUgHtmICw9jJEWNeeRWDqklxUOBSBoyEI0MYVSlk6klxEMnp6YiermWQ2pJ8VBNTWKhAAiHHY2Rb0Utl3FQJYfUyNFq4qGKms4GrZRwCFz8j6nlOA6q5JBaUjxUqOlYKL+kkW0Q0sp1HFTJIbWkeKhQ01E9BsQQ4Rg0W2yttBPbsBHRg1eg4lNLiodOQk18DNb5jIMqOaSWFA8VatwkdQtVSAxq+YyDKjmklhQPFWo6FgqNcg74VUhLrZFS/uKgSg6pJcVDFTUVCy1Xvo4/fUu7ItTyGQdVckitoXioAtVeckitoXiopxZVY/FQT61z5KnZyFOzkadmI0/NRp6ajVxT8/FQG/l4aPPy8dCm5eOhFkrPD8UhDhz4UaJxjYjyHhh1SC0xPxSI6eE0JU0tkqaR58CoS2pJ+aHoZxhuMpVMLc+BUYfUkuKhTA0WxAMaojlfKLZLPB6llsfAqENq5Gi1+aFAhUdmgQflhAKn9ksQdUgtLT+U0AAPjkwBRxXzjFLLc2DUIbXE/NDl8DDAOwYeFIbC5koM0ANDagKXqOUwMOqQWmJ+KLRQal7Ag5tZMjXxMVjnMjDqkFpSPBSpcUSPg3e0py61XAZGHVJLiocitXIv9uv4pRj0InoaKGrKj0xqsD93gVGH1JLioUQNcSEXNQuoBtI2CaIOqTWWH6oAtZUcUmsoHpqLzr1puaM2eTwUm1pbQnNIrcjy1GzkqdnIU7ORp2YjT81GzqgNYSS0qHJFbdvQ0DbZLKBcUVs3NLRONgsoR9R2DoF2yoviacr7NT0GTjLDotEXudYUU6OR2TbCkyJn1JYtk42IMMiEKx5Ga1tNLTWOtNDoIv9mLo2uQaPFsCgOtYVRz1xraqmp0TSgx7+Zi9RUWJSpSdQz35pGauRmRliUqcFeDvnlWe6oJc12FqGGjRVA6bAoU1PRgVzLGbXxJGqKB/VrQo1Jemokk9oSHAsnycMTVqGvESPdQjua2vj4DTfIZrl81w14GdTIIsRGIU1FTYdFPbXyDaA3ke4iqagLxkAp6Kmp0S4Mi3pqSM1gdtfCYuXuOaMGxGSzXF74JtVC09RmYVFX1CIKnwZJasOw6JRQK5w8NRt5ajby1GzkqdnIU7ORU2rBvS9v/tDP5EWR5JDavTe97aIL7/v4+zZ/SHYURw6p7Xl409/e+eEf//t3umRHceSQWtfYz28f/c5XVq/21BrWiy+fNjY2NroaFKGGA2mDpWt/H8c9SL0qUQU/WSUHWjABTT5zDapP+TTA1JA4mqhlU1DbKMqG2nZZh+o69b7RJGq9QItGgvTt4x4SDntgUmhEmLgR/BUQ4xDMyCJ1wsCyxsaTgp7nr4xgsitYcUEthq3r9qcUteNOe7/shEsdCRZTpGDkvfKBPUKNYzCGdLoLD7oNzlOnV+bJuPDk0nWQ7Aq6oVaLrWvsq/9D1I47/3Ovvu3if5VRD7xnzCbDlfCJUdMJofssuvaNMoYZoibusPWOpRymgcYD7sdLlTpKP4U3B+rhZh2hZlkwpIZbSI1URW2wp1aDrQuQgd5yz39fdB/od6SVEiqxWmjVUJsTJoRiwFQbThtYnPfAUo/7Hk/JVccv1amjFSAwSHl+VLdx89YFFbVBSqshauOPTqB2PD2cna+dxdjOuufhO++76HPnCzW6OFMbeC2bFKGmvgFC94b2KcMpakoFdSCV4lpSFy116ig2QQrzc2nj5q0LMrWBGWwsUVvy9P2o+Rv6M+vXPnLxJxnb2Fmjnzv/OHkicPMSU6VjC6lBayQzjYRQZXjtLwxQL4eLoAefbryE1obiFGYiEadmWxCphc/UjFqorA0FN517EmMbPS58jk7ma6BIQqgYHntIIFgQ7h2Ygf6JSz2MXoeabUEynBmDsqGWqM923c7UjHcfRIapJfZrIDqqEkLZ8Bg02YHdkXoBS/IjVPrNWxfkFgrrhH7NtoUma2TzfrXUCBFTS3yGgvAWdEIo9dHSNxuS2xyYMad3DhyWJcdZT1lb5+atCypqvJVNv5am9517xdhJmwDa94UamUTUkt+voaAR6YRQuKfScu52VCtCybeOACe+TeE3K1gau0ZYR24e99HbCpR9QU0N5bCFoj6/5y1jm1Z/57TN6o2uZhT/bJBrTSm1cvWJ/TaduOdeeQWSN+b48GeBJ0UscqORReg5tleqtdFlv8b6WtcFslUcue3XiirXLbSYQmqORiULLBfUTi+63FDrLrg8NRu5p3bV7rlzd18lLwoi59R23/2Js89+5e7d8rIYck1t96H/+KWb/vNH/3VgobzNMbXdh5552v+uP/+dm18olLM5pjZ3zxNP/Xz026svPvBu5WwLDuD1ell3d19aKp1AGwvgg+LrD6bNGm05uVQ64tO0uf4wWnV3b13x1kdkcxLN3Bg506agtpGUEbXoWO7p9Agg7bln09joa86/6eynxdku1bD07etdC2DP+lpsl4LhW/8FiC2gO5i5UZ2w5Y9/KZFwrbaueP3fRTDZFVzggFoE2+nduz81zsJQ1ejoq6+e2jWXrrf1d7XBM/+JnSdKbesKBVOE1Ehb6F7XH6ZOX3CYcttJpesg2RV0Qs3Ednr33PHx+2nzslOvGPvqU6Oj79zD1EJXC50tRg3bI5i7dcVRG4/4RWi1fHzLrwFlQC3gZ/7NwbQHGw+4Hy+71/NqwZ+vgCYF9XCzjlCzLBhSW3BCdtQMbEht/tA5uNn3pc2fHDtp9M3fFmq6WYIUrRpqJ3T/5cGwOgD+/TXchzacNrA874ElnksueMHBvOxeD4cuhRteAATWA3msRhVVsiyoqK0vHebO18p963ZAxdW+71586tjom78iLdT08y1/zyZFqC2QTp/uDRErw8FFxN94P3WCUJL9hpd0DiLBJjhzI1yLSxs3b12QLd9yMhrrqF8DauXg0SUAbWL7vT867cQf7rmAngbUumZu5Aei6thCatAayUxoLvT3RkPF8JkbEVUo6uVwsXUFPt14Ca0NBTcPJxOJODXbgkhNPVOzoiZrFlMrT9DzYN9q/9f2fPfAufzOY1JfA5FtYK9JLfaQQLAg3LvlZPwb4BLbGKkONduCZDkzzopaVEwNXA22+yYe7esfn6ve5AoYUmK/BqJGAx2NQS0GTXZgd6RewJL8CJV+89YF1d97QXb9WlREjaEFwYaJR4EaXxHMUIRAic9QEN7ClpM1NXAD6ZsNyW1uOfmES0+Aw7KkXnHrbz5S5+atC4atJLNnaFRIjaDh06Bv5b7bQ2pkESv5/RoKGtFbr1TUoFEcwN2OakUofssLBw/Atyn8ZgVLY9cI68jN4z56W4GyL6ipOWyhS6oMDWqdv29IzXC2+GeDXGsKqOnPBqxPGZ/d63wOdSp8coMsrxS10RE1/TmU5UclG1BkLLeI8tRs5IZa0eWEWvHlqdnIU7ORU2o+P7R5+fxQG/n8UBv5/NDmVS8/FJXwxVz80rX6znVU+FVt+Q64/hb0dCaIZkMtOpaLqpcfyop/CRy/t94eCaIZUYthq5cfymrnBNGsqNViq5MfqpSY3ILUsD2CuTlOEM2MWg22evmhIkWrhlo7JIg687U6+aGiNk4QddWv1ckPxTQTZNPGCaIZUZO1oTr5oaI2ThDNhlqiUvNDRYn9GogaTb4TRB1SS80PFSU+Q0F4CzlPEHVJLS0/lNXOCaJuqdXJDw3fhJj+l19NJbXU/ND2ThB1Ta24+aFuqRVRnpqNPDUbeWo28tRs5KnZyBm1761Zs+Z7sl04uaK2ds1a+ldMuaJGwNbOgkURnc4ZtfLds64q7yqo07mjNut7u8p7TadD4bg8imdYalu5ojYL/mNqyulI/KNv8Nl9mUHNGMVqE7mjhsxuNpyOVFlGo2RBj6eWJGa22HA6UuXrMqyN84XiiKAM/sEriUj2hgOB+ZUrashMqInTkSrzaMQeVsBJ4p7saxKRxBHq4zua2uLyLYbTkSrzcHx54IzdalASieE/GnYOeuZwfDLvckWNmQE17XSkyjz8H5ARNY57MjkaaS3NUbGzfMsVtcXsaYbTkQDZwBmHHrkUqam4J//TsRSOUuZb7qjdUl6FG9rpSEAt6NkOlICainsSNR2RxHaq4jC5lStqiImoaacjYeSsF9+zITWJe7KfSURS4pM5lytqT17+0OW34oZ2OhJSo0Ao9msS9wRM+M6DI5IqPplvuaIW3LqKoIVOVyS5oqalna5Ick5NO12R5JxaIeWp2chTs5GnZiNPzUaemo2yoVbYRNAUZUGtwImgKcqCWoETQVOUBbUCJ4KmqHVqWU4UGmaPhF92zmK+TxxJSRrrBBs5ayM6zAJmx07G0RqtJqnFk1gynSg0zMhsNQ808pVtI780IrSIhuJHFpmYjBHSUDQyqKpolloMW8YThSrDWs0DjVAjxVmQjUQNzDGukRjxaY1aLDkv24lCxbCW80BDamoLaxn5hj4BRAYxNR5P5lrZbDGOYmdYFIyWwC2oeWo12DKeKFRWWJw3YUlD4ugq1vN9ouigmsqSRDYKNaxY1Upmi3EmtbD+1n0t24lCeUUFeT+ejHcmddFSBU8bTedEURkQRS1YdI5Qg8O6Vr4ICOpLojbQer+W8UShxo2TqDfCBQdKeamCp3QrdF9czCiMRMJnKm5rWIPyfGUbQ1/TtbLZbFycGtTaNDVZG8p0olDzxkloOwhL2Kdz4paCZjwuTV+DorpWNFsZl+BrQU+z1BKV3USheqUkd4s9jnoBS3JA1CTUcE3ANbRIiJrsYGrYzHWtaJgyjmuHQiE1UBbUMpsoFFdRanInLaZz6vcV+l0QiQwiatz/qVqJmjYOvySgqLGNGVHLaqJQ6vEiHxuySefkHkvdshaVpC5ADkmt7GdsHCArXfvrsAMvxYFbUEbUcjdRaIRamqwtyopabiYKJTV6qYY/ddQoM2rFTARNUYbUOkiemo08NRu1RE1+dLfj1CI1+YXnTpOnZqMMqRVxotAUZUetkBOFpigzasWcKDRFWVEr6EShKcqKWspEoetLR/x2fH4WnHvn9XquoIjCGTv1ZDitT/eJEynxTEC1Aht5Vq/oQTDbmI+IpSYwQjVLLTqWO9lEoTT5U3wuIDQgeZ7QcMbOVucJNaf06e7+i09DhfGJbtAimnVn5kYTk57TyxQaraanappaBNtkE4XSLGbNzROqDGt1ntAoNVS8FrKR5yqKzBPGMxbWqDVqJjaceKrORKHo/LgSPjFq2G7Ajq3mPKFiWMvzhJpTlckarjrztfoEEBkkMzzRTHtcK5stxtGUXmgAFMeehc62oGZgQ2r1JgqV2xVaNdSS5wmVFRbnTVjSJGjYbCyn+yTxBIQ8k6WIbBRqWLGqlcwW40xquv7Wfa3eRKFMral5QnlFBXk/nox3JnXRkm6FpseDA5NP94nn8BSboEvDnp/OEWpQpa6VLwKC+pKobWm1X6s7Uai6x2bmCTVunEQ9My5amO6TtOVkRWu9PF/ZxtDXdK1sNhsXpwa1Nk1N1iymlj5RKF++mXlCzRsnoe0gLGE93SdLChmPS9PXoKiuFc1WxiX42tYVzVKLiqmlTxTK1BL7NRAdjc4TqldK8qhtbbpPFkFh8iKyg6lhM9e1omHKOK4dCoXUmu/XoiJqdSYKZWqJz1AQWhmdJxRXUWpyJ61N99k985+RC56r3gWRyCCixv2fqpWoaePgiYDuSdTYxgyo1ZsolKg1MU9odMZOVCbTfWLdtW//UVSSugChIbWyn7FxgKx0xB/ADrwU2QhqndqkE4UqVwv3TIUi1NJka1Gr1CafKFR6W1Dth0OHavRSDX/qiKpVagWfKDRFrVLrTHlqNmqRWoeqNWodK0/NRp6ajbKh5vNDm6fm80NtqPn8UBtqPj+0eWrtkB8KiqVWosBGTgNRF2P5/FBRYi1oEX3b2ueHsmqoBT37YHJBVD4/lO4zkRptDS6nlAyfH0rJTXSTnLcTFkYpapwfCobQ7Uvqj4hsFGpYsc8PZWoCCU9lanBO2POLF9I2HNa18kVAUF8StQ7JD0UyihpeFa+nbAx9TdfKZrNxcWpQa9PUZG0o//mhsNKVmI9L09egqK4VzVbGJfhax+SHgtjXfH5o4/mhKDrN54fiOkItUjikJqLToqJd1AUIDamV/YyNA2Q+PzQqa4uyoubzQ/mIoUao+fzQWjVGrYPkqdnIU7ORp2YjT81GnpqNWqdW6IlCU9QytWJPFJqilqmFczZ2kNO1Tq3QE4WmKANqRZ4oNEVNUouP5RZ7otAUNUsthq3YE4WmqGlqtdj0nI2FnCg0Rc1Tq8Gm52ws5EShKWrZ1/ScjdrpSAWZKDRFLfdres5G7XSkSjEmCk1Rs9RkHarYE4WmqElqcek5G7XTkYBaESYKTVHL1BBTcScKTVHL1Io9UWiKWqZW7IlCU9QyNa1CThSaouyoFXKi0BQJtWHShpXzP2NNrZME1ABasAH15ZXzn/XUGtG2KlHrQ2EjHfbUGtD8bR+LKpnar3gZKlcD+ap7KE9tMjVK7Re8DDVKzSsiT81GnpqNPDUbeWo2aoBaufz/wy3uQ5f1Cg4AAAAASUVORK5CYII="}}]);