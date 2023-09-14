using CodeStack.SwEx.AddIn;
using CodeStack.SwEx.AddIn.Attributes;
using System;
using System.Runtime.InteropServices;

namespace CodeStack.SwEx
{
    [AutoRegister("MyAddIn title", "MyAddIn description", true)]
    [ComVisible(true), Guid("025F9A68-F2FE-46CF-8BA2-8E19FBCDE9A0")]
    public class MyAddIn : SwAddInEx
    {
        public override bool OnConnect()
        {
            // Initialize the add-in, create menu, load data etc.
            return true;
        }

        public override bool OnDisconnect()
        {
            // Dispose the add-in's resources
            return true;
        }
    }
}
