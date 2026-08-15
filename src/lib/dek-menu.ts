import {
  CalendarDays,
  ClipboardCheck,
  Gauge,
  LayoutDashboard,
  Stamp,
  Users,
} from "lucide-react";

import type { DimensionMenuItem, DimensionMenuSection } from "./dimension-menu";

/**
 * Menu dimensi Dewan Komisaris (/dewan-komisaris) — organ pengawasan.
 * Berbeda dari dimensi lain yang berbahasa eksekusi (BOD Decision Center),
 * menu ini disusun mengikuti fungsi pengawasan: kegiatan pengawasan
 * (rapat, rekomendasi, komite) lalu evaluasi & kewenangan.
 */
export const DEK_MENU_SECTIONS: DimensionMenuSection[] = [
  {
    items: [
      { label: "Executive Overview", icon: LayoutDashboard, href: "/dewan-komisaris" },
    ],
  },
  {
    title: "Kegiatan Pengawasan",
    items: [
      { label: "Agenda & Risalah Rapat", icon: CalendarDays, href: "/dewan-komisaris/agenda-risalah" },
      { label: "Rekomendasi & Tindak Lanjut", icon: ClipboardCheck, href: "/dewan-komisaris/rekomendasi" },
      { label: "Komite Dewan Komisaris", icon: Users, href: "/dewan-komisaris/komite" },
    ],
  },
  {
    title: "Evaluasi & Kewenangan",
    items: [
      { label: "Evaluasi Kinerja Direksi", icon: Gauge, href: "/dewan-komisaris/evaluasi-direksi" },
      { label: "Persetujuan & Kewenangan", icon: Stamp, href: "/dewan-komisaris/persetujuan" },
    ],
  },
];

/** Daftar datar untuk pencocokan label/href aktif. */
export const DEK_MENU: DimensionMenuItem[] = DEK_MENU_SECTIONS.flatMap((s) => s.items);
