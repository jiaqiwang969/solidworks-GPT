"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[96791],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),d=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(m.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=a,g=c["".concat(m,".").concat(u)]||c[u]||p[u]||o;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},41842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(87462),a=(t(67294),t(3905));const o={title:"Add watermark to model using 3rd party storage via SOLIDWORKS Document Manager API",caption:"Add Watermark To Model",description:"Add digital watermark into model using 3rd party storage via SOLIDWORKS Document Manager API",image:"add-watermark-console-output.png",labels:["watermark","storage"]},i=void 0,s={unversionedId:"codestack/solidworks-document-manager-api/document/data-storage/third-party/add-watermark/index",id:"codestack/solidworks-document-manager-api/document/data-storage/third-party/add-watermark/index",title:"Add watermark to model using 3rd party storage via SOLIDWORKS Document Manager API",description:"Add digital watermark into model using 3rd party storage via SOLIDWORKS Document Manager API",source:"@site/docs/codestack/solidworks-document-manager-api/document/data-storage/third-party/add-watermark/index.md",sourceDirName:"codestack/solidworks-document-manager-api/document/data-storage/third-party/add-watermark",slug:"/codestack/solidworks-document-manager-api/document/data-storage/third-party/add-watermark/",permalink:"/solidworks-GPT/docs/codestack/solidworks-document-manager-api/document/data-storage/third-party/add-watermark/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-document-manager-api/document/data-storage/third-party/add-watermark/index.md",tags:[],version:"current",frontMatter:{title:"Add watermark to model using 3rd party storage via SOLIDWORKS Document Manager API",caption:"Add Watermark To Model",description:"Add digital watermark into model using 3rd party storage via SOLIDWORKS Document Manager API",image:"add-watermark-console-output.png",labels:["watermark","storage"]},sidebar:"tutorialSidebar",previous:{title:"Add comments to model using 3rd party store via SOLIDWORKS Document Manager API",permalink:"/solidworks-GPT/docs/codestack/solidworks-document-manager-api/document/data-storage/third-party/add-comments/"},next:{title:"Export part to Parasolid via Document Manager API (without SOLIDWORKS)",permalink:"/solidworks-GPT/docs/codestack/solidworks-document-manager-api/document/export-parasolid/"}},m={},d=[{value:"Adding watermark",id:"adding-watermark",level:2},{value:"Reading watermark",id:"reading-watermark",level:2},{value:"Program.cs",id:"programcs",level:3},{value:"ComStream.cs",id:"comstreamcs",level:3}],l={toc:d},c="wrapper";function p(e){let{components:n,...o}=e;return(0,a.kt)(c,(0,r.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example demonstrates how to add digital watermark into SOLIDWORKS model (part, assembly or drawing) into 3rd party storage (stream) using SOLIDWORKS Document Manager API."),(0,a.kt)("p",null,"This application implemented as the command line program and has the following arguments"),(0,a.kt)("h2",{id:"adding-watermark"},"Adding watermark"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Full path to SOLIDWORKS file"),(0,a.kt)("li",{parentName:"ul"},"-w - Flag to indicate that watermark needs to be added"),(0,a.kt)("li",{parentName:"ul"},"Company Name - name of the company to add to waternark")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AddWatermark.exe C:\\MyPart.sldprt -w MyCompanyName\n")),(0,a.kt)("p",null,"Watermark will include company name, current user name and time stamp"),(0,a.kt)("h2",{id:"reading-watermark"},"Reading watermark"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Full path to SOLIDWORKS file"),(0,a.kt)("li",{parentName:"ul"},"-r - Flag to indicate that watermark needs to be read")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AddWatermark.exe C:\\MyPart.sldprt -r MyCompanyName\n")),(0,a.kt)("p",null,"As the result the stored watermark is displayed in the console application"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Output results in the console",src:t(95614).Z,width:"846",height:"551"}),"{ width=450 }"),(0,a.kt)("h3",{id:"programcs"},"Program.cs"),(0,a.kt)("p",null,"Console application containing the routing for reading and adding watermark"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.swdocumentmgr;\nusing System;\nusing System.IO;\nusing System.Runtime.InteropServices.ComTypes;\nusing System.Xml.Serialization;\nusing ThirdPartyStorage;\n\nnamespace CodeStack\n{\n    public class Watermark\n    {\n        public string CompanyName { get; set; }\n        public string SignedBy { get; set; }\n        public DateTime SignedOn { get; set; }\n    }\n\n    class Program\n    {\n        private const string DM_LIC_KEY = "<Your DM License Key>";\n        private const string STORAGE_NAME = "_CodeStackWatermark";\n\n        static void Main(string[] args)\n        {\n            var filePath = args[0];\n\n            var isWriting = args[1] == "-w";\n\n            var docType = GetDocumentType(filePath);\n            \n            var dmApp = ConnectoToDm(DM_LIC_KEY);\n\n            SwDmDocumentOpenError err;\n            var doc = dmApp.GetDocument(filePath, docType, !isWriting, out err) as SwDMDocument19;\n\n            if (doc != null)\n            {\n                var stream = doc.Get3rdPartyStorage(STORAGE_NAME, isWriting) as IStream;\n\n                try\n                {\n                    if (isWriting)\n                    {\n                        AddWatermark(args[2], stream);\n                    }\n                    else\n                    {\n                        ReadWatermark(stream);\n                    }\n                }\n                catch\n                {\n                    throw;\n                }\n                finally\n                {\n                    doc.Release3rdPartyStorage(STORAGE_NAME);\n\n                    if (isWriting)\n                    {\n                        doc.Save();\n                    }\n\n                    doc.CloseDoc();\n                }\n            }\n            else\n            {\n                throw new NullReferenceException($"Failed to open the document: {err}");\n            }\n        }\n\n        private static void ReadWatermark(IStream stream)\n        {\n            if (stream != null)\n            {\n                using (var comStream = new ComStream(stream, false, false))\n                {\n                    var ser = new XmlSerializer(typeof(Watermark));\n                    var wm = ser.Deserialize(comStream) as Watermark;\n\n                    Console.WriteLine($"Company Name: {wm.CompanyName}");\n                    Console.WriteLine($"Signed By: {wm.SignedBy}");\n                    Console.WriteLine($"Signed On: {wm.SignedOn}");\n                }\n            }\n            else\n            {\n                Console.WriteLine("No watermark");\n            }\n        }\n\n        private static void AddWatermark(string companyName, IStream stream)\n        {\n            var wm = new Watermark()\n            {\n                CompanyName = companyName,\n                SignedBy = Environment.UserName,\n                SignedOn = DateTime.Now\n            };\n\n            using (var comStream = new ComStream(stream, true, false))\n            {\n                var ser = new XmlSerializer(wm.GetType());\n                ser.Serialize(comStream, wm);\n            }\n\n            Console.WriteLine("Watermark is added");\n        }\n\n        private static SwDMApplication ConnectoToDm(string licKey)\n        {\n            var classFact = new SwDMClassFactory();\n            var docMgr = classFact.GetApplication(licKey) as SwDMApplication;\n\n            return docMgr;\n        }\n\n        private static SwDmDocumentType GetDocumentType(string filePath)\n        {\n            var docType = SwDmDocumentType.swDmDocumentUnknown;\n\n            switch (Path.GetExtension(filePath).ToUpper())\n            {\n                case ".SLDPRT":\n                    docType = SwDmDocumentType.swDmDocumentPart;\n                    break;\n                case ".SLDASM":\n                    docType = SwDmDocumentType.swDmDocumentAssembly;\n                    break;\n                case ".SLDDRW":\n                    docType = SwDmDocumentType.swDmDocumentDrawing;\n                    break;\n                default:\n                    throw new NotSupportedException("File type not supported");\n\n            }\n\n            return docType;\n        }\n    }\n}\n\n')),(0,a.kt)("h3",{id:"comstreamcs"},"ComStream.cs"),(0,a.kt)("p",null,"Wrapper around ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nn-objidl-istream"},"IStream")," interface which simplifies the access from .NET language"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing System.Runtime.InteropServices.ComTypes;\n\nnamespace ThirdPartyStorage\n{\n    public class ComStream : Stream\n    {\n        private readonly IStream m_ComStream;\n        private readonly bool m_Commit;\n\n        private bool m_IsWritable;\n\n        public override bool CanRead\n        {\n            get\n            {\n                return true;\n            }\n        }\n\n        public override bool CanSeek\n        {\n            get\n            {\n                return true;\n            }\n        }\n\n        public override bool CanWrite\n        {\n            get\n            {\n                return m_IsWritable;\n            }\n        }\n\n        public override long Length\n        {\n            get\n            {\n                const int STATSFLAG_NONAME = 1;\n\n                STATSTG statstg;\n\n                m_ComStream.Stat(out statstg, STATSFLAG_NONAME);\n\n                return statstg.cbSize;\n            }\n        }\n\n        public override long Position\n        {\n            get\n            {\n                return Seek(0, SeekOrigin.Current);\n            }\n            set\n            {\n                Seek(value, SeekOrigin.Begin);\n            }\n        }\n\n        public ComStream(IStream comStream, bool writable, bool commit = true)\n        {\n            if (comStream == null)\n            {\n                throw new ArgumentNullException(nameof(comStream));\n            }\n            \n            m_ComStream = comStream;\n            m_Commit = commit;\n            m_IsWritable = writable;\n        }\n\n        public override void Flush()\n        {\n            if (m_Commit)\n            {\n                const int STGC_DEFAULT = 0;\n\n                m_ComStream.Commit(STGC_DEFAULT);\n            }\n        }\n\n        public unsafe override int Read(byte[] buffer, int offset, int count)\n        {\n            if (offset != 0)\n            {\n                throw new NotSupportedException("Offset is not supported");\n            }\n\n            int bytesRead;\n\n            var address = new IntPtr(&bytesRead);\n\n            m_ComStream.Read(buffer, count, address);\n\n            return bytesRead;\n        }\n\n        public unsafe override long Seek(long offset, SeekOrigin origin)\n        {\n            long position = 0;\n\n            var address = new IntPtr(&position);\n\n            m_ComStream.Seek(offset, (int)origin, address);\n\n            return position;\n        }\n\n        public override void SetLength(long value)\n        {\n            m_ComStream.SetSize(value);\n        }\n        \n        public override void Write(byte[] buffer, int offset, int count)\n        {\n            if (offset != 0)\n            {\n                throw new NotSupportedException("Offset is not supported");\n            }\n\n            m_ComStream.Write(buffer, count, IntPtr.Zero);\n        }\n\n        protected override void Dispose(bool disposing)\n        {\n            try\n            {\n                if (disposing)\n                {\n                    m_IsWritable = false;\n                }\n            }\n            finally\n            {\n                base.Dispose(disposing);\n            }\n        }\n\n        ~ComStream()\n        {\n            Dispose(false);\n        }\n    }\n}\n\n')))}p.isMDXComponent=!0},95614:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/add-watermark-console-output-5d5ffe797eadb6a998a7443e119c4888.png"}}]);