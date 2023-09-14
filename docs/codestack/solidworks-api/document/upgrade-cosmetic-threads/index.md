---
layout: sw-tool
title: Upgrade cosmetic threads in active SOLIDWORKS part or assembly using SOLIDWORKS API
caption: Upgrade Cosmetic Threads
description: VBA macro upgrades cosmetic threads to a new (SOLIDWORKS 2020) version which allows to improve performance of the document
image: upgrade-cosmetic-thread.png
labels: [api, upgrade, performance, cosmetic thread]
group: Performance
---
![Upgrade cosmetic threads command](upgrade-cosmetic-thread.png){ width=500 }

This macro invokes the *Upgrade cosmetic thread features* command in SOLIDWORKS part and assembly which may improve the performance of the document.

This macro will be beneficial to use along with task automation software such as [SOLIDWORKS Task Scheduler](https://help.solidworks.com/2019/English/SolidWorks/sldworks/c_SOLIDWORKS_Task_Scheduler_Overview.htm) or [Batch+](https://cadplus.xarial.com/batch/).

~~~ vb
Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Sub main()

    Set swApp = Application.SldWorks

    Dim allowUpgrade As Boolean
    allowUpgrade = swApp.GetUserPreferenceToggle(swUserPreferenceToggle_e.swEnableAllowCosmeticThreadsUpgrade)

try:
    On Error GoTo catch
    
    Set swModel = swApp.ActiveDoc
        
    If Not swModel Is Nothing Then
                
        swApp.SetUserPreferenceToggle swUserPreferenceToggle_e.swEnableAllowCosmeticThreadsUpgrade, True
        
        If False = swModel.Extension.UpgradeLegacyCThreads() Then
            Debug.Print "Thread is not upgraded"
        End If
            
    Else
        Err.Raise vbError, "", "Please open document"
    End If
    
    GoTo finally
    
catch:
    swApp.SendMsgToUser2 Err.Description, swMessageBoxIcon_e.swMbStop, swMessageBoxBtn_e.swMbOk
finally:
    
    swApp.SetUserPreferenceToggle swUserPreferenceToggle_e.swEnableAllowCosmeticThreadsUpgrade, allowUpgrade

End Sub
~~~


