"use client";

import { opexInsights } from "@/lib/biaya-opex-data";
import { useSubholding } from "@/components/SubholdingProvider";
import { ScopeNote } from "@/components/ui/ScopeNote";
import { ProdInsightCard } from "../ProdInsightCard";

export function OpexInsight() {
  // Narasi program OPEX bersifat lintas subholding — angka tidak disaring.
  const { isFiltered } = useSubholding();

  return (
    <div>
      {isFiltered && (
        <div className="mb-1.5 flex justify-end">
          <ScopeNote />
        </div>
      )}
      <ProdInsightCard insights={opexInsights} cols={3} />
    </div>
  );
}
