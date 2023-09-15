---
title: 'SOLIDWORKS Macro Troubleshooting: Issues and Resolutions'
caption: 'Macro Troubleshooting: Issues and Resolutions'
description: An overview of common errors and solutions when running macros in SOLIDWORKS
labels: [macro, not working, issues, solidworks api, troubleshooting, vba]
styles:
  - /_assets/styles/catalogue.css
redirect-from:
  - /2018/04/macros-troubleshooting-issues-and-resolutions.html
---
SOLIDWORKS macros are the most common way to automate and extend SOLIDWORKS functionality using its API.
Macros can be developed internally within a company or downloaded from various websites, including the SOLIDWORKS forum, 3D Content Central, [CodeStack](/docs/codestack/solidworks-tools), and even recorded within SOLIDWORKS.

However, there are cases where macros do not work as expected. This can often be one of the following scenarios:

* A macro that was previously working suddenly stops working.
* A macro works on some workstations but not on others.
* A macro works fine on certain models but not on others.

In this article, I will outline the most common symptoms of errors in macros.

Browse the list of errors to find the most common solutions.

Click on the links to get a detailed description, cause, and steps to resolve the issue.

## List of Errors

* Run-time error '91': Object variable or With block variable not set
  * [Solution 1](/docs/codestack/solidworks-api/troubleshooting/macros/assembly-drawing-lightweight-components/)
  * [Solution 2](/docs/codestack/solidworks-api/troubleshooting/macros/macro-multiple-entry-points/)
  * [Solution 3](/docs/codestack/solidworks-api/troubleshooting/macros/create-sketch-segments-error/)
  * [Solution 4](/docs/codestack/solidworks-api/troubleshooting/macros/preconditions-not-met/)
  * [Solution 5](/docs/codestack/solidworks-api/troubleshooting/macros/selection-inconsistency/)

* Compilation error: Can't find project or library
  * [Solution 1](/docs/codestack/solidworks-api/troubleshooting/macros/missing-solidworks-type-library-references/)

* Run-time error '424': Object required
  * [Solution 1](/docs/codestack/solidworks-api/troubleshooting/macros/merged-macro-error/)

* Run-time error '13': Type mismatch
  * [Solution 1](/docs/codestack/solidworks-api/troubleshooting/macros/preconditions-not-met/)

* Compilation error: Undefined type
  * [Solution 1](/docs/codestack/solidworks-api/troubleshooting/macros/swb-macro-error/)

* Run-time error '438': Object doesn't support this property or method
  * [Solution 1](/docs/codestack/solidworks-api/troubleshooting/macros/future-version-apis/)

* Run-time error '429': ActiveX component can't create object
  * [Solution 1](/docs/codestack/solidworks-api/troubleshooting/macros/missing-com-component/)

* Run-time error '5': Invalid procedure call or argument
  * [Solution 1](/docs/codestack/solidworks-api/troubleshooting/macros/model-title-inconsistency-displaying-extension/)

* Compilation error: "This code must be updated to work on 64-bit systems. Please review and update Declare statements and then mark them with the PtrSafe attribute."
  * [Solution 1](/docs/codestack/solidworks-api/troubleshooting/macros/windows-api-functions-incorrect-use/)

* Unable to open (applies to VBA macros)
  * [Solution 1](/docs/codestack/solidworks-api/troubleshooting/macros/too-long-macro-path/)

* Compilation error: Invalid outside procedure error
  * [Solution 1](/docs/codestack/solidworks-api/troubleshooting/macros/too-long-vba-macro-line/)

* SolidWorksMacro does not contain a definition for 'swApp' (VSTA)
  * [Solution 1](/docs/codestack/solidworks-api/troubleshooting/macros/vsta-invalid-namespace/)

* Unable to open (applies to VSTA macros)
  * [Solution 1](/docs/codestack/solidworks-api/troubleshooting/macros/run-vsta-macro-error/)

{% catalogue { type: sw-macro-fix } %}