#!/usr/bin/env tsx
/**
 * Process large PDF guides into section-level markdown chunks with page metadata.
 *
 * Algorithm:
 * 1. Run `pdftotext -layout` to get full text; split on \f for page boundaries
 * 2. Parse TOC pages to build a section index
 * 3. On each content page, extract the right-side header text from the dual-column header
 * 4. Group pages into sections (new section starts when header text changes)
 * 5. Write each section as a separate .md file with <!-- page:N --> markers
 * 6. Write a _manifest.json with the section index
 */

import { execSync } from "child_process";
import { writeFileSync, mkdirSync, existsSync, rmSync } from "fs";
import { join, resolve } from "path";
import { guideConfigs, type GuideConfig } from "./pdf-config.js";

const PROJECT_ROOT = resolve(import.meta.dirname, "..");
const DOCS_DIR = join(PROJECT_ROOT, "documentation");
const GUIDES_OUTPUT = join(PROJECT_ROOT, "knowledge", "guides");

interface TocEntry {
  title: string;
  pageNumber: number;
  level: number;
}

interface SectionChunk {
  slug: string;
  title: string;
  startPage: number;
  endPage: number;
  content: string; // markdown with <!-- page:N --> markers
}

interface ManifestSection {
  slug: string;
  title: string;
  startPage: number;
  endPage: number;
  file: string;
}

interface Manifest {
  guideTitle: string;
  guideSlug: string;
  pdfFileName: string;
  totalPages: number;
  sections: ManifestSection[];
}

/**
 * Extract full text from a PDF using pdftotext, split into pages.
 */
function extractPages(pdfPath: string): string[] {
  console.log(`  Extracting text from ${pdfPath}...`);
  const raw = execSync(`pdftotext -layout "${pdfPath}" -`, {
    maxBuffer: 200 * 1024 * 1024,
    encoding: "utf-8",
  });
  // pdftotext uses \f (form feed) to separate pages
  const pages = raw.split("\f");
  // Last element after final \f is often empty
  if (pages.length > 0 && pages[pages.length - 1].trim() === "") {
    pages.pop();
  }
  console.log(`  Extracted ${pages.length} pages`);
  return pages;
}

/**
 * Parse TOC entries from the first N pages.
 * TOC lines look like: "Section Title . . . . . . . . . . . . . . . . . . . . 42"
 * or "Section Title ............... 42"
 */
function parseToc(pages: string[]): TocEntry[] {
  const entries: TocEntry[] = [];
  // TOC is usually in first ~15 pages (after title page)
  const tocPages = pages.slice(0, Math.min(20, pages.length));

  for (const page of tocPages) {
    const lines = page.split("\n");
    for (const line of lines) {
      // Match lines with dot leaders (". . . ." or "....") followed by a page number
      // The PDF uses ". " (dot-space) pattern for leaders
      const match = line.match(/^(\s*)(.+?)\s*(?:(?:\.\s){3,}|\.{3,})\s*\.?\s*(\d+)\s*$/);
      if (match) {
        const indent = match[1].length;
        const title = match[2].trim();
        const pageNumber = parseInt(match[3], 10);

        // Skip if title is too short or looks like noise
        if (title.length < 3) continue;
        // Skip "CONTENTS" header
        if (title === "CONTENTS" || title === "Contents") continue;

        // Determine level from indentation
        let level = 1;
        if (indent >= 12) level = 3;
        else if (indent >= 6) level = 2;

        entries.push({ title, pageNumber, level });
      }
    }
  }

  console.log(`  Found ${entries.length} TOC entries`);
  return entries;
}

/**
 * Extract the section name from a page's header line.
 * Headers typically look like: "GuideTitle                    SectionName"
 * with many spaces between the left (guide title) and right (section name).
 */
function extractHeaderSection(page: string, guideTitle: string, headerGap: number): string | null {
  const lines = page.split("\n");
  // Check first few non-empty lines for header pattern
  let checked = 0;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    checked++;
    if (checked > 3) break;

    // Look for the guide title followed by gap then section name
    const titleIdx = trimmed.indexOf(guideTitle);
    if (titleIdx !== -1) {
      const afterTitle = trimmed.slice(titleIdx + guideTitle.length);
      // Must have significant whitespace gap then text
      const gapMatch = afterTitle.match(new RegExp(`^\\s{${headerGap},}(.+)$`));
      if (gapMatch) {
        return gapMatch[1].trim();
      }
    }

    // Also check if the line itself (without guide title prefix) contains
    // a dual-column header with lots of spaces
    const gapMatch = trimmed.match(/^(.{10,}?)\s{8,}(.{5,})$/);
    if (gapMatch) {
      // The right side is the section name
      return gapMatch[2].trim();
    }
  }
  return null;
}

/**
 * Slugify a section title for use as a filename.
 */
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/**
 * Clean page content and convert pdftotext layout to markdown.
 *
 * - Remove header/footer lines
 * - Detect sub-headings and format as ## or ###
 * - Detect list items (numbered and bulleted)
 * - Join wrapped paragraph lines
 * - Clean up excessive whitespace
 */
function cleanPageContent(page: string, guideTitle: string): string {
  const lines = page.split("\n");
  const stripped: string[] = [];
  let skippedHeader = false;

  // Phase 1: Remove headers, footers, page numbers
  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    if (!skippedHeader && !trimmed) continue;

    // Skip header lines containing guide title
    if (!skippedHeader && trimmed.includes(guideTitle)) {
      skippedHeader = true;
      continue;
    }
    // Skip the section name header line (right side of dual-column header)
    if (!skippedHeader && i < 4) {
      skippedHeader = true;
      if (trimmed.length > 0 && trimmed.length < 80 && !trimmed.includes(".")) {
        continue; // Likely the section header — already used as section title
      }
    }

    skippedHeader = true;

    // Skip standalone page numbers near the bottom
    if (i >= lines.length - 3 && /^\s*\d+\s*$/.test(trimmed)) continue;

    stripped.push(trimmed);
  }

  // Trim trailing blank lines
  while (stripped.length > 0 && stripped[stripped.length - 1] === "") {
    stripped.pop();
  }

  // Phase 2: Convert to markdown
  const md: string[] = [];

  for (let i = 0; i < stripped.length; i++) {
    const line = stripped[i];
    const next = stripped[i + 1] || "";
    const prev = stripped[i - 1] || "";

    // Empty line → paragraph break
    if (line === "") {
      md.push("");
      continue;
    }

    // "REQUIRED EDITIONS" / "USER PERMISSIONS" / "EDITIONS" boxes — make bold
    if (/^(REQUIRED EDITIONS|USER PERMISSIONS|EDITIONS|SEE ALSO|Note|Important|Tip|Warning)\s*$/.test(line)) {
      md.push("");
      md.push(`**${line}**`);
      continue;
    }

    // Detect numbered list items: "1." or "1)" at start
    if (/^\d+[.)]\s/.test(line)) {
      md.push(line);
      continue;
    }

    // Detect bullet items: "•" or "-" at start
    if (/^[•●]\s/.test(line)) {
      md.push(`- ${line.slice(2)}`);
      continue;
    }

    // Detect sub-headings: short line (< 80 chars) that doesn't end with common
    // sentence-ending punctuation, preceded by a blank line, and followed by text
    const isShort = line.length < 80;
    const noTrailingPunct = !/[.,:;)}\]]$/.test(line);
    const prevBlank = prev === "" || i === 0;
    const nextIsContent = next !== "" && next.length > 20;
    const looksLikeHeading = isShort && noTrailingPunct && prevBlank && nextIsContent
      && !/^\d+[.)]\s/.test(line) // not a list item
      && !/^(Available in:|Applies to:)/i.test(line) // not an edition note
      && line.length > 3;

    if (looksLikeHeading) {
      md.push("");
      md.push(`## ${line}`);
      md.push("");
      continue;
    }

    // Regular text line
    md.push(line);
  }

  return md.join("\n");
}

/**
 * Build sections from pages using header detection.
 */
function buildSections(
  pages: string[],
  tocEntries: TocEntry[],
  config: GuideConfig
): SectionChunk[] {
  const sections: SectionChunk[] = [];
  let currentSection: string | null = null;
  let currentPages: { pageNum: number; content: string }[] = [];
  let currentStartPage = 1;

  // Build a TOC lookup for matching headers to TOC entries
  const tocByTitle = new Map<string, TocEntry>();
  for (const entry of tocEntries) {
    tocByTitle.set(entry.title.toLowerCase(), entry);
  }

  function flushSection() {
    if (currentPages.length === 0) return;

    const title = currentSection || "Introduction";
    const content = currentPages
      .map((p, i) => {
        const marker = `<!-- page:${p.pageNum} -->`;
        return i === 0 ? p.content : `\n${marker}\n\n${p.content}`;
      })
      .join("\n");

    const endPage = currentPages[currentPages.length - 1].pageNum;

    sections.push({
      slug: slugify(title),
      title,
      startPage: currentStartPage,
      endPage,
      content,
    });
  }

  for (let i = 0; i < pages.length; i++) {
    const pageNum = i + 1; // 1-indexed
    const headerSection = extractHeaderSection(pages[i], config.title, config.headerGap);
    const cleanedContent = cleanPageContent(pages[i], config.title);

    // Skip mostly-empty pages (copyright, title pages)
    if (cleanedContent.trim().length < 50 && pageNum <= 5) {
      continue;
    }

    if (headerSection && headerSection !== currentSection) {
      // New section detected
      flushSection();
      currentSection = headerSection;
      currentStartPage = pageNum;
      currentPages = [{ pageNum, content: cleanedContent }];
    } else {
      currentPages.push({ pageNum, content: cleanedContent });
    }
  }

  // Flush final section
  flushSection();

  return sections;
}

/**
 * Deduplicate section slugs by appending a counter.
 */
function deduplicateSlugs(sections: SectionChunk[]): void {
  const seen = new Map<string, number>();
  for (const section of sections) {
    const count = seen.get(section.slug) || 0;
    if (count > 0) {
      section.slug = `${section.slug}-${count + 1}`;
    }
    seen.set(section.slug.replace(/-\d+$/, ""), count + 1);
  }
}

/**
 * Process a single guide PDF.
 */
function processGuide(config: GuideConfig): void {
  console.log(`\nProcessing: ${config.title} (${config.slug})`);

  const pdfPath = join(DOCS_DIR, config.pdfFileName);
  if (!existsSync(pdfPath)) {
    console.error(`  PDF not found: ${pdfPath}`);
    return;
  }

  // Extract pages
  const pages = extractPages(pdfPath);

  // Parse TOC
  const tocEntries = parseToc(pages);

  // Build sections
  const sections = buildSections(pages, tocEntries, config);
  deduplicateSlugs(sections);

  console.log(`  Built ${sections.length} sections`);

  // Create output directory
  const outDir = join(GUIDES_OUTPUT, config.slug);
  if (existsSync(outDir)) {
    rmSync(outDir, { recursive: true });
  }
  mkdirSync(outDir, { recursive: true });

  // Write section files
  const manifestSections: ManifestSection[] = [];
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const num = String(i + 1).padStart(3, "0");
    const fileName = `${num}-${section.slug}.md`;
    const filePath = join(outDir, fileName);

    // Add front matter comment with metadata
    const header = `<!-- guide:${config.slug} section:${section.slug} pages:${section.startPage}-${section.endPage} -->\n`;
    const markdown = `${header}# ${section.title}\n\n${section.content}\n`;

    writeFileSync(filePath, markdown, "utf-8");

    manifestSections.push({
      slug: section.slug,
      title: section.title,
      startPage: section.startPage,
      endPage: section.endPage,
      file: fileName,
    });
  }

  // Write manifest
  const manifest: Manifest = {
    guideTitle: config.title,
    guideSlug: config.slug,
    pdfFileName: config.pdfFileName,
    totalPages: pages.length,
    sections: manifestSections,
  };

  writeFileSync(
    join(outDir, "_manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf-8"
  );

  console.log(`  Wrote ${manifestSections.length} section files + _manifest.json to ${outDir}`);
}

// --- Main ---
console.log("=== Processing PDF Guides into Sections ===\n");

// Ensure output directory exists
mkdirSync(GUIDES_OUTPUT, { recursive: true });

for (const config of guideConfigs) {
  processGuide(config);
}

console.log("\nDone!");
