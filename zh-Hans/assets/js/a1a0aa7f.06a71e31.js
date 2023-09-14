"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[48117],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),m=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=m(e.components);return o.createElement(p.Provider,{value:n},e.children)},S="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),S=m(t),u=r,d=S["".concat(p,".").concat(u)]||S[u]||l[u]||s;return t?o.createElement(d,a(a({ref:n},c),{},{components:t})):o.createElement(d,a({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[S]="string"==typeof e?e:r,a[1]=i;for(var m=2;m<s;m++)a[m]=t[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var o=t(87462),r=(t(67294),t(3905));const s={title:"Save custom properties revisions into 3rd party storage store using SOLIDWORKS API",caption:"Save Custom Properties Revisions",description:"Saving custom properties revisions (snapshots) into document 3rd party storage store using SOLIDWORKS API",image:"properties-snapshots-data.png",labels:["storage","3rd party","custom properties"]},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/custom-properties-revisions/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/custom-properties-revisions/index",title:"Save custom properties revisions into 3rd party storage store using SOLIDWORKS API",description:"Saving custom properties revisions (snapshots) into document 3rd party storage store using SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/custom-properties-revisions/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/custom-properties-revisions",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/custom-properties-revisions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/custom-properties-revisions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/custom-properties-revisions/index.md",tags:[],version:"current",frontMatter:{title:"Save custom properties revisions into 3rd party storage store using SOLIDWORKS API",caption:"Save Custom Properties Revisions",description:"Saving custom properties revisions (snapshots) into document 3rd party storage store using SOLIDWORKS API",image:"properties-snapshots-data.png",labels:["storage","3rd party","custom properties"]},sidebar:"tutorialSidebar",previous:{title:"Data saving in the 3rd party storage using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/"},next:{title:"Serialize file content in model 3rd party storage using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/data-storage/third-party/embed-file/"}},p={},m=[{value:"Usage Instructions",id:"usage-instructions",level:2},{value:"PropertiesSnapshot.cs",id:"propertiessnapshotcs",level:3},{value:"CustomPropertiesRevisionsAddIn.cs",id:"custompropertiesrevisionsaddincs",level:3},{value:"CustomPropertiesRevisions.cs",id:"custompropertiesrevisionscs",level:3},{value:"ComStorage.cs",id:"comstoragecs",level:3},{value:"ComStream.cs",id:"comstreamcs",level:3}],c={toc:m},S="wrapper";function l(e){let{components:n,...s}=e;return(0,r.kt)(S,(0,o.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom Properties",src:t(54555).Z,width:"1022",height:"595"}),"{ width=450 }"),(0,r.kt)("p",null,"This example demonstrates how to utilize 3rd party storage store to save file custom properties revisions using SOLIDWORKS API."),(0,r.kt)("p",null,"This add-in is built using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/swex/add-in/"},"SwEx.AddIn")," framework but it could work with any other methods of creating the add-ins."),(0,r.kt)("p",null,"Add-in adds two buttons in the menu and toolbar and provides two handlers correspondingly: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TakeCustomPropertiesSnapshot - reads current state of custom properties and serializes it to the 3rd party storage"),(0,r.kt)("li",{parentName:"ul"},"LoadSnapshots - loads all revisions and displays the message box")),(0,r.kt)("p",null,"The snapshot of each revision is stored within the storages (streams) in 3rd party sub store, while information about all available snapshots is saved into the sub stream of 3rd party storage."),(0,r.kt)("h2",{id:"usage-instructions"},"Usage Instructions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open any existing SOLIDWORKS models (part, assembly or drawing)"),(0,r.kt)("li",{parentName:"ul"},"Add some custom properties into ",(0,r.kt)("em",{parentName:"li"},"Custom")," tab"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("em",{parentName:"li"},"TakeCustomPropertiesSnapshot")," from the ",(0,r.kt)("em",{parentName:"li"},"Tools\\Custom Properties Revisions")," menu"),(0,r.kt)("li",{parentName:"ul"},"Modify properties and click ",(0,r.kt)("em",{parentName:"li"},"TakeCustomPropertiesSnapshot")," again. Repeat if needed"),(0,r.kt)("li",{parentName:"ul"},"You can close and reopen the model and SOLIDWORKS. Click ",(0,r.kt)("em",{parentName:"li"},"LoadSnapshots")," command. All properties revisions are displayed in the message box")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"All properties revisions displayed in the message box",src:t(77838).Z,width:"538",height:"416"}),"{ width=450 }"),(0,r.kt)("h3",{id:"propertiessnapshotcs"},"PropertiesSnapshot.cs"),(0,r.kt)("p",null,"Structures to serialize properties and info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\nusing System.Collections.Generic;\nusing System.Runtime.Serialization;\n\nnamespace CodeStack\n{\n    [DataContract]\n    public class SnapshotInfo\n    {\n        [DataMember]\n        public int Revision { get; set; }\n        \n        [DataMember]\n        public DateTime TimeStamp { get; set; }\n    }\n\n    [DataContract]\n    public class PropertiesSnapshot\n    {\n        [DataMember]\n        public Dictionary<string, string> Properties { get; set; }\n    }\n}\n\n")),(0,r.kt)("h3",{id:"custompropertiesrevisionsaddincs"},"CustomPropertiesRevisionsAddIn.cs"),(0,r.kt)("p",null,"Add-in class which is handling the menu commands and reads and outputs the data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.AddIn;\nusing CodeStack.SwEx.AddIn.Attributes;\nusing SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Runtime.InteropServices;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CodeStack\n{\n    [ComVisible(true), Guid("46919A47-EE80-445B-A87D-0C831B4B7E44")]\n    [AutoRegister("Custom Properties Revisions", "Sample Demonstrating use of 3rd party storage store")]\n    public partial class CustomPropertiesRevisions : SwAddInEx\n    {\n        private const string STORAGE_NAME = "CustPrpRevisions";\n        private const string SNAPSHOT_INFO_STREAM_NAME = "SnapshotInfos";\n        private const string SNAPSHOT_STREAM_NAME_TEMPLATE = "Snapshots\\\\{0}";\n\n        [SwEx.Common.Attributes.Title("Custom Properties Revisions")]\n        public enum Commands_e\n        {\n            TakeCustomPropertiesSnapshot,\n            LoadSnapshots\n        }\n\n        public override bool OnConnect()\n        {\n            AddCommandGroup<Commands_e>(OnButtonClick);\n\n            return true;\n        }\n\n        private async void OnButtonClick(Commands_e cmd)\n        {\n            switch (cmd)\n            {\n                case Commands_e.TakeCustomPropertiesSnapshot:\n                    await TakeCustomPropertiesSnapshot();\n                    break;\n\n                case Commands_e.LoadSnapshots:\n                    LoadSnapshots();\n                    break;\n            }\n        }\n\n        private async Task TakeCustomPropertiesSnapshot()\n        {\n            try\n            {\n                var snapshot = GetSnapshot(App.IActiveDoc2);\n                \n                await SaveSnapshotToDocument(App.IActiveDoc2, snapshot);\n\n                App.SendMsgToUser2("Snapshot is saved",\n                    (int)swMessageBoxIcon_e.swMbInformation,\n                    (int)swMessageBoxBtn_e.swMbOk);\n            }\n            catch (Exception ex)\n            {\n                App.SendMsgToUser2(ex.Message,\n                    (int)swMessageBoxIcon_e.swMbStop,\n                    (int)swMessageBoxBtn_e.swMbOk);\n            }\n        }\n        \n        private void LoadSnapshots()\n        {\n            try\n            {\n                var snapshotsInfo = GetSnapshotInfos(App.IActiveDoc2);\n\n                var msg = new StringBuilder();\n\n                foreach (var snapshotInfo in snapshotsInfo)\n                {   \n                    var snapshot = ReadSnapshotFromDocument(App.IActiveDoc2,\n                        string.Format(SNAPSHOT_STREAM_NAME_TEMPLATE, snapshotInfo.Revision));\n\n                    msg.AppendLine($"Snapshot {snapshotInfo.Revision} ({snapshotInfo.TimeStamp})");\n                    msg.AppendLine(string.Join(System.Environment.NewLine, snapshot.Properties.Select(p => $"{p.Key}: {p.Value}").ToArray()));\n                    msg.AppendLine("---------");\n                }\n\n                App.SendMsgToUser2(msg.ToString(),\n                    (int)swMessageBoxIcon_e.swMbInformation,\n                    (int)swMessageBoxBtn_e.swMbOk);\n            }\n            catch (Exception ex)\n            {\n                App.SendMsgToUser2(ex.Message,\n                    (int)swMessageBoxIcon_e.swMbStop,\n                    (int)swMessageBoxBtn_e.swMbOk);\n            }\n        }\n\n        private PropertiesSnapshot GetSnapshot(IModelDoc2 model)\n        {\n            var snaphot = new PropertiesSnapshot()\n            {\n                Properties = new Dictionary<string, string>()\n            };\n\n            var prpMgr = model.Extension.CustomPropertyManager[""];\n\n            var prpNames = prpMgr.GetNames() as string[];\n\n            if (prpNames != null)\n            {\n                foreach (var prpName in prpNames)\n                {\n                    string val;\n                    string resVal;\n                    bool wasRes;\n                    prpMgr.Get5(prpName, false, out val, out resVal, out wasRes);\n                    snaphot.Properties.Add(prpName, resVal);\n                }\n            }\n\n            return snaphot;\n        }\n    }\n}\n\n')),(0,r.kt)("h3",{id:"custompropertiesrevisionscs"},"CustomPropertiesRevisions.cs"),(0,r.kt)("p",null,"Functions to access storage and store to serialize and deserialize the data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Runtime.InteropServices.ComTypes;\nusing System.Runtime.Serialization;\nusing System.Text;\nusing System.Threading.Tasks;\nusing System.Xml.Serialization;\nusing ThirdPartyStorage;\n\nnamespace CodeStack\n{\n    public partial class CustomPropertiesRevisions\n    {\n        public class ThirdPartyStoreNotFoundException : Exception\n        {\n        }\n\n        private async Task SaveSnapshotToDocument(IModelDoc2 model, PropertiesSnapshot data)\n        {\n            int err = -1;\n            int warn = -1;\n\n            model.SetSaveFlag();\n\n            const int S_OK = 0;\n\n            bool? result = null; ;\n\n            var onSaveToStorageStoreNotifyFunc = new Func<int>(() =>\n            {\n                try\n                {\n                    StoreData(model, data, STORAGE_NAME, storage =>\n                    {\n                        string snapshotName = "";\n\n                        AccessStreamFromPath(storage, SNAPSHOT_INFO_STREAM_NAME, true, true, stream =>\n                        {\n                            var ser = new DataContractSerializer(typeof(List<SnapshotInfo>));\n\n                            List<SnapshotInfo> snapshotInfos = null;\n\n                            if (stream.Length > 0)\n                            {\n                                snapshotInfos = ser.ReadObject(stream) as List<SnapshotInfo>;\n                            }\n                            else\n                            {\n                                snapshotInfos = new List<SnapshotInfo>();\n                            }\n\n                            var info = new SnapshotInfo()\n                            {\n                                Revision = snapshotInfos.Count + 1,\n                                TimeStamp = DateTime.Now\n                            };\n\n                            snapshotInfos.Add(info);\n\n                            snapshotName = string.Format(SNAPSHOT_STREAM_NAME_TEMPLATE, info.Revision);\n\n                            stream.Seek(0, System.IO.SeekOrigin.Begin);\n\n                            ser.WriteObject(stream, snapshotInfos);\n                        }, STGM.STGM_READWRITE | STGM.STGM_SHARE_EXCLUSIVE);\n\n                        AccessStreamFromPath(storage, snapshotName, true, true, stream =>\n                        {\n                            var ser = new DataContractSerializer(typeof(PropertiesSnapshot));\n                            ser.WriteObject(stream, data);\n                        }, STGM.STGM_READWRITE | STGM.STGM_SHARE_EXCLUSIVE);\n\n                        result = true;\n                    });\n                }\n                catch\n                {\n                    result = false;\n                }\n                return S_OK;\n            });\n\n            var partSaveToStorageNotify = new DPartDocEvents_SaveToStorageStoreNotifyEventHandler(onSaveToStorageStoreNotifyFunc);\n            var assmSaveToStorageNotify = new DAssemblyDocEvents_SaveToStorageStoreNotifyEventHandler(onSaveToStorageStoreNotifyFunc);\n            var drwSaveToStorageNotify = new DDrawingDocEvents_SaveToStorageStoreNotifyEventHandler(onSaveToStorageStoreNotifyFunc);\n\n            #region Attach Event Handlers\n\n            switch ((swDocumentTypes_e)model.GetType())\n            {\n                case swDocumentTypes_e.swDocPART:\n                    (model as PartDoc).SaveToStorageStoreNotify += partSaveToStorageNotify;\n                    break;\n\n                case swDocumentTypes_e.swDocASSEMBLY:\n                    (model as AssemblyDoc).SaveToStorageStoreNotify += assmSaveToStorageNotify;\n                    break;\n\n                case swDocumentTypes_e.swDocDRAWING:\n                    (model as DrawingDoc).SaveToStorageStoreNotify += drwSaveToStorageNotify;\n                    break;\n            }\n\n            #endregion\n\n            if (!model.Save3((int)swSaveAsOptions_e.swSaveAsOptions_Silent, ref err, ref warn))\n            {\n                throw new InvalidOperationException($"Failed to save the model: {(swFileSaveError_e)err}");\n            }\n\n            await Task.Run(() =>\n            {\n                while (!result.HasValue)\n                {\n                    System.Threading.Thread.Sleep(10);\n                }\n            });\n\n            #region Detach Event Handlers\n\n            switch ((swDocumentTypes_e)model.GetType())\n            {\n                case swDocumentTypes_e.swDocPART:\n                    (model as PartDoc).SaveToStorageStoreNotify -= partSaveToStorageNotify;\n                    break;\n\n                case swDocumentTypes_e.swDocASSEMBLY:\n                    (model as AssemblyDoc).SaveToStorageStoreNotify -= assmSaveToStorageNotify;\n                    break;\n\n                case swDocumentTypes_e.swDocDRAWING:\n                    (model as DrawingDoc).SaveToStorageStoreNotify -= drwSaveToStorageNotify;\n                    break;\n            }\n\n            #endregion\n\n            if (!result.Value)\n            {\n                throw new Exception("Failed to store the data");\n            }\n        }\n\n        private PropertiesSnapshot ReadSnapshotFromDocument(IModelDoc2 model, string revName)\n        {\n            return ReadData<PropertiesSnapshot>(model, STORAGE_NAME, revName);\n        }\n\n        private SnapshotInfo[] GetSnapshotInfos(IModelDoc2 model)\n        {\n            return ReadData<SnapshotInfo[]>(model, STORAGE_NAME, SNAPSHOT_INFO_STREAM_NAME);\n        }\n\n        private void StoreData<T>(IModelDoc2 model, T data, string storageName, Action<ComStorage> action)\n        {\n            try\n            {\n                var storage = model.Extension.IGet3rdPartyStorageStore(storageName, true) as IStorage;\n\n                using (var comStorage = new ComStorage(storage, true))\n                {\n                    action.Invoke(comStorage);\n                }\n            }\n            catch\n            {\n                throw;\n            }\n            finally\n            {\n                model.Extension.IRelease3rdPartyStorageStore(storageName);\n            }\n        }\n\n        private T ReadData<T>(IModelDoc2 model, string storageName, string streamName)\n        {\n            T data = default(T);\n\n            ReadStorage(model, storageName, storage => \n            {\n                AccessStreamFromPath(storage, streamName, false, false, stream=> \n                {\n                    var ser = new DataContractSerializer(typeof(T));\n                    data = (T)ser.ReadObject(stream);\n                });\n            });\n\n            return data;\n        }\n\n        private void AccessStreamFromPath(ComStorage storage, string path, bool writable,\n            bool createIfNotExist, Action<ComStream> action, STGM mode = STGM.STGM_SHARE_EXCLUSIVE)\n        {\n            var parentIndex = path.IndexOf(\'\\\\\');\n\n            if (parentIndex == -1)\n            {\n                IStream stream = null;\n\n                try\n                {\n                    stream = storage.OpenStream(path, mode);\n                }\n                catch\n                {\n                    if (createIfNotExist)\n                    {\n                        stream = storage.CreateStream(path);\n                    }\n                    else\n                    {\n                        throw;\n                    }\n                }\n\n                using (var comStream = new ComStream(stream, writable))\n                {\n                    action.Invoke(comStream);\n                }\n            }\n            else\n            {\n                var subStorageName = path.Substring(0, parentIndex);\n\n                IStorage subStorage;\n\n                try\n                {\n                    subStorage = storage.OpenStorage(subStorageName, mode);\n                }\n                catch\n                {\n                    if (createIfNotExist)\n                    {\n                        subStorage = storage.CreateStorage(subStorageName);\n                    }\n                    else\n                    {\n                        throw;\n                    }\n                }\n                \n                using (var subComStorage = new ComStorage(subStorage, false))\n                {\n                    var nextLevelPath = path.Substring(parentIndex + 1);\n                    AccessStreamFromPath(subComStorage, nextLevelPath, writable, createIfNotExist, action);\n                }\n            }\n        }\n\n        private void ReadStorage(IModelDoc2 model, string storageName, Action<ComStorage> action)\n        {\n            try\n            {\n                var storage = model.Extension.IGet3rdPartyStorageStore(storageName, false) as IStorage;\n\n                if (storage != null)\n                {\n                    using (var comStorage = new ComStorage(storage, false))\n                    {\n                        action.Invoke(comStorage);\n                    }\n                }\n                else\n                {\n                    throw new ThirdPartyStoreNotFoundException();\n                }\n            }\n            catch\n            {\n                throw;\n            }\n            finally\n            {\n                model.Extension.IRelease3rdPartyStorageStore(storageName);\n            }\n        }\n    }\n}\n\n')),(0,r.kt)("h3",{id:"comstoragecs"},"ComStorage.cs"),(0,r.kt)("p",null,"Wrapper around ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nn-objidl-istorage"},"IStorage")," interface which simplifies the access from .NET language"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Collections.Generic;\nusing System.Runtime.InteropServices;\nusing System.Diagnostics;\nusing System.IO;\nusing System.Runtime.InteropServices.ComTypes;\n\nnamespace ThirdPartyStorage\n{\n    #region WinAPI\n\n    [Flags]\n    public enum STGM : int\n    {\n        STGM_READ = 0x0,\n        STGM_WRITE = 0x1,\n        STGM_READWRITE = 0x2,\n        STGM_SHARE_DENY_NONE = 0x40,\n        STGM_SHARE_DENY_READ = 0x30,\n        STGM_SHARE_DENY_WRITE = 0x20,\n        STGM_SHARE_EXCLUSIVE = 0x10,\n        STGM_PRIORITY = 0x40000,\n        STGM_CREATE = 0x1000,\n        STGM_CONVERT = 0x20000,\n        STGM_FAILIFTHERE = 0x0,\n        STGM_DIRECT = 0x0,\n        STGM_TRANSACTED = 0x10000,\n        STGM_NOSCRATCH = 0x100000,\n        STGM_NOSNAPSHOT = 0x200000,\n        STGM_SIMPLE = 0x8000000,\n        STGM_DIRECT_SWMR = 0x400000,\n        STGM_DELETEONRELEASE = 0x4000000\n    }\n\n    public enum STGTY : int\n    {\n        STGTY_STORAGE = 1,\n        STGTY_STREAM = 2,\n        STGTY_LOCKBYTES = 3,\n        STGTY_PROPERTY = 4\n    };\n\n    [ComImport]\n    [Guid("0000000d-0000-0000-C000-000000000046")]\n    [InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]\n    public interface IEnumSTATSTG\n    {\n        [PreserveSig]\n        uint Next(uint celt,\n        [MarshalAs(UnmanagedType.LPArray), Out]\n        System.Runtime.InteropServices.ComTypes.STATSTG[] rgelt,\n        out uint pceltFetched\n        );\n\n        void Skip(uint celt);\n\n        void Reset();\n\n        [return: MarshalAs(UnmanagedType.Interface)]\n        IEnumSTATSTG Clone();\n    }\n\n    [ComImport]\n    [Guid("0000000b-0000-0000-C000-000000000046")]\n    [InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]\n    public interface IStorage\n    {\n        void CreateStream(string pwcsName, uint grfMode, uint reserved1, uint reserved2, out IStream ppstm);\n        void OpenStream(string pwcsName, IntPtr reserved1, uint grfMode, uint reserved2, out IStream ppstm);\n        void CreateStorage(string pwcsName, uint grfMode, uint reserved1, uint reserved2, out IStorage ppstg);\n        void OpenStorage(string pwcsName, IStorage pstgPriority, uint grfMode, IntPtr snbExclude, uint reserved, out IStorage ppstg);\n        void CopyTo(uint ciidExclude, Guid rgiidExclude, IntPtr snbExclude, IStorage pstgDest);\n        void MoveElementTo(string pwcsName, IStorage pstgDest, string pwcsNewName, uint grfFlags);\n        void Commit(uint grfCommitFlags);\n        void Revert();\n        void EnumElements(uint reserved1, IntPtr reserved2, uint reserved3, out IEnumSTATSTG ppenum);\n        void DestroyElement(string pwcsName);\n        void RenameElement(string pwcsOldName, string pwcsNewName);\n        void SetElementTimes(string pwcsName, System.Runtime.InteropServices.ComTypes.FILETIME pctime, System.Runtime.InteropServices.ComTypes.FILETIME patime, System.Runtime.InteropServices.ComTypes.FILETIME pmtime);\n        void SetClass(Guid clsid);\n        void SetStateBits(uint grfStateBits, uint grfMask);\n        void Stat(out System.Runtime.InteropServices.ComTypes.STATSTG pstatstg, uint grfStatFlag);\n    }\n\n    #endregion\n\n    public class ComStorage : IDisposable\n    {\n        [DllImport("ole32.dll")]\n        public static extern int StgOpenStorage(\n            [MarshalAs(UnmanagedType.LPWStr)] string pwcsName,\n            IStorage pstgPriority,\n            int grfMode,\n            IntPtr snbExclude,\n            uint reserved,\n            out IStorage ppstgOpen);\n\n        private IStorage m_Storage;\n        private bool m_IsWritable;\n\n        public ComStorage(IStorage storage, bool writable)\n        {\n            if (storage == null)\n            {\n                throw new ArgumentNullException(nameof(storage));\n            }\n\n            m_IsWritable = writable;\n            m_Storage = storage;\n        }\n\n        public IStorage OpenStorage(string storageName, STGM mode = STGM.STGM_SHARE_EXCLUSIVE)\n        {\n            IStorage storage;\n\n            m_Storage.OpenStorage(storageName, null,\n                (uint)mode, IntPtr.Zero, 0, out storage);\n\n            return storage;\n        }\n\n        public IStream OpenStream(string streamName, STGM mode = STGM.STGM_SHARE_EXCLUSIVE)\n        {\n            IStream stream = null;\n\n            m_Storage.OpenStream(streamName,\n                IntPtr.Zero, (uint)mode, 0, out stream);\n\n            return stream;\n        }\n\n        public IStream CreateStream(string streamName)\n        {\n            IStream stream = null;\n\n            m_Storage.CreateStream(streamName,\n                (uint)STGM.STGM_CREATE | (uint)STGM.STGM_SHARE_EXCLUSIVE | (uint)STGM.STGM_WRITE,\n                0, 0, out stream);\n\n            return stream;\n        }\n\n        public IStorage CreateStorage(string streamName)\n        {\n            IStorage storage = null;\n\n            m_Storage.CreateStorage(streamName,\n                (uint)STGM.STGM_CREATE | (uint)STGM.STGM_SHARE_EXCLUSIVE | (uint)STGM.STGM_WRITE,\n                0, 0, out storage);\n\n            return storage;\n        }\n\n        public IEnumerable<System.Runtime.InteropServices.ComTypes.STATSTG> EnumElements()\n        {\n            IEnumSTATSTG ssenum = null;\n\n            m_Storage.EnumElements(0, IntPtr.Zero, 0, out ssenum);\n\n            var ssstruct = new System.Runtime.InteropServices.ComTypes.STATSTG[1];\n\n            uint numReturned;\n\n            do\n            {\n                ssenum.Next(1, ssstruct, out numReturned);\n\n                if (numReturned != 0)\n                {\n                    yield return ssstruct[0];\n                }\n            } while (numReturned > 0);\n        }\n\n        public void Close()\n        {\n            if (m_Storage != null)\n            {\n                if (m_IsWritable)\n                {\n                    m_Storage.Commit(0);\n                }\n\n                Marshal.ReleaseComObject(m_Storage);\n                m_Storage = null;\n                GC.SuppressFinalize(this);\n            }\n        }\n\n        public void Dispose()\n        {\n            Close();\n        }\n    }\n}\n\n')),(0,r.kt)("h3",{id:"comstreamcs"},"ComStream.cs"),(0,r.kt)("p",null,"Wrapper around ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nn-objidl-istream"},"IStream")," interface which simplifies the access from .NET language"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing System.Runtime.InteropServices.ComTypes;\n\nnamespace ThirdPartyStorage\n{\n    public class ComStream : Stream\n    {\n        private readonly IStream m_ComStream;\n        private readonly bool m_Commit;\n\n        private bool m_IsWritable;\n\n        public override bool CanRead\n        {\n            get\n            {\n                return true;\n            }\n        }\n\n        public override bool CanSeek\n        {\n            get\n            {\n                return true;\n            }\n        }\n\n        public override bool CanWrite\n        {\n            get\n            {\n                return m_IsWritable;\n            }\n        }\n\n        public override long Length\n        {\n            get\n            {\n                const int STATSFLAG_NONAME = 1;\n\n                STATSTG statstg;\n\n                m_ComStream.Stat(out statstg, STATSFLAG_NONAME);\n\n                return statstg.cbSize;\n            }\n        }\n\n        public override long Position\n        {\n            get\n            {\n                return Seek(0, SeekOrigin.Current);\n            }\n            set\n            {\n                Seek(value, SeekOrigin.Begin);\n            }\n        }\n\n        public ComStream(IStream comStream, bool writable, bool commit = true)\n        {\n            if (comStream == null)\n            {\n                throw new ArgumentNullException(nameof(comStream));\n            }\n            \n            m_ComStream = comStream;\n            m_Commit = commit;\n            m_IsWritable = writable;\n        }\n\n        public override void Flush()\n        {\n            if (m_Commit)\n            {\n                const int STGC_DEFAULT = 0;\n\n                m_ComStream.Commit(STGC_DEFAULT);\n            }\n        }\n\n        public unsafe override int Read(byte[] buffer, int offset, int count)\n        {\n            if (offset != 0)\n            {\n                throw new NotSupportedException("Offset is not supported");\n            }\n\n            int bytesRead;\n\n            var address = new IntPtr(&bytesRead);\n\n            m_ComStream.Read(buffer, count, address);\n\n            return bytesRead;\n        }\n\n        public unsafe override long Seek(long offset, SeekOrigin origin)\n        {\n            long position = 0;\n\n            var address = new IntPtr(&position);\n\n            m_ComStream.Seek(offset, (int)origin, address);\n\n            return position;\n        }\n\n        public override void SetLength(long value)\n        {\n            m_ComStream.SetSize(value);\n        }\n        \n        public override void Write(byte[] buffer, int offset, int count)\n        {\n            if (offset != 0)\n            {\n                throw new NotSupportedException("Offset is not supported");\n            }\n\n            m_ComStream.Write(buffer, count, IntPtr.Zero);\n        }\n\n        protected override void Dispose(bool disposing)\n        {\n            try\n            {\n                if (disposing)\n                {\n                    m_IsWritable = false;\n                }\n            }\n            finally\n            {\n                base.Dispose(disposing);\n            }\n        }\n\n        ~ComStream()\n        {\n            Dispose(false);\n        }\n    }\n}\n\n')))}l.isMDXComponent=!0},54555:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/custom-properties-e5792da09dd72988318fa1b28307a527.png"},77838:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/properties-snapshots-data-334bbc64d5bb62e59dd7d68556d4860f.png"}}]);