---
title: 从零件SOLIDWORKS API导出平面图到DXF/DWG
caption: 从零件导出平面图
description: 从零件文件中导出平面图到DXF或DWG
image: export-dxf-dwg.png
labels: [钣金, dxf, dwg, 平面图]
---
![从零件导出平面图到DXF/DWG](export-dxf-dwg.png)

这个VBA宏将钣金零件或选定的平面图特征导出到DXF或DWG。

将*OUT_PATH*变量的值更改为不同的位置以保存输出（更改扩展名以导出到DXF或DWG）。

~~~ vb
Enum SheetMetalOptions_e
    ExportFlatPatternGeometry = 1
    IncludeHiddenEdges = 2
    ExportBendLines = 4
    IncludeSketches = 8
    MergeCoplanarFaces = 16
    ExportLibraryFeatures = 32
    ExportFormingTools = 64
    ExportBoundingBox = 2048
End Enum

Const OUT_PATH As String = "D:\sm.dwg"

Dim swApp As SldWorks.SldWorks

Sub main()

    Set swApp = Application.SldWorks
    
    Dim swPart As SldWorks.PartDoc
    
    Set swPart = swApp.ActiveDoc
    
    Dim modelPath As String
    
    modelPath = swPart.GetPathName
    
    If modelPath = "" Then
        Err.Raise vbError, "", "必须保存零件文档"
    End If
    
    If False = swPart.ExportToDWG2(OUT_PATH, modelPath, swExportToDWG_e.swExportToDWG_ExportSheetMetal, True, Empty, False, False, SheetMetalOptions_e.ExportFlatPatternGeometry + SheetMetalOptions_e.ExportBendLines, Empty) Then
        Err.Raise vbError, "", "导出平面图失败"
    End If
    
End Sub
~~~