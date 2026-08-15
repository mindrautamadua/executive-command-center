"use client";

import { DimensionSidebar } from "@/components/shared/DimensionSidebar";
import { TIK_MENU_SECTIONS } from "@/lib/tik-menu";
import { tikDataTrust } from "@/lib/tik-data";

/** Sidebar dimensi Teknologi Informasi. */
export function TikSidebar({ active }: { active?: string }) {
  return (
    <DimensionSidebar
      sections={TIK_MENU_SECTIONS}
      dataTrust={tikDataTrust}
      active={active}
      dimensionLabel="Teknologi Informasi"
    />
  );
}
