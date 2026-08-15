"use client";

import { plasmaInsights } from "@/lib/agro-data";
import { ProdInsightCard } from "../ProdInsightCard";
import { useSubholding } from "@/components/SubholdingProvider";
import { ScopeNote } from "@/components/ui/ScopeNote";

/**
 * Insight plasma & kemitraan ditulis pada level grup dan tidak dipecah per
 * subholding — cukup ditandai "Konsolidasi grup" saat filter aktif.
 */
export function PlasmaInsight() {
  const { isFiltered } = useSubholding();
  if (!isFiltered) return <ProdInsightCard insights={plasmaInsights} cols={3} />;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-end">
        <ScopeNote />
      </div>
      <ProdInsightCard insights={plasmaInsights} cols={3} />
    </div>
  );
}
