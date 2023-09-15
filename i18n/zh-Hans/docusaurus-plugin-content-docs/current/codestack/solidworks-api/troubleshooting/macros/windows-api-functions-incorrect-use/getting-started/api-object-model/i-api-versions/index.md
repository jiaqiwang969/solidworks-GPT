---
title: Difference between SOLIDWORKS API Methods and Interfaces with and without "I"
caption: Methods and Interfaces with "I" in their names
description: Explains the difference between methods and interfaces with names starting with "I" (e.g. IModelDoc2 vs ModelDoc2)
image: intellisense-events.png
labels: [events, I methods, I interfaces]
---

There are two versions of methods, properties, and objects (interfaces) in the SOLIDWORKS API:

* Those starting with **I** (e.g. ISldWorks, IModelDoc2, IAnnotation, ISldWorks::IActiveDoc)
* Those without **I** (e.g. SldWorks, ModelDoc2, Annotation, SldWorks::ActiveDoc)

These two versions correspond to the same object or method. The main differences are as follows:

* Methods with the "I" prefix do not expose events.

Below is a snapshot of available events for a variable declared with *SldWorks*. Available events:

![Available events for a variable declared with SldWorks](intellisense-events.png){ width=250 }

Below is a snapshot of available members for a variable declared with *ISldWorks*. No events available:

![Available events for a variable declared with ISldWorks](intellisense-no-events.png){ width=250 }

* Methods with the "I" prefix typically return a type-safe version of the interface instead of an object or IDispatch. This means that explicit casting is not required in type-safe languages (e.g. C#) at compile time:

```cs
ISldWorks app;
...
IModelDoc2 model = app.IActiveDoc; // Correct
IModelDoc2 model = app.ActiveDoc; // Compilation error
IModelDoc2 model = app.ActiveDoc as IModelDoc2; // Correct
```