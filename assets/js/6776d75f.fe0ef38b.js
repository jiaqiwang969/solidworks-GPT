"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[79274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=r.createContext({}),d=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(f.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},P=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,f=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(n),P=a,v=l["".concat(f,".").concat(P)]||l[P]||c[P]||s;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=P;var i={};for(var f in t)hasOwnProperty.call(t,f)&&(i[f]=t[f]);i.originalType=e,i[l]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}P.displayName="MDXCreateElement"},45036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const s={title:"Installation and updates of SwEx.AddIn Framework for SOLIDWORKS add-ins",caption:"Installation And Updates",description:"Instructions on installing and updating the SwEx.AddIn framework for developing SOLIDWORKS add-ins in C# and VB.NET",image:"swex-nuget-package.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},o=void 0,i={unversionedId:"codestack/labs/solidworks/swex/installation/index",id:"codestack/labs/solidworks/swex/installation/index",title:"Installation and updates of SwEx.AddIn Framework for SOLIDWORKS add-ins",description:"Instructions on installing and updating the SwEx.AddIn framework for developing SOLIDWORKS add-ins in C# and VB.NET",source:"@site/docs/codestack/labs/solidworks/swex/installation/index.md",sourceDirName:"codestack/labs/solidworks/swex/installation",slug:"/codestack/labs/solidworks/swex/installation/",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/installation/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/installation/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Installation and updates of SwEx.AddIn Framework for SOLIDWORKS add-ins",caption:"Installation And Updates",description:"Instructions on installing and updating the SwEx.AddIn framework for developing SOLIDWORKS add-ins in C# and VB.NET",image:"swex-nuget-package.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Examples and source code for SwEx.Addin framework for SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/add-in/examples"},next:{title:"Localizing SOLIDWORKS add-ins using SwEx framework",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/localization/"}},f={},d=[{value:"Installing NuGet package",id:"installing-nuget-package",level:2},{value:"Preparing the project",id:"preparing-the-project",level:2},{value:"Updates",id:"updates",level:2},{value:"Supporting multiple versions of the SwEx framework",id:"supporting-multiple-versions-of-the-swex-framework",level:2}],p={toc:d},l="wrapper";function c(e){let{components:t,...s}=e;return(0,a.kt)(l,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installing-nuget-package"},"Installing NuGet package"),(0,a.kt)("p",null,"Select ",(0,a.kt)("em",{parentName:"p"},"Manage NuGet Packages...")," command from the context menu of the project in Visual Studio"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Manage NuGet Packages... command in the project context menu",src:n(27596).Z,width:"511",height:"327"}),"{ width=250 }"),(0,a.kt)("p",null,"Search for ",(0,a.kt)("em",{parentName:"p"},"CodeStack.SwEx")," in the search box. Once found click ",(0,a.kt)("em",{parentName:"p"},"Install")," button for the required framework."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CodeStack.SwEx.AddIn NuGet package",src:n(81945).Z,width:"1135",height:"613"})),(0,a.kt)("p",null,"This will install all required libraries to the project."),(0,a.kt)("h2",{id:"preparing-the-project"},"Preparing the project"),(0,a.kt)("p",null,"Set the ",(0,a.kt)("em",{parentName:"p"},"Embed Interop Types")," to ",(0,a.kt)("em",{parentName:"p"},"False")," for the SOLIDWORKS Interop libraries as shown below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Disabling the option to embed interop types for SOLIDWORKS interops",src:n(97311).Z,width:"588",height:"454"}),"{ width=300 }"),(0,a.kt)("p",null,"Check the ",(0,a.kt)("em",{parentName:"p"},"Register for COM Interop")," option in project properties:"),(0,a.kt)("p",null,"For C# project this option can be found in ",(0,a.kt)("em",{parentName:"p"},"Build")," tab:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Register for COM Interop option in C# project",src:n(33856).Z,width:"631",height:"468"}),"{ width=300 }"),(0,a.kt)("p",null,"For VB.NET project this option can be found in ",(0,a.kt)("em",{parentName:"p"},"Compile")," tab:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Register for COM Interop option in VB.NET project",src:n(70301).Z,width:"628",height:"473"}),"{ width=300 }"),(0,a.kt)("h2",{id:"updates"},"Updates"),(0,a.kt)("p",null,"SwEx framework is actively developing and new features and bug fixes released very often. "),(0,a.kt)("p",null,"Nuget provides very simple way of upgrading the library versions. Simply navigate to Nuget Package manager and check for updates:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Updating nuget packages",src:n(26743).Z,width:"850",height:"502"})),(0,a.kt)("p",null,"In order to see the release notes, follow the links below for the corresponding library."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.codestack.net/swex/add-in/html/version-history.htm"},"SwEx.AddIn Release Notes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.codestack.net/swex/pmpage/html/version-history.htm"},"SwEx.PMPage Release Notes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.codestack.net/swex/macro-feature/html/version-history.htm"},"SwEx.MacroFeature Release Notes"))),(0,a.kt)("p",null,"In some cases updating the libraries may reset the ",(0,a.kt)("em",{parentName:"p"},"Embed Interop Types")," option to ",(0,a.kt)("em",{parentName:"p"},"True")," for SOLIDWORKS interop assemblies."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SOLIDWORKS interop option is reset to True after the update",src:n(73307).Z,width:"562",height:"410"}),"{ width=350 }"),(0,a.kt)("p",null,"It is recommended to set it back to ",(0,a.kt)("em",{parentName:"p"},"False"),"."),(0,a.kt)("h2",{id:"supporting-multiple-versions-of-the-swex-framework"},"Supporting multiple versions of the SwEx framework"),(0,a.kt)("p",null,"Methods signatures and behaviour of SwEx framework might change in new versions. SwEx libraries are strong named which prevents the compatibility conflict in case several add-ins loaded in the same session of SOLIDWORKS referencing different versions of framework."))}c.isMDXComponent=!0},73307:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/embed-interop-true-d1242c444128107460b5b120230f3082.png"},27596:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf8AAAFHCAMAAACYtrWUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAANuzWwA0jTXE+I00AEqSjv7+/rXajbXE6O0cJGMAAABjtWO1tTRjtZdvdWNjAAAANFSm3env/v/ajYrL7Dw+QgAAYwBYoZeSPkQpPpdIHnKzpgCV6Orv4GkphKywu5ycnAB5y/30vhspYv2zW63V7oWFhUQpYh4ePrVjADV625unt7X/2szMzFy66YuUYvHz/bXZ/xVmqTQ0jY6VzJezvx4eHr3Cy2MAY/j4+GO1/x5vjkRQYhtzwiKm5R4eW2MANLpvHgB610qSdf7Z36yUpP3TdQ6Bzo7s/+qzpLGfw7X//400NOXxwWN6zGkpPhsphJfTv4uz/4GozD+a2GmUpB+l5UoeHh5IdeqzhDQANGohfURQhMvQ7Lq6u3+85dvE1zQAY2PZ/zV6zK7H3CkpKaKioo1jjazv/3l5ef30ndqNNFpaWmSXwUSy51ZWVsuUYkGCuY3Z/x5rrYtzpDQAAKxzPkmGubrTda/a8HIeHmkoYZ+Cs7X/tevawP//2oeKk/7s6ACu8G9vb8rm9KysrAZco6zRpHPE6ovR/8rK2xtQpG1wdy6q5bWNjWlzPjx+t965gp++29uSPsC605vP7ZCQkGO12koeWxmH0ESUpEtLSzSNtYJFklyRvdzc3ABzwcDAwGmy4P+1Y+/v79LS0kRQpEpIPkSU4OTLokQphHJIdazwwotPPnIePkJCQl5gZkoePhspPsvw4Gmz/3vH60qSpjMzMzyu5dHW8S+S1bWu2s/0/zQ0Y3Nzc0SUwgB64MLU48uzhDB4s9uSW5aWlmW96biQO8uUhIqvzrS0tCIiIpBZnpPR7trg8KyUYk5PU0RzwnKzv2ptdL7e8bi6xY6Ojky05zSN2s3c6ABjjVWNvLzA1br0v7e3uKHW76TA2OnQpI6V26aQunGexXJvW8XK5YuzpLWuzNro9fnzzpKz0cDF3ng1iF+s32ONjZJjoRtzpP2zdbTL3rr0poCAf8fk9fby3rXE12mzwm3B6mJiYruvzYHJ7AxgpgAAAMOMxZMAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAgF0lEQVR4Xu2dC3gcV3WAt0EdWru0ZJVYtYuKKoxBuEpVSA3rJqRuTQh1FSWEEhQRxwGqxpYhDg+1OAHhCCVxjGkgZFsqjDCWwaRVh6oGYlDFq+KhJooJieM0womAuhEEmpYaCib5OOfcc+e1M7s7q53Z2Z3zf8nOzL137oznn/sY7b07GUNIM+I/3Yj/dCP+043b/8y0hxmOEBoUt/9p08M0RwgNivhPN+I/3Xj8d+ZcdNr+OzKZzHJeRzqO84qmY8UmXnMz1LS+cG/DGICQzDPfzFslwMQB2YeFTofowBOyNwMI+GcNuP81dUuZ/oea8N/73im1hTj9HzjDEeEFrnDh3uVeQMp5qAkdHCghqgwwN0v4ATwBuC/DZ0snNeC9/+sTX/8GfQKW/+YrvCU1jP/CvUP5HyiWfRic/of+DM7pwIp3LKvQf/tLqlMf1RiP/4No3cgZfAdY/tuty4RVMZWc40b7H8ElbL56k6rc6Ybg2KGmv21yVO56b6xxaR3ks/8BKNpYPXQch13Js5XFry1b8Ru4bh/bPviHmqDgNr+NGgWfXfXRIQCWetvVCFHxd/7DdDZ04E32ofifpfPLrOdsGqMCcPsfQ/HG+L59H1B3gN3+D2TUP1f7wuui/asCgRdKxw414eUmJwTvjekO4LXrWK/9DzUdp/LdASkoXzuLf4XcaQ+UTNgHh+wHQJbaKNyVj44Zw97WNp0nw/oc/jkbdWDnv1PnQ4HNr+Rs+Aaqc9z+x58Yh499fX19t3r8G1DY4EqQcnLu59+KRasUo1F7YzvQ8d8vmsJ0WJSwuDVf/Q7cizpjEO/Owu3fcXBITeYw3n9XWFIAdT/4bJz+4RZEHP45G0rtOBT/syAfnVZl0/wiO7P6xe3/ib5946D/Bh//8M+Gkqtc4AXx82/FUiPrbvVxb7yGLwHdmN5q/zvsahb2dGfh9u86uDo6xvvvCkc/gLcYVNjW2ShxBDX/gLP+hw+9t+tQOh99IiqbxugAuP3fva9v376+D4z7+qdL6rwuuCjbP20OLIdS07Ee617Lv2ob/CVSzlY+roOroxf3TwFUdNXhHf59yj9n4+Of87GWlE0jlv+7b/15X9/PcwH+4VopF856ES+K9m/F+vnHK938oq/C5fwPjNX+m69+Oqaj2hfycmdBOVMzjLgOzkdH/767wpY+AX//qFudlUJn4zh3PpTORy9VNo3Y/t/98yf6+p7w8d/8DPjA7g/+OYRaSLguKKYd+8pUMPCC6liPf2vv9mXQE2v+DFzWwv7feoj1ZqFybl+GFxye/50Hd/j33RWPTgF/Cb1E3qbcmML+P2ejDuw6FOdDS+z/UTaN2P+/u6/vhhv6npgD//2uv/+2L4MGUP2zYQX/5aRgWWbF00HmUBO04RigYz3+7b2xF67KM/X/4GEKAvCq0xMdKXFmoXLGT/WE5zq45d93Vzo6Pqo57geVm4J2x1PDwyA6G3Vg16E4H1rCDUzZNOTz/3f6bjCMG/p+AP5bOxF4IIwHusyVUeGu3vo7IJug3Bvy738GPPfjDdD3gznajI/4/asG38Y/G7sSc2N1X+scj3/Fd/40x2uxUQP/HvyygSc/3Tw0KL7+hdQg/tNN5neENCP+0434Tzdl+P/h/YX8kOOEOqcM/1c99P3L3Hz/oas4TqhzyvH//tse/q6Th297v/hvEMryf9kcfhlkMXeZ+G8Uivn/4FU/XrzjVUX9//FF+BD5GG8RKsgdVpSnYfItvCHES6H/M1/FK5+9/91nPfn2xY+i//2bx3Otm2fy+ZHOcYf/L6jvwCrz/6zsrtdbyaviX+UohKDA/5kG+//gVfff9eBX7vrUc+8A/yfWdOY256dHj40MTx+0/d9Inm/0+i9P5tMMtPU6yuJZ/8+BS0LlKITA6/9MQ/v/7HMfuSdn/Pistz8X/I8d68+15fPbZ3Ntpzd7/aPELVgXbIGAjdo/iD0XPna9YJPxOSjjmA6CjI1Ua3xu0y76Xm3Ls7LW3WLHPob7QoxxMaUt3NsR8pgdgJtl3nsC4/EP+i3/i3g5DSOL/sdnZlrzbW2j06e27s/Z/tERFjkseHAvbISVLVyhXwxaNkL8ubBUARyx6/UUwv5hr3MpK2csHnkXZA0ZBuwNXKx8G49ZAeI/PG7/qN8u/+e8GnjTHeg/N5Lf37+/bTQ/Ozzc6ej/gT60BJ4vhm7crhdcZJyr/WPc74MO0EMJsKg/hisoTN808AEpEWcs3kewJ1QeaLtw742YN1YQWMFstAJUjkIYXP5Jv8P/3ifffhf7P9h2qn+sDer//adnHP7VHbAFFHz7ol3XGN/etOv14F+VQbwRwAfEnUudArKDKxCCtbfbvzuW3N4IQQF7Yzw9N8DdZ+8g/kPj9K/0O/3fc7/2Pz4z2paD8t+55mi/y78q36+DFh0U/Up2IzmiCFhBuQEG2TjcPip1Rf7p1rF3EP+hcfhn/f7lP9fZdjDXmc/PzI452v8bwR1cfqx+F43H6IMcUeRaIWbosofD4f9VzMvVprv9d+Lwr+4YKn7GxfhBhRXZ8oW1XSXJClVkif49uPr/bF5h+4eyD0AHHqRTy6/qaGTLReI/Zqrr/+Wf5frgrAq//xH/MVNd/xaVfv8r/mMmIv+Vjv8Q/zETkf9KEf8xI/7TzdqPfIQvffnE6v/k8PBJXlXwiQtVAfyHvgEinP/h8X9lV9e8ac53dR3hAIBPXKgKaw+OtY6HnLkXn//R/iz5HxnlAIBPXKgKa2f3H6yF/9zmmfyJcd6w8fg3zeER05wdNk0OAPjEhaqwtm1k/1ihh6JUwX/ndtM0T5f0PzJKvyhhmv0cAPCJC1Vh7bH+GvgfQ68++r3+u07ifWJe+zhvInzixI5J4BBvIIOXXJMd1AE7zucVIRDlP1wDsHT/p7X+nOfHQhz+Z6HbB7ZPmeb0Iq7Nz+Knxz8YXlh5mLcY8R+Cmvgfw0K9H1Zyw/0qxKCf53T5H25TyxGu+9uG1ZJPnCDDgx7N4j8EMfnPPfKps/i7QWAz+h89CPrNrRxk4E+p+vrXBPs/lO2+fjdUBHequp/8D05O7rlX/JckHv+5c+762YN7rRtgP/o3RzuhX3+Kg4yOz+CPfbn806Of9RHkvxea/AL/g3umsr2T4r8k8fh/9y1Zw3jyEd4yxsk/Ydf/H8LfUAvrH/t/0Px7/dN2QcMgFFKb9l8/1pmjVv+v4zj+pKPL/5G2tiNd1kdQ+W+dOL/AP65K+18O8fi/Zy8OC7uFt8auZfumOcJB6B9/XdHpf828izVB7f/C83Z7/WObIP7LIS7/b1o856Xs39Z/9IQKQTqO439O/5zIItD/ndeQf5Suy//zpP4vj7j8P5j9Cvsn/aMHx2b7O51/AAL5zVf/rtf/XHaOPwL9Y/1PbUCP7V/6f+USe/ln/RTsBPwPNZ0O6x/7f2i5u2fykpsd/f/WCQiX+r80cbf/QfrRv3Eg4/U/Mj/CH77+haUSj3+L8SD95L/9JQ7/+WEPeRXOJy5UhZj9twXpZxz+g+ATF6pCzP6hIi+mX/zHTcz+c21rir4eQPzHTMz+SyH+Y0b8pxvxn27Ef7oR/+lG/Kcb8Z9uovFf8SsAxX/MRON/+yyvhEX8x0w0/q/995I3wDR+pWe/LJZel5pZLv5jJiL/ZsANMDMNUOtQ4H85vlhX/MdMRP6PtfnfAGS901rz+DcGxH/MROXf8L8BlP/Wzs7q+B/U4380OPbHhUwILE5k/v1vAOW/3zR9/TdfEdY/CO3ucTgv8I+I/2Ci83/qL6ied6P8W2ue/t8ZUxX4z+7YM6W2APEfksj8++ov5n85dP/WV+SfPiYnn7MbVcMK3A/eCQHwIRMC/YjKv79+40Q/0IprfvX/gRUV+Kex/lgH0Pj/yUO+E4JkQHgAEfn/jL9+B/QkOD09w5vkf6ipgv4f1v6ku3XisKoQfCYE0baKFZxE5L+k/gKo/38gfPnv7jmchZJNgH+s6kG21z+uSvvvQzT+T4fWr/wPVVD/Y7Wv5vthQIB/mRAYQDT+Q/6gkE0F/lsn9Hw/DkDZ5J86BFz+ZUKgP9H4r5gK/Gd7oeOPf+ZpfesUdAgO0x8EZEJgmTSA/9YJcIs9QdT8eZz4B4EyIbA86tu/sFTEf7oR/+lG/Kcb8Z9uxH+6qY3/Xe/U0HdBNuI/ZqLxX2r898L7WP8nPsEhjPiPmWj8lxj/vet97+TXgraK/9oSjf/g8d8b3+fG8i/jv2tCRP6Dxn8b72TvGtv/chn/XQMi8h80/ru4fxn/HTtR+Q8Y/y3+E0Zk/gNugKL+Q4//FpZKdP79R4AG+69k/LewVCLzHzAAuFj5Dz/+W1gqUfkP0F+8/g89/ltYKhH5Dxz/XdR/6PHfNO9jkod5CRUQkf/A8d9F/Yce/906geN6e3nctxCeaPwHj/8u7j/s+G9r6p/4r5Bo/BcZ/93qZhcHM+H809wPgvzzHMCFlTQpqHXioxO0LRQhGv8VE86/Ne2D/Os5gF/bTcO/WydwXLiuIAR/Gsc/TfnAOYBI754pnBfC876EQBrHvzUHkJ4J0D+sWhODBH/q2r9tF/3zzdDdg+2A+C+PuvaPzbwC/GvVVOVDX0D8l0Nd+1dlXT//8xxAVL6wUvyXR337hxqA2nryr+cA4i/AfEn8l0ed+xeWiPhPN9H4l9//rhei8S+//10vROM/ePz3j1reCJ9PvbClpeWptzz8kApUDGQyzvf/BsEnLlSFiPx7x3/nHvnUWYu0ctMLDeOhlje2tLzxu29peco+8FDTik1S/mMnIv+e8d+5c+762YN76QZ4uGXOuKzlRy0tXzTe4PQ/cMYUfIr/mInKv3v477tvyRrGk4/g6vtbvm7c9lQOyv9lX37hoxSLtC9bjwvxHzOR+Q+aADDecl3XTR82oP1vafmy7f8A1v7iP3ai8+8cAXrP3lcDt9D6bTc92vIo+P9i16PYCDDivzZE5t81APievW9aPOelyv/XW758Uw79G11PQVvAiP/aEJV/9/jve/Y+mP0K+59rabnOAP9/9WHo/89RENB8xZtxIf5jJiL/nvHfzvJvPHzdGwzjOuS7ln54/MPxn+I/biLy7xn/7Wz/A2hfhg+A4j9movFfwe9/Qw0gf/+Ln2j8x/X738JSicZ/xYj/mKl3//Tj3z7QgCChJPXuf+E8/xFe4t+Hb/LSQb37Hzzk/1IP8e9D5iiv2NS5/+7rd9N4b2uyH0/+Q/90Y+zY8yWcFYLvhODpgSkmkzn6Yl7V1Ll/Pc/DmuzHk//QP8TBOkTSdABremCKgQfss5/N60yd+8dqHt/q4prsh+IhAicEqiAcBe6aHphSwH/mbF5n6ts/De/HD3uwv5r8RzcG/E9v/KGbw54emF5A/ydv5XWmvv2jbADf96X868l/5L93z79QeadfiUh51U9kMu+Z41VNNP5jGv9NBZv8av968h/5777+v3AT3w/HlUPKyRQ+AEbjP6bx3+x0YeVhyz+E4OQ/8p8dPA+qf3wdIKJfEZhi3sVLB9H4r2D8N47+zjwznH/+dQ/o8FvtP0/+U/7p/sBZgfT8x9MDBScR+Q8//nsggu//sSMgFCUi/xWM/66+f+4eCEWIyn/Y8d8R+B+U1/2WJjL/Icd/R1L/CyWJzn+48d+q/3eG+I+ZyPyHHP8t5b82ROU/7Phv8V8bIvIfevy3+K8NEfkPP/5b/NeEaPxXMP6b+n/lj/9+sbBk8DpG41/Gf9cL0fivGPEfM+I/3Yj/dCP+0434TzfiP92I/3RTC/9jW6eJNYV/JhD/MVML/6fyncisebrgBhD/MVML/9OdOWTcNK/1DhQP6x/HdFY8ykeNDJ1Ug0cpIH1zBGrr3xw9yGFMOP/q/T8vK3OQp99oUJojavlPIbXw3zlm+TenOYwJ55/H/5eJ+PchJv/W+G/8aggqfXUDjI/PLsm//f5XnAgG67hAo4OHcB4A6oYlT/rmpkInUbB/njxOk8bSNUs8Hv/2+O9+ED6d5xsgl+tckn+QqUZ474CGe+GVtFCzv2lKINqGm0DP/KPybyVRsH+ePA7+sUp5hfgvSnj/1vjv/VjhT5sjhf47jg9UMP5zYSXeAVwP0BRvmvJNWkGl952wjiQK9g950G7g34pKBzG3/3nlf6uP/8xxY6gprH+sr8/XJVwtUDHN/oIV16Rv9G8nUdjtPxZ82K11Il1TxOPxb43/OoZ9Puz1FfrH8V/N4f2juGD/KkJRln9YWencqdGJyz+P/9ys/Pf71f/w0V6Bf6j80R2gFlb9D645QoH+7SQKH/+qOUgLcfl/UI3/zlEFsDVXHf8L34AP7NHhH26g/0dTvNHeIFTiNO/bOembyr6VRFHgv/ew2kwLMZd/wxjB0q/1e+v/A+H8d/dA445W8eEOn9rw4Q7dDn5+gp/yHJO+oWmHIJ1EUeAffz/Mjm58Ym7/DaPTNDst/a7+33qjfVkF9b8fqiIXShOPfwfov586AcQaDjY6PtSUySwX/zFTE/+t9P0fYR2Z2v/Q3/8EIP7LJXb/Y6bp+c5HUVX/QrnE7t+YOcYrbsR/TYjff1HEf8yI/3Qj/tON+E834j/diP90I/7TTTT+q/b73/lhm7wK4hMXqkI0/qv2+9/D/DUBMqyC+MSFqhCN/wp+/9voyPh8/wOlXjMs/iMgIv+hf/9bvf/7vQX+5/k8s9l58R8BEfkP/fvfzVe8GReB/T9zTvxHQVT+w/7+d/uy9bhw+Hd3/eZ8y/+gmqpBb3kKwDtDsOCr4cBJfzhSyG8uSOkvl2lUES0CM08KkfkP/fvfGfwC0OHf3fWb9/fPk3wC/RfOEHTaoxkhgQTlWto/jzK2ZiclmOj8h/z9b6P5bXAHOP27un75RV//f08v9wn27xoATMThX5l3DT5PKpH5D/v738ABV//f3fXz7/8NHqKLTKbUTD+seunyK3t2GdTz/sAeDf9fuPMa1TSQTo61ZgIi7F/PGLPmFLp3+GkPxKtj8wZADQB+6LSFZ5YQovIf+ve/keYrXP7nzGwea3/s+vn3/+Dy4mXFK8oz/WiSB5oZVOKdMwTV1EDbvyr/qEjHWjMBaRflCUeL0xvlICedg2OH10JefGy1geBdSaOKKa2K9Z5ZMojIf/jf/0Zc43+h/M9lF+cALPoB/T81YRNMkVO45DSM+88/NmVN8eEZgrRJU0N8/Fux1kxABIs4FviFO/8R46lM8yhx9w60Bce25xVgCGWj0/qdWSKIyH/o3/9ufgZ8DKxw+5/PXjkPoPr5+by/fyxe4F/P9IML3f3b4MvRtNszBPHS+/m3YqnM6j6DVU+rFwnhsXQO7h0cx8bkCKSh3TGtHes9swQQjf/wv//dviyTyazY5PK/mM9uxu4fdv3oIZDgEyfQSXfPIfRPRoAd5y98bGrw8A5dFAEQuiT/qg3BYwX452M7/OtXz1ppAZ8zqz3R+K/G73/7/OmP4DCCnPRe8nvnW9KyCx+7F675/9gq8A7hGYLoHHYh/6hF+7diff0v3HkzhlD9j3sF7uDwz6+etdMCPmdWe6LxXzEe/6YJnUC760fwiRPkX9XPeqZfdw904RbOo6sP19w5Q5DaZ9gFO27d2FOnool56Fg//xiu+n96TqF3B31sh39uM+y0BWeWEJLtH/p++H8J/wsr8VoPQiOLm9h9p346Ys8QxN4cRcMHhF5yM3igGYGUB8e6/UMYtNuYH3q35hQW7KCP7fTfq35GgNL6nllCSLD/PPb9CN31I/jEY0fda41Gcv37DP0g+MRjR/xr4vEfBJ947Ih/TTr9NybiP92I/3Qj/tON+E834j/d1Kt/foWpsATwOkr5TzfiP92I/3Qj/tON+E834j/diP90I/7TjfhPN+I/3dS7/9YJHMPN2CP2kzXIMsHUu/+F8/TwekD8F+ebvHRQ7/4HD9G8DIX4L07mKK/Y1Ln/7ut346QeYHBycs+9qN1aEbxkMkfpSz8Hde6/dw/PusG5FWp2tV4RCshkMmc/m9eZOvePg7KxsqcpfThFz1oRCgH/mbN5nalv/zRVCz9UIwB3grUiFAL6P3krrzP17V9N0ZvUk6xBu7UiFJLJvGeOVzV17Z9/cGPHnik1ZxOqfWtFKCRT+ABY1/55pu7CysPS/yuHd/HSQV37R9eA+iGmycnzsdq3VoRyqO/2X1gq4j/d1NL/rwrJgZ2Ug/hvQNhJOYj/BoSdlEMV/fOahbT/MaPaf/GfVsR/ukmg/3YhJsR/uhH/6Ub8p5uk+//eeNdm2OwayXZ9j4OEKpJw/z/p6uo3Z3f9ZN7cmu36CQcK1SPZ/kH/jGluz+Kb4IYX5QaoPon3/8B20+x/wDRHR7rEf/VJvP+ubL959LR5ahFWxX/VSbj/k/jT79dC6cflST//G55/KS237fxDWpYP73m7a7/V6wC/nDZAOB/KZtuq+3itXkm4/3lzfn5+xDRHYGHO+/pf92la3v7x0P7XvaYbFk7/21Zd8C34/AcMV6ymNMAGOMzt3htA/C+R0v7hBPH9P7AI8P9xVAYmwvv/k5146zj9365tW7j8b1ul7jUL8b9EquD/l8nB6td8FTxeePk6LNTbVv3WKqqseRtSwRITtN9u1+IbPr0abx3wv+2fMO3ffWvbTlunSoi1vro/2L+VI8Svuw/9Y50ReBxoTrx1RrKof/+fpkILC7js/3Yp6ACfq1AdBPM2ra9GkZiWrNOe7RswyPavYwCd0FP+79M53g5xF/4B+i92nAv/+dL2/xX/wZT2n8/nT5nmKVgE+Ud7IE/X42CM6mkIsrbRL8qmFV1pg1H04/UPJfeCb1kJXf43qPsDc1Q1BaRA5YTfcfQ5JJfE+3cQ4B//A4nkH2tl9A920C1vKw2QgHr3UG/rPbGcev2rNZ3Q9g+buK5y5JTQ61ArAcfZtoqPlVgaoPyDr/+bUOV4J1a7tn+9rWyhF2VLgf637cR2Q/unW8Z5J1CpViuYGtM7c0T/2LwXOc6FlzsPmTwS7x9OsET7Dxb+E64/XHYqf1CktX+9rbxCvcyCFWR09QW/yf7RGfYHnHdCgX93jljF4zNhseMUPDMki0bwD9UtfKB/uOwXXu7wb21j+cR+Gbbg235dKVVGN0Aw9Rl3YhQWZNKpE1olmf1zjhSv+n/QEww8zmp8PLhPnQkmSh4N4X/b9Vj+4LJDM/yaX7L9622QAI9xmICacTJpGb0cgrftXHfBX2Mhpnhqszkh7Im76dRWjhj//EvpQBvW3Rd0HHwupF6m+PentP9Sf/8rHzYYOXEdpyok3D/9/V/j+/f/srH7ZNES13GqQ8L9w7qDiv1jbRyHlriOUz2S7V+IGvGfbsR/uhH/6Ub8p5tk+i8BnLRQNerVP7/CVFgCeB1r7F9ICuykHMR/A8JOykH8NyDspByq5d8H6f/FjGr/5fcf00ri/WfXrDnCqwo+caEqJN7/CdPs51UFn7hQFZLsP3tsNtu11TRPd3U9sCbLgeK/qiTZ/zHT3A7/m+aa06a5lQPFf1VJsv9ZGvjPtHGg+K8qia7/t4P3mcdP9sNiFH8CgOATVwxOTpb7ro+iSdVL5PB1crRpgTs9h14y4mSQXjLUECS6/weV/+N4klea5jQHufzjiz+y2ZfZzgr8WVhJC5NgSKB/fL9c4Q1QSPCRk01y/WdPQNdvJps9MZvNQkswDX1BFW7D7/+xCbZgJQ3vn98yVRzxXxUc/tdgq/94Fp//skdwfViF84kj3T1kDdhB1bRdxS+snJxEI726+tZJVRKObp34ac8lf4MhDv+DhyAzbZP9U8Jr6HVzmD+G8iFpOXk4RDuULBLu/2R2BCuBAP9w7VXR3AG+8M1/Vin82m7Qpt4G9wpV8HVSSsLRrROvhUgMcfqHhKq1AJT/wyrhDjgCxVCrwIfEwIVX2keuM5Lr/0g/PPX1Z7NtM4vZB+BJsO1KFc4nroCCDC7opa+o0GUBNvjd0IRKaieBFVWzY4jTP6rXzQWaht4eJVSvlsUsIVQfUtcrVrZ1RqL7f1AFHMGTXBzVhR+g07bBd/1BLY84/WOtjIIh0IJeC6iS6GiM9frHe0K5BveUTkWrV4tiDCTRh1SBOtv6I9H+oQIwZ48ceWDUNK8N/PsfFFUtwbLQ3QMrtLGwUscBWKoxVEc7/aN1WnX7p2A//9q7+K8mLv9Q69uMcGCBf6iBCzr3VO9jC029NwpCsLLGJDra9s9vDMa6n+p/rdXpXx2F6399SL0U/1XB5R+q/9FpdI8/Amg1AHziyMI34AM7YPgHmda3qg4ZRYCVhZV7pnoPK3WOpJhER7N/3AnfIZvtxQ79IDQZ3T180zj9q6Pg7YSh+pC4xP4fZlKHJNl/dmvbYhfcANu7siPD1pfAfOJIdw80wXThsZ0GKdDeUznG9n3Pl6D/B895yqCVlJJwtNKqdsKk9Dw3+Hl8gyztpEwDfBNhrwEDKJQPiUvYzzpynZHo9h+Zdfzpn+ATjwxWXowyktQLifefHR7mBz+GTzwySsvVbX4jkHj/BfCJR0Yp//DkR41BYyD+0434TzfiP92I/3Qj/tON+E834j/diP90I/7TjfhPN+I/3Yj/dCP+0434Tzf17R8H5OgRPkwDjc2Igzr3j2OuunFqjoX4D+abvHTQAP6z1mwdRPwHkznKKzaN4F8NvoW2gIbv8vQ9GsFPA70HYfveuhycWW0ymaP0o58OGsI/DsjT8/H09D3L/yBG1Ofg3GqTyWTOfjavMw3hH1yTbhymrafvaf+0VKGpB/xnzuZ1plHKvzUFkNp/fUOAf2oCdMKUA/o/eSuvM43R/u+ZsubfeP2rCPGPZDLvwXcpOmkE/zitzxqTr6fvkX9Yqgip/5FM4QNgA/hfWImf1nw8nr5HfcAenLov/T/Nu3jpoM79Y5vPNT/Px7Om73X3TF5yMzT+rbgt9X8A9e2/bOSvQgGkw7/VOxQ8NL5/bBdEfxDh/RvGLwBYguB7fnsS8wAAAABJRU5ErkJggg=="},33856:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/register-for-com-interops-csharp-494f2a675d3bedb020a6a955f03b4422.png"},70301:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/register-for-com-interops-vbnet-6ff875188afbe0856a6d610e3d8333ff.png"},97311:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sw-interops-embed-inteop-types-false-065677048cab7f13bdfe537587be020c.png"},81945:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/swex-nuget-package-cb82f2977d0624e83da6aaebef869ecd.png"},26743:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/update-nuget-packages-203b51df3ca3a906f231ef56a54cd938.png"}}]);