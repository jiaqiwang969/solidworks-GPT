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