---
title: Defining commands buttons in SOLIDWORKS toolbar using SwEx.AddIn framework
caption: Defining Commands
description: Explanations on the ways of defining the commands in groups using SwEx framework for SOLIDWORKS add-ins in C# and VB.NET
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
## Defining Commands

SwEx framework allows defining the commands in the enumeration (enum). In this case the enumeration value become the id of the corresponding command.


~~~vb
Public Enum CommandsA_e
    CommandA1
    CommandA2
End Enum
~~~


~~~cs
public enum CommandsA_e
{
    CommandA1,
    CommandA2
}
~~~

## Commands Decoration

Commands can be decorated with the additional attributes to define look and feel of the command.

### Title
User friendly title can be defined using the [TitleAttribute](https://docs.codestack.net/swex/common/html/T_CodeStack_SwEx_Common_Attributes_TitleAttribute.htm). Alternatively, any attribute class which inherits [DisplayNameAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.displaynameattribute?view=netframework-4.0) is supported as a title.

### Description
Description is a text displayed in the SOLIDWORKS command bar when user hovers the mouse over the command. Description can be defined using the [DescriptionAttribute](https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.descriptionattribute?view=netframework-4.0)

### Icon
Icon can be set using the [CommandIconAttribute](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_CommandIconAttribute.htm). There are multiple overloads of this attribute. User can provide

* Single master icon
* 2 icons (small and large)
* 6 icons for high resolution (supported from SOLIDWORKS 2016 onwards)

Icon can be also specified using the generic [IconAttribute](https://docs.codestack.net/swex/common/html/T_CodeStack_SwEx_Common_Attributes_IconAttribute.htm).

Regardless of the option selected above, SwEx framework will scale the icon appropriately to match the version of SOLIDWORKS. For example if single master icon specified for SOLIDWORKS 2016 onwards, 6 icons will be created to support high resolution, for older SOLIDWORKS, 2 icons will be created (large and small). If user specified 6 icons - all of them will be used 'as is' for SOLIDWORKS 2016 or newer, but they will be converted to 2 (small and large) icons for older versions as high resolutions icons are not supported in SOLIDWORKS older than 2016.

Transparency is supported. SwEx framework will automatically assign the required transparency key for compatibility with SOLIDWORKS.

Icons can be referenced from any static class. Usually this should be a resource class. It is required to specify the type of the resource class as first parameter, and the resource names as additional parameters. Use *nameof* keyword to load the resource name to avoid usage of 'magic' strings.


~~~vb
Imports CodeStack.SwEx.Common.Attributes
Imports CodeStack.SwEx.My.Resources
Imports System.ComponentModel

<Title(GetType(Resources), NameOf(Resources.ToolbarTitle))>
<Description("Command Group Title")>
<Icon(GetType(Resources), NameOf(Resources.commands))>
Public Enum CommandsB_e

    <Title("First Command")>
    <Description("Hint text for first command")>
    <Icon(GetType(Resources), NameOf(Resources.command1))>
    CommandB1

    <Title("Second Command")>
    <Description("Hint text for second command")>
    <Icon(GetType(Resources), NameOf(Resources.command2))>
    CommandB2

    <Title("Third Command")>
    <Description("Hint text for third command")>
    <Icon(GetType(Resources), NameOf(Resources.command3))>
    CommandB3

End Enum
~~~


~~~cs
using CodeStack.SwEx.Common.Attributes;
using CodeStack.SwEx.Properties;
using System.ComponentModel;

[Title(typeof(Resources), nameof(Resources.ToolbarTitle))]
[Description("Command Group Title")]
[Icon(typeof(Resources), nameof(Resources.commands))]
public enum CommandsB_e
{
    [Title("First Command")]
    [Description("Hint text for first command")]
    [Icon(typeof(Resources), nameof(Resources.command1))]
    CommandB1,

    [Title("Second Command")]
    [Description("Hint text for second command")]
    [Icon(typeof(Resources), nameof(Resources.command2))]
    CommandB2,

    [Title("Third Command")]
    [Description("Hint text for third command")]
    [Icon(typeof(Resources), nameof(Resources.command3))]
    CommandB3
}
~~~



## Commands Scope

Each command can be assigned with the operation scope (i.e. the environment where this command can be executed, e.g. Part, Assembly etc.). Scope can be assigned with [CommandItemInfoAttribute](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_CommandItemInfoAttribute.htm) attribute by specifying the values in *suppWorkspaces* parameter of the attribute's constructor. The [swWorkspaceTypes_e](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Enums_swWorkspaceTypes_e.htm) is a flag enumeration, so it is possible to combine the workspaces.

Framework will automatically disable/enable the commands based on the active environment as per the specified scope. For additional logic for assigning the state visit [Custom Enable Command State](/docs/codestack/labs/solidworks/swex/add-in/commands-manager/command-states/) article.


~~~vb
Imports CodeStack.SwEx.AddIn.Attributes
Imports CodeStack.SwEx.AddIn.Enums

Public Enum CommandsD_e

    <CommandItemInfo(swWorkspaceTypes_e.Part)>
    CommandD1

    <CommandItemInfo(swWorkspaceTypes_e.Part Or swWorkspaceTypes_e.Assembly)>
    CommandD2

End Enum
~~~


~~~cs
using CodeStack.SwEx.AddIn.Attributes;
using CodeStack.SwEx.AddIn.Enums;

public enum CommandsD_e
{
    [CommandItemInfo(swWorkspaceTypes_e.Part)]
    CommandD1,

    [CommandItemInfo(swWorkspaceTypes_e.Part | swWorkspaceTypes_e.Assembly)]
    CommandD2
}
~~~

## User Assigned Command Group IDs

[CommandGroupInfoAttribute](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_Attributes_CommandGroupInfoAttribute.htm) allows to assign the static command id to the group. This should be applied to the enumerator definition. If this attribute is not used SwEx framework will assign the ids automatically.

~~~vb
Imports CodeStack.SwEx.AddIn.Attributes

<CommandGroupInfo(2)>
Public Enum CommandsE_e
    CommandE1
    CommandE2
End Enum
~~~


~~~cs
using CodeStack.SwEx.AddIn.Attributes;

[CommandGroupInfo(2)]
public enum CommandsE_e
{
    CommandE1,
    CommandE2
}
~~~
