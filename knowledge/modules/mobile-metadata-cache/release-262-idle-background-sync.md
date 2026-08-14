# Idle Time Background Sync (Summer '26)

## Overview

Idle Time Background Sync keeps field reps productive from the moment they start their day by running a full data and metadata sync automatically when the device is idle overnight. This eliminates manual sync delays and ensures reps always start their day with fresh data.

## How It Works

- Uses iOS background processing features to run a full sync periodically (e.g., nightly ~2:00 AM local time)
- Triggers when device is idle AND connected to internet
- Runs silently in the background — no user interaction required
- Rep wakes up, opens the app → already fully synced

## Admin Configuration

**One setting only:**
1. Go to **Admin Console** → Mobile tile
2. Check the **"Idle Time Background Sync"** checkbox
3. Save

That's it — one checkbox unlocks nightly background syncing for the entire org.

## End User Experience

Completely worry-free:
- Plug in iPad at night (required for iOS to allow background processing)
- If network available and resources free → iOS triggers background sync
- Rep opens app next morning — already synced

## FAQ

**Does the iPad need to be plugged in?**
Yes. If not plugged in, iOS may not launch background processes to preserve battery.

**How do I know if background sync happened?**
End users won't see it (runs silently). Administrators can verify in Admin Console → Sync → Transactions.
