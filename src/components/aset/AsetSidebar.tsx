"use client";

import { DimensionSidebar } from "@/components/shared/DimensionSidebar";
import { ASET_MENU_SECTIONS } from "@/lib/aset-menu";
import { astDataTrust } from "@/lib/ast-core";

/** Sidebar dimensi Aset & Investasi. */
export function AsetSidebar({ active }: { active?: string }) {
  return (
    <DimensionSidebar
      sections={ASET_MENU_SECTIONS}
      dataTrust={astDataTrust}
      active={active}
      dimensionLabel="Aset & Investasi"
    />
  );
}
