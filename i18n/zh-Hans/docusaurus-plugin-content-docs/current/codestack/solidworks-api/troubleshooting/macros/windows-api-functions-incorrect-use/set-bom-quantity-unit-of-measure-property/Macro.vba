Dim swApp As SldWorks.SldWorks
Dim swModel As SldWorks.ModelDoc2

Const BOM_QTY_PRP_NAME As String = "UNIT_OF_MEASURE"
Const QTY_PRP_NAME As String = "Qty"

Sub main()

    Set swApp = Application.SldWorks
    
    Set swModel = swApp.ActiveDoc
    
    If Not swModel Is Nothing Then
    
        Dim swCustPrpMgr As SldWorks.CustomPropertyManager
        
        Set swCustPrpMgr = swModel.Extension.CustomPropertyManager("")
            
        Dim bomQtyPrp As String
        swCustPrpMgr.Get3 BOM_QTY_PRP_NAME, False, "", bomQtyPrp
        
        Debug.Print bomQtyPrp
        
        swCustPrpMgr.Add2 BOM_QTY_PRP_NAME, swCustomInfoType_e.swCustomInfoText, QTY_PRP_NAME
        swCustPrpMgr.Set2 BOM_QTY_PRP_NAME, QTY_PRP_NAME
    
    Else
        
        MsgBox "Please open model"
        
    End If
    
End Sub