# How to play audio 

There are two built-in players you can play music through, both of them can be found from menu -> Sound & Video.

### LXMusic

LXMusic is based on xmms2, you can select output plugin which you want at File->Preferences->Audio, default is set to ALSA.

### Media Player

Media Player is gstreamer based , it can also be used to play video.
You can also use below gstreamer command to play audio file.

<pre><code><b>$ gst-launch-1.0 playbin uri=file:///home/linaro/Music/&lt;File Name&gt;</b>
</code></pre>

```
$ gst-launch-1.0 playbin uri=file:///home/linaro/Music/<File Name>
```
