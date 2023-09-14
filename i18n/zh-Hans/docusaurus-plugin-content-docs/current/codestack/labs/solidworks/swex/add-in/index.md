---
title: SwEx.AddIn Framework enables easy and robust development of add-ins with SOLIDWORKS API
caption: SwEx.AddIn
description: Advanced utilities for the development of powerful SOLIDWORKS add-ins using SOLIDWORKS API in .NET (C# and VB.NET). Framework simplifies the creation and maintaining of commands and UI elements.
image: logo.png
toc-group-name: labs-solidworks-swex
sidebar_position: 0
redirect-from:
  - /labs/solidworks/dev-tools-addin/
---
![SwEx.AddIn framework for SOLIDWORKS](logo.png)

SwEx.AddIn provides utilities for simplified development of SOLIDWORKS add-ins.

The functionality includes

* Automatic registration of the add-in
* Simplified commands groups management
* Events management (future versions)
* Task Panes, Feature Manager Tab, Model View Tab (future versions)

Source code is available on [GitHub](https://github.com/codestackdev/swex-addin)

## Features

### Registering Add-In

To Register add-in just add the AutoRegister attribute (no need to run custom regasm commands, no need to call any static classes)

~~~vb
<AutoRegister("My C# SOLIDWORKS Add-In", "Sample SOLIDWORKS add-in in VB.NET", True)>
<ComVisible(True), Guid("31E2C0F0-B68D-44C4-AB15-4CC7B56B6C16")>
Public Class SampleAddIn
    Inherits SwAddInEx

    Public Overrides Function OnConnect() As Boolean
        Return True
    End Function

End Class
~~~

~~~cs
[AutoRegister("My C# SOLIDWORKS Add-In", "Sample SOLIDWORKS add-in in C#", true)]
[ComVisible(true), Guid("736EEACF-B294-40F6-8541-CFC8E7C5AA61")]
public class SampleAddIn : SwAddInEx
{
    public override bool OnConnect()
    {
        return true;
    }
}
~~~


### Adding Commands

Commands can be defined by creating an enumerations. Commands can be customized by adding attributes to assign title, tooltip, icon etc. Commands can be grouped under sub menus. Simply specify the image (transparency is supported) and framework will create required bitmaps compatible with SOLIDWORKS. No need to assign gray background to enable transparency, no need to scale images to fit the required sizes - simply use any image and framework will do the rest. Use resources to localize the add-in.

~~~vb
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
~~~

~~~cs
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
~~~



### Managing Documents Lifecycle and Events

Framework will manage the lifecycle of documents by wrapping them in the specified class and allows to handle common events:


~~~vb
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
~~

~~~cs
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
~~~



### Reading and Writing to 3rd Party Storage and Store

It has never been easier to read and write data to the internal SOLIDWORKS file storage. Simply override the corresponding event and serialize/deserialize the data using XML, DataContract, Binary etc. serializers:


~~~vb
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
~~~


~~~cs
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
~~~


### Hosting User Controls In SOLIDWORKS Panels

Just specify User Control to host and framework will do the rest:

#### Task Pane

~~~vb
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
~~~

~~~cs
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
~~~



## Video Tutorials

### Introduction

{% youtube { id: 8BXQZcPe4bA } %}

### Detailed Guide

{% youtube { id: EAm-3-Njkfw } %}
