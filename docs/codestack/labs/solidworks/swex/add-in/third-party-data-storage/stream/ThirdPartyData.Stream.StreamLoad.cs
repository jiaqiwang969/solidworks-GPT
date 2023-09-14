private const string STREAM_NAME = "CodeStackStream";

public class StreamData
{
    public string Prp1 { get; set; }
    public double Prp2 { get; set; }
}

private StreamData m_StreamData;

private void LoadFromStream(IModelDoc2 model)
{
    using (var streamHandler = model.Access3rdPartyStream(STREAM_NAME, false))
    {
        if (streamHandler.Stream != null)
        {
            using (var str = streamHandler.Stream)
            {
                var xmlSer = new XmlSerializer(typeof(StreamData));
                m_StreamData = xmlSer.Deserialize(str) as StreamData;
            }
        }
    }
}