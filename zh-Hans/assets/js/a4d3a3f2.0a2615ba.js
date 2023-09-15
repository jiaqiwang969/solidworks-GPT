"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[88289],{3905:(n,e,t)=>{t.d(e,{Zo:()=>S,kt:()=>d});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},s=Object.keys(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var m=o.createContext({}),p=function(n){var e=o.useContext(m),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},S=function(n){var e=p(n.components);return o.createElement(m.Provider,{value:e},n.children)},c="mdxType",l={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,s=n.originalType,m=n.parentName,S=i(n,["components","mdxType","originalType","parentName"]),c=p(t),u=r,d=c["".concat(m,".").concat(u)]||c[u]||l[u]||s;return t?o.createElement(d,a(a({ref:e},S),{},{components:t})):o.createElement(d,a({ref:e},S))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=t.length,a=new Array(s);a[0]=u;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=n,i[c]="string"==typeof n?n:r,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},21305:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const s={title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u81ea\u5b9a\u4e49\u5c5e\u6027\u4fee\u8ba2\u4fdd\u5b58\u5230\u7b2c\u4e09\u65b9\u5b58\u50a8\u5b58\u50a8",image:"properties-snapshots-data.png",labels:["\u5b58\u50a8","\u7b2c\u4e09\u65b9","\u81ea\u5b9a\u4e49\u5c5e\u6027"]},a=void 0,i={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties-revisions/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties-revisions/index",title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u81ea\u5b9a\u4e49\u5c5e\u6027\u4fee\u8ba2\u4fdd\u5b58\u5230\u7b2c\u4e09\u65b9\u5b58\u50a8\u5b58\u50a8",description:"\u81ea\u5b9a\u4e49\u5c5e\u6027{ width=450 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties-revisions/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties-revisions",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties-revisions/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties-revisions/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties-revisions/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u81ea\u5b9a\u4e49\u5c5e\u6027\u4fee\u8ba2\u4fdd\u5b58\u5230\u7b2c\u4e09\u65b9\u5b58\u50a8\u5b58\u50a8",image:"properties-snapshots-data.png",labels:["\u5b58\u50a8","\u7b2c\u4e09\u65b9","\u81ea\u5b9a\u4e49\u5c5e\u6027"]},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/custom-properties/write-summary-information/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u7ba1\u7406\u5207\u5272\u6e05\u5355\u4f53",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/cut-lists/"}},m={},p=[{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"PropertiesSnapshot.cs",id:"propertiessnapshotcs",level:3},{value:"CustomPropertiesRevisionsAddIn.cs",id:"custompropertiesrevisionsaddincs",level:3},{value:"CustomPropertiesRevisions.cs",id:"custompropertiesrevisionscs",level:3},{value:"ComStorage.cs",id:"comstoragecs",level:3},{value:"ComStream.cs",id:"comstreamcs",level:3}],S={toc:p},c="wrapper";function l(n){let{components:e,...s}=n;return(0,r.kt)(c,(0,o.Z)({},S,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u81ea\u5b9a\u4e49\u5c5e\u6027",src:t(4449).Z,width:"1022",height:"595"}),"{ width=450 }"),(0,r.kt)("p",null,"\u6b64\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528SOLIDWORKS API\u5229\u7528\u7b2c\u4e09\u65b9\u5b58\u50a8\u5b58\u50a8\u4fdd\u5b58\u6587\u4ef6\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u4fee\u8ba2\u3002"),(0,r.kt)("p",null,"\u6b64\u63d2\u4ef6\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/swex/add-in/"},"SwEx.AddIn"),"\u6846\u67b6\u6784\u5efa\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4e0e\u5176\u4ed6\u521b\u5efa\u63d2\u4ef6\u7684\u65b9\u6cd5\u4e00\u8d77\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u63d2\u4ef6\u5728\u83dc\u5355\u548c\u5de5\u5177\u680f\u4e2d\u6dfb\u52a0\u4e86\u4e24\u4e2a\u6309\u94ae\uff0c\u5e76\u76f8\u5e94\u5730\u63d0\u4f9b\u4e86\u4e24\u4e2a\u5904\u7406\u7a0b\u5e8f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TakeCustomPropertiesSnapshot - \u8bfb\u53d6\u81ea\u5b9a\u4e49\u5c5e\u6027\u7684\u5f53\u524d\u72b6\u6001\u5e76\u5c06\u5176\u5e8f\u5217\u5316\u5230\u7b2c\u4e09\u65b9\u5b58\u50a8\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"LoadSnapshots - \u52a0\u8f7d\u6240\u6709\u4fee\u8ba2\u5e76\u663e\u793a\u6d88\u606f\u6846")),(0,r.kt)("p",null,"\u6bcf\u4e2a\u4fee\u8ba2\u7684\u5feb\u7167\u5b58\u50a8\u5728\u7b2c\u4e09\u65b9\u5b50\u5b58\u50a8\u7684\u5b58\u50a8\uff08\u6d41\uff09\u4e2d\uff0c\u800c\u6709\u5173\u6240\u6709\u53ef\u7528\u5feb\u7167\u7684\u4fe1\u606f\u4fdd\u5b58\u5728\u7b2c\u4e09\u65b9\u5b58\u50a8\u7684\u5b50\u6d41\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6253\u5f00\u4efb\u4f55\u73b0\u6709\u7684SOLIDWORKS\u6a21\u578b\uff08\u96f6\u4ef6\u3001\u88c5\u914d\u6216\u7ed8\u56fe\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5728",(0,r.kt)("em",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u9009\u9879\u5361\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u81ea\u5b9a\u4e49\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u51fb",(0,r.kt)("em",{parentName:"li"},"Tools\\Custom Properties Revisions"),"\u83dc\u5355\u4e2d\u7684",(0,r.kt)("em",{parentName:"li"},"TakeCustomPropertiesSnapshot")),(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539\u5c5e\u6027\u5e76\u518d\u6b21\u5355\u51fb",(0,r.kt)("em",{parentName:"li"},"TakeCustomPropertiesSnapshot"),"\u3002\u5982\u6709\u9700\u8981\uff0c\u91cd\u590d\u6b64\u6b65\u9aa4"),(0,r.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u5173\u95ed\u5e76\u91cd\u65b0\u6253\u5f00\u6a21\u578b\u548cSOLIDWORKS\u3002\u5355\u51fb",(0,r.kt)("em",{parentName:"li"},"LoadSnapshots"),"\u547d\u4ee4\u3002\u6240\u6709\u5c5e\u6027\u4fee\u8ba2\u90fd\u4f1a\u663e\u793a\u5728\u6d88\u606f\u6846\u4e2d")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u6d88\u606f\u6846\u4e2d\u663e\u793a\u7684\u6240\u6709\u5c5e\u6027\u4fee\u8ba2",src:t(36359).Z,width:"538",height:"416"}),"{ width=450 }"),(0,r.kt)("h3",{id:"propertiessnapshotcs"},"PropertiesSnapshot.cs"),(0,r.kt)("p",null,"\u7528\u4e8e\u5e8f\u5217\u5316\u5c5e\u6027\u548c\u4fe1\u606f\u7684\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using System;\nusing System.Collections.Generic;\nusing System.Runtime.Serialization;\n\nnamespace CodeStack\n{\n    [DataContract]\n    public class SnapshotInfo\n    {\n        [DataMember]\n        public int Revision { get; set; }\n        \n        [DataMember]\n        public DateTime TimeStamp { get; set; }\n    }\n\n    [DataContract]\n    public class PropertiesSnapshot\n    {\n        [DataMember]\n        public Dictionary<string, string> Properties { get; set; }\n    }\n}\n\n")),(0,r.kt)("h3",{id:"custompropertiesrevisionsaddincs"},"CustomPropertiesRevisionsAddIn.cs"),(0,r.kt)("p",null,"\u5904\u7406\u83dc\u5355\u547d\u4ee4\u5e76\u8bfb\u53d6\u548c\u8f93\u51fa\u6570\u636e\u7684\u63d2\u4ef6\u7c7b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.AddIn;\nusing CodeStack.SwEx.AddIn.Attributes;\nusing SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Runtime.InteropServices;\nusing System.Text;\nusing System.Threading.Tasks;\n\nnamespace CodeStack\n{\n    [ComVisible(true), Guid("46919A47-EE80-445B-A87D-0C831B4B7E44")]\n    [AutoRegister("Custom Properties Revisions", "Sample Demonstrating use of 3rd party storage store")]\n    public partial class CustomPropertiesRevisions : SwAddInEx\n    {\n        private const string STORAGE_NAME = "CustPrpRevisions";\n        private const string SNAPSHOT_INFO_STREAM_NAME = "SnapshotInfos";\n        private const string SNAPSHOT_STREAM_NAME_TEMPLATE = "Snapshots\\\\{0}";\n\n        [SwEx.Common.Attributes.Title("Custom Properties Revisions")]\n        public enum Commands_e\n        {\n            TakeCustomPropertiesSnapshot,\n            LoadSnapshots\n        }\n\n        public override bool OnConnect()\n        {\n            AddCommandGroup<Commands_e>(OnButtonClick);\n\n            return true;\n        }\n\n        private async void OnButtonClick(Commands_e cmd)\n        {\n            switch (cmd)\n            {\n                case Commands_e.TakeCustomPropertiesSnapshot:\n                    await TakeCustomPropertiesSnapshot();\n                    break;\n\n                case Commands_e.LoadSnapshots:\n                    LoadSnapshots();\n                    break;\n            }\n        }\n\n        private async Task TakeCustomPropertiesSnapshot()\n        {\n            try\n            {\n                var snapshot = GetSnapshot(App.IActiveDoc2);\n                \n                await SaveSnapshotToDocument(App.IActiveDoc2, snapshot);\n\n                App.SendMsgToUser2("Snapshot is saved",\n                    (int)swMessageBoxIcon_e.swMbInformation,\n                    (int)swMessageBoxBtn_e.swMbOk);\n            }\n            catch (Exception ex)\n            {\n                App.SendMsgToUser2(ex.Message,\n                    (int)swMessageBoxIcon_e.swMbStop,\n                    (int)swMessageBoxBtn_e.swMbOk);\n            }\n        }\n        \n        private void LoadSnapshots()\n        {\n            try\n            {\n                var snapshotsInfo = GetSnapshotInfos(App.IActiveDoc2);\n\n                var msg = new StringBuilder();\n\n                foreach (var snapshotInfo in snapshotsInfo)\n                {   \n                    var snapshot = ReadSnapshotFromDocument(App.IActiveDoc2,\n                        string.Format(SNAPSHOT_STREAM_NAME_TEMPLATE, snapshotInfo.Revision));\n\n                    msg.AppendLine($"Snapshot {snapshotInfo.Revision} ({snapshotInfo.TimeStamp})");\n                    msg.AppendLine(string.Join(System.Environment.NewLine, snapshot.Properties.Select(p => $"{p.Key}: {p.Value}").ToArray()));\n                    msg.AppendLine("---------");\n                }\n\n                App.SendMsgToUser2(msg.ToString(),\n                    (int)swMessageBoxIcon_e.swMbInformation,\n                    (int)swMessageBoxBtn_e.swMbOk);\n            }\n            catch (Exception ex)\n            {\n                App.SendMsgToUser2(ex.Message,\n                    (int)swMessageBoxIcon_e.swMbStop,\n                    (int)swMessageBoxBtn_e.swMbOk);\n            }\n        }\n\n        private PropertiesSnapshot GetSnapshot(IModelDoc2 model)\n        {\n            var snaphot = new PropertiesSnapshot()\n            {\n                Properties = new Dictionary<string, string>()\n            };\n\n            var prpMgr = model.Extension.CustomPropertyManager[""];\n\n            var prpNames = prpMgr.GetNames() as string[];\n\n            if (prpNames != null)\n            {\n                foreach (var prpName in prpNames)\n                {\n                    string val;\n                    string resVal;\n                    bool wasRes;\n                    prpMgr.Get5(prpName, false, out val, out resVal, out wasRes);\n                    snaphot.Properties.Add(prpName, resVal);\n                }\n            }\n\n            return snaphot;\n        }\n    }\n}\n\n')),(0,r.kt)("h3",{id:"custompropertiesrevisionscs"},"CustomPropertiesRevisions.cs"),(0,r.kt)("p",null,"\u7528\u4e8e\u8bbf\u95ee\u5b58\u50a8\u548c\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u6570\u636e\u7684\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using SolidWorks.Interop.sldworks;\nusing SolidWorks.Interop.swconst;\nusing System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Runtime.InteropServices.ComTypes;\nusing System.Runtime.Serialization;\nusing System.Text;\nusing System.Threading.Tasks;\nusing System.Xml.Serialization;\nusing ThirdPartyStorage;\n\nnamespace CodeStack\n{\n    public partial class CustomPropertiesRevisions\n    {\n        public class ThirdPartyStoreNotFoundException : Exception\n        {\n        }\n\n        private async Task SaveSnapshotToDocument(IModelDoc2 model, PropertiesSnapshot data)\n        {\n            int err = -1;\n            int warn = -1;\n\n            model.SetSaveFlag();\n\n            const int S_OK = 0;\n\n            bool? result = null; ;\n\n            var onSaveToStorageStoreNotifyFunc = new Func<int>(() =>\n            {\n                try\n                {\n                    StoreData(model, data, STORAGE_NAME, storage =>\n                    {\n                        string snapshotName = "";\n\n                        AccessStreamFromPath(storage, SNAPSHOT_INFO_STREAM_NAME, true, true, stream =>\n                        {\n                            var ser = new DataContractSerializer(typeof(List<SnapshotInfo>));\n\n                            List<SnapshotInfo> snapshotInfos = null;\n\n                            if (stream.Length > 0)\n                            {\n                                snapshotInfos = ser.ReadObject(stream) as List<SnapshotInfo>;\n                            }\n                            else\n                            {\n                                snapshotInfos = new List<SnapshotInfo>();\n                            }\n\n                            var info = new SnapshotInfo()\n                            {\n                                Revision = snapshotInfos.Count + 1,\n                                TimeStamp = DateTime.Now\n                            };\n\n                            snapshotInfos.Add(info);\n\n                            snapshotName = string.Format(SNAPSHOT_STREAM_NAME_TEMPLATE, info.Revision);\n\n                            stream.Seek(0, System.IO.SeekOrigin.Begin);\n\n                            ser.WriteObject(stream, snapshotInfos);\n                        }, STGM.STGM_READWRITE | STGM.STGM_SHARE_EXCLUSIVE);\n\n                        AccessStreamFromPath(storage, snapshotName, true, true, stream =>\n                        {\n                            var ser = new DataContractSerializer(typeof(PropertiesSnapshot));\n                            ser.WriteObject(stream, data);\n                        }, STGM.STGM_READWRITE | STGM.STGM_SHARE_EXCLUSIVE);\n\n                        result = true;\n                    });\n                }\n                catch\n                {\n                    result = false;\n                }\n                return S_OK;\n            });\n\n            var partSaveToStorageNotify = new DPartDocEvents_SaveToStorageStoreNotifyEventHandler(onSaveToStorageStoreNotifyFunc);\n            var assmSaveToStorageNotify = new DAssemblyDocEvents_SaveToStorageStoreNotifyEventHandler(onSaveToStorageStoreNotifyFunc);\n            var drwSaveToStorageNotify = new DDrawingDocEvents_SaveToStorageStoreNotifyEventHandler(onSaveToStorageStoreNotifyFunc);\n\n            #region Attach Event Handlers\n\n            switch ((swDocumentTypes_e)model.GetType())\n            {\n                case swDocumentTypes_e.swDocPART:\n                    (model as PartDoc).SaveToStorageStoreNotify += partSaveToStorageNotify;\n                    break;\n\n                case swDocumentTypes_e.swDocASSEMBLY:\n                    (model as AssemblyDoc).SaveToStorageStoreNotify += assmSaveToStorageNotify;\n                    break;\n\n                case swDocumentTypes_e.swDocDRAWING:\n                    (model as DrawingDoc).SaveToStorageStoreNotify += drwSaveToStorageNotify;\n                    break;\n            }\n\n            #endregion\n\n            if (!model.Save3((int)swSaveAsOptions_e.swSaveAsOptions_Silent, ref err, ref warn))\n            {\n                throw new InvalidOperationException($"Failed to save the model: {(swFileSaveError_e)err}");\n            }\n\n            await Task.Run(() =>\n            {\n                while (!result.HasValue)\n                {\n                    System.Threading.Thread.Sleep(10);\n                }\n            });\n\n            #region Detach Event Handlers\n\n            switch ((swDocumentTypes_e)model.GetType())\n            {\n                case swDocumentTypes_e.swDocPART:\n                    (model as PartDoc).SaveToStorageStoreNotify -= partSaveToStorageNotify;\n                    break;\n\n                case swDocumentTypes_e.swDocASSEMBLY:\n                    (model as AssemblyDoc).SaveToStorageStoreNotify -= assmSaveToStorageNotify;\n                    break;\n\n                case swDocumentTypes_e.swDocDRAWING:\n                    (model as DrawingDoc).SaveToStorageStoreNotify -= drwSaveToStorageNotify;\n                    break;\n            }\n\n            #endregion\n\n            if (!result.Value)\n            {\n                throw new Exception("Failed to store the data");\n            }\n        }\n\n        private PropertiesSnapshot ReadSnapshotFromDocument(IModelDoc2 model, string revName)\n        {\n            return ReadData<PropertiesSnapshot>(model, STORAGE_NAME, revName);\n        }\n\n        private SnapshotInfo[] GetSnapshotInfos(IModelDoc2 model)\n        {\n            return ReadData<SnapshotInfo[]>(model, STORAGE_NAME, SNAPSHOT_INFO_STREAM_NAME);\n        }\n\n        private void StoreData<T>(IModelDoc2 model, T data, string storageName, Action<ComStorage> action)\n        {\n            try\n            {\n                var storage = model.Extension.IGet3rdPartyStorageStore(storageName, true) as IStorage;\n\n                using (var comStorage = new ComStorage(storage, true))\n                {\n                    action.Invoke(comStorage);\n                }\n            }\n            catch\n            {\n                throw;\n            }\n            finally\n            {\n                model.Extension.IRelease3rdPartyStorageStore(storageName);\n            }\n        }\n\n        private T ReadData<T>(IModelDoc2 model, string storageName, string streamName)\n        {\n            T data = default(T);\n\n            ReadStorage(model, storageName, storage => \n            {\n                AccessStreamFromPath(storage, streamName, false, false, stream=> \n                {\n                    var ser = new DataContractSerializer(typeof(T));\n                    data = (T)ser.ReadObject(stream);\n                });\n            });\n\n            return data;\n        }\n\n        private void AccessStreamFromPath(ComStorage storage, string path, bool writable,\n            bool createIfNotExist, Action<ComStream> action, STGM mode = STGM.STGM_SHARE_EXCLUSIVE)\n        {\n            var parentIndex = path.IndexOf(\'\\\\\');\n\n            if (parentIndex == -1)\n            {\n                IStream stream = null;\n\n                try\n                {\n                    stream = storage.OpenStream(path, mode);\n                }\n                catch\n                {\n                    if (createIfNotExist)\n                    {\n                        stream = storage.CreateStream(path);\n                    }\n                    else\n                    {\n                        throw;\n                    }\n                }\n\n                using (var comStream = new ComStream(stream, writable))\n                {\n                    action.Invoke(comStream);\n                }\n            }\n            else\n            {\n                var subStorageName = path.Substring(0, parentIndex);\n\n                IStorage subStorage;\n\n                try\n                {\n                    subStorage = storage.OpenStorage(subStorageName, mode);\n                }\n                catch\n                {\n                    if (createIfNotExist)\n                    {\n                        subStorage = storage.CreateStorage(subStorageName);\n                    }\n                    else\n                    {\n                        throw;\n                    }\n                }\n                \n                using (var subComStorage = new ComStorage(subStorage, false))\n                {\n                    var nextLevelPath = path.Substring(parentIndex + 1);\n                    AccessStreamFromPath(subComStorage, nextLevelPath, writable, createIfNotExist, action);\n                }\n            }\n        }\n\n        private void ReadStorage(IModelDoc2 model, string storageName, Action<ComStorage> action)\n        {\n            try\n            {\n                var storage = model.Extension.IGet3rdPartyStorageStore(storageName, false) as IStorage;\n\n                if (storage != null)\n                {\n                    using (var comStorage = new ComStorage(storage, false))\n                    {\n                        action.Invoke(comStorage);\n                    }\n                }\n                else\n                {\n                    throw new ThirdPartyStoreNotFoundException();\n                }\n            }\n            catch\n            {\n                throw;\n            }\n            finally\n            {\n                model.Extension.IRelease3rdPartyStorageStore(storageName);\n            }\n        }\n    }\n}\n\n')),(0,r.kt)("h3",{id:"comstoragecs"},"ComStorage.cs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/teknowledgist/solidworks-api/blob/master/ThirdPartyStorage/ComStorage.cs"},"ComStorage.cs"),"\u662f\u5bf9",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nn-objidl-istorage"},"IStorage"),"\u63a5\u53e3\u7684\u5c01\u88c5\uff0c\u7b80\u5316\u4e86\u4ece.NET\u8bed\u8a00\u8bbf\u95ee\u7684\u8fc7\u7a0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Collections.Generic;\nusing System.Runtime.InteropServices;\nusing System.Diagnostics;\nusing System.IO;\nusing System.Runtime.InteropServices.ComTypes;\n\nnamespace ThirdPartyStorage\n{\n    #region WinAPI\n\n    [Flags]\n    public enum STGM : int\n    {\n        STGM_READ = 0x0,\n        STGM_WRITE = 0x1,\n        STGM_READWRITE = 0x2,\n        STGM_SHARE_DENY_NONE = 0x40,\n        STGM_SHARE_DENY_READ = 0x30,\n        STGM_SHARE_DENY_WRITE = 0x20,\n        STGM_SHARE_EXCLUSIVE = 0x10,\n        STGM_PRIORITY = 0x40000,\n        STGM_CREATE = 0x1000,\n        STGM_CONVERT = 0x20000,\n        STGM_FAILIFTHERE = 0x0,\n        STGM_DIRECT = 0x0,\n        STGM_TRANSACTED = 0x10000,\n        STGM_NOSCRATCH = 0x100000,\n        STGM_NOSNAPSHOT = 0x200000,\n        STGM_SIMPLE = 0x8000000,\n        STGM_DIRECT_SWMR = 0x400000,\n        STGM_DELETEONRELEASE = 0x4000000\n    }\n\n    public enum STGTY : int\n    {\n        STGTY_STORAGE = 1,\n        STGTY_STREAM = 2,\n        STGTY_LOCKBYTES = 3,\n        STGTY_PROPERTY = 4\n    };\n\n    [ComImport]\n    [Guid("0000000d-0000-0000-C000-000000000046")]\n    [InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]\n    public interface IEnumSTATSTG\n    {\n        [PreserveSig]\n        uint Next(uint celt,\n        [MarshalAs(UnmanagedType.LPArray), Out]\n        System.Runtime.InteropServices.ComTypes.STATSTG[] rgelt,\n        out uint pceltFetched\n        );\n\n        void Skip(uint celt);\n\n        void Reset();\n\n        [return: MarshalAs(UnmanagedType.Interface)]\n        IEnumSTATSTG Clone();\n    }\n\n    [ComImport]\n    [Guid("0000000b-0000-0000-C000-000000000046")]\n    [InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]\n    public interface IStorage\n    {\n        void CreateStream(string pwcsName, uint grfMode, uint reserved1, uint reserved2, out IStream ppstm);\n        void OpenStream(string pwcsName, IntPtr reserved1, uint grfMode, uint reserved2, out IStream ppstm);\n        void CreateStorage(string pwcsName, uint grfMode, uint reserved1, uint reserved2, out IStorage ppstg);\n        void OpenStorage(string pwcsName, IStorage pstgPriority, uint grfMode, IntPtr snbExclude, uint reserved, out IStorage ppstg);\n        void CopyTo(uint ciidExclude, Guid rgiidExclude, IntPtr snbExclude, IStorage pstgDest);\n        void MoveElementTo(string pwcsName, IStorage pstgDest, string pwcsNewName, uint grfFlags);\n        void Commit(uint grfCommitFlags);\n        void Revert();\n        void EnumElements(uint reserved1, IntPtr reserved2, uint reserved3, out IEnumSTATSTG ppenum);\n        void DestroyElement(string pwcsName);\n        void RenameElement(string pwcsOldName, string pwcsNewName);\n        void SetElementTimes(string pwcsName, System.Runtime.InteropServices.ComTypes.FILETIME pctime, System.Runtime.InteropServices.ComTypes.FILETIME patime, System.Runtime.InteropServices.ComTypes.FILETIME pmtime);\n        void SetClass(Guid clsid);\n        void SetStateBits(uint grfStateBits, uint grfMask);\n        void Stat(out System.Runtime.InteropServices.ComTypes.STATSTG pstatstg, uint grfStatFlag);\n    }\n\n    #endregion\n\n    public class ComStorage : IDisposable\n    {\n        [DllImport("ole32.dll")]\n        public static extern int StgOpenStorage(\n            [MarshalAs(UnmanagedType.LPWStr)] string pwcsName,\n            IStorage pstgPriority,\n            int grfMode,\n            IntPtr snbExclude,\n            uint reserved,\n            out IStorage ppstgOpen);\n\n        private IStorage m_Storage;\n        private bool m_IsWritable;\n\n        public ComStorage(IStorage storage, bool writable)\n        {\n            if (storage == null)\n            {\n                throw new ArgumentNullException(nameof(storage));\n            }\n\n            m_IsWritable = writable;\n            m_Storage = storage;\n        }\n\n        public IStorage OpenStorage(string storageName, STGM mode = STGM.STGM_SHARE_EXCLUSIVE)\n        {\n            IStorage storage;\n\n            m_Storage.OpenStorage(storageName, null,\n                (uint)mode, IntPtr.Zero, 0, out storage);\n\n            return storage;\n        }\n\n        public IStream OpenStream(string streamName, STGM mode = STGM.STGM_SHARE_EXCLUSIVE)\n        {\n            IStream stream = null;\n\n            m_Storage.OpenStream(streamName,\n                IntPtr.Zero, (uint)mode, 0, out stream);\n\n            return stream;\n        }\n\n        public IStream CreateStream(string streamName)\n        {\n            IStream stream = null;\n\n            m_Storage.CreateStream(streamName,\n                (uint)STGM.STGM_CREATE | (uint)STGM.STGM_SHARE_EXCLUSIVE | (uint)STGM.STGM_WRITE,\n                0, 0, out stream);\n\n            return stream;\n        }\n\n        public IStorage CreateStorage(string streamName)\n        {\n            IStorage storage = null;\n\n            m_Storage.CreateStorage(streamName,\n                (uint)STGM.STGM_CREATE | (uint)STGM.STGM_SHARE_EXCLUSIVE | (uint)STGM.STGM_WRITE,\n                0, 0, out storage);\n\n            return storage;\n        }\n\n        public IEnumerable<System.Runtime.InteropServices.ComTypes.STATSTG> EnumElements()\n        {\n            IEnumSTATSTG ssenum = null;\n\n            m_Storage.EnumElements(0, IntPtr.Zero, 0, out ssenum);\n\n            var ssstruct = new System.Runtime.InteropServices.ComTypes.STATSTG[1];\n\n            uint numReturned;\n\n            do\n            {\n                ssenum.Next(1, ssstruct, out numReturned);\n\n                if (numReturned != 0)\n                {\n                    yield return ssstruct[0];\n                }\n            } while (numReturned > 0);\n        }\n\n        public void Close()\n        {\n            if (m_Storage != null)\n            {\n                if (m_IsWritable)\n                {\n                    m_Storage.Commit(0);\n                }\n\n                Marshal.ReleaseComObject(m_Storage);\n                m_Storage = null;\n                GC.SuppressFinalize(this);\n            }\n        }\n\n        public void Dispose()\n        {\n            Close();\n        }\n    }\n}\n\n')),(0,r.kt)("h3",{id:"comstreamcs"},"ComStream.cs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/teknowledgist/solidworks-api/blob/master/ThirdPartyStorage/ComStream.cs"},"ComStream.cs"),"\u662f\u5bf9",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/desktop/api/objidl/nn-objidl-istream"},"IStream"),"\u63a5\u53e3\u7684\u5c01\u88c5\uff0c\u7b80\u5316\u4e86\u4ece.NET\u8bed\u8a00\u8bbf\u95ee\u7684\u8fc7\u7a0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing System.Runtime.InteropServices.ComTypes;\n\nnamespace ThirdPartyStorage\n{\n    public class ComStream : Stream\n    {\n        private readonly IStream m_ComStream;\n        private readonly bool m_Commit;\n\n        private bool m_IsWritable;\n\n        public override bool CanRead\n        {\n            get\n            {\n                return true;\n            }\n        }\n\n        public override bool CanSeek\n        {\n            get\n            {\n                return true;\n            }\n        }\n\n        public override bool CanWrite\n        {\n            get\n            {\n                return m_IsWritable;\n            }\n        }\n\n        public override long Length\n        {\n            get\n            {\n                const int STATSFLAG_NONAME = 1;\n\n                STATSTG statstg;\n\n                m_ComStream.Stat(out statstg, STATSFLAG_NONAME);\n\n                return statstg.cbSize;\n            }\n        }\n\n        public override long Position\n        {\n            get\n            {\n                return Seek(0, SeekOrigin.Current);\n            }\n            set\n            {\n                Seek(value, SeekOrigin.Begin);\n            }\n        }\n\n        public ComStream(IStream comStream, bool writable, bool commit = true)\n        {\n            if (comStream == null)\n            {\n                throw new ArgumentNullException(nameof(comStream));\n            }\n            \n            m_ComStream = comStream;\n            m_Commit = commit;\n            m_IsWritable = writable;\n        }\n\n        public override void Flush()\n        {\n            if (m_Commit)\n            {\n                const int STGC_DEFAULT = 0;\n\n                m_ComStream.Commit(STGC_DEFAULT);\n            }\n        }\n\n        public unsafe override int Read(byte[] buffer, int offset, int count)\n        {\n            if (offset != 0)\n            {\n                throw new NotSupportedException("Offset is not supported");\n            }\n\n            int bytesRead;\n\n            var address = new IntPtr(&bytesRead);\n\n            m_ComStream.Read(buffer, count, address);\n\n            return bytesRead;\n        }\n\n        public unsafe override long Seek(long offset, SeekOrigin origin)\n        {\n            long position = 0;\n\n            var address = new IntPtr(&position);\n\n            m_ComStream.Seek(offset, (int)origin, address);\n\n            return position;\n        }\n\n        public override void SetLength(long value)\n        {\n            m_ComStream.SetSize(value);\n        }\n        \n        public override void Write(byte[] buffer, int offset, int count)\n        {\n            if (offset != 0)\n            {\n                throw new NotSupportedException("Offset is not supported");\n            }\n\n            m_ComStream.Write(buffer, count, IntPtr.Zero);\n        }\n\n        protected override void Dispose(bool disposing)\n        {\n            try\n            {\n                if (disposing)\n                {\n                    m_IsWritable = false;\n                }\n            }\n            finally\n            {\n                base.Dispose(disposing);\n            }\n        }\n\n        ~ComStream()\n        {\n            Dispose(false);\n        }\n    }\n}\n\n')))}l.isMDXComponent=!0},4449:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/custom-properties-e5792da09dd72988318fa1b28307a527.png"},36359:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/properties-snapshots-data-334bbc64d5bb62e59dd7d68556d4860f.png"}}]);