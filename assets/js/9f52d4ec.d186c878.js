"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[37908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):A(A({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,p=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(p,A(A({ref:t},l),{},{components:n})):o.createElement(p,A({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,A=new Array(a);A[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,A[1]=i;for(var c=2;c<a;c++)A[c]=n[c];return o.createElement.apply(null,A)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>A,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Create And Run VSTA Macro (C# and VB.NET) in SOLIDWORKS",caption:"Create And Run VSTA Macro",description:"This article explains how to create a VSTA macro (C# or VB.NET) from the existing code and run it",image:"new-macro-vsta-filter.png",labels:["vsta","macro","run"]},A=void 0,i={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/create-vsta/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/create-vsta/index",title:"Create And Run VSTA Macro (C# and VB.NET) in SOLIDWORKS",description:"This article explains how to create a VSTA macro (C# or VB.NET) from the existing code and run it",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/create-vsta/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/create-vsta",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/create-vsta/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/create-vsta/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/create-vsta/index.md",tags:[],version:"current",frontMatter:{title:"Create And Run VSTA Macro (C# and VB.NET) in SOLIDWORKS",caption:"Create And Run VSTA Macro",description:"This article explains how to create a VSTA macro (C# or VB.NET) from the existing code and run it",image:"new-macro-vsta-filter.png",labels:["vsta","macro","run"]},sidebar:"tutorialSidebar",previous:{title:"Fix errors when creating sketch segments using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/create-sketch-segments-error/"},next:{title:"Edit VBA and VSTA macros in SOLIDWORKS",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/macros/edit/"}},s={},c=[{value:"Keeping VSTA macro running",id:"keeping-vsta-macro-running",level:3}],l={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article explains how to create a VSTA macro (C# or VB.NET) from the existing code and run it"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create new macro by calling the Tools->Macro->New command from SOLIDWORKS menu"),(0,r.kt)("li",{parentName:"ul"},"Set the filter for the VSTA macro (either .vbproj or .csproj depending on the source code)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Filtering VSTA macros",src:n(54305).Z,width:"947",height:"199"}),"{ width=450 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy or remember the namespace of the macro as marked on the picture below in the ",(0,r.kt)("em",{parentName:"li"},"SolidWorksMacro.cs")," file:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Namespace of VSTA macro",src:n(89369).Z,width:"771",height:"634"}),"{ width=450 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remove all of the code from the ",(0,r.kt)("em",{parentName:"p"},"SolidWorksMacro.cs")," file and paste the new source code in there")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modify the namespace to the original one"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If namespace is not modified the following issue will appear: ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/"},"Invalid Namespace In VSTA (C# or VB.NET) Macro"))),(0,r.kt)("p",null,"Unlike VBA macros, VSTA macro must be compiled to the dll. Call ",(0,r.kt)("em",{parentName:"p"},"Build->Compile")," command in the code editor menu. You can also run the macro directly by clicking the green arrow button. Once compiled the dll will be generated in the ",(0,r.kt)("em",{parentName:"p"},"bin\\Release")," folder of the macro and the full path will be printed to the ",(0,r.kt)("em",{parentName:"p"},"Output")," window as shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Compiling VSTA macro",src:n(53356).Z,width:"800",height:"695"}),"{ width=450 }"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To run VSTA macro open ",(0,r.kt)("em",{parentName:"li"},"Tools->Macro->Run")," command from the SOLIDWORKS menu and select the filter for VSTA macros (dll).")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting the filter for VSTA macro when running",src:n(63484).Z,width:"1148",height:"138"}),"{ width=550 }"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To run the macro only binaries are required. So the content of the ",(0,r.kt)("em",{parentName:"p"},"bin\\Release")," folder can be copied to a new location or shared with another user. It is required to copy the full content of the ",(0,r.kt)("em",{parentName:"p"},"bin\\Release")," folder (not just macro dll) to avoid the following error: ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/troubleshooting/macros/run-vsta-macro-error/"},"Failed to Run VSTA (C# or VB.NET) Macro"))),(0,r.kt)("h3",{id:"keeping-vsta-macro-running"},"Keeping VSTA macro running"),(0,r.kt)("p",null,"Option can be set to run the VSTA macro when the execution completed. This is useful if macro needs to monitor SOLIDWORKS events and doesn't need to be unloaded immediately after execution completes. To enable this behaviour uncheck the ",(0,r.kt)("em",{parentName:"p"},"Stop VSTA debugger on macro exit")," option in the ",(0,r.kt)("em",{parentName:"p"},"Tools->Options->System Options")," dialog in SOLIDWORKS menu "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Option to keep VSTA macro running",src:n(95147).Z,width:"1178",height:"818"}),"{ width=450 }"))}u.isMDXComponent=!0},53356:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/compile-vsta-macro-a172496c40ba695ef31feb07fbb7f1b5.png"},54305:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA7MAAADHCAMAAAD8m/QXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAALp6MQBSp4jHpu/w8ABmkP39t7i7umWu1mZmAFIAAGZmZjOZ/4THyLnB5wAAXNSwY7zG28G8/4/n9jOz/2Cq8FAtACNapgAAN32LXKmzywA2Y2Z/rv7+/nXC5sfGitfe8qCr/6upqtnZ2ZFdOMjmsFOShXoxAHfI+pPN7VEANjmP2yYAACByyoadqyAANMuGXyYAYG213IirgyE2Z1Sx7cHe/87Pz06R6/mxjJDb/2Zmf9vf5bb/29bb2GDJ6n+Z//r61++qX6pfADY4OGBPAHlYfv/i/4zKyZHB2qmAN2aQkFeSuK7E8DXO9MXG0v/bkH6t2mIxNn7B5S99xLnR6rrZ6a1/ZWIAZZfExMTFxajr639mfyYwh3BwcGW0tABcsO/mrDc1ADt/sFqZ/+HO/8jO2LG8t87p95KSktuQOv+2ZpA6ANuQZsnn01rO/5jR77K74wA6kJ6envDErj/W+3K53280ALZmAMjMymW2/8jIyIbO8Elxj4So65TPzH9mZiyA09Xf5e/NhjMANWaXxAsMDdLZ1KDu/8ikYn7e/tPT0zlZcdvbnLWtYgAxeszX3ptXADmR7M/V4t3ev9uuf7bvvYzK65dmf4aGhjk5ZePj4mQAAIXG6I1cADQAXpA6OrDR3C1fhtzd3ZC2/1+py9Hb5FCk9zqQtkyr6QBfqnJuM2QAOLva2q2+zABmtraQkG7F9jBKkqGhoaKswGmgvzxgtrj//zgAAJOSXzpoitXa6wAvgn3N7JOyh+nq6Xq82DoAOaiGh3i94nQ0YwAAY/DElyxiin9ml4KFjTB7urSANbbY4dS/gWZml5eqtKutsqC8/zmSwarv8MSjisOXZVGlsDVVa9Teo67b8GrP7U9o1s2GNbzFwX50NQA1h4qGiYY1ADPD7Nq7e8HJ6mpTAK3n95RcAMPk9ToAZc7a4To6kNidWZWruJdmZlym6prc35TPqbaQOjWGzc3T35KnY1ec3brc5cnW3Z27z4dghztTAOLj6t3u93aoxAAAAIUj18cAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAaVElEQVR4Xu2dD3yVV3nH7/AubBTFtgFpNdJCXZsCaofaFbXtTYIoYxCrjE5n24jFkERo2VwvFFcL2ELwT4toVhPANoqVVhhTm6DY27ohq1indtXqKDT9IzCrttbR4Zp+9nue55z33tzcJPeSe9Mc8vt+4H3Pe85zzkv74ZvnnPd9ed/YggUV5CSgNd6LVMVZFRWunMWFP/q7Ec3XR7v/EaGRWrBgAZ09SWhN9UacdUVykmDOOoMJIcMeOktIWNBZQsKCzhISFnSWkLCgs4SEBZ0lJCzoLCFhQWcJCQs6S0hY0FlCwoLOEhIWATh78egfEUJGX2xCBODsC3H371YIGcnE32ZChOCs+yMTMrKhs4SEBZ0lJCzoLCFhQWcJCQs6S0hYhOdscuJM3Ze17dR9P5S1LS/gBlFyb4crETKMKb2z1TEwPl6996F49XOu7kSInI1N1X1DzQDOJpom7i7EWUKCYAicTYtaHGdrNB8mmgZyFjTSWXLSEaCzdzatxK5x+e/gbG1nLKZeNiCZr0w0XdkGoaVsPqed1faKxlgMM+vkVByhJSs8afmbkOHNkDkrOy0egDertCrR9eUuLa+BeYfq0b6oC9NoHGEe7QPXrLXgtLNTG8RE7CDaR2bCPOwb4F7tlxJNX8BaV8pameGstdfeP7PiIjiL2bUEZIXTWTJMuQlpRbhJj4bc2QOQs0qdhLNwshrHb1yF8na04/gA7NUDF5jD2bK7Z1bUHu0QZwWIWdYmqRfqQTtpRQI+KhNo76xrt8qKpHSEv1nhdJYMU+ImrSk7RNeg3PUn/K67GwomusZLS6ILdWu2qr/xKihaDVXr2tCGg8xAJe2s/IKw6qxMbJfHG5ErQUJmzVY2Fb2zUTvmxy6hIiAr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"},63484:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABHwAAACKCAMAAADv0q0KAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAGzR7wAthGtKiO/v8O0cJP39tBuLmWCrznEzAAAAOJCBOCjO45ubm63Czozl9i40OHEzOCwAALnR6Yi92SwzisSjiiAANDWN6PCrYNv+/m6j9sXlsKtgAABmkNPT0yMjI6qqqmaQkDO8/ztTX86HNmefvsG8/y40AHK5304AOAsMDcPk9qCr/06R62tra4KCgpjRqmpTAB9vyJPOzHONXSEAX4qtgzaHzmCr8Lb/tv7+/sHu/9v/21q8/4adq0JCQqutszZXcWnOzAAAX1EAAHJuM86HYNTc5DOr/+HO/5OTk87p+Gd0gra2Zv3ZjgBcsKq8x5PN7FMAY6Ojo2Y6AIxcAJDb/wA6ZjOZ/2JiYpjR727F9j/O8jqQ24OGjIbG6H/C5cbH0jpmtoc2ALb//1OShVCl9xoaGqDu/2213MXl04yMjHp6epHNqHi94obGpofO8K+vrwBPpTUANSAAAC1fhtvv+VpaWsrKyrZmAAA6kEqIwEtLS6nl9isrK7KDOP+2Zn/e/4hKa0wsALaQkGa2/zo6Ov+2kABmtjUAXiwzYnNzc2UAAGa2tmAANsymYnPG6AAuX5WTX1WStcnn9yBRqEys6Tpoiodgh87w8JC2/8TExCyA05jRzhMTE2FQACEuhduQOlMuNZu6y5A6OsSjYkt1k5aqtMTFijGErYO++2HH6VYwNYzK61JSUrb/2/z82cCISqvw8KmAOOHz+aiAYpA6AH1zNXyMnZSxhWZmAAA2h3Onw7DJ3jtTAH/OzAAAZVKmsABgq4LR7y0AOLm6u4jHyJNdAIhKiBZzf87p1TMzMzkAAJKDjLaQOpquw9u2ZlSx7X3N7IqPXWnO7VqZ/7Pq+Do6kH+Z/5KnY6C8/yxiisH//zoAOTqQtszHiywAYmYAZs/psVrO/yBzyzoAZaO9zVQuAGYAOmWu1jqS7aTb95Ho94J2NYxojN7r9Nra2kdujABSqbrL1ZC2kMD399uQZlyYun/O/zo2AAAzinTI+Do6Zi6D1QAAAOrMl5UAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAATxElEQVR4Xu2dDZwU513HR1zPgqFJm2rNWUzjNUXNYS4xBuuqjREiF0iXnid4AQmeIJ5AbJOSyy1NZa/xyNVcROmZvqXg2aSlrVdXwSPYRqlNcjWerQm20XKUJAclYlooVdsm5tP/27O7s2/czr3M7O7v+2FnnnleZpl8mG/+z39nn/XitciyWCHxM9YIAAiPi5Xf8uKQDwBgFsmRj92aAAAwC0A+AIBQgHwAAKEA+QAAQgHyAQCEAuQDAAgFyAcAEAqQDwAgFCAfAEAoQD4AgFCAfAAAoQD5AABCAfIBAITCjMrn7GO/AgA4L4+dtVtG6Ln+jqM1xR3X99il+ZhR+ZyJ2XfnAQBliPmWfrn+fW/+WG3xvuvt0nzMrHzsPy0AoCw++dzx5m+dqSm+9bE77NJ8QD4AhI9PPkffeuZATXHmrUft0nxAPgCEj18+r+yuMV5ZXj6NkA8AYVHf8nkn5ANAWNS3fD4P+QAQFvUtn3dDPgCEBSIfxwKPeFNswZK/jS34easLgspnaJ3slKH+eDxJFfwCACh++XyNb9hRuglXdo+ulPKLX+atlmUrO+vCtysXurufmCsdhdF5L8n+uaU6YHLwaXe8bAfMDn4fqqAXF4PxtcnnfHKMMw3ySfXJToF8ACgkTz4rVjwxd+WKFSv+9cu7Dr/AB/Ne4u0mqlohNSueW7rJdaHNKJeI4xc9Sh2VUe9l2e+4yBonwy7uu0vex9hBNaN0Jn7t0DNWznnkk/tp13TKJ3X4LfcNZPUD+QBQSIF8jptFZH/80Z8kH1gVaYe2pCDXhXDyGX3Zlah8kVjqibkVyOeJV71EZ/7Pz8pbKLnyee7X+YwBOI98cp/zMePwToqXe968t0tVesMrNkg5MeZ5n/4A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"},95147:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/system-options-stop-vsta-debugger-22a7fe71eeff3a68706bcd17687b596f.png"},89369:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vsta-macro-namespace-a22150b03c6f7196030b51c158c56887.png"}}]);