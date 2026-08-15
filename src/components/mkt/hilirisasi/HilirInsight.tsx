import { hilirInsights } from "@/lib/hilir-stok-margin-data";
import { MktInsightGrid } from "../MktInsightGrid";

export function HilirInsight() {
  return <MktInsightGrid items={hilirInsights} cols="grid-cols-3" />;
}
