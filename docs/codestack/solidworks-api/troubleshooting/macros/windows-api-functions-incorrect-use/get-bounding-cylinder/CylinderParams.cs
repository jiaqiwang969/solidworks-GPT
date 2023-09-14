using System;
using System.Collections.Generic;
using System.Text;

namespace CodeStack
{
    public class CylinderParams
    {
        public double Height;
        public double[] Origin;
        public double[] Direction;
        public double Radius;

        public CylinderParams(double height, double[] origin, double[] dir, double rad)
        {
            Height = height;
            Origin = origin;
            Radius = rad;
            Direction = dir;
        }
    }
}
