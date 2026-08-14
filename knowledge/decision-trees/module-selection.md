# Module Selection Decision Tree

## "Which AFLS modules do I need?"

### Start: What is your primary use case?

#### A. Field Force Automation (reps visiting HCPs)
**Core modules:**
- Account Management (always)
- User Management (always)
- Territory Alignment (always)
- Visit Management

**Add based on needs:**
- Product Management → if detailing products during visits
- Sample Management → if distributing pharmaceutical samples
- Activity Plan → if tracking call goals and targets
- Lists & Filters → if reps need filtered account lists

**Mobile required?**
- Yes → Add DB Schema + Mobile Metadata Cache configuration
- No → Web-only deployment

#### B. Key Account Management (strategic account planning)
**Core modules:**
- Account Management
- User Management
- Territory Alignment
- Key Account Management

**Add based on needs:**
- Activity Plan → for account-level goals
- Lists & Filters → for account segmentation
- Visit Management → if KAMs also make field visits

#### C. Digital Engagement (remote/email/content)
**Core modules:**
- Account Management
- User Management
- Consent Management (required for compliance)

**Add based on channels:**
- Field Email → for email communications
- Intelligent Content → for CLM/presentation distribution
- Remote Engagement → for video visits
- Surveys → for HCP feedback collection

#### D. AI-Driven Engagement (next best actions)
**Core modules:**
- Account Management
- User Management
- Territory Alignment
- Next Best (NBC/NBA/NBM)

**Add based on needs:**
- Data Cloud/Singularity → for predictive scoring
- Agentforce → for AI agent capabilities
- Activity Plan → as data source for scoring

#### E. Full Implementation (all of the above)
**Recommended sequencing:**
1. Foundation: User Management → Territory Alignment → Account Management
2. Core: Visit Management → Sample Management → Product Management
3. Planning: Activity Plan → Lists & Filters
4. Digital: Field Email → Intelligent Content → Consent Management
5. Advanced: Next Best → Key Account Management → Agentforce
6. Mobile: DB Schema → Mobile Metadata Cache → Deployment

## Common Combinations

| Scenario | Modules |
|----------|---------|
| Basic Field Force | Account + Territory + Visit + User |
| Field Force + Samples | Above + Sample + Product |
| Field Force + Goals | Above + Activity Plan |
| Full Field Force | All core + Activity Plan + Product + Sample + Lists |
| KAM Only | Account + Territory + KAM + User |
| Digital Only | Account + Field Email + Content + Consent + User |
| AI-Enhanced | Full Field Force + Next Best + Data Cloud + Agentforce |
