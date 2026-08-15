"use client";

import { DimensionSidebar } from "@/components/shared/DimensionSidebar";
import { KEUANGAN_MENU_SECTIONS } from "@/lib/keuangan-menu";
import { keuDataTrust } from "@/lib/keu-core";

/** Sidebar dimensi Keuangan. */
export function KeuSidebar({ active }: { active?: string }) {
  return (
    <DimensionSidebar
      sections={KEUANGAN_MENU_SECTIONS}
      dataTrust={keuDataTrust}
      active={active}
      dimensionLabel="Keuangan"
    />
  );
}
