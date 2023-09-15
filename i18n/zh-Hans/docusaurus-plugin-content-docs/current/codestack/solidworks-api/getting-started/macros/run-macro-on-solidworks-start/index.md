---
title: Automatically Running Macros on SOLIDWORKS Application Startup
caption: Running Macros on SOLIDWORKS Startup
description: Setting up macros to run automatically when the SOLIDWORKS application loads
image: shortcut-with-macro-run.png
labels: [macros, auto-run]
---
In certain cases, you may need to run a macro automatically when SOLIDWORKS starts up. For example, you may need to perform some logging or application setup.

Fortunately, the SOLIDWORKS application accepts the command-line parameter */m*, which will automatically run the specified macro.

```cmd
"path to SOLIDWORKS.exe" /m "path to macro"
```

## Setting up a Shortcut to Launch SOLIDWORKS and Run the Macro

The most common option is to directly specify the path to the macro in the SOLIDWORKS shortcut on the Windows desktop. In this case, the macro will automatically run when you click on the SOLIDWORKS application shortcut icon. Follow these steps:

* The Windows operating system allows specifying command-line parameters in the *Target* field of a shortcut. This option is disabled by default for the SOLIDWORKS shortcut and cannot be changed.

![Default options for the SOLIDWORKS shortcut](default-shortcut-options.png){ width=350 }

* Delete the default SOLIDWORKS shortcut.
* Navigate to the SOLIDWORKS installation folder (usually *C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS*).
* Locate the *SLDWORKS.EXE* file.
* Select the file and right-click. Choose *Send to* -> *Desktop (create shortcut)*.

![Location of the SOLIDWORKS.exe file](sldworks-exe-location.png){ width=550 }

* The shortcut is added to the desktop. Rename it if needed (and pin it to the taskbar if desired).
* Right-click on the shortcut icon and choose the *Properties* command.
* Add the following text after the path to SLDWORKS.EXE in the *Target* field:

```cmd
/m "full path to macro"
```

If the macro path contains spaces, enclose the path in double quotes.

For example:

```cmd
"C:\Program Files\SOLIDWORKS Corp\SOLIDWORKS\SLDWORKS.EXE" /m "C:\My Macros\Macro1.swb"
```

![Shortcut with the macro path](shortcut-with-macro-run.png){ width=450 }

Launch SOLIDWORKS using this shortcut. The specified macro will run automatically.