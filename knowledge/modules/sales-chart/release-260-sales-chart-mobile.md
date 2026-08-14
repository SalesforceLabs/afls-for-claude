# Sales Chart - Mobile (Spring '26 / 260)

## End User Experience (iPad)

| Time | Action/Description |
|------|-------------------|
| 00:00 | App opens to the Home tab, showing a Sales Chart for the DIABETES market. Line graph compares Cordin 10mg and Immunexis DTP 10mg sales from May 2022 to May 2024. |
| 00:21 | User scrolls down to reveal a second Sales Chart for Autoimmune Disorders, comparing Cordin Tote Bag and Immunexis Tote Bag. |
| 00:22 | Up Next calendar/schedule panel slides up from the bottom, showing appointments alongside a map view. |
| 00:32 | User clicks the Market dropdown. Options include: Autoimmune Disorders, Cortisone Acetate, Diabetes, Neurological Disorders, Oncology Market. |
| 00:36 | Market switched to Autoimmune Disorders. Chart updates to show five products. |
| 00:51 | Toggle Table View — line graph replaced by data table with monthly sales figures. |
| 00:54 | Toggle Area Chart — data displayed as overlapping area graph. |
| 00:56 | Toggle Bar Chart — sales displayed as grouped vertical bars per month. |
| 00:58 | Toggle back to Line Graph view. |
| 01:03 | User clicks Measurement dropdown, selects "Measure02 Total". Chart adjusts to new metric. |
| 01:54 | Visualization style cycling: Bar Chart → Wave/Spline Chart → Table View. |

---

## Admin Configuration (Delta Changes in 260)

The sales chart component uses data from DMOs in Data Cloud. Two DMOs are defined: one for prescription data and one for drug distribution data.

### New in Spring '26:

**1. Data Space API Name**
- Previously only supported "default" data space
- Now compliant with DC1 guidelines — can specify any data space API name
- Data only from that specific data space will be used

**2. Alignment Type**
- Previously supported only Account to Territory
- Now also supports **BRIC to Territory** alignment type (if DMO data is structured for it)

### Configuration Steps:

1. Drag the Sales Chart component onto the Home Page (Lightning App Builder)
2. Configure:
   - **Format:** Chart and Table both, Chart only, or Table only
   - **Data Type:** Drug Distribution Data or Prescription Data
   - **Data Space API Name:** Specify the data space (new in 260)
   - **Alignment Type:** Account to Territory or BRIC to Territory (new in 260)
   - **Measures and Filters:** Select which metrics to display

The same component can be dragged multiple times and configured differently (e.g., one for distribution data, one for prescription data, with different alignment types).
