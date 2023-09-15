"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[58318],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>u});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function s(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?s(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},p=function(e){var o=c(e.components);return n.createElement(l.Provider,{value:o},e.children)},m="mdxType",A={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},b=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),b=r,u=m["".concat(l,".").concat(b)]||m[b]||A[b]||s;return t?n.createElement(u,i(i({ref:o},p),{},{components:t})):n.createElement(u,i({ref:o},p))}));function u(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=b;var a={};for(var l in o)hasOwnProperty.call(o,l)&&(a[l]=o[l]);a.originalType=e,a[m]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},29161:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>A,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const s={title:"Combo Box control in SOLIDWORKS property Manager Page",caption:"Combo Box",description:"Overview of options applied to Combo Box control",image:"combobox.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},i=void 0,a={unversionedId:"codestack/labs/solidworks/swex/pmpage/controls/combo-box/index",id:"codestack/labs/solidworks/swex/pmpage/controls/combo-box/index",title:"Combo Box control in SOLIDWORKS property Manager Page",description:"Overview of options applied to Combo Box control",source:"@site/docs/codestack/labs/solidworks/swex/pmpage/controls/combo-box/index.md",sourceDirName:"codestack/labs/solidworks/swex/pmpage/controls/combo-box",slug:"/codestack/labs/solidworks/swex/pmpage/controls/combo-box/",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/pmpage/controls/combo-box/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/labs/solidworks/swex/pmpage/controls/combo-box/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Combo Box control in SOLIDWORKS property Manager Page",caption:"Combo Box",description:"Overview of options applied to Combo Box control",image:"combobox.png","toc-group-name":"labs-solidworks-swex",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Button control in SOLIDWORKS property Manager Page",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/pmpage/controls/button/"},next:{title:"Common Options of all controls in SOLIDWORKS property manager page",permalink:"/solidworks-GPT/docs/codestack/labs/solidworks/swex/pmpage/controls/common/"}},l={},c=[{value:"Item Text",id:"item-text",level:3}],p={toc:c},m="wrapper";function A(e){let{components:o,...s}=e;return(0,r.kt)(m,(0,n.Z)({},p,s,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Combo Box control with 3 options",src:t(17741).Z,width:"224",height:"121"})),(0,r.kt)("p",null,"Combo box control will be automatically generated for all the properties of enumerator types. All values of enumerators will be considered as the items in the combo box:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},"Imports CodeStack.SwEx.Common.Attributes\nImports CodeStack.SwEx.My.Resources\nImports CodeStack.SwEx.PMPage.Attributes\nImports SolidWorks.Interop.swconst\n\nPublic Class ComboBoxDataModel\n\n    Public Enum Options_e\n        Option1\n        Option2\n        Option3\n    End Enum\n\n    <ComboBoxOptions(swPropMgrPageComboBoxStyle_e.swPropMgrPageComboBoxStyle_Sorted)>\n    Public Property Options As Options_e\n\nEnd Class\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using CodeStack.SwEx.Common.Attributes;\nusing CodeStack.SwEx.PMPage.Attributes;\nusing CodeStack.SwEx.Properties;\nusing SolidWorks.Interop.swconst;\n\npublic class ComboBoxDataModel\n{\n    public enum Options_e\n    {\n        Option1,\n        Option2,\n        Option3\n    }\n\n    [ComboBoxOptions(swPropMgrPageComboBoxStyle_e.swPropMgrPageComboBoxStyle_Sorted)]\n    public Options_e Options { get; set; }\n}\n")),(0,r.kt)("p",null,"Additional options and style for combo box control can be specified via ",(0,r.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_ComboBoxOptionsAttribute.htm"},"ComboBoxOptionsAttribute")),(0,r.kt)("h3",{id:"item-text"},"Item Text"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_ComboBoxItemTextAttribute.htm"},"ComboBoxItemTextAttribute")," attribute can be used to specify user friendly title for the items to be shown in the combo box"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Imports CodeStack.SwEx.Common.Attributes\nImports CodeStack.SwEx.My.Resources\nImports CodeStack.SwEx.PMPage.Attributes\nImports SolidWorks.Interop.swconst\n\nPublic Class ComboBoxDataModel\n\n    Public Enum OptionsCustomized_e\n        <Title("First Option")>\n        Option1\n        <Title(GetType(Resources), NameOf(Resources.Option2Title))>\n        Option2\n    End Enum\n\n    Public Property Options2 As OptionsCustomized_e\n\nEnd Class\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.Common.Attributes;\nusing CodeStack.SwEx.PMPage.Attributes;\nusing CodeStack.SwEx.Properties;\nusing SolidWorks.Interop.swconst;\n\npublic class ComboBoxDataModel\n{\n    public enum OptionsCustomized_e\n    {\n        [Title("First Option")] //static title\n        Option1,\n\n        [Title(typeof(Resources), nameof(Resources.Option2Title))] //title loaded from resources\n        Option2\n    }\n\n    public OptionsCustomized_e Options2 { get; set; }\n}\n')))}A.isMDXComponent=!0},17741:(e,o,t)=>{t.d(o,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAB5CAMAAAAXmt1YAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAALZmAABQpmSdvc7psQA6kP//tmWu1mNQAMnGizQAAKCr/8G8//7+/oeHh7b//wAAV67Dzvb29i2C1Ga2/3BwcDQAM1WStYa72Hi9od3s9dnZ2f//29uQOtLb5VYAMJPN7Mnr66amps7p+Hi94ixfhtPT0wAAM5Db/2213FqZ/04AYmDG6IzKyTOZ/wAxe3NvNMTlsHGli9a4eYadq+HO/04AAODx+R8AALLQ4DOr/83NzUal5GYAOuzs7DRXcjEAWNju+na10//bkJDn904tAH/C5ZA6AImJiZzb21rO/x9vyIu/2oyRXt3w+n/e//+2Zrx7MbjW1gcLDKiAODpoin+Z/8SjYtPs+ZPOqZnW1nm41+vrqFGl98nn91MuNaC8/wBWmYyuhOH//9v////e/4zl9tPTlnsxMZy6ywA1NZA6OrrL1TqQ227F9gBeqIxcAJKSkmYAZlSx7d3d3dbWuHoxAE4AONmbV8Pk9VwAAMH//yIAYHl5VuvJhG6kwktvXZeqtAAsg6q8x1ea2Knl9q6urnPG6IbGpqheADO8/5jR79ram4Sog16o7MLCwkhvjajr63K53zsANTqS7IbG6JDGi0ys6TF7uwBmtozK61wAM+uoXixiigAAZJlWAMbH0qDu/wA1hFcAV3+r/5jRqi0AAGYAAHu72qDO/5C2kIzKqKO9zb/b6joAAGnO7TsAX73c3HTI+ITJ61qWuKrBzg4QEYOGjXvM7HOnxDWEyUx2lMnnsAAAOVQAAJizhuPj4wAzilEAOJCQZmmhv1Wo+XHG93/CowBcsAoLDJPOzHiqxdrau9PssToAZgAAXZWruNbWmV6ZuzlZcWzR75OSX9m6eiF0zMmlY92dWQBZnZ1ZAFMuAM7IjJBcAFgAWABRqC5ghlOn+BAQECAAAAAAAP8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///9rHmmAAAADmdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AXG6lEgAAAAlwSFlzAAAOwwAADsMBx2+oZAAABlhJREFUeF7tnPtfFFUUwC+pm6HjYw0sRgM1F7OCLHuJrpU9wB74SMskyqCHZY/NzQJKDYMUMC0gcw1ETbE00tLSfARmJWr5zOxlWv0hnXPundkdYGeWfmDnDvP9MPeec+4dPvPdO3P5fHY+H5jX4biCsuMKyo4rKDuuoOy4grIjBANJDiDAXYxwweyAX5EefyCbZIxwwSS/Qr3UKP4kEUUiBB3gB4bdWtDvAFxB2flfgnnF74jI/lgK5hUzlv4FzSXy1kQkESxM7rgeb6wEFybCYlEj6Fgwr/hZ+wj+wzitmFgJLvsaZ324fljemuWJ7Ni7CxMZe5EklzG2fhj4Qhn1o61sHAi2hv1MBb3BYNWazUGg6q+cquLM7cGpmduxggeEwd9/C2L51wE5+kxbkIWGrSrFoNEeTVBVz9yWowJVqZvhR+/1FLx5SkM40x6AYasILQTFZVdtIBP16DO64AYwx56nNhNUV2h+VoJHF3yAs16DW5MsuCgcbVK7CYaxEFTPJL4Ffumz1ar9c1R17RwQgRiOtZnTIlPe2BBTQR9wA2ybAx7x+U6kvsFY5jSfbyqbcyJ1ts+3llIM4XhlATzW6VC1HZaCGk+n3iEiuXAFNRwvKCtmgs3+LOnxN0cXzA40Uy81zSbfqnn7ia8WpaYfdzEiBJ2LKyg7rqDsuIKy000Es05dqJOeC6eySMYIF5w4Y+yb0nN8xkSSMcIFR46dlyI9846PJBkjXLBuScrN0pOypI5kjAjBgWKS1Aw0E3zAAXRrwZ23O4CdJoJbHxb8uP87EVnTmbldwVYzwREjeu5njA0aYaDngc+1CEb3aQkQHrEPVoIdXLJe+3PT36IR2ETwS3w7CLRiYiY4Nz9/74Hv86nde+D6TS1lZxmrf38TY4egmJ9/bhC2Z1vKcJDV33kJjtAZ5xhrKYPToPwoTe1SPhUvQCmZayZYVDTm1ReKqB1zU0tZ0Zirn+IZtHoPRRp8sKUMK3hAWPTSoSIsP1SPp3Qxt9ILUB6bCR6prNzYBFNrNlbPhx/IsBFtZeU3r5/GLmIQez3ddlqkNLlruW86m57GwyMmgrvT0mZVz0+jVgRNrEbUtLG0Wds+o+jwYzQJDqjo59BQ13PZdBGk7e6UoCE8/Mcv2P1cuosqQlSbEE5pctwwE1wUCm2pXhWilgeh0LV31Whh6Il/a0Kh+9NXhbY0nQ+Fep+n2Xj0Lt0VmcaVRSaCB2trlyavqqWWgqWJjN1bW3sduwiKwPJbGDt2DY4vZqz0bRqhib0pxZD/gjhy0ESwx90x8kPyeBHZjx7dWfDklTFyefJ4EdmPkyaCO95zADtMBAdf5QAGRxdcWXexA6hbSTJGuKB3j/huUWr2cBcjXDD4lSMIkowRLtiQ4QgaSMaIKygTriBQ0lcEMdCZuV1Cg99POpGEBUsURbmRT9Qp6SMCGtUTIDxiIxp8ajvDCMEOLlmrjSuAxaJGw56C5SvaGbYVhLbk8QLv6ApYsY8KFOVJLGbk0tJWeEfjoKLMHEcjeEauokCVyvG/YRsC5b5YBOmKZ4qMED0UcXAyikIFDgxz4UOAcoVCp8SThuzhWSaCsGZ9SRBtuBJv4ebk1x4xiL2egjdP44yFIF2fdtHgC7ecds2iFyYZ68KCaI49T+NMpwQN4brwM4iV8JK1SeNMJwXX0Q1L0AZagX8nSuCBo4cO4z4ZudozyNM40xlBeCJh1SaLXRQM4Qml2/Fjvm3iCE7UdlEJBGMj/hYmuIIxIKsgPGEOwBWUHVewPZ7GS0UkAxaCnkbG9o2imYRnQkQSJsE4y06YC05qgsWiRtCx4JTn4ajvLzJ7YS6YAFcO196r0DPhkyZW339SE2OrSRLWrFch+EKZ63tellBQrBdcu6cRdIai6CiqQqgkrIY7uFehWDr4FLCzHaaCk36iawcjUhW9noK38NU/C/sR6wpiNOQ5XRDvR+x5CrFtd1ZTwSH3hJ9BtNCXrE3KJe2J+SZDG+gU+AvgaVwNGws8dMImQTyDPLWxn4UgGDLYPPF2/Ja2TWVom12UBCHh02yIhaCGndfIHFeQ40RB7xWOwBtdEPH7ygPZchP13QThV1eUD5ebqG+XOH7VJ/6pgKxEfT8ooP9tJTfCJIxB0Im4grLjCsqOKyg7rqDsuIKy43BBr/c/ezA10k1AA0QAAAAASUVORK5CYII="}}]);