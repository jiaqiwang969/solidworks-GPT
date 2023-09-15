---
title:  通过SWBasic宏将参数传递给SOLIDWORKS宏
caption: 通过SWBasic宏
---
 通过替换SWBasic宏中的文本来传递参数给SOLIDWORKS宏的解决方法
labels: [参数, swb]
---
[SWBasic (*.swb)宏](/docs/codestack/solidworks-api/getting-started/macros/types#swbasic-macros.swb)是一种仍然在SOLIDWORKS应用程序中支持的传统宏类型。

这种宏类型的一个好处是它以纯文本形式保存。这使得第三方应用程序能够动态创建宏。特别是可以使用这种技术来模拟将参数传递给SOLIDWORKS宏。

例如，可以创建以下模板宏：

**template.swb**

~~~vba
Dim swApp As SldWorks.SldWorks

Sub main()
        
    Set swApp = Application.SldWorks
        
     swApp.SendMsgToUser "指定的参数: {{Argument1}}"
    
End Sub
~~~


其中*{{Argument1}}*是一个占位符，由外部应用程序或脚本填充参数值：

~~~ cs jagged-bottom 
static void Main(string[] args)
{
    var macroPath = args[0];
    var param = args[1];
    
    var templateMacro = File.ReadAllText(macroPath);
    var macro = templateMacro.Replace("{{Argument1}}", param);

    var tempMacroPath = Path.Combine(Path.GetTempPath(), Path.GetFileName(macroPath));
    File.WriteAllText(tempMacroPath, macro);
~~~

生成的文件可以像普通的[SOLIDWORKS宏](/docs/codestack/solidworks-api/application/frame/run-macros-group/)一样运行。