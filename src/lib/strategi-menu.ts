import {
  BarChart3,
  FolderKanban,
  Gauge,
  Gem,
  Landmark,
  LayoutDashboard,
  Milestone,
  Rocket,
} from "lucide-react";

import type { DimensionMenuItem, DimensionMenuSection } from "./dimension-menu";

/** Menu dimensi Strategi & Kinerja — rute nested di bawah /strategi-kinerja. */
export const STRATEGI_MENU_SECTIONS: DimensionMenuSection[] = [
  {
    items: [{ label: "Executive Overview", icon: LayoutDashboard, href: "/strategi-kinerja" }],
  },
  {
    title: "Strategy Execution",
    items: [
      {
        label: "Portofolio Inisiatif",
        icon: FolderKanban,
        href: "/strategi-kinerja/portofolio-inisiatif",
      },
      { label: "Program Transformasi", icon: Rocket, href: "/strategi-kinerja/transformasi" },
      { label: "Milestone Tracking", icon: Milestone, href: "/strategi-kinerja/milestone" },
    ],
  },
  {
    title: "Performance Intelligence",
    items: [
      { label: "KPI Korporat & Scorecard", icon: Gauge, href: "/strategi-kinerja/kpi-korporat" },
      { label: "Value Creation", icon: Gem, href: "/strategi-kinerja/value-creation" },
      { label: "Benchmark Industri", icon: BarChart3, href: "/strategi-kinerja/benchmark" },
    ],
  },
  {
    title: "Governance",
    items: [
      {
        label: "Keputusan Direksi & Dekom",
        icon: Landmark,
        href: "/strategi-kinerja/keputusan-bod",
      },
    ],
  },
];

/** Daftar datar untuk pencocokan label/href aktif. */
export const STRATEGI_MENU: DimensionMenuItem[] = STRATEGI_MENU_SECTIONS.flatMap((s) => s.items);
