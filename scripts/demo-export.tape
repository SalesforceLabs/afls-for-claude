# VHS tape → renders docs/media/export-config-demo.gif
# Faithful reproduction of a real Claude Code /afls:export-config session.
# Regenerate:  vhs scripts/demo-export.tape
Output docs/media/export-config-demo.gif

Set Shell "bash"
Set FontSize 15
Set Width 1200
Set Height 720
Set Padding 20
Set Theme { "background": "#14161c", "foreground": "#e6e6e6", "cursor": "#e6e6e6", "selection": "#2a2d3a" }
Set TypingSpeed 0ms
Set Framerate 24
Set PlaybackSpeed 1.0

# Launch the scripted session hidden; reveal once the header has rendered so the
# first captured frame is the Claude Code header — never the launch command.
Hide
Type "clear && bash scripts/demo-export.sh"
Enter
Sleep 700ms
Show

# The script controls all on-screen timing and holds the final frame with a long
# sleep, so the shell prompt never returns. Stop recording after the footer settles.
Sleep 13500ms
