Function SplitCurveByChord(swCurve As SldWorks.Curve, chordLength As Double) As Variant
    
    Dim swCurveSpline As SldWorks.Curve
    Dim nStartParam As Double
    Dim nEndParam As Double
    Dim bIsClosed As Boolean
    Dim bIsPeriodic As Boolean
    
    Dim incr As Double
    Dim i As Integer
    Dim vParam As Variant
    
    Dim retVal() As Double
        
    swCurve.GetEndParams nStartParam, nEndParam, bIsClosed, bIsPeriodic
    
    Dim curveLength As Double
    curveLength = swCurve.GetLength3(nStartParam, nEndParam)
    
    ReDim retVal(CInt(curveLength / chordLength) * 3 - 1)
    
    incr = (nEndParam - nStartParam) / (curveLength / chordLength)
    
    For i = 0 To (UBound(retVal) + 1) / 3 - 1
    
        vParam = swCurve.Evaluate2(nStartParam + i * incr, 1)
        
        retVal(i * 3) = vParam(0)
        retVal(i * 3 + 1) = vParam(1)
        retVal(i * 3 + 2) = vParam(2)
        
    Next
    
    SplitCurveByChord = retVal
    
End Function