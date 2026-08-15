"use client";

import { DimensionSidebar } from "@/components/shared/DimensionSidebar";
import { HSE_MENU_SECTIONS } from "@/lib/hse-menu";
import { hseDataTrust } from "@/lib/hse-data";

/** Sidebar dimensi K3 & Keamanan. */
export function HseSidebar({ active }: { active?: string }) {
  return (
    <DimensionSidebar
      sections={HSE_MENU_SECTIONS}
      dataTrust={hseDataTrust}
      active={active}
      dimensionLabel="K3 & Keamanan"
    />
  );
}
