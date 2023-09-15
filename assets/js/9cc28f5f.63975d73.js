"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[37255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},16930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const o={title:"Installing SOLIDWORKS add-in by manual registration",caption:"Manual",description:"Article explains how to deploy and register SOLIDWORKS add-in manually",image:"types-registered-successfully.png",labels:["deployment","setup","installer"]},a=void 0,s={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/manual/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/manual/index",title:"Installing SOLIDWORKS add-in by manual registration",description:"Article explains how to deploy and register SOLIDWORKS add-in manually",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/manual/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/manual",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/manual/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/manual/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/manual/index.md",tags:[],version:"current",frontMatter:{title:"Installing SOLIDWORKS add-in by manual registration",caption:"Manual",description:"Article explains how to deploy and register SOLIDWORKS add-in manually",image:"types-registered-successfully.png",labels:["deployment","setup","installer"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS macro to break, lock or unlock all external references for files and components",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/manage-external-references/"},next:{title:"Macro to merge sketches using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/merge-sketches/"}},l={},d=[{value:"Deploying binaries",id:"deploying-binaries",level:3},{value:"Registering add-in",id:"registering-add-in",level:3},{value:"Adding the registry information",id:"adding-the-registry-information",level:3},{value:"Unregistering the add-in",id:"unregistering-the-add-in",level:3},{value:"Best practices",id:"best-practices",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article explains how to deploy and register SOLIDWORKS add-in manually."),(0,r.kt)("h3",{id:"deploying-binaries"},"Deploying binaries"),(0,r.kt)("p",null,"Once project is successfully compiled all required binaries and data files are placed into the output folder."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Folder with binary output",src:n(45249).Z,width:"776",height:"453"}),"{ width=350 }"),(0,r.kt)("p",null,"When deploying the product (add-in or stand-alone application) all files must be deployed (including any 3rd party dlls or interops). You may exclude any supporting files such as pdb-files or xml documentation files."),(0,r.kt)("h3",{id:"registering-add-in"},"Registering add-in"),(0,r.kt)("p",null,"Copying the files to the user machine is not enough to register it on the target system. It is also required to register add-in COM object and add corresponding entries to the registry."),(0,r.kt)("p",null,"To register .NET add-in (C# or VB.NET) it is required to call the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/tools/regasm-exe-assembly-registration-tool"},"Assembly Registration Tool (regasm)")," with /codebase option"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"%Windir%\\Microsoft.NET\\Framework64\\v4.0.30319\\regasm" /codebase "PATH TO ADDIN DLL"')),(0,r.kt)("p",null,"Message similar to the following should be displayed if the registration successful:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Successful registration of COM types",src:n(91111).Z,width:"1113",height:"649"}),"{ width=500 }"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It is required to use the correct version of the framework depending on the target framework add-in was compiled to.")),(0,r.kt)("p",null,"To register COM add-in (C++) it is required to call the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/regsvr32"},"regsvr32")," utility."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Registration usually requires running the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cmd.exe"},"Command Prompt")," as an administrator.")),(0,r.kt)("p",null,"It is not required to register COM objects for stand-alone application unless it explicitly requires this."),(0,r.kt)("h3",{id:"adding-the-registry-information"},"Adding the registry information"),(0,r.kt)("p",null,"Information about the add-in needs to be added to the registry so SOLIDWORKS can correctly load the add-in. It is possible to create a registry file which will be adding this information to the registry."),(0,r.kt)("p",null,"The keys added to HKEY_LOCAL_MACHINE are mandatory and identify the add-in to be available in the add-ins list. The keys added to HKEY_CURRENT_USER are optional and represent the start-up state of the add-in. Set value to 1 to load add-in at start-up, set to 0 to not load on start-up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-reg"},'Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\SolidWorks\\Addins\\{a377433e-f7cf-4a5a-9d74-b64c0c1758c2}]\n@=dword:00000001\n"Description"="Sample add-in description"\n"Title"="Sample add-in"\n\n[HKEY_CURRENT_USER\\Software\\SolidWorks\\AddInsStartup\\{a377433e-f7cf-4a5a-9d74-b64c0c1758c2}]\n@=dword:00000001\n')),(0,r.kt)("p",null,"The GUID used in the example above is an add-in guid set via ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.guidattribute?view=netframework-4.0"},"GuidAttribute")," at the add-in class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[Guid("a377433e-f7cf-4a5a-9d74-b64c0c1758c2"), ComVisible(true)]\n[SwAddin(Description = "Sample Addin", Title = "Sample AddIn Description", LoadAtStartup = true)]    \npublic class MyAddIn : ISwAddin\n{\n    ...\n}\n')),(0,r.kt)("p",null,"As an alternative option required registry keys can be added directly from the dll when it is registered as a COM object via ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.comregisterfunctionattribute?view=netframework-4.0"},"ComRegisterFunctionAttribute"),". In this case the above step is not required:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'#region SolidWorks Registration\n\n[ComRegisterFunction]\npublic static void RegisterFunction(Type t)\n{\n    try\n    {\n        var att = t.GetCustomAttributes(false).OfType<SwAddinAttribute>().FirstOrDefault();\n\n        if (att == null)\n        {\n            throw new NullReferenceException($"{typeof(SwAddinAttribute).FullName} is not set on {t.GetType().FullName}");\n        }\n\n        Microsoft.Win32.RegistryKey hklm = Microsoft.Win32.Registry.LocalMachine;\n        Microsoft.Win32.RegistryKey hkcu = Microsoft.Win32.Registry.CurrentUser;\n\n        string keyname = "SOFTWARE\\\\SolidWorks\\\\Addins\\\\{" + t.GUID.ToString() + "}";\n        Microsoft.Win32.RegistryKey addinkey = hklm.CreateSubKey(keyname);\n        addinkey.SetValue(null, 0);\n\n        addinkey.SetValue("Description", att.Description);\n        addinkey.SetValue("Title", att.Title);\n\n        keyname = "Software\\\\SolidWorks\\\\AddInsStartup\\\\{" + t.GUID.ToString() + "}";\n        addinkey = hkcu.CreateSubKey(keyname);\n        addinkey.SetValue(null, Convert.ToInt32(att.LoadAtStartup), Microsoft.Win32.RegistryValueKind.DWord);\n    }\n    catch (Exception ex)\n    {\n        Console.WriteLine("Error while registering the addin: " + ex.Message);\n    }\n}\n\n[ComUnregisterFunction]\npublic static void UnregisterFunction(Type t)\n{\n    try\n    {\n        Microsoft.Win32.RegistryKey hklm = Microsoft.Win32.Registry.LocalMachine;\n        Microsoft.Win32.RegistryKey hkcu = Microsoft.Win32.Registry.CurrentUser;\n\n        string keyname = "SOFTWARE\\\\SolidWorks\\\\Addins\\\\{" + t.GUID.ToString() + "}";\n        hklm.DeleteSubKey(keyname);\n\n        keyname = "Software\\\\SolidWorks\\\\AddInsStartup\\\\{" + t.GUID.ToString() + "}";\n        hkcu.DeleteSubKey(keyname);\n    }\n    catch (Exception e)\n    {\n        Console.WriteLine("Error while unregistering the addin: " + e.Message);\n    }\n}\n\n#endregion\n')),(0,r.kt)("h3",{id:"unregistering-the-add-in"},"Unregistering the add-in"),(0,r.kt)("p",null,"To unregister the .NET add-in it is required to call the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/framework/tools/regasm-exe-assembly-registration-tool"},"Assembly Registration Tool (regasm)")," with /u option"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"%Windir%\\Microsoft.NET\\Framework64\\v4.0.30319\\regasm" /u /codebase "PATH TO ADDIN DLL"')),(0,r.kt)("p",null,"When add-in is unregistered the following message is displayed in the console:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Successful unregistration of COM types",src:n(1062).Z,width:"1104",height:"220"}),"{ width=500 }"),(0,r.kt)("p",null,"To unregister the COM add-in it is required to call the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/regsvr32"},"regsvr32")," utility with /u flag."),(0,r.kt)("p",null,"To clear the registry values (unless it is done via the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.runtime.interopservices.comunregisterfunctionattribute?view=netframework-4.0"},"ComUnregisterFunctionAttribute"),") call the following registry file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-reg"},'Windows Registry Editor Version 5.00\n\n[-HKEY_LOCAL_MACHINE\\SOFTWARE\\SolidWorks\\Addins\\{a377433e-f7cf-4a5a-9d74-b64c0c1758c2}]\n@=dword:00000001\n"Description"="Sample add-in description"\n"Title"="Sample add-in"\n\n[-HKEY_CURRENT_USER\\Software\\SolidWorks\\AddInsStartup\\{a377433e-f7cf-4a5a-9d74-b64c0c1758c2}]\n@=dword:00000001\n')),(0,r.kt)("h3",{id:"best-practices"},"Best practices"),(0,r.kt)("p",null,"Registration and unregistration commands can be placed into a single bat file to simplify the registration and unregistration process:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Register.bat")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},'"%windir%\\Microsoft.NET\\Framework64\\v4.0.30319\\RegAsm.exe" /codebase "%~dp0CodeStack.StockFit.Sw.dll"\nregedit.exe /S %~dp0add-registry.reg\npause\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Unregister.bat")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},'"%windir%\\Microsoft.NET\\Framework64\\v4.0.30319\\RegAsm.exe" /codebase /u "%~dp0CodeStack.StockFit.Sw.dll"\nregedit.exe /S %~dp0remove-registry.reg\npause\n')),(0,r.kt)("p",null,"Change the name of the add-in and place these files into the bin folder and it will be only required to run this bat file on client machine."))}p.isMDXComponent=!0},45249:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bin-folder-5d2bba347ec2c1a1b0f9b45ebbd0c1bc.png"},91111:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/types-registered-successfully-036059cc2230f58d1049cd72ccc72890.png"},1062:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/types-unregistered-successfully-aa873c6733532220e0e600c48a78259f.png"}}]);