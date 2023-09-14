"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[84285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),b=i,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},67650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const s={title:"Create invisible attribute using SOLIDWORKS API",caption:"Create Invisible Attribute",description:"Example creates an invisible attribute and attaches to the selected object (entity or component)",image:"sw-attribute-features-tree.png",labels:["attribute","data","example"],"redirect-from":["/2018/03/create-invisible-attribute.html"]},o=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-invisible/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-invisible/index",title:"Create invisible attribute using SOLIDWORKS API",description:"Example creates an invisible attribute and attaches to the selected object (entity or component)",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-invisible/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-invisible",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-invisible/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-invisible/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-invisible/index.md",tags:[],version:"current",frontMatter:{title:"Create invisible attribute using SOLIDWORKS API",caption:"Create Invisible Attribute",description:"Example creates an invisible attribute and attaches to the selected object (entity or component)",image:"sw-attribute-features-tree.png",labels:["attribute","data","example"],"redirect-from":["/2018/03/create-invisible-attribute.html"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS macro to create and suppress features in new configurations",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-feature-configurations/"},next:{title:"Create loft feature through selected sketches or curves feature using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/create-loft/"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...s}=e;return(0,i.kt)(d,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example creates an invisible attribute and attaches to the selected object (entity or component)."),(0,i.kt)("p",null,"Attribute ca be hidden by setting the corresponding flag in the ",(0,i.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2018/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iattributedef~createinstance5.html"},"IAttributeDef::CreateInstance5")," SOLIDWORKS API method."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Attribute feature inserted to the Feature Manager Tree",src:n(69602).Z,width:"273",height:"320"}),"{ width=272 height=320 }"),(0,i.kt)("p",null,"Macro stops the execution once the attribute is created. At this stage the attribute feature is invisible.\nWhen execution of macro continues (F5 or run is clicked) the feature is set to visible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vb"},'Enum CreateAtttributeOptions_e\n    Visible = 0\n    Hidden = 1\nEnd Enum\n\nDim swApp As SldWorks.SldWorks\nDim swAttDef As SldWorks.AttributeDef\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\n\nConst ATT_DEF_NAME As String = "SimpleAttribute"\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swAttDef = swApp.DefineAttribute(ATT_DEF_NAME)\n    \n    swAttDef.Register\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swAtt As SldWorks.Attribute\n        Dim swSelObject As Object\n        \n        Set swSelObject = swSelMgr.GetSelectedObject6(1, -1)\n        \n        \'get the unique name for the attribute\n        Dim index As Integer\n        index = 1\n        \n        Dim attName As String\n        attName = ATT_DEF_NAME & index\n        \n        While swModel.FeatureManager.IsNameUsed(swNameType_e.swFeatureName, attName)\n            attName = ATT_DEF_NAME & index\n            index = index + 1\n        Wend\n        \n        Set swAtt = swAttDef.CreateInstance5(swModel, swSelObject, attName, CreateAtttributeOptions_e.Hidden, swInConfigurationOpts_e.swAllConfiguration)\n        \n        \'attribute feature is hidden in the tree\n        Debug.Assert Not swAtt Is Nothing\n        \n        Dim swAttFeat As SldWorks.Feature\n        Set swAttFeat = swModel.FeatureByName(swAtt.GetName())\n        \n        Stop\n        \n        \'show the attribute feature\n        swAttFeat.SetUIState swUIStates_e.swIsHiddenInFeatureMgr, False\n        swModel.EditRebuild3\n        \n    Else\n        MsgBox "Please open the model"\n    End If\n    \nEnd Sub\n\n\n')))}p.isMDXComponent=!0},69602:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sw-attribute-features-tree-fb8c890c075f6a8c2b7ea515909304ab.png"}}]);