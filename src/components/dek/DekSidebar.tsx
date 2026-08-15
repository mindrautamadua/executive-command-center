"use client";

import { DimensionSidebar } from "@/components/shared/DimensionSidebar";
import { DEK_MENU_SECTIONS } from "@/lib/dek-menu";
import { dekDataTrust } from "@/lib/dek-data";

/** Sidebar dimensi Dewan Komisaris (organ pengawasan). */
export function DekSidebar({ active }: { active?: string }) {
  return (
    <DimensionSidebar
      sections={DEK_MENU_SECTIONS}
      dataTrust={dekDataTrust}
      active={active}
      dimensionLabel="Dewan Komisaris"
    />
  );
}
