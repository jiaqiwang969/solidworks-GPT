---
title: Difference between SOLIDWORKS API Methods and Interfaces with and without "I"
caption: Methods and Interfaces with "I" Version
description: Explains the difference between methods and interfaces with "I" prefix in their names (e.g. IModelDoc2 vs ModelDoc2)
image: intellisense-events.png
labels: [events, I methods, I interfaces]
---

There are two versions of methods, properties, and objects (interfaces) in the SOLIDWORKS API:

* The version with an **I** prefix (e.g. ISldWorks, IModelDoc2, IAnnotation, ISldWorks::IActiveDoc)
* The version without an **I** prefix (e.g. SldWorks, ModelDoc2, Annotation, SldWorks::ActiveDoc)

These two versions correspond to the same object or method. The main differences are as follows:

* The version with "I" does not expose events.

Below is a snapshot of available members for a variable declared with *SldWorks*. These members include events.

![List of available events for a variable declared with SldWorks](intellisense-events.png){ width=250 }

Below is a snapshot of available members for a variable declared with *ISldWorks*. These members do not include events.

![List of members without events for a variable declared with ISldWorks](intellisense-no-events.png){ width=250 }

* The version with "I" typically returns a type-safe interface version instead of an object or IDispatch. This means that explicit casting is not required in type-safe languages (e.g. C#) at compile time:

```cs
ISldWorks app;
...
IModelDoc2 model = app.IActiveDoc; // Correct
IModelDoc2 model = app.ActiveDoc; // Compilation error
IModelDoc2 model = app.ActiveDoc as IModelDoc2; // Correct
```