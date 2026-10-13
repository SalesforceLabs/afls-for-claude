#!/usr/bin/env bash
# Faithful reproduction of a real Claude Code session running /lsc:export-config,
# rendered for the README demo GIF. Mirrors the actual Claude Code TUI chrome
# (header, collapsed tool call, ● bullets, spinner, prompt, footer) and the real
# output of the command. Org name is a fake placeholder (acme-lsc-dev).
#
# Preview:    bash scripts/demo-export.sh
# Render GIF: vhs scripts/demo-export.tape
#
# NOTE: VHS (via ttyd) caps terminal capture at ~5s on recent macOS releases,
# so all visible changes must complete within that window. The script paces
# content with short sleeps that sum to under 4.5s, then holds the final frame.
set -u

# ---- palette (256-color, tuned to Claude Code) -----------------------------
RST=$'\e[0m'; BOLD=$'\e[1m'; DIM=$'\e[38;5;245m'; FAINT=$'\e[38;5;240m'
WHITE=$'\e[38;5;255m'; GREY=$'\e[38;5;250m'
LOGO=$'\e[38;5;210m'         # salmon/red mascot
ORANGE=$'\e[38;5;215m'       # spinner / accents
BLUE=$'\e[38;5;111m'         # paths / code
GREEN=$'\e[38;5;114m'
BULLET=$'\e[38;5;252m'

ORG="acme-lsc-dev"

# ---- header (pixel-robot logo + model/context/cwd) -------------------------
# Coral robot rendered with half-block chars: ears on top, two eyes, a body.
printf '%b▄██▄▄██▄%b   %b%bClaude Code%b %bv2.1.236%b\n'  "${LOGO}" "${RST}" "" "${BOLD}${WHITE}" "${RST}" "${DIM}" "${RST}"
printf '%b██▄██▄██%b   %bOpus 4.8 (1M context) with high effort · Amazon Bedrock%b\n' "${LOGO}" "${RST}" "${DIM}" "${RST}"
printf '%b ██▀▀██ %b   %b~/claude_code/lsc-for-claude%b\n' "${LOGO}" "${RST}" "${DIM}" "${RST}"
printf '\n'
sleep 0.5

# ---- user prompt -----------------------------------------------------------
printf '%b>%b /lsc:export-config categories ["dbschema"]\n\n' "${ORANGE}" "${RST}"
sleep 0.4

# ---- assistant: status + collapsed tool call -------------------------------
printf '%b●%b Exporting from org %b%s%b %b→ DB Schema%b\n\n' "${BULLET}" "${RST}" "${BOLD}" "${ORG}" "${RST}" "${DIM}" "${RST}"
printf '  %bCalled plugin:lsc:lsc (ctrl+o to expand)%b\n' "${DIM}" "${RST}"
sleep 0.5

# ---- thinking spinner (two visible frames, then cleared) -------------------
printf '%b✳%b %bExporting…%b %b(0m 02s · ↓ 0.2k tokens)%b' "${ORANGE}" "${RST}" "${ORANGE}" "${RST}" "${DIM}" "${RST}"
sleep 0.5
printf '\r\e[K%b✳%b %bExporting…%b %b(0m 08s · ↓ 3.9k tokens)%b' "${ORANGE}" "${RST}" "${ORANGE}" "${RST}" "${DIM}" "${RST}"
sleep 0.5
printf '\r\e[K'

# ---- assistant: result (markdown as Claude Code renders it) ----------------
printf '%b●%b Captured %b221%b DB Schema records. Summary:\n\n' "${BULLET}" "${RST}" "${BOLD}" "${RST}"
printf '  %b%bDB Schema export — %s%b\n' "${BOLD}" "${WHITE}" "${ORG}" "${RST}"
printf '  %b•%b %b221%b records — %b196 active%b, 25 inactive\n' "${GREY}" "${RST}" "${BOLD}" "${RST}" "${GREEN}" "${RST}"
printf '  %b•%b %b3%b one-way sync %b(VideoCall* objects)%b\n' "${GREY}" "${RST}" "${ORANGE}" "${RST}" "${DIM}" "${RST}"
printf '  %b•%b %b22%b records with SOQL filters %b(territory / user / record-type scoped)%b\n\n' "${GREY}" "${RST}" "${BLUE}" "${RST}" "${DIM}" "${RST}"
sleep 0.5

printf '  %bSaved:%b\n' "${GREY}" "${RST}"
printf '  %b•%b %bexports/db-schema-export-%s.json%b  %b(277 KB)%b\n' "${GREY}" "${RST}" "${BLUE}" "${ORG}" "${RST}" "${DIM}" "${RST}"
printf '  %b•%b %bexports/db-schema-export-%s.html%b  %b(browsable · searchable · offline)%b\n\n' "${GREY}" "${RST}" "${BLUE}" "${ORG}" "${RST}" "${DIM}" "${RST}"
sleep 0.4

printf '%b●%b Ready for %bimport_config%b, %b/lsc:diff-orgs%b, or browser review.\n\n' "${GREEN}" "${RST}" "${BOLD}" "${RST}" "${BOLD}" "${RST}"

# ---- empty prompt + footer (matches the real idle state) -------------------
printf '%b────────────────────────────────────────────────────────────────────────%b\n' "${FAINT}" "${RST}"
printf '%b>%b %b \e[0m\n' "${ORANGE}" "${RST}" $'\e[7m'
printf '  %b❚❚ manual mode on · esc to interrupt · ← for agents%b\n' "${DIM}" "${RST}"

sleep 10   # hold final frame; VHS stops recording well before this elapses
