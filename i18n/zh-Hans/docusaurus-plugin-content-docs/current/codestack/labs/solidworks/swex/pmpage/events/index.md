[PropertyManagerPageHandlerEx](https://docs.codestack.net/swex/pmpage/html/T_CodeStack_SwEx_PMPage_PropertyManagerPageHandlerEx.htm)类负责将属性管理器页面引发的事件提供给客户端。

处理程序的实例将由框架创建，并可以通过[PropertyManagerPageEx::Handler](https://docs.codestack.net/swex/pmpage/html/P_CodeStack_SwEx_PMPage_PropertyManagerPageEx_2_Handler.htm)属性访问。

``` cs
...
m_Page = new PropertyManagerPageEx<MyPMPageHandler, DataModel>(m_Data, m_App);
m_Page.Handler.Closed += r =>
{
    ...
};
...
```