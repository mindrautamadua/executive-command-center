import {
  Briefcase,
  Factory,
  LayoutDashboard,
  Map,
  Recycle,
  ShieldAlert,
  Sprout,
  TrendingUp,
} from "lucide-react";

import type { DimensionMenuItem, DimensionMenuSection } from "./dimension-menu";

/** Menu dimensi Aset & Investasi (/aset-investasi) — dikelompokkan per domain intelijen. */
export const ASET_MENU_SECTIONS: DimensionMenuSection[] = [
  {
    items: [{ label: "Executive Overview", icon: LayoutDashboard, href: "/aset-investasi" }],
  },
  {
    title: "Land Intelligence",
    items: [
      { label: "Land Bank & HGU", icon: Map, href: "/aset-investasi/land-bank" },
      { label: "Sengketa Lahan", icon: ShieldAlert, href: "/aset-investasi/sengketa-lahan" },
    ],
  },
  {
    title: "Asset Performance",
    items: [
      { label: "Fasilitas Produksi", icon: Factory, href: "/aset-investasi/fasilitas-produksi" },
      { label: "Produktivitas Aset", icon: TrendingUp, href: "/aset-investasi/produktivitas-aset" },
      { label: "Replanting & Pemeliharaan", icon: Sprout, href: "/aset-investasi/replanting" },
    ],
  },
  {
    title: "Investment",
    items: [
      { label: "Portofolio Investasi", icon: Briefcase, href: "/aset-investasi/portofolio-investasi" },
      { label: "Optimalisasi Aset", icon: Recycle, href: "/aset-investasi/optimalisasi-aset" },
    ],
  },
];

/** Daftar datar untuk pencocokan label/href aktif. */
export const ASET_MENU: DimensionMenuItem[] = ASET_MENU_SECTIONS.flatMap((s) => s.items);
