using EPDM.Interop.epdm;
using System;
using System.Linq;
using System.Runtime.InteropServices;

namespace PdmCardVariableUpdate
{
    [ComVisible(true)]
    [Guid("9AD5B02B-5027-4751-BBC3-6EF4AE6E3206")]
    public class ButtonPdmAddIn : IEdmAddIn5
    {
        private const string BUTTON_TAG = "_UpdateDesc_";

        public void GetAddInInfo(ref EdmAddInInfo poInfo, IEdmVault5 poVault, IEdmCmdMgr5 poCmdMgr)
        {
            poInfo.mbsAddInName = "ButtonPdmAddIn";
            poInfo.mlAddInVersion = 1;
            poInfo.mlRequiredVersionMajor = 16;

            poCmdMgr.AddHook(EdmCmdType.EdmCmd_CardButton);
        }

        public void OnCmd(ref EdmCmd poCmd, ref EdmCmdData[] ppoData)
        {
            switch (poCmd.meCmdType)
            {
                case EdmCmdType.EdmCmd_CardButton:
                    var addInTagName = poCmd.mbsComment;
                    if (addInTagName == BUTTON_TAG)
                    {
                        var confName = ppoData.First().mbsStrData1;
                        var enumVar = poCmd.mpoExtra as IEdmEnumeratorVariable5;

                        object varVal;
                        enumVar.GetVar("Number", confName, out varVal);

                        var number = varVal?.ToString();
                        enumVar.GetVar("Revision", confName, out varVal);

                        var revision = varVal?.ToString();

                        var desc = (object)$"{number} ({revision})";
                        enumVar.SetVar("Description", confName, ref desc);
                    }
                    break;
            }
        }
    }
}