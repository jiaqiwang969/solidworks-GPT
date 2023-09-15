---
title: Using the Callouts Object in SOLIDWORKS API for Model Annotations
caption: Callouts
description: Use the Callouts object in SOLIDWORKS API to annotate models (similar to balloons), link to entities, and display custom data.
sidebar_position: 1
labels: [callout, balloons]
---
In SOLIDWORKS, Callouts are balloon-like objects that can be attached to entities (typically through selection) and display additional information about the entity. Callouts do not change size with the scaling of the model and they maintain the same orientation even if the model is rotated.

Callouts are temporary objects and are typically destroyed after selection is cleared or the operation is completed.

The most common example of Callouts in SOLIDWORKS is the measurement tool. When entities are selected, the measurement results are displayed in Callouts.

The SOLIDWORKS API provides the ability to create Callouts through the [ISwCalloutHandler interface](https://help.solidworks.com/2018/english/api/swpublishedapi/solidworks.interop.swpublished~solidworks.interop.swpublished.iswcallouthandler.html). This handler allows for the creation of Callout definitions and handling of related events.

Callouts can be displayed in read-only mode or capture user input values. Callouts can have different colors and can be single-line or multi-line.

This section contains macros and code examples for creating, displaying, and handling Callouts using the SOLIDWORKS API.