"use client";

import { DimensionSidebar } from "@/components/shared/DimensionSidebar";
import { HKM_MENU_SECTIONS } from "@/lib/hkm-menu";
import { hkmDataTrust } from "@/lib/hkm-data";

/** Sidebar dimensi Hukum. */
export function HkmSidebar({ active }: { active?: string }) {
  return (
    <DimensionSidebar
      sections={HKM_MENU_SECTIONS}
      dataTrust={hkmDataTrust}
      active={active}
      dimensionLabel="Hukum"
    />
  );
}
