using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TreeSerializer
{
    public class ElementsTree
    {
        public int Version { get; set; }
        public Element Root { get; set; }

        public ElementsTree()
        {
        }

        public ElementsTree(int version, Element root)
        {
            Version = version;
            Root = root;
        }
    }

    public class Element
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Element[] Children { get; set; }

        public Element()
        {
        }

        public Element(int id, string name, params Element[] children)
        {
            Id = id;
            Name = name;
            Children = children;
        }
    }
}
