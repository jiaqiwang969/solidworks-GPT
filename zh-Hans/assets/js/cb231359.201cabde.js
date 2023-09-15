"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[10679],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=r,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},35435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const i={title:"\u4f7f\u7528SOLIDWORKS API\u6fc0\u6d3b\u7279\u5f81\u7ba1\u7406\u5668\u9009\u9879\u5361\u7684VSTA\u5b8f",image:"feature-manager-tabs.png",labels:["feature manager","tab"]},o=void 0,s={unversionedId:"codestack/solidworks-api/document/features-manager/activate-tabs/index",id:"codestack/solidworks-api/document/features-manager/activate-tabs/index",title:"\u4f7f\u7528SOLIDWORKS API\u6fc0\u6d3b\u7279\u5f81\u7ba1\u7406\u5668\u9009\u9879\u5361\u7684VSTA\u5b8f",description:"\u7279\u5f81\u7ba1\u7406\u5668\u9009\u9879\u5361",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/document/features-manager/activate-tabs/index.md",sourceDirName:"codestack/solidworks-api/document/features-manager/activate-tabs",slug:"/codestack/solidworks-api/document/features-manager/activate-tabs/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/activate-tabs/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/document/features-manager/activate-tabs/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u6fc0\u6d3b\u7279\u5f81\u7ba1\u7406\u5668\u9009\u9879\u5361\u7684VSTA\u5b8f",image:"feature-manager-tabs.png",labels:["feature manager","tab"]},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528SOLIDWORKS API\u81ea\u52a8\u5316\u7279\u5f81\u7ba1\u7406\u6811",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/"},next:{title:"\u5728\u6d3b\u52a8\u7684SOLIDWORKS\u6587\u6863\u4e2d\u6279\u91cf\u521b\u5efa\u7279\u5f81\u6587\u4ef6\u5939",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/document/features-manager/batch-create-folders/"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:n,...i}=e;return(0,r.kt)(d,(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u7279\u5f81\u7ba1\u7406\u5668\u9009\u9879\u5361",src:t(95553).Z,width:"286",height:"95"})),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u5728\u7279\u5f81\u7ba1\u7406\u5668\u89c6\u56fe\u4e2d\u6fc0\u6d3b\u6807\u51c6\u9009\u9879\u5361\uff08\u7279\u5f81\u7ba1\u7406\u5668\u6811\u3001\u5c5e\u6027\u7ba1\u7406\u5668\u3001\u914d\u7f6e\u7ba1\u7406\u5668\u3001DimXpert\u7ba1\u7406\u5668\u3001\u663e\u793a\u7ba1\u7406\u5668\uff09\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"li"},"FeatMgrTab_e")," \u679a\u4e3e\u6307\u5b9a\u8981\u6fc0\u6d3b\u7684\u9009\u9879\u5361"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5b8f\uff08VSTA3\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u6fc0\u6d3b\u7684\u9009\u9879\u5361\u5c06\u663e\u793a\u5728\u6d88\u606f\u6846\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u6fc0\u6d3b\u6307\u5b9a\u7684\u9009\u9879\u5361")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ModelDocExtension.cs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nnamespace SolidWorks.Interop.sldworks\n{\n    public enum FeatMgrTab_e\n    {\n        FeatureManagerTree,\n        PropertyManager,\n        ConfigurationManager,\n        DimXpertManager,\n        DisplayManager\n    }\n\n    public static class ModelDocExtension\n    {\n        private static Dictionary<int, FeatMgrTab_e> GetTabsMap(IModelViewManager mdlViewMgr)\n        {\n            return new Dictionary<int, FeatMgrTab_e>()\n            {\n                { mdlViewMgr.GetFeatureManagerTreeTabIndex(), FeatMgrTab_e.FeatureManagerTree },\n                { mdlViewMgr.GetPropertyManagerTabIndex(), FeatMgrTab_e.PropertyManager },\n                { mdlViewMgr.GetConfigurationManagerTabIndex(), FeatMgrTab_e.ConfigurationManager },\n                { mdlViewMgr.GetDimXpertManagerTabIndex(), FeatMgrTab_e.DimXpertManager },\n                { mdlViewMgr.GetDisplayManagerTabIndex(), FeatMgrTab_e.DisplayManager }\n            };\n        }\n\n        public static void ActivateStandardFeatureManagerTab(this IModelDoc2 model, FeatMgrTab_e tab)\n        {\n            var mdlViewMgr = model.ModelViewManager;\n\n            mdlViewMgr.ActiveFeatureManagerTabIndex = GetTabsMap(mdlViewMgr).First(x => x.Value == tab).Key;\n        }\n\n        public static FeatMgrTab_e GetActiveStandardFeatureManagerTab(this IModelDoc2 model)\n        {\n            var mdlViewMgr = model.ModelViewManager;\n\n            FeatMgrTab_e tab;\n\n            if (!GetTabsMap(mdlViewMgr).TryGetValue(mdlViewMgr.ActiveFeatureManagerTabIndex, out tab))\n            {\n                throw new NullReferenceException("Active tab is not a standard tab");\n            }\n\n            return tab;\n        }\n    }\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SolidWorksMacro.cs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\nusing System.Windows;\nusing System.Windows.Forms;\n\nusing SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\n\n\nnamespace ActivateFeatMgrTab\n{\n    public partial class SolidWorksMacro\n    {\n        public void Main()\n        {\n            var model = swApp.IActiveDoc2;\n\n            try\n            {\n                if (model != null)\n                {\n                    swApp.SendMsgToUser(string.Format("Active Feature Manager Tab: {0}", model.GetActiveStandardFeatureManagerTab()));\n\n                    model.ActivateStandardFeatureManagerTab(FeatMgrTab_e.DisplayManager);\n                }\n                else\n                {\n                    throw new NullReferenceException("Model is not opened");\n                }\n            }\n            catch(Exception ex)\n            {\n                swApp.SendMsgToUser2(ex.Message, (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);\n            }\n\n            return;\n        }\n\n        public SldWorks swApp;\n\n    }\n}\n\n\n')))}p.isMDXComponent=!0},95553:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAABfCAMAAAAJZFiZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAi/CW4WErD392hoaAA4i3vC4GyJJwAAODgAOD5pkNTMtZSUlA0NDbBjAN7FT5ONYvf3sBGaFcTExLsdHPf399O6NUsiIjgAALlzc3UfG1iQ3wBjsG+d4JdAPQA3VbDUi+q2K9LV2SsrK+jCCcKJoDgAYxicZmZMF0FBQXBWGTFvzt25Dotji9SLONT31Pf31MRZQGOw95izmfewY5R0E2haWthlaIPN62MAABxtj9TU1PfUi5p1KA1DaeLe0mMAOMTk8dfX1vjiXWM4i5mBc76qRFZBF9aur6vI8GBgYLmvnTlqswAAYyZfuhwcHCaLJdSMYrWPHNzj9GNjAPDEH+axGTo6On5+frOQk+Z7fYhzOLoyJMvLy6+KMaSDFQJAXa6ki/3vlMa1VjKEp4s4AIuLiz9xQtLCdI+owItkIO2bm6aDLziL1MvGuWVcXDIyMrG6C6usqyZ/m+NTU/ewi9TIyZ1dX9OqHlbDCqWko1KlVl2gFUcxCuK9CoSbqMa4klVzqLOzswuxDYODg4t7R31bASIiIn281YsqKerchmGiv5rN4maLaOc2MU+Kjcu4bCBUgmMAY5B9PvfHx9nCicOvYmFNCktKStPBaebm5jg4Y9o9QbLb7FyP0pBpIJSuutvb2iBapdT398kqL4uwi2V8YbeYOm6xz8GxSLVVL6R8Iu6srbmjKru7u6KWgaKQUNe5It/g37CLi4Kv6nRcKNKyY1E6D+mJiEt0xxUVFdC/v0iLS0J+1eTdyMUTGhmzErClkAZFY884N7GhdIrT9niUeSpchnNzc2OwsJubmy2sLs3S1qeGPa6PRI5tcHpjHt3LeeC4HcGgolg8PYk1NicmJnpfYO/ICq+GIOdratO4SOBKS+deXeLThd3GYop6VWJFE6lPSzlmv5ajtMWwGvbKIMCYHaOTaDuNsPLji9MnK1d/ncwYHol1JQy4HN+1ui8sLJmBMJiGRXUnKylmxNfTyIEYFZpyIMWUlbHh9Oq+IMyuVpa6666VNwAAAPHgurcAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAJsklEQVR4Xu2cD3QcRRnADwyI0Bykx0LR1ipXlAOMsaRivPiHq7ZFKCcoXkg9ra2pGtq6FpQaTJEYPBFREJGy/ikRtGrrSU+BGltFJYK1VVIlaFMsiKbSUAWkaFF5ft/Mt7czc7NzCbl39PXm9+hlduebLzO/nZnd5GWJOJYweh3H6gmH9MQsGuzsKYPVY8TqMWL1GCE9vQcJfFCVY3yzpzc5Np63OOpnxbB6jBxoelIFzyuk6KCIGpfa+penDn3xv/78Yzr2qZoeb/lDc9/3JjooInbz8ukKl1MFIA/Hdd1kHXzAF4VSPX1eIuH10UERJe7Ex+654hef33nC/ktfSmeIKulZfvs/Bz+754ML5v6MThBiN6cfrjCdKgBFj+Mm3QQ+g7pZOkWoelJ9npNIOF6fMn/kuK33XPHDkx68ZOPxuQf2X0XnOFXS0/3HNf/ddcdv3rC2m04Qkp6rFcx6etn8qaNThKIHVlZXXSJR16WuLynuxCO/ftY71rfvuGgol/v941eJkdXSM/Kf3Z1rj54926SnBKoAVD1MDSZQlpccl/JiqzOAC1PNk/yIcanHzpl2lvOljTsuem06l3tg3v1CZCX0tLVRAdHpOeqhh0dGRjpnAwY9bLgiwtBVPT2e55XVkyrEEpneZCaTbYvHY9L8EeO2Xrd52v8eX7/xwfbf5cDPhSd8jCqAyugR/Gj0dN+3p3NMetiUoRrYzA16/NkjxiBSXJ+3OjPJczKu4y0ZcqX9WYz70Dc2v2Rae/uOnZes/3B/GrafS6kCqIQeyY9Oz+5/+3qGH36aTnIUPYd/++rpDo4cMemBKtCDU4hOEUIc7MpdmV4MceHj3twkcX8W8x157qmbf7Rz51dHR8+Yl+hPD134FFUA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"}}]);