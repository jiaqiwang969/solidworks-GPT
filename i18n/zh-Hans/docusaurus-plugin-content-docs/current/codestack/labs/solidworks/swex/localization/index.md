---
title: Localizing SOLIDWORKS add-ins using SwEx framework
caption: Localization
description: How to support multi language SOLIDWORKS add-ins by using of localized resources in SwEx framework
image: menu-localized.png
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
SwEx frameworks supports [resources in .NET applications](https://docs.microsoft.com/en-us/dotnet/framework/resources/index) to enable localization of the add-in, e.g. supporting multiple languages.

This technique allows to load localized string at runtime based on the Windows settings in the control panel.

![Region and language page in Control Panel](region-format.png){ width=450 }

Resources should be added to the corresponding localized .resx file (e.g. Resources.resx for default, Resources.ru.resx for Russian, Resources.fr.resx for French, etc.)

![Resource files in the solutions](resource-files.png)

In order to reference the string from the resource, use the overloads of the constructors for the [TitleAttribute](https://docs.codestack.net/swex/common/html/M_CodeStack_SwEx_Common_Attributes_TitleAttribute__ctor_1.htm) and [SummaryAttribute](https://docs.codestack.net/swex/common/html/M_CodeStack_SwEx_Common_Attributes_SummaryAttribute__ctor_1.htm) which allows to define title, tooltips, hint string for all elements across SwEx framework (i.e. [menu commands](#menu), [property page controls](#property-manager-page), [macro feature](#macro-feature), etc.)

Below is an example which demonstrates this technique. Text is localized as per resources below:

![Localized resource files in the Visual Studio](visual-studio-resources.png)

## Menu

Two commands in menu are localized for Russian and English versions of the add-in.

![Localized menu commands](menu-localized.png)

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

## Property Manager Page

Property Manager page title and tooltips for the controls are localized for Russian and English versions of the add-in.

![Localized Property Manager Page](property-page-localized.png)

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


## Macro Feature

Macro feature base name is localized to Russian and English versions of the add-in.

> Note. Base name is only assigned while feature creation, feature won't be renamed after locale has changed.

![Localized Macro Feature base name](macro-feature-localized.png)

In a similar way it is possible to use strings from the resources to return another data, e.g. text of the error for macro feature.

![Localized macro feature error](macro-feature-error-localized.png)

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
