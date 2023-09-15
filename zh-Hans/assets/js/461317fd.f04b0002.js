"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[52153],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>m});var r=t(67294);function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){A(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,A=function(e,n){if(null==e)return{};var t,r,A={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(A[t]=e[t]);return A}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(A[t]=e[t])}return A}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},k="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,A=e.mdxType,o=e.originalType,a=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),k=c(t),d=A,m=k["".concat(a,".").concat(d)]||k[d]||l[d]||o;return t?r.createElement(m,s(s({ref:n},i),{},{components:t})):r.createElement(m,s({ref:n},i))}));function m(e,n){var t=arguments,A=n&&n.mdxType;if("string"==typeof e||A){var o=t.length,s=new Array(o);s[0]=d;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p[k]="string"==typeof e?e:A,s[1]=p;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(87462),A=(t(67294),t(3905));const o={image:"component-reference.png"},s=void 0,p={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-sequential-component-reference/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-sequential-component-reference/index",title:"index",description:"\u7ec4\u4ef6\u5f15\u7528{ width=600 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-sequential-component-reference/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-sequential-component-reference",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-sequential-component-reference/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-sequential-component-reference/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-sequential-component-reference/index.md",tags:[],version:"current",frontMatter:{image:"component-reference.png"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u9009\u62e9\u6240\u6709\u6291\u5236\u7684\u7ec4\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/select-suppressed/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u8bbe\u7f6e\u591a\u4e2a\u88c5\u914d\u7ec4\u4ef6\u7684\u6c42\u89e3\uff08\u521a\u6027\u6216\u67d4\u6027\uff09",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/assembly/components/set-solving/"}},a={},c=[],i={toc:c},k="wrapper";function l(e){let{components:n,...o}=e;return(0,A.kt)(k,(0,r.Z)({},i,o,{components:n,mdxType:"MDXLayout"}),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"\u7ec4\u4ef6\u5f15\u7528",src:t(79862).Z,width:"963",height:"278"}),"{ width=600 }"),(0,A.kt)("p",null,"\u8fd9\u4e2aVBA\u5b8f\u5141\u8bb8\u81ea\u52a8\u4e3aSOLIDWORKS\u88c5\u914d\u4e2d\u6240\u9009\u7ec4\u4ef6\u7684\u5f15\u7528\u5206\u914d\u6570\u5b57\u7f16\u53f7\u3002"),(0,A.kt)("p",null,"\u7f16\u53f7\u6839\u636e\u6307\u5b9a\u7684\u79cd\u5b50\u503c\u81ea\u52a8\u9012\u589e\u3002"),(0,A.kt)("p",null,"\u7f16\u53f7\u6309\u7167\u7ec4\u4ef6\u5728\u88c5\u914d\u4e2d\u7684\u9009\u62e9\u987a\u5e8f\u8fdb\u884c\u5206\u914d\u3002"),(0,A.kt)("p",null,"\u7ec4\u4ef6\u53ef\u4ee5\u5728\u7279\u5f81\u7ba1\u7406\u5668\u6811\u6216\u56fe\u5f62\u533a\u57df\u4e2d\u9009\u62e9\uff08\u53ef\u4ee5\u9009\u62e9\u7ec4\u4ef6\u7684\u4efb\u4f55\u5b9e\u4f53\uff0c\u4f8b\u5982\u9762\u6216\u8fb9\uff09\u3002"),(0,A.kt)("p",null,"\u5b8f\u53ef\u4ee5\u914d\u7f6e\u4e3a\u5728\u5f39\u51fa\u6846\u4e2d\u6307\u5b9a\u8f93\u5165\uff08\u5c06",(0,A.kt)("strong",{parentName:"p"},"INPUT_SEED"),"\u53d8\u91cf\u7684\u503c\u8bbe\u7f6e\u4e3a",(0,A.kt)("strong",{parentName:"p"},"True"),"\uff09\uff0c\u6216\u8005\u901a\u8fc7\u63d0\u4f9b\u79cd\u5b50\u4f5c\u4e3a\u5e38\u91cf\u6765\u6307\u5b9a\u8f93\u5165\uff08",(0,A.kt)("strong",{parentName:"p"},"INPUT_SEED"),"\u7b49\u4e8e",(0,A.kt)("strong",{parentName:"p"},"False"),"\uff0c",(0,A.kt)("strong",{parentName:"p"},"SEED"),"\u7b49\u4e8e\u79cd\u5b50\u6570\uff09\u3002"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-vb"},"Const INPUT_SEED As Boolean = True '\u5728\u8fd0\u884c\u5b8f\u65f6\u5728\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u79cd\u5b50\uff08\u8d77\u59cb\uff09\u7f16\u53f7\nConst SEED As Integer = 1\n")),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-vb"},'Enum ScopeType_e\n    Selected\n    topLevel\n    All\nEnd Enum\n\nConst SCOPE As Integer = ScopeType_e.Selected\nConst INPUT_SEED As Boolean = False\nConst SEED As Integer = 1\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n        \n    Dim swModel As SldWorks.ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    Dim swAssm As SldWorks.AssemblyDoc\n    Set swAssm = swModel\n    \n    If Not swModel Is Nothing Then\n        \n        Dim i As Integer\n        Dim swComp As SldWorks.Component2\n        Dim nextRef As Integer\n        \n        If INPUT_SEED Then\n            Dim seedStr As String\n            seedStr = InputBox("\u6307\u5b9a\u8d77\u59cb\u79cd\u5b50\u7f16\u53f7")\n            If seedStr <> "" Then\n                nextRef = CInt(seedStr)\n            Else\n                End\n            End If\n        Else\n            nextRef = SEED\n        End If\n        \n        If SCOPE = ScopeType_e.Selected Then\n        \n            Dim swSelMgr As SldWorks.SelectionMgr\n        \n            Set swSelMgr = swModel.SelectionManager\n            \n            For i = 1 To swSelMgr.GetSelectedObjectCount2(-1)\n            \n                Set swComp = swSelMgr.GetSelectedObjectsComponent3(i, -1)\n                \n                If swComp Is Nothing Then\n                    Err.Raise vbError, "", "\u7d22\u5f15 " & i & " \u5904\u9009\u62e9\u7684\u5bf9\u8c61\u4e0d\u5c5e\u4e8e\u7ec4\u4ef6"\n                End If\n                \n                swComp.ComponentReference = nextRef\n                \n                nextRef = nextRef + 1\n                \n            Next\n        Else\n            Dim topLevel As Boolean\n            \n            If SCOPE = ScopeType_e.topLevel Then\n                topLevel = True\n            ElseIf SCOPE = ScopeType_e.All Then\n                topelvel = False\n            Else\n                Err.Raise vbError, "", "\u4e0d\u652f\u6301\u7684\u8303\u56f4"\n            End If\n            \n            Dim vComps As Variant\n            vComps = swAssm.GetComponents(topLevel)\n            \n            If Not IsEmpty(vComps) Then\n                \n                For i = 0 To UBound(vComps)\n            \n                    Set swComp = vComps(i)\n                    \n                    swComp.ComponentReference = nextRef\n                    \n                    nextRef = nextRef + 1\n                \n                Next\n                \n            End If\n            \n        End If\n        \n    Else\n        Err.Raise vbError, "", "\u6253\u5f00\u88c5\u914d\u4f53"\n    End If\n    \nEnd Sub\n')))}l.isMDXComponent=!0},79862:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8MAAAEWCAIAAADNe9LUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAGdYAABnWARjRyu0AAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAACPuSURBVHhe7d3LktzGvSfg3kzMvJC54NNwxd1EzHLirE8cbrk/j8DV2fAVbIdpSpata4uySOou27LsscdzsyaRiUJlAolLobtIoPr7Ag428vLPBOrCnyuKrat//vOf/y/zfzP/J/O/AQDgzmhDcNSG46gNzdFV+2eWodsZWXr+X5l/AADAhWojb9RG4SxVt3H5kKfbJJ2a0oh2xiFAt1X/8Y//mfk7AABckDbmRm38PQTrNhwfInVKzk2STj8FqSOMSBPS5FSrLf/3v//t4H8AAMAFaWPu3/7WBt9Dtk6pOCXkXphuknQ6jzm7idFpdBegU8W0wF8P/gIAABekjbl//WvKvSkDpzyc5+mUmVN+vkp/pAydYnQM302MTvNTrVS3Xecvf/kRAAAuSBtzD5E6ZeCUh1OYDlKYDlKYbpJ0itExZ7cfRac5KUCnimmBP0c/AADA/v3pT39qf4pS1k25N2XgFKlTNh5+OH3VxeiYs5sY3QXoVCsUDWv8MfpD9D0AAOzfd9991/4Upaybcm8K1ilVd3m69+H0VRej00fRYVwYnQJ0is6haFjj22+//eabb77++uuvoi8BAOCCpJQb4m4IvSH6pmCdPrQO8Th9Pp3CdMrTIUJfdTE6fRQdMnQI0Ck9hyopNH/xxRevX79+9erVy5cvP49+DwAAFySl3BB3Q+gN6Tdk4JCqQ6ROeTqE5PzLHilMt0k6fRodRoShYUKYGaJzKBSKfvbZZy9evPj000+vr68/+eSTj6OPAABgzz48SKcp5Ya4G0JviL4hA4dgHSJxyNPff//9H//4x16YbpJ094H0jz/+GEaEGP3fAACA6NWrVylM9z6ZDhH6KvwvfSD9ww8/fPfdd19++WWY8BMAANx5IRi/ePHi9evX33zzzR/+8IfunyGmMH0VYnT4I4TrkLK//fbbELolaQAACEIw/uSTT16+fPnVV19999133e/0SJ9MN0k6/JG+If31119//vnnkjQAAAQhGH/44YefffZZ97F0/ts8rtIH0uH8+++///LLL8M4SRoAAIIQjH/3u999+umnr169Sh9Ld7/KI4Tpq7/GXyCdvtrxxRdfvHjxQpIGAIAgBOP33nvvk08++fzzz0NU/uabb9Lv8UgfS1/9Jf6XwMN56Hj9+nVI3JI0AAAEIRi/++67H330UfqCx9dff51/LN0k6e5L0i9fvgyJW5IGAIAgBON33nnngw8+6L7gkX8sffXjjz+mL0mHjs8///zjjz+WpAEAIAjB+Ne//vX7779/fX2dvuCRfyzdJOnwR/pN0r///e8/+ugjSRoAAIIQjJ89e/bb3/72448/DlH59evXX3311bfffps+lr7685//nJJ0iNifffbZhx9+KEkDAEAQgvGvfvWr9957L31V+tWrV19++WX3BY8mSYc/QrIOEfvFixcffPCBJA0AAEEIxr/85S9/85vffPjhhyEqv3z5Mv+Cx9UPP/yQJ+n3339fkgYAgCAE41/84hfvvvtu+keHva9KN0k6/JF+BZ4kDQAAnRCMf/7zn7/zzjvdPzrMvyotSQMAQJ0kDQAAa0jSAACwhiQNAABrSNIAALCGJM1b9fTh1dXV/cfX7SkAwM2EaPHs2bP2ZFwYE0a2J2u9mSR9ff304f3798N2j+4/fNr2cqoYPwv3w+3cZRqVpAGAWxUi8n/6z/9lOkwvGbPE+ZP09eNDgr7/sNPEakm64unjcG9mc2WKn8f7efg/KVu/pcuuDgDgRqaD8m3F6ODMSbqN0fcf7/MD0zcu3q+FSbqMzdfpc+pNZ+mFVwcAcFNjcXmsfZ2zJukdhLuNWZg1K0l6Dzl1+zsEAC7HMDQPW27ojEk65qalOTp+kbrJ3dH9h70PsQ/RsRmWhnTfsy6aypTWBc7rx8cxtS8UL1y9qNNbKyrq9BaaKxL7C+OZs6tVyFu7m9/enqzWmoudvWnlgOHqj8eurnYpU7ex6T1ubL/fDwcA3oA8Ouc/35YzJul63KtJcasJdY+fPo3fpY2nWZBMtZovBIfgF4ekEU/jp5xN22FWvmA3qwlceeliV0tXfxzWSnVqYw7xsVwpGzFX5Pr6cGGpQpBXL1RvbVq/bW1PmuWiwyon3OrJmzZ9scPVn45d3eBSllQ+9DYF870DAPQ8OwToW4/RwfmSdIxIS2JOGljmwjYwdbPjmCJxtS35Cv1JhzHlJlJjV+mE1Ys6vTLpvPIpdDdpSZG0crnfmnax9ixJmz40prNQq9hS2tHpF9vfaLv+YMRhUn316tW1pdqzucq1CgAAk56dJ0YHZ07SvbRXkULXcFyZmYqclsSmcmK/VmVWkI86YfX+qLJ4czZYKQ45TFtQpL/uqKJwcB0/m89npgsrlzvhYgdbKOY2QwYj8j3VVg/KhZLyUuYq1yoAAIx7tuPPpPtZamh0WNFRGTUfy8Zqx+Y0c2REr6M6qlg/jqgrhkwWCWoXVVFb7n7xxe1YqLdcdQeNomNkVGzOblpdu/Xa6kHt6oZr1xWVm4stPrcGAKh4lgXo/Ofbcr4kHTPPwlC4Jt7V6veGjdSOzWnmyIheR3VUsX5bMn7/t6/d4XyR4JSbdv/w+6Sbrzz3Z8RCveWqO2gUHSOj0pLHmzZ5sbXVg9rVDdeevo2hSvtd72aoQA0AjHk2iM7Dlhs6X5LOs9eEIknlhhGrHDUby0ZrZ80jI3od1VHF+nHE9LXOFwlqF1Uxuu1OLNQbMjqr6BgZlTXHHyc3WVs9qF3dcO35y2/E/2xmGF3bKwBw5z0bCc1j7eucMUm3eWomGKVBwzQU27u5lXhXDkh6w+rBLG9dvXpvyFidzHyRoH8+olqrUNvQ2CbLRdfftKOREeVCSXEp85VLp44HAO6EZ5Nxebr3JOdM0oekE8LT8NsHTx8+bgNQCmllHEoTj22V6BiHTMWy9rQ3L1U+zlu5en/9NKU/6Prx4SIXFRmuPKJaq1AvtPhie1PTmOUXO3IZtebyUuYrF4/3ghsBANwxzxYE5SVjljhvkg7yL7W20q8nzgJQG97ul7/kOA9IlcQUQ9eCJH2/qdb+/uG2cjlr1erD9eN5UNbpbWauyKFK813hUKaMjUfVWoVUZzhk4cXO3bSZix1bvXJ1/UuZrtyMbn+ZdPpt0s3AwTIAwB0W4sGzBRE5jAkj25O1zp6kG/G/SpcCUiNGoV5ILP+zdr3fQ1yNjjFyLUjS4bT8rwpW8unpq1fXL/7re/06i4t0NXoXl6nWKsTC9SELL3bupk1d7Pjqg6urXMpE5WLvlc0DALxBbyRJvy3zgZMBNw0AYBlJmpKbBgCwjCRNyU0DAFhGkqbkpgEALCNJU3LTAACWuegkDQAAZyNJAwDAGpI0AACsIUkDAMAakjQAAKwhSQMAwBqSNAAArCFJAwDAGpI0AACsIUkDAMAakjQAAKwhSQMAwBprkvSfAQDgzpOkAQBgDUkaAADWkKQBAGANSRoAANaQpAEAYA1JGgAA1pCkAQBgDUkaAADWkKQBAGANSRoAANaQpAEAYA1JGgAA1pCkAQBgDUkaAADWkKQXe/Lg6upn//a8PbsozaVdPXjSngEAsMTbTdIxwZW2m+cuJ0k3V1LcZ0kaAOB0by1JpxDdS2/P/+1n282qF5Okw12WmwEAbuztJOldfgYqSQMAkHkbSfqUSJo+uk6KOYci2YBKzbnpMVRmffn4fsHDilVdOs0rFGl1ZMWgXLSYNF82ynuLLfYXffAg/dBJo9thaU5rtGa7q4P+PACAu+LNJ+kYwxbFr5jlupG9eYeg18XKcnQwO/1nP/vZILdm5/2CcUpWv5DK5wVjS1a/umJ1kex8vmxvRprQza8uGscULXFYdmlTNWNftp0H2TwAgLvkLEn605q2b5DaxgzzXtFShr1GGfiWTC/7B8qC0xuPY3vd5fzairGtt4mibbZsPCkqFC3VyxzOKS9tsmY5tNQ+0gAAe9YmmwXOlaTbn4ZiKKtEw04b4WqJLW+r9DdNp0wv02JFWaRWslO5rF5jZcX6JrLYOlu2tqe8rbpCvkBSlJmuWd0RAMCF2F2S7mQRL/5Yc5hayXs3nN7qTT0OGp8SZGtn8inD6XHOsGLePFO2t9ej8UWDYdF82KKaRQMAwMXYdpJOQWwQDqMs4sUfp6JaJSPecPohQx6by0G1KZ1s7Uw+ZTh9ZJN580zZkQpH1T0Pi+bDZmtGcVQ02B0AwH5tPElPRLU84jXhbiqlVTLiDacPm8qWypSj6kXlG1q2YiOfNVe2qXDiZfa2FRXD5mpm4tDhFQAA7NXWk/R4ABskz4lAV4S/5GbTh6G1t83Kikdxdm+9cgu16eWIpGibLVurkKktWt6nqBw2UzN3wlAAgB3YfpI+JMR+yCtzWRqTDwktXW8lI5YJcd30ri1NzwdVphzVh+fj69Nro7JoOl82jcgLh5apywzinOMig2FTNZ88yCb2dgsAsHd7SNJRCmylXiyLUe2oF+J6GXEQEE+bHuTjw+ByUH1K67B2r0JmdHp5G8pJ82UbeW+QDRhbtFszdVaGjdUs20fvBwDALu0mSV+SYYq/FWcqCwBAlST9FkjSAAAXQJJ+CyRpAIALIEm/BZI0AMAFkKQBAGANSRoAANaQpAEAYA1JGgAA1pCkAQBgDUkaAADWkKQBAGANSRoAANaQpAEAYA1JGgAA1pCkAQBgDUmai/UvsFXtc5QNeLYl7Z44s/Z1CMu0z5sRkjQXKzz7f4LtmX1f5k0K+bV9YN42SfqN8bcDy0nS3F3eK9kmSXpTUpJuT96esAdJ+o1Jfzu0JzBuyTu2JM3FkqTZJkl6UyTpO0iSZqEl79iSNBdLkmabJOlNkaTvIEmahZa8Y0vSXCxJmm2SpDdFkr6DJGkWWvKOLUlzsSRptkmS3hRJ+g6SpFloyTu2JM3FkqTZJkl6UyTpO0iSZqEl79iSNBdLkmabJOlNkaTvIEmahZa8Y0vSXCxJmm2SpDdFkr6DJGkWWvKOLUlzsaaS9PXj+1c99x9ft52rPH14dfXwaXsSNS1HZR93mSS9KQuT9PV//Ou//sd1e3IGYQ+S9BszlaSfP7rXvmt37j163nau8uTB1dWDJ+1J1LQclX0rhC3fcIuMWfKOLUlzsWaTdB5uU7Ren6YHBUOQzk5jqr5hVudSSNKbsiBJ//zf/2tDkr4Ys0k6D7cpWq+PqoOCIUhnpzFVr6/ehnJJ+kyWvGNL0lysk5J0ENPu2o+OawVzsV+UpiFJb8pkkm4zdCJJX4yTknQQ4+raj45rBXOxf0USLj7YlqTPZMk7tiTNxTo1Sedht/xmRpmAm77QEoc3nQ8fph861cDczmrPuMsk6U2ZTdL//vP2B0n6YpyapPOwW34zo0ywTV9oicObzgcP0g+dauBtZ7Vno548GC4W91mfHzaxoCgzlrxjS9JcrPVJOvyU9fW/mREz8f375fRawdxcP3eIJL0pzxZ9T1qSvijrk3T4KeuLqTrLqzHT3rtXTq8VzM31tyOCkUEjSbydJU7fyJJ3bEmai3Viko5N1U+Nez3p8+peKq4UzMQpcjSJJH2ikaBwS0J+DQ9KezLqIpJ070ae975u2olJOjZVb1Wvp7ml9Rg+mpTjlPEcnSpOP05TD2QbpydWYNKSd+wLSNLt8yxzl58xzd2Yuv72btWGTL/ad+iUJB3PR799UX4zoxqLa0k6FY2kaI5OS9LxNXsbL8y5N4e3Zf4CmxHnS3whv4YHpT0ZtZkk3b6HF5Y+rL0bOX1f24Vqtff/l8UpSTpl0bEbVd7EeNP6d6Z2u1LRaPRGTjwCpekHstGWmh5EzZJ37H0n6fTkKJ9m4fk5/7y7WLVXbKF9PdUGzc7dm9kkXRik6N6QMknXR4/n5ern2NxRbydJb/YFPn+BzYjzZYAdJum1N6M3d7pUfFwal/iXxWySLgxuUm/Isb96S2duV7rRRX9bf/zBKU0/kJ0TqxItecfecZKOz75dv5bPYOYV277i0j+C6A+bnbs3s0l6LNi2GXosO69J0kH1o2zuIkm6MH+BC4PCSpJ0Xey91L8sZpP02NXFzvy2lTexekvnb1czrTeiXWjiATqafiCTuMSycuSWvGPvNklXnnh17dOnVcw4PL2zIak/a8ifdt3LIa853MPEirGvKTmyQiuvUHRPTT+87jqVwm3pB0/S4HJv3eUd5NvolTv11iV5waw3Fqvu9mbWJulhUr6VJD0/gjviRkm6OW1eLRMvteK9oOksGhqHGflLsl9nwUJBWbp4S8mLV2Z24rhiZlE1TD1speuaKneyi0nS8daUN7I3ujd3vFSj6Q3l0mNReXzypji2U9Q8jM2GpJlZw3ATecGs99Ye/bVJutlXuX7ZMuwPpgomoyNiR3kPKqqrHiwrwZgl79g7TdLxqTH/vIgvxmxY7/zwBDs8f1P3veMzOg3ont5p1fyf5fYGzK6YzoNuSn9Ar6F3obPT4/hsPwNxQjNgsPX+3HCa9fYWSrOPw1P3+K3rF4jdh7Pi5BatTNKxq0jK8dPkGyfp6jTuohsn6UbX0nttlsOfP3pQvOiyl2RsGX2Jzi/UVsxanj96VB87/RIvd1ydmzVM11pDkq6Lj0NTLj0EeeHeSuF09PFrZx+Hp+63/ZfFyiQ9XL93tc3pYH8TBVvVaUexQLFOaWT63DSWWPKOvdMkHZ+8k0/MoDaoaEtPs2xEasifdZXx5ZMyth2aZldMZ0WFokA6KyoULXPTK/N7su3Esdng6bnlQv25bUO+teLCh7WnV7sVK5N0L0rHs2AmSfcrhtO8fKoymbS5M26epMffBJruorcz+5Ir6swu1B+eGy41tXh5gb3LbQx3cqueSdJV8bancrFyVnrq4Wx7u7r9uW1Dvm62Uq329GrrrEzSqa93bfnF1G9pr2I4zcunKvMXGMYNS0ejq46M5wRL3rH3maTjE2/uKVK8ODtxatua/5wM5hQrVZfNGudXrD3h81mV7qJtZnrtknqK4XF0eTY+t1h7OLbcRxCHtBMq+6623a61STqIn0K3wqgyO499uJzSchA78xINKZqDGyfpiTeB/HVXmnmBB2XpJQvVy1VmVttaedX6uInJt2CHSbpn4iEpb13vRk7f17jQoVysXZ71VsoUdYdji8KNOKSdUNvT9D5XWZukg7j9VhhVbm5sq+n+BbEzL9EYX2yZM9wgDpa8Y+/4M+mZ503+2szkzcPXy6BuUWU4vtHNWbBibeNZ1fhjzbLpg7OKpkI2IN9cbW5vR93aw7FTt65X5ah3LbdsKknD23PbSbp8OcbxjclRnd6r8zhpZqFKd+vU13t+gXHuYNz4WrdhWZI+u7CHxUl64sb3HuFydG/u9H1terNy+UNTW6n3sHd1h2MHy2ale1WOxve5ylSShsySd+ydJunshTdmZEjeHH9e/AqvjW90cxasWHvnyqqOVDianj44q2gqFAOOa1Yq5asVaw/XGWztWDj/8U2SpNmm8ybpqH395jMHo9oxx2Jl6ZmFKt2tOKreVZVf4GCT0fhat0GSrmt6h0+YOL5cKZ6NLjPc1WDZY+H8x7OSpFloyTv2TpP0kpdb/U0if1Wf9gofWTQrMr9ibUje33SXOyrNTO+fVVRWiHNC1ZmNFi3DdQYTDmWbnyurvgGSNNv0BpJ0EqceBvdHDQuVLTMLxdr1F/VEV00xvLJq8V5yBpecpHu3rjd3vFSjeFySQ7lipWGVomW4q8GEfJeVVc9BkmahJe/Ye03S7eutfPn21F6RRduJr/B00qtYFJxdcbhAbxe1Cpm56ZVL6qkukK4y/uLQtiu15CvFiV3LcJ3B1ooSM9d1HpI02/TGknQxtzdq7jU+u1BvX7mJropi9HBbqam/lVt0MUl62NW/db0BE6WC4nE5SI/P/v+ykKRZaMk79n6T9OFNov9GEFq7F2H5gh68RE99hbcLZiP6C8ytOFygv4u0Rj4ktBQXNDm9fzrQ31ArLZt1xYZuqUN32VCUGWytViEfEFraAuXI2yNJs03nTNJPHmSvy3JqPiwoX3fxrHiNziwUxPLF+eHnVC2fHVqOA0uVC8zO0+mxWLnt23A5STrdrK5z9jGdKtUWGz5oh6pdV/mIDBaNDUWZwbK1CvmA0NIWKEfegCTNQkvesfecpKP0oivlL9qyv3xXiH0nvMIP4+MbTKus2JhasfbOVd9FJutbMr1bv/p2E2sPN91N6y12EJqLteubLlaMQ4qWvGDQTR+OvB2SNNt03iSdXl5JbWDWng/uv8bnFmoV6xXDy530puXiwKK722fQ1My3cvtvFxeUpMtbN/uYTpdqeqsPW7tG1hWHtvqLDp80g2WHj2leMOim39qjL0mz0JJ37N0n6Tdp+I7AlknSbNNpSZoz21mS5jZI0iy05B1bkj7B3pN0+3/vF2gn7JwkzTYtT9LtC/KgbeVWSdLb0T7RR7SDboMkzUJL3rEl6RP4THpfJGm2aXmS5g2QpO8gSZqFlrxjS9InkKT3RZJmmyTpTZGk7yBJmoWWvGNL0lwsSZptkqQ3RZK+gyRpFlryji1Jc7EkabZJkt4USfoOkqRZaMk7tiTNxZKk2SZJelMk6TtIkmahJe/YkjQXS5JmmyTpTZGk7yBJmoWWvGNL0lwsSZptkqQ3RZK+gyRpFlryji1Jc7EkabZJkt4USfoOkqRZaMk7tiTNxZKk2SZJelNSkt4CSfqN8bcDy0nS3F3h2Q/b1D5H2YCQX7ej3RNn1r4OYZn2eTNCkgYAgDW2laR/urpyOBwOh8PhcDh2dLRBdo4k7XA4HA6Hw+FwFEcbZOdI0g6Hw+FwOBwOR3G0QXaOJO1wOBwOh8PhcBRHG2TnvNEk3TYBAMDGrEitkjQAAEjSAACwyorUKkkDAIAkDQAAq6xIrZI0AABI0gAAsMqK1CpJAwCAJA0AAKusSK2SNAAASNKwJVf//UOHw+FwOBwbPNq/qksrUqskDecSXqg/AQAbI0nDDkjSALBBkjTsgCQNABskScMOSNIAsEGSNOyAJA0AGyRJww5I0gCwQZI07IAkDQAbJEnDDkjSALBBkjTsgCQNABskScMOTCbp68f3r3oePm37gqL7/uPrthkAuClJGnZgNkmPJeQYo7tcnUJ1HrMBgPUkaW7Tkwfpk8+rB0/aFm7FZJJ++nD8s+brp0+LjpilfTANALfi4pN0F+06dznjNXdj6vqHd+veo+dt37w4W4Q+i9kkvfhz5qnYDQCc5JKTdIqFZbJ7/ujeHY564ernk3SeneOEpeF4tjrrTSXp8gsccyRpALg1F5ukfT5acXKSbqcs+2Bakj6j2SR9NBmTfbkDAG7RhSbpxTk6fW59UMw4BMNsSOrPGgaf3zYj8prDPUysGPuakiMrtPIKRffU9Li7XKXwscLRIElXV+9XzybM7fYw9YQp+YCiPyk3U9zhkcqDi9yeqSRdaD5yHs3KqdM/OASAW3KRSXphMIqxKhvWOz8EskMUS933QmPbkgZ0SS2tGvrLljzKzayYzoNuSn9Ar6F3obPT4/hsPwPNhHy5tsRhyuTqleqT4+Na+e2KZqc0Ri8wTchanj96VB9bVO4ts0WLk3QQ8/IgLqcULUYDwC26yCQdM9NUYGzUBhVtKZRlI/oprTq+zGNFRJtdMZ0VFcqMF8+KCkXL3PTK/J6mQlYgju8mzKw+6J8ZH3db9i+aMnd/iv7OTOXNOyVJD78KLUUDwFlcYpKeyFNHMZQNclSeroZJazCnWKm6bNY4v2Ic0quQz6p0F20z02uX1BOHZ/Kxc6v3q8+Nj2uVm1kypdefV5m4vLnKm3dKku59F9pXOgDgXC72M+mZiJQl3FzePMxlg7pFlXqO6+YsWLG28axq/LFm2fTBWUVeIS1Xzq3pVqysVTO+2xVTikUr3a35zW/dKUm6+Eg65mgxGgDO4iKTdMxN0xlpZEjenGe0ZJDUiirD8Y1uzoIVZ5LiSIWjmaDZP6soKxQLzq5eW+u03a6YUixa6W7Nb37rJpL09eP7WVLufQJdpGoA4HZdZJJeEpzqqSvPZfnPyWBOsU510azI/IpLkmK5o9LM9P5ZRb9CnNA2zK3er75ityumLLw/c5U3bzpJh4s7Kj6ATsF6yKfUAHALLjNJt8mpF7pKtWxVtA1jZ9Nd1MyDZjrpVSwKzq44XKC3i1qFzNz0yiX1DCvEJVPTzOqD6qfvdsWUpfdnpvLmTSRpAOBtudQk3UasWvDq4lQMV1l/L2wNY+cgyMUhh5Z2wWxEf4G5FYcL9HeR1siHhJbigian908HKhWyTU6vPiw+Pb621ulTeovGzRbnh5+nKse+wV42RZIGgA263CQdpfhUOsasfn/e0/YVTYMgVySww/gU5pKyYmNqxQVJMcjrB1nfkund+tXgWKlwmNI2j69e2Wpw0m6Tk6ZUFi3mF8PHKsci1b1shiQNABt04Un6TaoGSbgVkjQAbJAkfWvucpJuP+TNtB3cEkkaADZIkr41PpPmfCRpANggSfrWSNKcjyQNABskScMOSNIAsEGSNOyAJA0AGyRJww5I0gCwQZI07IAkDQAbJEnDDkjSALBBkjTsgCQNABskScMOSNIAsEGSNOyAJA0AGyRJww5I0gCwQZI07IAkDQAbJEnDDoQXqsPhcDgcjg0e7V/VpRWpVZIGAABJGgAAVlmRWiVpAACQpAEAYJUVqVWSBgCAzSdph8PhcDgcDodj+0cbZOdI0g6Hw+FwOBwOR3G0QXaOJO1wOBwOh8PhcBRHG2TnSNIOh8PhcDgcDkdxtEF2ztmTNAAA7MVJOVaSBgCAliQNAABrSNKwIf8CAGxS+1d1SZKGDQkv1J8AgI2RpGEHUpJuTwCADZCkYR8kaQDYGkka9kGSBoCtkaRhHyRpANgaSRr2QZIGgK2RpGEfJGkA2BpJGvZBkgaArZGkz+bJg6ure4+et2e3rikfPXjStnDZJGkA2JrLTtLPH91r42ZyxmA7NJ2kuyDcOWVzcbYIfbdI0gCwNZebpFOKztPm80cPtpWk897hdifEwYL0HSNJA8DWXGqSjlnzjX4EPXBakj5py5L0XSRJA8DW3NEk3UXR+DWJ1jCa5r3V6Do14MZJOi/etcdRmWxCdXyjXesw9YQp+YCiPyk3U1z+SOXBRbKYJA0AW3OpSbpNcpXwG6VAd+/ecUAKhdn4WCDLfP3z2QHN+XhmHPbG+YcNlMX6+TOeD4Pr2Pi4Vn6x0eyURjelHB2kG3Zsef7oUX1sUbm3DCeQpAFgay42SR/DYC239WNgowh5cXKZPMu22QHxbDwz9nrThg5z41lRvGzp98+Mj/sq+xdNKXYfu7uW8qwwU5m1JGkA2JoLTtKNmOGiMvVVg2DWWGbigywRzg4YZOWelG6P8lq1mUVbsc78+LhWudklU3r9eZXeBnJzlVlLkgaArbnwJJ3E3Bccw1w9CXaBL3YPo9+xeXZAMB0f89447biddFrRVYsjlo8f7mTFlGLR8Wub3zwrSdIAsDV3IklHTfjrkmAZRQ+6fBi7h9Hv2Dw7IBhPm42yt5g4UjwTR5RJemr8cCcrphSLjl/b/OZZSZIGgK25O0m6yHjVvJdFxXpSPGXAVNps9HvzHTV9x6BcUawzP76ykxVT8kUnps9VZi1JGgC25lKT9PMnT/oZNo94MRX28l4RAWt58LQB8Wx5km5np6Za8VwvSc+Nr+3k9CnFohPTZyqzliQNAFtzsUm6iX15FIz5rmtISTofUfYH/YZBQJwb0JznBUu13mOFtL+8P7QcaxehtjE9vrqTk6f0Fo2bLc4PP09Vjn2DvbCEJA0AW3OpSTpIga5TxLdDKkxxMDmGwoOywrB/ekA1v3bm022+tyCvfth+YXz86E5OmlJZtJhfDB+rHItU98IcSRoAtuaCk/SUahSFLZOkAWBrJOmdaT/kzbQdXDpJGgC2RpKGfZCkAWBrJGnYB0kaALbmjiZp2B1JGgC2RpKGfZCkAWBrJGnYB0kaALZGkoZ9kKQBYGskadgHSRoAtkaShn2QpAFgayRp2AdJGgC2RpKGfZCkAWBrJGnYB0kaALZGkoZ9kKQBYGskadgHSRoAtkaShn2QpAFgayRp2IeUpAGATZGkYQfCCxUA2KD2r+qSJA0AAGtI0gAAsIYkDQAAa0jSAACwhiQNAABrSNIAALCGJA0AAGtI0gAAsIYkDQAAa0jSAACwhiQNAABrSNIAALCGJA0AAGtI0gAAsIYkDQAAa0jSAACwhiQNAABrSNIAALCGJA0AAGtI0gAAsIYkDQAAa9xakv7++/8P8wyA5hBsaBIAAAAASUVORK5CYII="}}]);