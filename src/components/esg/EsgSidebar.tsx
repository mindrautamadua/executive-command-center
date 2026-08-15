"use client";

import { DimensionSidebar } from "@/components/shared/DimensionSidebar";
import { ESG_MENU_SECTIONS } from "@/lib/esg-menu";
import { esgDataTrust } from "@/lib/esg-data";

/** Sidebar dimensi ESG & Sustainability. */
export function EsgSidebar({ active }: { active?: string }) {
  return (
    <DimensionSidebar
      sections={ESG_MENU_SECTIONS}
      dataTrust={esgDataTrust}
      active={active}
      dimensionLabel="ESG & Sustainability"
    />
  );
}
