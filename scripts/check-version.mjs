// check-version.mjs — verify the lockstep release version is consistent.
//
// Usage: node scripts/check-version.mjs <tag|version>
//
// Confirms package.json, .claude-plugin/plugin.json, and
// .claude-plugin/marketplace.json all declare the same version, and that it
// matches the argument (a leading "v" is stripped, so a git tag works
// directly). Exits non-zero on any mismatch so a release can't ship drifted
// versions. Paths resolve relative to this file, so cwd doesn't matter.
import { readFileSync } from "node:fs";

const arg = process.argv[2];
if (!arg) {
  console.error("Usage: node scripts/check-version.mjs <tag|version>");
  process.exit(2);
}
const expected = arg.replace(/^v/, "");

const sources = {
  "package.json": (j) => j.version,
  ".claude-plugin/plugin.json": (j) => j.version,
  ".claude-plugin/marketplace.json": (j) => j.plugins?.[0]?.version,
};

const found = {};
let ok = true;
for (const [file, pick] of Object.entries(sources)) {
  try {
    const json = JSON.parse(
      readFileSync(new URL(`../${file}`, import.meta.url), "utf8")
    );
    found[file] = pick(json);
  } catch (e) {
    found[file] = undefined;
    console.error(`✗ ${file}: could not read version (${e.message})`);
  }
  if (found[file] !== expected) ok = false;
}

if (ok) {
  console.log(
    `✓ version ${expected} is consistent across package.json, plugin.json, and marketplace.json`
  );
  process.exit(0);
}

console.error(`✗ version mismatch — expected ${expected}:`);
for (const [file, v] of Object.entries(found)) {
  console.error(`    ${file}: ${v ?? "(missing)"}`);
}
process.exit(1);
