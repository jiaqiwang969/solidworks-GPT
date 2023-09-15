---
title: Calling Functions of a SOLIDWORKS Add-in from Standalone Applications or Macros
caption: Calling Add-in Functions
description: Examples and explanations on how to create an API for a SOLIDWORKS add-in so that its functions can be called from a macro or standalone application with enabled add-in custom API.
labels: [Add-in API, Calling]
---
This section contains examples and explanations on how to create an API for a SOLIDWORKS add-in so that its functions can be called from a [macro](/docs/codestack/solidworks-api/getting-started/macros/), [standalone application](/docs/codestack/solidworks-api/getting-started/stand-alone/), [script](/docs/codestack/solidworks-api/getting-started/scripts/), or another [add-in](/docs/codestack/solidworks-api/getting-started/add-ins/).

There may be a need to enable the API functions of the add-in when automation of the add-in itself is required. This approach can also help improve performance. Since add-ins are in-process applications, they provide the best performance. In this case, the add-in can act as an engine for functionality triggered from a macro or another add-in, resulting in optimal performance.

There are several ways to achieve this functionality. Please refer to the following options for more information:

* [Via the Add-in Object](#via-the-add-in-object)
* [Via the Running Object Table (ROT)](#via-the-rot)
* [Via In-process Call from an External Process](#in-process-call)