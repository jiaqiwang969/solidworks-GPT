---
title: Handling dynamic values updated in the controls
caption: Dynamic Values
description: Handling dynamic values updated in the controls of the Property Manager Page using SwEx.PMPage framework
image: controls-dynamic-values.gif
toc-group-name: labs-solidworks-swex
sidebar_position: 0
---
![Values updated controls](controls-dynamic-values.gif)

In order to update control values for the properties changed from the code behind dynamically (e.g. on button click or when one property is changing another property), it is required to implement the [INotifyPropertyChanged](https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged?view=netframework-4.8) in the data model. Raise the [PropertyChanged](https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged.propertychanged?view=netframework-4.8) event for every property which needs to be watched to notify the environment that value has changed and control needs to be updated.

~~~vb
Imports System.ComponentModel

Public Class DynamicValuesDataModel
    Implements INotifyPropertyChanged

    Public Event PropertyChanged As PropertyChangedEventHandler Implements INotifyPropertyChanged.PropertyChanged

    Private m_Val1 As Double
    Private m_Val2 As Double

    Public Property Val1 As Double
        Get
            Return m_Val1
        End Get
        Set(ByVal value As Double)
            m_Val1 = value
            RaiseEvent PropertyChanged(Me, New PropertyChangedEventArgs(NameOf(Val1)))
            Val2 = value * 2
        End Set
    End Property

    Public Property Val2 As Double
        Get
            Return m_Val2
        End Get
        Set(ByVal value As Double)
            m_Val2 = value
            RaiseEvent PropertyChanged(Me, New PropertyChangedEventArgs(NameOf(Val2)))
        End Set
    End Property

    Public ReadOnly Property Reset As Action
        Get
            Return AddressOf OnResetClick
        End Get
    End Property

    Private Sub OnResetClick()
        Val1 = 10
    End Sub

End Class
~~~

~~~cs
using System;
using System.ComponentModel;

public class DynamicValuesDataModel : INotifyPropertyChanged
{
    public event PropertyChangedEventHandler PropertyChanged;

    private double m_Val1;
    private double m_Val2;

    public double Val1
    {
        get
        {
            return m_Val1;
        }
        set
        {
            m_Val1 = value;
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(Val1)));

            Val2 = value * 2;
        }
    }

    public double Val2
    {
        get
        {
            return m_Val2;
        }
        set
        {
            m_Val2 = value;
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(Val2)));
        }
    }

    public Action Reset => OnResetClick;

    private void OnResetClick()
    {
        Val1 = 10;
    }
}
~~~
