## Briefings (Daily Podcasts) - Summer '26 Demo

Presenter: Saurabh Bansal, Product Manager, AFLS

### Overview

Briefings (AKA Daily Podcast) is an AI-powered audio briefing capability available within the AFLS iPad application. It transforms complex account data such as visit history, prescribing trends into personalized, concise audio summaries that reps can listen to on their iPads before each HCP or HCO visit.

### Key Technical Details

- Generated daily on the server side
- Converted into audio summaries on-device powered via text-to-speech engines such as Kokoro
- Available offline — no cloud dependency
- Full playback persistence supported (pause/resume across app sessions)

### User Experience

**Persona:** Walter, a field representative for Makana Pharma

1. Walter wakes up, checks his calendar — 3 visits scheduled
2. Instead of spending 15-20 minutes scrolling through CRM records, clicks the **Briefings icon** (available globally adjacent to notifications)
3. **Mini player view** opens showing:
   - Title: "Daily Briefing for [date]"
   - Account name for first visit
   - Standard playback controls
4. Tap mini player to expand to **full player view**:
   - All tracks arranged in calendar order
   - Standard playback controls (play, pause, skip)

### Player Features

- **Mini player** and **full player** views (both built in-house for AFLS iPad)
- Tracks arranged in visit calendar order
- Background playback — hide player and continue working in app
- Animated wave icon indicates audio is playing
- Offline availability — no internet required
- Full persistence — resume from exact pause point even after closing app
- Reset playlist/track duration
- Switch between tracks freely

### Content Example

"Here's a quick update on the recent activity for Meridian Health Systems. Meridian Health Systems continues to maintain several key accreditations, including active status with the Joint Commission for Hospital Accreditation, ISO 9001:2015, and ISO 14001:2015 certifications and Magnet Recognition Program designation..."
