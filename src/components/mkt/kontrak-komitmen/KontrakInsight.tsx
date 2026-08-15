import { kontrakInsights } from "@/lib/kontrak-buyer-data";
import { MktInsightGrid } from "../MktInsightGrid";

export function KontrakInsight() {
  return <MktInsightGrid items={kontrakInsights} cols="grid-cols-3" />;
}
