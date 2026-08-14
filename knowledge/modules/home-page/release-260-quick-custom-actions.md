# Quick & Custom Actions — Spring '26 (Release 260)

**Release:** Spring '26 — Release 260
**Session:** AFLS4CE Value Chain Training — Mar 6, 2026
**Audience:** Support engineers + admins
**Presenter:** Srikant Chonnad
**Source:** Engineering training series (deck + Gemini transcript)

## Overview

Spring '26 introduces **3 action types** for the AFLS mobile + web record pages — **Standard**, **Quick**, and **Custom** — and a special **GoTo** action pattern for Visit Engagement. The headline change: admins can now configure mobile-friendly custom actions (URL launchers, app launchers, voice utterances, LWC modals) without code, controlled by a **Dynamic Actions** toggle.

> **The cardinal rule:** For Quick + Custom actions to appear on a Lightning Record Page, the **Standard action MUST also be present** on the same record page. The system uses Standard as the "anchor" — without it, dynamic actions don't render.

## The 3 Action Types

| Type | Source | Use case |
|---|---|---|
| **Standard** | OOTB platform action (New, Edit, Clone, etc.) | Default CRUD operations |
| **Quick** | Salesforce Quick Action with custom fields | Bespoke single-record forms |
| **Custom** | NEW — admin-configurable URL / App / Utterance launcher | Open external app, run a voice command, navigate to a URL |

## Setup — The Dynamic Actions Toggle

Each Lightning Record Page has a **Dynamic Actions** setting that controls the source of action buttons:

| Toggle state | Source of actions |
|---|---|
| **OFF** (default) | Page Layout's "Salesforce Mobile and Lightning Experience Actions" section |
| **ON** | Lightning Record Page's configured Actions block |

> **Cross-cutting rule:** Once Dynamic Actions is ON, the page layout is IGNORED for actions. To migrate, copy actions from layout → record page first, then flip the toggle.

## Custom Actions — 3 Sub-Types

When creating a Custom Action, admin picks an **Action Type**:

| Action Type | Behavior | Example |
|---|---|---|
| **URL** | Launch a URL (deep link, web URL, or iOS URI scheme) | Open Slack via `slack://`, photos via `photos-redirect://` |
| **App** | Salesforce-internal action — bound to a target like "GoTo" | Visit Engagement section navigation |
| **Utterance** | Voice command into Einstein for Sales | "Log a visit" |

## Setup — Custom Action Target Types

| Target Type | Behavior |
|---|---|
| **Inline** | Action opens content inside the record page (in-context LWC modal) |
| **External** | Action opens an external app or URL via the device's URL scheme |
| **Internal** | Salesforce-internal action (e.g., GoTo to another section) |

## Setup — GoTo Actions on Visit Engagement

Spring '26 adds a structured way to "jump within a Visit" — e.g., from the visit landing to the Samples section.

### Configuration recipe
| Field | Value |
|---|---|
| Entity / Object | `SObject` |
| Action Type | `App` |
| Target Type | `Internal` |
| Action Target | `"GoTo"` |
| Target Parameters | The **API name of the section object** — e.g., `ProviderVisitRqstSample`, `ProductDisbursement`, `PresentationForum` |

### Hiding GoTo on completed visits
Use a **filter expression** on the custom action:
```
Visit.Status != 'Completed'
```

## iPad URI Schemes (Custom Action URL targets)

Spring '26 cataloged the schemes the AFLS4CE iPad app supports for Custom Action URL targets:

| Scheme | Opens |
|---|---|
| `slack://` | Slack app |
| `photos-redirect://` | Photos app |
| `calshow://` | Calendar app |
| `contacts://` | Contacts app |
| `mobilenotes://` | Notes app |
| `tel://` | Phone dialer |

## Walkthrough — Live Demo (transcript)

Presenter: Srikant Chonnad. Demo: Harshita Kagadal. Mar 6, 2026.

### Photos app launch from Visit (3-step recipe)
1. Add a **Standard Visit action** to the Lightning Record Page (Quick + Custom won't render without it)
2. **Configure the Page Layout** to include the desired actions
3. Create a **Custom Action** with `URL`, target = `photos-redirect://`
4. **Disable Dynamic Actions** on the Lightning Record Page (so Page Layout becomes the source)
5. **Generate mobile metadata cache** so iPad picks up the new action

### Other examples covered
- Utterance action on Visit ("Mark visit as completed")
- LWC quick action on Visit (open a custom modal)
- App action on Account opening Photos
- New Visit on Home Page

## Reference

- **Source deck:** Quick & Custom Actions Spring '26 — Drive slide ID `1YuIwp3yFuha7BdhF5GiyN0o592nT-Y26nZwXzgYCiFI` (16 slides)
- **Source transcript:** Gemini, Mar 6, 2026 session — doc ID `1vprQHfBDu2MiInRWks5VaRemVXVg2828`
- **Spring '26 release notes:** `knowledge/release-notes/spring-26-official.md`
- **Companion file (evergreen):** `support-engineering-quick-custom-actions-config-guide.md` — comprehensive config reference + deletion procedure
- **Related — Mobile sync:** see `mobile-metadata-cache/support-engineering-mobile-sync.md` — actions require a metadata cache regenerate to reach the device
