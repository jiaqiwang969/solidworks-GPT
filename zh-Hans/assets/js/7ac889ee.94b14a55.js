"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[72255],{3905:(e,n,t)=>{t.d(n,{Zo:()=>A,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},A=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,A=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return t?r.createElement(g,a(a({ref:n},A),{},{components:t})):r.createElement(g,a({ref:n},A))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const s={title:"\u4f7f\u7528SOLIDWORKS API\u5728\u9009\u5b9a\u8fb9\u4e0a\u521b\u5efa\u8349\u56fe\u70b9",image:"sketch-points-edge.png",labels:["\u66f2\u7ebf","\u8bc4\u4f30","\u51e0\u4f55","\u5b8f","\u70b9","SOLIDWORKS API","\u6837\u6761\u66f2\u7ebf","\u5b9e\u7528\u5de5\u5177","VBA"],"redirect-from":["/2018/03/this-macro-creates-specified-number-of.html"]},a=void 0,i={unversionedId:"codestack/solidworks-api/geometry/selected-edge-create-sketch-points/index",id:"codestack/solidworks-api/geometry/selected-edge-create-sketch-points/index",title:"\u4f7f\u7528SOLIDWORKS API\u5728\u9009\u5b9a\u8fb9\u4e0a\u521b\u5efa\u8349\u56fe\u70b9",description:"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u57283D\u8349\u56fe\u4e2d\u7684\u9009\u5b9a\u8fb9\u4e0a\u521b\u5efa\u6307\u5b9a\u6570\u91cf\u7684\u8349\u56fe\u70b9\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/geometry/selected-edge-create-sketch-points/index.md",sourceDirName:"codestack/solidworks-api/geometry/selected-edge-create-sketch-points",slug:"/codestack/solidworks-api/geometry/selected-edge-create-sketch-points/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/selected-edge-create-sketch-points/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/selected-edge-create-sketch-points/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u5728\u9009\u5b9a\u8fb9\u4e0a\u521b\u5efa\u8349\u56fe\u70b9",image:"sketch-points-edge.png",labels:["\u66f2\u7ebf","\u8bc4\u4f30","\u51e0\u4f55","\u5b8f","\u70b9","SOLIDWORKS API","\u6837\u6761\u66f2\u7ebf","\u5b9e\u7528\u5de5\u5177","VBA"],"redirect-from":["/2018/03/this-macro-creates-specified-number-of.html"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u9009\u5b9a\u7684\u5b9e\u4f53\u4fdd\u5b58\u5230\u5916\u90e8\u6587\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/save-body-to-file/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u83b7\u53d6\u56fe\u7eb8\u4f53\u51e0\u4f55\u7c7b\u578b",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/geometry/sheet-body-geometry-type/"}},c={},l=[],A={toc:l},d="wrapper";function u(e){let{components:n,...s}=e;return(0,o.kt)(d,(0,r.Z)({},A,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8be5\u5b8f\u4f7f\u7528SOLIDWORKS API\u57283D\u8349\u56fe\u4e2d\u7684\u9009\u5b9a\u8fb9\u4e0a\u521b\u5efa\u6307\u5b9a\u6570\u91cf\u7684\u8349\u56fe\u70b9\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00\u4e00\u4e2aSOLIDWORKS\u96f6\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"(\u53ef\u9009)")," \u6253\u5f00\u4e00\u4e2a3D\u8349\u56fe\u4ee5\u5728\u73b0\u6709\u8349\u56fe\u4e2d\u63d2\u5165\u70b9\uff0c\u5426\u5219\u5c06\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8349\u56fe\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u8be5\u5b8f\u3002\u8f93\u5165\u8981\u751f\u6210\u7684\u70b9\u7684\u6570\u91cf\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u9009\u5b9a\u7684\u8fb9\u4ee5\u521b\u5efa\u70b9",src:t(40663).Z,width:"320",height:"240"}),"{ width=320 height=239 }"),(0,o.kt)("p",null,"\u7ed3\u679c\u5c06\u662f\u57283D\u8349\u56fe\u4e2d\u751f\u6210\u7684\u6307\u5b9a\u6570\u91cf\u7684\u8349\u56fe\u70b9\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5728\u8fb9\u4e0a\u521b\u5efa\u7684\u8349\u56fe\u70b9",src:t(56169).Z,width:"320",height:"204"}),"{ width=320 height=204 }"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n\n    On Error Resume Next\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim isSketchActive As Boolean\n    \n    isSketchActive = Not swModel.SketchManager.ActiveSketch Is Nothing\n    \n    If isSketchActive Then\n        If Not swModel.SketchManager.ActiveSketch.Is3D Then\n            MsgBox "\u53ea\u80fd\u5c06\u70b9\u63d2\u5165\u52303D\u8349\u56fe\u4e2d"\n            End\n        End If\n    End If\n    \n    Dim swEdge As SldWorks.Edge\n    \n    Set swEdge = swSelMgr.GetSelectedObject6(1, -1)\n    \n    If Not swEdge Is Nothing Then\n        \n        Dim swCurve As SldWorks.Curve\n        \n        Set swCurve = swEdge.GetCurve\n        \n        Dim vPts As Variant\n        \n        Dim pointsCount As Integer\n        pointsCount = CInt(InputBox("\u6307\u5b9a\u70b9\u7684\u6570\u91cf"))\n        \n        If pointsCount <= 0 Then\n            MsgBox "\u8bf7\u6307\u5b9a\u4e00\u4e2a\u5927\u4e8e1\u7684\u6709\u6548\u6574\u6570"\n            End\n        End If\n        \n        vPts = SplitCurveByPoints(swCurve, pointsCount)\n    \n        swModel.ClearSelection2 True\n    \n        If Not isSketchActive Then \'\u6253\u5f00\u4e00\u4e2a\u65b0\u76843D\u8349\u56fe\n            swModel.SketchManager.Insert3DSketch True\n        End If\n        \n        Dim i As Integer\n        \n        For i = 0 To (UBound(vPts) + 1) / 3 - 1\n        \n            swModel.SketchManager.CreatePoint vPts(i * 3), vPts(i * 3 + 1), vPts(i * 3 + 2)\n            \n        Next\n    \n    If Not isSketchActive Then \'\u4ec5\u5728\u521d\u59cb\u672a\u6253\u5f00\u8349\u56fe\u65f6\u5173\u95ed\u8349\u56fe\n        swModel.SketchManager.Insert3DSketch True\n    End If\n        \n    Else\n        MsgBox "\u8bf7\u9009\u62e9\u4e00\u4e2a\u8fb9"\n    End If\n            \nEnd Sub\n\nFunction SplitCurveByPoints(swCurve As SldWorks.Curve, pointsNumber As Integer) As Variant\n    \n    Dim nStartParam As Double\n    Dim nEndParam As Double\n    Dim bIsClosed As Boolean\n    Dim bIsPeriodic As Boolean\n    \n    Dim incr As Double\n    Dim i As Integer\n    Dim vParam As Variant\n    \n    Dim retVal() As Double\n    \n    ReDim retVal(pointsNumber * 3 - 1)\n    \n    swCurve.GetEndParams nStartParam, nEndParam, bIsClosed, bIsPeriodic\n    \n    incr = (nEndParam - nStartParam) / (pointsNumber - 1)\n    \n    For i = 0 To pointsNumber - 1\n    \n        vParam = swCurve.Evaluate(nStartParam + i * incr)\n        \n        retVal(i * 3) = vParam(0)\n        retVal(i * 3 + 1) = vParam(1)\n        retVal(i * 3 + 2) = vParam(2)\n        \n    Next\n    \n    SplitCurveByPoints = retVal\n    \nEnd Function\n\n')),(0,o.kt)("p",null,"\u6216\u8005\uff0c\u53ef\u4ee5\u6839\u636e\u66f2\u7ebf\u7684\u8fd1\u4f3c\u957f\u5ea6\u521b\u5efa\u70b9\u3002\u4ee5\u4e0b\u793a\u4f8b\u901a\u8fc7\u8ba1\u7b97\u66f2\u7ebf\u7684\u8fd1\u4f3c\u957f\u5ea6\u6765\u521b\u5efa\u70b9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Function SplitCurveByLength(swCurve As SldWorks.Curve, chordLength As Double) As Variant\n    \n    Dim nStartParam As Double\n    Dim nEndParam As Double\n    Dim bIsClosed As Boolean\n    Dim bIsPeriodic As Boolean\n        \n    swCurve.GetEndParams nStartParam, nEndParam, bIsClosed, bIsPeriodic\n    \n    SplitCurveByLength = swCurve.GetTessPts(0.01, chordLength, swCurve.Evaluate2(nStartParam, 1), swCurve.Evaluate2(nEndParam, 1))\n    \nEnd Function\n")),(0,o.kt)("p",null,"\u6216\u8005\uff0c\u53ef\u4ee5\u6839\u636e\u66f2\u7ebf\u7684\u603b\u957f\u5ea6\u521b\u5efa\u70b9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Function SplitCurveByChord(swCurve As SldWorks.Curve, chordLength As Double) As Variant\n    \n    Dim swCurveSpline As SldWorks.Curve\n    Dim nStartParam As Double\n    Dim nEndParam As Double\n    Dim bIsClosed As Boolean\n    Dim bIsPeriodic As Boolean\n    \n    Dim incr As Double\n    Dim i As Integer\n    Dim vParam As Variant\n    \n    Dim retVal() As Double\n        \n    swCurve.GetEndParams nStartParam, nEndParam, bIsClosed, bIsPeriodic\n    \n    Dim curveLength As Double\n    curveLength = swCurve.GetLength3(nStartParam, nEndParam)\n    \n    ReDim retVal(CInt(curveLength / chordLength) * 3 - 1)\n    \n    incr = (nEndParam - nStartParam) / (curveLength / chordLength)\n    \n    For i = 0 To (UBound(retVal) + 1) / 3 - 1\n    \n        vParam = swCurve.Evaluate2(nStartParam + i * incr, 1)\n        \n        retVal(i * 3) = vParam(0)\n        retVal(i * 3 + 1) = vParam(1)\n        retVal(i * 3 + 2) = vParam(2)\n        \n    Next\n    \n    SplitCurveByChord = retVal\n    \nEnd Function\n")))}u.isMDXComponent=!0},40663:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/selected-edge-e8850c953e3fc60d2b3350e344ab2351.png"},56169:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADMCAMAAAA1S4qPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAD2Gpq36rYc6Qv/kzgA7ALHQrGVlZwCCAIiSmPTjy6Gco8bErw5LVXbVdreSAM3QvZmzvKOruRoIMAFfgsjh9WeCavHx8RyRK7qgVIWQofP+8/T19/b29tIAANbq6EJdTsLW3gBuFLKhopJ7cJvD5MTExDX0NbK4wNj92PXlW7KXjEY4UwACIMezooCet9fW12mPq2Z9kOXRtyYrOea5DKLB1tvs9aCTiv7+/ufi2cLOypTOlFVhc70uNSwwPsOokFFSVouKiry8zwHxAStfN21tciPCKqanp22z0vv27dHW2ejhx7u3qjQ4REZHTH6ifzs+SoVdSoKFi7LI4a6cf5qkskoAANHMyWiZwrTH2MaiItrV0OHEr6e6z6uhluz/7JOZpePj5LDAyuvw8vDr5evo5JL8ktzg4QEOKaSFcZubm2//b9zFTjwDRADKAf4AABohMpW72svT0zp5lDqVQyd9NeXp7snK0IKBgjRUQcK0rVb2Vj5wSqnK5MTZ6sD9wEBDTaSMiqSkr5asyU+WtTVJVO3u7Kets5STk6KzwOLY0NPa3X1vf+jo6EtKUfj497u7u+Dl6rKyspijqoxwY5w1PcrAubzDwNLQzdrd4sivfAAAE1h0jCV5mXuDlQq8HW2GnP3SDLWkj868nK2Zl9ni667E1jo8RPj5+eTt87vL1enk4bKtqQw/OFpbXp2JgY+MlMbO2kNFUY2+jX6nzeDd28q6rcLFy8zV4Hp6e+T+5HOgwXNzderz+KGdm4665dbAaq23q3aTqhMaLjt/RkVIUTE0QTUlRL+/vqykouYaHtPT0/vw3uDTxJe1yqXI47i3tqCYk/Tw7Jqap7fS57WomsvEwQsRJ8vLy4ueqJmquSEmNMWoRqu2wHz/fI+Cf5aWmCujNplvNtPDsKrO6bu+w6mtxX+Ll+v4/d7KuIix1LudktHb5lmDo+re0vLo3I2iuNLFubusprnDzLydgNvb20dBU3SCjKKiotrOxtLS4sOpnNXd06urrAAAAB76gqgAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAdyUlEQVR4Xu2dC1xT973Aabs75qMvN3c64dzKnKlOwdRS9Z+2RjJrWWxjMy3XMkQ5gI2muxZdi9SKploDYuMJYSqMzjnL4/AYSm5BUdFbnRQbHzGKRhmVTaxaqQo0Lc7mc///kxPI4ySEvG/GV0nOC0K+/J+///9/EobjBEliKoLC/QBFYBoQWiCBFEnhpF8ITYFchf8whKJADGYtHPMPOB6CAil5Un0dScINCj6YMG3BPMccYp7QVWZsTuH9p9AZ85V9R0n6OjIEBZLgn7/9+6NFsBhcaqDo9w3LRAX9njGMMERCGThJwCf09jFgNkKmG/IBfKaq0uhDJEahXbRVZUgDVfQ3wOTNmKR0BvS9oSgQf+23z/7yd3MBTkq3b6YwWBuf6rx3qBG+b7AmL6WwvYLEwNVkHJ2gkmq7KuikBE2XrKquBHikcH4FjiSTG+4kkrAswHFhLvdsJ68RHY0UjgLwG+FG+rnCou1pJBaCAiMfffbZv//vHy8A4Tmwd6Gq8url1+6C+xVQxp3kk6PAqeQuZc9rZfdU+0amdc+tXF4J7qgqQLoqs4QCgjqt6tRHVcoNLycOr9yw6Gu5FiVK4QhwJ4XDy1ldnTNCkTB8woRxVHfjnTEV5B8qF75CcJkXDhVgFn7t2b88+/ffvQbIK4c7by8eM3L6ovPgPkyB1KnzUODLCVnVo+qnwxM/TFs8t/b+jdvXS8GpYRWgJBKc3ZNwjndZt+bKyOThqRt+cBroDicCHP4hThaoeClpJxqf6clZWn29q20zoHTv195vPHW2KgQFUmse/ctvf/kaEKYAYRZvjHb6ojJyEkqBw5NPJghnFAkoRcyTV3hjXpn7h1WVs6aDJON0si4nswS7mnx/neLk3Y8rJz12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"}}]);