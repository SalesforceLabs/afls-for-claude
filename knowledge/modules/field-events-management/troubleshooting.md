# Field Events Management — Troubleshooting

## "We couldn't add the participant to the event either because the participant type and role aren't mapped for this event type or because the mapping record isn't active"

**Where it shows up:** On a `MngEvent`'s Attendees tab, specifically on the **Non-Profiled Attendees** and/or **Write-Ins** cards. Unlike a normal validation toast, this is load-bearing — the card never renders its **Update / + Add** button at all, so the participant category is completely unusable, not just showing a warning. Experts, Attendees, and Colleagues are typically unaffected.

**Do NOT assume this is just an inactive `EventMgmtPtcpTypeRoleMap` row.** In practice the mapping row usually already exists and is already `IsActive = true` — that's a red herring. The real defect is one level up, on the **role** the mapping row points to.

### Root cause

`EventMgmtParticipantRole` has two picklist fields that look redundant but aren't:

- **`Role`** — a normal (non-restricted-looking, but actually still restricted) picklist that *does* include `NonProfiledAttendee` and `WriteInAttendee` as valid values.
- **`StandardRole`** — a **restricted** picklist that does **not** include `NonProfiledAttendee` or `WriteInAttendee`. Its full value set (verified on Summer '26 / API v66.0) is: `Organizer, Coorganizer, Coordinator, Contributor, Approver, HostOrganizer, HostSpeaker, SatelliteOrganizer, Attendee, Expert, Other`.

Because no valid `StandardRole` value exists for these two categories, orgs frequently never end up creating a dedicated `EventMgmtParticipantRole` record for them at all. Instead, whoever configured `EventMgmtPtcpTypeRoleMap` reused the plain **Attendee** role (`StandardRole = Attendee`) for the `NonProfiledAttendee` and `WriteInAttendee` type mappings. The platform can't resolve a Non-Profiled Attendee / Write-In add action against a role that isn't actually typed as that role, so it refuses to render the add action and surfaces the generic "aren't mapped ... mapping record isn't active" error — even though, from a naive `EventMgmtPtcpTypeRoleMap.IsActive` check, everything looks fine.

### Diagnose

1. Confirm the symptom is really this bug and not a genuinely missing/inactive mapping row:
   ```sql
   SELECT Id, Name, MngEventTypeId, EventMgmtParticipantTypeId, EventMgmtParticipantRoleId, IsActive
   FROM EventMgmtPtcpTypeRoleMap
   WHERE MngEventTypeId = '<the event's MngEventTypeId>'
   ```
   If you see active rows for `EventMgmtParticipantTypeId` = the org's "NonProfiled"/"WriteIn" `EventMgmtParticipantType` records, don't stop here — check what role they point to next.

2. Look up the roles those mapping rows reference:
   ```sql
   SELECT Id, Name, Role, StandardRole FROM EventMgmtParticipantRole
   ```
   If the `EventMgmtParticipantRoleId` on the NonProfiledAttendee/WriteInAttendee mapping rows resolves to a record with `Role = Attendee` (i.e. the same role used for the plain Attendee mapping) rather than `Role = NonProfiledAttendee` / `Role = WriteInAttendee`, that confirms this bug.

3. Confirm no correctly-typed role record exists at all — this is usually the case:
   ```sql
   SELECT Id, Name, Role, StandardRole FROM EventMgmtParticipantRole
   WHERE Role IN ('NonProfiledAttendee', 'WriteInAttendee')
   ```
   Zero rows = confirmed.

4. `describe_sobject` does not surface picklist values. To see the actual `StandardRole` value set (needed before picking a fallback value in the fix below), hit the REST describe endpoint directly:
   ```bash
   sf api request rest "/services/data/v66.0/sobjects/EventMgmtParticipantRole/describe" \
     --target-org <org> --stream-to-file /tmp/role_describe.json
   ```
   then inspect `fields[].picklistValues` for `Role` and `StandardRole`.

### Fix

1. Create one dedicated `EventMgmtParticipantRole` record per missing category. Since `StandardRole` has no matching value, use `Other`:
   ```
   create_record EventMgmtParticipantRole
     Name: "AFLS NonProfiled Attendee Role"
     Role: "NonProfiledAttendee"
     StandardRole: "Other"

   create_record EventMgmtParticipantRole
     Name: "AFLS WriteIn Attendee Role"
     Role: "WriteInAttendee"
     StandardRole: "Other"
   ```

2. Repoint **every** existing `EventMgmtPtcpTypeRoleMap` row for the NonProfiledAttendee/WriteInAttendee `EventMgmtParticipantType` to the new role (there is typically one row per `MngEventType`, so do this for all of them, not just the event type you're debugging — the misconfiguration is almost always org-wide, not per-event-type):
   ```sql
   SELECT Id, Name, MngEventTypeId, EventMgmtParticipantTypeId
   FROM EventMgmtPtcpTypeRoleMap
   WHERE EventMgmtParticipantTypeId IN ('<NonProfiled type Id>', '<WriteIn type Id>')
   ```
   Then `bulk_update_records` on `EventMgmtPtcpTypeRoleMap`, setting `EventMgmtParticipantRoleId` to the matching new role Id for each row (NonProfiled rows → the NonProfiled role, WriteIn rows → the WriteIn role). Leave `IsActive` alone — it was already `true`.

3. Verify by reloading the event's Attendees tab: the error text should be gone and the card should show its normal **+ Non-Profiled Attendee** / **+ Write-Ins** action. As a full end-to-end check, add a participant through that action and confirm the new `MngEventParticipant` record's `EventMgmtPtcpTypeRoleMapId` resolves to the row you just fixed:
   ```sql
   SELECT Id, Name, EventMgmtPtcpTypeRoleMapId, EventMgmtParticipantTypeId, EventMgmtParticipantRoleId
   FROM MngEventParticipant
   WHERE Id = '<new participant Id>'
   ```

### Don't chase these dead ends

- **Don't just flip `IsActive` on the existing mapping row.** It's usually already `true` — the row points at the *wrong role entirely*, which `IsActive` can't fix.
- **Don't try to set `StandardRole` to `NonProfiledAttendee`/`WriteInAttendee`.** It's a restricted picklist without those values; `create_record`/`update_record` will fail with "bad value for restricted picklist field." Use `Other`.
- **Don't assume this is a permission/sharing issue.** The mapping rows in question are typically owned by the same user as the working Expert/Attendee/Colleague mappings — sharing is not the differentiator.
