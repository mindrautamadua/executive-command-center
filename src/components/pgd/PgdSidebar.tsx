"use client";

import { DimensionSidebar } from "@/components/shared/DimensionSidebar";
import { PGD_MENU_SECTIONS } from "@/lib/pgd-menu";
import { pgdDataTrust } from "@/lib/pgd-data";

/** Sidebar dimensi Pengadaan. */
export function PgdSidebar({ active }: { active?: string }) {
  return (
    <DimensionSidebar
      sections={PGD_MENU_SECTIONS}
      dataTrust={pgdDataTrust}
      active={active}
      dimensionLabel="Pengadaan"
    />
  );
}
