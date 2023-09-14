using SolidWorks.Interop.sldworks;
using SolidWorks.Interop.swconst;
using System.Runtime.InteropServices;
using System;
using CodeStack;

namespace CodeStack
{
    public partial class SolidWorksMacro
    {
        public void Main()
        {
            try
            {
                IModelDoc2 model = swApp.IActiveDoc2;

                if (model is IPartDoc)
                {
                    BodyHelper proc = new BodyHelper(swApp.IGetMathUtility());

                    object selObj = model.ISelectionManager.GetSelectedObject6(1, -1);

                    CylinderParams cylParams = proc.GetBoundingCylinder(
                        GetBodyToProcess(model as IPartDoc, selObj),
                        GetDirection(model, selObj));

                    CreateCylindricalBody(model as IPartDoc, cylParams);

                }
                else
                {
                    throw new NullReferenceException("No Part Document opened");
                }
            }
            catch (Exception ex)
            {
                swApp.SendMsgToUser2("Error: " + ex.Message, 
                    (int)swMessageBoxIcon_e.swMbStop, (int)swMessageBoxBtn_e.swMbOk);
            }
        }

        private void CreateCylindricalBody(IPartDoc part, CylinderParams cylParams)
        {
            IBody2 cylTempBody = swApp.IGetModeler().CreateBodyFromCyl(new double[]
                    {
                        cylParams.Origin[0], cylParams.Origin[1], cylParams.Origin[2],
                        cylParams.Direction[0], cylParams.Direction[1], cylParams.Direction[2],
                        cylParams.Radius, cylParams.Height
                    }) as IBody2;

            IFeature feat = part.CreateFeatureFromBody3(cylTempBody, false,
                (int)swCreateFeatureBodyOpts_e.swCreateFeatureBodySimplify) as IFeature;

            IBody2 body = feat.GetBody() as IBody2;

            body.MaterialPropertyValues2 = new double[] { 1, 1, 0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 };

        }

        private IBody2 GetBodyToProcess(IPartDoc part, object inputObj)
        {
            if (inputObj is IFace2)
            {
                return (inputObj as IFace2).GetBody() as IBody2;
            }
            else
            {
                object[] solidBodies = part.GetBodies2((int)swBodyType_e.swSolidBody, true) as object[];

                if (solidBodies != null && solidBodies.Length == 1)
                {
                    return solidBodies[0] as IBody2;
                }
            }

            throw new NullReferenceException("Failed to find the input body. Either select cylindrical face or use single body part");
        }

        private double[] GetDirection(IModelDoc2 model, object inputObj)
        {
            if (inputObj is IFace2)
            {
                ISurface surf = (inputObj as IFace2).GetSurface() as ISurface;

                if (surf.IsCylinder())
                {
                    double[] cylParams = surf.CylinderParams as double[];

                    return new double[] { cylParams[3], cylParams[4], cylParams[5] };
                }
            }
            else if (inputObj is IFeature)
            {
                IRefPlane refPlane = (inputObj as IFeature).GetSpecificFeature2() as IRefPlane;

                if (refPlane != null)
                {
                    IMathUtility mathUtils = swApp.GetMathUtility() as IMathUtility;
                    IMathVector vec = mathUtils.CreateVector(new double[] { 0, 0, 1 }) as IMathVector;
                    vec = vec.MultiplyTransform(refPlane.Transform) as IMathVector;
                    return vec.ArrayData as double[];
                }
            }

            throw new NullReferenceException("Failed to find the direction. Please select cylindrical face or plane");
        }

        public SldWorks swApp;
    }
}


