using System;
using System.Collections.Generic;
using System.Text;
using SolidWorks.Interop.sldworks;

namespace CodeStack
{
    public class MathHelper
    {
        private IMathUtility m_MathUtils;

        public MathHelper(IMathUtility mathUtils)
        {
            m_MathUtils = mathUtils;
        }

        public double[] TransformVector(double[] dir, IMathTransform transform)
        {
            IMathVector vec = m_MathUtils.CreateVector(dir) as IMathVector;
            vec = vec.MultiplyTransform(transform) as IMathVector;
            return vec.ArrayData as double[];
        }

        public double[] TransformPoint(double[] pt, IMathTransform transform)
        {
            IMathPoint point = m_MathUtils.CreatePoint(pt) as IMathPoint;
            point = point.MultiplyTransform(transform) as IMathPoint;
            return point.ArrayData as double[];
        }

        public IMathTransform GetTransformBetweenVectorsAroundPoint(
            double[] vec1, double[] vec2, double[] pt)
        {
            IMathVector mathVec1 = m_MathUtils.CreateVector(vec1) as IMathVector;
            IMathVector mathVec2 = m_MathUtils.CreateVector(vec2) as IMathVector;
            IMathVector crossVec = mathVec1.Cross(mathVec2) as IMathVector;

            double dot = mathVec1.Dot(mathVec2);
            double vec1Len = mathVec1.GetLength();
            double vec2Len = mathVec2.GetLength();

            double angle = Math.Acos(dot / vec1Len * vec2Len);

            IMathPoint mathPt = m_MathUtils.CreatePoint(pt) as IMathPoint;

            return m_MathUtils.CreateTransformRotateAxis(mathPt, crossVec, angle) as IMathTransform;
        }

        public bool ArrayEqual(double[] arr1, double[] arr2)
        {
            if (arr1 != null && arr2 != null)
            {
                if (arr1.Length == arr2.Length)
                {
                    for (int i = 0; i < arr1.Length; i++)
                    {
                        if (arr1[i] != arr2[i])
                        {
                            return false;
                        }
                    }
                }
            }

            return false;
        }
    }
}
