using CodeStack.SwEx.AddIn;
using CodeStack.SwEx.AddIn.Attributes;
using SolidWorks.Interop.sldworks;
using SolidWorks.Interop.swconst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace CodeStack
{
    [ComVisible(true), Guid("46919A47-EE80-445B-A87D-0C831B4B7E44")]
    [AutoRegister("Custom Properties Revisions", "Sample Demonstrating use of 3rd party storage store")]
    public partial class CustomPropertiesRevisions : SwAddInEx
    {
        private const string STORAGE_NAME = "CustPrpRevisions";
        private const string SNAPSHOT_INFO_STREAM_NAME = "SnapshotInfos";
        private const string SNAPSHOT_STREAM_NAME_TEMPLATE = "Snapshots\\{0}";

        [SwEx.Common.Attributes.Title("Custom Properties Revisions")]
        public enum Commands_e
        {
            TakeCustomPropertiesSnapshot,
            LoadSnapshots
        }

        public override bool OnConnect()
        {
            AddCommandGroup<Commands_e>(OnButtonClick);

            return true;
        }

        private async void OnButtonClick(Commands_e cmd)
        {
            switch (cmd)
            {
                case Commands_e.TakeCustomPropertiesSnapshot:
                    await TakeCustomPropertiesSnapshot();
                    break;

                case Commands_e.LoadSnapshots:
                    LoadSnapshots();
                    break;
            }
        }

        private async Task TakeCustomPropertiesSnapshot()
        {
            try
            {
                var snapshot = GetSnapshot(App.IActiveDoc2);
                
                await SaveSnapshotToDocument(App.IActiveDoc2, snapshot);

                App.SendMsgToUser2("Snapshot is saved",
                    (int)swMessageBoxIcon_e.swMbInformation,
                    (int)swMessageBoxBtn_e.swMbOk);
            }
            catch (Exception ex)
            {
                App.SendMsgToUser2(ex.Message,
                    (int)swMessageBoxIcon_e.swMbStop,
                    (int)swMessageBoxBtn_e.swMbOk);
            }
        }
        
        private void LoadSnapshots()
        {
            try
            {
                var snapshotsInfo = GetSnapshotInfos(App.IActiveDoc2);

                var msg = new StringBuilder();

                foreach (var snapshotInfo in snapshotsInfo)
                {   
                    var snapshot = ReadSnapshotFromDocument(App.IActiveDoc2,
                        string.Format(SNAPSHOT_STREAM_NAME_TEMPLATE, snapshotInfo.Revision));

                    msg.AppendLine($"Snapshot {snapshotInfo.Revision} ({snapshotInfo.TimeStamp})");
                    msg.AppendLine(string.Join(System.Environment.NewLine, snapshot.Properties.Select(p => $"{p.Key}: {p.Value}").ToArray()));
                    msg.AppendLine("---------");
                }

                App.SendMsgToUser2(msg.ToString(),
                    (int)swMessageBoxIcon_e.swMbInformation,
                    (int)swMessageBoxBtn_e.swMbOk);
            }
            catch (Exception ex)
            {
                App.SendMsgToUser2(ex.Message,
                    (int)swMessageBoxIcon_e.swMbStop,
                    (int)swMessageBoxBtn_e.swMbOk);
            }
        }

        private PropertiesSnapshot GetSnapshot(IModelDoc2 model)
        {
            var snaphot = new PropertiesSnapshot()
            {
                Properties = new Dictionary<string, string>()
            };

            var prpMgr = model.Extension.CustomPropertyManager[""];

            var prpNames = prpMgr.GetNames() as string[];

            if (prpNames != null)
            {
                foreach (var prpName in prpNames)
                {
                    string val;
                    string resVal;
                    bool wasRes;
                    prpMgr.Get5(prpName, false, out val, out resVal, out wasRes);
                    snaphot.Properties.Add(prpName, resVal);
                }
            }

            return snaphot;
        }
    }
}
