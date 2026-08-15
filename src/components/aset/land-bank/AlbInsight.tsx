import { albInsights } from "@/lib/alb-data";
import { AsetInsightGrid } from "../AsetInsightGrid";

export function AlbInsight() {
  return <AsetInsightGrid items={albInsights} cols="grid-cols-4" />;
}
