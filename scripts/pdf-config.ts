/**
 * Configuration for PDF guides to process into section-level chunks.
 * Each entry maps a guide slug to its PDF file and metadata.
 */
export interface GuideConfig {
  slug: string;
  pdfFileName: string;
  title: string;
  /** Minimum spaces between left/right header text to detect the dual-column header */
  headerGap: number;
}

export const guideConfigs: GuideConfig[] = [
  {
    slug: "admin-guide",
    pdfFileName: "administer_life_sciences_cloud_3-3-2026.pdf",
    title: "Administer AFLS",
    headerGap: 8,
  },
  {
    slug: "dev-guide",
    pdfFileName: "life_sciences_dev_guide.pdf",
    title: "AFLS Developer Guide",
    headerGap: 8,
  },
];
