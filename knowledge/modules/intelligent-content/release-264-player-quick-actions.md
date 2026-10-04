# Streamlined In-Context Actions (Player Quick Actions) - Winter '27 (264)

> Source: Winter '27 release enablement deck, "Streamline quick actions" (marked "WIP" - work in progress). Content may change before GA. Platforms per deck: iPad and Web; face-to-face (F2F) player.

## What's New

Medical Inquiry and Survey actions are available directly from the Presentation Player's main (overflow) menu during a presentation, so the rep, MSL or KAM can respond to an HCP without leaving the presentation. It reuses the existing action configuration, permissions and workflows, and preserves attendee-based selection for group / multi-attendee interactions (the menu shows the selected attendee with the note that the action applies only to the selected attendee).

Use case: an HCP asks a detailed medical question; the rep launches a Medical Inquiry from the player for that HCP and continues the discussion.

## Admin Setup & Configuration

1. **Create two Quick Actions** (Admin Console quick actions):

| Setting | Medical Inquiry | Survey |
|---|---|---|
| Action Name | `Inquiry` | `Survey` |
| Location | Intelligent Content | Intelligent Content |
| SObject | Account | Account |

2. **Assign access** - assign each Quick Action to the appropriate permission sets and profiles of the field users.
3. No separate workflow configuration is needed; this uses the existing Intelligent Content Quick Action framework.

## End-User Flow

In the Presentation Player menu: **Inquiry** captures a Medical Inquiry; **Survey** starts or resumes a Survey.

## Related

Quick action setup in general: afls-quick-actions-configuration skill.
