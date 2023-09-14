"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[95553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>A});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,A=d["".concat(l,".").concat(u)]||d[u]||p[u]||a;return n?r.createElement(A,i(i({ref:t},m),{},{components:n})):r.createElement(A,i({ref:t},m))}));function A(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Connect to SOLIDWORKS Document Manager Application from API",caption:"Connect To Document Manager Application",description:"Detailed instructions for initializing the connection to SOLIDWORKS Document Manager library",image:"dm-functionality.png",labels:["dm key","document manager","getting started","license"]},i=void 0,s={unversionedId:"codestack-clone/solidworks-document-manager-api/getting-started/create-connection/index",id:"codestack-clone/solidworks-document-manager-api/getting-started/create-connection/index",title:"Connect to SOLIDWORKS Document Manager Application from API",description:"Detailed instructions for initializing the connection to SOLIDWORKS Document Manager library",source:"@site/docs/codestack-clone/solidworks-document-manager-api/getting-started/create-connection/index.md",sourceDirName:"codestack-clone/solidworks-document-manager-api/getting-started/create-connection",slug:"/codestack-clone/solidworks-document-manager-api/getting-started/create-connection/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-document-manager-api/getting-started/create-connection/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-document-manager-api/getting-started/create-connection/index.md",tags:[],version:"current",frontMatter:{title:"Connect to SOLIDWORKS Document Manager Application from API",caption:"Connect To Document Manager Application",description:"Detailed instructions for initializing the connection to SOLIDWORKS Document Manager library",image:"dm-functionality.png",labels:["dm key","document manager","getting started","license"]},sidebar:"tutorialSidebar",previous:{title:"Getting Started with SOLIDWORKS Document Manager API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-document-manager-api/getting-started/"},next:{title:"document",permalink:"/solidworks-GPT/zh-Hans/docs/category/document-1"}},l={},c=[{value:"Activating Document Manager",id:"activating-document-manager",level:2},{value:"Registering Document Manager",id:"registering-document-manager",level:2},{value:"Notes",id:"notes",level:2},{value:"Code Examples",id:"code-examples",level:2},{value:"VBA",id:"vba",level:3},{value:"C#",id:"c",level:3},{value:"VB.NET",id:"vbnet",level:3},{value:"C++",id:"c-1",level:3},{value:"References",id:"references",level:2}],m={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"activating-document-manager"},"Activating Document Manager"),(0,o.kt)("p",null,"Document manager requires the developer license which can be requested via ",(0,o.kt)("a",{parentName:"p",href:"https://customerportal.solidworks.com/"},"SOLIDWORKS customer portal"),"  "),(0,o.kt)("p",null,"Follow the steps below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login to customer portal"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("em",{parentName:"li"},"API Support")," link under ",(0,o.kt)("em",{parentName:"li"},"My Support")," section")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Customer Portal Dashboard",src:n(7951).Z,width:"1000",height:"509"}),"{ width=400 height=207 }"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("em",{parentName:"li"},"Document Manager Key Request")," link")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Document Manager Key Request link",src:n(52209).Z,width:"320",height:"196"}),"{ width=400 height=243 }"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the option either to resend existing key or generate new one")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Options for Document Manager Key",src:n(18371).Z,width:"320",height:"95"}),"{ width=320 height=95 }"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fill the request form and select the functionality required for your software (refer ",(0,o.kt)("a",{parentName:"li",href:"/docs/codestack/solidworks-document-manager-api/#supported-functionality"},"Supported Functionality")," section to select the right functions)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Document Manager supported functionality",src:n(45659).Z,width:"320",height:"246"}),"{ width=320 height=246 }"),(0,o.kt)("p",null,"It usually takes several business days for key to be generated. Once generated it will be sent via e-mail.\nThe key is generated in the following format:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"CompanyName"),":swdocmgr_general-00000-{31 times},swdocmgr_previews-00000-{31 times},swdocmgr_dimxpert-00000-{31 times},swdocmgr_geometry-00000-{31 times},swdocmgr_xml-00000-{31 times},swdocmgr_tessellation-00000-{31 times}  ")),(0,o.kt)("p",null,"Exception below will be thrown if API is called which doesn't belong to a group for which licenses were generated.  "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Class is not licensed for use (Exception from HRESULT: 0x80040112)")),(0,o.kt)("h2",{id:"registering-document-manager"},"Registering Document Manager"),(0,o.kt)("p",null,"Document Manager is automatically registered with the following applications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SOLIDWORKS"),(0,o.kt)("li",{parentName:"ul"},"eDrawings"),(0,o.kt)("li",{parentName:"ul"},"SOLIDWORKS Files Explorer"),(0,o.kt)("li",{parentName:"ul"},"SOLIDWORKS PDM"),(0,o.kt)("li",{parentName:"ul"},"SOLIDWORKS Document Manager SDK")),(0,o.kt)("p",null,"To manually register the Document Manager run ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Regsvr32"},"regsvr32")," utility and pass the path to ",(0,o.kt)("em",{parentName:"p"},"swdocumentmanager.dll")," (usually installed to ",(0,o.kt)("em",{parentName:"p"},"C:\\Program Files\\Common Files\\SOLIDWORKS Shared\\swdocumentmgr.dll")," with Document Manager SDK)."),(0,o.kt)("p",null,"Run Windows Command line with administrative right with the following command"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'regsvr32 "C:\\Program Files\\Common Files\\SOLIDWORKS Shared\\swdocumentmgr.dll"')),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Document Manager key ",(0,o.kt)("em",{parentName:"li"},"must not")," be shared outside of the organization"),(0,o.kt)("li",{parentName:"ul"},"Software developed using Document Manager key can only be redistributed in the binary format",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"That means that the customers of your software do not need to get the license key from SOLIDWORKS",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"That also means that this key cannot be used in VBA macros outside of the organization, but can be used in VSTA macros (if source code is not redistributed)"))),(0,o.kt)("li",{parentName:"ul"},"Document Manager is backward compatible until the SOLIDWORKS 2015 but it is not forward compatible.\nFor example it is possible to read/write legacy data with newer version of Document Manager key for SOLIDWORKS 2015 onwards."),(0,o.kt)("li",{parentName:"ul"},"Document Manager key generated before SOLIDWORKS 2015 is both backward and forward compatible with older versions of SOLIDWORKS"),(0,o.kt)("li",{parentName:"ul"},"Document Manager license key should be updated with every new release of SOLIDWORKS to support newer versions"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Important for .NET developers:")," the ",(0,o.kt)("em",{parentName:"li"},"swDocumentManager.dll")," is not the same as ",(0,o.kt)("em",{parentName:"li"},"SolidWorks.Interop.SwDocumentMgr.dll")," which is added as the reference to the project.\nThe later one doesn't contain any implementation - this is just an interop to access COM objects implemented in ",(0,o.kt)("em",{parentName:"li"},"swDocumentManager.dll"))),(0,o.kt)("h2",{id:"code-examples"},"Code Examples"),(0,o.kt)("h3",{id:"vba"},"VBA"),(0,o.kt)("p",null,"Add the reference to swdocumentmgr.dll. The dll can be usually found at C:\\Program Files\\Common Files\\SOLIDWORKS Shared. Document manager license key might be too long so VBA editor will not be able to compile the macro. Refer the ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/troubleshooting/macros/too-long-vba-macro-line/"},"Too Long VBA Macro Line")," troubleshooting article for the solution of this issue."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Const SW_DM_KEY As String = "[CompanyName]:swdocmgr_general-00000-{31 times},swdocmgr_previews-00000-{31 times},swdocmgr_dimxpert-00000-{31 times},swdocmgr_geometry-00000-{31 times},swdocmgr_xml-00000-{31 times},swdocmgr_tessellation-00000-{31 times}"\n\nDim swDmClassFactory As SwDocumentMgr.swDmClassFactory\nDim swDmApp As SwDocumentMgr.SwDMApplication\n\nSub main()\n\n    Set swDmClassFactory = CreateObject("SwDocumentMgr.SwDMClassFactory")\n    \n    If Not swDmClassFactory Is Nothing Then\n        Set swDmApp = swDmClassFactory.GetApplication(SW_DM_KEY)\n        Debug.Print swDmApp.GetLatestSupportedFileVersion()\n    Else\n        MsgBox "Document Manager SDK is not installed"\n    End If\n    \nEnd Sub\n')),(0,o.kt)("h3",{id:"c"},"C#"),(0,o.kt)("p",null,"Add the reference to SolidWorks.Interop.swdocumentmgr.dll. The dll can be usually found at C:\\Program Files\\Common Files\\SOLIDWORKS Shared.\nUncheck the Embed Interop Types option in the reference properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.swdocumentmgr;\nusing System;\n\nnamespace CodeStack\n{\n    class Program\n    {\n        const string SW_DM_KEY = "[CompanyName]:swdocmgr_general-00000-{31 times},swdocmgr_previews-00000-{31 times},swdocmgr_dimxpert-00000-{31 times},swdocmgr_geometry-00000-{31 times},swdocmgr_xml-00000-{31 times},swdocmgr_tessellation-00000-{31 times}";\n\n        static void Main(string[] args)\n        {\n            SwDMClassFactory classFactory = Activator.CreateInstance(\n                Type.GetTypeFromProgID("SwDocumentMgr.SwDMClassFactory")) as SwDMClassFactory;\n\n            if (classFactory != null)\n            {\n                SwDMApplication dmApp = classFactory.GetApplication(SW_DM_KEY);\n                Console.WriteLine(dmApp.GetLatestSupportedFileVersion());\n            }\n            else\n            {\n                throw new NullReferenceException("Document Manager SDK is not installed");\n            }\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"vbnet"},"VB.NET"),(0,o.kt)("p",null,"Add the reference to SolidWorks.Interop.swdocumentmgr.dll. The dll can be usually found at C:\\Program Files\\Common Files\\SOLIDWORKS Shared.\nUncheck the Embed Interop Types option in the reference properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},'Imports SolidWorks.Interop.swdocumentmgr\nImports System\n\nModule CodeStack\n\n    Const SW_DM_KEY As String = "[CompanyName]:swdocmgr_general-00000-{31 times},swdocmgr_previews-00000-{31 times},swdocmgr_dimxpert-00000-{31 times},swdocmgr_geometry-00000-{31 times},swdocmgr_xml-00000-{31 times},swdocmgr_tessellation-00000-{31 times}"\n\n    Sub Main(ByVal args As String())\n\n        Dim classFactory As SwDMClassFactory =\n            TryCast(Activator.CreateInstance(Type.GetTypeFromProgID("SwDocumentMgr.SwDMClassFactory")), SwDMClassFactory)\n\n        If classFactory IsNot Nothing Then\n            Dim dmApp As SwDMApplication = classFactory.GetApplication(SW_DM_KEY)\n            Console.WriteLine(dmApp.GetLatestSupportedFileVersion())\n        Else\n            Throw New NullReferenceException("Document Manager SDK is not installed")\n        End If\n\n    End Sub\n\nEnd Module\n')),(0,o.kt)("h3",{id:"c-1"},"C++"),(0,o.kt)("p",null,"Add the path to swdocumentmgr.dll (usually C:\\Program Files\\Common Files\\SOLIDWORKS Shared) into the Project Properties->C/C++->General->Additional Include Directories"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "stdafx.h"\n#import "SwDocumentMgr.dll" raw_interfaces_only\n#include <iostream>\n\n#define SW_DM_KEY L"[CompanyName]:swdocmgr_general-00000-{31 times},swdocmgr_previews-00000-{31 times},swdocmgr_dimxpert-00000-{31 times},swdocmgr_geometry-00000-{31 times},swdocmgr_xml-00000-{31 times},swdocmgr_tessellation-00000-{31 times}"\n\nint main()\n{\n    CoInitialize(NULL);\n\n    CComPtr pClassFactory;\n\n    if (SUCCEEDED(pClassFactory.CoCreateInstance(\n        __uuidof(SwDocumentMgr::SwDMClassFactory), NULL, CLSCTX_INPROC_SERVER)))\n    {\n        CComPtr pDmApp;\n\n        if (SUCCEEDED(pClassFactory->GetApplication(SW_DM_KEY, &pDmApp)))\n        {\n            long latestVers;\n\n            HRESULT r = pDmApp->GetLatestSupportedFileVersion(&latestVers);\n\n            if (SUCCEEDED(r))\n            {\n                std::cout << latestVers;\n            }\n            else\n            {\n                std::cout << "Failed to get version";\n            }\n        }\n\n        pDmApp = NULL;\n        pClassFactory = NULL;\n        ::CoUninitialize();\n    }\n    else\n    {\n        std::cout << "Document Manager SDK is not installed";\n    }\n    \n    std::cin.get();\n\n    return 0;\n}\n')),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Online ",(0,o.kt)("a",{parentName:"li",href:"https://help.solidworks.com/2017/English/api/SWHelp_List.html?id=69d4ac3ff991425e980510fe49f75719#Pg0&ProductType=&ProductName="},"Document Manager API Help Documentation"))))}p.isMDXComponent=!0},7951:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/custom-portal-dashboard-3b5a36f7ee3d230aa5b7313f785ed24a.png"},45659:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dm-functionality-4af1107d702586b7c9f1cd3f8bafec89.png"},18371:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAABfCAMAAACuue5iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAImy1dHr9gAhtv7+/nyAfkg+NrjKqW+NqoFXEd7LsThPd8ezmS0IBpKBvj1RvQA6YtXM3vHozR0KG7u6vKLM7oKbs+rs9JeQjAAAO7KztDOD05J7YWU4AO7u7r7J5SIcHJSswdrh6rq41AFsy09IW6Ky2+rYtbnW6G9svGqg3WF1i11LQVJnwYl3vKuqqv336z4rILWYfV0iAOvj26O54YFlSitReVKH0fPs6LrW8khJStbQy+vw7ebR3QsAXZq2zN+50V5cYvPu8cG1r8HAviJsxyIKVuXp60FHWOzp4paTx4mh1TFvxzIwMa21z2yBmbGllbzL26+TZjobAEZxlczV5NPa63yNy7GnzGuP0XxuYlg8L1yb3Dw8ScO20uPb1JO+6PL2+1F2xhdbwQYLJCcANCwsKzpmi+Lk6wJil3BYQrm+yjQySK7E1+TOuePy+2CCotzb3Ky84QAcVS4+bXiowP3s3EZxxZak0sPL5bfQ4dfDsMGhf3Wr3XpaNKWayEQCAtPDncPb80KV4dTk9Nvp9E1VdcTT5Lqpy0IjL8jE3qu33OPb5m99xXyw5MzQ1oCQnnp+wyGH1kZDQ+HI1svDwaiIv5mLduXayuzx9kFVb2F1w/v28gBTwmCCy5+fn5BwVmpzdKKq1lFOTZiy3gUhNYaKiXBFLSlLb8rKyms6II9tSYiOyYaq38zY6wAraGlYUObl5Ux7ytHW3UUvCaW+1kVmwXid2Jmczrm93VJshcXO53mZxiYwRfj30a7D5uPr9Iuz409fecPZ55u95UcXF1dEOuzm6uzgyOzf0z40NtG5na/M7drt+ujWxCMkKCdfwdnMwIaFxL7AxNTU1F5ovnBnW45pOaHC6QB808nh9PTs4qyu1czI4VyM06GAXYmov/f390SBz9zj8cW8uEx9pLG33KqQdbWchE9XZsPK1fLS3QBDvZm62jUAO5er2dPF18ixzcrT61Q7VHGHnlNPUpONxce818Sqjuv2+8TFxtvU5Ii86Nne5QAAAJMIBZwAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAO1klEQVR4Xu2dD1wT1x3ArfvNOWdtwWDqnwarbVQUTSdxBNG6oTYC4n8RrIJHO8s6a0zaiUopSkGRP/4p2oo5qQXqmirU0ypEWglqG9BQC2JLwaknFNHpQFbUgH72e3dXwS3Q6anDed8P3r1/9+7le+/dexcS7KSQEIUkUCSSQJFIAkWCAlmQuDtYXqAQk7hzpB4oEkmgSCSBIpEEikQSKBJJoEgkgSKRBIpEEigSSaBIJIEicSTQowzRChHxVJaFkx1dtpeL3hW1rwuBDocjgbVfNDZmpEytEqJ3hfPqOCEEq54/YMdd5PO/ofiEu+C7x4TAvUE1d7oQEo1DgbPCraHVTx8qFuJ3g/MLLQKfGzYYd2caD929wJ33WODu+yrwtz+QrWr7LNxqNsuaLCRaiQEtVMowSFfHgWpCuLfshAVwww12jwmy9ejH4wTlLbtIgWra/D6yJl7YqkO/Ggqw+MA07IG09wTZiQGY6L0ea16PAdpbRupBPDChZDYGKifImrDPqmSpobKLJIcXSFeTV40nvAkQ+mdSd+gJ/gz0eF0RKemLB3IpWEgvs4MvyVfJSO2h2D6Sg3t8PZGNGybI5CQumrYFQrfeOqicO7+xy6FYgMLdKY1dVusG9cZXVjlyMCzt8m1GxtGhT41uPHpAh+Nz2OiMlF64P/rLjIyAXuA8bHTj6KFk5BKBvrsPw/lx3VFgYZfRjSmTDuM5ts7NSFmEd7ZuXUZn8GcYltLY+NlZgC3fzs/oMlUHB3vu2J0ylauCE1i7OhDgfErG6EnTobAT1gHfLeFzK0duwJLU4t0pGUe72oG+HjC6MaN3Zyj5GAfR0qPo/Ri2b/4z/D5lyZjtmD8pmz9YJO0IdF4ZAzMOxELl9iWUatQS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"},52209:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADECAMAAADZGAjiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQwAALvR2i0+Xdnx+6GoqY1zXiwmPLPDy8vh6O9vcHJ9h/7+/rmqme0vMY2Am+vi0+0pK9vQvMzCsFtYX7OxsjV8raWakoqqyejn6Pv02tjW2arH0bnS58vk9FtvhwAGim+JrZCTq8vHxJGJgPTw6+sAALK4w6OvwsKrl/re3qSho/zs7LvD0uPg0DBZlsnU4vH3+vaRXGF7ntPQyqmLaGBCNMO5sm2SuvPz8tnU0unl4f339Jipt87Cz/aSPHhoX52Wk9vm8sSyo8PAuo+ivaK50uHk6WxsjbehksvCu7Oqptrc4U6Asoyz1YmAfbzJ2auss4OGk+3w6qHF3u/u7kBYe/eHALS3u6SKh9HT2dvg5NPKwquko+PYyrq8xNLX4MzR0o6FoQRWmO0FEZubrens8Pbj0cLDy4Cau7yyo6G0y2Flb3pZN823o32Lq+Dn7/Hr41uSvnFtcYt5buLZ0uLd2bLF2sPS4dLHu+Pi4/v16+3t7bigi+z2/DlzqKyimlNFP5uQopqrwbOyu8rR2lVmmqSqs7zBwoB8f9vj68PJ06OjqtPT0pyPhu/Su5CRk399ntXBr+mriMPM2sjGyJSdqURKYMq9tZiz0dLM0cO8xNLLzK2jrLO8yrHK4nVzlevj26uwutPl8qu4ytff1X2ixtPd6cu6rMTCwuTy+ZqjukNhltvLvLu4tb28q3KCocvZ5oCOoIOTsKaCX+De4Kq91aqyw/Ln29va2qabmfj395CSnD81SJiuyrqzsH1zbqupq7zCy2xxfMXY6cizm9vTyZukr+Xo61Zzndrq+bqspI+LipCfs7Okm+zp5F1/rAB0saWWiaKsu4GEio2XouTg3Lmxq6KktcTR2KqQe+nd1Ovx9LjM4dTi69jIsOHt9+zbxsK0q5aAcdTY3LTC0rvb58vY28nM1Njf6Zyeo9zs72dRSY1tSJa52dTb426bwu/v8MPIzP3z47y7u+Xq5MO8ucvLy9Lo/LzJ0uTr8bmlntzY1JWFffjs4pqXmgAAAMZ4tnkAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAfdElEQVR4Xu2dD1wT157o19quvv7Y69XmYqTaZzGLLqWXeWWXDhm7gkoqpBWs9HET/sjtM6K4StqGf0lzuZUUTMCrPrCKFpvIyh+v2OjyJ4yFhmJI/RcfVtASUGlSgXab8qempFQ/70yIgLZUcPxHna+YOZOcc+bMd86cOZOcmfkHYKAFI5AmjECaMAJpMiwwyosEkOr1ehtwQsMjMeebBr0+3uwM/QqcwbiPJkMCpYveVwKseUxT+00Cse6xWGQTYPF6Vu28uc7Pf4V3gl2BR5EhgdPnHqtBAj8DiHkdel93vif9j+PoFQcJH1XQr8HTuCRSDtI6E0uB3laz6lCMHg7L/vZhls0Z/1FkSOCXk9TrBwUWfwazXndWQPjisMCIJssKAf7rK3jifU3j6zDrH54s+6YGDj7G+vIFqPrrp5F5jEBE76el8KUW1vzjW299qhwSCKc3v/WpLywoAPjXr+BLVPH+e86sZ+TQ8hi87QvwH9qqJ+UACyoGIz+S3BB48OOTW/+6Cda8LtChQ8KQQAAy5LEhgaie/evsWc9gIP5Y+gnau/8rrOpJFNuNEYhcWMt1hvexNZ85zbnaQE4J0iN5HxYsBXgCCfQFzr9dogRe/Du8bQXi39qcAhckwJDvRw6XwN73KQX/PXvN36kuiXjexzuoqfSJ9SdPrp8EVR+f3PxXJPDTrYtOwax//PzkU1qIeeokmnHuwgefOmmlMnkkcQm8top6VSsJATUl9tidU4Aku50yybWbk1Ab2WNHO/GsZwR2qmvIoeIQlsFYt+0r/ma5sQuPhSecx9pZr1NKGVyMR2CAs54NVlIGF+MRyPAL3BOBj9Ix+YZANSu81BUcicE1deEmcgV+lWWHXQEgFDA9xRVGc6hX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"}}]);