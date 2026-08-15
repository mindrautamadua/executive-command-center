import {
  Database,
  LayoutDashboard,
  Rocket,
  Server,
  ShieldAlert,
  Wallet,
} from "lucide-react";

import type { DimensionMenuItem, DimensionMenuSection } from "./dimension-menu";

/**
 * Menu dimensi Teknologi Informasi (/teknologi-informasi).
 * Prefix "tik" dipakai di seluruh dimensi ini karena src/components/ti/
 * sudah dipakai modul Talent Intelligence (SDM).
 */
export const TIK_MENU_SECTIONS: DimensionMenuSection[] = [
  {
    items: [
      { label: "Executive Overview", icon: LayoutDashboard, href: "/teknologi-informasi" },
    ],
  },
  {
    title: "Keamanan & Kepatuhan",
    items: [
      {
        label: "Keamanan Siber & PDP",
        icon: ShieldAlert,
        badge: "PDP",
        href: "/teknologi-informasi/keamanan-siber",
      },
    ],
  },
  {
    title: "Delivery & Portofolio",
    items: [
      { label: "Program & Delivery Digital", icon: Rocket, href: "/teknologi-informasi/program-digital" },
      {
        label: "Portofolio Aplikasi & Infrastruktur",
        icon: Server,
        href: "/teknologi-informasi/portofolio-aplikasi",
      },
    ],
  },
  {
    title: "Nilai & Tata Kelola",
    items: [
      { label: "Belanja & Nilai TI", icon: Wallet, href: "/teknologi-informasi/belanja-nilai" },
      {
        label: "Data & AI Governance",
        icon: Database,
        badge: "AI",
        href: "/teknologi-informasi/data-ai-governance",
      },
    ],
  },
];

/** Daftar datar untuk pencocokan label/href aktif. */
export const TIK_MENU: DimensionMenuItem[] = TIK_MENU_SECTIONS.flatMap((s) => s.items);
