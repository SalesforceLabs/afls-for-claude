#!/usr/bin/env bash
# Record scripts/demo-export.sh with asciinema and render to GIF with agg.
# Replaces the previous VHS/ttyd pipeline, which truncates captures to ~4s on
# macOS Tahoe (VHS 0.12.1 + ttyd 1.7.7).
#
# Requires: asciinema, agg, ffmpeg (brew install asciinema agg ffmpeg)
#
# Usage: bash scripts/demo-render.sh
set -euo pipefail

cd "$(dirname "$0")/.."

CAST=$(mktemp -t demo-export.XXXXXX.cast)
trap 'rm -f "$CAST"' EXIT

asciinema rec \
  --command "bash scripts/demo-export.sh" \
  --window-size 110x32 \
  --idle-time-limit 3 \
  --overwrite \
  "$CAST"

agg \
  --quiet \
  --theme github-dark \
  --font-size 15 \
  --fps-cap 15 \
  --last-frame-duration 2 \
  "$CAST" \
  docs/media/export-config-demo.gif

echo "✓ docs/media/export-config-demo.gif ($(du -h docs/media/export-config-demo.gif | awk '{print $1}'))"
