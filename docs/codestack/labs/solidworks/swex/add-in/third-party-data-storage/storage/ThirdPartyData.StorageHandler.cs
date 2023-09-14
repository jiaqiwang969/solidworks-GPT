using CodeStack.SwEx.AddIn;
using CodeStack.SwEx.AddIn.Attributes;
using CodeStack.SwEx.AddIn.Base;
using CodeStack.SwEx.AddIn.Core;
using CodeStack.SwEx.AddIn.Enums;
using SolidWorks.Interop.sldworks;
using System;
using System.Runtime.InteropServices;
using System.Text;
using System.Xml.Serialization;

namespace CodeStack.SwEx
{
    [AutoRegister]
    [ComVisible(true), Guid("64684CEF-131C-4F08-88F7-B3C3BAA7004E")]
    public class ThirdPartyDataAddIn : SwAddInEx
    {
        private IDocumentsHandler<DocumentHandler> m_StorageDocHandler;

        public override bool OnConnect()
        {
            m_StorageDocHandler = CreateDocumentsHandler();
            m_StorageDocHandler.HandlerCreated += OnStorageHandlerCreated;
            return true;
        }

        private void OnStorageHandlerCreated(DocumentHandler doc)
        {
            doc.Access3rdPartyData += OnAccess3rdPartyStorageStore;
        }

        private void OnAccess3rdPartyStorageStore(DocumentHandler docHandler, Access3rdPartyDataState_e state)
        {
            switch (state)
            {
                case Access3rdPartyDataState_e.StorageRead:
                    LoadFromStorageStore(docHandler.Model);
                    break;

                case Access3rdPartyDataState_e.StorageWrite:
                    SaveToStorageStore(docHandler.Model);
                    break;
            }
        }
    }
}
