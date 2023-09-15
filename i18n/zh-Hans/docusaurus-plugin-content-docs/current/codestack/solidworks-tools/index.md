---
layout: default
title: SOLIDWORKS Macro and Script Library for Automation
caption: "'Goodies'"
description: Useful macros and scripts to enhance your productivity while working in SOLIDWORKS
image: macros-library.svg
labels: [tools, solidworks, macros]
search: false
styles:
  - /_assets/styles/catalogue.css
group-descriptions:
  Model: Automation for 3D models (parts and assemblies) and 2D drawings
  Materials: Automation for SOLIDWORKS material database and part properties
  Frame: Automation for SOLIDWORKS menus, toolbars, third-party add-ins, and document management
  Developers: Practical tools for developers building software using the SOLIDWORKS API
  Custom Properties: Automation for SOLIDWORKS custom properties for configurations and cut lists
  Part: Automation for SOLIDWORKS part documents (*.sldprt): geometry, feature tree
  Assembly: Automation for SOLIDWORKS assembly documents (*.sldasm): components, mates
  Drawing: Automation for SOLIDWORKS drawing documents (*.slddrw): tables, views, sheets
  Security: Additional security and protection for models and applications using the SOLIDWORKS API
  Sketch: Automation for SOLIDWORKS sketches, sketch entities, and relations
  Performance: Performance optimization for SOLIDWORKS documents and applications
  Geometry: Automation for SOLIDWORKS geometry: custom features, topology optimization
  Import/Export: Automation for importing and exporting SOLIDWORKS files to different formats
  Motion Study: Automation for SOLIDWORKS Motion Study module
  Options: Automation for SOLIDWORKS document and system options
  Cut-List: Automation for SOLIDWORKS cut lists in sheet metal and weldment parts and drawings
redirect-from:
  - /p/solidworks-goodies.html
sidebar_position: 0
---
# SOLIDWORKS Macro Library for Automation
{% social-share %}

[Request a Macro](https://github.com/xarial/codestack/issues/new?labels=macro-request){ target="_blank" class="download-button" }

![SOLIDWORKS Macro Library](macros-library.svg){ width=400 }

This page contains a collection of useful macros, utilities, and scripts for use by SOLIDWORKS engineers. The macros are grouped by categories such as part assembly, drawing, performance, and more.

Refer to the [SOLIDWORKS API Programming VBA and VSTA Macros](/docs/codestack/solidworks-api/getting-started/macros/) section for a guide on using and creating macros in SOLIDWORKS.

Can't find a macro that suits your needs? Submit a [macro request](https://github.com/xarial/codestack/issues/new?labels=macro-request) form and our team will review your request and do our best to add the macro to the library.

## Best Practices for Organizing Macro Libraries

[Toolbar+](https://cadplus.xarial.com/toolbar/) is a free and open-source [SOLIDWORKS CAD+ Toolset](https://cadplus.xarial.com/) plugin that allows you to organize your macro library with custom toolbars within the SOLIDWORKS environment. The plugin also enables managing multi-user environments by storing configurations in a centralized location.

![Custom macro buttons in the toolbar](macro-library-toolbar.png){ width=450 }

Alternatively, you can create macro buttons in the SOLIDWORKS toolbar using native functionality. Read [Creating Macro Buttons in the SOLIDWORKS Toolbar](/docs/codestack/solidworks-api/getting-started/macros/macro-buttons/) for more information.

Browse this section to find productivity and automation tools that suit your needs.

For other productivity plugins, visit the [SOLIDWORKS Labs](/docs/codestack/labs/solidworks/) page.

## Batch Running

In some cases, you may need to run macros on multiple SOLIDWORKS files in a batch. Try using [Batch+](https://cadplus.xarial.com/batch/), a free standalone application that is part of the [SOLIDWORKS CAD+ Toolset](https://cadplus.xarial.com/).

---
{% catalogue { type: sw-tool } %}