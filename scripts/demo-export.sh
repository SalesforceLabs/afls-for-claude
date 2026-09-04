#!/usr/bin/env bash
# Faithful reproduction of a real Claude Code session running /afls:export-config,
# rendered for the README demo GIF. Mirrors the actual Claude Code TUI chrome
# (header, collapsed tool call, ● bullets, spinner, prompt, footer) and the real
# output of the command. Org name is a fake placeholder (acme-afls-dev).
#
# Preview:    bash scripts/demo-export.sh
# Render GIF: vhs scripts/demo-export.tape
set -u

# ---- palette (256-color, tuned to Claude Code) -----------------------------
RST=$'\e[0m'; BOLD=$'\e[1m'; DIM=$'\e[38;5;245m'; FAINT=$'\e[38;5;240m'
WHITE=$'\e[38;5;255m'; GREY=$'\e[38;5;250m'
LOGO=$'\e[38;5;210m'         # salmon/red mascot
ORANGE=$'\e[38;5;215m'       # spinner / accents
BLUE=$'\e[38;5;111m'         # paths / code
GREEN=$'\e[38;5;114m'
BULLET=$'\e[38;5;252m'
HLBG=$'\e[48;5;236m'         # committed-command highlight bar

ORG="acme-afls-dev"

pause() { sleep "$1"; }
typeline() { local s="$1" i; for (( i=0; i<${#s}; i++ )); do printf '%s' "${s:$i:1}"; sleep 0.03; done; }
line() { printf '%b\n' "$1"; sleep "${2:-0.3}"; }
rule() { printf '%b\n' "${FAINT}────────────────────────────────────────────────────────────────────────${RST}"; }

clear

# ---- header (logo + model/context/cwd) -------------------------------------
printf '%b   %b%bClaude Code%b %bv2.1.236%b\n'  "${LOGO}▗█████▖${RST}" "" "${BOLD}${WHITE}" "${RST}" "${DIM}" "${RST}"
printf '%b   %bOpus 4.8 (1M context) with high effort · Amazon Bedrock%b\n' "${LOGO}█ ▀ ▀ █${RST}" "${DIM}" "${RST}"
printf '%b   %b~/claude_code/afls-for-claude%b\n' "${LOGO}▝█████▘${RST}" "${DIM}" "${RST}"
printf '\n'
pause 1.2

# ---- user prompt (typed, then committed) -----------------------------------
printf '%b' "${ORANGE}>${RST} "
typeline "/afls:export-config categories [\"dbschema\"]"
printf '\n'
pause 0.5

# ---- assistant: status -----------------------------------------------------
line ""
line "${BULLET}●${RST} Exporting from org ${BOLD}${ORG}${RST} ${DIM}→ DB Schema${RST}" 0.45
line ""
line "  ${DIM}Called plugin:afls:afls (ctrl+o to expand)${RST}" 0.4

# ---- thinking spinner (updates in place, then clears) ----------------------
for t in "0m 02s · ↓ 0.2k tokens" "0m 05s · ↓ 1.4k tokens" "0m 08s · ↓ 3.9k tokens"; do
  printf '\r\e[K%b✳%b %bExporting…%b %b(%s)%b' "${ORANGE}" "${RST}" "${ORANGE}" "${RST}" "${DIM}" "$t" "${RST}"
  sleep 0.7
done
printf '\r\e[K'   # erase spinner line

# ---- assistant: result (markdown as Claude Code renders it) ----------------
line "${BULLET}●${RST} Captured ${BOLD}221${RST} DB Schema records. Summary:" 0.4
line ""
line "  ${BOLD}${WHITE}DB Schema export — ${ORG}${RST}" 0.2
line "  ${GREY}•${RST} ${BOLD}221${RST} records — ${GREEN}196 active${RST}, 25 inactive" 0.25
line "  ${GREY}•${RST} ${ORANGE}3${RST} one-way sync ${DIM}(VideoCall* objects)${RST}" 0.25
line "  ${GREY}•${RST} ${BLUE}22${RST} records with SOQL filters ${DIM}(territory / user / record-type scoped)${RST}" 0.45
line ""
line "  ${GREY}Saved:${RST}" 0.2
line "  ${GREY}•${RST} ${BLUE}exports/db-schema-export-${ORG}.json${RST}  ${DIM}(277 KB)${RST}" 0.25
line "  ${GREY}•${RST} ${BLUE}exports/db-schema-export-${ORG}.html${RST}  ${DIM}(browsable · searchable · offline)${RST}" 0.5
line ""
line "${GREEN}●${RST} Ready for ${BOLD}import_config${RST}, ${BOLD}/afls:diff-orgs${RST}, or browser review." 0.6

# ---- empty prompt + footer (matches the real idle state) -------------------
line ""
rule
printf '%b>%b %b \e[0m\n' "${ORANGE}" "${RST}" $'\e[7m'
printf '  %b❚❚ manual mode on · esc to interrupt · ← for agents%b\n' "${DIM}" "${RST}"
sleep 30   # hold final frame indefinitely; VHS stops recording (Sleep in tape) well before this elapses, so the shell prompt never returns on-screen
