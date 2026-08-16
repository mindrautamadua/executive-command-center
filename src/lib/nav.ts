import {
  Home,
  LineChart,
  CircleDollarSign,
  Users,
  Factory,
  ShoppingBag,
  Building2,
  Leaf,
  ShieldCheck,
  MonitorCog,
  PackageSearch,
  Scale,
  HardHat,
  Eye,
  Gavel,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  /** false = halaman belum dibuat, tombol tidak menavigasi */
  ready: boolean;
}

export interface NavSection {
  /** Judul kelompok; kosong = tanpa judul (mis. Overview). */
  title?: string;
  items: NavItem[];
}

/**
 * Menu dimensi dashboard korporat, dikelompokkan per peran dalam rantai nilai
 * agar tetap terbaca setelah jumlah dimensi melewati sepuluh.
 */
export const NAV_SECTIONS: NavSection[] = [
  {
    items: [{ label: "Overview", href: "/", icon: Home, ready: true }],
  },
  {
    title: "Kinerja Korporat",
    items: [
      { label: "Strategi & Kinerja", href: "/strategi-kinerja", icon: LineChart, ready: true },
      { label: "Keuangan", href: "/keuangan", icon: CircleDollarSign, ready: true },
    ],
  },
  {
    title: "Operasi & Rantai Nilai",
    items: [
      { label: "Produksi & Operasi", href: "/produksi-operasi", icon: Factory, ready: true },
      {
        label: "Pemasaran & Penjualan",
        href: "/pemasaran-penjualan",
        icon: ShoppingBag,
        ready: true,
      },
      { label: "Aset & Investasi", href: "/aset-investasi", icon: Building2, ready: true },
      { label: "Pengadaan", href: "/pengadaan", icon: PackageSearch, ready: true },
      { label: "K3 & Keamanan", href: "/k3-keamanan", icon: HardHat, ready: true },
    ],
  },
  {
    title: "Sumber Daya & Enabler",
    items: [
      { label: "SDM & Talenta", href: "/sdm-talenta", icon: Users, ready: true },
      {
        label: "Teknologi Informasi",
        href: "/teknologi-informasi",
        icon: MonitorCog,
        ready: true,
      },
    ],
  },
  {
    title: "Tata Kelola",
    items: [
      { label: "Dewan Komisaris", href: "/dewan-komisaris", icon: Eye, ready: true },
      { label: "Risiko & Kepatuhan", href: "/risiko-kepatuhan", icon: ShieldCheck, ready: true },
      { label: "Hukum", href: "/hukum", icon: Scale, ready: true },
      { label: "ESG & Sustainability", href: "/esg-sustainability", icon: Leaf, ready: true },
    ],
  },
];

/**
 * Menu Mode CEO: tujuh pintu sesuai cara CEO berpikir (keputusan, nilai,
 * risiko, strategi, orang, pasar) — bukan struktur direktorat. Semua item
 * menunjuk halaman yang sudah ada; mode ini hanya mengubah pintu masuknya.
 */
export const CEO_NAV_SECTIONS: NavSection[] = [
  {
    items: [{ label: "Overview", href: "/", icon: Home, ready: true }],
  },
  {
    title: "Mode CEO",
    items: [
      {
        label: "Keputusan",
        href: "/strategi-kinerja/keputusan-bod",
        icon: Gavel,
        ready: true,
      },
      {
        label: "Nilai",
        href: "/strategi-kinerja/value-creation",
        icon: TrendingUp,
        ready: true,
      },
      { label: "Risiko", href: "/risiko-kepatuhan", icon: ShieldCheck, ready: true },
      { label: "Strategi", href: "/strategi-kinerja", icon: LineChart, ready: true },
      { label: "Talenta", href: "/sdm-talenta", icon: Users, ready: true },
      { label: "Pasar", href: "/pemasaran-penjualan", icon: ShoppingBag, ready: true },
    ],
  },
];

/** Daftar datar untuk pencocokan href aktif dan pengecekan `ready`. */
export const NAV: NavItem[] = NAV_SECTIONS.flatMap((s) => s.items);
