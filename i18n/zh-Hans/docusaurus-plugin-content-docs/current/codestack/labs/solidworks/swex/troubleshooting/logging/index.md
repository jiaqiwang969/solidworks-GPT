---
title: SwEx框架中的日志功能
caption: 日志
description: 从SwEx模块记录调试消息
labels: [logging]
toc-group-name: labs-solidworks-swex
---
所有基本的SwEx模块都继承了[IModule](https://docs.codestack.net/swex/common/html/T_CodeStack_SwEx_Common_Base_IModule.htm)接口，该接口提供了对[ILogger](https://docs.codestack.net/swex/common/html/T_CodeStack_SwEx_Common_Diagnostics_ILogger.htm)实例的访问，允许从模块中记录自定义消息和异常。

以下模块提供了日志记录器：

* [SwAddInEx](https://docs.codestack.net/swex/add-in/html/T_CodeStack_SwEx_AddIn_SwAddInEx.htm)
* [MacroFeatureEx](https://docs.codestack.net/swex/macro-feature/html/T_CodeStack_SwEx_MacroFeature_MacroFeatureEx.htm)
* [PropertyManagerPageEx](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_PropertyManagerPageEx_2.htm)

可以通过使用[LoggerOptionsAttribute](https://docs.codestack.net/swex/common/html/M_CodeStack_SwEx_Common_Attributes_LoggerOptionsAttribute__ctor.htm)修饰模块类来指定其他选项。

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
            Logger.Log("正在加载插件...")
            'TODO: 实现连接
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
                Logger.Log("正在加载插件...");

                //TODO: 实现连接
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

指定的日志记录器名称将附加到SwEx模块名称中（例如SwEx.AddIn.MyAddInLog或SwEx.MacroFeature.MyAddInLog或SwEx.PMPage.MyAddInLog）。

日志消息将根据[LoggerOptionsAttribute](https://docs.codestack.net/swex/common/html/M_CodeStack_SwEx_Common_Attributes_LoggerOptionsAttribute__ctor.htm)属性的设置输出到输出窗口。目前仅支持调试跟踪记录器。请参阅[Troubleshooting](/docs/codestack/labs/solidworks/swex/troubleshooting/)文章以获取如何捕获调试跟踪消息的说明。