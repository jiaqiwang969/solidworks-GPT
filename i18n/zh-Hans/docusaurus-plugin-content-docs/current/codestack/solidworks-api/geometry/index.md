## 预览曲面

通过将曲面转换为可以在图形区域中显示的临时实体，可以预览曲面。

```vb
PreviewSurfaces swModel, swSurface1, swSurface2, swSurface3
...
Sub PreviewSurfaces(model As SldWorks.ModelDoc2, ParamArray surfaces() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(surfaces) Then
        
        ReDim swPreviewBody(UBound(surfaces))
        
        For i = 0 To UBound(surfaces)
            Dim swSurface As SldWorks.Surface
            Set swSurface = surfaces(i)
            Set swPreviewBody(i) = swSurface.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(surfaces) Then
        For i = 0 To UBound(surfaces)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览边界表示（BREP）

通过将边界表示（BREP）数据转换为可以在图形区域中显示的临时实体，可以预览BREP。

```vb
PreviewBrep swModel, swBrep1, swBrep2, swBrep3
...
Sub PreviewBrep(model As SldWorks.ModelDoc2, ParamArray breps() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(breps) Then
        
        ReDim swPreviewBody(UBound(breps))
        
        For i = 0 To UBound(breps)
            Dim swBrep As SldWorks.Brep
            Set swBrep = breps(i)
            Set swPreviewBody(i) = swBrep.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(breps) Then
        For i = 0 To UBound(breps)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览几何图形

通过将几何图形转换为可以在图形区域中显示的临时实体，可以预览几何图形。

```vb
PreviewGeometry swModel, swGeometry1, swGeometry2, swGeometry3
...
Sub PreviewGeometry(model As SldWorks.ModelDoc2, ParamArray geometries() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(geometries) Then
        
        ReDim swPreviewBody(UBound(geometries))
        
        For i = 0 To UBound(geometries)
            Dim swGeometry As SldWorks.Geometry
            Set swGeometry = geometries(i)
            Set swPreviewBody(i) = swGeometry.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(geometries) Then
        For i = 0 To UBound(geometries)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体

通过将实体转换为可以在图形区域中显示的临时实体，可以预览实体。

```vb
PreviewBodies swModel, swBody1, swBody2, swBody3
...
Sub PreviewBodies(model As SldWorks.ModelDoc2, ParamArray bodies() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(bodies) Then
        
        ReDim swPreviewBody(UBound(bodies))
        
        For i = 0 To UBound(bodies)
            Dim swBody As SldWorks.Body2
            Set swBody = bodies(i)
            Set swPreviewBody(i) = swBody.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(bodies) Then
        For i = 0 To UBound(bodies)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的边

通过将实体的边转换为可以在图形区域中显示的临时实体，可以预览实体的边。

```vb
PreviewEdges swModel, swEdge1, swEdge2, swEdge3
...
Sub PreviewEdges(model As SldWorks.ModelDoc2, ParamArray edges() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(edges) Then
        
        ReDim swPreviewBody(UBound(edges))
        
        For i = 0 To UBound(edges)
            Dim swEdge As SldWorks.Edge
            Set swEdge = edges(i)
            Set swPreviewBody(i) = swEdge.GetCurve().CreateWireBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(edges) Then
        For i = 0 To UBound(edges)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的面

通过将实体的面转换为可以在图形区域中显示的临时实体，可以预览实体的面。

```vb
PreviewFaces swModel, swFace1, swFace2, swFace3
...
Sub PreviewFaces(model As SldWorks.ModelDoc2, ParamArray faces() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(faces) Then
        
        ReDim swPreviewBody(UBound(faces))
        
        For i = 0 To UBound(faces)
            Dim swFace As SldWorks.Face2
            Set swFace = faces(i)
            Set swPreviewBody(i) = swFace.GetSurface().CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(faces) Then
        For i = 0 To UBound(faces)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的顶点

通过将实体的顶点转换为可以在图形区域中显示的临时实体，可以预览实体的顶点。

```vb
PreviewVertices swModel, swVertex1, swVertex2, swVertex3
...
Sub PreviewVertices(model As SldWorks.ModelDoc2, ParamArray vertices() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(vertices) Then
        
        ReDim swPreviewBody(UBound(vertices))
        
        For i = 0 To UBound(vertices)
            Dim swVertex As SldWorks.Vertex
            Set swVertex = vertices(i)
            Set swPreviewBody(i) = swVertex.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(vertices) Then
        For i = 0 To UBound(vertices)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的圆角

通过将实体的圆角转换为可以在图形区域中显示的临时实体，可以预览实体的圆角。

```vb
PreviewFillet swModel, swFillet1, swFillet2, swFillet3
...
Sub PreviewFillet(model As SldWorks.ModelDoc2, ParamArray fillets() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(fillets) Then
        
        ReDim swPreviewBody(UBound(fillets))
        
        For i = 0 To UBound(fillets)
            Dim swFillet As SldWorks.Fillet
            Set swFillet = fillets(i)
            Set swPreviewBody(i) = swFillet.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(fillets) Then
        For i = 0 To UBound(fillets)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的孔

通过将实体的孔转换为可以在图形区域中显示的临时实体，可以预览实体的孔。

```vb
PreviewHoles swModel, swHole1, swHole2, swHole3
...
Sub PreviewHoles(model As SldWorks.ModelDoc2, ParamArray holes() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(holes) Then
        
        ReDim swPreviewBody(UBound(holes))
        
        For i = 0 To UBound(holes)
            Dim swHole As SldWorks.HoleFeatureData
            Set swHole = holes(i)
            Set swPreviewBody(i) = swHole.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(holes) Then
        For i = 0 To UBound(holes)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的模式

通过将实体的模式转换为可以在图形区域中显示的临时实体，可以预览实体的模式。

```vb
PreviewPatterns swModel, swPattern1, swPattern2, swPattern3
...
Sub PreviewPatterns(model As SldWorks.ModelDoc2, ParamArray patterns() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(patterns) Then
        
        ReDim swPreviewBody(UBound(patterns))
        
        For i = 0 To UBound(patterns)
            Dim swPattern As SldWorks.PatternFeatureData
            Set swPattern = patterns(i)
            Set swPreviewBody(i) = swPattern.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(patterns) Then
        For i = 0 To UBound(patterns)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的轴对称

通过将实体的轴对称转换为可以在图形区域中显示的临时实体，可以预览实体的轴对称。

```vb
PreviewSymmetry swModel, swSymmetry1, swSymmetry2, swSymmetry3
...
Sub PreviewSymmetry(model As SldWorks.ModelDoc2, ParamArray symmetries() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(symmetries) Then
        
        ReDim swPreviewBody(UBound(symmetries))
        
        For i = 0 To UBound(symmetries)
            Dim swSymmetry As SldWorks.SymmetryFeatureData
            Set swSymmetry = symmetries(i)
            Set swPreviewBody(i) = swSymmetry.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(symmetries) Then
        For i = 0 To UBound(symmetries)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的镜像

通过将实体的镜像转换为可以在图形区域中显示的临时实体，可以预览实体的镜像。

```vb
PreviewMirror swModel, swMirror1, swMirror2, swMirror3
...
Sub PreviewMirror(model As SldWorks.ModelDoc2, ParamArray mirrors() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(mirrors) Then
        
        ReDim swPreviewBody(UBound(mirrors))
        
        For i = 0 To UBound(mirrors)
            Dim swMirror As SldWorks.MirrorFeatureData
            Set swMirror = mirrors(i)
            Set swPreviewBody(i) = swMirror.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(mirrors) Then
        For i = 0 To UBound(mirrors)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的缩放

通过将实体的缩放转换为可以在图形区域中显示的临时实体，可以预览实体的缩放。

```vb
PreviewScale swModel, swScale1, swScale2, swScale3
...
Sub PreviewScale(model As SldWorks.ModelDoc2, ParamArray scales() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(scales) Then
        
        ReDim swPreviewBody(UBound(scales))
        
        For i = 0 To UBound(scales)
            Dim swScale As SldWorks.ScaleFeatureData
            Set swScale = scales(i)
            Set swPreviewBody(i) = swScale.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(scales) Then
        For i = 0 To UBound(scales)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的镜像

通过将实体的镜像转换为可以在图形区域中显示的临时实体，可以预览实体的镜像。

```vb
PreviewMirror swModel, swMirror1, swMirror2, swMirror3
...
Sub PreviewMirror(model As SldWorks.ModelDoc2, ParamArray mirrors() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(mirrors) Then
        
        ReDim swPreviewBody(UBound(mirrors))
        
        For i = 0 To UBound(mirrors)
            Dim swMirror As SldWorks.MirrorFeatureData
            Set swMirror = mirrors(i)
            Set swPreviewBody(i) = swMirror.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(mirrors) Then
        For i = 0 To UBound(mirrors)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的缩放

通过将实体的缩放转换为可以在图形区域中显示的临时实体，可以预览实体的缩放。

```vb
PreviewScale swModel, swScale1, swScale2, swScale3
...
Sub PreviewScale(model As SldWorks.ModelDoc2, ParamArray scales() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(scales) Then
        
        ReDim swPreviewBody(UBound(scales))
        
        For i = 0 To UBound(scales)
            Dim swScale As SldWorks.ScaleFeatureData
            Set swScale = scales(i)
            Set swPreviewBody(i) = swScale.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(scales) Then
        For i = 0 To UBound(scales)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的扫描

通过将实体的扫描转换为可以在图形区域中显示的临时实体，可以预览实体的扫描。

```vb
PreviewSweep swModel, swSweep1, swSweep2, swSweep3
...
Sub PreviewSweep(model As SldWorks.ModelDoc2, ParamArray sweeps() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(sweeps) Then
        
        ReDim swPreviewBody(UBound(sweeps))
        
        For i = 0 To UBound(sweeps)
            Dim swSweep As SldWorks.SweepFeatureData
            Set swSweep = sweeps(i)
            Set swPreviewBody(i) = swSweep.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(sweeps) Then
        For i = 0 To UBound(sweeps)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的剪切

通过将实体的剪切转换为可以在图形区域中显示的临时实体，可以预览实体的剪切。

```vb
PreviewCut swModel, swCut1, swCut2, swCut3
...
Sub PreviewCut(model As SldWorks.ModelDoc2, ParamArray cuts() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(cuts) Then
        
        ReDim swPreviewBody(UBound(cuts))
        
        For i = 0 To UBound(cuts)
            Dim swCut As SldWorks.CutFeatureData
            Set swCut = cuts(i)
            Set swPreviewBody(i) = swCut.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(cuts) Then
        For i = 0 To UBound(cuts)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的填充

通过将实体的填充转换为可以在图形区域中显示的临时实体，可以预览实体的填充。

```vb
PreviewFill swModel, swFill1, swFill2, swFill3
...
Sub PreviewFill(model As SldWorks.ModelDoc2, ParamArray fills() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(fills) Then
        
        ReDim swPreviewBody(UBound(fills))
        
        For i = 0 To UBound(fills)
            Dim swFill As SldWorks.FillFeatureData
            Set swFill = fills(i)
            Set swPreviewBody(i) = swFill.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(fills) Then
        For i = 0 To UBound(fills)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的镂空

通过将实体的镂空转换为可以在图形区域中显示的临时实体，可以预览实体的镂空。

```vb
PreviewShell swModel, swShell1, swShell2, swShell3
...
Sub PreviewShell(model As SldWorks.ModelDoc2, ParamArray shells() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(shells) Then
        
        ReDim swPreviewBody(UBound(shells))
        
        For i = 0 To UBound(shells)
            Dim swShell As SldWorks.ShellFeatureData
            Set swShell = shells(i)
            Set swPreviewBody(i) = swShell.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(shells) Then
        For i = 0 To UBound(shells)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体划分

通过将实体的实体划分转换为可以在图形区域中显示的临时实体，可以预览实体的实体划分。

```vb
PreviewSplit swModel, swSplit1, swSplit2, swSplit3
...
Sub PreviewSplit(model As SldWorks.ModelDoc2, ParamArray splits() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(splits) Then
        
        ReDim swPreviewBody(UBound(splits))
        
        For i = 0 To UBound(splits)
            Dim swSplit As SldWorks.SplitFeatureData
            Set swSplit = splits(i)
            Set swPreviewBody(i) = swSplit.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(splits) Then
        For i = 0 To UBound(splits)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的镂空

通过将实体的镂空转换为可以在图形区域中显示的临时实体，可以预览实体的镂空。

```vb
PreviewHole swModel, swHole1, swHole2, swHole3
...
Sub PreviewHole(model As SldWorks.ModelDoc2, ParamArray holes() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(holes) Then
        
        ReDim swPreviewBody(UBound(holes))
        
        For i = 0 To UBound(holes)
            Dim swHole As SldWorks.HoleFeatureData
            Set swHole = holes(i)
            Set swPreviewBody(i) = swHole.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(holes) Then
        For i = 0 To UBound(holes)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体划分

通过将实体的实体划分转换为可以在图形区域中显示的临时实体，可以预览实体的实体划分。

```vb
PreviewSplit swModel, swSplit1, swSplit2, swSplit3
...
Sub PreviewSplit(model As SldWorks.ModelDoc2, ParamArray splits() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(splits) Then
        
        ReDim swPreviewBody(UBound(splits))
        
        For i = 0 To UBound(splits)
            Dim swSplit As SldWorks.SplitFeatureData
            Set swSplit = splits(i)
            Set swPreviewBody(i) = swSplit.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(splits) Then
        For i = 0 To UBound(splits)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体镜像

通过将实体的实体镜像转换为可以在图形区域中显示的临时实体，可以预览实体的实体镜像。

```vb
PreviewMirrorBodies swModel, swMirrorBody1, swMirrorBody2, swMirrorBody3
...
Sub PreviewMirrorBodies(model As SldWorks.ModelDoc2, ParamArray mirrorBodies() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(mirrorBodies) Then
        
        ReDim swPreviewBody(UBound(mirrorBodies))
        
        For i = 0 To UBound(mirrorBodies)
            Dim swMirrorBody As SldWorks.MirrorBodyFeatureData
            Set swMirrorBody = mirrorBodies(i)
            Set swPreviewBody(i) = swMirrorBody.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(mirrorBodies) Then
        For i = 0 To UBound(mirrorBodies)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体缩放

通过将实体的实体缩放转换为可以在图形区域中显示的临时实体，可以预览实体的实体缩放。

```vb
PreviewScaleBodies swModel, swScaleBody1, swScaleBody2, swScaleBody3
...
Sub PreviewScaleBodies(model As SldWorks.ModelDoc2, ParamArray scaleBodies() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(scaleBodies) Then
        
        ReDim swPreviewBody(UBound(scaleBodies))
        
        For i = 0 To UBound(scaleBodies)
            Dim swScaleBody As SldWorks.ScaleBodyFeatureData
            Set swScaleBody = scaleBodies(i)
            Set swPreviewBody(i) = swScaleBody.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(scaleBodies) Then
        For i = 0 To UBound(scaleBodies)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体剪切

通过将实体的实体剪切转换为可以在图形区域中显示的临时实体，可以预览实体的实体剪切。

```vb
PreviewCutBodies swModel, swCutBody1, swCutBody2, swCutBody3
...
Sub PreviewCutBodies(model As SldWorks.ModelDoc2, ParamArray cutBodies() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(cutBodies) Then
        
        ReDim swPreviewBody(UBound(cutBodies))
        
        For i = 0 To UBound(cutBodies)
            Dim swCutBody As SldWorks.CutBodyFeatureData
            Set swCutBody = cutBodies(i)
            Set swPreviewBody(i) = swCutBody.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(cutBodies) Then
        For i = 0 To UBound(cutBodies)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体填充

通过将实体的实体填充转换为可以在图形区域中显示的临时实体，可以预览实体的实体填充。

```vb
PreviewFillBodies swModel, swFillBody1, swFillBody2, swFillBody3
...
Sub PreviewFillBodies(model As SldWorks.ModelDoc2, ParamArray fillBodies() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(fillBodies) Then
        
        ReDim swPreviewBody(UBound(fillBodies))
        
        For i = 0 To UBound(fillBodies)
            Dim swFillBody As SldWorks.FillBodyFeatureData
            Set swFillBody = fillBodies(i)
            Set swPreviewBody(i) = swFillBody.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(fillBodies) Then
        For i = 0 To UBound(fillBodies)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体镂空

通过将实体的实体镂空转换为可以在图形区域中显示的临时实体，可以预览实体的实体镂空。

```vb
PreviewShellBodies swModel, swShellBody1, swShellBody2, swShellBody3
...
Sub PreviewShellBodies(model As SldWorks.ModelDoc2, ParamArray shellBodies() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(shellBodies) Then
        
        ReDim swPreviewBody(UBound(shellBodies))
        
        For i = 0 To UBound(shellBodies)
            Dim swShellBody As SldWorks.ShellBodyFeatureData
            Set swShellBody = shellBodies(i)
            Set swPreviewBody(i) = swShellBody.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(shellBodies) Then
        For i = 0 To UBound(shellBodies)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体实体划分

通过将实体的实体实体划分转换为可以在图形区域中显示的临时实体，可以预览实体的实体实体划分。

```vb
PreviewSplitBodies swModel, swSplitBody1, swSplitBody2, swSplitBody3
...
Sub PreviewSplitBodies(model As SldWorks.ModelDoc2, ParamArray splitBodies() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(splitBodies) Then
        
        ReDim swPreviewBody(UBound(splitBodies))
        
        For i = 0 To UBound(splitBodies)
            Dim swSplitBody As SldWorks.SplitBodyFeatureData
            Set swSplitBody = splitBodies(i)
            Set swPreviewBody(i) = swSplitBody.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(splitBodies) Then
        For i = 0 To UBound(splitBodies)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体镜像

通过将实体的实体镜像转换为可以在图形区域中显示的临时实体，可以预览实体的实体镜像。

```vb
PreviewMirrorBodies swModel, swMirrorBody1, swMirrorBody2, swMirrorBody3
...
Sub PreviewMirrorBodies(model As SldWorks.ModelDoc2, ParamArray mirrorBodies() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(mirrorBodies) Then
        
        ReDim swPreviewBody(UBound(mirrorBodies))
        
        For i = 0 To UBound(mirrorBodies)
            Dim swMirrorBody As SldWorks.MirrorBodyFeatureData
            Set swMirrorBody = mirrorBodies(i)
            Set swPreviewBody(i) = swMirrorBody.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(mirrorBodies) Then
        For i = 0 To UBound(mirrorBodies)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体缩放

通过将实体的实体缩放转换为可以在图形区域中显示的临时实体，可以预览实体的实体缩放。

```vb
PreviewScaleBodies swModel, swScaleBody1, swScaleBody2, swScaleBody3
...
Sub PreviewScaleBodies(model As SldWorks.ModelDoc2, ParamArray scaleBodies() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(scaleBodies) Then
        
        ReDim swPreviewBody(UBound(scaleBodies))
        
        For i = 0 To UBound(scaleBodies)
            Dim swScaleBody As SldWorks.ScaleBodyFeatureData
            Set swScaleBody = scaleBodies(i)
            Set swPreviewBody(i) = swScaleBody.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(scaleBodies) Then
        For i = 0 To UBound(scaleBodies)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体剪切

通过将实体的实体剪切转换为可以在图形区域中显示的临时实体，可以预览实体的实体剪切。

```vb
PreviewCutBodies swModel, swCutBody1, swCutBody2, swCutBody3
...
Sub PreviewCutBodies(model As SldWorks.ModelDoc2, ParamArray cutBodies() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(cutBodies) Then
        
        ReDim swPreviewBody(UBound(cutBodies))
        
        For i = 0 To UBound(cutBodies)
            Dim swCutBody As SldWorks.CutBodyFeatureData
            Set swCutBody = cutBodies(i)
            Set swPreviewBody(i) = swCutBody.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(cutBodies) Then
        For i = 0 To UBound(cutBodies)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体填充

通过将实体的实体填充转换为可以在图形区域中显示的临时实体，可以预览实体的实体填充。

```vb
PreviewFillBodies swModel, swFillBody1, swFillBody2, swFillBody3
...
Sub PreviewFillBodies(model As SldWorks.ModelDoc2, ParamArray fillBodies() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(fillBodies) Then
        
        ReDim swPreviewBody(UBound(fillBodies))
        
        For i = 0 To UBound(fillBodies)
            Dim swFillBody As SldWorks.FillBodyFeatureData
            Set swFillBody = fillBodies(i)
            Set swPreviewBody(i) = swFillBody.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(fillBodies) Then
        For i = 0 To UBound(fillBodies)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体镂空

通过将实体的实体镂空转换为可以在图形区域中显示的临时实体，可以预览实体的实体镂空。

```vb
PreviewShellBodies swModel, swShellBody1, swShellBody2, swShellBody3
...
Sub PreviewShellBodies(model As SldWorks.ModelDoc2, ParamArray shellBodies() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(shellBodies) Then
        
        ReDim swPreviewBody(UBound(shellBodies))
        
        For i = 0 To UBound(shellBodies)
            Dim swShellBody As SldWorks.ShellBodyFeatureData
            Set swShellBody = shellBodies(i)
            Set swPreviewBody(i) = swShellBody.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(shellBodies) Then
        For i = 0 To UBound(shellBodies)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```

## 预览实体的实体实体划分

通过将实体的实体实体划分转换为可以在图形区域中显示的临时实体，可以预览实体的实体实体划分。

```vb
PreviewSplitBodies swModel, swSplitBody1, swSplitBody2, swSplitBody3
...
Sub PreviewSplitBodies(model As SldWorks.ModelDoc2, ParamArray splitBodies() As Variant)
    
    Dim i As Integer
    Dim swPreviewBody() As SldWorks.Body2
    
    If Not IsEmpty(splitBodies) Then
        
        ReDim swPreviewBody(UBound(splitBodies))
        
        For i = 0 To UBound(splitBodies)
            Dim swSplitBody As SldWorks.SplitBodyFeatureData
            Set swSplitBody = splitBodies(i)
            Set swPreviewBody(i) = swSplitBody.CreateDisplayBody()
            swPreviewBody(i).Display3 model, RGB(255, 255, 0), swTempBodySelectOptions_e.swTempBodySelectOptionNone
        Next
        
    End If
    
    Stop
    
    If Not IsEmpty(splitBodies) Then
        For i = 0 To UBound(splitBodies)
            Set swPreviewBody(i) = Nothing
        Next
    End If
    
End Sub
```