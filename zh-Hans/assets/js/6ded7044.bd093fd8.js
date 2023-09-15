"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[72679],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>b});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var a=o.createContext({}),s=function(n){var e=o.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=s(n.components);return o.createElement(a.Provider,{value:e},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,a=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),d=s(t),g=r,b=d["".concat(a,".").concat(g)]||d[g]||u[g]||i;return t?o.createElement(b,l(l({ref:e},p),{},{components:t})):o.createElement(b,l({ref:e},p))}));function b(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,l=new Array(i);l[0]=g;var c={};for(var a in e)hasOwnProperty.call(e,a)&&(c[a]=e[a]);c.originalType=n,c[d]="string"==typeof n?n:r,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3461:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const i={title:"\u4f7f\u7528OpenGL\u548cSOLIDWORKS API\u6e32\u67d3\u5177\u6709\u900f\u660e\u5ea6\u7684\u76d2\u5b50\u7f51\u683c",image:"opengl-cubes.png",labels:["opengl","render","transparency"]},l=void 0,c={unversionedId:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/box-grid-transparency/index",id:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/box-grid-transparency/index",title:"\u4f7f\u7528OpenGL\u548cSOLIDWORKS API\u6e32\u67d3\u5177\u6709\u900f\u660e\u5ea6\u7684\u76d2\u5b50\u7f51\u683c",description:"\u4f7f\u7528OpenGL\u6e32\u67d3\u7684\u900f\u660e\u7acb\u65b9\u4f53{ width=250 }",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/box-grid-transparency/index.md",sourceDirName:"codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/box-grid-transparency",slug:"/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/box-grid-transparency/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/box-grid-transparency/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/box-grid-transparency/index.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528OpenGL\u548cSOLIDWORKS API\u6e32\u67d3\u5177\u6709\u900f\u660e\u5ea6\u7684\u76d2\u5b50\u7f51\u683c",image:"opengl-cubes.png",labels:["opengl","render","transparency"]},sidebar:"tutorialSidebar",previous:{title:"SOLIDWORKS\u5b8f\u4ee5\u4eceBOM\u8868\u66f4\u65b0\u5f15\u7528\u914d\u7f6e",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/bom-tables-update-referenced-configuration/"},next:{title:"\u4f7f\u7528SOLIDWORKS API\u5c06\u6587\u6863\u524d\u666f\u5e26\u5230\u524d\u53f0\uff08\u6fc0\u6d3b\u6587\u6863\uff09",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/bring-document-foreground/"}},a={},s=[{value:"AddIn.cs",id:"addincs",level:2},{value:"OpenGlDocumentHandler.cs",id:"opengldocumenthandlercs",level:2},{value:"OpenGL.cs",id:"openglcs",level:2}],p={toc:s},d="wrapper";function u(n){let{components:e,...i}=n;return(0,r.kt)(d,(0,o.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4f7f\u7528OpenGL\u6e32\u67d3\u7684\u900f\u660e\u7acb\u65b9\u4f53",src:t(32904).Z,width:"494",height:"520"}),"{ width=250 }"),(0,r.kt)("p",null,"\u6b64\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528OpenGL\u548cSOLIDWORKS API\u5728\u9884\u5b9a\u4e49\u7f51\u683c\u4e2d\u4f7f\u7528\u900f\u660e\u5ea6\u6e32\u67d3\u7acb\u65b9\u4f53\u3002"),(0,r.kt)("p",null,"\u7acb\u65b9\u4f53\u4f1a\u81ea\u52a8\u6e32\u67d3\u5728\u6240\u6709\u6253\u5f00\u76843D\u6a21\u578b\uff08\u96f6\u4ef6\u6216\u88c5\u914d\uff09\u4e0a\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u66f4\u6539\u63d2\u4ef6\u4e2d\u58f0\u660e\u7684\u5e38\u91cf\u6765\u914d\u7f6e\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"private const int INST_COUNT = 27;\nprivate const int ROWS_COUNT = 3;\nprivate const int COLUMNS_COUNT = 3;\nprivate const double DIST = 0.05;\nprivate const double WIDTH = 0.1;\nprivate const double HEIGHT = 0.1;\nprivate const double LENGTH = 0.1;\nprivate readonly Color COLOR = Color.FromArgb(200, Color.Blue);\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u79cd\u65b9\u6cd5\u662f\u6e32\u67d3OpenGL\u5bf9\u8c61\u7684\u7b80\u5355\u65b9\u6cd5\uff0c\u4f46\u5b83\u5e76\u4e0d\u63d0\u4f9b\u6700\u4f73\u6027\u80fd\u4f18\u52bf\u3002\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/solidworks-api/adornment/opengl/vbo-xaml-importer/"},"\u5bfc\u5165XAML\u6587\u4ef6\u5e76\u4f7f\u7528VBO\u8fdb\u884c\u6e32\u67d3"),"\u4ee5\u83b7\u53d6\u4f7f\u7528OpenGL\u9876\u70b9\u7f13\u51b2\u5bf9\u8c61\uff08VBO\uff09\u8fdb\u884c\u9ad8\u6027\u80fd\u56fe\u5f62\u6e32\u67d3\u7684\u4ee3\u7801\u793a\u4f8b\u3002"),(0,r.kt)("p",null,"\u6e90\u4ee3\u7801\u53ef\u4ee5\u4ece",(0,r.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/solidworks-api-examples/tree/master/swex/add-in/opengl/OpenGlBoxGrid"},"GitHub"),"\u4e0b\u8f7d\u3002"),(0,r.kt)("h2",{id:"addincs"},"AddIn.cs"),(0,r.kt)("p",null,"\u8fd9\u662f\u63d2\u4ef6\u7684\u5165\u53e3\u70b9\u3002\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/labs/solidworks/swex/add-in/"},"SwEx.AddIn"),"\u6846\u67b6\u901a\u8fc7\u63d0\u4f9b\u5305\u88c5\u7c7b\u6765\u7ba1\u7406\u6587\u6863\u7684\u751f\u547d\u5468\u671f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using CodeStack.SwEx.AddIn;\nusing CodeStack.SwEx.AddIn.Attributes;\nusing System;\nusing System.Runtime.InteropServices;\n\nnamespace CodeStack.OpenGlBoxGrid\n{\n    [ComVisible(true), Guid("FAB0F03B-785E-4113-B120-E18E7C73B9EB")]\n    [AutoRegister("OpenGL Box Grid")]\n    public class AddIn : SwAddInEx\n    {\n        public override bool OnConnect()\n        {\n            CreateDocumentsHandler<OpenGlDocumentHandler>();\n            return true;\n        }\n    }\n}\n\n')),(0,r.kt)("h2",{id:"opengldocumenthandlercs"},"OpenGlDocumentHandler.cs"),(0,r.kt)("p",null,"\u8fd9\u662f\u6bcf\u4e2a\u6a21\u578b\u6587\u6863\u7684\u5904\u7406\u7a0b\u5e8f\u7c7b\uff0c\u5b83\u8ba2\u9605\u4e86SOLIDWORKS\u63d0\u4f9b\u7684OpenGL\u7f13\u51b2\u533a\u4ea4\u6362\u901a\u77e5\uff0c\u5e76\u6839\u636e\u8f93\u5165\u53c2\u6570\u8ba1\u7b97\u7acb\u65b9\u4f53\u7684\u5750\u6807\u5e76\u5728\u6a21\u578b\u7684\u56fe\u5f62\u89c6\u56fe\u4e2d\u8fdb\u884c\u6e32\u67d3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using CodeStack.SwEx.AddIn.Base;\nusing SolidWorks.Interop.sldworks;\nusing System.Drawing;\nusing static CodeStack.OpenGlBoxGrid.OpenGL;\n\nnamespace CodeStack.OpenGlBoxGrid\n{\n    public class OpenGlDocumentHandler : IDocumentHandler\n    {\n        private const int INST_COUNT = 27;\n        private const int ROWS_COUNT = 3;\n        private const int COLUMNS_COUNT = 3;\n        private const double DIST = 0.05;\n        private const double WIDTH = 0.1;\n        private const double HEIGHT = 0.1;\n        private const double LENGTH = 0.1;\n        private readonly Color COLOR = Color.FromArgb(200, Color.Blue);\n\n        private ModelView m_View;\n\n        public void Init(ISldWorks app, IModelDoc2 model)\n        {\n            m_View = model.IActiveView;\n\n            if (m_View != null)\n            {\n                m_View.BufferSwapNotify += OnBufferSwapNotify;\n            }\n        }\n\n        private int OnBufferSwapNotify()\n        {\n            int level = 0;\n            int row = 0;\n            int column = 0;\n\n            for (int i = 0; i < INST_COUNT; i++)\n            {\n                if (row == ROWS_COUNT)\n                {\n                    row = 0;\n                    column++;\n\n                    if (column == COLUMNS_COUNT)\n                    {\n                        column = 0;\n                        level++;\n                    }\n                }\n\n                RenderBox(new double[] \n                {\n                    row * (WIDTH + DIST),\n                    column * (LENGTH + DIST),\n                    level * (HEIGHT + DIST)\n                },\n                WIDTH, LENGTH, HEIGHT,\n                COLOR);\n\n                row++;\n            }\n            \n            return 0;\n        }\n\n        private void RenderBox(double[] pt, double width, double length, double height, Color color)\n        {\n            var vertices = new double[][]\n            {\n                new double[] { pt[0] - width / 2, pt[1] + length / 2, pt[2] + height / 2 },\n                new double[] { pt[0] - width / 2, pt[1] - length / 2, pt[2] + height / 2 },\n                new double[] { pt[0] + width / 2, pt[1] + length / 2, pt[2] + height / 2 },\n                new double[] { pt[0] + width / 2, pt[1] - length / 2, pt[2] + height / 2 },\n                new double[] { pt[0] + width / 2, pt[1] + length / 2, pt[2] - height / 2 },\n                new double[] { pt[0] + width / 2, pt[1] - length / 2, pt[2] - height / 2 },\n                new double[] { pt[0] - width / 2, pt[1] + length / 2, pt[2] - height / 2 },\n                new double[] { pt[0] - width / 2, pt[1] - length / 2, pt[2] - height / 2 },\n                new double[] { pt[0] - width / 2, pt[1] + length / 2, pt[2] + height / 2 },\n                new double[] { pt[0] - width / 2, pt[1] - length / 2, pt[2] + height / 2 }\n            };\n            \n            RenderTriangleStrip(vertices, color);\n\n            RenderTriangleStrip(new double[][]\n            {\n                vertices[1], vertices[7], vertices[3], vertices[5]\n            }, color);\n\n            RenderTriangleStrip(new double[][]\n            {\n                vertices[0], vertices[2], vertices[6], vertices[4]\n            }, color);\n        }\n        \n        private void RenderTriangleStrip(double[][] vertices, Color color)\n        {\n            glDisable(GL_LIGHTING);\n            glEnable(GL_BLEND);\n\n            glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);\n\n            glBegin(GL_TRIANGLE_STRIP);\n\n            glColor4f(color.R / 255f, color.G / 255f, color.B / 255f, color.A / 255f);\n\n            foreach (var vertex in vertices)\n            {\n                glVertex3d(vertex[0], vertex[1], vertex[2]);\n            }\n\n            glEnd();\n        }\n\n        public void Dispose()\n        {\n            if (m_View != null)\n            {\n                m_View.BufferSwapNotify -= OnBufferSwapNotify;\n            }\n        }\n    }\n}\n\n")),(0,r.kt)("h2",{id:"openglcs"},"OpenGL.cs"),(0,r.kt)("p",null,"OpenGL\u51fd\u6570\u7684\u5bfc\u5165\u5217\u8868\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System.Runtime.InteropServices;\n\nnamespace CodeStack.OpenGlBoxGrid\n{\n    public static class OpenGL\n    {\n        [DllImport("opengl32")]\n        public static extern void glBegin(uint mode);\n\n        [DllImport("opengl32")]\n        public static extern void glEnd();\n\n        [DllImport("opengl32")]\n        public static extern void glVertex3d(double x, double y, double z);\n\n        [DllImport("opengl32.dll")]\n        public static extern void glDisable(uint cap);\n\n        [DllImport("opengl32.dll")]\n        public static extern void glColor4f(float R, float G, float B, float A);\n\n        [DllImport("opengl32.dll")]\n        public static extern void glEnable(uint cap);\n\n        [DllImport("opengl32.dll")]\n        public static extern void glBlendFunc(uint sfactor, uint dfactor);\n\n        public const int GL_TRIANGLE_STRIP = 0x0005;\n        public const uint GL_LIGHTING = 0x0B50;\n        public const int GL_BLEND = 0x0BE2;\n        public const int GL_SRC_ALPHA = 0x0302;\n        public const int GL_ONE_MINUS_SRC_ALPHA = 0x0303;\n    }\n}\n\n')))}u.isMDXComponent=!0},32904:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/opengl-cubes-9b2d3c4b7efcdbe2550d5c744e53b90a.png"}}]);