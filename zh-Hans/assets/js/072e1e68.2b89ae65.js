"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[57380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},A=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,A=o(e,["components","mdxType","originalType","parentName"]),p=d(n),c=i,u=p["".concat(l,".").concat(c)]||p[c]||m[c]||r;return n?a.createElement(u,s(s({ref:t},A),{},{components:n})):a.createElement(u,s({ref:t},A))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},57681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={layout:"sw-pdm-addin-fix",title:"Fix 'Please select at least one DLL implementing the IEdmAddIn5 interface' error",caption:"Please select at least one DLL implementing the IEdmAddIn5 interface",description:"Troubleshooting the 'Please select at least one DLL implementing the IEdmAddIn5 interface' error when registering SOLIDWORKS PDM add-in",image:"no-addin-dll.png",labels:["pdm add-in","error"]},s=void 0,o={unversionedId:"codestack/solidworks-pdm-api/troubleshooting/addins/no-addin-interface/index",id:"codestack/solidworks-pdm-api/troubleshooting/addins/no-addin-interface/index",title:"Fix 'Please select at least one DLL implementing the IEdmAddIn5 interface' error",description:"Troubleshooting the 'Please select at least one DLL implementing the IEdmAddIn5 interface' error when registering SOLIDWORKS PDM add-in",source:"@site/docs/codestack/solidworks-pdm-api/troubleshooting/addins/no-addin-interface/index.md",sourceDirName:"codestack/solidworks-pdm-api/troubleshooting/addins/no-addin-interface",slug:"/codestack/solidworks-pdm-api/troubleshooting/addins/no-addin-interface/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/troubleshooting/addins/no-addin-interface/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-pdm-api/troubleshooting/addins/no-addin-interface/index.md",tags:[],version:"current",frontMatter:{layout:"sw-pdm-addin-fix",title:"Fix 'Please select at least one DLL implementing the IEdmAddIn5 interface' error",caption:"Please select at least one DLL implementing the IEdmAddIn5 interface",description:"Troubleshooting the 'Please select at least one DLL implementing the IEdmAddIn5 interface' error when registering SOLIDWORKS PDM add-in",image:"no-addin-dll.png",labels:["pdm add-in","error"]},sidebar:"tutorialSidebar",previous:{title:"Fix 'Class ID could not be found in the registry' PDM add-in error",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/troubleshooting/addins/class-id-not-found-registry/"},next:{title:"Registering add-in using SOLIDWORKS PDM Administration takes long time",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-pdm-api/troubleshooting/addins/slow-addin-registering/"}},l={},d=[{value:"Symptoms",id:"symptoms",level:2},{value:"Cause",id:"cause",level:2},{value:"Class is not marked as COM Visible",id:"class-is-not-marked-as-com-visible",level:3},{value:"Class doesn&#39;t have access modifiers (private by default)",id:"class-doesnt-have-access-modifiers-private-by-default",level:3},{value:"Class marked as internal",id:"class-marked-as-internal",level:3},{value:"Resolution",id:"resolution",level:2}],A={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},A,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"symptoms"},"Symptoms"),(0,i.kt)("p",null,"The following error is shown when adding the add-in with SOLIDWORKS PDM administration tool: ",(0,i.kt)("em",{parentName:"p"},"Please select at least one DLL implementing the IEdmAddIn5 interface")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Error when adding the add-in",src:n(86725).Z,width:"553",height:"230"}),"{ width=450 }"),(0,i.kt)("h2",{id:"cause"},"Cause"),(0,i.kt)("p",null,"Error happens when SOLIDWORKS PDM cannot find the class which implements the ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/English/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmAddIn5.html"},"IEdmAddIn5")," which corresponds to the add-in."),(0,i.kt)("p",null,"In order for the add-in class to be visible to SOLIDWORKS PDM, it must be public and com visible."),(0,i.kt)("p",null,"Examples of incorrect declaration of add-in"),(0,i.kt)("h3",{id:"class-is-not-marked-as-com-visible"},"Class is not marked as COM Visible"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public class PdmAddIn : IEdmAddIn5\n{\n}\n")),(0,i.kt)("h3",{id:"class-doesnt-have-access-modifiers-private-by-default"},"Class doesn't have access modifiers (private by default)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"[ComVisible(true)]\nclass PdmAddIn : IEdmAddIn5\n{\n}\n")),(0,i.kt)("h3",{id:"class-marked-as-internal"},"Class marked as internal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"[ComVisible(true)]\ninternal class PdmAddIn : IEdmAddIn5\n{\n}\n")),(0,i.kt)("h2",{id:"resolution"},"Resolution"),(0,i.kt)("p",null,"Make sure that add-in class is public and decorated with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.comvisibleattribute"},"ComVisible")," attribute with value set to ",(0,i.kt)("em",{parentName:"p"},"True")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"[ComVisible(true)]\npublic class PdmAddIn : IEdmAddIn5\n{\n}\n")))}m.isMDXComponent=!0},86725:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAikAAADmCAMAAAAnbOVkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAL+cDu/oDD05JCjP5KKio3VLALb//5fIoQAAN5fg5109TejurbCcZ+np6fDw8CVrnP7+/iYAMnrEwNHKp96ZjL5SPTkAAKZgAAA6kFyj2hoaG5C2/9a4X7DIoc10Y8DBwWthMnS92KNCLzmP2ujMiL+XMAAsWo2MQ0QAMgBcqMfX37jQ6azFnzPN9K6OWtPgpWhoZjwuCpubm7/V66C61tv//6a/28vs9ua2LVuo78GKgTx/sbq4oCYAWUYAWwAAWbLL5eW6B5A6AP+2Zujuz7R9NIlIP9PT2aa/nFNWZu/JwgBMm6nS3+rCSlEnNazF3+zFviYAAJ2403vc8+Odj5BmkFgAADbP99Pi8ca4pY2NjdPg596kBerDV5m10XpsLqO9ushpV72taezy9CcqLfXqGhtLUlbS8cva4qKADpHC3aK82OrSItDAKbh/d8vLzOPj4z/N8kKInDkAOYl6R9zc3Ni8IWZgP96lX8vd76jB3UMUIreslV8rAM/EgNuQOv/bkN+mCzo6OxESFLWgldJ+bp2iuJNrYnzH46ygi9rm87W2uESL3aSIV+inmrpJM2a2tpg3JCkjBwAAZQBmtqnCvuS0q4y92DoAZp9LPbNeTlONudHMSvDPSCdQoJZZAI1qMd+Uhjo6ZmhnT6fq872ogNHXxOWyAaWke4I+NCVsvLyyLnt5Y///ttXRVDMzM5Db/9GnBezMGPLaJ+vfOnkzAP+2kK/HwaurrAArfOfDC7LZ5bOys5bH4duQZunDLGYAOsKTI7dCKyUrAGCo3sXZ7fr0B1dYWMeGN0MAAKqQRMmxRnpOAHjC3qmLWeju8SYrWDqPu5NuMqypfsC7iNv/22na9rZmAEVOAHRyduKrAqeJfO3MVkhKTejJL9Lw92a229Xi6dLS02a2/wA0haRWSXd1UoNzOOjcRpHi9MbGyWYAAD3V/MNdSrCMDCZvwfPSywBPn+WilNOmFOOsF7q6u///27aQOvblJ+e/Fr+xnUREQ9Dd5ah4cwAAAKQuxjcAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAASWElEQVR4Xu2dDZhU1XnHxya7KY26gUpRLMkYNzZSBJEaTATLh0VZMSzQllSlDTVsbFxwlyarlmFhg1ujWTBtlCQG22AxilBAl6QOZGz6QUHMKoWl0lCxzaqpXayKdiiCffq+73nv18zcOYf9eNyd+f8edu6973nPx9zz23PvMFdMDAXABZgC3IApwA2YAtyAKcAN35RtAORx/vmqh2/KtlPZRrMHQIivf/Eu3TOmbLux8Q8AKMC/X6+qGFNOQRQQwxVfFEWMKduyGgUgj0fMvYoxBUsKiCViSpUGAcjjkW0hU4bOAyAGmALc+K+IKZcDEANMAW7AlHLl7g+n7Hz4bs2GKeXL7Na37LTO1myYUr6k3rrPzlspzYYp5QtMAW6krnvbznVxptSDsiF13e8EXFlTU3PbcN1qjLkupdn19UVMqUwkErO8nR3f5h05XM9H9EJs8oOVQUKQzikcWc8vazjbb9PsDhkpzRHcUn0lHxMz92pOff3CZmnKIO2EqZzycd2L7hfEmlBepOYMD6ih6a/5v4evlO2VGiTmOJiysJmn5affpmnjuZLTbKSoX08BmbSZeym6hksWNvMkL2xenZs+cy85wMkb564O2mQquYBqBS2RPCJM/fpFHBM2Lhpm7GHyTCnMmpBchvwISM15OIANIVXM5jYNEi6mbPRmyKwWMu25psjUS+LGYf+42tTJTddkMcZvk2FTFjZvCrVUX7mIfaH9wJTKTdopA1P6kIgptxlH5OVrLqZMDJi5d3VkS7M8sXKW7NLkT1xvdmlBodmm0CwuownJS+fE9bMkyW9LqKQIh4OWJlZ+pJkT1uz4vIlRjYtHbrzq47xHFysJU04isXrj3ATlcxsLm/c301XMtLeGL2hyhVvY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"}}]);