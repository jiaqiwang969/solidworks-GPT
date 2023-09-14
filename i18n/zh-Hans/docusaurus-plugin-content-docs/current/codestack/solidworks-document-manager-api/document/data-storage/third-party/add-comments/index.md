            public override void SetLength(long value)
        {
            throw new NotSupportedException("SetLength is not supported");
        }

        public unsafe override void Write(byte[] buffer, int offset, int count)
        {
            if (!m_IsWritable)
            {
                throw new NotSupportedException("Stream is not writable");
            }

            if (offset != 0)
            {
                throw new NotSupportedException("Offset is not supported");
            }

            int bytesWritten;

            var address = new IntPtr(&bytesWritten);

            m_ComStream.Write(buffer, count, address);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (m_ComStream != null)
                {
                    Marshal.ReleaseComObject(m_ComStream);
                }
            }

            base.Dispose(disposing);
        }
    }
}

~~~

```csharp
public override void SetLength(long value)
{
    m_ComStream.SetSize(value);
}

public override void Write(byte[] buffer, int offset, int count)
{
    if (offset != 0)
    {
        throw new NotSupportedException("不支持偏移量");
    }

    m_ComStream.Write(buffer, count, IntPtr.Zero);
}

protected override void Dispose(bool disposing)
{
    try
    {
        if (disposing)
        {
            m_IsWritable = false;
        }
    }
    finally
    {
        base.Dispose(disposing);
    }
}

~ComStream()
{
    Dispose(false);
}
}
```
