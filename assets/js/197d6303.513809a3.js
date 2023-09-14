"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[25012],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),s=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(l.Provider,{value:e},t.children)},b="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},A=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),b=s(a),A=o,u=b["".concat(l,".").concat(A)]||b[A]||m[A]||r;return a?n.createElement(u,i(i({ref:e},c),{},{components:a})):n.createElement(u,i({ref:e},c))}));function u(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=A;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[b]="string"==typeof t?t:o,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}A.displayName="MDXCreateElement"},24295:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={title:"Change apply appearance option in material using SOLIDWORKS API",caption:"Change Apply Appearance Option In Material",description:"Example demonstrates how to change the Apply Appearance option in the material options",image:"material-apply-appearance.png",labels:["part","solidworks api","material","appearance","example"]},i=void 0,p={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-apply-appearance/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-apply-appearance/index",title:"Change apply appearance option in material using SOLIDWORKS API",description:"Example demonstrates how to change the Apply Appearance option in the material options",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-apply-appearance/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-apply-appearance",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-apply-appearance/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-apply-appearance/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-apply-appearance/index.md",tags:[],version:"current",frontMatter:{title:"Change apply appearance option in material using SOLIDWORKS API",caption:"Change Apply Appearance Option In Material",description:"Example demonstrates how to change the Apply Appearance option in the material options",image:"material-apply-appearance.png",labels:["part","solidworks api","material","appearance","example"]},sidebar:"tutorialSidebar",previous:{title:"Catch new feature creation event from SOLIDWORKS API notification",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/catch-new-feature-creation-event/"},next:{title:"Change value of global variable in model using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/change-global-variable-value/"}},l={},s=[],c={toc:s},b="wrapper";function m(t){let{components:e,...r}=t;return(0,o.kt)(b,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Apply Appearance option in Edit material dialog",src:a(14404).Z,width:"950",height:"194"})),(0,o.kt)("p",null,"This example demonstrates how to change the ",(0,o.kt)("em",{parentName:"p"},"Apply Appearance")," option in the material options using SOLIDWORKS API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\nDim swPart As SldWorks.PartDoc\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Set swPart = swApp.ActiveDoc\n    \n    If Not swPart Is Nothing Then\n        \n        Dim swMatVisPrps As SldWorks.MaterialVisualPropertiesData\n        Set swMatVisPrps = swPart.GetMaterialVisualProperties\n        swMatVisPrps.ApplyAppearance = False\n        \n        swPart.SetMaterialVisualProperties swMatVisPrps, swInConfigurationOpts_e.swAllConfiguration, Empty\n    Else\n        MsgBox "Please open part document"\n    End If\n    \nEnd Sub\n')))}m.isMDXComponent=!0},14404:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA7YAAADCCAMAAABKf67gAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAD/O8uvrqABmtuuoXpA6AAAAMbZmAKypfjOCAQArfbb//7m5wSEhIpm10ZGPYzsAAO0cJIBfDKnr7chpV0AANDWEyXi3n9XV37DNnZ3AgW7a82AsMv7+27i4u2FhYbmKh7jX1487OTAwfV8rAJrA7z4AYnh4V22Ds6jB3L7dnV+p6LdgTwk+W/Dw8ABMnKqLWRYWFpmZmUMUIpvZ2f7+/jB4e8Ls9FUwWvX19dW2fo6OkAAAWXi31a/X9LdCLP/bkDMzM9WYWduQOiZtvr/V7IOq57LK5GYAOppua2JQf///tjuPkeipnJSVlXqafeWilKa/23hNAPHNDNv+/sPXsy8AADs7O7bV4OTk5Fea2b5SPbS23J651aurrlRUVbnQ6bJ7e8+KjmhoaC0AWVUAAAA6kIODg93m7Ovr86K82Ovr7MbGyi8wWZhVAHZrMevqyXi34O/LxCwAMjBVn3RyctjYmq+yuYTJ6rCecKFNPxlgnHkxMZyguWa2/9J+bkRERHkwAGYAZnaZ2GYAAJDb/21tldmZjqakezF7u4mMlWabRZlthc10Y6tZSdfl82Y6ZgAwMpxgGZjV4I2+2lNWZloAMrbO54eHjLmbnJA6Zn5cB6jBnU8nNsDAxIVIP7pJMzo6kKnCvuvJhH19gl/V83W92QAAZqOjqHejW5C2kFWY4Oi9olUAMTqQ2ypxnbd4MbLMwZ85JlYAWKWHVykqK8iSdZjVn6Pm9Do6ZsNdSgBVn6zF387Oz6G715Li9N+UhpFmkXOQoNPTlnd3eBtLUlVVMuGYi3y+3IKHkMjb7tbWvlDS8tqbV3gwWlUwfnq52AAAOrKzsxsbGwAwfNq7e7ebtbW2wtXVn16l25C2/71+c9bAvQBeqJFuMlWYn6BWSkSL3mxsbpXH4Y9sWDpmtrp6Mcnr6+emmbzb2wBXmjB4wZ1YAOrUvnvG4FlZWXrEwF09TV4AAABPoIDd9OOdj/+2ZpxFNePm7nlWfJLD3pG8dwA1hJ+foOKEhwAAAD06x8wAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAeGUlEQVR4Xu2dC5wVV3nAx9BASkhNtbZX7SaaoJZa0bhd9cKq3AUlKUqEboGbKhgNYFyyRTSJ2kCzBoxJW7HFTWJrsGI0qSRxbcRHYX1VW3WLVSBKWksNtrQGH/VRRFv89XudM2fmzt2dufO4c+9+/+zMOec7Z8597Pz3zJ1lv3jVTLiwOTJiMmRkFDJCiUTepChkRGciryEhcnBC5OAoZERC5OBcyUhbRVGKw2hbUxSl9By+hHRlbWs3XlDvUxSl7Lzm8yiutxGoLaz/kqIoHcDONZds3Eir7Y1qraJ0CM/9PF8k1y6QgKIopeexl7C2utgqSsfw8cOsbVXaiqKUno/XWNu+VyiK0iGotorScai2itJxfEq1VZROQ7VVlLaz9Qe9U/ODrTLa0faTiqK0iTvftWVq3nWnjP7kJ1VbRWk7vVteOjVbemU0atun2ipKe+nd8l9TE9D2F1VbRWkvvVteNjUBbR/P2r5WUZQ20bvlf3yeNDo6eqVTGrb0yujXvvZTtSc0arty5kNUvvv8Z1LZhJX9H5Aa1JdIRVGUpPRu+Qef0b6+vtErP/0kKj8qQSCgLV4kzw9p67GEx/Y52n5k9julFoVqqygt07vl0z6oa9/oZVz8iwSBsLabNoW03Ufr6J65qq2iFEBA2ytZWNpdFq3tj2t/DNpWan0rHFZ+aO7DUHxk9h88c8WKt63yvNnvXLHS8zxoHfO8mQ+t2DP3Jef3f2DlEtu7AuuKorREQFvxNmwtaCujV6z4ce2vQdt6SNslx1jFYyDqv6OlUMJqC9bC7iP9X9gz95qHWFXTq9oqSsv03vxCl4vY29Eb/kYCxM2utv8L2sJn23kOK5e8+3EPzXvbVV849kwOPGv2z2jD8Lw9cx/eM3cJDfN7TV1RlMSEtP3JaB1p0FZGz5vHq+1QWFv8AmdJW7gu9kTbZ0EVAG0f5mG2V7VVlJbpvfmvHN7M1oK3F0mEcLR9Yu0Qa3vAYeWSA+dc9d+//tCBYz868O7zZ//sACjLW//3aABoy8NsL9QVRWmNgLZsLe9cb2/uldEHDjyxtptvSUmbAAf3zF0HMoK251wFph4TOc95/dNpgNXW9qq2itIyAW1HK8Doe7h4oQSBgLb4pwSbGrQ98CwPdqgtmHrOqtnf4pV2Jez2/M63fG1Nr2qrKC3Te/Pv+6Cvo+/5CXk7+hMJAo62768N8b+SWuqwcsnSpY9/6veWLj32I9jgs+ujZ39r6YfnetDC3wMtgfrDMsz0Yl1RlJbofdnf+nxzdHT0PW+W8u0SBF7WK6OXLn1/rdaoraIoRdL70l9x+K23f/Ptbim81NVW/t5W2oqiFE7vvX86Nff62v6jaqso7aZ3yx9NzRbVVlFKRMykNDLa0fZ2RVHaxNY7Jc3bZNy5VUbffrtqqygdx6OMtq9UFKVDQG3x/0qt2ipKx/CoGv1vqT2jLf3BkKIopUQ0fZRHF8mqraJ0AKKpaqsonYNoqtoqSucgmqq2itI5iKaqraJ0DqKpaqsonYNoqtoqSucgmqq2itI5iKZNtf2ikiPyJmfKrbkgkyvlQDRtri0moFLyIR9tpcwU1bZciKaqbb5U6/Wh+UGqQ2FtZWFLi8yWKTK1Eg951/JDNCVtNy9VbXMinrZSpqP0q22rZ3WRV+rpHiv/Jyqakrbf/ZJqmxMxtYULntTkcs7cKpNnACoh1US0elwrpHusYrXt2T2o2uaEamtRbTNANEVtN48n/Ww7p4bMkZbSnJjaSlcq8tFWJs8AVEKqiWj1uFZI91jFajvxoqTa1nbDbneNG8okqLYW1TYDRFPUdvfOxNrS/lpac5F7qK000h5tZ82QSmpU2wQUq+28eL8AmuPLWRsP0uZ19+j6vaZ23+ukVhKstvDRh8pobYcSctYPny41H/+cWfSJd5wr1bTcKpO3ylm3vVFqQ6iEVBMx1XHwEFFvR1RsSuI+x+jJi9UWzqgY2s6pnSc10PZzIYy3C1Z53n4oj673vJlgEGk0MeL1fwwCFBk+Cd1jR9ZUKgMw0I6Tbho/ABUzEXZxSWGmuZyl1bZa3We8babtWT+Et8Ce5M1xTAjgnzOL7198f1/fsks/eL5397m27Os52/vqjr6+U/BWb6PohkG/DgWs0p53vxnGiLabRzyv/7Fcj4Cfkv/EomqOEhGzNXtRgKPSd/5VKi4RhzafDd9k910OjTSPRcN+lULNiHiMEmo7p7bO1VZG0W23+fOHRNsFrwdrrtwF0sHyhzvWCPbso7e3MgDGTtxwzS4SODhuoH8XllDYiejgGs4BB3EJ8KxRNO9pE6JttXq4tlq8baotnAcn/u8/6QSYjGbnpD1nei7asei9g33Ltm8Y7Fu8YdCUeOkM8Z7PDPaduvtcijp1KHBQz8tlmMzF2p71QziF3/diqkfBT8l/YlE1X7+o2Zq9KMDX9n3XPC/iR0fEoc1no55f8OxaGRpptW3+dAwRQ8qnLVj7/aC2y1cvN9IOWW0vhlUUoCUVDWWNYM8VjDywq3L0n1ayqcFxPAyttRMBR+/7e1pux54DYwbgh+BeXolhDafl+fJVRx5vemhSqOEU5YC1RWvXXftq9jZC2yoOve62L+B23W3wir5d+Y7nwR4bXv9v0xXLTOyGJvAIjuVQ5SC8XBhQqdhzBt28aAesobBmws4tMQ6YqFO3IdzLMOBWnLnynVuoCDw1eWDa49PhFwBN74oH4Uk+Akd53i30jPno6q38Ov3Z6PXSDE+wR5gXfQWEr6Bx9rjKiVtOwKHmPfFLeM/g8fHhnMc3MTshTUHRykEIOs+UqtRtHouHSQc+XzzCn+zIb+KMcGTwe5DP7+ACiKYxtUVrQ9rW6qurNwKrV6+u10XbiRG8+iV5sHiAVk9HW9hPjMCKe3IAVtqLRWo7bmw/WngVKicTIUfv+zXspGLip2vMmlwZ3k9TrIeBOK3twZ8L5YG0BWtvXHf8roXLydvm2n4Ft+vWw7lROYGnySMVakj9wYu/TU0ZZ0IPkLOAPWfwChk2shAEtOV2OAnh8ncxFeyoX4dt2VvwE7EZxpC25jGCT42CsoenQ/uJn4IPqDG0YdzEVjwEAni0VcLMJq/Xn8F50QfRpuBxcL31FXjB9j2xJcwBR9PDOY8vMTshT0aPg3tnpFSx29cWh0nHQfyBcos7GfbTkOD3oGzakrUhbReuXihLbd1qC+p5oNECUg9tIsEClcrYycrwXhAOJHXG4WdbWHqhpAVYJkKgF4aC0zyFmQy3iRt43kCPNEoCa7vuwmvvOHNo9+5Dk2p7H51nWFAdz2/TwBLOWtsXChHmnCHv4MMsiQkqBkr4aAsXx+gotpy6CbHtFtL2wav4tLQPb58at+BUxof0ZtJTgRBG/X6uWSXc2WALjZOZbdvRFgSBFyzD5EAuTYuQhok5E3Kn3dshfsRqiy+IFmAcAzOYb4Up7WO434OSacvWBrWtfvYZnzXSOtqCX7IagkaNqy2shAsu/vCXd4Fww+aTrxmH96lgTbV3hWEiLPhg/gKZ8c4V1uQmFlZpnkCPmaL9yGprmUxbeEXwM59PC/z5LecGnRj0auU8hB12cQgP4ws8c86gi309Z29btn0G/SrIlPJrIexeLKutU8cNBvBnW5/gaus+NXlg2lMH7U/Y58kHUY16fSWc2WgzM7gv2myA1RavkGGjsJGFS/ziWZ3Hlxh3m8m4wA5/pFSx2z5HHi0dw1fAgutOZicNfg9Kpu3a84iN0kRtq9VnvPEZ81evrtX27TuvLr/IJeAqeGKkyWdbXDYnbrj8DXCJ+29gcGgcXPZCSbepELycBrBrbD9dQL8ORprJcJPeUI8Ey4HcknKZbLU1Be9CP+KdPtgkZKK+trPgGhkuf2csu/TRnkfLKZe0DG8Y7Dnb814iS6tTxw2b22QYTSXaTozwDwb78HwOywPD3lYOHnmyaduY1KwS7mx2kG3Ii7VtRyV0BD9IO8Ok5C8YE3x8ijkT4iRUnIArcH+kVLE7qK3pOPjICfnRZB/WPgaOBqhWus+2IVBbWG1lqa1DgOPwkZWcIfXwFzZWI6qM0a9whmswauDP8KZTcJwMw7vIZiI+GBZQHoNywiTUA5JLb7jHCF8GWtS2MgxnzDB+kILPVVDSJn24w41DgHgQPmdITKdsCb4ldRAXkwdvCjw1gB8Y9twBezzRT8gaBmPgs608WcCumjLbxAh8XqRFzsxgXrQcEzoO56ah8p7YkhWih3Men2LBCQEq8FGdkVLF7kZtseO6+66Bn1LOZLijEtoMvRXl13b+/Dc95k1GWqvtxAj8PERl8GYvXuPSpeyHzO9tQS2Afv96dD0ttHYc6TbW/zEsB7yTdiLpwmUaKhjGG8pjHiy+MKN/C1p6oIZxmrsUJNL2+U4xDK8Of9Y/jUpaao48mfvGvEewIiHY853ZHLWt4B1X8/DmqdEDy546YM/fhufjU6STAXSEJ8qHWW1lNrzlD2PlBeAR9kXzMaHjhulljsFr5/fEL5+PI+nhnMeno4MTAvhoGKLhMtJUAV9bbNoOttOfjHb4jHE6/3vQAdoO/eXvPqa+77zzDh++5BKrrRImgbZRyMkWizy1zQJf22SEjzPvSZL3Ji6tPkem/NoODfFqawJSKiFSavt3KbTNhBJqa96TJO9NXLpdW//6mFBtm6DaWlTbDBBNW9P2HvnLH4v+CVATUmqbhOmibZ50t7ZKXGJqi39GlZZ8tJXJMwCVkGoiWj2uFdI9lmrbLcTQVpL+pUfmyxSZWmkv8t1QbQsijrZSKkoTmmg7X7XNCdVWSU8Tbb+r2uaEaqukp7m2LyJU24xRbZX0ONqyp6jt/G8cUm1zQrVV0hOpbWarraZPbkC1VdITqe3OrLTV9MkNqLZKenLWlvaaPtlBtVXSk7G2F4xLhUmcPpn+7K6rUW2V9ERq2/pn2+XLN0mNmCJ9cqOk00DbTWufHWTtJtVWSUbW2o7fgR9nDZgZjqkCDemTp6W2a+v4XlQxjS4n3hpfq9oqyWiibbVVbSvjdzk3jlHb5umT3fTGUkwDbZfzm2H/0HFTZblqqyQjc20r45+7Xhqs7VTpkzm9sclyPD20hZ9g0qxs2j2u2ioJyV7byvhxe19qivTJKClukt7YZDnualBbfDOkOa7aKsnJfbWdKn2ySW8shWqr2ipTkrm243d9XerAFOmTSVsWNVh0Mcm0/eXuQ16Zkobm2n6JSKpt+E7ypOmTSVJOb+xmOe5qVFslPY627GlKbcO/t508fbKf3tjNctzVqLZKejLWNvyvpDR9cpjE2kqtO1BtsyFjbUNo+uQGVFslPXlr618fE6qtaqukJ19tNX1yA6qtkp58tVUaUG2V9Ki2BaPaKulRbQumRW0XhuBox6HaZoNqWzCtagvfEwfVdnqj2hZMy9peb7hgzm7Vdpqj2hZM69qOj8u/ZalvmlTbVP/X6ak55W0YlGpyVNtsUG0LJo22fEi9XjHazprBZYB8te05e5vUEHoCy7Z73lfhMRed73n8hEwERnve3edSjFBtsyFfbTVPcgMptKUD6nU4VrRd9Il3OEoY8tU2MDs/AQyd2jC46HHQczM9IYwshkV52fb7YdA/01hCtc2GJtr2ZKOt5kluoHVtYTT+i7OhoflG28X3LwYtll36wfNxSfPLHbMgDCLhmFOe521rGIPLIC6Hfu+GQWckLqizPO9+M4yAwIZBXEdnWHXNE9jRt+i9g/DFUY7ghs8jgGqbDZHazstMW9prnmSHtNqCtfPrrG3PRTtQlWXbQVBY22x56Y5TcK3KyvR8ZrDv1N3nhsfg1S0c6/Y6dShwUM/LZRhOZI4yRiLmCUAT9O05G0YwMmjZW8IXA6ptNkRq+42doO1OIqG2afMkdz8ZaoveXSQSoSR+Cb70/IVVJthnSzzW6XXqNoR7fxjs3nIudzDmCcAKTMYuNnercBBovuipqm0+ONqyp+m0jZknecTr38W1aUcabVFasLYq2uIFKmwkEujjlrO2LfoPOg5UwrtDDWPANLz8dXqdOmy8UJphWMUAdtBYxnkCuEBjhAs8Di/JdbXNiay1jZcnufv/Gr4pqbRFa+GNZG3JKbCDRDLroJSnZizmG774CRcCUWNCvU7dhEhIgar+kYj7BCQs95mDLQfVNhsitV2K/zd5bibVNl6eZEpIc/mqI2sqw5zaAhqY7WIa0LK2F6C1+L8eMdrSPScwY9l2/CQLnzpNiRa9Q+4x46DFsIaGxtDm96JlTh03GMCfbQ2zoB9nkH7APgFowmp7Su5OAVL0ncKbW3onOXsitYUzo2VtY+VJRm3XY6rkMTQXE9McWTMwPa6bW9Z2Dlwis7XVIdKW7zktnrHs0kfTZ0u/BGeMb/iL05fg4hkcQyvlhkHbC0c4ddywuU2G8VR0J5n6aLzzBGAQXEnjEXQP2teWfpVrjkdU22zIXts4eZJptYXrZN49wJlXp8eFc8va7sa7BvgbIFh0+bOtYByxriCzgpenkWPagGqbDbmvtpF5kq22D8AKKw3V1hCtbYCptA3fw1Vtu4vMtY2VJ9lqK+6qtvImE5HahuAoEaHkLPtvJATVtrvIWtt4eZKNtpVh+Wyr2jpEadslqLbZkLW28fIkj3j9H2NLzZ1k1dZHtVWmIGNtNU/yVKi2Snoy1jaE5kluQLVV0pO3tv71MaHaqrZKevLVVvMkN5BY225DXpmShny1VRpQbZX0RGq7ceNG1TYnVFslPRHabvTgdFJtcyKZtooSRYS2V6u2OaLaKulRbQtGtVXSo9oWjGqrpEe1LRjVVklPhLans9NW8yQ3kFJbJ92EMn3JV1vNk9xAOm2jE5or042ctaW95kl2SKdtdEJzzAeDf2GbJFm50slEavvnhw+3mN48YZ7kyD/WO7reJIPza02A4zvt7/1a0paGQtkTndAcL50xZ3HcZOU0ndIB8Le/EUdb9pS0/UNYbV/JSG9MbWPmSQaG98MuhXPm+Omgrf3uNU9ojkbjCBN16jaEexmmdAbNvHW0ZVJqGy9PcqWy4JrncRopaSfFHj8NtPW/d80SmmPCYrj8jZ+sXOkQmnibtbbx8iRXKmMnx05a7ajATMkDnrfXb0V3RxwvOTKGITJwZA2MKnHu1jTakndNEpoDmLcYHcWWUzchtl3pKIrSNlae5MrEDa9bcDElozFeYqZkb39loB/zwUne5MjuiOMl2/IAXDcPn6RskOUljbY2n3j6ZOVKZ5BIW7wlJW3pja9tnDzJFXAOzHO15UKqUTXT3Xg8BTH/4wO7Jr5MWSBLTBptmyU0lyzkToJyyjU+abJypSNo12obmScZrnFpE+f8whExXDPdjcebbMuV4b0L3gC19WX+/5Kk+mwrkJhOqXQtRWkbL0/yevyQFrgK9r30W4Ga6W48noLo7sD+MRJWRpUS1VZJQEHaxsuTPAAfRisTI3vBr4mRk5Wxma6X/CW1xu7Q8RiRbMuVo8/D28vUg0UpUW2VBBSkbbw8yXjPF65y96NzA573HCtqg7aN3aHjKcJ3kqFEd2Elpu5ykoW2yrShGG3bnCd5uMQfagXVVklAEm3hdGpR2xAF50lecFWpf/dDqLZKAtqkrX99TOSq7fDM8t6Jsqi2SgLaoq3mSW5AtVUS0BZtlQZUWyUBqm05UG2VBKi25UC1VRKg2paDvLU9I2UUTfqc8JnwkMmmy4pWHqP5MU1eQSgcHWUiguFQ5HFR+ANjHxJAtS0HOWh7BpBq8xMMyyZnTvODKdLkqNYJT5juAWLMhiEnHGo2MFmf0HRI82NjzBpBEm3p/wEkbelVbTMie23xfPDPifDZYdrBUQGaH0yRJke1TnjCdA8QYzYMOeFQs4HJ+oSmQ5ofG2PWCJJoCy3VNify0ZZKWnNpk9UXl2GpUwn/mQYWCIclRIOkVzY8xIw2HcEyWPBDuHXTJcOowk1pN8yEBCJ2z91Y2jBHpcv0QM1uNDsX1BNo0mY7pMp9FMTSb1BNhhAyMtDLe9NJFWm2Qlu01TzJDeSgLZ8QdL7wFxd8otBOSjOEC4qaJockaqrBIILNqC3Q69axSaHgMHsktaXuDEFsS/bYxio1OWbGyJF2iERpwxhWpKSYbfpBwBwe6IMv7JKNsFF3NDW5Zo6nOnWYnuS0RVvNk9xAHrek7AnCZ4dfk7ApnQ4JU+GHJBqMmCBimqGS6n4U8Xs4JI1A1WnjzsYZiQT2oZhpy0ZB2mHB/8mX3ZwqbPwlUE0iXEjDqSB+AwuzceFEKEg7v5mY9mhLe82T7JCHtvJTny/Q3Bp20Z5L2aQfocIPcdNWuaAg4o5xSg67vQ1TSIhrJm56bN0ZIjNAwQ3cUU1K2vMYUzNdtMMiprbyGFiRHQX9mt9EnEfiwm62A2tSDfUkpxhtE+ZJTor5Q70OJhdt8ZyQ0yJQs3suZTMhgKp+CAvZ/AJriB9pLLlwoqZuQrInJG5jpi5NBKvctHuqmNJU/AKhwtbjahuImyBtflyiEjcN0zIRv0Co8EMSTUgx2sbOkzwxkjC/YqfmRQ6Tzy0pPC34vHBqVHCdS9nM6Qhg1WzY9DcJ8heBpYmGNqc3VMeCY7QnKG47/Hp4iK3RPjgKK05BMafbqWPJBW1OFTaOmDgGJEibifMXtSjOhd8yEVPgjqvBHookoyBtY+ZJPrr+ZKWy4CZpxaBj8yKHyeOWlJxR9lpMIlRwlRrmBDL9iA1TiKLSyx34ZQabMdJvOjhse/0QRf0W7ZFQs2Emv8ptiXJISombMVylOo3Bur+ZsHQ5TelkzPOwG+/8JlZlD20TNpvptlU7wjQpkoyCtI2ZJ5nTU2CF8lJQGmRYfE2Ji/FMzGVx+SrKWoH53jo0L3KYfC6SC8Scey2cgyUn/IrK8AqL0jZWnmSby1gyHGMaZKybEmMLLuYm0bl5kcOotqVlWmsbJ0+ySUNBSyd4x6UspVKCqdQkOjcvchjVtrQEXxFe2Lafdq22kXmSzQpJpRHReIolJlTlfI1M5+ZFDtPx2ipFUpS2sfIkm4yo5CWum1GldFOlc/Mih1FtlQQUpG28PMmVAVwgF9xkMhwfXY8fU/2SNkfHDs6LHEa1VRJQkLbx8iSDsqs4tbG5k/y0QEnL65E1VtsOzoscRrVVElCMti3mSTZ+Wk9j0gF5kcOotkoCitE2RNw8yS1q2wl5kcOotkoC2qStf31MZKptR+RFDqPaKgloi7aaJ7kB1VZJQFu0VRpQbZUEqLblQLVVEqDalgPVVkmAalsOVFslAaptOVBtlQSotuVAtVUSoNqWA9VWSUBbtNU8yQ2otkoC2qKt5kluQLVVEtAebWmveZIdVFslAcVomyxP8tH1EX/BExl0OSp/vdeZqLZKAorRNmae5BFMVsF/WJvsjwfwr+dVW8WCyUy7D3lxQEHaxsyT3Nrf/HRDsmTVNlPkPO8u5LUhBWkbM08y60ppkb39lQFYevdyCwuykgoMQKe5au6GZMlptP2iQsjbgZw58+quoy6vDSlK21h5kq22JODET9dUBvp3YVZkLHxtMYBWi5BdkSw5lbZXK0BIW6l1D23RNk6e5KC20sYqF36NxuGGdEWyZNU2AdV6fWh+kOqQalvAahuZJzmk7RhcJHNWZI74NRqHG9IVyZJV2wSotkVpGytPclBbTKcqVS78Go3DDQ/pimTJWWtbWYhUpNVlqLYFaRszTzJLJvahtmPuajsxctIJGCG7I1ly1tourOAbu1BaXYZqW5C2cfMkk4q4G/P24//r9jnsoig54AaMtt2RLDl7bZFDtOYi4xLvClTbYrRtMU9yKjorWXI+2vp01bqr2hajbYi4eZLT0GHJklXbBKi2bdLWvz4mste205IlZ6Pt+FqpsLbj1x86tJbBC2XpIjb/yQuk5rP5sqdIreRYbemf63BNtQXy1VbzJDeQibbjtfOkxtrOqeC/Q6ty5DRru/my48ff+oIGbaM0Li1G22p1n/FWtUXy1VZpIAttx2vrAtqO7/atPX16zhmqoJ8LfmNnN2hbrR6urRZvVVtEtS2YDLQFa78f0PYCXGyvfs3Xt96zdlP99LPr1IF+wobFvcePH4fLYije+nvXHj9+E6n70ePHX0wDSwxri9auu/bV7K1qi6i2BZNeW7TW0XYcpkBrK1tf8ZSv/fxV77r+Hu7wta1/befV9771uZs/81w/jAtxvfS/LCJtwdob1x2/ayG+caoto9oWTGptydqAttdX4Pr49NYDX7r95T//+aueJP9iStzEgltcw71tlB3Wdt2F195x5tDu3YdUW0Ojtt7p/wceMBMKbijquQAAAABJRU5ErkJggg=="}}]);