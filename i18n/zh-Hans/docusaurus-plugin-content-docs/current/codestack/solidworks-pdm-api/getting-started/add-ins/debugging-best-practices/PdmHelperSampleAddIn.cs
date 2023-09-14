using EdmLib;
using System;
using System.Linq;
using System.Runtime.InteropServices;

namespace CodeStack
{
    [ComVisible(true)]
    [Guid("8219E7E8-1765-4699-B509-E9DD84B337B4")]
    public class PdmAddInSample : IEdmAddIn5
    {
        private enum Commands_e
        {
            GetIds
        }
        
        public void GetAddInInfo(ref EdmAddInInfo poInfo, IEdmVault5 poVault, IEdmCmdMgr5 poCmdMgr)
        {
            poInfo.mbsAddInName = "SW PDM Helper";
            poInfo.mbsDescription = "Utility functions for SOLIDWORKS PDM";
            poInfo.mlAddInVersion = 1;
            poInfo.mlRequiredVersionMajor = 17; //SOLIDWORKS PDM 2017 SP0

            poCmdMgr.AddCmd((int)Commands_e.GetIds, "Get ID");
        }

        public void OnCmd(ref EdmCmd poCmd, ref Array ppoData)
        {
            if (poCmd.meCmdType == EdmCmdType.EdmCmd_Menu)
            {
                if (poCmd.mlCmdID == (int)Commands_e.GetIds)
                {
                    Func<EdmCmdData, int> getIdFunc = (d) => 
                    {
                        var isFile = d.mlObjectID1 != 0;

                        if (isFile)
                        {
                            return d.mlObjectID1;
                        }
                        else
                        {
                            return d.mlObjectID2;
                        }
                    };

                    var msg = string.Join(Environment.NewLine,
                        (ppoData as EdmCmdData[]).Select(
                            d => $"{d.mbsStrData1} - {getIdFunc(d)}").ToArray());

                    (poCmd.mpoVault as IEdmVault10).MsgBox(0, msg);
                }
            }
        }
    }
}
