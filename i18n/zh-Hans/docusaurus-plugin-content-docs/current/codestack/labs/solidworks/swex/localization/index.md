---
title:  使用SwEx框架本地化SOLIDWORKS插件
caption: 本地化
---
 如何通过使用SwEx框架中的本地化资源来支持多语言的SOLIDWORKS插件
image: menu-localized.png
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
SwEx框架支持[.NET应用程序中的资源](https://docs.microsoft.com/en-us/dotnet/framework/resources/index)，以实现插件的本地化，例如支持多种语言。

这种技术允许根据控制面板中的Windows设置在运行时加载本地化字符串。

![控制面板中的区域和语言页面](region-format.png){ width=450 }

资源应添加到相应的本地化.resx文件中（例如默认情况下的Resources.resx，俄语的Resources.ru.resx，法语的Resources.fr.resx等）。

![解决方案中的资源文件](resource-files.png)

为了从资源中引用字符串，可以使用[TitleAttribute](https://docs.codestack.net/swex/common/html/M_CodeStack_SwEx_Common_Attributes_TitleAttribute__ctor_1.htm)和[SummaryAttribute](https://docs.codestack.net/swex/common/html/M_CodeStack_SwEx_Common_Attributes_SummaryAttribute__ctor_1.htm)的构造函数重载，这些构造函数允许为SwEx框架中的所有元素（例如[菜单命令](#menu)、[属性页控件](#property-manager-page)、[宏特征](#macro-feature)等）定义标题、工具提示和提示字符串。

下面是一个示例，演示了这种技术。文本根据以下资源进行本地化：

![Visual Studio中的本地化资源文件](visual-studio-resources.png)

## 菜单

菜单中的两个命令针对俄语和英语版本的插件进行了本地化。

![本地化的菜单命令](menu-localized.png)

~~~vb
<Title(GetType(Resources), NameOf(Resources.ToolbarTitle))>
<Summary(GetType(Resources), NameOf(Resources.ToolbarHint))>
Public Enum Commands_e

    <Title(GetType(Resources), NameOf(Resources.ShowPmpCommandTitle))>
    <Summary(GetType(Resources), NameOf(Resources.ShowPmpCommandHint))>
    ShowPmp

    <Title(GetType(Resources), NameOf(Resources.CreateMacroFeatureCommandTitle))>
    <Summary(GetType(Resources), NameOf(Resources.CreateMacroFeatureCommandHint))>
    CreateMacroFeature

End Enum
~~~

~~~cs
[Title(typeof(Resources), nameof(Resources.ToolbarTitle))]
[Summary(typeof(Resources), nameof(Resources.ToolbarHint))]
public enum Commands_e
{
    [Title(typeof(Resources), nameof(Resources.ShowPmpCommandTitle))]
    [Summary(typeof(Resources), nameof(Resources.ShowPmpCommandHint))]
    ShowPmp,

    [Title(typeof(Resources), nameof(Resources.CreateMacroFeatureCommandTitle))]
    [Summary(typeof(Resources), nameof(Resources.CreateMacroFeatureCommandHint))]
    CreateMacroFeature
}
~~~

## 属性管理器页

属性管理器页的标题和控件的工具提示针对俄语和英语版本的插件进行了本地化。

![本地化的属性管理器页](property-page-localized.png)

~~~vb
<Title(GetType(Resources), NameOf(Resources.LocalizedPmPageTitle))>
Public Class LocalizedPmPage

    <Title(GetType(Resources), NameOf(Resources.TextFieldTitle))>
    <Summary(GetType(Resources), NameOf(Resources.TextFieldDescription))>
    Public Property TextField As String

    <Title(GetType(Resources), NameOf(Resources.NumericFieldTitle))>
    <Summary(GetType(Resources), NameOf(Resources.NumericFieldDescription))>
    Public Property NumericField As Double

End Class
~~~


~~~cs
[Title(typeof(Resources), nameof(Resources.LocalizedPmPageTitle))]
public class LocalizedPmPage
{
    [Title(typeof(Resources), nameof(Resources.TextFieldTitle))]
    [Summary(typeof(Resources), nameof(Resources.TextFieldDescription))]
    public string TextField { get; set; }

    [Title(typeof(Resources), nameof(Resources.NumericFieldTitle))]
    [Summary(typeof(Resources), nameof(Resources.NumericFieldDescription))]
    public double NumericField { get; set; }
}
~~~


## 宏特征

宏特征的基本名称针对俄语和英语版本的插件进行了本地化。

> 注意：基本名称仅在创建特征时分配，语言环境更改后特征不会被重命名。

![本地化的宏特征基本名称](macro-feature-localized.png)

类似地，可以使用资源中的字符串返回其他数据，例如宏特征的错误文本。

![本地化的宏特征错误](macro-feature-error-localized.png)

~~~vb
<Title(GetType(Resources), NameOf(Resources.MacroFeatureBaseName))>
<ComVisible(True)>
Public Class LocalizedMacroFeature
    Inherits MacroFeatureEx

    Protected Overrides Function OnRebuild(ByVal app As ISldWorks, ByVal model As IModelDoc2, ByVal feature As IFeature) As MacroFeatureRebuildResult
        If Not String.IsNullOrEmpty(model.GetPathName) Then
            Return MacroFeatureRebuildResult.FromStatus(True)
        Else
            Return MacroFeatureRebuildResult.FromStatus(False, Resources.MacroFeatureError)
        End If
    End Function
End Class
~~~


~~~cs
[Title(typeof(Resources), nameof(Resources.MacroFeatureBaseName))]
[ComVisible(true)]
public class LocalizedMacroFeature : MacroFeatureEx
{
    protected override MacroFeatureRebuildResult OnRebuild(ISldWorks app, IModelDoc2 model, IFeature feature)
    {
        if (!string.IsNullOrEmpty(model.GetPathName()))
        {
            return MacroFeatureRebuildResult.FromStatus(true);
        }
        else
        {
            return MacroFeatureRebuildResult.FromStatus(false, Resources.MacroFeatureError);
        }
    }
}
~~~