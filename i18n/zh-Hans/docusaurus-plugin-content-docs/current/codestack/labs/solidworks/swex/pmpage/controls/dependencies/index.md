---
title: Assigning tags and managing Property Manager Page control dependencies
caption: Tags And Dependencies
description: Assigning custom tags and managing SOLIDWORKS Property Manager Page control dependencies (visibility, enable state, etc.) using SwEx.PMPage framework
image: cascading-controls.gif
labels: [cascading,dependencies,tags]
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
It might be required to develop responsive property manager pages whose controls state depending on other control values, e.g. [controls enable state](#controls-enable-state), [cascading lists](#cascading-lists), etc. SwEx framework provides easy to setup and use functionality to implement these requirements and allows to update the states dynamically.

In order to define the controls which will be used for dependencies, it is required to assign the tags. Control tags allow to track the controls created from the data model properties. Tags can be assigned via [ControlTagAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_ControlTagAttribute.htm) decorated on data model properties. Control tag can be represented as any type, it is recommended to use enumerations or strings as tags.

Handler class must inherit [DependencyHandler](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Base_DependencyHandler.htm) class and [UpdateControlState](https://docs.codestack.net/swex/pmpage/html/M_CodeStack_SwEx_PMPage_Base_DependencyHandler_UpdateControlState.htm) method will be called every time when state needs to be resolved (i.e. the value of the parent control is changed).

Please see below couple of examples for using this technique to develop responsive property pages. It is possible to implement any custom logic and provide multiple parent controls if needed.

## Controls Enable State

Below is a code example demonstrating how to disable/enable selection box control based on the value of the check-box.

![Changing the control enable state based on the check box](enable-control.gif)

~~~vb
Public Class DataModelEnable

    <ControlTag(NameOf(Enable))>
    Public Property Enable As Boolean

    <SelectionBox(swSelectType_e.swSelFACES)>
    <DependentOn(GetType(EnableDepHandler), NameOf(Enable))>
    Public Property Selection As IEntity

End Class

Public Class EnableDepHandler
    Inherits DependencyHandler

    Protected Overrides Sub UpdateControlState(ByVal control As IPropertyManagerPageControlEx, ByVal parents As IPropertyManagerPageControlEx())
        control.Enabled = CBool(parents.First().GetValue())
    End Sub
End Class
~~~

~~~cs
public class DataModelEnable
{
    [ControlTag(nameof(Enable))]
    public bool Enable { get; set; }

    [SelectionBox(swSelectType_e.swSelFACES)]
    [DependentOn(typeof(EnableDepHandler), nameof(Enable))]
    public IEntity Selection { get; set; }
}

public class EnableDepHandler : DependencyHandler
{
    protected override void UpdateControlState(IPropertyManagerPageControlEx control, IPropertyManagerPageControlEx[] parents)
    {
        control.Enabled = (bool)parents.First().GetValue();
    }
}
~~~


## Cascading Lists

Below code example demonstrates how to implement cascading list.

![Cascading controls visibility in Property Manager Page](cascading-controls.gif)

Each value in the dropdown (defined via Enum) has its own nested list of options (also defined by another Enums). Once the value of the drp-down changed the visibility of option groups is changed as well.

~~~vb
Public Enum Groups_e
    GroupA
    GroupB
    GroupC
End Enum

Public Enum GroupA_e
    GroupA_OptionA
    GroupA_OptionB
    GroupA_OptionC
End Enum

Public Enum GroupB_e
    GroupB_OptionA
    GroupB_OptionB
End Enum

Public Enum GroupC_e
    GroupC_OptionA
    GroupC_OptionB
    GroupC_OptionC
    GroupC_OptionD
End Enum

Public Enum Tags_e
    Groups
End Enum

Public Class DataModelCascading

    <ControlTag(Tags_e.Groups)>
    Public Property Groups As Groups_e

    <DependentOn(GetType(GroupOptionsVisibilityDepHandler), Tags_e.Groups)>
    <ControlTag(Groups_e.GroupA)>
    <OptionBox>
    Public Property GroupA As GroupA_e

    <DependentOn(GetType(GroupOptionsVisibilityDepHandler), Tags_e.Groups)>
    <ControlTag(Groups_e.GroupB)>
    <OptionBox>
    Public Property GroupB As GroupB_e

    <DependentOn(GetType(GroupOptionsVisibilityDepHandler), Tags_e.Groups)>
    <ControlTag(Groups_e.GroupC)>
    <OptionBox>
    Public Property GroupC As GroupC_e

End Class

Public Class GroupOptionsVisibilityDepHandler
    Inherits DependencyHandler

    Protected Overrides Sub UpdateControlState(ByVal control As IPropertyManagerPageControlEx, ByVal parents As IPropertyManagerPageControlEx())
        Dim curGrp = CType(parents.First().GetValue(), Groups_e)
        control.Visible = CType(control.Tag, Groups_e) = curGrp
    End Sub

End Class
~~~

~~~cs
public enum Groups_e
{
    GroupA,
    GroupB,
    GroupC
}

public enum GroupA_e
{
    GroupA_OptionA,
    GroupA_OptionB,
    GroupA_OptionC
}

public enum GroupB_e
{
    GroupB_OptionA,
    GroupB_OptionB,
}

public enum GroupC_e
{
    GroupC_OptionA,
    GroupC_OptionB,
    GroupC_OptionC,
    GroupC_OptionD
}

public enum Tags_e
{
    Groups
}

public class DataModelCascading
{
    [ControlTag(Tags_e.Groups)]
    public Groups_e Groups { get; set; }

    [DependentOn(typeof(GroupOptionsVisibilityDepHandler), Tags_e.Groups)]
    [ControlTag(Groups_e.GroupA)]
    [OptionBox]
    public GroupA_e GroupA { get; set; }

    [DependentOn(typeof(GroupOptionsVisibilityDepHandler), Tags_e.Groups)]
    [ControlTag(Groups_e.GroupB)]
    [OptionBox]
    public GroupB_e GroupB { get; set; }

    [DependentOn(typeof(GroupOptionsVisibilityDepHandler), Tags_e.Groups)]
    [ControlTag(Groups_e.GroupC)]
    [OptionBox]
    public GroupC_e GroupC { get; set; }
}

public class GroupOptionsVisibilityDepHandler : DependencyHandler
{
    protected override void UpdateControlState(IPropertyManagerPageControlEx control, IPropertyManagerPageControlEx[] parents)
    {
        var curGrp = (Groups_e)parents.First().GetValue();

        control.Visible = (Groups_e)control.Tag == curGrp;
    }
}
~~~
