---
title: Passing Parameters to SOLIDWORKS Macros through SWBasic Macros
caption: Using SWBasic Macros
description: Solution for passing parameters to SOLIDWORKS macros by replacing text in SWBasic macros
labels: [parameters, swb]
---
[SWBasic (*.swb) macros](/docs/codestack/solidworks-api/getting-started/macros/types#swbasic-macros.swb) are a type of traditional macros that are still supported in the SOLIDWORKS application.

One advantage of this macro type is that it is saved in plain text. This allows third-party applications to dynamically create macros. In particular, this technique can be used to simulate passing parameters to SOLIDWORKS macros.

For example, you can create the following template macro:

**template.swb**

```vba
Dim swApp As SldWorks.SldWorks

Sub main()
        
    Set swApp = Application.SldWorks
        
     swApp.SendMsgToUser "Specified parameter: {{Argument1}}"
    
End Sub
```

Where *{{Argument1}}* is a placeholder for the parameter value that will be filled by an external application or script:

```cs jagged-bottom 
static void Main(string[] args)
{
    var macroPath = args[0];
    var param = args[1];
    
    var templateMacro = File.ReadAllText(macroPath);
    var macro = templateMacro.Replace("{{Argument1}}", param);

    var tempMacroPath = Path.Combine(Path.GetTempPath(), Path.GetFileName(macroPath));
    File.WriteAllText(tempMacroPath, macro);
```

The generated file can be run like a regular [SOLIDWORKS macro](/docs/codestack/solidworks-api/application/frame/run-macros-group/).