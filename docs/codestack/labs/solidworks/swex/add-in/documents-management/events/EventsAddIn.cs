using CodeStack.SwEx.AddIn;
using CodeStack.SwEx.AddIn.Attributes;
using CodeStack.SwEx.AddIn.Base;
using CodeStack.SwEx.AddIn.Core;
using CodeStack.SwEx.AddIn.Delegates;
using CodeStack.SwEx.AddIn.Enums;
using SolidWorks.Interop.sldworks;
using SolidWorks.Interop.swconst;
using System;
using System.Runtime.InteropServices;

namespace CodeStack.SwEx
{
    [AutoRegister]
    [ComVisible(true), Guid("76045173-E27C-4DF9-AE5F-147B893CE3DC")]
    public class EventsAddIn : SwAddInEx    
    {   
        private IDocumentsHandler<DocumentHandler> m_DocHandlerGeneric;

        public override bool OnConnect()
        {
            m_DocHandlerGeneric = CreateDocumentsHandler();
            m_DocHandlerGeneric.HandlerCreated += OnHandlerCreated;
            return true;
        }

        private void OnHandlerCreated(DocumentHandler doc)
        {
            doc.Initialized += OnInitialized;
            doc.Activated += OnActivated;
            doc.ConfigurationChange += OnConfigurationOrSheetChanged;
            doc.CustomPropertyModify += OnCustomPropertyModified;
            doc.Access3rdPartyData += OnAccess3rdPartyData;
            doc.ItemModify += OnItemModified;
            doc.Save += OnSave;
            doc.Selection += OnSelection;
            doc.Rebuild += OnRebuild;
            doc.DimensionChange += OnDimensionChange;
            doc.Destroyed += OnDestroyed;
        }

        private void OnDestroyed(DocumentHandler handler)
        {
            handler.Initialized -= OnInitialized;
            handler.Activated -= OnActivated;
            handler.ConfigurationChange -= OnConfigurationOrSheetChanged;
            handler.CustomPropertyModify -= OnCustomPropertyModified;
            handler.ItemModify -= OnItemModified;
            handler.Save -= OnSave;
            handler.Selection -= OnSelection;
            handler.Rebuild -= OnRebuild;
            handler.DimensionChange -= OnDimensionChange;
            handler.Destroyed -= OnDestroyed;

            Logger.Log($"'{handler.Model.GetTitle()}' destroyed");
        }

        public override bool OnDisconnect()
        {
            m_DocHandlerGeneric.HandlerCreated -= OnHandlerCreated;
            return true;
        }

    }
}
