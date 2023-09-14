using System.Collections.Generic;
using SolidWorks.Interop.sldworks;
using System.Diagnostics;
using System.Runtime.InteropServices;

namespace CodeStack
{
    public partial class SolidWorksMacro
    {
        public void Main()
        {
            List<DispatchWrapper> swObjects = new List<DispatchWrapper>();

            IModelDoc2 model = swApp.IActiveDoc2;

            if (model != null)
            {
                ISelectionMgr selMgr = model.ISelectionManager;

                for (int i = 0; i < selMgr.GetSelectedObjectCount2(-1); i++)
                {
                    object swSelObj = selMgr.GetSelectedObject6(i + 1, -1);
                    swObjects.Add(new DispatchWrapper(swSelObj));//it is required to wrap dispatch pointers to allow selection of objects of different types (i.e. faces, annotations, components etc.) together
                }

                model.ClearSelection2(true);

                Debugger.Break();

                model.Extension.MultiSelect2(swObjects.ToArray(), false, null);
            }
            else
            {
                swApp.SendMsgToUser("Please open the model");
            }
        }

        public SldWorks swApp;
    }
}

