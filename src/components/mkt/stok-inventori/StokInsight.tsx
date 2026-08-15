import { stokInsights } from "@/lib/hilir-stok-margin-data";
import { MktInsightGrid } from "../MktInsightGrid";

export function StokInsight() {
  return <MktInsightGrid items={stokInsights} cols="grid-cols-3" />;
}
