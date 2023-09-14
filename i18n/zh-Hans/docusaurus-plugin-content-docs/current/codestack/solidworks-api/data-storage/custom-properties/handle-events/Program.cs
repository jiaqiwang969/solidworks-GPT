using SolidWorks.Interop.sldworks;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;

namespace HandlePrpsEvents
{
    class Program
    {
        static void Main(string[] args)
        {
            var app = Activator.CreateInstance(Type.GetTypeFromProgID("SldWorks.Application")) as ISldWorks;
            app.Visible = true;

            IModelDoc2 model = null;

            do
            {
                model = app.IActiveDoc2;
                if (model == null)
                {
                    Console.WriteLine("Open the model and press any key to continue");
                    Console.ReadLine();
                }
            } while (model == null);


            var handler = new CustomPropertiesEventsHandler(app, model);
            handler.PropertyChanged += OnPropertyChanged;


            Console.ReadLine();

            handler.Dispose();
        }

        private static void OnPropertyChanged(PropertyChangeAction_e type, string name, string conf, string value)
        {
            Console.WriteLine($"Property {name}; Action: {type}; Configuration: {conf}; Value: {value}");
        }
    }
}
