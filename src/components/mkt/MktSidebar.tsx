"use client";

import { DimensionSidebar } from "@/components/shared/DimensionSidebar";
import { MKT_MENU_SECTIONS } from "@/lib/pemasaran-menu";
import { mktDataTrust } from "@/lib/pemasaran-data";

/** Sidebar dimensi Pemasaran & Penjualan. */
export function MktSidebar({ active }: { active?: string }) {
  return (
    <DimensionSidebar
      sections={MKT_MENU_SECTIONS}
      dataTrust={mktDataTrust}
      active={active}
      dimensionLabel="Pemasaran & Penjualan"
    />
  );
}
