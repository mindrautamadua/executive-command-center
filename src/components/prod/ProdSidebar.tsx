"use client";

import { DimensionSidebar } from "@/components/shared/DimensionSidebar";
import { PROD_MENU_SECTIONS } from "@/lib/produksi-menu";
import { prodDataTrust } from "@/lib/produksi-data";

/** Sidebar dimensi Produksi & Operasi. */
export function ProdSidebar({ active }: { active?: string }) {
  return (
    <DimensionSidebar
      sections={PROD_MENU_SECTIONS}
      dataTrust={prodDataTrust}
      active={active}
      dimensionLabel="Produksi & Operasi"
    />
  );
}
