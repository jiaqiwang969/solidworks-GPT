"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[58125],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>w});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,w=p["".concat(l,".").concat(m)]||p[m]||g[m]||r;return t?o.createElement(w,a(a({ref:n},c),{},{components:t})):o.createElement(w,a({ref:n},c))}));function w(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<r;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(87462),i=(t(67294),t(3905));const r={title:"Hosting SOLIDWORKS eDrawings control in Windows Presentation Foundation (WPF)",caption:"Hosting Control in WPF",description:"Detailed guide on hosting SOLIDWORKS eDrawings control as WPF User Control in Windows Presentation Foundation (WPF)",image:"edrawings-wpf-window.png",labels:["edrawings","host","wpf"]},a=void 0,s={unversionedId:"codestack-clone/edrawings-api/gettings-started/wpf/index",id:"codestack-clone/edrawings-api/gettings-started/wpf/index",title:"Hosting SOLIDWORKS eDrawings control in Windows Presentation Foundation (WPF)",description:"Detailed guide on hosting SOLIDWORKS eDrawings control as WPF User Control in Windows Presentation Foundation (WPF)",source:"@site/docs/codestack-clone/edrawings-api/gettings-started/wpf/index.md",sourceDirName:"codestack-clone/edrawings-api/gettings-started/wpf",slug:"/codestack-clone/edrawings-api/gettings-started/wpf/",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/edrawings-api/gettings-started/wpf/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack-clone/edrawings-api/gettings-started/wpf/index.md",tags:[],version:"current",frontMatter:{title:"Hosting SOLIDWORKS eDrawings control in Windows Presentation Foundation (WPF)",caption:"Hosting Control in WPF",description:"Detailed guide on hosting SOLIDWORKS eDrawings control as WPF User Control in Windows Presentation Foundation (WPF)",image:"edrawings-wpf-window.png",labels:["edrawings","host","wpf"]},sidebar:"tutorialSidebar",previous:{title:"Hosting eDrawings control in Windows Forms",permalink:"/solidworks-GPT/zh-Hans/docs/codestack-clone/edrawings-api/gettings-started/winforms/"},next:{title:"markup",permalink:"/solidworks-GPT/zh-Hans/docs/category/markup"}},l={},d=[{value:"Creating new project",id:"creating-new-project",level:2},{value:"Creating the eDrawings WPF control",id:"creating-the-edrawings-wpf-control",level:2},{value:"eDrawingHost.cs",id:"edrawinghostcs",level:3},{value:"eDrawingsHostControl.xaml",id:"edrawingshostcontrolxaml",level:3},{value:"eDrawingsHostControl.xaml.cs",id:"edrawingshostcontrolxamlcs",level:3},{value:"MainWindow.xaml",id:"mainwindowxaml",level:3}],c={toc:d},p="wrapper";function g(e){let{components:n,...r}=e;return(0,i.kt)(p,(0,o.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"eDrawings API doesn't provide a native WPF control to be used in WPF. It is however possible to use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.integration"},"WindowsFormsIntegration")," framework to host Windows Forms Control in the Windows Presentation Foundation (WPF) environment. Follow ",(0,i.kt)("a",{parentName:"p",href:"/docs/codestack/edrawings-api/gettings-started/winforms/"},"Hosting eDrawings control in Windows Forms")," guide of creating the eDrawings control for Windows Forms."),(0,i.kt)("h2",{id:"creating-new-project"},"Creating new project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start Visual Studio"),(0,i.kt)("li",{parentName:"ul"},"Create new project and select ",(0,i.kt)("em",{parentName:"li"},"WPF Application")," in the ",(0,i.kt)("em",{parentName:"li"},"Visual C#")," templates section\n",(0,i.kt)("img",{alt:"Creating WPF application",src:t(17862).Z,width:"1058",height:"566"}),"{ width=550 }"),(0,i.kt)("li",{parentName:"ul"},"Follow the ",(0,i.kt)("a",{parentName:"li",href:"/docs/codestack/edrawings-api/gettings-started/winforms/"},"Hosting eDrawings control in Windows Forms")," guide for steps of adding eDrawings interop"),(0,i.kt)("li",{parentName:"ul"},"Add reference to ",(0,i.kt)("em",{parentName:"li"},"WindowsFormsIntegration"))),(0,i.kt)("h2",{id:"creating-the-edrawings-wpf-control"},"Creating the eDrawings WPF control"),(0,i.kt)("p",null,"Create a wrapper for the eDrawings host Windows Forms control"),(0,i.kt)("h3",{id:"edrawinghostcs"},"eDrawingHost.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using eDrawings.Interop.EModelViewControl;\nusing System;\nusing System.Windows.Forms;\n\nnamespace CodeStack.Examples.eDrawings\n{\n    public class eDrawingHost : AxHost\n    {\n        public event Action<EModelViewControl> ControlLoaded;\n\n        private bool m_IsLoaded;\n\n        public eDrawingHost() : base("22945A69-1191-4DCF-9E6F-409BDE94D101")\n        {\n            m_IsLoaded = false;\n        }\n\n        protected override void OnCreateControl()\n        {\n            base.OnCreateControl();\n\n            if (!m_IsLoaded)\n            {\n                m_IsLoaded = true;\n                var ctrl = this.GetOcx() as EModelViewControl;\n                ControlLoaded?.Invoke(this.GetOcx() as EModelViewControl);\n            }\n        }\n    }\n}\n\n')),(0,i.kt)("p",null,"Create new WPF User Control which will host eDrawings and can be placed on other WPF controls or WPF windows"),(0,i.kt)("p",null,"The solution tree will be similar to the one below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"eDrawings WPF solution tree",src:t(69556).Z,width:"459",height:"381"}),"{ width=350 }"),(0,i.kt)("h3",{id:"edrawingshostcontrolxaml"},"eDrawingsHostControl.xaml"),(0,i.kt)("p",null,"There will be no logic or additional markup in the XAML of the control and all will be implemented in the code behind"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xaml"},'<UserControl x:Class="CodeStack.Examples.eDrawings.eDrawingsHostControl"\n             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\n             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" \n             xmlns:d="http://schemas.microsoft.com/expression/blend/2008" \n             xmlns:local="clr-namespace:CodeStack.Examples.eDrawings"\n             mc:Ignorable="d" \n             d:DesignHeight="300" d:DesignWidth="300">\n</UserControl>\n\n')),(0,i.kt)("h3",{id:"edrawingshostcontrolxamlcs"},"eDrawingsHostControl.xaml.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using eDrawings.Interop.EModelViewControl;\nusing System;\nusing System.Diagnostics;\nusing System.IO;\nusing System.Windows;\nusing System.Windows.Controls;\nusing System.Windows.Forms.Integration;\n\nnamespace CodeStack.Examples.eDrawings\n{\n    public partial class eDrawingsHostControl : UserControl\n    {\n        private EModelViewControl m_Ctrl;\n\n        public eDrawingsHostControl()\n        {\n            InitializeComponent();\n\n            var host = new WindowsFormsHost();\n            var ctrl = new eDrawingHost();\n            ctrl.ControlLoaded += OnControlLoaded;\n            host.Child = ctrl;\n            this.AddChild(host);\n        }\n        \n        public string FilePath\n        {\n            get { return (string)GetValue(FilePathProperty); }\n            set { SetValue(FilePathProperty, value); }\n        }\n\n        public static readonly DependencyProperty FilePathProperty =\n            DependencyProperty.Register(nameof(FilePath), typeof(string),\n                typeof(eDrawingsHostControl), new FrameworkPropertyMetadata(OnFilePathPropertyChanged));\n\n        private static void OnFilePathPropertyChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)\n        {\n            (d as eDrawingsHostControl).OpenFile(e.NewValue as string);\n        }\n\n        private void OpenFile(string filePath)\n        {\n            if (m_Ctrl == null)\n            {\n                throw new NullReferenceException("eDrawings control is not loaded");\n            }\n\n            if (string.IsNullOrEmpty(filePath) || !File.Exists(filePath))\n            {\n                m_Ctrl.CloseActiveDoc("");\n            }\n            else\n            {\n                m_Ctrl.OpenDoc(filePath, false, false, false, "");\n            }\n        }\n\n        private void OnControlLoaded(EModelViewControl ctrl)\n        {\n            m_Ctrl = ctrl;\n            m_Ctrl.OnFinishedLoadingDocument += OnFinishedLoadingDocument;\n            m_Ctrl.OnFailedLoadingDocument += OnFailedLoadingDocument;\n        }\n\n        private void OnFailedLoadingDocument(string fileName, int errorCode, string errorString)\n        {\n            Trace.WriteLine($"{fileName} failed to loaded: {errorString}");\n        }\n\n        private void OnFinishedLoadingDocument(string fileName)\n        {\n            Trace.WriteLine($"{fileName} loaded");\n        }\n    }\n}\n\n')),(0,i.kt)("p",null,"In this example the control defines the dependency property ",(0,i.kt)("em",{parentName:"p"},"FilePath")," which can be bound and represent the path to the SOLIDWORKS file to be opened in the eDrawings"),(0,i.kt)("h3",{id:"mainwindowxaml"},"MainWindow.xaml"),(0,i.kt)("p",null,"Add the following markup to the MainWindow. It defines the text box control whose ",(0,i.kt)("em",{parentName:"p"},"Text")," property is bound to ",(0,i.kt)("em",{parentName:"p"},"FilePath")," dependency property of WPF eDrawing control. Which means that the file will be loaded immediately once the value in the text box is changed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xaml"},'<Window x:Class="CodeStack.Examples.eDrawings.MainWindow"\n        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        xmlns:local="clr-namespace:CodeStack.Examples.eDrawings"\n        mc:Ignorable="d"\n        Title="MainWindow" Height="350" Width="525">\n    <Grid>\n        <Grid.RowDefinitions>\n            <RowDefinition Height="*"/>\n            <RowDefinition Height="Auto"/>\n        </Grid.RowDefinitions>\n        <local:eDrawingsHostControl Grid.Row="0" FilePath="{Binding Path=Text, ElementName=txtFilePath, UpdateSourceTrigger=Explicit}"/>\n        <TextBox Grid.Row="1" x:Name="txtFilePath"/>\n    </Grid>\n</Window>\n\n')),(0,i.kt)("p",null,"Change the path to file in the text box to see the file loaded into the WPF form."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SOLIDWORKS file is loaded into the WPF eDrawings control",src:t(34563).Z,width:"660",height:"478"}),"{ width=350 }"),(0,i.kt)("p",null,"Source code is available on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/codestackdev/solidworks-api-examples/tree/master/edrawings-api/eDrawingsWpfHost"},"GitHub")))}g.isMDXComponent=!0},34563:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/edrawings-wpf-window-01d6825d4d3e46bfafd3f49cb1176cf0.png"},17862:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/visual-studio-new-wpf-project-3224e5130449cce3ccd432430f20a33c.png"},69556:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/visual-studio-solution-tree-1441b48c661a0de828426e6cf54b10d3.png"}}]);