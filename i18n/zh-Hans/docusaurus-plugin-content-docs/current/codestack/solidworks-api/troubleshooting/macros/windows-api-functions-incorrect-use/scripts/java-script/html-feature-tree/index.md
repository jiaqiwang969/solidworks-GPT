---
title: Using SOLIDWORKS API to render feature tree in HTML page
caption: Render Feature Tree In HTML Page
description: Example demonstrates how to extract and render feature tree of SOLIDWORKS part document in HTML page using SOLIDWORKS API with JavaScript and ActiveX control in Internet Explorer
image: html-feature-tree-rendered.png
labels: [JavaScript, feature manager]
---
This example demonstrates how to load feature tree content of the SOLIDWORKS part file using SOLIDWORKS API into the HTML page using JavaScript and ActiveX in Internet Explorer (this will not work in any other browsers as ActiveX is not supported by default - it might be required to install special plugins to enable the support).

* Create new html file
* Copy paste the following code into the file
~~~html
<!DOCTYPE html>
<html>
<body>

	<input type="text" placeholder="Part File Path" id="filePath"></input>
	<button type="button" onclick="RenderFeatureTree()">Get Feature Tree</button>

	<p id="featTree">Feature Tree</p>

	<script>
		function RenderFeatureTree() {

			var swApp = new ActiveXObject("SldWorks.Application");
			var filePath = document.getElementById('filePath').value;

			var docSpec = swApp.GetOpenDocSpec(filePath);
			docSpec.ReadOnly = true;
			docSpec.Silent = true;
			var swModel = swApp.OpenDoc7(docSpec);

			var swFeatMgr = swModel.FeatureManager;

			var swRootFeatNode = swFeatMgr.GetFeatureTreeRootItem2(1);

			var root = document.getElementById("featTree");

			RenderFeatureNode(swRootFeatNode, root);

			swApp.CloseDoc(swModel.GetTitle());
		}

		function RenderFeatureNode(featNode, parentElem) {

			parentElem.innerText = featNode.Text

			var ul = document.createElement("UL");
			parentElem.appendChild(ul);

			var swChildFeatNode = featNode.GetFirstChild()

			while (swChildFeatNode !== null) {
				var li = document.createElement("LI");
				ul.appendChild(li);
				RenderFeatureNode(swChildFeatNode, li);
				swChildFeatNode = swChildFeatNode.GetNext();
			}
		}
	</script>
</body>
</html>
~~~

* Save the file and open in in MS Internet Explorer
![HTML page with input fields](input-html-page.png)

This page is using ActiveX so the following message can be displayed:

![ActiveX restrictions warning in Internet Explorer](ie-activex-run-restriction.png)

Click *Allow blocked content* button

* Enter the full path to the SOLIDWORKS part into the text box input field

* Click the *Get Feature Tree* button

* Click *Yes* on the following popup

![Warning message regarding the ActiveX content](ie-allow-activex.png){ width=350 }

As the result the feature tree of the part is rendered on the page

![SOLIDWORKS part feature tree rendered in HTML](html-feature-tree-rendered.png){ width=250 }
