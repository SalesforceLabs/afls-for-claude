#!/usr/bin/env bash
#
# bump-version.sh — set the lockstep release version everywhere at once.
#
# The plugin and the desktop app share one version (see README). This bumps all
# three manifests together so they can never drift:
#   - package.json                     (npm + electron app version)
#   - .claude-plugin/plugin.json       (installed plugin version)
#   - .claude-plugin/marketplace.json  (marketplace listing version)
#
# Usage:
#   scripts/bump-version.sh 0.2.0            # edit files, commit, tag v0.2.0
#   scripts/bump-version.sh 0.2.0 --no-tag   # edit files only (no commit/tag)
#
# After tagging, publish with:  git push --follow-tags
set -euo pipefail

VERSION="${1:-}"
MODE="${2:-}"

if [[ ! "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z.]+)?$ ]]; then
  echo "Usage: $0 <x.y.z> [--no-tag]" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

TAG="v${VERSION}"

if [[ "$MODE" != "--no-tag" ]]; then
  if git rev-parse -q --verify "refs/tags/${TAG}" >/dev/null; then
    echo "✗ tag ${TAG} already exists" >&2
    exit 1
  fi
fi

# Rewrite the three version fields (Node preserves valid JSON + 2-space indent).
VERSION="$VERSION" node --input-type=module <<'NODE'
import { readFileSync, writeFileSync } from "node:fs";
const version = process.env.VERSION;
const edits = [
  ["package.json", (j) => (j.version = version)],
  [".claude-plugin/plugin.json", (j) => (j.version = version)],
  [".claude-plugin/marketplace.json", (j) => (j.plugins[0].version = version)],
];
for (const [file, set] of edits) {
  const j = JSON.parse(readFileSync(file, "utf8"));
  set(j);
  writeFileSync(file, JSON.stringify(j, null, 2) + "\n");
  console.log(`  updated ${file} -> ${version}`);
}
NODE

# Fail loudly if anything is out of sync.
node scripts/check-version.mjs "$VERSION"

if [[ "$MODE" == "--no-tag" ]]; then
  echo "✓ versions bumped to ${VERSION} (not committed)"
  exit 0
fi

git add package.json .claude-plugin/plugin.json .claude-plugin/marketplace.json
git commit -m "chore(release): ${TAG}"
git tag -a "${TAG}" -m "${TAG}"
echo "✓ committed and tagged ${TAG}. Push with: git push --follow-tags"
