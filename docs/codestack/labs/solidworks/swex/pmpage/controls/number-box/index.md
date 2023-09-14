---
title: Number Box in SOLIDWORKS Property Manager Page
caption: Number Box
description: Overview of options applied to Number Box control
image: number-box-units-wheel.png
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
![Simple number box](number-box.png)

Number box will be automatically created for the properties of *int* and *double* types.

~~~vb
Imports CodeStack.SwEx.PMPage.Attributes
Imports SolidWorks.Interop.swconst

Public Class NumberBoxDataModel

    Public Property Number As Integer
    Public Property FloatingNumber As Double


End Class
~~~

~~~cs
using CodeStack.SwEx.PMPage.Attributes;
using SolidWorks.Interop.swconst;

public class NumberBoxDataModel
{
    public int Number { get; set; }
    public double FloatingNumber { get; set; }

}
~~~

Style of the number box can be customized via the [NumberBoxOptionsAttribute](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_Attributes_NumberBoxOptionsAttribute.htm)

![Number boxes with additional styles allowing specifying the units and displaying thumbwheel for changing the value](number-box-units-wheel.png)

~~~vb
Imports CodeStack.SwEx.PMPage.Attributes
Imports SolidWorks.Interop.swconst

Public Class NumberBoxDataModel


	<NumberBoxOptions(swNumberboxUnitType_e.swNumberBox_Length, 0, 1000, 0.01, True, 0.02, 0.001,
					  swPropMgrPageNumberBoxStyle_e.swPropMgrPageNumberBoxStyle_Thumbwheel)>
	Public Property Length As Double

End Class
~~~

~~~cs
using CodeStack.SwEx.PMPage.Attributes;
using SolidWorks.Interop.swconst;

public class NumberBoxDataModel
{

    [NumberBoxOptions(swNumberboxUnitType_e.swNumberBox_Length, 0, 1000, 0.01, true, 0.02, 0.001,
        swPropMgrPageNumberBoxStyle_e.swPropMgrPageNumberBoxStyle_Thumbwheel)]
    public double Length { get; set; }
}
~~~

