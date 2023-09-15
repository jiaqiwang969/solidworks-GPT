"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[11041],{3905:(o,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>A});var e=r(67294);function n(o,t,r){return t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}function i(o,t){var r=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),r.push.apply(r,e)}return r}function a(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(o,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(r,t))}))}return o}function c(o,t){if(null==o)return{};var r,e,n=function(o,t){if(null==o)return{};var r,e,n={},i=Object.keys(o);for(e=0;e<i.length;e++)r=i[e],t.indexOf(r)>=0||(n[r]=o[r]);return n}(o,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);for(e=0;e<i.length;e++)r=i[e],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(o,r)&&(n[r]=o[r])}return n}var s=e.createContext({}),u=function(o){var t=e.useContext(s),r=t;return o&&(r="function"==typeof o?o(t):a(a({},t),o)),r},l=function(o){var t=u(o.components);return e.createElement(s.Provider,{value:t},o.children)},p="mdxType",h={inlineCode:"code",wrapper:function(o){var t=o.children;return e.createElement(e.Fragment,{},t)}},d=e.forwardRef((function(o,t){var r=o.components,n=o.mdxType,i=o.originalType,s=o.parentName,l=c(o,["components","mdxType","originalType","parentName"]),p=u(r),d=n,A=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return r?e.createElement(A,a(a({ref:t},l),{},{components:r})):e.createElement(A,a({ref:t},l))}));function A(o,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof o||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=o,c[p]="string"==typeof o?o:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return e.createElement.apply(null,a)}return e.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85889:(o,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var e=r(87462),n=(r(67294),r(3905));const i={layout:"sw-macro-fix",title:"\u8fd0\u884cSOLIDWORKS\u5b8f\u65f6\u4fee\u590d\u8def\u5f84\u8fc7\u957f\u9519\u8bef",image:"long-macro-path.png",labels:["\u5b8f","\u6545\u969c\u6392\u9664"],"redirect-from":["/2018/04/macro-troubleshooting-too-long-macro-path.html"]},a=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/too-long-macro-path/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/too-long-macro-path/index",title:"\u8fd0\u884cSOLIDWORKS\u5b8f\u65f6\u4fee\u590d\u8def\u5f84\u8fc7\u957f\u9519\u8bef",description:"\u75c7\u72b6",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/too-long-macro-path/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/too-long-macro-path",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/too-long-macro-path/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/too-long-macro-path/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/too-long-macro-path/index.md",tags:[],version:"current",frontMatter:{layout:"sw-macro-fix",title:"\u8fd0\u884cSOLIDWORKS\u5b8f\u65f6\u4fee\u590d\u8def\u5f84\u8fc7\u957f\u9519\u8bef",image:"long-macro-path.png",labels:["\u5b8f","\u6545\u969c\u6392\u9664"],"redirect-from":["/2018/04/macro-troubleshooting-too-long-macro-path.html"]},sidebar:"tutorialSidebar",previous:{title:"\u4fee\u590d\u8fd0\u884c\u65e7\u7248 SWBasic (*.swb) SOLIDWORKS \u5b8f\u65f6\u7684\u9519\u8bef",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/swb-macro-error/"},next:{title:"Fix too long SOLIDWORKS VBA macro line error",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/too-long-vba-macro-line/"}},s={},u=[{value:"\u75c7\u72b6",id:"\u75c7\u72b6",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:2},{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:2}],l={toc:u},p="wrapper";function h(o){let{components:t,...i}=o;return(0,n.kt)(p,(0,e.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u75c7\u72b6"},"\u75c7\u72b6"),(0,n.kt)("p",null,"SOLIDWORKS\u5b8f\u5b58\u50a8\u5728PDM\u4fdd\u9669\u5e93\u4e2d\u7684\u957f\u9879\u76ee\u7ed3\u6784\u4e0b\uff0c\u6216\u8005\u5b8f\u662f\u5728\u5b89\u5168\u4f4d\u7f6e\uff08\u9694\u79bb\u5b58\u50a8\uff09\u52a8\u6001\u751f\u6210\u5e76\u901a\u8fc7SOLIDWORKS API\u8fd0\u884c\u3002"),(0,n.kt)("p",null,"\u5f53\u5b8f\u8fd0\u884c\u6216\u7f16\u8f91\u65f6\uff0c\u4f1a\u663e\u793a\u201c\u65e0\u6cd5\u6253\u5f00\u201d\u9519\u8bef\u3002\u4ece\u5176\u4ed6\u4f4d\u7f6e\u8fd0\u884c\u5b8f\u65f6\uff0c\u5b83\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u8fd0\u884c\u5b8f\u65f6\u51fa\u73b0\u7684\u9519\u8bef",src:r(14071).Z,width:"400",height:"142"}),"{ width=400 height=141 }"),(0,n.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,n.kt)("p",null,"\u5b8f\u8def\u5f84\u7684\u6700\u5927\u652f\u6301\u957f\u5ea6\u4e3a255\u4e2a\u5b57\u7b26\u3002"),(0,n.kt)("p",null,"\u867d\u7136\u5b8f\u88ab\u653e\u7f6e\u5728\u8d85\u8fc7255\u4e2a\u5b57\u7b26\u7684\u76ee\u5f55\u4e2d\u7684\u53ef\u80fd\u6027\u5f88\u5c0f\uff0c\u4f46\u5f53\u5b8f\u4eceAPI\u4e2d\u8fd0\u884c\u5e76\u4e14\u5176\u4f4d\u7f6e\u9700\u8981\u88ab\u6df7\u6dc6\u65f6\uff08\u4f8b\u5982\u4f7f\u7528\u9694\u79bb\u5b58\u50a8\uff09\uff0c\u4ecd\u7136\u6709\u53ef\u80fd\u4f7f\u7528\u957f\u8def\u5f84\u3002"),(0,n.kt)("p",null,"\u5728PDM\u73af\u5883\uff08\u5982SOLIDWORKS PDM\u4fdd\u9669\u5e93\uff09\u4e2d\u53ef\u80fd\u5b58\u5728\u957f\u8def\u5f84\uff0c\u5176\u4e2d\u6587\u4ef6\u5939\u7ed3\u6784\u53ef\u80fd\u53cd\u6620\u9879\u76ee\u7f16\u53f7\u3001\u5206\u652f\u7b49\u3002"),(0,n.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5"},"\u89e3\u51b3\u65b9\u6cd5"),(0,n.kt)("p",null,"\u65e0\u6cd5\u5f3a\u5236SOLIDWORKS\u4f7f\u7528\u957f\u8def\u5f84\u8fd0\u884c\u5b8f\u3002\u5c06\u5b8f\u79fb\u52a8\u5230\u65b0\u4f4d\u7f6e\u3002\n\u6216\u8005\uff0c\u53ef\u4ee5\u5f00\u53d1\u4e00\u4e2a\u5b8f\u542f\u52a8\u5668\u5b8f\uff0c\u8be5\u5b8f\u5c06\u5b8f\u4ece\u957f\u8def\u5f84\u590d\u5236\u5230\u77ed\u8def\u5f84\u5e76\u8fd0\u884c\u3002"))}h.isMDXComponent=!0},14071:(o,t,r)=>{r.d(t,{Z:()=>e});const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAACOCAMAAAAoyq6hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQEAAfPrBsibBACWyK2trlIBA/v0AXuPpo0zADzb8Y+MZvnnoUsPZAcCf6rA0liUtMiYXIOx0ZpVTt/bkbzG1V1DegACTk87LlSo+PDw8M3V2MTY7TwAPL/8/qSzyY6GSdm5qcqYhI44Iwdpk4KgzGEyI8RjUbSOXLTT3kJQVUl1pEWJuIi27pZyM/7+/ujAMtfLhr3e5l4xOnNYW0oAMtnEXBk2RdLh8QBBhwA3P7CQiTRZkOj+/qq3u6TQ4JhsBn67xp/l+YxweH5hh/36uFOV3JGgquS6CEmGk9/e3vrcvuXCu7U+JQCt2bHH4CFEiycABvTgJtqNP3ZfOZ603Onw97R3ZmRupb/U62/E76zF4MqBOMXFxJOTkSpyvVNbbfe8bM+nk3MAA+u7kIx8XnUAMp23rP772HhGC351Vb/p9TPM8dLu+899Ar2hmVAvaOGaVpCtzAFvwu+7roqetfvuvm2QvWJqgDROV7TN57Tc5ZiuxmKv0yMBYMG7qr5XQ/3Ugu7IS3xBQOXNH+CrAtfd4gAKbm93iITH/KR3frXP6qC61mLU7M10YwIIKDihzq+ohp7F3KW/2q28zLCNd2OCt9C4dbTW+3UiAImJiKR1U+CYikpJR66WOfT4/CQeH2WnubnR6tPZ3QBHoS0eZatsM0d1uNn8/qrS5Zy/ys+/mzxBezRyot7o85hENoGt4Nrl8sefc/TSqdbSwbVhBX58gntUcJ2403I7ZE4kOPHnswC65WFKDrLK5Jm10uXbs7pKMwBFV7nO5IJbBt2/eIl/jnJvbzo3Qpqblsru9p1HAGZ+ngVeqcamOfbMjaafmbDn+/vu0/Hf0YKXte6gRD6T5JjR/WdIQceBa3vZ9+CqF1xbWWzV93sbN6R1aKjC3avAsLWkb1JqkXGx2eaklqGipFoeBsvc7/7759PT05DE2+jECBxxvoCqx1RUkGBab49dZrm4ujKG1bd+UIaLmIFwO+fcQaDA4+Di5WyXy6K82ODu+o5WO5akuufPwQAAAFG833oAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAUqElEQVR4Xu2dC1hU1dqAx84g/ph4Ca2tRwKjMC8rFS1U1CDUxs6Pt0PiOIS3zhR5IwFNlEpAvJTKICqoo6KIgSig5BWso47gBRywzPhzVJrcoymOoYwgPP+31l4MAw6IAjLP03p7mm/ttdfeM7Pe/a21L4AihJD+dCHDAjitVyIkQrKt2q5KhgXgPexHGQjZKrMLYFgEUv8flSK91i6LYSFI39WLTnelCwwL4MLbokJvWmZYABfeFBUqsw4yLIQsdybEshCErGI0M2VPgrZjQp4Tgdb1U0HbMSHPhTJrjzn1MsSjguYIE/I8UBQ7zK+XD4ZYMyHPEYXfB7/Xy/w5dQmpml+qJhr6YsRYQxpVrTONQtm4zAAUxU8SUjNDDpLewyhCQkICYJFE3O0hWVAbEhCSdRBqSBWpORhCVh40blBGVgt1ZfYhWQrcHrdkAIoFDr9vquJUZKTHpt8dPSIjV9CaTZtAiIK0XOW+EGcIKWNCBvj5JQcrbCus/PxOn71ZFmIVoyhTeIzrEuy71c/Pb+GkrNL7rlFliozVRWVlo3Y6kYYLz2aVHbR6269wmZMi5FKwwr6v60P7yEI/v6FRdLd/d0CI0PHAL3qEht119NAhFPkLrdv0e00hxgwZduwjqSYkoDR7XHCUpuJSb4X9gGBoqDjRK8o3+aBG8Z/CPVlruxQphqlE9xS2sUP3ZY9rH6UJudS77ODrMVJbcBXiEmxr47rP1mZsgEYzigkRqCEkm0NI/z34kKgeF1JGhKxSUK4e+0kDIXrin1EKhSZ75z4QgitASHZyFhS0h29ftRqp0Ra/fE5j/2mv7yaeww3zThetej1Go7FZFmXvUpCd7KSJttlzE++QQdCYCNn0oS8YwT48rjjSKhBS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"}}]);