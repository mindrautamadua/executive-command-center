import { stgInsights } from "@/lib/stg-data";
import { StgInsightGrid } from "../StgInsightGrid";

/** Insight & rekomendasi Executive Overview Strategi & Kinerja. */
export function StgInsight() {
  return <StgInsightGrid items={stgInsights} cols="grid-cols-3" />;
}
