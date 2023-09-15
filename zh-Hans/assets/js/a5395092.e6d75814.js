"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[39247],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>w});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),g=r,w=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return t?i.createElement(w,o(o({ref:n},c),{},{components:t})):i.createElement(w,o({ref:n},c))}));function w(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},62814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(87462),r=(t(67294),t(3905));const a={title:"\u5728Windows Presentation Foundation (WPF)\u4e2d\u6258\u7ba1SOLIDWORKS eDrawings\u63a7\u4ef6",image:"edrawings-wpf-window.png",labels:["edrawings","host","wpf"]},o=void 0,s={unversionedId:"codestack/edrawings-api/gettings-started/wpf/index",id:"codestack/edrawings-api/gettings-started/wpf/index",title:"\u5728Windows Presentation Foundation (WPF)\u4e2d\u6258\u7ba1SOLIDWORKS eDrawings\u63a7\u4ef6",description:"eDrawings API\u6ca1\u6709\u63d0\u4f9b\u7528\u4e8eWPF\u7684\u539f\u751f\u63a7\u4ef6\u3002\u4f46\u662f\u53ef\u4ee5\u4f7f\u7528WindowsFormsIntegration\u6846\u67b6\u5728Windows Presentation Foundation (WPF)\u73af\u5883\u4e2d\u6258\u7ba1Windows Forms\u63a7\u4ef6\u3002\u8bf7\u6309\u7167\u5728Windows Forms\u4e2d\u6258\u7ba1eDrawings\u63a7\u4ef6\u6307\u5357\u521b\u5efa\u7528\u4e8eWindows Forms\u7684eDrawings\u63a7\u4ef6\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/codestack/edrawings-api/gettings-started/wpf/index.md",sourceDirName:"codestack/edrawings-api/gettings-started/wpf",slug:"/codestack/edrawings-api/gettings-started/wpf/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/edrawings-api/gettings-started/wpf/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/edrawings-api/gettings-started/wpf/index.md",tags:[],version:"current",frontMatter:{title:"\u5728Windows Presentation Foundation (WPF)\u4e2d\u6258\u7ba1SOLIDWORKS eDrawings\u63a7\u4ef6",image:"edrawings-wpf-window.png",labels:["edrawings","host","wpf"]},sidebar:"tutorialSidebar",previous:{title:"\u5728Windows Forms\u4e2d\u6258\u7ba1eDrawings\u63a7\u4ef6",permalink:"/solidworks-GPT/zh-Hans/docs/codestack/edrawings-api/gettings-started/winforms/"},next:{title:"markup",permalink:"/solidworks-GPT/zh-Hans/docs/category/markup"}},l={},d=[{value:"\u521b\u5efa\u65b0\u9879\u76ee",id:"\u521b\u5efa\u65b0\u9879\u76ee",level:2},{value:"\u521b\u5efaeDrawings WPF\u63a7\u4ef6",id:"\u521b\u5efaedrawings-wpf\u63a7\u4ef6",level:2},{value:"eDrawingHost.cs",id:"edrawinghostcs",level:3},{value:"eDrawingsHostControl.xaml",id:"edrawingshostcontrolxaml",level:3},{value:"eDrawingsHostControl.xaml.cs",id:"edrawingshostcontrolxamlcs",level:3},{value:"MainWindow.xaml",id:"mainwindowxaml",level:3}],c={toc:d},p="wrapper";function m(e){let{components:n,...a}=e;return(0,r.kt)(p,(0,i.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"eDrawings API\u6ca1\u6709\u63d0\u4f9b\u7528\u4e8eWPF\u7684\u539f\u751f\u63a7\u4ef6\u3002\u4f46\u662f\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.integration"},"WindowsFormsIntegration"),"\u6846\u67b6\u5728Windows Presentation Foundation (WPF)\u73af\u5883\u4e2d\u6258\u7ba1Windows Forms\u63a7\u4ef6\u3002\u8bf7\u6309\u7167",(0,r.kt)("a",{parentName:"p",href:"/docs/codestack/edrawings-api/gettings-started/winforms/"},"\u5728Windows Forms\u4e2d\u6258\u7ba1eDrawings\u63a7\u4ef6"),"\u6307\u5357\u521b\u5efa\u7528\u4e8eWindows Forms\u7684eDrawings\u63a7\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa\u65b0\u9879\u76ee"},"\u521b\u5efa\u65b0\u9879\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u542f\u52a8Visual Studio"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u65b0\u9879\u76ee\uff0c\u5e76\u5728",(0,r.kt)("em",{parentName:"li"},"Visual C#"),"\u6a21\u677f\u90e8\u5206\u9009\u62e9",(0,r.kt)("em",{parentName:"li"},"WPF\u5e94\u7528\u7a0b\u5e8f"),(0,r.kt)("img",{alt:"\u521b\u5efaWPF\u5e94\u7528\u7a0b\u5e8f",src:t(80479).Z,width:"1058",height:"566"}),"{ width=550 }"),(0,r.kt)("li",{parentName:"ul"},"\u6309\u7167",(0,r.kt)("a",{parentName:"li",href:"/docs/codestack/edrawings-api/gettings-started/winforms/"},"\u5728Windows Forms\u4e2d\u6258\u7ba1eDrawings\u63a7\u4ef6"),"\u6307\u5357\u7684\u6b65\u9aa4\u6dfb\u52a0eDrawings\u4e92\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5bf9",(0,r.kt)("em",{parentName:"li"},"WindowsFormsIntegration"),"\u7684\u5f15\u7528")),(0,r.kt)("h2",{id:"\u521b\u5efaedrawings-wpf\u63a7\u4ef6"},"\u521b\u5efaeDrawings WPF\u63a7\u4ef6"),(0,r.kt)("p",null,"\u4e3aeDrawings\u6258\u7ba1\u7684Windows Forms\u63a7\u4ef6\u521b\u5efa\u4e00\u4e2a\u5305\u88c5\u5668"),(0,r.kt)("h3",{id:"edrawinghostcs"},"eDrawingHost.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using eDrawings.Interop.EModelViewControl;\nusing System;\nusing System.Windows.Forms;\n\nnamespace CodeStack.Examples.eDrawings\n{\n    public class eDrawingHost : AxHost\n    {\n        public event Action<EModelViewControl> ControlLoaded;\n\n        private bool m_IsLoaded;\n\n        public eDrawingHost() : base("22945A69-1191-4DCF-9E6F-409BDE94D101")\n        {\n            m_IsLoaded = false;\n        }\n\n        protected override void OnCreateControl()\n        {\n            base.OnCreateControl();\n\n            if (!m_IsLoaded)\n            {\n                m_IsLoaded = true;\n                var ctrl = this.GetOcx() as EModelViewControl;\n                ControlLoaded?.Invoke(this.GetOcx() as EModelViewControl);\n            }\n        }\n    }\n}\n\n')),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684WPF\u7528\u6237\u63a7\u4ef6\uff0c\u7528\u4e8e\u6258\u7ba1eDrawings\uff0c\u5e76\u53ef\u4ee5\u653e\u7f6e\u5728\u5176\u4ed6WPF\u63a7\u4ef6\u6216WPF\u7a97\u53e3\u4e0a"),(0,r.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\u6811\u5c06\u7c7b\u4f3c\u4e8e\u4e0b\u9762\u7684\u7ed3\u6784\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"eDrawings WPF\u89e3\u51b3\u65b9\u6848\u6811",src:t(35153).Z,width:"459",height:"381"}),"{ width=350 }"),(0,r.kt)("h3",{id:"edrawingshostcontrolxaml"},"eDrawingsHostControl.xaml"),(0,r.kt)("p",null,"XAML\u4e2d\u4e0d\u4f1a\u6709\u903b\u8f91\u6216\u5176\u4ed6\u989d\u5916\u7684\u6807\u8bb0\uff0c\u6240\u6709\u7684\u5b9e\u73b0\u90fd\u5c06\u5728\u4ee3\u7801\u540e\u53f0\u4e2d\u5b8c\u6210"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xaml"},'<UserControl x:Class="CodeStack.Examples.eDrawings.eDrawingsHostControl"\n             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" \n             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" \n             xmlns:local="clr-namespace:CodeStack.Examples.eDrawings"\n             mc:Ignorable="d" \n             d:DesignHeight="300" d:DesignWidth="300">\n</UserControl>\n\n')),(0,r.kt)("h3",{id:"edrawingshostcontrolxamlcs"},"eDrawingsHostControl.xaml.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using eDrawings.Interop.EModelViewControl;\nusing System;\nusing System.Diagnostics;\nusing System.IO;\nusing System.Windows;\nusing System.Windows.Controls;\nusing System.Windows.Forms.Integration;\n\nnamespace CodeStack.Examples.eDrawings\n{\n    public partial class eDrawingsHostControl : UserControl\n    {\n        private EModelViewControl m_Ctrl;\n\n        public eDrawingsHostControl()\n        {\n            InitializeComponent();\n\n            var host = new WindowsFormsHost();\n            var ctrl = new eDrawingHost();\n            ctrl.ControlLoaded += OnControlLoaded;\n            host.Child = ctrl;\n            this.AddChild(host);\n        }\n        \n        public string FilePath\n        {\n            get { return (string)GetValue(FilePathProperty); }\n            set { SetValue(FilePathProperty, value); }\n        }\n\n        public static readonly DependencyProperty FilePathProperty =\n            DependencyProperty.Register(nameof(FilePath), typeof(string),\n                typeof(eDrawingsHostControl), new FrameworkPropertyMetadata(OnFilePathPropertyChanged));\n\n        private static void OnFilePathPropertyChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)\n        {\n            (d as eDrawingsHostControl).OpenFile(e.NewValue as string);\n        }\n\n        private void OpenFile(string filePath)\n        {\n            if (m_Ctrl == null)\n            {\n                throw new NullReferenceException("eDrawings\u63a7\u4ef6\u672a\u52a0\u8f7d");\n            }\n\n            if (string.IsNullOrEmpty(filePath) || !File.Exists(filePath))\n            {\n                m_Ctrl.CloseActiveDoc("");\n            }\n            else\n            {\n                m_Ctrl.OpenDoc(filePath, false, false, false, "");\n            }\n        }\n\n        private void OnControlLoaded(EModelViewControl ctrl)\n        {\n            m_Ctrl = ctrl;\n            m_Ctrl.OnFinishedLoadingDocument += OnFinishedLoadingDocument;\n            m_Ctrl.OnFailedLoadingDocument += OnFailedLoadingDocument;\n        }\n\n        private void OnFailedLoadingDocument(string fileName, int errorCode, string errorString)\n        {\n            Trace.WriteLine($"{fileName}\u52a0\u8f7d\u5931\u8d25: {errorString}");\n        }\n\n        private void OnFinishedLoadingDocument(string fileName)\n        {\n            Trace.WriteLine($"{fileName}\u5df2\u52a0\u8f7d");\n        }\n    }\n}\n\n')),(0,r.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u8be5\u63a7\u4ef6\u5b9a\u4e49\u4e86\u4f9d\u8d56\u5c5e\u6027",(0,r.kt)("em",{parentName:"p"},"FilePath"),"\uff0c\u53ef\u4ee5\u8fdb\u884c\u7ed1\u5b9a\uff0c\u5e76\u8868\u793a\u8981\u5728eDrawings\u4e2d\u6253\u5f00\u7684SOLIDWORKS\u6587\u4ef6\u7684\u8def\u5f84"),(0,r.kt)("h3",{id:"mainwindowxaml"},"MainWindow.xaml"),(0,r.kt)("p",null,"\u5c06\u4ee5\u4e0b\u6807\u8bb0\u6dfb\u52a0\u5230MainWindow\u3002\u5b83\u5b9a\u4e49\u4e86\u6587\u672c\u6846\u63a7\u4ef6\uff0c\u5176",(0,r.kt)("em",{parentName:"p"},"Text"),"\u5c5e\u6027\u7ed1\u5b9a\u5230WPF eDrawing\u63a7\u4ef6\u7684",(0,r.kt)("em",{parentName:"p"},"FilePath"),"\u4f9d\u8d56\u5c5e\u6027\u3002\u8fd9\u610f\u5473\u7740\u4e00\u65e6\u6587\u672c\u6846\u4e2d\u7684\u503c\u66f4\u6539\uff0c\u6587\u4ef6\u5c06\u7acb\u5373\u52a0\u8f7d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xaml"},'<Window x:Class="CodeStack.Examples.eDrawings.MainWindow"\n        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        xmlns:local="clr-namespace:CodeStack.Examples.eDrawings"\n        mc:Ignorable="d"\n        Title="MainWindow" Height="350" Width="525">\n    <Grid>\n        <Grid.RowDefinitions>\n            <RowDefinition Height="*"/>\n            <RowDefinition Height="Auto"/>\n        </Grid.RowDefinitions>\n        <local:eDrawingsHostControl Grid.Row="0" FilePath="{Binding Path=Text, ElementName=txtFilePath, UpdateSourceTrigger=Explicit}"/>\n        <TextBox Grid.Row="1" x:Name="txtFilePath"/>\n    </Grid>\n</Window>\n\n')),(0,r.kt)("p",null,"\u66f4\u6539\u6587\u672c\u6846\u4e2d\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u5373\u53ef\u5c06\u6587\u4ef6\u52a0\u8f7d\u5230WPF\u7a97\u4f53\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SOLIDWORKS\u6587\u4ef6\u5df2\u52a0\u8f7d\u5230WPF eDrawings\u63a7\u4ef6\u4e2d",src:t(8289).Z,width:"660",height:"478"}),"{ width=350 }"),(0,r.kt)("p",null,"\u6e90\u4ee3\u7801\u53ef\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/solidworks-api-examples/tree/master/edrawings-api/eDrawingsWpfHost"},"GitHub"),"\u4e0a\u627e\u5230"))}m.isMDXComponent=!0},8289:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/edrawings-wpf-window-01d6825d4d3e46bfafd3f49cb1176cf0.png"},80479:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/visual-studio-new-wpf-project-3224e5130449cce3ccd432430f20a33c.png"},35153:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/visual-studio-solution-tree-1441b48c661a0de828426e6cf54b10d3.png"}}]);