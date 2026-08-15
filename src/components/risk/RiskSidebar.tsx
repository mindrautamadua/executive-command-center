"use client";

import { DimensionSidebar } from "@/components/shared/DimensionSidebar";
import { RISK_MENU_SECTIONS } from "@/lib/risk-menu";
import { riskDataTrust } from "@/lib/risk-data";

/** Sidebar dimensi Risiko & Kepatuhan (enterprise). */
export function RiskSidebar({ active }: { active?: string }) {
  return (
    <DimensionSidebar
      sections={RISK_MENU_SECTIONS}
      dataTrust={riskDataTrust}
      active={active}
      dimensionLabel="Risiko & Kepatuhan"
    />
  );
}
