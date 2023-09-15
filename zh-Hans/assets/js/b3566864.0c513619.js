"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[10578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>E,kt:()=>k});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),I=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},E=function(e){var t=I(e.components);return o.createElement(l.Provider,{value:t},e.children)},A="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,E=r(e,["components","mdxType","originalType","parentName"]),A=I(n),h=s,k=A["".concat(l,".").concat(h)]||A[h]||c[h]||i;return n?o.createElement(k,a(a({ref:t},E),{},{components:n})):o.createElement(k,a({ref:t},E))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[A]="string"==typeof e?e:s,a[1]=r;for(var I=2;I<i;I++)a[I]=n[I];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>I});var o=n(87462),s=(n(67294),n(3905));const i={layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u6309\u7c7b\u578b\u9009\u62e9SOLIDWORKS\u6a21\u578b\u4e2d\u7684\u6240\u6709\u7279\u5f81\u7684\u5b8f",caption:"\u6309\u7c7b\u578b\u9009\u62e9\u7279\u5f81"},a=void 0,r={unversionedId:"codestack/solidworks-api/document/selection/select-features-by-type/index",id:"codestack/solidworks-api/document/selection/select-features-by-type/index",title:"\u4f7f\u7528SOLIDWORKS API\u6309\u7c7b\u578b\u9009\u62e9SOLIDWORKS\u6a21\u578b\u4e2d\u7684\u6240\u6709\u7279\u5f81\u7684\u5b8f",description:"\u4f7f\u7528SOLIDWORKS API\u9009\u62e9\u6d3b\u52a8SOLIDWORKS\u6a21\u578b\uff08\u96f6\u4ef6\u3001\u88c5\u914d\u6216\u7ed8\u56fe\uff09\u4e2d\u7684\u6240\u6709\u7279\u5f81\uff0c\u901a\u8fc7\u6307\u5b9a\u5176\u7c7b\u578b",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/selection/select-features-by-type/index.md",sourceDirName:"codestack/solidworks-api/document/selection/select-features-by-type",slug:"/codestack/solidworks-api/document/selection/select-features-by-type/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/selection/select-features-by-type/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/selection/select-features-by-type/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"\u4f7f\u7528SOLIDWORKS API\u6309\u7c7b\u578b\u9009\u62e9SOLIDWORKS\u6a21\u578b\u4e2d\u7684\u6240\u6709\u7279\u5f81\u7684\u5b8f",caption:"\u6309\u7c7b\u578b\u9009\u62e9\u7279\u5f81"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u6309\u540d\u79f0\u9009\u62e9\u7279\u5f81\u6811\u4e2d\u7684\u7ec4\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/selection/select-component-by-name/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u9009\u62e9\u547d\u540d\u5b9e\u4f53\uff08\u9762\u3001\u8fb9\u6216\u9876\u70b9\uff09",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/selection/select-named-entity/"}},l={},I=[{value:"group: \u6a21\u578b",id:"group-\u6a21\u578b",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],E={toc:I},A="wrapper";function c(e){let{components:t,...i}=e;return(0,s.kt)(A,(0,o.Z)({},E,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u4f7f\u7528SOLIDWORKS API\u9009\u62e9\u6d3b\u52a8SOLIDWORKS\u6a21\u578b\uff08\u96f6\u4ef6\u3001\u88c5\u914d\u6216\u7ed8\u56fe\uff09\u4e2d\u7684\u6240\u6709\u7279\u5f81\uff0c\u901a\u8fc7\u6307\u5b9a\u5176\u7c7b\u578b\nimage: selected-3dsketches.png\nlabels: ","[\u9009\u62e9,\u7279\u5f81\u7c7b\u578b,\u591a\u9009,\u6279\u91cf\u9009\u62e9]"),(0,s.kt)("h2",{id:"group-\u6a21\u578b"},"group: \u6a21\u578b"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u5728\u88c5\u914d\u6587\u6863\u4e2d\u9009\u62e9\u6240\u67093D\u8349\u56fe",src:n(47794).Z,width:"272",height:"388"}),"{ width=250 }"),(0,s.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u4f7f\u7528SOLIDWORKS API\u9009\u62e9\u6d3b\u52a8\u6a21\u578b\uff08\u96f6\u4ef6\u3001\u88c5\u914d\u6216\u7ed8\u56fe\uff09\u4e2d\u7684\u6240\u6709\u7279\u5f81\u3002\u5bf9\u4e8e\u7ed8\u56fe\u548c\u88c5\u914d\uff0c\u8fd8\u4f1a\u9009\u62e9\u5b50\u7ec4\u4ef6\u4e2d\u7684\u7279\u5f81\u3002"),(0,s.kt)("p",null,"\u4e0e",(0,s.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/document/features-manager/get-feature-type-name/"},"\u83b7\u53d6\u7279\u5f81\u7c7b\u578b\u540d\u79f0"),"\u4e00\u8d77\u4f7f\u7528\u6b64\u5b8f\uff0c\u4ee5\u83b7\u53d6\u7528\u4e8e\u8fc7\u6ee4\u7684\u6240\u9700\u7279\u5f81\u7c7b\u578b\u540d\u79f0\u3002"),(0,s.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,s.kt)("p",null,"\u4fee\u6539\u5b8f\u5f00\u5934\u7684\u5e38\u91cf"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},"Const APPEND_SELECTION As Boolean = False 'True\u8868\u793a\u8ffd\u52a0\u9009\u62e9\uff0cFalse\u8868\u793a\u6e05\u9664\u73b0\u6709\u9009\u62e9\nConst TYPE_NAME As String = \"\" '\u4ece\u7279\u5f81\u4e2d\u83b7\u53d6\u7c7b\u578b\u540d\u79f0\uff0c\u53c2\u8003'\u83b7\u53d6\u7279\u5f81\u7c7b\u578b\u540d\u79f0'\u5b8f\n")),(0,s.kt)("p",null,"\u6b64\u5b8f\u53ef\u4e0e\u5176\u4ed6\u9700\u8981\u9884\u5148\u9009\u62e9\u7279\u5f81\u7684\u5b8f\u4e00\u8d77\u4f7f\u7528\u3002\u5b83\u8fd8\u53ef\u4ee5\u4e0eSOLIDWORKS\u6279\u91cf\u64cd\u4f5c\uff08\u5982\u5220\u9664\u6216\u6291\u5236\uff09\u4e00\u8d77\u4f7f\u7528\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Const APPEND_SELECTION As Boolean = False\nConst TYPE_NAME As String = "3DProfileFeature" \'3DSketch\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n            \n        Dim vFeats As Variant\n        vFeats = GetAllFeaturesByType(swModel, TYPE_NAME)\n        \n        swModel.Extension.MultiSelect2 vFeats, False, Nothing\n        \n        \'If swModel.Extension.MultiSelect2(vFeats, False, Nothing) = UBound(vFeats) + 1 Then\n            \'Err.Raise vbError, "", "Failed to select features"\n        \'End If\n        \n    Else\n        MsgBox "\u8bf7\u6253\u5f00\u6a21\u578b"\n    End If\n    \nEnd Sub\n\nFunction GetAllFeaturesByType(model As SldWorks.ModelDoc2, typeName As String) As Variant\n    \n    Dim swFeatMgr As SldWorks.FeatureManager\n        \n    Set swFeatMgr = model.FeatureManager\n    \n    Dim swRootFeatNode As SldWorks.TreeControlItem\n    \n    Set swRootFeatNode = swFeatMgr.GetFeatureTreeRootItem2(swFeatMgrPane_e.swFeatMgrPaneBottom)\n    \n    If Not swRootFeatNode Is Nothing Then\n        Dim swFeatsColl As Collection\n        Set swFeatsColl = New Collection\n        TraverseFeatureNode swRootFeatNode, typeName, swFeatsColl\n    Else\n        Err.Raise vbError, "", "\u65e0\u6cd5\u83b7\u53d6\u6839\u8282\u70b9"\n    End If\n    \n    If swFeatsColl.Count() > 0 Then\n        \n        Dim swFeats() As SldWorks.Feature\n        ReDim swFeats(swFeatsColl.Count() - 1)\n        \n        Dim i As Integer\n        \n        For i = 0 To UBound(swFeats)\n            Set swFeats(i) = swFeatsColl.item(i + 1)\n        Next\n        \n        GetAllFeaturesByType = swFeats\n        \n    Else\n        GetAllFeaturesByType = Empty\n    End If\n    \nEnd Function\n\nSub TraverseFeatureNode(featNode As SldWorks.TreeControlItem, typeName As String, feats As Collection)\n    \n    If featNode.ObjectType = swTreeControlItemType_e.swFeatureManagerItem_Feature Then\n        \n        Dim swFeat As SldWorks.Feature\n        Set swFeat = featNode.Object\n        \n        If swFeat.GetTypeName2() = "HistoryFolder" Then\n            Exit Sub\n        End If\n        \n        If LCase(swFeat.GetTypeName2) = LCase(typeName) Then\n            If Not Contains(feats, swFeat) Then\n                \'swFeat.Select2 True, -1\n                feats.Add swFeat\n            End If\n        End If\n        \n    End If\n    \n    Dim swChildFeatNode As SldWorks.TreeControlItem\n    \n    Set swChildFeatNode = featNode.GetFirstChild()\n    \n    While Not swChildFeatNode Is Nothing\n        TraverseFeatureNode swChildFeatNode, typeName, feats\n        Set swChildFeatNode = swChildFeatNode.GetNext\n    Wend\n    \nEnd Sub\n\nFunction Contains(coll As Collection, item As Object) As Boolean\n    \n    Dim i As Integer\n    \n    For i = 1 To coll.Count\n        If coll.item(i) Is item Then\n            Contains = True\n            Exit Function\n        End If\n    Next\n    \n    Contains = False\n    \nEnd Function\n')))}c.isMDXComponent=!0},47794:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAGECAMAAADJI49yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAMawRgAtgPf393ZRAGOwsC1wkyUAAHR0dJx7FKbIokcxCouwiwAAMwBRosXLqLBjADg4YyUAM+DPWiVxwx5Tb3S61dSLOCQkJCYloyUAW6OTaHpfHZK7z0OPw2hLFrDUi0FxjQAAW7/O111RgJB9QWMAOPewYziL1GMAANIcAcOvYmOw9wA3VIvU99vb2pOTk1VAGTk5OVRzfH1/gBYWFrDH2V1dXV2s45a1x8CYHWMAY4s4ONO4STCApo+HNcDGy4s4ACUtgDaOxPfUi49xM/ewi6OPS10tALH09Stmh32bqwBjsPDEH7Gys4+5zJiwvk+RsNKxYzIzIbDO5l0tM2Ow1NnVymNjsNX09gA4i6KWga2TOHZRWy9TS2M4i2NjADgAOC95ntLi6qmHFtSLYyVRoouLY5JyE93Ld0RERH6TmSpjg9DX3NCoHurchrBjY3yxzdbMrzgAAODi37ClkNHBc12P42KInuLdzEKItaasgKaDL6aPW+C2HmWXsai+yTGFrbna3mupxOswA8a4kiUtM4tji4p6VXRWGlA6D2JFE/jiXVdvW0MAAItkIAAAY6N6IKeGPR5MV7m5ucbGxsPW48nd7DiLsKbI45p1KFVVVUOP40MAWxNKaE6CnWxtbzg4i97EYnV4eZjP5os4Yyhbeq6ki87OztPT0zhjsC51mUVsgrKgcy99orSPG9LNuzIyMvf1rH2Rb93EULrJ1GJiYlyRrGFPJkRgRvbKIEtLS9a3K26xzJBpIMzR0XNcJ47H4r+5q7nU6fX11aWlpDgAYxsbG0MAM4dxOCxtj9bX1ioqKs/h73ZxgIeIiZpyILmvnUCDovw/BdXc4bnBxsvU27eXOYODg66RRYyzyMzb5ixqh3h4eMvGud7f3dmvIDpykGNOGsyuVoGovK+KMeq+IENRomifuZmZmitpi12eu6qrrIyNjqbIw5iGRT1+maeAJ7CLOHbI4wAAOLCLi66FH+rq6SlfftPk8VhCEfLec9fQxDFqiFGHowAAAIkEBRUAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAcNklEQVR4Xu2dD5wc1V3AVzcNISf1tOKhBVtBuFx7SZozCTUlh6cXmkPABqN1KdoaqiURgjRpBROgASoUUhIicKTU0gJNibGBXQnohUYwWxCSSEtTEkRCS/9IMEmtIEdqzae/f+/Nm7czs7Nzd+zsu/f9fG5mdv6+97333uy8385MoViH4X3Xz/jS5fLBffbWEbLvkR8svqTy8SdmfExmuE49IW2vbfvOXec++5k9bTLDdeoKGfr+nDV7Hli92gtB7r/+xqGhoTWrgZCQ9rOKxY7C2tNhxHQWCt000V4oFF6dRpM2la7zSjzVMYXHxWqfmlWPYGN9KEWwKASksQMSUyiogzGQ7AGZ1LQbqxhCHpRxQNvxlTVRQjpBRP+fQLZ1znAOgfvusI10Qoqrfa9+RBJe6VIr9PfgXupjbAy0m0LCiwIwRR2YqkqXaYCSbYOJxjQippAaI21zvqaEzL3x/TIT0nAa7LT/MThM5T1yrJCQap9hHJGDqWN2TFGrt0/BspYKtTEQEgIYizSURhICyTGOQcm2iRViG2kbuvJbJGTuynXvPPmGr8tskg9lEUeS9Roh/csKBThEte9NXWs/xOuqY4JFSi5MnTKNEwjVAAoND3HXOGq/vQ8qB+yH/8GRQniKF1U+aGqhBLGQYifugffKyZbEweHZECQaqzqtHRZiGWkDG8B9N39vcQV4r1QbsiA5ERGWkO7in06j/0y17+fgoJIZGeHmPAlDXJfK8RnTeFjsgEWYhXZKP65B+5aNESWkQ5oHWdS/TCUCoDSKENyx2islWxJnCtH7Ty4hS9nI0pt/eFdl8bqVIoQSxEL6v8C7CQlpl0pL+cWEycF4RBvyfFwZEy37oiGlEjVhZap0waF4M5VggIUE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"}}]);