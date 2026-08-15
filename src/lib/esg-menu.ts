import {
  Award,
  BadgeCheck,
  CloudFog,
  Droplets,
  HeartHandshake,
  LayoutDashboard,
  TreePine,
  Zap,
} from "lucide-react";

import type { DimensionMenuItem, DimensionMenuSection } from "./dimension-menu";

/** Menu dimensi ESG & Sustainability (/esg-sustainability) — per pilar E-S-G. */
export const ESG_MENU_SECTIONS: DimensionMenuSection[] = [
  {
    items: [
      { label: "Executive Overview", icon: LayoutDashboard, href: "/esg-sustainability" },
    ],
  },
  {
    title: "Lingkungan",
    items: [
      { label: "Sertifikasi Berkelanjutan", icon: BadgeCheck, href: "/esg-sustainability/sertifikasi" },
      { label: "Emisi & Jejak Karbon", icon: CloudFog, href: "/esg-sustainability/emisi-karbon" },
      { label: "Program Dekarbonisasi", icon: Zap, href: "/esg-sustainability/dekarbonisasi" },
      { label: "Deforestasi & EUDR", icon: TreePine, badge: "EU", href: "/esg-sustainability/deforestasi-eudr" },
      { label: "Air, Limbah & Biodiversitas", icon: Droplets, href: "/esg-sustainability/lingkungan-hayati" },
    ],
  },
  {
    title: "Sosial",
    items: [
      { label: "Sosial & Plasma", icon: HeartHandshake, href: "/esg-sustainability/sosial-plasma", owner: "palmco" },
    ],
  },
  {
    title: "Tata Kelola",
    items: [
      { label: "Rating & Sustainable Finance", icon: Award, href: "/esg-sustainability/rating-pendanaan" },
    ],
  },
];

/** Daftar datar untuk pencocokan label/href aktif. */
export const ESG_MENU: DimensionMenuItem[] = ESG_MENU_SECTIONS.flatMap((s) => s.items);
