# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-03-02

### Added
- **Modular architecture:** Refactored 8,491-line `src/index.ts` into 18 focused tool modules in `src/tools/`
- **Health check tools:** `health_check` and `get_org_status` for comprehensive org assessment
- **Config export/import:** `export_config` and `import_config` for org-to-org configuration migration
- **Release notes:** `get_release_notes` tool with Spring '26 and Winter '26 content
- **Anonymous Apex:** `run_apex` tool for executing Apex code against the target org
- **Bulk operations:** `bulk_create_records` and `bulk_update_records` for batch data loading
- **Metadata tools:** `deploy_metadata` and `retrieve_metadata` wrapping SF CLI commands
- **New commands:** `/afls:health-check`, `/afls:release-notes`, `/afls:export-config`, `/afls:import-config`, `/afls:status`, `/afls:diff-orgs`
- **New skills:** `afls-health-check`, `afls-data-migration`, `afls-integration-patterns`
- **Knowledge expansion:** Comprehensive docs for territory alignment, surveys, product management, medical inquiries, remote engagement
- **CI/CD:** GitHub Actions workflows for CI (build + test) and release
- **Dev configs:** ESLint flat config, Prettier config
- **Contributor docs:** CONTRIBUTING.md with setup, workflow, and extension guides

### Fixed
- 6 failing tests (missing `commands/diff-orgs.md`, stale `open_db_schema_wizard` references)
- README.md counts and planned-vs-implemented command drift
- Snapshot consistency after tool registration changes

### Changed
- `src/index.ts` reduced from 8,491 lines to ~85 lines (registration-only entry point)
- Tool count increased from 58 to 68
- Test count increased from 456 to 471
- Knowledge modules: territory-alignment (6→120 lines), surveys (8→100 lines), product-management (36→140 lines), medical-inquiries (7→110 lines), remote-engagement (7→100 lines)

## [0.1.0] - 2026-02-15

### Added
- Initial release with 58 tools, 26 skills, 17 commands
- 151 validation rules across 19 rule files
- 456 tests
- Knowledge base covering 28 AFLS modules
- MCP server with Salesforce org integration
