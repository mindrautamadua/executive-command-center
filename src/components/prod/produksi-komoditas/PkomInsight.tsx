import { prodInsights } from "@/lib/produksi-data";
import { ProdInsightGrid } from "../ProdInsightGrid";

export function PkomInsight() {
  return <ProdInsightGrid items={prodInsights} cols="grid-cols-4" />;
}
