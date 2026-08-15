import { marginInsights } from "@/lib/hilir-stok-margin-data";
import { MktInsightGrid } from "../MktInsightGrid";

export function MarginInsight() {
  return <MktInsightGrid items={marginInsights} cols="grid-cols-3" />;
}
