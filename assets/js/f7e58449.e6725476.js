"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[96336],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>S});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(t),p=o,S=u["".concat(l,".").concat(p)]||u[p]||c[p]||a;return t?r.createElement(S,s(s({ref:n},m),{},{components:t})):r.createElement(S,s({ref:n},m))}));function S(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7660:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const a={title:"Tree structure serialization in model 3rd party storage using SOLIDWORKS API",caption:"Third Party Store Tree Serialization",description:"Example of usage of 3rd Party Storage (stream) to serialize and deserialize tree structure using SOLIDWORKS API and XmlSerializers within the model document",image:"read-data-result.png",labels:["serialization","third party store"]},s=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/tree-structure-serialization/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/tree-structure-serialization/index",title:"Tree structure serialization in model 3rd party storage using SOLIDWORKS API",description:"Example of usage of 3rd Party Storage (stream) to serialize and deserialize tree structure using SOLIDWORKS API and XmlSerializers within the model document",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/tree-structure-serialization/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/tree-structure-serialization",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/tree-structure-serialization/",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/tree-structure-serialization/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/tree-structure-serialization/index.md",tags:[],version:"current",frontMatter:{title:"Tree structure serialization in model 3rd party storage using SOLIDWORKS API",caption:"Third Party Store Tree Serialization",description:"Example of usage of 3rd Party Storage (stream) to serialize and deserialize tree structure using SOLIDWORKS API and XmlSerializers within the model document",image:"read-data-result.png",labels:["serialization","third party store"]},sidebar:"tutorialSidebar",previous:{title:"Serialize file content in model 3rd party storage using SOLIDWORKS API",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/third-party/embed-file/"},next:{title:"VBA macro to toggle white background in drawings",permalink:"/solidworks-GPT/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/toggle-drawing-background-white/"}},l={},d=[{value:"Usage Instructions",id:"usage-instructions",level:2}],m={toc:d},u="wrapper";function c(e){let{components:n,...a}=e;return(0,o.kt)(u,(0,r.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to use 3rd Party Storage in SOLIDWORKS API to read and write custom structure directly within the model."),(0,o.kt)("p",null,"Example SOLIDWORKS add-in is built using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/swex/add-in/"},"SwEx.AddIn")," framework but it could work with any other methods of creating the add-ins."),(0,o.kt)("p",null,"Add-in adds two buttons in the menu and toolbar and provides two handlers correspondingly: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SaveTree - asynchronous method to store the data in the stream. This method bumps the revision of the structure after each save."),(0,o.kt)("li",{parentName:"ul"},"LoadTree - loads the data from the stream and displays the name of the root element and the version")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Result displayed from the data read from the stream",src:t(18984).Z,width:"471",height:"171"}),"{ width=250 }"),(0,o.kt)("h2",{id:"usage-instructions"},"Usage Instructions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open any model"),(0,o.kt)("li",{parentName:"ul"},'Click "Save Data" button. First version of the structure is saved with the model'),(0,o.kt)("li",{parentName:"ul"},"You can close the model and SOLIDWORKS"),(0,o.kt)("li",{parentName:"ul"},'Reopen the model and click "Load Data". Information about saved structure is displayed in the message box'),(0,o.kt)("li",{parentName:"ul"},'Click "Save Data" button again. Data version is updated')),(0,o.kt)("p",null,"It is required to set the 'Allow unsafe code' option in the Visual Studio Project settings:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Allow unsafe code option in C# project",src:t(6207).Z,width:"1072",height:"553"}),"{ width=450 }"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TreeSerializerAddIn.cs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.AddIn;\nusing CodeStack.SwEx.AddIn.Attributes;\nusing SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System;\nusing System.Runtime.InteropServices;\nusing System.Threading.Tasks;\n\nnamespace TreeSerializer\n{\n    [ComVisible(true), Guid("6B8E1B39-5898-46F0-B8DE-753066A2326F")]\n    [AutoRegister("Tree Serializer", "Sample Demonstrating use of 3rd party store")]\n    public partial class TreeSerializer : SwAddInEx\n    {\n        private const string STREAM_NAME = "CodeStackSampleStream";\n\n        [CodeStack.SwEx.Common.Attributes.Title("Tree Serializer")]\n        public enum Commands_e\n        {\n            SaveToCurrentDoc,\n            LoadFromCurrentDoc\n        }\n\n        public override bool OnConnect()\n        {\n            AddCommandGroup<Commands_e>(OnButtonClick);\n            return true;\n        }\n\n        private async void OnButtonClick(Commands_e cmd)\n        {\n            switch (cmd)\n            {\n                case Commands_e.SaveToCurrentDoc:\n                    await SaveTree();\n                    break;\n\n                case Commands_e.LoadFromCurrentDoc:\n                    LoadTree();\n                    break;\n            }\n        }\n\n        private async Task SaveTree()\n        {\n            try\n            {\n                ElementsTree tree = null;\n\n                try\n                {\n                    tree = ReadDataFromDocument(App.IActiveDoc2);\n                    tree.Version = tree.Version + 1;\n                }\n                catch (ThirdPartyStreamNotFoundException)\n                {\n                    //create new tree only if stream was never created, show an error otherwise\n                    tree = new ElementsTree(1,\n                        new Element(1, "Root",\n                            new Element(2, "Level1-A",\n                                new Element(4, "Level2")),\n                            new Element(5, "Level1-B")));\n                }\n\n                await SaveDataToDocument(App.IActiveDoc2, tree);\n                App.SendMsgToUser2("Data saved",\n                    (int)swMessageBoxIcon_e.swMbInformation,\n                    (int)swMessageBoxBtn_e.swMbOk);\n            }\n            catch (Exception ex)\n            {\n                App.SendMsgToUser2(ex.Message,\n                    (int)swMessageBoxIcon_e.swMbStop,\n                    (int)swMessageBoxBtn_e.swMbOk);\n            }\n        }\n\n        private void LoadTree()\n        {\n            try\n            {\n                var readTree = ReadDataFromDocument(App.IActiveDoc2);\n                App.SendMsgToUser2($"Data Read for \'{readTree.Root.Name}\' ({readTree.Version})",\n                    (int)swMessageBoxIcon_e.swMbInformation,\n                    (int)swMessageBoxBtn_e.swMbOk);\n            }\n            catch (Exception ex)\n            {\n                App.SendMsgToUser2(ex.Message,\n                    (int)swMessageBoxIcon_e.swMbStop,\n                    (int)swMessageBoxBtn_e.swMbOk);\n            }\n        }\n    }\n}\n\n')),(0,o.kt)("p",null,"Structure used in this example represents the simple hierarchical data"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ElementsTree.cs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace TreeSerializer\n{\n    public class ElementsTree\n    {\n        public int Version { get; set; }\n        public Element Root { get; set; }\n\n        public ElementsTree()\n        {\n        }\n\n        public ElementsTree(int version, Element root)\n        {\n            Version = version;\n            Root = root;\n        }\n    }\n\n    public class Element\n    {\n        public int Id { get; set; }\n        public string Name { get; set; }\n        public Element[] Children { get; set; }\n\n        public Element()\n        {\n        }\n\n        public Element(int id, string name, params Element[] children)\n        {\n            Id = id;\n            Name = name;\n            Children = children;\n        }\n    }\n}\n\n")),(0,o.kt)("p",null,"For simplicity ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nn-objidl-istream"},"IStream")," com stream is wrapped into the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.io.stream?view=netframework-4.7.2"},"System.IO.Stream")," type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ComStream.cs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing System.Runtime.InteropServices.ComTypes;\n\nnamespace ThirdPartyStorage\n{\n    public class ComStream : Stream\n    {\n        private readonly IStream m_ComStream;\n        private readonly bool m_Commit;\n\n        private bool m_IsWritable;\n\n        public override bool CanRead\n        {\n            get\n            {\n                return true;\n            }\n        }\n\n        public override bool CanSeek\n        {\n            get\n            {\n                return true;\n            }\n        }\n\n        public override bool CanWrite\n        {\n            get\n            {\n                return m_IsWritable;\n            }\n        }\n\n        public override long Length\n        {\n            get\n            {\n                const int STATSFLAG_NONAME = 1;\n\n                STATSTG statstg;\n\n                m_ComStream.Stat(out statstg, STATSFLAG_NONAME);\n\n                return statstg.cbSize;\n            }\n        }\n\n        public override long Position\n        {\n            get\n            {\n                return Seek(0, SeekOrigin.Current);\n            }\n            set\n            {\n                Seek(value, SeekOrigin.Begin);\n            }\n        }\n\n        public ComStream(IStream comStream, bool writable, bool commit = true)\n        {\n            if (comStream == null)\n            {\n                throw new ArgumentNullException(nameof(comStream));\n            }\n            \n            m_ComStream = comStream;\n            m_Commit = commit;\n            m_IsWritable = writable;\n        }\n\n        public override void Flush()\n        {\n            if (m_Commit)\n            {\n                const int STGC_DEFAULT = 0;\n\n                m_ComStream.Commit(STGC_DEFAULT);\n            }\n        }\n\n        public unsafe override int Read(byte[] buffer, int offset, int count)\n        {\n            if (offset != 0)\n            {\n                throw new NotSupportedException("Offset is not supported");\n            }\n\n            int bytesRead;\n\n            var address = new IntPtr(&bytesRead);\n\n            m_ComStream.Read(buffer, count, address);\n\n            return bytesRead;\n        }\n\n        public unsafe override long Seek(long offset, SeekOrigin origin)\n        {\n            long position = 0;\n\n            var address = new IntPtr(&position);\n\n            m_ComStream.Seek(offset, (int)origin, address);\n\n            return position;\n        }\n\n        public override void SetLength(long value)\n        {\n            m_ComStream.SetSize(value);\n        }\n        \n        public override void Write(byte[] buffer, int offset, int count)\n        {\n            if (offset != 0)\n            {\n                throw new NotSupportedException("Offset is not supported");\n            }\n\n            m_ComStream.Write(buffer, count, IntPtr.Zero);\n        }\n\n        protected override void Dispose(bool disposing)\n        {\n            try\n            {\n                if (disposing)\n                {\n                    m_IsWritable = false;\n                }\n            }\n            finally\n            {\n                base.Dispose(disposing);\n            }\n        }\n\n        ~ComStream()\n        {\n            Dispose(false);\n        }\n    }\n}\n\n')),(0,o.kt)("p",null,"Serialization and deserialization routine utilizing the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.xml.serialization.xmlserializer?view=netframework-4.7.2"},"XmlSerializer")," class, but any other serialization methods could be used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TreeSerializer.cs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Runtime.InteropServices.ComTypes;\nusing System.Text;\nusing System.Threading.Tasks;\nusing System.Xml.Serialization;\nusing ThirdPartyStorage;\n\nnamespace TreeSerializer\n{\n    public partial class TreeSerializer\n    {\n        public class ThirdPartyStreamNotFoundException : Exception\n        {\n        }\n\n        private async Task SaveDataToDocument(IModelDoc2 model, ElementsTree data)\n        {\n            int err = -1;\n            int warn = -1;\n\n            model.SetSaveFlag();\n\n            const int S_OK = 0;\n\n            bool? result = null; ;\n\n            var onSaveToStorageNotifyFunc = new Func<int>(() =>\n            {\n                try\n                {\n                    StoreData(model, data, STREAM_NAME);\n                    result = true;\n                }\n                catch\n                {\n                    result = false;\n                }\n                return S_OK;\n            });\n\n            var partSaveToStorageNotify = new DPartDocEvents_SaveToStorageNotifyEventHandler(onSaveToStorageNotifyFunc);\n            var assmSaveToStorageNotify = new DAssemblyDocEvents_SaveToStorageNotifyEventHandler(onSaveToStorageNotifyFunc);\n            var drwSaveToStorageNotify = new DDrawingDocEvents_SaveToStorageNotifyEventHandler(onSaveToStorageNotifyFunc);\n\n            #region Attach Event Handlers\n\n            switch ((swDocumentTypes_e)model.GetType())\n            {\n                case swDocumentTypes_e.swDocPART:\n                    (model as PartDoc).SaveToStorageNotify += partSaveToStorageNotify;\n                    break;\n\n                case swDocumentTypes_e.swDocASSEMBLY:\n                    (model as AssemblyDoc).SaveToStorageNotify += assmSaveToStorageNotify;\n                    break;\n\n                case swDocumentTypes_e.swDocDRAWING:\n                    (model as DrawingDoc).SaveToStorageNotify += drwSaveToStorageNotify;\n                    break;\n            }\n\n            #endregion\n\n            if (!model.Save3((int)swSaveAsOptions_e.swSaveAsOptions_Silent, ref err, ref warn))\n            {\n                throw new InvalidOperationException($"Failed to save the model: {(swFileSaveError_e)err}");\n            }\n\n            await Task.Run(() =>\n            {\n                while (!result.HasValue)\n                {\n                    System.Threading.Thread.Sleep(10);\n                }\n            });\n\n            #region Detach Event Handlers\n\n            switch ((swDocumentTypes_e)model.GetType())\n            {\n                case swDocumentTypes_e.swDocPART:\n                    (model as PartDoc).SaveToStorageNotify -= partSaveToStorageNotify;\n                    break;\n\n                case swDocumentTypes_e.swDocASSEMBLY:\n                    (model as AssemblyDoc).SaveToStorageNotify -= assmSaveToStorageNotify;\n                    break;\n\n                case swDocumentTypes_e.swDocDRAWING:\n                    (model as DrawingDoc).SaveToStorageNotify -= drwSaveToStorageNotify;\n                    break;\n            }\n\n            #endregion\n\n            if (!result.Value)\n            {\n                throw new Exception("Failed to store the data");\n            }\n        }\n\n        private ElementsTree ReadDataFromDocument(IModelDoc2 model)\n        {\n            return ReadData<ElementsTree>(model, STREAM_NAME);\n        }\n\n        private void StoreData<T>(IModelDoc2 model, T data, string streamName)\n        {\n            try\n            {\n                var stream = model.IGet3rdPartyStorage(streamName, true) as IStream;\n\n                using (var comStr = new ComStream(stream, true, false))\n                {\n                    comStr.Seek(0, System.IO.SeekOrigin.Begin);\n                    var ser = new XmlSerializer(typeof(T));\n                    ser.Serialize(comStr, data);\n                }\n            }\n            catch\n            {\n                throw;\n            }\n            finally\n            {\n                model.IRelease3rdPartyStorage(streamName);\n            }\n        }\n\n        private T ReadData<T>(IModelDoc2 model, string streamName)\n        {\n            try\n            {\n                var stream = model.IGet3rdPartyStorage(streamName, false) as IStream;\n\n                if (stream != null)\n                {\n                    using (var comStr = new ComStream(stream, false))\n                    {\n                        comStr.Seek(0, System.IO.SeekOrigin.Begin);\n                        var ser = new XmlSerializer(typeof(T));\n                        return (T)ser.Deserialize(comStr);\n                    }\n                }\n                else\n                {\n                    throw new ThirdPartyStreamNotFoundException();\n                }\n            }\n            catch\n            {\n                throw;\n            }\n            finally\n            {\n                model.IRelease3rdPartyStorage(streamName);\n            }\n        }\n    }\n}\n\n')))}c.isMDXComponent=!0},18984:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdcAAACrCAMAAAADzSb9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAEXX+zx/sZNuMgAsfIKQs7b//0VOALDIwtjcnikAACjP5Krq8njC3YmHiHdMADlHdX3H4TQ0NH89NKO9udTZvN6UhgAANS9HkN+zZP//tklx1CUAMcLCwjRNr32PxITK7aNCL8XZ7TnD6nDb9ap5dABMnHq93xoaGp9bAFZ5zqK+m6paSu/Jwk8nNuvtqqa/2yVsvGa2tqmvwf7+/qC61rmHgVkAAFFadHB5jsmFNaOlrM10Yx9Aur/V7ABequWilNfc7d7e3uzFv73N9jiMxazF39v//41rMTgAZTxkyV2l3ZmZmnsyALnQ6anW4MrLyzxEZv//2xo/rZmr2evs7QAAWdvn9KK82F4rAJA6AJKt74/h9Do6kGa2/2YAOlqC5lRjk0dgsbLK5KNOP6+vr5m10ai33p2409qWXwA5j6vEwLZiV9W7fOPj5BtLUs3T1kOJ3Fd0u+i9tSJCrkEAAIib0Jrd37h+M//bkKimfKjC3UXN8ZA6ZkMUIjVZuCtGu9/r7rbZ222N3pVrZ9re4JORkbuam+S0q71+c9jl87ZmANmajpBmkEJCQlN832YAZmZ7sDgAOK6/57pJM7u7u5acrwAAZczY3FrS8P+2ZoKd4eDc3JHC3UBQlMvd719jcTZKhUFozcNdShw/s9PT08PQ1DqQ23+Gm6iKWKOiogAAAL5SPbbO5yFBoUUsAO/w8OemmdXZ21NWZSxIrDpPoKSot7TG8iJBw5BBOWd/whQWFjzN8sru8TZew5Db/wAsWk9noiUrAABUn+ru+NHd4WZmtlONuUPV+pg3JGKJ6duQOppVTOKbjdHW2ChOoU112XS82D7Q9JWhyNJ+biFIsHqV2KrDntPi8aHm9EJdordCK16p7kRs0W98nZbH4chpV7O1vImXvou82CxUu+vLhWeF0QBmtkhpusTFySlHn6uqqhxBq109Tersy2YAAB5CseipnMW8vPPSy0JMcWBtj+Xw8qyvtkQAMqCcnL29wE9bgrW1tXRqeodKQgAAAK3MEkwAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wD//////////////////////////////////////////////////////////////////////////////////////////////////////////////wBjdtMfAAAACXBIWXMAAA7DAAAOwwHHb6hkAAANbElEQVR4Xu3dD3wT5RnA8dgWN6u2iE4QDIzhqgVBGFFkHZsL0lWoLBSCtO4Pf+yGqBGwRWhZwHUWJ0ymW6qCMst6DvKZLksoU4Z1DhxubNPBkM0NHIpICU4cKgMyP3ue933ukjRNcnHtenl9fh9t3rt7c90n376XaynO5uBUjF3VjF3VjF3VjF3VjF3VjF3VjF3VjF3VjF3VLMa1D5fVXXYZQWKGa5/7fB4actnZXbf/kkZR1z6Nnm9wWd4zXzZgddf7mFWBnrmdOHXXPj46wmV15+jvsborL1clSnB10AEuq/trH+kZdZ3LKRC7qlmi65WcAn2FXZWMXbOjzW950/fWZprNrtnSiBXH07diBM1m12zJe/yd9B330mx2zZa8x3+ePnbNurzDr0nf8FSuMzgL5h3+h2hXhUKhq2Ie9YZ7afaMGWlcC202W5E+yHsdB2KzDLfgAzTK2FkYnRCdjlNwTxl+2IizjXNy5vOOJzssBFChT194lXi8kHZC4026XlCJr/9/Xp8xrBaRCqf/idiACXYIqmG1sHcjHrmgsu8k/Lig4/RhtaCJk+vyF0TPyWWSd/yF0dATYOXDd2knZNa17mKAwuRKFEgdXQWUmFh38a8XyOd0nE6Tha9xTi6T4lxJVHz4jlnXkdGG1S6IewSTkYVFYghUI8vkEBbrBZWjYFcRHtuY93rCdJxYViQmGefiMirOlWChOFZwpdkjR6Z0HVlmQwqQO1ds7gUTw/VR3RX5cFg4aiPshOMdp+MEUofonFxGeVf9LbanJWzo/N/SDtGqqOslCa71sdXl20bV1wOU2AKo+sIiMQTX+jI53PvvSTgDHvAfmBI3HW+gHoWNMlvfSWIvnZPLqARXNxY6fzDtEK3y0uz6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"},6207:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vs-setting-allow-unsafe-code-b3355966c240830e7b7f9896be557af2.png"}}]);