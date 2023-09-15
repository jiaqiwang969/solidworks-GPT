"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[42830],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>w});var o=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=o.createContext({}),m=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=m(e.components);return o.createElement(a.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(t),u=s,w=d["".concat(a,".").concat(u)]||d[u]||p[u]||r;return t?o.createElement(w,i(i({ref:n},l),{},{components:t})):o.createElement(w,i({ref:n},l))}));function w(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[d]="string"==typeof e?e:s,i[1]=c;for(var m=2;m<r;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var o=t(87462),s=(t(67294),t(3905));const r={title:"Get instance Id of assembly component using SOLIDWORKS API",image:"sw-component-properties.png",labels:["assembly","component","example","instance id","solidworks api"],"redirect-from":["/2018/03/solidworks-api-assembly-get-component-instance-id.html","/solidworks-api/document/assembly/get-component-instance-id"]},i=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-instance-id/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-instance-id/index",title:"Get instance Id of assembly component using SOLIDWORKS API",description:"This example extracts the component instance index from the component's name using SOLIDWORKS API.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-instance-id/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-instance-id",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-instance-id/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-instance-id/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-instance-id/index.md",tags:[],version:"current",frontMatter:{title:"Get instance Id of assembly component using SOLIDWORKS API",image:"sw-component-properties.png",labels:["assembly","component","example","instance id","solidworks api"],"redirect-from":["/2018/03/solidworks-api-assembly-get-component-instance-id.html","/solidworks-api/document/assembly/get-component-instance-id"]},sidebar:"tutorialSidebar",previous:{title:"Get center of gravity for the SOLIDWORKS component in assembly",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-cog/"},next:{title:"Get and select all visible components in assembly using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/document/assembly/components/get-visible/"}},a={},m=[],l={toc:m},d="wrapper";function p(e){let{components:n,...r}=e;return(0,s.kt)(d,(0,o.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This example extracts the component instance index from the component's name using SOLIDWORKS API."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Component instance id option in the component properties dialog",src:t(77337).Z,width:"393",height:"162"}),"{ width=400 }"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\nDim swComp As SldWorks.Component2\n\nSub main()\n\n    Set swApp = Application.SldWorks\n\n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swSelMgr = swModel.SelectionManager\n        \n        Set swComp = swSelMgr.GetSelectedObjectsComponent3(1, -1)\n        \n        If Not swComp Is Nothing Then\n        \n            Dim instId As Integer\n            Dim compName As String\n            compName = swComp.Name2\n            instId = CInt(Right(compName, Len(compName) - InStrRev(compName, "-")))\n            \n            MsgBox "Selected component\'s instance id is " & instId\n                \n        Else\n            \n            MsgBox "Please select component"\n            \n        End If\n        \n    Else\n        \n        MsgBox "Please open assembly"\n        \n    End If\n    \nEnd Sub\n\n\n')))}p.isMDXComponent=!0},77337:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYkAAACiCAMAAACDH8HOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANTgsTqd/7ulegAAT/vxzsrp20N0oLfF0/Dstu3r5Or06Ojz+PPz4/Dw8PT086mggI5eTrW0swGN/3Kkz8RdSOwAALPc6GpqbHvI26/H4d3QttyuetHb5GdPT3+Jnop9eIm41pYtFO52drze1XSiw1BsksvP1KaFc7TIyzdGab7U4+chNNLJimSdxvr48qW/27aqlnOKot/sz5GVn354fqWpro+uzdrf4uHbz6q6yilNfJ+EUsLAvWZbbSWV/mtHKO6wsMXY697s9ouGiavF4Ovu8s+Xioy6/4KVqsWxlXFufbXO6KKJhdDGt+vs7VhRd7PI21+Sxmh6nJt0M9PBqePq7srbxX1iT4ptWcnd793m74zM//Du676ycu6io1QqI+rizp2rvnit+crKze6XmHtvXfj4+PHGxu7q2k6X90mi/5qSgY+isjMxU8fU4PP09p+7zZqnn4SEgJuxysfs/LTS3lhIV7LL5ZxJPKqHXNPi8aG717vPwMe4p25yjMV9as/gzqXK/5PH16nC3eTx9vn65ZaNeqiUeHdkb+HevMza5qu4v3uWtVWBsLalh4Jxceaml5R5aG5gXMO6tbSXh93TxJaGiLWvpoqkwT9TeHGZvlFfhe6TlIeWn9bV1t3c2rq/xJSaq7xeSZ+61rnP52Ftf5m83pbK5u7d2cfBmtnOprLd9b7N2+Dm7ObfqNbHl9Pt+IGFkEcvP5d9dsTGyeazppy41DSX/cLCxObr72yOsM/LxcKzhMlqWZi00Y2z4srg/tv1+KWWjB632EYMBfH017tKM+Xl5VhYY6mloavS2UhRY2VgfYact2Or/+/x86O1tGqCora5u5V5WFd4nZKtwbWbdIB5ikg4YZiIZ9Lf7LOYaIJfXrrI1qm+0pGTkXBPQH+v0v7+/uKajJyanLnR6qCzwc/Z23B9ku07PVJfdaDP1+nfwH+kvbY+I+7uxqnL5U2/2sSniGBzjAo4ZfPy7HF8gTpbjNPg/mdSXsDU7PD6+sq5iPv80wAAANdjoRkAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAfMUlEQVR4Xu2dC1wTV6Lwa/na2gAzSr0XLhSBu1SwXBtAHglbcD9AWh4SkQ0qKf02yDWbrZRRQKk8LAqRp1DAAOpHkG2V90uolce1wl1uRIkjqFBRibAILIWFK42tIr97zmR4g0YLmL3MH0jOnMdMOP85Z54585rIMsFmJcWrpeOWRtdr3UYXKV45mnpdrzWSYYpXiXVu12s1YecpXjkXjwATpuQExauEMPE1xZJAdkQzOC9P/BfKxFJxUS99Ttp8w2Cy3EQYxaJjmpn+7Zy46JnCdMrEUmGaWf/tV3Px7RQTRE6QN+iWteJSiFKgxPnx4jMB8bfOk2EKYGLLV3+FfHVcuuWjvx5PBy8EU0xEETnDTC3ONLuuMQWAMIH8HSaB14kIeWyCBAT2uo48WmcN4ybiJ7KE+V801bOemFr2TJj4a3kXo8L4NOaXIp/8aqYJU6urnVEd5019JZmmpr63JGd9JWfDLvZIQGXu9ZecjQq66A/q3FdibRoUBEJ7frL+2nSva2eH1knfW7eIUmFBMNW0BwT33sr0P1AdFhS2GUZ1+Gd+vexdTJowNuoSW3Xhjl/KJ7/VgwJMoYnNcF02jUo5FgVeLS6b91dH/WFd6m/7Lr/VoXWir3+wI3Xk0amvA3/bd8LAqqnvcqf0/earg/o/JYZFdbh2RrkOrv15EJS6XN1x/1TfVWsbO3O79/Z9frP83M2wA99b9ff1G+ivA/mIhSxjom5t+fI/5Kz26+piWX5BTn3kDAVEQRPaUQQ7t22OirLR6nSzOnV27ffhn3+vccJU62SI9Jh0Xa7H7vcCj3kkv7f7WNDuY9Jjw7c/yPh5OAqYqM46dWTtmpWpnW7XT5x9bB1y9FjgW0GBb+1bZxoVaxBy4OLu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"}}]);