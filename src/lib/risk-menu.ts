import {
  CloudSun,
  FileSearch,
  Gauge,
  Landmark,
  LayoutDashboard,
  ListChecks,
  Megaphone,
  Scale,
  Shield,
} from "lucide-react";

import type { DimensionMenuItem, DimensionMenuSection } from "./dimension-menu";

/**
 * Menu dimensi Risiko & Kepatuhan (/risiko-kepatuhan) — level ENTERPRISE.
 * Berbeda scope dari /people-risk-radar & /risk-compliance (tenaga kerja,
 * sidebar SDM); halaman-halaman di sini cross-link ke sana, bukan duplikasi.
 */
export const RISK_MENU_SECTIONS: DimensionMenuSection[] = [
  {
    items: [{ label: "Executive Overview", icon: LayoutDashboard, href: "/risiko-kepatuhan" }],
  },
  {
    title: "Risk Intelligence",
    items: [
      { label: "Risk Register Korporat", icon: ListChecks, href: "/risiko-kepatuhan/risk-register" },
      { label: "Risk Appetite & Limit", icon: Gauge, href: "/risiko-kepatuhan/risk-appetite" },
      { label: "Risiko Komoditas & Iklim", icon: CloudSun, href: "/risiko-kepatuhan/komoditas-iklim" },
    ],
  },
  {
    title: "Kepatuhan & Audit",
    items: [
      { label: "Kepatuhan Regulasi", icon: Scale, href: "/risiko-kepatuhan/kepatuhan-regulasi" },
      { label: "Audit & Temuan", icon: FileSearch, href: "/risiko-kepatuhan/audit-temuan" },
      { label: "Whistleblowing & Fraud", icon: Megaphone, href: "/risiko-kepatuhan/fraud-wbs" },
    ],
  },
  {
    title: "Mitigasi & Legal",
    items: [
      { label: "Asuransi, Mitigasi & ERM", icon: Shield, href: "/risiko-kepatuhan/mitigasi-erm" },
      { label: "Legal Case Portfolio", icon: Landmark, href: "/risiko-kepatuhan/legal-portfolio" },
    ],
  },
];

/** Daftar datar untuk pencocokan label/href aktif. */
export const RISK_MENU: DimensionMenuItem[] = RISK_MENU_SECTIONS.flatMap((s) => s.items);
