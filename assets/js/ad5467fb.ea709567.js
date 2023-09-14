"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[51280],{3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>S});var o=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var c=o.createContext({}),p=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},l=function(n){var e=p(n.components);return o.createElement(c.Provider,{value:e},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,c=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),d=p(t),m=i,S=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(S,a(a({ref:e},l),{},{components:t})):o.createElement(S,a({ref:e},l))}));function S(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,a=new Array(r);a[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s[d]="string"==typeof n?n:i,a[1]=s;for(var p=2;p<r;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93841:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=t(87462),i=(t(67294),t(3905));const r={title:"Create C++ Stand-Alone (exe) application for SOLIDWORKS",caption:"Create C++ Stand-Alone Application for SOLIDWORKS",description:"Guide for how to connect to SOLIDWORKS application from out-of-process (a.k.a Stand-Alone) application (e.g. MFC, Win32 Console Application) using C++ and Microsoft Visual Studio",sidebar_position:3,image:"proj-templ.png",labels:["c++","CoCreateInstance","create instance","example","getobject","rot","sdk","solidworks api","tlb","type library"],"redirect-from":["/2018/03/create-c-stand-alone-application-for_5.html"]},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-cpp/index",id:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-cpp/index",title:"Create C++ Stand-Alone (exe) application for SOLIDWORKS",description:"Guide for how to connect to SOLIDWORKS application from out-of-process (a.k.a Stand-Alone) application (e.g. MFC, Win32 Console Application) using C++ and Microsoft Visual Studio",source:"@site/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-cpp/index.md",sourceDirName:"codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-cpp",slug:"/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-cpp/",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-cpp/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-cpp/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Create C++ Stand-Alone (exe) application for SOLIDWORKS",caption:"Create C++ Stand-Alone Application for SOLIDWORKS",description:"Guide for how to connect to SOLIDWORKS application from out-of-process (a.k.a Stand-Alone) application (e.g. MFC, Win32 Console Application) using C++ and Microsoft Visual Studio",sidebar_position:3,image:"proj-templ.png",labels:["c++","CoCreateInstance","create instance","example","getobject","rot","sdk","solidworks api","tlb","type library"],"redirect-from":["/2018/03/create-c-stand-alone-application-for_5.html"]},sidebar:"tutorialSidebar",previous:{title:"Create VB.NET Stand-Alone (exe) application for SOLIDWORKS",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/connect-vbnet/"},next:{title:"Starting SOLIDWORKS application in background (hidden)",permalink:"/solidworks-GPT/docs/codestack-clone/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/getting-started/stand-alone/start-background/"}},c={},p=[{value:"Creating new project",id:"creating-new-project",level:2},{value:"Creating or connecting to instance",id:"creating-or-connecting-to-instance",level:2},{value:"Getting the running instance via ROT",id:"getting-the-running-instance-via-rot",level:2}],l={toc:p},d="wrapper";function u(n){let{components:e,...r}=n;return(0,i.kt)(d,(0,o.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial I will demonstrate how to connect to SOLIDWORKS application from out-of-process (a.k.a Stand-Alone) application (e.g. MFC, Win32 Console Application) using C++ and Microsoft Visual Studio."),(0,i.kt)("p",null,"For more detailed explanation of the approaches discussed in this article refer the ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone/"},"Connect To SOLIDWORKS From Stand-Alone Application")," article."),(0,i.kt)("h2",{id:"creating-new-project"},"Creating new project"),(0,i.kt)("p",null,"I will be using Microsoft Visual Studio development environment. You can use any edition of Visual Studio.\nThe same code will work in Professional, Express or Community editions. Follow this link to download ",(0,i.kt)("a",{parentName:"p",href:"https://www.visualstudio.com/vs/community/"},"Visual Studio")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open Visual Studio"),(0,i.kt)("li",{parentName:"ul"},"Start new project:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Creating new project in Visual Studio",src:t(51509).Z,width:"400",height:"202"}),"{ width=400 }"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the project template. I would recommend to start with Win32 Console Application project template as it contains the minimum pregenerated code:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selecting the Win32 Console Application C++ project template",src:t(8828).Z,width:"640",height:"177"}),"{ width=640 }"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check the ATL option in the project wizard")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Win32 Console Application template settings",src:t(29977).Z,width:"640",height:"306"}),"{ width=640 }"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Link directory where SOLIDWORKS type libraries are located.\nThis is an installation directory of SOLIDWORKS (Go to Project Properties, select C/C++ and browse the path in the ",(0,i.kt)("em",{parentName:"li"},"Additional Include Directories")," field):")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Additional Include Directories option in C++ project",src:t(17371).Z,width:"640",height:"275"}),"{ width=640 }"),(0,i.kt)("p",null,"Now we can add the code to connect to SOLIDWORKS instance.  "),(0,i.kt)("h2",{id:"creating-or-connecting-to-instance"},"Creating or connecting to instance"),(0,i.kt)("p",null,"Probably the most common and quick way to connect to COM server is using the ",(0,i.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/windows/desktop/ms686615(v=vs.85).aspx"},"CoCreateInstance")," function.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "stdafx.h"\n#import "sldworks.tlb"\n#include <iostream>\n\nint main()\n{\n    ::CoInitialize(NULL);\n    CComPtr<SldWorks::ISldWorks> pSwApp;\n\n    if (SUCCEEDED(pSwApp.CoCreateInstance(\n        __uuidof(SldWorks::SldWorks), NULL, CLSCTX_LOCAL_SERVER)))\n    {\n        pSwApp->Visible = TRUE;\n        _bstr_t revNmb = pSwApp->RevisionNumber();\n\n        std::cout << revNmb;\n    }\n\n    pSwApp = NULL;\n    ::CoUninitialize();\n\n    //wait for input (do not close console to see results)\n    std::cin.get();\n\n    return 0;\n}\n\n')),(0,i.kt)("h2",{id:"getting-the-running-instance-via-rot"},"Getting the running instance via ROT"),(0,i.kt)("p",null,"In order to connect to already running specific session of SOLIDWORKS or to be able to create multiple sessions you can use Running Object Table APIs.\nPlease read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/getting-started/stand-alone#method-b---running-object-table-rot"},"Connect To SOLIDWORKS From Stand-Alone Application")," article for more details about this approach."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "stdafx.h"\n#import "sldworks.tlb"\n#include <iostream>\n#include <windows.h>\n#include <string>\n#include <chrono>\n#include <thread>\n\nHRESULT StartSwProcess(LPCWSTR appPath, int& prcId)\n{\n    prcId = -1;\n\n    STARTUPINFO si;\n    PROCESS_INFORMATION pi;\n\n    ZeroMemory(&si, sizeof(si));\n\n    HRESULT res = E_FAIL;\n    \n    if(CreateProcess(L"C:\\\\Program Files\\\\SOLIDWORKS Corp\\\\SOLIDWORKS\\\\SLDWORKS.exe",\n        L"", NULL, NULL, FALSE, 0,\n        NULL, NULL, &si, &pi))\n    {\n        CloseHandle(pi.hProcess);\n        CloseHandle(pi.hThread);\n\n        prcId = pi.dwProcessId;\n\n        res = S_OK;\n    }\n    \n    return res;\n}\n\nHRESULT GetSwAppFromProcess(int prcId, SldWorks::ISldWorks** pSwApp)\n{\n    HRESULT res = E_FAIL;\n\n    CComPtr<IRunningObjectTable> pRot;\n    CComPtr<IBindCtx> pBindingContext;\n\n    if (SUCCEEDED(CreateBindCtx(0, &pBindingContext)))\n    {\n        if (GetRunningObjectTable(0, &pRot) == S_OK)\n        {\n            CComPtr<IEnumMoniker> pEnumMoniker;\n            if (SUCCEEDED(pRot->EnumRunning(&pEnumMoniker)))\n            {\n                WCHAR szMonikerName[30];\n                swprintf_s(szMonikerName, 30, L"SolidWorks_PID_%d", prcId);\n\n                ULONG fetched;\n                CComPtr<IMoniker> pMon;\n\n                while (pEnumMoniker->Next(1, &pMon, &fetched) == S_OK)\n                {\n                    LPOLESTR pName;\n                    pMon->GetDisplayName(pBindingContext, NULL, &pName);\n\n                    if (wcscmp(pName, szMonikerName) == 0)\n                    {\n                        CComPtr<IUnknown> pUnk;\n\n                        if (SUCCEEDED(pRot->GetObjectW(pMon, &pUnk)))\n                        {\n                            if (SUCCEEDED(pUnk->QueryInterface(_uuidof(SldWorks::ISldWorks), (void**)pSwApp)))\n                            {    \n                                res = S_OK;\n                                break;\n                            }\n                        }\n                    }\n\n                    pMon = NULL;\n                }\n            }\n        }\n    }\n\n    pRot = NULL;\n    pBindingContext = NULL;\n\n    return res;\n}\n\nHRESULT ConnectToSwApp(LPCWSTR appPath, SldWorks::ISldWorks** pSwApp, int timeoutSec) \n{\n    HRESULT res = E_FAIL;\n\n    int prcId;\n\n    if (SUCCEEDED(StartSwProcess(appPath, prcId)))\n    {\n        auto start = std::chrono::high_resolution_clock::now();\n        \n        while (FAILED(GetSwAppFromProcess(prcId, pSwApp)))\n        {\n            std::this_thread::sleep_for(std::chrono::milliseconds(200));\n            auto end = std::chrono::high_resolution_clock::now();\n            std::chrono::duration<double, std::milli> elapsed = end - start;\n\n            if (elapsed.count() > timeoutSec * 1000)\n            {\n                throw std::runtime_error("Timeout");\n            }\n        }\n\n        res = S_OK;\n    }\n\n    return res;\n}\n\nint main()\n{\n    ::CoInitialize(NULL);\n    \n    CComPtr<SldWorks::ISldWorks> pSwApp;\n\n    try \n    {\n        if (SUCCEEDED(ConnectToSwApp(L"C:\\\\Program Files\\\\SOLIDWORKS Corp\\\\SOLIDWORKS (2)\\\\SLDWORKS.exe", \n            &pSwApp, 10))) \n        {\n            _bstr_t revNmb = pSwApp->RevisionNumber();\n            std::cout << revNmb;\n        }\n    }\n    catch (std::runtime_error& e) \n    {\n        std::cout << e.what() << std::endl;\n    }\n\n    pSwApp = NULL;\n    \n    ::CoUninitialize();\n\n    //wait for input (do not close console to see results)\n    std::cin.get();\n    \n    return 0;\n}\n\n\n')),(0,i.kt)("p",null,"In the above example new session of SOLIDWORKS is launched by starting new process from SOLIDWORKS application installation path.\n",(0,i.kt)("em",{parentName:"p"},"ConnectToSwApp")," function requires the full path to ",(0,i.kt)("strong",{parentName:"p"},"sldworks.exe")," as first parameter and timeout in seconds as second parameter.\nTimeout will ensure that the application won't be locked in case process failed to start."))}u.isMDXComponent=!0},17371:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/add-incl-dir-e9479a9b5b63f49a2f2cc16889f65808.png"},29977:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/apps-settings-e4daab765863708744c34c67066f0581.png"},51509:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/new-project-8c3c8b93d341720c31dcd2d84cf8afdf.png"},8828:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/proj-templ-544807e6cd44bd0eb9b33628a6fcee8e.png"}}]);