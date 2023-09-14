"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[12333],{3905:(e,o,t)=>{t.d(o,{Zo:()=>m,kt:()=>w});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),p=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},m=function(e){var o=p(e.components);return r.createElement(l.Provider,{value:o},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},u=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=p(t),u=n,w=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return t?r.createElement(w,s(s({ref:o},m),{},{components:t})):r.createElement(w,s({ref:o},m))}));function w(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var l in o)hasOwnProperty.call(o,l)&&(a[l]=o[l]);a.originalType=e,a[d]="string"==typeof e?e:n,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44318:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const i={title:"Target multiple SOLIDWORKS versions using SwEx framework",caption:"Target Multiple Versions",description:"How to target multiple versions of the SOLIDWORKS with the same code base using SwEx framework",image:"get6-api-availability.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},s=void 0,a={unversionedId:"codestack/labs/solidworks/swex/target-versions/index",id:"codestack/labs/solidworks/swex/target-versions/index",title:"Target multiple SOLIDWORKS versions using SwEx framework",description:"How to target multiple versions of the SOLIDWORKS with the same code base using SwEx framework",source:"@site/docs/codestack/labs/solidworks/swex/target-versions/index.md",sourceDirName:"codestack/labs/solidworks/swex/target-versions",slug:"/codestack/labs/solidworks/swex/target-versions/",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/target-versions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/target-versions/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Target multiple SOLIDWORKS versions using SwEx framework",caption:"Target Multiple Versions",description:"How to target multiple versions of the SOLIDWORKS with the same code base using SwEx framework",image:"get6-api-availability.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Examples and source code for SwEx.PMPage framework",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/pmpage/examples"},next:{title:"Troubleshoot SOLIDWORKS add-in developed with SwEx framework",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/troubleshooting/"}},l={},p=[],m={toc:p},d="wrapper";function c(e){let{components:o,...i}=e;return(0,n.kt)(d,(0,r.Z)({},m,i,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When SwEx.Framework library is installed via nuget package, SOLIDWORKS interop libraries are also installed. Framework referencing latest interop libraries in its project, allowing the users to use the latest versions of API with the newer versions of the SOLIDWORKS."),(0,n.kt)("p",null,"Despite latest interop is referenced, Framework is compatible with older versions of SOLIDWORKS. ",(0,n.kt)("strong",{parentName:"p"},"Minimum supported version is SOLIDWORKS 2012"),". In order to enable forward compatibility, but at the same time take a benefit of newer APIs in the newer SOLIDWORKS versions, framework implements fallback mechanism for the APIs it is using internally.  It means if the certain API used by framework is not available in the target version of SOLIDWORKS, older version of API is used."),(0,n.kt)("p",null,"It is recommended to use similar technique and implement fallback APIs if your add-in if it needs to target multiple versions of SOLIDWORKS. "),(0,n.kt)("p",null,"Availability of certain method can be found by exploring the corresponding section in the SOLIDWORKS API help documentation (both web and local version)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SOLIDWORKS API availability section",src:t(40825).Z,width:"945",height:"339"})),(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/common/html/M_SolidWorks_Interop_sldworks_SldWorksCommonEx_IsVersionNewerOrEqual.htm"},"ISldWorks::IsVersionNewerOrEqual")," extension method provided by framework to decide which API to use. For example the ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICustomPropertyManager~Get6.html"},"ICustomPropertyManager::Get6")," method is only available in SOLIDWORKS 2018 SP0, while ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICustomPropertyManager~Get5.html"},"ICustomPropertyManager::Get5")," is available in SOLIDWORKS 2014 SP0, and older ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICustomPropertyManager~Get4.html"},"ICustomPropertyManager::Get4")," method is available from SOLIDWORKS 2011 SP4."),(0,n.kt)("p",null,"That means if we want to extract custom properties in our add-in and target all SOLIDWORKS versions starting from the SOLIDWORKS 2012, we need to write the code below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},'Public Sub ReadDescriptionProperty()\n\n    Dim prpMgr = App.IActiveDoc2.Extension.CustomPropertyManager("")\n    Dim prpName = "Description"\n    Dim val As String = ""\n    Dim resVal As String = ""\n\n    If App.IsVersionNewerOrEqual(SwVersion_e.Sw2018) Then\n\n        Dim wasRes As Boolean\n        Dim linkToPrp As Boolean\n        prpMgr.Get6(prpName, False, val, resVal, wasRes, linkToPrp)\n\n    ElseIf App.IsVersionNewerOrEqual(SwVersion_e.Sw2014) Then\n\n        Dim wasRes As Boolean\n        prpMgr.Get5(prpName, False, val, resVal, wasRes)\n\n    Else\n        prpMgr.Get4(prpName, False, val, resVal)\n    End If\n\n    Logger.Log($"{prpName} = {resVal} [{val}]")\nEnd Sub\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void GetTolerance(IDimension dim)\n{\n    var dimTol = dim.Tolerance;\n\n    double maxTol;\n    double minTol;\n\n    if (App.IsVersionNewerOrEqual(SwVersion_e.Sw2015, 3))\n    {\n        dimTol.GetMinValue2(out minTol);\n        dimTol.GetMaxValue2(out maxTol);\n    }\n    else\n    {\n        minTol = dimTol.GetMinValue();\n        maxTol = dimTol.GetMaxValue();\n    }\n}\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note. Although it is possible to simply use the oldest version of the method which corresponds to the minimum required SOLIDWORKS version as SOLIDWORKS supports backward compatibility, it is not recommended practice as newer version of methods might include critical bug fixes.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/common/html/M_SolidWorks_Interop_sldworks_SldWorksCommonEx_IsVersionNewerOrEqual.htm"},"ISldWorks::IsVersionNewerOrEqual")," method also allows to check the minor version (e.g. Service Pack)."),(0,n.kt)("p",null,"For example ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.idimensiontolerance~getminvalue2.html"},"IDimensionTolerance::GetMinValue2")," and ",(0,n.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2019/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.idimensiontolerance~getmaxvalue2.html"},"IDimensionTolerance::GetMaxValue2")," methods were added in SOLIDWORKS 2015 SP3, while previous implementation of this method is available since SOLIDWORKS 2006."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note, that we cannot simply check if current SOLIDWORKS version is 2015 as the method only works in SP3 and we need to explicitly specify the service pack")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-vb"},"Public Sub GetTolerance(ByVal [dim] As IDimension)\n    Dim dimTol = [dim].Tolerance\n    Dim maxTol As Double\n    Dim minTol As Double\n\n    If App.IsVersionNewerOrEqual(SwVersion_e.Sw2015, 3) Then\n        dimTol.GetMinValue2(minTol)\n        dimTol.GetMaxValue2(maxTol)\n    Else\n        minTol = dimTol.GetMinValue\n        maxTol = dimTol.GetMaxValue\n    End If\nEnd Sub\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void GetTolerance(IDimension dim)\n{\n    var dimTol = dim.Tolerance;\n\n    double maxTol;\n    double minTol;\n\n    if (App.IsVersionNewerOrEqual(SwVersion_e.Sw2015, 3))\n    {\n        dimTol.GetMinValue2(out minTol);\n        dimTol.GetMaxValue2(out maxTol);\n    }\n    else\n    {\n        minTol = dimTol.GetMinValue();\n        maxTol = dimTol.GetMaxValue();\n    }\n}\n")))}c.isMDXComponent=!0},40825:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/get6-api-availability-60c166f5a4cfa8365770e54d77d199fe.png"}}]);