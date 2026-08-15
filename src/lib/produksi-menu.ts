import {
  Calculator,
  Factory,
  Handshake,
  LandPlot,
  LayoutDashboard,
  Rocket,
  Shovel,
  Sprout,
  Truck,
} from "lucide-react";

import type { DimensionMenuItem, DimensionMenuSection } from "./dimension-menu";

/** Menu dimensi Produksi & Operasi (/produksi-operasi) — per domain intelijen. */
export const PROD_MENU_SECTIONS: DimensionMenuSection[] = [
  {
    items: [{ label: "Executive Overview", icon: LayoutDashboard, href: "/produksi-operasi" }],
  },
  {
    title: "Production Intelligence",
    items: [
      { label: "Produksi Komoditas", icon: Sprout, href: "/produksi-operasi/produksi-komoditas" },
      { label: "Kinerja Pabrik", icon: Factory, href: "/produksi-operasi/kinerja-pabrik" },
      { label: "Produktivitas Kebun", icon: LandPlot, href: "/produksi-operasi/produktivitas-kebun", owner: "palmco" },
      { label: "Biaya Produksi", icon: Calculator, href: "/produksi-operasi/biaya-produksi", owner: "palmco" },
    ],
  },
  {
    title: "Agronomi & Kemitraan",
    items: [
      { label: "Agronomi & Replanting", icon: Shovel, href: "/produksi-operasi/agronomi-replanting", owner: "palmco" },
      { label: "Plasma & Kemitraan", icon: Handshake, href: "/produksi-operasi/plasma-kemitraan", owner: "palmco" },
      { label: "Panen & Logistik", icon: Truck, href: "/produksi-operasi/panen-logistik", owner: "palmco" },
    ],
  },
  {
    title: "Transformasi",
    items: [
      {
        label: "Operational Excellence",
        icon: Rocket,
        badge: "OPEX",
        href: "/produksi-operasi/operational-excellence",
      },
    ],
  },
];

/** Daftar datar untuk pencocokan label/href aktif. */
export const PROD_MENU: DimensionMenuItem[] = PROD_MENU_SECTIONS.flatMap((s) => s.items);
