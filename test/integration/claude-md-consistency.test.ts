import { describe, it, expect, beforeAll } from "vitest";
import * as fs from "fs";
import * as path from "path";

const ROOT = path.resolve(__dirname, "../..");
const CLAUDE_MD_PATH = path.join(ROOT, "CLAUDE.md");
const SRC_INDEX_PATH = path.join(ROOT, "src/index.ts");
const SRC_TOOLS_DIR = path.join(ROOT, "src/tools");
const SKILLS_DIR = path.join(ROOT, "skills");
const COMMANDS_DIR = path.join(ROOT, "commands");
const AGENTS_DIR = path.join(ROOT, "agents");

let claudeMd: string;
let srcIndex: string;

beforeAll(() => {
  claudeMd = fs.readFileSync(CLAUDE_MD_PATH, "utf-8");
  // Read index.ts plus all tool module files
  let combined = fs.readFileSync(SRC_INDEX_PATH, "utf-8");
  if (fs.existsSync(SRC_TOOLS_DIR)) {
    const toolFiles = fs.readdirSync(SRC_TOOLS_DIR).filter((f) => f.endsWith(".ts"));
    for (const f of toolFiles) {
      combined += "\n" + fs.readFileSync(path.join(SRC_TOOLS_DIR, f), "utf-8");
    }
  }
  srcIndex = combined;
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Extract tool names from all markdown tables in CLAUDE.md that have a
 * "Tool" column header. Tool names appear as backtick-quoted identifiers
 * in the first column, e.g. `| \`tool_name\` | description |`.
 */
function extractToolNamesFromClaudeMd(content: string): string[] {
  const tools: string[] = [];
  const lines = content.split("\n");

  let inToolTable = false;
  let headerSeen = false;

  for (const line of lines) {
    // Detect table header rows with "Tool" column
    if (/^\|\s*Tool\s*\|/i.test(line)) {
      inToolTable = true;
      headerSeen = false;
      continue;
    }

    // Skip the separator row (|---|---|)
    if (inToolTable && !headerSeen && /^\|[\s-|]+\|$/.test(line.trim())) {
      headerSeen = true;
      continue;
    }

    // We're in a tool table's body rows
    if (inToolTable && headerSeen) {
      // End of table: blank line or non-table line
      if (!line.startsWith("|")) {
        inToolTable = false;
        headerSeen = false;
        continue;
      }

      // Extract backtick-quoted tool name from first column
      const match = line.match(/^\|\s*`([^`]+)`\s*\|/);
      if (match) {
        tools.push(match[1]);
      }
    }
  }

  return tools;
}

/**
 * Extract tool names registered via server.tool() in src/index.ts.
 *
 * The pattern is:
 *   server.tool(
 *     "tool_name",
 *     ...
 */
function extractRegisteredToolNames(source: string): string[] {
  const tools: string[] = [];
  const lines = source.split("\n");

  for (let i = 0; i < lines.length - 1; i++) {
    if (/server\.tool\(\s*$/.test(lines[i])) {
      const nextLine = lines[i + 1];
      const match = nextLine.match(/^\s*"([^"]+)"/);
      if (match) {
        tools.push(match[1]);
      }
    }
  }

  return tools;
}

/**
 * Extract CORRECT and WRONG object name lists from CLAUDE.md.
 *
 * Lines look like:
 *   **CORRECT object names:** `Name1`, `Name2`, ...
 *   **WRONG names (DO NOT USE):** `Name1__c`, `Name2__c`, ...
 *
 * Also handles the DbSchema field name variant:
 *   **CORRECT field names:** `SObject`, `Type`, ...
 *   **WRONG field names (DO NOT USE):** `EntityType`, ...
 */
function extractNameLists(content: string): {
  correct: string[];
  wrong: string[];
} {
  const correct: string[] = [];
  const wrong: string[] = [];

  const lines = content.split("\n");
  for (const line of lines) {
    if (/\*\*CORRECT\s+(object|field)\s+names.*?\*\*/.test(line)) {
      const matches = line.matchAll(/`([^`]+)`/g);
      for (const m of matches) {
        correct.push(m[1]);
      }
    }
    if (/\*\*WRONG\s+(names|field\s+names).*?\*\*/.test(line)) {
      const matches = line.matchAll(/`([^`]+)`/g);
      for (const m of matches) {
        wrong.push(m[1]);
      }
    }
  }

  return { correct, wrong };
}

/**
 * Extract skill names from the Skills table in CLAUDE.md.
 * Lines look like: | `skill-name` | Description |
 */
function extractSkillNamesFromClaudeMd(content: string): string[] {
  const skills: string[] = [];
  const lines = content.split("\n");

  let inSkillTable = false;
  let headerSeen = false;

  for (const line of lines) {
    if (/^\|\s*Skill\s*\|/i.test(line)) {
      inSkillTable = true;
      headerSeen = false;
      continue;
    }

    if (inSkillTable && !headerSeen && /^\|[\s-|]+\|$/.test(line.trim())) {
      headerSeen = true;
      continue;
    }

    if (inSkillTable && headerSeen) {
      if (!line.startsWith("|")) {
        inSkillTable = false;
        headerSeen = false;
        continue;
      }

      const match = line.match(/^\|\s*`([^`]+)`\s*\|/);
      if (match) {
        skills.push(match[1]);
      }
    }
  }

  return skills;
}

/**
 * Extract command names from the Commands table in CLAUDE.md.
 * Lines look like: | `/afls:command-name` | Description |
 * Returns the part after `/afls:`, e.g., "setup-plugin".
 */
function extractCommandNamesFromClaudeMd(content: string): string[] {
  const commands: string[] = [];
  const lines = content.split("\n");

  let inCommandTable = false;
  let headerSeen = false;

  for (const line of lines) {
    if (/^\|\s*Command\s*\|/i.test(line)) {
      inCommandTable = true;
      headerSeen = false;
      continue;
    }

    if (inCommandTable && !headerSeen && /^\|[\s-|]+\|$/.test(line.trim())) {
      headerSeen = true;
      continue;
    }

    if (inCommandTable && headerSeen) {
      if (!line.startsWith("|")) {
        inCommandTable = false;
        headerSeen = false;
        continue;
      }

      const match = line.match(/^\|\s*`\/afls:([^`]+)`\s*\|/);
      if (match) {
        commands.push(match[1]);
      }
    }
  }

  return commands;
}

/**
 * Extract agent names from the Agents table in CLAUDE.md.
 * Lines look like: | `agent-name` | Description |
 */
function extractAgentNamesFromClaudeMd(content: string): string[] {
  const agents: string[] = [];
  const lines = content.split("\n");

  let inAgentTable = false;
  let headerSeen = false;

  for (const line of lines) {
    if (/^\|\s*Agent\s*\|/i.test(line)) {
      inAgentTable = true;
      headerSeen = false;
      continue;
    }

    if (inAgentTable && !headerSeen && /^\|[\s-|]+\|$/.test(line.trim())) {
      headerSeen = true;
      continue;
    }

    if (inAgentTable && headerSeen) {
      if (!line.startsWith("|")) {
        inAgentTable = false;
        headerSeen = false;
        continue;
      }

      const match = line.match(/^\|\s*`([^`]+)`\s*\|/);
      if (match) {
        agents.push(match[1]);
      }
    }
  }

  return agents;
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("CLAUDE.md self-consistency", () => {
  // =========================================================================
  // 1. Tool tables match registered tools
  // =========================================================================
  describe("tool tables match registered tools in src/index.ts", () => {
    let documentedTools: string[];
    let registeredTools: string[];

    beforeAll(() => {
      documentedTools = extractToolNamesFromClaudeMd(claudeMd);
      registeredTools = extractRegisteredToolNames(srcIndex);
    });

    it("should find tool names in CLAUDE.md", () => {
      expect(documentedTools.length).toBeGreaterThan(0);
    });

    it("should find registered tools in src/index.ts", () => {
      expect(registeredTools.length).toBeGreaterThan(0);
    });

    it("every tool documented in CLAUDE.md should be registered in code", () => {
      const registeredSet = new Set(registeredTools);
      const missing = documentedTools.filter((t) => !registeredSet.has(t));
      expect(missing).toEqual([]);
    });

    it("every registered tool should be documented in CLAUDE.md", () => {
      const documentedSet = new Set(documentedTools);
      const undocumented = registeredTools.filter(
        (t) => !documentedSet.has(t)
      );
      expect(undocumented).toEqual([]);
    });
  });

  // =========================================================================
  // 2. CORRECT object names don't overlap with WRONG names
  // =========================================================================
  describe("CORRECT vs WRONG object/field names", () => {
    let correct: string[];
    let wrong: string[];

    beforeAll(() => {
      const lists = extractNameLists(claudeMd);
      correct = lists.correct;
      wrong = lists.wrong;
    });

    it("should find CORRECT names in CLAUDE.md", () => {
      expect(correct.length).toBeGreaterThan(0);
    });

    it("should find WRONG names in CLAUDE.md", () => {
      expect(wrong.length).toBeGreaterThan(0);
    });

    it("no name should appear in both CORRECT and WRONG lists", () => {
      const correctSet = new Set(correct);
      const overlap = wrong.filter((w) => correctSet.has(w));
      expect(overlap).toEqual([]);
    });
  });

  // =========================================================================
  // 3. WRONG names are self-consistent (no contradictions across sections)
  // =========================================================================
  describe("WRONG names are self-consistent across sections", () => {
    it("no WRONG name in one section appears as a CORRECT name in another section", () => {
      // Parse per-section to detect cross-section contradictions.
      // Sections are separated by #### headers in CLAUDE.md.
      const sections = claudeMd.split(/^####\s+/m);
      const allCorrectBySection: Map<string, string[]> = new Map();
      const allWrongBySection: Map<string, string[]> = new Map();

      for (const section of sections) {
        const sectionTitle =
          section.split("\n")[0].trim().substring(0, 60) || "preamble";
        const { correct, wrong } = extractNameLists(section);
        if (correct.length > 0) {
          allCorrectBySection.set(sectionTitle, correct);
        }
        if (wrong.length > 0) {
          allWrongBySection.set(sectionTitle, wrong);
        }
      }

      // Collect all CORRECT names from all sections
      const allCorrectNames = new Set<string>();
      for (const names of allCorrectBySection.values()) {
        for (const n of names) allCorrectNames.add(n);
      }

      // Check that no WRONG name from any section is CORRECT in another
      const contradictions: string[] = [];
      for (const [sectionTitle, wrongNames] of allWrongBySection) {
        for (const w of wrongNames) {
          if (allCorrectNames.has(w)) {
            contradictions.push(
              `"${w}" is WRONG in "${sectionTitle}" but CORRECT elsewhere`
            );
          }
        }
      }

      expect(contradictions).toEqual([]);
    });
  });

  // =========================================================================
  // 4. Skills table matches skill directories
  // =========================================================================
  describe("skills table matches skill directories", () => {
    let documentedSkills: string[];
    let skillDirs: string[];

    beforeAll(() => {
      documentedSkills = extractSkillNamesFromClaudeMd(claudeMd);
      skillDirs = fs
        .readdirSync(SKILLS_DIR, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
    });

    it("should find skills in CLAUDE.md", () => {
      expect(documentedSkills.length).toBeGreaterThan(0);
    });

    it("every documented skill should have a directory under skills/", () => {
      const dirSet = new Set(skillDirs);
      const missing = documentedSkills.filter((s) => !dirSet.has(s));
      expect(missing).toEqual([]);
    });

    it("every skill directory should be documented in CLAUDE.md", () => {
      const docSet = new Set(documentedSkills);
      const undocumented = skillDirs.filter((s) => !docSet.has(s));
      expect(undocumented).toEqual([]);
    });
  });

  // =========================================================================
  // 5. Commands table matches command files
  // =========================================================================
  describe("commands table matches command files", () => {
    let documentedCommands: string[];
    let commandFiles: string[];

    beforeAll(() => {
      documentedCommands = extractCommandNamesFromClaudeMd(claudeMd);
      commandFiles = fs
        .readdirSync(COMMANDS_DIR)
        .filter((f) => f.endsWith(".md"))
        .map((f) => f.replace(/\.md$/, ""));
    });

    it("should find commands in CLAUDE.md", () => {
      expect(documentedCommands.length).toBeGreaterThan(0);
    });

    it("every documented command should have a .md file under commands/", () => {
      const fileSet = new Set(commandFiles);
      const missing = documentedCommands.filter((c) => !fileSet.has(c));
      expect(missing).toEqual([]);
    });

    it("every command file should be documented in CLAUDE.md", () => {
      const docSet = new Set(documentedCommands);
      const undocumented = commandFiles.filter((c) => !docSet.has(c));
      expect(undocumented).toEqual([]);
    });
  });

  // =========================================================================
  // 6. Agents table matches agent files
  // =========================================================================
  describe("agents table matches agent files", () => {
    let documentedAgents: string[];
    let agentFiles: string[];

    beforeAll(() => {
      documentedAgents = extractAgentNamesFromClaudeMd(claudeMd);
      agentFiles = fs
        .readdirSync(AGENTS_DIR)
        .filter((f) => f.endsWith(".md"))
        .map((f) => f.replace(/\.md$/, ""));
    });

    it("should find agents in CLAUDE.md", () => {
      expect(documentedAgents.length).toBeGreaterThan(0);
    });

    it("every documented agent should have a .md file under agents/", () => {
      const fileSet = new Set(agentFiles);
      const missing = documentedAgents.filter((a) => !fileSet.has(a));
      expect(missing).toEqual([]);
    });

    it("every agent file should be documented in CLAUDE.md", () => {
      const docSet = new Set(documentedAgents);
      const undocumented = agentFiles.filter((a) => !docSet.has(a));
      expect(undocumented).toEqual([]);
    });
  });

  // =========================================================================
  // 7. No duplicate tool names in tables
  // =========================================================================
  describe("no duplicate tool names across tables", () => {
    it("every tool name should appear at most once in CLAUDE.md tool tables", () => {
      const tools = extractToolNamesFromClaudeMd(claudeMd);
      const seen = new Map<string, number>();
      for (const t of tools) {
        seen.set(t, (seen.get(t) || 0) + 1);
      }

      const duplicates = [...seen.entries()]
        .filter(([, count]) => count > 1)
        .map(([name, count]) => `${name} (${count} times)`);

      expect(duplicates).toEqual([]);
    });
  });
});
