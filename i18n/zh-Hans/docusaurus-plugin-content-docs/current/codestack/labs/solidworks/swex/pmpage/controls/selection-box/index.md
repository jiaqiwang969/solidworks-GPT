---
title: Selection box control in SOLIDWORKS Property Page with SwEx.PMPage framework
caption: Selection Box
description: Overview of options applied to Selection Box control
image: selection-box.png
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
![Selection box control](selection-box.png)

Selection box will be generated for the public properties decorated with [SelectionBoxAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_SelectionBoxAttribute.htm).

This attribute is applicable to the property of type object or any specific selectable type from 
[SolidWorks.Interop.SldWorks](https://help.solidworks.com/2014/english/api/SWHelp_List.html?id=a4a58f35c9bf4504aea25542315877d0#Pg0&ProductType=&ProductName=) namespace. In this case the type of the object should match the type specified in the [SelectionBoxAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_SelectionBoxAttribute.htm)

~~~vb
Public Class SelectionBoxDataModel

    <SelectionBox(swSelectType_e.swSelSOLIDBODIES)>
    Public Property Body As IBody2

    <SelectionBox(swSelectType_e.swSelEDGES, swSelectType_e.swSelNOTES, swSelectType_e.swSelCOORDSYS)>
    Public Property Dispatch As Object

End Class
~~~

~~~cs
public class SelectionBoxDataModel
{
    [SelectionBox(swSelectType_e.swSelSOLIDBODIES)]
    public IBody2 Body { get; set; }

    [SelectionBox(swSelectType_e.swSelEDGES, swSelectType_e.swSelNOTES, swSelectType_e.swSelCOORDSYS)]
    public object Dispatch { get; set; }
}
~~~

## Multiple Selection

This attribute is also applicable to lists. In this case multiple selections will be enabled for the selection box:

![Multiple entities selected in the selection box](selection-box-multiple.png)

~~~vb
Public Class SelectionBoxListDataModel

    <SelectionBox(swSelectType_e.swSelSOLIDBODIES)>
    Public Property Bodies As List(Of IBody2) = New List(Of IBody2)()

    <SelectionBox(swSelectType_e.swSelEDGES, swSelectType_e.swSelNOTES, swSelectType_e.swSelCOORDSYS)>
    Public Property Dispatches As List(Of Object) = New List(Of Object)()

End Class
~~~

~~~cs
public class SelectionBoxListDataModel
{
    [SelectionBox(swSelectType_e.swSelSOLIDBODIES)]
    public List<IBody2> Bodies { get; set; } = new List<IBody2>();

    [SelectionBox(swSelectType_e.swSelEDGES, swSelectType_e.swSelNOTES, swSelectType_e.swSelCOORDSYS)]
    public List<object> Dispatches { get; set; } = new List<object>();
}
~~~


Additional selection box options can be specified via [SelectionBoxOptionsAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_SelectionBoxOptionsAttribute.htm)

## Selection Marks

Selection marks are used to differentiate the selection in the selection boxes. In most cases it is required for each selection to come into the specific selection box. In this case it is required to use different selection mark for every selection box. Selection marks are bitmasks, which means that they should be incremented with a power of two (i.e. 1, 2, 4, 8, 16 etc.) in order to be unique. By default SwEx framework will take care of assigning the correct selection marks when [this](https://docs.codestack.net/swex/pmpage/html/M_CodeStack_SwEx_PMPage_Attributes_SelectionBoxAttribute__ctor.htm) or [this](https://docs.codestack.net/swex/pmpage/html/M_CodeStack_SwEx_PMPage_Attributes_SelectionBoxAttribute__ctor_3.htm) version of constructor is used. However it is possible to manually assign the marks using [this](https://docs.codestack.net/swex/pmpage/html/M_CodeStack_SwEx_PMPage_Attributes_SelectionBoxAttribute__ctor_1.htm) and [this](https://docs.codestack.net/swex/pmpage/html/M_CodeStack_SwEx_PMPage_Attributes_SelectionBoxAttribute__ctor_2.htm) constructors.

## Custom selection filters

To provide custom filtering logic for selection box it is required to implement the filter by inheriting the [SelectionCustomFilter](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Base_SelectionCustomFilter_1.htm) class and assign the filter via overloaded constructor of [SelectionBoxAttribute](https://docs.codestack.net/swex/pmpage/html/M_CodeStack_SwEx_PMPage_Attributes_SelectionBoxAttribute__ctor_2.htm) attribute

~~~vb
Public Class SelectionBoxCustomSelectionFilterDataModel

    Public Class DataGroup
        <SelectionBox(GetType(PlanarFaceFilter), swSelectType_e.swSelFACES)>
        Public Property PlanarFace As IFace2
    End Class

    Public Class PlanarFaceFilter
        Inherits SelectionCustomFilter(Of IFace2)

        Protected Overrides Function Filter(ByVal selBox As IPropertyManagerPageControlEx, ByVal selection As IFace2, ByVal selType As swSelectType_e, ByRef itemText As String) As Boolean
            itemText = "Planar Face"
            Return selection.IGetSurface().IsPlane()
        End Function
    End Class

End Class
~~~

~~~cs
public class SelectionBoxCustomSelectionFilterDataModel
{
    public class DataGroup
    {
        [SelectionBox(typeof(PlanarFaceFilter), swSelectType_e.swSelFACES)] //setting the standard filter to faces and custom filter to only filter planar faces
        public IFace2 PlanarFace { get; set; }
    }

    public class PlanarFaceFilter : SelectionCustomFilter<IFace2>
    {
        protected override bool Filter(IPropertyManagerPageControlEx selBox, IFace2 selection, swSelectType_e selType, ref string itemText)
        {
            itemText = "Planar Face";
            return selection.IGetSurface().IsPlane(); //validating the selection and only allowing planar face
        }
    }
}
~~~
