"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[2769],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=d(o),f=r,u=l["".concat(c,".").concat(f)]||l[f]||w[f]||s;return o?n.createElement(u,i(i({ref:t},p),{},{components:o})):n.createElement(u,i({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:r,i[1]=a;for(var d=2;d<s;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},58704:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>w,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const s={title:"Offset planar curve (wire body) using SOLIDWORKS API",caption:"Offset Planar Wire Body",description:"VBA macro example to offset planar curve (wire body) and display the offset preview using SOLIDWORKS API",image:"offset-wire-body.png",labels:["body","wire","offset"]},i=void 0,a={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/offset-planar-wire-body/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/offset-planar-wire-body/index",title:"Offset planar curve (wire body) using SOLIDWORKS API",description:"VBA macro example to offset planar curve (wire body) and display the offset preview using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/offset-planar-wire-body/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/offset-planar-wire-body",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/offset-planar-wire-body/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/offset-planar-wire-body/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/offset-planar-wire-body/index.md",tags:[],version:"current",frontMatter:{title:"Offset planar curve (wire body) using SOLIDWORKS API",caption:"Offset Planar Wire Body",description:"VBA macro example to offset planar curve (wire body) and display the offset preview using SOLIDWORKS API",image:"offset-wire-body.png",labels:["body","wire","offset"]},sidebar:"tutorialSidebar",previous:{title:"Naming for methods and properties in SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/naming-convention/"},next:{title:"Open associated drawings of active document or selected components",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/open-associated-drawing/"}},c={},d=[],p={toc:d},l="wrapper";function w(e){let{components:t,...s}=e;return(0,r.kt)(l,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This VBA example demonstrates how to offset the wire body of the SOLIDWORKS curve and display the preview using SOLIDWORKS API."),(0,r.kt)("p",null,"Wire bodies are type of bodies which correspond to edges and curves."),(0,r.kt)("p",null,"Wire bodies are used in the features such as composite curve, curve through XYZ, etc. Those bodies are also used to generate some types of previews, e.g. preview of the fillet feature"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fillet preview",src:o(32703).Z,width:"391",height:"265"}),"{ width=350 }"),(0,r.kt)("p",null,"To run this example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a composite curve (or other type of the curve) on the Front plane, i.e. the normal is {0, 0, 1}"),(0,r.kt)("li",{parentName:"ul"},"Run the macro. Macro extracts the body from the selected curve. This body would be a wire body. Macro offsets this body by 10 mm and displays the preview of the offset."),(0,r.kt)("li",{parentName:"ul"},"Macro stops execution. Once continued the temp body is destroyed")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Offset wire body",src:o(83748).Z,width:"987",height:"488"}),"{ width=450 }"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Dim swApp As SldWorks.SldWorks\n\nSub main()\n\n    Set swApp = Application.SldWorks\n    \n    Dim swModel As SldWorks.ModelDoc2\n    \n    Set swModel = swApp.ActiveDoc\n    \n    If Not swModel Is Nothing Then\n        \n        Dim swSelMgr As SldWorks.SelectionMgr\n        Set swSelMgr = swModel.SelectionManager\n        \n        Dim swEdge As SldWorks.Edge\n        Set swEdge = swSelMgr.GetSelectedObject6(1, -1)\n        \n        If Not swEdge Is Nothing Then\n        \n            Dim swBody As SldWorks.Body2\n            Set swBody = swEdge.GetBody()\n            \n            If swBody.GetType() = swBodyType_e.swWireBody Then\n                \n                Dim swOffsetBody As SldWorks.Body2\n                Dim swNormVec As SldWorks.MathVector\n                \n                Dim swMathUtils As SldWorks.MathUtility\n                Set swMathUtils = swApp.GetMathUtility\n                \n                Dim dVec(2) As Double\n                dVec(0) = 0: dVec(1) = 0: dVec(2) = 1\n                \n                Set swNormVec = swMathUtils.CreateVector(dVec)\n                \n                Set swOffsetBody = swBody.OffsetPlanarWireBody(0.01, swNormVec, swOffsetPlanarWireBodyOptions_e.swOffsetPlanarWireBodyOptions_GapFillExtend)\n                \n                If swOffsetBody Is Nothing Then\n                    Err.Raise vbError, "", "Failed to create offset body. Make sure that selected edge is on a plane with the normal specified in dVec variable"\n                End If\n                \n                swOffsetBody.Display3 swModel, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone\n                \n                Stop\n                \n                Set swOffsetBody = Nothing\n                \n            Else\n                Err.Raise vbError, "", "Selected edge is not a wire body"\n            End If\n        \n        Else\n            Err.Raise "Edge is not selected"\n        End If\n        \n    Else\n        Err.Raise "Document is not open"\n    End If\n    \nEnd Sub\n')))}w.isMDXComponent=!0},32703:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYcAAAEJCAMAAABIehvkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAMDABF/C/09PEkRHUXSEmeDg4JSWL+ztCnl5BwcOFcHBwX6WtUhSYejoEHd7emtxfP7//77ANGltd1lldWhqcqamppOVUfj8E5To/0+h8h8gJPb397/EQ7W1BO//Rf7+AHp8ZAUFBVxeSEqW4Wzb/7///4yMjNzcAoOhxZ2qcaKjRvf+IdDZRv//phIXHYWIUv7+CtPXKrq6NHmOqHit5nR0dCkpC6OsYK2tCnPT/19fX3F0PrXAXxAQEXF+kHp8OtHSI///X27g/4SkysvLzJ32/3iLpNnaES0uMnWQsXKax/PzBPT6GsnaZRQWF2VyhP//4JueSn+38/P8KevtGMbGK2bP/7K0JHLp/8rMFm53hnV3BgcJDXil1yUlJqWnJ9zqS+TtMODhFs7TM12+/4GewA0SGKv8/3B6i7O0Of7/GqytPoaHNY+Tl6O2hPT0CP7/KrC1SoCbvBAdK33G/3aHn56hUrHEeMHCMISv3///dXuRrXTd/1tdZFuNwcXQVWjU//L2Ff7/EpvZ//7+I+fnAnDk/9feNY6OBeLkG3e6/n+9/oanznOBlXyUsRoaGnmCgO71JLvMbdPTAoyNVmTK/+Xp7v7/MsfIGRkbH4mblGjG/6qusry+OPj4BG10gZGWYnt/aPDxA4Dc/4ap0ejpFOHzVQ4OEaqrJn/A/9HiW/b3Cqrg/9P//3fr/8nKKouNK8XKOKSlSMHJSt3eGZuqgf//tL6+ALe4IOPjDKCnV6+xPYWx4OjwLQoKCwkRGtrkPn6YuP//e4+TYHyBbMTGyfj/QmHG/7H//8PKQpmaLY2OV46QWe/wDK6xJKq8ep2fTbG6WZWaWf//wc/QFOv7Sbq7Hl5iTq6yRcnKMG95iLq/Q6uuKbO1QKysE7q7Ib3APcnLGuzwHo6PMtzhMKmqQbS0CvD/SPP/RufwLpqcMMDGRqOlKBEXH9TYKwAAAP+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///7jjwiAAAADxdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wCpCmekAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAPAElEQVR4Xu2ci38cVRWA13aLVdqQsgbUgk5Sw0NEXDcWLLUhhhJiWwMBti4RqwZawgZNiASrAYxxjaI0+Ehtq7JRBAERUMFHRYsoWihEqyIKooLvF/4LnnPundnZR/LbbHb3nplzv192Z3bS7NycL/feOWfvNLIqCBwZiYacYHiIHtDNDS3B8HCgWzc3tATCwzGhH5aC4aH7dt3a8BIID5HQD0uB8HBi+IelQHjY1qMbG2KC4EFAdwiCh7Utuq1hJgAeNqzWbQ0z/D0cIWFYCoCHMyUMSwHwEP6aBsLeQ/hLrQR7D+EvtRLsPbSIGJbYexBQaiW4e5BQ00C4exBQaiWYe5BQaiWYe7hpn25n2GHuQUp3YO5BRk0D4e1BRKmVYO1BRqmVYO1BSE0DYe1BRqmV4OxBSKmV4OxBwPIxD84ehJRaCcYexNQ0EMYepJRaCcYepJRaCb4eRCwf8+DrQUypleDrQdIszdiDnFIrwdaDnFIrwdWDpJoGwtWDoFIrwdWDoFIrwdSDlOVjHkw9SCq1Ekw9iKppIDw9iCq1Ejw9iCq1Ejw9iOsOPD3IKrUSLD0Iq2kgHD0IWj7mwdGDsFIrwdGDtJoGwtCDtFIrwdCDtFIrwdCDpOVjHvw8iCu1Evw8yKtpIPw8iCu1Euw8yCu1Euw8yFo+5sHOg8zuwM6DwFIrwc2DwFIrwcyDxFIrwcyDyJoGwsyDxFIrwcuDyFIrwcuDuOVjHrw8iCy1Eqw8CK1pIKw8yCy1Eqw8yCy1Epw8SK1pIJw8CC21Epw8yJ2lWXmQuHzMg5EHqaVWgo8HuTUNhI8HsaVWgo8HsaVWgo0HmcvHPNh4kFtqJdh4EFzTQLh4EFxqJbh4EFxqJZh42PPdb+gGCYWHh/Mdx9ENEgoPDx+0HnQkzJKxHnQkzLLZetCRMAtosB7Mc6T1wMJDFD2s0S2SCQsPLehhvW6RTDh4OCaCHq7ULZIJBw/bevB66Q7dIplw8BDp3g8entAtkgkDDydGoneAh726RTJh4OGmfdE14OFc3SKZMPCAnzyAh/2qQUIx7wFXtZ4FHrK6RTIx7wGXjx0CD7ITauMe6E5d8iB6YDLugZaP/Rc9OO9UTRKJcQ+0fOxK8iC5xGTag1rVitetgOCp2rQHvXwMLUBSvZleSMS0B32nLhaY1ix3nFvolUAMe3CXj10MHtajjazQOcKwB3f52JPg4VA0Cj3CeaE6IgzDHtxVrdgfsPCNhVeRBT+zHrw7dTH+NDegkM1n0TFRmPXg3amLHpy/4B6l1vK6hFkP3iJvnBjc9IGcfE/ti8GohzMv0a2Inouxdz+COJSF/aysz0mNeujx7j15jjw4z+mXePnkZJ/UryRg0sNPczeuPxMnD7nFAnvp5X4xF7EmPazcsXKlbsZv0cO/4fE2fUBdOQF7ZaxrMunhtGh0pSYaB6LPQNz/pBsGHKLZG6YNyPDCjkEPn3jVyx8kdjz4/PPooTv6c4i6/+Og9Xtxygaye0PuwqCHJUuWLFu267yX4NjUPTERj1/S0vJ2iPktSw/c3rNvW3c3zeLrL9YqnOzyvYdCW30y6OHgwYNvGQUTu3a1DwykQcSXGhtjr7sLIv7H1T0bDrS0RBQtp3/8JGWC2Lz/iScPXRk2IQY97N69e1NX1+gomGhvBw8TWxpBROw2iPVdjzVproM2dnev7jn9RZ+9RXlQ/B26i3fVGwIMevjK1q2bxtqUifY0irgUPcSOxjjfpj3k0Tx4b/9yPUy9ItdfcBhbHXAtBj28bHz8HVNjbW0kIo0iaGSKxb6MXcLp0MEvQXOv4/SrXegv2F38w1ggvRj0cM74+BtWTI1Rl1iWoQ4xQR5iscP0R98/rWJdAsdp0Hv5uMNY4LwY9HB5a+sFIw9NUZdYtgdEpCfiL9UimhJkYvYKHd9C4Ft6b37m86ICwAST/aG1dd12JaJr9F3g4YdbUAR5iDU17RxCE05/rw5pHllnSO8tDM8Lt+5i0kNn57qTQQSMTW1d385k0v/qS8ddERi03gYy4fQPUgz9DDlZvbco+AxjBj08Mjl57dlaRNfocCZ9Yd/MFkirf+V6aGpam1Sdwsl25HeLWcfRe1XFnBeDHk7QHkawQ3wePGT6+mb+DCJu9jwA0x1ahZNtSHoyoKfovZpS7KVWWgx6OG5yct3ZJ2OHAA+/AA9p8DBzEYi4yOcBaE7ogh8y1NCRHJzur4+HAmrYXQx6WEX9gQYm7eE+8ND4LIhwEvo39wAXbp1J06y/Y5AqejHtQU8QbZ9BD2n00PgwfhZx17f07+pnOtE/69mYO7kwRkkv5Wkx6yHleXg/epj4NHqIxZ7COM96NaZCpnsTMC6VvJ7lBXgpt7sY9nAjeMAJAudpFPFX8hCL0RXr0Nyh7nWc4otZ7sw3jBn1kEp9wJ2ou5SHieN1Qv04XJnCJdLR+lcoZNopnkICR54XHRMTpFKpCzwPe8DDLycm4r93KxuHyYTTUPLvvtlxkno3HJj0cE8q9UmaIEZWjHW9cjhz4cB9E/H4s15C3QyzwFwq5q3HBhCTHs7B/kATBFy4fg099D0KIv7negB2qk7hZHMpnMIrfIcEkx4uV/0BOgR4eCtMEAN9M8erNC6XyDXf616pZm9L5K5V5yp8BxWTHh5Jpe6ECyaaINp+Axeu9z3dN/N9EBH/Q35CndAFPyA72588BXSUW/gOCiY9nJBKXX0jDUzg4R+YQICHxqM+DCJuyPMATCcaCvLpygrfXDHcH65FDyejh5+hh3dTQv16TKjv1Q3005v0yahK4ZsNPDyMTI39kxKIMyihvgYXz2TnShCmH0h04JWUfhkODI9Lk56Hrw5n3gSJnCpsqMpGdqduZAnqVPiuGyY93A0ebiUR4AGul179o/REWhc2Yh1owumYq6pqpvBdO0x6gIT6Wu1hxdh7hzOnDlxIi8nIQwxDDcyWriMlWRS+q4dhD7o/bIeEejgzjMsrfSsFmpJqVl5eQkWCZeG7cgx7SN16I4pAD3uGMwMDuFIg/rDroanpAZ1PD3UURH0wEIXv8mHjAT8JOhUSalwp8DvPA5BwP58eun8wNxQFsvA9D0Y93JNK/YAGpu0PjbXhig3wQCsFbvB5AHz59FBDchC7RigK3z5Me7hAe5hqw6Vkp2IedymIiB8uSKink3qE0kAnCVXh26SHFHi4M+cB17h+CvOHa+KQUJdY8L12sMMvI1SFb4MeIpFIKnU1ejhbefhQOv0alcfdME+cm3sT/Q24XCBUhW9zHiIbN26MqP6gPezKpCc+pvK4w1jZcO7XjSxFyArfxjygBhDh7w+78O4s9wPqnZQ7zL30PmSFb1MeOsEDLliAC9ech/YzII+7ys3jIFUD5ir3Vbrimynm+sMq1R9QA+UP2B/oA+pvag9e6jBbSkWVVnxzwfT8oAvfkE+PLmuHfPo/cM36lOsht/R+KHksvc4BV056LxQY7A90vYQrK6nORx6e7pt5FETkfUCdcK9VZ5N/04eQkBW+DXpY1Xn35GQndAb6XLQLpgf0MHMVpnGP5+XTg7l8evZ+vVggZIVvUx7ovHd3drZu3z5C65dwmsayRmPjTzCN6yjIp3vz8unsUANMHWEqfBvyoE/b2to6MvIQrjPuGtXdAe9lxzQue1i3MMexiX635keEqfBtxoN71tbW8RVTgL874GXrzbhSoPSCb0inOxqylFyEqfBtxIN30vHx8akxvIOaNLjdAaHKRsM8f/EhK3yb8JA757qtW6fa6D520JDrDkDTYzQfzPGpKBCywrcBD75Tbt29e9MoUKQBZ+leMpGdY6lAyFZ819+D/4xfOLhkE/7HPwWDknvReoq6Xp0tuX4mXIVvwx4uu+z689rblYUiDUCzWj4D+XTRVBGuwnfdPeSd8OsfWfm+B1+M7Nhx2j66a2zldQWZg5fEzea7CFfhu94eSp7vcxu/+J6jzox2d+/bcEDdOdbScmBDz2q6m++6pqYrvHw625A8Rc8XIEbthII6eyjvdEccecyJa8HLtpu0l5aWpS/4qFaBDC3vSMKz/h3CQH09VHY2V8vSN56UW+4NZHV3CQN19VCNk/36x2/OYLbtOJuXut2lYBgLIvX0UNVznf/a7+i94mGMvARLSx091O1U6KVIC/PuEkYPBZTuLsy81C84pjQUMZ8XY1rqFh02GorIeTHYXeoVHr4aCjEzjNUpPsHRUER9vNQnQAHWUESRl6poqUuEwqShkCp1l3qEKMwaiqjQi/VQY+bwUqilDjESraEI8lLcXWofJKthPtzuUvMoWQ1lUeswWQ3lUeM4WQ1lUttAWQ3lUtNIWQ1lYz3woJahshrKp4axshoWQO2CZTUshJpFy2pYELUKl9WwMGoUL6thgdQmYFbDQqlJxKyGBWM98KAWIbMaFk4NYmY1VED1g2Y1VELVo2Y1VES1w2Y1VEaV42Y1VEh1A2c1VIr1wIOqRs5qqJhqhs5qqJwqxs5qWATVC57VsBiqFj2rYVFUK3xWw+KoUvyshkVShQBGIhHrYbEsPoD4DlbDYll0BNUbWBGLxBdAukto4VT8g9adD7+H4ypBvUElMbUefCzeA75DRSG1Hnws3gNdL1WC9eCjCh4qxXrwYT3wwHrggfXAA+uBB9YDD6wHHpTtAb5b8h9YD1WhpAeq/uh9l7ks6TfQudxCcjrrwUdpD95Tjvk9uPHH7Jp2ysB68DG/B90tcAM76iv3DdzxxiXa4hM8lA0y4tstpNQxsfiCQWElVKS9fYo5PujL3ehn9w1oi0/wcEOfv1tIiUNy8QVDBReBv3bvhRt1tcVd94jCfQPa4hM89KZgt5ASh+TiC0YuuBhpeqWEqF33Sz3oGOK+AW3xCR56U7BbSIlDcvEFwwttLtrqQd9QW33Ee4at+9PuEzz0pmC3kBKH5OILhhtZHWN4wi1u3If3KvftAg9q5Ybv4X9ZQIlDcvEFQ8UXUQHGSKuJAp/xlTqqjnv/TP0sorb4nHv4XxZQ4pBcfMGgsC6YyqNpPfiwHnhgPfDAeuCB9cAD64EH1gMPrAceWA88sB544A8GFSfqiD6tBbDB4IH1wAPrgQfWAw+sBx5YDzywHnhgPfDAeuCB9cAD64EDq1b9H1E2aHV0QX7EAAAAAElFTkSuQmCC"},83748:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/offset-wire-body-625bacf5c5dc0fee927ac78f34d614ae.png"}}]);