# Enhanced Next Best Customer - Spring '26 Release Enablement

## Admin Setup & Configuration

### Step 1: Design the Next Best Customer Card

In Spring '26, NBC introduces a **more intuitive card-based layout** with configurable information display, powered by an actionable relationship center (ARC).

- Navigate to Setup > **Actionable Relationship Center**
- Use the **out-of-the-box NBC card template** as a starting point
- Add or modify **source objects** in the graph view (e.g., activity plan related objects)
- Switch to **Card View** to configure the rendered layout

**Four major layout enhancements:**
1. **Multiple elements in the same row** — each row is divided into 12 columns, control horizontal space per element
2. **Vertical or horizontal alignment** for Item Group elements
3. **Vertical alignment control** (top, center, bottom) when combining elements
4. **Font-level customization** — increase font size, apply bold per item

These enhancements are reusable for Provider Cards. Keep NBC and Provider Card configurations separate.

### Step 2: Place the NBC Component on the Home Page

- Open **Life Sciences Commercial Home Page** in Lightning App Builder
- Drag and drop the **Life Sciences Next Best Customer** component
- Select the NBC card template
- Define how many cards to display (default: 10, range: 5-10)
- If you have the old NBC list view component, remove it and replace with the new one

### Step 3: Refine the NBC Experience

In **Admin Console > Next Best Customer**:
- **Sort by Distance** with threshold setting — prevents low-value accounts from surfacing just because they're nearby
- **Score Explainability JSON** — enable Salesforce chart rendering
- **Quick Actions** in rationale popup — configure via Custom and Quick Action Administration

### Step 4: Power NBC with Data

Spring '26 continues the **BYOM (Bring Your Own Model)** approach — no out-of-the-box predictive model. Use Data Cloud with Einstein Studio or bring your own model.

**Enhanced JSON structure for Score Explainability Info:**
- **Category** — grouping/title (supports localization with braces)
- **Score** — breakdown score (optional)
- **Reasons** — detailed explanations (optional)
- **Charts** — Salesforce charts for visualization (optional, max 2 per category)
- `showRefreshButton: true` to include refresh action

Share the TerritoryAccountScore record with users.

---

## Mobile End User Experience

### Card-Based Layout
- Top recommended accounts displayed as swipeable cards on Home Page
- Each card surfaces: provider type, primary address, last visit info, territory target indicator, activity plan progress, insight summary
- Data refresh timestamp visible at the top

### Sort By Distance
- Dynamically refreshes recommendations factoring both distance and account priority
- Useful for last-minute cancellations to find high-value nearby alternatives

### Recommendation Rationale View
- Tap card to open rationale
- **Score history chart** at the top
- **Weighted factors** ranked by impact with contribution percentages
- Expandable metrics with detailed explanations and charts
- Direct actions: schedule visit, send email, log medical inquiry
- Jump to full account profile

### Accessible Rationale Entry Points
- NBC cards on Home Page
- Account map (Quick Action)
- Multiple planning touchpoints

---

## Web End User Experience

Same card-based layout with swipeable cards, configurable attributes, and recommendation rationale popup accessible by tapping the NBC card. Includes weighted factor breakdown and account profile navigation.
