"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[78700],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),f=l(n),u=s,p=f["".concat(c,".").concat(u)]||f[u]||d[u]||r;return n?o.createElement(p,i(i({ref:t},m),{},{components:n})):o.createElement(p,i({ref:t},m))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[f]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(87462),s=(n(67294),n(3905));const r={layout:"sw-tool",title:"Show the text of all comments in the active model using SOLIDWORKS API",caption:"Show All Comments Text",description:"VBA macro to show text from comments in the active document using SOLIDWORKS API",image:"comments.png",labels:["comment"],group:"Model"},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-all-comments/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-all-comments/index",title:"Show the text of all comments in the active model using SOLIDWORKS API",description:"VBA macro to show text from comments in the active document using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-all-comments/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-all-comments",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-all-comments/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-all-comments/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-all-comments/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"Show the text of all comments in the active model using SOLIDWORKS API",caption:"Show All Comments Text",description:"VBA macro to show text from comments in the active document using SOLIDWORKS API",image:"comments.png",labels:["comment"],group:"Model"},sidebar:"tutorialSidebar",previous:{title:"Draw sketch segments in context of the drawing sheet using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/sheet-context-sketch/"},next:{title:"Show Edit Material dialog using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/show-edit-material-dialog/"}},c={},l=[],m={toc:l},f="wrapper";function d(e){let{components:t,...r}=e;return(0,s.kt)(f,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Comments in the Feature Manager Tree",src:n(96031).Z,width:"239",height:"338"})),(0,s.kt)("p",null,"This VBA macro extracts the text from all comments of the active document and displays it in a single message box."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n    \n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n    \n        Dim swFeat As SldWorks.Feature\n        \n        Set swFeat = swModel.FirstFeature\n        \n        Dim msg As String\n        \n        While Not swFeat Is Nothing\n        \n            If swFeat.GetTypeName() = "CommentsFolder" Then\n                \n                Dim swCommentsFolder As SldWorks.CommentFolder\n                \n                Set swCommentFolder = swFeat.GetSpecificFeature2\n                \n                Dim vComments As Variant\n                vComments = swCommentFolder.GetComments\n \n                Dim i As Integer\n                \n                If Not IsEmpty(vComments) Then\n                    For i = 0 To UBound(vComments)\n                        Dim swComment As SldWorks.Comment\n                        Set swComment = vComments(i)\n                        msg = IIf(msg = "", "", msg & vbLf) & swComment.Text\n                    Next i\n                End If\n            End If\n           \n           Set swFeat = swFeat.GetNextFeature\n           \n        Wend\n        \n        If msg <> "" Then\n            swApp.SendMsgToUser2 msg, swMessageBoxIcon_e.swMbInformation, swMessageBoxBtn_e.swMbOk\n        End If\n        \n    Else\n        MsgBox "Please open model"\n    End If\n    \nEnd Sub\n\n')))}d.isMDXComponent=!0},96031:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO8AAAFSCAMAAAAtjXiUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAm6DrsdHPf39xGaFWOwsIs4AAAAW6urqwBjsI86OSUAAIuwi10tAJizmazF0T1vj4tjiwA3VHphGbBjABwcHPfhXYrT9rG6CwAtgDFvziUAM8RZQBicZksiItSwY9aur5G7z5JyE8J1cyUAWwAAN22rxWKOpXuSciBapWMAONjY10trXOvFCtSLOKmeh5B9QMrS1jk5Obm5uWFNChJJaOswA7GbOGNjAHpfYCoqKmMAADloufewY2Ow9884N8PDw1RzfChkwQBRorD29py+7dbSu4Kv6rDUi5WuvNXRy0JlRMSwRIqKitbW1VqP2NTU09LV2czFup16GKWPWpGfqgwMDMSSl0cxCsa1VjGDqVyat1ZvpXUkJTg4Y0NDQ/Dghvewi48oJl2s411RgPbKH7yoSEiLS0OP4+deXQJAXFanWS9TS8zMzK+OjEKItdrHgqyPOI9xM7+5q1bDCqbIw3h4eOC7C5ajtChde+c2MQA4izgAODB/pYs4Y2hoaCxzme6en1RAGboyJPX1sjIyMpN+MIGovICXopjO5V2gFbKysktLS2yJJ8+zKIZvOJGSkYKCgvw/BVR4rM3Lq15cW+Hi4S2sLlI8DziL1NzHWIt6U+Z7fY5tcHbI41NTU7+bH+nXdtIcAdTIySMiInR0dIEYFcyrGqbI40VsgmKiv7VVLx5Tb9+1umOw1DkAAJ1dX9tCRSJWg24WEpO6zEMAM925HYtkIEGCnjgAY3BaI7TO8tWMYe0cJGJhYffUixxtj0+KjabIoo7H4pqammWGZSt8npmBc3yxzcy7bqqGGtjFZ6+cTSVxw7GhdHZRAG+d4Mbg62JPH+FpaaO1wjmLryaLJYctMNAnLAAAYxmzElg8Pda6NuJOT0t0xz0/QG600HzB3umJiBUVFaasgFGFoQZEYx5MV82kIO2vsFCRr/fHx9W3JMa4kkJ+1cgVG4uLY0+kU6SkpDIzIalPS7OQGLBydCxrjWebtixmh7zJz49rIMGgoqGALqCRZgAAAHDWvMoAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAUBUlEQVR4Xu2dD5wcVX3AFwfXjTaannfEP60FLWi9NppdQb2Q9IyxinLnivEIoXixGkF0MdLmFGmaQ28ReteaUzMSiIr2rlJF478CUsu1sqRR1BACGpQ0QIjWlEJ7thKg+vH3+73fzLw3f3bf/p23c/P9JDv/3tt5331vZvb99s1cxloQTPPUWnC+gzyTYEBR8l0ALOT2zNOEk/omm9Q32cTnW6pUSjzbQWLzLc0XBnOdF47NtzJYKhUrvNA54vMtFW17AfmWJm27sIDa80I7X8VE6ptsUt9kk/omG8+XQzyJJm3PSSf1TTay73RCYKNQGqjf6aIesaXjcoaS+tak/R79NtDPCy7+dMPLP3De18/7+/89i5cdGve1z7rmQy+Z4AUXeb9X9Pi4gjcAavnK5XJxK7zAxEfQ17ZHR22bF1x86d505LE//eMPHnzB2V95Kq9hGvU96+bvfXbDhu+89EOv5xWMvN+e+3308AbA52uVi+VR/IZTLvEqxu8LtWsdOmQFalhNt/xrH3/t2e86+MDzZl559p/xOkGjvuue+aurP7vhTz7xqp5/WM6rCMX3Cz6q+05TDW/lVYzPF3Tnt44e2jrvF1bSvWnJG19j/3zn/stmZmZ+8qUfDfNqpGHfjf/x3WuuuP6mL9x6yk09Z/BKQPENwBsAvy+54hv4WrSart8enMoD5fKhQVVYTjd85PQ7/sn6zwf2X7a9b2bmlSfKwqqv7/IU5Wv/efnGjRs39lx/9JT77rvp+iM9vB6Q90vll5Fc/L6TcBKq6Qu6h/LTxXy+NDYwoArL6ZZ/7eE7XvOlyx54187/nwHhi375d7wB8Psqy1G+5Ts3kO+xJac+duqRPVdG+lKl8hagiq9W/dr2VH6bZeUh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"}}]);