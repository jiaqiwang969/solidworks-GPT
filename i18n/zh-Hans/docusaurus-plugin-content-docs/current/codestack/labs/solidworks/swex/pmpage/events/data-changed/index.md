# SOLIDWORKS Property Manager Page数据更改事件处理

SwEx框架提供了用于控件数据更改的事件处理程序。使用这些处理程序来更新预览或任何其他依赖于控件值的状态。

## 发布数据更改事件

[PropertyManagerPageHandlerEx::DataChanged](https://docs.codestack.net/swex/pmpage/html/E_CodeStack_SwEx_PMPage_PropertyManagerPageHandlerEx_DataChanged.htm)事件在用户更改了更新数据模型的控件中的值后触发。请参考绑定的数据模型获取新值。

```vb
Public Class DataModel
    Public Property Text As String
End Class

Private m_Data As DataModel
Private m_Page As PropertyManagerPageEx(Of MyPMPageHandler, DataModel)

Public Overrides Function OnConnect() As Boolean
    m_Data = New DataModel
    m_Page = New PropertyManagerPageEx(Of MyPMPageHandler, DataModel)(App)

    AddHandler m_Page.Handler.DataChanged, AddressOf OnDataChanged
    Return True
End Function

Private Sub OnDataChanged()
    Dim text = m_Data.Text
    'TODO: 处理数据更改，例如更新预览
End Sub
```

```cs
public class DataModel
{
    public string Text { get; set; }
}

private DataModel m_Data;

private PropertyManagerPageEx<MyPMPageHandler, DataModel> m_Page;

public override bool OnConnect()
{
    m_Data = new DataModel();
    m_Page = new PropertyManagerPageEx<MyPMPageHandler, DataModel>(App);

    m_Page.Handler.DataChanged += OnDataChanged;

    return true;
}

private void OnDataChanged()
{
    var text = m_Data.Text;
    //TODO: 处理数据更改，例如更新预览
}
```