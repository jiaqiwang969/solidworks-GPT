"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[56980],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=o,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||i;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},35355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={title:"Render box grid with transparency using OpenGL and SOLIDWORKS API",caption:"Render Box Grid With Transparency",description:"Rendering grid of cubes with transparency using OpenGL and SOLIDWORKS API",image:"opengl-cubes.png",labels:["opengl","render","transparency"]},a=void 0,l={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/box-grid-transparency/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/box-grid-transparency/index",title:"Render box grid with transparency using OpenGL and SOLIDWORKS API",description:"Rendering grid of cubes with transparency using OpenGL and SOLIDWORKS API",source:"@site/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/box-grid-transparency/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/box-grid-transparency",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/box-grid-transparency/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/box-grid-transparency/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/box-grid-transparency/index.md",tags:[],version:"current",frontMatter:{title:"Render box grid with transparency using OpenGL and SOLIDWORKS API",caption:"Render Box Grid With Transparency",description:"Rendering grid of cubes with transparency using OpenGL and SOLIDWORKS API",image:"opengl-cubes.png",labels:["opengl","render","transparency"]},sidebar:"tutorialSidebar",previous:{title:"Rendering custom 3D graphics with Open GL in SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/"},next:{title:"Render tetrahedron using OpenGL and handle view display modes using SOLIDWORKS API",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/adornment/opengl/display-mode-tetrahedron/"}},s={},c=[{value:"AddIn.cs",id:"addincs",level:2},{value:"OpenGlDocumentHandler.cs",id:"opengldocumenthandlercs",level:2},{value:"OpenGL.cs",id:"openglcs",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...i}=e;return(0,o.kt)(p,(0,r.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Transparent cubes rendered with OpenGL",src:t(87042).Z,width:"494",height:"520"}),"{ width=250 }"),(0,o.kt)("p",null,"This example demonstrates how to render cubes in the predefined grid with transparency using OpenGL and SOLIDWORKS API."),(0,o.kt)("p",null,"Cubes are rendered automatically on all opened 3D models (parts or assemblies)."),(0,o.kt)("p",null,"Parameters can be configured by changing the constants declared in the add-in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"private const int INST_COUNT = 27;\nprivate const int ROWS_COUNT = 3;\nprivate const int COLUMNS_COUNT = 3;\nprivate const double DIST = 0.05;\nprivate const double WIDTH = 0.1;\nprivate const double HEIGHT = 0.1;\nprivate const double LENGTH = 0.1;\nprivate readonly Color COLOR = Color.FromArgb(200, Color.Blue);\n")),(0,o.kt)("p",null,"Note, this approach is a simple method of rendering OpenGL objects, but it doesn't provide the best performance benefits. Refer the ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/adornment/opengl/vbo-xaml-importer/"},"Import XAML File And Render Using VBO")," for a code example of rendering high performance graphics using Open GL Vertex Buffer Object (VBO)."),(0,o.kt)("p",null,"Source code can be downloaded from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/solidworks-api-examples/tree/master/swex/add-in/opengl/OpenGlBoxGrid"},"GitHub")),(0,o.kt)("h2",{id:"addincs"},"AddIn.cs"),(0,o.kt)("p",null,"This the add-in entry point. ",(0,o.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/swex/add-in/"},"SwEx.AddIn")," framework is used to manage documents lifecycle by providing the wrapper class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.AddIn;\nusing CodeStack.SwEx.AddIn.Attributes;\nusing System;\nusing System.Runtime.InteropServices;\n\nnamespace CodeStack.OpenGlBoxGrid\n{\n    [ComVisible(true), Guid("FAB0F03B-785E-4113-B120-E18E7C73B9EB")]\n    [AutoRegister("OpenGL Box Grid")]\n    public class AddIn : SwAddInEx\n    {\n        public override bool OnConnect()\n        {\n            CreateDocumentsHandler<OpenGlDocumentHandler>();\n            return true;\n        }\n    }\n}\n\n')),(0,o.kt)("h2",{id:"opengldocumenthandlercs"},"OpenGlDocumentHandler.cs"),(0,o.kt)("p",null,"This is a handler class for each model document which subscribes to the OpenGL Buffer Swap notification provided by SOLIDWORKS and performs the calculation of coordinates of cubes based on the input parameters and renders in the model's graphics view."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"using CodeStack.SwEx.AddIn.Base;\nusing SolidWorks.Interop.sldworks;\nusing System.Drawing;\nusing static CodeStack.OpenGlBoxGrid.OpenGL;\n\nnamespace CodeStack.OpenGlBoxGrid\n{\n    public class OpenGlDocumentHandler : IDocumentHandler\n    {\n        private const int INST_COUNT = 27;\n        private const int ROWS_COUNT = 3;\n        private const int COLUMNS_COUNT = 3;\n        private const double DIST = 0.05;\n        private const double WIDTH = 0.1;\n        private const double HEIGHT = 0.1;\n        private const double LENGTH = 0.1;\n        private readonly Color COLOR = Color.FromArgb(200, Color.Blue);\n\n        private ModelView m_View;\n\n        public void Init(ISldWorks app, IModelDoc2 model)\n        {\n            m_View = model.IActiveView;\n\n            if (m_View != null)\n            {\n                m_View.BufferSwapNotify += OnBufferSwapNotify;\n            }\n        }\n\n        private int OnBufferSwapNotify()\n        {\n            int level = 0;\n            int row = 0;\n            int column = 0;\n\n            for (int i = 0; i < INST_COUNT; i++)\n            {\n                if (row == ROWS_COUNT)\n                {\n                    row = 0;\n                    column++;\n\n                    if (column == COLUMNS_COUNT)\n                    {\n                        column = 0;\n                        level++;\n                    }\n                }\n\n                RenderBox(new double[] \n                {\n                    row * (WIDTH + DIST),\n                    column * (LENGTH + DIST),\n                    level * (HEIGHT + DIST)\n                },\n                WIDTH, LENGTH, HEIGHT,\n                COLOR);\n\n                row++;\n            }\n            \n            return 0;\n        }\n\n        private void RenderBox(double[] pt, double width, double length, double height, Color color)\n        {\n            var vertices = new double[][]\n            {\n                new double[] { pt[0] - width / 2, pt[1] + length / 2, pt[2] + height / 2 },\n                new double[] { pt[0] - width / 2, pt[1] - length / 2, pt[2] + height / 2 },\n                new double[] { pt[0] + width / 2, pt[1] + length / 2, pt[2] + height / 2 },\n                new double[] { pt[0] + width / 2, pt[1] - length / 2, pt[2] + height / 2 },\n                new double[] { pt[0] + width / 2, pt[1] + length / 2, pt[2] - height / 2 },\n                new double[] { pt[0] + width / 2, pt[1] - length / 2, pt[2] - height / 2 },\n                new double[] { pt[0] - width / 2, pt[1] + length / 2, pt[2] - height / 2 },\n                new double[] { pt[0] - width / 2, pt[1] - length / 2, pt[2] - height / 2 },\n                new double[] { pt[0] - width / 2, pt[1] + length / 2, pt[2] + height / 2 },\n                new double[] { pt[0] - width / 2, pt[1] - length / 2, pt[2] + height / 2 }\n            };\n            \n            RenderTriangleStrip(vertices, color);\n\n            RenderTriangleStrip(new double[][]\n            {\n                vertices[1], vertices[7], vertices[3], vertices[5]\n            }, color);\n\n            RenderTriangleStrip(new double[][]\n            {\n                vertices[0], vertices[2], vertices[6], vertices[4]\n            }, color);\n        }\n        \n        private void RenderTriangleStrip(double[][] vertices, Color color)\n        {\n            glDisable(GL_LIGHTING);\n            glEnable(GL_BLEND);\n\n            glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);\n\n            glBegin(GL_TRIANGLE_STRIP);\n\n            glColor4f(color.R / 255f, color.G / 255f, color.B / 255f, color.A / 255f);\n\n            foreach (var vertex in vertices)\n            {\n                glVertex3d(vertex[0], vertex[1], vertex[2]);\n            }\n\n            glEnd();\n        }\n\n        public void Dispose()\n        {\n            if (m_View != null)\n            {\n                m_View.BufferSwapNotify -= OnBufferSwapNotify;\n            }\n        }\n    }\n}\n\n")),(0,o.kt)("h2",{id:"openglcs"},"OpenGL.cs"),(0,o.kt)("p",null,"List of imports for OpenGL functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using System.Runtime.InteropServices;\n\nnamespace CodeStack.OpenGlBoxGrid\n{\n    public static class OpenGL\n    {\n        [DllImport("opengl32")]\n        public static extern void glBegin(uint mode);\n\n        [DllImport("opengl32")]\n        public static extern void glEnd();\n\n        [DllImport("opengl32")]\n        public static extern void glVertex3d(double x, double y, double z);\n\n        [DllImport("opengl32.dll")]\n        public static extern void glDisable(uint cap);\n\n        [DllImport("opengl32.dll")]\n        public static extern void glColor4f(float R, float G, float B, float A);\n\n        [DllImport("opengl32.dll")]\n        public static extern void glEnable(uint cap);\n\n        [DllImport("opengl32.dll")]\n        public static extern void glBlendFunc(uint sfactor, uint dfactor);\n\n        public const int GL_TRIANGLE_STRIP = 0x0005;\n        public const uint GL_LIGHTING = 0x0B50;\n        public const int GL_BLEND = 0x0BE2;\n        public const int GL_SRC_ALPHA = 0x0302;\n        public const int GL_ONE_MINUS_SRC_ALPHA = 0x0303;\n    }\n}\n\n')))}u.isMDXComponent=!0},87042:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/opengl-cubes-9b2d3c4b7efcdbe2550d5c744e53b90a.png"}}]);