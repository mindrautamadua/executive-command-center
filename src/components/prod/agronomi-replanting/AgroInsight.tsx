"use client";

import { agroInsights } from "@/lib/agro-data";
import { ProdInsightCard } from "../ProdInsightCard";
import { useSubholding } from "@/components/SubholdingProvider";
import { ScopeNote } from "@/components/ui/ScopeNote";

/**
 * Narasi insight ditulis pada level grup (agronomi, iklim, pupuk) sehingga tidak
 * ikut filter subholding — cukup ditandai "Konsolidasi grup".
 */
export function AgroInsight() {
  const { isFiltered } = useSubholding();
  if (!isFiltered) return <ProdInsightCard insights={agroInsights} cols={4} />;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-end">
        <ScopeNote />
      </div>
      <ProdInsightCard insights={agroInsights} cols={4} />
    </div>
  );
}
