import {
  BarChart3,
  FileSignature,
  FlaskConical,
  LayoutDashboard,
  LineChart,
  Percent,
  Radar,
  Ship,
  Warehouse,
} from "lucide-react";
import type { DimensionMenuItem, DimensionMenuSection } from "./dimension-menu";

/**
 * Menu dimensi Pemasaran & Penjualan — seluruh rute nested di bawah
 * /pemasaran-penjualan (root = Executive Overview, selaras nav.ts).
 */
export const MKT_MENU_SECTIONS: DimensionMenuSection[] = [
  {
    items: [
      { label: "Executive Overview", icon: LayoutDashboard, href: "/pemasaran-penjualan" },
    ],
  },
  {
    title: "Market Intelligence",
    items: [
      { label: "Harga & Outlook", icon: LineChart, href: "/pemasaran-penjualan/harga-pasar" },
      {
        label: "Market Intelligence",
        icon: Radar,
        badge: "AI",
        href: "/pemasaran-penjualan/market-intelligence",
      },
    ],
  },
  {
    title: "Penjualan",
    items: [
      { label: "Volume & Nilai", icon: BarChart3, href: "/pemasaran-penjualan/penjualan-komoditas" },
      {
        label: "Kontrak & Komitmen",
        icon: FileSignature,
        href: "/pemasaran-penjualan/kontrak-komitmen",
      },
      { label: "Ekspor & Buyer", icon: Ship, href: "/pemasaran-penjualan/ekspor-buyer" },
      { label: "Stok & Inventori", icon: Warehouse, href: "/pemasaran-penjualan/stok-inventori" },
    ],
  },
  {
    title: "Value Creation",
    items: [
      { label: "Hilirisasi", icon: FlaskConical, href: "/pemasaran-penjualan/hilirisasi" },
      { label: "Margin Komoditas", icon: Percent, href: "/pemasaran-penjualan/margin-komoditas" },
    ],
  },
];

/** Daftar datar untuk pencocokan label/href aktif. */
export const MKT_MENU: DimensionMenuItem[] = MKT_MENU_SECTIONS.flatMap((s) => s.items);
