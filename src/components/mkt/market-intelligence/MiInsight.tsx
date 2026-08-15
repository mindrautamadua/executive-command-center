import { miInsights } from "@/lib/hilir-stok-margin-data";
import { MktInsightGrid } from "../MktInsightGrid";

export function MiInsight() {
  return <MktInsightGrid items={miInsights} cols="grid-cols-3" />;
}
