"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[87374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},w="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),w=d(n),m=r,u=w["".concat(l,".").concat(m)]||w[m]||p[m]||i;return n?o.createElement(u,s(s({ref:t},c),{},{components:n})):o.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[w]="string"==typeof e?e:r,s[1]=a;for(var d=2;d<i;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const i={title:"Create body rotation animation using SOLIDWORKS API",image:"body-rotate.gif",labels:["animation","rotate","temp body"]},s=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/body-rotate-animation/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/body-rotate-animation/index",title:"Create body rotation animation using SOLIDWORKS API",description:"Body rotation animation",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/body-rotate-animation/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/body-rotate-animation",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/body-rotate-animation/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/body-rotate-animation/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/body-rotate-animation/index.md",tags:[],version:"current",frontMatter:{title:"Create body rotation animation using SOLIDWORKS API",image:"body-rotate.gif",labels:["animation","rotate","temp body"]},sidebar:"tutorialSidebar",previous:{title:"Macro gets extreme points on body using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/body-extreme-points/"},next:{title:"Create and display b-spline curve using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/geometry/create-bspline-curve/"}},l={},d=[],c={toc:d},w="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(w,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Body rotation animation",src:n(96520).Z,width:"259",height:"250"})),(0,r.kt)("p",null,"This VBA example demonstrates how to create a rotation animation of a selected body in part document using SOLIDWORKS API."),(0,r.kt)("p",null,"There will be no additional features created in the Feature Manager tree. This macro ",(0,r.kt)("strong",{parentName:"p"},"is not")," using the SOLIDWORKS motion study. Body is rotated around Y axis at origin. Animation is created using the temp bodies and original body or feature manager tree is not affected."),(0,r.kt)("p",null,"Select body from the Feature Manager tree and run the macro."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Body selected in the feature manager tree",src:n(93317).Z,width:"286",height:"172"}),"{ width=250 }"),(0,r.kt)("p",null,"Preview of the body is created and rotated until selection is cleared. When macro stops the original body is reverted to the original state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Const PI As Double = 3.14159265359\n\nDim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swSelMgr As SldWorks.SelectionMgr\n        \n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swBody As SldWorks.Body2\n        Set swBody = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swBody Is Nothing Then\n            RunRotationAnimation swModel, swBody\n        Else\n            MsgBox "Please select body"\n        End If\n        \n    Else\n        MsgBox "Please open part document"\n    End If\n    \nEnd Sub\n\nSub RunRotationAnimation(part As SldWorks.PartDoc, body As SldWorks.Body2, Optional speed As Double = 1)\n    \n    body.HideBody True\n    \n    Dim rotStep As Double\n    rotStep = PI * 2 / 360 * speed\n    \n    Dim curAng As Double\n    \n    Dim swModelView As SldWorks.ModelView\n    Set swModelView = part.ActiveView\n    \n    Dim swTempBody As SldWorks.Body2\n    \n    Dim swSelMgr As SldWorks.SelectionMgr\n    Set swSelMgr = part.SelectionManager\n    \n    While swSelMgr.GetSelectedObjectCount2(-1) <> 0\n        For curAng = 0 To PI * 2 Step rotStep\n            Dim animStep As MathTransform\n            Set animStep = GetTransform(curAng)\n            Set swTempBody = Nothing\n            Set swTempBody = body.Copy()\n            swTempBody.ApplyTransform animStep\n            swTempBody.Display3 part, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n            swModelView.GraphicsRedraw Nothing\n            DoEvents\n        Next\n    Wend\n    \n    Set swTempBody = Nothing\n    body.HideBody False\n    \nEnd Sub\n\nFunction GetTransform(angle As Double) As MathTransform\n    \n    Dim swMathUtils As SldWorks.MathUtility\n    \n    Set swMathUtils = swApp.GetMathUtility\n    \n    Dim swOrigPt As SldWorks.MathPoint\n    Dim dPt(2) As Double\n    dPt(0) = 0: dPt(1) = 0: dPt(2) = 0\n    \n    Set swOrigPt = swMathUtils.CreatePoint(dPt)\n    \n    Dim swAxisVec As SldWorks.MathVector\n    Dim dVec(2) As Double\n    dVec(0) = 0: dVec(1) = 1: dVec(2) = 0\n    \n    Set swAxisVec = swMathUtils.CreateVector(dVec)\n    \n    Set GetTransform = swMathUtils.CreateTransformRotateAxis(swOrigPt, swAxisVec, angle)\n    \nEnd Function\n')))}p.isMDXComponent=!0},96520:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/body-rotate-97fb19f63cc7b803aaaee10e8e073928.gif"},93317:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACsCAMAAACaYjMuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANKoIIs4APb29gAtgIs4OF2s4wAAN7Cvr0hugtIcARUVFYtji6bJoiVxwyVcCTgAALTM3HasgCUAMwA3VYuw9wBRojiL1LBjANSLONXFdmUfGiUAW4/I41CDn8XY4l0tACoqKtO4SQhHZWOw9xNObJiGRUOPomMAOHbIol9bS4tkIN+Mhh04D729vQAAW87Ozi1ri1SSr/nsvGMAAIyMjIurvrjDyENhNQBjsKOPS49xM/ewY6C9zmmMVtrUxzg4i2OwsNU5Ljg4OGNjAJa2hfDiii97oJWWldSLY0cxCqR8ImMAY2tqaWRKFsLCw3W41Uw1DWKbuCUtW8zGuCMjI75hW7DUi6cYDwA4i0tLSx9de2aoxqa7xaurq3Nzc+3BIDhjsKOTaIrR7DgAY9TV16Kioe0cJPewi9bX1UF9m3bI44h4V0NRokOP4zIyMgBBX2CAkabI48euXEMAMziLsNbc3kyILYGBgXudsGOw1GJhYSUAAOswA5PX8pK7zzxwjTskI6/N5dLf5ZmZmdHR00QuLK+KNhwcHLWPHFmZtrmvndna2wBji3NbKV1RgHwhHEJCQlNTU6KWgWywzjgAOHulZPfhXtxtZpR0E3ZRW4OpvaasgM7O0QAAY4PJ5WKkwlyEmlVAGb3T4kMAACdkgtLy9YvU9/fQOCREFBxWdPfUiy1xk0uRsQxDYHd2djF/pbWWOXvA3Zuutz2EpbCLi1lZWXZRAPw/BVKMqgU7WMzR0R0lGCUtIHGz0bClkKaDL9OxY1qVs2olIEx1jYuwi6eGPYx4PbzK0jg4Y5p1KKjC0WmMn/fLIK/29mmsymKfvXW62Pb21ChdeyE8FPb2r3zD4XZxM8LZ60KIteC2HY1CPUyJp1ycuqaPW4uLY+DMdzBlgrjT6BcfEi51mrKysq6ki0WEoa+GIOXl5mqlw2+qyGOLi93ET8fHynRWGq6PRJy3yXm00ShYczl0kZBpIMa4ksCXIGZmZqbIw5GwxHm920h+nDKEq3h4eAAAAN+KP4MAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAQIElEQVR4Xu2dD3wUxRXHz5z1X0TRXuXiHxoQWiqKAXNWShTqVaEiAhZUThtsMdRg6xVta6x/QDSKadqalDa1Ilohl8pBjGhBrKUqrdpiAANH0wpULdYetra10Joifvremzczu3eXvbuNSXaT/X0+uZ2dmZ3d+e6b2b15mTmfHzSVPjylCKBoPJ6SSQ5oeXi0PDyWygHPjK8+8pc2Dvc3ZcMz43ufOPHCC0988ZFfcUT/UjY80/+6/8aG5/75u8cv4oj+pWx4Lmq9+r8jH/97Q4OHh2XEM35GIv6zkQ0gKzzBZZs5RGorGMahHBUcxIHOFRzrL/KhzFmLfOZToyxLy7MQSzz10Wj0tEQ8Kx5U2awYh8x4DPGdylihzPnLxkIt4M+fKDVWJf7DJg4ZhKV1etb8CtF4hvDWgOe9uzfet/Hu0xKIZ+gl4zG6c3UrnraPQA2oZlA4bYTi16Td9lzw5FyIwrM4GhYBA57oxstOv2LjkLNGNgx99oUbX5z+HUwAlfl8hzeBtcNdAA5wQigrCCYLMWi7w9oKvl0AOSivIR6vKDgIQvLS1Q5eS3wghXV+LoCExsM185fhnRfpolQ+MjECDsCq6qshBdW9wlB+hUg8i6P1s9+jkBHPfaf/+PxXh5x17+R7XovH4xd+RjQwNMZrm/D+lOE1wEkFaqhnEZw1/rG2AjhrEPdBKp7uWBCavbp1ageP/3yTCIv8WLihARRBBlkzPL1MpxvPRxprpq2nSPUzIpRfIYxncV39lKrQJDpS4xmy8YrzLztp5lmth0ye3BB/7YVnGQ8WRycI/m1CDAuUF0TWhKYL+yIXx+NJxVnx6mRjVzt4PArzqvzGJkoWwDWDRJUuT4JHUaSuGeGJDxTH6FB+hQg8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"}}]);