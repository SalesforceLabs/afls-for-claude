# Briefings (Daily Podcasts)

Briefings transforms complex account data — visit history, prescribing trends, engagement records — into concise, personalized audio briefings. Field reps listen on their iPad before each HCP/HCO visit via the AFLS Mobile app's built-in audio player.

## How It Works

1. **Scheduled flow** runs daily → converts account summaries into natural-language podcast text
2. **Mobile app** syncs data via object metadata cache → converts to audio using **Kokoro** (on-device text-to-speech model)

## Key Benefits

- Daily audio briefings generated with relevant, up-to-date insights before visits
- Persona-aware content tailored to Sales Reps, MSLs, and KAMs
- On-the-go access via built-in audio player while commuting or between visits
- Offline playback — works without network coverage
- Background playback — keep working while briefings play
- Playback persistence — pick up where you left off

## Required Permissions

Two system permissions are required. The feature shipped as **Briefings** but the underlying API names use the legacy **Stories** naming:

| UI Label (Setup) | SOQL field | XML `<name>` | Who needs it |
|---|---|---|---|
| **Manage Briefings** | `PermissionsStoriesAdmin` | `StoriesAdmin` | Admins |
| **Use Briefings** | `PermissionsStoriesUser` | `StoriesUser` | End users (reps) |

These permissions must be enabled on a **cloned custom permission set** — the base Life Sciences perm sets have them disabled by default.

## Required Editions & Licensing

Enterprise and Unlimited Editions with:
- AFLS
- AFLS for Customer Engagement
- Agentforce for AFLS
- Einstein GPT Prompt Builder
- Einstein GPT Platform Add-on
- Life Sciences Customer Engagement managed package (namespace: `lsc4ce`)

## Key Considerations

- Audio briefings available in **English only** (262 GA)
- Briefings generated only for **visits scheduled on the current day**
- Each audio briefing limited to **3,000 characters** (truncated beyond this)
- Playlist **not dynamically updated** for same-day visit changes
- No iOS native TTS fallback — Kokoro only
- Audio files automatically removed after **1 day** on device

## Documentation

- [Setup Guide](setup.md)
- [Troubleshooting](troubleshooting.md)
- [Mobile Configuration](mobile-config.md)

## Source

Salesforce Help: [Briefings](https://help.salesforce.com/s/articleView?id=ind.lsc_field_insights.htm&type=5)
