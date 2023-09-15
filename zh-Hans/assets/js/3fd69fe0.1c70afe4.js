"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[71275],{3905:(e,A,t)=>{t.d(A,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function a(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);A&&(r=r.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?a(Object(t),!0).forEach((function(A){o(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function n(e,A){if(null==e)return{};var t,r,o=function(e,A){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||(o[t]=e[t]);return o}(e,A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var A=r.useContext(s),t=A;return e&&(t="function"==typeof e?e(A):i(i({},A),e)),t},p=function(e){var A=l(e.components);return r.createElement(s.Provider,{value:A},e.children)},k="mdxType",g={inlineCode:"code",wrapper:function(e){var A=e.children;return r.createElement(r.Fragment,{},A)}},m=r.forwardRef((function(e,A){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),k=l(t),m=o,d=k["".concat(s,".").concat(m)]||k[m]||g[m]||a;return t?r.createElement(d,i(i({ref:A},p),{},{components:t})):r.createElement(d,i({ref:A},p))}));function d(e,A){var t=arguments,o=A&&A.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var n={};for(var s in A)hasOwnProperty.call(A,s)&&(n[s]=A[s]);n.originalType=e,n[k]="string"==typeof e?e:o,i[1]=n;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4058:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>n,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u52a8\u5316\u7279\u5f81\u7ba1\u7406\u6811",caption:"\u7279\u5f81\u7ba1\u7406\u5668"},i=void 0,n={unversionedId:"codestack/solidworks-api/document/features-manager/index",id:"codestack/solidworks-api/document/features-manager/index",title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u52a8\u5316\u7279\u5f81\u7ba1\u7406\u6811",description:"\u901a\u8fc7SOLIDWORKS API\u81ea\u52a8\u5316\u7279\u5f81\u521b\u5efa\u7684\u6307\u5357\u96c6\u5408",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/features-manager/index.md",sourceDirName:"codestack/solidworks-api/document/features-manager",slug:"/codestack/solidworks-api/document/features-manager/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/features-manager/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u52a8\u5316\u7279\u5f81\u7ba1\u7406\u6811",caption:"\u7279\u5f81\u7ba1\u7406\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u6839\u636e\u51e0\u4f55\u5c3a\u5bf8\u7f29\u653e\u7ed8\u56fe\u89c6\u56fe\u7684\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/drawing/views-size-based-scale/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u6fc0\u6d3b\u7279\u5f81\u7ba1\u7406\u5668\u9009\u9879\u5361\u7684VSTA\u5b8f",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/activate-tabs/"}},s={},l=[{value:"image: feature-manager-api.png",id:"image-feature-manager-apipng",level:2}],p={toc:l},k="wrapper";function g(e){let{components:A,...a}=e;return(0,o.kt)(k,(0,r.Z)({},p,a,{components:A,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u901a\u8fc7SOLIDWORKS API\u81ea\u52a8\u5316\u7279\u5f81\u521b\u5efa\u7684\u6307\u5357\u96c6\u5408\nsidebar_position: 4"),(0,o.kt)("h2",{id:"image-feature-manager-apipng"},"image: feature-manager-api.png"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u901a\u8fc7API\u81ea\u52a8\u5316\u521b\u5efa\u7279\u5f81",src:t(87179).Z,width:"193",height:"204"})),(0,o.kt)("p",null,"SOLIDWORKS API\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2013/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeatureManager.html"},"IFeatureManager"),"\u63a5\u53e3\u521b\u5efa\u7279\u5f81\u5e76\u81ea\u52a8\u5316\u7279\u5f81\u7ba1\u7406\u6811\uff0c\u8be5\u63a5\u53e3\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2013/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.imodeldoc2~featuremanager.html"},"IModelDoc2::FeatureManager"),"\u5c5e\u6027\u8bbf\u95ee\u3002"),(0,o.kt)("p",null,"\u6bcf\u4e2a\u5355\u72ec\u7684\u7279\u5f81\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u65b9\u6cd5\u521b\u5efa\u3002\u8bf7\u53c2\u8003SOLIDWORKS API\u5e2e\u52a9\u6587\u6863\u4e2d\u7684\u65b9\u6cd5\u5217\u8868\u3002\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u5728\u521b\u5efa\u7279\u5f81\u65f6\u8bb0\u5f55\u5b8f\u4ee5\u6355\u83b7\u6240\u9700\u7684\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u8fd8\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0\u81ea\u5b9a\u4e49",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2013/english/api/sldworksapiprogguide/macro_features/overview_of_macro_features.htm"},"\u5b8f\u7279\u5f81"),"\u6765\u6269\u5c55\u6807\u51c6SOLIDWORKS\u7279\u5f81\u7684\u8303\u56f4\u3002\u8fd9\u5c06\u5177\u6709\u4e0e\u4efb\u4f55\u6807\u51c6\u7279\u5f81\u76f8\u540c\u7684\u5916\u89c2\u548c\u611f\u89c9\uff0c\u5e76\u5141\u8bb8\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539\u6216\u6dfb\u52a0\u5b9e\u4f53"),(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4f9d\u8d56\u7279\u5f81\u5e76\u6839\u636e\u9700\u8981\u91cd\u65b0\u751f\u6210\u51e0\u4f55\u56fe\u5f62"),(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5c3a\u5bf8"),(0,o.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u81ea\u5b9a\u4e49\u53c2\u6570")),(0,o.kt)("p",null,"\u7279\u5f81\u7531",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature.html"},"IFeature")," SOLIDWORKS API\u63a5\u53e3\u8868\u793a\u3002\u7279\u5f81\u6709\u4e24\u4e2a\u6269\u5c55\u5bf9\u8c61\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,o.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeature~GetSpecificFeature2.html"},"IFeature::GetSpecificFeature2"),"\u8bbf\u95ee\u7684\u7279\u5b9a\u7279\u5f81\u8868\u793a\u6b64\u7279\u5f81\u7684\u7279\u5b9a\u65b9\u6cd5\u548c\u5c5e\u6027\u7684\u96c6\u5408\uff08\u4f8b\u5982\uff0c",(0,o.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.isketch_members.html"},"ISketch"),"\u662f2D\u548c3D\u8349\u56fe\u7684\u7279\u5b9a\u7279\u5f81\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,o.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature~getdefinition.html"},"IFeature::GetDefinition"),"\u8bbf\u95ee\u7684\u7279\u5f81\u5b9a\u4e49\u8868\u793a\u7279\u5f81\u53c2\u6570\uff08\u5373\u7531\u7528\u6237\u901a\u8fc7\u5c5e\u6027\u7ba1\u7406\u5668\u9875\u9762\u63a7\u5236\u7684\u53c2\u6570\uff09\u3002\u4fee\u6539\u7279\u5f81\u53c2\u6570\u5fc5\u987b\u901a\u8fc7",(0,o.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2012/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.ifeature~modifydefinition.html"},"IFeature::ModifyDefinition"),"\u65b9\u6cd5\u5e94\u7528\u3002")),(0,o.kt)("p",null,"\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"identify-feature"},"\u8bc6\u522b\u7279\u5f81"),"\u793a\u4f8b\uff0c\u4e86\u89e3\u4e00\u4e2a\u8f85\u52a9\u65b9\u6cd5\uff0c\u53ef\u7528\u4e8e\u67e5\u627e\u7279\u5f81\u5b9a\u4e49\u548c\u7279\u5b9a\u7c7b\u578b\u7684\u63a5\u53e3\u3002"))}g.isMDXComponent=!0},87179:(e,A,t)=>{t.d(A,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAADMCAMAAAD9AjdwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQIVArbcCGp1AOfqz2+eKi05LrOyPCFrAGtrMiOqI0BkAXW/dczWv3x8Pu7uSyeSAPv7nZeWPj90Pv39dgA8AJ+diUOxQ252IuLlyRimFHiFAIuKbUqQHPr6CLq4iNzf31JYSm6nRPj4ViSCALe8nKbQoBsyGGtrQiFTDf7+OqOiPYeLMjaVHiugAHR9eNDQRo+RNsXNr1V4AP39VlFgJFesQjexN3mFDoeuYfz8v/39aXJxPP7+TgIqASmaAO7u5pKSPTSjAHJ9AJybPo+aPCJ0AJaWRvDxET1/Nn19WtLSJlRxP6HHl6yra2trSHRzQgFSAC2AAIuLPv37pYG8eInHCaWkWV9pAM3RznyKAGtqO/f3MDGbAO3t2ztEO4ODPuzy5le1CV6HJ164XjJ6AZ6eSQ0eC93tCFBhAP39kaysdDuiDHd3Tvf4+GNuAPz8sfz8gEmwSLy7QJDChnaCAC+JADCSACaKAD2yPYGbMwEcAd7eSTtKF4OMHDCeEC6uLvj4G3PBbePiHklzPjyFDzqJLSxnAaqpPf39mwFHAFehHAEzAVCxT6itrKamZM3NdWN8N4WgRXBvNwReAP39iiN7AP39YHqANFljAG14AGZzAICNDsTDPAEiAHSEJoiOKJ+eUpSYapWZQCiVAPn5eXm9caqpXQAAAJmZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///64kpQMAAACodFJOU////1D//////////5r///+k///S/9j//3D//9b//9j////S/6bI///////////////G/////////4r0/////z7////////////+////1P//////0P//+v///////3T//1T///7//////9L//////7T+//////////////////////////////+8///////o///////o////////////////////1P//ANivBtIAAAAJcEhZcwAADsMAAA7DAcdvqGQAABlmSURBVHhezZ2PY1TVlcdZRzCtmSKrYASLlYYMBWUJoAhJDAhWUZwp0mINDJm1wlqCP6oC1gWLSqEtlAVUqEKURVj+zf2ec773vfvevHff/HhRvpnMTEKc+X7e95xz70tn0nl35kaTrVarMjpUqVRazdYkvzknKpug1YLr0eGV95//w/k/LTl//k/ncecP99+/cnjl8GClxZ8qU2UStAbvh87D9pIlH8nlI9XT0F/+8pNHHvndvn37VuzZPNQsNZPyCForcdRVS0T0/7QCPK0A//Vz0al9p07d2rOn0uR/169KIqisvJ/+1T7kCGKAFxTACXGsWLGn2X8eZRBMDu66jdpRgiWJBBiBAPynJZAU8tj33gN7+Di9qW+C1uDKD27/gf6jCD5ShKiEfpIN4LTvZ7f+9u7mHuuqT4Lmyt9+CpGAASSbuBjAdOrUvlu3bm3mA3euvgiau9T/p6kEEi1gAP9Gm4U6hXn1wNBkpdXx4O2HYPCD2wqABHyAGEEgZI7OdAxAgWPFrVtDFT5RUL0TVKyALAGtoSVaRdYCMK8hCMC2bgEo5dizuRXuj54JXABeApYBAayKBODJHgFMLwjHihXNViUnkR4JEMDtTxXBjSELICKwLugfgBKOfSseeLcy2dYfPRG0MEBvRz3gNwHtez3wyO9oome5lfAU7kl7vIt9icfRC0Fr9LdtAOofcjXkEkgvxd0p87/F2N333q097w7ZvOqBYOiDDABXQpQAZO0lelf6cVhXvRAMZgE4/14PlAuQpVOnfvXHHghW/jYCiFayZBNHe4mczVAf0uMhV3ZgTo1jS9UtwWgMkJeAB1DGGMrXqfEeCEa1hIyAAEscwpwnkNKpX42Pd90HBqD+05uhxDqgY+gHAOiaYDiVgGVAAFM8R+caAP7Hx7/sjgBTCATqP25i6+LUFBKAOe4BSWB8/G9dERhA1MWWgIuAAFECj8x5E6u6mqZYyBIJCADdRyWkEoBtc7oQuAS6y8AA4gQs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"}}]);