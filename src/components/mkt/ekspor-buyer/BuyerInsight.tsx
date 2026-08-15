import { buyerInsights } from "@/lib/kontrak-buyer-data";
import { MktInsightGrid } from "../MktInsightGrid";

export function BuyerInsight() {
  return <MktInsightGrid items={buyerInsights} cols="grid-cols-3" />;
}
