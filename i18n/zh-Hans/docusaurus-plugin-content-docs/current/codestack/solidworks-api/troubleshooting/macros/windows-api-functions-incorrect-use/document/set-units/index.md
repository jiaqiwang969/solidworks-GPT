---
caption: Set Document Units
title: Macro to set SOLIDWORKS document units (length, angle, mass, volume, time)
description: VBA macro to set unit system in the SOLIDWORKS document or custom units (length, angle, mass, volume, time)
image: document-units.png
---
![Document Units](document-units.png){ width=600 }

This macro allows to change the units of the active SOLIDWORKS document (part or assembly).

Configure the constants of the macro to specify the target unit system

~~~ vb
Const UNIT_SYSTEM As Integer = swUnitSystem_e.swUnitSystem_Custom 'sets the custom units individually as per the constants below

Const CUSTOM_LENGTH_UNIT As Integer = swLengthUnit_e.swMETER
Const CUSTOM_ANGLE_UNIT As Integer = swAngleUnit_e.swDEGREES
Const CUSTOM_MASS_UNIT As Integer = swUnitsMassPropMass_e.swUnitsMassPropMass_Pounds
Const CUSTOM_VOLUME_UNIT As Integer = swUnitsMassPropVolume_e.swUnitsMassPropVolume_Feet3
Const CUSTOM_TIME_UNIT As Integer = swUnitsTimeUnit_e.swUnitsTimeUnit_Second
~~~

If **UNIT_SYSTEM** constant is set to **swUnitSystem_e.swUnitSystem_Custom** then it is required to provide the individual units for each custom type by changing the **CUSTOM_???** constants.

~~~ vb
Const UNIT_SYSTEM As Integer = swUnitSystem_e.swUnitSystem_IPS

Const CUSTOM_LENGTH_UNIT As Integer = swLengthUnit_e.swINCHES
Const CUSTOM_ANGLE_UNIT As Integer = swAngleUnit_e.swRADIANS
Const CUSTOM_MASS_UNIT As Integer = swUnitsMassPropMass_e.swUnitsMassPropMass_Kilograms
Const CUSTOM_VOLUME_UNIT As Integer = swUnitsMassPropVolume_e.swUnitsMassPropVolume_Meters3
Const CUSTOM_TIME_UNIT As Integer = swUnitsTimeUnit_e.swUnitsTimeUnit_Minute

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
        
    Dim swModel As SldWorks.ModelDoc2
    
    Set swModel = swApp.ActiveDoc

    If Not swModel Is Nothing Then
                
        swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitSystem, swUserPreferenceOption_e.swDetailingNoOptionSpecified, UNIT_SYSTEM
                
        If UNIT_SYSTEM = swUnitSystem_e.swUnitSystem_Custom Then
        
            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsLinear, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_LENGTH_UNIT
            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsDualLinear, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_LENGTH_UNIT
            
            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsAngular, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_ANGLE_UNIT
            
            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsMassPropLength, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_LENGTH_UNIT
            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsMassPropMass, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_MASS_UNIT
            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsMassPropVolume, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_VOLUME_UNIT
            
            swModel.Extension.SetUserPreferenceInteger swUserPreferenceIntegerValue_e.swUnitsTimeUnits, swUserPreferenceOption_e.swDetailingNoOptionSpecified, CUSTOM_TIME_UNIT
            
        End If
                
    Else
        Err.Raise vbError, "", "Model is not opened"
    End If
        
End Sub
~~~

