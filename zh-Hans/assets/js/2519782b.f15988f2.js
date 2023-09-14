"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[42637],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>A});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,A=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return t?i.createElement(A,a(a({ref:n},d),{},{components:t})):i.createElement(A,a({ref:n},d))}));function A(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},16647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(87462),r=(t(67294),t(3905));const o={title:"Call functions of SOLIDWORKS add-in via Running Objects Table (ROT)",caption:"Via Running Objects Table (ROT)",description:"Calling SOLIDWORKS add-in functions (add-in API) by registering an API object in the Running Object Table (ROT)",image:"stand-alone-references.png",labels:["add-in api","stand-alone","rot"],sidebar_position:2},a=void 0,s={unversionedId:"codestack-clone/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/via-rot/index",id:"codestack-clone/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/via-rot/index",title:"Call functions of SOLIDWORKS add-in via Running Objects Table (ROT)",description:"Calling SOLIDWORKS add-in functions (add-in API) by registering an API object in the Running Object Table (ROT)",source:"@site/docs/codestack-clone/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/via-rot/index.md",sourceDirName:"codestack-clone/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/via-rot",slug:"/codestack-clone/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/via-rot/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/via-rot/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/via-rot/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Call functions of SOLIDWORKS add-in via Running Objects Table (ROT)",caption:"Via Running Objects Table (ROT)",description:"Calling SOLIDWORKS add-in functions (add-in API) by registering an API object in the Running Object Table (ROT)",image:"stand-alone-references.png",labels:["add-in api","stand-alone","rot"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Call function of SOLIDWORKS add-in object from stand-alone application or macro",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/via-add-in-object/"},next:{title:"In-Process invoking of SOLIDWORKS add-in API from out-of-process applications",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/solidworks-api/getting-started/inter-process-communication/invoke-add-in-functions/in-process-invoking/"}},l={},c=[{value:"GeometryHelperApiObject Project",id:"geometryhelperapiobject-project",level:2},{value:"GeometryHelperApiObjectFactory.cs",id:"geometryhelperapiobjectfactorycs",level:3},{value:"IGeometryHelperApiObject.cs",id:"igeometryhelperapiobjectcs",level:3},{value:"GeometryHelperAddIn Project",id:"geometryhelperaddin-project",level:2},{value:"GeometryHelperService.cs",id:"geometryhelperservicecs",level:3},{value:"GeometryHelperApiObject.cs",id:"geometryhelperapiobjectcs",level:3},{value:"MainAddIn.cs",id:"mainaddincs",level:3},{value:"GeometryHelperApiObjectProxy.cs",id:"geometryhelperapiobjectproxycs",level:3},{value:"MainAddIn.cs with proxy API object",id:"mainaddincs-with-proxy-api-object",level:3},{value:"RotHelper.cs",id:"rothelpercs",level:3},{value:"Calling the API from stand-alone applications",id:"calling-the-api-from-stand-alone-applications",level:2},{value:"VBA Macro",id:"vba-macro",level:3},{value:"C# Console Application",id:"c-console-application",level:3}],d={toc:c},p="wrapper";function m(e){let{components:n,...o}=e;return(0,r.kt)(p,(0,i.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This articles provides detailed step-by-step instructions of how to call the functions of the SOLIDWORKS add-in from stand-alone applications or scripts via Running Object Table (ROT). This could be considered as enabling the Application Programming Interface (API) in the add-in itself."),(0,r.kt)("p",null,"This approach allows to connect to API Object by extracting it from the Running Object Table (ROT) by process id. One of the main benefits of this approach is an ability to control add-in API without directly using any SOLIDWORKS API commands or even adding SOLIDWORKS type libraries or interops."),(0,r.kt)("p",null,"In this example SOLIDWORKS add-in allows to count faces of the selected body. It provides a menu for user to click."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add-in menu with commands",src:t(49752).Z,width:"600",height:"189"}),"{ width=350 }"),(0,r.kt)("p",null,"The result is displayed in the message box."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add-in command result displayed in the message box",src:t(40340).Z,width:"1158",height:"668"}),"{ width=450 }"),(0,r.kt)("p",null,"Add-in also provides an API object for 3rd parties to call. API extends the functionality of the UI and allows to pass the parameter to filter the minimum area of the faces."),(0,r.kt)("p",null,"Both API method and User Interface command handler are calling the same function."),(0,r.kt)("p",null,"This is a solution tree of the add-in and API object. The GeometryHelperApiObject compiles to dll and contains the definitions of add-in interfaces. It doesn't contain any implementation and is not referencing any SOLIDWORKS interops. This dll is referenced in the SOLIDWORKS add-in project which implements the API object and will be also referenced by all third party applications to access the API. So none of the third party applications need to reference the main add-in dll which enables the level of abstractions."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Visual Studio Solution tree for project",src:t(28016).Z,width:"572",height:"573"}),"{ width=450 }"),(0,r.kt)("p",null,"Explore the source code and explanation below for more details of how to implement this framework."),(0,r.kt)("h2",{id:"geometryhelperapiobject-project"},"GeometryHelperApiObject Project"),(0,r.kt)("p",null,"This project contains the definitions (signatures) of API methods and interfaces which should be exposed by the add-in."),(0,r.kt)("h3",{id:"geometryhelperapiobjectfactorycs"},"GeometryHelperApiObjectFactory.cs"),(0,r.kt)("p",null,"This is a helper COM object which will simplify the access to the instance of the add-in API object. It is responsible for retrieving the instance of API object from the process by its ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Linq;\nusing System.Runtime.InteropServices;\nusing System.Runtime.InteropServices.ComTypes;\n\nnamespace CodeStack.GeometryHelper\n{\n    [ComVisible(true)]\n    public interface IGeometryHelperApiObjectFactory\n    {\n        string GetName(int prcId);\n        IGeometryHelperApiObject GetInstance(int prcId);\n    }\n\n    [ComVisible(true)]\n    [ProgId("GeometryHelper.ApiObjectFactory")]\n    public class GeometryHelperApiObjectFactory : IGeometryHelperApiObjectFactory\n    {\n        [DllImport("ole32.dll")]\n        private static extern int CreateBindCtx(uint reserved, out IBindCtx ppbc);\n\n        public string GetName(int prcId)\n        {\n            return $"GeometryHelperApiObjectFactory_PID_{prcId}";\n        }\n\n        public IGeometryHelperApiObject GetInstance(int prcId)\n        {\n            return FindObjectByMonikerName<IGeometryHelperApiObject>($"!{GetName(prcId)}");\n        }\n\n        private T FindObjectByMonikerName<T>(string monikerName)\n            where T : class\n        {\n            IBindCtx context = null;\n            IRunningObjectTable rot = null;\n            IEnumMoniker monikers = null;\n\n            try\n            {\n                CreateBindCtx(0, out context);\n\n                context.GetRunningObjectTable(out rot);\n\n                rot.EnumRunning(out monikers);\n\n                var moniker = new IMoniker[1];\n\n                while (monikers.Next(1, moniker, IntPtr.Zero) == 0)\n                {\n                    var curMoniker = moniker.First();\n\n                    string name = null;\n\n                    if (curMoniker != null)\n                    {\n                        try\n                        {\n                            curMoniker.GetDisplayName(context, null, out name);\n                        }\n                        catch (UnauthorizedAccessException)\n                        {\n                        }\n                    }\n\n                    if (string.Equals(monikerName,\n                        name, StringComparison.CurrentCultureIgnoreCase))\n                    {\n                        object app;\n                        rot.GetObject(curMoniker, out app);\n                        return (T)app;\n                    }\n                }\n            }\n            finally\n            {\n                if (monikers != null)\n                {\n                    Marshal.ReleaseComObject(monikers);\n                }\n\n                if (rot != null)\n                {\n                    Marshal.ReleaseComObject(rot);\n                }\n\n                if (context != null)\n                {\n                    Marshal.ReleaseComObject(context);\n                }\n            }\n\n            return null;\n        }\n    }\n}\n\n')),(0,r.kt)("h3",{id:"igeometryhelperapiobjectcs"},"IGeometryHelperApiObject.cs"),(0,r.kt)("p",null,"This is an interface of the API exposed to 3rd party applications. In this example the function will return the number of faces based on the area filter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using System.Runtime.InteropServices;\n\nnamespace CodeStack.GeometryHelper\n{\n    [ComVisible(true)]\n    public interface IGeometryHelperApiObject\n    {\n        int GetFacesCount(double minArea);\n    }\n}\n\n")),(0,r.kt)("h2",{id:"geometryhelperaddin-project"},"GeometryHelperAddIn Project"),(0,r.kt)("p",null,"This project is a SOLIDWORKS add-in. In this example it is developed using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/swex/add-in/"},"SwEx.AddIn Framework"),", but any other frameworks or SDK would be supported."),(0,r.kt)("h3",{id:"geometryhelperservicecs"},"GeometryHelperService.cs"),(0,r.kt)("p",null,"Helper class within add-in which is invoking SOLIDWORKS API for calculating the number of faces from the selected body based on the minimum area."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing System;\nusing System.Linq;\n\nnamespace CodeStack.GeometryHelper\n{\n    internal class GeometryHelperService\n    {\n        private readonly ISldWorks m_App;\n\n        internal GeometryHelperService(ISldWorks app)\n        {\n            m_App = app;\n        }\n\n        internal int GetFacesCountFromSelectedBody(double minArea)\n        {\n            var model = m_App.IActiveDoc2;\n\n            if (model != null)\n            {\n                var body = model.ISelectionManager.GetSelectedObject6(1, -1) as IBody2;\n\n                if (body != null)\n                {\n                    var faces = body.GetFaces() as object[];\n\n                    if (faces != null)\n                    {\n                        return faces.Count(f => (f as IFace2).GetArea() >= minArea);\n                    }\n                    else\n                    {\n                        throw new NullReferenceException("No faces in the body");\n                    }\n                }\n                else\n                {\n                    throw new NullReferenceException("Body is not selected");\n                }\n            }\n            else\n            {\n                throw new NullReferenceException("Model is not opened");\n            }\n        }\n    }\n}\n\n')),(0,r.kt)("p",null,"Add-in must implement the functionality of API object. There are 2 general approaches for this."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By directly implementing the functionality in the inherited class as shown below")),(0,r.kt)("h3",{id:"geometryhelperapiobjectcs"},"GeometryHelperApiObject.cs"),(0,r.kt)("p",null,"API object implementation is using the SOLIDWORKS API directly within its class to handle the request and provide response to API call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using System.Runtime.InteropServices;\n\nnamespace CodeStack.GeometryHelper\n{\n    [ComVisible(true)]\n    public class GeometryHelperApiObject : IGeometryHelperApiObject\n    {\n        private readonly GeometryHelperService m_GeomSvc;\n\n        internal GeometryHelperApiObject(GeometryHelperService geomSvc)\n        {\n            m_GeomSvc = geomSvc;\n        }\n\n        public int GetFacesCount(double minArea)\n        {\n            return m_GeomSvc.GetFacesCountFromSelectedBody(minArea);\n        }\n    }\n}\n\n")),(0,r.kt)("h3",{id:"mainaddincs"},"MainAddIn.cs"),(0,r.kt)("p",null,"This is the implementation of main SOLIDWORKS add-in class. The service to handle the functionality is passed directly to API object implementation and called from there to handle the API call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.AddIn;\nusing CodeStack.SwEx.AddIn.Attributes;\nusing SolidWorks.Interop.swconst;\nusing System;\nusing System.Runtime.InteropServices;\n\nnamespace CodeStack.GeometryHelper\n{\n    [AutoRegister("GeometryHelperSwAddIn")]\n    [ComVisible(true), Guid("2ACE1951-6182-496C-A643-B5FA6CFDFFD8")]\n    public class MainAddIn : SwAddInEx\n    {\n        private IGeometryHelperApiObject m_ApiObject;\n        private GeometryHelperService m_GeometryService;\n\n        [SwEx.Common.Attributes.Title("Geometry Helper")]\n        public enum Commands_e\n        {\n            [SwEx.Common.Attributes.Title("Get Faces Count")]\n            GetFacesCount\n        }\n\n        public override bool OnConnect()\n        {\n            m_GeometryService = new GeometryHelperService(App);\n\n            m_ApiObject = new GeometryHelperApiObject(m_GeometryService);\n\n            RotHelper.Register(m_ApiObject, new GeometryHelperApiObjectFactory().GetName(App.GetProcessID()));\n\n            this.AddCommandGroup<Commands_e>(OnButtonClick);\n\n            return true;\n        }\n\n        private void OnButtonClick(Commands_e cmd)\n        {\n            switch (cmd)\n            {\n                case Commands_e.GetFacesCount:\n                    try\n                    {\n                        var count = GetFacesCount(0);\n                        App.SendMsgToUser2($"Selected body contains: {count} face(s)",\n                            (int)swMessageBoxIcon_e.swMbInformation,\n                            (int)swMessageBoxBtn_e.swMbOk);\n                    }\n                    catch(Exception ex)\n                    {\n                        App.SendMsgToUser2(ex.Message,\n                            (int)swMessageBoxIcon_e.swMbStop,\n                            (int)swMessageBoxBtn_e.swMbOk);\n                    }\n                    break;\n            }\n        }\n\n        private int GetFacesCount(double minArea)\n        {\n            return m_GeometryService.GetFacesCountFromSelectedBody(minArea);\n        }\n    }\n}\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By implementing the proxy API object. This approach may be considered more beneficial and secure as it doesn't expose any internal objects in its structure. All of the requests are handled outside of the proxy class.")),(0,r.kt)("h3",{id:"geometryhelperapiobjectproxycs"},"GeometryHelperApiObjectProxy.cs"),(0,r.kt)("p",null,"Proxy object doesn't contain any references to any objects of the add-in. Instead it will generate the request event, handled and processed by the add-in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Runtime.InteropServices;\n\nnamespace CodeStack.GeometryHelper\n{\n    [ComVisible(true)]\n    public class GeometryHelperApiObjectProxy : IGeometryHelperApiObject\n    {\n        internal event Func<double, int> GetFacesCountRequested;\n\n        public int GetFacesCount(double minArea)\n        {\n            if (GetFacesCountRequested != null)\n            {\n                return GetFacesCountRequested.Invoke(minArea);\n            }\n            else\n            {\n                throw new Exception("API object not connected");\n            }\n        }\n    }\n}\n\n')),(0,r.kt)("h3",{id:"mainaddincs-with-proxy-api-object"},"MainAddIn.cs with proxy API object"),(0,r.kt)("p",null,"Handling of the event in the add-in and providing results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public override bool OnConnect()\n{\n    m_GeometryService = new GeometryHelperService(App);\n\n    var proxy = new GeometryHelperApiObjectProxy();\n    proxy.GetFacesCountRequested += OnGetFacesCountRequested;\n    m_ApiObject = proxy;\n    \n    RotHelper.Register(m_ApiObject, new GeometryHelperApiObjectFactory().GetName(App.GetProcessID()));\n\n    this.AddCommandGroup<Commands_e>(OnButtonClick);\n\n    return true;\n}\n\nprivate int OnGetFacesCountRequested(double minArea)\n{\n    return GetFacesCount(minArea);\n}\n\n\n")),(0,r.kt)("h3",{id:"rothelpercs"},"RotHelper.cs"),(0,r.kt)("p",null,"In order for the API object to be available it is required to register it in the Running Objects Table (ROT). This helper class allows to register the object by name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System.Runtime.InteropServices;\nusing System.Runtime.InteropServices.ComTypes;\n\nnamespace CodeStack.GeometryHelper\n{\n    public static class RotHelper\n    {   \n        [DllImport("ole32.dll", ExactSpelling = true, PreserveSig = false)]\n        private static extern IRunningObjectTable GetRunningObjectTable(\n            int reserved);\n\n        [DllImport("ole32.dll", CharSet = CharSet.Unicode,\n             ExactSpelling = true, PreserveSig = false)]\n        private static extern IMoniker CreateItemMoniker(\n            [In] string lpszDelim, [In] string lpszItem);\n\n        public static void Register(object obj, string name)\n        {\n            IRunningObjectTable rot = null;\n            IMoniker moniker = null;\n\n            try\n            {\n                rot = GetRunningObjectTable(0);\n\n                moniker = CreateItemMoniker("!", name);\n\n                const int ROTFLAGS_REGISTRATIONKEEPSALIVE = 1;\n                var cookie = rot.Register(ROTFLAGS_REGISTRATIONKEEPSALIVE, obj, moniker);\n            }\n            finally\n            {\n                if (moniker != null)\n                {\n                    Marshal.ReleaseComObject(moniker);\n                }\n                if (rot != null)\n                {\n                    Marshal.ReleaseComObject(rot);\n                }\n            }\n        }\n    }\n}\n\n')),(0,r.kt)("h2",{id:"calling-the-api-from-stand-alone-applications"},"Calling the API from stand-alone applications"),(0,r.kt)("p",null,"Now the add-in API can be called form any COM-compatible programming language."),(0,r.kt)("h3",{id:"vba-macro"},"VBA Macro"),(0,r.kt)("p",null,"Example of calling the API from the Excel VBA macro."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Macro to call SOLIDWORKS add-in API from Excel",src:t(30105).Z,width:"746",height:"344"}),"{ width=450 }"),(0,r.kt)("p",null,"Add the reference to Type Library to enable ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/visual-basic/variables/declaration#early-binding-and-late-binding"},"early binding")," for the calls."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Browsing type library for COM applications",src:t(93444).Z,width:"913",height:"723"}),"{ width=450 }"),(0,r.kt)("p",null,"Macro creates and instance of Factory object by its prog id and retrieves the instance of the API object by process id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vb"},'Function GetFacesCount() As Integer\n    \n    Dim geomObjFactory As Object\n    Set geomObjFactory = CreateObject("GeometryHelper.ApiObjectFactory")\n    Dim geomHelper As Object\n    \n    Set geomHelper = geomObjFactory.GetInstance(13004)\n    GetFacesCount = geomHelper.GetFacesCount(0)\n    \nEnd Function\n')),(0,r.kt)("h3",{id:"c-console-application"},"C# Console Application"),(0,r.kt)("p",null,"Example of calling the API from the C# Console application."),(0,r.kt)("p",null,"As shown below it is only required to add the reference to the API Object dll which contain the definitions of interfaces. There is no need to add any other references (including add-in dll or any SOLIDWORKS interops)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"References to stand-alone application",src:t(15475).Z,width:"581",height:"387"}),"{ width=450 }"),(0,r.kt)("p",null,"The result of the API call is printed into the console window."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Command result displayed in the console",src:t(36800).Z,width:"846",height:"272"}),"{ width=450 }"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.GeometryHelper;\nusing System;\nusing System.Diagnostics;\nusing System.Linq;\n\nnamespace StandAlone\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            try\n            {\n                var minArea = double.Parse(args[0]);\n\n                var swPrcId = Process.GetProcessesByName("SLDWORKS").First().Id;\n\n                var geomHelperFactory = new GeometryHelperApiObjectFactory();\n\n                var geomHelperApi = geomHelperFactory.GetInstance(swPrcId);\n\n                var count = geomHelperApi.GetFacesCount(minArea);\n\n                Console.WriteLine($"Selected body contains {count} faces of area more or equal to {minArea}");\n            }\n            catch(Exception ex)\n            {\n                Console.ForegroundColor = ConsoleColor.Red;\n                Console.Write(ex.Message);\n                Console.ResetColor();\n            }\n        }\n    }\n}\n\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The most common reason of object cannot be retrieved from the Running Object Table (i.e. null is returned) is difference in accounts levels running SOLIDWORKS and the stand-alone application. For example SOLIDWORKS is run as administrator while the stand-alone is not or vice-versa. This is a Windows limitation and it is required to run both applications on the same permissions level to enable the communication.")),(0,r.kt)("p",null,"Download the source code at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/solidworks-api-examples/tree/master/swex/add-in/geometry-helper-api-rot"},"GitHub")))}m.isMDXComponent=!0},40340:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/add-in-command-result-message-53dbe9093b561f3dec0a376b5ae8edbc.png"},49752:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/add-in-menu-command-aba228e49ebfdb3c04542924d746ed9a.png"},36800:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA04AAAEQCAMAAACwZdQdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAHZrMdPZ4CjP5BYXF3imfHrF3wAAMSYAAI1rMa6qf10rAOnp6SVrnIuKigArfHjCnSVru/b3982Lflw3UBxUW3S92LnR6XjB3Oiom27a81+m3Y9sWJm10UGH2bLK5PHx8iYAMiYsMsPW6sNdSpmZmT/O8q+urqa/2gBOfp85Ju31/KG61nVLAPj49/f29ui9tWh5kdDg8LfCzqzF37bO56eJfCYAWf7+/mhyhJPEwM10Y2CL3uLi46h4c0MUItqdkYygtQAAV5RGOn48MkQAMl1viBkxVURtfaioqI6/2+zs7Njm8+bm5p651e/v76K82KjB3MrLzE8mNUQAACUre/PSy6SjeidQoJTF4LDIobdIM7+/wGp8mZLi9EUsALa8wqO9m2GNfmJQf7t9cbuamzo6OlRUVMja7r5SPUzR8oy92EKIu2JzjJePW6dYSbJBKpWWldLS1LhgUNmajtvp7Pb29vP3+2lpaaqofafBvZJuMuajljMzM5+fn8bGydLw9wBMnNvb219fX8zd74B/f0KInEVOAKuMWSZtvl2j2t2ThXGCmi0tLajCnX1QAHZ1diUrAEWN4IdKQuzFv51EM6lCL6FGNGGq4NJ+buPs9mIsAJHC3VNWZs/P0XRLVwBPoJ2iuKHm9K/Hwd3n8o+RlpVrZwAtfyUlJQAAWdeQgnvc9GV2j0QAWa3Gn0ZQoOS0q2Co376Jg9fX2n7I4pZwM5lyM+bm6KKGV+Odj+GYi+/IwfDLxGBwiXB8kKvEwHWBlZ5XTntvMvj3+EJCQsOCdoPe9LpJM6FNP8Hu9bdDLEaP4h0dHazp9HlNAKO9utPi8V/V81TT8rTH277K2EPP8kfQ8ra2tqelfKSHV6eJWKtSQoKBgVpdYN7e3lApOI5DOH9ANoA9NJGowGd4kN+Uh9yViJdUS4CKm7BdTLZgT4fg9EOK3CdwwShyxchpV7KAfAAAAP+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///zgDK8YAAADydFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AkDR/aQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAHU5JREFUeF7tnY2DZlVdx58UY99iYzPQDGZwNTfdHUSG2Mp1DSNbd4EdWCRpLS2R3kghGllgINBqRVwIqUxcgoSUIvIl0vKFCiozZa0s0BStlbLS8k/o93bO75x77/Pc+zxzdnbv7Pfj7Dnf8/39zrn3eeZ+nZllFwavBgAUYvDwzPy6+VMffnjdwzPMOuLhdTyRnnmYxMy82KfOr3uYFNkz607ljnnumpmnnetOpYl6cRAOOsoPGtDIdTqDoRMEXVmpkVNPDVXulX4cVAEHHW0HDcimwvwCAGByPn3Mqevm5wfzzMIjj23ZDACYmF9++TEWp4XjtpwEAFgMvzJ1jMbpEaQJgMXyd985PZienl54zNYAgMn5zDESJ3xxAmDxfObTEqd1tgQATM7vLUicNp8LAFgsiBMAxUCcACjGTywMzjvvPMQJgAIgTmDZcPDVP9LOqw+O0Xj307e28/S77foep40A9J37T7+nndPvH6Pxgkte2c4lF9j1N26kOG3fvh1xAsuAj9+zvp17Pj5G49ZXPrOdV2616zfE6d4GrATAEc3H7zmxHY2TLUahcbqW8nItk448cZB0jTiB5cghiNPHND4j+Vg9TjsD9z7FOe20p9D/TrvXSgAc0VzWKSWXVRq/tt/5mnkMN2796J85H6SGbyZz4KNb7fo7d9bjdH6NEKcDq9f+vMmdO1feYCKw6awTTOV6HFYOBgPe+tqzb+LlJrnGJrkq6dqptXtIsCNoI505oq/CRSsGg+NtPuuEeMgwRt0BWGomi9N+++tKzH7zGInT7X/ucOP+l/zHB2X+DjOJ20fFiZ6+CiFOFz37FH+6Oj5IH0kSqNSdwIHVnJePnExyEz/SOz/C6wOrj6WrHljNdoWR96BHHFjNPbdWLjn8Hn73hJ2v3XXyzgNPpytTjvWQ4SBORxKHIk5PRt4mjftfotPr3mb2k0/mcVrTNU6bjtcvF0LHB+nztQe37gRWeuWiC1lexPG96JTfoCSJrDLyHpIjagy/Bya8StqrhwwHcTqSmDBO8q9TUfb/k5lELU7f1CDJ8Pt/3Rin/6E4rVmzsHlDoClOWqHvfC468wRW9P3T2m+5geZvWz0YnEzfF51F9qbjNxxY/QurB8feJHrD5wck5TutA6t/bddZJ/C3T2tfwXsHtJW/raNJSk87hbbQ+btO5mnDBnqM6YsRiQOr6ZyVN2yixs/z1uQK8R7CSdwkJ6y8QS+tR4RDubxh5dpX+F3JTrnZ9FVIL12VoVerh+hFTq50xjvQOh21knz6chhPBktLxzhVGjlO8oNTLU4bNqRxevJt+oVJ0vS6PzCTuH2rXX/Dhr9pitPmzTTQJGOM0xfWvuLq1V8nsYke7S/II8yPEGXkan6E6CG8mr4vkyrpxykj33cTbyL75fRsffdNJKiPHXrwniErKXErn0+ewGsKBcHjpuN5B8chuwL9knsIJ3GT3tTX7dJ2xEDCofcRSnoPvIN2Z6+CW8N9cJcdQtbjL6683nBBrutRV1P8WYaTwdJy2Xr7exKjWM9xShv3z8/P7z948KDOZhLcuPXKTyW88Suap/0//Pw3msVc6XH6Q4vTXOBeCZN8xDhp5dG3zs1dc8Pc3L6zn8UrUvxr366vz819Ye27uXz1amp5/MxnsOaJ4IrYAq/4lx5BLV6i4n2yQ9HtZFErf/BVkivEe4gnPX7Ks+Ye/dEL302GXTpMKwa0h/u4y+9KdlLC8lexb9eARkEaZINUibRTL8yOdfJRj5/57STjEiwtWUo+IV9xlE+Yx6y/rNK4nwKwP8xZnObm8jh96mXcQ13//nwzhCu32vXn5obESaAcyqxx2kPPqwx75JHkYHHA5NnZS4+gPOz0CHGL6AE/T1yxJ+saOopW7OyV5NDW9KFTM/AoF+jZpXZqkmsmV4j3kJ6074/oYZZ+ubQeQewd6L1Se3JXe+W10TJ7FcSeFRLxfbtk4kPCnaWd/i7wBeyouUf5Ur4ES0qeEvlConBaAvU4bdmyRULHcy1Of5vwyf3nKPu/8uNmMUmcvovidA7FaTaQfHUKwbpXCpwG4q2ze+/7Vl7eNTv76FtnZ/ed/YHZ2b1rX8WLh+64bXZ2zykfkMLsnhXUyBWx9+0ixSv5JUfQVikZvNHhNr4CX+eau67hVXKFeA/xJFrsufBVj952Tby0HcFLOnnv2h+Qa8W70p1E9ioYqTx0Bx+kZmhNO+MdEPEoepOoxZdgSclTYv8eSSaPU7WRYhTI4zQ7m8Xpk9Kpw8uSPF251a4/O0txOqdTnB664xs80XO955R3kniU40TWA2fTip85WtjD/k4p6BauqH0mPWOcCnb0CLLSOD10hzybhpw7e83Lf5Ia9t7363xgcoV4D/Gk2T0X/hVd7nv1QLlbPYJ4YNdttPgpvgO/K91JZK+C4TjYy9VKaE074x0Q8ag9Zz6NZFyCpWXCOD3hjIyTNO7/N51+y0wij9OaNedkcYox4pmlxGmVPiOrVtw2e8t7KRQDepBuiY8XObR4Dz/L3Eh6722y5Ecz2qtW8E7+/+5bxE52MA/sojJt1PWD/DyvWnEs6Qd28ZhfId6DnaRNq55NmbFLyxGrfoxnueSzqTu5K93503Lj8VU88Md8EF8nRpvvg1tXvbjyeu0O5G70KL6PB7lkJ4OlpfMXnbzxRqcWp5f+rMON+9/xm++Q+bfNJF7qcfqHhcGOHTsWNk8Fmn6jnH16enii54x+DQZ3PXgXed+Ymrr47HdOTdHjxYv33PH3U1P0eLFetWIwoDL13iX21IODwXt/kfrYkZWWbYfABw/e+ypdrzrzT9iRy95yH+nsCvEewkl6h3x74dJyxMW7qCy75dTkrmiD7kxfhdwBrfXHH93H90Gtx8rL8tcb7kDO1aP4Di7exUfqKWBpuf8t9o9/mL+Qn4eU7z/JTOIt94/RuPXa5zh/SQ3v+ORznvOfPP+rmcS1W+36U1Od47TkaAgXRXYER2ASCtwHWBruf5F9kRA2HvyhwMGN5hEv4jhljTtPOhg4aad5BDdufeb/JfzSG97wXzz/t83GM0fFqQErLTF/yl97FkdyxHvu+F9T41LgPsCS8NXPmhBm5+wfBm3YMDdrHvHZr47RuPX9P9jO+z1O/3jkxqkot/B3d2B5c9qOM9rZcdoYjVtf+DvtvHBEnADoKzd/jp7lNj538xiNX77k9nYu+bJdf2rq5xYG73rXuxY2WyIB6C8bbz6tnZs3jtF49wX2r1cZxQV32/XPOIPi9KUvfQlxAqAA/7Iw2Lx588Jm+1O0AIDJ+eeFwZve9CbECYACaJwGIU7XAQDGJuTnewZ5nK4CAIzJlqFxsj8JAQBoYGbLOdvPy5ieXoM4ATAJiBMAxVhUnHbvNnEIWYprNHG4rgv6zLhx0qfMnrXFPHK7GRWyTuhyjSH2EPJrddrb8QLh5Iy6xW3WGeZsbyLqm0FvWFScFgE/NsPO6nKN8e4gv9Z4e0cir6JyXN0JfWxHUVE85xL0j/HjRJ/tAp9yP6F+ljqjrzHeHYTuLiePQ+O7QevmC8TmysAjT0oiQd9YRJyShyBIGlmaDuVmpbP2h4WiSxljjabYxkJ1KOejzinBaeqjkWXmuaj2iRWpro1mW1wvqbJ1siORoG/EOE3PT8vcHieBttpkKlpM6jUpFZW+CC31Q6vmCblMhBZSLyUYTX0qck8Uz/U+dY3KMtBoq+mlbJ3sSCToGyFO0/Nvtzx1jlPyLNAcBnsYUk/XuaeESg45+mELnXTbsCG0ukoJ67QvGWrVdNKWdHBoVXGEBit4vkNUYgcSCfqGxWl6/tMLr9c8tf5WRO0h8AfAny0VPDZ5YWRcBcjRD1v4xOMQpR/0S8wKwdRZ+1xZMVGE6bTP1wHawdgqUnei5zto0A+1ZWISCfqGxonTdOmtV0meFhcnE6ZkTB+gysi4CpCjH7bwicchSj9Y2tVSgqEzj9qmSkpMsFQnk/eFsmIHZB5RMwjzfIca0ZaJSSToGxInStMjl171q8ddznlqjRORPwT+AFRVXNceoFhJVIAc/bCFTzw2K4XXYgVlhHXTjkqveDInk/eZbTR5RM0gzPMdrnxiEgn6hsRp/tI333rcdY/t3v3Y/GRxornyaFa9ZBnXiqsAOfphC594TE9OBoGVdztxHVukWfBeVbaOE81DT/ZqRs0gzEvPC4PYMjGJBH3DvjoFxvnqRI+CPQ1RJY9C9BpV0uleQBwiShFa8XJepTFKFSluxKK06QZZM9FrUmHJYyRWRes8WvkOV2lfKkHfsN+KSJggTiJ1lqUQi0OUzoSbAV6rxzVRYWlmUuZ5oCuVwUtInChDX9od97JIpM4+OrEtLY1UvqNxbypB3xg3Tv2kT48o4tRjjpY49eUh7c+dggYQpyMLxKnXtMZpM/93Z2zZ2zgBsCS0xuk1r3kN4gRAJ1rj9IIXvABxAqATrXHasWMH4gRAJ2bO3/bcnG13Fo/TBD9d17aU/wm9Pz/zL+2d9ud9OfKY2bZF/jjEdmHNmnOeuPN5o+M0we891TakRuNpDWZTn9/LaBXQtbnV4jjw0elZGfXrTkJyxuLuNMx11Uytmhqjt5Zjqa5TmJnL+Y8WTZ8n/83dJ5648Yrrr7h8ZJz4k7Ho19r2CWq8QN30exmtIqEgi0XgRzec5cVFUeAIIt6K35OrjqTtZe6qnaW6TmE4TtOCBOrO83ffOTJO8qkY9/NRo+0T1Hx81fV7GT04Td4k+An1s8pfYxHovbhWxjw6bR9z68Qs1XUKQ3GiKC1cdStz7/M+dH1rnGwjQc+MrGh0ZaN6sraJCVKr0Yp1I1mnxWqbwq5WhilHDtMTk4ODpJGl6VBuVjprf1go6TIUabRGVVJsqMbZlJXNqu4QaySxO5mI2lYy+Gi2bWKC1Gq0Eikion3qerWuvC+uZdRZlHm9Q+P0xefxi9l9/RXjxEm28FKFKi1EL5TZDmYU1hyU4+usWm0TpKyVqgqDw4cxJlMzikRm1Za+SLKMVRUso2isuldRPNd3qDuCcECyYGo77Ty2bYpmFOI2qYhayRY3M6WCZSik1VBm2Ts0Tox+s1eL0+mnn94cJ3nFtUErshQtmKw1i23FlGilfY2dVqRBPxJFgyBthlnqxUm26WDdqafr3FNCJccdaQmDuZlXqyq6SjyT9W1ij0A7rM/baxvpKLdiO82VIRZtDiuFWmKVhA26zj11h1Zt6CGtcar8ISN/mar0tTcpkYrptJqvK0QrrzV2hjP0I1FaVBVIq5WJ8HtWwWOTF0bGVaBa47H5ZFehypJRKQ5j0v1axxCyPm+vbbRLKlk7j65ikWYTCe55b3evrnpI689OE8eJlWGLajUdM6KV1+qd4ROjE4+uFFcMrfTDFslEVJWMdAm9SuLZyLgKVGs8DveqVUW1WIxJ92sdQ7Dj0u1MbWNmZO08uopFFvHggC+1KOuKYJn2hdGKseo9vaL1Z6cjOU7y9qsIoyvFFZNV84moqriufZpjJVGBao3H4d6wauoG6X6tYwjyWSVsIRNR25gZWTuPrmJRCScbvtKrxrUodVSZb6qp6j29ovWbvdrfxtXX3j7YBRhbVKvpmBEt36ErnQOxkPQ1DY6uzItT6DODqHrJMq4VV4F0rw9WbK1WR8FkdUfSMYSsz9trGzMjttNcu5oVKyvFV7LNVBirnqAFEV4Vz3v6xLhx4hdqrzUqFYkn7wcvhWDVqonJwvG1FMOq3qZE6WauIqEgQ6hGlTRHr1Elne5FxMp3VPrbql52M1NhyWOYmkj64t5ERZKlV1WRDMtoRiEqkiy92qDSbWbV+4IrU29o/dmp9tcH40uNisbU47X8MrjNlnnVTW9WfJ0Wa11G0GI2qkDolSGWg0i7Y3GI0plwM5L2qfIWUiOqYpmblIOq7IimTE0kfXKILYOKJMukyjNLXbpZEZF07dW6yvbFRdYX7Ky1B7T+7NThb+NWX/Po96DLO9TY07e3tpG+vYhl8aYvHWN/s9dA9S0f+SmI/x80koam5fGJ7dmr6PbZAgGO03nb16z5EHPFnefX4tThrw8mb7l8kRv6GRhdzai1LZPPa49exhifLWDMXM5p+vCHr2AoTc1xWr9elh3jZLrO6OpRQd/iZBp0Y2bbFsrT9jVPMDfeSF+hzt/GcVp/4nrC48QMixMAQJi5ftvlOdt2S5wExAmAMRj274rQAFGcFhYWECcAOtEaJ/lDRrpCnAAYSWucTjrpJMQJgE4gTgAUA3ECoBiIEwDFQJwAKEZrnM4991zECYBOIE4AFANxAqAYiBMAxegWp58RECcARjIsThogitPGjRsRJwA6gTgBUAzECYBiIE4AFKM1Tjt37hxsfouAOAEwkmFx0gAhTgCMAeIEQDEQJwCK0Rqn1dSEOAHQhdY43bRhJeIEQCda4zQ3t2+w+UUCx0n+XYaVf5mhr0dX2/C97Xuswzd0v8yYNB0dPJ4ZMQEYFicN0LA45c+PL0dXG6luNinTCLQj2dC+ZTL45OrZ0VNxqC4NekdrnGZnKU6fFTROtKn6AMVlU7XSWyPUZZvtbdtjHbojMcqT3lXAvUN0UdBXhsVJAyRxeqAWp+pjFJdplZ63sHKVjDqLtCkYUvQ2E97AgnWsJJNUg5/uCOVI0peM1b60GnCv2g2OcorEKa6TKj+ZiVBVrzImUiNUo1KReCTDkscwWTUKawnKiZ6MUapwdJmb7jVsAEczrXGamrp4aJzikxSEV+Upqw31qmCiZhixuTaEajp5tT44iUdjFA199pHgnuzMi+BopkOcptrjlBs8dlVKUNWZhD2v6gxT1SmvunJST68wtE8/Eiqe7QZgcXFyzPAqP6JM7tWVEEVQwbBDaKVOVSm8NjurulJ4HTBLvTgpsjB0NdrLq+AoplCcMp9HezJFuVdX6UzIjmqFx2al8NrsrOpK4XXALOvxmWEdCBVZGFUvr4KjmG5x2iHEOFUeOSZ5xKTqLb5sGqTBJvfMslkLrnwIXjrVq3ZoRuKR1FXiRcSrFNxrqoKjmGFx0gBRnM4444w8ToJuTp8j0Uk1KhWJVzN5FBEsldFimfQO93RpqrEa7KyPxihVJKSez8FzBcCkcbLN6YMkOq0GRWPq8TpVoUSEHYnkWWRYmikq8UKbSZ3T0YrBEDGyL5J4iQgyqQLQGqcTTzwxjdNwxn+s8CCCZcZhjBP+fx0sN1rjdN1113WL01jw90hIE1hutMbpqquuOlRxMg3AcqE1Tkz5OAGwHEGcAChGtzjdIyBOAIxkWJw0QMswTviRDRw6xo9Tw28itPy+wrBi7g8/YuThI2jc1/GwxpfE5oT3klDmlMND462PfjVNW4LHMyPmcmDsODW9/rqTMayY+8OPGHn4CCbdR8iLrG5vNMemzCmHicZbH/lq5NVWGqKnorfvRp1ucdKfpDhO8trrb8DId2RYMfeHHzHy8BFMuo930tbaq5z8vJQypxw2Gm5/1CtqeifdG7Wzl7T+VgS/4OwvaPg7QDosEhFkVCwSKYIV/VKtiFHdG/t0HdxA1hc6gsdWME3EtrTPzQpVN655Q21vk3LSqs4JXBSXxkRbZ3Qc6ZNPjfeJF7XOKV7zPscdFqx1LSMXQ38UEamqG0VE17nrXrW79wyLkwaI40SvWP/buPofpPE3jN+7sPA5eF2UbVISq6pIhiWPkVBMlIrcqyiem/tyKqa2iRdFi3Kip6JSjpaKRGZVR628T0VlrxM9FZWyW6pIhmVWDXaKV11FQkEWhnsNG/rNsDhpgCROuwebT1TCb0XITpl9YVPw0qoVh1QDTdV00B5pNUY008CTtBm2ilPoU8PsBDskQmvBlrJDlrUhVJ2sRbBCQqiGVdih5DtopR/aEgbrcc9xj4aswmTVOGhFGghTbkSC5XsdWulHgnvUzJi/DBgWJ4V/dqJXm8VJnMqYTzyaIQRdraY9zdUm5fiquS/W089aNvEYChUa7OjIabrXHFPqRTPi1TBm6HHZ3qRXi9kuWumHdpgKLe45TX1OWq0rGgRem50RrGRHhFb6kVDxwsnLgUnipO+EvsX2VsRJiYYQtBVjNe1JvdHK8VVzX6jbZXWVTTImRafuxK22gVfeZBavo3B0mY4puoF9r5klnmIFgVb6Ib90VMXYhuoOG3NfsQ2xWlUKr83OCJbvcLp4ebXXTBgnegP0Lba3Ik5KNISgrRiraU/qjVaOr5r7Qj1bZVPoIBGUUl0LwfO93iUvjPClKcF3pHsC7ntNT3PPKwyt9COpqmJsa3WHjbmv2IZYHaZ8SglW1md08fJqr2mNE7/JSZzsPQ9DwLR7aUswm6sB90YPTnOLVnysrLKJx6xqVC5kBNN3VC4ueNVJW/IK477X2s6zD/rlgxV1WaGpz/EdaZ8PWrEGmVKC5Tuc0V5Ttdd0iNMg++pEL95ef1elMvdUadlIrKpi6cpxK6qwjGaYiSiTjtRz1KqYtierRtGonMSrlkKR/aQWrKTq0Eo/sj4pMdFLiF61IMSqKW00ZcI97kuInohKNfV8Dp6r5UF7nKgpjZO8A7LVFYtEikhU3iiCFf1SrYhR2+t99R2VPuvyMTGFqERoQUedHekibGnEdVINc7Ny0qrOCVyUelpTx0TQBq30Q3SYeVSq/UxTn+M7WIROU1zkRVBcTIneyCLLKIJMqsuB9p+diCxOh5Nl9dYfweB9nhDECdTB+zwhvYkTf1eAz/ISgTd6QvoVJ9PgEIN3ekL69c0eAEc0iBMAxUCcACgG4gRAMRAnAIqBOAFQDMQJgGK0xon/aQ/iBEAXECcAioFv9gAoBuIEQDEQJwCKgTgBUAzECYBiIE4AFANxAqAYiBMAxUCcACgG4gRAMRAnAIqBOAFQDMQJgGIgTgAUA3ECoBjjxkn+7ZGVf6mhr0dXAVjmTBanPCHVOA2rNoK0geXD+HGi9dDENFUrvTXa6gD0honiVI1AXKbV8GWKRlfJqLNIEwD0nCJxiuukynlJhKp6lYkCgH6zqDjVAuFVCUttqFeFKADoNWXilBs8dlWKKwB6TJlv9oLhVfrSI+ReXQlRANBrCsUp83m0NIlyr67SGYCeM1GcJCY5SUAsRKHFl02DNMgEQO8ZP06C+mkQRCfVqFQkXs3kEYBlwGRxUjtLQpKSYKiiMfV4naqkZOgagP4xbpyGM34Osh2WJcIMAHrHYYxTnhyNEmMGAL2jXJzGoh4cdRgzAOgdhzNOphVxBDMA6B2HKU4ALEcQJwCKgTgBUAzECYBiIE4AFANxAqAYiBMAxWiNE/9jIMQJgC60x4nyhDgB0IUOcdqNOAHQifafnRAnADqCr04AFANxAqAY7d/sEYgTAF3o8NUJcQKgG+1xoibECYAu4Js9AIqBOAFQDMQJgGIgTgAUA3ECoBiIEwDFQJwAKAbiBEAxECcAioE4AVAMxAmAYrTGCX9mD4CutMcJf6IcgI50iBP++iAA3cDPTgAUA3ECoBiIEwDFwM9OABSjQ5zw1QmAbrTHiZoQJwC6gJ+dACgG4gRAMRAnAIqBOAFQDMQJgGIgTgAUA3ECoBiIEwDFQJwAKAbiBEAxECcAioE4AVAMxAmAYiBOABQDcQKgGIgTAMVAnAAoBuIEQDEQJwCKgTgBUAzECYBiIE4AFANxAqAYiBMAxUCcACgG4gRAMRAnAIqBOAFQDMQJgGIgTgAUA3ECoBgSp+n5wHQtTvjvOwHQFYnT/ML73vf21z9y6ZuPm6/HCf/1QQA6Yl+dLn3zrcc9d9vupq9O+G/jAtAR/dlpev6qL16+7XxOU+1nJ8QJgI7Yb0VMz3/xOk0TvjoBMCkWJ8rTNk0T4gTApIQ4UZ40TbVv9gjECYAuzGxZM/qfO+F39gDoysyW7RSgnDxO1IQ4AdAFipOFyME3ewBMxMyW2hcnxAmAyZjZYhlKQJwAmAjECYBizGxZU2donLYAAMZlSJw2AwDGx/JTiRMAYHKeijgBUArECYBiIE4AFANxAqAYiBMAxUCcACiGxempAIDFo3ECACyeweD/AWk2hcb8SiucAAAAAElFTkSuQmCC"},30105:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/excel-vba-macro-db541e528b227d5e84019dbb8177b2d2.png"},93444:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/macro-browse-type-library-8c3eb2a6cdcc11e7ecb6f1d94c67b2b3.png"},28016:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/solution-tree-c34154be97ae496630779917f2c5ccbc.png"},15475:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/stand-alone-references-59915755a4ff0de9aa7ff9971255d196.png"}}]);