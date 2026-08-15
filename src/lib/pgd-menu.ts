import {
  Boxes,
  FileSignature,
  Gavel,
  LayoutDashboard,
  PieChart,
  ShieldCheck,
  Users,
} from "lucide-react";

import type { DimensionMenuItem, DimensionMenuSection } from "./dimension-menu";

/** Menu dimensi Pengadaan (/pengadaan) — spend, vendor, kontrak, integritas. */
export const PGD_MENU_SECTIONS: DimensionMenuSection[] = [
  {
    items: [{ label: "Executive Overview", icon: LayoutDashboard, href: "/pengadaan" }],
  },
  {
    title: "Spend Intelligence",
    items: [
      { label: "Analitik Belanja", icon: PieChart, href: "/pengadaan/analitik-belanja" },
      { label: "Kategori & Komoditas", icon: Boxes, href: "/pengadaan/kategori-komoditas" },
    ],
  },
  {
    title: "Vendor & Kontrak",
    items: [
      { label: "Manajemen Vendor", icon: Users, href: "/pengadaan/manajemen-vendor" },
      { label: "Kontrak Pengadaan", icon: FileSignature, href: "/pengadaan/kontrak" },
    ],
  },
  {
    title: "Eksekusi & Integritas",
    items: [
      { label: "Proses & Tender", icon: Gavel, href: "/pengadaan/proses-tender" },
      { label: "TKDN & Integritas", icon: ShieldCheck, href: "/pengadaan/tkdn-integritas" },
    ],
  },
];

/** Daftar datar untuk pencocokan label/href aktif. */
export const PGD_MENU: DimensionMenuItem[] = PGD_MENU_SECTIONS.flatMap((s) => s.items);
