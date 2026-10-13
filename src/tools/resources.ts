import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getModuleList, getModuleContent, searchKnowledge } from "../knowledge-loader.js";

export function register(server: McpServer) {
  server.resource("lsc://modules", "List of all LSC4CE modules with documentation", async () => {
    const modules = getModuleList();

    const moduleTable = modules
      .map((m) => `| ${m.title} | ${m.slug} | ${m.fileCount} |`)
      .join("\n");

    return {
      contents: [
        {
          uri: "lsc://modules",
          mimeType: "text/markdown",
          text: `# LSC4CE Modules

| Module | Slug | Docs |
|--------|------|------|
${moduleTable}

Use the \`get_lsc_module_docs\` tool with a slug to get detailed documentation.`,
        },
      ],
    };
  });

  // Resource: LSC Overview
  server.resource("lsc://overview", "Overview of LSC for Customer Engagement", async () => ({
    contents: [
      {
        uri: "lsc://overview",
        mimeType: "text/markdown",
        text: `# LSC for Customer Engagement (LSC4CE)

## Overview

LSC for Customer Engagement is Salesforce's industry cloud solution for pharmaceutical, biotech, and medical device companies. It helps commercial teams effectively engage with healthcare providers (HCPs) and healthcare organizations (HCOs) while maintaining regulatory compliance.

## Key Modules

### Account Management
- Provider Card (powered by ARC - Actionable Relationship Center)
- Addresses and Affiliations
- Account Ratings and Segmentation
- Business Licenses
- Data Change Requests

### Visit Management
- Visit Planning and Execution
- Visit Page Layouts
- Admin Console Configuration

### Sample Management
- Sample Limits (country-specific and custom templates)
- Sample Inventory
- Compliance tracking (PDMA)

### Territory Alignment
- Territory configuration
- Account assignments
- Alignment rules

### Activity Planning
- Account Goals
- Weighted Activity Plans
- Product-based Planning

### Intelligent Content
- Content Management
- Dynamic Content
- Presentation Settings

### Additional Capabilities
- Field Email
- Consent Management
- Next Best (Customer/Action/Message)
- Key Account Management
- Surveys
- App Alerts & Notifications

## Technical Foundation

- **OmniStudio**: FlexCards, OmniScripts, DataRaptors, Integration Procedures
- **Data Model**: Industry-specific objects extending standard Salesforce
- **Mobile**: Optimized for iPad with offline sync
- **Analytics**: CRM Analytics templates and dashboards

## Getting Help

Use the tools provided:
- \`list_lsc_modules\` - See all available documentation
- \`get_lsc_module_docs\` - Get detailed module documentation
- \`search_lsc_knowledge\` - Search for specific topics
- \`explain_lsc_concept\` - Get explanations of LSC concepts
- \`get_lsc_admin_setup\` - Get admin configuration guidance`,
      },
    ],
  }));

  // ============================================================================
  // PROMPTS
  // ============================================================================

  // Prompt: Implementation Checklist
  server.prompt(
    "lsc_implementation_checklist",
    "Generate an implementation checklist for an LSC module",
    {
      module: z
        .enum([
          "account-management",
          "visit-management",
          "sample-management",
          "territory-alignment",
          "activity-plan",
          "intelligent-content",
          "consent-management",
          "field-email",
          "full",
        ])
        .describe("The LSC module to generate a checklist for"),
    },
    async ({ module }) => {
      // Get the module documentation to include context
      const moduleContent = getModuleContent(module);

      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `Generate a detailed implementation checklist for the LSC ${module} module.

Here is the available documentation for this module:

${moduleContent || "No specific documentation available."}

Based on this documentation, create a comprehensive checklist including:
1. Prerequisites and dependencies
2. Configuration steps in order
3. Admin Console settings
4. Data requirements
5. Testing requirements
6. Go-live checklist
7. Post-implementation validation

Format as a structured checklist with clear categories and actionable items.`,
            },
          },
        ],
      };
    }
  );

  // Prompt: Troubleshooting Guide
  server.prompt(
    "lsc_troubleshoot",
    "Get help troubleshooting an LSC issue",
    {
      issue: z.string().describe("Description of the issue or error"),
      module: z.string().optional().describe("The module where the issue is occurring"),
    },
    async ({ issue, module }) => {
      let moduleContent = "";
      if (module) {
        moduleContent = getModuleContent(module) || "";
      }

      // Also search for relevant content
      const searchResults = searchKnowledge(issue);
      const relevantContent = searchResults
        .slice(0, 3)
        .map((r) => `### ${r.title}\n${r.excerpt}`)
        .join("\n\n");

      return {
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: `Help troubleshoot this LSC issue:

**Issue:** ${issue}
${module ? `**Module:** ${module}` : ""}

**Relevant Documentation:**
${moduleContent}

**Search Results:**
${relevantContent}

Based on the documentation and common LSC patterns, please:
1. Identify possible causes of this issue
2. Suggest diagnostic steps
3. Provide resolution steps
4. Mention any related configuration that might need checking`,
            },
          },
        ],
      };
    }
  );
}
