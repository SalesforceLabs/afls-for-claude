export interface CitationInfo {
  label: string;
  category:
    | "Official Help"
    | "PM Enablement"
    | "Guide"
    | "Exercise"
    | "Troubleshooting";
  url?: string;
}

/**
 * Maps document slugs to citation metadata.
 * Used to attach source attribution to knowledge base responses.
 */
export const citationMap: Record<string, CitationInfo> = {
  // ── Guides ────────────────────────────────────────────────────────────
  "dev-guide": {
    label: "AFLS Developer Guide",
    category: "Guide",
  },
  "admin-guide": {
    label: "Administer AFLS",
    category: "Guide",
  },
  "mobile-setup": {
    label: "AFLS Mobile Setup and Configuration Guide",
    category: "Guide",
  },

  // ── Exercises (2 files) ─────────────────────────────────────────────
  "life-sciences-cloud-partner-enablement-hands-on-exercises-day-1-foundations":
    {
      label: "Partner Enablement Hands-On Exercises — Day 1 Foundations",
      category: "Exercise",
    },
  "life-sciences-cloud-partner-enablement-hands-on-exercises-day-2-field-sales-rep":
    {
      label: "Partner Enablement Hands-On Exercises — Day 2 Field Sales Rep",
      category: "Exercise",
    },

  // ── Troubleshooting (1 file) ────────────────────────────────────────
  "common-issues": {
    label: "Common Issues and Troubleshooting",
    category: "Troubleshooting",
  },
};

// ── PM Enablement Modules ─────────────────────────────────────────────
// Keyed by "module:slug" to avoid collisions with Official Help docs
// that share the same base slug (e.g. "account-management").
export const moduleCitationMap: Record<string, CitationInfo> = {
  // ── Account Management ────────────────────────────────────────────
  "account-management:account-management": {
    label: "Account Management",
    category: "PM Enablement",
  },
  "account-management:account-ratings-talk-track": {
    label: "Account Ratings Talk Track",
    category: "PM Enablement",
  },
  "account-management:account-search-sbc-admin-talk-track": {
    label: "Account Search & SBC Admin Talk Track",
    category: "PM Enablement",
  },
  "account-management:account-search-sbc-talk-track": {
    label: "Account Search & SBC Talk Track",
    category: "PM Enablement",
  },
  "account-management:account-summarization": {
    label: "Account Summarization",
    category: "PM Enablement",
  },
  "account-management:acct-multi-object-component-talk-track": {
    label: "Multi-Object Component Talk Track",
    category: "PM Enablement",
  },
  "account-management:addresses-talk-track": {
    label: "Addresses Talk Track",
    category: "PM Enablement",
  },
  "account-management:affiliations-talk-track": {
    label: "Affiliations Talk Track",
    category: "PM Enablement",
  },
  "account-management:business-licenses-talk-track": {
    label: "Business Licenses Talk Track",
    category: "PM Enablement",
  },
  "account-management:data-change-request-talk-track": {
    label: "Data Change Request (DCR) Talk Track",
    category: "PM Enablement",
  },
  "account-management:provider-card": {
    label: "Provider Card",
    category: "PM Enablement",
  },

  // ── Activity Plan ─────────────────────────────────────────────────
  "activity-plan:activity-plan": {
    label: "Activity Plan",
    category: "PM Enablement",
  },
  "activity-plan:activity-plan-setup-account-goals__activity-plan-setup-transcript":
    {
      label: "Activity Plan Setup — Account Goals Transcript",
      category: "PM Enablement",
    },
  "activity-plan:activity-plan-setup-account-goals-activity-plan-by-product-administration__activity-plan-by-product-administration":
    {
      label: "Activity Plan by Product Administration",
      category: "PM Enablement",
    },
  "activity-plan:activity-plan-setup-account-goals-shared-across-territories__shared-territory-goals-transcript":
    {
      label: "Shared Territory Goals Transcript",
      category: "PM Enablement",
    },
  "activity-plan:activity-plan-setup-weighted-activity-plans__weighted-activity-plan-transcript":
    {
      label: "Weighted Activity Plan Transcript",
      category: "PM Enablement",
    },
  "activity-plan:activity-plan-setup-weighted-activity-plans-activity-plan-by-product-administration__activity-plan-by-product-administration":
    {
      label: "Weighted Plan — Product Administration",
      category: "PM Enablement",
    },
  "activity-plan:admin-console__admin-console-transcript": {
    label: "Activity Plan Admin Console Transcript",
    category: "PM Enablement",
  },

  // ── Activity Timeline ─────────────────────────────────────────────
  "activity-timeline:activity-timeline": {
    label: "Activity Timeline",
    category: "PM Enablement",
  },
  "activity-timeline:activity-timeline-transcripts": {
    label: "Activity Timeline Transcripts",
    category: "PM Enablement",
  },

  // ── Agentforce ────────────────────────────────────────────────────
  "agentforce:agentforce": {
    label: "Agentforce for AFLS",
    category: "PM Enablement",
  },
  "agentforce:agentforce-for-afls-winter-26-enablement": {
    label: "Agentforce for AFLS Winter '26 Enablement",
    category: "PM Enablement",
  },

  // ── App Alerts & Notifications ────────────────────────────────────
  "app-alerts-notifications:app-alerts-notifications": {
    label: "App Alerts & Notifications",
    category: "PM Enablement",
  },
  "app-alerts-notifications:app-alert-notification-demo-talk-track": {
    label: "App Alerts Demo Talk Track",
    category: "PM Enablement",
  },
  "app-alerts-notifications:app-alerts-transcripts-admin-end-user": {
    label: "App Alerts Transcripts — Admin & End User",
    category: "PM Enablement",
  },

  // ── Calendar, TOT, Routine, My Team ───────────────────────────────
  "calendar-tot-routine-myteam:calendar-tot-routine-myteam": {
    label: "Calendar, TOT, Routine & My Team",
    category: "PM Enablement",
  },
  "calendar-tot-routine-myteam:calendar-tot-routine-myteam-transcripts": {
    label: "Calendar, TOT, Routine & My Team Transcripts",
    category: "PM Enablement",
  },

  // ── Clinical Site Management ──────────────────────────────────────
  "clinical-site-management:clinical-site-management": {
    label: "Clinical Site Management",
    category: "PM Enablement",
  },

  // ── Consent Management ────────────────────────────────────────────
  "consent-management:consent-management": {
    label: "Consent Management",
    category: "PM Enablement",
  },
  "consent-management:consent-management-demo-talk-track": {
    label: "Consent Management Demo Talk Track",
    category: "PM Enablement",
  },

  // ── Data Cloud, Singularity & TabNext Metrics ─────────────────────
  "data-cloud-singularity-and-tabnext-metrics:data-cloud-singularity-and-tabnext-metrics":
    {
      label: "Data Cloud, Singularity & TabNext Metrics",
      category: "PM Enablement",
    },
  "data-cloud-singularity-and-tabnext-metrics:data-cloud-singularity-and-tableau-next-metrics-demo":
    {
      label: "Data Cloud, Singularity & Tableau Next Metrics Demo",
      category: "PM Enablement",
    },
  "data-cloud-singularity-and-tabnext-metrics:next-best-customer-predictive-model-demo":
    {
      label: "Next Best Customer Predictive Model Demo",
      category: "PM Enablement",
    },

  // ── Field Email ───────────────────────────────────────────────────
  "field-email:field-email": {
    label: "Field Email",
    category: "PM Enablement",
  },
  "field-email:field-email-ipad-end-user-demo": {
    label: "Field Email iPad End User Demo",
    category: "PM Enablement",
  },
  "field-email:field-email-web-admin-configuration": {
    label: "Field Email Web Admin Configuration",
    category: "PM Enablement",
  },
  "field-email:field-email-web-end-user": {
    label: "Field Email Web End User",
    category: "PM Enablement",
  },

  // ── Field Sales Rep E2E Demo ──────────────────────────────────────
  "field-sales-rep-e2e-demo-flow:field-sales-rep-e2e-demo-flow": {
    label: "Field Sales Rep E2E Demo Flow",
    category: "PM Enablement",
  },
  "field-sales-rep-e2e-demo-flow:field-sales-representative-e2e-demo-transcript":
    {
      label: "Field Sales Representative E2E Demo Transcript",
      category: "PM Enablement",
    },

  // ── Generic Workflow ──────────────────────────────────────────────
  "generic-workflow:generic-workflow": {
    label: "Workflow Management",
    category: "PM Enablement",
  },
  "generic-workflow:workflow-mgmt-demo-talk-track": {
    label: "Workflow Management Demo Talk Track",
    category: "PM Enablement",
  },

  // ── Home Page ─────────────────────────────────────────────────────
  "home-page:home-page": {
    label: "Home Page",
    category: "PM Enablement",
  },
  "home-page:home-page-transcripts": {
    label: "Home Page Transcripts",
    category: "PM Enablement",
  },

  // ── Intelligent Content ───────────────────────────────────────────
  "intelligent-content:intelligent-content": {
    label: "Intelligent Content",
    category: "PM Enablement",
  },
  "intelligent-content:admin-1-talk-track-for-content-management": {
    label: "Content Management Admin Talk Track",
    category: "PM Enablement",
  },
  "intelligent-content:admin-2-talk-track-for-presentation-settings": {
    label: "Presentation Settings Admin Talk Track",
    category: "PM Enablement",
  },
  "intelligent-content:mobile-dynamic-content-talk-track": {
    label: "Mobile Dynamic Content Talk Track",
    category: "PM Enablement",
  },
  "intelligent-content:mobile-end-user-talk-track": {
    label: "Intelligent Content Mobile End User Talk Track",
    category: "PM Enablement",
  },

  // ── KAM End-to-End Demo ───────────────────────────────────────────
  "kam-end-to-end-demo:kam-end-to-end-demo": {
    label: "KAM End-to-End Demo",
    category: "PM Enablement",
  },
  "kam-end-to-end-demo:kam-end-to-end-demo-transcription": {
    label: "KAM End-to-End Demo Transcription",
    category: "PM Enablement",
  },

  // ── Key Account Management ────────────────────────────────────────
  "key-account-management:key-account-management": {
    label: "Key Account Management",
    category: "PM Enablement",
  },
  "key-account-management:kam-account-plan-web-mobile-transcription": {
    label: "KAM Account Plan Web & Mobile Transcription",
    category: "PM Enablement",
  },

  // ── Lists & Filters ──────────────────────────────────────────────
  "lists-filters:lists-filters": {
    label: "Lists & Filters",
    category: "PM Enablement",
  },
  "lists-filters:lists-filters-transcripts": {
    label: "Lists & Filters Transcripts",
    category: "PM Enablement",
  },

  // ── AFLS Apps ──────────────────────────────────────────────────────
  "afls-apps:afls-apps": {
    label: "AFLS Apps",
    category: "PM Enablement",
  },
  "afls-apps:demo-script-afls-apps": {
    label: "AFLS Apps Demo Script",
    category: "PM Enablement",
  },

  // ── Medical Inquiries ─────────────────────────────────────────────
  "medical-inquiries:medical-inquiries": {
    label: "Medical Inquiries",
    category: "PM Enablement",
  },
  "medical-inquiries:medical-inquiries-configuration-guide": {
    label: "Medical Inquiries Configuration Guide",
    category: "PM Enablement",
  },

  // ── Mobile Metadata Cache ─────────────────────────────────────────
  "mobile-metadata-cache:mobile-metadata-cache": {
    label: "Mobile Metadata Cache",
    category: "PM Enablement",
  },
  "mobile-metadata-cache:programmatic-generation": {
    label: "Mobile Metadata Cache Programmatic Generation",
    category: "PM Enablement",
  },

  // ── Next Best (NBC, NBA, NBM) ─────────────────────────────────────
  "next-best-nbc-nba-nbm:next-best-nbc-nba-nbm": {
    label: "Next Best (NBC, NBA, NBM)",
    category: "PM Enablement",
  },
  "next-best-nbc-nba-nbm:next-best-transcripts": {
    label: "Next Best Transcripts",
    category: "PM Enablement",
  },

  // ── Product Management ────────────────────────────────────────────
  "product-management:product-management": {
    label: "Product Management",
    category: "PM Enablement",
  },
  "product-management:product-management-configuration-guide": {
    label: "Product Management Configuration Guide",
    category: "PM Enablement",
  },
  "product-management:product-management-demo-transcript": {
    label: "Product Management Demo Transcript",
    category: "PM Enablement",
  },

  // ── Remote Engagement ─────────────────────────────────────────────
  "remote-engagement:remote-engagement": {
    label: "Remote Engagement",
    category: "PM Enablement",
  },
  "remote-engagement:remote-engagement-configuration-guide": {
    label: "Remote Engagement Configuration Guide",
    category: "PM Enablement",
  },

  // ── Sample Management ─────────────────────────────────────────────
  "sample-management:sample-management": {
    label: "Sample Management",
    category: "PM Enablement",
  },
  "sample-management:sample-inventory-transcriptions": {
    label: "Sample Inventory Transcriptions",
    category: "PM Enablement",
  },
  "sample-management:sample-limits-admin-setup-config-demo-transcript": {
    label: "Sample Limits Admin Setup & Config Demo Transcript",
    category: "PM Enablement",
  },

  // ── Segmentation ──────────────────────────────────────────────────
  "segmentation-admin-only:segmentation-admin-only": {
    label: "Segmentation (Admin Only)",
    category: "PM Enablement",
  },
  "segmentation-admin-only:segmentation-transcript": {
    label: "Segmentation Transcript",
    category: "PM Enablement",
  },

  // ── Surveys ───────────────────────────────────────────────────────
  "surveys:surveys": {
    label: "Surveys",
    category: "PM Enablement",
  },
  "surveys:surveys-configuration-guide": {
    label: "Surveys Configuration Guide",
    category: "PM Enablement",
  },
  "surveys:surveys-talk-track": {
    label: "Surveys Talk Track",
    category: "PM Enablement",
  },

  // ── Territory Alignment ───────────────────────────────────────────
  "territory-alignment:territory-alignment": {
    label: "Territory Alignment",
    category: "PM Enablement",
  },
  "territory-alignment:territory-alignment-admin-transcript": {
    label: "Territory Alignment Admin Transcript",
    category: "PM Enablement",
  },
  "territory-alignment:territory-alignment-configuration-guide": {
    label: "Territory Alignment Configuration Guide",
    category: "PM Enablement",
  },

  // ── User Management ───────────────────────────────────────────────
  "user-management:user-management": {
    label: "User Management",
    category: "PM Enablement",
  },
  "user-management:user-management-setup-guide": {
    label: "User Management Setup Guide",
    category: "PM Enablement",
  },

  // ── Visit Management ──────────────────────────────────────────────
  "visit-management:visit-management": {
    label: "Visit Management",
    category: "PM Enablement",
  },
  "visit-management:258-lsc4ce-visit-mgmt-admin-console-transcript": {
    label: "Visit Management Admin Console Transcript",
    category: "PM Enablement",
  },
  "visit-management:258-lsc4ce-visit-mgmt-release-enablement-demo-script": {
    label: "Visit Management Release Enablement Demo Script",
    category: "PM Enablement",
  },
  "visit-management:258-lsc4ce-visit-mgmt-test-cases": {
    label: "Visit Management Test Cases",
    category: "PM Enablement",
  },
  "visit-management:258-lsc4ce-visit-mgmt-visit-page-layout-configuration-transcript":
    {
      label: "Visit Management Page Layout Configuration Transcript",
      category: "PM Enablement",
    },
  "visit-management:258-lsc4ce-visit-mgmt-web-release-enablement-demo-transcript":
    {
      label: "Visit Management Web Release Enablement Demo Transcript",
      category: "PM Enablement",
    },
};

/**
 * Look up citation info for a document slug.
 *
 * When moduleName is provided, first checks the module-specific citation map
 * using "module:slug" key format. This avoids collisions where a slug like
 * "account-management" exists in both Official Help and PM Enablement.
 *
 * Falls back to the base citationMap for help docs, guides, exercises, etc.
 */
export function getCitation(
  slug: string,
  moduleName?: string,
): CitationInfo | undefined {
  if (moduleName) {
    const moduleKey = `${moduleName}:${slug}`;
    const moduleInfo = moduleCitationMap[moduleKey];
    if (moduleInfo) return moduleInfo;
  }
  return citationMap[slug];
}
