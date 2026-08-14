# Store Check (PILOT in Spring '26)

Store Check is part of the larger Order Management module. Released as **Pilot in 260**.

---

## Data Setup

Data setup is a very important aspect of the store check. Once the right data is set up in the right entities, the store check becomes ready for execution.

### 1. Create Accounts (Stores)
Account is considered as a store in store check context. Create business accounts that represent stores/pharmacies.

### 2. Create Products
Using standard Product2 entity. These are the same products used during store check for checking availability or validating display/placement. Standard product creation process.

### 3. Define Assortments
Assortment is a curated list of products sold through the pharmacy. 
- Click New, provide name, description, start/end date
- **User's Type: select "Store Check"** so the assortment is considered for store check processes
- Products added to assortment become "assortment products"

### 4. Create Assortment Products
Associate products with assortments via the Assortment record > Related > Assortment Products section. Can define if product is required (shows as priority in store check execution) and start/end dates.

### 5. Create Store Assortments
Associate assortments with stores. Go to Assortment record > Store Assortment section > Add. Select the account (store). This applies the assortment products to the store.

### 6. Create Assessment Task Definitions
High-level tasks available during store check (e.g., Inventory Check, POS, Aisle Task, Primary Display, Secondary Display). 
- Type options: Planogram Check, Inventory Check
- Provide name and description

### 7. Create Assessment Indicator Definitions (KPIs)
What specific KPIs need to be captured during each task.
- **Indicator field types:** Number, Boolean, Percentage, Picklist, and more
- **Comparison rules:** Used for generating anomalies during real-time execution
- **Important:** Indicator field type is NOT editable after creation

### 8. Define Assessment Indicator Defined Values
For Picklist-type indicators, define the target/expected values directly on the indicator record.

### 9. Create Retail Store KPIs
Associates specific products with KPIs and stores. Includes:
- Assessment Indicator Definition
- KPI Type
- Effective date
- Custom Context: select assortment product
- Target value (number, boolean, text, price, date/time)

### 10. Create Assessment Indicator Values
Association between indicator defined values and assortment products via Retail Store KPI.

### 11. Create Action Plan Template
Combines all tasks. Type: Assessment Execution. Target Object: Visit.
- Add assessment task definitions with display order (left to right)
- Mark tasks as required or not required
- **Publish the template** (mandatory for it to take effect)

### 12. Create Action Plan Template Assignment
Assign the action plan template to stores via Store Assortment association. This makes all tasks and KPIs applicable to the store's assortments and products.

---

## Admin Configuration

### Quick Action for Store Check
- Visit entity > Buttons, Links, and Actions > New Action
- Select Lightning Component
- **Label must be exactly "Store Check"**

### Page Layout
- Create a new page layout for store check
- Place the Quick Action on the page layout (Mobile & Lightning Actions)
- Assign to the appropriate record type

### Lightning Web Component
Create the store check LWC following standard process (documentation provided in deck Resources).

### Action Plan Flexi Page
- Action Plan entity > Lightning Record Pages > New
- Create tabs for each task (e.g., Inventory Check, Aisle, POS)
- Drag the store check LWC into each tab
- Set the Assessment Task Definition Name (must match exactly)
- Activate the page

### Settings Configuration (via Script)
Use provided scripts to create/update store check settings:
- **Section 1:** General settings (profile ID, action plan flexi page, upload image flag)
- **Section 3:** Task settings (KPI columns configuration per tab)
- Run scripts in Developer Console > Execute Anonymous

### Final Steps
- Run metadata cache
- Create object metadata cache
- Store check is ready for execution

---

## End User Experience (iPad)

Persona: Ivan Castro, Pharmacy Representative

1. Open AFLS app, view assigned visits
2. Navigate to store visit, tap Quick Action > Store Check
3. Pre-populated details: pharmacy name, address, tasks (Inventory Check, Aisle, POS), KPIs per task
4. **Priority filter:** Toggle to show only priority products from assortments
5. Capture data per product:
   - Enter KPI values (stock count, level, facing, etc.)
   - Take/upload photos
   - Annotate images with indicators
   - Mark "Stock Verified" checkbox when done
   - Toggle "Out of Stock" for missing products (grays out row)
6. Use **search** to find specific products in long lists
7. Navigate between tabs (Inventory Check → Aisle → POS) — each has different KPIs
8. Save and close when complete

**Key features:** Real-time anomaly detection (based on comparison rules), priority product filtering, search, photo capture with annotation, out-of-stock toggle.
