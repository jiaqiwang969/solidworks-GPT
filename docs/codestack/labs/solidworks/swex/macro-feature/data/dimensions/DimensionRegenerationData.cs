using CodeStack.SwEx.MacroFeature;
using CodeStack.SwEx.MacroFeature.Base;
using CodeStack.SwEx.MacroFeature.Data;
using SolidWorks.Interop.sldworks;

namespace CodeStack.SwEx
{
    public class MyDimRegenDataMacroFeature : MacroFeatureEx<DimensionMacroFeatureParams>
    {
        public class MyData
        {
            public int Value1 { get; set; }
        }

        private class CustomRebuildResult : MacroFeatureRebuildBodyResult
        {
            internal MyData CustomData { get; private set; }

            internal CustomRebuildResult(IMacroFeatureData featData,
                IBody2[] bodies, MyData customData) : base(featData, true, bodies)
            {
                CustomData = customData;
            }
        }

        protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature, DimensionMacroFeatureParams parameters)
        {
            var featData = feature.GetDefinition() as IMacroFeatureData;

            var resBodies = GetBodies(); //generating bodies
            var customData = new MyData(); //creating custom data and assigning required values

            return new CustomRebuildResult(featData, resBodies, customData); //returning custom rebuild result
        }

        protected override void OnSetDimensions(ISldWorks app, IModelDoc2 model, IFeature feature, MacroFeatureRebuildResult rebuildResult,
            DimensionDataCollection dims, DimensionMacroFeatureParams parameters)
        {
            var rebuildRes = rebuildResult as CustomRebuildResult;

            var customData = rebuildRes.CustomData;

            //TODO: use custom data to arrange dimensions
        }

        private IBody2[] GetBodies()
        {
            //TODO: create bodies for geometry

            return null;
        }
    }
}
