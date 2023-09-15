---
title:  SOLIDWORKS PDM API 中 IEdmVault5 接口的用法
caption: Vault
---

IEdmVault5 接口在 SOLIDWORKS PDM API 对象模型中是一个根对象。它提供了对系统的基本服务的访问，包括：
* 用户管理
* 批量操作
* 数据卡管理
* 工作流管理


在独立应用程序中，可以通过构造函数创建指向 vault 的指针。要初始化变量，需要调用 [IEdmVault5::Login](https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmVault5~Login.html) 或 [IEdmVault5::LoginAuto](https://help.solidworks.com/2018/english/api/epdmapi/EPDM.Interop.epdm~EPDM.Interop.epdm.IEdmVault5~LoginAuto.html)。第一种方法需要输入所有凭据，而第二种方法提供了集成登录，即显示默认的 SOLIDWORKS PDM 登录页面或自动登录用户。

在创建 SOLIDWORKS PDM 插件时，将初始化的 [IEdmVault5](https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmvault5.html) 实例的指针传递给 [IEdmAddIn5:OnCmd](https://help.solidworks.com/2018/english/api/epdmapi/epdm.interop.epdm~epdm.interop.epdm.iedmaddin5~oncmd.html) 重载，因此在这种情况下不需要对该对象执行登录操作。
