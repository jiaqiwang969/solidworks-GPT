"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[80377],{3905:(e,i,n)=>{n.d(i,{Zo:()=>m,kt:()=>d});var t=n(67294);function s(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function A(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function k(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?A(Object(n),!0).forEach((function(i){s(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function a(e,i){if(null==e)return{};var n,t,s=function(e,i){if(null==e)return{};var n,t,s={},A=Object.keys(e);for(t=0;t<A.length;t++)n=A[t],i.indexOf(n)>=0||(s[n]=e[n]);return s}(e,i);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(t=0;t<A.length;t++)n=A[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=t.createContext({}),r=function(e){var i=t.useContext(l),n=i;return e&&(n="function"==typeof e?e(i):k(k({},i),e)),n},m=function(e){var i=r(e.components);return t.createElement(l.Provider,{value:i},e.children)},o="mdxType",S={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},J=t.forwardRef((function(e,i){var n=e.components,s=e.mdxType,A=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),o=r(n),J=s,d=o["".concat(l,".").concat(J)]||o[J]||S[J]||A;return n?t.createElement(d,k(k({ref:i},m),{},{components:n})):t.createElement(d,k({ref:i},m))}));function d(e,i){var n=arguments,s=i&&i.mdxType;if("string"==typeof e||s){var A=n.length,k=new Array(A);k[0]=J;var a={};for(var l in i)hasOwnProperty.call(i,l)&&(a[l]=i[l]);a.originalType=e,a[o]="string"==typeof e?e:s,k[1]=a;for(var r=2;r<A;r++)k[r]=n[r];return t.createElement.apply(null,k)}return t.createElement.apply(null,n)}J.displayName="MDXCreateElement"},13174:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>k,default:()=>S,frontMatter:()=>A,metadata:()=>a,toc:()=>r});var t=n(87462),s=(n(67294),n(3905));const A={title:"Get bodies and materials from drawing view using SOLIDWORKS API",caption:"Get Bodies And Materials From Drawing View",description:"VBA macro to find bodies and their materials of the selected drawing view (including sheet metal flat pattern) using SOLIDWORKS API",image:"sheet-metal-views.png",labels:["view bodies","flat pattern"]},k=void 0,a={unversionedId:"codestack-clone/solidworks-api/document/drawing/get-view-bodies/index",id:"codestack-clone/solidworks-api/document/drawing/get-view-bodies/index",title:"Get bodies and materials from drawing view using SOLIDWORKS API",description:"VBA macro to find bodies and their materials of the selected drawing view (including sheet metal flat pattern) using SOLIDWORKS API",source:"@site/docs/codestack-clone/solidworks-api/document/drawing/get-view-bodies/index.md",sourceDirName:"codestack-clone/solidworks-api/document/drawing/get-view-bodies",slug:"/codestack-clone/solidworks-api/document/drawing/get-view-bodies/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/drawing/get-view-bodies/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/document/drawing/get-view-bodies/index.md",tags:[],version:"current",frontMatter:{title:"Get bodies and materials from drawing view using SOLIDWORKS API",caption:"Get Bodies And Materials From Drawing View",description:"VBA macro to find bodies and their materials of the selected drawing view (including sheet metal flat pattern) using SOLIDWORKS API",image:"sheet-metal-views.png",labels:["view bodies","flat pattern"]},sidebar:"tutorialSidebar",previous:{title:"Get all visible components in the drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/drawing/get-all-visible-components/"},next:{title:"Get mass of bodies in drawing view using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/document/drawing/get-view-bodies-mass/"}},l={},r=[],m={toc:r},o="wrapper";function S(e){let{components:i,...A}=e;return(0,s.kt)(o,(0,t.Z)({},m,A,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Flat pattern drawing views",src:n(87801).Z,width:"690",height:"800"}),"{ width=200 }"),(0,s.kt)("p",null,"This VBA macro finds all bodies of the selected drawing view (including sheet metal flat pattern) and extracts their materials using SOLIDWORKS API."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2017/english/api/sldworksapi/solidworks.interop.sldworks~solidworks.interop.sldworks.iview~bodies.html"},"IView::Bodies")," property finds the bodies of the drawing view, however this SOLIDWORKS API property returns Nothing for the drawing view created from sheet metal flat pattern."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Flat pattern is set in the drawing view property page",src:n(85018).Z,width:"297",height:"535"}),"{ width=250 }"),(0,s.kt)("p",null,"Macro below extracts bodies and finds the materials assigned to them in both cases (for regular parts and for sheet metal patterns). The result is output to Immediate window of VBA editor."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swView As SldWorks.view\n        Set swView = swModel.SelectionManager.GetSelectedObject6(1, -1)\n        \n        If Not swView Is Nothing Then\n            \n            Dim vBodies As Variant\n            vBodies = GetBodies(swView)\n            \n            Dim i As Integer\n            \n            For i = 0 To UBound(vBodies)\n                \n                Dim swBody As SldWorks.Body2\n                Set swBody = vBodies(i)\n                \n                Dim matDb As String\n                Dim matName As String\n                \n                matName = swBody.GetMaterialPropertyName(swView.ReferencedConfiguration, matDb)\n                \n                Debug.Print swView.Name & " - " & swBody.Name & " - " & matName & " - " & matDb\n                \n            Next\n            \n        Else\n            MsgBox "Please select view"\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\nFunction GetBodies(view As SldWorks.view) As Variant\n    \n    If view.IsFlatPatternView() Then\n        \n        Dim vComps As Variant\n        vComps = view.GetVisibleComponents()\n        \n        \'Flat pattern can be only created for a single body (either single body part or select body for multi-body part)\n        Dim swComp As SldWorks.Component2\n        Set swComp = vComps(0)\n        \n        Dim vFaces As Variant\n        vFaces = view.GetVisibleEntities2(swComp, swViewEntityType_e.swViewEntityType_Face)\n        \n        Dim swFace As SldWorks.Face2\n        Set swFace = vFaces(0)\n        \n        Dim swBodies(0) As SldWorks.Body2\n        Set swBodies(0) = swFace.GetBody()\n        \n        GetBodies = swBodies\n        \n    Else\n        GetBodies = view.Bodies\n    End If\n    \nEnd Function\n')))}S.isMDXComponent=!0},85018:(e,i,n)=>{n.d(i,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAAIXCAMAAAD331jwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAIHCajmbBff394pjIPLAFAA6Oo5ljgBks1kAALa5vdXxvgA4ixkZGUVmZqOjozqQttSLOAA2VY04AHxnQbHwqtu/gYXA9+bm2zIyMjg4ZFcAMS90lwAAMopvL2ZmRXm410YZGV6o6084D92dWW5VJrPK1TF6uYvU9xkZRuvJhDk5jqGCMdfXuFcAV4KHkF+cuZCQjzkAAK/Az20ZGbWNHrHs94/VszB+pIiWufewY46zjvnyrvzjQBkZbWQAOda/TVec2lVVVQAAWABXm7p6MShdfGSGjypjg7JkANTV16OUesPDxIKCgkcxCmtHFwAxes7OzrS0tNjY14eHh9ram30yMpeXl0RERNXQxxlGbcnEuNbW1bOPPV41AJOTk9LS02BgNjF5eUhdlJDb/zhjsDWEyffUi2Y6ZnBwcNaSRkWFozcAN445OZS8z3d2dm2WrTqQ2xlttc+HhzU1Xny9nIVmFGFhYeDh4JpWAFNnm8zQ1qexypB9W7VtGaNmReDJW4TJ6141Xo7V1YTJqEVFhT91kYVFRYWj2zo6OpJGGUWFwG5/qvfLIIm1ydzd3c7O0W21tW2199iaVgsLC8fHysGiPlaZ17VtbX1ZfXt7e3zA3k1NTRlGkj96mISohOuoXma2//e1bbSTN7zg2mQAANaSkrmtmMmiICtqjEVmo/jiXmOwsJLW99na20ZGGa6zuf/bkFwAM2M4ODIyfdC0R22y0KOj26ysrGFMJ7BjOEaS1k6JpziLi/+2ZqKFQ3oxAPjRKdbWmJ7a2pnWmXu72mNjsABeqH9/f9XX29jhpb29vYs4Y4GswduQOkVFZktflo2OjgAAZGhoaPfAhYl1UZJxGsCjZnqcrVlZWX5fFGOw9y9vkWZFRTiL1MCFRU+Ssmaj25ynxISIisrc4ffWksmENcLU27Ckjc/T4Lu+wWKjwJaLajODqnRiQGQAZObp6gAAOAA1hLa2222SkpCntF9EFtujZkyDnqheALvD1wA6kICzyl1voYQ1AAAAANvo4tQAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAbqElEQVR4Xu2dD5wcVX3AFwZrIFyvR0RnJVjRAgG1Nfw55bg2bUiQu14idxfMWc/e2QjpWcNprGWxFm0p2hPp0cjVFgIFmrSCukW09kT+aisJp0GMpaWJUax/UWSw1dBa/fT3583szOzM7u+yM7Ozmd+X7Lw378/cvO++Nzv39jFXspQ61tkRqKkI1JSUeFNDig/tU3LUlBQ1JUVNSWlkal3C8FE7lUamJmVIDagpNaWmAshMVStOiErVZAVN/ei4ED8yGUAhTFVGyiFGKiYraOq4G0IcZzKAQphyypxSo+yYrJCp74UooKn1LhSLNVWHyQAKY+pXGTAFGzvGVH3fMyFQGFMPMGAKNvGmgh3JLqIpF4o1MHXDJ19+nGWu++UimvLgIpI+ReU4ihTIFHUmgHpL8+sUHaqgpvBSDpR37drVtE/RgSqVIpuC1jc0FbhOFdEUjLxHH3jgUQgq5Uq12rhP0VEqSBFNXWMAU9XqaMPrFB2ERFWLZ8pe/yzD+mp5dHS8WZ9iT2DUZACFMeUxWh4fb2AKr1P88QgU0ZTbS6rQn8bHJ+NM2dSnTIcaBaMmAyiEqfpZl6k4U4BxiqIKZ6p+Js+JnsnrNiI9uk0GUAhTDZEaUFNqSk0FiDc1P2++0GwKHag56+Y7mEamhqh5CtFwVZCa8qGmpKgpKWpKipqSoqakqCkpakqKmpIiN7Vuu5lFQUxakZCb2m5CxP9tZ1GQmwrI8X81dXjhrFw9M7N6wjG7NRZpyn7td/71j/5+9PBVNTIzAa2bnJgZMQkeizT1gx+84N33nfwpiPm/xrPf14XcWP9G+PjmSad91ESDQG2qeUXXjZ9pUKara6vZSZGR8px16ZNP/rm1UA6rWqSp9R86+6iX/uV6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"},87801:(e,i,n)=>{n.d(i,{Z:()=>t});const t="data:image/png;base64,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"}}]);