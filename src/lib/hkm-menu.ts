import { Building2, FileSignature, Gavel, LayoutDashboard, Stamp } from "lucide-react";

import type { DimensionMenuItem, DimensionMenuSection } from "./dimension-menu";

/**
 * Menu dimensi Hukum & Sekretariat Korporat (/hukum).
 *
 * Fokus dimensi ini adalah KONTRAK, PERIZINAN, dan KORPORASI. Litigasi
 * sengaja ditampilkan ringkas dan menautkan ke Legal Case Portfolio di
 * /risiko-kepatuhan/legal-portfolio agar tidak duplikatif.
 */
export const HKM_MENU_SECTIONS: DimensionMenuSection[] = [
  {
    items: [{ label: "Executive Overview", icon: LayoutDashboard, href: "/hukum" }],
  },
  {
    title: "Kontrak & Perizinan",
    items: [
      { label: "Manajemen Kontrak", icon: FileSignature, href: "/hukum/kontrak" },
      { label: "Perizinan & Lisensi", icon: Stamp, href: "/hukum/perizinan" },
    ],
  },
  {
    title: "Korporasi & Litigasi",
    items: [
      { label: "Korporasi & Anak Usaha", icon: Building2, href: "/hukum/korporasi" },
      { label: "Litigasi & Advokasi", icon: Gavel, href: "/hukum/litigasi" },
    ],
  },
];

/** Daftar datar untuk pencocokan label/href aktif. */
export const HKM_MENU: DimensionMenuItem[] = HKM_MENU_SECTIONS.flatMap((s) => s.items);
