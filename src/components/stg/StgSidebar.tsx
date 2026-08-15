"use client";

import { DimensionSidebar } from "@/components/shared/DimensionSidebar";
import { STRATEGI_MENU_SECTIONS } from "@/lib/strategi-menu";
import { stgDataTrust } from "@/lib/stg-core";

/** Sidebar dimensi Strategi & Kinerja. */
export function StgSidebar({ active }: { active?: string }) {
  return (
    <DimensionSidebar
      sections={STRATEGI_MENU_SECTIONS}
      dataTrust={stgDataTrust}
      active={active}
      dimensionLabel="Strategi & Kinerja"
    />
  );
}
