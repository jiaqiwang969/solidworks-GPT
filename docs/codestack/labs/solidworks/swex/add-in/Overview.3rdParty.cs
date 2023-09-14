    //...
    doc.Access3rdPartyData += OnAccess3rdPartyData;
    //...
private void OnAccess3rdPartyData(DocumentHandler docHandler, Access3rdPartyDataState_e state)
{
    const string STREAM_NAME = "CodeStackStream";

    switch (state)
    {
        case Access3rdPartyDataState_e.StreamWrite:
            using (var streamHandler = docHandler.Model.Access3rdPartyStream(STREAM_NAME, true))
            {
                using (var str = streamHandler.Stream)
                {
                    var xmlSer = new XmlSerializer(typeof(string[]));

                    xmlSer.Serialize(str, new string[] { "A", "B" });
                }
            }
            break;
    }
}