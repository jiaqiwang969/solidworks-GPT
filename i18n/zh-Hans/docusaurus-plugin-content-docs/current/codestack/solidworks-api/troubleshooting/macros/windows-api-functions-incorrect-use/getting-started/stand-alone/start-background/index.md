---
title: Starting SOLIDWORKS application in background (hidden)
caption: Start In Background
description: Instructions of how to start SOLIDWORKS application to be used by stand-alone automation tool in background (hidden)
image: invisible-app.png
labels: [background,invisible]
---
![Hidden SOLIDWORKS application](invisible-app.png){ width=350 }

In some cases when using the stand-alone application it might be beneficial to start application in background (invisible). This approach provides better user experience and better performance.

Any windows process can be started with its main Window to be hidden by using the following [ProcessStartInfo](https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.processstartinfo)

~~~ cs
var prcInfo = new ProcessStartInfo()
{
    FileName = appPath,
    CreateNoWindow = true,
    WindowStyle = ProcessWindowStyle.Hidden
};
~~~

However for SOLIDWORKS application this code might not always work. Alternative way to hide the window would be using the [ShowWindow](https://docs.microsoft.com/en-us/windows/desktop/api/winuser/nf-winuser-showwindow) Windows32 API. It is required to wait until the handle is created and SOLIDWORKS fully loaded before applying this method.

In addition to above, it is beneficial to use the */r* argument when starting SOLIDWORKS instance. This argument would allow to hide the splash screen and speed-up the startup. For SOLIDWORKS Professional and Premium it is also possible to use the */b* argument to start SOLIDWORKS in background (still visible).

> */b* flag is handled by SOLIDWORKS Task Scheduler and won't work for SOLIDWORKS Standard as Task Scheduler is not included into this package.

Function below considers all points above and starts new session of SOLIDWORKS hidden. Use this function in conjunction with the code from the [Create C# Stand-Alone Application](/docs/codestack/solidworks-api/getting-started/stand-alone/connect-csharp/).

> Some of the API method might not execute or behave incorrectly with SOLIDWORKS application being invisible.

~~~ cs
private static ISldWorks StartSwAppBackground(string appPath, int timeoutSec = 20)
{
    var timeout = TimeSpan.FromSeconds(timeoutSec);

    var startTime = DateTime.Now;

    var prcInfo = new ProcessStartInfo()
    {
        FileName = appPath,
        Arguments = "/r", //no splash screen
        CreateNoWindow = true,
        WindowStyle = ProcessWindowStyle.Hidden
    };

    var prc = Process.Start(prcInfo);
    
    ISldWorks app = null;

    var isLoaded = false;

    var onIdleFunc = new DSldWorksEvents_OnIdleNotifyEventHandler(() =>
    {
        isLoaded = true;
        return 0;
    });

    try
    {

        while (!isLoaded)
        {
            if (DateTime.Now - startTime > timeout)
            {
                throw new TimeoutException();
            }

            if (app == null)
            {
                app = GetSwAppFromProcess(prc.Id);

                if (app != null)
                {
                    (app as SldWorks).OnIdleNotify += onIdleFunc;
                }
            }

            System.Threading.Thread.Sleep(100);
        }

        if (app != null)
        {
            const int HIDE = 0;
            ShowWindow(new IntPtr(app.IFrameObject().GetHWnd()), HIDE);
        }
    }
    catch
    {
        throw;
    }
    finally
    {
        if (app != null)
        {
            (app as SldWorks).OnIdleNotify -= onIdleFunc;
        }
    }

    return app;
}
~~~


