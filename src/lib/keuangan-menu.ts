import {
  Banknote,
  ClipboardCheck,
  Landmark,
  Layers,
  LayoutDashboard,
  PieChart,
  Route,
  Scale,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

import type { DimensionMenuItem, DimensionMenuSection } from "./dimension-menu";

/** Menu dimensi Keuangan (/keuangan) — dikelompokkan per domain intelijen. */
export const KEUANGAN_MENU_SECTIONS: DimensionMenuSection[] = [
  {
    items: [{ label: "Executive Overview", icon: LayoutDashboard, href: "/keuangan" }],
  },
  {
    title: "Profitability Intelligence",
    items: [
      { label: "Laba Rugi & EBITDA", icon: TrendingUp, href: "/keuangan/laba-rugi" },
      { label: "Profitabilitas Segmen", icon: PieChart, href: "/keuangan/profitabilitas-segmen" },
      { label: "Struktur Biaya & HPP", icon: Layers, href: "/keuangan/struktur-biaya" },
    ],
  },
  {
    title: "Liquidity & Capital",
    items: [
      { label: "Arus Kas & Likuiditas", icon: Banknote, href: "/keuangan/arus-kas" },
      { label: "Neraca & Leverage", icon: Scale, href: "/keuangan/neraca-leverage" },
      { label: "Capex & Pendanaan", icon: Landmark, href: "/keuangan/capex-pendanaan" },
    ],
  },
  {
    title: "Planning & Control",
    items: [
      { label: "Anggaran vs Realisasi", icon: ClipboardCheck, href: "/keuangan/anggaran-realisasi" },
      { label: "Simulasi Keuangan", icon: Route, href: "/keuangan/simulasi-keuangan" },
    ],
  },
  {
    title: "Risk Intelligence",
    items: [
      { label: "Risiko Keuangan", icon: ShieldAlert, href: "/keuangan/risiko-keuangan" },
    ],
  },
];

/** Daftar datar untuk pencocokan label/href aktif. */
export const KEUANGAN_MENU: DimensionMenuItem[] = KEUANGAN_MENU_SECTIONS.flatMap((s) => s.items);
