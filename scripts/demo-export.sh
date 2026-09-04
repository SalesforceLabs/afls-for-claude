#!/usr/bin/env bash
# Scripted reproduction of an /afls:export-config session for the README demo GIF.
# Renders a Claude-Code-style terminal flow with realistic output. Timing is tuned
# for VHS capture; run standalone to preview: bash scripts/demo-export.sh
set -u

# ---- palette (ANSI) --------------------------------------------------------
BOLD=$'\e[1m'; DIM=$'\e[2m'; RST=$'\e[0m'
PURPLE=$'\e[38;5;177m'; ORANGE=$'\e[38;5;215m'; GREEN=$'\e[38;5;42m'
BLUE=$'\e[38;5;75m'; GREY=$'\e[38;5;245m'; WHITE=$'\e[38;5;255m'; RED=$'\e[38;5;210m'

pause() { sleep "$1"; }

# Type a string character-by-character (simulates the user typing a command).
typeline() {
  local s="$1" i
  for (( i=0; i<${#s}; i++ )); do printf '%s' "${s:$i:1}"; sleep 0.028; done
  printf '\n'
}

# Print a line, then pause (simulates streamed assistant output).
line() { printf '%b\n' "$1"; sleep "${2:-0.35}"; }

clear

# ---- banner ----------------------------------------------------------------
printf '%b\n' "${PURPLE}${BOLD}  ✻ Claude for AFLS${RST}  ${DIM}— Salesforce AFLS Customer Engagement plugin${RST}"
printf '%b\n\n' "${DIM}  connected: ${RST}${GREEN}262-lsdo-pre${RST}${DIM}  ·  plugin v1.0${RST}"
pause 1.1

# ---- user prompt -----------------------------------------------------------
printf '%b' "${PURPLE}${BOLD}> ${RST}"
typeline "/afls:export-config categories [\"dbschema\"]"
pause 0.5

# ---- assistant: status -----------------------------------------------------
line ""
line "${ORANGE}●${RST} Exporting from org ${BOLD}262-lsdo-pre${RST} ${DIM}→ DB Schema${RST}" 0.5

# ---- tool call -------------------------------------------------------------
line "${GREY}⎿${RST}  ${BLUE}export_config${RST}${DIM}(categories: [\"db_schema\"])${RST}" 0.4
printf '%b' "   ${DIM}querying LifeSciConfigRecord (Tooling API)"
for _ in 1 2 3 4 5; do printf '.'; sleep 0.28; done
printf '%b\n' "${RST}"
line "   ${GREEN}✓${RST} captured ${BOLD}221${RST} DB Schema records" 0.5

# ---- summary cards ---------------------------------------------------------
line ""
line "${WHITE}${BOLD}  DB Schema export — 262-lsdo-pre${RST}" 0.25
line "  ${DIM}────────────────────────────────────────────${RST}" 0.15
line "  ${BOLD}221${RST} records   ${GREEN}196 active${RST}   ${RED}25 inactive${RST}   ${ORANGE}3 one-way${RST}   ${BLUE}22 filtered${RST}" 0.6

# ---- sample of filtered records --------------------------------------------
line ""
line "  ${DIM}SObject                 Type   Sync     SOQL filter${RST}" 0.2
line "  ${WHITE}Account${RST}                 DATA   two-way  ${DIM}—${RST}" 0.12
line "  ${WHITE}ContactPointAddress${RST}     DATA   two-way  ${BLUE}ParentId IN ({ACCOUNT.IDS})…${RST}" 0.12
line "  ${WHITE}Case${RST}                    DATA   two-way  ${BLUE}RecordType='LSDO_Medical_Inquiry'…${RST}" 0.12
line "  ${WHITE}VideoCallRecording${RST}      DATA   ${ORANGE}one-way${RST}  ${DIM}—${RST}" 0.12
line "  ${WHITE}RecordAlert${RST}             DATA   two-way  ${BLUE}IsActive=True AND ValidUntil…${RST}" 0.5

# ---- generate outputs ------------------------------------------------------
line ""
line "${ORANGE}●${RST} Writing snapshot + generating browsable HTML report${RST}" 0.4
line "   ${GREEN}✓${RST} ${WHITE}exports/db-schema-export-262-lsdo-pre.json${RST}  ${DIM}(277 KB)${RST}" 0.3
line "   ${GREEN}✓${RST} ${WHITE}exports/db-schema-export-262-lsdo-pre.html${RST}  ${DIM}(searchable · sortable · offline)${RST}" 0.55

# ---- wrap-up ---------------------------------------------------------------
line ""
line "${GREEN}●${RST} Done. Snapshot ready for ${BOLD}import_config${RST}, ${BOLD}/afls:diff-orgs${RST}, or browser review." 0.4
line "  ${DIM}exports/ is gitignored — snapshots stay local, never pushed.${RST}" 1.4
