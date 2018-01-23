# How to play video

### Build-in Player 

Tinker board has a build-in media player that using gstreamer as its based.
 
#### From UI 

You can select from left-dowm corner menu->Sound & Video->Media Player to execute player.
 
#### From Terminal 
You can add below path into your bashrc:
```
export PATH="/usr/lib/arm-linux-gnueabihf/qt5/examples/multimediawidgets/player:$PATH"
```
And you can use below command to execute player:
```
$ player "file_path"
```
### Using Gstreamer Command 

You can use below two command to play the video via gstreamer:
```
$ gst-launch-1.0 playbin video-sink=rkximagesink uri=file:///home/linaro/vga.ts
$ gst-launch-1.0 uridecodebin uri=file:///home/linaro/vga.ts ! rkximagesink
```
