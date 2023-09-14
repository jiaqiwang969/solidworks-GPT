using System;
using System.Collections.Generic;
using System.Text;
using SolidWorks.Interop.sldworks;
using SolidWorks.Interop.swconst;

namespace CodeStack
{
    public class BodyHelper
    {
        private IMathUtility m_MathUtils;
        private MathHelper m_MathHelper;

        public BodyHelper(IMathUtility mathUtils) 
        {
            m_MathUtils = mathUtils;
            m_MathHelper = new MathHelper(mathUtils);
        }

        public CylinderParams GetBoundingCylinder(IBody2 body, double[] dir)
        {
            double[] xAxis = new double[] { 1, 0, 0 };
            double[] yAxis = new double[] { 0, 1, 0 };
            double[] zAxis = new double[] { 0, 0, 1 };

            bool isAligned = m_MathHelper.ArrayEqual(dir, yAxis);
            IMathTransform alignTransform = null;

            if (!isAligned)
            {
                alignTransform = m_MathHelper.GetTransformBetweenVectorsAroundPoint(
                    dir, yAxis, new double[] { 0, 0, 0 });

                IBody2 bodyCopy = body.ICopy();

                bodyCopy.ApplyTransform(alignTransform as MathTransform);

                body = bodyCopy;
            }

            double[] rootPt;
            double[] endPt;
            GetExtremePoints(body, yAxis, out rootPt, out endPt);

            double height = Math.Abs(endPt[1] - rootPt[1]);

            dir = new double[] { 0, endPt[1] - rootPt[1], 0 };

            List<double[]> perPoints = GetPerimeterPoints(body, xAxis, zAxis);
            List<Point> points = new List<Point>();

            foreach (double[] pt in perPoints)
            {
                points.Add(new Point(pt[0], pt[2]));
            }

            Circle cir = SmallestEnclosingCircle.MakeCircle(points);

            double[] circCenter = new double[] { cir.c.x, rootPt[1], cir.c.y };

            if (!isAligned)
            {
                circCenter = m_MathHelper.TransformPoint(circCenter, alignTransform.IInverse());
                dir = m_MathHelper.TransformVector(dir, alignTransform.IInverse());
            }

            double radius = cir.r;

            return new CylinderParams(height, circCenter, dir, radius);
        }

        private List<double[]> GetPerimeterPoints(IBody2 body, params double[][] directions) 
        {
            List<double[]> perPoints = new List<double[]>();
            double[] pt1;
            double[] pt2;

            foreach (double[] dir in directions)
            {
                GetExtremePoints(body, dir, out pt1, out pt2);

                perPoints.Add(pt1);
                perPoints.Add(pt2);
            }

            return perPoints;
        }

        private void GetExtremePoints(IBody2 body, double[] dir, out double[] pt1, out double[] pt2) 
        {
            double x;
            double y;
            double z;

            body.GetExtremePoint(dir[0], dir[1], dir[2], out x, out y, out z);
            pt1 = new double[] { x, y, z };

            body.GetExtremePoint(-dir[0], -dir[1], -dir[2], out x, out y, out z);
            pt2 = new double[] { x, y, z };
        }
    }
}
