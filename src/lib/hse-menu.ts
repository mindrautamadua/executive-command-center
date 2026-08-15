import {
  ClipboardCheck,
  Flame,
  HardHat,
  LayoutDashboard,
  ShieldHalf,
} from "lucide-react";

import type { DimensionMenuItem, DimensionMenuSection } from "./dimension-menu";

/**
 * Menu dimensi K3 & Keamanan (/k3-keamanan) — keselamatan kerja, kedaruratan
 * kebakaran lahan, dan pengamanan aset/kebun.
 *
 * Scope sengaja dibatasi pada kinerja HSE operasional. Kepatuhan K3 dalam
 * lingkup hukum ketenagakerjaan ada di /risk-compliance (rc-data.ts), insiden
 * lingkungan & PROPER di /esg-sustainability/lingkungan-hayati, dan register
 * risiko enterprise di /risiko-kepatuhan/risk-register.
 */
export const HSE_MENU_SECTIONS: DimensionMenuSection[] = [
  {
    items: [
      { label: "Executive Overview", icon: LayoutDashboard, href: "/k3-keamanan" },
    ],
  },
  {
    title: "Keselamatan Kerja",
    items: [
      { label: "Kinerja K3", icon: HardHat, href: "/k3-keamanan/kinerja-k3" },
      { label: "Budaya & Kepatuhan K3", icon: ClipboardCheck, href: "/k3-keamanan/budaya-kepatuhan" },
    ],
  },
  {
    title: "Kedaruratan & Keamanan",
    items: [
      { label: "Kebakaran Lahan & Tanggap Darurat", icon: Flame, href: "/k3-keamanan/karhutla" },
      { label: "Keamanan Aset & Kebun", icon: ShieldHalf, href: "/k3-keamanan/keamanan-aset" },
    ],
  },
];

/** Daftar datar untuk pencocokan label/href aktif. */
export const HSE_MENU: DimensionMenuItem[] = HSE_MENU_SECTIONS.flatMap((s) => s.items);
