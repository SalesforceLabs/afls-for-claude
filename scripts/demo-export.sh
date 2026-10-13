#!/usr/bin/env bash
# Faithful reproduction of a real Claude Code session running /lsc:export-config,
# rendered for the README demo GIF. Mirrors the actual Claude Code TUI chrome
# (header, collapsed tool call, ● bullets, spinner, prompt, footer) and the real
# output of the command. Org name is a fake placeholder (acme-lsc-dev).
#
# Preview:    bash scripts/demo-export.sh
# Render GIF: bash scripts/demo-render.sh
#
# The script streams its output char-by-char through a Python one-liner. Each
# visible byte triggers a tiny delay (natural typing pace); escape sequences
# pass through atomically so colors render correctly; \x1E markers trigger
# longer "section pauses" without a shell sleep. This gives the GIF a readable
# cadence that mimics real Claude Code streaming.
set -u

# ---- palette (256-color, tuned to Claude Code) -----------------------------
RST=$'\e[0m'; BOLD=$'\e[1m'; DIM=$'\e[38;5;245m'; FAINT=$'\e[38;5;240m'
WHITE=$'\e[38;5;255m'; GREY=$'\e[38;5;250m'
LOGO=$'\e[38;5;210m'         # salmon/red mascot
ORANGE=$'\e[38;5;215m'       # spinner / accents
BLUE=$'\e[38;5;111m'         # paths / code
GREEN=$'\e[38;5;114m'
BULLET=$'\e[38;5;252m'
P=$'\x1e'                    # section-pause sentinel (ASCII RS)

ORG="acme-lsc-dev"

{
  # ---- header (pixel-robot logo + model/context/cwd) ----------------------
  printf '%b▄██▄▄██▄%b   %b%bClaude Code%b %bv2.1.236%b\n'  "${LOGO}" "${RST}" "" "${BOLD}${WHITE}" "${RST}" "${DIM}" "${RST}"
  printf '%b██▄██▄██%b   %bOpus 4.8 (1M context) with high effort · Amazon Bedrock%b\n' "${LOGO}" "${RST}" "${DIM}" "${RST}"
  printf '%b ██▀▀██ %b   %b~/claude_code/lsc-for-claude%b\n' "${LOGO}" "${RST}" "${DIM}" "${RST}"
  printf '\n'
  printf '%s' "$P"

  # ---- user prompt --------------------------------------------------------
  printf '%b>%b /lsc:export-config categories ["dbschema"]\n\n' "${ORANGE}" "${RST}"
  printf '%s' "$P"

  # ---- assistant: status + collapsed tool call ----------------------------
  printf '%b●%b Exporting from org %b%s%b %b→ DB Schema%b\n\n' "${BULLET}" "${RST}" "${BOLD}" "${ORG}" "${RST}" "${DIM}" "${RST}"
  printf '  %bCalled plugin:lsc:lsc (ctrl+o to expand)%b\n' "${DIM}" "${RST}"
  printf '%s' "$P"

  # ---- thinking spinner (two visible frames, then cleared) ----------------
  printf '\n%b✳%b %bExporting…%b %b(0m 02s · ↓ 0.2k tokens)%b' "${ORANGE}" "${RST}" "${ORANGE}" "${RST}" "${DIM}" "${RST}"
  printf '%s' "$P"
  printf '\r\e[K%b✳%b %bExporting…%b %b(0m 08s · ↓ 3.9k tokens)%b' "${ORANGE}" "${RST}" "${ORANGE}" "${RST}" "${DIM}" "${RST}"
  printf '%s' "$P"
  printf '\r\e[K'

  # ---- assistant: result (markdown as Claude Code renders it) -------------
  printf '%b●%b Captured %b221%b DB Schema records. Summary:\n\n' "${BULLET}" "${RST}" "${BOLD}" "${RST}"
  printf '  %b%bDB Schema export — %s%b\n' "${BOLD}" "${WHITE}" "${ORG}" "${RST}"
  printf '  %b•%b %b221%b records — %b196 active%b, 25 inactive\n' "${GREY}" "${RST}" "${BOLD}" "${RST}" "${GREEN}" "${RST}"
  printf '  %b•%b %b3%b one-way sync %b(VideoCall* objects)%b\n' "${GREY}" "${RST}" "${ORANGE}" "${RST}" "${DIM}" "${RST}"
  printf '  %b•%b %b22%b records with SOQL filters %b(territory / user / record-type scoped)%b\n\n' "${GREY}" "${RST}" "${BLUE}" "${RST}" "${DIM}" "${RST}"
  printf '%s' "$P"

  printf '  %bSaved:%b\n' "${GREY}" "${RST}"
  printf '  %b•%b %bexports/db-schema-export-%s.json%b  %b(277 KB)%b\n' "${GREY}" "${RST}" "${BLUE}" "${ORG}" "${RST}" "${DIM}" "${RST}"
  printf '  %b•%b %bexports/db-schema-export-%s.html%b  %b(browsable · searchable · offline)%b\n\n' "${GREY}" "${RST}" "${BLUE}" "${ORG}" "${RST}" "${DIM}" "${RST}"
  printf '%s' "$P"

  printf '%b●%b Ready for %bimport_config%b, %b/lsc:diff-orgs%b, or browser review.\n\n' "${GREEN}" "${RST}" "${BOLD}" "${RST}" "${BOLD}" "${RST}"
  printf '%s' "$P"

  # ---- empty prompt + footer (matches the real idle state) ----------------
  printf '%b────────────────────────────────────────────────────────────────────────%b\n' "${FAINT}" "${RST}"
  printf '%b>%b %b \e[0m\n' "${ORANGE}" "${RST}" $'\e[7m'
  printf '  %b❚❚ manual mode on · esc to interrupt · ← for agents%b\n' "${DIM}" "${RST}"
} | python3 -u -c '
import sys, time
TYPE_DELAY = 0.012   # per-visible-char delay (seconds)
PAUSE_DELAY = 0.30   # extra pause on \x1E sentinel
data = sys.stdin.buffer.read()
i, n = 0, len(data)
while i < n:
    b = data[i]
    if b == 0x1e:  # pause sentinel
        time.sleep(PAUSE_DELAY)
        i += 1
        continue
    if b == 0x1b:  # ESC -- emit the full escape sequence atomically
        j = i + 1
        if j < n and data[j] == 0x5b:  # CSI "\e["
            j += 1
            while j < n and not (0x40 <= data[j] <= 0x7e):
                j += 1
            j += 1
        else:
            j = min(i + 2, n)
        sys.stdout.buffer.write(data[i:j])
        sys.stdout.buffer.flush()
        i = j
        continue
    sys.stdout.buffer.write(bytes([b]))
    sys.stdout.buffer.flush()
    if b not in (0x0a, 0x0d):  # dont delay on newlines/CR
        time.sleep(TYPE_DELAY)
    i += 1
'
