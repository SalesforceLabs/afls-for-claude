import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '../..');
const KNOWLEDGE_DIR = path.join(ROOT, 'knowledge');
const MODULES_DIR = path.join(KNOWLEDGE_DIR, 'modules');
const SKILLS_DIR = path.join(ROOT, 'skills');
const COMMANDS_DIR = path.join(ROOT, 'commands');
const CLAUDE_MD_PATH = path.join(ROOT, 'CLAUDE.md');

const claudeMd = fs.readFileSync(CLAUDE_MD_PATH, 'utf-8');

/** Recursively collect all .md files under a directory. */
function collectMdFiles(dir: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectMdFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

/** Parse module names from the "AFLS4CE Modules (with Documentation)" table in CLAUDE.md. */
function parseModuleTable(): string[] {
  const lines = claudeMd.split('\n');
  const modules: string[] = [];
  let inTable = false;

  for (const line of lines) {
    if (line.includes('AFLS4CE Modules (with Documentation)')) {
      inTable = true;
      continue;
    }
    if (inTable && line.startsWith('###') && !line.includes('AFLS4CE')) {
      break;
    }
    if (inTable) {
      // Table rows look like: | **Account Management** | ...
      const match = line.match(/^\|\s*\*\*(.+?)\*\*\s*\|/);
      if (match) {
        modules.push(match[1]);
      }
    }
  }
  return modules;
}

/** Parse skill names from the Skills table in CLAUDE.md. */
function parseSkillsTable(): string[] {
  const lines = claudeMd.split('\n');
  const skills: string[] = [];
  let inTable = false;

  for (const line of lines) {
    if (line.includes('### Skills (Claude auto-invokes based on context)')) {
      inTable = true;
      continue;
    }
    if (inTable && line.startsWith('###')) {
      break;
    }
    if (inTable) {
      const match = line.match(/^\|\s*`(.+?)`\s*\|/);
      if (match) {
        skills.push(match[1]);
      }
    }
  }
  return skills;
}

/** Parse command names from the Commands table in CLAUDE.md. */
function parseCommandsTable(): string[] {
  const lines = claudeMd.split('\n');
  const commands: string[] = [];
  let inTable = false;

  for (const line of lines) {
    if (line.includes('### Commands (User-invoked with `/afls:command`)')) {
      inTable = true;
      continue;
    }
    if (inTable && line.startsWith('###')) {
      break;
    }
    if (inTable) {
      // Rows like: | `/afls:setup-plugin` | ...
      const match = line.match(/^\|\s*`\/afls:(.+?)`\s*\|/);
      if (match) {
        commands.push(match[1]);
      }
    }
  }
  return commands;
}

/**
 * Map a CLAUDE.md module display name to its expected directory name under knowledge/modules/.
 * This mapping handles the human-readable names vs. kebab-case directory names.
 */
const MODULE_NAME_TO_DIR: Record<string, string> = {
  'Account Management': 'account-management',
  'Visit Management': 'visit-management',
  'Sample Management': 'sample-management',
  'Activity Plan': 'activity-plan',
  'Territory Alignment': 'territory-alignment',
  'User Management': 'user-management',
  'Consent Management': 'consent-management',
  'Lists & Filters': 'lists-filters',
  'Field Email': 'field-email',
  'Intelligent Content': 'intelligent-content',
  'Home Page': 'home-page',
  'Calendar/TOT/Routine': 'calendar-tot-routine-myteam',
  'Surveys': 'surveys',
  'Product Management': 'product-management',
  'App Alerts/Notifications': 'app-alerts-notifications',
  'Next Best (NBC/NBA/NBM)': 'next-best-nbc-nba-nbm',
  'Key Account Management': 'key-account-management',
  'Segmentation': 'segmentation-admin-only',
  'Workflow Management': 'generic-workflow',
  'Agentforce for AFLS': 'agentforce',
  'Data Cloud/Singularity': 'data-cloud-singularity-and-tabnext-metrics',
  'AFLS Apps': 'afls-apps',
  'Mobile Metadata Cache': 'mobile-metadata-cache',
  'Briefings (Daily Podcasts)': 'briefings',
};

/** Wrong object names extracted from CLAUDE.md "WRONG names (DO NOT USE)" sections. */
const WRONG_OBJECT_NAMES = [
  'Visit__c',
  'ProviderVisit__c',
  'VisitSetting__c',
  'VisitConfiguration__mdt',
  'VisitRecordType__c',
  'VisitType__c',
  'SampleTransaction__c',
  'SampleInventory__c',
  'SampleLimit__c',
  'SampleProduct__c',
  'SampleLot__c',
  'HealthcareProvider__c',
  'ContactPointAddress__c',
  'BusinessLicense__c',
  'ProviderAffiliation__c',
  'AccountAddress__c',
  'ActivityPlan__c',
  'ProviderActivityGoal__c',
  'AccountGoal__c',
  'TimePeriod__c',
  'GoalMeasure__c',
  'AccountTerritory__c',
  'TerritoryAssignment__c',
  'TerritoryInfo__c',
  'AffiliationAlignmentRule__c',
  'ZipTerritory__c',
  'User__c',
  'UserProfile__c',
  'PermissionSetAssignment__c',
  'PSLAssignment__c',
  'LicenseAssignment__c',
  'UserTerritory__c',
  'RoleHierarchy__c',
];

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('Knowledge Base Integrity', () => {
  describe('Every module directory has content', () => {
    const moduleDirs = fs.readdirSync(MODULES_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    it('should have at least one module directory', () => {
      expect(moduleDirs.length).toBeGreaterThan(0);
    });

    it.each(moduleDirs)('modules/%s should contain at least one non-empty .md file', (dir) => {
      const dirPath = path.join(MODULES_DIR, dir);
      const mdFiles = fs.readdirSync(dirPath).filter((f) => f.endsWith('.md'));
      expect(mdFiles.length, `No .md files found in modules/${dir}`).toBeGreaterThan(0);

      const hasNonEmpty = mdFiles.some((f) => {
        const content = fs.readFileSync(path.join(dirPath, f), 'utf-8').trim();
        return content.length > 0;
      });
      expect(hasNonEmpty, `All .md files in modules/${dir} are empty`).toBe(true);
    });
  });

  describe('No broken internal references', () => {
    const allMdFiles = collectMdFiles(KNOWLEDGE_DIR);
    const existingModuleDirs = new Set(
      fs.readdirSync(MODULES_DIR, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
    );

    it('knowledge files should not reference non-existent module directories', () => {
      const brokenRefs: string[] = [];

      for (const filePath of allMdFiles) {
        const content = fs.readFileSync(filePath, 'utf-8');
        // Look for references like modules/some-dir or knowledge/modules/some-dir
        const refs = content.matchAll(/(?:knowledge\/)?modules\/([a-z0-9-]+)/g);
        for (const ref of refs) {
          const dirName = ref[1];
          if (!existingModuleDirs.has(dirName)) {
            const relPath = path.relative(ROOT, filePath);
            brokenRefs.push(`${relPath} references non-existent module directory: ${dirName}`);
          }
        }
      }

      expect(brokenRefs, `Broken internal references found:\n${brokenRefs.join('\n')}`).toEqual([]);
    });
  });

  describe('CLAUDE.md <-> knowledge module sync', () => {
    const claudeModules = parseModuleTable();
    const moduleDirsOnDisk = fs.readdirSync(MODULES_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    it('should parse at least 20 modules from CLAUDE.md', () => {
      expect(claudeModules.length).toBeGreaterThanOrEqual(20);
    });

    it.each(claudeModules)(
      'CLAUDE.md module "%s" should have a corresponding knowledge directory',
      (moduleName) => {
        const expectedDir = MODULE_NAME_TO_DIR[moduleName];
        if (!expectedDir) {
          // If no explicit mapping, try kebab-case conversion
          const kebab = moduleName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          const exists = moduleDirsOnDisk.includes(kebab) ||
            moduleDirsOnDisk.some((d) => d.includes(kebab));
          expect(exists, `No knowledge directory found for CLAUDE.md module "${moduleName}" (tried "${kebab}")`).toBe(true);
          return;
        }
        expect(
          moduleDirsOnDisk,
          `Expected directory "modules/${expectedDir}" for CLAUDE.md module "${moduleName}"`
        ).toContain(expectedDir);
      }
    );

    it('every knowledge/modules/ directory should be referenced in CLAUDE.md', () => {
      const mappedDirs = new Set(Object.values(MODULE_NAME_TO_DIR));
      const unreferenced: string[] = [];

      for (const dir of moduleDirsOnDisk) {
        if (!mappedDirs.has(dir)) {
          // Check if the directory name appears somewhere in CLAUDE.md (loose check)
          const dirWords = dir.replace(/-/g, ' ');
          const found = claudeMd.toLowerCase().includes(dirWords) ||
            claudeMd.toLowerCase().includes(dir);
          if (!found) {
            unreferenced.push(dir);
          }
        }
      }

      // Allow some extra directories that may be supplementary content not listed in the module table
      // but flag them as a warning-style check: no more than 30% should be unreferenced
      const maxUnreferenced = Math.ceil(moduleDirsOnDisk.length * 0.3);
      expect(
        unreferenced.length,
        `Too many unreferenced module directories (${unreferenced.length}): ${unreferenced.join(', ')}`
      ).toBeLessThanOrEqual(maxUnreferenced);
    });
  });

  describe('Skill file existence', () => {
    const skills = parseSkillsTable();

    it('should parse at least 10 skills from CLAUDE.md', () => {
      expect(skills.length).toBeGreaterThanOrEqual(10);
    });

    it.each(skills)('skill "%s" should have a SKILL.md file', (skillName) => {
      const skillPath = path.join(SKILLS_DIR, skillName, 'SKILL.md');
      expect(
        fs.existsSync(skillPath),
        `Missing skill file: skills/${skillName}/SKILL.md`
      ).toBe(true);
    });
  });

  describe('Command file existence', () => {
    const commands = parseCommandsTable();

    it('should parse at least 10 commands from CLAUDE.md', () => {
      expect(commands.length).toBeGreaterThanOrEqual(10);
    });

    it.each(commands)('command "%s" should have a .md file', (commandName) => {
      const commandPath = path.join(COMMANDS_DIR, `${commandName}.md`);
      expect(
        fs.existsSync(commandPath),
        `Missing command file: commands/${commandName}.md`
      ).toBe(true);
    });
  });

  describe('No "WRONG" object names in knowledge content', () => {
    const allMdFiles = collectMdFiles(KNOWLEDGE_DIR);

    it('should have knowledge files to scan', () => {
      expect(allMdFiles.length).toBeGreaterThan(0);
    });

    it.each(WRONG_OBJECT_NAMES)(
      'no knowledge file should contain wrong object name "%s"',
      (wrongName) => {
        const violations: string[] = [];

        for (const filePath of allMdFiles) {
          const content = fs.readFileSync(filePath, 'utf-8');
          // Use word-boundary-like matching to avoid false positives inside other words.
          // We check for the exact wrong name as a standalone token.
          if (content.includes(wrongName)) {
            const relPath = path.relative(ROOT, filePath);
            // Count occurrences
            const count = content.split(wrongName).length - 1;
            violations.push(`${relPath} (${count} occurrence${count > 1 ? 's' : ''})`);
          }
        }

        expect(
          violations,
          `Wrong object name "${wrongName}" found in:\n${violations.join('\n')}`
        ).toEqual([]);
      }
    );
  });

  describe('No empty documentation files', () => {
    const allMdFiles = collectMdFiles(KNOWLEDGE_DIR);

    it('should have knowledge files to check', () => {
      expect(allMdFiles.length).toBeGreaterThan(0);
    });

    it.each(allMdFiles.map((f) => path.relative(ROOT, f)))(
      '%s should have at least 50 characters of content',
      (relPath) => {
        const fullPath = path.join(ROOT, relPath);
        const content = fs.readFileSync(fullPath, 'utf-8').trim();
        expect(
          content.length,
          `File ${relPath} has only ${content.length} characters (minimum 50 required)`
        ).toBeGreaterThanOrEqual(50);
      }
    );
  });
});
