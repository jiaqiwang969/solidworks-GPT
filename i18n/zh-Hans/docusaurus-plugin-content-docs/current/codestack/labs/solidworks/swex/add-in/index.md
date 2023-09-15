---
title: SwEx.AddIn框架可轻松且稳健地使用SOLIDWORKS API开发插件
caption: SwEx.AddIn
description: 使用.NET（C＃和VB.NET）中的SOLIDWORKS API开发强大的SOLIDWORKS插件的高级工具。该框架简化了命令和UI元素的创建和维护。
image: logo.png
toc-group-name: labs-solidworks-swex
sidebar_position: 0
redirect-from:
  - /labs/solidworks/dev-tools-addin/
---
![SwEx.AddIn框架](logo.png)

SwEx.AddIn提供了简化SOLIDWORKS插件开发的实用工具。

功能包括：

* 插件的自动注册
* 简化的命令组管理
* 事件管理（未来版本）
* 任务窗格、特征管理器选项卡、模型视图选项卡（未来版本）

源代码可在[GitHub](https://github.com/codestackdev/swex-addin)上获取。

## 功能

### 注册插件

只需添加AutoRegister属性即可注册插件（无需运行自定义regasm命令，无需调用任何静态类）

```vb
<AutoRegister("My C# SOLIDWORKS Add-In", "Sample SOLIDWORKS add-in in VB.NET", True)>
<ComVisible(True), Guid("31E2C0F0-B68D-44C4-AB15-4CC7B56B6C16")>
Public Class SampleAddIn
    Inherits SwAddInEx

    Public Overrides Function OnConnect() As Boolean
        Return True
    End Function

End Class
```

```cs
[AutoRegister("My C# SOLIDWORKS Add-In", "Sample SOLIDWORKS add-in in C#", true)]
[ComVisible(true), Guid("736EEACF-B294-40F6-8541-CFC8E7C5AA61")]
public class SampleAddIn : SwAddInEx
{
    public override bool OnConnect()
    {
        return true;
    }
}
```

### 添加命令

可以通过创建枚举来定义命令。可以通过添加属性来自定义命令，如标题、工具提示、图标等。命令可以分组到子菜单中。只需指定图像（支持透明度），框架将创建与SOLIDWORKS兼容的所需位图。无需分配灰色背景以启用透明度，无需缩放图像以适应所需大小 - 只需使用任何图像，框架将完成其余工作。使用资源来本地化插件。

```vb
<Title(GetType(Resources), NameOf(Resources.ToolbarTitle)), Description("Toolbar with commands")>
<Icon(GetType(Resources), NameOf(Resources.commands))>
Public Enum Commands_e
    <Title("Command 1"), Description("Sample command 1")>
    <Icon(GetType(Resources), NameOf(Resources.command1))>
    <CommandItemInfo(True, True, swWorkspaceTypes_e.Assembly, True, swCommandTabButtonTextDisplay_e.swCommandTabButton_TextBelow)>
    Command1
    Command2
End Enum
    '...
    AddCommandGroup(New Action(Of Commands_e)(AddressOf OnButtonClick))
    '...
Private Sub OnButtonClick(ByVal cmd As Commands_e)
End Sub
```

```cs
[Title(typeof(Resources), nameof(Resources.ToolbarTitle)), Description("Toolbar with commands")]
[Icon(typeof(Resources), nameof(Resources.commands))]
public enum Commands_e
{
    [Title("Command 1"), Description("Sample command 1")]
    [Icon(typeof(Resources), nameof(Resources.command1))]
    [CommandItemInfo(true, true, swWorkspaceTypes_e.Assembly, true, swCommandTabButtonTextDisplay_e.swCommandTabButton_TextBelow)]
    Command1,
    Command2
}
    //...
    AddCommandGroup<Commands_e>(OnButtonClick);
    //...
private void OnButtonClick(Commands_e cmd)
{
    //TODO: handle commands
}
```

### 管理文档生命周期和事件

框架将通过将文档包装在指定的类中来管理文档的生命周期，并允许处理常见事件：

```vb
'...
Private m_DocHandler As IDocumentsHandler(Of DocumentHandler)
'...
    '...
    m_DocHandler = CreateDocumentsHandler()
    AddHandler m_DocHandler.HandlerCreated, AddressOf OnDocHandlerCreated
    '...
Private Sub OnDocHandlerCreated(ByVal doc As DocumentHandler)
    AddHandler doc.Rebuild, AddressOf OnDocRebuild
    AddHandler doc.Save, AddressOf OnDocSave
End Sub

Private Function OnDocRebuild(ByVal docHandler As DocumentHandler, ByVal state As RebuildState_e) As Boolean
    'TODO: handle rebuild
    Return True
End Function

Private Function OnDocSave(ByVal docHandler As DocumentHandler, ByVal fileName As String, ByVal state As SaveState_e) As Boolean
    'TODO: handle saving
    Return True
End Function
```

```cs
//...
private IDocumentsHandler<DocumentHandler> m_DocHandler;
//...
    //...
    m_DocHandler = CreateDocumentsHandler();
    m_DocHandler.HandlerCreated += OnDocHandlerCreated;
    //...
private void OnDocHandlerCreated(DocumentHandler doc)
{
    doc.Rebuild += OnDocRebuild;
    doc.Save += OnDocSave;

}

private bool OnDocRebuild(DocumentHandler docHandler, RebuildState_e state)
{
    //TODO: handle rebuild
    return true;
}

private bool OnDocSave(DocumentHandler docHandler, string fileName, SaveState_e state)
{
    //TODO: handle saving
    return true;
}
```

### 读写第三方存储和存储器

现在更容易读写内部SOLIDWORKS文件存储器中的数据。只需重写相应的事件，并使用XML、DataContract、Binary等序列化器对数据进行序列化/反序列化：

```vb
    '...
    AddHandler doc.Access3rdPartyData, AddressOf OnAccess3rdPartyData
    '...
Private Sub OnAccess3rdPartyData(ByVal docHandler As DocumentHandler, ByVal state As Access3rdPartyDataState_e)
    Const STREAM_NAME = "CodeStackStream"

    Select Case state
        Case Access3rdPartyDataState_e.StreamWrite

            Using streamHandler = docHandler.Model.Access3rdPartyStream(STREAM_NAME, True)

                Using str = streamHandler.Stream
                    Dim xmlSer = New XmlSerializer(GetType(String()))
                    xmlSer.Serialize(str, New String() {"A", "B"})
                End Using
            End Using
    End Select
End Sub
```

```cs
    //...
    doc.Access3rdPartyData += OnAccess3rdPartyData;
    //...
private void OnAccess3rdPartyData(DocumentHandler docHandler, Access3rdPartyDataState_e state)
{
    const string STREAM_NAME = "CodeStackStream";

    switch (state)
    {
        case Access3rdPartyDataState_e.StreamWrite:
            using (var streamHandler = docHandler.Model.Access3rdPartyStream(STREAM_NAME, true))
            {
                using (var str = streamHandler.Stream)
                {
                    var xmlSer = new XmlSerializer(typeof(string[]));

                    xmlSer.Serialize(str, new string[] { "A", "B" });
                }
            }
            break;
    }
}
```

### 在SOLIDWORKS面板中托管用户控件

只需指定要托管的用户控件，框架将完成其余工作：

#### 任务窗格

```vb
Public Class TaskPaneControl
    Inherits UserControl
End Class
Public Enum TaskPaneCommands_e
    Command1
End Enum
    '...
    Dim ctrl As TaskPaneControl = Nothing
    Dim taskPaneView = CreateTaskPane(Of TaskPaneControl, TaskPaneCommands_e)(AddressOf OnTaskPaneCommandClick, ctrl)
    '...
Private Sub OnTaskPaneCommandClick(ByVal cmd As TaskPaneCommands_e)
    Select Case cmd
        Case TaskPaneCommands_e.Command1
    End Select
End Sub
```

```cs
public class TaskPaneControl : UserControl
{
}
public enum TaskPaneCommands_e
{
    Command1
}
    //...
    TaskPaneControl ctrl;
    var taskPaneView = CreateTaskPane<TaskPaneControl, TaskPaneCommands_e>(OnTaskPaneCommandClick, out ctrl);
    //...
private void OnTaskPaneCommandClick(TaskPaneCommands_e cmd)
{
    switch (cmd)
    {
        case TaskPaneCommands_e.Command1:
            //TODO: handle command
            break;
    }
}
```

## 视频教程

### 介绍

{% youtube { id: 8BXQZcPe4bA } %}

### 详细指南

{% youtube { id: EAm-3-Njkfw } %}