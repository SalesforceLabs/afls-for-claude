# VHS tape → renders docs/media/export-config-demo.gif
# Regenerate:  vhs scripts/demo-export.tape
Output docs/media/export-config-demo.gif

Set Shell "bash"
Set FontSize 16
Set Width 1080
Set Height 720
Set Padding 22
Set Theme "Catppuccin Mocha"
Set TypingSpeed 0ms
Set Framerate 24
Set PlaybackSpeed 1.0

# Launch the scripted demo without showing the launch command.
# Stay hidden until the script's own `clear` + banner have rendered, so the
# first captured frame is the banner — never the launch command.
Hide
Type "clear && bash scripts/demo-export.sh"
Enter
Sleep 900ms
Show

# The demo script controls all on-screen timing; wait for it to finish.
Sleep 16s
