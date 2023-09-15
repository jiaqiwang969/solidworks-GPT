"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[29009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(n),b=r,u=m["".concat(c,".").concat(b)]||m[b]||A[b]||a;return n?o.createElement(u,s(s({ref:t},p),{},{components:n})):o.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<a;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},83932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>A,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=n(87462),r=(n(67294),n(3905));const a={title:"SOLIDWORKS \u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762\u4e2d\u7684\u9009\u9879\u5361\u63a7\u4ef6",image:"pmpage-tab.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},s=void 0,l={unversionedId:"codestack/labs/solidworks/swex/pmpage/controls/tab/index",id:"codestack/labs/solidworks/swex/pmpage/controls/tab/index",title:"SOLIDWORKS \u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762\u4e2d\u7684\u9009\u9879\u5361\u63a7\u4ef6",description:"\u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762\u4e2d\u7684\u63a7\u4ef6\u5206\u7ec4\u5728\u9009\u9879\u5361\u4e2d",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/labs/solidworks/swex/pmpage/controls/tab/index.md",sourceDirName:"codestack/labs/solidworks/swex/pmpage/controls/tab",slug:"/codestack/labs/solidworks/swex/pmpage/controls/tab/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/pmpage/controls/tab/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/pmpage/controls/tab/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"SOLIDWORKS \u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762\u4e2d\u7684\u9009\u9879\u5361\u63a7\u4ef6",image:"pmpage-tab.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u5728SOLIDWORKS Property Page\u4e2d\u4f7f\u7528SwEx.PMPage\u6846\u67b6\u7684\u9009\u62e9\u6846\u63a7\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/pmpage/controls/selection-box/"},next:{title:"SOLIDWORKS Property Manager \u9875\u9762\u4e2d\u7684\u6587\u672c\u6846\u63a7\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/labs/solidworks/swex/pmpage/controls/text-box/"}},c={},i=[{value:"\u5e26\u6709\u5d4c\u5957\u5206\u7ec4\u7684\u9009\u9879\u5361",id:"\u5e26\u6709\u5d4c\u5957\u5206\u7ec4\u7684\u9009\u9879\u5361",level:2}],p={toc:i},m="wrapper";function A(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762\u4e2d\u7684\u63a7\u4ef6\u5206\u7ec4\u5728\u9009\u9879\u5361\u4e2d",src:n(29118).Z,width:"232",height:"172"})),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_TabAttribute.htm"},"TabAttribute")," \u5bf9\u590d\u6742\u7c7b\u578b\u8fdb\u884c\u88c5\u9970\uff0c\u53ef\u4ee5\u521b\u5efa\u9009\u9879\u5361\u5bb9\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Imports CodeStack.SwEx.Common.Attributes\nImports CodeStack.SwEx.My.Resources\nImports CodeStack.SwEx.PMPage.Attributes\n\nPublic Class TabDataModel\n\n    <Tab>\n    <Icon(GetType(Resources), NameOf(Resources.OffsetImage))>\n    Public Class TabControl1\n        Public Property Field1 As String\n    End Class\n\n    Public Property Tab1 As TabControl1\n\nEnd Class\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using CodeStack.SwEx.Common.Attributes;\nusing CodeStack.SwEx.PMPage.Attributes;\nusing CodeStack.SwEx.Properties;\n\npublic class TabDataModel\n{\n    [Tab]\n    [Icon(typeof(Resources), nameof(Resources.OffsetImage))]\n    public class TabControl1\n    {\n        public string Field1 { get; set; }\n    }\n\n    public TabControl1 Tab1 { get; set; }\n\n}\n")),(0,r.kt)("h2",{id:"\u5e26\u6709\u5d4c\u5957\u5206\u7ec4\u7684\u9009\u9879\u5361"},"\u5e26\u6709\u5d4c\u5957\u5206\u7ec4\u7684\u9009\u9879\u5361"),(0,r.kt)("p",null,"\u63a7\u4ef6\u53ef\u4ee5\u76f4\u63a5\u6dfb\u52a0\u5230\u9009\u9879\u5361\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u4f4d\u4e8e\u5d4c\u5957\u5206\u7ec4\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Public Class TabControl2\n    Public Class Group1\n        Public Property Field2 As Integer\n    End Class\n\n    Public Property Group As Group1\n    Public Property Field3 As Boolean\nEnd Class\n\n<Tab>\nPublic Property Tab2 As TabControl2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public class TabControl2\n{\n    public class Group1\n    {\n        public int Field2 { get; set; }\n    }\n\n    public Group1 Group { get; set; }\n    public bool Field3 { get; set; }\n}\n\n[Tab]\npublic TabControl2 Tab2 { get; set; }\n")))}A.isMDXComponent=!0},29118:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAACsCAMAAABGvhAwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAIXA20V4qPj4+MCjZjw8PAA4i6OFRdvAhWajwIs4AMLExnd3dyoqKpqamtnb3jg4i3hFRV9FRTgAAEVfkcCFRQAAOGMAOI2Ojs/cvpFfRTiL1Kuts9TUqJG+1FVVVbDq976RX0VFX6NmhdS+kQBksrFjADoAZh4eHl+RvmOw977U1La2tvftrufn5tSLOIvU93hFX11dXUVmo76oeF9FeKurq9PT02aj24KCgr6ReDiLi9HV2UWFwKjU1PfAhcvP1eLq72MAAAAAY8vLy2UAZV+RqKNmRWZmRa6zuUVmZl9FX0VFeJGReP/bkIVFRdve5IXA99SoeNujZvfUi39/f7+/v8Cjo5Db/9SLi9SLY2ZmZjIyMnio1GM4i4s4OEVFRYVFZmOwsNujhah4RduQOkVFhWZFhdXY27G2u2ZFZma2/yMjI2ZFRUVFZszR1jqQ2wA6kLa6vklJSbu9wZA6AM7S1zo6kAAAAGYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///4GrRUAAAAB5dFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wClVIrsAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFIUlEQVR4Xu3c+3/TVBjA4WgVUcaqaLeBAhNHdUiyCdoxZW6Far1vUFYvqxp14NBtKI757/teTpqc9EJpHc15835/WE5CP9CHc5IUyPAKOUmh0soZdHkM0S/89GLo0v/SE713hR5RCh0ihXZLoUeUQq22Q+pZswsH5s1g6ewrr71rhua9l/jFK7wHla6Zgb8XhvdmeZwRaM1s47ZjJRRBT5+58HUaCpViJdSGvgXI0tUqjTMB3aptmVFcdyh0e3Ao5v/BU5oJaK3Va0bnToUhwrbn3+RBPyiuVJy/0rUGD+jg7xmCNntCPzwHqxVG2+E8D/pBfwNSHUalEKYUB9hqhpYuLNx+SxdltDf35Tmzy6WhGLpozyxZ/xee0GxA+1yMYMXikqVz9Ox7j4HCisUlS+coC/316HwdP7TGyDSVoHQvoRkdAOqvA5JmNIbW29elMUNryy1vsoZtea1Jc5DixfrBxzCpCMW921/BXh8oXnYa0dJdxRto7Bw3tLmVgC4nZ7V9Vs6dQmj4I0wv3WN6Q+Gs9PcQGt7iNRtdkLAxQyGzdJv0NY7PUbypvI/QT8/wByX6zHQBl3DnOYo3leMIfbFOH5RW8bXRR6PxQ4fvid67Qo8ohQ6RQrul0CMqV9BKxfzl+ajxTzlYy5WnmpnRHKRQaSlUWgqVlkKlpVBpKVRaCpVW/qDmD6gCY58uXWkpVFoKlZZCpaVQaeUV6q+H8WN7orKh/NyIDOjmphlwFhTmE5HfSoBuQmZIWdDV6CEgf+/qC/dmcR3DAXooqr4/C9vjIT6o6ULotKQWtBGu0IOKt+iZ8NN4voI0hn4Bh/f5tyLjEdKS9oKCp4HruI47ERQO0rO3mc8Qk9IUFE/RkrE10ARfEkvXHMx8EbAXFFbsShIKOzSjeLoiFE5Y2DcvdiwLCjaKoXRPxXMUtvufIZT3zWsdy5sxA44wK3yhJSm6gP8ML93nHLkWdcme0b6x3tUU2lluoG6nUGkpVFoKlZYFLR684VoHxUIQpG7vgdlaWdCqex8IqhtDQc3WpRSaSqGulEfoSd6Ih77TukLbwaF3Pe9vHjlQG7r7z8QMf4vRoNC7oHx0kYYOFEHPT0xWLjcv46FBoY/+LBS+eduVvwQb/mLkT39nvjjRCNBPYDJzAaUZRa0TDQ/lc/RfGjrQCFC86pb/oqEDjQAtlD3PmbvLSFCnUmgqhbpS7qCt3d2Tz2/Rv/YKn9HzVyYqTTokF8qjiUqNB2Kh0ds23+EiF2pG7RTaLj9Q96T4TxJm2O7xUJA6F7g6MhorGyo4hUpLodJSqLQUKi2FSkuh0lKotBQqLYVKS6HSUqi0FCothUpLodJSqLQUKi2FSkuh0rKgM6nMYRHZULM1SYZ+brr/8OCEbOja2tqDw8PrOxtBLQH1b1yKRtOL1taZOqGg3CluBMESQf0bnue9zj+MJaDBS55305n/sKoDeghKYAbVHYamZi4B/QFGC8dceXwwDX1wvYhP08HbLyag+BUmcGqR98ue9xGD/Z9chR7C2cnQjRS0fLFw5+UqjnAaFwANLSRWdbaz/he5blA8Ry8BD4XBz7jBEdEXrLM346VntL1yC4E9oySeIih/gynPqKvn6H2YUHoIthPKsmgU7+LGgVLQh7BwzU4KiudoYlSeWvweJtbZGT3gZYulobh2j9HFCG+gv04v3nkVD9BrHSgFPVFbMvdRACNUTCmolWBoKnNYRBZUcgqVlkKlpVBpKVRaOYEWCv8BOuzWaQNRJnMAAAAASUVORK5CYII="}}]);