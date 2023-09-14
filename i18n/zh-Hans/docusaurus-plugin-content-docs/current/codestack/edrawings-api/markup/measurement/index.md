---
title: 使用 eDrawings 标记 API 捕获 SOLIDWORKS 实体的测量
caption: 捕获测量
description: 使用 eDrawings 标记 API 将 SOLIDWORKS 模型中的实体测量结果捕获到文本框中
image: surveying-form.png
labels: [edrawings,markup,measurement]
---
![测量结果捕获在文本框中](surveying-form.png){ width=450 }

本示例演示了如何使用 eDrawings 标记 API 将所选实体的测量结果捕获到文本框中。

本示例基于[在 Windows Forms 中托管 eDrawings 控件](/docs/codestack/edrawings-api/gettings-started/winforms/)

* 运行窗体
* 通过指定文件的完整路径并单击“打开”按钮来打开任何 SOLIDWORKS 或 eDrawings 文件
* 测量功能会自动启用
* 选择任何实体并单击“捕获测量”。测量值将追加到文本框中

~~~ cs
using eDrawings.Interop.EModelMarkupControl;
using eDrawings.Interop.EModelViewControl;
using System;
using System.Diagnostics;
using System.Windows.Forms;

namespace CodeStack.Examples.eDrawingsApi
{
    public partial class MainForm : Form
    {
        private EModelViewControl m_EDrawingsCtrl;
        private EModelMarkupControl m_EDrawingsMarkupCtrl;

        public MainForm()
        {
            InitializeComponent();
        }

        protected override void OnShown(EventArgs e)
        {
            base.OnShown(e);

            ctrlEDrw.LoadEDrawings();
        }

        private void OnControlLoaded(EModelViewControl ctrl)
        {
            m_EDrawingsCtrl = ctrl;

            m_EDrawingsCtrl.OnFinishedLoadingDocument += OnFinishedLoadingDocument;
            m_EDrawingsCtrl.OnFailedLoadingDocument += OnFailedLoadingDocument;

            m_EDrawingsMarkupCtrl = m_EDrawingsCtrl.CoCreateInstance("EModelViewMarkup.EModelMarkupControl") as EModelMarkupControl;
        }

        private void OnFailedLoadingDocument(string fileName, int errorCode, string errorString)
        {
            Trace.WriteLine($"{fileName} 加载失败: {errorString}");
        }

        private void OnFinishedLoadingDocument(string fileName)
        {
            Trace.WriteLine($"{fileName} 加载成功");
            
            m_EDrawingsMarkupCtrl.ViewOperator = EMVMarkupOperators.eMVOperatorMeasure;
        }
        
        private void OnOpen(object sender, EventArgs e)
        {
            var filePath = txtFilePath.Text;

            if (!string.IsNullOrEmpty(filePath))
            {
                if (m_EDrawingsCtrl == null)
                {
                    throw new NullReferenceException("未加载 eDrawings 控件");
                }

                txtMeasurements.Clear();
                m_EDrawingsCtrl.CloseActiveDoc("");
                m_EDrawingsCtrl.OpenDoc(filePath, false, false, false, "");
            }
        }

        private void OnCaptureMeasurement(object sender, EventArgs e)
        {
            txtMeasurements.Text += (!string.IsNullOrEmpty(txtMeasurements.Text) ? Environment.NewLine : "") 
                + m_EDrawingsMarkupCtrl.MeasureResultString;
        }
    }
}

~~~



源代码可在 [GitHub](https://github.com/codestackdev/solidworks-api-examples/tree/master/edrawings-api/MeasurementSurveying) 上获取。