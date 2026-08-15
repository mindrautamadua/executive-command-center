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
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  /** false = halaman belum dibuat, tombol tidak menavigasi */
  ready: boolean;
}

export const NAV: NavItem[] = [
  { label: "Overview", href: "/", icon: Home, ready: true },
  { label: "Strategi & Kinerja", href: "/strategi-kinerja", icon: LineChart, ready: true },
  { label: "Keuangan", href: "/keuangan", icon: CircleDollarSign, ready: true },
  { label: "SDM & Talenta", href: "/sdm-talenta", icon: Users, ready: true },
  { label: "Produksi & Operasi", href: "/produksi-operasi", icon: Factory, ready: true },
  { label: "Pemasaran & Penjualan", href: "/pemasaran-penjualan", icon: ShoppingBag, ready: true },
  { label: "Aset & Investasi", href: "/aset-investasi", icon: Building2, ready: true },
  { label: "ESG & Sustainability", href: "/esg-sustainability", icon: Leaf, ready: true },
  { label: "Risiko & Kepatuhan", href: "/risiko-kepatuhan", icon: ShieldCheck, ready: true },
];
