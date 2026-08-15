"use client";

import { panenInsights } from "@/lib/agro-data";
import { ProdInsightCard } from "../ProdInsightCard";
import { useSubholding } from "@/components/SubholdingProvider";
import { ScopeNote } from "@/components/ui/ScopeNote";

/**
 * Insight panen & logistik ditulis pada level grup dan tidak dipecah per
 * subholding — cukup ditandai "Konsolidasi grup" saat filter aktif.
 */
export function PanenInsight() {
  const { isFiltered } = useSubholding();
  if (!isFiltered) return <ProdInsightCard insights={panenInsights} cols={3} />;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-end">
        <ScopeNote />
      </div>
      <ProdInsightCard insights={panenInsights} cols={3} />
    </div>
  );
}
