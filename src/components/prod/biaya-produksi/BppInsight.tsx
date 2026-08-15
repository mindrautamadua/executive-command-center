import { bppInsights } from "@/lib/biaya-opex-data";
import { ProdInsightGrid } from "../ProdInsightGrid";

export function BppInsight() {
  return <ProdInsightGrid items={bppInsights} cols="grid-cols-3" />;
}
