---
description: Audit AFLS mobile configuration to identify misconfigurations
arguments: "[group]"
---

# AFLS Configuration Audit

Run a configuration audit against the connected Salesforce org to identify issues.

## Arguments

- `group` (optional): The validation group to run. If not specified, runs a full mobile audit.

## Available Groups

| Group | Description |
|-------|-------------|
| `mobile-login-check` | Run when users cannot log into the mobile app |
| `pre-deployment` | Run before deploying mobile app to users |
| `sync-troubleshooting` | Run when mobile sync is not working |
| `full-mobile-audit` | Comprehensive check of all mobile configuration |

## Instructions

1. First, check if the org is connected by calling `check_afls_setup`
2. If an org is connected, run the audit using `audit_mobile_config` tool
3. If a group argument was provided (e.g., `/afls:audit mobile-login-check`), use that group
4. Otherwise, default to `full-mobile-audit`
5. Present the audit results clearly, highlighting any errors or warnings
6. For each failed check, explain the issue and provide the resolution steps

## Example Usage

User: `/afls:audit`
→ Run full mobile audit

User: `/afls:audit mobile-login-check`
→ Run only login-related checks

User: `/afls:audit pre-deployment`
→ Run pre-deployment validation checks

## Output Format

The audit report should include:
1. Summary (total checks, passed, failed, errors, warnings)
2. Overall status (PASSED, PASSED WITH WARNINGS, or FAILED)
3. Details of any failed checks with resolution steps
4. List of passed checks (collapsed/summarized)
