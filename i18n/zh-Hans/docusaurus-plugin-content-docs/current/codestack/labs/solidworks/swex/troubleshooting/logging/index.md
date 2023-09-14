---
title: Logging capabilities in SwEx framework for SOLIDWORKS add-ins
caption: Logging
description: Logging debug messages from SwEx modules
labels: [logging]
toc-group-name: labs-solidworks-swex
---
All base SwEx modules inherit the [IModule](https://docs.codestack.net/swex/common/html/T_CodeStack_SwEx_Common_Base_IModule.htm) interface which provides an access to [ILogger](https://docs.codestack.net/swex/common/html/T_CodeStack_SwEx_Common_Diagnostics_ILogger.htm) instance allowing to log custom messages and exception from the module.

The following modules provide logger:

* [SwAddInEx](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_SwAddInEx.htm)
* [MacroFeatureEx](https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_MacroFeatureEx.htm)
* [PropertyManagerPageEx](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_PropertyManagerPageEx_2.htm)

Additional options can be specified by decorating the module class via [LoggerOptionsAttribute](https://docs.codestack.net/swex/common/html/M_CodeStack_SwEx_Common_Attributes_LoggerOptionsAttribute__ctor.htm)

~~~vb
Imports CodeStack.SwEx.AddIn
Imports CodeStack.SwEx.AddIn.Attributes
Imports CodeStack.SwEx.Common.Attributes
Imports System
Imports System.Runtime.InteropServices

<LoggerOptions(True, LogAddIn.LOGGER_NAME)>
<AutoRegister>
<ComVisible(True), Guid("CA45AA6A-A2AD-481B-9CBD-0B12D64763B5")>
Public Class LogAddIn
    Inherits SwAddInEx

    Friend Const LOGGER_NAME As String = "MyAddInLog"

    Public Overrides Function OnConnect() As Boolean
        Try
            Logger.Log("Loading add-in...")
            'TODO: implement connection
            Return True
        Catch ex As Exception
            Logger.Log(ex)
            Throw
        End Try
    End Function

End Class
~~~

~~~cs
using CodeStack.SwEx.AddIn;
using CodeStack.SwEx.AddIn.Attributes;
using CodeStack.SwEx.Common.Attributes;
using System;
using System.Runtime.InteropServices;

namespace CodeStack.SwEx
{
    [LoggerOptions(true, LOGGER_NAME)]
    [AutoRegister]
    [ComVisible(true), Guid("CD7C743A-3C82-4A4A-B557-BBD6228CE2C8")]
    public class LogAddIn : SwAddInEx
    {
        internal const string LOGGER_NAME = "MyAddInLog";

        public override bool OnConnect()
        {
            try
            {
                Logger.Log("Loading add-in...");

                //TODO: implement connection
                return true;
            }
            catch (Exception ex)
            {
                Logger.Log(ex);
                throw;
            }
        }
    }
}
~~~


Specified logger name will be appended to the SwEx module name (e.g. SwEx.AddIn.MyAddInLog or SwEx.MacroFeature.MyAddInLog or SwEx.PMPage.MyAddInLog).

Log messages are output into the output as setup via [LoggerOptionsAttribute](https://docs.codestack.net/swex/common/html/M_CodeStack_SwEx_Common_Attributes_LoggerOptionsAttribute__ctor.htm) attribute. Currently only debug trace logger is supported. Refer [Troubleshooting](/docs/codestack/labs/solidworks/swex/troubleshooting/) article for the instructions of how to capture debug trace messages.
