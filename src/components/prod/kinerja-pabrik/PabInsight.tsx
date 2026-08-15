import { pabInsights } from "@/lib/pabrik-data";
import { ProdInsightGrid } from "../ProdInsightGrid";

export function PabInsight() {
  return <ProdInsightGrid items={pabInsights} cols="grid-cols-4" />;
}
