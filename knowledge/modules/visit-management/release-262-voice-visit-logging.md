## Voice-Based Visit Logging using Visit Agent (Summer '26 - PILOT)

Presenter: Nilotpal Paul, AFLS

This feature allows life sciences field reps to capture visit details using voice, powered by the Visit Agent within Agentforce.

### Entry Point

Unified entry point using the Agentforce floating action button. A toggle allows switching between Visit Agent and other Agentforce agents.

### Workflow

1. **Select account** — User chooses from accounts in the org to avoid disambiguation
2. **Voice dictation** — Use the microphone to dictate the visit details
3. **AI processing** — System transcribes the voice input and converts it into a structured visit record
4. **Review** — Rep reviews the auto-populated fields:
   - Account (correctly picked up)
   - Content/Presentation used
   - Product discussed
   - Message/talking points
   - HCP reaction
5. **Submit or Save** — Rep can submit immediately or save for later

### Example Dictation

"Met with Dr. Singha today to introduce Cordum for his moderate to severe autoimmune patients. We utilized the Cordum coverage presentation to walk through the latest clinical data. I led with the first efficacy message highlighting that Cordum delivers rapid and sustained symptom relief, achieving up to a 60% improvement in joint pain and swelling by week 12. Singha was particularly impressed by the week 12 velocity."

### What the System Captures

From the above dictation, the Visit Agent correctly identifies:
- **Account:** Dr. Singha
- **Content:** Cordum coverage presentation
- **Product:** Cordum
- **Message:** "delivers rapid and sustained symptom relief"
- **HCP Reaction:** impressed by week 12 velocity

### Key Benefits

- Saves significant time for field reps
- Ensures right insights are captured without manual data entry
- Works offline (on-device RAG maps spoken content to visit fields)
- Supports sequential visit logging — rep can immediately move to next visit
- Transforms post-visit documentation into hands-free, conversational experience

## Admin Setup (After Pilot Enabled in Org)

1. **Enable Einstein**
2. **Enable Agentforce**
3. **Create an Agentforce Employee Agent and activate it**
4. **Grant access to users** via Profile or Permission Sets
5. **Generate Metadata Cache**

**Requires:** Agentforce Add-on SKU

## End User Prerequisites

1. **Turn on Apple Intelligence** (on iPad)
2. **Download the Speech to Text Model** (happens first time feature is used)
3. **Automatic Speech to Text Model initialization** (first use)

## Pilot Limitations

- English only
- Notes NOT retained / NOT mapped to text fields
- Compliance checks NOT supported in Pilot
- Max ~8 products per territory for priming
- Available in customer sandboxes for customers who signed up for the Pilot program
