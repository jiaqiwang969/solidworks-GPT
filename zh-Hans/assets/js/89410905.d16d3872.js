"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[56940],{3905:(e,o,t)=>{t.d(o,{Zo:()=>g,kt:()=>w});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},g=function(e){var o=l(e.components);return n.createElement(c.Provider,{value:o},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,w=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return t?n.createElement(w,i(i({ref:o},g),{},{components:t})):n.createElement(w,i({ref:o},g))}));function w(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7598:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const a={layout:"sw-tool",title:"VBA macro to toggle white background in drawings",caption:"Toggle white drawing background",description:"VBA macro to toggle a white background with another color of your choice in drawings using system settings",image:"ToggleWhiteBackground-icon.svg",labels:["Drawings","options","background","capture"],group:"Options"},i=void 0,s={unversionedId:"codestack-clone/solidworks-api/options/application/toggle-drawing-background-white/index",id:"codestack-clone/solidworks-api/options/application/toggle-drawing-background-white/index",title:"VBA macro to toggle white background in drawings",description:"VBA macro to toggle a white background with another color of your choice in drawings using system settings",source:"@site/docs/codestack-clone/solidworks-api/options/application/toggle-drawing-background-white/index.md",sourceDirName:"codestack-clone/solidworks-api/options/application/toggle-drawing-background-white",slug:"/codestack-clone/solidworks-api/options/application/toggle-drawing-background-white/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/options/application/toggle-drawing-background-white/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/options/application/toggle-drawing-background-white/index.md",tags:[],version:"current",frontMatter:{layout:"sw-tool",title:"VBA macro to toggle white background in drawings",caption:"Toggle white drawing background",description:"VBA macro to toggle a white background with another color of your choice in drawings using system settings",image:"ToggleWhiteBackground-icon.svg",labels:["Drawings","options","background","capture"],group:"Options"},sidebar:"tutorialSidebar",previous:{title:"Change system page setup options in SOLIDWORKS using API in macro",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/options/application/system-page-setup/"},next:{title:"Managing user preferences of the document using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/options/document/"}},c={},l=[{value:"But how do we get that number that corresponds to the color we want?",id:"but-how-do-we-get-that-number-that-corresponds-to-the-color-we-want",level:2}],g={toc:l},u="wrapper";function p(e){let{components:o,...a}=e;return(0,r.kt)(u,(0,n.Z)({},g,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Author: ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/eddyalleman/"},"Eddy Alleman")," (",(0,r.kt)("a",{parentName:"p",href:"https://www.edalsolutions.be/index.php/en/"},"EDAL Solutions"),")"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SolidWorks system options to set Drawing Background manually",src:t(67670).Z,width:"657",height:"366"}),"{ width=450 }"),(0,r.kt)("p",null,"Introduction\nOn the SolidWorks forum someone asked how to make a macro that toggles between the default drawing background color and a white color.\nThe goal was to make it easier to capture images where a white background was required."),(0,r.kt)("p",null,"Here is a simple macro that does exactly that. I will also explain the basic buttons/shortcuts/menus you need."),(0,r.kt)("p",null,"If you want to toggle between other colors, you can change that in the Color1 and Color2 constants below. "),(0,r.kt)("h2",{id:"but-how-do-we-get-that-number-that-corresponds-to-the-color-we-want"},"But how do we get that number that corresponds to the color we want?"),(0,r.kt)("p",null,"Just change it to your favorite color manually in SolidWorks options (in the image above I choose for a more distinct yellow color)\nThen open the macro with the macro editor (Menu Tools > Macro > Edit or use the Macros toolbar).\nOpen the immediate window if it is not already visible (CTRL + G)\nRun the macro (F5 or green arrow button) and in the immediate window you should see the color you choose represented by a number:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Immediate Window showing the chosen color after running the macro",src:t(51081).Z,width:"368",height:"72"})),(0,r.kt)("p",null,"Adapt the number in the code (Color2) and when you run the macro the background color will switch between white and your favorite color."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'\'This macro toggles between 2 colors for the background of drawings.\n\'It uses a system option, so every drawing you open will get the choosen color\n\'This can be usefull if you want to make screen captures on a white background.\n\n\'Here you can set the 2 colors you want to toggle between\nConst Color1 As Variant = 16777215 \'color white\nConst Color2 As Variant = 14411494 \'color grey (default color for drawing background)\n\n\nSub main()\n\ntry_:\n\n    On Error GoTo catch_\n\n    Dim swApp As Object\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As ModelDoc2\n    Set swModel = swApp.ActiveDoc\n    \n    \'Get the color on first use (look in Immediate window CTRL + G)\n    Dim Color As Variant\n    Color = swApp.GetUserPreferenceIntegerValue(swUserPreferenceIntegerValue_e.swSystemColorsDrawingsPaper)\n    Debug.Print "Color : " + CStr(Color)\n    \n     \n    If Color <> Color1 Then\n       Color = swApp.SetUserPreferenceIntegerValue(swUserPreferenceIntegerValue_e.swSystemColorsDrawingsPaper, Color1)\n    Else\n       Color = swApp.SetUserPreferenceIntegerValue(swUserPreferenceIntegerValue_e.swSystemColorsDrawingsPaper, Color2)\n    End If\n    \n    swModel.ForceRebuild\n \nGoTo finally_:\n    \ncatch_:\n\n    Debug.Print "Error: " & Err.Number & ":" & Err.Source & ":" & Err.Description\n    \nfinally_:\n\n    Debug.Print "FINISHED Toggle Drawing Background"\n    \nEnd Sub\n\n')))}p.isMDXComponent=!0},67670:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/solidworks-option-background-c18c768e37f9cae804c97679f32bb31c.png"},51081:(e,o,t)=>{t.d(o,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAABICAIAAABgJTkcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAn4SURBVHhe7Zy/biQ3EsbnWTba0PEAm/sBFn6DHeACp4sLF/ALdOLAcHKhch8m3HdYQMAFDShTslBgKFI2V1UsNv8V2RyJ6tWMvx8KdjfJIqvYzU/sVq92f/z3GwwGgw0xCAoMBhtmEBQYDDbMdr8WRa9gv3/Y/fTLn9/++PPzO3eQN4DBYNdg2wpKXh5bTxsYDPamDYICg8GGmRMUWcxf6HmE+fDl22+ffpLD3btPf0m71QbuccbxUUXKl7z79NmLRVCNX3+WOuLn36Xcw6dWbzAY7M3bIii73fvPv9Hxl490qDLBx2499zTw+4svH6WWXUh6qETUJxcUb0tJXFX25sphMNibtmiHUi7m1dW+HIcNhUC7DCpxAlTrR4RJKKrK3rQfGAz2pm2goKTPJm1BCe3/+uV9WuV88aQDg12gDRIUPojep2hV/ZGHtidOblg70irviycdGOzibJSgOGnwuIcU/1BjvZSljYnUvf/4QXco/jVt/lIWjzww2MUYvpSFwWDDDIICg8GGGQQFBoMNMwgKDAYbZhAUGAw2zCAoMBhsmEFQYDDYMIOgwGCwYQZBgcFgwwyCAoPBhtnubwAAGMTuPwAAMIjdvwAAYBC7EwAADAKCAgAYBgQlsPv3/67MNDEAtgKCEshW4xWYJgbAVkBQAtlqvALTxADYCghKIFuNV2CaGABb8dqCcjzoH4bd7adZy94q0VK8P37Xwvn2YR/KY7ubuM3jIS0/3Do/z+19XOvN9iXb3zzQ0PPXu6w8sorvdD/dPsmQp9P3x8PEhXoKwFb0Ccp8POxVF3b7w5FOd4ej1nUxT/vLERRasU+TLEiy/c3jbInC/uvT6fvTbAnK8SYpKc32nR5mGvfrPY9YF5Sq7+lpulGvA7U5PZIOamIAbEWHoBwn1pDZy8FM4kC6cr2Cwgv7QY/Z7o/GdkAW8GRUrQtK3VetISirvt6cJmpiAGzFqqCYUpDuUOYp3r+YulEVlIavf1qikZYdUqX7CupFcqgFbfxqpOUadihOX9KnHn7okDX/DEFp+apVBaXDV4x2KC5mTQyArVgTlNWtBS3apAGv/XL3YnfT4cuqst+zkIgqzMdOcRCeKShORGhNnubvj2TufcRi8tDhJMYWlIino38Mcdb2Vbt5NN+8rPvy/kXwCujOANiMLkHRYwtDKCwXU1B6fElQ9tNZT1fPZ1mZh9touU4Px3i/oA8d7nRlp5C9jun1NQXljHHvDrcqPZoYAFvRISit1yXm21mj0BKULl+z0SuhC5K3J9V3KLxNyGlpCrVfnl96fS1BOXdc9+SlDQHYivWXsm1F6dllEC/ZofwAQUnX80RPPdFpZKs7lERQUjtzh5LY+rgkKDSuJgbAVqwLCi9qWuXhPcR8nKjAL3P3HiRUsiSUEmAKSo/viwTlme9Q7o7Zr42TDUts+cLmfQS/c/FbEpKG+P1uYiMFhWXr9sG/67lzvzamBpoYAFvRIyiy1MMvY4pftdR/U0MKoeUxsULUfUlKcppvcwye/1J2/cM2+brMka5t+TJNKV7oOrN9+S1JTvkLo8a48xIzPmwDP4g+QflnsCzOqzFNDICtgKAEstV4BaaJAbAVEJRAthqvwDQxALYCghLIVuMVmCYGwFZAUAAAw4CgAACGAUEBAAwDggJ+MNP+Av74FugEgnIphA/9rmz5XY2g6Gec535++ZbwGTz/cqwLivHFqqDfu1rVrmr5TFZbxp/NuqK6r5L+pTj+4l9TXTylIPQs3pWIC9+F/NPfKvaXv9y1Nnh9KIShy+8Fs3GJGFdw3/sldQ9yefT4MnnhDda3Q6G7LlnoZUElDne7RhVUUDar5OD+qY+eOG2JzvMrl/aRB5gNkQ1oRmUQDRoGKCJ5VSpz9SKeORuXSnJvzEeSmHHpbnszvAYvvMFeX1AOyRUzb9aqb3ptkmbFlUv7yAPMhigGnLsWUTRoGCCLpPn360IlV1EfzBJou9aRJbIQ7eV2/E8sV3OJaM2GRsFhLPvFkJb7h6JSmA2bbhoF35UvWs6LqV9SD1vU/F+N9sxVBWqcNEzO6xkpHJKv57H5p55WEf5moP9rkyi5Vsx6xqfGPBOV+0oH8jH4cbPL1zeT0m/tBuvkPEHhcLNwPHYczjFyo4KyWSUHngzOUE9TxEePhbQPH3E4SCgHNAPLiQYN/caR8M0W98KXcRmeGy43qP5p3tC6Xbsgo+Wl6rt0RRqe3zYtyi6z2aDTyt/NC39rmJBm4aIYkUr0euwxM3IhcHc6Is3HPowq+elZfa4qhEtHFDuUVkYuqvRf3rO3nhE+QZGdJUSmJ2YZzprn5n1Vzmo6o90zKZXSNBrqTLoFZaFyo0pSRRzkKO25A39QNrN9CUpw+XHgZ1lxVyQhm8QFI+JywGoMFXxmCUYf0q8cFR6cwtK+XRuw4rRiMeOrsDob1FnX380LyTJ0JiFwJuTPRbQOipSsjAgaM8kgatU7VxW455hWamlGMg/NYbj9gbIs2nXFLP0bwRgzFAeWBkmk7Tnf3pnsybHJJjsUPeJDM1zbN2WWPVtotj6JbuAQQUw5oN2ujtXe7MMXFgFLlQ+jXRthzBUV6dJIyTussjobZmKM/CDW4Qj+6RoN6tw44oMbwuzHyIjJ24ZW3XNVIes53aM0MzLjT5BrwR1k7fpirvRvFkeFRefpjObuzZl0Zb1TWfLMdygldhyxIx3vp8m68qavMWZcdOYkZhQDnj2N5gBGJyHOwoOqwmS0awNWoHM72VVWZ6Mym/yqJXrSUj89ZmRDIn3Jf2nlGt1YGRH5mFGr3rmqYGTjO1/JiDxXhvHtWZaSll0xG5EJxgzFgaVBEmn7vNeo1hhwPccmGwqKTCGLftHM9CVXbhsec+hnR9rZOZPI7aOCtLE8OpbBN7GnxN1HIWSOcmnmTrSyeIpu1y5ws7I0G9f91DXis0m7NGbDTpaLQ0O3haQCPRdo0veuM46bD7Uiws6oGDNu1TlXFfKe+cbSkrWMeKjonqQW/EYzvJJwySxHcUw9MeeRLTTvK41KajXmpOfumXSX/pypLFkXFJ7tiDzhrFpwbdycOdRLikK4dV9XeZjc7DiixIOjdBaNxO5Wt4x2XVZHPa+Tu+ezX3kb7yje8yfejdp4MgPLZFEDubU9/MJJK1ZYmY2ymoLSOh40ypX8WMaIEBaH7ZOIDplWRmFU55GfE+2ZrGKOGl2m1YykRdwkrHPt281PNFBPzO15Zvrvq+MSiDxkKm6s5kxKv+ocZXwWfTsU8Cq0l0G7FsRc4lxd5/WFoPww6CdD445q14KYS5yra72+EJRtibfc5ZNWuxbEXOJc/QOuLwQFADAMCAoAYBgQFADAMCAoAIBhQFAAAMOAoAAAhgFBAQAMA4ICABgGBAUAMAwICgBgEKfT/wEQcFkqaN2uUQAAAABJRU5ErkJggg=="}}]);