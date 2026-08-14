# Generic Workflow

Generic Workflows is a configuration-driven system that controls what users can do with a record based on its current stage / status. It governs CRUD permissions (Create, Edit, Delete) and available actions at each stage — all without code.

## Key Concepts

- **8-entity data model** — `LifeSciStageObject` → `LifeSciStagePath` → `LifeSciStageValue` → `LifeSciStageOperation` (with optional `LifeSciStageOperationCondn` and `LifeSciStageOperationAction`) plus reusable `LifeSciStageAction` and `LifeScienceCustomScript` (Validation / Checklist)
- **Two-layer CRUD check** — Standard Salesforce CRUD + matching `LifeSciStageOperation` must BOTH allow the action; the `StagePathPermissionsHandler` trigger enforces the workflow side on save
- **Conditions + priority** — Multiple operations per stage with different conditions; lowest Priority wins (no conditions = always matches, use as fallback)
- **Multi-level operations** — Parent operation can have child `LifeSciStageOperation` records to gate CRUD on related child objects
- **Only one path active** per object + record type combo

## Documentation Files

- [workflow-mgmt-demo-talk-track](./workflow-mgmt-demo-talk-track.md)

## Support Engineering Training (AFLS4CE Value Chain)

- [support-engineering-generic-workflow](./support-engineering-generic-workflow.md) — May 5, 2026 session. Full 8-entity data model with ASCII tree, 6-step admin config, runtime execution order (page load + action click), the critical two-layer CRUD check pattern, conditions / priority resolution worked example, multi-level child operations setup, 7 troubleshooting patterns.
