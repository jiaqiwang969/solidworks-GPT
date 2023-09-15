"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[29491],{3905:(e,n,A)=>{A.d(n,{Zo:()=>l,kt:()=>c});var t=A(67294);function i(e,n,A){return n in e?Object.defineProperty(e,n,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[n]=A,e}function r(e,n){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),A.push.apply(A,t)}return A}function s(e){for(var n=1;n<arguments.length;n++){var A=null!=arguments[n]?arguments[n]:{};n%2?r(Object(A),!0).forEach((function(n){i(e,n,A[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(A,n))}))}return e}function o(e,n){if(null==e)return{};var A,t,i=function(e,n){if(null==e)return{};var A,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)A=r[t],n.indexOf(A)>=0||(i[A]=e[A]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)A=r[t],n.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(i[A]=e[A])}return i}var m=t.createContext({}),a=function(e){var n=t.useContext(m),A=n;return e&&(A="function"==typeof e?e(n):s(s({},n),e)),A},l=function(e){var n=a(e.components);return t.createElement(m.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},M=t.forwardRef((function(e,n){var A=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=a(A),M=i,c=d["".concat(m,".").concat(M)]||d[M]||u[M]||r;return A?t.createElement(c,s(s({ref:n},l),{},{components:A})):t.createElement(c,s({ref:n},l))}));function c(e,n){var A=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=A.length,s=new Array(r);s[0]=M;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var a=2;a<r;a++)s[a]=A[a];return t.createElement.apply(null,s)}return t.createElement.apply(null,A)}M.displayName="MDXCreateElement"},3573:(e,n,A)=>{A.r(n),A.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=A(87462),i=(A(67294),A(3905));const r={title:"Suspend SOLIDWORKS rebuild operation using Geometry++",caption:"Suspend Rebuild",description:"Suspend SOLIDWORKS rebuild operations in part, assembly and drawing to rebuild in batch to improve performance using Geometry++ add-in",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus"},s=void 0,o={unversionedId:"codestack/labs/solidworks/geometry-plus-plus/user-guide/suspend-rebuild/index",id:"codestack/labs/solidworks/geometry-plus-plus/user-guide/suspend-rebuild/index",title:"Suspend SOLIDWORKS rebuild operation using Geometry++",description:"Suspend SOLIDWORKS rebuild operations in part, assembly and drawing to rebuild in batch to improve performance using Geometry++ add-in",source:"@site/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/suspend-rebuild/index.md",sourceDirName:"codestack/labs/solidworks/geometry-plus-plus/user-guide/suspend-rebuild",slug:"/codestack/labs/solidworks/geometry-plus-plus/user-guide/suspend-rebuild/",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/suspend-rebuild/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/suspend-rebuild/index.md",tags:[],version:"current",frontMatter:{title:"Suspend SOLIDWORKS rebuild operation using Geometry++",caption:"Suspend Rebuild",description:"Suspend SOLIDWORKS rebuild operations in part, assembly and drawing to rebuild in batch to improve performance using Geometry++ add-in",image:"icon.png","toc-group-name":"labs-solidworks-geometry-plus-plus"},sidebar:"tutorialSidebar",previous:{title:"Split SOLIDWORKS body by faces using Geometry++",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/geometry-plus-plus/user-guide/split-body-by-faces/"},next:{title:"Whats New: new features and bug fixes in Geometry++",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/geometry-plus-plus/whats-new/"}},m={},a=[],l={toc:a},d="wrapper";function u(e){let{components:n,...r}=e;return(0,i.kt)(d,(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"{% youtube { id: QW3tYaNAfo0 } %}"),(0,i.kt)("p",null,"This command allows to temporary suspend rebuild operation while still allowing to modify the dimensions, sketches and feature definitions."),(0,i.kt)("p",null,"This approach allows to greatly reduce the modelling time by execution rebuild operations in a batch mode."),(0,i.kt)("p",null,"Command is available in menu, toolbar and command manager tab and acts as a toggle button."),(0,i.kt)("p",null,"When button is not toggled the suspend rebuild mode is disabled and rebuild operations are performed normally."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Suspend Rebuild commands in toolbar and command manager",src:A(87864).Z,width:"134",height:"121"})),(0,i.kt)("p",null,"When the button is toggled all rebuild operations are suspended."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Suspend rebuild enabled",src:A(30981).Z,width:"151",height:"122"})),(0,i.kt)("p",null,"The status bar displays the information about the number of currently suspended rebuild operations."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Number of suspended rebuilds in the status bar",src:A(49521).Z,width:"403",height:"181"})),(0,i.kt)("p",null,"In suspend rebuild mode the changes are not resolved and model will remain unchanged. When editing the definitions of the features and closing the Property Manager Page all the features below the edited feature become disabled (not editable) until model is rebuild."),(0,i.kt)("p",null,"Once batch editing completed disable the ",(0,i.kt)("em",{parentName:"p"},"Suspend Rebuild")," button and click ",(0,i.kt)("em",{parentName:"p"},"Rebuild (ctrl+B)")," or ",(0,i.kt)("em",{parentName:"p"},"Regenerate (ctrl+Q)")," command to update the model."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Disclaimer: Although the functionality of suspend rebuild is implemented using the SOLIDWORKS API, suppressed rebuild may cause unexpected behaviour of the model. However there were no reported issues of any damage or corruption. Use on your own risk.")))}u.isMDXComponent=!0},87864:(e,n,A)=>{A.d(n,{Z:()=>t});const t="data:image/png;base64,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"},49521:(e,n,A)=>{A.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZMAAAC1CAMAAACtQOLMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAHq6egCAAPb29mMAAAAwdz6UPpW+5BwdHFWX1DiLsGNjALbU1LCLOP7+/tTUl5WVlQAA/4uLYwAAOL7R9xkZMF5eXqoZGQBVl4CAlZWVqdSXVeLi4tG+vr6+lXcwAL6VgBlLGS0tLYCVvjAAMJd3MBkZbDAAAM7T5jB3l/8AAMDnwIvU987O0NDow3QZGZWAlRkZupWp0ZWAgNGpgJebptbW12MAOBkZlsTExDIZGZ+4u2Ow9/fUi+S+qfewY3e21LBjADAAVanR966urhlqGQAAVQBjsDAwVdPT1HJycp2dnXcwMNXX5JfU1JWAqYCAqSOCI1sZGQAwVQA4i5sZGcTEx4KCgqioqOS+lThjY4mJiYs4ABkxGevr6xwc06SkpDAwd9TW44vUsJLJklUAALq6utS2d12nXRkZVNvb3BkZorwZGamAlUwZGdSLOFUAMFVVl8rKzBlbGTiL1IMZGYtji6mAgPfRqQAAYx94H/ewi/fuw5dVAGOwsBkZhL6pvqnR0dfa5UNERISFm4Cp0Ys4Y8Lw976+v7DUizAwABkZsavaqzB3tmdmZhpyGjk4OBk9GbOzsxkZw1UwAFRUVCUlJdTUtmwZGcEaGrZ3MBkZRh0d2KCksE6eTi6KLgBVVVUwd2Ow1BljGYgZGeTRqRkZXDgAOKepvL6+qanR5G2ybXh3d5rPmjhjsDgAYxlTGRkkGYC/gD0ZGRkZexsbyxkZqBkZmxlFGccaGrCLi3sZGTgAADExMRkZi2JhYWMZGYB/f7EZGaQZGTg4Y2atZrbUthkZYBkZdY4ZGVQZGR8f3InEiRkZO6LUohkoGUMZGW1sbBkZTbPeszaPNiB8IFWiVUWYRdDQ0YPAgwAAAMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///3q5LsoAAADbdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ACDO6IAAAAAJcEhZcwAADsMAAA7DAcdvqGQAABJrSURBVHhe7Z2LnxNHHcCvXWqxtuEULVSiPVqlSnuttTSSFoSTnBjOR1vbIydHiNoGG7CHAeRhEBWQaKVHUymP1idnfbRVaukDgdIDK9D66EM0/jf+fr/57exusrkkm0nY3Zvvh2RnZ2c35PfNzOzuTHJdEWb5DxijDkVehopoOs0pG8s5NJ1GvZNUlBbRFC0CQsidZEqpRDaRymZ4PRCE3Um2WIz3JpPaiVfa4iSeLzudzBsfH9/FacnQ+F27OenOvMpdrD3ggHV2bo7QODnFSycuTnowuB8SaUnhE/WCWumE9th8PaTmwRM+lBEeJ65Sqp24R7/wpaad4B7kpGdJI/s3QYicuElxcbIJQojLb0IUMZQ9399014epOSvcNj5On/chWIVSsLhGhtp0gtsgSQvRCs67HFZ1PZE4nLhIcWm7hsYhhnYnH+SE8Wl4YMs2BL1D4f0U582yo2AnuI0KWfWksGnXkOVOAeGuJ9EEO8mK6xQCqgNYsZygIoowAlHmmkQFqGEihBORiaUtJ1hnhDBFhLo/ASXspGyXYmzGhko6wagLJ9ggXW/Wjc2wAiwpbKLTKuFEbMN9LSe6j3dic8JLG9FUyXQSc9QU7OirnRQ2QWAhyqYTsTCp6YQSZi+lBEVOLrU9e6cVJ9WQEtOJUwqEkJxgiC0nGFzoRPjMrOIEjdsuypSl0YnQJNs4BaiqJ6ijVSWKnRhZaLqkk2xWZBY+CU/YU0NHXdjkcALxLtyGDRHkQh+PC+N7tBPAfTxlYhcknGDJTXjehdmqCLMTIwc1RTiJp3Kch90DXXZD4q6bIbBWfwLdyfW/wY4BznHxRApPdekcDcEVPFPGPsc6K+jBnkl0OOpQ1p9c2roS5U4MI57IgpN8Ns7rgSDkTox0qpTPplzeo49R5kSBknY4MYxypsypoBB+J8FDO/Ef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"},30981:(e,n,A)=>{A.d(n,{Z:()=>t});const t="data:image/png;base64,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"}}]);