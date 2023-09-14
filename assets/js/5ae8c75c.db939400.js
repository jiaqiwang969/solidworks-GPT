"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[38854],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(a),p=o,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||n;return a?r.createElement(f,s(s({ref:t},d),{},{components:a})):r.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},15231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=a(87462),o=(a(67294),a(3905));const n={title:"Storing data (parameters, bodies, selection) in SOLIDWORKS macro feature",caption:"Data",description:"Storing the parameters, metadata, dimensions, selections in the SOLIDWORKS macro feature using SwEx.MacroFeature framework","toc-group-name":"labs-solidworks-swex",sidebar_position:0},s=void 0,i={unversionedId:"codestack-clone/labs/solidworks/swex/macro-feature/data/index",id:"codestack-clone/labs/solidworks/swex/macro-feature/data/index",title:"Storing data (parameters, bodies, selection) in SOLIDWORKS macro feature",description:"Storing the parameters, metadata, dimensions, selections in the SOLIDWORKS macro feature using SwEx.MacroFeature framework",source:"@site/docs/codestack-clone/labs/solidworks/swex/macro-feature/data/index.md",sourceDirName:"codestack-clone/labs/solidworks/swex/macro-feature/data",slug:"/codestack-clone/labs/solidworks/swex/macro-feature/data/",permalink:"/solidworks-GPT/docs/codestack-clone/labs/solidworks/swex/macro-feature/data/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/labs/solidworks/swex/macro-feature/data/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Storing data (parameters, bodies, selection) in SOLIDWORKS macro feature",caption:"Data",description:"Storing the parameters, metadata, dimensions, selections in the SOLIDWORKS macro feature using SwEx.MacroFeature framework","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"SwEx.MacroFeature - advanced framework for SOLIDWORKS macro feature",permalink:"/solidworks-GPT/docs/codestack-clone/labs/solidworks/swex/macro-feature/"},next:{title:"Backward compatibility support for SOLIDWORKS macro feature parameters",permalink:"/solidworks-GPT/docs/codestack-clone/labs/solidworks/swex/macro-feature/data/backward-compatibility/"}},c={},l=[],d={toc:l},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Macro feature can store additional metadata and entities. The data includes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Parameters"),(0,o.kt)("li",{parentName:"ul"},"Selections"),(0,o.kt)("li",{parentName:"ul"},"Edit bodies"),(0,o.kt)("li",{parentName:"ul"},"Dimensions")),(0,o.kt)("p",null,"Required data can be defined within the macro feature data model. Special parameters (such as selections, edit bodies or dimensions) should be decorated with appropriate ",(0,o.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/macro-feature/html/N_CodeStack_SwEx_MacroFeature_Attributes.htm"},"attributes"),", all other properties will be considered as parameters."),(0,o.kt)("p",null,"Data model is used both as input and output of macro feature. Parameters can be accessed via ",(0,o.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/macro-feature/html/M_CodeStack_SwEx_MacroFeature_MacroFeatureEx_1_GetParameters.htm"},"GetParameters")," method and also passed to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/macro-feature/html/M_CodeStack_SwEx_MacroFeature_MacroFeatureEx_1_OnRebuild.htm"},"OnRebuild")," handler. Parameters can be modified by calling the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/macro-feature/html/M_CodeStack_SwEx_MacroFeature_MacroFeatureEx_1_SetParameters.htm"},"SetParameters")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public class MacroFeatureParams\n{\n    // text metadata\n    public string TextParameter { get; set; }\n    \n    // boolean metadata\n    public bool ToggleParameter { get; set; }\n\n    // any dependency selection\n    [ParameterSelection]\n    public IFace2 FaceSelectionParameter { get; set; }\n\n    // edit body - base body which macro feature is modifying\n    [ParameterEditBody]\n    public IBody2 InputBody { get; set; }\n\n    // macro feature dimension. Value of the dimension will be sync with the proeprty\n    [ParameterDimension(swDimensionType_e.swLinearDimension)]\n    public double LinearDimension { get; set; }\n}\n\n[ComVisible(true)]\npublic class MyMacroFeature : MacroFeatureEx<MacroFeatureParams>\n{\n}\n")))}u.isMDXComponent=!0}}]);