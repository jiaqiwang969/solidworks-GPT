"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[85360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,u=c["".concat(l,".").concat(g)]||c[g]||m[g]||i;return n?r.createElement(u,s(s({ref:t},d),{},{components:n})):r.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},22226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"Get b-spline parameters from the selected edge using SOLIDWORKS API",caption:"Get B-Spline Parameters",description:"Get parameters of b-spline curve (dimension, order, periodicity, control and knot points) from the edge selected in the graphics view using SOLIDWORKS API",image:"selected-bspline-edge.png",labels:["bspline","parameters","modeler","edge"]},s=void 0,a={unversionedId:"codestack/solidworks-api/geometry/get-bspline-parameters/index",id:"codestack/solidworks-api/geometry/get-bspline-parameters/index",title:"Get b-spline parameters from the selected edge using SOLIDWORKS API",description:"Get parameters of b-spline curve (dimension, order, periodicity, control and knot points) from the edge selected in the graphics view using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/geometry/get-bspline-parameters/index.md",sourceDirName:"codestack/solidworks-api/geometry/get-bspline-parameters",slug:"/codestack/solidworks-api/geometry/get-bspline-parameters/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/geometry/get-bspline-parameters/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/geometry/get-bspline-parameters/index.md",tags:[],version:"current",frontMatter:{title:"Get b-spline parameters from the selected edge using SOLIDWORKS API",caption:"Get B-Spline Parameters",description:"Get parameters of b-spline curve (dimension, order, periodicity, control and knot points) from the edge selected in the graphics view using SOLIDWORKS API",image:"selected-bspline-edge.png",labels:["bspline","parameters","modeler","edge"]},sidebar:"tutorialSidebar",previous:{title:"Finding the body bounding cylinder using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/geometry/get-bounding-cylinder/"},next:{title:"Get parameters of face at centroid using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/geometry/get-face-center-parameters/"}},l={},p=[],d={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Selected b-spline edge",src:n(3410).Z,width:"445",height:"432"}),"{ width=250 }"),(0,o.kt)("p",null,"This VBA example extracts the parameters (dimension, order, periodicity, control and knot points) from the selected edge of b-spline type (e.g. edge derived from the spline segment). The extracted data can be used in the ",(0,o.kt)("a",{parentName:"p",href:"https://help.solidworks.com/2012/English/api/sldworksapi/SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IModeler~CreateBsplineCurve.html"},"IModeler::CreateBsplineCurve")," SOLIDWORKS API method to build the curve of the same geometry."),(0,o.kt)("p",null,"The data is output into the Immediate window of VBA editor in the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Props:\n Dimension Val \n Order Val\n Control Points Count Val\n Periodic Val\nKnots:\n Val 1\n ...\n Val N\nControl Points:\n Val 1\n ...\n Val N\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swModel As SldWorks.ModelDoc2\nDim swSelMgr As SldWorks.SelectionMgr\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swModel = swApp.ActiveDoc\n    \n    Set swSelMgr = swModel.SelectionManager\n    \n    Dim swEdge As SldWorks.Edge\n    \n    Set swEdge = swSelMgr.GetSelectedObject6(1, -1)\n    \n    Dim swCurve As SldWorks.Curve\n    \n    Set swCurve = swEdge.GetCurve\n    \n    Dim swSplineData As SldWorks.SplineParamData\n    Set swSplineData = swCurve.GetBCurveParams5(False, False, False, False)\n    \n    Dim i As Integer\n    \n    Debug.Print "Props:"\n    Debug.Print swSplineData.Dimension\n    Debug.Print swSplineData.Order\n    Debug.Print swSplineData.ControlPointsCount\n    Debug.Print swSplineData.Periodic\n    \n    Debug.Print "Knots:"\n    Dim vKnotPts As Variant\n    swSplineData.GetKnotPoints vKnotPts\n    \n    For i = 0 To UBound(vKnotPts)\n        Debug.Print vKnotPts(i)\n    Next\n    \n    Debug.Print "Control Points:"\n    Dim vCtrlPts As Variant\n    swSplineData.GetControlPoints vCtrlPts\n    For i = 0 To UBound(vCtrlPts)\n        Debug.Print vCtrlPts(i)\n    Next\n    \nEnd Sub\n')))}m.isMDXComponent=!0},3410:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/selected-bspline-edge-ed2b5fd82d6a7b9afcebadb12abd1a0a.png"}}]);